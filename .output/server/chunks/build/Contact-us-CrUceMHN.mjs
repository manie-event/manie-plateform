import { defineComponent, withCtx, createVNode, ref, resolveComponent, mergeProps, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';
import { _ as _sfc_main$5 } from './PurchaseTemplate-D9pvsFKX.mjs';
import { _ as _sfc_main$4 } from './TextBannerCard-D4T5bcr7.mjs';
import { _ as _sfc_main$3 } from './Layout-pJxOOMlF.mjs';
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
import './Logo-DggZ73XB.mjs';
import './nuxt-link-DZ3wFR7I.mjs';
import './customizer-CM6PVnj3.mjs';

const _imports_0 = publicAssetsURL("/images/front-pages/background/contact-icon.png");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ContactForm",
  __ssrInlineRender: true,
  setup(__props) {
    const select = ref("General Enquiry");
    const items = ref(["General Enquiry", "option 2", "option 3", "option 4"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_label = resolveComponent("v-label");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_textarea = resolveComponent("v-textarea");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-3 bg-background pb-14" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_container, { class: "max-width-1218" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    lg: "4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="bg-primary rounded-lg pa-7 position-relative overflow-hidden mt-md-0 mt-6 position-relative"${_scopeId3}><img${ssrRenderAttr("src", _imports_0)} class="position-absolute end-0 top-0 rtlImg"${_scopeId3}><h4 class="text-18 font-weight-bold mb-4"${_scopeId3}>Reach Out Today</h4><p class="text-16 font-weight-regular position-relative z-1"${_scopeId3}> Have questions or need assistance? We&#39;re just a message away. </p>`);
                        _push4(ssrRenderComponent(_component_v_divider, { class: "my-10 opacity-20" }, null, _parent4, _scopeId3));
                        _push4(`<h4 class="text-18 font-weight-bold mb-4"${_scopeId3}>Our Location</h4><p class="text-16 font-weight-regular"${_scopeId3}> Visit us in person or find our contact details to connect with us directly. </p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "bg-primary rounded-lg pa-7 position-relative overflow-hidden mt-md-0 mt-6 position-relative" }, [
                            createVNode("img", {
                              src: _imports_0,
                              class: "position-absolute end-0 top-0 rtlImg"
                            }),
                            createVNode("h4", { class: "text-18 font-weight-bold mb-4" }, "Reach Out Today"),
                            createVNode("p", { class: "text-16 font-weight-regular position-relative z-1" }, " Have questions or need assistance? We're just a message away. "),
                            createVNode(_component_v_divider, { class: "my-10 opacity-20" }),
                            createVNode("h4", { class: "text-18 font-weight-bold mb-4" }, "Our Location"),
                            createVNode("p", { class: "text-16 font-weight-regular" }, " Visit us in person or find our contact details to connect with us directly. ")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    lg: "8"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card, { elevation: "10" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card_item, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_row, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`First Name *`);
                                                    } else {
                                                      return [
                                                        createTextVNode("First Name *")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  "hide-details": "",
                                                  variant: "outlined",
                                                  placeholder: "Name",
                                                  color: "primary"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("First Name *")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_text_field, {
                                                    "hide-details": "",
                                                    variant: "outlined",
                                                    placeholder: "Name",
                                                    color: "primary"
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Last Name *`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Last Name *")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  "hide-details": "",
                                                  variant: "outlined",
                                                  placeholder: "Last Name",
                                                  color: "primary"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Last Name *")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_text_field, {
                                                    "hide-details": "",
                                                    variant: "outlined",
                                                    placeholder: "Last Name",
                                                    color: "primary"
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Phone Number *`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Phone Number *")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  "hide-details": "",
                                                  variant: "outlined",
                                                  placeholder: "xxx xxx xxxx",
                                                  color: "primary"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Phone Number *")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_text_field, {
                                                    "hide-details": "",
                                                    variant: "outlined",
                                                    placeholder: "xxx xxx xxxx",
                                                    color: "primary"
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Email *`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Email *")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  "hide-details": "",
                                                  variant: "outlined",
                                                  placeholder: "Email address ",
                                                  color: "primary"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Email *")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_text_field, {
                                                    "hide-details": "",
                                                    variant: "outlined",
                                                    placeholder: "Email address ",
                                                    color: "primary"
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Enquire related to *`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Enquire related to *")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_select, {
                                                  modelValue: select.value,
                                                  "onUpdate:modelValue": ($event) => select.value = $event,
                                                  items: items.value,
                                                  "item-title": "state",
                                                  "item-value": "abbr",
                                                  label: "Select",
                                                  "return-object": "",
                                                  "single-line": "",
                                                  variant: "outlined",
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Enquire related to *")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_select, {
                                                    modelValue: select.value,
                                                    "onUpdate:modelValue": ($event) => select.value = $event,
                                                    items: items.value,
                                                    "item-title": "state",
                                                    "item-value": "abbr",
                                                    label: "Select",
                                                    "return-object": "",
                                                    "single-line": "",
                                                    variant: "outlined",
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Message`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Message")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_textarea, {
                                                  label: "Write your message here...",
                                                  variant: "outlined",
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Message")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_textarea, {
                                                    label: "Write your message here...",
                                                    variant: "outlined",
                                                    "hide-details": ""
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            class: "text-md-end"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_btn, {
                                                  color: "primary",
                                                  class: "px-5",
                                                  rounded: "pill",
                                                  size: "large",
                                                  flat: "",
                                                  href: "",
                                                  target: "_blank"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Send Message`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Send Message")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_btn, {
                                                    color: "primary",
                                                    class: "px-5",
                                                    rounded: "pill",
                                                    size: "large",
                                                    flat: "",
                                                    href: "",
                                                    target: "_blank"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Send Message")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("First Name *")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_text_field, {
                                                  "hide-details": "",
                                                  variant: "outlined",
                                                  placeholder: "Name",
                                                  color: "primary"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Last Name *")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_text_field, {
                                                  "hide-details": "",
                                                  variant: "outlined",
                                                  placeholder: "Last Name",
                                                  color: "primary"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Phone Number *")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_text_field, {
                                                  "hide-details": "",
                                                  variant: "outlined",
                                                  placeholder: "xxx xxx xxxx",
                                                  color: "primary"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Email *")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_text_field, {
                                                  "hide-details": "",
                                                  variant: "outlined",
                                                  placeholder: "Email address ",
                                                  color: "primary"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Enquire related to *")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_select, {
                                                  modelValue: select.value,
                                                  "onUpdate:modelValue": ($event) => select.value = $event,
                                                  items: items.value,
                                                  "item-title": "state",
                                                  "item-value": "abbr",
                                                  label: "Select",
                                                  "return-object": "",
                                                  "single-line": "",
                                                  variant: "outlined",
                                                  "hide-details": ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Message")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_textarea, {
                                                  label: "Write your message here...",
                                                  variant: "outlined",
                                                  "hide-details": ""
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              class: "text-md-end"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_btn, {
                                                  color: "primary",
                                                  class: "px-5",
                                                  rounded: "pill",
                                                  size: "large",
                                                  flat: "",
                                                  href: "",
                                                  target: "_blank"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Send Message")
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_row, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("First Name *")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_text_field, {
                                                "hide-details": "",
                                                variant: "outlined",
                                                placeholder: "Name",
                                                color: "primary"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Last Name *")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_text_field, {
                                                "hide-details": "",
                                                variant: "outlined",
                                                placeholder: "Last Name",
                                                color: "primary"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Phone Number *")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_text_field, {
                                                "hide-details": "",
                                                variant: "outlined",
                                                placeholder: "xxx xxx xxxx",
                                                color: "primary"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Email *")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_text_field, {
                                                "hide-details": "",
                                                variant: "outlined",
                                                placeholder: "Email address ",
                                                color: "primary"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Enquire related to *")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_select, {
                                                modelValue: select.value,
                                                "onUpdate:modelValue": ($event) => select.value = $event,
                                                items: items.value,
                                                "item-title": "state",
                                                "item-value": "abbr",
                                                label: "Select",
                                                "return-object": "",
                                                "single-line": "",
                                                variant: "outlined",
                                                "hide-details": ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Message")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_textarea, {
                                                label: "Write your message here...",
                                                variant: "outlined",
                                                "hide-details": ""
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            class: "text-md-end"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_btn, {
                                                color: "primary",
                                                class: "px-5",
                                                rounded: "pill",
                                                size: "large",
                                                flat: "",
                                                href: "",
                                                target: "_blank"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Send Message")
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card_item, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                              default: withCtx(() => [
                                                createTextVNode("First Name *")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_text_field, {
                                              "hide-details": "",
                                              variant: "outlined",
                                              placeholder: "Name",
                                              color: "primary"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Last Name *")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_text_field, {
                                              "hide-details": "",
                                              variant: "outlined",
                                              placeholder: "Last Name",
                                              color: "primary"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Phone Number *")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_text_field, {
                                              "hide-details": "",
                                              variant: "outlined",
                                              placeholder: "xxx xxx xxxx",
                                              color: "primary"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Email *")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_text_field, {
                                              "hide-details": "",
                                              variant: "outlined",
                                              placeholder: "Email address ",
                                              color: "primary"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Enquire related to *")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_select, {
                                              modelValue: select.value,
                                              "onUpdate:modelValue": ($event) => select.value = $event,
                                              items: items.value,
                                              "item-title": "state",
                                              "item-value": "abbr",
                                              label: "Select",
                                              "return-object": "",
                                              "single-line": "",
                                              variant: "outlined",
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Message")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_textarea, {
                                              label: "Write your message here...",
                                              variant: "outlined",
                                              "hide-details": ""
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          class: "text-md-end"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_btn, {
                                              color: "primary",
                                              class: "px-5",
                                              rounded: "pill",
                                              size: "large",
                                              flat: "",
                                              href: "",
                                              target: "_blank"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Send Message")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card, { elevation: "10" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_item, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_row, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                            default: withCtx(() => [
                                              createTextVNode("First Name *")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_text_field, {
                                            "hide-details": "",
                                            variant: "outlined",
                                            placeholder: "Name",
                                            color: "primary"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Last Name *")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_text_field, {
                                            "hide-details": "",
                                            variant: "outlined",
                                            placeholder: "Last Name",
                                            color: "primary"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Phone Number *")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_text_field, {
                                            "hide-details": "",
                                            variant: "outlined",
                                            placeholder: "xxx xxx xxxx",
                                            color: "primary"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Email *")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_text_field, {
                                            "hide-details": "",
                                            variant: "outlined",
                                            placeholder: "Email address ",
                                            color: "primary"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Enquire related to *")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_select, {
                                            modelValue: select.value,
                                            "onUpdate:modelValue": ($event) => select.value = $event,
                                            items: items.value,
                                            "item-title": "state",
                                            "item-value": "abbr",
                                            label: "Select",
                                            "return-object": "",
                                            "single-line": "",
                                            variant: "outlined",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Message")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_textarea, {
                                            label: "Write your message here...",
                                            variant: "outlined",
                                            "hide-details": ""
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        class: "text-md-end"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_btn, {
                                            color: "primary",
                                            class: "px-5",
                                            rounded: "pill",
                                            size: "large",
                                            flat: "",
                                            href: "",
                                            target: "_blank"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Send Message")
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
                    createVNode(_component_v_col, {
                      cols: "12",
                      lg: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "bg-primary rounded-lg pa-7 position-relative overflow-hidden mt-md-0 mt-6 position-relative" }, [
                          createVNode("img", {
                            src: _imports_0,
                            class: "position-absolute end-0 top-0 rtlImg"
                          }),
                          createVNode("h4", { class: "text-18 font-weight-bold mb-4" }, "Reach Out Today"),
                          createVNode("p", { class: "text-16 font-weight-regular position-relative z-1" }, " Have questions or need assistance? We're just a message away. "),
                          createVNode(_component_v_divider, { class: "my-10 opacity-20" }),
                          createVNode("h4", { class: "text-18 font-weight-bold mb-4" }, "Our Location"),
                          createVNode("p", { class: "text-16 font-weight-regular" }, " Visit us in person or find our contact details to connect with us directly. ")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      lg: "8"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, { elevation: "10" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_item, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_row, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode("First Name *")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_text_field, {
                                          "hide-details": "",
                                          variant: "outlined",
                                          placeholder: "Name",
                                          color: "primary"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Last Name *")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_text_field, {
                                          "hide-details": "",
                                          variant: "outlined",
                                          placeholder: "Last Name",
                                          color: "primary"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Phone Number *")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_text_field, {
                                          "hide-details": "",
                                          variant: "outlined",
                                          placeholder: "xxx xxx xxxx",
                                          color: "primary"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Email *")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_text_field, {
                                          "hide-details": "",
                                          variant: "outlined",
                                          placeholder: "Email address ",
                                          color: "primary"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Enquire related to *")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_select, {
                                          modelValue: select.value,
                                          "onUpdate:modelValue": ($event) => select.value = $event,
                                          items: items.value,
                                          "item-title": "state",
                                          "item-value": "abbr",
                                          label: "Select",
                                          "return-object": "",
                                          "single-line": "",
                                          variant: "outlined",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Message")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_textarea, {
                                          label: "Write your message here...",
                                          variant: "outlined",
                                          "hide-details": ""
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      class: "text-md-end"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_btn, {
                                          color: "primary",
                                          class: "px-5",
                                          rounded: "pill",
                                          size: "large",
                                          flat: "",
                                          href: "",
                                          target: "_blank"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Send Message")
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
              createVNode(_component_v_row, null, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    lg: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "bg-primary rounded-lg pa-7 position-relative overflow-hidden mt-md-0 mt-6 position-relative" }, [
                        createVNode("img", {
                          src: _imports_0,
                          class: "position-absolute end-0 top-0 rtlImg"
                        }),
                        createVNode("h4", { class: "text-18 font-weight-bold mb-4" }, "Reach Out Today"),
                        createVNode("p", { class: "text-16 font-weight-regular position-relative z-1" }, " Have questions or need assistance? We're just a message away. "),
                        createVNode(_component_v_divider, { class: "my-10 opacity-20" }),
                        createVNode("h4", { class: "text-18 font-weight-bold mb-4" }, "Our Location"),
                        createVNode("p", { class: "text-16 font-weight-regular" }, " Visit us in person or find our contact details to connect with us directly. ")
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    cols: "12",
                    lg: "8"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card, { elevation: "10" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode("First Name *")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        "hide-details": "",
                                        variant: "outlined",
                                        placeholder: "Name",
                                        color: "primary"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Last Name *")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        "hide-details": "",
                                        variant: "outlined",
                                        placeholder: "Last Name",
                                        color: "primary"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Phone Number *")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        "hide-details": "",
                                        variant: "outlined",
                                        placeholder: "xxx xxx xxxx",
                                        color: "primary"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Email *")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        "hide-details": "",
                                        variant: "outlined",
                                        placeholder: "Email address ",
                                        color: "primary"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Enquire related to *")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_select, {
                                        modelValue: select.value,
                                        "onUpdate:modelValue": ($event) => select.value = $event,
                                        items: items.value,
                                        "item-title": "state",
                                        "item-value": "abbr",
                                        label: "Select",
                                        "return-object": "",
                                        "single-line": "",
                                        variant: "outlined",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Message")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_textarea, {
                                        label: "Write your message here...",
                                        variant: "outlined",
                                        "hide-details": ""
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    class: "text-md-end"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_btn, {
                                        color: "primary",
                                        class: "px-5",
                                        rounded: "pill",
                                        size: "large",
                                        flat: "",
                                        href: "",
                                        target: "_blank"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Send Message")
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/frontpages/ContactUs/ContactForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_container = resolveComponent("v-container");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-background" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_v_container, { class: "max-width-1218 py-0" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="overflow-hidden rounded-md"${_scopeId}><div style="${ssrRenderStyle({ "width": "100%" })}"${_scopeId}><iframe width="100%" height="440" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=newyork+(My%20Businnewyoess%20Name)&amp;t=p&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"${_scopeId}></iframe></div></div>`);
      } else {
        return [
          createVNode("div", { class: "overflow-hidden rounded-md" }, [
            createVNode("div", { style: { "width": "100%" } }, [
              createVNode("iframe", {
                width: "100%",
                height: "440",
                frameborder: "0",
                scrolling: "no",
                marginheight: "0",
                marginwidth: "0",
                src: "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=newyork+(My%20Businnewyoess%20Name)&t=p&z=12&ie=UTF8&iwloc=B&output=embed"
              })
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/frontpages/ContactUs/ContactMap.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ContactMap = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Contact-us",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$3, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$4, {
              title: "We\u2019d love to hear from you",
              caption: "Contact Us"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(ContactMap, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$4, {
                title: "We\u2019d love to hear from you",
                caption: "Contact Us"
              }),
              createVNode(ContactMap),
              createVNode(_sfc_main$2),
              createVNode(_sfc_main$5)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/front-pages/Contact-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Contact-us-CrUceMHN.mjs.map
