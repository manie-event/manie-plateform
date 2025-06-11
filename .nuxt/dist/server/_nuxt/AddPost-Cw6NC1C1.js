import { defineComponent, ref, resolveComponent, withCtx, createVNode, mergeProps, toDisplayString, createTextVNode, useSSRContext, createBlock, openBlock, Fragment, renderList, unref, resolveDynamicComponent, createCommentVNode, computed } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import { d as defineStore, a as axiosServices, _ as _export_sfc } from "../server.mjs";
import uniqueId from "lodash/uniqueId.js";
import { ShareIcon, UsersIcon, Message2Icon, ClipboardIcon } from "vue-tabler-icons";
const usePostsStore = defineStore({
  id: "post",
  state: () => ({
    posts: []
  }),
  getters: {},
  actions: {
    // Fetch Posts from action
    async fetchPosts() {
      try {
        const response = await axiosServices.get("/api/posts/list");
        this.posts = response.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    // like post
    async likePost(postId) {
      try {
        const response = await axiosServices.post("/api/posts/list/like", { postId });
        this.posts = response.data.posts;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    // add Comment
    async addComment(postId, comment) {
      try {
        const response = await axiosServices.post("/api/comments/add", { postId, comment });
        this.posts = response.data.posts;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    // add Comment
    async addReply(postId, commentId, reply) {
      try {
        const response = await axiosServices.post("/api/replies/add", { postId, commentId, reply });
        this.posts = response.data.posts;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    }
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Comments",
  __ssrInlineRender: true,
  props: {
    comments: Object || Array,
    postId: String
  },
  setup(__props) {
    const store = usePostsStore();
    const props = __props;
    const replyValue = ref("");
    const onSubmit = async (id, commentid, reply) => {
      var _a, _b;
      const replyId = uniqueId("#REPLY_");
      const newReply = {
        id: replyId,
        profile: {
          id: uniqueId("#REPLY_"),
          avatar: (_a = props.comments) == null ? void 0 : _a.profile.avatar,
          name: (_b = props.comments) == null ? void 0 : _b.profile.name,
          time: "now"
        },
        data: {
          comment: reply,
          likes: {
            like: false,
            value: 0
          },
          replies: []
        }
      };
      store.addReply(id, commentid, newReply);
      replyValue.value = "";
    };
    const showReplyBox = ref(false);
    const toggleReplybox = () => {
      return showReplyBox.value = !showReplyBox.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_v_card = resolveComponent("v-card");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_CircleIcon = resolveComponent("CircleIcon");
      const _component_v_tooltip = resolveComponent("v-tooltip");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_ThumbUpIcon = resolveComponent("ThumbUpIcon");
      const _component_ArrowBackUpIcon = resolveComponent("ArrowBackUpIcon");
      const _component_v_text_field = resolveComponent("v-text-field");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_card, {
        variant: "flat",
        class: "mb-3 pa-5 border bg-surface"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d, _e, _f, _g, _h, _i, _j, _k, _l;
          if (_push2) {
            _push2(`<div class="d-flex gap-3 align-center" data-v-908799dc${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_avatar, { size: "30" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a3, _b3;
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", (_a3 = __props.comments) == null ? void 0 : _a3.profile.avatar)} width="30" alt="avatar" data-v-908799dc${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: (_b3 = __props.comments) == null ? void 0 : _b3.profile.avatar,
                      width: "30",
                      alt: "avatar"
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="d-block d-sm-flex align-center gap-3" data-v-908799dc${_scopeId}><h6 class="text-h6" data-v-908799dc${_scopeId}>${ssrInterpolate((_a2 = __props.comments) == null ? void 0 : _a2.profile.name)}</h6><span class="text-subtitle-2 opacity-50" data-v-908799dc${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CircleIcon, {
              size: "8",
              fill: "inherit",
              class: "opacity-50 mr-1"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate((_b2 = __props.comments) == null ? void 0 : _b2.profile.time)}</span></div></div><div class="py-3 text-body-1" data-v-908799dc${_scopeId}>${ssrInterpolate((_c2 = __props.comments) == null ? void 0 : _c2.data.comment)}</div><div class="my-1 d-flex align-center gap-3" data-v-908799dc${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_tooltip, { text: "Like" }, {
              activator: withCtx(({ props: props2 }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_btn, mergeProps({
                    icon: "",
                    color: "primary",
                    variant: "flat",
                    size: "x-small"
                  }, props2), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ThumbUpIcon, { size: "16" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ThumbUpIcon, { size: "16" })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_btn, mergeProps({
                      icon: "",
                      color: "primary",
                      variant: "flat",
                      size: "x-small"
                    }, props2), {
                      default: withCtx(() => [
                        createVNode(_component_ThumbUpIcon, { size: "16" })
                      ]),
                      _: 2
                    }, 1040)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="text-subtitle-1 font-weight-semibold" data-v-908799dc${_scopeId}>${ssrInterpolate(((_d = __props.comments) == null ? void 0 : _d.data) && ((_e = __props.comments) == null ? void 0 : _e.data.likes) && ((_f = __props.comments) == null ? void 0 : _f.data.likes.value))}</span>`);
            _push2(ssrRenderComponent(_component_v_tooltip, { text: "Reply" }, {
              activator: withCtx(({ props: props2 }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_btn, mergeProps({
                    icon: "",
                    color: "secondary",
                    variant: "flat"
                  }, props2, {
                    size: "x-small",
                    onClick: toggleReplybox
                  }), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ArrowBackUpIcon, { size: "16" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ArrowBackUpIcon, { size: "16" })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_btn, mergeProps({
                      icon: "",
                      color: "secondary",
                      variant: "flat"
                    }, props2, {
                      size: "x-small",
                      onClick: toggleReplybox
                    }), {
                      default: withCtx(() => [
                        createVNode(_component_ArrowBackUpIcon, { size: "16" })
                      ]),
                      _: 2
                    }, 1040)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex gap-3 align-center" }, [
                createVNode(_component_v_avatar, { size: "30" }, {
                  default: withCtx(() => {
                    var _a3;
                    return [
                      createVNode("img", {
                        src: (_a3 = __props.comments) == null ? void 0 : _a3.profile.avatar,
                        width: "30",
                        alt: "avatar"
                      }, null, 8, ["src"])
                    ];
                  }),
                  _: 1
                }),
                createVNode("div", { class: "d-block d-sm-flex align-center gap-3" }, [
                  createVNode("h6", { class: "text-h6" }, toDisplayString((_g = __props.comments) == null ? void 0 : _g.profile.name), 1),
                  createVNode("span", { class: "text-subtitle-2 opacity-50" }, [
                    createVNode(_component_CircleIcon, {
                      size: "8",
                      fill: "inherit",
                      class: "opacity-50 mr-1"
                    }),
                    createTextVNode(" " + toDisplayString((_h = __props.comments) == null ? void 0 : _h.profile.time), 1)
                  ])
                ])
              ]),
              createVNode("div", { class: "py-3 text-body-1" }, toDisplayString((_i = __props.comments) == null ? void 0 : _i.data.comment), 1),
              createVNode("div", { class: "my-1 d-flex align-center gap-3" }, [
                createVNode(_component_v_tooltip, { text: "Like" }, {
                  activator: withCtx(({ props: props2 }) => [
                    createVNode(_component_v_btn, mergeProps({
                      icon: "",
                      color: "primary",
                      variant: "flat",
                      size: "x-small"
                    }, props2), {
                      default: withCtx(() => [
                        createVNode(_component_ThumbUpIcon, { size: "16" })
                      ]),
                      _: 2
                    }, 1040)
                  ]),
                  _: 1
                }),
                createVNode("span", { class: "text-subtitle-1 font-weight-semibold" }, toDisplayString(((_j = __props.comments) == null ? void 0 : _j.data) && ((_k = __props.comments) == null ? void 0 : _k.data.likes) && ((_l = __props.comments) == null ? void 0 : _l.data.likes.value)), 1),
                createVNode(_component_v_tooltip, { text: "Reply" }, {
                  activator: withCtx(({ props: props2 }) => [
                    createVNode(_component_v_btn, mergeProps({
                      icon: "",
                      color: "secondary",
                      variant: "flat"
                    }, props2, {
                      size: "x-small",
                      onClick: toggleReplybox
                    }), {
                      default: withCtx(() => [
                        createVNode(_component_ArrowBackUpIcon, { size: "16" })
                      ]),
                      _: 2
                    }, 1040)
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if ((_a = __props.comments) == null ? void 0 : _a.data.replies) {
        _push(`<div class="ml-10" data-v-908799dc><!--[-->`);
        ssrRenderList((_b = __props.comments) == null ? void 0 : _b.data.replies, (reply) => {
          _push(`<div data-v-908799dc>`);
          _push(ssrRenderComponent(_component_v_card, {
            variant: "flat",
            class: "mb-3 pa-5 border"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="d-flex gap-3 align-center" data-v-908799dc${_scopeId}>`);
                _push2(ssrRenderComponent(_component_v_avatar, { size: "30" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img${ssrRenderAttr("src", reply.profile.avatar)} width="30" alt="avatar" data-v-908799dc${_scopeId2}>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: reply.profile.avatar,
                          width: "30",
                          alt: "avatar"
                        }, null, 8, ["src"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<div class="d-block d-sm-flex align-center gap-3" data-v-908799dc${_scopeId}><h6 class="text-h6" data-v-908799dc${_scopeId}>${ssrInterpolate(reply.profile.name)}</h6><span class="text-subtitle-2 opacity-50" data-v-908799dc${_scopeId}>`);
                _push2(ssrRenderComponent(_component_CircleIcon, {
                  size: "8",
                  fill: "inherit",
                  class: "opacity-50 mr-1"
                }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(reply.profile.time)}</span></div></div><div class="py-3 text-body-1" data-v-908799dc${_scopeId}>${ssrInterpolate(reply.data.comment)}</div>`);
              } else {
                return [
                  createVNode("div", { class: "d-flex gap-3 align-center" }, [
                    createVNode(_component_v_avatar, { size: "30" }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: reply.profile.avatar,
                          width: "30",
                          alt: "avatar"
                        }, null, 8, ["src"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode("div", { class: "d-block d-sm-flex align-center gap-3" }, [
                      createVNode("h6", { class: "text-h6" }, toDisplayString(reply.profile.name), 1),
                      createVNode("span", { class: "text-subtitle-2 opacity-50" }, [
                        createVNode(_component_CircleIcon, {
                          size: "8",
                          fill: "inherit",
                          class: "opacity-50 mr-1"
                        }),
                        createTextVNode(" " + toDisplayString(reply.profile.time), 1)
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "py-3 text-body-1" }, toDisplayString(reply.data.comment), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showReplyBox.value) {
        _push(`<div class="d-block d-sm-flex gap-3 align-center mb-5 ml-10" data-v-908799dc><img${ssrRenderAttr("src", (_c = __props.comments) == null ? void 0 : _c.profile.avatar)} width="40" class="flex-shrink-0 d-none d-sm-block" alt="avatar" data-v-908799dc>`);
        _push(ssrRenderComponent(_component_v_text_field, {
          variant: "outlined",
          color: "primary",
          modelValue: replyValue.value,
          "onUpdate:modelValue": ($event) => replyValue.value = $event,
          label: "Write Reply",
          "hide-details": ""
        }, null, _parent));
        _push(ssrRenderComponent(_component_v_btn, {
          color: "secondary",
          class: "mt-3 mt-sm-0",
          variant: "flat",
          size: "large",
          onClick: ($event) => {
            var _a2;
            return onSubmit(__props.postId, (_a2 = __props.comments) == null ? void 0 : _a2.id, replyValue.value);
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Reply `);
            } else {
              return [
                createTextVNode(" Reply ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/user-profile/posts/Comments.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Comments = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-908799dc"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PostItem",
  __ssrInlineRender: true,
  props: {
    post: Object || Array
  },
  setup(__props) {
    var _a, _b;
    const store = usePostsStore();
    const props = __props;
    const showCommentBox = ref(!(((_a = props.post) == null ? void 0 : _a.comments) && ((_b = props.post) == null ? void 0 : _b.comments.length) > 0));
    const searchValue = ref("");
    const shareitems = ref([
      { title: "Share Now", icon: ShareIcon },
      { title: "Share to Friends", icon: UsersIcon },
      { title: "Send in Messanger", icon: Message2Icon },
      { title: "Copy Link", icon: ClipboardIcon }
    ]);
    const toggleCommentbox = () => {
      return showCommentBox.value = !showCommentBox.value;
    };
    const handlePostLikes = async (postId) => {
      await store.likePost(postId);
    };
    const onSubmit = async (id, comment) => {
      var _a2, _b2;
      const commentId = uniqueId("#COMMENT_");
      const newComment = {
        id: commentId,
        profile: {
          id: uniqueId("#COMMENT_"),
          avatar: (_a2 = props.post) == null ? void 0 : _a2.profile.avatar,
          name: (_b2 = props.post) == null ? void 0 : _b2.profile.name,
          time: "now"
        },
        data: {
          comment,
          likes: {
            like: false,
            value: 0
          },
          replies: []
        }
      };
      store.addComment(id, newComment);
      searchValue.value = "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_CircleIcon = resolveComponent("CircleIcon");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_tooltip = resolveComponent("v-tooltip");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_ThumbUpIcon = resolveComponent("ThumbUpIcon");
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_text_field = resolveComponent("v-text-field");
      _push(ssrRenderComponent(_component_v_card, mergeProps({
        elevation: "10",
        class: "bg-surface"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c, _d;
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a3, _b3, _c2, _d2, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v;
                if (_push3) {
                  _push3(`<div class="d-flex gap-3 align-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_avatar, { size: "40" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a4, _b4;
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", (_a4 = __props.post) == null ? void 0 : _a4.profile.avatar)} width="40" alt="avatar"${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: (_b4 = __props.post) == null ? void 0 : _b4.profile.avatar,
                            width: "40",
                            alt: "avatar"
                          }, null, 8, ["src"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="d-block d-sm-flex align-center gap-3"${_scopeId2}><h6 class="text-h6"${_scopeId2}>${ssrInterpolate((_a3 = __props.post) == null ? void 0 : _a3.profile.name)}</h6><span class="text-subtitle-2 opacity-50"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_CircleIcon, {
                    size: "8",
                    fill: "inherit",
                    class: "opacity-50 mr-1"
                  }, null, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate((_b3 = __props.post) == null ? void 0 : _b3.profile.time)}</span></div></div><div class="py-4 text-body-1"${_scopeId2}>${ssrInterpolate((_c2 = __props.post) == null ? void 0 : _c2.data.content)}</div>`);
                  if ((_d2 = __props.post) == null ? void 0 : _d2.data.images) {
                    _push3(ssrRenderComponent(_component_v_row, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a4, _b4;
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList((_a4 = __props.post) == null ? void 0 : _a4.data.images, (photo) => {
                            _push4(ssrRenderComponent(_component_v_col, {
                              md: photo.featured ? "12" : "6"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_v_avatar, {
                                    class: "rounded-md w-100",
                                    size: "360"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<img${ssrRenderAttr("src", photo.img)} alt="photo"${_scopeId5}>`);
                                      } else {
                                        return [
                                          createVNode("img", {
                                            src: photo.img,
                                            alt: "photo"
                                          }, null, 8, ["src"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_v_avatar, {
                                      class: "rounded-md w-100",
                                      size: "360"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: photo.img,
                                          alt: "photo"
                                        }, null, 8, ["src"])
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
                            (openBlock(true), createBlock(Fragment, null, renderList((_b4 = __props.post) == null ? void 0 : _b4.data.images, (photo) => {
                              return openBlock(), createBlock(_component_v_col, {
                                md: photo.featured ? "12" : "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_avatar, {
                                    class: "rounded-md w-100",
                                    size: "360"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: photo.img,
                                        alt: "photo"
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["md"]);
                            }), 256))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if ((_e = __props.post) == null ? void 0 : _e.data.video) {
                    _push3(`<div class="rounded-md overflow-hidden my-5"${_scopeId2}><iframe${ssrRenderAttr("src", `https://www.youtube.com/embed/${(_f = __props.post) == null ? void 0 : _f.data.video}`)} frameborder="0" width="100%" height="400"${_scopeId2}></iframe></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="my-4 mt-5 d-flex align-center gap-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_tooltip, { text: "Like" }, {
                    activator: withCtx(({ props: props2 }, _push4, _parent4, _scopeId3) => {
                      var _a4, _b4, _c3, _d3, _e2, _f2;
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, mergeProps({
                          onClick: ($event) => {
                            var _a5;
                            return handlePostLikes(`${(_a5 = __props.post) == null ? void 0 : _a5.id}`);
                          }
                        }, props2, {
                          icon: "",
                          color: ((_a4 = __props.post) == null ? void 0 : _a4.data) && ((_b4 = __props.post) == null ? void 0 : _b4.data.likes) && ((_c3 = __props.post) == null ? void 0 : _c3.data.likes.like) ? "primary" : "grey100",
                          variant: "flat",
                          size: "x-small"
                        }), {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_ThumbUpIcon, { size: "16" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_ThumbUpIcon, { size: "16" })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, mergeProps({
                            onClick: ($event) => {
                              var _a5;
                              return handlePostLikes(`${(_a5 = __props.post) == null ? void 0 : _a5.id}`);
                            }
                          }, props2, {
                            icon: "",
                            color: ((_d3 = __props.post) == null ? void 0 : _d3.data) && ((_e2 = __props.post) == null ? void 0 : _e2.data.likes) && ((_f2 = __props.post) == null ? void 0 : _f2.data.likes.like) ? "primary" : "grey100",
                            variant: "flat",
                            size: "x-small"
                          }), {
                            default: withCtx(() => [
                              createVNode(_component_ThumbUpIcon, { size: "16" })
                            ]),
                            _: 2
                          }, 1040, ["onClick", "color"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<span class="text-subtitle-1 font-weight-semibold"${_scopeId2}>${ssrInterpolate(((_g = __props.post) == null ? void 0 : _g.data) && ((_h = __props.post) == null ? void 0 : _h.data.likes) && ((_i = __props.post) == null ? void 0 : _i.data.likes.value))}</span>`);
                  _push3(ssrRenderComponent(_component_v_tooltip, { text: "Comment" }, {
                    activator: withCtx(({ props: props2 }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, mergeProps({ icon: "" }, props2, {
                          color: "secondary",
                          variant: "flat",
                          size: "x-small",
                          onClick: toggleCommentbox
                        }), {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Message2Icon), { size: "16" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(Message2Icon), { size: "16" })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, mergeProps({ icon: "" }, props2, {
                            color: "secondary",
                            variant: "flat",
                            size: "x-small",
                            onClick: toggleCommentbox
                          }), {
                            default: withCtx(() => [
                              createVNode(unref(Message2Icon), { size: "16" })
                            ]),
                            _: 2
                          }, 1040)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<span class="text-subtitle-1 font-weight-semibold"${_scopeId2}>${ssrInterpolate(((_j = __props.post) == null ? void 0 : _j.data.comments) ? (_k = __props.post) == null ? void 0 : _k.data.comments.length : 0)}</span>`);
                  _push3(ssrRenderComponent(_component_v_menu, null, {
                    activator: withCtx(({ props: props2 }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, mergeProps({
                          icon: "",
                          class: "ml-auto",
                          variant: "text",
                          size: "small"
                        }, props2), {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(ShareIcon), { size: "16" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(ShareIcon), { size: "16" })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, mergeProps({
                            icon: "",
                            class: "ml-auto",
                            variant: "text",
                            size: "small"
                          }, props2), {
                            default: withCtx(() => [
                              createVNode(unref(ShareIcon), { size: "16" })
                            ]),
                            _: 2
                          }, 1040)
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(shareitems.value, (item, index) => {
                                _push5(ssrRenderComponent(_component_v_list_item, {
                                  key: index,
                                  value: index
                                }, {
                                  prepend: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      ssrRenderVNode(_push6, createVNode(resolveDynamicComponent(item.icon), {
                                        "stroke-width": "1.5",
                                        size: "20"
                                      }, null), _parent6, _scopeId5);
                                    } else {
                                      return [
                                        (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                          "stroke-width": "1.5",
                                          size: "20"
                                        }))
                                      ];
                                    }
                                  }),
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_list_item_title, { class: "ml-3" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.title)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.title), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_list_item_title, { class: "ml-3" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(shareitems.value, (item, index) => {
                                  return openBlock(), createBlock(_component_v_list_item, {
                                    key: index,
                                    value: index
                                  }, {
                                    prepend: withCtx(() => [
                                      (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                        "stroke-width": "1.5",
                                        size: "20"
                                      }))
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, { class: "ml-3" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_list, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(shareitems.value, (item, index) => {
                                return openBlock(), createBlock(_component_v_list_item, {
                                  key: index,
                                  value: index
                                }, {
                                  prepend: withCtx(() => [
                                    (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                      "stroke-width": "1.5",
                                      size: "20"
                                    }))
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_title, { class: "ml-3" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 128))
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
                  return [
                    createVNode("div", { class: "d-flex gap-3 align-center" }, [
                      createVNode(_component_v_avatar, { size: "40" }, {
                        default: withCtx(() => {
                          var _a4;
                          return [
                            createVNode("img", {
                              src: (_a4 = __props.post) == null ? void 0 : _a4.profile.avatar,
                              width: "40",
                              alt: "avatar"
                            }, null, 8, ["src"])
                          ];
                        }),
                        _: 1
                      }),
                      createVNode("div", { class: "d-block d-sm-flex align-center gap-3" }, [
                        createVNode("h6", { class: "text-h6" }, toDisplayString((_l = __props.post) == null ? void 0 : _l.profile.name), 1),
                        createVNode("span", { class: "text-subtitle-2 opacity-50" }, [
                          createVNode(_component_CircleIcon, {
                            size: "8",
                            fill: "inherit",
                            class: "opacity-50 mr-1"
                          }),
                          createTextVNode(" " + toDisplayString((_m = __props.post) == null ? void 0 : _m.profile.time), 1)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "py-4 text-body-1" }, toDisplayString((_n = __props.post) == null ? void 0 : _n.data.content), 1),
                    ((_o = __props.post) == null ? void 0 : _o.data.images) ? (openBlock(), createBlock(_component_v_row, { key: 0 }, {
                      default: withCtx(() => {
                        var _a4;
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList((_a4 = __props.post) == null ? void 0 : _a4.data.images, (photo) => {
                            return openBlock(), createBlock(_component_v_col, {
                              md: photo.featured ? "12" : "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_avatar, {
                                  class: "rounded-md w-100",
                                  size: "360"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: photo.img,
                                      alt: "photo"
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["md"]);
                          }), 256))
                        ];
                      }),
                      _: 1
                    })) : createCommentVNode("", true),
                    ((_p = __props.post) == null ? void 0 : _p.data.video) ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "rounded-md overflow-hidden my-5"
                    }, [
                      createVNode("iframe", {
                        src: `https://www.youtube.com/embed/${(_q = __props.post) == null ? void 0 : _q.data.video}`,
                        frameborder: "0",
                        width: "100%",
                        height: "400"
                      }, null, 8, ["src"])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "my-4 mt-5 d-flex align-center gap-3" }, [
                      createVNode(_component_v_tooltip, { text: "Like" }, {
                        activator: withCtx(({ props: props2 }) => {
                          var _a4, _b4, _c3;
                          return [
                            createVNode(_component_v_btn, mergeProps({
                              onClick: ($event) => {
                                var _a5;
                                return handlePostLikes(`${(_a5 = __props.post) == null ? void 0 : _a5.id}`);
                              }
                            }, props2, {
                              icon: "",
                              color: ((_a4 = __props.post) == null ? void 0 : _a4.data) && ((_b4 = __props.post) == null ? void 0 : _b4.data.likes) && ((_c3 = __props.post) == null ? void 0 : _c3.data.likes.like) ? "primary" : "grey100",
                              variant: "flat",
                              size: "x-small"
                            }), {
                              default: withCtx(() => [
                                createVNode(_component_ThumbUpIcon, { size: "16" })
                              ]),
                              _: 2
                            }, 1040, ["onClick", "color"])
                          ];
                        }),
                        _: 1
                      }),
                      createVNode("span", { class: "text-subtitle-1 font-weight-semibold" }, toDisplayString(((_r = __props.post) == null ? void 0 : _r.data) && ((_s = __props.post) == null ? void 0 : _s.data.likes) && ((_t = __props.post) == null ? void 0 : _t.data.likes.value)), 1),
                      createVNode(_component_v_tooltip, { text: "Comment" }, {
                        activator: withCtx(({ props: props2 }) => [
                          createVNode(_component_v_btn, mergeProps({ icon: "" }, props2, {
                            color: "secondary",
                            variant: "flat",
                            size: "x-small",
                            onClick: toggleCommentbox
                          }), {
                            default: withCtx(() => [
                              createVNode(unref(Message2Icon), { size: "16" })
                            ]),
                            _: 2
                          }, 1040)
                        ]),
                        _: 1
                      }),
                      createVNode("span", { class: "text-subtitle-1 font-weight-semibold" }, toDisplayString(((_u = __props.post) == null ? void 0 : _u.data.comments) ? (_v = __props.post) == null ? void 0 : _v.data.comments.length : 0), 1),
                      createVNode(_component_v_menu, null, {
                        activator: withCtx(({ props: props2 }) => [
                          createVNode(_component_v_btn, mergeProps({
                            icon: "",
                            class: "ml-auto",
                            variant: "text",
                            size: "small"
                          }, props2), {
                            default: withCtx(() => [
                              createVNode(unref(ShareIcon), { size: "16" })
                            ]),
                            _: 2
                          }, 1040)
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_v_list, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(shareitems.value, (item, index) => {
                                return openBlock(), createBlock(_component_v_list_item, {
                                  key: index,
                                  value: index
                                }, {
                                  prepend: withCtx(() => [
                                    (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                      "stroke-width": "1.5",
                                      size: "20"
                                    }))
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_title, { class: "ml-3" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 128))
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
            }, _parent2, _scopeId));
            if ((_a2 = __props.post) == null ? void 0 : _a2.data.comments) {
              _push2(`<div class="pa-5 pt-0"${_scopeId}><!--[-->`);
              ssrRenderList((_b2 = __props.post) == null ? void 0 : _b2.data.comments, (comments) => {
                var _a3;
                _push2(`<div${_scopeId}>`);
                _push2(ssrRenderComponent(Comments, {
                  comments,
                  postId: (_a3 = __props.post) == null ? void 0 : _a3.id
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (showCommentBox.value) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_v_divider, null, null, _parent2, _scopeId));
              _push2(`<div class="d-block d-sm-flex gap-3 align-center mb-4 px-4 pt-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_v_avatar, {
                class: "flex-shrink-0 d-none d-sm-block",
                size: "33"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a3, _b3;
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", (_a3 = __props.post) == null ? void 0 : _a3.profile.avatar)} width="33" alt="avatar"${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: (_b3 = __props.post) == null ? void 0 : _b3.profile.avatar,
                        width: "33",
                        alt: "avatar"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_v_text_field, {
                variant: "outlined",
                color: "primary",
                modelValue: searchValue.value,
                "onUpdate:modelValue": ($event) => searchValue.value = $event,
                placeholder: "Comment",
                "hide-details": ""
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_v_btn, {
                color: "primary",
                disabled: searchValue.value === "",
                class: "mt-3 mt-sm-0",
                size: "large",
                onClick: ($event) => {
                  var _a3;
                  return onSubmit((_a3 = __props.post) == null ? void 0 : _a3.id, searchValue.value);
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Comment `);
                  } else {
                    return [
                      createTextVNode(" Comment ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_v_card_item, null, {
                default: withCtx(() => {
                  var _a3, _b3, _c2, _d2, _e, _f, _g, _h, _i, _j, _k;
                  return [
                    createVNode("div", { class: "d-flex gap-3 align-center" }, [
                      createVNode(_component_v_avatar, { size: "40" }, {
                        default: withCtx(() => {
                          var _a4;
                          return [
                            createVNode("img", {
                              src: (_a4 = __props.post) == null ? void 0 : _a4.profile.avatar,
                              width: "40",
                              alt: "avatar"
                            }, null, 8, ["src"])
                          ];
                        }),
                        _: 1
                      }),
                      createVNode("div", { class: "d-block d-sm-flex align-center gap-3" }, [
                        createVNode("h6", { class: "text-h6" }, toDisplayString((_a3 = __props.post) == null ? void 0 : _a3.profile.name), 1),
                        createVNode("span", { class: "text-subtitle-2 opacity-50" }, [
                          createVNode(_component_CircleIcon, {
                            size: "8",
                            fill: "inherit",
                            class: "opacity-50 mr-1"
                          }),
                          createTextVNode(" " + toDisplayString((_b3 = __props.post) == null ? void 0 : _b3.profile.time), 1)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "py-4 text-body-1" }, toDisplayString((_c2 = __props.post) == null ? void 0 : _c2.data.content), 1),
                    ((_d2 = __props.post) == null ? void 0 : _d2.data.images) ? (openBlock(), createBlock(_component_v_row, { key: 0 }, {
                      default: withCtx(() => {
                        var _a4;
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList((_a4 = __props.post) == null ? void 0 : _a4.data.images, (photo) => {
                            return openBlock(), createBlock(_component_v_col, {
                              md: photo.featured ? "12" : "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_avatar, {
                                  class: "rounded-md w-100",
                                  size: "360"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: photo.img,
                                      alt: "photo"
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["md"]);
                          }), 256))
                        ];
                      }),
                      _: 1
                    })) : createCommentVNode("", true),
                    ((_e = __props.post) == null ? void 0 : _e.data.video) ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "rounded-md overflow-hidden my-5"
                    }, [
                      createVNode("iframe", {
                        src: `https://www.youtube.com/embed/${(_f = __props.post) == null ? void 0 : _f.data.video}`,
                        frameborder: "0",
                        width: "100%",
                        height: "400"
                      }, null, 8, ["src"])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "my-4 mt-5 d-flex align-center gap-3" }, [
                      createVNode(_component_v_tooltip, { text: "Like" }, {
                        activator: withCtx(({ props: props2 }) => {
                          var _a4, _b4, _c3;
                          return [
                            createVNode(_component_v_btn, mergeProps({
                              onClick: ($event) => {
                                var _a5;
                                return handlePostLikes(`${(_a5 = __props.post) == null ? void 0 : _a5.id}`);
                              }
                            }, props2, {
                              icon: "",
                              color: ((_a4 = __props.post) == null ? void 0 : _a4.data) && ((_b4 = __props.post) == null ? void 0 : _b4.data.likes) && ((_c3 = __props.post) == null ? void 0 : _c3.data.likes.like) ? "primary" : "grey100",
                              variant: "flat",
                              size: "x-small"
                            }), {
                              default: withCtx(() => [
                                createVNode(_component_ThumbUpIcon, { size: "16" })
                              ]),
                              _: 2
                            }, 1040, ["onClick", "color"])
                          ];
                        }),
                        _: 1
                      }),
                      createVNode("span", { class: "text-subtitle-1 font-weight-semibold" }, toDisplayString(((_g = __props.post) == null ? void 0 : _g.data) && ((_h = __props.post) == null ? void 0 : _h.data.likes) && ((_i = __props.post) == null ? void 0 : _i.data.likes.value)), 1),
                      createVNode(_component_v_tooltip, { text: "Comment" }, {
                        activator: withCtx(({ props: props2 }) => [
                          createVNode(_component_v_btn, mergeProps({ icon: "" }, props2, {
                            color: "secondary",
                            variant: "flat",
                            size: "x-small",
                            onClick: toggleCommentbox
                          }), {
                            default: withCtx(() => [
                              createVNode(unref(Message2Icon), { size: "16" })
                            ]),
                            _: 2
                          }, 1040)
                        ]),
                        _: 1
                      }),
                      createVNode("span", { class: "text-subtitle-1 font-weight-semibold" }, toDisplayString(((_j = __props.post) == null ? void 0 : _j.data.comments) ? (_k = __props.post) == null ? void 0 : _k.data.comments.length : 0), 1),
                      createVNode(_component_v_menu, null, {
                        activator: withCtx(({ props: props2 }) => [
                          createVNode(_component_v_btn, mergeProps({
                            icon: "",
                            class: "ml-auto",
                            variant: "text",
                            size: "small"
                          }, props2), {
                            default: withCtx(() => [
                              createVNode(unref(ShareIcon), { size: "16" })
                            ]),
                            _: 2
                          }, 1040)
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_v_list, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(shareitems.value, (item, index) => {
                                return openBlock(), createBlock(_component_v_list_item, {
                                  key: index,
                                  value: index
                                }, {
                                  prepend: withCtx(() => [
                                    (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                      "stroke-width": "1.5",
                                      size: "20"
                                    }))
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_title, { class: "ml-3" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }),
                _: 1
              }),
              ((_c = __props.post) == null ? void 0 : _c.data.comments) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "pa-5 pt-0"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList((_d = __props.post) == null ? void 0 : _d.data.comments, (comments) => {
                  var _a3;
                  return openBlock(), createBlock("div", null, [
                    createVNode(Comments, {
                      comments,
                      postId: (_a3 = __props.post) == null ? void 0 : _a3.id
                    }, null, 8, ["comments", "postId"])
                  ]);
                }), 256))
              ])) : createCommentVNode("", true),
              showCommentBox.value ? (openBlock(), createBlock("div", { key: 1 }, [
                createVNode(_component_v_divider),
                createVNode("div", { class: "d-block d-sm-flex gap-3 align-center mb-4 px-4 pt-4" }, [
                  createVNode(_component_v_avatar, {
                    class: "flex-shrink-0 d-none d-sm-block",
                    size: "33"
                  }, {
                    default: withCtx(() => {
                      var _a3;
                      return [
                        createVNode("img", {
                          src: (_a3 = __props.post) == null ? void 0 : _a3.profile.avatar,
                          width: "33",
                          alt: "avatar"
                        }, null, 8, ["src"])
                      ];
                    }),
                    _: 1
                  }),
                  createVNode(_component_v_text_field, {
                    variant: "outlined",
                    color: "primary",
                    modelValue: searchValue.value,
                    "onUpdate:modelValue": ($event) => searchValue.value = $event,
                    placeholder: "Comment",
                    "hide-details": ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_v_btn, {
                    color: "primary",
                    disabled: searchValue.value === "",
                    class: "mt-3 mt-sm-0",
                    size: "large",
                    onClick: ($event) => {
                      var _a3;
                      return onSubmit((_a3 = __props.post) == null ? void 0 : _a3.id, searchValue.value);
                    }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Comment ")
                    ]),
                    _: 1
                  }, 8, ["disabled", "onClick"])
                ])
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/user-profile/posts/PostItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PostListing",
  __ssrInlineRender: true,
  setup(__props) {
    const store = usePostsStore();
    const getPosts = computed(() => {
      return store.posts;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(ssrRenderComponent(_component_v_row, mergeProps({ class: "mt-4" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(getPosts.value, (post) => {
              _push2(ssrRenderComponent(_component_v_col, {
                cols: "12",
                key: post.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$2, { post }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$2, { post }, null, 8, ["post"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(getPosts.value, (post) => {
                return openBlock(), createBlock(_component_v_col, {
                  cols: "12",
                  key: post.id
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$2, { post }, null, 8, ["post"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/user-profile/PostListing.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_item = resolveComponent("v-card-item");
  const _component_v_textarea = resolveComponent("v-textarea");
  const _component_v_avatar = resolveComponent("v-avatar");
  const _component_PhotoIcon = resolveComponent("PhotoIcon");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_NotebookIcon = resolveComponent("NotebookIcon");
  _push(ssrRenderComponent(_component_v_card, mergeProps({
    elevation: "10",
    class: "bg-surface"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card_item, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_textarea, {
                elevation: "10",
                color: "primary",
                name: "input-7-4",
                placeholder: "Share your thoughts",
                rows: "5"
              }, null, _parent3, _scopeId2));
              _push3(`<div class="d-flex pb-2"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_avatar, {
                size: "32",
                color: "primary",
                class: "mr-2"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_PhotoIcon, { size: "16" }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_PhotoIcon, { size: "16" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_btn, {
                color: "inherit",
                type: "upload",
                variant: "plain",
                class: "opacity-1"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Photo / Video `);
                  } else {
                    return [
                      createTextVNode(" Photo / Video ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_btn, {
                color: "inherit",
                variant: "plain",
                class: "opacity-1"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_avatar, {
                      size: "32",
                      color: "secondary",
                      class: "mr-2"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_NotebookIcon, { size: "16" }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_NotebookIcon, { size: "16" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(` Article `);
                  } else {
                    return [
                      createVNode(_component_v_avatar, {
                        size: "32",
                        color: "secondary",
                        class: "mr-2"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_NotebookIcon, { size: "16" })
                        ]),
                        _: 1
                      }),
                      createTextVNode(" Article ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_btn, {
                class: "bg-primary ml-auto",
                size: "large"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Post`);
                  } else {
                    return [
                      createTextVNode("Post")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode(_component_v_textarea, {
                  elevation: "10",
                  color: "primary",
                  name: "input-7-4",
                  placeholder: "Share your thoughts",
                  rows: "5"
                }),
                createVNode("div", { class: "d-flex pb-2" }, [
                  createVNode(_component_v_avatar, {
                    size: "32",
                    color: "primary",
                    class: "mr-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_PhotoIcon, { size: "16" })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_btn, {
                    color: "inherit",
                    type: "upload",
                    variant: "plain",
                    class: "opacity-1"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Photo / Video ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_btn, {
                    color: "inherit",
                    variant: "plain",
                    class: "opacity-1"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_avatar, {
                        size: "32",
                        color: "secondary",
                        class: "mr-2"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_NotebookIcon, { size: "16" })
                        ]),
                        _: 1
                      }),
                      createTextVNode(" Article ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_btn, {
                    class: "bg-primary ml-auto",
                    size: "large"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Post")
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
              createVNode(_component_v_textarea, {
                elevation: "10",
                color: "primary",
                name: "input-7-4",
                placeholder: "Share your thoughts",
                rows: "5"
              }),
              createVNode("div", { class: "d-flex pb-2" }, [
                createVNode(_component_v_avatar, {
                  size: "32",
                  color: "primary",
                  class: "mr-2"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_PhotoIcon, { size: "16" })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_btn, {
                  color: "inherit",
                  type: "upload",
                  variant: "plain",
                  class: "opacity-1"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Photo / Video ")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_btn, {
                  color: "inherit",
                  variant: "plain",
                  class: "opacity-1"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_avatar, {
                      size: "32",
                      color: "secondary",
                      class: "mr-2"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NotebookIcon, { size: "16" })
                      ]),
                      _: 1
                    }),
                    createTextVNode(" Article ")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_btn, {
                  class: "bg-primary ml-auto",
                  size: "large"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Post")
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
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/user-profile/posts/AddPost.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AddPost = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AddPost as A,
  _sfc_main$1 as _
};
//# sourceMappingURL=AddPost-Cw6NC1C1.js.map
