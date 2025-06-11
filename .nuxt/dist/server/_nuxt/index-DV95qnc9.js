import { defineComponent, computed, ref, watch, resolveComponent, withCtx, createVNode, toDisplayString, createTextVNode, unref, createBlock, createCommentVNode, openBlock, Fragment, renderList, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./BaseBreadcrumb-DAIjkUfv.js";
import { d as defineStore, a as axiosServices, l as user3 } from "../server.mjs";
import { format } from "date-fns";
import { Icon } from "@iconify/vue";
import "ofetch";
import "#internal/nuxt/paths";
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
import "vue-tabler-icons";
import "vue3-perfect-scrollbar";
import "maska";
import "axios-mock-adapter";
import "axios";
import "chance";
import "lodash";
import "vue-draggable-next";
import "vue3-easy-data-table";
import "vue-easy-lightbox";
import "vue-scrollto";
const useTicketstore = defineStore({
  id: "tickets",
  state: () => ({
    ticket: [],
    ticketContent: 1,
    ticketearch: ""
  }),
  actions: {
    // Fetch ticket
    async fetchTicket() {
      try {
        const data = await axiosServices.get("/api/data/tickets/TicketData");
        this.ticket = data.data;
        console.log(data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    //select chat
    SelectTicket(itemID) {
      this.ticketContent = itemID;
    },
    deleteTicket(itemID) {
      const index = this.ticket.findIndex((p) => p.Id == itemID);
      if (index !== -1) {
        this.ticket = [...this.ticket.slice(0, index), ...this.ticket.slice(index + 1)];
      }
    },
    // Add new ticket
    addTicket(newTicket) {
      newTicket.Id = this.ticket.length > 0 ? Math.max(...this.ticket.map((t) => t.Id)) + 1 : 1;
      this.ticket.push(newTicket);
    }
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TicketList",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useTicketstore();
    const getTickets = computed(() => store.ticket);
    let FinalTickets = ref([...getTickets.value]);
    const searchValue = ref("");
    const TicketTypeVal = ref("total");
    const showCreateTicketModal = ref(false);
    const newTicket = ref({ title: "", description: "", usernm: "Liam" });
    const createTicket = () => {
      if (newTicket.value.title && newTicket.value.description && newTicket.value.usernm) {
        const newId = getTickets.value.length + 1;
        const newTicketData = {
          Id: newId,
          ticketTitle: newTicket.value.title,
          ticketDescription: newTicket.value.description,
          AgentName: newTicket.value.usernm,
          Label: "success",
          Status: "Open",
          Date: (/* @__PURE__ */ new Date()).toISOString(),
          thumb: user3
        };
        store.addTicket(newTicketData);
        setTicketType("total");
        newTicket.value.title = "";
        newTicket.value.description = "";
        showCreateTicketModal.value = false;
      }
    };
    const setTicketType = (type) => {
      TicketTypeVal.value = type;
      console.log(`TicketTypeVal changed to: ${type}`);
      if (TicketTypeVal.value === "total") {
        FinalTickets.value = [...getTickets.value];
      } else {
        FinalTickets.value = getTickets.value.filter((ticket) => {
          console.log("Filtering ticket:", ticket);
          return ticket.Status && ticket.Status.toLowerCase() === TicketTypeVal.value.toLowerCase();
        });
      }
      applySearchFilter();
    };
    const applySearchFilter = () => {
      if (searchValue.value) {
        FinalTickets.value = FinalTickets.value.filter(
          (ticket) => {
            var _a;
            return (_a = ticket.ticketTitle) == null ? void 0 : _a.toLowerCase().includes(searchValue.value.toLowerCase());
          }
        );
      }
    };
    watch(searchValue, applySearchFilter);
    const totalTicketCount = computed(() => getTickets.value.length);
    const pendingTicketCount = computed(
      () => getTickets.value.filter((ticket) => ticket.Status === "Pending").length
    );
    const openTicketCount = computed(
      () => getTickets.value.filter((ticket) => ticket.Status === "Open").length
    );
    const closedTicketCount = computed(
      () => getTickets.value.filter((ticket) => ticket.Status === "Closed").length
    );
    const handleDeleteTicket = (ticketId) => {
      store.deleteTicket(ticketId);
      setTicketType(TicketTypeVal.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_table = resolveComponent("v-table");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_tooltip = resolveComponent("v-tooltip");
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_form = resolveComponent("v-form");
      const _component_v_textarea = resolveComponent("v-textarea");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_card, { elevation: "10" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="overflow-x-reposive"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_row, { class: "d-flex flex-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "10",
                          md: "3",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="bg-lightprimary pa-7 text-center cursor-pointer rounded-md"${_scopeId4}><h2 class="text-primary text-24"${_scopeId4}>${ssrInterpolate(totalTicketCount.value)}</h2><h6 class="text-primary text-h6"${_scopeId4}>Total Tickets</h6></div>`);
                            } else {
                              return [
                                createVNode("div", {
                                  class: "bg-lightprimary pa-7 text-center cursor-pointer rounded-md",
                                  onClick: ($event) => setTicketType("total")
                                }, [
                                  createVNode("h2", { class: "text-primary text-24" }, toDisplayString(totalTicketCount.value), 1),
                                  createVNode("h6", { class: "text-primary text-h6" }, "Total Tickets")
                                ], 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "10",
                          md: "3",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="bg-lightwarning pa-7 text-center cursor-pointer rounded-md"${_scopeId4}><h2 class="text-warning text-24"${_scopeId4}>${ssrInterpolate(pendingTicketCount.value)}</h2><h6 class="text-warning text-h6"${_scopeId4}>Pending Tickets</h6></div>`);
                            } else {
                              return [
                                createVNode("div", {
                                  class: "bg-lightwarning pa-7 text-center cursor-pointer rounded-md",
                                  onClick: ($event) => setTicketType("Pending")
                                }, [
                                  createVNode("h2", { class: "text-warning text-24" }, toDisplayString(pendingTicketCount.value), 1),
                                  createVNode("h6", { class: "text-warning text-h6" }, "Pending Tickets")
                                ], 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "10",
                          md: "3",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="bg-lightsuccess pa-7 text-center cursor-pointer rounded-md"${_scopeId4}><h2 class="text-success text-24"${_scopeId4}>${ssrInterpolate(openTicketCount.value)}</h2><h6 class="text-success text-h6"${_scopeId4}>Open Tickets</h6></div>`);
                            } else {
                              return [
                                createVNode("div", {
                                  class: "bg-lightsuccess pa-7 text-center cursor-pointer rounded-md",
                                  onClick: ($event) => setTicketType("Open")
                                }, [
                                  createVNode("h2", { class: "text-success text-24" }, toDisplayString(openTicketCount.value), 1),
                                  createVNode("h6", { class: "text-success text-h6" }, "Open Tickets")
                                ], 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "10",
                          md: "3",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="bg-lighterror pa-7 text-center cursor-pointer rounded-md"${_scopeId4}><h2 class="text-error text-24"${_scopeId4}>${ssrInterpolate(closedTicketCount.value)}</h2><h6 class="text-error text-h6"${_scopeId4}>Closed Tickets</h6></div>`);
                            } else {
                              return [
                                createVNode("div", {
                                  class: "bg-lighterror pa-7 text-center cursor-pointer rounded-md",
                                  onClick: ($event) => setTicketType("Closed")
                                }, [
                                  createVNode("h2", { class: "text-error text-24" }, toDisplayString(closedTicketCount.value), 1),
                                  createVNode("h6", { class: "text-error text-h6" }, "Closed Tickets")
                                ], 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            cols: "10",
                            md: "3",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "bg-lightprimary pa-7 text-center cursor-pointer rounded-md",
                                onClick: ($event) => setTicketType("total")
                              }, [
                                createVNode("h2", { class: "text-primary text-24" }, toDisplayString(totalTicketCount.value), 1),
                                createVNode("h6", { class: "text-primary text-h6" }, "Total Tickets")
                              ], 8, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "10",
                            md: "3",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "bg-lightwarning pa-7 text-center cursor-pointer rounded-md",
                                onClick: ($event) => setTicketType("Pending")
                              }, [
                                createVNode("h2", { class: "text-warning text-24" }, toDisplayString(pendingTicketCount.value), 1),
                                createVNode("h6", { class: "text-warning text-h6" }, "Pending Tickets")
                              ], 8, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "10",
                            md: "3",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "bg-lightsuccess pa-7 text-center cursor-pointer rounded-md",
                                onClick: ($event) => setTicketType("Open")
                              }, [
                                createVNode("h2", { class: "text-success text-24" }, toDisplayString(openTicketCount.value), 1),
                                createVNode("h6", { class: "text-success text-h6" }, "Open Tickets")
                              ], 8, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "10",
                            md: "3",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "bg-lighterror pa-7 text-center cursor-pointer rounded-md",
                                onClick: ($event) => setTicketType("Closed")
                              }, [
                                createVNode("h2", { class: "text-error text-24" }, toDisplayString(closedTicketCount.value), 1),
                                createVNode("h6", { class: "text-error text-h6" }, "Closed Tickets")
                              ], 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class=""${_scopeId2}><div class="d-sm-flex justify-space-between align-center my-7"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_btn, {
                    color: "primary",
                    rounded: "pill",
                    onClick: ($event) => showCreateTicketModal.value = true
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Create Ticket`);
                      } else {
                        return [
                          createTextVNode("Create Ticket")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_sheet, {
                    width: "255",
                    class: "mt-lg-0 mt-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_text_field, {
                          modelValue: searchValue.value,
                          "onUpdate:modelValue": ($event) => searchValue.value = $event,
                          label: "Search Invoice",
                          variant: "outlined",
                          "hide-details": "",
                          class: "w-100",
                          density: "compact"
                        }, {
                          "prepend-inner": withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Icon), {
                                icon: "solar:magnifer-linear",
                                height: "18",
                                width: "25"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(Icon), {
                                  icon: "solar:magnifer-linear",
                                  height: "18",
                                  width: "25"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_text_field, {
                            modelValue: searchValue.value,
                            "onUpdate:modelValue": ($event) => searchValue.value = $event,
                            label: "Search Invoice",
                            variant: "outlined",
                            "hide-details": "",
                            class: "w-100",
                            density: "compact"
                          }, {
                            "prepend-inner": withCtx(() => [
                              createVNode(unref(Icon), {
                                icon: "solar:magnifer-linear",
                                height: "18",
                                width: "25"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_v_table, { class: "ticket-table" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<thead${_scopeId3}><tr${_scopeId3}><th class="text-h6 text-no-wrap"${_scopeId3}>Id</th><th class="text-h6 text-no-wrap"${_scopeId3}>Ticket</th><th class="text-h6 text-no-wrap"${_scopeId3}>Assigned To</th><th class="text-h6 text-no-wrap"${_scopeId3}>Status</th><th class="text-h6 text-no-wrap"${_scopeId3}>Date</th><th class="text-h6 text-no-wrap"${_scopeId3}>Action</th></tr></thead><tbody${_scopeId3}>`);
                        if (unref(FinalTickets).length > 0) {
                          _push4(`<!--[-->`);
                          ssrRenderList(unref(FinalTickets), (ticket) => {
                            _push4(`<tr${_scopeId3}><td class="text-body-1"${_scopeId3}>${ssrInterpolate(ticket.Id)}</td><td${_scopeId3}><h6 class="text-h6"${_scopeId3}>${ssrInterpolate(ticket.ticketTitle)}</h6><p style="${ssrRenderStyle({ "max-width": "280px" })}" class="text-body-1 text-muted text-truncate"${_scopeId3}>${ssrInterpolate(ticket.ticketDescription)}</p></td><td${_scopeId3}><div class="d-flex ga-2 align-center"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_v_avatar, { size: "40" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<img${ssrRenderAttr("src", ticket.thumb)}${ssrRenderAttr("alt", ticket.thumb)} width="40"${_scopeId4}>`);
                                } else {
                                  return [
                                    createVNode("img", {
                                      src: ticket.thumb,
                                      alt: ticket.thumb,
                                      width: "40"
                                    }, null, 8, ["src", "alt"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`<h6 class="text-h6 text-no-wrap"${_scopeId3}>${ssrInterpolate(ticket.AgentName)}</h6></div></td><td${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_v_chip, {
                              rounded: "pill",
                              class: "font-weight-bold",
                              color: ticket.Label,
                              size: "small",
                              label: ""
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(ticket.Status)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(ticket.Status), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</td><td${_scopeId3}><p class="text-muted text-body-1 text-no-wrap"${_scopeId3}>${ssrInterpolate((ticket == null ? void 0 : ticket.Date) ? unref(format)(new Date(ticket.Date), "E, MMM d") : "N/A")}</p></td><td class="text-center"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_v_btn, {
                              icon: "",
                              color: "lighterror",
                              class: "mx-auto",
                              flat: "",
                              size: "x-small",
                              onClick: ($event) => handleDeleteTicket(ticket.Id)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_v_tooltip, {
                                    activator: "parent",
                                    location: "top"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`Delete Ticket`);
                                      } else {
                                        return [
                                          createTextVNode("Delete Ticket")
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(unref(Icon), {
                                    icon: "solar:trash-bin-minimalistic-linear",
                                    class: "text-error",
                                    height: "18"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_v_tooltip, {
                                      activator: "parent",
                                      location: "top"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Delete Ticket")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(Icon), {
                                      icon: "solar:trash-bin-minimalistic-linear",
                                      class: "text-error",
                                      height: "18"
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</td></tr>`);
                          });
                          _push4(`<!--]-->`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</tbody>`);
                      } else {
                        return [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", { class: "text-h6 text-no-wrap" }, "Id"),
                              createVNode("th", { class: "text-h6 text-no-wrap" }, "Ticket"),
                              createVNode("th", { class: "text-h6 text-no-wrap" }, "Assigned To"),
                              createVNode("th", { class: "text-h6 text-no-wrap" }, "Status"),
                              createVNode("th", { class: "text-h6 text-no-wrap" }, "Date"),
                              createVNode("th", { class: "text-h6 text-no-wrap" }, "Action")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            unref(FinalTickets).length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(FinalTickets), (ticket) => {
                              return openBlock(), createBlock("tr", {
                                key: ticket.Id,
                                onClick: ($event) => unref(store).SelectTicket(ticket.Id)
                              }, [
                                createVNode("td", { class: "text-body-1" }, toDisplayString(ticket.Id), 1),
                                createVNode("td", null, [
                                  createVNode("h6", { class: "text-h6" }, toDisplayString(ticket.ticketTitle), 1),
                                  createVNode("p", {
                                    style: { "max-width": "280px" },
                                    class: "text-body-1 text-muted text-truncate"
                                  }, toDisplayString(ticket.ticketDescription), 1)
                                ]),
                                createVNode("td", null, [
                                  createVNode("div", { class: "d-flex ga-2 align-center" }, [
                                    createVNode(_component_v_avatar, { size: "40" }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: ticket.thumb,
                                          alt: ticket.thumb,
                                          width: "40"
                                        }, null, 8, ["src", "alt"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("h6", { class: "text-h6 text-no-wrap" }, toDisplayString(ticket.AgentName), 1)
                                  ])
                                ]),
                                createVNode("td", null, [
                                  createVNode(_component_v_chip, {
                                    rounded: "pill",
                                    class: "font-weight-bold",
                                    color: ticket.Label,
                                    size: "small",
                                    label: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(ticket.Status), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ]),
                                createVNode("td", null, [
                                  createVNode("p", { class: "text-muted text-body-1 text-no-wrap" }, toDisplayString((ticket == null ? void 0 : ticket.Date) ? unref(format)(new Date(ticket.Date), "E, MMM d") : "N/A"), 1)
                                ]),
                                createVNode("td", { class: "text-center" }, [
                                  createVNode(_component_v_btn, {
                                    icon: "",
                                    color: "lighterror",
                                    class: "mx-auto",
                                    flat: "",
                                    size: "x-small",
                                    onClick: withModifiers(($event) => handleDeleteTicket(ticket.Id), ["stop"])
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_tooltip, {
                                        activator: "parent",
                                        location: "top"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Delete Ticket")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(Icon), {
                                        icon: "solar:trash-bin-minimalistic-linear",
                                        class: "text-error",
                                        height: "18"
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ])
                              ], 8, ["onClick"]);
                            }), 128)) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "overflow-x-reposive" }, [
                      createVNode(_component_v_row, { class: "d-flex flex-nowrap" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "10",
                            md: "3",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "bg-lightprimary pa-7 text-center cursor-pointer rounded-md",
                                onClick: ($event) => setTicketType("total")
                              }, [
                                createVNode("h2", { class: "text-primary text-24" }, toDisplayString(totalTicketCount.value), 1),
                                createVNode("h6", { class: "text-primary text-h6" }, "Total Tickets")
                              ], 8, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "10",
                            md: "3",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "bg-lightwarning pa-7 text-center cursor-pointer rounded-md",
                                onClick: ($event) => setTicketType("Pending")
                              }, [
                                createVNode("h2", { class: "text-warning text-24" }, toDisplayString(pendingTicketCount.value), 1),
                                createVNode("h6", { class: "text-warning text-h6" }, "Pending Tickets")
                              ], 8, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "10",
                            md: "3",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "bg-lightsuccess pa-7 text-center cursor-pointer rounded-md",
                                onClick: ($event) => setTicketType("Open")
                              }, [
                                createVNode("h2", { class: "text-success text-24" }, toDisplayString(openTicketCount.value), 1),
                                createVNode("h6", { class: "text-success text-h6" }, "Open Tickets")
                              ], 8, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "10",
                            md: "3",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "bg-lighterror pa-7 text-center cursor-pointer rounded-md",
                                onClick: ($event) => setTicketType("Closed")
                              }, [
                                createVNode("h2", { class: "text-error text-24" }, toDisplayString(closedTicketCount.value), 1),
                                createVNode("h6", { class: "text-error text-h6" }, "Closed Tickets")
                              ], 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "" }, [
                      createVNode("div", { class: "d-sm-flex justify-space-between align-center my-7" }, [
                        createVNode(_component_v_btn, {
                          color: "primary",
                          rounded: "pill",
                          onClick: ($event) => showCreateTicketModal.value = true
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Create Ticket")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_v_sheet, {
                          width: "255",
                          class: "mt-lg-0 mt-4"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_text_field, {
                              modelValue: searchValue.value,
                              "onUpdate:modelValue": ($event) => searchValue.value = $event,
                              label: "Search Invoice",
                              variant: "outlined",
                              "hide-details": "",
                              class: "w-100",
                              density: "compact"
                            }, {
                              "prepend-inner": withCtx(() => [
                                createVNode(unref(Icon), {
                                  icon: "solar:magnifer-linear",
                                  height: "18",
                                  width: "25"
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(_component_v_table, { class: "ticket-table" }, {
                        default: withCtx(() => [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", { class: "text-h6 text-no-wrap" }, "Id"),
                              createVNode("th", { class: "text-h6 text-no-wrap" }, "Ticket"),
                              createVNode("th", { class: "text-h6 text-no-wrap" }, "Assigned To"),
                              createVNode("th", { class: "text-h6 text-no-wrap" }, "Status"),
                              createVNode("th", { class: "text-h6 text-no-wrap" }, "Date"),
                              createVNode("th", { class: "text-h6 text-no-wrap" }, "Action")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            unref(FinalTickets).length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(FinalTickets), (ticket) => {
                              return openBlock(), createBlock("tr", {
                                key: ticket.Id,
                                onClick: ($event) => unref(store).SelectTicket(ticket.Id)
                              }, [
                                createVNode("td", { class: "text-body-1" }, toDisplayString(ticket.Id), 1),
                                createVNode("td", null, [
                                  createVNode("h6", { class: "text-h6" }, toDisplayString(ticket.ticketTitle), 1),
                                  createVNode("p", {
                                    style: { "max-width": "280px" },
                                    class: "text-body-1 text-muted text-truncate"
                                  }, toDisplayString(ticket.ticketDescription), 1)
                                ]),
                                createVNode("td", null, [
                                  createVNode("div", { class: "d-flex ga-2 align-center" }, [
                                    createVNode(_component_v_avatar, { size: "40" }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: ticket.thumb,
                                          alt: ticket.thumb,
                                          width: "40"
                                        }, null, 8, ["src", "alt"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("h6", { class: "text-h6 text-no-wrap" }, toDisplayString(ticket.AgentName), 1)
                                  ])
                                ]),
                                createVNode("td", null, [
                                  createVNode(_component_v_chip, {
                                    rounded: "pill",
                                    class: "font-weight-bold",
                                    color: ticket.Label,
                                    size: "small",
                                    label: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(ticket.Status), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ]),
                                createVNode("td", null, [
                                  createVNode("p", { class: "text-muted text-body-1 text-no-wrap" }, toDisplayString((ticket == null ? void 0 : ticket.Date) ? unref(format)(new Date(ticket.Date), "E, MMM d") : "N/A"), 1)
                                ]),
                                createVNode("td", { class: "text-center" }, [
                                  createVNode(_component_v_btn, {
                                    icon: "",
                                    color: "lighterror",
                                    class: "mx-auto",
                                    flat: "",
                                    size: "x-small",
                                    onClick: withModifiers(($event) => handleDeleteTicket(ticket.Id), ["stop"])
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_tooltip, {
                                        activator: "parent",
                                        location: "top"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Delete Ticket")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(Icon), {
                                        icon: "solar:trash-bin-minimalistic-linear",
                                        class: "text-error",
                                        height: "18"
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ])
                              ], 8, ["onClick"]);
                            }), 128)) : createCommentVNode("", true)
                          ])
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
                  createVNode("div", { class: "overflow-x-reposive" }, [
                    createVNode(_component_v_row, { class: "d-flex flex-nowrap" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "10",
                          md: "3",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: "bg-lightprimary pa-7 text-center cursor-pointer rounded-md",
                              onClick: ($event) => setTicketType("total")
                            }, [
                              createVNode("h2", { class: "text-primary text-24" }, toDisplayString(totalTicketCount.value), 1),
                              createVNode("h6", { class: "text-primary text-h6" }, "Total Tickets")
                            ], 8, ["onClick"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "10",
                          md: "3",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: "bg-lightwarning pa-7 text-center cursor-pointer rounded-md",
                              onClick: ($event) => setTicketType("Pending")
                            }, [
                              createVNode("h2", { class: "text-warning text-24" }, toDisplayString(pendingTicketCount.value), 1),
                              createVNode("h6", { class: "text-warning text-h6" }, "Pending Tickets")
                            ], 8, ["onClick"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "10",
                          md: "3",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: "bg-lightsuccess pa-7 text-center cursor-pointer rounded-md",
                              onClick: ($event) => setTicketType("Open")
                            }, [
                              createVNode("h2", { class: "text-success text-24" }, toDisplayString(openTicketCount.value), 1),
                              createVNode("h6", { class: "text-success text-h6" }, "Open Tickets")
                            ], 8, ["onClick"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "10",
                          md: "3",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: "bg-lighterror pa-7 text-center cursor-pointer rounded-md",
                              onClick: ($event) => setTicketType("Closed")
                            }, [
                              createVNode("h2", { class: "text-error text-24" }, toDisplayString(closedTicketCount.value), 1),
                              createVNode("h6", { class: "text-error text-h6" }, "Closed Tickets")
                            ], 8, ["onClick"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "" }, [
                    createVNode("div", { class: "d-sm-flex justify-space-between align-center my-7" }, [
                      createVNode(_component_v_btn, {
                        color: "primary",
                        rounded: "pill",
                        onClick: ($event) => showCreateTicketModal.value = true
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Create Ticket")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_v_sheet, {
                        width: "255",
                        class: "mt-lg-0 mt-4"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_text_field, {
                            modelValue: searchValue.value,
                            "onUpdate:modelValue": ($event) => searchValue.value = $event,
                            label: "Search Invoice",
                            variant: "outlined",
                            "hide-details": "",
                            class: "w-100",
                            density: "compact"
                          }, {
                            "prepend-inner": withCtx(() => [
                              createVNode(unref(Icon), {
                                icon: "solar:magnifer-linear",
                                height: "18",
                                width: "25"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_v_table, { class: "ticket-table" }, {
                      default: withCtx(() => [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", { class: "text-h6 text-no-wrap" }, "Id"),
                            createVNode("th", { class: "text-h6 text-no-wrap" }, "Ticket"),
                            createVNode("th", { class: "text-h6 text-no-wrap" }, "Assigned To"),
                            createVNode("th", { class: "text-h6 text-no-wrap" }, "Status"),
                            createVNode("th", { class: "text-h6 text-no-wrap" }, "Date"),
                            createVNode("th", { class: "text-h6 text-no-wrap" }, "Action")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          unref(FinalTickets).length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(FinalTickets), (ticket) => {
                            return openBlock(), createBlock("tr", {
                              key: ticket.Id,
                              onClick: ($event) => unref(store).SelectTicket(ticket.Id)
                            }, [
                              createVNode("td", { class: "text-body-1" }, toDisplayString(ticket.Id), 1),
                              createVNode("td", null, [
                                createVNode("h6", { class: "text-h6" }, toDisplayString(ticket.ticketTitle), 1),
                                createVNode("p", {
                                  style: { "max-width": "280px" },
                                  class: "text-body-1 text-muted text-truncate"
                                }, toDisplayString(ticket.ticketDescription), 1)
                              ]),
                              createVNode("td", null, [
                                createVNode("div", { class: "d-flex ga-2 align-center" }, [
                                  createVNode(_component_v_avatar, { size: "40" }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: ticket.thumb,
                                        alt: ticket.thumb,
                                        width: "40"
                                      }, null, 8, ["src", "alt"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("h6", { class: "text-h6 text-no-wrap" }, toDisplayString(ticket.AgentName), 1)
                                ])
                              ]),
                              createVNode("td", null, [
                                createVNode(_component_v_chip, {
                                  rounded: "pill",
                                  class: "font-weight-bold",
                                  color: ticket.Label,
                                  size: "small",
                                  label: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(ticket.Status), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color"])
                              ]),
                              createVNode("td", null, [
                                createVNode("p", { class: "text-muted text-body-1 text-no-wrap" }, toDisplayString((ticket == null ? void 0 : ticket.Date) ? unref(format)(new Date(ticket.Date), "E, MMM d") : "N/A"), 1)
                              ]),
                              createVNode("td", { class: "text-center" }, [
                                createVNode(_component_v_btn, {
                                  icon: "",
                                  color: "lighterror",
                                  class: "mx-auto",
                                  flat: "",
                                  size: "x-small",
                                  onClick: withModifiers(($event) => handleDeleteTicket(ticket.Id), ["stop"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_tooltip, {
                                      activator: "parent",
                                      location: "top"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Delete Ticket")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(Icon), {
                                      icon: "solar:trash-bin-minimalistic-linear",
                                      class: "text-error",
                                      height: "18"
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ])
                            ], 8, ["onClick"]);
                          }), 128)) : createCommentVNode("", true)
                        ])
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
      _push(ssrRenderComponent(_component_v_dialog, {
        modelValue: showCreateTicketModal.value,
        "onUpdate:modelValue": ($event) => showCreateTicketModal.value = $event,
        "max-width": "500px"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card_title, { class: "pa-4 bg-primary" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Create New Ticket`);
                      } else {
                        return [
                          createTextVNode("Create New Ticket")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_text, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_form, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                label: "Ticket Title",
                                modelValue: newTicket.value.title,
                                "onUpdate:modelValue": ($event) => newTicket.value.title = $event,
                                required: ""
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_textarea, {
                                label: "Ticket Description",
                                modelValue: newTicket.value.description,
                                "onUpdate:modelValue": ($event) => newTicket.value.description = $event,
                                rows: "4",
                                required: ""
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_select, {
                                label: "Assign To",
                                modelValue: newTicket.value.usernm,
                                "onUpdate:modelValue": ($event) => newTicket.value.usernm = $event,
                                items: ["Liam", "Steve", "Jack", "Wiliam", "Dona"],
                                variant: "outlined",
                                required: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_text_field, {
                                  label: "Ticket Title",
                                  modelValue: newTicket.value.title,
                                  "onUpdate:modelValue": ($event) => newTicket.value.title = $event,
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_textarea, {
                                  label: "Ticket Description",
                                  modelValue: newTicket.value.description,
                                  "onUpdate:modelValue": ($event) => newTicket.value.description = $event,
                                  rows: "4",
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_select, {
                                  label: "Assign To",
                                  modelValue: newTicket.value.usernm,
                                  "onUpdate:modelValue": ($event) => newTicket.value.usernm = $event,
                                  items: ["Liam", "Steve", "Jack", "Wiliam", "Dona"],
                                  variant: "outlined",
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_form, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                label: "Ticket Title",
                                modelValue: newTicket.value.title,
                                "onUpdate:modelValue": ($event) => newTicket.value.title = $event,
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_v_textarea, {
                                label: "Ticket Description",
                                modelValue: newTicket.value.description,
                                "onUpdate:modelValue": ($event) => newTicket.value.description = $event,
                                rows: "4",
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_v_select, {
                                label: "Assign To",
                                modelValue: newTicket.value.usernm,
                                "onUpdate:modelValue": ($event) => newTicket.value.usernm = $event,
                                items: ["Liam", "Steve", "Jack", "Wiliam", "Dona"],
                                variant: "outlined",
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_actions, { class: "ga-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, {
                          color: "error",
                          variant: "flat",
                          class: "px-5",
                          rounded: "pill",
                          onClick: ($event) => showCreateTicketModal.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Cancel`);
                            } else {
                              return [
                                createTextVNode("Cancel")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_btn, {
                          color: "primary",
                          variant: "flat",
                          class: "px-5",
                          rounded: "pill",
                          onClick: createTicket
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Create`);
                            } else {
                              return [
                                createTextVNode("Create")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, {
                            color: "error",
                            variant: "flat",
                            class: "px-5",
                            rounded: "pill",
                            onClick: ($event) => showCreateTicketModal.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Cancel")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_v_btn, {
                            color: "primary",
                            variant: "flat",
                            class: "px-5",
                            rounded: "pill",
                            onClick: createTicket
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Create")
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
                    createVNode(_component_v_card_title, { class: "pa-4 bg-primary" }, {
                      default: withCtx(() => [
                        createTextVNode("Create New Ticket")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_text, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_form, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_text_field, {
                              label: "Ticket Title",
                              modelValue: newTicket.value.title,
                              "onUpdate:modelValue": ($event) => newTicket.value.title = $event,
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_v_textarea, {
                              label: "Ticket Description",
                              modelValue: newTicket.value.description,
                              "onUpdate:modelValue": ($event) => newTicket.value.description = $event,
                              rows: "4",
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_v_select, {
                              label: "Assign To",
                              modelValue: newTicket.value.usernm,
                              "onUpdate:modelValue": ($event) => newTicket.value.usernm = $event,
                              items: ["Liam", "Steve", "Jack", "Wiliam", "Dona"],
                              variant: "outlined",
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_actions, { class: "ga-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_btn, {
                          color: "error",
                          variant: "flat",
                          class: "px-5",
                          rounded: "pill",
                          onClick: ($event) => showCreateTicketModal.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Cancel")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_v_btn, {
                          color: "primary",
                          variant: "flat",
                          class: "px-5",
                          rounded: "pill",
                          onClick: createTicket
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Create")
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
              createVNode(_component_v_card, null, {
                default: withCtx(() => [
                  createVNode(_component_v_card_title, { class: "pa-4 bg-primary" }, {
                    default: withCtx(() => [
                      createTextVNode("Create New Ticket")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_text, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_form, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_text_field, {
                            label: "Ticket Title",
                            modelValue: newTicket.value.title,
                            "onUpdate:modelValue": ($event) => newTicket.value.title = $event,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_v_textarea, {
                            label: "Ticket Description",
                            modelValue: newTicket.value.description,
                            "onUpdate:modelValue": ($event) => newTicket.value.description = $event,
                            rows: "4",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_v_select, {
                            label: "Assign To",
                            modelValue: newTicket.value.usernm,
                            "onUpdate:modelValue": ($event) => newTicket.value.usernm = $event,
                            items: ["Liam", "Steve", "Jack", "Wiliam", "Dona"],
                            variant: "outlined",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_actions, { class: "ga-3" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_btn, {
                        color: "error",
                        variant: "flat",
                        class: "px-5",
                        rounded: "pill",
                        onClick: ($event) => showCreateTicketModal.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Cancel")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_v_btn, {
                        color: "primary",
                        variant: "flat",
                        class: "px-5",
                        rounded: "pill",
                        onClick: createTicket
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Create")
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/tickets/TicketList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref({ title: "Tickets App" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "#"
      },
      {
        text: "Tickets App",
        disabled: true,
        href: "#"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, {
        title: page.value.title,
        breadcrumbs: breadcrumbs.value
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/apps/tickets/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DV95qnc9.js.map
