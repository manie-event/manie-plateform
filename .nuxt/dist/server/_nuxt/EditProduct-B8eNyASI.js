import { defineComponent, ref, resolveComponent, withCtx, createTextVNode, createVNode, unref, createBlock, createCommentVNode, openBlock, mergeProps, toDisplayString, useSSRContext, Fragment, renderList, computed } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrRenderAttrs } from "vue/server-renderer";
import { _ as _sfc_main$8 } from "./BaseBreadcrumb-DAIjkUfv.js";
import { useEditor, EditorContent } from "@tiptap/vue-3";
import { _ as _sfc_main$7 } from "./EditorMenubar-BNXoNSa3.js";
import StarterKit from "@tiptap/starter-kit";
import { InfoCircleIcon, XIcon } from "vue-tabler-icons";
import { _ as __nuxt_component_0 } from "./client-only-Bwxzq3Sq.js";
import { j as img5, k as img2, l as user3, m as user4, o as img6, p as img7, q as useTheme, s as img11 } from "../server.mjs";
import "hookable";
import "ofetch";
import "#internal/nuxt/paths";
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
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "GeneralTab",
  __ssrInlineRender: true,
  setup(__props) {
    const editor = useEditor({
      extensions: [StarterKit]
    });
    const discount = ref("percent");
    const select = ref("Taxable Goods");
    const items = ref(["Tax Free", "Taxable Goods", "Downloadable Product"]);
    const slider = ref(40);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_label = resolveComponent("v-label");
      const _component_VTextField = resolveComponent("VTextField");
      const _component_v_file_input = resolveComponent("v-file-input");
      const _component_v_menu = resolveComponent("v-menu");
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_radio_group = resolveComponent("v-radio-group");
      const _component_v_radio = resolveComponent("v-radio");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_slider = resolveComponent("v-slider");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<!--[--><div class="pa-1 pt-0">`);
      _push(ssrRenderComponent(_component_v_card, {
        elevation: "10",
        class: "mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h5 class="text-h5 mb-8"${_scopeId2}>General</h5>`);
                  _push3(ssrRenderComponent(_component_v_row, { class: "d-flex flex-cols gap-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Product Name <span class="text-error ms-1"${_scopeId5}>*</span>`);
                                  } else {
                                    return [
                                      createTextVNode("Product Name "),
                                      createVNode("span", { class: "text-error ms-1" }, "*")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_VTextField, {
                                type: "text",
                                value: "Sample product",
                                placeholder: "Product Name",
                                variant: "outlined",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                              _push5(`<p class="textSecondary text-12 mt-1"${_scopeId4}> A product name is required and recommended to be unique. </p>`);
                            } else {
                              return [
                                createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Product Name "),
                                    createVNode("span", { class: "text-error ms-1" }, "*")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_VTextField, {
                                  type: "text",
                                  value: "Sample product",
                                  placeholder: "Product Name",
                                  variant: "outlined",
                                  "hide-details": ""
                                }),
                                createVNode("p", { class: "textSecondary text-12 mt-1" }, " A product name is required and recommended to be unique. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Description`);
                                  } else {
                                    return [
                                      createTextVNode("Description")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_card, { variant: "outlined" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    if (unref(editor)) {
                                      _push6(`<div${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_sfc_main$7, {
                                        editor: unref(editor),
                                        class: "border-b"
                                      }, null, _parent6, _scopeId5));
                                      _push6(`</div>`);
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    _push6(ssrRenderComponent(unref(EditorContent), {
                                      editor: unref(editor),
                                      style: { "min-height": "150px" }
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      unref(editor) ? (openBlock(), createBlock("div", { key: 0 }, [
                                        createVNode(_sfc_main$7, {
                                          editor: unref(editor),
                                          class: "border-b"
                                        }, null, 8, ["editor"])
                                      ])) : createCommentVNode("", true),
                                      createVNode(unref(EditorContent), {
                                        editor: unref(editor),
                                        style: { "min-height": "150px" }
                                      }, null, 8, ["editor"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<p class="textSecondary text-12 mt-1"${_scopeId4}> Set a description to the product for better visibility. </p>`);
                            } else {
                              return [
                                createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Description")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_card, { variant: "outlined" }, {
                                  default: withCtx(() => [
                                    unref(editor) ? (openBlock(), createBlock("div", { key: 0 }, [
                                      createVNode(_sfc_main$7, {
                                        editor: unref(editor),
                                        class: "border-b"
                                      }, null, 8, ["editor"])
                                    ])) : createCommentVNode("", true),
                                    createVNode(unref(EditorContent), {
                                      editor: unref(editor),
                                      style: { "min-height": "150px" }
                                    }, null, 8, ["editor"])
                                  ]),
                                  _: 1
                                }),
                                createVNode("p", { class: "textSecondary text-12 mt-1" }, " Set a description to the product for better visibility. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                default: withCtx(() => [
                                  createTextVNode("Product Name "),
                                  createVNode("span", { class: "text-error ms-1" }, "*")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VTextField, {
                                type: "text",
                                value: "Sample product",
                                placeholder: "Product Name",
                                variant: "outlined",
                                "hide-details": ""
                              }),
                              createVNode("p", { class: "textSecondary text-12 mt-1" }, " A product name is required and recommended to be unique. ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                default: withCtx(() => [
                                  createTextVNode("Description")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_card, { variant: "outlined" }, {
                                default: withCtx(() => [
                                  unref(editor) ? (openBlock(), createBlock("div", { key: 0 }, [
                                    createVNode(_sfc_main$7, {
                                      editor: unref(editor),
                                      class: "border-b"
                                    }, null, 8, ["editor"])
                                  ])) : createCommentVNode("", true),
                                  createVNode(unref(EditorContent), {
                                    editor: unref(editor),
                                    style: { "min-height": "150px" }
                                  }, null, 8, ["editor"])
                                ]),
                                _: 1
                              }),
                              createVNode("p", { class: "textSecondary text-12 mt-1" }, " Set a description to the product for better visibility. ")
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
                    createVNode("h5", { class: "text-h5 mb-8" }, "General"),
                    createVNode(_component_v_row, { class: "d-flex flex-cols gap-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                              default: withCtx(() => [
                                createTextVNode("Product Name "),
                                createVNode("span", { class: "text-error ms-1" }, "*")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VTextField, {
                              type: "text",
                              value: "Sample product",
                              placeholder: "Product Name",
                              variant: "outlined",
                              "hide-details": ""
                            }),
                            createVNode("p", { class: "textSecondary text-12 mt-1" }, " A product name is required and recommended to be unique. ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                              default: withCtx(() => [
                                createTextVNode("Description")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_card, { variant: "outlined" }, {
                              default: withCtx(() => [
                                unref(editor) ? (openBlock(), createBlock("div", { key: 0 }, [
                                  createVNode(_sfc_main$7, {
                                    editor: unref(editor),
                                    class: "border-b"
                                  }, null, 8, ["editor"])
                                ])) : createCommentVNode("", true),
                                createVNode(unref(EditorContent), {
                                  editor: unref(editor),
                                  style: { "min-height": "150px" }
                                }, null, 8, ["editor"])
                              ]),
                              _: 1
                            }),
                            createVNode("p", { class: "textSecondary text-12 mt-1" }, " Set a description to the product for better visibility. ")
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
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode("h5", { class: "text-h5 mb-8" }, "General"),
                  createVNode(_component_v_row, { class: "d-flex flex-cols gap-3" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                            default: withCtx(() => [
                              createTextVNode("Product Name "),
                              createVNode("span", { class: "text-error ms-1" }, "*")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VTextField, {
                            type: "text",
                            value: "Sample product",
                            placeholder: "Product Name",
                            variant: "outlined",
                            "hide-details": ""
                          }),
                          createVNode("p", { class: "textSecondary text-12 mt-1" }, " A product name is required and recommended to be unique. ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                            default: withCtx(() => [
                              createTextVNode("Description")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_card, { variant: "outlined" }, {
                            default: withCtx(() => [
                              unref(editor) ? (openBlock(), createBlock("div", { key: 0 }, [
                                createVNode(_sfc_main$7, {
                                  editor: unref(editor),
                                  class: "border-b"
                                }, null, 8, ["editor"])
                              ])) : createCommentVNode("", true),
                              createVNode(unref(EditorContent), {
                                editor: unref(editor),
                                style: { "min-height": "150px" }
                              }, null, 8, ["editor"])
                            ]),
                            _: 1
                          }),
                          createVNode("p", { class: "textSecondary text-12 mt-1" }, " Set a description to the product for better visibility. ")
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
      _push(ssrRenderComponent(_component_v_card, {
        elevation: "10",
        class: "mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h5 class="text-h5 mb-8"${_scopeId2}>Media</h5>`);
                  _push3(ssrRenderComponent(_component_v_file_input, {
                    color: "primary",
                    label: "Drop files here or click to upload.",
                    placeholder: "Select your files",
                    "prepend-icon": "mdi-paperclip",
                    variant: "outlined",
                    chips: "",
                    multiple: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("h5", { class: "text-h5 mb-8" }, "Media"),
                    createVNode(_component_v_file_input, {
                      color: "primary",
                      label: "Drop files here or click to upload.",
                      placeholder: "Select your files",
                      "prepend-icon": "mdi-paperclip",
                      variant: "outlined",
                      chips: "",
                      multiple: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode("h5", { class: "text-h5 mb-8" }, "Media"),
                  createVNode(_component_v_file_input, {
                    color: "primary",
                    label: "Drop files here or click to upload.",
                    placeholder: "Select your files",
                    "prepend-icon": "mdi-paperclip",
                    variant: "outlined",
                    chips: "",
                    multiple: ""
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_card, {
        elevation: "10",
        class: "mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h5 class="text-h5 mb-8"${_scopeId2}>Pricing</h5>`);
                  _push3(ssrRenderComponent(_component_v_row, { class: "d-flex flex-cols gap-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Base Price <span class="text-error ms-1"${_scopeId5}>*</span>`);
                                  } else {
                                    return [
                                      createTextVNode("Base Price "),
                                      createVNode("span", { class: "text-error ms-1" }, "*")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_VTextField, {
                                type: "text",
                                value: "199.99",
                                placeholder: "Product price",
                                variant: "outlined",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                              _push5(`<p class="textSecondary text-12 mt-1"${_scopeId4}>Set the product price.</p>`);
                            } else {
                              return [
                                createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Base Price "),
                                    createVNode("span", { class: "text-error ms-1" }, "*")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_VTextField, {
                                  type: "text",
                                  value: "199.99",
                                  placeholder: "Product price",
                                  variant: "outlined",
                                  "hide-details": ""
                                }),
                                createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product price.")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex align-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_label, { class: "font-weight-medium mb-2 me-1" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Discount Type `);
                                  } else {
                                    return [
                                      createTextVNode("Discount Type ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_menu, {
                                "open-on-hover": "",
                                location: "top"
                              }, {
                                activator: withCtx(({ props }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_RouterLink, mergeProps({ to: "#" }, props, {
                                      class: "textSecondary",
                                      icon: ""
                                    }), {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(InfoCircleIcon), { height: "15" }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(InfoCircleIcon), { height: "15" })
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_RouterLink, mergeProps({ to: "#" }, props, {
                                        class: "textSecondary",
                                        icon: ""
                                      }), {
                                        default: withCtx(() => [
                                          createVNode(unref(InfoCircleIcon), { height: "15" })
                                        ]),
                                        _: 2
                                      }, 1040)
                                    ];
                                  }
                                }),
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_sheet, {
                                      rounded: "sm",
                                      width: "180",
                                      class: "pa-4 text-center text-body-2",
                                      "elevation-10": ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Select a discount type that will be applied to this product `);
                                        } else {
                                          return [
                                            createTextVNode(" Select a discount type that will be applied to this product ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_sheet, {
                                        rounded: "sm",
                                        width: "180",
                                        class: "pa-4 text-center text-body-2",
                                        "elevation-10": ""
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Select a discount type that will be applied to this product ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                              _push5(ssrRenderComponent(_component_v_radio_group, {
                                modelValue: discount.value,
                                "onUpdate:modelValue": ($event) => discount.value = $event
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="d-sm-flex d-block gap-3 justify-space-between"${_scopeId5}><div class="py-3 px-3 w-100 border border-dashed rounded-md mb-6"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_v_radio, {
                                      value: "no-discount",
                                      color: "primary"
                                    }, {
                                      label: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="d-flex align-center w-100"${_scopeId6}><h6 class="text-h6"${_scopeId6}>No Discount</h6></div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "d-flex align-center w-100" }, [
                                              createVNode("h6", { class: "text-h6" }, "No Discount")
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div><div class="py-3 px-3 w-100 border border-dashed rounded-md mb-6"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_v_radio, {
                                      value: "percent",
                                      color: "primary"
                                    }, {
                                      label: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h6 class="text-h6"${_scopeId6}>Percentage %</h6>`);
                                        } else {
                                          return [
                                            createVNode("h6", { class: "text-h6" }, "Percentage %")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div><div class="py-3 px-3 w-100 border border-dashed rounded-md mb-6"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_v_radio, {
                                      value: "fixed",
                                      color: "primary"
                                    }, {
                                      label: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h6 class="text-h6"${_scopeId6}>Fixed Price</h6>`);
                                        } else {
                                          return [
                                            createVNode("h6", { class: "text-h6" }, "Fixed Price")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "d-sm-flex d-block gap-3 justify-space-between" }, [
                                        createVNode("div", { class: "py-3 px-3 w-100 border border-dashed rounded-md mb-6" }, [
                                          createVNode(_component_v_radio, {
                                            value: "no-discount",
                                            color: "primary"
                                          }, {
                                            label: withCtx(() => [
                                              createVNode("div", { class: "d-flex align-center w-100" }, [
                                                createVNode("h6", { class: "text-h6" }, "No Discount")
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        createVNode("div", { class: "py-3 px-3 w-100 border border-dashed rounded-md mb-6" }, [
                                          createVNode(_component_v_radio, {
                                            value: "percent",
                                            color: "primary"
                                          }, {
                                            label: withCtx(() => [
                                              createVNode("h6", { class: "text-h6" }, "Percentage %")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        createVNode("div", { class: "py-3 px-3 w-100 border border-dashed rounded-md mb-6" }, [
                                          createVNode(_component_v_radio, {
                                            value: "fixed",
                                            color: "primary"
                                          }, {
                                            label: withCtx(() => [
                                              createVNode("h6", { class: "text-h6" }, "Fixed Price")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              if (discount.value == "no-discount") {
                                _push5(`<div${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_v_row, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_col, {
                                        cols: "12",
                                        md: "6",
                                        class: "pt-0"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Tax Class <span class="text-error ms-1"${_scopeId7}>*</span>`);
                                                } else {
                                                  return [
                                                    createTextVNode("Tax Class "),
                                                    createVNode("span", { class: "text-error ms-1" }, "*")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_v_select, {
                                              modelValue: select.value,
                                              "onUpdate:modelValue": ($event) => select.value = $event,
                                              items: items.value,
                                              variant: "outlined",
                                              density: "compact",
                                              class: "text-body-1",
                                              "hide-details": ""
                                            }, null, _parent7, _scopeId6));
                                            _push7(`<p class="textSecondary text-12 mt-1"${_scopeId6}>Set the product tax class.</p>`);
                                          } else {
                                            return [
                                              createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Tax Class "),
                                                  createVNode("span", { class: "text-error ms-1" }, "*")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_select, {
                                                modelValue: select.value,
                                                "onUpdate:modelValue": ($event) => select.value = $event,
                                                items: items.value,
                                                variant: "outlined",
                                                density: "compact",
                                                class: "text-body-1",
                                                "hide-details": ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                              createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product tax class.")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_v_col, {
                                        cols: "12",
                                        md: "6",
                                        class: "pt-0"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`VAT Amount (%) <span class="text-error ms-1"${_scopeId7}>*</span>`);
                                                } else {
                                                  return [
                                                    createTextVNode("VAT Amount (%) "),
                                                    createVNode("span", { class: "text-error ms-1" }, "*")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_VTextField, {
                                              type: "text",
                                              placeholder: "Product Name",
                                              variant: "outlined",
                                              "hide-details": ""
                                            }, null, _parent7, _scopeId6));
                                            _push7(`<p class="textSecondary text-12 mt-1"${_scopeId6}>Set the product VAT about.</p>`);
                                          } else {
                                            return [
                                              createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("VAT Amount (%) "),
                                                  createVNode("span", { class: "text-error ms-1" }, "*")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_VTextField, {
                                                type: "text",
                                                placeholder: "Product Name",
                                                variant: "outlined",
                                                "hide-details": ""
                                              }),
                                              createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product VAT about.")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          md: "6",
                                          class: "pt-0"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Tax Class "),
                                                createVNode("span", { class: "text-error ms-1" }, "*")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_select, {
                                              modelValue: select.value,
                                              "onUpdate:modelValue": ($event) => select.value = $event,
                                              items: items.value,
                                              variant: "outlined",
                                              density: "compact",
                                              class: "text-body-1",
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                            createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product tax class.")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          md: "6",
                                          class: "pt-0"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                              default: withCtx(() => [
                                                createTextVNode("VAT Amount (%) "),
                                                createVNode("span", { class: "text-error ms-1" }, "*")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_VTextField, {
                                              type: "text",
                                              placeholder: "Product Name",
                                              variant: "outlined",
                                              "hide-details": ""
                                            }),
                                            createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product VAT about.")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              if (discount.value == "percent") {
                                _push5(`<div${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_v_row, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Set Discount Percentage <span class="text-error ms-1"${_scopeId7}>*</span>`);
                                                } else {
                                                  return [
                                                    createTextVNode("Set Discount Percentage "),
                                                    createVNode("span", { class: "text-error ms-1" }, "*")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(`<h3 class="text-h2 text-center"${_scopeId6}>${ssrInterpolate(slider.value)}</h3>`);
                                            _push7(ssrRenderComponent(_component_v_slider, {
                                              class: "mt-3",
                                              modelValue: slider.value,
                                              "onUpdate:modelValue": ($event) => slider.value = $event,
                                              "hide-details": "",
                                              color: "primary",
                                              step: "10",
                                              "show-ticks": "always",
                                              "thumb-label": "always"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`<p class="textSecondary text-12 mt-1"${_scopeId6}> Set a percentage discount to be applied on this product. </p>`);
                                          } else {
                                            return [
                                              createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Set Discount Percentage "),
                                                  createVNode("span", { class: "text-error ms-1" }, "*")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode("h3", { class: "text-h2 text-center" }, toDisplayString(slider.value), 1),
                                              createVNode(_component_v_slider, {
                                                class: "mt-3",
                                                modelValue: slider.value,
                                                "onUpdate:modelValue": ($event) => slider.value = $event,
                                                "hide-details": "",
                                                color: "primary",
                                                step: "10",
                                                "show-ticks": "always",
                                                "thumb-label": "always"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode("p", { class: "textSecondary text-12 mt-1" }, " Set a percentage discount to be applied on this product. ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_col, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Set Discount Percentage "),
                                                createVNode("span", { class: "text-error ms-1" }, "*")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode("h3", { class: "text-h2 text-center" }, toDisplayString(slider.value), 1),
                                            createVNode(_component_v_slider, {
                                              class: "mt-3",
                                              modelValue: slider.value,
                                              "onUpdate:modelValue": ($event) => slider.value = $event,
                                              "hide-details": "",
                                              color: "primary",
                                              step: "10",
                                              "show-ticks": "always",
                                              "thumb-label": "always"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode("p", { class: "textSecondary text-12 mt-1" }, " Set a percentage discount to be applied on this product. ")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_v_row, { class: "mt-6" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_col, {
                                        cols: "12",
                                        md: "6",
                                        class: "pt-0"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Tax Class <span class="text-error ms-1"${_scopeId7}>*</span>`);
                                                } else {
                                                  return [
                                                    createTextVNode("Tax Class "),
                                                    createVNode("span", { class: "text-error ms-1" }, "*")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_v_select, {
                                              modelValue: select.value,
                                              "onUpdate:modelValue": ($event) => select.value = $event,
                                              items: items.value,
                                              variant: "outlined",
                                              density: "compact",
                                              class: "text-body-1",
                                              "hide-details": ""
                                            }, null, _parent7, _scopeId6));
                                            _push7(`<p class="textSecondary text-12 mt-1"${_scopeId6}>Set the product tax class.</p>`);
                                          } else {
                                            return [
                                              createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Tax Class "),
                                                  createVNode("span", { class: "text-error ms-1" }, "*")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_select, {
                                                modelValue: select.value,
                                                "onUpdate:modelValue": ($event) => select.value = $event,
                                                items: items.value,
                                                variant: "outlined",
                                                density: "compact",
                                                class: "text-body-1",
                                                "hide-details": ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                              createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product tax class.")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_v_col, {
                                        cols: "12",
                                        md: "6",
                                        class: "pt-0"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`VAT Amountb (%) <span class="text-error ms-1"${_scopeId7}>*</span>`);
                                                } else {
                                                  return [
                                                    createTextVNode("VAT Amountb (%) "),
                                                    createVNode("span", { class: "text-error ms-1" }, "*")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_VTextField, {
                                              type: "text",
                                              value: "35",
                                              placeholder: "",
                                              variant: "outlined",
                                              "hide-details": ""
                                            }, null, _parent7, _scopeId6));
                                            _push7(`<p class="textSecondary text-12 mt-1"${_scopeId6}>Set the product VAT about.</p>`);
                                          } else {
                                            return [
                                              createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("VAT Amountb (%) "),
                                                  createVNode("span", { class: "text-error ms-1" }, "*")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_VTextField, {
                                                type: "text",
                                                value: "35",
                                                placeholder: "",
                                                variant: "outlined",
                                                "hide-details": ""
                                              }),
                                              createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product VAT about.")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          md: "6",
                                          class: "pt-0"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Tax Class "),
                                                createVNode("span", { class: "text-error ms-1" }, "*")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_select, {
                                              modelValue: select.value,
                                              "onUpdate:modelValue": ($event) => select.value = $event,
                                              items: items.value,
                                              variant: "outlined",
                                              density: "compact",
                                              class: "text-body-1",
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                            createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product tax class.")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          md: "6",
                                          class: "pt-0"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                              default: withCtx(() => [
                                                createTextVNode("VAT Amountb (%) "),
                                                createVNode("span", { class: "text-error ms-1" }, "*")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_VTextField, {
                                              type: "text",
                                              value: "35",
                                              placeholder: "",
                                              variant: "outlined",
                                              "hide-details": ""
                                            }),
                                            createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product VAT about.")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              if (discount.value == "fixed") {
                                _push5(`<div${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_v_row, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_col, {
                                        cols: "12",
                                        class: "pt-0 mb-3"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Fixed Discounted Price`);
                                                } else {
                                                  return [
                                                    createTextVNode("Fixed Discounted Price")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_VTextField, {
                                              type: "text",
                                              placeholder: "Discounted Price",
                                              variant: "outlined",
                                              "hide-details": ""
                                            }, null, _parent7, _scopeId6));
                                            _push7(`<p class="textSecondary text-12 mt-1"${_scopeId6}> Set the discounted product price. The product will be reduced at the determined fixed price </p>`);
                                          } else {
                                            return [
                                              createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Fixed Discounted Price")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_VTextField, {
                                                type: "text",
                                                placeholder: "Discounted Price",
                                                variant: "outlined",
                                                "hide-details": ""
                                              }),
                                              createVNode("p", { class: "textSecondary text-12 mt-1" }, " Set the discounted product price. The product will be reduced at the determined fixed price ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_v_col, {
                                        cols: "12",
                                        md: "6",
                                        class: "pt-0"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Tax Class <span class="text-error ms-1"${_scopeId7}>*</span>`);
                                                } else {
                                                  return [
                                                    createTextVNode("Tax Class "),
                                                    createVNode("span", { class: "text-error ms-1" }, "*")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_v_select, {
                                              modelValue: select.value,
                                              "onUpdate:modelValue": ($event) => select.value = $event,
                                              items: items.value,
                                              variant: "outlined",
                                              density: "compact",
                                              class: "text-body-1",
                                              "hide-details": ""
                                            }, null, _parent7, _scopeId6));
                                            _push7(`<p class="textSecondary text-12 mt-1"${_scopeId6}>Set the product tax class.</p>`);
                                          } else {
                                            return [
                                              createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Tax Class "),
                                                  createVNode("span", { class: "text-error ms-1" }, "*")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_select, {
                                                modelValue: select.value,
                                                "onUpdate:modelValue": ($event) => select.value = $event,
                                                items: items.value,
                                                variant: "outlined",
                                                density: "compact",
                                                class: "text-body-1",
                                                "hide-details": ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                              createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product tax class.")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_v_col, {
                                        cols: "12",
                                        md: "6",
                                        class: "pt-0"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`VAT Amount (%) <span class="text-error ms-1"${_scopeId7}>*</span>`);
                                                } else {
                                                  return [
                                                    createTextVNode("VAT Amount (%) "),
                                                    createVNode("span", { class: "text-error ms-1" }, "*")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_VTextField, {
                                              type: "text",
                                              placeholder: "",
                                              variant: "outlined",
                                              "hide-details": ""
                                            }, null, _parent7, _scopeId6));
                                            _push7(`<p class="textSecondary text-12 mt-1"${_scopeId6}>Set the product VAT about.</p>`);
                                          } else {
                                            return [
                                              createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("VAT Amount (%) "),
                                                  createVNode("span", { class: "text-error ms-1" }, "*")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_VTextField, {
                                                type: "text",
                                                placeholder: "",
                                                variant: "outlined",
                                                "hide-details": ""
                                              }),
                                              createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product VAT about.")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          class: "pt-0 mb-3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Fixed Discounted Price")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_VTextField, {
                                              type: "text",
                                              placeholder: "Discounted Price",
                                              variant: "outlined",
                                              "hide-details": ""
                                            }),
                                            createVNode("p", { class: "textSecondary text-12 mt-1" }, " Set the discounted product price. The product will be reduced at the determined fixed price ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          md: "6",
                                          class: "pt-0"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Tax Class "),
                                                createVNode("span", { class: "text-error ms-1" }, "*")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_select, {
                                              modelValue: select.value,
                                              "onUpdate:modelValue": ($event) => select.value = $event,
                                              items: items.value,
                                              variant: "outlined",
                                              density: "compact",
                                              class: "text-body-1",
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                            createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product tax class.")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          md: "6",
                                          class: "pt-0"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                              default: withCtx(() => [
                                                createTextVNode("VAT Amount (%) "),
                                                createVNode("span", { class: "text-error ms-1" }, "*")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_VTextField, {
                                              type: "text",
                                              placeholder: "",
                                              variant: "outlined",
                                              "hide-details": ""
                                            }),
                                            createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product VAT about.")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                createVNode("div", { class: "d-flex align-center" }, [
                                  createVNode(_component_v_label, { class: "font-weight-medium mb-2 me-1" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Discount Type ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_menu, {
                                    "open-on-hover": "",
                                    location: "top"
                                  }, {
                                    activator: withCtx(({ props }) => [
                                      createVNode(_component_RouterLink, mergeProps({ to: "#" }, props, {
                                        class: "textSecondary",
                                        icon: ""
                                      }), {
                                        default: withCtx(() => [
                                          createVNode(unref(InfoCircleIcon), { height: "15" })
                                        ]),
                                        _: 2
                                      }, 1040)
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_v_sheet, {
                                        rounded: "sm",
                                        width: "180",
                                        class: "pa-4 text-center text-body-2",
                                        "elevation-10": ""
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Select a discount type that will be applied to this product ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode(_component_v_radio_group, {
                                  modelValue: discount.value,
                                  "onUpdate:modelValue": ($event) => discount.value = $event
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-sm-flex d-block gap-3 justify-space-between" }, [
                                      createVNode("div", { class: "py-3 px-3 w-100 border border-dashed rounded-md mb-6" }, [
                                        createVNode(_component_v_radio, {
                                          value: "no-discount",
                                          color: "primary"
                                        }, {
                                          label: withCtx(() => [
                                            createVNode("div", { class: "d-flex align-center w-100" }, [
                                              createVNode("h6", { class: "text-h6" }, "No Discount")
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode("div", { class: "py-3 px-3 w-100 border border-dashed rounded-md mb-6" }, [
                                        createVNode(_component_v_radio, {
                                          value: "percent",
                                          color: "primary"
                                        }, {
                                          label: withCtx(() => [
                                            createVNode("h6", { class: "text-h6" }, "Percentage %")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode("div", { class: "py-3 px-3 w-100 border border-dashed rounded-md mb-6" }, [
                                        createVNode(_component_v_radio, {
                                          value: "fixed",
                                          color: "primary"
                                        }, {
                                          label: withCtx(() => [
                                            createVNode("h6", { class: "text-h6" }, "Fixed Price")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"]),
                                discount.value == "no-discount" ? (openBlock(), createBlock("div", { key: 0 }, [
                                  createVNode(_component_v_row, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6",
                                        class: "pt-0"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Tax Class "),
                                              createVNode("span", { class: "text-error ms-1" }, "*")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_select, {
                                            modelValue: select.value,
                                            "onUpdate:modelValue": ($event) => select.value = $event,
                                            items: items.value,
                                            variant: "outlined",
                                            density: "compact",
                                            class: "text-body-1",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                          createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product tax class.")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6",
                                        class: "pt-0"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                            default: withCtx(() => [
                                              createTextVNode("VAT Amount (%) "),
                                              createVNode("span", { class: "text-error ms-1" }, "*")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_VTextField, {
                                            type: "text",
                                            placeholder: "Product Name",
                                            variant: "outlined",
                                            "hide-details": ""
                                          }),
                                          createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product VAT about.")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])) : createCommentVNode("", true),
                                discount.value == "percent" ? (openBlock(), createBlock("div", { key: 1 }, [
                                  createVNode(_component_v_row, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Set Discount Percentage "),
                                              createVNode("span", { class: "text-error ms-1" }, "*")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("h3", { class: "text-h2 text-center" }, toDisplayString(slider.value), 1),
                                          createVNode(_component_v_slider, {
                                            class: "mt-3",
                                            modelValue: slider.value,
                                            "onUpdate:modelValue": ($event) => slider.value = $event,
                                            "hide-details": "",
                                            color: "primary",
                                            step: "10",
                                            "show-ticks": "always",
                                            "thumb-label": "always"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode("p", { class: "textSecondary text-12 mt-1" }, " Set a percentage discount to be applied on this product. ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_row, { class: "mt-6" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6",
                                        class: "pt-0"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Tax Class "),
                                              createVNode("span", { class: "text-error ms-1" }, "*")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_select, {
                                            modelValue: select.value,
                                            "onUpdate:modelValue": ($event) => select.value = $event,
                                            items: items.value,
                                            variant: "outlined",
                                            density: "compact",
                                            class: "text-body-1",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                          createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product tax class.")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6",
                                        class: "pt-0"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                            default: withCtx(() => [
                                              createTextVNode("VAT Amountb (%) "),
                                              createVNode("span", { class: "text-error ms-1" }, "*")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_VTextField, {
                                            type: "text",
                                            value: "35",
                                            placeholder: "",
                                            variant: "outlined",
                                            "hide-details": ""
                                          }),
                                          createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product VAT about.")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])) : createCommentVNode("", true),
                                discount.value == "fixed" ? (openBlock(), createBlock("div", { key: 2 }, [
                                  createVNode(_component_v_row, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        class: "pt-0 mb-3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Fixed Discounted Price")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_VTextField, {
                                            type: "text",
                                            placeholder: "Discounted Price",
                                            variant: "outlined",
                                            "hide-details": ""
                                          }),
                                          createVNode("p", { class: "textSecondary text-12 mt-1" }, " Set the discounted product price. The product will be reduced at the determined fixed price ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6",
                                        class: "pt-0"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Tax Class "),
                                              createVNode("span", { class: "text-error ms-1" }, "*")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_select, {
                                            modelValue: select.value,
                                            "onUpdate:modelValue": ($event) => select.value = $event,
                                            items: items.value,
                                            variant: "outlined",
                                            density: "compact",
                                            class: "text-body-1",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                          createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product tax class.")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6",
                                        class: "pt-0"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                            default: withCtx(() => [
                                              createTextVNode("VAT Amount (%) "),
                                              createVNode("span", { class: "text-error ms-1" }, "*")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_VTextField, {
                                            type: "text",
                                            placeholder: "",
                                            variant: "outlined",
                                            "hide-details": ""
                                          }),
                                          createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product VAT about.")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                default: withCtx(() => [
                                  createTextVNode("Base Price "),
                                  createVNode("span", { class: "text-error ms-1" }, "*")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VTextField, {
                                type: "text",
                                value: "199.99",
                                placeholder: "Product price",
                                variant: "outlined",
                                "hide-details": ""
                              }),
                              createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product price.")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex align-center" }, [
                                createVNode(_component_v_label, { class: "font-weight-medium mb-2 me-1" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Discount Type ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_menu, {
                                  "open-on-hover": "",
                                  location: "top"
                                }, {
                                  activator: withCtx(({ props }) => [
                                    createVNode(_component_RouterLink, mergeProps({ to: "#" }, props, {
                                      class: "textSecondary",
                                      icon: ""
                                    }), {
                                      default: withCtx(() => [
                                        createVNode(unref(InfoCircleIcon), { height: "15" })
                                      ]),
                                      _: 2
                                    }, 1040)
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_v_sheet, {
                                      rounded: "sm",
                                      width: "180",
                                      class: "pa-4 text-center text-body-2",
                                      "elevation-10": ""
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Select a discount type that will be applied to this product ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode(_component_v_radio_group, {
                                modelValue: discount.value,
                                "onUpdate:modelValue": ($event) => discount.value = $event
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-sm-flex d-block gap-3 justify-space-between" }, [
                                    createVNode("div", { class: "py-3 px-3 w-100 border border-dashed rounded-md mb-6" }, [
                                      createVNode(_component_v_radio, {
                                        value: "no-discount",
                                        color: "primary"
                                      }, {
                                        label: withCtx(() => [
                                          createVNode("div", { class: "d-flex align-center w-100" }, [
                                            createVNode("h6", { class: "text-h6" }, "No Discount")
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("div", { class: "py-3 px-3 w-100 border border-dashed rounded-md mb-6" }, [
                                      createVNode(_component_v_radio, {
                                        value: "percent",
                                        color: "primary"
                                      }, {
                                        label: withCtx(() => [
                                          createVNode("h6", { class: "text-h6" }, "Percentage %")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("div", { class: "py-3 px-3 w-100 border border-dashed rounded-md mb-6" }, [
                                      createVNode(_component_v_radio, {
                                        value: "fixed",
                                        color: "primary"
                                      }, {
                                        label: withCtx(() => [
                                          createVNode("h6", { class: "text-h6" }, "Fixed Price")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ])
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"]),
                              discount.value == "no-discount" ? (openBlock(), createBlock("div", { key: 0 }, [
                                createVNode(_component_v_row, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "6",
                                      class: "pt-0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Tax Class "),
                                            createVNode("span", { class: "text-error ms-1" }, "*")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_select, {
                                          modelValue: select.value,
                                          "onUpdate:modelValue": ($event) => select.value = $event,
                                          items: items.value,
                                          variant: "outlined",
                                          density: "compact",
                                          class: "text-body-1",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                        createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product tax class.")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "6",
                                      class: "pt-0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                          default: withCtx(() => [
                                            createTextVNode("VAT Amount (%) "),
                                            createVNode("span", { class: "text-error ms-1" }, "*")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_VTextField, {
                                          type: "text",
                                          placeholder: "Product Name",
                                          variant: "outlined",
                                          "hide-details": ""
                                        }),
                                        createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product VAT about.")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ])) : createCommentVNode("", true),
                              discount.value == "percent" ? (openBlock(), createBlock("div", { key: 1 }, [
                                createVNode(_component_v_row, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Set Discount Percentage "),
                                            createVNode("span", { class: "text-error ms-1" }, "*")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("h3", { class: "text-h2 text-center" }, toDisplayString(slider.value), 1),
                                        createVNode(_component_v_slider, {
                                          class: "mt-3",
                                          modelValue: slider.value,
                                          "onUpdate:modelValue": ($event) => slider.value = $event,
                                          "hide-details": "",
                                          color: "primary",
                                          step: "10",
                                          "show-ticks": "always",
                                          "thumb-label": "always"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode("p", { class: "textSecondary text-12 mt-1" }, " Set a percentage discount to be applied on this product. ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_row, { class: "mt-6" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "6",
                                      class: "pt-0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Tax Class "),
                                            createVNode("span", { class: "text-error ms-1" }, "*")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_select, {
                                          modelValue: select.value,
                                          "onUpdate:modelValue": ($event) => select.value = $event,
                                          items: items.value,
                                          variant: "outlined",
                                          density: "compact",
                                          class: "text-body-1",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                        createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product tax class.")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "6",
                                      class: "pt-0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                          default: withCtx(() => [
                                            createTextVNode("VAT Amountb (%) "),
                                            createVNode("span", { class: "text-error ms-1" }, "*")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_VTextField, {
                                          type: "text",
                                          value: "35",
                                          placeholder: "",
                                          variant: "outlined",
                                          "hide-details": ""
                                        }),
                                        createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product VAT about.")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ])) : createCommentVNode("", true),
                              discount.value == "fixed" ? (openBlock(), createBlock("div", { key: 2 }, [
                                createVNode(_component_v_row, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      class: "pt-0 mb-3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Fixed Discounted Price")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_VTextField, {
                                          type: "text",
                                          placeholder: "Discounted Price",
                                          variant: "outlined",
                                          "hide-details": ""
                                        }),
                                        createVNode("p", { class: "textSecondary text-12 mt-1" }, " Set the discounted product price. The product will be reduced at the determined fixed price ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "6",
                                      class: "pt-0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Tax Class "),
                                            createVNode("span", { class: "text-error ms-1" }, "*")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_select, {
                                          modelValue: select.value,
                                          "onUpdate:modelValue": ($event) => select.value = $event,
                                          items: items.value,
                                          variant: "outlined",
                                          density: "compact",
                                          class: "text-body-1",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                        createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product tax class.")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "6",
                                      class: "pt-0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                          default: withCtx(() => [
                                            createTextVNode("VAT Amount (%) "),
                                            createVNode("span", { class: "text-error ms-1" }, "*")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_VTextField, {
                                          type: "text",
                                          placeholder: "",
                                          variant: "outlined",
                                          "hide-details": ""
                                        }),
                                        createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product VAT about.")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ])) : createCommentVNode("", true)
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
                    createVNode("h5", { class: "text-h5 mb-8" }, "Pricing"),
                    createVNode(_component_v_row, { class: "d-flex flex-cols gap-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                              default: withCtx(() => [
                                createTextVNode("Base Price "),
                                createVNode("span", { class: "text-error ms-1" }, "*")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VTextField, {
                              type: "text",
                              value: "199.99",
                              placeholder: "Product price",
                              variant: "outlined",
                              "hide-details": ""
                            }),
                            createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product price.")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode(_component_v_label, { class: "font-weight-medium mb-2 me-1" }, {
                                default: withCtx(() => [
                                  createTextVNode("Discount Type ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_menu, {
                                "open-on-hover": "",
                                location: "top"
                              }, {
                                activator: withCtx(({ props }) => [
                                  createVNode(_component_RouterLink, mergeProps({ to: "#" }, props, {
                                    class: "textSecondary",
                                    icon: ""
                                  }), {
                                    default: withCtx(() => [
                                      createVNode(unref(InfoCircleIcon), { height: "15" })
                                    ]),
                                    _: 2
                                  }, 1040)
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_v_sheet, {
                                    rounded: "sm",
                                    width: "180",
                                    class: "pa-4 text-center text-body-2",
                                    "elevation-10": ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Select a discount type that will be applied to this product ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode(_component_v_radio_group, {
                              modelValue: discount.value,
                              "onUpdate:modelValue": ($event) => discount.value = $event
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-sm-flex d-block gap-3 justify-space-between" }, [
                                  createVNode("div", { class: "py-3 px-3 w-100 border border-dashed rounded-md mb-6" }, [
                                    createVNode(_component_v_radio, {
                                      value: "no-discount",
                                      color: "primary"
                                    }, {
                                      label: withCtx(() => [
                                        createVNode("div", { class: "d-flex align-center w-100" }, [
                                          createVNode("h6", { class: "text-h6" }, "No Discount")
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", { class: "py-3 px-3 w-100 border border-dashed rounded-md mb-6" }, [
                                    createVNode(_component_v_radio, {
                                      value: "percent",
                                      color: "primary"
                                    }, {
                                      label: withCtx(() => [
                                        createVNode("h6", { class: "text-h6" }, "Percentage %")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", { class: "py-3 px-3 w-100 border border-dashed rounded-md mb-6" }, [
                                    createVNode(_component_v_radio, {
                                      value: "fixed",
                                      color: "primary"
                                    }, {
                                      label: withCtx(() => [
                                        createVNode("h6", { class: "text-h6" }, "Fixed Price")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                            discount.value == "no-discount" ? (openBlock(), createBlock("div", { key: 0 }, [
                              createVNode(_component_v_row, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "6",
                                    class: "pt-0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Tax Class "),
                                          createVNode("span", { class: "text-error ms-1" }, "*")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_select, {
                                        modelValue: select.value,
                                        "onUpdate:modelValue": ($event) => select.value = $event,
                                        items: items.value,
                                        variant: "outlined",
                                        density: "compact",
                                        class: "text-body-1",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                      createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product tax class.")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "6",
                                    class: "pt-0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                        default: withCtx(() => [
                                          createTextVNode("VAT Amount (%) "),
                                          createVNode("span", { class: "text-error ms-1" }, "*")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_VTextField, {
                                        type: "text",
                                        placeholder: "Product Name",
                                        variant: "outlined",
                                        "hide-details": ""
                                      }),
                                      createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product VAT about.")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])) : createCommentVNode("", true),
                            discount.value == "percent" ? (openBlock(), createBlock("div", { key: 1 }, [
                              createVNode(_component_v_row, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Set Discount Percentage "),
                                          createVNode("span", { class: "text-error ms-1" }, "*")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("h3", { class: "text-h2 text-center" }, toDisplayString(slider.value), 1),
                                      createVNode(_component_v_slider, {
                                        class: "mt-3",
                                        modelValue: slider.value,
                                        "onUpdate:modelValue": ($event) => slider.value = $event,
                                        "hide-details": "",
                                        color: "primary",
                                        step: "10",
                                        "show-ticks": "always",
                                        "thumb-label": "always"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode("p", { class: "textSecondary text-12 mt-1" }, " Set a percentage discount to be applied on this product. ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_row, { class: "mt-6" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "6",
                                    class: "pt-0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Tax Class "),
                                          createVNode("span", { class: "text-error ms-1" }, "*")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_select, {
                                        modelValue: select.value,
                                        "onUpdate:modelValue": ($event) => select.value = $event,
                                        items: items.value,
                                        variant: "outlined",
                                        density: "compact",
                                        class: "text-body-1",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                      createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product tax class.")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "6",
                                    class: "pt-0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                        default: withCtx(() => [
                                          createTextVNode("VAT Amountb (%) "),
                                          createVNode("span", { class: "text-error ms-1" }, "*")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_VTextField, {
                                        type: "text",
                                        value: "35",
                                        placeholder: "",
                                        variant: "outlined",
                                        "hide-details": ""
                                      }),
                                      createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product VAT about.")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])) : createCommentVNode("", true),
                            discount.value == "fixed" ? (openBlock(), createBlock("div", { key: 2 }, [
                              createVNode(_component_v_row, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    class: "pt-0 mb-3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Fixed Discounted Price")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_VTextField, {
                                        type: "text",
                                        placeholder: "Discounted Price",
                                        variant: "outlined",
                                        "hide-details": ""
                                      }),
                                      createVNode("p", { class: "textSecondary text-12 mt-1" }, " Set the discounted product price. The product will be reduced at the determined fixed price ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "6",
                                    class: "pt-0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Tax Class "),
                                          createVNode("span", { class: "text-error ms-1" }, "*")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_select, {
                                        modelValue: select.value,
                                        "onUpdate:modelValue": ($event) => select.value = $event,
                                        items: items.value,
                                        variant: "outlined",
                                        density: "compact",
                                        class: "text-body-1",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                      createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product tax class.")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "6",
                                    class: "pt-0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                        default: withCtx(() => [
                                          createTextVNode("VAT Amount (%) "),
                                          createVNode("span", { class: "text-error ms-1" }, "*")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_VTextField, {
                                        type: "text",
                                        placeholder: "",
                                        variant: "outlined",
                                        "hide-details": ""
                                      }),
                                      createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product VAT about.")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])) : createCommentVNode("", true)
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
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode("h5", { class: "text-h5 mb-8" }, "Pricing"),
                  createVNode(_component_v_row, { class: "d-flex flex-cols gap-3" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                            default: withCtx(() => [
                              createTextVNode("Base Price "),
                              createVNode("span", { class: "text-error ms-1" }, "*")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VTextField, {
                            type: "text",
                            value: "199.99",
                            placeholder: "Product price",
                            variant: "outlined",
                            "hide-details": ""
                          }),
                          createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product price.")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex align-center" }, [
                            createVNode(_component_v_label, { class: "font-weight-medium mb-2 me-1" }, {
                              default: withCtx(() => [
                                createTextVNode("Discount Type ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_menu, {
                              "open-on-hover": "",
                              location: "top"
                            }, {
                              activator: withCtx(({ props }) => [
                                createVNode(_component_RouterLink, mergeProps({ to: "#" }, props, {
                                  class: "textSecondary",
                                  icon: ""
                                }), {
                                  default: withCtx(() => [
                                    createVNode(unref(InfoCircleIcon), { height: "15" })
                                  ]),
                                  _: 2
                                }, 1040)
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_v_sheet, {
                                  rounded: "sm",
                                  width: "180",
                                  class: "pa-4 text-center text-body-2",
                                  "elevation-10": ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Select a discount type that will be applied to this product ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode(_component_v_radio_group, {
                            modelValue: discount.value,
                            "onUpdate:modelValue": ($event) => discount.value = $event
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-sm-flex d-block gap-3 justify-space-between" }, [
                                createVNode("div", { class: "py-3 px-3 w-100 border border-dashed rounded-md mb-6" }, [
                                  createVNode(_component_v_radio, {
                                    value: "no-discount",
                                    color: "primary"
                                  }, {
                                    label: withCtx(() => [
                                      createVNode("div", { class: "d-flex align-center w-100" }, [
                                        createVNode("h6", { class: "text-h6" }, "No Discount")
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { class: "py-3 px-3 w-100 border border-dashed rounded-md mb-6" }, [
                                  createVNode(_component_v_radio, {
                                    value: "percent",
                                    color: "primary"
                                  }, {
                                    label: withCtx(() => [
                                      createVNode("h6", { class: "text-h6" }, "Percentage %")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { class: "py-3 px-3 w-100 border border-dashed rounded-md mb-6" }, [
                                  createVNode(_component_v_radio, {
                                    value: "fixed",
                                    color: "primary"
                                  }, {
                                    label: withCtx(() => [
                                      createVNode("h6", { class: "text-h6" }, "Fixed Price")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          discount.value == "no-discount" ? (openBlock(), createBlock("div", { key: 0 }, [
                            createVNode(_component_v_row, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6",
                                  class: "pt-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Tax Class "),
                                        createVNode("span", { class: "text-error ms-1" }, "*")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_select, {
                                      modelValue: select.value,
                                      "onUpdate:modelValue": ($event) => select.value = $event,
                                      items: items.value,
                                      variant: "outlined",
                                      density: "compact",
                                      class: "text-body-1",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                    createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product tax class.")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6",
                                  class: "pt-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                      default: withCtx(() => [
                                        createTextVNode("VAT Amount (%) "),
                                        createVNode("span", { class: "text-error ms-1" }, "*")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_VTextField, {
                                      type: "text",
                                      placeholder: "Product Name",
                                      variant: "outlined",
                                      "hide-details": ""
                                    }),
                                    createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product VAT about.")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])) : createCommentVNode("", true),
                          discount.value == "percent" ? (openBlock(), createBlock("div", { key: 1 }, [
                            createVNode(_component_v_row, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Set Discount Percentage "),
                                        createVNode("span", { class: "text-error ms-1" }, "*")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("h3", { class: "text-h2 text-center" }, toDisplayString(slider.value), 1),
                                    createVNode(_component_v_slider, {
                                      class: "mt-3",
                                      modelValue: slider.value,
                                      "onUpdate:modelValue": ($event) => slider.value = $event,
                                      "hide-details": "",
                                      color: "primary",
                                      step: "10",
                                      "show-ticks": "always",
                                      "thumb-label": "always"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode("p", { class: "textSecondary text-12 mt-1" }, " Set a percentage discount to be applied on this product. ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_row, { class: "mt-6" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6",
                                  class: "pt-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Tax Class "),
                                        createVNode("span", { class: "text-error ms-1" }, "*")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_select, {
                                      modelValue: select.value,
                                      "onUpdate:modelValue": ($event) => select.value = $event,
                                      items: items.value,
                                      variant: "outlined",
                                      density: "compact",
                                      class: "text-body-1",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                    createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product tax class.")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6",
                                  class: "pt-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                      default: withCtx(() => [
                                        createTextVNode("VAT Amountb (%) "),
                                        createVNode("span", { class: "text-error ms-1" }, "*")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_VTextField, {
                                      type: "text",
                                      value: "35",
                                      placeholder: "",
                                      variant: "outlined",
                                      "hide-details": ""
                                    }),
                                    createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product VAT about.")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])) : createCommentVNode("", true),
                          discount.value == "fixed" ? (openBlock(), createBlock("div", { key: 2 }, [
                            createVNode(_component_v_row, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  class: "pt-0 mb-3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Fixed Discounted Price")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_VTextField, {
                                      type: "text",
                                      placeholder: "Discounted Price",
                                      variant: "outlined",
                                      "hide-details": ""
                                    }),
                                    createVNode("p", { class: "textSecondary text-12 mt-1" }, " Set the discounted product price. The product will be reduced at the determined fixed price ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6",
                                  class: "pt-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Tax Class "),
                                        createVNode("span", { class: "text-error ms-1" }, "*")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_select, {
                                      modelValue: select.value,
                                      "onUpdate:modelValue": ($event) => select.value = $event,
                                      items: items.value,
                                      variant: "outlined",
                                      density: "compact",
                                      class: "text-body-1",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                                    createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product tax class.")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6",
                                  class: "pt-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                      default: withCtx(() => [
                                        createTextVNode("VAT Amount (%) "),
                                        createVNode("span", { class: "text-error ms-1" }, "*")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_VTextField, {
                                      type: "text",
                                      placeholder: "",
                                      variant: "outlined",
                                      "hide-details": ""
                                    }),
                                    createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set the product VAT about.")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])) : createCommentVNode("", true)
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
      _push(`</div><div class="d-flex mb-md-0 mb-3 gap-3">`);
      _push(ssrRenderComponent(_component_v_btn, {
        flat: "",
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` save changes `);
          } else {
            return [
              createTextVNode(" save changes ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_btn, {
        variant: "tonal",
        color: "error"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` cancel `);
          } else {
            return [
              createTextVNode(" cancel ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/ecommerce/editproduct/GeneralTab.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "AdvanceTab",
  __ssrInlineRender: true,
  setup(__props) {
    const editor = useEditor({
      extensions: [StarterKit]
    });
    const checkbox = ref(false);
    ref(false);
    const ship = ref("ship");
    const select = ref("Size");
    const items = ref(["Color", "Size", "Material", "Style"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_label = resolveComponent("v-label");
      const _component_VTextField = resolveComponent("VTextField");
      const _component_v_checkbox = resolveComponent("v-checkbox");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<!--[--><div class="pa-1 pt-0">`);
      _push(ssrRenderComponent(_component_v_card, {
        elevation: "10",
        class: "mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h5 class="text-h5 mb-8"${_scopeId2}>Inventory</h5>`);
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`SKU <span class="text-error ms-1"${_scopeId5}>*</span>`);
                                  } else {
                                    return [
                                      createTextVNode("SKU "),
                                      createVNode("span", { class: "text-error ms-1" }, "*")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_VTextField, {
                                type: "text",
                                value: "011985001",
                                placeholder: "SKU Number",
                                variant: "outlined",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                              _push5(`<p class="textSecondary text-12 mt-1"${_scopeId4}>Enter the product SKU.</p>`);
                            } else {
                              return [
                                createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("SKU "),
                                    createVNode("span", { class: "text-error ms-1" }, "*")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_VTextField, {
                                  type: "text",
                                  value: "011985001",
                                  placeholder: "SKU Number",
                                  variant: "outlined",
                                  "hide-details": ""
                                }),
                                createVNode("p", { class: "textSecondary text-12 mt-1" }, "Enter the product SKU.")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Barcode <span class="text-error ms-1"${_scopeId5}>*</span>`);
                                  } else {
                                    return [
                                      createTextVNode("Barcode "),
                                      createVNode("span", { class: "text-error ms-1" }, "*")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_VTextField, {
                                type: "text",
                                value: "45874521458",
                                placeholder: "Barcode Number",
                                variant: "outlined",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                              _push5(`<p class="textSecondary text-12 mt-1"${_scopeId4}>Enter the product barcode number.</p>`);
                            } else {
                              return [
                                createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Barcode "),
                                    createVNode("span", { class: "text-error ms-1" }, "*")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_VTextField, {
                                  type: "text",
                                  value: "45874521458",
                                  placeholder: "Barcode Number",
                                  variant: "outlined",
                                  "hide-details": ""
                                }),
                                createVNode("p", { class: "textSecondary text-12 mt-1" }, "Enter the product barcode number.")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Quantity <span class="text-error ms-1"${_scopeId5}>*</span>`);
                                  } else {
                                    return [
                                      createTextVNode("Quantity "),
                                      createVNode("span", { class: "text-error ms-1" }, "*")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_VTextField, {
                                type: "number",
                                value: "24",
                                variant: "outlined",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                              _push5(`<p class="textSecondary text-12 mt-1"${_scopeId4}>Enter the product quantity.</p>`);
                            } else {
                              return [
                                createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Quantity "),
                                    createVNode("span", { class: "text-error ms-1" }, "*")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_VTextField, {
                                  type: "number",
                                  value: "24",
                                  variant: "outlined",
                                  "hide-details": ""
                                }),
                                createVNode("p", { class: "textSecondary text-12 mt-1" }, "Enter the product quantity.")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, { class: "font-weight-medium mb-3" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span class="text-error ms-1"${_scopeId5}></span>`);
                                  } else {
                                    return [
                                      createVNode("span", { class: "text-error ms-1" })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_VTextField, {
                                type: "number",
                                placeholder: "In warehouse",
                                variant: "outlined",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_label, { class: "font-weight-medium mb-3" }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-error ms-1" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_VTextField, {
                                  type: "number",
                                  placeholder: "In warehouse",
                                  variant: "outlined",
                                  "hide-details": ""
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Allow Backorders`);
                                  } else {
                                    return [
                                      createTextVNode("Allow Backorders")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="d-flex flex-wrap align-center ml-n2"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_checkbox, {
                                class: "pe-2",
                                modelValue: checkbox.value,
                                "onUpdate:modelValue": ($event) => checkbox.value = $event,
                                required: "",
                                "hide-details": "",
                                color: "primary"
                              }, {
                                label: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Yes`);
                                  } else {
                                    return [
                                      createTextVNode("Yes")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div><p class="textSecondary text-12 mt-n2"${_scopeId4}> Allow customers to purchase products that are out of stock. </p>`);
                            } else {
                              return [
                                createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Allow Backorders")
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "d-flex flex-wrap align-center ml-n2" }, [
                                  createVNode(_component_v_checkbox, {
                                    class: "pe-2",
                                    modelValue: checkbox.value,
                                    "onUpdate:modelValue": ($event) => checkbox.value = $event,
                                    required: "",
                                    "hide-details": "",
                                    color: "primary"
                                  }, {
                                    label: withCtx(() => [
                                      createTextVNode("Yes")
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("p", { class: "textSecondary text-12 mt-n2" }, " Allow customers to purchase products that are out of stock. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                default: withCtx(() => [
                                  createTextVNode("SKU "),
                                  createVNode("span", { class: "text-error ms-1" }, "*")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VTextField, {
                                type: "text",
                                value: "011985001",
                                placeholder: "SKU Number",
                                variant: "outlined",
                                "hide-details": ""
                              }),
                              createVNode("p", { class: "textSecondary text-12 mt-1" }, "Enter the product SKU.")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                default: withCtx(() => [
                                  createTextVNode("Barcode "),
                                  createVNode("span", { class: "text-error ms-1" }, "*")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VTextField, {
                                type: "text",
                                value: "45874521458",
                                placeholder: "Barcode Number",
                                variant: "outlined",
                                "hide-details": ""
                              }),
                              createVNode("p", { class: "textSecondary text-12 mt-1" }, "Enter the product barcode number.")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                default: withCtx(() => [
                                  createTextVNode("Quantity "),
                                  createVNode("span", { class: "text-error ms-1" }, "*")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VTextField, {
                                type: "number",
                                value: "24",
                                variant: "outlined",
                                "hide-details": ""
                              }),
                              createVNode("p", { class: "textSecondary text-12 mt-1" }, "Enter the product quantity.")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, { class: "font-weight-medium mb-3" }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-error ms-1" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VTextField, {
                                type: "number",
                                placeholder: "In warehouse",
                                variant: "outlined",
                                "hide-details": ""
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                default: withCtx(() => [
                                  createTextVNode("Allow Backorders")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "d-flex flex-wrap align-center ml-n2" }, [
                                createVNode(_component_v_checkbox, {
                                  class: "pe-2",
                                  modelValue: checkbox.value,
                                  "onUpdate:modelValue": ($event) => checkbox.value = $event,
                                  required: "",
                                  "hide-details": "",
                                  color: "primary"
                                }, {
                                  label: withCtx(() => [
                                    createTextVNode("Yes")
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("p", { class: "textSecondary text-12 mt-n2" }, " Allow customers to purchase products that are out of stock. ")
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
                    createVNode("h5", { class: "text-h5 mb-8" }, "Inventory"),
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                              default: withCtx(() => [
                                createTextVNode("SKU "),
                                createVNode("span", { class: "text-error ms-1" }, "*")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VTextField, {
                              type: "text",
                              value: "011985001",
                              placeholder: "SKU Number",
                              variant: "outlined",
                              "hide-details": ""
                            }),
                            createVNode("p", { class: "textSecondary text-12 mt-1" }, "Enter the product SKU.")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                              default: withCtx(() => [
                                createTextVNode("Barcode "),
                                createVNode("span", { class: "text-error ms-1" }, "*")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VTextField, {
                              type: "text",
                              value: "45874521458",
                              placeholder: "Barcode Number",
                              variant: "outlined",
                              "hide-details": ""
                            }),
                            createVNode("p", { class: "textSecondary text-12 mt-1" }, "Enter the product barcode number.")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                              default: withCtx(() => [
                                createTextVNode("Quantity "),
                                createVNode("span", { class: "text-error ms-1" }, "*")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VTextField, {
                              type: "number",
                              value: "24",
                              variant: "outlined",
                              "hide-details": ""
                            }),
                            createVNode("p", { class: "textSecondary text-12 mt-1" }, "Enter the product quantity.")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, { class: "font-weight-medium mb-3" }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-error ms-1" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VTextField, {
                              type: "number",
                              placeholder: "In warehouse",
                              variant: "outlined",
                              "hide-details": ""
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                              default: withCtx(() => [
                                createTextVNode("Allow Backorders")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "d-flex flex-wrap align-center ml-n2" }, [
                              createVNode(_component_v_checkbox, {
                                class: "pe-2",
                                modelValue: checkbox.value,
                                "onUpdate:modelValue": ($event) => checkbox.value = $event,
                                required: "",
                                "hide-details": "",
                                color: "primary"
                              }, {
                                label: withCtx(() => [
                                  createTextVNode("Yes")
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("p", { class: "textSecondary text-12 mt-n2" }, " Allow customers to purchase products that are out of stock. ")
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
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode("h5", { class: "text-h5 mb-8" }, "Inventory"),
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                            default: withCtx(() => [
                              createTextVNode("SKU "),
                              createVNode("span", { class: "text-error ms-1" }, "*")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VTextField, {
                            type: "text",
                            value: "011985001",
                            placeholder: "SKU Number",
                            variant: "outlined",
                            "hide-details": ""
                          }),
                          createVNode("p", { class: "textSecondary text-12 mt-1" }, "Enter the product SKU.")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                            default: withCtx(() => [
                              createTextVNode("Barcode "),
                              createVNode("span", { class: "text-error ms-1" }, "*")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VTextField, {
                            type: "text",
                            value: "45874521458",
                            placeholder: "Barcode Number",
                            variant: "outlined",
                            "hide-details": ""
                          }),
                          createVNode("p", { class: "textSecondary text-12 mt-1" }, "Enter the product barcode number.")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                            default: withCtx(() => [
                              createTextVNode("Quantity "),
                              createVNode("span", { class: "text-error ms-1" }, "*")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VTextField, {
                            type: "number",
                            value: "24",
                            variant: "outlined",
                            "hide-details": ""
                          }),
                          createVNode("p", { class: "textSecondary text-12 mt-1" }, "Enter the product quantity.")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_label, { class: "font-weight-medium mb-3" }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-error ms-1" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VTextField, {
                            type: "number",
                            placeholder: "In warehouse",
                            variant: "outlined",
                            "hide-details": ""
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                            default: withCtx(() => [
                              createTextVNode("Allow Backorders")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "d-flex flex-wrap align-center ml-n2" }, [
                            createVNode(_component_v_checkbox, {
                              class: "pe-2",
                              modelValue: checkbox.value,
                              "onUpdate:modelValue": ($event) => checkbox.value = $event,
                              required: "",
                              "hide-details": "",
                              color: "primary"
                            }, {
                              label: withCtx(() => [
                                createTextVNode("Yes")
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("p", { class: "textSecondary text-12 mt-n2" }, " Allow customers to purchase products that are out of stock. ")
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
      _push(ssrRenderComponent(_component_v_card, {
        elevation: "10",
        class: "mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h5 class="text-h5 mb-8"${_scopeId2}>Variations</h5>`);
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          md: "10"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Add Product Variations`);
                                  } else {
                                    return [
                                      createTextVNode("Add Product Variations")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_row, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "4",
                                      class: "pb-0"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_select, {
                                            modelValue: select.value,
                                            "onUpdate:modelValue": ($event) => select.value = $event,
                                            items: items.value,
                                            variant: "outlined",
                                            class: "text-body-1",
                                            "hide-details": ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_select, {
                                              modelValue: select.value,
                                              "onUpdate:modelValue": ($event) => select.value = $event,
                                              items: items.value,
                                              variant: "outlined",
                                              class: "text-body-1",
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "4",
                                      class: "pb-0"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_VTextField, {
                                            type: "text",
                                            placeholder: "Variation",
                                            variant: "outlined",
                                            "hide-details": ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_VTextField, {
                                              type: "text",
                                              placeholder: "Variation",
                                              variant: "outlined",
                                              "hide-details": ""
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "2",
                                      class: "pb-0"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_btn, {
                                            variant: "tonal",
                                            flat: "",
                                            size: "large",
                                            class: "px-0 py-0",
                                            color: "error",
                                            "min-width": "50"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(unref(XIcon), { height: "25" }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(unref(XIcon), { height: "25" })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_btn, {
                                              variant: "tonal",
                                              flat: "",
                                              size: "large",
                                              class: "px-0 py-0",
                                              color: "error",
                                              "min-width": "50"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(XIcon), { height: "25" })
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_btn, {
                                            variant: "tonal",
                                            color: "primary"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<span class="text-20 me-1"${_scopeId7}>+</span> Add another variation`);
                                              } else {
                                                return [
                                                  createVNode("span", { class: "text-20 me-1" }, "+"),
                                                  createTextVNode(" Add another variation")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_btn, {
                                              variant: "tonal",
                                              color: "primary"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "text-20 me-1" }, "+"),
                                                createTextVNode(" Add another variation")
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
                                      createVNode(_component_v_col, {
                                        cols: "4",
                                        class: "pb-0"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_select, {
                                            modelValue: select.value,
                                            "onUpdate:modelValue": ($event) => select.value = $event,
                                            items: items.value,
                                            variant: "outlined",
                                            class: "text-body-1",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "4",
                                        class: "pb-0"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_VTextField, {
                                            type: "text",
                                            placeholder: "Variation",
                                            variant: "outlined",
                                            "hide-details": ""
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "2",
                                        class: "pb-0"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_btn, {
                                            variant: "tonal",
                                            flat: "",
                                            size: "large",
                                            class: "px-0 py-0",
                                            color: "error",
                                            "min-width": "50"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(XIcon), { height: "25" })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_btn, {
                                            variant: "tonal",
                                            color: "primary"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "text-20 me-1" }, "+"),
                                              createTextVNode(" Add another variation")
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
                                createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Add Product Variations")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_row, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "4",
                                      class: "pb-0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_select, {
                                          modelValue: select.value,
                                          "onUpdate:modelValue": ($event) => select.value = $event,
                                          items: items.value,
                                          variant: "outlined",
                                          class: "text-body-1",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "4",
                                      class: "pb-0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_VTextField, {
                                          type: "text",
                                          placeholder: "Variation",
                                          variant: "outlined",
                                          "hide-details": ""
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "2",
                                      class: "pb-0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_btn, {
                                          variant: "tonal",
                                          flat: "",
                                          size: "large",
                                          class: "px-0 py-0",
                                          color: "error",
                                          "min-width": "50"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(XIcon), { height: "25" })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_btn, {
                                          variant: "tonal",
                                          color: "primary"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "text-20 me-1" }, "+"),
                                            createTextVNode(" Add another variation")
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
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "10"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                default: withCtx(() => [
                                  createTextVNode("Add Product Variations")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_row, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "4",
                                    class: "pb-0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_select, {
                                        modelValue: select.value,
                                        "onUpdate:modelValue": ($event) => select.value = $event,
                                        items: items.value,
                                        variant: "outlined",
                                        class: "text-body-1",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "4",
                                    class: "pb-0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_VTextField, {
                                        type: "text",
                                        placeholder: "Variation",
                                        variant: "outlined",
                                        "hide-details": ""
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "2",
                                    class: "pb-0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_btn, {
                                        variant: "tonal",
                                        flat: "",
                                        size: "large",
                                        class: "px-0 py-0",
                                        color: "error",
                                        "min-width": "50"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(XIcon), { height: "25" })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_btn, {
                                        variant: "tonal",
                                        color: "primary"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "text-20 me-1" }, "+"),
                                          createTextVNode(" Add another variation")
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
                    createVNode("h5", { class: "text-h5 mb-8" }, "Variations"),
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          md: "10"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                              default: withCtx(() => [
                                createTextVNode("Add Product Variations")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_row, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "4",
                                  class: "pb-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_select, {
                                      modelValue: select.value,
                                      "onUpdate:modelValue": ($event) => select.value = $event,
                                      items: items.value,
                                      variant: "outlined",
                                      class: "text-body-1",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "4",
                                  class: "pb-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_VTextField, {
                                      type: "text",
                                      placeholder: "Variation",
                                      variant: "outlined",
                                      "hide-details": ""
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "2",
                                  class: "pb-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_btn, {
                                      variant: "tonal",
                                      flat: "",
                                      size: "large",
                                      class: "px-0 py-0",
                                      color: "error",
                                      "min-width": "50"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(XIcon), { height: "25" })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_btn, {
                                      variant: "tonal",
                                      color: "primary"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "text-20 me-1" }, "+"),
                                        createTextVNode(" Add another variation")
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
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode("h5", { class: "text-h5 mb-8" }, "Variations"),
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "10"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                            default: withCtx(() => [
                              createTextVNode("Add Product Variations")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "4",
                                class: "pb-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_select, {
                                    modelValue: select.value,
                                    "onUpdate:modelValue": ($event) => select.value = $event,
                                    items: items.value,
                                    variant: "outlined",
                                    class: "text-body-1",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "4",
                                class: "pb-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_VTextField, {
                                    type: "text",
                                    placeholder: "Variation",
                                    variant: "outlined",
                                    "hide-details": ""
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "2",
                                class: "pb-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_btn, {
                                    variant: "tonal",
                                    flat: "",
                                    size: "large",
                                    class: "px-0 py-0",
                                    color: "error",
                                    "min-width": "50"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(XIcon), { height: "25" })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_btn, {
                                    variant: "tonal",
                                    color: "primary"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "text-20 me-1" }, "+"),
                                      createTextVNode(" Add another variation")
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
      _push(ssrRenderComponent(_component_v_card, {
        elevation: "10",
        class: "mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h5 class="text-h5 mb-4"${_scopeId2}>Shipping</h5><div class="d-flex flex-wrap align-center ml-n2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_checkbox, {
                    class: "pe-2",
                    modelValue: ship.value,
                    "onUpdate:modelValue": ($event) => ship.value = $event,
                    required: "",
                    "hide-details": "",
                    color: "primary",
                    value: "ship"
                  }, {
                    label: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`This is a physical product`);
                      } else {
                        return [
                          createTextVNode("This is a physical product")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><p class="textSecondary text-12 mt-n2"${_scopeId2}> Set if the product is a physical or digital item. Physical products may require shipping. </p>`);
                  if (ship.value == "ship") {
                    _push3(`<div class="mt-8"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_row, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_col, {
                            cols: "12",
                            class: "pt-0 mb-3"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`Weight`);
                                    } else {
                                      return [
                                        createTextVNode("Weight")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_VTextField, {
                                  type: "text",
                                  value: "4.5",
                                  placeholder: "Product weight",
                                  variant: "outlined",
                                  "hide-details": ""
                                }, null, _parent5, _scopeId4));
                                _push5(`<p class="textSecondary text-12 mt-1"${_scopeId4}>Set a product weight in kilograms (kg).</p>`);
                              } else {
                                return [
                                  createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Weight")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_VTextField, {
                                    type: "text",
                                    value: "4.5",
                                    placeholder: "Product weight",
                                    variant: "outlined",
                                    "hide-details": ""
                                  }),
                                  createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set a product weight in kilograms (kg).")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`Dimension`);
                                    } else {
                                      return [
                                        createTextVNode("Dimension")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`<div class="d-md-flex gap-3"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_VTextField, {
                                  type: "number",
                                  value: "15",
                                  placeholder: "Width (w)",
                                  variant: "outlined",
                                  class: "mb-md-0 mb-3",
                                  "hide-details": ""
                                }, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_VTextField, {
                                  type: "number",
                                  value: "12",
                                  placeholder: "Height (h)",
                                  variant: "outlined",
                                  class: "mb-md-0 mb-3",
                                  "hide-details": ""
                                }, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_VTextField, {
                                  type: "number",
                                  value: "18",
                                  placeholder: "Lengtn (l)",
                                  variant: "outlined",
                                  class: "mb-md-0 mb-3",
                                  "hide-details": ""
                                }, null, _parent5, _scopeId4));
                                _push5(`</div><p class="textSecondary text-12 mt-1"${_scopeId4}> Enter the product dimensions in centimeters (cm). </p>`);
                              } else {
                                return [
                                  createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Dimension")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "d-md-flex gap-3" }, [
                                    createVNode(_component_VTextField, {
                                      type: "number",
                                      value: "15",
                                      placeholder: "Width (w)",
                                      variant: "outlined",
                                      class: "mb-md-0 mb-3",
                                      "hide-details": ""
                                    }),
                                    createVNode(_component_VTextField, {
                                      type: "number",
                                      value: "12",
                                      placeholder: "Height (h)",
                                      variant: "outlined",
                                      class: "mb-md-0 mb-3",
                                      "hide-details": ""
                                    }),
                                    createVNode(_component_VTextField, {
                                      type: "number",
                                      value: "18",
                                      placeholder: "Lengtn (l)",
                                      variant: "outlined",
                                      class: "mb-md-0 mb-3",
                                      "hide-details": ""
                                    })
                                  ]),
                                  createVNode("p", { class: "textSecondary text-12 mt-1" }, " Enter the product dimensions in centimeters (cm). ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_col, {
                              cols: "12",
                              class: "pt-0 mb-3"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Weight")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_VTextField, {
                                  type: "text",
                                  value: "4.5",
                                  placeholder: "Product weight",
                                  variant: "outlined",
                                  "hide-details": ""
                                }),
                                createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set a product weight in kilograms (kg).")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Dimension")
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "d-md-flex gap-3" }, [
                                  createVNode(_component_VTextField, {
                                    type: "number",
                                    value: "15",
                                    placeholder: "Width (w)",
                                    variant: "outlined",
                                    class: "mb-md-0 mb-3",
                                    "hide-details": ""
                                  }),
                                  createVNode(_component_VTextField, {
                                    type: "number",
                                    value: "12",
                                    placeholder: "Height (h)",
                                    variant: "outlined",
                                    class: "mb-md-0 mb-3",
                                    "hide-details": ""
                                  }),
                                  createVNode(_component_VTextField, {
                                    type: "number",
                                    value: "18",
                                    placeholder: "Lengtn (l)",
                                    variant: "outlined",
                                    class: "mb-md-0 mb-3",
                                    "hide-details": ""
                                  })
                                ]),
                                createVNode("p", { class: "textSecondary text-12 mt-1" }, " Enter the product dimensions in centimeters (cm). ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("h5", { class: "text-h5 mb-4" }, "Shipping"),
                    createVNode("div", { class: "d-flex flex-wrap align-center ml-n2" }, [
                      createVNode(_component_v_checkbox, {
                        class: "pe-2",
                        modelValue: ship.value,
                        "onUpdate:modelValue": ($event) => ship.value = $event,
                        required: "",
                        "hide-details": "",
                        color: "primary",
                        value: "ship"
                      }, {
                        label: withCtx(() => [
                          createTextVNode("This is a physical product")
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("p", { class: "textSecondary text-12 mt-n2" }, " Set if the product is a physical or digital item. Physical products may require shipping. "),
                    ship.value == "ship" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-8"
                    }, [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            class: "pt-0 mb-3"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                default: withCtx(() => [
                                  createTextVNode("Weight")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VTextField, {
                                type: "text",
                                value: "4.5",
                                placeholder: "Product weight",
                                variant: "outlined",
                                "hide-details": ""
                              }),
                              createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set a product weight in kilograms (kg).")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                default: withCtx(() => [
                                  createTextVNode("Dimension")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "d-md-flex gap-3" }, [
                                createVNode(_component_VTextField, {
                                  type: "number",
                                  value: "15",
                                  placeholder: "Width (w)",
                                  variant: "outlined",
                                  class: "mb-md-0 mb-3",
                                  "hide-details": ""
                                }),
                                createVNode(_component_VTextField, {
                                  type: "number",
                                  value: "12",
                                  placeholder: "Height (h)",
                                  variant: "outlined",
                                  class: "mb-md-0 mb-3",
                                  "hide-details": ""
                                }),
                                createVNode(_component_VTextField, {
                                  type: "number",
                                  value: "18",
                                  placeholder: "Lengtn (l)",
                                  variant: "outlined",
                                  class: "mb-md-0 mb-3",
                                  "hide-details": ""
                                })
                              ]),
                              createVNode("p", { class: "textSecondary text-12 mt-1" }, " Enter the product dimensions in centimeters (cm). ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode("h5", { class: "text-h5 mb-4" }, "Shipping"),
                  createVNode("div", { class: "d-flex flex-wrap align-center ml-n2" }, [
                    createVNode(_component_v_checkbox, {
                      class: "pe-2",
                      modelValue: ship.value,
                      "onUpdate:modelValue": ($event) => ship.value = $event,
                      required: "",
                      "hide-details": "",
                      color: "primary",
                      value: "ship"
                    }, {
                      label: withCtx(() => [
                        createTextVNode("This is a physical product")
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("p", { class: "textSecondary text-12 mt-n2" }, " Set if the product is a physical or digital item. Physical products may require shipping. "),
                  ship.value == "ship" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mt-8"
                  }, [
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          class: "pt-0 mb-3"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                              default: withCtx(() => [
                                createTextVNode("Weight")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VTextField, {
                              type: "text",
                              value: "4.5",
                              placeholder: "Product weight",
                              variant: "outlined",
                              "hide-details": ""
                            }),
                            createVNode("p", { class: "textSecondary text-12 mt-1" }, "Set a product weight in kilograms (kg).")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                              default: withCtx(() => [
                                createTextVNode("Dimension")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "d-md-flex gap-3" }, [
                              createVNode(_component_VTextField, {
                                type: "number",
                                value: "15",
                                placeholder: "Width (w)",
                                variant: "outlined",
                                class: "mb-md-0 mb-3",
                                "hide-details": ""
                              }),
                              createVNode(_component_VTextField, {
                                type: "number",
                                value: "12",
                                placeholder: "Height (h)",
                                variant: "outlined",
                                class: "mb-md-0 mb-3",
                                "hide-details": ""
                              }),
                              createVNode(_component_VTextField, {
                                type: "number",
                                value: "18",
                                placeholder: "Lengtn (l)",
                                variant: "outlined",
                                class: "mb-md-0 mb-3",
                                "hide-details": ""
                              })
                            ]),
                            createVNode("p", { class: "textSecondary text-12 mt-1" }, " Enter the product dimensions in centimeters (cm). ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_card, {
        elevation: "10",
        class: "mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h5 class="text-h5 mb-4"${_scopeId2}>Meta Options</h5>`);
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          class: "mb-3 mt-3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Meta Tag Title`);
                                  } else {
                                    return [
                                      createTextVNode("Meta Tag Title")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_VTextField, {
                                type: "text",
                                value: "sample product",
                                placeholder: "Meta tag name",
                                variant: "outlined",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                              _push5(`<p class="textSecondary text-12 mt-1"${_scopeId4}> Set a meta tag title. Recommended to be simple and precise keywords. </p>`);
                            } else {
                              return [
                                createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Meta Tag Title")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_VTextField, {
                                  type: "text",
                                  value: "sample product",
                                  placeholder: "Meta tag name",
                                  variant: "outlined",
                                  "hide-details": ""
                                }),
                                createVNode("p", { class: "textSecondary text-12 mt-1" }, " Set a meta tag title. Recommended to be simple and precise keywords. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Meta Tag Description`);
                                  } else {
                                    return [
                                      createTextVNode("Meta Tag Description")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_card, { variant: "outlined" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    if (unref(editor)) {
                                      _push6(`<div${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_sfc_main$7, {
                                        editor: unref(editor),
                                        class: "border-b"
                                      }, null, _parent6, _scopeId5));
                                      _push6(`</div>`);
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    _push6(ssrRenderComponent(unref(EditorContent), { editor: unref(editor) }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      unref(editor) ? (openBlock(), createBlock("div", { key: 0 }, [
                                        createVNode(_sfc_main$7, {
                                          editor: unref(editor),
                                          class: "border-b"
                                        }, null, 8, ["editor"])
                                      ])) : createCommentVNode("", true),
                                      createVNode(unref(EditorContent), { editor: unref(editor) }, null, 8, ["editor"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<p class="textSecondary text-12 mt-1"${_scopeId4}> Set a meta tag description to the product for increased SEO ranking. </p>`);
                            } else {
                              return [
                                createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Meta Tag Description")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_card, { variant: "outlined" }, {
                                  default: withCtx(() => [
                                    unref(editor) ? (openBlock(), createBlock("div", { key: 0 }, [
                                      createVNode(_sfc_main$7, {
                                        editor: unref(editor),
                                        class: "border-b"
                                      }, null, 8, ["editor"])
                                    ])) : createCommentVNode("", true),
                                    createVNode(unref(EditorContent), { editor: unref(editor) }, null, 8, ["editor"])
                                  ]),
                                  _: 1
                                }),
                                createVNode("p", { class: "textSecondary text-12 mt-1" }, " Set a meta tag description to the product for increased SEO ranking. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            cols: "12",
                            class: "mb-3 mt-3"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                default: withCtx(() => [
                                  createTextVNode("Meta Tag Title")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VTextField, {
                                type: "text",
                                value: "sample product",
                                placeholder: "Meta tag name",
                                variant: "outlined",
                                "hide-details": ""
                              }),
                              createVNode("p", { class: "textSecondary text-12 mt-1" }, " Set a meta tag title. Recommended to be simple and precise keywords. ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                                default: withCtx(() => [
                                  createTextVNode("Meta Tag Description")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_card, { variant: "outlined" }, {
                                default: withCtx(() => [
                                  unref(editor) ? (openBlock(), createBlock("div", { key: 0 }, [
                                    createVNode(_sfc_main$7, {
                                      editor: unref(editor),
                                      class: "border-b"
                                    }, null, 8, ["editor"])
                                  ])) : createCommentVNode("", true),
                                  createVNode(unref(EditorContent), { editor: unref(editor) }, null, 8, ["editor"])
                                ]),
                                _: 1
                              }),
                              createVNode("p", { class: "textSecondary text-12 mt-1" }, " Set a meta tag description to the product for increased SEO ranking. ")
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
                    createVNode("h5", { class: "text-h5 mb-4" }, "Meta Options"),
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          class: "mb-3 mt-3"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                              default: withCtx(() => [
                                createTextVNode("Meta Tag Title")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VTextField, {
                              type: "text",
                              value: "sample product",
                              placeholder: "Meta tag name",
                              variant: "outlined",
                              "hide-details": ""
                            }),
                            createVNode("p", { class: "textSecondary text-12 mt-1" }, " Set a meta tag title. Recommended to be simple and precise keywords. ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                              default: withCtx(() => [
                                createTextVNode("Meta Tag Description")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_card, { variant: "outlined" }, {
                              default: withCtx(() => [
                                unref(editor) ? (openBlock(), createBlock("div", { key: 0 }, [
                                  createVNode(_sfc_main$7, {
                                    editor: unref(editor),
                                    class: "border-b"
                                  }, null, 8, ["editor"])
                                ])) : createCommentVNode("", true),
                                createVNode(unref(EditorContent), { editor: unref(editor) }, null, 8, ["editor"])
                              ]),
                              _: 1
                            }),
                            createVNode("p", { class: "textSecondary text-12 mt-1" }, " Set a meta tag description to the product for increased SEO ranking. ")
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
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode("h5", { class: "text-h5 mb-4" }, "Meta Options"),
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        class: "mb-3 mt-3"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                            default: withCtx(() => [
                              createTextVNode("Meta Tag Title")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VTextField, {
                            type: "text",
                            value: "sample product",
                            placeholder: "Meta tag name",
                            variant: "outlined",
                            "hide-details": ""
                          }),
                          createVNode("p", { class: "textSecondary text-12 mt-1" }, " Set a meta tag title. Recommended to be simple and precise keywords. ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                            default: withCtx(() => [
                              createTextVNode("Meta Tag Description")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_card, { variant: "outlined" }, {
                            default: withCtx(() => [
                              unref(editor) ? (openBlock(), createBlock("div", { key: 0 }, [
                                createVNode(_sfc_main$7, {
                                  editor: unref(editor),
                                  class: "border-b"
                                }, null, 8, ["editor"])
                              ])) : createCommentVNode("", true),
                              createVNode(unref(EditorContent), { editor: unref(editor) }, null, 8, ["editor"])
                            ]),
                            _: 1
                          }),
                          createVNode("p", { class: "textSecondary text-12 mt-1" }, " Set a meta tag description to the product for increased SEO ranking. ")
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
      _push(`</div><div class="d-flex mb-md-0 mb-3 gap-3">`);
      _push(ssrRenderComponent(_component_v_btn, {
        flat: "",
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` save changes `);
          } else {
            return [
              createTextVNode(" save changes ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_btn, {
        variant: "tonal",
        color: "error"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` cancel `);
          } else {
            return [
              createTextVNode(" cancel ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/ecommerce/editproduct/AdvanceTab.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ProductreviewData = [
  {
    review: 5,
    image: img5,
    name: "Sunil Joshi",
    comment: "I like this design",
    date: "1 day ago"
  },
  {
    review: 4,
    image: img2,
    name: "Mark Richard",
    comment: "Awesome quality with great materials used, but could be more comfortable",
    date: "11:20 PM"
  },
  {
    review: 4.5,
    image: user3,
    name: "Hanry Lord",
    comment: "This is the best product I have ever used.",
    date: "Today"
  },
  {
    review: 3.5,
    image: user4,
    name: "Britny Cox",
    comment: "Beautifully crafted. Worth every penny.",
    date: "Today"
  },
  {
    review: 4,
    image: img5,
    name: "Olvin wild",
    comment: "Awesome value for money. Shipping could be faster tho.",
    date: "12:00 PM"
  },
  {
    review: 5,
    image: img6,
    name: "Dan wilsed",
    comment: "Excellent quality, I got it for my sons birthday and he loved it",
    date: "1 May 2024"
  },
  {
    review: 5,
    image: img7,
    name: "Jon Miller",
    comment: "Firesale is on! Buy now! Totally worth it!",
    date: "25 April 2024"
  }
];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ReviewsTab",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_table = resolveComponent("v-table");
      const _component_ClientOnly = __nuxt_component_0;
      const _component_v_rating = resolveComponent("v-rating");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<!--[--><div class="pa-1 pt-0">`);
      _push(ssrRenderComponent(_component_v_card, {
        elevation: "10",
        class: "mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h5 class="text-h5 mb-8"${_scopeId2}>Customer Reviews</h5>`);
                  _push3(ssrRenderComponent(_component_v_table, { class: "month-table" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<thead${_scopeId3}><tr${_scopeId3}><th class="text-body-1"${_scopeId3}>Rating</th><th class="text-body-1"${_scopeId3}>Customer</th><th class="text-body-1"${_scopeId3}>Comment</th><th class="text-body-1 text-end"${_scopeId3}>Date</th></tr></thead><tbody${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(ProductreviewData), (item) => {
                          _push4(`<tr class="month-item"${_scopeId3}><td${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_ClientOnly, null, {}, _parent4, _scopeId3));
                          _push4(`</td><td${_scopeId3}><div class="d-flex gap-2 align-center"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_v_avatar, { size: "30" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.image)} width="30"${_scopeId4}>`);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: item.image,
                                    alt: item.image,
                                    width: "30"
                                  }, null, 8, ["src", "alt"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<h6 class="text-subtitle-1 text-no-wrap"${_scopeId3}>${ssrInterpolate(item.name)}</h6></div></td><td${_scopeId3}><p style="${ssrRenderStyle({ "max-width": "280px" })}" class="text-body-1 textSecondary"${_scopeId3}>${ssrInterpolate(item.comment)}</p></td><td class="text-end"${_scopeId3}><p class="text-body-1 textSecondary"${_scopeId3}>${ssrInterpolate(item.date)}</p></td></tr>`);
                        });
                        _push4(`<!--]--></tbody>`);
                      } else {
                        return [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", { class: "text-body-1" }, "Rating"),
                              createVNode("th", { class: "text-body-1" }, "Customer"),
                              createVNode("th", { class: "text-body-1" }, "Comment"),
                              createVNode("th", { class: "text-body-1 text-end" }, "Date")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(ProductreviewData), (item) => {
                              return openBlock(), createBlock("tr", {
                                key: item.name,
                                class: "month-item"
                              }, [
                                createVNode("td", null, [
                                  createVNode(_component_ClientOnly, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_rating, {
                                        modelValue: item.review,
                                        "onUpdate:modelValue": ($event) => item.review = $event,
                                        "half-increments": "",
                                        size: "small",
                                        color: "warning",
                                        density: "compact"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                createVNode("td", null, [
                                  createVNode("div", { class: "d-flex gap-2 align-center" }, [
                                    createVNode(_component_v_avatar, { size: "30" }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: item.image,
                                          alt: item.image,
                                          width: "30"
                                        }, null, 8, ["src", "alt"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("h6", { class: "text-subtitle-1 text-no-wrap" }, toDisplayString(item.name), 1)
                                  ])
                                ]),
                                createVNode("td", null, [
                                  createVNode("p", {
                                    style: { "max-width": "280px" },
                                    class: "text-body-1 textSecondary"
                                  }, toDisplayString(item.comment), 1)
                                ]),
                                createVNode("td", { class: "text-end" }, [
                                  createVNode("p", { class: "text-body-1 textSecondary" }, toDisplayString(item.date), 1)
                                ])
                              ]);
                            }), 128))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("h5", { class: "text-h5 mb-8" }, "Customer Reviews"),
                    createVNode(_component_v_table, { class: "month-table" }, {
                      default: withCtx(() => [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", { class: "text-body-1" }, "Rating"),
                            createVNode("th", { class: "text-body-1" }, "Customer"),
                            createVNode("th", { class: "text-body-1" }, "Comment"),
                            createVNode("th", { class: "text-body-1 text-end" }, "Date")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(ProductreviewData), (item) => {
                            return openBlock(), createBlock("tr", {
                              key: item.name,
                              class: "month-item"
                            }, [
                              createVNode("td", null, [
                                createVNode(_component_ClientOnly, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_rating, {
                                      modelValue: item.review,
                                      "onUpdate:modelValue": ($event) => item.review = $event,
                                      "half-increments": "",
                                      size: "small",
                                      color: "warning",
                                      density: "compact"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              createVNode("td", null, [
                                createVNode("div", { class: "d-flex gap-2 align-center" }, [
                                  createVNode(_component_v_avatar, { size: "30" }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: item.image,
                                        alt: item.image,
                                        width: "30"
                                      }, null, 8, ["src", "alt"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("h6", { class: "text-subtitle-1 text-no-wrap" }, toDisplayString(item.name), 1)
                                ])
                              ]),
                              createVNode("td", null, [
                                createVNode("p", {
                                  style: { "max-width": "280px" },
                                  class: "text-body-1 textSecondary"
                                }, toDisplayString(item.comment), 1)
                              ]),
                              createVNode("td", { class: "text-end" }, [
                                createVNode("p", { class: "text-body-1 textSecondary" }, toDisplayString(item.date), 1)
                              ])
                            ]);
                          }), 128))
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
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode("h5", { class: "text-h5 mb-8" }, "Customer Reviews"),
                  createVNode(_component_v_table, { class: "month-table" }, {
                    default: withCtx(() => [
                      createVNode("thead", null, [
                        createVNode("tr", null, [
                          createVNode("th", { class: "text-body-1" }, "Rating"),
                          createVNode("th", { class: "text-body-1" }, "Customer"),
                          createVNode("th", { class: "text-body-1" }, "Comment"),
                          createVNode("th", { class: "text-body-1 text-end" }, "Date")
                        ])
                      ]),
                      createVNode("tbody", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(ProductreviewData), (item) => {
                          return openBlock(), createBlock("tr", {
                            key: item.name,
                            class: "month-item"
                          }, [
                            createVNode("td", null, [
                              createVNode(_component_ClientOnly, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_rating, {
                                    modelValue: item.review,
                                    "onUpdate:modelValue": ($event) => item.review = $event,
                                    "half-increments": "",
                                    size: "small",
                                    color: "warning",
                                    density: "compact"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            createVNode("td", null, [
                              createVNode("div", { class: "d-flex gap-2 align-center" }, [
                                createVNode(_component_v_avatar, { size: "30" }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: item.image,
                                      alt: item.image,
                                      width: "30"
                                    }, null, 8, ["src", "alt"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("h6", { class: "text-subtitle-1 text-no-wrap" }, toDisplayString(item.name), 1)
                              ])
                            ]),
                            createVNode("td", null, [
                              createVNode("p", {
                                style: { "max-width": "280px" },
                                class: "text-body-1 textSecondary"
                              }, toDisplayString(item.comment), 1)
                            ]),
                            createVNode("td", { class: "text-end" }, [
                              createVNode("p", { class: "text-body-1 textSecondary" }, toDisplayString(item.date), 1)
                            ])
                          ]);
                        }), 128))
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
      _push(`</div><div class="d-flex mb-md-0 mb-3 gap-3">`);
      _push(ssrRenderComponent(_component_v_btn, {
        flat: "",
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` save changes `);
          } else {
            return [
              createTextVNode(" save changes ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_btn, {
        variant: "tonal",
        color: "error"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` cancel `);
          } else {
            return [
              createTextVNode(" cancel ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/ecommerce/editproduct/ReviewsTab.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "LeftSide",
  __ssrInlineRender: true,
  setup(__props) {
    const tab = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_tabs = resolveComponent("v-tabs");
      const _component_v_tab = resolveComponent("v-tab");
      const _component_v_window = resolveComponent("v-window");
      const _component_v_window_item = resolveComponent("v-window-item");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_tabs, {
        modelValue: tab.value,
        "onUpdate:modelValue": ($event) => tab.value = $event,
        "bg-color": "transparent",
        height: "60",
        color: "primary",
        class: "mb-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_tab, {
              value: "General",
              class: "text-h6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` General`);
                } else {
                  return [
                    createTextVNode(" General")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_tab, {
              value: "Advanced",
              class: "text-h6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Advanced`);
                } else {
                  return [
                    createTextVNode("Advanced")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_tab, {
              value: "Reviews",
              class: "text-h6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Reviews`);
                } else {
                  return [
                    createTextVNode("Reviews")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_tab, {
                value: "General",
                class: "text-h6"
              }, {
                default: withCtx(() => [
                  createTextVNode(" General")
                ]),
                _: 1
              }),
              createVNode(_component_v_tab, {
                value: "Advanced",
                class: "text-h6"
              }, {
                default: withCtx(() => [
                  createTextVNode("Advanced")
                ]),
                _: 1
              }),
              createVNode(_component_v_tab, {
                value: "Reviews",
                class: "text-h6"
              }, {
                default: withCtx(() => [
                  createTextVNode("Reviews")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_window, {
        modelValue: tab.value,
        "onUpdate:modelValue": ($event) => tab.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_window_item, { value: "General" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$6, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$6)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_window_item, { value: "Advanced" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$5, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$5)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_window_item, { value: "Reviews" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$4, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$4)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_window_item, { value: "General" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$6)
                ]),
                _: 1
              }),
              createVNode(_component_v_window_item, { value: "Advanced" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$5)
                ]),
                _: 1
              }),
              createVNode(_component_v_window_item, { value: "Reviews" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$4)
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/ecommerce/editproduct/LeftSide.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DailySalesChart",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = useTheme();
    const primary = theme.current.value.colors.primary;
    const chartOptions = computed(() => {
      return {
        chart: {
          type: "bar",
          height: 80,
          fontFamily: `inherit`,
          sparkline: {
            enabled: true
          }
        },
        colors: [primary, primary, primary, primary, primary, primary],
        plotOptions: {
          bar: {
            borderRadius: 4,
            columnWidth: "50%",
            distributed: true,
            endingShape: "rounded"
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        grid: {
          show: false,
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        },
        xaxis: {
          categories: ["Jan", "Feb", "March", "April", "May", "June", "July"],
          labels: {
            show: false
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          labels: {
            show: false
          }
        },
        tooltip: {
          theme: "dark"
        }
      };
    });
    const Chart = {
      series: [
        {
          name: "",
          data: [20, 15, 30, 25, 10, 18, 20]
        }
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_subtitle = resolveComponent("v-card-subtitle");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_ClientOnly = __nuxt_component_0;
      const _component_apexchart = resolveComponent("apexchart");
      _push(ssrRenderComponent(_component_v_card, mergeProps({
        elevation: "10",
        class: "mb-6"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex justify-space-between align-end"${_scopeId2}><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_card_title, { class: "text-h5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`$2,420`);
                      } else {
                        return [
                          createTextVNode("$2,420")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_subtitle, { class: "text-subtitle-1 pb-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Average Daily Sales`);
                      } else {
                        return [
                          createTextVNode(" Average Daily Sales")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_v_chip, {
                    color: "success",
                    size: "small",
                    class: "text-white rounded-sm"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`2.6%`);
                      } else {
                        return [
                          createTextVNode("2.6%")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="mx-n1"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ClientOnly, null, {}, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex justify-space-between align-end" }, [
                      createVNode("div", null, [
                        createVNode(_component_v_card_title, { class: "text-h5" }, {
                          default: withCtx(() => [
                            createTextVNode("$2,420")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_card_subtitle, { class: "text-subtitle-1 pb-0" }, {
                          default: withCtx(() => [
                            createTextVNode(" Average Daily Sales")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(_component_v_chip, {
                        color: "success",
                        size: "small",
                        class: "text-white rounded-sm"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("2.6%")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "mx-n1" }, [
                      createVNode(_component_ClientOnly, null, {
                        default: withCtx(() => [
                          createVNode(_component_apexchart, {
                            class: "mt-6",
                            type: "bar",
                            height: "80",
                            options: chartOptions.value,
                            series: Chart.series
                          }, null, 8, ["options", "series"])
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
              createVNode(_component_v_card_item, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex justify-space-between align-end" }, [
                    createVNode("div", null, [
                      createVNode(_component_v_card_title, { class: "text-h5" }, {
                        default: withCtx(() => [
                          createTextVNode("$2,420")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_card_subtitle, { class: "text-subtitle-1 pb-0" }, {
                        default: withCtx(() => [
                          createTextVNode(" Average Daily Sales")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_v_chip, {
                      color: "success",
                      size: "small",
                      class: "text-white rounded-sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("2.6%")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "mx-n1" }, [
                    createVNode(_component_ClientOnly, null, {
                      default: withCtx(() => [
                        createVNode(_component_apexchart, {
                          class: "mt-6",
                          type: "bar",
                          height: "80",
                          options: chartOptions.value,
                          series: Chart.series
                        }, null, 8, ["options", "series"])
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/ecommerce/editproduct/DailySalesChart.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RightSide",
  __ssrInlineRender: true,
  setup(__props) {
    const select = ref("Draft");
    const selectmultiple = ref(["Computer", "Watches", "Headphones"]);
    const itemsmultiple = ["Computer", "Watches", "Headphones", "Beauty", "Fashion", "Footwear"];
    const tagsselect = ref(["trending", "Beauty", "Fashion"]);
    const tagsitems = ["new", "trending", "Headphones", "Beauty", "Fashion", "Footwear"];
    const templateselect = ref("Office Stationary");
    const templateitems = ["Default Template", "Fashion", "Office Stationary", "Electronics"];
    const fileInput = ref();
    const imageUrl = ref(img11);
    const handleFileChange = (event) => {
      var _a;
      const target = event.target;
      const file = (_a = target.files) == null ? void 0 : _a[0];
      if (!file) return;
      if (file.size > 1024 * 1024 * 5) {
        alert("File size is too large! Max 5MB allowed.");
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        var _a2;
        imageUrl.value = (_a2 = e.target) == null ? void 0 : _a2.result;
      };
      reader.readAsDataURL(file);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_label = resolveComponent("v-label");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_combobox = resolveComponent("v-combobox");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-md-16 mt-5" }, _attrs))}><div class="pt-md-7">`);
      _push(ssrRenderComponent(_component_v_card, {
        elevation: "10",
        class: "mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h5 class="text-h5 mb-8"${_scopeId2}>Thumbnail</h5><div class="upload-btn-wrapper position-relative overflow-hidden d-flex align-center" elevation="10"${_scopeId2}><input type="file" accept="image/*"${_scopeId2}><img${ssrRenderAttr("src", imageUrl.value)} alt="Image Preview" class="w-100"${_scopeId2}></div><p class="text-12 textSecondary text-center mt-5"${_scopeId2}> Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image files are accepted </p>`);
                } else {
                  return [
                    createVNode("h5", { class: "text-h5 mb-8" }, "Thumbnail"),
                    createVNode("div", {
                      class: "upload-btn-wrapper position-relative overflow-hidden d-flex align-center",
                      elevation: "10"
                    }, [
                      createVNode("input", {
                        type: "file",
                        ref_key: "fileInput",
                        ref: fileInput,
                        onChange: handleFileChange,
                        accept: "image/*"
                      }, null, 544),
                      createVNode("img", {
                        src: imageUrl.value,
                        alt: "Image Preview",
                        class: "w-100"
                      }, null, 8, ["src"])
                    ]),
                    createVNode("p", { class: "text-12 textSecondary text-center mt-5" }, " Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image files are accepted ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_item, null, {
                default: withCtx(() => [
                  createVNode("h5", { class: "text-h5 mb-8" }, "Thumbnail"),
                  createVNode("div", {
                    class: "upload-btn-wrapper position-relative overflow-hidden d-flex align-center",
                    elevation: "10"
                  }, [
                    createVNode("input", {
                      type: "file",
                      ref_key: "fileInput",
                      ref: fileInput,
                      onChange: handleFileChange,
                      accept: "image/*"
                    }, null, 544),
                    createVNode("img", {
                      src: imageUrl.value,
                      alt: "Image Preview",
                      class: "w-100"
                    }, null, 8, ["src"])
                  ]),
                  createVNode("p", { class: "text-12 textSecondary text-center mt-5" }, " Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image files are accepted ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_card, {
        elevation: "10",
        class: "mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center justify-space-between"${_scopeId2}><h5 class="text-h5"${_scopeId2}>Status</h5>`);
                  if (select.value == "Published") {
                    _push3(ssrRenderComponent(_component_v_avatar, {
                      size: "12",
                      class: "bg-success rounded-circle"
                    }, null, _parent3, _scopeId2));
                  } else if (select.value == "Draft") {
                    _push3(ssrRenderComponent(_component_v_avatar, {
                      size: "12",
                      class: "bg-error rounded-circle"
                    }, null, _parent3, _scopeId2));
                  } else if (select.value == "Scheduled") {
                    _push3(ssrRenderComponent(_component_v_avatar, {
                      size: "12",
                      class: "bg-primary rounded-circle"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(_component_v_avatar, {
                      size: "12",
                      class: "bg-warning rounded-circle"
                    }, null, _parent3, _scopeId2));
                  }
                  _push3(`</div><div class="mt-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_select, {
                    modelValue: select.value,
                    "onUpdate:modelValue": ($event) => select.value = $event,
                    variant: "outlined",
                    items: ["Published", "Draft", "Scheduled", "Inactive"]
                  }, null, _parent3, _scopeId2));
                  _push3(`<p class="text-12 textSecondary mt-n3"${_scopeId2}>Set the product status.</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                      createVNode("h5", { class: "text-h5" }, "Status"),
                      select.value == "Published" ? (openBlock(), createBlock(_component_v_avatar, {
                        key: 0,
                        size: "12",
                        class: "bg-success rounded-circle"
                      })) : select.value == "Draft" ? (openBlock(), createBlock(_component_v_avatar, {
                        key: 1,
                        size: "12",
                        class: "bg-error rounded-circle"
                      })) : select.value == "Scheduled" ? (openBlock(), createBlock(_component_v_avatar, {
                        key: 2,
                        size: "12",
                        class: "bg-primary rounded-circle"
                      })) : (openBlock(), createBlock(_component_v_avatar, {
                        key: 3,
                        size: "12",
                        class: "bg-warning rounded-circle"
                      }))
                    ]),
                    createVNode("div", { class: "mt-3" }, [
                      createVNode(_component_v_select, {
                        modelValue: select.value,
                        "onUpdate:modelValue": ($event) => select.value = $event,
                        variant: "outlined",
                        items: ["Published", "Draft", "Scheduled", "Inactive"]
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("p", { class: "text-12 textSecondary mt-n3" }, "Set the product status.")
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
                  createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                    createVNode("h5", { class: "text-h5" }, "Status"),
                    select.value == "Published" ? (openBlock(), createBlock(_component_v_avatar, {
                      key: 0,
                      size: "12",
                      class: "bg-success rounded-circle"
                    })) : select.value == "Draft" ? (openBlock(), createBlock(_component_v_avatar, {
                      key: 1,
                      size: "12",
                      class: "bg-error rounded-circle"
                    })) : select.value == "Scheduled" ? (openBlock(), createBlock(_component_v_avatar, {
                      key: 2,
                      size: "12",
                      class: "bg-primary rounded-circle"
                    })) : (openBlock(), createBlock(_component_v_avatar, {
                      key: 3,
                      size: "12",
                      class: "bg-warning rounded-circle"
                    }))
                  ]),
                  createVNode("div", { class: "mt-3" }, [
                    createVNode(_component_v_select, {
                      modelValue: select.value,
                      "onUpdate:modelValue": ($event) => select.value = $event,
                      variant: "outlined",
                      items: ["Published", "Draft", "Scheduled", "Inactive"]
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("p", { class: "text-12 textSecondary mt-n3" }, "Set the product status.")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_card, {
        elevation: "10",
        class: "mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h5 class="text-h5"${_scopeId2}>Product Details</h5><div class="mt-5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_label, { class: "font-weight-medium mb-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Categories`);
                      } else {
                        return [
                          createTextVNode("Categories")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_select, {
                    modelValue: selectmultiple.value,
                    "onUpdate:modelValue": ($event) => selectmultiple.value = $event,
                    items: itemsmultiple,
                    placeholder: "Select an option",
                    chips: "",
                    multiple: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`<p class="text-12 textSecondary mt-n4 mb-4"${_scopeId2}>Add product to a category.</p>`);
                  _push3(ssrRenderComponent(_component_v_btn, {
                    variant: "tonal",
                    color: "primary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-20 me-1"${_scopeId3}>+</span> Create New Category`);
                      } else {
                        return [
                          createVNode("span", { class: "text-20 me-1" }, "+"),
                          createTextVNode(" Create New Category")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="mt-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_label, { class: "font-weight-medium mb-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Tags`);
                      } else {
                        return [
                          createTextVNode("Tags")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_combobox, {
                    variant: "outlined",
                    density: "comfortable",
                    color: "primary",
                    modelValue: tagsselect.value,
                    "onUpdate:modelValue": ($event) => tagsselect.value = $event,
                    items: tagsitems,
                    chips: "",
                    multiple: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`<p class="text-12 textSecondary mt-n4"${_scopeId2}>Add tags to a product.</p></div>`);
                } else {
                  return [
                    createVNode("h5", { class: "text-h5" }, "Product Details"),
                    createVNode("div", { class: "mt-5" }, [
                      createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                        default: withCtx(() => [
                          createTextVNode("Categories")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_select, {
                        modelValue: selectmultiple.value,
                        "onUpdate:modelValue": ($event) => selectmultiple.value = $event,
                        items: itemsmultiple,
                        placeholder: "Select an option",
                        chips: "",
                        multiple: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("p", { class: "text-12 textSecondary mt-n4 mb-4" }, "Add product to a category."),
                      createVNode(_component_v_btn, {
                        variant: "tonal",
                        color: "primary"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-20 me-1" }, "+"),
                          createTextVNode(" Create New Category")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "mt-8" }, [
                      createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                        default: withCtx(() => [
                          createTextVNode("Tags")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_combobox, {
                        variant: "outlined",
                        density: "comfortable",
                        color: "primary",
                        modelValue: tagsselect.value,
                        "onUpdate:modelValue": ($event) => tagsselect.value = $event,
                        items: tagsitems,
                        chips: "",
                        multiple: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("p", { class: "text-12 textSecondary mt-n4" }, "Add tags to a product.")
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
                  createVNode("h5", { class: "text-h5" }, "Product Details"),
                  createVNode("div", { class: "mt-5" }, [
                    createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                      default: withCtx(() => [
                        createTextVNode("Categories")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_select, {
                      modelValue: selectmultiple.value,
                      "onUpdate:modelValue": ($event) => selectmultiple.value = $event,
                      items: itemsmultiple,
                      placeholder: "Select an option",
                      chips: "",
                      multiple: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("p", { class: "text-12 textSecondary mt-n4 mb-4" }, "Add product to a category."),
                    createVNode(_component_v_btn, {
                      variant: "tonal",
                      color: "primary"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-20 me-1" }, "+"),
                        createTextVNode(" Create New Category")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "mt-8" }, [
                    createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                      default: withCtx(() => [
                        createTextVNode("Tags")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_combobox, {
                      variant: "outlined",
                      density: "comfortable",
                      color: "primary",
                      modelValue: tagsselect.value,
                      "onUpdate:modelValue": ($event) => tagsselect.value = $event,
                      items: tagsitems,
                      chips: "",
                      multiple: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("p", { class: "text-12 textSecondary mt-n4" }, "Add tags to a product.")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_component_v_card, {
        elevation: "10",
        class: "mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h5 class="text-h5 mb-5"${_scopeId2}>Product Template</h5>`);
                  _push3(ssrRenderComponent(_component_v_label, { class: "font-weight-medium mb-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Select a product template`);
                      } else {
                        return [
                          createTextVNode("Select a product template")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_select, {
                    modelValue: templateselect.value,
                    "onUpdate:modelValue": ($event) => templateselect.value = $event,
                    items: templateitems,
                    variant: "outlined",
                    class: "text-body-1",
                    placeholder: "Default template",
                    "hide-details": ""
                  }, null, _parent3, _scopeId2));
                  _push3(`<p class="text-12 textSecondary mt-1"${_scopeId2}> Assign a template from your current admin to define how a single product is displayed. </p>`);
                } else {
                  return [
                    createVNode("h5", { class: "text-h5 mb-5" }, "Product Template"),
                    createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                      default: withCtx(() => [
                        createTextVNode("Select a product template")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_select, {
                      modelValue: templateselect.value,
                      "onUpdate:modelValue": ($event) => templateselect.value = $event,
                      items: templateitems,
                      variant: "outlined",
                      class: "text-body-1",
                      placeholder: "Default template",
                      "hide-details": ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("p", { class: "text-12 textSecondary mt-1" }, " Assign a template from your current admin to define how a single product is displayed. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_item, null, {
                default: withCtx(() => [
                  createVNode("h5", { class: "text-h5 mb-5" }, "Product Template"),
                  createVNode(_component_v_label, { class: "font-weight-medium mb-2" }, {
                    default: withCtx(() => [
                      createTextVNode("Select a product template")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_select, {
                    modelValue: templateselect.value,
                    "onUpdate:modelValue": ($event) => templateselect.value = $event,
                    items: templateitems,
                    variant: "outlined",
                    class: "text-body-1",
                    placeholder: "Default template",
                    "hide-details": ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode("p", { class: "text-12 textSecondary mt-1" }, " Assign a template from your current admin to define how a single product is displayed. ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/ecommerce/editproduct/RightSide.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "EditProduct",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Edit Product" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "/"
      },
      {
        text: "Edit Product",
        disabled: true,
        href: "#"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$8, {
        title: page.value.title,
        breadcrumbs: breadcrumbs.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              lg: "9"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$3, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$3)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              lg: "3"
            }, {
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
                lg: "9"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$3)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                lg: "3"
              }, {
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
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/apps/eCommerce/EditProduct.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=EditProduct-B8eNyASI.js.map
