import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import FullCalendar$1 from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { format } from 'date-fns';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'lodash';
import 'vue-draggable-next';
import 'vue3-easy-data-table';
import 'vue-easy-lightbox';
import 'vue-scrollto';

let eventGuid = 0;
const today = /* @__PURE__ */ new Date();
const y = today.getFullYear();
const m = today.getMonth();
const d = today.getDate();
const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "Twice event For two Days",
    allDay: true,
    start: new Date(y, m, 3),
    end: new Date(y, m, 5),
    color: "#635BFF"
  },
  {
    id: createEventId(),
    title: "Learn ReactJs",
    start: new Date(y, m, d + 3, 10, 30),
    end: new Date(y, m, d + 3, 11, 30),
    allDay: true,
    color: "#13DEB9"
  },
  {
    id: createEventId(),
    title: "Launching MaterialArt Angular",
    start: new Date(y, m, d + 7, 12, 0),
    end: new Date(y, m, d + 7, 14, 0),
    allDay: true,
    color: "#ff6692"
  },
  {
    id: createEventId(),
    title: "Lunch with Mr.Raw",
    start: new Date(y, m, d - 2),
    end: new Date(y, m, d - 2),
    allDay: true,
    color: "#16CDC7"
  },
  {
    id: createEventId(),
    title: "Going For Party of Sahs",
    start: new Date(y, m, d + 1, 19, 0),
    end: new Date(y, m, d + 1, 22, 30),
    allDay: true,
    color: "#1a97f5"
  },
  {
    id: createEventId(),
    title: "Learn Ionic",
    start: new Date(y, m, 23),
    end: new Date(y, m, 25),
    color: "#ffd648"
  }
];
function createEventId() {
  return String(eventGuid++);
}
const _sfc_main = defineComponent({
  components: {
    FullCalendar: FullCalendar$1
  },
  data() {
    return {
      menu1: false,
      // For Start Date
      menu2: false,
      // For End Date
      updateModalShow: false,
      addModalShow: false,
      selectedEvent: {
        id: "",
        title: "",
        color: "",
        start: "",
        end: "",
        allDay: true
      },
      newEvent: { title: "", color: "", start: "", end: "", allDay: true },
      updatedTitle: "",
      updatedColor: "",
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay"
        },
        initialView: "dayGridMonth",
        initialEvents: INITIAL_EVENTS,
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents
      },
      activeColor: {
        newEvent: "",
        // Store the active color for the new event
        updateEvent: ""
        // Store the active color for the update event
      },
      currentEvents: [],
      colorOptions: [
        { id: 1, label: "Primary", value: "#615dff" },
        { id: 2, label: "Success", value: "#39b69a" },
        { id: 3, label: "Error", value: "#fc4b6c" },
        { id: 4, label: "Secondary", value: "#1a97f5" },
        { id: 5, label: "Warning", value: "#fdd43f" }
      ]
    };
  },
  methods: {
    handleDateSelect(selectInfo) {
      this.addModalShow = true;
      this.newEvent.start = selectInfo.startStr;
      this.newEvent.end = selectInfo.endStr;
      this.newEvent.allDay = selectInfo.allDay;
    },
    handleEventClick(clickInfo) {
      this.updateModalShow = true;
      const eventStart = clickInfo.event.start ? clickInfo.event.start : null;
      const eventEnd = clickInfo.event.end ? clickInfo.event.end : null;
      this.selectedEvent = {
        id: clickInfo.event.id,
        title: clickInfo.event.title,
        color: clickInfo.event.backgroundColor,
        start: eventStart ? format(eventStart, "yyyy-MM-dd") : "",
        // If the date exists, format it, otherwise use an empty string
        end: eventEnd ? format(eventEnd, "yyyy-MM-dd") : "",
        // Handle no end date case
        allDay: clickInfo.event.allDay
      };
      this.updatedTitle = this.selectedEvent.title;
      this.updatedColor = this.selectedEvent.color;
      this.activeColor.updateEvent = this.selectedEvent.color;
    },
    addEvent() {
      const calendarApi = this.$refs.fullCalendar.getApi();
      calendarApi.addEvent({
        id: createEventId(),
        title: this.newEvent.title,
        start: this.newEvent.start,
        end: this.newEvent.end,
        allDay: this.newEvent.allDay,
        backgroundColor: this.newEvent.color
      });
      this.addModalShow = false;
      this.newEvent = {
        title: "",
        color: "",
        start: "",
        end: "",
        allDay: true
      };
    },
    updateEvent() {
      const calendarApi = this.$refs.fullCalendar.getApi();
      const event = calendarApi.getEventById(this.selectedEvent.id);
      if (event) {
        const updatedStart = this.selectedEvent.start ? new Date(this.selectedEvent.start) : null;
        const updatedEnd = this.selectedEvent.end ? new Date(this.selectedEvent.end) : null;
        if (!updatedStart || isNaN(updatedStart.getTime()) || updatedEnd && isNaN(updatedEnd.getTime())) {
          console.error("Invalid start or end date.");
          return;
        }
        event.setProp("title", this.updatedTitle);
        event.setProp("backgroundColor", this.updatedColor);
        event.setStart(updatedStart);
        event.setEnd(updatedEnd);
        this.updateModalShow = false;
        this.updatedTitle = "";
        this.updatedColor = "";
        this.selectedEvent = {
          id: "",
          title: "",
          color: "",
          start: "",
          end: "",
          allDay: true
        };
      }
    },
    deleteEvent() {
      const calendarApi = this.$refs.fullCalendar.getApi();
      const event = calendarApi.getEventById(this.selectedEvent.id);
      if (event) {
        event.remove();
        this.updateModalShow = false;
      }
    },
    selectColor(color, isAddModal) {
      if (isAddModal) {
        this.newEvent.color = color;
        this.activeColor.newEvent = color;
      } else {
        this.updatedColor = color;
        this.activeColor.updateEvent = color;
      }
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FullCalendar = resolveComponent("FullCalendar");
  const _component_v_dialog = resolveComponent("v-dialog");
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_label = resolveComponent("v-label");
  const _component_v_text_field = resolveComponent("v-text-field");
  const _component_v_list = resolveComponent("v-list");
  const _component_v_list_item = resolveComponent("v-list-item");
  const _component_CheckIcon = resolveComponent("CheckIcon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-app" }, _attrs))}><div class="demo-app-main">`);
  _push(ssrRenderComponent(_component_FullCalendar, {
    ref: "fullCalendar",
    class: "demo-app-calendar rounded-md",
    options: _ctx.calendarOptions
  }, null, _parent));
  _push(ssrRenderComponent(_component_v_dialog, {
    modelValue: _ctx.addModalShow,
    "onUpdate:modelValue": ($event) => _ctx.addModalShow = $event,
    "max-width": "500px"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_card_text, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="mb-6 d-flex justify-space-between"${_scopeId3}><div${_scopeId3}><h4 class="text-h4 mb-2"${_scopeId3}>Add Event</h4><p class="text-muted"${_scopeId3}> Fill in the title, choose the event color, and select the start and end dates to add an event. </p></div>`);
                    _push4(ssrRenderComponent(_component_v_btn, {
                      icon: "mdi-close",
                      variant: "text",
                      class: "mt-n2 me-n3",
                      onClick: ($event) => _ctx.addModalShow = false
                    }, null, _parent4, _scopeId3));
                    _push4(`</div>`);
                    _push4(ssrRenderComponent(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Event Title`);
                        } else {
                          return [
                            createTextVNode("Event Title")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_text_field, {
                      modelValue: _ctx.newEvent.title,
                      "onUpdate:modelValue": ($event) => _ctx.newEvent.title = $event,
                      outlined: "",
                      required: ""
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Start Date`);
                        } else {
                          return [
                            createTextVNode("Start Date")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_text_field, {
                      modelValue: _ctx.newEvent.start,
                      "onUpdate:modelValue": ($event) => _ctx.newEvent.start = $event,
                      variant: "outlined",
                      "hide-details": "",
                      type: "date",
                      class: "mb-5",
                      required: ""
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`End Date`);
                        } else {
                          return [
                            createTextVNode("End Date")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_text_field, {
                      modelValue: _ctx.newEvent.end,
                      "onUpdate:modelValue": ($event) => _ctx.newEvent.end = $event,
                      variant: "outlined",
                      "hide-details": "",
                      type: "date",
                      class: "mb-5",
                      required: ""
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Event Color`);
                        } else {
                          return [
                            createTextVNode("Event Color")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_list, { class: "d-flex ga-3 pa-0" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<!--[-->`);
                          ssrRenderList(_ctx.colorOptions, (option) => {
                            _push5(ssrRenderComponent(_component_v_list_item, {
                              class: "px-0 py-0",
                              ripple: false,
                              key: option.id,
                              onClick: ($event) => _ctx.selectColor(option.value, true)
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`<div class="round-30 rounded-circle d-flex justify-center align-center" style="${ssrRenderStyle({
                                    backgroundColor: option.value
                                  })}"${_scopeId5}>`);
                                  if (_ctx.activeColor.newEvent === option.value) {
                                    _push6(ssrRenderComponent(_component_CheckIcon, {
                                      size: "18",
                                      color: "#fff"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    _push6(`<!---->`);
                                  }
                                  _push6(`</div>`);
                                } else {
                                  return [
                                    createVNode("div", {
                                      class: "round-30 rounded-circle d-flex justify-center align-center",
                                      style: {
                                        backgroundColor: option.value
                                      }
                                    }, [
                                      _ctx.activeColor.newEvent === option.value ? (openBlock(), createBlock(_component_CheckIcon, {
                                        key: 0,
                                        size: "18",
                                        color: "#fff"
                                      })) : createCommentVNode("", true)
                                    ], 4)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          });
                          _push5(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.colorOptions, (option) => {
                              return openBlock(), createBlock(_component_v_list_item, {
                                class: "px-0 py-0",
                                ripple: false,
                                key: option.id,
                                onClick: ($event) => _ctx.selectColor(option.value, true)
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", {
                                    class: "round-30 rounded-circle d-flex justify-center align-center",
                                    style: {
                                      backgroundColor: option.value
                                    }
                                  }, [
                                    _ctx.activeColor.newEvent === option.value ? (openBlock(), createBlock(_component_CheckIcon, {
                                      key: 0,
                                      size: "18",
                                      color: "#fff"
                                    })) : createCommentVNode("", true)
                                  ], 4)
                                ]),
                                _: 2
                              }, 1032, ["onClick"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_btn, {
                      onClick: _ctx.addEvent,
                      color: "primary",
                      rounded: "pill",
                      class: "mt-6"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Add Event`);
                        } else {
                          return [
                            createTextVNode("Add Event")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode("div", { class: "mb-6 d-flex justify-space-between" }, [
                        createVNode("div", null, [
                          createVNode("h4", { class: "text-h4 mb-2" }, "Add Event"),
                          createVNode("p", { class: "text-muted" }, " Fill in the title, choose the event color, and select the start and end dates to add an event. ")
                        ]),
                        createVNode(_component_v_btn, {
                          icon: "mdi-close",
                          variant: "text",
                          class: "mt-n2 me-n3",
                          onClick: ($event) => _ctx.addModalShow = false
                        }, null, 8, ["onClick"])
                      ]),
                      createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                        default: withCtx(() => [
                          createTextVNode("Event Title")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_text_field, {
                        modelValue: _ctx.newEvent.title,
                        "onUpdate:modelValue": ($event) => _ctx.newEvent.title = $event,
                        outlined: "",
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                        default: withCtx(() => [
                          createTextVNode("Start Date")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_text_field, {
                        modelValue: _ctx.newEvent.start,
                        "onUpdate:modelValue": ($event) => _ctx.newEvent.start = $event,
                        variant: "outlined",
                        "hide-details": "",
                        type: "date",
                        class: "mb-5",
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                        default: withCtx(() => [
                          createTextVNode("End Date")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_text_field, {
                        modelValue: _ctx.newEvent.end,
                        "onUpdate:modelValue": ($event) => _ctx.newEvent.end = $event,
                        variant: "outlined",
                        "hide-details": "",
                        type: "date",
                        class: "mb-5",
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                        default: withCtx(() => [
                          createTextVNode("Event Color")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_list, { class: "d-flex ga-3 pa-0" }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.colorOptions, (option) => {
                            return openBlock(), createBlock(_component_v_list_item, {
                              class: "px-0 py-0",
                              ripple: false,
                              key: option.id,
                              onClick: ($event) => _ctx.selectColor(option.value, true)
                            }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: "round-30 rounded-circle d-flex justify-center align-center",
                                  style: {
                                    backgroundColor: option.value
                                  }
                                }, [
                                  _ctx.activeColor.newEvent === option.value ? (openBlock(), createBlock(_component_CheckIcon, {
                                    key: 0,
                                    size: "18",
                                    color: "#fff"
                                  })) : createCommentVNode("", true)
                                ], 4)
                              ]),
                              _: 2
                            }, 1032, ["onClick"]);
                          }), 128))
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_btn, {
                        onClick: _ctx.addEvent,
                        color: "primary",
                        rounded: "pill",
                        class: "mt-6"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Add Event")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_card_text, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "mb-6 d-flex justify-space-between" }, [
                      createVNode("div", null, [
                        createVNode("h4", { class: "text-h4 mb-2" }, "Add Event"),
                        createVNode("p", { class: "text-muted" }, " Fill in the title, choose the event color, and select the start and end dates to add an event. ")
                      ]),
                      createVNode(_component_v_btn, {
                        icon: "mdi-close",
                        variant: "text",
                        class: "mt-n2 me-n3",
                        onClick: ($event) => _ctx.addModalShow = false
                      }, null, 8, ["onClick"])
                    ]),
                    createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                      default: withCtx(() => [
                        createTextVNode("Event Title")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_text_field, {
                      modelValue: _ctx.newEvent.title,
                      "onUpdate:modelValue": ($event) => _ctx.newEvent.title = $event,
                      outlined: "",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                      default: withCtx(() => [
                        createTextVNode("Start Date")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_text_field, {
                      modelValue: _ctx.newEvent.start,
                      "onUpdate:modelValue": ($event) => _ctx.newEvent.start = $event,
                      variant: "outlined",
                      "hide-details": "",
                      type: "date",
                      class: "mb-5",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                      default: withCtx(() => [
                        createTextVNode("End Date")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_text_field, {
                      modelValue: _ctx.newEvent.end,
                      "onUpdate:modelValue": ($event) => _ctx.newEvent.end = $event,
                      variant: "outlined",
                      "hide-details": "",
                      type: "date",
                      class: "mb-5",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                      default: withCtx(() => [
                        createTextVNode("Event Color")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_list, { class: "d-flex ga-3 pa-0" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.colorOptions, (option) => {
                          return openBlock(), createBlock(_component_v_list_item, {
                            class: "px-0 py-0",
                            ripple: false,
                            key: option.id,
                            onClick: ($event) => _ctx.selectColor(option.value, true)
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "round-30 rounded-circle d-flex justify-center align-center",
                                style: {
                                  backgroundColor: option.value
                                }
                              }, [
                                _ctx.activeColor.newEvent === option.value ? (openBlock(), createBlock(_component_CheckIcon, {
                                  key: 0,
                                  size: "18",
                                  color: "#fff"
                                })) : createCommentVNode("", true)
                              ], 4)
                            ]),
                            _: 2
                          }, 1032, ["onClick"]);
                        }), 128))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_btn, {
                      onClick: _ctx.addEvent,
                      color: "primary",
                      rounded: "pill",
                      class: "mt-6"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Add Event")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
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
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "mb-6 d-flex justify-space-between" }, [
                    createVNode("div", null, [
                      createVNode("h4", { class: "text-h4 mb-2" }, "Add Event"),
                      createVNode("p", { class: "text-muted" }, " Fill in the title, choose the event color, and select the start and end dates to add an event. ")
                    ]),
                    createVNode(_component_v_btn, {
                      icon: "mdi-close",
                      variant: "text",
                      class: "mt-n2 me-n3",
                      onClick: ($event) => _ctx.addModalShow = false
                    }, null, 8, ["onClick"])
                  ]),
                  createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                    default: withCtx(() => [
                      createTextVNode("Event Title")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_text_field, {
                    modelValue: _ctx.newEvent.title,
                    "onUpdate:modelValue": ($event) => _ctx.newEvent.title = $event,
                    outlined: "",
                    required: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                    default: withCtx(() => [
                      createTextVNode("Start Date")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_text_field, {
                    modelValue: _ctx.newEvent.start,
                    "onUpdate:modelValue": ($event) => _ctx.newEvent.start = $event,
                    variant: "outlined",
                    "hide-details": "",
                    type: "date",
                    class: "mb-5",
                    required: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                    default: withCtx(() => [
                      createTextVNode("End Date")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_text_field, {
                    modelValue: _ctx.newEvent.end,
                    "onUpdate:modelValue": ($event) => _ctx.newEvent.end = $event,
                    variant: "outlined",
                    "hide-details": "",
                    type: "date",
                    class: "mb-5",
                    required: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                    default: withCtx(() => [
                      createTextVNode("Event Color")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_list, { class: "d-flex ga-3 pa-0" }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.colorOptions, (option) => {
                        return openBlock(), createBlock(_component_v_list_item, {
                          class: "px-0 py-0",
                          ripple: false,
                          key: option.id,
                          onClick: ($event) => _ctx.selectColor(option.value, true)
                        }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: "round-30 rounded-circle d-flex justify-center align-center",
                              style: {
                                backgroundColor: option.value
                              }
                            }, [
                              _ctx.activeColor.newEvent === option.value ? (openBlock(), createBlock(_component_CheckIcon, {
                                key: 0,
                                size: "18",
                                color: "#fff"
                              })) : createCommentVNode("", true)
                            ], 4)
                          ]),
                          _: 2
                        }, 1032, ["onClick"]);
                      }), 128))
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_btn, {
                    onClick: _ctx.addEvent,
                    color: "primary",
                    rounded: "pill",
                    class: "mt-6"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Add Event")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
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
  _push(ssrRenderComponent(_component_v_dialog, {
    modelValue: _ctx.updateModalShow,
    "onUpdate:modelValue": ($event) => _ctx.updateModalShow = $event,
    "max-width": "500px"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_card_text, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="mb-6 d-flex justify-space-between"${_scopeId3}><div${_scopeId3}><h4 class="text-h4 mb-2"${_scopeId3}>Update Event</h4><p class="text-muted"${_scopeId3}> To add Event kindly fill up the title and choose the event color and press the add button </p></div>`);
                    _push4(ssrRenderComponent(_component_v_btn, {
                      icon: "mdi-close",
                      variant: "text",
                      class: "mt-n2 me-n3",
                      onClick: ($event) => _ctx.updateModalShow = false
                    }, null, _parent4, _scopeId3));
                    _push4(`</div>`);
                    _push4(ssrRenderComponent(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Event Title `);
                        } else {
                          return [
                            createTextVNode("Event Title ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_text_field, {
                      modelValue: _ctx.updatedTitle,
                      "onUpdate:modelValue": ($event) => _ctx.updatedTitle = $event,
                      outlined: "",
                      required: ""
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Start Date`);
                        } else {
                          return [
                            createTextVNode("Start Date")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_text_field, {
                      modelValue: _ctx.selectedEvent.start,
                      "onUpdate:modelValue": ($event) => _ctx.selectedEvent.start = $event,
                      variant: "outlined",
                      "hide-details": "",
                      type: "date",
                      required: "",
                      class: "mb-5"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`End Date`);
                        } else {
                          return [
                            createTextVNode("End Date")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_text_field, {
                      modelValue: _ctx.selectedEvent.end,
                      "onUpdate:modelValue": ($event) => _ctx.selectedEvent.end = $event,
                      variant: "outlined",
                      "hide-details": "",
                      type: "date",
                      class: "mb-5",
                      required: ""
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Event Color `);
                        } else {
                          return [
                            createTextVNode("Event Color ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_list, { class: "d-flex ga-3 pa-0" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<!--[-->`);
                          ssrRenderList(_ctx.colorOptions, (option) => {
                            _push5(ssrRenderComponent(_component_v_list_item, {
                              class: "px-0 py-0",
                              ripple: false,
                              key: option.id,
                              onClick: ($event) => _ctx.selectColor(option.value, false)
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`<div class="round-30 rounded-circle d-flex justify-center align-center" style="${ssrRenderStyle({ backgroundColor: option.value })}"${_scopeId5}>`);
                                  if (_ctx.activeColor.updateEvent === option.value) {
                                    _push6(ssrRenderComponent(_component_CheckIcon, {
                                      size: "18",
                                      color: "#fff"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    _push6(`<!---->`);
                                  }
                                  _push6(`</div>`);
                                } else {
                                  return [
                                    createVNode("div", {
                                      class: "round-30 rounded-circle d-flex justify-center align-center",
                                      style: { backgroundColor: option.value }
                                    }, [
                                      _ctx.activeColor.updateEvent === option.value ? (openBlock(), createBlock(_component_CheckIcon, {
                                        key: 0,
                                        size: "18",
                                        color: "#fff"
                                      })) : createCommentVNode("", true)
                                    ], 4)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          });
                          _push5(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.colorOptions, (option) => {
                              return openBlock(), createBlock(_component_v_list_item, {
                                class: "px-0 py-0",
                                ripple: false,
                                key: option.id,
                                onClick: ($event) => _ctx.selectColor(option.value, false)
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", {
                                    class: "round-30 rounded-circle d-flex justify-center align-center",
                                    style: { backgroundColor: option.value }
                                  }, [
                                    _ctx.activeColor.updateEvent === option.value ? (openBlock(), createBlock(_component_CheckIcon, {
                                      key: 0,
                                      size: "18",
                                      color: "#fff"
                                    })) : createCommentVNode("", true)
                                  ], 4)
                                ]),
                                _: 2
                              }, 1032, ["onClick"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_btn, {
                      onClick: _ctx.updateEvent,
                      rounded: "pill",
                      color: "primary",
                      class: "mt-6"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Update Event `);
                        } else {
                          return [
                            createTextVNode(" Update Event ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_btn, {
                      onClick: _ctx.deleteEvent,
                      rounded: "pill",
                      color: "error",
                      class: "mt-6 ms-4"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Delete Event `);
                        } else {
                          return [
                            createTextVNode(" Delete Event ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode("div", { class: "mb-6 d-flex justify-space-between" }, [
                        createVNode("div", null, [
                          createVNode("h4", { class: "text-h4 mb-2" }, "Update Event"),
                          createVNode("p", { class: "text-muted" }, " To add Event kindly fill up the title and choose the event color and press the add button ")
                        ]),
                        createVNode(_component_v_btn, {
                          icon: "mdi-close",
                          variant: "text",
                          class: "mt-n2 me-n3",
                          onClick: ($event) => _ctx.updateModalShow = false
                        }, null, 8, ["onClick"])
                      ]),
                      createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                        default: withCtx(() => [
                          createTextVNode("Event Title ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_text_field, {
                        modelValue: _ctx.updatedTitle,
                        "onUpdate:modelValue": ($event) => _ctx.updatedTitle = $event,
                        outlined: "",
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                        default: withCtx(() => [
                          createTextVNode("Start Date")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_text_field, {
                        modelValue: _ctx.selectedEvent.start,
                        "onUpdate:modelValue": ($event) => _ctx.selectedEvent.start = $event,
                        variant: "outlined",
                        "hide-details": "",
                        type: "date",
                        required: "",
                        class: "mb-5"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                        default: withCtx(() => [
                          createTextVNode("End Date")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_text_field, {
                        modelValue: _ctx.selectedEvent.end,
                        "onUpdate:modelValue": ($event) => _ctx.selectedEvent.end = $event,
                        variant: "outlined",
                        "hide-details": "",
                        type: "date",
                        class: "mb-5",
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                        default: withCtx(() => [
                          createTextVNode("Event Color ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_list, { class: "d-flex ga-3 pa-0" }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.colorOptions, (option) => {
                            return openBlock(), createBlock(_component_v_list_item, {
                              class: "px-0 py-0",
                              ripple: false,
                              key: option.id,
                              onClick: ($event) => _ctx.selectColor(option.value, false)
                            }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: "round-30 rounded-circle d-flex justify-center align-center",
                                  style: { backgroundColor: option.value }
                                }, [
                                  _ctx.activeColor.updateEvent === option.value ? (openBlock(), createBlock(_component_CheckIcon, {
                                    key: 0,
                                    size: "18",
                                    color: "#fff"
                                  })) : createCommentVNode("", true)
                                ], 4)
                              ]),
                              _: 2
                            }, 1032, ["onClick"]);
                          }), 128))
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_btn, {
                        onClick: _ctx.updateEvent,
                        rounded: "pill",
                        color: "primary",
                        class: "mt-6"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Update Event ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_v_btn, {
                        onClick: _ctx.deleteEvent,
                        rounded: "pill",
                        color: "error",
                        class: "mt-6 ms-4"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Delete Event ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_card_text, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "mb-6 d-flex justify-space-between" }, [
                      createVNode("div", null, [
                        createVNode("h4", { class: "text-h4 mb-2" }, "Update Event"),
                        createVNode("p", { class: "text-muted" }, " To add Event kindly fill up the title and choose the event color and press the add button ")
                      ]),
                      createVNode(_component_v_btn, {
                        icon: "mdi-close",
                        variant: "text",
                        class: "mt-n2 me-n3",
                        onClick: ($event) => _ctx.updateModalShow = false
                      }, null, 8, ["onClick"])
                    ]),
                    createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                      default: withCtx(() => [
                        createTextVNode("Event Title ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_text_field, {
                      modelValue: _ctx.updatedTitle,
                      "onUpdate:modelValue": ($event) => _ctx.updatedTitle = $event,
                      outlined: "",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                      default: withCtx(() => [
                        createTextVNode("Start Date")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_text_field, {
                      modelValue: _ctx.selectedEvent.start,
                      "onUpdate:modelValue": ($event) => _ctx.selectedEvent.start = $event,
                      variant: "outlined",
                      "hide-details": "",
                      type: "date",
                      required: "",
                      class: "mb-5"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                      default: withCtx(() => [
                        createTextVNode("End Date")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_text_field, {
                      modelValue: _ctx.selectedEvent.end,
                      "onUpdate:modelValue": ($event) => _ctx.selectedEvent.end = $event,
                      variant: "outlined",
                      "hide-details": "",
                      type: "date",
                      class: "mb-5",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                      default: withCtx(() => [
                        createTextVNode("Event Color ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_list, { class: "d-flex ga-3 pa-0" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.colorOptions, (option) => {
                          return openBlock(), createBlock(_component_v_list_item, {
                            class: "px-0 py-0",
                            ripple: false,
                            key: option.id,
                            onClick: ($event) => _ctx.selectColor(option.value, false)
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "round-30 rounded-circle d-flex justify-center align-center",
                                style: { backgroundColor: option.value }
                              }, [
                                _ctx.activeColor.updateEvent === option.value ? (openBlock(), createBlock(_component_CheckIcon, {
                                  key: 0,
                                  size: "18",
                                  color: "#fff"
                                })) : createCommentVNode("", true)
                              ], 4)
                            ]),
                            _: 2
                          }, 1032, ["onClick"]);
                        }), 128))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_btn, {
                      onClick: _ctx.updateEvent,
                      rounded: "pill",
                      color: "primary",
                      class: "mt-6"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Update Event ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_v_btn, {
                      onClick: _ctx.deleteEvent,
                      rounded: "pill",
                      color: "error",
                      class: "mt-6 ms-4"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Delete Event ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
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
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "mb-6 d-flex justify-space-between" }, [
                    createVNode("div", null, [
                      createVNode("h4", { class: "text-h4 mb-2" }, "Update Event"),
                      createVNode("p", { class: "text-muted" }, " To add Event kindly fill up the title and choose the event color and press the add button ")
                    ]),
                    createVNode(_component_v_btn, {
                      icon: "mdi-close",
                      variant: "text",
                      class: "mt-n2 me-n3",
                      onClick: ($event) => _ctx.updateModalShow = false
                    }, null, 8, ["onClick"])
                  ]),
                  createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                    default: withCtx(() => [
                      createTextVNode("Event Title ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_text_field, {
                    modelValue: _ctx.updatedTitle,
                    "onUpdate:modelValue": ($event) => _ctx.updatedTitle = $event,
                    outlined: "",
                    required: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                    default: withCtx(() => [
                      createTextVNode("Start Date")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_text_field, {
                    modelValue: _ctx.selectedEvent.start,
                    "onUpdate:modelValue": ($event) => _ctx.selectedEvent.start = $event,
                    variant: "outlined",
                    "hide-details": "",
                    type: "date",
                    required: "",
                    class: "mb-5"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                    default: withCtx(() => [
                      createTextVNode("End Date")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_text_field, {
                    modelValue: _ctx.selectedEvent.end,
                    "onUpdate:modelValue": ($event) => _ctx.selectedEvent.end = $event,
                    variant: "outlined",
                    "hide-details": "",
                    type: "date",
                    class: "mb-5",
                    required: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_v_label, { class: "mb-2 font-weight-medium" }, {
                    default: withCtx(() => [
                      createTextVNode("Event Color ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_list, { class: "d-flex ga-3 pa-0" }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.colorOptions, (option) => {
                        return openBlock(), createBlock(_component_v_list_item, {
                          class: "px-0 py-0",
                          ripple: false,
                          key: option.id,
                          onClick: ($event) => _ctx.selectColor(option.value, false)
                        }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: "round-30 rounded-circle d-flex justify-center align-center",
                              style: { backgroundColor: option.value }
                            }, [
                              _ctx.activeColor.updateEvent === option.value ? (openBlock(), createBlock(_component_CheckIcon, {
                                key: 0,
                                size: "18",
                                color: "#fff"
                              })) : createCommentVNode("", true)
                            ], 4)
                          ]),
                          _: 2
                        }, 1032, ["onClick"]);
                      }), 128))
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_btn, {
                    onClick: _ctx.updateEvent,
                    rounded: "pill",
                    color: "primary",
                    class: "mt-6"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Update Event ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_v_btn, {
                    onClick: _ctx.deleteEvent,
                    rounded: "pill",
                    color: "error",
                    class: "mt-6 ms-4"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Delete Event ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
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
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/apps/calendar/FullCalender.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FullCalendar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { INITIAL_EVENTS, createEventId, FullCalendar as default };
//# sourceMappingURL=FullCalender-D63TTNjM.mjs.map
