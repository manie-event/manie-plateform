import { defineComponent, ref, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext, unref, resolveDynamicComponent, createBlock, openBlock, Fragment, renderList, toDisplayString } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderVNode, ssrInterpolate } from "vue/server-renderer";
import { ArticleIcon, CheckboxIcon, ClockIcon, TruckDeliveryIcon, MailIcon, PackageIcon, CirclePlusIcon, CreditCardIcon, PencilMinusIcon, DeviceLaptopIcon, DeviceMobileIcon, DotsVerticalIcon, UserCircleIcon, BellIcon, LockIcon } from "vue-tabler-icons";
import { _ as _sfc_main$5 } from "./BaseBreadcrumb-DAIjkUfv.js";
const _imports_0 = "" + __buildAssetsURL("user-1.DI2cVOf5.jpg");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AccountTab",
  __ssrInlineRender: true,
  setup(__props) {
    const select = ref("United States");
    const location = ref(["United States", "United Kingdom", "India", "Russia"]);
    const Currencyselect = ref("US Dollar ($)");
    const Currency = ref(["US Dollar ($)", "United Kingdom (Pound)", "India (INR)", "Russia (Ruble)"]);
    const currenypwd = ref("123456789142");
    const newpwd = ref("123456789142");
    const confirmpwd = ref("123456789142");
    const namemodel = ref("Mike Nielsen");
    const storemodel = ref("Maxima Studio");
    const storemail = ref("info@Spike.com");
    const storephone = ref("+91 12345 65478");
    const storeaddress = ref("814 Howard Street, 120065, India");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_label = resolveComponent("v-label");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_select = resolveComponent("v-select");
      _push(ssrRenderComponent(_component_v_card, mergeProps({ elevation: "10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, { class: "ma-sm-n2 ma-n1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card, { elevation: "10" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card_item, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h5 class="text-h5"${_scopeId5}>Change Profile</h5><div class="text-subtitle-1 text-grey100 mt-2"${_scopeId5}> Change your profile picture from here </div><div class="text-center mt-6 mb-6"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_v_avatar, { size: "120" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<img${ssrRenderAttr("src", _imports_0)} height="120" alt="image"${_scopeId6}>`);
                                        } else {
                                          return [
                                            createVNode("img", {
                                              src: _imports_0,
                                              height: "120",
                                              alt: "image"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div><div class="d-flex justify-center"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_v_btn, {
                                      color: "primary",
                                      class: "mx-2",
                                      rounded: "pill"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Upload`);
                                        } else {
                                          return [
                                            createTextVNode(" Upload")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_btn, {
                                      color: "error",
                                      class: "mx-2",
                                      variant: "outlined",
                                      rounded: "pill"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Reset`);
                                        } else {
                                          return [
                                            createTextVNode("Reset")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div><div class="text-subtitle-1 text-grey100 text-center my-sm-8 my-6"${_scopeId5}> Allowed JPG, GIF or PNG. Max size of 800K </div>`);
                                  } else {
                                    return [
                                      createVNode("h5", { class: "text-h5" }, "Change Profile"),
                                      createVNode("div", { class: "text-subtitle-1 text-grey100 mt-2" }, " Change your profile picture from here "),
                                      createVNode("div", { class: "text-center mt-6 mb-6" }, [
                                        createVNode(_component_v_avatar, { size: "120" }, {
                                          default: withCtx(() => [
                                            createVNode("img", {
                                              src: _imports_0,
                                              height: "120",
                                              alt: "image"
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode("div", { class: "d-flex justify-center" }, [
                                        createVNode(_component_v_btn, {
                                          color: "primary",
                                          class: "mx-2",
                                          rounded: "pill"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Upload")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_btn, {
                                          color: "error",
                                          class: "mx-2",
                                          variant: "outlined",
                                          rounded: "pill"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Reset")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode("div", { class: "text-subtitle-1 text-grey100 text-center my-sm-8 my-6" }, " Allowed JPG, GIF or PNG. Max size of 800K ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card_item, null, {
                                  default: withCtx(() => [
                                    createVNode("h5", { class: "text-h5" }, "Change Profile"),
                                    createVNode("div", { class: "text-subtitle-1 text-grey100 mt-2" }, " Change your profile picture from here "),
                                    createVNode("div", { class: "text-center mt-6 mb-6" }, [
                                      createVNode(_component_v_avatar, { size: "120" }, {
                                        default: withCtx(() => [
                                          createVNode("img", {
                                            src: _imports_0,
                                            height: "120",
                                            alt: "image"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("div", { class: "d-flex justify-center" }, [
                                      createVNode(_component_v_btn, {
                                        color: "primary",
                                        class: "mx-2",
                                        rounded: "pill"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Upload")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_btn, {
                                        color: "error",
                                        class: "mx-2",
                                        variant: "outlined",
                                        rounded: "pill"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Reset")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("div", { class: "text-subtitle-1 text-grey100 text-center my-sm-8 my-6" }, " Allowed JPG, GIF or PNG. Max size of 800K ")
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
                                  createVNode("h5", { class: "text-h5" }, "Change Profile"),
                                  createVNode("div", { class: "text-subtitle-1 text-grey100 mt-2" }, " Change your profile picture from here "),
                                  createVNode("div", { class: "text-center mt-6 mb-6" }, [
                                    createVNode(_component_v_avatar, { size: "120" }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: _imports_0,
                                          height: "120",
                                          alt: "image"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", { class: "d-flex justify-center" }, [
                                    createVNode(_component_v_btn, {
                                      color: "primary",
                                      class: "mx-2",
                                      rounded: "pill"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Upload")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_btn, {
                                      color: "error",
                                      class: "mx-2",
                                      variant: "outlined",
                                      rounded: "pill"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Reset")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", { class: "text-subtitle-1 text-grey100 text-center my-sm-8 my-6" }, " Allowed JPG, GIF or PNG. Max size of 800K ")
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
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card, { elevation: "10" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card_item, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h5 class="text-h5"${_scopeId5}>Change Password</h5><div class="text-subtitle-1 text-grey100 mt-2"${_scopeId5}> To change your password please confirm here </div><div class="mt-5"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Current Password`);
                                        } else {
                                          return [
                                            createTextVNode("Current Password")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      color: "primary",
                                      variant: "outlined",
                                      type: "password",
                                      modelValue: currenypwd.value,
                                      "onUpdate:modelValue": ($event) => currenypwd.value = $event
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`New Password`);
                                        } else {
                                          return [
                                            createTextVNode("New Password")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      color: "primary",
                                      variant: "outlined",
                                      type: "password",
                                      modelValue: newpwd.value,
                                      "onUpdate:modelValue": ($event) => newpwd.value = $event
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Confirm Password`);
                                        } else {
                                          return [
                                            createTextVNode("Confirm Password")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      color: "primary",
                                      variant: "outlined",
                                      type: "password",
                                      modelValue: confirmpwd.value,
                                      "onUpdate:modelValue": ($event) => confirmpwd.value = $event,
                                      "hide-details": ""
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode("h5", { class: "text-h5" }, "Change Password"),
                                      createVNode("div", { class: "text-subtitle-1 text-grey100 mt-2" }, " To change your password please confirm here "),
                                      createVNode("div", { class: "mt-5" }, [
                                        createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Current Password")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_text_field, {
                                          color: "primary",
                                          variant: "outlined",
                                          type: "password",
                                          modelValue: currenypwd.value,
                                          "onUpdate:modelValue": ($event) => currenypwd.value = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode("New Password")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_text_field, {
                                          color: "primary",
                                          variant: "outlined",
                                          type: "password",
                                          modelValue: newpwd.value,
                                          "onUpdate:modelValue": ($event) => newpwd.value = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Confirm Password")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_text_field, {
                                          color: "primary",
                                          variant: "outlined",
                                          type: "password",
                                          modelValue: confirmpwd.value,
                                          "onUpdate:modelValue": ($event) => confirmpwd.value = $event,
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card_item, null, {
                                  default: withCtx(() => [
                                    createVNode("h5", { class: "text-h5" }, "Change Password"),
                                    createVNode("div", { class: "text-subtitle-1 text-grey100 mt-2" }, " To change your password please confirm here "),
                                    createVNode("div", { class: "mt-5" }, [
                                      createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Current Password")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        color: "primary",
                                        variant: "outlined",
                                        type: "password",
                                        modelValue: currenypwd.value,
                                        "onUpdate:modelValue": ($event) => currenypwd.value = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode("New Password")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        color: "primary",
                                        variant: "outlined",
                                        type: "password",
                                        modelValue: newpwd.value,
                                        "onUpdate:modelValue": ($event) => newpwd.value = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Confirm Password")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        color: "primary",
                                        variant: "outlined",
                                        type: "password",
                                        modelValue: confirmpwd.value,
                                        "onUpdate:modelValue": ($event) => confirmpwd.value = $event,
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
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
                                  createVNode("h5", { class: "text-h5" }, "Change Password"),
                                  createVNode("div", { class: "text-subtitle-1 text-grey100 mt-2" }, " To change your password please confirm here "),
                                  createVNode("div", { class: "mt-5" }, [
                                    createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Current Password")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_text_field, {
                                      color: "primary",
                                      variant: "outlined",
                                      type: "password",
                                      modelValue: currenypwd.value,
                                      "onUpdate:modelValue": ($event) => currenypwd.value = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode("New Password")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_text_field, {
                                      color: "primary",
                                      variant: "outlined",
                                      type: "password",
                                      modelValue: newpwd.value,
                                      "onUpdate:modelValue": ($event) => newpwd.value = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Confirm Password")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_text_field, {
                                      color: "primary",
                                      variant: "outlined",
                                      type: "password",
                                      modelValue: confirmpwd.value,
                                      "onUpdate:modelValue": ($event) => confirmpwd.value = $event,
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card, { elevation: "10" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card_item, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h5 class="text-h5"${_scopeId5}>Personal Details</h5><div class="text-subtitle-1 text-grey100 mt-2"${_scopeId5}> To change your personal detail , edit and save from here </div><div class="mt-5"${_scopeId5}>`);
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
                                                      _push9(`Your Name`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Your Name")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  type: "text",
                                                  modelValue: namemodel.value,
                                                  "onUpdate:modelValue": ($event) => namemodel.value = $event,
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Your Name")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_text_field, {
                                                    color: "primary",
                                                    variant: "outlined",
                                                    type: "text",
                                                    modelValue: namemodel.value,
                                                    "onUpdate:modelValue": ($event) => namemodel.value = $event,
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                      _push9(`Store Name`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Store Name")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  type: "text",
                                                  modelValue: storemodel.value,
                                                  "onUpdate:modelValue": ($event) => storemodel.value = $event,
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Store Name")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_text_field, {
                                                    color: "primary",
                                                    variant: "outlined",
                                                    type: "text",
                                                    modelValue: storemodel.value,
                                                    "onUpdate:modelValue": ($event) => storemodel.value = $event,
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                      _push9(`Location`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Location")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_select, {
                                                  modelValue: select.value,
                                                  "onUpdate:modelValue": ($event) => select.value = $event,
                                                  items: location.value,
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
                                                      createTextVNode("Location")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_select, {
                                                    modelValue: select.value,
                                                    "onUpdate:modelValue": ($event) => select.value = $event,
                                                    items: location.value,
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
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Currency`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Currency")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_select, {
                                                  modelValue: Currencyselect.value,
                                                  "onUpdate:modelValue": ($event) => Currencyselect.value = $event,
                                                  items: Currency.value,
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
                                                      createTextVNode("Currency")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_select, {
                                                    modelValue: Currencyselect.value,
                                                    "onUpdate:modelValue": ($event) => Currencyselect.value = $event,
                                                    items: Currency.value,
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
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Email`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Email")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  type: "email",
                                                  modelValue: storemail.value,
                                                  "onUpdate:modelValue": ($event) => storemail.value = $event,
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Email")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_text_field, {
                                                    color: "primary",
                                                    variant: "outlined",
                                                    type: "email",
                                                    modelValue: storemail.value,
                                                    "onUpdate:modelValue": ($event) => storemail.value = $event,
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                      _push9(`Phone`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Phone")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  type: "text",
                                                  modelValue: storephone.value,
                                                  "onUpdate:modelValue": ($event) => storephone.value = $event,
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Phone")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_text_field, {
                                                    color: "primary",
                                                    variant: "outlined",
                                                    type: "text",
                                                    modelValue: storephone.value,
                                                    "onUpdate:modelValue": ($event) => storephone.value = $event,
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                      _push9(`Address`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Address")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  type: "text",
                                                  modelValue: storeaddress.value,
                                                  "onUpdate:modelValue": ($event) => storeaddress.value = $event,
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Address")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_text_field, {
                                                    color: "primary",
                                                    variant: "outlined",
                                                    type: "text",
                                                    modelValue: storeaddress.value,
                                                    "onUpdate:modelValue": ($event) => storeaddress.value = $event,
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                    createTextVNode("Your Name")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_text_field, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  type: "text",
                                                  modelValue: namemodel.value,
                                                  "onUpdate:modelValue": ($event) => namemodel.value = $event,
                                                  "hide-details": ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                    createTextVNode("Store Name")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_text_field, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  type: "text",
                                                  modelValue: storemodel.value,
                                                  "onUpdate:modelValue": ($event) => storemodel.value = $event,
                                                  "hide-details": ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                    createTextVNode("Location")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_select, {
                                                  modelValue: select.value,
                                                  "onUpdate:modelValue": ($event) => select.value = $event,
                                                  items: location.value,
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
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Currency")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_select, {
                                                  modelValue: Currencyselect.value,
                                                  "onUpdate:modelValue": ($event) => Currencyselect.value = $event,
                                                  items: Currency.value,
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
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Email")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_text_field, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  type: "email",
                                                  modelValue: storemail.value,
                                                  "onUpdate:modelValue": ($event) => storemail.value = $event,
                                                  "hide-details": ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                    createTextVNode("Phone")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_text_field, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  type: "text",
                                                  modelValue: storephone.value,
                                                  "onUpdate:modelValue": ($event) => storephone.value = $event,
                                                  "hide-details": ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Address")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_text_field, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  type: "text",
                                                  modelValue: storeaddress.value,
                                                  "onUpdate:modelValue": ($event) => storeaddress.value = $event,
                                                  "hide-details": ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode("h5", { class: "text-h5" }, "Personal Details"),
                                      createVNode("div", { class: "text-subtitle-1 text-grey100 mt-2" }, " To change your personal detail , edit and save from here "),
                                      createVNode("div", { class: "mt-5" }, [
                                        createVNode(_component_v_row, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Your Name")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_text_field, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  type: "text",
                                                  modelValue: namemodel.value,
                                                  "onUpdate:modelValue": ($event) => namemodel.value = $event,
                                                  "hide-details": ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                    createTextVNode("Store Name")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_text_field, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  type: "text",
                                                  modelValue: storemodel.value,
                                                  "onUpdate:modelValue": ($event) => storemodel.value = $event,
                                                  "hide-details": ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                    createTextVNode("Location")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_select, {
                                                  modelValue: select.value,
                                                  "onUpdate:modelValue": ($event) => select.value = $event,
                                                  items: location.value,
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
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Currency")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_select, {
                                                  modelValue: Currencyselect.value,
                                                  "onUpdate:modelValue": ($event) => Currencyselect.value = $event,
                                                  items: Currency.value,
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
                                            createVNode(_component_v_col, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Email")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_text_field, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  type: "email",
                                                  modelValue: storemail.value,
                                                  "onUpdate:modelValue": ($event) => storemail.value = $event,
                                                  "hide-details": ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                    createTextVNode("Phone")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_text_field, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  type: "text",
                                                  modelValue: storephone.value,
                                                  "onUpdate:modelValue": ($event) => storephone.value = $event,
                                                  "hide-details": ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Address")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_text_field, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  type: "text",
                                                  modelValue: storeaddress.value,
                                                  "onUpdate:modelValue": ($event) => storeaddress.value = $event,
                                                  "hide-details": ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card_item, null, {
                                  default: withCtx(() => [
                                    createVNode("h5", { class: "text-h5" }, "Personal Details"),
                                    createVNode("div", { class: "text-subtitle-1 text-grey100 mt-2" }, " To change your personal detail , edit and save from here "),
                                    createVNode("div", { class: "mt-5" }, [
                                      createVNode(_component_v_row, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Your Name")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_text_field, {
                                                color: "primary",
                                                variant: "outlined",
                                                type: "text",
                                                modelValue: namemodel.value,
                                                "onUpdate:modelValue": ($event) => namemodel.value = $event,
                                                "hide-details": ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                  createTextVNode("Store Name")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_text_field, {
                                                color: "primary",
                                                variant: "outlined",
                                                type: "text",
                                                modelValue: storemodel.value,
                                                "onUpdate:modelValue": ($event) => storemodel.value = $event,
                                                "hide-details": ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                  createTextVNode("Location")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_select, {
                                                modelValue: select.value,
                                                "onUpdate:modelValue": ($event) => select.value = $event,
                                                items: location.value,
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
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Currency")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_select, {
                                                modelValue: Currencyselect.value,
                                                "onUpdate:modelValue": ($event) => Currencyselect.value = $event,
                                                items: Currency.value,
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
                                          createVNode(_component_v_col, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Email")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_text_field, {
                                                color: "primary",
                                                variant: "outlined",
                                                type: "email",
                                                modelValue: storemail.value,
                                                "onUpdate:modelValue": ($event) => storemail.value = $event,
                                                "hide-details": ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                  createTextVNode("Phone")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_text_field, {
                                                color: "primary",
                                                variant: "outlined",
                                                type: "text",
                                                modelValue: storephone.value,
                                                "onUpdate:modelValue": ($event) => storephone.value = $event,
                                                "hide-details": ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Address")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_text_field, {
                                                color: "primary",
                                                variant: "outlined",
                                                type: "text",
                                                modelValue: storeaddress.value,
                                                "onUpdate:modelValue": ($event) => storeaddress.value = $event,
                                                "hide-details": ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          })
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card, { elevation: "10" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_item, null, {
                                default: withCtx(() => [
                                  createVNode("h5", { class: "text-h5" }, "Personal Details"),
                                  createVNode("div", { class: "text-subtitle-1 text-grey100 mt-2" }, " To change your personal detail , edit and save from here "),
                                  createVNode("div", { class: "mt-5" }, [
                                    createVNode(_component_v_row, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Your Name")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_text_field, {
                                              color: "primary",
                                              variant: "outlined",
                                              type: "text",
                                              modelValue: namemodel.value,
                                              "onUpdate:modelValue": ($event) => namemodel.value = $event,
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                createTextVNode("Store Name")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_text_field, {
                                              color: "primary",
                                              variant: "outlined",
                                              type: "text",
                                              modelValue: storemodel.value,
                                              "onUpdate:modelValue": ($event) => storemodel.value = $event,
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                createTextVNode("Location")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_select, {
                                              modelValue: select.value,
                                              "onUpdate:modelValue": ($event) => select.value = $event,
                                              items: location.value,
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
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Currency")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_select, {
                                              modelValue: Currencyselect.value,
                                              "onUpdate:modelValue": ($event) => Currencyselect.value = $event,
                                              items: Currency.value,
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
                                        createVNode(_component_v_col, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Email")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_text_field, {
                                              color: "primary",
                                              variant: "outlined",
                                              type: "email",
                                              modelValue: storemail.value,
                                              "onUpdate:modelValue": ($event) => storemail.value = $event,
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                                createTextVNode("Phone")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_text_field, {
                                              color: "primary",
                                              variant: "outlined",
                                              type: "text",
                                              modelValue: storephone.value,
                                              "onUpdate:modelValue": ($event) => storephone.value = $event,
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Address")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_text_field, {
                                              color: "primary",
                                              variant: "outlined",
                                              type: "text",
                                              modelValue: storeaddress.value,
                                              "onUpdate:modelValue": ($event) => storeaddress.value = $event,
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        })
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, { elevation: "10" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_item, null, {
                              default: withCtx(() => [
                                createVNode("h5", { class: "text-h5" }, "Change Profile"),
                                createVNode("div", { class: "text-subtitle-1 text-grey100 mt-2" }, " Change your profile picture from here "),
                                createVNode("div", { class: "text-center mt-6 mb-6" }, [
                                  createVNode(_component_v_avatar, { size: "120" }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: _imports_0,
                                        height: "120",
                                        alt: "image"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { class: "d-flex justify-center" }, [
                                  createVNode(_component_v_btn, {
                                    color: "primary",
                                    class: "mx-2",
                                    rounded: "pill"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Upload")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_btn, {
                                    color: "error",
                                    class: "mx-2",
                                    variant: "outlined",
                                    rounded: "pill"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Reset")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { class: "text-subtitle-1 text-grey100 text-center my-sm-8 my-6" }, " Allowed JPG, GIF or PNG. Max size of 800K ")
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
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, { elevation: "10" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_item, null, {
                              default: withCtx(() => [
                                createVNode("h5", { class: "text-h5" }, "Change Password"),
                                createVNode("div", { class: "text-subtitle-1 text-grey100 mt-2" }, " To change your password please confirm here "),
                                createVNode("div", { class: "mt-5" }, [
                                  createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Current Password")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_text_field, {
                                    color: "primary",
                                    variant: "outlined",
                                    type: "password",
                                    modelValue: currenypwd.value,
                                    "onUpdate:modelValue": ($event) => currenypwd.value = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode("New Password")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_text_field, {
                                    color: "primary",
                                    variant: "outlined",
                                    type: "password",
                                    modelValue: newpwd.value,
                                    "onUpdate:modelValue": ($event) => newpwd.value = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Confirm Password")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_text_field, {
                                    color: "primary",
                                    variant: "outlined",
                                    type: "password",
                                    modelValue: confirmpwd.value,
                                    "onUpdate:modelValue": ($event) => confirmpwd.value = $event,
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                    createVNode(_component_v_col, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, { elevation: "10" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_item, null, {
                              default: withCtx(() => [
                                createVNode("h5", { class: "text-h5" }, "Personal Details"),
                                createVNode("div", { class: "text-subtitle-1 text-grey100 mt-2" }, " To change your personal detail , edit and save from here "),
                                createVNode("div", { class: "mt-5" }, [
                                  createVNode(_component_v_row, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Your Name")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_text_field, {
                                            color: "primary",
                                            variant: "outlined",
                                            type: "text",
                                            modelValue: namemodel.value,
                                            "onUpdate:modelValue": ($event) => namemodel.value = $event,
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                              createTextVNode("Store Name")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_text_field, {
                                            color: "primary",
                                            variant: "outlined",
                                            type: "text",
                                            modelValue: storemodel.value,
                                            "onUpdate:modelValue": ($event) => storemodel.value = $event,
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                              createTextVNode("Location")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_select, {
                                            modelValue: select.value,
                                            "onUpdate:modelValue": ($event) => select.value = $event,
                                            items: location.value,
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
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Currency")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_select, {
                                            modelValue: Currencyselect.value,
                                            "onUpdate:modelValue": ($event) => Currencyselect.value = $event,
                                            items: Currency.value,
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
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Email")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_text_field, {
                                            color: "primary",
                                            variant: "outlined",
                                            type: "email",
                                            modelValue: storemail.value,
                                            "onUpdate:modelValue": ($event) => storemail.value = $event,
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                              createTextVNode("Phone")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_text_field, {
                                            color: "primary",
                                            variant: "outlined",
                                            type: "text",
                                            modelValue: storephone.value,
                                            "onUpdate:modelValue": ($event) => storephone.value = $event,
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Address")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_text_field, {
                                            color: "primary",
                                            variant: "outlined",
                                            type: "text",
                                            modelValue: storeaddress.value,
                                            "onUpdate:modelValue": ($event) => storeaddress.value = $event,
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
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
            }, _parent2, _scopeId));
            _push2(`<div class="d-flex justify-end mt-5 pb-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_btn, {
              size: "large",
              color: "primary",
              rounded: "pill",
              class: "mr-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Save`);
                } else {
                  return [
                    createTextVNode("Save")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, {
              size: "large",
              elevation: "0",
              class: "bg-lighterror text-error",
              rounded: "pill"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Cancel`);
                } else {
                  return [
                    createTextVNode("Cancel")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_v_row, { class: "ma-sm-n2 ma-n1" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card, { elevation: "10" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_item, null, {
                            default: withCtx(() => [
                              createVNode("h5", { class: "text-h5" }, "Change Profile"),
                              createVNode("div", { class: "text-subtitle-1 text-grey100 mt-2" }, " Change your profile picture from here "),
                              createVNode("div", { class: "text-center mt-6 mb-6" }, [
                                createVNode(_component_v_avatar, { size: "120" }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: _imports_0,
                                      height: "120",
                                      alt: "image"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", { class: "d-flex justify-center" }, [
                                createVNode(_component_v_btn, {
                                  color: "primary",
                                  class: "mx-2",
                                  rounded: "pill"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Upload")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_btn, {
                                  color: "error",
                                  class: "mx-2",
                                  variant: "outlined",
                                  rounded: "pill"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Reset")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", { class: "text-subtitle-1 text-grey100 text-center my-sm-8 my-6" }, " Allowed JPG, GIF or PNG. Max size of 800K ")
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
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card, { elevation: "10" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_item, null, {
                            default: withCtx(() => [
                              createVNode("h5", { class: "text-h5" }, "Change Password"),
                              createVNode("div", { class: "text-subtitle-1 text-grey100 mt-2" }, " To change your password please confirm here "),
                              createVNode("div", { class: "mt-5" }, [
                                createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Current Password")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  type: "password",
                                  modelValue: currenypwd.value,
                                  "onUpdate:modelValue": ($event) => currenypwd.value = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                  default: withCtx(() => [
                                    createTextVNode("New Password")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  type: "password",
                                  modelValue: newpwd.value,
                                  "onUpdate:modelValue": ($event) => newpwd.value = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Confirm Password")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  type: "password",
                                  modelValue: confirmpwd.value,
                                  "onUpdate:modelValue": ($event) => confirmpwd.value = $event,
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                  createVNode(_component_v_col, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card, { elevation: "10" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_item, null, {
                            default: withCtx(() => [
                              createVNode("h5", { class: "text-h5" }, "Personal Details"),
                              createVNode("div", { class: "text-subtitle-1 text-grey100 mt-2" }, " To change your personal detail , edit and save from here "),
                              createVNode("div", { class: "mt-5" }, [
                                createVNode(_component_v_row, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Your Name")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_text_field, {
                                          color: "primary",
                                          variant: "outlined",
                                          type: "text",
                                          modelValue: namemodel.value,
                                          "onUpdate:modelValue": ($event) => namemodel.value = $event,
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                            createTextVNode("Store Name")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_text_field, {
                                          color: "primary",
                                          variant: "outlined",
                                          type: "text",
                                          modelValue: storemodel.value,
                                          "onUpdate:modelValue": ($event) => storemodel.value = $event,
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                            createTextVNode("Location")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_select, {
                                          modelValue: select.value,
                                          "onUpdate:modelValue": ($event) => select.value = $event,
                                          items: location.value,
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
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Currency")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_select, {
                                          modelValue: Currencyselect.value,
                                          "onUpdate:modelValue": ($event) => Currencyselect.value = $event,
                                          items: Currency.value,
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
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Email")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_text_field, {
                                          color: "primary",
                                          variant: "outlined",
                                          type: "email",
                                          modelValue: storemail.value,
                                          "onUpdate:modelValue": ($event) => storemail.value = $event,
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                            createTextVNode("Phone")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_text_field, {
                                          color: "primary",
                                          variant: "outlined",
                                          type: "text",
                                          modelValue: storephone.value,
                                          "onUpdate:modelValue": ($event) => storephone.value = $event,
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Address")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_text_field, {
                                          color: "primary",
                                          variant: "outlined",
                                          type: "text",
                                          modelValue: storeaddress.value,
                                          "onUpdate:modelValue": ($event) => storeaddress.value = $event,
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })
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
                ]),
                _: 1
              }),
              createVNode("div", { class: "d-flex justify-end mt-5 pb-3" }, [
                createVNode(_component_v_btn, {
                  size: "large",
                  color: "primary",
                  rounded: "pill",
                  class: "mr-4"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Save")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_btn, {
                  size: "large",
                  elevation: "0",
                  class: "bg-lighterror text-error",
                  rounded: "pill"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Cancel")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/account-settings/AccountTab.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const notificationTb = [
  {
    title: "Our newsletter",
    subtitle: "We will always let you know about important changes",
    icon: ArticleIcon,
    switch: false
  },
  {
    title: "Order Confirmation",
    subtitle: "You will be notified when customer order any product",
    icon: CheckboxIcon,
    switch: true
  },
  {
    title: "Order Status Changed",
    subtitle: "You will be notified when customer make changes to the order",
    icon: ClockIcon,
    switch: false
  },
  {
    title: "Order Delivered",
    subtitle: "You will be notified once the order is delivered",
    icon: TruckDeliveryIcon,
    switch: false
  },
  {
    title: "Email Notification",
    subtitle: "Turn on email notificaiton to get updates through email",
    icon: MailIcon,
    switch: true
  }
];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "NotificationTab",
  __ssrInlineRender: true,
  setup(__props) {
    const switchoff3 = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_label = resolveComponent("v-label");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_switch = resolveComponent("v-switch");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_ClockIcon = resolveComponent("ClockIcon");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_DownloadIcon = resolveComponent("DownloadIcon");
      const _component_v_tooltip = resolveComponent("v-tooltip");
      const _component_PlayerPauseIcon = resolveComponent("PlayerPauseIcon");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_row, { class: "justify-center ma-n2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              md: "9"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, { elevation: "10" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h4 class="text-h4"${_scopeId4}>Notification Preferences</h4><div class="text-subtitle-1 text-grey100 text-10 my-3"${_scopeId4}> Select the notificaitons ou would like to receive via email. Please note that you cannot opt out of receving service messages, such as payment, security or legal notifications. </div><div class="mt-6"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Email Address*`);
                                  } else {
                                    return [
                                      createTextVNode("Email Address*")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                type: "email",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                              _push5(`<span class="text-subtitle-1 text-grey100"${_scopeId4}>Required for notificaitons.</span></div><!--[-->`);
                              ssrRenderList(unref(notificationTb), (list) => {
                                _push5(`<div class="d-flex align-sm-center align-start mt-7"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_v_avatar, {
                                  size: "48",
                                  class: "mr-2",
                                  rounded: "md",
                                  color: "lightprimary"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      ssrRenderVNode(_push6, createVNode(resolveDynamicComponent(list.icon), {
                                        "stroke-width": "2",
                                        size: "22"
                                      }, null), _parent6, _scopeId5);
                                    } else {
                                      return [
                                        (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                          "stroke-width": "2",
                                          size: "22"
                                        }))
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`<div class="pl-4"${_scopeId4}><h6 class="text-h6 mb-3 mt-n1"${_scopeId4}>${ssrInterpolate(list.title)}</h6><h5 class="text-subtitle-1 text-grey100"${_scopeId4}>${ssrInterpolate(list.subtitle)}</h5></div><div class="ml-auto mr-1 pa-sm-0 pl-sm-1 pa-6 pl-7"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_v_switch, {
                                  "model-value": list.switch,
                                  "hide-details": "",
                                  color: "primary"
                                }, null, _parent5, _scopeId4));
                                _push5(`</div></div>`);
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                createVNode("h4", { class: "text-h4" }, "Notification Preferences"),
                                createVNode("div", { class: "text-subtitle-1 text-grey100 text-10 my-3" }, " Select the notificaitons ou would like to receive via email. Please note that you cannot opt out of receving service messages, such as payment, security or legal notifications. "),
                                createVNode("div", { class: "mt-6" }, [
                                  createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Email Address*")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_text_field, {
                                    color: "primary",
                                    variant: "outlined",
                                    type: "email",
                                    "hide-details": ""
                                  }),
                                  createVNode("span", { class: "text-subtitle-1 text-grey100" }, "Required for notificaitons.")
                                ]),
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(notificationTb), (list) => {
                                  return openBlock(), createBlock("div", {
                                    class: "d-flex align-sm-center align-start mt-7",
                                    key: list.title
                                  }, [
                                    createVNode(_component_v_avatar, {
                                      size: "48",
                                      class: "mr-2",
                                      rounded: "md",
                                      color: "lightprimary"
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                          "stroke-width": "2",
                                          size: "22"
                                        }))
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("div", { class: "pl-4" }, [
                                      createVNode("h6", { class: "text-h6 mb-3 mt-n1" }, toDisplayString(list.title), 1),
                                      createVNode("h5", { class: "text-subtitle-1 text-grey100" }, toDisplayString(list.subtitle), 1)
                                    ]),
                                    createVNode("div", { class: "ml-auto mr-1 pa-sm-0 pl-sm-1 pa-6 pl-7" }, [
                                      createVNode(_component_v_switch, {
                                        "model-value": list.switch,
                                        "hide-details": "",
                                        color: "primary"
                                      }, null, 8, ["model-value"])
                                    ])
                                  ]);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card_item, null, {
                            default: withCtx(() => [
                              createVNode("h4", { class: "text-h4" }, "Notification Preferences"),
                              createVNode("div", { class: "text-subtitle-1 text-grey100 text-10 my-3" }, " Select the notificaitons ou would like to receive via email. Please note that you cannot opt out of receving service messages, such as payment, security or legal notifications. "),
                              createVNode("div", { class: "mt-6" }, [
                                createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Email Address*")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_text_field, {
                                  color: "primary",
                                  variant: "outlined",
                                  type: "email",
                                  "hide-details": ""
                                }),
                                createVNode("span", { class: "text-subtitle-1 text-grey100" }, "Required for notificaitons.")
                              ]),
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(notificationTb), (list) => {
                                return openBlock(), createBlock("div", {
                                  class: "d-flex align-sm-center align-start mt-7",
                                  key: list.title
                                }, [
                                  createVNode(_component_v_avatar, {
                                    size: "48",
                                    class: "mr-2",
                                    rounded: "md",
                                    color: "lightprimary"
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                        "stroke-width": "2",
                                        size: "22"
                                      }))
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("div", { class: "pl-4" }, [
                                    createVNode("h6", { class: "text-h6 mb-3 mt-n1" }, toDisplayString(list.title), 1),
                                    createVNode("h5", { class: "text-subtitle-1 text-grey100" }, toDisplayString(list.subtitle), 1)
                                  ]),
                                  createVNode("div", { class: "ml-auto mr-1 pa-sm-0 pl-sm-1 pa-6 pl-7" }, [
                                    createVNode(_component_v_switch, {
                                      "model-value": list.switch,
                                      "hide-details": "",
                                      color: "primary"
                                    }, null, 8, ["model-value"])
                                  ])
                                ]);
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
                    createVNode(_component_v_card, { elevation: "10" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_item, null, {
                          default: withCtx(() => [
                            createVNode("h4", { class: "text-h4" }, "Notification Preferences"),
                            createVNode("div", { class: "text-subtitle-1 text-grey100 text-10 my-3" }, " Select the notificaitons ou would like to receive via email. Please note that you cannot opt out of receving service messages, such as payment, security or legal notifications. "),
                            createVNode("div", { class: "mt-6" }, [
                              createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                default: withCtx(() => [
                                  createTextVNode("Email Address*")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_text_field, {
                                color: "primary",
                                variant: "outlined",
                                type: "email",
                                "hide-details": ""
                              }),
                              createVNode("span", { class: "text-subtitle-1 text-grey100" }, "Required for notificaitons.")
                            ]),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(notificationTb), (list) => {
                              return openBlock(), createBlock("div", {
                                class: "d-flex align-sm-center align-start mt-7",
                                key: list.title
                              }, [
                                createVNode(_component_v_avatar, {
                                  size: "48",
                                  class: "mr-2",
                                  rounded: "md",
                                  color: "lightprimary"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                      "stroke-width": "2",
                                      size: "22"
                                    }))
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("div", { class: "pl-4" }, [
                                  createVNode("h6", { class: "text-h6 mb-3 mt-n1" }, toDisplayString(list.title), 1),
                                  createVNode("h5", { class: "text-subtitle-1 text-grey100" }, toDisplayString(list.subtitle), 1)
                                ]),
                                createVNode("div", { class: "ml-auto mr-1 pa-sm-0 pl-sm-1 pa-6 pl-7" }, [
                                  createVNode(_component_v_switch, {
                                    "model-value": list.switch,
                                    "hide-details": "",
                                    color: "primary"
                                  }, null, 8, ["model-value"])
                                ])
                              ]);
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
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              md: "9"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, { elevation: "10" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card_title, { class: "text-h4" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Date &amp; Time`);
                                  } else {
                                    return [
                                      createTextVNode("Date & Time")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="text-subtitle-1 text-grey100 text-10 my-3"${_scopeId4}> Time zones and calendar display settings. </div><div${_scopeId4}><div class="d-flex align-center mt-7"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_avatar, {
                                size: "48",
                                class: "mr-2",
                                rounded: "md",
                                color: "lightprimary"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_ClockIcon, { size: "22" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_ClockIcon, { size: "22" })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="pl-4"${_scopeId4}><h5 class="text-subtitle-1 text-grey100 mb-1"${_scopeId4}>Time zone</h5><h6 class="text-h6"${_scopeId4}>(UTC + 02:00) Athens, Bucharet</h6></div><div class="ml-auto"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_btn, {
                                size: "30",
                                icon: "",
                                rounded: "pill",
                                class: "lightprimary d-flex"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_avatar, { size: "30" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_DownloadIcon, { size: "22" }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_DownloadIcon, { size: "22" })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_tooltip, {
                                      activator: "parent",
                                      location: "bottom"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Download `);
                                        } else {
                                          return [
                                            createTextVNode("Download ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_avatar, { size: "30" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_DownloadIcon, { size: "22" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_tooltip, {
                                        activator: "parent",
                                        location: "bottom"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Download ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div></div></div>`);
                            } else {
                              return [
                                createVNode(_component_v_card_title, { class: "text-h4" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Date & Time")
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "text-subtitle-1 text-grey100 text-10 my-3" }, " Time zones and calendar display settings. "),
                                createVNode("div", null, [
                                  createVNode("div", { class: "d-flex align-center mt-7" }, [
                                    createVNode(_component_v_avatar, {
                                      size: "48",
                                      class: "mr-2",
                                      rounded: "md",
                                      color: "lightprimary"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_ClockIcon, { size: "22" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "pl-4" }, [
                                      createVNode("h5", { class: "text-subtitle-1 text-grey100 mb-1" }, "Time zone"),
                                      createVNode("h6", { class: "text-h6" }, "(UTC + 02:00) Athens, Bucharet")
                                    ]),
                                    createVNode("div", { class: "ml-auto" }, [
                                      createVNode(_component_v_btn, {
                                        size: "30",
                                        icon: "",
                                        rounded: "pill",
                                        class: "lightprimary d-flex"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_avatar, { size: "30" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_DownloadIcon, { size: "22" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_tooltip, {
                                            activator: "parent",
                                            location: "bottom"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Download ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ])
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
                              createVNode(_component_v_card_title, { class: "text-h4" }, {
                                default: withCtx(() => [
                                  createTextVNode("Date & Time")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "text-subtitle-1 text-grey100 text-10 my-3" }, " Time zones and calendar display settings. "),
                              createVNode("div", null, [
                                createVNode("div", { class: "d-flex align-center mt-7" }, [
                                  createVNode(_component_v_avatar, {
                                    size: "48",
                                    class: "mr-2",
                                    rounded: "md",
                                    color: "lightprimary"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_ClockIcon, { size: "22" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "pl-4" }, [
                                    createVNode("h5", { class: "text-subtitle-1 text-grey100 mb-1" }, "Time zone"),
                                    createVNode("h6", { class: "text-h6" }, "(UTC + 02:00) Athens, Bucharet")
                                  ]),
                                  createVNode("div", { class: "ml-auto" }, [
                                    createVNode(_component_v_btn, {
                                      size: "30",
                                      icon: "",
                                      rounded: "pill",
                                      class: "lightprimary d-flex"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_avatar, { size: "30" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_DownloadIcon, { size: "22" })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_tooltip, {
                                          activator: "parent",
                                          location: "bottom"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Download ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ])
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
                    createVNode(_component_v_card, { elevation: "10" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_title, { class: "text-h4" }, {
                              default: withCtx(() => [
                                createTextVNode("Date & Time")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "text-subtitle-1 text-grey100 text-10 my-3" }, " Time zones and calendar display settings. "),
                            createVNode("div", null, [
                              createVNode("div", { class: "d-flex align-center mt-7" }, [
                                createVNode(_component_v_avatar, {
                                  size: "48",
                                  class: "mr-2",
                                  rounded: "md",
                                  color: "lightprimary"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ClockIcon, { size: "22" })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "pl-4" }, [
                                  createVNode("h5", { class: "text-subtitle-1 text-grey100 mb-1" }, "Time zone"),
                                  createVNode("h6", { class: "text-h6" }, "(UTC + 02:00) Athens, Bucharet")
                                ]),
                                createVNode("div", { class: "ml-auto" }, [
                                  createVNode(_component_v_btn, {
                                    size: "30",
                                    icon: "",
                                    rounded: "pill",
                                    class: "lightprimary d-flex"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_avatar, { size: "30" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_DownloadIcon, { size: "22" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_tooltip, {
                                        activator: "parent",
                                        location: "bottom"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Download ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
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
              md: "9"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, { elevation: "10" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card_title, { class: "text-h4" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Ignore Tracking`);
                                  } else {
                                    return [
                                      createTextVNode("Ignore Tracking")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div${_scopeId4}><div class="d-flex align-center mt-7"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_avatar, {
                                size: "48",
                                class: "mr-2",
                                rounded: "md",
                                color: "lightprimary"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_PlayerPauseIcon, { size: "22" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_PlayerPauseIcon, { size: "22" })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="pl-4"${_scopeId4}><h6 class="text-h6 mb-3 mt-n1"${_scopeId4}>Ignore Browser Tracking</h6><h5 class="text-subtitle-1 text-grey100"${_scopeId4}>Browser Cookie</h5></div><div class="ml-auto mr-1 pa-sm-0 pl-sm-1 pa-6 pl-7"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_switch, {
                                modelValue: switchoff3.value,
                                "onUpdate:modelValue": ($event) => switchoff3.value = $event,
                                "hide-details": "",
                                color: "primary"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div></div></div>`);
                            } else {
                              return [
                                createVNode(_component_v_card_title, { class: "text-h4" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Ignore Tracking")
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", null, [
                                  createVNode("div", { class: "d-flex align-center mt-7" }, [
                                    createVNode(_component_v_avatar, {
                                      size: "48",
                                      class: "mr-2",
                                      rounded: "md",
                                      color: "lightprimary"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_PlayerPauseIcon, { size: "22" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "pl-4" }, [
                                      createVNode("h6", { class: "text-h6 mb-3 mt-n1" }, "Ignore Browser Tracking"),
                                      createVNode("h5", { class: "text-subtitle-1 text-grey100" }, "Browser Cookie")
                                    ]),
                                    createVNode("div", { class: "ml-auto mr-1 pa-sm-0 pl-sm-1 pa-6 pl-7" }, [
                                      createVNode(_component_v_switch, {
                                        modelValue: switchoff3.value,
                                        "onUpdate:modelValue": ($event) => switchoff3.value = $event,
                                        "hide-details": "",
                                        color: "primary"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
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
                              createVNode(_component_v_card_title, { class: "text-h4" }, {
                                default: withCtx(() => [
                                  createTextVNode("Ignore Tracking")
                                ]),
                                _: 1
                              }),
                              createVNode("div", null, [
                                createVNode("div", { class: "d-flex align-center mt-7" }, [
                                  createVNode(_component_v_avatar, {
                                    size: "48",
                                    class: "mr-2",
                                    rounded: "md",
                                    color: "lightprimary"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_PlayerPauseIcon, { size: "22" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "pl-4" }, [
                                    createVNode("h6", { class: "text-h6 mb-3 mt-n1" }, "Ignore Browser Tracking"),
                                    createVNode("h5", { class: "text-subtitle-1 text-grey100" }, "Browser Cookie")
                                  ]),
                                  createVNode("div", { class: "ml-auto mr-1 pa-sm-0 pl-sm-1 pa-6 pl-7" }, [
                                    createVNode(_component_v_switch, {
                                      modelValue: switchoff3.value,
                                      "onUpdate:modelValue": ($event) => switchoff3.value = $event,
                                      "hide-details": "",
                                      color: "primary"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
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
                    createVNode(_component_v_card, { elevation: "10" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_title, { class: "text-h4" }, {
                              default: withCtx(() => [
                                createTextVNode("Ignore Tracking")
                              ]),
                              _: 1
                            }),
                            createVNode("div", null, [
                              createVNode("div", { class: "d-flex align-center mt-7" }, [
                                createVNode(_component_v_avatar, {
                                  size: "48",
                                  class: "mr-2",
                                  rounded: "md",
                                  color: "lightprimary"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_PlayerPauseIcon, { size: "22" })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "pl-4" }, [
                                  createVNode("h6", { class: "text-h6 mb-3 mt-n1" }, "Ignore Browser Tracking"),
                                  createVNode("h5", { class: "text-subtitle-1 text-grey100" }, "Browser Cookie")
                                ]),
                                createVNode("div", { class: "ml-auto mr-1 pa-sm-0 pl-sm-1 pa-6 pl-7" }, [
                                  createVNode(_component_v_switch, {
                                    modelValue: switchoff3.value,
                                    "onUpdate:modelValue": ($event) => switchoff3.value = $event,
                                    "hide-details": "",
                                    color: "primary"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])
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
                md: "9"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, { elevation: "10" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_item, null, {
                        default: withCtx(() => [
                          createVNode("h4", { class: "text-h4" }, "Notification Preferences"),
                          createVNode("div", { class: "text-subtitle-1 text-grey100 text-10 my-3" }, " Select the notificaitons ou would like to receive via email. Please note that you cannot opt out of receving service messages, such as payment, security or legal notifications. "),
                          createVNode("div", { class: "mt-6" }, [
                            createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                              default: withCtx(() => [
                                createTextVNode("Email Address*")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_text_field, {
                              color: "primary",
                              variant: "outlined",
                              type: "email",
                              "hide-details": ""
                            }),
                            createVNode("span", { class: "text-subtitle-1 text-grey100" }, "Required for notificaitons.")
                          ]),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(notificationTb), (list) => {
                            return openBlock(), createBlock("div", {
                              class: "d-flex align-sm-center align-start mt-7",
                              key: list.title
                            }, [
                              createVNode(_component_v_avatar, {
                                size: "48",
                                class: "mr-2",
                                rounded: "md",
                                color: "lightprimary"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(resolveDynamicComponent(list.icon), {
                                    "stroke-width": "2",
                                    size: "22"
                                  }))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("div", { class: "pl-4" }, [
                                createVNode("h6", { class: "text-h6 mb-3 mt-n1" }, toDisplayString(list.title), 1),
                                createVNode("h5", { class: "text-subtitle-1 text-grey100" }, toDisplayString(list.subtitle), 1)
                              ]),
                              createVNode("div", { class: "ml-auto mr-1 pa-sm-0 pl-sm-1 pa-6 pl-7" }, [
                                createVNode(_component_v_switch, {
                                  "model-value": list.switch,
                                  "hide-details": "",
                                  color: "primary"
                                }, null, 8, ["model-value"])
                              ])
                            ]);
                          }), 128))
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
                md: "9"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, { elevation: "10" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_title, { class: "text-h4" }, {
                            default: withCtx(() => [
                              createTextVNode("Date & Time")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "text-subtitle-1 text-grey100 text-10 my-3" }, " Time zones and calendar display settings. "),
                          createVNode("div", null, [
                            createVNode("div", { class: "d-flex align-center mt-7" }, [
                              createVNode(_component_v_avatar, {
                                size: "48",
                                class: "mr-2",
                                rounded: "md",
                                color: "lightprimary"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_ClockIcon, { size: "22" })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "pl-4" }, [
                                createVNode("h5", { class: "text-subtitle-1 text-grey100 mb-1" }, "Time zone"),
                                createVNode("h6", { class: "text-h6" }, "(UTC + 02:00) Athens, Bucharet")
                              ]),
                              createVNode("div", { class: "ml-auto" }, [
                                createVNode(_component_v_btn, {
                                  size: "30",
                                  icon: "",
                                  rounded: "pill",
                                  class: "lightprimary d-flex"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_avatar, { size: "30" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_DownloadIcon, { size: "22" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_tooltip, {
                                      activator: "parent",
                                      location: "bottom"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Download ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ])
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
                md: "9"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, { elevation: "10" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_title, { class: "text-h4" }, {
                            default: withCtx(() => [
                              createTextVNode("Ignore Tracking")
                            ]),
                            _: 1
                          }),
                          createVNode("div", null, [
                            createVNode("div", { class: "d-flex align-center mt-7" }, [
                              createVNode(_component_v_avatar, {
                                size: "48",
                                class: "mr-2",
                                rounded: "md",
                                color: "lightprimary"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_PlayerPauseIcon, { size: "22" })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "pl-4" }, [
                                createVNode("h6", { class: "text-h6 mb-3 mt-n1" }, "Ignore Browser Tracking"),
                                createVNode("h5", { class: "text-subtitle-1 text-grey100" }, "Browser Cookie")
                              ]),
                              createVNode("div", { class: "ml-auto mr-1 pa-sm-0 pl-sm-1 pa-6 pl-7" }, [
                                createVNode(_component_v_switch, {
                                  modelValue: switchoff3.value,
                                  "onUpdate:modelValue": ($event) => switchoff3.value = $event,
                                  "hide-details": "",
                                  color: "primary"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ])
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
      _push(`<div class="d-flex justify-end mt-5 pb-3">`);
      _push(ssrRenderComponent(_component_v_btn, {
        size: "large",
        color: "primary",
        class: "mr-4",
        rounded: "pill"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Save`);
          } else {
            return [
              createTextVNode("Save")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_btn, {
        size: "large",
        class: "bg-lighterror text-error",
        elevation: "0",
        rounded: "pill"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Cancel`);
          } else {
            return [
              createTextVNode("Cancel")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/account-settings/NotificationTab.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "BillsTab",
  __ssrInlineRender: true,
  setup(__props) {
    const businessname = ref("Visitor Analytics");
    const businesssector = ref("Arts, Media & Entertainment");
    const billingcountry = ref("Romania");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_label = resolveComponent("v-label");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_tooltip = resolveComponent("v-tooltip");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_row, { class: "justify-center ma-n2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              md: "9"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, { elevation: "10" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h4 class="text-h4"${_scopeId4}>Billing Information</h4><div class="mt-6"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_row, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Business Name*`);
                                              } else {
                                                return [
                                                  createTextVNode("Business Name*")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            color: "primary",
                                            variant: "outlined",
                                            type: "text",
                                            modelValue: businessname.value,
                                            "onUpdate:modelValue": ($event) => businessname.value = $event,
                                            "hide-details": ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Business Name*")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_text_field, {
                                              color: "primary",
                                              variant: "outlined",
                                              type: "text",
                                              modelValue: businessname.value,
                                              "onUpdate:modelValue": ($event) => businessname.value = $event,
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Business Sector*`);
                                              } else {
                                                return [
                                                  createTextVNode("Business Sector*")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            color: "primary",
                                            variant: "outlined",
                                            type: "text",
                                            modelValue: businesssector.value,
                                            "onUpdate:modelValue": ($event) => businesssector.value = $event,
                                            "hide-details": ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Business Sector*")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_text_field, {
                                              color: "primary",
                                              variant: "outlined",
                                              type: "text",
                                              modelValue: businesssector.value,
                                              "onUpdate:modelValue": ($event) => businesssector.value = $event,
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Business Address*`);
                                              } else {
                                                return [
                                                  createTextVNode("Business Address*")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            color: "primary",
                                            variant: "outlined",
                                            type: "text",
                                            "hide-details": ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Business Address*")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_text_field, {
                                              color: "primary",
                                              variant: "outlined",
                                              type: "text",
                                              "hide-details": ""
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Country*`);
                                              } else {
                                                return [
                                                  createTextVNode("Country*")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            color: "primary",
                                            variant: "outlined",
                                            type: "text",
                                            modelValue: billingcountry.value,
                                            "onUpdate:modelValue": ($event) => billingcountry.value = $event,
                                            "hide-details": ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Country*")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_text_field, {
                                              color: "primary",
                                              variant: "outlined",
                                              type: "text",
                                              modelValue: billingcountry.value,
                                              "onUpdate:modelValue": ($event) => billingcountry.value = $event,
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`First Name*`);
                                              } else {
                                                return [
                                                  createTextVNode("First Name*")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            color: "primary",
                                            variant: "outlined",
                                            type: "text",
                                            "hide-details": ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                              default: withCtx(() => [
                                                createTextVNode("First Name*")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_text_field, {
                                              color: "primary",
                                              variant: "outlined",
                                              type: "text",
                                              "hide-details": ""
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Last Name*`);
                                              } else {
                                                return [
                                                  createTextVNode("Last Name*")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            color: "primary",
                                            variant: "outlined",
                                            type: "text",
                                            "hide-details": ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Last Name*")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_text_field, {
                                              color: "primary",
                                              variant: "outlined",
                                              type: "text",
                                              "hide-details": ""
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Business Name*")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_text_field, {
                                            color: "primary",
                                            variant: "outlined",
                                            type: "text",
                                            modelValue: businessname.value,
                                            "onUpdate:modelValue": ($event) => businessname.value = $event,
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                              createTextVNode("Business Sector*")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_text_field, {
                                            color: "primary",
                                            variant: "outlined",
                                            type: "text",
                                            modelValue: businesssector.value,
                                            "onUpdate:modelValue": ($event) => businesssector.value = $event,
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                              createTextVNode("Business Address*")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_text_field, {
                                            color: "primary",
                                            variant: "outlined",
                                            type: "text",
                                            "hide-details": ""
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
                                              createTextVNode("Country*")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_text_field, {
                                            color: "primary",
                                            variant: "outlined",
                                            type: "text",
                                            modelValue: billingcountry.value,
                                            "onUpdate:modelValue": ($event) => billingcountry.value = $event,
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                              createTextVNode("First Name*")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_text_field, {
                                            color: "primary",
                                            variant: "outlined",
                                            type: "text",
                                            "hide-details": ""
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
                                              createTextVNode("Last Name*")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_text_field, {
                                            color: "primary",
                                            variant: "outlined",
                                            type: "text",
                                            "hide-details": ""
                                          })
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
                              return [
                                createVNode("h4", { class: "text-h4" }, "Billing Information"),
                                createVNode("div", { class: "mt-6" }, [
                                  createVNode(_component_v_row, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Business Name*")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_text_field, {
                                            color: "primary",
                                            variant: "outlined",
                                            type: "text",
                                            modelValue: businessname.value,
                                            "onUpdate:modelValue": ($event) => businessname.value = $event,
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                              createTextVNode("Business Sector*")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_text_field, {
                                            color: "primary",
                                            variant: "outlined",
                                            type: "text",
                                            modelValue: businesssector.value,
                                            "onUpdate:modelValue": ($event) => businesssector.value = $event,
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                              createTextVNode("Business Address*")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_text_field, {
                                            color: "primary",
                                            variant: "outlined",
                                            type: "text",
                                            "hide-details": ""
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
                                              createTextVNode("Country*")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_text_field, {
                                            color: "primary",
                                            variant: "outlined",
                                            type: "text",
                                            modelValue: billingcountry.value,
                                            "onUpdate:modelValue": ($event) => billingcountry.value = $event,
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                              createTextVNode("First Name*")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_text_field, {
                                            color: "primary",
                                            variant: "outlined",
                                            type: "text",
                                            "hide-details": ""
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
                                              createTextVNode("Last Name*")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_text_field, {
                                            color: "primary",
                                            variant: "outlined",
                                            type: "text",
                                            "hide-details": ""
                                          })
                                        ]),
                                        _: 1
                                      })
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
                              createVNode("h4", { class: "text-h4" }, "Billing Information"),
                              createVNode("div", { class: "mt-6" }, [
                                createVNode(_component_v_row, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Business Name*")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_text_field, {
                                          color: "primary",
                                          variant: "outlined",
                                          type: "text",
                                          modelValue: businessname.value,
                                          "onUpdate:modelValue": ($event) => businessname.value = $event,
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                            createTextVNode("Business Sector*")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_text_field, {
                                          color: "primary",
                                          variant: "outlined",
                                          type: "text",
                                          modelValue: businesssector.value,
                                          "onUpdate:modelValue": ($event) => businesssector.value = $event,
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                            createTextVNode("Business Address*")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_text_field, {
                                          color: "primary",
                                          variant: "outlined",
                                          type: "text",
                                          "hide-details": ""
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
                                            createTextVNode("Country*")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_text_field, {
                                          color: "primary",
                                          variant: "outlined",
                                          type: "text",
                                          modelValue: billingcountry.value,
                                          "onUpdate:modelValue": ($event) => billingcountry.value = $event,
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                            createTextVNode("First Name*")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_text_field, {
                                          color: "primary",
                                          variant: "outlined",
                                          type: "text",
                                          "hide-details": ""
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
                                            createTextVNode("Last Name*")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_text_field, {
                                          color: "primary",
                                          variant: "outlined",
                                          type: "text",
                                          "hide-details": ""
                                        })
                                      ]),
                                      _: 1
                                    })
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
                    createVNode(_component_v_card, { elevation: "10" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_item, null, {
                          default: withCtx(() => [
                            createVNode("h4", { class: "text-h4" }, "Billing Information"),
                            createVNode("div", { class: "mt-6" }, [
                              createVNode(_component_v_row, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Business Name*")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        color: "primary",
                                        variant: "outlined",
                                        type: "text",
                                        modelValue: businessname.value,
                                        "onUpdate:modelValue": ($event) => businessname.value = $event,
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                          createTextVNode("Business Sector*")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        color: "primary",
                                        variant: "outlined",
                                        type: "text",
                                        modelValue: businesssector.value,
                                        "onUpdate:modelValue": ($event) => businesssector.value = $event,
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                          createTextVNode("Business Address*")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        color: "primary",
                                        variant: "outlined",
                                        type: "text",
                                        "hide-details": ""
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
                                          createTextVNode("Country*")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        color: "primary",
                                        variant: "outlined",
                                        type: "text",
                                        modelValue: billingcountry.value,
                                        "onUpdate:modelValue": ($event) => billingcountry.value = $event,
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                          createTextVNode("First Name*")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        color: "primary",
                                        variant: "outlined",
                                        type: "text",
                                        "hide-details": ""
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
                                          createTextVNode("Last Name*")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_text_field, {
                                        color: "primary",
                                        variant: "outlined",
                                        type: "text",
                                        "hide-details": ""
                                      })
                                    ]),
                                    _: 1
                                  })
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
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              md: "9"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, { elevation: "10" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h4 class="text-h4"${_scopeId4}>Current Plan :<span class="text-success"${_scopeId4}>Executive</span></h4><div class="text-subtitle-1 text-grey100 text-10 my-3"${_scopeId4}> Thanks for being a premium member and supporting our development. </div><div class="d-flex align-center mt-7"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_avatar, {
                                size: "48",
                                class: "mr-2",
                                rounded: "md",
                                color: "lightprimary"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(PackageIcon), { size: "22" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(PackageIcon), { size: "22" })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="pl-4"${_scopeId4}><h5 class="text-subtitle-1 text-grey100 mb-1"${_scopeId4}>Current Plan</h5><h6 class="text-h6"${_scopeId4}>750.000 Monthly Visits</h6></div><div class="ml-auto"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_btn, {
                                size: "35",
                                icon: "",
                                variant: "flat",
                                class: "lightprimary d-flex"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_avatar, { size: "35" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(CirclePlusIcon), { size: "22" }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(CirclePlusIcon), { size: "22" })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_tooltip, {
                                      activator: "parent",
                                      location: "bottom"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Add `);
                                        } else {
                                          return [
                                            createTextVNode("Add ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_avatar, { size: "35" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(CirclePlusIcon), { size: "22" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_tooltip, {
                                        activator: "parent",
                                        location: "bottom"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Add ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div></div><div class="d-flex mt-5"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_btn, {
                                color: "primary",
                                class: "mr-4",
                                flat: "",
                                rounded: "pill"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Change Plan`);
                                  } else {
                                    return [
                                      createTextVNode("Change Plan")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_btn, {
                                class: "text-error",
                                variant: "outlined",
                                flat: "",
                                rounded: "pill"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Reset Plan`);
                                  } else {
                                    return [
                                      createTextVNode("Reset Plan")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("h4", { class: "text-h4" }, [
                                  createTextVNode("Current Plan :"),
                                  createVNode("span", { class: "text-success" }, "Executive")
                                ]),
                                createVNode("div", { class: "text-subtitle-1 text-grey100 text-10 my-3" }, " Thanks for being a premium member and supporting our development. "),
                                createVNode("div", { class: "d-flex align-center mt-7" }, [
                                  createVNode(_component_v_avatar, {
                                    size: "48",
                                    class: "mr-2",
                                    rounded: "md",
                                    color: "lightprimary"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(PackageIcon), { size: "22" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "pl-4" }, [
                                    createVNode("h5", { class: "text-subtitle-1 text-grey100 mb-1" }, "Current Plan"),
                                    createVNode("h6", { class: "text-h6" }, "750.000 Monthly Visits")
                                  ]),
                                  createVNode("div", { class: "ml-auto" }, [
                                    createVNode(_component_v_btn, {
                                      size: "35",
                                      icon: "",
                                      variant: "flat",
                                      class: "lightprimary d-flex"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_avatar, { size: "35" }, {
                                          default: withCtx(() => [
                                            createVNode(unref(CirclePlusIcon), { size: "22" })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_tooltip, {
                                          activator: "parent",
                                          location: "bottom"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Add ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                createVNode("div", { class: "d-flex mt-5" }, [
                                  createVNode(_component_v_btn, {
                                    color: "primary",
                                    class: "mr-4",
                                    flat: "",
                                    rounded: "pill"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Change Plan")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_btn, {
                                    class: "text-error",
                                    variant: "outlined",
                                    flat: "",
                                    rounded: "pill"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Reset Plan")
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
                              createVNode("h4", { class: "text-h4" }, [
                                createTextVNode("Current Plan :"),
                                createVNode("span", { class: "text-success" }, "Executive")
                              ]),
                              createVNode("div", { class: "text-subtitle-1 text-grey100 text-10 my-3" }, " Thanks for being a premium member and supporting our development. "),
                              createVNode("div", { class: "d-flex align-center mt-7" }, [
                                createVNode(_component_v_avatar, {
                                  size: "48",
                                  class: "mr-2",
                                  rounded: "md",
                                  color: "lightprimary"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(PackageIcon), { size: "22" })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "pl-4" }, [
                                  createVNode("h5", { class: "text-subtitle-1 text-grey100 mb-1" }, "Current Plan"),
                                  createVNode("h6", { class: "text-h6" }, "750.000 Monthly Visits")
                                ]),
                                createVNode("div", { class: "ml-auto" }, [
                                  createVNode(_component_v_btn, {
                                    size: "35",
                                    icon: "",
                                    variant: "flat",
                                    class: "lightprimary d-flex"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_avatar, { size: "35" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(CirclePlusIcon), { size: "22" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_tooltip, {
                                        activator: "parent",
                                        location: "bottom"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Add ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              createVNode("div", { class: "d-flex mt-5" }, [
                                createVNode(_component_v_btn, {
                                  color: "primary",
                                  class: "mr-4",
                                  flat: "",
                                  rounded: "pill"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Change Plan")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_btn, {
                                  class: "text-error",
                                  variant: "outlined",
                                  flat: "",
                                  rounded: "pill"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Reset Plan")
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
                    createVNode(_component_v_card, { elevation: "10" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_item, null, {
                          default: withCtx(() => [
                            createVNode("h4", { class: "text-h4" }, [
                              createTextVNode("Current Plan :"),
                              createVNode("span", { class: "text-success" }, "Executive")
                            ]),
                            createVNode("div", { class: "text-subtitle-1 text-grey100 text-10 my-3" }, " Thanks for being a premium member and supporting our development. "),
                            createVNode("div", { class: "d-flex align-center mt-7" }, [
                              createVNode(_component_v_avatar, {
                                size: "48",
                                class: "mr-2",
                                rounded: "md",
                                color: "lightprimary"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(PackageIcon), { size: "22" })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "pl-4" }, [
                                createVNode("h5", { class: "text-subtitle-1 text-grey100 mb-1" }, "Current Plan"),
                                createVNode("h6", { class: "text-h6" }, "750.000 Monthly Visits")
                              ]),
                              createVNode("div", { class: "ml-auto" }, [
                                createVNode(_component_v_btn, {
                                  size: "35",
                                  icon: "",
                                  variant: "flat",
                                  class: "lightprimary d-flex"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_avatar, { size: "35" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(CirclePlusIcon), { size: "22" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_tooltip, {
                                      activator: "parent",
                                      location: "bottom"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Add ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            createVNode("div", { class: "d-flex mt-5" }, [
                              createVNode(_component_v_btn, {
                                color: "primary",
                                class: "mr-4",
                                flat: "",
                                rounded: "pill"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Change Plan")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_btn, {
                                class: "text-error",
                                variant: "outlined",
                                flat: "",
                                rounded: "pill"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Reset Plan")
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
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              md: "9"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, { elevation: "10" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h4 class="text-h4"${_scopeId4}>Payment Method</h4><div class="text-subtitle-1 text-grey100 text-10 my-3"${_scopeId4}>On 26 December, 2023</div><div class="d-flex align-center mt-7"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_avatar, {
                                size: "48",
                                class: "mr-2",
                                rounded: "md",
                                color: "lightprimary"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(CreditCardIcon), { size: "22" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(CreditCardIcon), { size: "22" })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="pl-4"${_scopeId4}><h6 class="text-h6 mb-3 mt-n1"${_scopeId4}>Visa</h6><h5 class="text-subtitle-1"${_scopeId4}>*****2102</h5></div><div class="ml-auto"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_btn, {
                                size: "35",
                                icon: "",
                                variant: "flat",
                                class: "lightprimary d-flex"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_avatar, { size: "35" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(PencilMinusIcon), { size: "22" }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(PencilMinusIcon), { size: "22" })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_tooltip, {
                                      activator: "parent",
                                      location: "bottom"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Edit `);
                                        } else {
                                          return [
                                            createTextVNode("Edit ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_avatar, { size: "35" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(PencilMinusIcon), { size: "22" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_tooltip, {
                                        activator: "parent",
                                        location: "bottom"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Edit ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div></div><div class="mt-4"${_scopeId4}><div class="text-subtitle-1 text-grey100 text-10 mb-3"${_scopeId4}> If you updated your payment method, it will only be dislpayed here after your next billing cycle. </div>`);
                              _push5(ssrRenderComponent(_component_v_btn, {
                                class: "text-error",
                                variant: "outlined",
                                rounded: "pill",
                                flat: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Cancel Subscription`);
                                  } else {
                                    return [
                                      createTextVNode("Cancel Subscription")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("h4", { class: "text-h4" }, "Payment Method"),
                                createVNode("div", { class: "text-subtitle-1 text-grey100 text-10 my-3" }, "On 26 December, 2023"),
                                createVNode("div", { class: "d-flex align-center mt-7" }, [
                                  createVNode(_component_v_avatar, {
                                    size: "48",
                                    class: "mr-2",
                                    rounded: "md",
                                    color: "lightprimary"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(CreditCardIcon), { size: "22" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "pl-4" }, [
                                    createVNode("h6", { class: "text-h6 mb-3 mt-n1" }, "Visa"),
                                    createVNode("h5", { class: "text-subtitle-1" }, "*****2102")
                                  ]),
                                  createVNode("div", { class: "ml-auto" }, [
                                    createVNode(_component_v_btn, {
                                      size: "35",
                                      icon: "",
                                      variant: "flat",
                                      class: "lightprimary d-flex"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_avatar, { size: "35" }, {
                                          default: withCtx(() => [
                                            createVNode(unref(PencilMinusIcon), { size: "22" })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_tooltip, {
                                          activator: "parent",
                                          location: "bottom"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Edit ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                createVNode("div", { class: "mt-4" }, [
                                  createVNode("div", { class: "text-subtitle-1 text-grey100 text-10 mb-3" }, " If you updated your payment method, it will only be dislpayed here after your next billing cycle. "),
                                  createVNode(_component_v_btn, {
                                    class: "text-error",
                                    variant: "outlined",
                                    rounded: "pill",
                                    flat: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Cancel Subscription")
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
                              createVNode("h4", { class: "text-h4" }, "Payment Method"),
                              createVNode("div", { class: "text-subtitle-1 text-grey100 text-10 my-3" }, "On 26 December, 2023"),
                              createVNode("div", { class: "d-flex align-center mt-7" }, [
                                createVNode(_component_v_avatar, {
                                  size: "48",
                                  class: "mr-2",
                                  rounded: "md",
                                  color: "lightprimary"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(CreditCardIcon), { size: "22" })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "pl-4" }, [
                                  createVNode("h6", { class: "text-h6 mb-3 mt-n1" }, "Visa"),
                                  createVNode("h5", { class: "text-subtitle-1" }, "*****2102")
                                ]),
                                createVNode("div", { class: "ml-auto" }, [
                                  createVNode(_component_v_btn, {
                                    size: "35",
                                    icon: "",
                                    variant: "flat",
                                    class: "lightprimary d-flex"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_avatar, { size: "35" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(PencilMinusIcon), { size: "22" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_tooltip, {
                                        activator: "parent",
                                        location: "bottom"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Edit ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              createVNode("div", { class: "mt-4" }, [
                                createVNode("div", { class: "text-subtitle-1 text-grey100 text-10 mb-3" }, " If you updated your payment method, it will only be dislpayed here after your next billing cycle. "),
                                createVNode(_component_v_btn, {
                                  class: "text-error",
                                  variant: "outlined",
                                  rounded: "pill",
                                  flat: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Cancel Subscription")
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
                    createVNode(_component_v_card, { elevation: "10" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_item, null, {
                          default: withCtx(() => [
                            createVNode("h4", { class: "text-h4" }, "Payment Method"),
                            createVNode("div", { class: "text-subtitle-1 text-grey100 text-10 my-3" }, "On 26 December, 2023"),
                            createVNode("div", { class: "d-flex align-center mt-7" }, [
                              createVNode(_component_v_avatar, {
                                size: "48",
                                class: "mr-2",
                                rounded: "md",
                                color: "lightprimary"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(CreditCardIcon), { size: "22" })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "pl-4" }, [
                                createVNode("h6", { class: "text-h6 mb-3 mt-n1" }, "Visa"),
                                createVNode("h5", { class: "text-subtitle-1" }, "*****2102")
                              ]),
                              createVNode("div", { class: "ml-auto" }, [
                                createVNode(_component_v_btn, {
                                  size: "35",
                                  icon: "",
                                  variant: "flat",
                                  class: "lightprimary d-flex"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_avatar, { size: "35" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(PencilMinusIcon), { size: "22" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_tooltip, {
                                      activator: "parent",
                                      location: "bottom"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Edit ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            createVNode("div", { class: "mt-4" }, [
                              createVNode("div", { class: "text-subtitle-1 text-grey100 text-10 mb-3" }, " If you updated your payment method, it will only be dislpayed here after your next billing cycle. "),
                              createVNode(_component_v_btn, {
                                class: "text-error",
                                variant: "outlined",
                                rounded: "pill",
                                flat: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Cancel Subscription")
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
              createVNode(_component_v_col, {
                cols: "12",
                md: "9"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, { elevation: "10" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_item, null, {
                        default: withCtx(() => [
                          createVNode("h4", { class: "text-h4" }, "Billing Information"),
                          createVNode("div", { class: "mt-6" }, [
                            createVNode(_component_v_row, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Business Name*")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_text_field, {
                                      color: "primary",
                                      variant: "outlined",
                                      type: "text",
                                      modelValue: businessname.value,
                                      "onUpdate:modelValue": ($event) => businessname.value = $event,
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                        createTextVNode("Business Sector*")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_text_field, {
                                      color: "primary",
                                      variant: "outlined",
                                      type: "text",
                                      modelValue: businesssector.value,
                                      "onUpdate:modelValue": ($event) => businesssector.value = $event,
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                        createTextVNode("Business Address*")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_text_field, {
                                      color: "primary",
                                      variant: "outlined",
                                      type: "text",
                                      "hide-details": ""
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
                                        createTextVNode("Country*")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_text_field, {
                                      color: "primary",
                                      variant: "outlined",
                                      type: "text",
                                      modelValue: billingcountry.value,
                                      "onUpdate:modelValue": ($event) => billingcountry.value = $event,
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                        createTextVNode("First Name*")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_text_field, {
                                      color: "primary",
                                      variant: "outlined",
                                      type: "text",
                                      "hide-details": ""
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
                                        createTextVNode("Last Name*")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_text_field, {
                                      color: "primary",
                                      variant: "outlined",
                                      type: "text",
                                      "hide-details": ""
                                    })
                                  ]),
                                  _: 1
                                })
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
              }),
              createVNode(_component_v_col, {
                cols: "12",
                md: "9"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, { elevation: "10" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_item, null, {
                        default: withCtx(() => [
                          createVNode("h4", { class: "text-h4" }, [
                            createTextVNode("Current Plan :"),
                            createVNode("span", { class: "text-success" }, "Executive")
                          ]),
                          createVNode("div", { class: "text-subtitle-1 text-grey100 text-10 my-3" }, " Thanks for being a premium member and supporting our development. "),
                          createVNode("div", { class: "d-flex align-center mt-7" }, [
                            createVNode(_component_v_avatar, {
                              size: "48",
                              class: "mr-2",
                              rounded: "md",
                              color: "lightprimary"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(PackageIcon), { size: "22" })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "pl-4" }, [
                              createVNode("h5", { class: "text-subtitle-1 text-grey100 mb-1" }, "Current Plan"),
                              createVNode("h6", { class: "text-h6" }, "750.000 Monthly Visits")
                            ]),
                            createVNode("div", { class: "ml-auto" }, [
                              createVNode(_component_v_btn, {
                                size: "35",
                                icon: "",
                                variant: "flat",
                                class: "lightprimary d-flex"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_avatar, { size: "35" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(CirclePlusIcon), { size: "22" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_tooltip, {
                                    activator: "parent",
                                    location: "bottom"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Add ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createVNode("div", { class: "d-flex mt-5" }, [
                            createVNode(_component_v_btn, {
                              color: "primary",
                              class: "mr-4",
                              flat: "",
                              rounded: "pill"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Change Plan")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_btn, {
                              class: "text-error",
                              variant: "outlined",
                              flat: "",
                              rounded: "pill"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Reset Plan")
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
              }),
              createVNode(_component_v_col, {
                cols: "12",
                md: "9"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, { elevation: "10" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_item, null, {
                        default: withCtx(() => [
                          createVNode("h4", { class: "text-h4" }, "Payment Method"),
                          createVNode("div", { class: "text-subtitle-1 text-grey100 text-10 my-3" }, "On 26 December, 2023"),
                          createVNode("div", { class: "d-flex align-center mt-7" }, [
                            createVNode(_component_v_avatar, {
                              size: "48",
                              class: "mr-2",
                              rounded: "md",
                              color: "lightprimary"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(CreditCardIcon), { size: "22" })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "pl-4" }, [
                              createVNode("h6", { class: "text-h6 mb-3 mt-n1" }, "Visa"),
                              createVNode("h5", { class: "text-subtitle-1" }, "*****2102")
                            ]),
                            createVNode("div", { class: "ml-auto" }, [
                              createVNode(_component_v_btn, {
                                size: "35",
                                icon: "",
                                variant: "flat",
                                class: "lightprimary d-flex"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_avatar, { size: "35" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(PencilMinusIcon), { size: "22" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_tooltip, {
                                    activator: "parent",
                                    location: "bottom"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Edit ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createVNode("div", { class: "mt-4" }, [
                            createVNode("div", { class: "text-subtitle-1 text-grey100 text-10 mb-3" }, " If you updated your payment method, it will only be dislpayed here after your next billing cycle. "),
                            createVNode(_component_v_btn, {
                              class: "text-error",
                              variant: "outlined",
                              rounded: "pill",
                              flat: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Cancel Subscription")
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
      _push(`<div class="d-flex justify-end mt-5 pb-3">`);
      _push(ssrRenderComponent(_component_v_btn, {
        size: "large",
        color: "primary",
        rounded: "pill",
        class: "mr-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Save`);
          } else {
            return [
              createTextVNode("Save")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_btn, {
        size: "large",
        class: "bg-lighterror text-error",
        elevation: "0",
        rounded: "pill"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Cancel`);
          } else {
            return [
              createTextVNode("Cancel")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/account-settings/BillsTab.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SecurityTab",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_avatar = resolveComponent("v-avatar");
      _push(ssrRenderComponent(_component_v_card, mergeProps({ elevation: "10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, { class: "ma-sm-n2 ma-n1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    md: "8"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card, { elevation: "10" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card_item, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h4 class="text-h4"${_scopeId5}>Two-factor Authentication</h4><div class="d-sm-flex justify-space-between mt-4 mb-8"${_scopeId5}><div class="text-subtitle-1 text-grey100 text-13 pr-5"${_scopeId5}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis sapiente sunt earum officiis laboriosam ut. </div>`);
                                    _push6(ssrRenderComponent(_component_v_btn, {
                                      color: "primary",
                                      class: "mt-sm-0 mt-3",
                                      flat: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Enable`);
                                        } else {
                                          return [
                                            createTextVNode("Enable")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                    _push6(ssrRenderComponent(_component_v_divider, null, null, _parent6, _scopeId5));
                                    _push6(`<div class="d-flex justify-space-between my-4"${_scopeId5}><div${_scopeId5}><h6 class="text-h6 mb-1"${_scopeId5}>Authentication App</h6><h5 class="text-subtitle-1 text-grey100"${_scopeId5}>Google auth app</h5></div>`);
                                    _push6(ssrRenderComponent(_component_v_btn, {
                                      class: "bg-lightprimary text-primary",
                                      flat: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Setup`);
                                        } else {
                                          return [
                                            createTextVNode("Setup")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                    _push6(ssrRenderComponent(_component_v_divider, null, null, _parent6, _scopeId5));
                                    _push6(`<div class="d-flex justify-space-between my-4"${_scopeId5}><div${_scopeId5}><h6 class="text-h6 mb-1"${_scopeId5}>Another e-mail</h6><h5 class="text-subtitle-1 text-grey100"${_scopeId5}>E-mail to send verification link</h5></div>`);
                                    _push6(ssrRenderComponent(_component_v_btn, {
                                      class: "bg-lightprimary text-primary",
                                      flat: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Setup`);
                                        } else {
                                          return [
                                            createTextVNode("Setup")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                    _push6(ssrRenderComponent(_component_v_divider, null, null, _parent6, _scopeId5));
                                    _push6(`<div class="d-flex justify-space-between my-4"${_scopeId5}><div${_scopeId5}><h6 class="text-h6 mb-1"${_scopeId5}>SMS Recovery</h6><h5 class="text-subtitle-1 text-grey100"${_scopeId5}>Your phone number or something</h5></div>`);
                                    _push6(ssrRenderComponent(_component_v_btn, {
                                      class: "bg-lightprimary text-primary",
                                      flat: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Setup`);
                                        } else {
                                          return [
                                            createTextVNode("Setup")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode("h4", { class: "text-h4" }, "Two-factor Authentication"),
                                      createVNode("div", { class: "d-sm-flex justify-space-between mt-4 mb-8" }, [
                                        createVNode("div", { class: "text-subtitle-1 text-grey100 text-13 pr-5" }, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis sapiente sunt earum officiis laboriosam ut. "),
                                        createVNode(_component_v_btn, {
                                          color: "primary",
                                          class: "mt-sm-0 mt-3",
                                          flat: ""
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Enable")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode(_component_v_divider),
                                      createVNode("div", { class: "d-flex justify-space-between my-4" }, [
                                        createVNode("div", null, [
                                          createVNode("h6", { class: "text-h6 mb-1" }, "Authentication App"),
                                          createVNode("h5", { class: "text-subtitle-1 text-grey100" }, "Google auth app")
                                        ]),
                                        createVNode(_component_v_btn, {
                                          class: "bg-lightprimary text-primary",
                                          flat: ""
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Setup")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode(_component_v_divider),
                                      createVNode("div", { class: "d-flex justify-space-between my-4" }, [
                                        createVNode("div", null, [
                                          createVNode("h6", { class: "text-h6 mb-1" }, "Another e-mail"),
                                          createVNode("h5", { class: "text-subtitle-1 text-grey100" }, "E-mail to send verification link")
                                        ]),
                                        createVNode(_component_v_btn, {
                                          class: "bg-lightprimary text-primary",
                                          flat: ""
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Setup")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode(_component_v_divider),
                                      createVNode("div", { class: "d-flex justify-space-between my-4" }, [
                                        createVNode("div", null, [
                                          createVNode("h6", { class: "text-h6 mb-1" }, "SMS Recovery"),
                                          createVNode("h5", { class: "text-subtitle-1 text-grey100" }, "Your phone number or something")
                                        ]),
                                        createVNode(_component_v_btn, {
                                          class: "bg-lightprimary text-primary",
                                          flat: ""
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Setup")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card_item, null, {
                                  default: withCtx(() => [
                                    createVNode("h4", { class: "text-h4" }, "Two-factor Authentication"),
                                    createVNode("div", { class: "d-sm-flex justify-space-between mt-4 mb-8" }, [
                                      createVNode("div", { class: "text-subtitle-1 text-grey100 text-13 pr-5" }, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis sapiente sunt earum officiis laboriosam ut. "),
                                      createVNode(_component_v_btn, {
                                        color: "primary",
                                        class: "mt-sm-0 mt-3",
                                        flat: ""
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Enable")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode(_component_v_divider),
                                    createVNode("div", { class: "d-flex justify-space-between my-4" }, [
                                      createVNode("div", null, [
                                        createVNode("h6", { class: "text-h6 mb-1" }, "Authentication App"),
                                        createVNode("h5", { class: "text-subtitle-1 text-grey100" }, "Google auth app")
                                      ]),
                                      createVNode(_component_v_btn, {
                                        class: "bg-lightprimary text-primary",
                                        flat: ""
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Setup")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode(_component_v_divider),
                                    createVNode("div", { class: "d-flex justify-space-between my-4" }, [
                                      createVNode("div", null, [
                                        createVNode("h6", { class: "text-h6 mb-1" }, "Another e-mail"),
                                        createVNode("h5", { class: "text-subtitle-1 text-grey100" }, "E-mail to send verification link")
                                      ]),
                                      createVNode(_component_v_btn, {
                                        class: "bg-lightprimary text-primary",
                                        flat: ""
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Setup")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode(_component_v_divider),
                                    createVNode("div", { class: "d-flex justify-space-between my-4" }, [
                                      createVNode("div", null, [
                                        createVNode("h6", { class: "text-h6 mb-1" }, "SMS Recovery"),
                                        createVNode("h5", { class: "text-subtitle-1 text-grey100" }, "Your phone number or something")
                                      ]),
                                      createVNode(_component_v_btn, {
                                        class: "bg-lightprimary text-primary",
                                        flat: ""
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Setup")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card, { elevation: "10" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_item, null, {
                                default: withCtx(() => [
                                  createVNode("h4", { class: "text-h4" }, "Two-factor Authentication"),
                                  createVNode("div", { class: "d-sm-flex justify-space-between mt-4 mb-8" }, [
                                    createVNode("div", { class: "text-subtitle-1 text-grey100 text-13 pr-5" }, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis sapiente sunt earum officiis laboriosam ut. "),
                                    createVNode(_component_v_btn, {
                                      color: "primary",
                                      class: "mt-sm-0 mt-3",
                                      flat: ""
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Enable")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode(_component_v_divider),
                                  createVNode("div", { class: "d-flex justify-space-between my-4" }, [
                                    createVNode("div", null, [
                                      createVNode("h6", { class: "text-h6 mb-1" }, "Authentication App"),
                                      createVNode("h5", { class: "text-subtitle-1 text-grey100" }, "Google auth app")
                                    ]),
                                    createVNode(_component_v_btn, {
                                      class: "bg-lightprimary text-primary",
                                      flat: ""
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Setup")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode(_component_v_divider),
                                  createVNode("div", { class: "d-flex justify-space-between my-4" }, [
                                    createVNode("div", null, [
                                      createVNode("h6", { class: "text-h6 mb-1" }, "Another e-mail"),
                                      createVNode("h5", { class: "text-subtitle-1 text-grey100" }, "E-mail to send verification link")
                                    ]),
                                    createVNode(_component_v_btn, {
                                      class: "bg-lightprimary text-primary",
                                      flat: ""
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Setup")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode(_component_v_divider),
                                  createVNode("div", { class: "d-flex justify-space-between my-4" }, [
                                    createVNode("div", null, [
                                      createVNode("h6", { class: "text-h6 mb-1" }, "SMS Recovery"),
                                      createVNode("h5", { class: "text-subtitle-1 text-grey100" }, "Your phone number or something")
                                    ]),
                                    createVNode(_component_v_btn, {
                                      class: "bg-lightprimary text-primary",
                                      flat: ""
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Setup")
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card, { elevation: "10" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card_item, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_avatar, {
                                      size: "48",
                                      class: "",
                                      rounded: "md",
                                      color: "lightprimary"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(DeviceLaptopIcon), {
                                            class: "text-primary",
                                            size: "25"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(DeviceLaptopIcon), {
                                              class: "text-primary",
                                              size: "25"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<h5 class="text-h5 mt-4"${_scopeId5}>Devices</h5><div class="text-subtitle-1 mt-3 text-grey100 text-10"${_scopeId5}> Lorem ipsum dolor sit amet consectetur adipisicing elit Rem. </div>`);
                                    _push6(ssrRenderComponent(_component_v_btn, {
                                      color: "primary",
                                      class: "mt-4",
                                      flat: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Sign out from all devices`);
                                        } else {
                                          return [
                                            createTextVNode("Sign out from all devices")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<div class="mt-sm-8 mt-5"${_scopeId5}><div class="d-flex align-center my-4"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_v_avatar, {
                                      size: "30",
                                      rounded: "md",
                                      color: "surface"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(DeviceMobileIcon), { size: "25" }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(DeviceMobileIcon), { size: "25" })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<div class="ml-3 pr-3"${_scopeId5}><h6 class="text-h6 mb-1"${_scopeId5}>iPhone 14</h6><h5 class="text-subtitle-1 text-grey100"${_scopeId5}>London UK, Oct 23 at 1:15 AM</h5></div>`);
                                    _push6(ssrRenderComponent(_component_v_btn, {
                                      size: "30",
                                      icon: "",
                                      variant: "flat",
                                      class: "lightprimary ml-auto"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_avatar, { size: "20" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(unref(DotsVerticalIcon), null, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(unref(DotsVerticalIcon))
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_avatar, { size: "20" }, {
                                              default: withCtx(() => [
                                                createVNode(unref(DotsVerticalIcon))
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                    _push6(ssrRenderComponent(_component_v_divider, null, null, _parent6, _scopeId5));
                                    _push6(`<div class="d-flex align-center my-4"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_v_avatar, {
                                      size: "30",
                                      rounded: "md",
                                      color: "surface"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(DeviceLaptopIcon), { size: "25" }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(DeviceLaptopIcon), { size: "25" })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<div class="ml-3 pr-3"${_scopeId5}><h6 class="text-h6 mb-1"${_scopeId5}>Macbook Air</h6><h5 class="text-subtitle-1 text-grey100"${_scopeId5}>Gujarat India, Oct 24 at 3:15 AM</h5></div>`);
                                    _push6(ssrRenderComponent(_component_v_btn, {
                                      size: "30",
                                      icon: "",
                                      variant: "flat",
                                      class: "lightprimary ml-auto"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_avatar, { size: "20" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(unref(DotsVerticalIcon), null, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(unref(DotsVerticalIcon))
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_avatar, { size: "20" }, {
                                              default: withCtx(() => [
                                                createVNode(unref(DotsVerticalIcon))
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div></div>`);
                                    _push6(ssrRenderComponent(_component_v_btn, {
                                      class: "bg-lightprimary text-primary mt-5",
                                      block: "",
                                      flat: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Need Help?`);
                                        } else {
                                          return [
                                            createTextVNode("Need Help?")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_avatar, {
                                        size: "48",
                                        class: "",
                                        rounded: "md",
                                        color: "lightprimary"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(DeviceLaptopIcon), {
                                            class: "text-primary",
                                            size: "25"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("h5", { class: "text-h5 mt-4" }, "Devices"),
                                      createVNode("div", { class: "text-subtitle-1 mt-3 text-grey100 text-10" }, " Lorem ipsum dolor sit amet consectetur adipisicing elit Rem. "),
                                      createVNode(_component_v_btn, {
                                        color: "primary",
                                        class: "mt-4",
                                        flat: ""
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Sign out from all devices")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "mt-sm-8 mt-5" }, [
                                        createVNode("div", { class: "d-flex align-center my-4" }, [
                                          createVNode(_component_v_avatar, {
                                            size: "30",
                                            rounded: "md",
                                            color: "surface"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(DeviceMobileIcon), { size: "25" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("div", { class: "ml-3 pr-3" }, [
                                            createVNode("h6", { class: "text-h6 mb-1" }, "iPhone 14"),
                                            createVNode("h5", { class: "text-subtitle-1 text-grey100" }, "London UK, Oct 23 at 1:15 AM")
                                          ]),
                                          createVNode(_component_v_btn, {
                                            size: "30",
                                            icon: "",
                                            variant: "flat",
                                            class: "lightprimary ml-auto"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_avatar, { size: "20" }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(DotsVerticalIcon))
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        createVNode(_component_v_divider),
                                        createVNode("div", { class: "d-flex align-center my-4" }, [
                                          createVNode(_component_v_avatar, {
                                            size: "30",
                                            rounded: "md",
                                            color: "surface"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(DeviceLaptopIcon), { size: "25" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("div", { class: "ml-3 pr-3" }, [
                                            createVNode("h6", { class: "text-h6 mb-1" }, "Macbook Air"),
                                            createVNode("h5", { class: "text-subtitle-1 text-grey100" }, "Gujarat India, Oct 24 at 3:15 AM")
                                          ]),
                                          createVNode(_component_v_btn, {
                                            size: "30",
                                            icon: "",
                                            variant: "flat",
                                            class: "lightprimary ml-auto"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_avatar, { size: "20" }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(DotsVerticalIcon))
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      createVNode(_component_v_btn, {
                                        class: "bg-lightprimary text-primary mt-5",
                                        block: "",
                                        flat: ""
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Need Help?")
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
                                    createVNode(_component_v_avatar, {
                                      size: "48",
                                      class: "",
                                      rounded: "md",
                                      color: "lightprimary"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(DeviceLaptopIcon), {
                                          class: "text-primary",
                                          size: "25"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("h5", { class: "text-h5 mt-4" }, "Devices"),
                                    createVNode("div", { class: "text-subtitle-1 mt-3 text-grey100 text-10" }, " Lorem ipsum dolor sit amet consectetur adipisicing elit Rem. "),
                                    createVNode(_component_v_btn, {
                                      color: "primary",
                                      class: "mt-4",
                                      flat: ""
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Sign out from all devices")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "mt-sm-8 mt-5" }, [
                                      createVNode("div", { class: "d-flex align-center my-4" }, [
                                        createVNode(_component_v_avatar, {
                                          size: "30",
                                          rounded: "md",
                                          color: "surface"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(DeviceMobileIcon), { size: "25" })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("div", { class: "ml-3 pr-3" }, [
                                          createVNode("h6", { class: "text-h6 mb-1" }, "iPhone 14"),
                                          createVNode("h5", { class: "text-subtitle-1 text-grey100" }, "London UK, Oct 23 at 1:15 AM")
                                        ]),
                                        createVNode(_component_v_btn, {
                                          size: "30",
                                          icon: "",
                                          variant: "flat",
                                          class: "lightprimary ml-auto"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_avatar, { size: "20" }, {
                                              default: withCtx(() => [
                                                createVNode(unref(DotsVerticalIcon))
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode(_component_v_divider),
                                      createVNode("div", { class: "d-flex align-center my-4" }, [
                                        createVNode(_component_v_avatar, {
                                          size: "30",
                                          rounded: "md",
                                          color: "surface"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(DeviceLaptopIcon), { size: "25" })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("div", { class: "ml-3 pr-3" }, [
                                          createVNode("h6", { class: "text-h6 mb-1" }, "Macbook Air"),
                                          createVNode("h5", { class: "text-subtitle-1 text-grey100" }, "Gujarat India, Oct 24 at 3:15 AM")
                                        ]),
                                        createVNode(_component_v_btn, {
                                          size: "30",
                                          icon: "",
                                          variant: "flat",
                                          class: "lightprimary ml-auto"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_avatar, { size: "20" }, {
                                              default: withCtx(() => [
                                                createVNode(unref(DotsVerticalIcon))
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    createVNode(_component_v_btn, {
                                      class: "bg-lightprimary text-primary mt-5",
                                      block: "",
                                      flat: ""
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Need Help?")
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
                                  createVNode(_component_v_avatar, {
                                    size: "48",
                                    class: "",
                                    rounded: "md",
                                    color: "lightprimary"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(DeviceLaptopIcon), {
                                        class: "text-primary",
                                        size: "25"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("h5", { class: "text-h5 mt-4" }, "Devices"),
                                  createVNode("div", { class: "text-subtitle-1 mt-3 text-grey100 text-10" }, " Lorem ipsum dolor sit amet consectetur adipisicing elit Rem. "),
                                  createVNode(_component_v_btn, {
                                    color: "primary",
                                    class: "mt-4",
                                    flat: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Sign out from all devices")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "mt-sm-8 mt-5" }, [
                                    createVNode("div", { class: "d-flex align-center my-4" }, [
                                      createVNode(_component_v_avatar, {
                                        size: "30",
                                        rounded: "md",
                                        color: "surface"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(DeviceMobileIcon), { size: "25" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "ml-3 pr-3" }, [
                                        createVNode("h6", { class: "text-h6 mb-1" }, "iPhone 14"),
                                        createVNode("h5", { class: "text-subtitle-1 text-grey100" }, "London UK, Oct 23 at 1:15 AM")
                                      ]),
                                      createVNode(_component_v_btn, {
                                        size: "30",
                                        icon: "",
                                        variant: "flat",
                                        class: "lightprimary ml-auto"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_avatar, { size: "20" }, {
                                            default: withCtx(() => [
                                              createVNode(unref(DotsVerticalIcon))
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode(_component_v_divider),
                                    createVNode("div", { class: "d-flex align-center my-4" }, [
                                      createVNode(_component_v_avatar, {
                                        size: "30",
                                        rounded: "md",
                                        color: "surface"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(DeviceLaptopIcon), { size: "25" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "ml-3 pr-3" }, [
                                        createVNode("h6", { class: "text-h6 mb-1" }, "Macbook Air"),
                                        createVNode("h5", { class: "text-subtitle-1 text-grey100" }, "Gujarat India, Oct 24 at 3:15 AM")
                                      ]),
                                      createVNode(_component_v_btn, {
                                        size: "30",
                                        icon: "",
                                        variant: "flat",
                                        class: "lightprimary ml-auto"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_avatar, { size: "20" }, {
                                            default: withCtx(() => [
                                              createVNode(unref(DotsVerticalIcon))
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  createVNode(_component_v_btn, {
                                    class: "bg-lightprimary text-primary mt-5",
                                    block: "",
                                    flat: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Need Help?")
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
                      md: "8"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, { elevation: "10" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_item, null, {
                              default: withCtx(() => [
                                createVNode("h4", { class: "text-h4" }, "Two-factor Authentication"),
                                createVNode("div", { class: "d-sm-flex justify-space-between mt-4 mb-8" }, [
                                  createVNode("div", { class: "text-subtitle-1 text-grey100 text-13 pr-5" }, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis sapiente sunt earum officiis laboriosam ut. "),
                                  createVNode(_component_v_btn, {
                                    color: "primary",
                                    class: "mt-sm-0 mt-3",
                                    flat: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Enable")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode(_component_v_divider),
                                createVNode("div", { class: "d-flex justify-space-between my-4" }, [
                                  createVNode("div", null, [
                                    createVNode("h6", { class: "text-h6 mb-1" }, "Authentication App"),
                                    createVNode("h5", { class: "text-subtitle-1 text-grey100" }, "Google auth app")
                                  ]),
                                  createVNode(_component_v_btn, {
                                    class: "bg-lightprimary text-primary",
                                    flat: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Setup")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode(_component_v_divider),
                                createVNode("div", { class: "d-flex justify-space-between my-4" }, [
                                  createVNode("div", null, [
                                    createVNode("h6", { class: "text-h6 mb-1" }, "Another e-mail"),
                                    createVNode("h5", { class: "text-subtitle-1 text-grey100" }, "E-mail to send verification link")
                                  ]),
                                  createVNode(_component_v_btn, {
                                    class: "bg-lightprimary text-primary",
                                    flat: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Setup")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode(_component_v_divider),
                                createVNode("div", { class: "d-flex justify-space-between my-4" }, [
                                  createVNode("div", null, [
                                    createVNode("h6", { class: "text-h6 mb-1" }, "SMS Recovery"),
                                    createVNode("h5", { class: "text-subtitle-1 text-grey100" }, "Your phone number or something")
                                  ]),
                                  createVNode(_component_v_btn, {
                                    class: "bg-lightprimary text-primary",
                                    flat: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Setup")
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
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, { elevation: "10" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_item, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_avatar, {
                                  size: "48",
                                  class: "",
                                  rounded: "md",
                                  color: "lightprimary"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(DeviceLaptopIcon), {
                                      class: "text-primary",
                                      size: "25"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("h5", { class: "text-h5 mt-4" }, "Devices"),
                                createVNode("div", { class: "text-subtitle-1 mt-3 text-grey100 text-10" }, " Lorem ipsum dolor sit amet consectetur adipisicing elit Rem. "),
                                createVNode(_component_v_btn, {
                                  color: "primary",
                                  class: "mt-4",
                                  flat: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Sign out from all devices")
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "mt-sm-8 mt-5" }, [
                                  createVNode("div", { class: "d-flex align-center my-4" }, [
                                    createVNode(_component_v_avatar, {
                                      size: "30",
                                      rounded: "md",
                                      color: "surface"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(DeviceMobileIcon), { size: "25" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "ml-3 pr-3" }, [
                                      createVNode("h6", { class: "text-h6 mb-1" }, "iPhone 14"),
                                      createVNode("h5", { class: "text-subtitle-1 text-grey100" }, "London UK, Oct 23 at 1:15 AM")
                                    ]),
                                    createVNode(_component_v_btn, {
                                      size: "30",
                                      icon: "",
                                      variant: "flat",
                                      class: "lightprimary ml-auto"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_avatar, { size: "20" }, {
                                          default: withCtx(() => [
                                            createVNode(unref(DotsVerticalIcon))
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode(_component_v_divider),
                                  createVNode("div", { class: "d-flex align-center my-4" }, [
                                    createVNode(_component_v_avatar, {
                                      size: "30",
                                      rounded: "md",
                                      color: "surface"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(DeviceLaptopIcon), { size: "25" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "ml-3 pr-3" }, [
                                      createVNode("h6", { class: "text-h6 mb-1" }, "Macbook Air"),
                                      createVNode("h5", { class: "text-subtitle-1 text-grey100" }, "Gujarat India, Oct 24 at 3:15 AM")
                                    ]),
                                    createVNode(_component_v_btn, {
                                      size: "30",
                                      icon: "",
                                      variant: "flat",
                                      class: "lightprimary ml-auto"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_avatar, { size: "20" }, {
                                          default: withCtx(() => [
                                            createVNode(unref(DotsVerticalIcon))
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                createVNode(_component_v_btn, {
                                  class: "bg-lightprimary text-primary mt-5",
                                  block: "",
                                  flat: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Need Help?")
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
            _push2(`<div class="d-flex justify-end mt-5 pb-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_btn, {
              size: "large",
              color: "primary",
              rounded: "pill",
              class: "mr-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Save`);
                } else {
                  return [
                    createTextVNode("Save")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, {
              size: "large",
              class: "bg-lighterror text-error",
              elevation: "0",
              rounded: "pill"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Cancel`);
                } else {
                  return [
                    createTextVNode("Cancel")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_v_row, { class: "ma-sm-n2 ma-n1" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    md: "8"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card, { elevation: "10" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_item, null, {
                            default: withCtx(() => [
                              createVNode("h4", { class: "text-h4" }, "Two-factor Authentication"),
                              createVNode("div", { class: "d-sm-flex justify-space-between mt-4 mb-8" }, [
                                createVNode("div", { class: "text-subtitle-1 text-grey100 text-13 pr-5" }, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis sapiente sunt earum officiis laboriosam ut. "),
                                createVNode(_component_v_btn, {
                                  color: "primary",
                                  class: "mt-sm-0 mt-3",
                                  flat: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Enable")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode(_component_v_divider),
                              createVNode("div", { class: "d-flex justify-space-between my-4" }, [
                                createVNode("div", null, [
                                  createVNode("h6", { class: "text-h6 mb-1" }, "Authentication App"),
                                  createVNode("h5", { class: "text-subtitle-1 text-grey100" }, "Google auth app")
                                ]),
                                createVNode(_component_v_btn, {
                                  class: "bg-lightprimary text-primary",
                                  flat: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Setup")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode(_component_v_divider),
                              createVNode("div", { class: "d-flex justify-space-between my-4" }, [
                                createVNode("div", null, [
                                  createVNode("h6", { class: "text-h6 mb-1" }, "Another e-mail"),
                                  createVNode("h5", { class: "text-subtitle-1 text-grey100" }, "E-mail to send verification link")
                                ]),
                                createVNode(_component_v_btn, {
                                  class: "bg-lightprimary text-primary",
                                  flat: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Setup")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode(_component_v_divider),
                              createVNode("div", { class: "d-flex justify-space-between my-4" }, [
                                createVNode("div", null, [
                                  createVNode("h6", { class: "text-h6 mb-1" }, "SMS Recovery"),
                                  createVNode("h5", { class: "text-subtitle-1 text-grey100" }, "Your phone number or something")
                                ]),
                                createVNode(_component_v_btn, {
                                  class: "bg-lightprimary text-primary",
                                  flat: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Setup")
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
                  }),
                  createVNode(_component_v_col, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card, { elevation: "10" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_avatar, {
                                size: "48",
                                class: "",
                                rounded: "md",
                                color: "lightprimary"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(DeviceLaptopIcon), {
                                    class: "text-primary",
                                    size: "25"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("h5", { class: "text-h5 mt-4" }, "Devices"),
                              createVNode("div", { class: "text-subtitle-1 mt-3 text-grey100 text-10" }, " Lorem ipsum dolor sit amet consectetur adipisicing elit Rem. "),
                              createVNode(_component_v_btn, {
                                color: "primary",
                                class: "mt-4",
                                flat: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Sign out from all devices")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "mt-sm-8 mt-5" }, [
                                createVNode("div", { class: "d-flex align-center my-4" }, [
                                  createVNode(_component_v_avatar, {
                                    size: "30",
                                    rounded: "md",
                                    color: "surface"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(DeviceMobileIcon), { size: "25" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "ml-3 pr-3" }, [
                                    createVNode("h6", { class: "text-h6 mb-1" }, "iPhone 14"),
                                    createVNode("h5", { class: "text-subtitle-1 text-grey100" }, "London UK, Oct 23 at 1:15 AM")
                                  ]),
                                  createVNode(_component_v_btn, {
                                    size: "30",
                                    icon: "",
                                    variant: "flat",
                                    class: "lightprimary ml-auto"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_avatar, { size: "20" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(DotsVerticalIcon))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode(_component_v_divider),
                                createVNode("div", { class: "d-flex align-center my-4" }, [
                                  createVNode(_component_v_avatar, {
                                    size: "30",
                                    rounded: "md",
                                    color: "surface"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(DeviceLaptopIcon), { size: "25" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "ml-3 pr-3" }, [
                                    createVNode("h6", { class: "text-h6 mb-1" }, "Macbook Air"),
                                    createVNode("h5", { class: "text-subtitle-1 text-grey100" }, "Gujarat India, Oct 24 at 3:15 AM")
                                  ]),
                                  createVNode(_component_v_btn, {
                                    size: "30",
                                    icon: "",
                                    variant: "flat",
                                    class: "lightprimary ml-auto"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_avatar, { size: "20" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(DotsVerticalIcon))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              createVNode(_component_v_btn, {
                                class: "bg-lightprimary text-primary mt-5",
                                block: "",
                                flat: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Need Help?")
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
              }),
              createVNode("div", { class: "d-flex justify-end mt-5 pb-3" }, [
                createVNode(_component_v_btn, {
                  size: "large",
                  color: "primary",
                  rounded: "pill",
                  class: "mr-4"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Save")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_btn, {
                  size: "large",
                  class: "bg-lighterror text-error",
                  elevation: "0",
                  rounded: "pill"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Cancel")
                  ]),
                  _: 1
                })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/account-settings/SecurityTab.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const tab = ref(null);
    const page = ref({ title: "Account Setting" });
    const breadcrumbs = ref([
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Account Setting",
        disabled: true,
        href: "#"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_tabs = resolveComponent("v-tabs");
      const _component_v_tab = resolveComponent("v-tab");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_window = resolveComponent("v-window");
      const _component_v_window_item = resolveComponent("v-window-item");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$5, {
        title: page.value.title,
        breadcrumbs: breadcrumbs.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_row, { class: "justify-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              md: "12"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, {
                    elevation: "10",
                    class: "",
                    rounded: "md"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_tabs, {
                          modelValue: tab.value,
                          "onUpdate:modelValue": ($event) => tab.value = $event,
                          "bg-color": "transparent",
                          "min-height": "70",
                          height: "70",
                          color: "primary"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_tab, {
                                value: "Account",
                                class: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(UserCircleIcon), {
                                      class: "mr-2",
                                      size: "20"
                                    }, null, _parent6, _scopeId5));
                                    _push6(` Account`);
                                  } else {
                                    return [
                                      createVNode(unref(UserCircleIcon), {
                                        class: "mr-2",
                                        size: "20"
                                      }),
                                      createTextVNode(" Account")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_tab, {
                                value: "Notification",
                                class: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(BellIcon), {
                                      class: "mr-2",
                                      size: "20"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`Notification`);
                                  } else {
                                    return [
                                      createVNode(unref(BellIcon), {
                                        class: "mr-2",
                                        size: "20"
                                      }),
                                      createTextVNode("Notification")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_tab, {
                                value: "Bills",
                                class: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(ArticleIcon), {
                                      class: "mr-2",
                                      size: "20"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`Bills`);
                                  } else {
                                    return [
                                      createVNode(unref(ArticleIcon), {
                                        class: "mr-2",
                                        size: "20"
                                      }),
                                      createTextVNode("Bills")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_tab, {
                                value: "Security",
                                class: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(LockIcon), {
                                      class: "mr-2",
                                      size: "20"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`Security`);
                                  } else {
                                    return [
                                      createVNode(unref(LockIcon), {
                                        class: "mr-2",
                                        size: "20"
                                      }),
                                      createTextVNode("Security")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_tab, {
                                  value: "Account",
                                  class: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(UserCircleIcon), {
                                      class: "mr-2",
                                      size: "20"
                                    }),
                                    createTextVNode(" Account")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_tab, {
                                  value: "Notification",
                                  class: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(BellIcon), {
                                      class: "mr-2",
                                      size: "20"
                                    }),
                                    createTextVNode("Notification")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_tab, {
                                  value: "Bills",
                                  class: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(ArticleIcon), {
                                      class: "mr-2",
                                      size: "20"
                                    }),
                                    createTextVNode("Bills")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_tab, {
                                  value: "Security",
                                  class: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(LockIcon), {
                                      class: "mr-2",
                                      size: "20"
                                    }),
                                    createTextVNode("Security")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_divider, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_card_text, { class: "pa-sm-6 pa-3 pb-sm-6 pb-6" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_window, {
                                modelValue: tab.value,
                                "onUpdate:modelValue": ($event) => tab.value = $event
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_window_item, { value: "Account" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_sfc_main$4, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_sfc_main$4)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_window_item, { value: "Notification" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_sfc_main$3, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_sfc_main$3)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_window_item, { value: "Bills" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_sfc_main$2, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_sfc_main$2)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_window_item, { value: "Security" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_sfc_main$1, null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_sfc_main$1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_window_item, { value: "Account" }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$4)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_window_item, { value: "Notification" }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$3)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_window_item, { value: "Bills" }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$2)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_window_item, { value: "Security" }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$1)
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
                                createVNode(_component_v_window, {
                                  modelValue: tab.value,
                                  "onUpdate:modelValue": ($event) => tab.value = $event
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_window_item, { value: "Account" }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$4)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_window_item, { value: "Notification" }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$3)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_window_item, { value: "Bills" }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$2)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_window_item, { value: "Security" }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_tabs, {
                            modelValue: tab.value,
                            "onUpdate:modelValue": ($event) => tab.value = $event,
                            "bg-color": "transparent",
                            "min-height": "70",
                            height: "70",
                            color: "primary"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_tab, {
                                value: "Account",
                                class: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(UserCircleIcon), {
                                    class: "mr-2",
                                    size: "20"
                                  }),
                                  createTextVNode(" Account")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_tab, {
                                value: "Notification",
                                class: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(BellIcon), {
                                    class: "mr-2",
                                    size: "20"
                                  }),
                                  createTextVNode("Notification")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_tab, {
                                value: "Bills",
                                class: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(ArticleIcon), {
                                    class: "mr-2",
                                    size: "20"
                                  }),
                                  createTextVNode("Bills")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_tab, {
                                value: "Security",
                                class: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(LockIcon), {
                                    class: "mr-2",
                                    size: "20"
                                  }),
                                  createTextVNode("Security")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_v_divider),
                          createVNode(_component_v_card_text, { class: "pa-sm-6 pa-3 pb-sm-6 pb-6" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_window, {
                                modelValue: tab.value,
                                "onUpdate:modelValue": ($event) => tab.value = $event
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_window_item, { value: "Account" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$4)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_window_item, { value: "Notification" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$3)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_window_item, { value: "Bills" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$2)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_window_item, { value: "Security" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
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
                      class: "",
                      rounded: "md"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_tabs, {
                          modelValue: tab.value,
                          "onUpdate:modelValue": ($event) => tab.value = $event,
                          "bg-color": "transparent",
                          "min-height": "70",
                          height: "70",
                          color: "primary"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_tab, {
                              value: "Account",
                              class: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(UserCircleIcon), {
                                  class: "mr-2",
                                  size: "20"
                                }),
                                createTextVNode(" Account")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_tab, {
                              value: "Notification",
                              class: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(BellIcon), {
                                  class: "mr-2",
                                  size: "20"
                                }),
                                createTextVNode("Notification")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_tab, {
                              value: "Bills",
                              class: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(ArticleIcon), {
                                  class: "mr-2",
                                  size: "20"
                                }),
                                createTextVNode("Bills")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_tab, {
                              value: "Security",
                              class: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(LockIcon), {
                                  class: "mr-2",
                                  size: "20"
                                }),
                                createTextVNode("Security")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_v_divider),
                        createVNode(_component_v_card_text, { class: "pa-sm-6 pa-3 pb-sm-6 pb-6" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_window, {
                              modelValue: tab.value,
                              "onUpdate:modelValue": ($event) => tab.value = $event
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_window_item, { value: "Account" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$4)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_window_item, { value: "Notification" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$3)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_window_item, { value: "Bills" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$2)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_window_item, { value: "Security" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
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
                md: "12"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, {
                    elevation: "10",
                    class: "",
                    rounded: "md"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_tabs, {
                        modelValue: tab.value,
                        "onUpdate:modelValue": ($event) => tab.value = $event,
                        "bg-color": "transparent",
                        "min-height": "70",
                        height: "70",
                        color: "primary"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_tab, {
                            value: "Account",
                            class: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(UserCircleIcon), {
                                class: "mr-2",
                                size: "20"
                              }),
                              createTextVNode(" Account")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_tab, {
                            value: "Notification",
                            class: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(BellIcon), {
                                class: "mr-2",
                                size: "20"
                              }),
                              createTextVNode("Notification")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_tab, {
                            value: "Bills",
                            class: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(ArticleIcon), {
                                class: "mr-2",
                                size: "20"
                              }),
                              createTextVNode("Bills")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_tab, {
                            value: "Security",
                            class: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(LockIcon), {
                                class: "mr-2",
                                size: "20"
                              }),
                              createTextVNode("Security")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_v_divider),
                      createVNode(_component_v_card_text, { class: "pa-sm-6 pa-3 pb-sm-6 pb-6" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_window, {
                            modelValue: tab.value,
                            "onUpdate:modelValue": ($event) => tab.value = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_window_item, { value: "Account" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$4)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_window_item, { value: "Notification" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$3)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_window_item, { value: "Bills" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$2)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_window_item, { value: "Security" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
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
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/theme-pages/account-settings/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CkhPU9SS.js.map
