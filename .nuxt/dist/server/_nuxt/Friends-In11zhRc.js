import { defineComponent, computed, ref, resolveComponent, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { HeartIcon, UsersIcon, TrashIcon } from "vue-tabler-icons";
import { _ as _sfc_main$1 } from "./ProfileBanner-D9Oehoy_.js";
import { u as useFrinedsStore } from "./friends-BnR5n084.js";
import { _ as _export_sfc } from "../server.mjs";
import "#internal/nuxt/paths";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Friends",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useFrinedsStore();
    const getfriends = computed(() => {
      return store.friends;
    });
    const searchValue = ref("");
    ref([
      { title: "Favorite", icon: HeartIcon },
      { title: "Edit Friend List", icon: UsersIcon },
      { title: "Remove", icon: TrashIcon }
    ]);
    ref({ title: "Social Profile" });
    const filteredCards = computed(() => {
      return getfriends.value.filter((card) => {
        return card.name.toLowerCase().includes(searchValue.value.toLowerCase());
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_BrandFacebookIcon = resolveComponent("BrandFacebookIcon");
      const _component_BrandInstagramIcon = resolveComponent("BrandInstagramIcon");
      const _component_BrandGithubIcon = resolveComponent("BrandGithubIcon");
      const _component_BrandTwitterIcon = resolveComponent("BrandTwitterIcon");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(_component_v_row, { class: "justify-content-end mt-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-sm-flex align-center mb-5" data-v-dd8b6912${_scopeId2}><h3 class="text-h3 font-weight-semibold" data-v-dd8b6912${_scopeId2}> Friends `);
                  _push3(ssrRenderComponent(_component_v_chip, {
                    size: "x-small",
                    class: "ml-2 elevation-0",
                    variant: "elevated",
                    color: "secondary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(filteredCards.value.length)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(filteredCards.value.length), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</h3>`);
                  _push3(ssrRenderComponent(_component_v_sheet, {
                    width: "250",
                    class: "ml-0 ml-sm-auto mt-3 mt-sm-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_text_field, {
                          color: "primary",
                          "hide-details": "",
                          variant: "outlined",
                          placeholder: "Search Friends",
                          density: "compact",
                          "prepend-inner-icon": "mdi-magnify",
                          modelValue: searchValue.value,
                          "onUpdate:modelValue": ($event) => searchValue.value = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_text_field, {
                            color: "primary",
                            "hide-details": "",
                            variant: "outlined",
                            placeholder: "Search Friends",
                            density: "compact",
                            "prepend-inner-icon": "mdi-magnify",
                            modelValue: searchValue.value,
                            "onUpdate:modelValue": ($event) => searchValue.value = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(filteredCards.value, (card, i) => {
                          _push4(ssrRenderComponent(_component_v_col, {
                            cols: "12",
                            md: "4",
                            sm: "6",
                            key: i
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_card, {
                                  elevation: "10",
                                  class: "card-hover"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_card_item, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_avatar, { size: "80" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<img${ssrRenderAttr("src", card.avatar)}${ssrRenderAttr("alt", card.avatar)} width="80" data-v-dd8b6912${_scopeId7}>`);
                                                } else {
                                                  return [
                                                    createVNode("img", {
                                                      src: card.avatar,
                                                      alt: card.avatar,
                                                      width: "80"
                                                    }, null, 8, ["src", "alt"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`<h4 class="text-h5 font-weight-semibold mt-3" data-v-dd8b6912${_scopeId6}>${ssrInterpolate(card.name)}</h4><span class="text-truncate d-block gap-2 text-subtitle-2 font-weight-medium" data-v-dd8b6912${_scopeId6}>${ssrInterpolate(card.role)}</span>`);
                                          } else {
                                            return [
                                              createVNode(_component_v_avatar, { size: "80" }, {
                                                default: withCtx(() => [
                                                  createVNode("img", {
                                                    src: card.avatar,
                                                    alt: card.avatar,
                                                    width: "80"
                                                  }, null, 8, ["src", "alt"])
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode("h4", { class: "text-h5 font-weight-semibold mt-3" }, toDisplayString(card.name), 1),
                                              createVNode("span", { class: "text-truncate d-block gap-2 text-subtitle-2 font-weight-medium" }, toDisplayString(card.role), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_v_divider, null, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_v_sheet, { class: "bg-lightprimary px-4 py-2 d-flex align-center justify-center gap-2" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_btn, {
                                              color: "primary",
                                              icon: "",
                                              variant: "text",
                                              size: "x-small"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_BrandFacebookIcon, { size: "16" }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_BrandFacebookIcon, { size: "16" })
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_v_btn, {
                                              color: "error",
                                              icon: "",
                                              variant: "text",
                                              size: "x-small"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_BrandInstagramIcon, { size: "16" }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_BrandInstagramIcon, { size: "16" })
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_v_btn, {
                                              color: "info",
                                              icon: "",
                                              variant: "text",
                                              size: "x-small"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_BrandGithubIcon, { size: "16" }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_BrandGithubIcon, { size: "16" })
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_v_btn, {
                                              color: "secondary",
                                              icon: "",
                                              variant: "text",
                                              size: "x-small"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_BrandTwitterIcon, { size: "16" }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_BrandTwitterIcon, { size: "16" })
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_btn, {
                                                color: "primary",
                                                icon: "",
                                                variant: "text",
                                                size: "x-small"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_BrandFacebookIcon, { size: "16" })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_btn, {
                                                color: "error",
                                                icon: "",
                                                variant: "text",
                                                size: "x-small"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_BrandInstagramIcon, { size: "16" })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_btn, {
                                                color: "info",
                                                icon: "",
                                                variant: "text",
                                                size: "x-small"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_BrandGithubIcon, { size: "16" })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_btn, {
                                                color: "secondary",
                                                icon: "",
                                                variant: "text",
                                                size: "x-small"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_BrandTwitterIcon, { size: "16" })
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_card_item, { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_avatar, { size: "80" }, {
                                              default: withCtx(() => [
                                                createVNode("img", {
                                                  src: card.avatar,
                                                  alt: card.avatar,
                                                  width: "80"
                                                }, null, 8, ["src", "alt"])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode("h4", { class: "text-h5 font-weight-semibold mt-3" }, toDisplayString(card.name), 1),
                                            createVNode("span", { class: "text-truncate d-block gap-2 text-subtitle-2 font-weight-medium" }, toDisplayString(card.role), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_v_divider),
                                        createVNode(_component_v_sheet, { class: "bg-lightprimary px-4 py-2 d-flex align-center justify-center gap-2" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_btn, {
                                              color: "primary",
                                              icon: "",
                                              variant: "text",
                                              size: "x-small"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_BrandFacebookIcon, { size: "16" })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_btn, {
                                              color: "error",
                                              icon: "",
                                              variant: "text",
                                              size: "x-small"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_BrandInstagramIcon, { size: "16" })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_btn, {
                                              color: "info",
                                              icon: "",
                                              variant: "text",
                                              size: "x-small"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_BrandGithubIcon, { size: "16" })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_btn, {
                                              color: "secondary",
                                              icon: "",
                                              variant: "text",
                                              size: "x-small"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_BrandTwitterIcon, { size: "16" })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_card, {
                                    elevation: "10",
                                    class: "card-hover"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card_item, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_avatar, { size: "80" }, {
                                            default: withCtx(() => [
                                              createVNode("img", {
                                                src: card.avatar,
                                                alt: card.avatar,
                                                width: "80"
                                              }, null, 8, ["src", "alt"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode("h4", { class: "text-h5 font-weight-semibold mt-3" }, toDisplayString(card.name), 1),
                                          createVNode("span", { class: "text-truncate d-block gap-2 text-subtitle-2 font-weight-medium" }, toDisplayString(card.role), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_v_divider),
                                      createVNode(_component_v_sheet, { class: "bg-lightprimary px-4 py-2 d-flex align-center justify-center gap-2" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_btn, {
                                            color: "primary",
                                            icon: "",
                                            variant: "text",
                                            size: "x-small"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_BrandFacebookIcon, { size: "16" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_btn, {
                                            color: "error",
                                            icon: "",
                                            variant: "text",
                                            size: "x-small"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_BrandInstagramIcon, { size: "16" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_btn, {
                                            color: "info",
                                            icon: "",
                                            variant: "text",
                                            size: "x-small"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_BrandGithubIcon, { size: "16" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_btn, {
                                            color: "secondary",
                                            icon: "",
                                            variant: "text",
                                            size: "x-small"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_BrandTwitterIcon, { size: "16" })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(filteredCards.value, (card, i) => {
                            return openBlock(), createBlock(_component_v_col, {
                              cols: "12",
                              md: "4",
                              sm: "6",
                              key: i
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card, {
                                  elevation: "10",
                                  class: "card-hover"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card_item, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_avatar, { size: "80" }, {
                                          default: withCtx(() => [
                                            createVNode("img", {
                                              src: card.avatar,
                                              alt: card.avatar,
                                              width: "80"
                                            }, null, 8, ["src", "alt"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode("h4", { class: "text-h5 font-weight-semibold mt-3" }, toDisplayString(card.name), 1),
                                        createVNode("span", { class: "text-truncate d-block gap-2 text-subtitle-2 font-weight-medium" }, toDisplayString(card.role), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_v_divider),
                                    createVNode(_component_v_sheet, { class: "bg-lightprimary px-4 py-2 d-flex align-center justify-center gap-2" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_btn, {
                                          color: "primary",
                                          icon: "",
                                          variant: "text",
                                          size: "x-small"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_BrandFacebookIcon, { size: "16" })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_btn, {
                                          color: "error",
                                          icon: "",
                                          variant: "text",
                                          size: "x-small"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_BrandInstagramIcon, { size: "16" })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_btn, {
                                          color: "info",
                                          icon: "",
                                          variant: "text",
                                          size: "x-small"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_BrandGithubIcon, { size: "16" })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_btn, {
                                          color: "secondary",
                                          icon: "",
                                          variant: "text",
                                          size: "x-small"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_BrandTwitterIcon, { size: "16" })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "d-sm-flex align-center mb-5" }, [
                      createVNode("h3", { class: "text-h3 font-weight-semibold" }, [
                        createTextVNode(" Friends "),
                        createVNode(_component_v_chip, {
                          size: "x-small",
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
                            placeholder: "Search Friends",
                            density: "compact",
                            "prepend-inner-icon": "mdi-magnify",
                            modelValue: searchValue.value,
                            "onUpdate:modelValue": ($event) => searchValue.value = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(filteredCards.value, (card, i) => {
                          return openBlock(), createBlock(_component_v_col, {
                            cols: "12",
                            md: "4",
                            sm: "6",
                            key: i
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, {
                                elevation: "10",
                                class: "card-hover"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card_item, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_avatar, { size: "80" }, {
                                        default: withCtx(() => [
                                          createVNode("img", {
                                            src: card.avatar,
                                            alt: card.avatar,
                                            width: "80"
                                          }, null, 8, ["src", "alt"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode("h4", { class: "text-h5 font-weight-semibold mt-3" }, toDisplayString(card.name), 1),
                                      createVNode("span", { class: "text-truncate d-block gap-2 text-subtitle-2 font-weight-medium" }, toDisplayString(card.role), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_v_divider),
                                  createVNode(_component_v_sheet, { class: "bg-lightprimary px-4 py-2 d-flex align-center justify-center gap-2" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_btn, {
                                        color: "primary",
                                        icon: "",
                                        variant: "text",
                                        size: "x-small"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_BrandFacebookIcon, { size: "16" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_btn, {
                                        color: "error",
                                        icon: "",
                                        variant: "text",
                                        size: "x-small"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_BrandInstagramIcon, { size: "16" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_btn, {
                                        color: "info",
                                        icon: "",
                                        variant: "text",
                                        size: "x-small"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_BrandGithubIcon, { size: "16" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_btn, {
                                        color: "secondary",
                                        icon: "",
                                        variant: "text",
                                        size: "x-small"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_BrandTwitterIcon, { size: "16" })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 2
                              }, 1024)
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
                  createVNode("div", { class: "d-sm-flex align-center mb-5" }, [
                    createVNode("h3", { class: "text-h3 font-weight-semibold" }, [
                      createTextVNode(" Friends "),
                      createVNode(_component_v_chip, {
                        size: "x-small",
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
                          placeholder: "Search Friends",
                          density: "compact",
                          "prepend-inner-icon": "mdi-magnify",
                          modelValue: searchValue.value,
                          "onUpdate:modelValue": ($event) => searchValue.value = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(filteredCards.value, (card, i) => {
                        return openBlock(), createBlock(_component_v_col, {
                          cols: "12",
                          md: "4",
                          sm: "6",
                          key: i
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, {
                              elevation: "10",
                              class: "card-hover"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card_item, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_avatar, { size: "80" }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: card.avatar,
                                          alt: card.avatar,
                                          width: "80"
                                        }, null, 8, ["src", "alt"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("h4", { class: "text-h5 font-weight-semibold mt-3" }, toDisplayString(card.name), 1),
                                    createVNode("span", { class: "text-truncate d-block gap-2 text-subtitle-2 font-weight-medium" }, toDisplayString(card.role), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_v_divider),
                                createVNode(_component_v_sheet, { class: "bg-lightprimary px-4 py-2 d-flex align-center justify-center gap-2" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_btn, {
                                      color: "primary",
                                      icon: "",
                                      variant: "text",
                                      size: "x-small"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_BrandFacebookIcon, { size: "16" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_btn, {
                                      color: "error",
                                      icon: "",
                                      variant: "text",
                                      size: "x-small"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_BrandInstagramIcon, { size: "16" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_btn, {
                                      color: "info",
                                      icon: "",
                                      variant: "text",
                                      size: "x-small"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_BrandGithubIcon, { size: "16" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_btn, {
                                      color: "secondary",
                                      icon: "",
                                      variant: "text",
                                      size: "x-small"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_BrandTwitterIcon, { size: "16" })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 2
                            }, 1024)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/apps/userprofile/two/Friends.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Friends = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dd8b6912"]]);
export {
  Friends as default
};
//# sourceMappingURL=Friends-In11zhRc.js.map
