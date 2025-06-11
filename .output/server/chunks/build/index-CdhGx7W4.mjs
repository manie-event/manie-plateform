import { defineComponent, resolveComponent, withCtx, createVNode, unref, createTextVNode, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$4 } from './ProfileBannerOne-CvIXERdR.mjs';
import { PhoneIcon, MailIcon, BrandSkypeIcon, MapPinIcon, SchoolIcon, LanguageIcon, BrandGithubIcon, BrandReactNativeIcon, TemplateIcon, LayoutIcon, IdIcon } from 'vue-tabler-icons';
import { _ as __nuxt_component_0 } from './nuxt-link-DZ3wFR7I.mjs';
import { A as AddPost, _ as _sfc_main$1$1 } from './AddPost-Cw6NC1C1.mjs';
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
import './server.mjs';
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

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "IntroCard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_avatar = resolveComponent("v-avatar");
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
                              _push5(`<h4 class="text-h5"${_scopeId4}>About me</h4><p class="my-5 text-subtitle-1 lh-md font-weight-medium"${_scopeId4}> Hello, I\u2019m Mike Nielsen. I\u2019m a professional who designs, develops, tests, and maintains software applications and systems. </p>`);
                              _push5(ssrRenderComponent(_component_v_divider, { class: "mb-4" }, null, _parent5, _scopeId4));
                              _push5(`<h4 class="text-h5 mb-4"${_scopeId4}>Contact</h4><div class="d-flex align-center mb-5"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_avatar, {
                                size: "40",
                                class: "bg-lighterror"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(PhoneIcon), {
                                      size: "20",
                                      "stroke-width": "1.5",
                                      class: "text-error"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(PhoneIcon), {
                                        size: "20",
                                        "stroke-width": "1.5",
                                        class: "text-error"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="ml-3"${_scopeId4}><h5 class="text-subtitle-1 font-weight-semibold text-grey200 mb-1"${_scopeId4}>Call</h5><p class="text-subtitle-1 font-weight-medium text-grey100"${_scopeId4}>(123) 456-7890</p></div></div><div class="d-flex align-center mb-5"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_avatar, {
                                size: "40",
                                class: "bg-lightsuccess"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(MailIcon), {
                                      size: "20",
                                      "stroke-width": "1.5",
                                      class: "text-success"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(MailIcon), {
                                        size: "20",
                                        "stroke-width": "1.5",
                                        class: "text-success"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="ml-3"${_scopeId4}><h5 class="text-subtitle-1 font-weight-semibold text-grey200 mb-1"${_scopeId4}>Email</h5><p class="text-subtitle-1 font-weight-medium text-grey100"${_scopeId4}>jonathan@spike.com</p></div></div><div class="d-flex align-center mb-5"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_avatar, {
                                size: "40",
                                class: "bg-lightprimary"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(BrandSkypeIcon), {
                                      size: "20",
                                      "stroke-width": "1.5",
                                      class: "text-primary"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(BrandSkypeIcon), {
                                        size: "20",
                                        "stroke-width": "1.5",
                                        class: "text-primary"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="ml-3"${_scopeId4}><h5 class="text-subtitle-1 font-weight-semibold text-grey200 mb-1"${_scopeId4}>Skype</h5><p class="text-subtitle-1 font-weight-medium text-grey100"${_scopeId4}>jonathan.doe</p></div></div>`);
                              _push5(ssrRenderComponent(_component_v_divider, { class: "mb-4" }, null, _parent5, _scopeId4));
                              _push5(`<h4 class="text-h5 mb-4"${_scopeId4}>Other</h4><div class="d-flex align-center mb-5"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_avatar, {
                                size: "40",
                                class: "bg-lightwarning"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(MapPinIcon), {
                                      size: "20",
                                      "stroke-width": "1.5",
                                      class: "text-warning"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(MapPinIcon), {
                                        size: "20",
                                        "stroke-width": "1.5",
                                        class: "text-warning"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="ml-3"${_scopeId4}><h5 class="text-subtitle-1 font-weight-semibold text-grey200 mb-1"${_scopeId4}>Location</h5><p class="text-subtitle-1 font-weight-medium text-grey100"${_scopeId4}>Newyork, USA - 100001</p></div></div><div class="d-flex align-center mb-5"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_avatar, {
                                size: "40",
                                class: "bg-lightsuccess"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(SchoolIcon), {
                                      size: "20",
                                      "stroke-width": "1.5",
                                      class: "text-success"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(SchoolIcon), {
                                        size: "20",
                                        "stroke-width": "1.5",
                                        class: "text-success"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="ml-3"${_scopeId4}><h5 class="text-subtitle-1 font-weight-semibold text-grey200 mb-1"${_scopeId4}>Education</h5><p class="text-subtitle-1 font-weight-medium text-grey100"${_scopeId4}> Saint Josef Institute of Science </p></div></div><div class="d-flex align-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_avatar, {
                                size: "40",
                                class: "bg-lightindigo"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(LanguageIcon), {
                                      size: "20",
                                      "stroke-width": "1.5",
                                      class: "text-indigo"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(LanguageIcon), {
                                        size: "20",
                                        "stroke-width": "1.5",
                                        class: "text-indigo"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="ml-3"${_scopeId4}><h5 class="text-subtitle-1 font-weight-semibold text-grey200 mb-1"${_scopeId4}>Language</h5><p class="text-subtitle-1 font-weight-medium text-grey100"${_scopeId4}>English</p></div></div>`);
                            } else {
                              return [
                                createVNode("h4", { class: "text-h5" }, "About me"),
                                createVNode("p", { class: "my-5 text-subtitle-1 lh-md font-weight-medium" }, " Hello, I\u2019m Mike Nielsen. I\u2019m a professional who designs, develops, tests, and maintains software applications and systems. "),
                                createVNode(_component_v_divider, { class: "mb-4" }),
                                createVNode("h4", { class: "text-h5 mb-4" }, "Contact"),
                                createVNode("div", { class: "d-flex align-center mb-5" }, [
                                  createVNode(_component_v_avatar, {
                                    size: "40",
                                    class: "bg-lighterror"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(PhoneIcon), {
                                        size: "20",
                                        "stroke-width": "1.5",
                                        class: "text-error"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "ml-3" }, [
                                    createVNode("h5", { class: "text-subtitle-1 font-weight-semibold text-grey200 mb-1" }, "Call"),
                                    createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "(123) 456-7890")
                                  ])
                                ]),
                                createVNode("div", { class: "d-flex align-center mb-5" }, [
                                  createVNode(_component_v_avatar, {
                                    size: "40",
                                    class: "bg-lightsuccess"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(MailIcon), {
                                        size: "20",
                                        "stroke-width": "1.5",
                                        class: "text-success"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "ml-3" }, [
                                    createVNode("h5", { class: "text-subtitle-1 font-weight-semibold text-grey200 mb-1" }, "Email"),
                                    createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "jonathan@spike.com")
                                  ])
                                ]),
                                createVNode("div", { class: "d-flex align-center mb-5" }, [
                                  createVNode(_component_v_avatar, {
                                    size: "40",
                                    class: "bg-lightprimary"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(BrandSkypeIcon), {
                                        size: "20",
                                        "stroke-width": "1.5",
                                        class: "text-primary"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "ml-3" }, [
                                    createVNode("h5", { class: "text-subtitle-1 font-weight-semibold text-grey200 mb-1" }, "Skype"),
                                    createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "jonathan.doe")
                                  ])
                                ]),
                                createVNode(_component_v_divider, { class: "mb-4" }),
                                createVNode("h4", { class: "text-h5 mb-4" }, "Other"),
                                createVNode("div", { class: "d-flex align-center mb-5" }, [
                                  createVNode(_component_v_avatar, {
                                    size: "40",
                                    class: "bg-lightwarning"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(MapPinIcon), {
                                        size: "20",
                                        "stroke-width": "1.5",
                                        class: "text-warning"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "ml-3" }, [
                                    createVNode("h5", { class: "text-subtitle-1 font-weight-semibold text-grey200 mb-1" }, "Location"),
                                    createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "Newyork, USA - 100001")
                                  ])
                                ]),
                                createVNode("div", { class: "d-flex align-center mb-5" }, [
                                  createVNode(_component_v_avatar, {
                                    size: "40",
                                    class: "bg-lightsuccess"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(SchoolIcon), {
                                        size: "20",
                                        "stroke-width": "1.5",
                                        class: "text-success"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "ml-3" }, [
                                    createVNode("h5", { class: "text-subtitle-1 font-weight-semibold text-grey200 mb-1" }, "Education"),
                                    createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, " Saint Josef Institute of Science ")
                                  ])
                                ]),
                                createVNode("div", { class: "d-flex align-center" }, [
                                  createVNode(_component_v_avatar, {
                                    size: "40",
                                    class: "bg-lightindigo"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(LanguageIcon), {
                                        size: "20",
                                        "stroke-width": "1.5",
                                        class: "text-indigo"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "ml-3" }, [
                                    createVNode("h5", { class: "text-subtitle-1 font-weight-semibold text-grey200 mb-1" }, "Language"),
                                    createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "English")
                                  ])
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
                              createVNode("h4", { class: "text-h5" }, "About me"),
                              createVNode("p", { class: "my-5 text-subtitle-1 lh-md font-weight-medium" }, " Hello, I\u2019m Mike Nielsen. I\u2019m a professional who designs, develops, tests, and maintains software applications and systems. "),
                              createVNode(_component_v_divider, { class: "mb-4" }),
                              createVNode("h4", { class: "text-h5 mb-4" }, "Contact"),
                              createVNode("div", { class: "d-flex align-center mb-5" }, [
                                createVNode(_component_v_avatar, {
                                  size: "40",
                                  class: "bg-lighterror"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(PhoneIcon), {
                                      size: "20",
                                      "stroke-width": "1.5",
                                      class: "text-error"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "ml-3" }, [
                                  createVNode("h5", { class: "text-subtitle-1 font-weight-semibold text-grey200 mb-1" }, "Call"),
                                  createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "(123) 456-7890")
                                ])
                              ]),
                              createVNode("div", { class: "d-flex align-center mb-5" }, [
                                createVNode(_component_v_avatar, {
                                  size: "40",
                                  class: "bg-lightsuccess"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(MailIcon), {
                                      size: "20",
                                      "stroke-width": "1.5",
                                      class: "text-success"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "ml-3" }, [
                                  createVNode("h5", { class: "text-subtitle-1 font-weight-semibold text-grey200 mb-1" }, "Email"),
                                  createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "jonathan@spike.com")
                                ])
                              ]),
                              createVNode("div", { class: "d-flex align-center mb-5" }, [
                                createVNode(_component_v_avatar, {
                                  size: "40",
                                  class: "bg-lightprimary"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(BrandSkypeIcon), {
                                      size: "20",
                                      "stroke-width": "1.5",
                                      class: "text-primary"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "ml-3" }, [
                                  createVNode("h5", { class: "text-subtitle-1 font-weight-semibold text-grey200 mb-1" }, "Skype"),
                                  createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "jonathan.doe")
                                ])
                              ]),
                              createVNode(_component_v_divider, { class: "mb-4" }),
                              createVNode("h4", { class: "text-h5 mb-4" }, "Other"),
                              createVNode("div", { class: "d-flex align-center mb-5" }, [
                                createVNode(_component_v_avatar, {
                                  size: "40",
                                  class: "bg-lightwarning"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(MapPinIcon), {
                                      size: "20",
                                      "stroke-width": "1.5",
                                      class: "text-warning"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "ml-3" }, [
                                  createVNode("h5", { class: "text-subtitle-1 font-weight-semibold text-grey200 mb-1" }, "Location"),
                                  createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "Newyork, USA - 100001")
                                ])
                              ]),
                              createVNode("div", { class: "d-flex align-center mb-5" }, [
                                createVNode(_component_v_avatar, {
                                  size: "40",
                                  class: "bg-lightsuccess"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(SchoolIcon), {
                                      size: "20",
                                      "stroke-width": "1.5",
                                      class: "text-success"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "ml-3" }, [
                                  createVNode("h5", { class: "text-subtitle-1 font-weight-semibold text-grey200 mb-1" }, "Education"),
                                  createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, " Saint Josef Institute of Science ")
                                ])
                              ]),
                              createVNode("div", { class: "d-flex align-center" }, [
                                createVNode(_component_v_avatar, {
                                  size: "40",
                                  class: "bg-lightindigo"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(LanguageIcon), {
                                      size: "20",
                                      "stroke-width": "1.5",
                                      class: "text-indigo"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "ml-3" }, [
                                  createVNode("h5", { class: "text-subtitle-1 font-weight-semibold text-grey200 mb-1" }, "Language"),
                                  createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "English")
                                ])
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
                            createVNode("h4", { class: "text-h5" }, "About me"),
                            createVNode("p", { class: "my-5 text-subtitle-1 lh-md font-weight-medium" }, " Hello, I\u2019m Mike Nielsen. I\u2019m a professional who designs, develops, tests, and maintains software applications and systems. "),
                            createVNode(_component_v_divider, { class: "mb-4" }),
                            createVNode("h4", { class: "text-h5 mb-4" }, "Contact"),
                            createVNode("div", { class: "d-flex align-center mb-5" }, [
                              createVNode(_component_v_avatar, {
                                size: "40",
                                class: "bg-lighterror"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(PhoneIcon), {
                                    size: "20",
                                    "stroke-width": "1.5",
                                    class: "text-error"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "ml-3" }, [
                                createVNode("h5", { class: "text-subtitle-1 font-weight-semibold text-grey200 mb-1" }, "Call"),
                                createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "(123) 456-7890")
                              ])
                            ]),
                            createVNode("div", { class: "d-flex align-center mb-5" }, [
                              createVNode(_component_v_avatar, {
                                size: "40",
                                class: "bg-lightsuccess"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(MailIcon), {
                                    size: "20",
                                    "stroke-width": "1.5",
                                    class: "text-success"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "ml-3" }, [
                                createVNode("h5", { class: "text-subtitle-1 font-weight-semibold text-grey200 mb-1" }, "Email"),
                                createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "jonathan@spike.com")
                              ])
                            ]),
                            createVNode("div", { class: "d-flex align-center mb-5" }, [
                              createVNode(_component_v_avatar, {
                                size: "40",
                                class: "bg-lightprimary"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(BrandSkypeIcon), {
                                    size: "20",
                                    "stroke-width": "1.5",
                                    class: "text-primary"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "ml-3" }, [
                                createVNode("h5", { class: "text-subtitle-1 font-weight-semibold text-grey200 mb-1" }, "Skype"),
                                createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "jonathan.doe")
                              ])
                            ]),
                            createVNode(_component_v_divider, { class: "mb-4" }),
                            createVNode("h4", { class: "text-h5 mb-4" }, "Other"),
                            createVNode("div", { class: "d-flex align-center mb-5" }, [
                              createVNode(_component_v_avatar, {
                                size: "40",
                                class: "bg-lightwarning"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(MapPinIcon), {
                                    size: "20",
                                    "stroke-width": "1.5",
                                    class: "text-warning"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "ml-3" }, [
                                createVNode("h5", { class: "text-subtitle-1 font-weight-semibold text-grey200 mb-1" }, "Location"),
                                createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "Newyork, USA - 100001")
                              ])
                            ]),
                            createVNode("div", { class: "d-flex align-center mb-5" }, [
                              createVNode(_component_v_avatar, {
                                size: "40",
                                class: "bg-lightsuccess"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(SchoolIcon), {
                                    size: "20",
                                    "stroke-width": "1.5",
                                    class: "text-success"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "ml-3" }, [
                                createVNode("h5", { class: "text-subtitle-1 font-weight-semibold text-grey200 mb-1" }, "Education"),
                                createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, " Saint Josef Institute of Science ")
                              ])
                            ]),
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode(_component_v_avatar, {
                                size: "40",
                                class: "bg-lightindigo"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(LanguageIcon), {
                                    size: "20",
                                    "stroke-width": "1.5",
                                    class: "text-indigo"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "ml-3" }, [
                                createVNode("h5", { class: "text-subtitle-1 font-weight-semibold text-grey200 mb-1" }, "Language"),
                                createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "English")
                              ])
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
                          createVNode("h4", { class: "text-h5" }, "About me"),
                          createVNode("p", { class: "my-5 text-subtitle-1 lh-md font-weight-medium" }, " Hello, I\u2019m Mike Nielsen. I\u2019m a professional who designs, develops, tests, and maintains software applications and systems. "),
                          createVNode(_component_v_divider, { class: "mb-4" }),
                          createVNode("h4", { class: "text-h5 mb-4" }, "Contact"),
                          createVNode("div", { class: "d-flex align-center mb-5" }, [
                            createVNode(_component_v_avatar, {
                              size: "40",
                              class: "bg-lighterror"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(PhoneIcon), {
                                  size: "20",
                                  "stroke-width": "1.5",
                                  class: "text-error"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "ml-3" }, [
                              createVNode("h5", { class: "text-subtitle-1 font-weight-semibold text-grey200 mb-1" }, "Call"),
                              createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "(123) 456-7890")
                            ])
                          ]),
                          createVNode("div", { class: "d-flex align-center mb-5" }, [
                            createVNode(_component_v_avatar, {
                              size: "40",
                              class: "bg-lightsuccess"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(MailIcon), {
                                  size: "20",
                                  "stroke-width": "1.5",
                                  class: "text-success"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "ml-3" }, [
                              createVNode("h5", { class: "text-subtitle-1 font-weight-semibold text-grey200 mb-1" }, "Email"),
                              createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "jonathan@spike.com")
                            ])
                          ]),
                          createVNode("div", { class: "d-flex align-center mb-5" }, [
                            createVNode(_component_v_avatar, {
                              size: "40",
                              class: "bg-lightprimary"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(BrandSkypeIcon), {
                                  size: "20",
                                  "stroke-width": "1.5",
                                  class: "text-primary"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "ml-3" }, [
                              createVNode("h5", { class: "text-subtitle-1 font-weight-semibold text-grey200 mb-1" }, "Skype"),
                              createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "jonathan.doe")
                            ])
                          ]),
                          createVNode(_component_v_divider, { class: "mb-4" }),
                          createVNode("h4", { class: "text-h5 mb-4" }, "Other"),
                          createVNode("div", { class: "d-flex align-center mb-5" }, [
                            createVNode(_component_v_avatar, {
                              size: "40",
                              class: "bg-lightwarning"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(MapPinIcon), {
                                  size: "20",
                                  "stroke-width": "1.5",
                                  class: "text-warning"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "ml-3" }, [
                              createVNode("h5", { class: "text-subtitle-1 font-weight-semibold text-grey200 mb-1" }, "Location"),
                              createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "Newyork, USA - 100001")
                            ])
                          ]),
                          createVNode("div", { class: "d-flex align-center mb-5" }, [
                            createVNode(_component_v_avatar, {
                              size: "40",
                              class: "bg-lightsuccess"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(SchoolIcon), {
                                  size: "20",
                                  "stroke-width": "1.5",
                                  class: "text-success"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "ml-3" }, [
                              createVNode("h5", { class: "text-subtitle-1 font-weight-semibold text-grey200 mb-1" }, "Education"),
                              createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, " Saint Josef Institute of Science ")
                            ])
                          ]),
                          createVNode("div", { class: "d-flex align-center" }, [
                            createVNode(_component_v_avatar, {
                              size: "40",
                              class: "bg-lightindigo"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(LanguageIcon), {
                                  size: "20",
                                  "stroke-width": "1.5",
                                  class: "text-indigo"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "ml-3" }, [
                              createVNode("h5", { class: "text-subtitle-1 font-weight-semibold text-grey200 mb-1" }, "Language"),
                              createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "English")
                            ])
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
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/user-profile/profile-one/IntroCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TeamsCard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_NuxtLink = __nuxt_component_0;
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
                              _push5(`<h4 class="text-h5 mb-4"${_scopeId4}>Teams</h4><div class="d-flex align-center mb-5"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_avatar, {
                                size: "40",
                                class: "bg-lightinfo"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(BrandGithubIcon), {
                                      size: "20",
                                      "stroke-width": "1.5",
                                      class: "text-info"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(BrandGithubIcon), {
                                        size: "20",
                                        "stroke-width": "1.5",
                                        class: "text-info"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="ml-3"${_scopeId4}><h5 class="text-subtitle-1 font-weight-semibold text-grey200 mb-1"${_scopeId4}> Backend Developer </h5><p class="text-subtitle-1 font-weight-medium text-grey100"${_scopeId4}>120 members</p></div></div><div class="d-flex align-center mb-5"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_avatar, {
                                size: "40",
                                class: "bg-lightprimary"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(BrandReactNativeIcon), {
                                      size: "20",
                                      "stroke-width": "1.5",
                                      class: "text-primary"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(BrandReactNativeIcon), {
                                        size: "20",
                                        "stroke-width": "1.5",
                                        class: "text-primary"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="ml-3"${_scopeId4}><h5 class="text-subtitle-1 font-weight-semibold text-grey200 mb-1"${_scopeId4}> React Developer </h5><p class="text-subtitle-1 font-weight-medium text-grey100"${_scopeId4}>86 members</p></div></div><div${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_NuxtLink, {
                                to: "/",
                                class: "text-primary font-weight-semibold text-subtitle-1 text-decoration-none"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`View all`);
                                  } else {
                                    return [
                                      createTextVNode("View all")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("h4", { class: "text-h5 mb-4" }, "Teams"),
                                createVNode("div", { class: "d-flex align-center mb-5" }, [
                                  createVNode(_component_v_avatar, {
                                    size: "40",
                                    class: "bg-lightinfo"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(BrandGithubIcon), {
                                        size: "20",
                                        "stroke-width": "1.5",
                                        class: "text-info"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "ml-3" }, [
                                    createVNode("h5", { class: "text-subtitle-1 font-weight-semibold text-grey200 mb-1" }, " Backend Developer "),
                                    createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "120 members")
                                  ])
                                ]),
                                createVNode("div", { class: "d-flex align-center mb-5" }, [
                                  createVNode(_component_v_avatar, {
                                    size: "40",
                                    class: "bg-lightprimary"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(BrandReactNativeIcon), {
                                        size: "20",
                                        "stroke-width": "1.5",
                                        class: "text-primary"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "ml-3" }, [
                                    createVNode("h5", { class: "text-subtitle-1 font-weight-semibold text-grey200 mb-1" }, " React Developer "),
                                    createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "86 members")
                                  ])
                                ]),
                                createVNode("div", null, [
                                  createVNode(_component_NuxtLink, {
                                    to: "/",
                                    class: "text-primary font-weight-semibold text-subtitle-1 text-decoration-none"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("View all")
                                    ]),
                                    _: 1
                                  })
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
                              createVNode("h4", { class: "text-h5 mb-4" }, "Teams"),
                              createVNode("div", { class: "d-flex align-center mb-5" }, [
                                createVNode(_component_v_avatar, {
                                  size: "40",
                                  class: "bg-lightinfo"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(BrandGithubIcon), {
                                      size: "20",
                                      "stroke-width": "1.5",
                                      class: "text-info"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "ml-3" }, [
                                  createVNode("h5", { class: "text-subtitle-1 font-weight-semibold text-grey200 mb-1" }, " Backend Developer "),
                                  createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "120 members")
                                ])
                              ]),
                              createVNode("div", { class: "d-flex align-center mb-5" }, [
                                createVNode(_component_v_avatar, {
                                  size: "40",
                                  class: "bg-lightprimary"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(BrandReactNativeIcon), {
                                      size: "20",
                                      "stroke-width": "1.5",
                                      class: "text-primary"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "ml-3" }, [
                                  createVNode("h5", { class: "text-subtitle-1 font-weight-semibold text-grey200 mb-1" }, " React Developer "),
                                  createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "86 members")
                                ])
                              ]),
                              createVNode("div", null, [
                                createVNode(_component_NuxtLink, {
                                  to: "/",
                                  class: "text-primary font-weight-semibold text-subtitle-1 text-decoration-none"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("View all")
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
                            createVNode("h4", { class: "text-h5 mb-4" }, "Teams"),
                            createVNode("div", { class: "d-flex align-center mb-5" }, [
                              createVNode(_component_v_avatar, {
                                size: "40",
                                class: "bg-lightinfo"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(BrandGithubIcon), {
                                    size: "20",
                                    "stroke-width": "1.5",
                                    class: "text-info"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "ml-3" }, [
                                createVNode("h5", { class: "text-subtitle-1 font-weight-semibold text-grey200 mb-1" }, " Backend Developer "),
                                createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "120 members")
                              ])
                            ]),
                            createVNode("div", { class: "d-flex align-center mb-5" }, [
                              createVNode(_component_v_avatar, {
                                size: "40",
                                class: "bg-lightprimary"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(BrandReactNativeIcon), {
                                    size: "20",
                                    "stroke-width": "1.5",
                                    class: "text-primary"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "ml-3" }, [
                                createVNode("h5", { class: "text-subtitle-1 font-weight-semibold text-grey200 mb-1" }, " React Developer "),
                                createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "86 members")
                              ])
                            ]),
                            createVNode("div", null, [
                              createVNode(_component_NuxtLink, {
                                to: "/",
                                class: "text-primary font-weight-semibold text-subtitle-1 text-decoration-none"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("View all")
                                ]),
                                _: 1
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
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, {
                    elevation: "10",
                    class: "bg-surface"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_item, null, {
                        default: withCtx(() => [
                          createVNode("h4", { class: "text-h5 mb-4" }, "Teams"),
                          createVNode("div", { class: "d-flex align-center mb-5" }, [
                            createVNode(_component_v_avatar, {
                              size: "40",
                              class: "bg-lightinfo"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(BrandGithubIcon), {
                                  size: "20",
                                  "stroke-width": "1.5",
                                  class: "text-info"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "ml-3" }, [
                              createVNode("h5", { class: "text-subtitle-1 font-weight-semibold text-grey200 mb-1" }, " Backend Developer "),
                              createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "120 members")
                            ])
                          ]),
                          createVNode("div", { class: "d-flex align-center mb-5" }, [
                            createVNode(_component_v_avatar, {
                              size: "40",
                              class: "bg-lightprimary"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(BrandReactNativeIcon), {
                                  size: "20",
                                  "stroke-width": "1.5",
                                  class: "text-primary"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "ml-3" }, [
                              createVNode("h5", { class: "text-subtitle-1 font-weight-semibold text-grey200 mb-1" }, " React Developer "),
                              createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "86 members")
                            ])
                          ]),
                          createVNode("div", null, [
                            createVNode(_component_NuxtLink, {
                              to: "/",
                              class: "text-primary font-weight-semibold text-subtitle-1 text-decoration-none"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("View all")
                              ]),
                              _: 1
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
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/user-profile/profile-one/TeamsCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NumberCards",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_avatar = resolveComponent("v-avatar");
      _push(ssrRenderComponent(_component_v_row, mergeProps({ class: "justify-content-center mb-4" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, {
                    elevation: "10",
                    class: "bg-surface"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card_item, { class: "py-6 px-md-6 px-5" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex align-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_avatar, {
                                size: "48",
                                class: "bg-lightprimary"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(TemplateIcon), {
                                      size: "24",
                                      "stroke-width": "1.5",
                                      class: "text-primary"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(TemplateIcon), {
                                        size: "24",
                                        "stroke-width": "1.5",
                                        class: "text-primary"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="ml-3"${_scopeId4}><h5 class="text-h4 font-weight-semibold text-grey200 mb-1"${_scopeId4}>680</h5><p class="text-subtitle-1 font-weight-medium text-grey100"${_scopeId4}>120 members</p></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex align-center" }, [
                                  createVNode(_component_v_avatar, {
                                    size: "48",
                                    class: "bg-lightprimary"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(TemplateIcon), {
                                        size: "24",
                                        "stroke-width": "1.5",
                                        class: "text-primary"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "ml-3" }, [
                                    createVNode("h5", { class: "text-h4 font-weight-semibold text-grey200 mb-1" }, "680"),
                                    createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "120 members")
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card_item, { class: "py-6 px-md-6 px-5" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex align-center" }, [
                                createVNode(_component_v_avatar, {
                                  size: "48",
                                  class: "bg-lightprimary"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(TemplateIcon), {
                                      size: "24",
                                      "stroke-width": "1.5",
                                      class: "text-primary"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "ml-3" }, [
                                  createVNode("h5", { class: "text-h4 font-weight-semibold text-grey200 mb-1" }, "680"),
                                  createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "120 members")
                                ])
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
                        createVNode(_component_v_card_item, { class: "py-6 px-md-6 px-5" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode(_component_v_avatar, {
                                size: "48",
                                class: "bg-lightprimary"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(TemplateIcon), {
                                    size: "24",
                                    "stroke-width": "1.5",
                                    class: "text-primary"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "ml-3" }, [
                                createVNode("h5", { class: "text-h4 font-weight-semibold text-grey200 mb-1" }, "680"),
                                createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "120 members")
                              ])
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
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, {
                    elevation: "10",
                    class: "bg-surface"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card_item, { class: "py-6 px-md-6 px-5" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex align-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_avatar, {
                                size: "48",
                                class: "bg-lightsuccess"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(LayoutIcon), {
                                      size: "24",
                                      "stroke-width": "1.5",
                                      class: "text-success"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(LayoutIcon), {
                                        size: "24",
                                        "stroke-width": "1.5",
                                        class: "text-success"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="ml-3"${_scopeId4}><h5 class="text-h4 font-weight-semibold text-grey200 mb-1"${_scopeId4}>42</h5><p class="text-subtitle-1 font-weight-medium text-grey100"${_scopeId4}>Projects</p></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex align-center" }, [
                                  createVNode(_component_v_avatar, {
                                    size: "48",
                                    class: "bg-lightsuccess"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(LayoutIcon), {
                                        size: "24",
                                        "stroke-width": "1.5",
                                        class: "text-success"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "ml-3" }, [
                                    createVNode("h5", { class: "text-h4 font-weight-semibold text-grey200 mb-1" }, "42"),
                                    createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "Projects")
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card_item, { class: "py-6 px-md-6 px-5" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex align-center" }, [
                                createVNode(_component_v_avatar, {
                                  size: "48",
                                  class: "bg-lightsuccess"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(LayoutIcon), {
                                      size: "24",
                                      "stroke-width": "1.5",
                                      class: "text-success"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "ml-3" }, [
                                  createVNode("h5", { class: "text-h4 font-weight-semibold text-grey200 mb-1" }, "42"),
                                  createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "Projects")
                                ])
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
                        createVNode(_component_v_card_item, { class: "py-6 px-md-6 px-5" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode(_component_v_avatar, {
                                size: "48",
                                class: "bg-lightsuccess"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(LayoutIcon), {
                                    size: "24",
                                    "stroke-width": "1.5",
                                    class: "text-success"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "ml-3" }, [
                                createVNode("h5", { class: "text-h4 font-weight-semibold text-grey200 mb-1" }, "42"),
                                createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "Projects")
                              ])
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
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, {
                    elevation: "10",
                    class: "bg-surface"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card_item, { class: "py-6 px-md-6 px-5" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex align-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_avatar, {
                                size: "48",
                                class: "bg-lighterror"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(IdIcon), {
                                      size: "24",
                                      "stroke-width": "1.5",
                                      class: "text-error"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(IdIcon), {
                                        size: "24",
                                        "stroke-width": "1.5",
                                        class: "text-error"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="ml-3"${_scopeId4}><h5 class="text-h4 font-weight-semibold text-grey200 mb-1"${_scopeId4}>$780</h5><p class="text-subtitle-1 font-weight-medium text-grey100"${_scopeId4}>Sales</p></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex align-center" }, [
                                  createVNode(_component_v_avatar, {
                                    size: "48",
                                    class: "bg-lighterror"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(IdIcon), {
                                        size: "24",
                                        "stroke-width": "1.5",
                                        class: "text-error"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "ml-3" }, [
                                    createVNode("h5", { class: "text-h4 font-weight-semibold text-grey200 mb-1" }, "$780"),
                                    createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "Sales")
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card_item, { class: "py-6 px-md-6 px-5" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex align-center" }, [
                                createVNode(_component_v_avatar, {
                                  size: "48",
                                  class: "bg-lighterror"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(IdIcon), {
                                      size: "24",
                                      "stroke-width": "1.5",
                                      class: "text-error"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "ml-3" }, [
                                  createVNode("h5", { class: "text-h4 font-weight-semibold text-grey200 mb-1" }, "$780"),
                                  createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "Sales")
                                ])
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
                        createVNode(_component_v_card_item, { class: "py-6 px-md-6 px-5" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode(_component_v_avatar, {
                                size: "48",
                                class: "bg-lighterror"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(IdIcon), {
                                    size: "24",
                                    "stroke-width": "1.5",
                                    class: "text-error"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "ml-3" }, [
                                createVNode("h5", { class: "text-h4 font-weight-semibold text-grey200 mb-1" }, "$780"),
                                createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "Sales")
                              ])
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
                sm: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, {
                    elevation: "10",
                    class: "bg-surface"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_item, { class: "py-6 px-md-6 px-5" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex align-center" }, [
                            createVNode(_component_v_avatar, {
                              size: "48",
                              class: "bg-lightprimary"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(TemplateIcon), {
                                  size: "24",
                                  "stroke-width": "1.5",
                                  class: "text-primary"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "ml-3" }, [
                              createVNode("h5", { class: "text-h4 font-weight-semibold text-grey200 mb-1" }, "680"),
                              createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "120 members")
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, {
                    elevation: "10",
                    class: "bg-surface"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_item, { class: "py-6 px-md-6 px-5" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex align-center" }, [
                            createVNode(_component_v_avatar, {
                              size: "48",
                              class: "bg-lightsuccess"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(LayoutIcon), {
                                  size: "24",
                                  "stroke-width": "1.5",
                                  class: "text-success"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "ml-3" }, [
                              createVNode("h5", { class: "text-h4 font-weight-semibold text-grey200 mb-1" }, "42"),
                              createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "Projects")
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, {
                    elevation: "10",
                    class: "bg-surface"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_item, { class: "py-6 px-md-6 px-5" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex align-center" }, [
                            createVNode(_component_v_avatar, {
                              size: "48",
                              class: "bg-lighterror"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(IdIcon), {
                                  size: "24",
                                  "stroke-width": "1.5",
                                  class: "text-error"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "ml-3" }, [
                              createVNode("h5", { class: "text-h4 font-weight-semibold text-grey200 mb-1" }, "$780"),
                              createVNode("p", { class: "text-subtitle-1 font-weight-medium text-grey100" }, "Sales")
                            ])
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
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/user-profile/profile-one/NumberCards.vue");
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
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`<div class="mx-sm-4">`);
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
                  _push3(ssrRenderComponent(_sfc_main$3, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$2, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$3),
                    createVNode(_sfc_main$2)
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
                  _push3(ssrRenderComponent(_sfc_main$1, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(AddPost, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$1$1, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1),
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
                  createVNode(_sfc_main$3),
                  createVNode(_sfc_main$2)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                lg: "8",
                md: "8"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$1),
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
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/apps/userprofile/one/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CdhGx7W4.mjs.map
