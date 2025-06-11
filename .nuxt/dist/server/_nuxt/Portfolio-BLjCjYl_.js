import { defineComponent, computed, ref, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$3 } from "./TextBannerCard-D4T5bcr7.js";
import { _ as _sfc_main$2 } from "./Layout-pJxOOMlF.js";
import { u as useGalleryStore } from "./gallery-DT_0CU6z.js";
import { t as image1, v as image2, w as img6, x as proimg1, y as proimg2, z as img9, A as img10, s as img11, X as img12, Y as img13, B as proimg4, Z as img15 } from "../server.mjs";
import { _ as _sfc_main$4 } from "./PurchaseTemplate-D9pvsFKX.js";
import "hookable";
import "vue-router";
import "vue-tabler-icons";
import "#internal/nuxt/paths";
import "./Logo-DggZ73XB.js";
import "./nuxt-link-DZ3wFR7I.js";
import "ufo";
import "./customizer-CM6PVnj3.js";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "defu";
import "@vue/devtools-api";
import "destr";
import "klona";
import "vue3-perfect-scrollbar";
import "maska";
import "axios-mock-adapter";
import "axios";
import "chance";
import "date-fns";
import "lodash";
import "vue-draggable-next";
import "vue3-easy-data-table";
import "vue-easy-lightbox";
import "vue-scrollto";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "GalleryBox",
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
    const visibleRef = ref(false);
    const indexRef = ref(0);
    const imgs = [
      image1,
      image2,
      img6,
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
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_vue_easy_lightbox = resolveComponent("vue-easy-lightbox");
      _push(ssrRenderComponent(_component_v_container, mergeProps({ class: "max-width-1218 portfolio pb-16" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, { class: "justify-content-end mt-5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-sm-flex align-center mb-5"${_scopeId3}><h3 class="text-h3"${_scopeId3}> Portfolio `);
                        _push4(ssrRenderComponent(_component_v_chip, {
                          size: "small",
                          class: "ml-2 elevation-0",
                          variant: "elevated",
                          color: "secondary"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(filteredCards.value.length)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(filteredCards.value.length), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</h3>`);
                        _push4(ssrRenderComponent(_component_v_sheet, {
                          width: "250",
                          class: "ml-0 ml-sm-auto mt-3 mt-sm-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                color: "primary",
                                "hide-details": "",
                                variant: "outlined",
                                placeholder: "Search Gallery",
                                density: "compact",
                                "prepend-inner-icon": "mdi-magnify",
                                modelValue: searchValue.value,
                                "onUpdate:modelValue": ($event) => searchValue.value = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  "hide-details": "",
                                  variant: "outlined",
                                  placeholder: "Search Gallery",
                                  density: "compact",
                                  "prepend-inner-icon": "mdi-magnify",
                                  modelValue: searchValue.value,
                                  "onUpdate:modelValue": ($event) => searchValue.value = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-sm-flex align-center mb-5" }, [
                            createVNode("h3", { class: "text-h3" }, [
                              createTextVNode(" Portfolio "),
                              createVNode(_component_v_chip, {
                                size: "small",
                                class: "ml-2 elevation-0",
                                variant: "elevated",
                                color: "secondary"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(filteredCards.value.length), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode(_component_v_sheet, {
                              width: "250",
                              class: "ml-0 ml-sm-auto mt-3 mt-sm-0"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  "hide-details": "",
                                  variant: "outlined",
                                  placeholder: "Search Gallery",
                                  density: "compact",
                                  "prepend-inner-icon": "mdi-magnify",
                                  modelValue: searchValue.value,
                                  "onUpdate:modelValue": ($event) => searchValue.value = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(filteredCards.value, (card, index) => {
                                _push5(ssrRenderComponent(_component_v_col, {
                                  cols: "12",
                                  md: "4",
                                  sm: "6",
                                  key: index
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_card, {
                                        elevation: "10",
                                        class: "card-hover overflow-hidden",
                                        onClick: () => showImg(index)
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_avatar, {
                                              size: "220",
                                              class: "rounded-0 w-100"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<img${ssrRenderAttr("src", card.image)} alt="gallery" width="450"${_scopeId7}>`);
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
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_v_card_text, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<div class="d-flex align-center gap-3"${_scopeId7}><div${_scopeId7}><h6 class="text-h6 mb-1"${_scopeId7}>${ssrInterpolate(card.title)}</h6><span class="d-block text-truncate d-flex align-center gap-2 textSecondary"${_scopeId7}>${ssrInterpolate(card.dateTime)}</span></div></div>`);
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
                                            }, _parent7, _scopeId6));
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
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_vue_easy_lightbox, {
                                        visible: visibleRef.value,
                                        moveDisabled: moveDisabled.value,
                                        imgs,
                                        index: indexRef.value,
                                        onHide
                                      }, null, _parent6, _scopeId5));
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
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
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
                        }, _parent4, _scopeId3));
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-sm-flex align-center mb-5" }, [
                          createVNode("h3", { class: "text-h3" }, [
                            createTextVNode(" Portfolio "),
                            createVNode(_component_v_chip, {
                              size: "small",
                              class: "ml-2 elevation-0",
                              variant: "elevated",
                              color: "secondary"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(filteredCards.value.length), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode(_component_v_sheet, {
                            width: "250",
                            class: "ml-0 ml-sm-auto mt-3 mt-sm-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                "hide-details": "",
                                variant: "outlined",
                                placeholder: "Search Gallery",
                                density: "compact",
                                "prepend-inner-icon": "mdi-magnify",
                                modelValue: searchValue.value,
                                "onUpdate:modelValue": ($event) => searchValue.value = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }),
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_row, { class: "justify-content-end mt-5" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-sm-flex align-center mb-5" }, [
                        createVNode("h3", { class: "text-h3" }, [
                          createTextVNode(" Portfolio "),
                          createVNode(_component_v_chip, {
                            size: "small",
                            class: "ml-2 elevation-0",
                            variant: "elevated",
                            color: "secondary"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(filteredCards.value.length), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(_component_v_sheet, {
                          width: "250",
                          class: "ml-0 ml-sm-auto mt-3 mt-sm-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              "hide-details": "",
                              variant: "outlined",
                              placeholder: "Search Gallery",
                              density: "compact",
                              "prepend-inner-icon": "mdi-magnify",
                              modelValue: searchValue.value,
                              "onUpdate:modelValue": ($event) => searchValue.value = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/frontpages/Portfolio/GalleryBox.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, {
              title: "Explore Our Latest Works",
              caption: "Portfolio"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$3, {
                title: "Explore Our Latest Works",
                caption: "Portfolio"
              }),
              createVNode(_sfc_main$1),
              createVNode(_sfc_main$4)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/front-pages/Portfolio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Portfolio-BLjCjYl_.js.map
