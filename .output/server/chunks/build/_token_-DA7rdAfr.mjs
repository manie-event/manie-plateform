import { defineComponent, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { u as useAuthentification } from './UseAuthentification-CchpAVzc.mjs';
import './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[token]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    route.params.token;
    useAuthentification();
    ref(true);
    ref(false);
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h3${ssrRenderAttrs(_attrs)}>Verify Email view</h3>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/verify-email/[token].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_token_-DA7rdAfr.mjs.map
