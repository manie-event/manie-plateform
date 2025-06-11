import { defineComponent, ref, resolveComponent, withCtx, createTextVNode, createVNode, unref, resolveDynamicComponent, createBlock, openBlock, toDisplayString, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderVNode } from "vue/server-renderer";
import { CheckIcon, XIcon } from "vue-tabler-icons";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _sfc_main$1 } from "./BaseBreadcrumb-DAIjkUfv.js";
const img1 = publicAssetsURL("/images/backgrounds/silver-pot.svg");
const img2 = publicAssetsURL("/images/backgrounds/bronze-pot.svg");
const img3 = publicAssetsURL("/images/backgrounds/gold-pot.svg");
const pricing = [
  {
    tagtext: false,
    caption: "Silver",
    image: img1,
    free: true,
    price: 10.99,
    yearlyprice: 10.99 * 12,
    buttontext: "Choose Silver",
    list: [
      {
        icon: CheckIcon,
        iconcolor: "primary",
        listtitle: "3 Members",
        status: false
      },
      {
        icon: CheckIcon,
        iconcolor: "primary",
        listtitle: "Single Device",
        status: false
      },
      {
        icon: XIcon,
        iconcolor: "inputBorder",
        listtitle: "50GB Storage",
        status: true
      },
      {
        icon: XIcon,
        iconcolor: "inputBorder",
        listtitle: "Monthly Backups",
        status: true
      },
      {
        icon: XIcon,
        iconcolor: "inputBorder",
        listtitle: "Permissions & workflows",
        status: true
      }
    ]
  },
  {
    tagtext: true,
    caption: "bronze",
    image: img2,
    free: false,
    price: 4.99,
    yearlyprice: 4.99 * 12,
    buttontext: "Choose Bronze",
    list: [
      {
        icon: CheckIcon,
        iconcolor: "primary",
        listtitle: "5 Members",
        status: false
      },
      {
        icon: CheckIcon,
        iconcolor: "primary",
        listtitle: "Multiple Device",
        status: false
      },
      {
        icon: CheckIcon,
        iconcolor: "primary",
        listtitle: "80GB Storage",
        status: false
      },
      {
        icon: XIcon,
        iconcolor: "inputBorder",
        listtitle: "Monthly Backups",
        status: true
      },
      {
        icon: XIcon,
        iconcolor: "inputBorder",
        listtitle: "Permissions & workflows",
        status: true
      }
    ]
  },
  {
    tagtext: false,
    caption: "gold",
    image: img3,
    free: false,
    price: 9.99,
    yearlyprice: 9.99 * 12,
    buttontext: "Choose Gold",
    list: [
      {
        icon: CheckIcon,
        iconcolor: "primary",
        listtitle: "5 Members",
        status: false
      },
      {
        icon: CheckIcon,
        iconcolor: "primary",
        listtitle: "Single Device",
        status: false
      },
      {
        icon: CheckIcon,
        iconcolor: "primary",
        listtitle: "120GB Storage",
        status: false
      },
      {
        icon: CheckIcon,
        iconcolor: "primary",
        listtitle: "Monthly Backups",
        status: false
      },
      {
        icon: CheckIcon,
        iconcolor: "primary",
        listtitle: "Permissions & workflows",
        status: false
      }
    ]
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Pricing" });
    const breadcrumbs = ref([
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Pricing",
        disabled: true,
        href: "#"
      }
    ]);
    const priceplan = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_label = resolveComponent("v-label");
      const _component_v_switch = resolveComponent("v-switch");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: page.value.title,
        breadcrumbs: breadcrumbs.value
      }, null, _parent));
      _push(`<h2 class="text-h2 font-weight-bold text-center pt-10"> Flexible Plans Tailored to Fit Your<br> Community&#39;s Unique Needs! </h2>`);
      _push(ssrRenderComponent(_component_v_row, { class: "justify-center mt-1 mb-sm-10 mb-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, { cols: "auto" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex justify-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_label, { class: "text-subtitle-1 font-weight-medium" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Monthly`);
                      } else {
                        return [
                          createTextVNode("Monthly")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_switch, {
                    color: "primary",
                    "hide-details": "",
                    modelValue: priceplan.value,
                    "onUpdate:modelValue": ($event) => priceplan.value = $event,
                    class: "mx-4"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_label, { class: "text-subtitle-1 font-weight-medium" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Yearly`);
                      } else {
                        return [
                          createTextVNode("Yearly")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex justify-center" }, [
                      createVNode(_component_v_label, { class: "text-subtitle-1 font-weight-medium" }, {
                        default: withCtx(() => [
                          createTextVNode("Monthly")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_switch, {
                        color: "primary",
                        "hide-details": "",
                        modelValue: priceplan.value,
                        "onUpdate:modelValue": ($event) => priceplan.value = $event,
                        class: "mx-4"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_v_label, { class: "text-subtitle-1 font-weight-medium" }, {
                        default: withCtx(() => [
                          createTextVNode("Yearly")
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
              createVNode(_component_v_col, { cols: "auto" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex justify-center" }, [
                    createVNode(_component_v_label, { class: "text-subtitle-1 font-weight-medium" }, {
                      default: withCtx(() => [
                        createTextVNode("Monthly")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_switch, {
                      color: "primary",
                      "hide-details": "",
                      modelValue: priceplan.value,
                      "onUpdate:modelValue": ($event) => priceplan.value = $event,
                      class: "mx-4"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_v_label, { class: "text-subtitle-1 font-weight-medium" }, {
                      default: withCtx(() => [
                        createTextVNode("Yearly")
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
      _push(ssrRenderComponent(_component_v_row, { class: "d-flex justify-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(pricing), (card) => {
              _push2(ssrRenderComponent(_component_v_col, {
                cols: "12",
                md: "4",
                sm: "6",
                key: card.caption
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_card, {
                      elevation: "10",
                      class: "pa-sm-8 pa-4"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="d-flex justify-space-between"${_scopeId3}><h4 class="text-body-2 text-grey100 font-weight-semibold text-uppercase mb-6"${_scopeId3}>${ssrInterpolate(card.caption)}</h4>`);
                          if (card.tagtext) {
                            _push4(ssrRenderComponent(_component_v_chip, {
                              size: "small",
                              class: "mt-sm-n4 font-weight-bold",
                              color: "warning"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`POPULAR`);
                                } else {
                                  return [
                                    createTextVNode("POPULAR")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div><img${ssrRenderAttr("src", card.image)} height="70" alt="icon"${_scopeId3}>`);
                          if (card.free) {
                            _push4(`<div class="d-flex align-center mt-4"${_scopeId3}><h2 class="display-1"${_scopeId3}>Free</h2></div>`);
                          } else {
                            _push4(`<div class="d-flex align-center mt-4"${_scopeId3}><sup class="text-h6 mt-n3 pr-2"${_scopeId3}>$</sup>`);
                            if (priceplan.value) {
                              _push4(`<h2 class="display-1"${_scopeId3}>${ssrInterpolate(card.yearlyprice)}</h2>`);
                            } else {
                              _push4(`<h2 class="display-1"${_scopeId3}>${ssrInterpolate(card.price)}</h2>`);
                            }
                            if (priceplan.value) {
                              _push4(`<span class="text-medium-emphasis font-weight-medium mt-4 ml-2"${_scopeId3}>/yr</span>`);
                            } else {
                              _push4(`<span class="text-medium-emphasis font-weight-medium mt-4 ml-2"${_scopeId3}>/mo</span>`);
                            }
                            _push4(`</div>`);
                          }
                          _push4(ssrRenderComponent(_component_v_list, { class: "mb-0 pl-0 bg-transparent pt-5" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(card.list, (desc) => {
                                  _push5(ssrRenderComponent(_component_v_list_item, {
                                    class: "px-0",
                                    key: desc.listtitle
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        if (desc.status) {
                                          _push6(ssrRenderComponent(_component_v_list_item_title, { class: "text-body-1 d-flex align-center font-weight-medium text-medium-emphasis" }, {
                                            default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                ssrRenderVNode(_push7, createVNode(resolveDynamicComponent(desc.icon), {
                                                  class: ["text-" + desc.iconcolor, "mr-4"],
                                                  "stroke-width": "2",
                                                  size: "18"
                                                }, null), _parent7, _scopeId6);
                                                _push7(` ${ssrInterpolate(desc.listtitle)}`);
                                              } else {
                                                return [
                                                  (openBlock(), createBlock(resolveDynamicComponent(desc.icon), {
                                                    class: ["text-" + desc.iconcolor, "mr-4"],
                                                    "stroke-width": "2",
                                                    size: "18"
                                                  }, null, 8, ["class"])),
                                                  createTextVNode(" " + toDisplayString(desc.listtitle), 1)
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                        } else {
                                          _push6(ssrRenderComponent(_component_v_list_item_title, { class: "text-body-1 d-flex align-center font-weight-medium" }, {
                                            default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                ssrRenderVNode(_push7, createVNode(resolveDynamicComponent(desc.icon), {
                                                  class: ["text-" + desc.iconcolor, "mr-4"],
                                                  "stroke-width": "2",
                                                  size: "18"
                                                }, null), _parent7, _scopeId6);
                                                _push7(` ${ssrInterpolate(desc.listtitle)}`);
                                              } else {
                                                return [
                                                  (openBlock(), createBlock(resolveDynamicComponent(desc.icon), {
                                                    class: ["text-" + desc.iconcolor, "mr-4"],
                                                    "stroke-width": "2",
                                                    size: "18"
                                                  }, null, 8, ["class"])),
                                                  createTextVNode(" " + toDisplayString(desc.listtitle), 1)
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                        }
                                      } else {
                                        return [
                                          desc.status ? (openBlock(), createBlock(_component_v_list_item_title, {
                                            key: 0,
                                            class: "text-body-1 d-flex align-center font-weight-medium text-medium-emphasis"
                                          }, {
                                            default: withCtx(() => [
                                              (openBlock(), createBlock(resolveDynamicComponent(desc.icon), {
                                                class: ["text-" + desc.iconcolor, "mr-4"],
                                                "stroke-width": "2",
                                                size: "18"
                                              }, null, 8, ["class"])),
                                              createTextVNode(" " + toDisplayString(desc.listtitle), 1)
                                            ]),
                                            _: 2
                                          }, 1024)) : (openBlock(), createBlock(_component_v_list_item_title, {
                                            key: 1,
                                            class: "text-body-1 d-flex align-center font-weight-medium"
                                          }, {
                                            default: withCtx(() => [
                                              (openBlock(), createBlock(resolveDynamicComponent(desc.icon), {
                                                class: ["text-" + desc.iconcolor, "mr-4"],
                                                "stroke-width": "2",
                                                size: "18"
                                              }, null, 8, ["class"])),
                                              createTextVNode(" " + toDisplayString(desc.listtitle), 1)
                                            ]),
                                            _: 2
                                          }, 1024))
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(card.list, (desc) => {
                                    return openBlock(), createBlock(_component_v_list_item, {
                                      class: "px-0",
                                      key: desc.listtitle
                                    }, {
                                      default: withCtx(() => [
                                        desc.status ? (openBlock(), createBlock(_component_v_list_item_title, {
                                          key: 0,
                                          class: "text-body-1 d-flex align-center font-weight-medium text-medium-emphasis"
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(resolveDynamicComponent(desc.icon), {
                                              class: ["text-" + desc.iconcolor, "mr-4"],
                                              "stroke-width": "2",
                                              size: "18"
                                            }, null, 8, ["class"])),
                                            createTextVNode(" " + toDisplayString(desc.listtitle), 1)
                                          ]),
                                          _: 2
                                        }, 1024)) : (openBlock(), createBlock(_component_v_list_item_title, {
                                          key: 1,
                                          class: "text-body-1 d-flex align-center font-weight-medium"
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(resolveDynamicComponent(desc.icon), {
                                              class: ["text-" + desc.iconcolor, "mr-4"],
                                              "stroke-width": "2",
                                              size: "18"
                                            }, null, 8, ["class"])),
                                            createTextVNode(" " + toDisplayString(desc.listtitle), 1)
                                          ]),
                                          _: 2
                                        }, 1024))
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_v_btn, {
                            color: "primary",
                            size: "large",
                            class: "mt-6",
                            rounded: "pill",
                            block: ""
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(card.buttontext)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(card.buttontext), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode("div", { class: "d-flex justify-space-between" }, [
                              createVNode("h4", {
                                class: "text-body-2 text-grey100 font-weight-semibold text-uppercase mb-6",
                                textContent: toDisplayString(card.caption)
                              }, null, 8, ["textContent"]),
                              card.tagtext ? (openBlock(), createBlock(_component_v_chip, {
                                key: 0,
                                size: "small",
                                class: "mt-sm-n4 font-weight-bold",
                                color: "warning"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("POPULAR")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            createVNode("img", {
                              src: card.image,
                              height: "70",
                              alt: "icon"
                            }, null, 8, ["src"]),
                            card.free ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "d-flex align-center mt-4"
                            }, [
                              createVNode("h2", { class: "display-1" }, "Free")
                            ])) : (openBlock(), createBlock("div", {
                              key: 1,
                              class: "d-flex align-center mt-4"
                            }, [
                              createVNode("sup", { class: "text-h6 mt-n3 pr-2" }, "$"),
                              priceplan.value ? (openBlock(), createBlock("h2", {
                                key: 0,
                                class: "display-1"
                              }, toDisplayString(card.yearlyprice), 1)) : (openBlock(), createBlock("h2", {
                                key: 1,
                                class: "display-1"
                              }, toDisplayString(card.price), 1)),
                              priceplan.value ? (openBlock(), createBlock("span", {
                                key: 2,
                                class: "text-medium-emphasis font-weight-medium mt-4 ml-2"
                              }, "/yr")) : (openBlock(), createBlock("span", {
                                key: 3,
                                class: "text-medium-emphasis font-weight-medium mt-4 ml-2"
                              }, "/mo"))
                            ])),
                            createVNode(_component_v_list, { class: "mb-0 pl-0 bg-transparent pt-5" }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(card.list, (desc) => {
                                  return openBlock(), createBlock(_component_v_list_item, {
                                    class: "px-0",
                                    key: desc.listtitle
                                  }, {
                                    default: withCtx(() => [
                                      desc.status ? (openBlock(), createBlock(_component_v_list_item_title, {
                                        key: 0,
                                        class: "text-body-1 d-flex align-center font-weight-medium text-medium-emphasis"
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(resolveDynamicComponent(desc.icon), {
                                            class: ["text-" + desc.iconcolor, "mr-4"],
                                            "stroke-width": "2",
                                            size: "18"
                                          }, null, 8, ["class"])),
                                          createTextVNode(" " + toDisplayString(desc.listtitle), 1)
                                        ]),
                                        _: 2
                                      }, 1024)) : (openBlock(), createBlock(_component_v_list_item_title, {
                                        key: 1,
                                        class: "text-body-1 d-flex align-center font-weight-medium"
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(resolveDynamicComponent(desc.icon), {
                                            class: ["text-" + desc.iconcolor, "mr-4"],
                                            "stroke-width": "2",
                                            size: "18"
                                          }, null, 8, ["class"])),
                                          createTextVNode(" " + toDisplayString(desc.listtitle), 1)
                                        ]),
                                        _: 2
                                      }, 1024))
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_v_btn, {
                              color: "primary",
                              size: "large",
                              class: "mt-6",
                              rounded: "pill",
                              block: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(card.buttontext), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_card, {
                        elevation: "10",
                        class: "pa-sm-8 pa-4"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex justify-space-between" }, [
                            createVNode("h4", {
                              class: "text-body-2 text-grey100 font-weight-semibold text-uppercase mb-6",
                              textContent: toDisplayString(card.caption)
                            }, null, 8, ["textContent"]),
                            card.tagtext ? (openBlock(), createBlock(_component_v_chip, {
                              key: 0,
                              size: "small",
                              class: "mt-sm-n4 font-weight-bold",
                              color: "warning"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("POPULAR")
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          createVNode("img", {
                            src: card.image,
                            height: "70",
                            alt: "icon"
                          }, null, 8, ["src"]),
                          card.free ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "d-flex align-center mt-4"
                          }, [
                            createVNode("h2", { class: "display-1" }, "Free")
                          ])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "d-flex align-center mt-4"
                          }, [
                            createVNode("sup", { class: "text-h6 mt-n3 pr-2" }, "$"),
                            priceplan.value ? (openBlock(), createBlock("h2", {
                              key: 0,
                              class: "display-1"
                            }, toDisplayString(card.yearlyprice), 1)) : (openBlock(), createBlock("h2", {
                              key: 1,
                              class: "display-1"
                            }, toDisplayString(card.price), 1)),
                            priceplan.value ? (openBlock(), createBlock("span", {
                              key: 2,
                              class: "text-medium-emphasis font-weight-medium mt-4 ml-2"
                            }, "/yr")) : (openBlock(), createBlock("span", {
                              key: 3,
                              class: "text-medium-emphasis font-weight-medium mt-4 ml-2"
                            }, "/mo"))
                          ])),
                          createVNode(_component_v_list, { class: "mb-0 pl-0 bg-transparent pt-5" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(card.list, (desc) => {
                                return openBlock(), createBlock(_component_v_list_item, {
                                  class: "px-0",
                                  key: desc.listtitle
                                }, {
                                  default: withCtx(() => [
                                    desc.status ? (openBlock(), createBlock(_component_v_list_item_title, {
                                      key: 0,
                                      class: "text-body-1 d-flex align-center font-weight-medium text-medium-emphasis"
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(resolveDynamicComponent(desc.icon), {
                                          class: ["text-" + desc.iconcolor, "mr-4"],
                                          "stroke-width": "2",
                                          size: "18"
                                        }, null, 8, ["class"])),
                                        createTextVNode(" " + toDisplayString(desc.listtitle), 1)
                                      ]),
                                      _: 2
                                    }, 1024)) : (openBlock(), createBlock(_component_v_list_item_title, {
                                      key: 1,
                                      class: "text-body-1 d-flex align-center font-weight-medium"
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(resolveDynamicComponent(desc.icon), {
                                          class: ["text-" + desc.iconcolor, "mr-4"],
                                          "stroke-width": "2",
                                          size: "18"
                                        }, null, 8, ["class"])),
                                        createTextVNode(" " + toDisplayString(desc.listtitle), 1)
                                      ]),
                                      _: 2
                                    }, 1024))
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_v_btn, {
                            color: "primary",
                            size: "large",
                            class: "mt-6",
                            rounded: "pill",
                            block: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(card.buttontext), 1)
                            ]),
                            _: 2
                          }, 1024)
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(pricing), (card) => {
                return openBlock(), createBlock(_component_v_col, {
                  cols: "12",
                  md: "4",
                  sm: "6",
                  key: card.caption
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_card, {
                      elevation: "10",
                      class: "pa-sm-8 pa-4"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex justify-space-between" }, [
                          createVNode("h4", {
                            class: "text-body-2 text-grey100 font-weight-semibold text-uppercase mb-6",
                            textContent: toDisplayString(card.caption)
                          }, null, 8, ["textContent"]),
                          card.tagtext ? (openBlock(), createBlock(_component_v_chip, {
                            key: 0,
                            size: "small",
                            class: "mt-sm-n4 font-weight-bold",
                            color: "warning"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("POPULAR")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        createVNode("img", {
                          src: card.image,
                          height: "70",
                          alt: "icon"
                        }, null, 8, ["src"]),
                        card.free ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "d-flex align-center mt-4"
                        }, [
                          createVNode("h2", { class: "display-1" }, "Free")
                        ])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "d-flex align-center mt-4"
                        }, [
                          createVNode("sup", { class: "text-h6 mt-n3 pr-2" }, "$"),
                          priceplan.value ? (openBlock(), createBlock("h2", {
                            key: 0,
                            class: "display-1"
                          }, toDisplayString(card.yearlyprice), 1)) : (openBlock(), createBlock("h2", {
                            key: 1,
                            class: "display-1"
                          }, toDisplayString(card.price), 1)),
                          priceplan.value ? (openBlock(), createBlock("span", {
                            key: 2,
                            class: "text-medium-emphasis font-weight-medium mt-4 ml-2"
                          }, "/yr")) : (openBlock(), createBlock("span", {
                            key: 3,
                            class: "text-medium-emphasis font-weight-medium mt-4 ml-2"
                          }, "/mo"))
                        ])),
                        createVNode(_component_v_list, { class: "mb-0 pl-0 bg-transparent pt-5" }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(card.list, (desc) => {
                              return openBlock(), createBlock(_component_v_list_item, {
                                class: "px-0",
                                key: desc.listtitle
                              }, {
                                default: withCtx(() => [
                                  desc.status ? (openBlock(), createBlock(_component_v_list_item_title, {
                                    key: 0,
                                    class: "text-body-1 d-flex align-center font-weight-medium text-medium-emphasis"
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(resolveDynamicComponent(desc.icon), {
                                        class: ["text-" + desc.iconcolor, "mr-4"],
                                        "stroke-width": "2",
                                        size: "18"
                                      }, null, 8, ["class"])),
                                      createTextVNode(" " + toDisplayString(desc.listtitle), 1)
                                    ]),
                                    _: 2
                                  }, 1024)) : (openBlock(), createBlock(_component_v_list_item_title, {
                                    key: 1,
                                    class: "text-body-1 d-flex align-center font-weight-medium"
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(resolveDynamicComponent(desc.icon), {
                                        class: ["text-" + desc.iconcolor, "mr-4"],
                                        "stroke-width": "2",
                                        size: "18"
                                      }, null, 8, ["class"])),
                                      createTextVNode(" " + toDisplayString(desc.listtitle), 1)
                                    ]),
                                    _: 2
                                  }, 1024))
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_btn, {
                          color: "primary",
                          size: "large",
                          class: "mt-6",
                          rounded: "pill",
                          block: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(card.buttontext), 1)
                          ]),
                          _: 2
                        }, 1024)
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/theme-pages/pricing/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DcHeqFum.js.map
