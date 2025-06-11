import { defineComponent, mergeProps, ref, resolveComponent, withCtx, createTextVNode, unref, toDisplayString, createVNode, createBlock, openBlock, Fragment, renderList, withModifiers, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { WandIcon, ShieldLockIcon, ArchiveIcon, AdjustmentsIcon, TagIcon, DiamondIcon, DatabaseIcon, LanguageKatakanaIcon, BuildingCarouselIcon, ArrowsShuffleIcon, ChartPieIcon, LayersIntersectIcon, RefreshIcon, BookIcon, CalendarIcon, MessageIcon, XIcon, Menu2Icon } from 'vue-tabler-icons';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { h as user1, R as user2, l as user3, _ as _export_sfc } from './server.mjs';
import { RouterLink, useRoute } from 'vue-router';
import { a as _sfc_main$2$1, _ as _sfc_main$5 } from './Logo-DggZ73XB.mjs';
import { u as useCustomizerStore } from './customizer-CM6PVnj3.mjs';
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
import './nuxt-link-DZ3wFR7I.mjs';

const leader1 = publicAssetsURL("/images/front-pages/leaders/leader1.png");
const leader2 = publicAssetsURL("/images/front-pages/leaders/leader2.png");
const leader3 = publicAssetsURL("/images/front-pages/leaders/leader3.png");
const leader4 = publicAssetsURL("/images/front-pages/leaders/leader4.png");
const Features = [
  {
    icon: "tabler:chart-bubble",
    title: "Expert Advisor",
    subtitle: "Suspendisse vestibulum eu erat ac scelerisque.",
    bgcolor: "lighterror",
    color: "error"
  },
  {
    icon: "tabler:building-store",
    title: "Effective Support",
    subtitle: "Suspendisse vestibulum eu erat ac scelerisque.",
    bgcolor: "lightprimary",
    color: "primary"
  },
  {
    icon: "material-symbols:category-outline",
    title: "Low Fees",
    subtitle: "Suspendisse vestibulum eu erat ac scelerisque.",
    bgcolor: "lightsuccess",
    color: "success"
  },
  {
    icon: "material-symbols:earthquake",
    title: "Loan Facility",
    subtitle: "Suspendisse vestibulum eu erat ac scelerisque.",
    bgcolor: "grey100",
    color: "dark "
  }
];
const AboutFeatures = [
  {
    icon: "tabler:building-store",
    title: "Effective Support",
    subtitle: "Suspendisse vestibulum eu erat ac scelerisque.",
    bgcolor: "lightprimary",
    color: "primary"
  },
  {
    icon: "tabler:chart-bubble",
    title: "Expert Advisor",
    subtitle: "Suspendisse vestibulum eu erat ac scelerisque.",
    bgcolor: "lighterror",
    color: "error"
  },
  {
    icon: "material-symbols:category-outline",
    title: "Low Fees",
    subtitle: "Suspendisse vestibulum eu erat ac scelerisque.",
    bgcolor: "lightsuccess",
    color: "success"
  },
  {
    icon: "material-symbols:earthquake",
    title: "Loan Facility",
    subtitle: "Suspendisse vestibulum eu erat ac scelerisque.",
    bgcolor: "bglight",
    color: "bgdark "
  }
];
const QA1 = [
  {
    question: "Combine teammate schedules",
    answer: "Factor in availability for required attendees, and skip checking for conflicts for optional attendees."
  },
  {
    question: "Factor in outside colleagues",
    answer: "Factor in availability for required attendees, and skip checking for conflicts for optional attendees."
  },
  {
    question: "Round robin pooling",
    answer: "Factor in availability for required attendees, and skip checking for conflicts for optional attendees."
  }
];
const QA2 = [
  {
    question: "Combine teammate schedules 2",
    answer: "Factor in availability for required attendees, and skip checking for conflicts for optional attendees."
  },
  {
    question: "Factor in outside colleagues",
    answer: "Factor in availability for required attendees, and skip checking for conflicts for optional attendees."
  },
  {
    question: "Round robin pooling",
    answer: "Factor in availability for required attendees, and skip checking for conflicts for optional attendees."
  }
];
const QA3 = [
  {
    question: "Combine teammate schedules 3",
    answer: "Factor in availability for required attendees, and skip checking for conflicts for optional attendees."
  },
  {
    question: "Factor in outside colleagues",
    answer: "Factor in availability for required attendees, and skip checking for conflicts for optional attendees."
  },
  {
    question: "Round robin pooling",
    answer: "Factor in availability for required attendees, and skip checking for conflicts for optional attendees."
  }
];
const QA4 = [
  {
    question: "Combine teammate schedules 4",
    answer: "Factor in availability for required attendees, and skip checking for conflicts for optional attendees."
  },
  {
    question: "Factor in outside colleagues",
    answer: "Factor in availability for required attendees, and skip checking for conflicts for optional attendees."
  },
  {
    question: "Round robin pooling",
    answer: "Factor in availability for required attendees, and skip checking for conflicts for optional attendees."
  }
];
const OurLeaders = [
  {
    img: leader1,
    name: "Alex Martinez",
    position: "CEO & Co-Founder"
  },
  {
    img: leader2,
    name: "Jordan Nguyen",
    position: "CTO & Co-Founder"
  },
  {
    img: leader3,
    name: "Taylor Roberts",
    position: "Product Manager"
  },
  {
    img: leader4,
    name: "Morgan Patel",
    position: "Lead Developer"
  }
];
const ThemeFeature1 = [
  {
    icon: WandIcon,
    title: "6 Theme Colors",
    color: "primary"
  },
  {
    icon: ShieldLockIcon,
    title: "Authguard",
    color: "secondary"
  },
  {
    icon: ArchiveIcon,
    title: "65+ Page Templates",
    color: "error"
  },
  {
    icon: AdjustmentsIcon,
    title: "45+ UI Components",
    color: "success"
  },
  {
    icon: TagIcon,
    title: "Vuetify",
    color: "info"
  },
  {
    icon: DiamondIcon,
    title: "3400+ Font Icons",
    color: "warning"
  }
];
const ThemeFeature2 = [
  {
    icon: DatabaseIcon,
    title: "Axios",
    color: "success"
  },
  {
    icon: LanguageKatakanaIcon,
    title: "i18n Vue",
    color: "error"
  },
  {
    icon: BuildingCarouselIcon,
    title: "Vue3 Carousel",
    color: "warning"
  },
  {
    icon: ArrowsShuffleIcon,
    title: "Easy to Customize",
    color: "primary"
  }
];
const ThemeFeature3 = [
  {
    icon: ChartPieIcon,
    title: "Lots of Chart Options",
    color: "secondary"
  },
  {
    icon: LayersIntersectIcon,
    title: "Lots of Table Examples",
    color: "info"
  },
  {
    icon: RefreshIcon,
    title: "Regular Updates",
    color: "error"
  },
  {
    icon: BookIcon,
    title: "Detailed Documentation",
    color: "warning"
  },
  {
    icon: CalendarIcon,
    title: "Calendar Design",
    color: "success"
  },
  {
    icon: MessageIcon,
    title: "Dedicated Support",
    color: "info"
  }
];
const Packages = [
  {
    tagtext: false,
    caption: "Single Use",
    subtext: "Use for single end product which end users can\u2019t be charged for.",
    price: 49,
    period: "one time pay",
    buttontext: "Purchase Now",
    url: "/",
    list: [
      {
        listtitle: "Full source code",
        status: false,
        icon: true,
        disable: false
      },
      {
        listtitle: "Documentation",
        status: false,
        icon: true,
        disable: false
      },
      {
        listtitle: "Use in SaaS app",
        status: true,
        icon: true,
        disable: true
      },
      {
        listtitle: "<b>One</b> Project",
        status: false,
        icon: true,
        disable: false
      },
      {
        listtitle: "<b>One Year</b> Technical Support",
        status: false,
        icon: true,
        disable: false
      }
    ]
  },
  {
    tagtext: false,
    caption: "Multiple Use",
    subtext: "Use for unlimited end products end users can\u2019t be charged for.",
    price: 89,
    period: "one time pay",
    buttontext: "Purchase Now",
    url: "/",
    list: [
      {
        listtitle: "Full source code",
        status: false,
        icon: true,
        disable: false
      },
      {
        listtitle: "Documentation",
        status: false,
        icon: true,
        disable: false
      },
      {
        listtitle: "Use in SaaS app",
        status: true,
        icon: true,
        disable: true
      },
      {
        listtitle: "<b>Unlimited</b> Project",
        status: false,
        icon: true,
        disable: false
      },
      {
        listtitle: "<b>One Year</b> Technical Support",
        status: false,
        icon: true,
        disable: false
      }
    ]
  },
  {
    tagtext: true,
    caption: "Extended Use",
    subtext: "Use for single end product which end users can be charged for.",
    price: 299,
    period: "one time pay",
    buttontext: "Purchase Now",
    url: "/",
    list: [
      {
        listtitle: "Full source code",
        status: false,
        icon: true,
        disable: false
      },
      {
        listtitle: "Documentation",
        status: false,
        icon: true,
        disable: false
      },
      {
        listtitle: "Use in SaaS app",
        status: false,
        icon: true,
        disable: false
      },
      {
        listtitle: "<b>One</b> Project",
        status: false,
        icon: true,
        disable: false
      },
      {
        listtitle: "<b>One Year</b> Technical Support",
        status: false,
        icon: true,
        disable: false
      }
    ]
  },
  {
    tagtext: false,
    caption: "Unlimited Use",
    subtext: "Use in unlimited end products end users can be charged for.",
    price: 499,
    period: "one time pay",
    buttontext: "Purchase Now",
    url: "/",
    list: [
      {
        listtitle: "Full source code",
        status: false,
        icon: true,
        disable: false
      },
      {
        listtitle: "Documentation",
        status: false,
        icon: true,
        disable: false
      },
      {
        listtitle: "Use in SaaS app",
        status: false,
        icon: true,
        disable: false
      },
      {
        listtitle: "<b>Unlimited</b> Project",
        status: false,
        icon: true,
        disable: false
      },
      {
        listtitle: "<b>One Year</b> Technical Support",
        status: false,
        icon: true,
        disable: false
      }
    ]
  }
];
const FAQData = [
  {
    title: "What is included with my purchase?",
    subtitle: "Tailor the dashboard to your exact needs. Customize layouts, color schemes, and widgets effortlessly for a personalized user experience."
  },
  {
    title: "Are there any recurring fees?",
    subtitle: " Unlock the true potential of your data with our advanced analytics tools. Gain valuable insights and make data-driven decisions with ease."
  },
  {
    title: "Can I use the template on multiple projects?",
    subtitle: "Visualize complex data sets beautifully with our interactive graphs and charts. Quickly grasp trends and patterns for smarter analysis."
  },
  {
    title: "Can I customize the admin dashboard template to match my brand?",
    subtitle: "Visualize complex data sets beautifully with our interactive graphs and charts. Quickly grasp trends and patterns for smarter analysis."
  },
  {
    title: "Are there any restrictions on using the template?",
    subtitle: "Visualize complex data sets beautifully with our interactive graphs and charts. Quickly grasp trends and patterns for smarter analysis."
  },
  {
    title: "How can I get support after purchase?",
    subtitle: "Visualize complex data sets beautifully with our interactive graphs and charts. Quickly grasp trends and patterns for smarter analysis."
  }
];
const FooterMenu1 = [
  {
    menu: "Cards",
    link: "/widgets/cards"
  },
  {
    menu: "Pricing",
    link: "/theme-pages/pricing"
  },
  {
    menu: "Account Settings",
    link: "/theme-pages/account-settings"
  },
  {
    menu: "FAQ",
    link: "/theme-pages/faq"
  },
  {
    menu: "Search Results",
    link: "/theme-pages/search-results"
  }
];
const FooterMenu2 = [
  {
    menu: "Treeview",
    link: "/theme-pages/treeview"
  },
  {
    menu: "Banners",
    link: "/widgets/banners"
  },
  {
    menu: "Charts",
    link: "/widgets/charts"
  },
  {
    menu: "Gallery Lightbox",
    link: "/theme-pages/gallery-lightbox"
  },
  {
    menu: "Social Contacts",
    link: "/theme-pages/social-media"
  }
];
const FooterMenu3 = [
  {
    menu: "Form Layout",
    link: "/forms/form-layouts"
  },
  {
    menu: "Tables",
    link: "/tables/basic"
  },
  {
    menu: "Stepper",
    link: "/forms/form-elements/stepper"
  },
  {
    menu: "Datatables",
    link: "/datatables/basic"
  },
  {
    menu: "Validation",
    link: "/forms/form-validation"
  }
];
const userReviewFrront = [
  {
    img: user1,
    title: "Jenny Wilson",
    subtitle: "CEO & Head of Comp Inc.",
    review: "This template is great, UI-rich and up-to-date. Although it is pretty much complete, I suggest to improve a bit of documentation. Thanks & Highly recommended!"
  },
  {
    img: user2,
    title: "Josh Cui",
    subtitle: "CEO & Head of Comp Inc.",
    review: "This template is great, UI-rich and up-to-date. Although it is pretty much complete, I suggest to improve a bit of documentation. Thanks & Highly recommended!"
  },
  {
    img: user3,
    title: "Eminson Mendoza",
    subtitle: "CEO & Head of Comp Inc.",
    review: "This template is great, UI-rich and up-to-date. Although it is pretty much complete, I suggest to improve a bit of documentation. Thanks & Highly recommended!"
  }
];
const _imports_0 = publicAssetsURL("/images/logos/logo-icon.svg");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AnnounceBar",
  __ssrInlineRender: true,
  setup(__props) {
    const isVisible = ref(true);
    const hideOfferBar = () => {
      isVisible.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_btn = resolveComponent("v-btn");
      if (isVisible.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-bgdark py-2 offerbar d-sm-flex justify-center gap-4 align-center position-relative px-4 overflow-hidden" }, _attrs))}><div class="d-flex ga-sm-4 ga-2 align-center">`);
        _push(ssrRenderComponent(_component_v_btn, {
          class: "white-btn",
          size: "small",
          href: "",
          rounded: "pill",
          target: "_blank"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`New`);
            } else {
              return [
                createTextVNode("New")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<p class="text-13 font-weight-medium position-relative z-1 pr-md-0 pr-5"> Frontend Pages Added </p></div>`);
        _push(ssrRenderComponent(unref(XIcon), {
          size: "25",
          class: "pa-1 z-1 cursor-pointer announce-close",
          onClick: hideOfferBar
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/frontpages/layout/AnnounceBar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_tooltip = resolveComponent("v-tooltip");
      const _component_v_divider = resolveComponent("v-divider");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-bgdark" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_container, { class: "max-width-1218 py-0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-p-96"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    lg: "3",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mb-sm-8 mb-6"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_sfc_main$2$1, null, null, _parent4, _scopeId3));
                        _push4(`</div><div class="d-flex flex-column ga-4 mt-lg-n4"${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(FooterMenu1), (item) => {
                          _push4(`<div${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(RouterLink), {
                            to: item.link,
                            target: "_blank",
                            class: "text-white text-14 text-grey100 font-weight-regular hover-primary text-decoration-none"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.menu)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.menu), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        });
                        _push4(`<!--]--></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "mb-sm-8 mb-6" }, [
                            createVNode(_sfc_main$2$1)
                          ]),
                          createVNode("div", { class: "d-flex flex-column ga-4 mt-lg-n4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(FooterMenu1), (item) => {
                              return openBlock(), createBlock("div", {
                                key: item.menu
                              }, [
                                createVNode(unref(RouterLink), {
                                  to: item.link,
                                  target: "_blank",
                                  class: "text-white text-14 text-grey100 font-weight-regular hover-primary text-decoration-none"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.menu), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["to"])
                              ]);
                            }), 128))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    lg: "3",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h5 class="text-17 mb-sm-8 mb-6"${_scopeId3}>Features</h5><div class="d-flex flex-column ga-4"${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(FooterMenu2), (item) => {
                          _push4(`<div${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(RouterLink), {
                            to: item.link,
                            target: "_blank",
                            class: "text-white text-14 text-grey100 font-weight-regular hover-primary text-decoration-none"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.menu)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.menu), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        });
                        _push4(`<!--]--></div>`);
                      } else {
                        return [
                          createVNode("h5", { class: "text-17 mb-sm-8 mb-6" }, "Features"),
                          createVNode("div", { class: "d-flex flex-column ga-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(FooterMenu2), (item) => {
                              return openBlock(), createBlock("div", {
                                key: item.menu
                              }, [
                                createVNode(unref(RouterLink), {
                                  to: item.link,
                                  target: "_blank",
                                  class: "text-white text-14 text-grey100 font-weight-regular hover-primary text-decoration-none"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.menu), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["to"])
                              ]);
                            }), 128))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    lg: "3",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h5 class="text-17 mb-sm-8 mb-6"${_scopeId3}>Resources</h5><div class="d-flex flex-column ga-4"${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(FooterMenu3), (item) => {
                          _push4(`<div${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(RouterLink), {
                            to: item.link,
                            target: "_blank",
                            class: "text-white text-14 text-grey100 font-weight-regular hover-primary text-decoration-none"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.menu)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.menu), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        });
                        _push4(`<!--]--></div>`);
                      } else {
                        return [
                          createVNode("h5", { class: "text-17 mb-sm-8 mb-6" }, "Resources"),
                          createVNode("div", { class: "d-flex flex-column ga-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(FooterMenu3), (item) => {
                              return openBlock(), createBlock("div", {
                                key: item.menu
                              }, [
                                createVNode(unref(RouterLink), {
                                  to: item.link,
                                  target: "_blank",
                                  class: "text-white text-14 text-grey100 font-weight-regular hover-primary text-decoration-none"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.menu), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["to"])
                              ]);
                            }), 128))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    lg: "3",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h5 class="text-17 mb-sm-8 mb-6"${_scopeId3}>Follow us</h5><div class="d-flex ga-5 social-icon"${_scopeId3}><a href="/" target="_blank" class="link-btn"${_scopeId3}><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId3}><g clip-path="url(#clip0_21817_22409)"${_scopeId3}><path d="M22 11C22 4.92422 17.0758 0 11 0C4.92422 0 0 4.92422 0 11C0 16.1562 3.55352 20.4875 8.34453 21.6777V14.3602H6.07578V11H8.34453V9.55195C8.34453 5.80938 10.0375 4.07344 13.7156 4.07344C14.4117 4.07344 15.6148 4.21094 16.109 4.34844V7.39062C15.8512 7.36484 15.4 7.34766 14.8371 7.34766C13.0324 7.34766 12.3363 8.03086 12.3363 9.80547V11H15.9285L15.3098 14.3602H12.332V21.9184C17.7805 21.2609 22 16.6246 22 11Z"${_scopeId3}></path></g><defs${_scopeId3}><clipPath id="clip0_21817_22409"${_scopeId3}><rect width="22" height="22" fill="white"${_scopeId3}></rect></clipPath></defs></svg>`);
                        _push4(ssrRenderComponent(_component_v_tooltip, {
                          activator: "parent",
                          location: "top"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Facebook`);
                            } else {
                              return [
                                createTextVNode("Facebook")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</a><a href="/" target="_blank" class="link-btn"${_scopeId3}><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId3}><g clip-path="url(#clip0_21817_22411)"${_scopeId3}><path d="M19.7398 6.51836C19.7527 6.71172 19.7527 6.90938 19.7527 7.10273C19.7527 13.0625 15.2152 19.9332 6.92227 19.9332C4.36563 19.9332 1.99375 19.1941 0 17.9094C0.360937 17.9523 0.713281 17.9652 1.08711 17.9652C3.19687 17.9652 5.13477 17.252 6.68594 16.0402C4.70508 15.9973 3.04219 14.6996 2.4707 12.9121C2.75 12.9551 3.0293 12.9809 3.32148 12.9809C3.72539 12.9809 4.1293 12.925 4.50742 12.8262C2.44063 12.4094 0.89375 10.5918 0.89375 8.40039V8.34453C1.49531 8.67969 2.19141 8.89023 2.93047 8.91602C1.71445 8.1082 0.919531 6.72461 0.919531 5.16055C0.919531 4.32266 1.14297 3.55352 1.53398 2.8832C3.75547 5.62031 7.08984 7.40781 10.8324 7.60117C10.7637 7.26602 10.7207 6.91797 10.7207 6.56992C10.7207 4.08633 12.7316 2.0625 15.2281 2.0625C16.5258 2.0625 17.6988 2.6082 18.5238 3.48477C19.5422 3.29141 20.5219 2.91328 21.3855 2.39766C21.0504 3.44609 20.3371 4.32266 19.4047 4.88125C20.3113 4.78242 21.1922 4.5332 22 4.18516C21.3855 5.07891 20.6164 5.87383 19.7398 6.51836Z"${_scopeId3}></path></g><defs${_scopeId3}><clipPath id="clip0_21817_22411"${_scopeId3}><rect width="22" height="22" fill="white"${_scopeId3}></rect></clipPath></defs></svg>`);
                        _push4(ssrRenderComponent(_component_v_tooltip, {
                          activator: "parent",
                          location: "top"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Twitter`);
                            } else {
                              return [
                                createTextVNode("Twitter")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</a><a href="/" target="_blank" class="link-btn"${_scopeId3}><svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId3}><g clip-path="url(#clip0_21817_22413)"${_scopeId3}><path d="M9.62959 6.0583C6.89678 6.0583 4.69248 8.2626 4.69248 10.9954C4.69248 13.7282 6.89678 15.9325 9.62959 15.9325C12.3624 15.9325 14.5667 13.7282 14.5667 10.9954C14.5667 8.2626 12.3624 6.0583 9.62959 6.0583ZM9.62959 14.2052C7.86357 14.2052 6.41982 12.7657 6.41982 10.9954C6.41982 9.2251 7.85928 7.78564 9.62959 7.78564C11.3999 7.78564 12.8394 9.2251 12.8394 10.9954C12.8394 12.7657 11.3956 14.2052 9.62959 14.2052ZM15.9202 5.85635C15.9202 6.49658 15.4046 7.00791 14.7687 7.00791C14.1284 7.00791 13.6171 6.49229 13.6171 5.85635C13.6171 5.22041 14.1327 4.70478 14.7687 4.70478C15.4046 4.70478 15.9202 5.22041 15.9202 5.85635ZM19.1901 7.0251C19.1171 5.48252 18.7647 4.11611 17.6347 2.99033C16.5089 1.86455 15.1425 1.51221 13.5999 1.43486C12.0101 1.34463 7.24482 1.34463 5.65498 1.43486C4.1167 1.50791 2.75029 1.86025 1.62024 2.98604C0.490137 4.11182 0.14209 5.47822 0.0647461 7.0208C-0.0254883 8.61064 -0.0254883 13.3759 0.0647461 14.9657C0.137793 16.5083 0.490137 17.8747 1.62024 19.0005C2.75029 20.1263 4.1124 20.4786 5.65498 20.556C7.24482 20.6462 12.0101 20.6462 13.5999 20.556C15.1425 20.4829 16.5089 20.1306 17.6347 19.0005C18.7605 17.8747 19.1128 16.5083 19.1901 14.9657C19.2804 13.3759 19.2804 8.61494 19.1901 7.0251ZM17.1362 16.6716C16.8011 17.5138 16.1522 18.1626 15.3058 18.5021C14.0382 19.0048 11.0304 18.8888 9.62959 18.8888C8.22881 18.8888 5.2167 19.0005 3.95342 18.5021C3.11123 18.1669 2.4624 17.5181 2.12295 16.6716C1.62024 15.404 1.73623 12.3962 1.73623 10.9954C1.73623 9.59463 1.62451 6.58252 2.12295 5.31924C2.45811 4.47705 3.10693 3.82822 3.95342 3.48877C5.221 2.98603 8.22881 3.10205 9.62959 3.10205C11.0304 3.10205 14.0425 2.99033 15.3058 3.48877C16.148 3.82393 16.7968 4.47275 17.1362 5.31924C17.639 6.58682 17.5229 9.59463 17.5229 10.9954C17.5229 12.3962 17.639 15.4083 17.1362 16.6716Z"${_scopeId3}></path></g><defs${_scopeId3}><clipPath id="clip0_21817_22413"${_scopeId3}><rect width="19.25" height="22" fill="white"${_scopeId3}></rect></clipPath></defs></svg>`);
                        _push4(ssrRenderComponent(_component_v_tooltip, {
                          activator: "parent",
                          location: "top"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Instagram`);
                            } else {
                              return [
                                createTextVNode("Instagram")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</a></div>`);
                      } else {
                        return [
                          createVNode("h5", { class: "text-17 mb-sm-8 mb-6" }, "Follow us"),
                          createVNode("div", { class: "d-flex ga-5 social-icon" }, [
                            createVNode("a", {
                              href: "/",
                              target: "_blank",
                              class: "link-btn"
                            }, [
                              (openBlock(), createBlock("svg", {
                                width: "22",
                                height: "22",
                                viewBox: "0 0 22 22",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("g", { "clip-path": "url(#clip0_21817_22409)" }, [
                                  createVNode("path", { d: "M22 11C22 4.92422 17.0758 0 11 0C4.92422 0 0 4.92422 0 11C0 16.1562 3.55352 20.4875 8.34453 21.6777V14.3602H6.07578V11H8.34453V9.55195C8.34453 5.80938 10.0375 4.07344 13.7156 4.07344C14.4117 4.07344 15.6148 4.21094 16.109 4.34844V7.39062C15.8512 7.36484 15.4 7.34766 14.8371 7.34766C13.0324 7.34766 12.3363 8.03086 12.3363 9.80547V11H15.9285L15.3098 14.3602H12.332V21.9184C17.7805 21.2609 22 16.6246 22 11Z" })
                                ]),
                                createVNode("defs", null, [
                                  createVNode("clipPath", { id: "clip0_21817_22409" }, [
                                    createVNode("rect", {
                                      width: "22",
                                      height: "22",
                                      fill: "white"
                                    })
                                  ])
                                ])
                              ])),
                              createVNode(_component_v_tooltip, {
                                activator: "parent",
                                location: "top"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Facebook")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("a", {
                              href: "/",
                              target: "_blank",
                              class: "link-btn"
                            }, [
                              (openBlock(), createBlock("svg", {
                                width: "22",
                                height: "22",
                                viewBox: "0 0 22 22",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("g", { "clip-path": "url(#clip0_21817_22411)" }, [
                                  createVNode("path", { d: "M19.7398 6.51836C19.7527 6.71172 19.7527 6.90938 19.7527 7.10273C19.7527 13.0625 15.2152 19.9332 6.92227 19.9332C4.36563 19.9332 1.99375 19.1941 0 17.9094C0.360937 17.9523 0.713281 17.9652 1.08711 17.9652C3.19687 17.9652 5.13477 17.252 6.68594 16.0402C4.70508 15.9973 3.04219 14.6996 2.4707 12.9121C2.75 12.9551 3.0293 12.9809 3.32148 12.9809C3.72539 12.9809 4.1293 12.925 4.50742 12.8262C2.44063 12.4094 0.89375 10.5918 0.89375 8.40039V8.34453C1.49531 8.67969 2.19141 8.89023 2.93047 8.91602C1.71445 8.1082 0.919531 6.72461 0.919531 5.16055C0.919531 4.32266 1.14297 3.55352 1.53398 2.8832C3.75547 5.62031 7.08984 7.40781 10.8324 7.60117C10.7637 7.26602 10.7207 6.91797 10.7207 6.56992C10.7207 4.08633 12.7316 2.0625 15.2281 2.0625C16.5258 2.0625 17.6988 2.6082 18.5238 3.48477C19.5422 3.29141 20.5219 2.91328 21.3855 2.39766C21.0504 3.44609 20.3371 4.32266 19.4047 4.88125C20.3113 4.78242 21.1922 4.5332 22 4.18516C21.3855 5.07891 20.6164 5.87383 19.7398 6.51836Z" })
                                ]),
                                createVNode("defs", null, [
                                  createVNode("clipPath", { id: "clip0_21817_22411" }, [
                                    createVNode("rect", {
                                      width: "22",
                                      height: "22",
                                      fill: "white"
                                    })
                                  ])
                                ])
                              ])),
                              createVNode(_component_v_tooltip, {
                                activator: "parent",
                                location: "top"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Twitter")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("a", {
                              href: "/",
                              target: "_blank",
                              class: "link-btn"
                            }, [
                              (openBlock(), createBlock("svg", {
                                width: "20",
                                height: "22",
                                viewBox: "0 0 20 22",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("g", { "clip-path": "url(#clip0_21817_22413)" }, [
                                  createVNode("path", { d: "M9.62959 6.0583C6.89678 6.0583 4.69248 8.2626 4.69248 10.9954C4.69248 13.7282 6.89678 15.9325 9.62959 15.9325C12.3624 15.9325 14.5667 13.7282 14.5667 10.9954C14.5667 8.2626 12.3624 6.0583 9.62959 6.0583ZM9.62959 14.2052C7.86357 14.2052 6.41982 12.7657 6.41982 10.9954C6.41982 9.2251 7.85928 7.78564 9.62959 7.78564C11.3999 7.78564 12.8394 9.2251 12.8394 10.9954C12.8394 12.7657 11.3956 14.2052 9.62959 14.2052ZM15.9202 5.85635C15.9202 6.49658 15.4046 7.00791 14.7687 7.00791C14.1284 7.00791 13.6171 6.49229 13.6171 5.85635C13.6171 5.22041 14.1327 4.70478 14.7687 4.70478C15.4046 4.70478 15.9202 5.22041 15.9202 5.85635ZM19.1901 7.0251C19.1171 5.48252 18.7647 4.11611 17.6347 2.99033C16.5089 1.86455 15.1425 1.51221 13.5999 1.43486C12.0101 1.34463 7.24482 1.34463 5.65498 1.43486C4.1167 1.50791 2.75029 1.86025 1.62024 2.98604C0.490137 4.11182 0.14209 5.47822 0.0647461 7.0208C-0.0254883 8.61064 -0.0254883 13.3759 0.0647461 14.9657C0.137793 16.5083 0.490137 17.8747 1.62024 19.0005C2.75029 20.1263 4.1124 20.4786 5.65498 20.556C7.24482 20.6462 12.0101 20.6462 13.5999 20.556C15.1425 20.4829 16.5089 20.1306 17.6347 19.0005C18.7605 17.8747 19.1128 16.5083 19.1901 14.9657C19.2804 13.3759 19.2804 8.61494 19.1901 7.0251ZM17.1362 16.6716C16.8011 17.5138 16.1522 18.1626 15.3058 18.5021C14.0382 19.0048 11.0304 18.8888 9.62959 18.8888C8.22881 18.8888 5.2167 19.0005 3.95342 18.5021C3.11123 18.1669 2.4624 17.5181 2.12295 16.6716C1.62024 15.404 1.73623 12.3962 1.73623 10.9954C1.73623 9.59463 1.62451 6.58252 2.12295 5.31924C2.45811 4.47705 3.10693 3.82822 3.95342 3.48877C5.221 2.98603 8.22881 3.10205 9.62959 3.10205C11.0304 3.10205 14.0425 2.99033 15.3058 3.48877C16.148 3.82393 16.7968 4.47275 17.1362 5.31924C17.639 6.58682 17.5229 9.59463 17.5229 10.9954C17.5229 12.3962 17.639 15.4083 17.1362 16.6716Z" })
                                ]),
                                createVNode("defs", null, [
                                  createVNode("clipPath", { id: "clip0_21817_22413" }, [
                                    createVNode("rect", {
                                      width: "19.25",
                                      height: "22",
                                      fill: "white"
                                    })
                                  ])
                                ])
                              ])),
                              createVNode(_component_v_tooltip, {
                                activator: "parent",
                                location: "top"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Instagram")
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, {
                      cols: "12",
                      lg: "3",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mb-sm-8 mb-6" }, [
                          createVNode(_sfc_main$2$1)
                        ]),
                        createVNode("div", { class: "d-flex flex-column ga-4 mt-lg-n4" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(FooterMenu1), (item) => {
                            return openBlock(), createBlock("div", {
                              key: item.menu
                            }, [
                              createVNode(unref(RouterLink), {
                                to: item.link,
                                target: "_blank",
                                class: "text-white text-14 text-grey100 font-weight-regular hover-primary text-decoration-none"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.menu), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ]);
                          }), 128))
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      lg: "3",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode("h5", { class: "text-17 mb-sm-8 mb-6" }, "Features"),
                        createVNode("div", { class: "d-flex flex-column ga-4" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(FooterMenu2), (item) => {
                            return openBlock(), createBlock("div", {
                              key: item.menu
                            }, [
                              createVNode(unref(RouterLink), {
                                to: item.link,
                                target: "_blank",
                                class: "text-white text-14 text-grey100 font-weight-regular hover-primary text-decoration-none"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.menu), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ]);
                          }), 128))
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      lg: "3",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode("h5", { class: "text-17 mb-sm-8 mb-6" }, "Resources"),
                        createVNode("div", { class: "d-flex flex-column ga-4" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(FooterMenu3), (item) => {
                            return openBlock(), createBlock("div", {
                              key: item.menu
                            }, [
                              createVNode(unref(RouterLink), {
                                to: item.link,
                                target: "_blank",
                                class: "text-white text-14 text-grey100 font-weight-regular hover-primary text-decoration-none"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.menu), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ]);
                          }), 128))
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      lg: "3",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode("h5", { class: "text-17 mb-sm-8 mb-6" }, "Follow us"),
                        createVNode("div", { class: "d-flex ga-5 social-icon" }, [
                          createVNode("a", {
                            href: "/",
                            target: "_blank",
                            class: "link-btn"
                          }, [
                            (openBlock(), createBlock("svg", {
                              width: "22",
                              height: "22",
                              viewBox: "0 0 22 22",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg"
                            }, [
                              createVNode("g", { "clip-path": "url(#clip0_21817_22409)" }, [
                                createVNode("path", { d: "M22 11C22 4.92422 17.0758 0 11 0C4.92422 0 0 4.92422 0 11C0 16.1562 3.55352 20.4875 8.34453 21.6777V14.3602H6.07578V11H8.34453V9.55195C8.34453 5.80938 10.0375 4.07344 13.7156 4.07344C14.4117 4.07344 15.6148 4.21094 16.109 4.34844V7.39062C15.8512 7.36484 15.4 7.34766 14.8371 7.34766C13.0324 7.34766 12.3363 8.03086 12.3363 9.80547V11H15.9285L15.3098 14.3602H12.332V21.9184C17.7805 21.2609 22 16.6246 22 11Z" })
                              ]),
                              createVNode("defs", null, [
                                createVNode("clipPath", { id: "clip0_21817_22409" }, [
                                  createVNode("rect", {
                                    width: "22",
                                    height: "22",
                                    fill: "white"
                                  })
                                ])
                              ])
                            ])),
                            createVNode(_component_v_tooltip, {
                              activator: "parent",
                              location: "top"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Facebook")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("a", {
                            href: "/",
                            target: "_blank",
                            class: "link-btn"
                          }, [
                            (openBlock(), createBlock("svg", {
                              width: "22",
                              height: "22",
                              viewBox: "0 0 22 22",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg"
                            }, [
                              createVNode("g", { "clip-path": "url(#clip0_21817_22411)" }, [
                                createVNode("path", { d: "M19.7398 6.51836C19.7527 6.71172 19.7527 6.90938 19.7527 7.10273C19.7527 13.0625 15.2152 19.9332 6.92227 19.9332C4.36563 19.9332 1.99375 19.1941 0 17.9094C0.360937 17.9523 0.713281 17.9652 1.08711 17.9652C3.19687 17.9652 5.13477 17.252 6.68594 16.0402C4.70508 15.9973 3.04219 14.6996 2.4707 12.9121C2.75 12.9551 3.0293 12.9809 3.32148 12.9809C3.72539 12.9809 4.1293 12.925 4.50742 12.8262C2.44063 12.4094 0.89375 10.5918 0.89375 8.40039V8.34453C1.49531 8.67969 2.19141 8.89023 2.93047 8.91602C1.71445 8.1082 0.919531 6.72461 0.919531 5.16055C0.919531 4.32266 1.14297 3.55352 1.53398 2.8832C3.75547 5.62031 7.08984 7.40781 10.8324 7.60117C10.7637 7.26602 10.7207 6.91797 10.7207 6.56992C10.7207 4.08633 12.7316 2.0625 15.2281 2.0625C16.5258 2.0625 17.6988 2.6082 18.5238 3.48477C19.5422 3.29141 20.5219 2.91328 21.3855 2.39766C21.0504 3.44609 20.3371 4.32266 19.4047 4.88125C20.3113 4.78242 21.1922 4.5332 22 4.18516C21.3855 5.07891 20.6164 5.87383 19.7398 6.51836Z" })
                              ]),
                              createVNode("defs", null, [
                                createVNode("clipPath", { id: "clip0_21817_22411" }, [
                                  createVNode("rect", {
                                    width: "22",
                                    height: "22",
                                    fill: "white"
                                  })
                                ])
                              ])
                            ])),
                            createVNode(_component_v_tooltip, {
                              activator: "parent",
                              location: "top"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Twitter")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("a", {
                            href: "/",
                            target: "_blank",
                            class: "link-btn"
                          }, [
                            (openBlock(), createBlock("svg", {
                              width: "20",
                              height: "22",
                              viewBox: "0 0 20 22",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg"
                            }, [
                              createVNode("g", { "clip-path": "url(#clip0_21817_22413)" }, [
                                createVNode("path", { d: "M9.62959 6.0583C6.89678 6.0583 4.69248 8.2626 4.69248 10.9954C4.69248 13.7282 6.89678 15.9325 9.62959 15.9325C12.3624 15.9325 14.5667 13.7282 14.5667 10.9954C14.5667 8.2626 12.3624 6.0583 9.62959 6.0583ZM9.62959 14.2052C7.86357 14.2052 6.41982 12.7657 6.41982 10.9954C6.41982 9.2251 7.85928 7.78564 9.62959 7.78564C11.3999 7.78564 12.8394 9.2251 12.8394 10.9954C12.8394 12.7657 11.3956 14.2052 9.62959 14.2052ZM15.9202 5.85635C15.9202 6.49658 15.4046 7.00791 14.7687 7.00791C14.1284 7.00791 13.6171 6.49229 13.6171 5.85635C13.6171 5.22041 14.1327 4.70478 14.7687 4.70478C15.4046 4.70478 15.9202 5.22041 15.9202 5.85635ZM19.1901 7.0251C19.1171 5.48252 18.7647 4.11611 17.6347 2.99033C16.5089 1.86455 15.1425 1.51221 13.5999 1.43486C12.0101 1.34463 7.24482 1.34463 5.65498 1.43486C4.1167 1.50791 2.75029 1.86025 1.62024 2.98604C0.490137 4.11182 0.14209 5.47822 0.0647461 7.0208C-0.0254883 8.61064 -0.0254883 13.3759 0.0647461 14.9657C0.137793 16.5083 0.490137 17.8747 1.62024 19.0005C2.75029 20.1263 4.1124 20.4786 5.65498 20.556C7.24482 20.6462 12.0101 20.6462 13.5999 20.556C15.1425 20.4829 16.5089 20.1306 17.6347 19.0005C18.7605 17.8747 19.1128 16.5083 19.1901 14.9657C19.2804 13.3759 19.2804 8.61494 19.1901 7.0251ZM17.1362 16.6716C16.8011 17.5138 16.1522 18.1626 15.3058 18.5021C14.0382 19.0048 11.0304 18.8888 9.62959 18.8888C8.22881 18.8888 5.2167 19.0005 3.95342 18.5021C3.11123 18.1669 2.4624 17.5181 2.12295 16.6716C1.62024 15.404 1.73623 12.3962 1.73623 10.9954C1.73623 9.59463 1.62451 6.58252 2.12295 5.31924C2.45811 4.47705 3.10693 3.82822 3.95342 3.48877C5.221 2.98603 8.22881 3.10205 9.62959 3.10205C11.0304 3.10205 14.0425 2.99033 15.3058 3.48877C16.148 3.82393 16.7968 4.47275 17.1362 5.31924C17.639 6.58682 17.5229 9.59463 17.5229 10.9954C17.5229 12.3962 17.639 15.4083 17.1362 16.6716Z" })
                              ]),
                              createVNode("defs", null, [
                                createVNode("clipPath", { id: "clip0_21817_22413" }, [
                                  createVNode("rect", {
                                    width: "19.25",
                                    height: "22",
                                    fill: "white"
                                  })
                                ])
                              ])
                            ])),
                            createVNode(_component_v_tooltip, {
                              activator: "parent",
                              location: "top"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Instagram")
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_v_divider, { class: "opacity-30" }, null, _parent2, _scopeId));
            _push2(`<div class="py-sm-10 py-6"${_scopeId}><div class="d-sm-flex justify-space-between"${_scopeId}><div class="d-flex ga-2 justify-sm-start justify-center"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} height="24" class="me-1" alt="logo"${_scopeId}><span class="text-white text-15 text-grey100"${_scopeId}>All rights reserved by Spike.</span></div><p class="text-white text-15 d-flex align-center justify-sm-end justify-center pt-sm-0 pt-2"${_scopeId}><span class="opacity-50"${_scopeId}>Produced by</span><a href="https://wrappixel.com/" target="_blank" class="text-white text-decoration-none hover-primary text-15 ms-1"${_scopeId}> Wrappixel.</a></p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-p-96" }, [
                createVNode(_component_v_row, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_col, {
                      cols: "12",
                      lg: "3",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mb-sm-8 mb-6" }, [
                          createVNode(_sfc_main$2$1)
                        ]),
                        createVNode("div", { class: "d-flex flex-column ga-4 mt-lg-n4" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(FooterMenu1), (item) => {
                            return openBlock(), createBlock("div", {
                              key: item.menu
                            }, [
                              createVNode(unref(RouterLink), {
                                to: item.link,
                                target: "_blank",
                                class: "text-white text-14 text-grey100 font-weight-regular hover-primary text-decoration-none"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.menu), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ]);
                          }), 128))
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      lg: "3",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode("h5", { class: "text-17 mb-sm-8 mb-6" }, "Features"),
                        createVNode("div", { class: "d-flex flex-column ga-4" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(FooterMenu2), (item) => {
                            return openBlock(), createBlock("div", {
                              key: item.menu
                            }, [
                              createVNode(unref(RouterLink), {
                                to: item.link,
                                target: "_blank",
                                class: "text-white text-14 text-grey100 font-weight-regular hover-primary text-decoration-none"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.menu), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ]);
                          }), 128))
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      lg: "3",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode("h5", { class: "text-17 mb-sm-8 mb-6" }, "Resources"),
                        createVNode("div", { class: "d-flex flex-column ga-4" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(FooterMenu3), (item) => {
                            return openBlock(), createBlock("div", {
                              key: item.menu
                            }, [
                              createVNode(unref(RouterLink), {
                                to: item.link,
                                target: "_blank",
                                class: "text-white text-14 text-grey100 font-weight-regular hover-primary text-decoration-none"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.menu), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ]);
                          }), 128))
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      lg: "3",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode("h5", { class: "text-17 mb-sm-8 mb-6" }, "Follow us"),
                        createVNode("div", { class: "d-flex ga-5 social-icon" }, [
                          createVNode("a", {
                            href: "/",
                            target: "_blank",
                            class: "link-btn"
                          }, [
                            (openBlock(), createBlock("svg", {
                              width: "22",
                              height: "22",
                              viewBox: "0 0 22 22",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg"
                            }, [
                              createVNode("g", { "clip-path": "url(#clip0_21817_22409)" }, [
                                createVNode("path", { d: "M22 11C22 4.92422 17.0758 0 11 0C4.92422 0 0 4.92422 0 11C0 16.1562 3.55352 20.4875 8.34453 21.6777V14.3602H6.07578V11H8.34453V9.55195C8.34453 5.80938 10.0375 4.07344 13.7156 4.07344C14.4117 4.07344 15.6148 4.21094 16.109 4.34844V7.39062C15.8512 7.36484 15.4 7.34766 14.8371 7.34766C13.0324 7.34766 12.3363 8.03086 12.3363 9.80547V11H15.9285L15.3098 14.3602H12.332V21.9184C17.7805 21.2609 22 16.6246 22 11Z" })
                              ]),
                              createVNode("defs", null, [
                                createVNode("clipPath", { id: "clip0_21817_22409" }, [
                                  createVNode("rect", {
                                    width: "22",
                                    height: "22",
                                    fill: "white"
                                  })
                                ])
                              ])
                            ])),
                            createVNode(_component_v_tooltip, {
                              activator: "parent",
                              location: "top"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Facebook")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("a", {
                            href: "/",
                            target: "_blank",
                            class: "link-btn"
                          }, [
                            (openBlock(), createBlock("svg", {
                              width: "22",
                              height: "22",
                              viewBox: "0 0 22 22",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg"
                            }, [
                              createVNode("g", { "clip-path": "url(#clip0_21817_22411)" }, [
                                createVNode("path", { d: "M19.7398 6.51836C19.7527 6.71172 19.7527 6.90938 19.7527 7.10273C19.7527 13.0625 15.2152 19.9332 6.92227 19.9332C4.36563 19.9332 1.99375 19.1941 0 17.9094C0.360937 17.9523 0.713281 17.9652 1.08711 17.9652C3.19687 17.9652 5.13477 17.252 6.68594 16.0402C4.70508 15.9973 3.04219 14.6996 2.4707 12.9121C2.75 12.9551 3.0293 12.9809 3.32148 12.9809C3.72539 12.9809 4.1293 12.925 4.50742 12.8262C2.44063 12.4094 0.89375 10.5918 0.89375 8.40039V8.34453C1.49531 8.67969 2.19141 8.89023 2.93047 8.91602C1.71445 8.1082 0.919531 6.72461 0.919531 5.16055C0.919531 4.32266 1.14297 3.55352 1.53398 2.8832C3.75547 5.62031 7.08984 7.40781 10.8324 7.60117C10.7637 7.26602 10.7207 6.91797 10.7207 6.56992C10.7207 4.08633 12.7316 2.0625 15.2281 2.0625C16.5258 2.0625 17.6988 2.6082 18.5238 3.48477C19.5422 3.29141 20.5219 2.91328 21.3855 2.39766C21.0504 3.44609 20.3371 4.32266 19.4047 4.88125C20.3113 4.78242 21.1922 4.5332 22 4.18516C21.3855 5.07891 20.6164 5.87383 19.7398 6.51836Z" })
                              ]),
                              createVNode("defs", null, [
                                createVNode("clipPath", { id: "clip0_21817_22411" }, [
                                  createVNode("rect", {
                                    width: "22",
                                    height: "22",
                                    fill: "white"
                                  })
                                ])
                              ])
                            ])),
                            createVNode(_component_v_tooltip, {
                              activator: "parent",
                              location: "top"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Twitter")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("a", {
                            href: "/",
                            target: "_blank",
                            class: "link-btn"
                          }, [
                            (openBlock(), createBlock("svg", {
                              width: "20",
                              height: "22",
                              viewBox: "0 0 20 22",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg"
                            }, [
                              createVNode("g", { "clip-path": "url(#clip0_21817_22413)" }, [
                                createVNode("path", { d: "M9.62959 6.0583C6.89678 6.0583 4.69248 8.2626 4.69248 10.9954C4.69248 13.7282 6.89678 15.9325 9.62959 15.9325C12.3624 15.9325 14.5667 13.7282 14.5667 10.9954C14.5667 8.2626 12.3624 6.0583 9.62959 6.0583ZM9.62959 14.2052C7.86357 14.2052 6.41982 12.7657 6.41982 10.9954C6.41982 9.2251 7.85928 7.78564 9.62959 7.78564C11.3999 7.78564 12.8394 9.2251 12.8394 10.9954C12.8394 12.7657 11.3956 14.2052 9.62959 14.2052ZM15.9202 5.85635C15.9202 6.49658 15.4046 7.00791 14.7687 7.00791C14.1284 7.00791 13.6171 6.49229 13.6171 5.85635C13.6171 5.22041 14.1327 4.70478 14.7687 4.70478C15.4046 4.70478 15.9202 5.22041 15.9202 5.85635ZM19.1901 7.0251C19.1171 5.48252 18.7647 4.11611 17.6347 2.99033C16.5089 1.86455 15.1425 1.51221 13.5999 1.43486C12.0101 1.34463 7.24482 1.34463 5.65498 1.43486C4.1167 1.50791 2.75029 1.86025 1.62024 2.98604C0.490137 4.11182 0.14209 5.47822 0.0647461 7.0208C-0.0254883 8.61064 -0.0254883 13.3759 0.0647461 14.9657C0.137793 16.5083 0.490137 17.8747 1.62024 19.0005C2.75029 20.1263 4.1124 20.4786 5.65498 20.556C7.24482 20.6462 12.0101 20.6462 13.5999 20.556C15.1425 20.4829 16.5089 20.1306 17.6347 19.0005C18.7605 17.8747 19.1128 16.5083 19.1901 14.9657C19.2804 13.3759 19.2804 8.61494 19.1901 7.0251ZM17.1362 16.6716C16.8011 17.5138 16.1522 18.1626 15.3058 18.5021C14.0382 19.0048 11.0304 18.8888 9.62959 18.8888C8.22881 18.8888 5.2167 19.0005 3.95342 18.5021C3.11123 18.1669 2.4624 17.5181 2.12295 16.6716C1.62024 15.404 1.73623 12.3962 1.73623 10.9954C1.73623 9.59463 1.62451 6.58252 2.12295 5.31924C2.45811 4.47705 3.10693 3.82822 3.95342 3.48877C5.221 2.98603 8.22881 3.10205 9.62959 3.10205C11.0304 3.10205 14.0425 2.99033 15.3058 3.48877C16.148 3.82393 16.7968 4.47275 17.1362 5.31924C17.639 6.58682 17.5229 9.59463 17.5229 10.9954C17.5229 12.3962 17.639 15.4083 17.1362 16.6716Z" })
                              ]),
                              createVNode("defs", null, [
                                createVNode("clipPath", { id: "clip0_21817_22413" }, [
                                  createVNode("rect", {
                                    width: "19.25",
                                    height: "22",
                                    fill: "white"
                                  })
                                ])
                              ])
                            ])),
                            createVNode(_component_v_tooltip, {
                              activator: "parent",
                              location: "top"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Instagram")
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_v_divider, { class: "opacity-30" }),
              createVNode("div", { class: "py-sm-10 py-6" }, [
                createVNode("div", { class: "d-sm-flex justify-space-between" }, [
                  createVNode("div", { class: "d-flex ga-2 justify-sm-start justify-center" }, [
                    createVNode("img", {
                      src: _imports_0,
                      height: "24",
                      class: "me-1",
                      alt: "logo"
                    }),
                    createVNode("span", { class: "text-white text-15 text-grey100" }, "All rights reserved by Spike.")
                  ]),
                  createVNode("p", { class: "text-white text-15 d-flex align-center justify-sm-end justify-center pt-sm-0 pt-2" }, [
                    createVNode("span", { class: "opacity-50" }, "Produced by"),
                    createVNode("a", {
                      href: "https://wrappixel.com/",
                      target: "_blank",
                      class: "text-white text-decoration-none hover-primary text-15 ms-1"
                    }, " Wrappixel.")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/frontpages/layout/Footer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Navigation",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const navigation = ref([
      {
        menu: "About Us",
        href: "/front-pages/about-us",
        badge: false
      },
      {
        menu: "Blog",
        href: "/front-pages/blog/posts",
        badge: false
      },
      {
        menu: "Portfolio",
        href: "/front-pages/portfolio",
        badge: true
      },
      {
        menu: "Dashboard",
        href: "/dashboards/dashboard1",
        badge: false
      },
      {
        menu: "Pricing",
        href: "/front-pages/pricing",
        badge: false
      },
      {
        menu: "Contact",
        href: "/front-pages/contact-us",
        badge: false
      }
    ]);
    const isActive = (href) => route.path === href;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-lg-row flex-column align-lg-center justify-space-between w-100 ga-lg-6 ga-4 pa-lg-0 pa-6" }, _attrs))}><div class="d-lg-none d-block mb-4">`);
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`</div><!--[-->`);
      ssrRenderList(navigation.value, (item, i) => {
        _push(`<div><div class="d-flex align-center">`);
        _push(ssrRenderComponent(unref(RouterLink), {
          to: item.href,
          class: [
            "text-15 font-weight-semibold text-decoration-none text-hover-primary d-flex align-center ga-2 px-3 py-lg-1 py-2 lg-w-auto w-100",
            isActive(item.href) ? "text-primary light-primary rounded-pill" : ""
          ]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.menu)} `);
              if (item.badge) {
                _push2(ssrRenderComponent(_component_v_chip, {
                  class: "font-weight-semibold h-23",
                  color: "primary",
                  size: "small",
                  rounded: "pill",
                  label: ""
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` New `);
                    } else {
                      return [
                        createTextVNode(" New ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createTextVNode(toDisplayString(item.menu) + " ", 1),
                item.badge ? (openBlock(), createBlock(_component_v_chip, {
                  key: 0,
                  class: "font-weight-semibold h-23",
                  color: "primary",
                  size: "small",
                  rounded: "pill",
                  label: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode(" New ")
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_v_btn, {
        class: "d-md-none d-flex w-full text-white h-43 px-5 transform-none",
        color: "primary",
        href: "/auth/login",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-white"${_scopeId}>Log in</span>`);
          } else {
            return [
              createVNode("span", { class: "text-white" }, "Log in")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/frontpages/layout/Navigation.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const appsdrawer = ref(false);
    useCustomizerStore();
    const stickyHeader = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_app_bar = resolveComponent("v-app-bar");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_toolbar = resolveComponent("v-toolbar");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_navigation_drawer = resolveComponent("v-navigation-drawer");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-473315bc><div class="bg-background" data-v-473315bc>`);
      _push(ssrRenderComponent(_component_v_app_bar, {
        height: "80",
        class: ["front-lp-header position-relative", stickyHeader.value ? "sticky-header py-0" : "py-md-4"],
        flat: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_container, { class: "py-0 max-width-1218" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_toolbar, { class: "d-flex align-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div data-v-473315bc${_scopeId3}>`);
                        _push4(ssrRenderComponent(_sfc_main$5, null, null, _parent4, _scopeId3));
                        _push4(`</div><div class="navigation mx-auto d-lg-flex d-none" data-v-473315bc${_scopeId3}>`);
                        _push4(ssrRenderComponent(_sfc_main$2, null, null, _parent4, _scopeId3));
                        _push4(`</div><div class="d-flex ms-xl-0 ms-auto" data-v-473315bc${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_btn, {
                          class: "me-lg-0 me-3 d-md-flex d-none text-white px-6 transform-none custom-hover-primary bg-primary",
                          rounded: "pill",
                          size: "large",
                          flat: "",
                          href: "/auth/login",
                          target: "_blank"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="text-white" data-v-473315bc${_scopeId4}>Log in</span>`);
                            } else {
                              return [
                                createVNode("span", { class: "text-white" }, "Log in")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_btn, {
                          variant: "text",
                          class: "hidden-lg-and-up",
                          icon: "",
                          onClick: ($event) => appsdrawer.value = !appsdrawer.value
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Menu2Icon), {
                                size: "22",
                                "stroke-width": "1.5"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(Menu2Icon), {
                                  size: "22",
                                  "stroke-width": "1.5"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", null, [
                            createVNode(_sfc_main$5)
                          ]),
                          createVNode("div", { class: "navigation mx-auto d-lg-flex d-none" }, [
                            createVNode(_sfc_main$2)
                          ]),
                          createVNode("div", { class: "d-flex ms-xl-0 ms-auto" }, [
                            createVNode(_component_v_btn, {
                              class: "me-lg-0 me-3 d-md-flex d-none text-white px-6 transform-none custom-hover-primary bg-primary",
                              rounded: "pill",
                              size: "large",
                              flat: "",
                              href: "/auth/login",
                              target: "_blank"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-white" }, "Log in")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_btn, {
                              variant: "text",
                              class: "hidden-lg-and-up",
                              icon: "",
                              onClick: withModifiers(($event) => appsdrawer.value = !appsdrawer.value, ["stop"])
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Menu2Icon), {
                                  size: "22",
                                  "stroke-width": "1.5"
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_toolbar, { class: "d-flex align-center" }, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode(_sfc_main$5)
                        ]),
                        createVNode("div", { class: "navigation mx-auto d-lg-flex d-none" }, [
                          createVNode(_sfc_main$2)
                        ]),
                        createVNode("div", { class: "d-flex ms-xl-0 ms-auto" }, [
                          createVNode(_component_v_btn, {
                            class: "me-lg-0 me-3 d-md-flex d-none text-white px-6 transform-none custom-hover-primary bg-primary",
                            rounded: "pill",
                            size: "large",
                            flat: "",
                            href: "/auth/login",
                            target: "_blank"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-white" }, "Log in")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_btn, {
                            variant: "text",
                            class: "hidden-lg-and-up",
                            icon: "",
                            onClick: withModifiers(($event) => appsdrawer.value = !appsdrawer.value, ["stop"])
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Menu2Icon), {
                                size: "22",
                                "stroke-width": "1.5"
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
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
              createVNode(_component_v_container, { class: "py-0 max-width-1218" }, {
                default: withCtx(() => [
                  createVNode(_component_v_toolbar, { class: "d-flex align-center" }, {
                    default: withCtx(() => [
                      createVNode("div", null, [
                        createVNode(_sfc_main$5)
                      ]),
                      createVNode("div", { class: "navigation mx-auto d-lg-flex d-none" }, [
                        createVNode(_sfc_main$2)
                      ]),
                      createVNode("div", { class: "d-flex ms-xl-0 ms-auto" }, [
                        createVNode(_component_v_btn, {
                          class: "me-lg-0 me-3 d-md-flex d-none text-white px-6 transform-none custom-hover-primary bg-primary",
                          rounded: "pill",
                          size: "large",
                          flat: "",
                          href: "/auth/login",
                          target: "_blank"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-white" }, "Log in")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_btn, {
                          variant: "text",
                          class: "hidden-lg-and-up",
                          icon: "",
                          onClick: withModifiers(($event) => appsdrawer.value = !appsdrawer.value, ["stop"])
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Menu2Icon), {
                              size: "22",
                              "stroke-width": "1.5"
                            })
                          ]),
                          _: 1
                        }, 8, ["onClick"])
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
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_v_navigation_drawer, {
        class: "lp-drawer",
        modelValue: appsdrawer.value,
        "onUpdate:modelValue": ($event) => appsdrawer.value = $event,
        location: "left",
        temporary: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/frontpages/layout/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-473315bc"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "front-wraper bg-surface" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/front-pages/Layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));

export { AboutFeatures as A, FAQData as F, Layout as L, OurLeaders as O, Packages as P, QA1 as Q, ThemeFeature1 as T, _sfc_main as _, ThemeFeature2 as a, ThemeFeature3 as b, _imports_0 as c, QA2 as d, QA3 as e, QA4 as f, Features as g, userReviewFrront as u };
//# sourceMappingURL=Layout-pJxOOMlF.mjs.map
