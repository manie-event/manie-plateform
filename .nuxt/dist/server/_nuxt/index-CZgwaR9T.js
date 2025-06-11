import { ref, withCtx, unref, createBlock, createCommentVNode, createVNode, openBlock, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./BaseBreadcrumb-DAIjkUfv.js";
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import { _ as _sfc_main$2 } from "./UiParentCard-DhlYzLUl.js";
import { _ as _sfc_main$3 } from "./EditorMenubar-BNXoNSa3.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const editor = useEditor({
      extensions: [StarterKit],
      content: `
  <h2>Hi there,</h2>
      <p>
        this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there
        are all kind of basic text styles you’d probably expect from a text
        editor. But wait until you see the lists:
      </p>
      <ul>
        <li>That’s a bullet list with one …</li>
        <li>… or two list items.</li>
      </ul>
      <p>
        Isn’t that great? And all of that is editable. But wait, there’s more.
        Let’s try a code block:
      </p>
      <pre><code class="language-css">body {
  display: none;
}</code></pre>
      <p>
        I know, I know, this is impressive. It’s only the tip of the iceberg
        though. Give it a try and click a little bit around. Don’t forget to
        check the other examples too.
      </p>
      <blockquote>
        Wow, that’s amazing. Good work, boy! 👏
        <br />
        — Mom
      </blockquote>
      `
    });
    const page = ref({ title: "Editor" });
    const breadcrumbs = ref([
      {
        text: "Dashboard",
        disabled: false,
        href: "/"
      },
      {
        text: "Editor",
        disabled: true,
        href: "#"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: page.value.title,
        breadcrumbs: breadcrumbs.value
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { title: "Editor" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(editor)) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$3, { editor: unref(editor) }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(EditorContent), { editor: unref(editor) }, null, _parent2, _scopeId));
          } else {
            return [
              unref(editor) ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode(_sfc_main$3, { editor: unref(editor) }, null, 8, ["editor"])
              ])) : createCommentVNode("", true),
              createVNode(unref(EditorContent), { editor: unref(editor) }, null, 8, ["editor"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/forms/editor/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CZgwaR9T.js.map
