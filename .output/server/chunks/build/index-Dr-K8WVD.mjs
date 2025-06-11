import { defineComponent, resolveComponent, withCtx, createVNode, computed, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _sfc_main$3 } from './ProfileBanner-D9Oehoy_.mjs';
import { _ as _export_sfc, d as defineStore, a as axiosServices } from './server.mjs';
import { A as AddPost, _ as _sfc_main$1$1 } from './AddPost-Cw6NC1C1.mjs';
import 'vue-tabler-icons';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
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
import 'lodash/uniqueId.js';

const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_item = resolveComponent("v-card-item");
  const _component_BriefcaseIcon = resolveComponent("BriefcaseIcon");
  const _component_MailIcon = resolveComponent("MailIcon");
  const _component_DeviceDesktopIcon = resolveComponent("DeviceDesktopIcon");
  const _component_MapPinIcon = resolveComponent("MapPinIcon");
  _push(ssrRenderComponent(_component_v_row, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_card, {
                elevation: "10",
                class: "bg-surface"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_card_item, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<h4 class="text-h4"${_scopeId4}>Introduction</h4><p class="my-5 text-subtitle-1 lh-md"${_scopeId4}> Hello, I am Mike Nielsen. I love making websites and graphics. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p><div class="d-flex gap-3 mb-5"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_BriefcaseIcon, { size: "21" }, null, _parent5, _scopeId4));
                          _push5(`<span class="text-h6"${_scopeId4}>Sir, P P Institute Of Science</span></div><div class="d-flex gap-3 mb-5"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_MailIcon, { size: "21" }, null, _parent5, _scopeId4));
                          _push5(`<span class="text-h6"${_scopeId4}>xyzjonathan@gmail.com</span></div><div class="d-flex gap-3 mb-5"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_DeviceDesktopIcon, { size: "21" }, null, _parent5, _scopeId4));
                          _push5(`<span class="text-h6"${_scopeId4}>www.xyz.com</span></div><div class="d-flex gap-3 mb-5"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_MapPinIcon, { size: "21" }, null, _parent5, _scopeId4));
                          _push5(`<span class="text-h6"${_scopeId4}>Newyork, USA - 100001</span></div>`);
                        } else {
                          return [
                            createVNode("h4", { class: "text-h4" }, "Introduction"),
                            createVNode("p", { class: "my-5 text-subtitle-1 lh-md" }, " Hello, I am Mike Nielsen. I love making websites and graphics. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "),
                            createVNode("div", { class: "d-flex gap-3 mb-5" }, [
                              createVNode(_component_BriefcaseIcon, { size: "21" }),
                              createVNode("span", { class: "text-h6" }, "Sir, P P Institute Of Science")
                            ]),
                            createVNode("div", { class: "d-flex gap-3 mb-5" }, [
                              createVNode(_component_MailIcon, { size: "21" }),
                              createVNode("span", { class: "text-h6" }, "xyzjonathan@gmail.com")
                            ]),
                            createVNode("div", { class: "d-flex gap-3 mb-5" }, [
                              createVNode(_component_DeviceDesktopIcon, { size: "21" }),
                              createVNode("span", { class: "text-h6" }, "www.xyz.com")
                            ]),
                            createVNode("div", { class: "d-flex gap-3 mb-5" }, [
                              createVNode(_component_MapPinIcon, { size: "21" }),
                              createVNode("span", { class: "text-h6" }, "Newyork, USA - 100001")
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_card_item, null, {
                        default: withCtx(() => [
                          createVNode("h4", { class: "text-h4" }, "Introduction"),
                          createVNode("p", { class: "my-5 text-subtitle-1 lh-md" }, " Hello, I am Mike Nielsen. I love making websites and graphics. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "),
                          createVNode("div", { class: "d-flex gap-3 mb-5" }, [
                            createVNode(_component_BriefcaseIcon, { size: "21" }),
                            createVNode("span", { class: "text-h6" }, "Sir, P P Institute Of Science")
                          ]),
                          createVNode("div", { class: "d-flex gap-3 mb-5" }, [
                            createVNode(_component_MailIcon, { size: "21" }),
                            createVNode("span", { class: "text-h6" }, "xyzjonathan@gmail.com")
                          ]),
                          createVNode("div", { class: "d-flex gap-3 mb-5" }, [
                            createVNode(_component_DeviceDesktopIcon, { size: "21" }),
                            createVNode("span", { class: "text-h6" }, "www.xyz.com")
                          ]),
                          createVNode("div", { class: "d-flex gap-3 mb-5" }, [
                            createVNode(_component_MapPinIcon, { size: "21" }),
                            createVNode("span", { class: "text-h6" }, "Newyork, USA - 100001")
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
                createVNode(_component_v_card, {
                  elevation: "10",
                  class: "bg-surface"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_card_item, null, {
                      default: withCtx(() => [
                        createVNode("h4", { class: "text-h4" }, "Introduction"),
                        createVNode("p", { class: "my-5 text-subtitle-1 lh-md" }, " Hello, I am Mike Nielsen. I love making websites and graphics. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "),
                        createVNode("div", { class: "d-flex gap-3 mb-5" }, [
                          createVNode(_component_BriefcaseIcon, { size: "21" }),
                          createVNode("span", { class: "text-h6" }, "Sir, P P Institute Of Science")
                        ]),
                        createVNode("div", { class: "d-flex gap-3 mb-5" }, [
                          createVNode(_component_MailIcon, { size: "21" }),
                          createVNode("span", { class: "text-h6" }, "xyzjonathan@gmail.com")
                        ]),
                        createVNode("div", { class: "d-flex gap-3 mb-5" }, [
                          createVNode(_component_DeviceDesktopIcon, { size: "21" }),
                          createVNode("span", { class: "text-h6" }, "www.xyz.com")
                        ]),
                        createVNode("div", { class: "d-flex gap-3 mb-5" }, [
                          createVNode(_component_MapPinIcon, { size: "21" }),
                          createVNode("span", { class: "text-h6" }, "Newyork, USA - 100001")
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
          createVNode(_component_v_col, { cols: "12" }, {
            default: withCtx(() => [
              createVNode(_component_v_card, {
                elevation: "10",
                class: "bg-surface"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_card_item, null, {
                    default: withCtx(() => [
                      createVNode("h4", { class: "text-h4" }, "Introduction"),
                      createVNode("p", { class: "my-5 text-subtitle-1 lh-md" }, " Hello, I am Mike Nielsen. I love making websites and graphics. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "),
                      createVNode("div", { class: "d-flex gap-3 mb-5" }, [
                        createVNode(_component_BriefcaseIcon, { size: "21" }),
                        createVNode("span", { class: "text-h6" }, "Sir, P P Institute Of Science")
                      ]),
                      createVNode("div", { class: "d-flex gap-3 mb-5" }, [
                        createVNode(_component_MailIcon, { size: "21" }),
                        createVNode("span", { class: "text-h6" }, "xyzjonathan@gmail.com")
                      ]),
                      createVNode("div", { class: "d-flex gap-3 mb-5" }, [
                        createVNode(_component_DeviceDesktopIcon, { size: "21" }),
                        createVNode("span", { class: "text-h6" }, "www.xyz.com")
                      ]),
                      createVNode("div", { class: "d-flex gap-3 mb-5" }, [
                        createVNode(_component_MapPinIcon, { size: "21" }),
                        createVNode("span", { class: "text-h6" }, "Newyork, USA - 100001")
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
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/user-profile/IntroCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const IntroCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const usePhotosStore = defineStore({
  id: "Photos",
  state: () => ({
    photos: []
  }),
  getters: {},
  actions: {
    // Fetch followers from action
    async fetchPhotos() {
      try {
        const response = await axiosServices.get("/api/photos");
        this.photos = response.data.photos;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    }
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PhotosCard",
  __ssrInlineRender: true,
  setup(__props) {
    const store = usePhotosStore();
    const getPhotos = computed(() => {
      return store.photos;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      _push(ssrRenderComponent(_component_v_row, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, {
                    elevation: "10",
                    class: "bg-surface"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h4 class="text-h4 mb-4"${_scopeId4}>Photos</h4>`);
                              _push5(ssrRenderComponent(_component_v_row, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(getPhotos.value, (item) => {
                                      _push6(ssrRenderComponent(_component_v_col, {
                                        cols: "4",
                                        key: item.id
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<img${ssrRenderAttr("src", item.avatar)}${ssrRenderAttr("alt", item.avatar)} class="w-100 rounded-md"${_scopeId6}>`);
                                          } else {
                                            return [
                                              createVNode("img", {
                                                src: item.avatar,
                                                alt: item.avatar,
                                                class: "w-100 rounded-md"
                                              }, null, 8, ["src", "alt"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(getPhotos.value, (item) => {
                                        return openBlock(), createBlock(_component_v_col, {
                                          cols: "4",
                                          key: item.id
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("img", {
                                              src: item.avatar,
                                              alt: item.avatar,
                                              class: "w-100 rounded-md"
                                            }, null, 8, ["src", "alt"])
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("h4", { class: "text-h4 mb-4" }, "Photos"),
                                createVNode(_component_v_row, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(getPhotos.value, (item) => {
                                      return openBlock(), createBlock(_component_v_col, {
                                        cols: "4",
                                        key: item.id
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("img", {
                                            src: item.avatar,
                                            alt: item.avatar,
                                            class: "w-100 rounded-md"
                                          }, null, 8, ["src", "alt"])
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card_item, null, {
                            default: withCtx(() => [
                              createVNode("h4", { class: "text-h4 mb-4" }, "Photos"),
                              createVNode(_component_v_row, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(getPhotos.value, (item) => {
                                    return openBlock(), createBlock(_component_v_col, {
                                      cols: "4",
                                      key: item.id
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: item.avatar,
                                          alt: item.avatar,
                                          class: "w-100 rounded-md"
                                        }, null, 8, ["src", "alt"])
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_card, {
                      elevation: "10",
                      class: "bg-surface"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_item, null, {
                          default: withCtx(() => [
                            createVNode("h4", { class: "text-h4 mb-4" }, "Photos"),
                            createVNode(_component_v_row, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(getPhotos.value, (item) => {
                                  return openBlock(), createBlock(_component_v_col, {
                                    cols: "4",
                                    key: item.id
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: item.avatar,
                                        alt: item.avatar,
                                        class: "w-100 rounded-md"
                                      }, null, 8, ["src", "alt"])
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
                  createVNode(_component_v_card, {
                    elevation: "10",
                    class: "bg-surface"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_item, null, {
                        default: withCtx(() => [
                          createVNode("h4", { class: "text-h4 mb-4" }, "Photos"),
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(getPhotos.value, (item) => {
                                return openBlock(), createBlock(_component_v_col, {
                                  cols: "4",
                                  key: item.id
                                }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: item.avatar,
                                      alt: item.avatar,
                                      class: "w-100 rounded-md"
                                    }, null, 8, ["src", "alt"])
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
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/user-profile/PhotosCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(_component_v_row, { class: "mt-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              lg: "4",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(IntroCard, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$1, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(IntroCard),
                    createVNode(_sfc_main$1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              lg: "8",
              md: "8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(AddPost, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$1$1, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(AddPost),
                    createVNode(_sfc_main$1$1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_col, {
                cols: "12",
                lg: "4",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(IntroCard),
                  createVNode(_sfc_main$1)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                lg: "8",
                md: "8"
              }, {
                default: withCtx(() => [
                  createVNode(AddPost),
                  createVNode(_sfc_main$1$1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/apps/userprofile/two/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Dr-K8WVD.mjs.map
