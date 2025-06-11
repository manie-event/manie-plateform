import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { ref, resolveComponent, mergeProps, withCtx, createBlock, openBlock, Fragment, renderList, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttrs, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';

const remixiconUrl = "" + buildAssetsURL("remixicon.symbol.DwgCmvH1.svg");
const _sfc_main$1 = {
  __name: "EditorMenu",
  __ssrInlineRender: true,
  props: {
    icon: String,
    title: String,
    action: Function,
    isActive: Function
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="${ssrRenderClass([{ "is-active": __props.isActive ? __props.isActive() : null }, "menu-item"])}"${ssrRenderAttr("title", __props.title)}><svg class="remix"><use${ssrRenderAttr("xlink:href", `${unref(remixiconUrl)}#ri-${__props.icon}`)}></use></svg></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/plugins/editor/EditorMenu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "EditorMenubar",
  __ssrInlineRender: true,
  props: { editor: Object },
  setup(__props) {
    const props = __props;
    const items = ref([
      {
        icon: "bold",
        title: "Bold",
        action: () => props.editor.chain().focus().toggleBold().run(),
        isActive: () => props.editor.isActive("bold")
      },
      {
        icon: "italic",
        title: "Italic",
        action: () => props.editor.chain().focus().toggleItalic().run(),
        isActive: () => props.editor.isActive("italic")
      },
      {
        icon: "strikethrough",
        title: "Strike",
        action: () => props.editor.chain().focus().toggleStrike().run(),
        isActive: () => props.editor.isActive("strike")
      },
      {
        icon: "code-view",
        title: "Code",
        action: () => props.editor.chain().focus().toggleCode().run(),
        isActive: () => props.editor.isActive("code")
      },
      {
        icon: "mark-pen-line",
        title: "Highlight",
        action: () => props.editor.chain().focus().toggleHighlight().run(),
        isActive: () => props.editor.isActive("highlight")
      },
      {
        type: "divider"
      },
      {
        icon: "h-1",
        title: "Heading 1",
        action: () => props.editor.chain().focus().toggleHeading({ level: 1 }).run(),
        isActive: () => props.editor.isActive("heading", { level: 1 })
      },
      {
        icon: "h-2",
        title: "Heading 2",
        action: () => props.editor.chain().focus().toggleHeading({ level: 2 }).run(),
        isActive: () => props.editor.isActive("heading", { level: 2 })
      },
      {
        icon: "paragraph",
        title: "Paragraph",
        action: () => props.editor.chain().focus().setParagraph().run(),
        isActive: () => props.editor.isActive("paragraph")
      },
      {
        icon: "list-unordered",
        title: "Bullet List",
        action: () => props.editor.chain().focus().toggleBulletList().run(),
        isActive: () => props.editor.isActive("bulletList")
      },
      {
        icon: "list-ordered",
        title: "Ordered List",
        action: () => props.editor.chain().focus().toggleOrderedList().run(),
        isActive: () => props.editor.isActive("orderedList")
      },
      {
        icon: "list-check-2",
        title: "Task List",
        action: () => props.editor.chain().focus().toggleTaskList().run(),
        isActive: () => props.editor.isActive("taskList")
      },
      {
        icon: "code-box-line",
        title: "Code Block",
        action: () => props.editor.chain().focus().toggleCodeBlock().run(),
        isActive: () => props.editor.isActive("codeBlock")
      },
      {
        type: "divider"
      },
      {
        icon: "double-quotes-l",
        title: "Blockquote",
        action: () => props.editor.chain().focus().toggleBlockquote().run(),
        isActive: () => props.editor.isActive("blockquote")
      },
      {
        icon: "separator",
        title: "Horizontal Rule",
        action: () => props.editor.chain().focus().setHorizontalRule().run()
      },
      {
        type: "divider"
      },
      {
        icon: "text-wrap",
        title: "Hard Break",
        action: () => props.editor.chain().focus().setHardBreak().run()
      },
      {
        icon: "format-clear",
        title: "Clear Format",
        action: () => props.editor.chain().focus().clearNodes().unsetAllMarks().run()
      },
      {
        type: "divider"
      },
      {
        icon: "arrow-go-back-line",
        title: "Undo",
        action: () => props.editor.chain().focus().undo().run()
      },
      {
        icon: "arrow-go-forward-line",
        title: "Redo",
        action: () => props.editor.chain().focus().redo().run()
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_perfect_scrollbar = resolveComponent("perfect-scrollbar");
      _push(ssrRenderComponent(_component_perfect_scrollbar, mergeProps({ class: "d-flex align-center cursor-pointer menuBar" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(items.value, (item, index) => {
              _push2(`<!--[-->`);
              if (item.type === "divider") {
                _push2(`<div class="divider"${_scopeId}></div>`);
              } else {
                _push2(ssrRenderComponent(_sfc_main$1, mergeProps({
                  key: index,
                  ref_for: true
                }, item), null, _parent2, _scopeId));
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item, index) => {
                return openBlock(), createBlock(Fragment, null, [
                  item.type === "divider" ? (openBlock(), createBlock("div", {
                    class: "divider",
                    key: `divider${index}`
                  })) : (openBlock(), createBlock(_sfc_main$1, mergeProps({
                    key: index,
                    ref_for: true
                  }, item), null, 16))
                ], 64);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/plugins/editor/EditorMenubar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=EditorMenubar-BNXoNSa3.mjs.map
