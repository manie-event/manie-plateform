import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import http, { Server as Server$1 } from 'node:http';
import https, { Server } from 'node:https';
import { EventEmitter } from 'node:events';
import { Buffer as Buffer$1 } from 'node:buffer';
import { promises, existsSync } from 'node:fs';
import { resolve as resolve$1, dirname as dirname$1, join } from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  if (value[0] === '"' && value[value.length - 1] === '"' && value.indexOf("\\") === -1) {
    return value.slice(1, -1);
  }
  const _value = value.trim();
  if (_value.length <= 9) {
    switch (_value.toLowerCase()) {
      case "true": {
        return true;
      }
      case "false": {
        return false;
      }
      case "undefined": {
        return void 0;
      }
      case "null": {
        return null;
      }
      case "nan": {
        return Number.NaN;
      }
      case "infinity": {
        return Number.POSITIVE_INFINITY;
      }
      case "-infinity": {
        return Number.NEGATIVE_INFINITY;
      }
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}

function parseQuery(parametersString = "") {
  const object = /* @__PURE__ */ Object.create(null);
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map(
      (_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`
    ).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}

const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/");
  }
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/") ? input : input + "/";
  }
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.slice(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery$1(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}
function joinRelativeURL(..._input) {
  const JOIN_SEGMENT_SPLIT_RE = /\/(?!\/)/;
  const input = _input.filter(Boolean);
  const segments = [];
  let segmentsDepth = 0;
  for (const i of input) {
    if (!i || i === "/") {
      continue;
    }
    for (const [sindex, s] of i.split(JOIN_SEGMENT_SPLIT_RE).entries()) {
      if (!s || s === ".") {
        continue;
      }
      if (s === "..") {
        if (segments.length === 1 && hasProtocol(segments[0])) {
          continue;
        }
        segments.pop();
        segmentsDepth--;
        continue;
      }
      if (sindex === 1 && segments[segments.length - 1]?.endsWith(":/")) {
        segments[segments.length - 1] += "/" + s;
        continue;
      }
      segments.push(s);
      segmentsDepth++;
    }
  }
  let url = segments.join("/");
  if (segmentsDepth >= 0) {
    if (input[0]?.startsWith("/") && !url.startsWith("/")) {
      url = "/" + url;
    } else if (input[0]?.startsWith("./") && !url.startsWith("./")) {
      url = "./" + url;
    }
  } else {
    url = "../".repeat(-1 * segmentsDepth) + url;
  }
  if (input[input.length - 1]?.endsWith("/") && !url.endsWith("/")) {
    url += "/";
  }
  return url;
}

const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  if (protocol === "file:") {
    path = path.replace(/\/(?=[A-Za-z]:)/, "");
  }
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

const NODE_TYPES = {
  NORMAL: 0,
  WILDCARD: 1,
  PLACEHOLDER: 2
};

function createRouter$1(options = {}) {
  const ctx = {
    options,
    rootNode: createRadixNode(),
    staticRoutesMap: {}
  };
  const normalizeTrailingSlash = (p) => options.strictTrailingSlash ? p : p.replace(/\/$/, "") || "/";
  if (options.routes) {
    for (const path in options.routes) {
      insert(ctx, normalizeTrailingSlash(path), options.routes[path]);
    }
  }
  return {
    ctx,
    lookup: (path) => lookup(ctx, normalizeTrailingSlash(path)),
    insert: (path, data) => insert(ctx, normalizeTrailingSlash(path), data),
    remove: (path) => remove(ctx, normalizeTrailingSlash(path))
  };
}
function lookup(ctx, path) {
  const staticPathNode = ctx.staticRoutesMap[path];
  if (staticPathNode) {
    return staticPathNode.data;
  }
  const sections = path.split("/");
  const params = {};
  let paramsFound = false;
  let wildcardNode = null;
  let node = ctx.rootNode;
  let wildCardParam = null;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (node.wildcardChildNode !== null) {
      wildcardNode = node.wildcardChildNode;
      wildCardParam = sections.slice(i).join("/");
    }
    const nextNode = node.children.get(section);
    if (nextNode === void 0) {
      if (node && node.placeholderChildren.length > 1) {
        const remaining = sections.length - i;
        node = node.placeholderChildren.find((c) => c.maxDepth === remaining) || null;
      } else {
        node = node.placeholderChildren[0] || null;
      }
      if (!node) {
        break;
      }
      if (node.paramName) {
        params[node.paramName] = section;
      }
      paramsFound = true;
    } else {
      node = nextNode;
    }
  }
  if ((node === null || node.data === null) && wildcardNode !== null) {
    node = wildcardNode;
    params[node.paramName || "_"] = wildCardParam;
    paramsFound = true;
  }
  if (!node) {
    return null;
  }
  if (paramsFound) {
    return {
      ...node.data,
      params: paramsFound ? params : void 0
    };
  }
  return node.data;
}
function insert(ctx, path, data) {
  let isStaticRoute = true;
  const sections = path.split("/");
  let node = ctx.rootNode;
  let _unnamedPlaceholderCtr = 0;
  const matchedNodes = [node];
  for (const section of sections) {
    let childNode;
    if (childNode = node.children.get(section)) {
      node = childNode;
    } else {
      const type = getNodeType(section);
      childNode = createRadixNode({ type, parent: node });
      node.children.set(section, childNode);
      if (type === NODE_TYPES.PLACEHOLDER) {
        childNode.paramName = section === "*" ? `_${_unnamedPlaceholderCtr++}` : section.slice(1);
        node.placeholderChildren.push(childNode);
        isStaticRoute = false;
      } else if (type === NODE_TYPES.WILDCARD) {
        node.wildcardChildNode = childNode;
        childNode.paramName = section.slice(
          3
          /* "**:" */
        ) || "_";
        isStaticRoute = false;
      }
      matchedNodes.push(childNode);
      node = childNode;
    }
  }
  for (const [depth, node2] of matchedNodes.entries()) {
    node2.maxDepth = Math.max(matchedNodes.length - depth, node2.maxDepth || 0);
  }
  node.data = data;
  if (isStaticRoute === true) {
    ctx.staticRoutesMap[path] = node;
  }
  return node;
}
function remove(ctx, path) {
  let success = false;
  const sections = path.split("/");
  let node = ctx.rootNode;
  for (const section of sections) {
    node = node.children.get(section);
    if (!node) {
      return success;
    }
  }
  if (node.data) {
    const lastSection = sections.at(-1) || "";
    node.data = null;
    if (Object.keys(node.children).length === 0 && node.parent) {
      node.parent.children.delete(lastSection);
      node.parent.wildcardChildNode = null;
      node.parent.placeholderChildren = [];
    }
    success = true;
  }
  return success;
}
function createRadixNode(options = {}) {
  return {
    type: options.type || NODE_TYPES.NORMAL,
    maxDepth: 0,
    parent: options.parent || null,
    children: /* @__PURE__ */ new Map(),
    data: options.data || null,
    paramName: options.paramName || null,
    wildcardChildNode: null,
    placeholderChildren: []
  };
}
function getNodeType(str) {
  if (str.startsWith("**")) {
    return NODE_TYPES.WILDCARD;
  }
  if (str[0] === ":" || str === "*") {
    return NODE_TYPES.PLACEHOLDER;
  }
  return NODE_TYPES.NORMAL;
}

function toRouteMatcher(router) {
  const table = _routerNodeToTable("", router.ctx.rootNode);
  return _createMatcher(table, router.ctx.options.strictTrailingSlash);
}
function _createMatcher(table, strictTrailingSlash) {
  return {
    ctx: { table },
    matchAll: (path) => _matchRoutes(path, table, strictTrailingSlash)
  };
}
function _createRouteTable() {
  return {
    static: /* @__PURE__ */ new Map(),
    wildcard: /* @__PURE__ */ new Map(),
    dynamic: /* @__PURE__ */ new Map()
  };
}
function _matchRoutes(path, table, strictTrailingSlash) {
  if (strictTrailingSlash !== true && path.endsWith("/")) {
    path = path.slice(0, -1) || "/";
  }
  const matches = [];
  for (const [key, value] of _sortRoutesMap(table.wildcard)) {
    if (path === key || path.startsWith(key + "/")) {
      matches.push(value);
    }
  }
  for (const [key, value] of _sortRoutesMap(table.dynamic)) {
    if (path.startsWith(key + "/")) {
      const subPath = "/" + path.slice(key.length).split("/").splice(2).join("/");
      matches.push(..._matchRoutes(subPath, value));
    }
  }
  const staticMatch = table.static.get(path);
  if (staticMatch) {
    matches.push(staticMatch);
  }
  return matches.filter(Boolean);
}
function _sortRoutesMap(m) {
  return [...m.entries()].sort((a, b) => a[0].length - b[0].length);
}
function _routerNodeToTable(initialPath, initialNode) {
  const table = _createRouteTable();
  function _addNode(path, node) {
    if (path) {
      if (node.type === NODE_TYPES.NORMAL && !(path.includes("*") || path.includes(":"))) {
        if (node.data) {
          table.static.set(path, node.data);
        }
      } else if (node.type === NODE_TYPES.WILDCARD) {
        table.wildcard.set(path.replace("/**", ""), node.data);
      } else if (node.type === NODE_TYPES.PLACEHOLDER) {
        const subTable = _routerNodeToTable("", node);
        if (node.data) {
          subTable.static.set("/", node.data);
        }
        table.dynamic.set(path.replace(/\/\*|\/:\w+/, ""), subTable);
        return;
      }
    }
    for (const [childPath, child] of node.children.entries()) {
      _addNode(`${path}/${childPath}`.replace("//", "/"), child);
    }
  }
  _addNode(initialPath, initialNode);
  return table;
}

function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

function o(n){throw new Error(`${n} is not implemented yet!`)}let i$1 = class i extends EventEmitter{__unenv__={};readableEncoding=null;readableEnded=true;readableFlowing=false;readableHighWaterMark=0;readableLength=0;readableObjectMode=false;readableAborted=false;readableDidRead=false;closed=false;errored=null;readable=false;destroyed=false;static from(e,t){return new i(t)}constructor(e){super();}_read(e){}read(e){}setEncoding(e){return this}pause(){return this}resume(){return this}isPaused(){return  true}unpipe(e){return this}unshift(e,t){}wrap(e){return this}push(e,t){return  false}_destroy(e,t){this.removeAllListeners();}destroy(e){return this.destroyed=true,this._destroy(e),this}pipe(e,t){return {}}compose(e,t){throw new Error("Method not implemented.")}[Symbol.asyncDispose](){return this.destroy(),Promise.resolve()}async*[Symbol.asyncIterator](){throw o("Readable.asyncIterator")}iterator(e){throw o("Readable.iterator")}map(e,t){throw o("Readable.map")}filter(e,t){throw o("Readable.filter")}forEach(e,t){throw o("Readable.forEach")}reduce(e,t,r){throw o("Readable.reduce")}find(e,t){throw o("Readable.find")}findIndex(e,t){throw o("Readable.findIndex")}some(e,t){throw o("Readable.some")}toArray(e){throw o("Readable.toArray")}every(e,t){throw o("Readable.every")}flatMap(e,t){throw o("Readable.flatMap")}drop(e,t){throw o("Readable.drop")}take(e,t){throw o("Readable.take")}asIndexedPairs(e){throw o("Readable.asIndexedPairs")}};let l$1 = class l extends EventEmitter{__unenv__={};writable=true;writableEnded=false;writableFinished=false;writableHighWaterMark=0;writableLength=0;writableObjectMode=false;writableCorked=0;closed=false;errored=null;writableNeedDrain=false;writableAborted=false;destroyed=false;_data;_encoding="utf8";constructor(e){super();}pipe(e,t){return {}}_write(e,t,r){if(this.writableEnded){r&&r();return}if(this._data===void 0)this._data=e;else {const s=typeof this._data=="string"?Buffer$1.from(this._data,this._encoding||t||"utf8"):this._data,a=typeof e=="string"?Buffer$1.from(e,t||this._encoding||"utf8"):e;this._data=Buffer$1.concat([s,a]);}this._encoding=t,r&&r();}_writev(e,t){}_destroy(e,t){}_final(e){}write(e,t,r){const s=typeof t=="string"?this._encoding:"utf8",a=typeof t=="function"?t:typeof r=="function"?r:void 0;return this._write(e,s,a),true}setDefaultEncoding(e){return this}end(e,t,r){const s=typeof e=="function"?e:typeof t=="function"?t:typeof r=="function"?r:void 0;if(this.writableEnded)return s&&s(),this;const a=e===s?void 0:e;if(a){const u=t===s?void 0:t;this.write(a,u,s);}return this.writableEnded=true,this.writableFinished=true,this.emit("close"),this.emit("finish"),this}cork(){}uncork(){}destroy(e){return this.destroyed=true,delete this._data,this.removeAllListeners(),this}compose(e,t){throw new Error("Method not implemented.")}};const c=class{allowHalfOpen=true;_destroy;constructor(e=new i$1,t=new l$1){Object.assign(this,e),Object.assign(this,t),this._destroy=g(e._destroy,t._destroy);}};function _(){return Object.assign(c.prototype,i$1.prototype),Object.assign(c.prototype,l$1.prototype),c}function g(...n){return function(...e){for(const t of n)t(...e);}}const m=_();class A extends m{__unenv__={};bufferSize=0;bytesRead=0;bytesWritten=0;connecting=false;destroyed=false;pending=false;localAddress="";localPort=0;remoteAddress="";remoteFamily="";remotePort=0;autoSelectFamilyAttemptedAddresses=[];readyState="readOnly";constructor(e){super();}write(e,t,r){return  false}connect(e,t,r){return this}end(e,t,r){return this}setEncoding(e){return this}pause(){return this}resume(){return this}setTimeout(e,t){return this}setNoDelay(e){return this}setKeepAlive(e,t){return this}address(){return {}}unref(){return this}ref(){return this}destroySoon(){this.destroy();}resetAndDestroy(){const e=new Error("ERR_SOCKET_CLOSED");return e.code="ERR_SOCKET_CLOSED",this.destroy(e),this}}class y extends i$1{aborted=false;httpVersion="1.1";httpVersionMajor=1;httpVersionMinor=1;complete=true;connection;socket;headers={};trailers={};method="GET";url="/";statusCode=200;statusMessage="";closed=false;errored=null;readable=false;constructor(e){super(),this.socket=this.connection=e||new A;}get rawHeaders(){const e=this.headers,t=[];for(const r in e)if(Array.isArray(e[r]))for(const s of e[r])t.push(r,s);else t.push(r,e[r]);return t}get rawTrailers(){return []}setTimeout(e,t){return this}get headersDistinct(){return p(this.headers)}get trailersDistinct(){return p(this.trailers)}}function p(n){const e={};for(const[t,r]of Object.entries(n))t&&(e[t]=(Array.isArray(r)?r:[r]).filter(Boolean));return e}class w extends l$1{statusCode=200;statusMessage="";upgrading=false;chunkedEncoding=false;shouldKeepAlive=false;useChunkedEncodingByDefault=false;sendDate=false;finished=false;headersSent=false;strictContentLength=false;connection=null;socket=null;req;_headers={};constructor(e){super(),this.req=e;}assignSocket(e){e._httpMessage=this,this.socket=e,this.connection=e,this.emit("socket",e),this._flush();}_flush(){this.flushHeaders();}detachSocket(e){}writeContinue(e){}writeHead(e,t,r){e&&(this.statusCode=e),typeof t=="string"&&(this.statusMessage=t,t=void 0);const s=r||t;if(s&&!Array.isArray(s))for(const a in s)this.setHeader(a,s[a]);return this.headersSent=true,this}writeProcessing(){}setTimeout(e,t){return this}appendHeader(e,t){e=e.toLowerCase();const r=this._headers[e],s=[...Array.isArray(r)?r:[r],...Array.isArray(t)?t:[t]].filter(Boolean);return this._headers[e]=s.length>1?s:s[0],this}setHeader(e,t){return this._headers[e.toLowerCase()]=t,this}setHeaders(e){for(const[t,r]of Object.entries(e))this.setHeader(t,r);return this}getHeader(e){return this._headers[e.toLowerCase()]}getHeaders(){return this._headers}getHeaderNames(){return Object.keys(this._headers)}hasHeader(e){return e.toLowerCase()in this._headers}removeHeader(e){delete this._headers[e.toLowerCase()];}addTrailers(e){}flushHeaders(){}writeEarlyHints(e,t){typeof t=="function"&&t();}}const E=(()=>{const n=function(){};return n.prototype=Object.create(null),n})();function R(n={}){const e=new E,t=Array.isArray(n)||H(n)?n:Object.entries(n);for(const[r,s]of t)if(s){if(e[r]===void 0){e[r]=s;continue}e[r]=[...Array.isArray(e[r])?e[r]:[e[r]],...Array.isArray(s)?s:[s]];}return e}function H(n){return typeof n?.entries=="function"}function v(n={}){if(n instanceof Headers)return n;const e=new Headers;for(const[t,r]of Object.entries(n))if(r!==void 0){if(Array.isArray(r)){for(const s of r)e.append(t,String(s));continue}e.set(t,String(r));}return e}const S=new Set([101,204,205,304]);async function b(n,e){const t=new y,r=new w(t);t.url=e.url?.toString()||"/";let s;if(!t.url.startsWith("/")){const d=new URL(t.url);s=d.host,t.url=d.pathname+d.search+d.hash;}t.method=e.method||"GET",t.headers=R(e.headers||{}),t.headers.host||(t.headers.host=e.host||s||"localhost"),t.connection.encrypted=t.connection.encrypted||e.protocol==="https",t.body=e.body||null,t.__unenv__=e.context,await n(t,r);let a=r._data;(S.has(r.statusCode)||t.method.toUpperCase()==="HEAD")&&(a=null,delete r._headers["content-length"]);const u={status:r.statusCode,statusText:r.statusMessage,headers:r._headers,body:a};return t.destroy(),r.destroy(),u}async function C(n,e,t={}){try{const r=await b(n,{url:e,...t});return new Response(r.body,{status:r.status,statusText:r.statusText,headers:v(r.headers)})}catch(r){return new Response(r.toString(),{status:Number.parseInt(r.statusCode||r.code)||500,statusText:r.statusText})}}

function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

class H3Error extends Error {
  static __h3_error__ = true;
  statusCode = 500;
  fatal = false;
  unhandled = false;
  statusMessage;
  data;
  cause;
  constructor(message, opts = {}) {
    super(message, opts);
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== void 0) {
      obj.data = this.data;
    }
    return obj;
  }
}
function createError$1(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== void 0) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== void 0) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function sendError(event, error, debug) {
  if (event.handled) {
    return;
  }
  const h3Error = isError(error) ? error : createError$1(error);
  const responseBody = {
    statusCode: h3Error.statusCode,
    statusMessage: h3Error.statusMessage,
    stack: [],
    data: h3Error.data
  };
  if (debug) {
    responseBody.stack = (h3Error.stack || "").split("\n").map((l) => l.trim());
  }
  if (event.handled) {
    return;
  }
  const _code = Number.parseInt(h3Error.statusCode);
  setResponseStatus(event, _code, h3Error.statusMessage);
  event.node.res.setHeader("content-type", MIMES.json);
  event.node.res.end(JSON.stringify(responseBody, void 0, 2));
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}

function getQuery(event) {
  return getQuery$1(event.path || "");
}
function isMethod(event, expected, allowHead) {
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected)) {
    throw createError$1({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHeaders(event) {
  const _headers = {};
  for (const key in event.node.req.headers) {
    const val = event.node.req.headers[key];
    _headers[key] = Array.isArray(val) ? val.filter(Boolean).join(", ") : val;
  }
  return _headers;
}
function getRequestHeader(event, name) {
  const headers = getRequestHeaders(event);
  const value = headers[name.toLowerCase()];
  return value;
}
function getRequestHost(event, opts = {}) {
  if (opts.xForwardedHost) {
    const _header = event.node.req.headers["x-forwarded-host"];
    const xForwardedHost = (_header || "").split(",").shift()?.trim();
    if (xForwardedHost) {
      return xForwardedHost;
    }
  }
  return event.node.req.headers.host || "localhost";
}
function getRequestProtocol(event, opts = {}) {
  if (opts.xForwardedProto !== false && event.node.req.headers["x-forwarded-proto"] === "https") {
    return "https";
  }
  return event.node.req.connection?.encrypted ? "https" : "http";
}
function getRequestURL(event, opts = {}) {
  const host = getRequestHost(event, opts);
  const protocol = getRequestProtocol(event, opts);
  const path = (event.node.req.originalUrl || event.path).replace(
    /^[/\\]+/g,
    "/"
  );
  return new URL(path, `${protocol}://${host}`);
}

const RawBodySymbol = Symbol.for("h3RawBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      if (_resolved instanceof URLSearchParams) {
        return Buffer.from(_resolved.toString());
      }
      if (_resolved instanceof FormData) {
        return new Response(_resolved).bytes().then((uint8arr) => Buffer.from(uint8arr));
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "") && !String(event.node.req.headers["transfer-encoding"] ?? "").split(",").map((e) => e.trim()).filter(Boolean).includes("chunked")) {
    return Promise.resolve(void 0);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  const bodyStream = event.web?.request?.body || event._requestBody;
  if (bodyStream) {
    return bodyStream;
  }
  const _hasRawBody = RawBodySymbol in event.node.req || "rawBody" in event.node.req || "body" in event.node.req || "__unenv__" in event.node.req;
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody(event, false);
        if (_rawBody) {
          controller.enqueue(_rawBody);
        }
        controller.close();
      }
    });
  }
  return new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}

function handleCacheHeaders(event, opts) {
  const cacheControls = ["public", ...opts.cacheControls || []];
  let cacheMatched = false;
  if (opts.maxAge !== void 0) {
    cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`);
  }
  if (opts.modifiedTime) {
    const modifiedTime = new Date(opts.modifiedTime);
    const ifModifiedSince = event.node.req.headers["if-modified-since"];
    event.node.res.setHeader("last-modified", modifiedTime.toUTCString());
    if (ifModifiedSince && new Date(ifModifiedSince) >= modifiedTime) {
      cacheMatched = true;
    }
  }
  if (opts.etag) {
    event.node.res.setHeader("etag", opts.etag);
    const ifNonMatch = event.node.req.headers["if-none-match"];
    if (ifNonMatch === opts.etag) {
      cacheMatched = true;
    }
  }
  event.node.res.setHeader("cache-control", cacheControls.join(", "));
  if (cacheMatched) {
    event.node.res.statusCode = 304;
    if (!event.handled) {
      event.node.res.end();
    }
    return true;
  }
  return false;
}

const MIMES = {
  html: "text/html",
  json: "application/json"
};

const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start));
    }
  }
  return cookiesStrings;
}

const defer = typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      if (!event.handled) {
        event.node.res.end(data);
      }
      resolve();
    });
  });
}
function sendNoContent(event, code) {
  if (event.handled) {
    return;
  }
  if (!code && event.node.res.statusCode !== 200) {
    code = event.node.res.statusCode;
  }
  const _code = sanitizeStatusCode(code, 204);
  if (_code === 204) {
    event.node.res.removeHeader("content-length");
  }
  event.node.res.writeHead(_code);
  event.node.res.end();
}
function setResponseStatus(event, code, text) {
  if (code) {
    event.node.res.statusCode = sanitizeStatusCode(
      code,
      event.node.res.statusCode
    );
  }
  if (text) {
    event.node.res.statusMessage = sanitizeStatusMessage(text);
  }
}
function getResponseStatus(event) {
  return event.node.res.statusCode;
}
function getResponseStatusText(event) {
  return event.node.res.statusMessage;
}
function defaultContentType(event, type) {
  if (type && event.node.res.statusCode !== 304 && !event.node.res.getHeader("content-type")) {
    event.node.res.setHeader("content-type", type);
  }
}
function sendRedirect(event, location, code = 302) {
  event.node.res.statusCode = sanitizeStatusCode(
    code,
    event.node.res.statusCode
  );
  event.node.res.setHeader("location", location);
  const encodedLoc = location.replace(/"/g, "%22");
  const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`;
  return send(event, html, MIMES.html);
}
function getResponseHeader(event, name) {
  return event.node.res.getHeader(name);
}
function setResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) {
    event.node.res.setHeader(
      name,
      value
    );
  }
}
const setHeaders = setResponseHeaders;
function setResponseHeader(event, name, value) {
  event.node.res.setHeader(name, value);
}
function appendResponseHeader(event, name, value) {
  let current = event.node.res.getHeader(name);
  if (!current) {
    event.node.res.setHeader(name, value);
    return;
  }
  if (!Array.isArray(current)) {
    current = [current.toString()];
  }
  event.node.res.setHeader(name, [...current, value]);
}
function removeResponseHeader(event, name) {
  return event.node.res.removeHeader(name);
}
function isStream(data) {
  if (!data || typeof data !== "object") {
    return false;
  }
  if (typeof data.pipe === "function") {
    if (typeof data._read === "function") {
      return true;
    }
    if (typeof data.abort === "function") {
      return true;
    }
  }
  if (typeof data.pipeTo === "function") {
    return true;
  }
  return false;
}
function isWebResponse(data) {
  return typeof Response !== "undefined" && data instanceof Response;
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}

const PayloadMethods = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
const ignoredHeaders = /* @__PURE__ */ new Set([
  "transfer-encoding",
  "accept-encoding",
  "connection",
  "keep-alive",
  "upgrade",
  "expect",
  "host",
  "accept"
]);
async function proxyRequest(event, target, opts = {}) {
  let body;
  let duplex;
  if (PayloadMethods.has(event.method)) {
    if (opts.streamRequest) {
      body = getRequestWebStream(event);
      duplex = "half";
    } else {
      body = await readRawBody(event, false).catch(() => void 0);
    }
  }
  const method = opts.fetchOptions?.method || event.method;
  const fetchHeaders = mergeHeaders$1(
    getProxyRequestHeaders(event, { host: target.startsWith("/") }),
    opts.fetchOptions?.headers,
    opts.headers
  );
  return sendProxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body,
      duplex,
      ...opts.fetchOptions,
      headers: fetchHeaders
    }
  });
}
async function sendProxy(event, target, opts = {}) {
  let response;
  try {
    response = await _getFetch(opts.fetch)(target, {
      headers: opts.headers,
      ignoreResponseError: true,
      // make $ofetch.raw transparent
      ...opts.fetchOptions
    });
  } catch (error) {
    throw createError$1({
      status: 502,
      statusMessage: "Bad Gateway",
      cause: error
    });
  }
  event.node.res.statusCode = sanitizeStatusCode(
    response.status,
    event.node.res.statusCode
  );
  event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  const cookies = [];
  for (const [key, value] of response.headers.entries()) {
    if (key === "content-encoding") {
      continue;
    }
    if (key === "content-length") {
      continue;
    }
    if (key === "set-cookie") {
      cookies.push(...splitCookiesString(value));
      continue;
    }
    event.node.res.setHeader(key, value);
  }
  if (cookies.length > 0) {
    event.node.res.setHeader(
      "set-cookie",
      cookies.map((cookie) => {
        if (opts.cookieDomainRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookieDomainRewrite,
            "domain"
          );
        }
        if (opts.cookiePathRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookiePathRewrite,
            "path"
          );
        }
        return cookie;
      })
    );
  }
  if (opts.onResponse) {
    await opts.onResponse(event, response);
  }
  if (response._data !== void 0) {
    return response._data;
  }
  if (event.handled) {
    return;
  }
  if (opts.sendStream === false) {
    const data = new Uint8Array(await response.arrayBuffer());
    return event.node.res.end(data);
  }
  if (response.body) {
    for await (const chunk of response.body) {
      event.node.res.write(chunk);
    }
  }
  return event.node.res.end();
}
function getProxyRequestHeaders(event, opts) {
  const headers = /* @__PURE__ */ Object.create(null);
  const reqHeaders = getRequestHeaders(event);
  for (const name in reqHeaders) {
    if (!ignoredHeaders.has(name) || name === "host" && opts?.host) {
      headers[name] = reqHeaders[name];
    }
  }
  return headers;
}
function fetchWithEvent(event, req, init, options) {
  return _getFetch(options?.fetch)(req, {
    ...init,
    context: init?.context || event.context,
    headers: {
      ...getProxyRequestHeaders(event, {
        host: typeof req === "string" && req.startsWith("/")
      }),
      ...init?.headers
    }
  });
}
function _getFetch(_fetch) {
  if (_fetch) {
    return _fetch;
  }
  if (globalThis.fetch) {
    return globalThis.fetch;
  }
  throw new Error(
    "fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js."
  );
}
function rewriteCookieProperty(header, map, property) {
  const _map = typeof map === "string" ? { "*": map } : map;
  return header.replace(
    new RegExp(`(;\\s*${property}=)([^;]+)`, "gi"),
    (match, prefix, previousValue) => {
      let newValue;
      if (previousValue in _map) {
        newValue = _map[previousValue];
      } else if ("*" in _map) {
        newValue = _map["*"];
      } else {
        return match;
      }
      return newValue ? prefix + newValue : "";
    }
  );
}
function mergeHeaders$1(defaults, ...inputs) {
  const _inputs = inputs.filter(Boolean);
  if (_inputs.length === 0) {
    return defaults;
  }
  const merged = new Headers(defaults);
  for (const input of _inputs) {
    const entries = Array.isArray(input) ? input : typeof input.entries === "function" ? input.entries() : Object.entries(input);
    for (const [key, value] of entries) {
      if (value !== void 0) {
        merged.set(key, value);
      }
    }
  }
  return merged;
}

class H3Event {
  "__is_event__" = true;
  // Context
  node;
  // Node
  web;
  // Web
  context = {};
  // Shared
  // Request
  _method;
  _path;
  _headers;
  _requestBody;
  // Response
  _handled = false;
  // Hooks
  _onBeforeResponseCalled;
  _onAfterResponseCalled;
  constructor(req, res) {
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. */
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. */
  get res() {
    return this.node.res;
  }
}
function isEvent(input) {
  return hasProp(input, "__is_event__");
}
function createEvent(req, res) {
  return new H3Event(req, res);
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler(handler) {
  if (typeof handler === "function") {
    handler.__is_handler__ = true;
    return handler;
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  _handler.__is_handler__ = true;
  _handler.__resolve__ = handler.handler.__resolve__;
  _handler.__websocket__ = handler.websocket;
  return _handler;
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : void 0;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventHandler = defineEventHandler;
function isEventHandler(input) {
  return hasProp(input, "__is_handler__");
}
function toEventHandler(input, _, _route) {
  if (!isEventHandler(input)) {
    console.warn(
      "[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.",
      _route && _route !== "/" ? `
     Route: ${_route}` : "",
      `
     Handler: ${input}`
    );
  }
  return input;
}
function defineLazyEventHandler(factory) {
  let _promise;
  let _resolved;
  const resolveHandler = () => {
    if (_resolved) {
      return Promise.resolve(_resolved);
    }
    if (!_promise) {
      _promise = Promise.resolve(factory()).then((r) => {
        const handler2 = r.default || r;
        if (typeof handler2 !== "function") {
          throw new TypeError(
            "Invalid lazy handler result. It should be a function:",
            handler2
          );
        }
        _resolved = { handler: toEventHandler(r.default || r) };
        return _resolved;
      });
    }
    return _promise;
  };
  const handler = eventHandler((event) => {
    if (_resolved) {
      return _resolved.handler(event);
    }
    return resolveHandler().then((r) => r.handler(event));
  });
  handler.__resolve__ = resolveHandler;
  return handler;
}
const lazyEventHandler = defineLazyEventHandler;

function createApp(options = {}) {
  const stack = [];
  const handler = createAppEventHandler(stack, options);
  const resolve = createResolver(stack);
  handler.__resolve__ = resolve;
  const getWebsocket = cachedFn(() => websocketOptions(resolve, options));
  const app = {
    // @ts-expect-error
    use: (arg1, arg2, arg3) => use(app, arg1, arg2, arg3),
    resolve,
    handler,
    stack,
    options,
    get websocket() {
      return getWebsocket();
    }
  };
  return app;
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    for (const i of arg1) {
      use(app, i, arg2, arg3);
    }
  } else if (Array.isArray(arg2)) {
    for (const i of arg2) {
      use(app, arg1, i, arg3);
    }
  } else if (typeof arg1 === "string") {
    app.stack.push(
      normalizeLayer({ ...arg3, route: arg1, handler: arg2 })
    );
  } else if (typeof arg1 === "function") {
    app.stack.push(normalizeLayer({ ...arg2, handler: arg1 }));
  } else {
    app.stack.push(normalizeLayer({ ...arg1 }));
  }
  return app;
}
function createAppEventHandler(stack, options) {
  const spacing = options.debug ? 2 : void 0;
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _reqPath = event._path || event.node.req.url || "/";
    let _layerPath;
    if (options.onRequest) {
      await options.onRequest(event);
    }
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!_reqPath.startsWith(layer.route)) {
          continue;
        }
        _layerPath = _reqPath.slice(layer.route.length) || "/";
      } else {
        _layerPath = _reqPath;
      }
      if (layer.match && !layer.match(_layerPath, event)) {
        continue;
      }
      event._path = _layerPath;
      event.node.req.url = _layerPath;
      const val = await layer.handler(event);
      const _body = val === void 0 ? void 0 : await val;
      if (_body !== void 0) {
        const _response = { body: _body };
        if (options.onBeforeResponse) {
          event._onBeforeResponseCalled = true;
          await options.onBeforeResponse(event, _response);
        }
        await handleHandlerResponse(event, _response.body, spacing);
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, _response);
        }
        return;
      }
      if (event.handled) {
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, void 0);
        }
        return;
      }
    }
    if (!event.handled) {
      throw createError$1({
        statusCode: 404,
        statusMessage: `Cannot find any path matching ${event.path || "/"}.`
      });
    }
    if (options.onAfterResponse) {
      event._onAfterResponseCalled = true;
      await options.onAfterResponse(event, void 0);
    }
  });
}
function createResolver(stack) {
  return async (path) => {
    let _layerPath;
    for (const layer of stack) {
      if (layer.route === "/" && !layer.handler.__resolve__) {
        continue;
      }
      if (!path.startsWith(layer.route)) {
        continue;
      }
      _layerPath = path.slice(layer.route.length) || "/";
      if (layer.match && !layer.match(_layerPath, void 0)) {
        continue;
      }
      let res = { route: layer.route, handler: layer.handler };
      if (res.handler.__resolve__) {
        const _res = await res.handler.__resolve__(_layerPath);
        if (!_res) {
          continue;
        }
        res = {
          ...res,
          ..._res,
          route: joinURL(res.route || "/", _res.route || "/")
        };
      }
      return res;
    }
  };
}
function normalizeLayer(input) {
  let handler = input.handler;
  if (handler.handler) {
    handler = handler.handler;
  }
  if (input.lazy) {
    handler = lazyEventHandler(handler);
  } else if (!isEventHandler(handler)) {
    handler = toEventHandler(handler, void 0, input.route);
  }
  return {
    route: withoutTrailingSlash(input.route),
    match: input.match,
    handler
  };
}
function handleHandlerResponse(event, val, jsonSpace) {
  if (val === null) {
    return sendNoContent(event);
  }
  if (val) {
    if (isWebResponse(val)) {
      return sendWebResponse(event, val);
    }
    if (isStream(val)) {
      return sendStream(event, val);
    }
    if (val.buffer) {
      return send(event, val);
    }
    if (val.arrayBuffer && typeof val.arrayBuffer === "function") {
      return val.arrayBuffer().then((arrayBuffer) => {
        return send(event, Buffer.from(arrayBuffer), val.type);
      });
    }
    if (val instanceof Error) {
      throw createError$1(val);
    }
    if (typeof val.end === "function") {
      return true;
    }
  }
  const valType = typeof val;
  if (valType === "string") {
    return send(event, val, MIMES.html);
  }
  if (valType === "object" || valType === "boolean" || valType === "number") {
    return send(event, JSON.stringify(val, void 0, jsonSpace), MIMES.json);
  }
  if (valType === "bigint") {
    return send(event, val.toString(), MIMES.json);
  }
  throw createError$1({
    statusCode: 500,
    statusMessage: `[h3] Cannot send ${valType} as response.`
  });
}
function cachedFn(fn) {
  let cache;
  return () => {
    if (!cache) {
      cache = fn();
    }
    return cache;
  };
}
function websocketOptions(evResolver, appOptions) {
  return {
    ...appOptions.websocket,
    async resolve(info) {
      const url = info.request?.url || info.url || "/";
      const { pathname } = typeof url === "string" ? parseURL(url) : url;
      const resolved = await evResolver(pathname);
      return resolved?.handler?.__websocket__ || {};
    }
  };
}

const RouterMethods = [
  "connect",
  "delete",
  "get",
  "head",
  "options",
  "post",
  "put",
  "trace",
  "patch"
];
function createRouter(opts = {}) {
  const _router = createRouter$1({});
  const routes = {};
  let _matcher;
  const router = {};
  const addRoute = (path, handler, method) => {
    let route = routes[path];
    if (!route) {
      routes[path] = route = { path, handlers: {} };
      _router.insert(path, route);
    }
    if (Array.isArray(method)) {
      for (const m of method) {
        addRoute(path, handler, m);
      }
    } else {
      route.handlers[method] = toEventHandler(handler, void 0, path);
    }
    return router;
  };
  router.use = router.add = (path, handler, method) => addRoute(path, handler, method || "all");
  for (const method of RouterMethods) {
    router[method] = (path, handle) => router.add(path, handle, method);
  }
  const matchHandler = (path = "/", method = "get") => {
    const qIndex = path.indexOf("?");
    if (qIndex !== -1) {
      path = path.slice(0, Math.max(0, qIndex));
    }
    const matched = _router.lookup(path);
    if (!matched || !matched.handlers) {
      return {
        error: createError$1({
          statusCode: 404,
          name: "Not Found",
          statusMessage: `Cannot find any route matching ${path || "/"}.`
        })
      };
    }
    let handler = matched.handlers[method] || matched.handlers.all;
    if (!handler) {
      if (!_matcher) {
        _matcher = toRouteMatcher(_router);
      }
      const _matches = _matcher.matchAll(path).reverse();
      for (const _match of _matches) {
        if (_match.handlers[method]) {
          handler = _match.handlers[method];
          matched.handlers[method] = matched.handlers[method] || handler;
          break;
        }
        if (_match.handlers.all) {
          handler = _match.handlers.all;
          matched.handlers.all = matched.handlers.all || handler;
          break;
        }
      }
    }
    if (!handler) {
      return {
        error: createError$1({
          statusCode: 405,
          name: "Method Not Allowed",
          statusMessage: `Method ${method} is not allowed on this route.`
        })
      };
    }
    return { matched, handler };
  };
  const isPreemptive = opts.preemptive || opts.preemtive;
  router.handler = eventHandler((event) => {
    const match = matchHandler(
      event.path,
      event.method.toLowerCase()
    );
    if ("error" in match) {
      if (isPreemptive) {
        throw match.error;
      } else {
        return;
      }
    }
    event.context.matchedRoute = match.matched;
    const params = match.matched.params || {};
    event.context.params = params;
    return Promise.resolve(match.handler(event)).then((res) => {
      if (res === void 0 && isPreemptive) {
        return null;
      }
      return res;
    });
  });
  router.handler.__resolve__ = async (path) => {
    path = withLeadingSlash(path);
    const match = matchHandler(path);
    if ("error" in match) {
      return;
    }
    let res = {
      route: match.matched.path,
      handler: match.handler
    };
    if (match.handler.__resolve__) {
      const _res = await match.handler.__resolve__(path);
      if (!_res) {
        return;
      }
      res = { ...res, ..._res };
    }
    return res;
  };
  return router;
}
function toNodeListener(app) {
  const toNodeHandle = async function(req, res) {
    const event = createEvent(req, res);
    try {
      await app.handler(event);
    } catch (_error) {
      const error = createError$1(_error);
      if (!isError(_error)) {
        error.unhandled = true;
      }
      setResponseStatus(event, error.statusCode, error.statusMessage);
      if (app.options.onError) {
        await app.options.onError(error, event);
      }
      if (event.handled) {
        return;
      }
      if (error.unhandled || error.fatal) {
        console.error("[h3]", error.fatal ? "[fatal]" : "[unhandled]", error);
      }
      if (app.options.onBeforeResponse && !event._onBeforeResponseCalled) {
        await app.options.onBeforeResponse(event, { body: error });
      }
      await sendError(event, error, !!app.options.debug);
      if (app.options.onAfterResponse && !event._onAfterResponseCalled) {
        await app.options.onAfterResponse(event, { body: error });
      }
    }
  };
  return toNodeHandle;
}

function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
const defaultTask = { run: (function_) => function_() };
const _createTask = () => defaultTask;
const createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  );
}
function parallelTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0);
  }
}

class Hookable {
  constructor() {
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) {
        message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      }
      if (!this._deprecatedMessages) {
        this._deprecatedMessages = /* @__PURE__ */ new Set();
      }
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) {
      try {
        Object.defineProperty(function_, "name", {
          get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = (...arguments_) => {
      if (typeof _unreg === "function") {
        _unreg();
      }
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      const index = this._hooks[name].indexOf(function_);
      if (index !== -1) {
        this._hooks[name].splice(index, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    delete this._hooks[name];
    for (const hook of _hooks) {
      this.hook(name, hook);
    }
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
    for (const name in deprecatedHooks) {
      this.deprecateHook(name, deprecatedHooks[name]);
    }
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(
      (key) => this.hook(key, hooks[key])
    );
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
        unreg();
      }
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  removeAllHooks() {
    for (const key in this._hooks) {
      delete this._hooks[key];
    }
  }
  callHook(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(serialTaskCaller, name, ...arguments_);
  }
  callHookParallel(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(parallelTaskCaller, name, ...arguments_);
  }
  callHookWith(caller, name, ...arguments_) {
    const event = this._before || this._after ? { name, args: arguments_, context: {} } : void 0;
    if (this._before) {
      callEachWith(this._before, event);
    }
    const result = caller(
      name in this._hooks ? [...this._hooks[name]] : [],
      arguments_
    );
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
          callEachWith(this._after, event);
        }
      });
    }
    if (this._after && event) {
      callEachWith(this._after, event);
    }
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) {
          this._before.splice(index, 1);
        }
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) {
          this._after.splice(index, 1);
        }
      }
    };
  }
}
function createHooks() {
  return new Hookable();
}

const s$1=globalThis.Headers,i=globalThis.AbortController,l=globalThis.fetch||(()=>{throw new Error("[node-fetch-native] Failed to fetch: `globalThis.fetch` is not available!")});

class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if (opts?.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  const errorMessage = ctx.error?.message || ctx.error?.toString() || "";
  const method = ctx.request?.method || ctx.options?.method || "GET";
  const url = ctx.request?.url || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}

const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t = typeof value;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function resolveFetchOptions(request, input, defaults, Headers) {
  const headers = mergeHeaders(
    input?.headers ?? request?.headers,
    defaults?.headers,
    Headers
  );
  let query;
  if (defaults?.query || defaults?.params || input?.params || input?.query) {
    query = {
      ...defaults?.params,
      ...defaults?.query,
      ...input?.params,
      ...input?.query
    };
  }
  return {
    ...defaults,
    ...input,
    query,
    params: query,
    headers
  };
}
function mergeHeaders(input, defaults, Headers) {
  if (!defaults) {
    return new Headers(input);
  }
  const headers = new Headers(defaults);
  if (input) {
    for (const [key, value] of Symbol.iterator in input || Array.isArray(input) ? input : new Headers(input)) {
      headers.set(key, value);
    }
  }
  return headers;
}
async function callHooks(context, hooks) {
  if (hooks) {
    if (Array.isArray(hooks)) {
      for (const hook of hooks) {
        await hook(context);
      }
    } else {
      await hooks(context);
    }
  }
}

const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early (Experimental)
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  // Gateway Timeout
]);
const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch(globalOptions = {}) {
  const {
    fetch = globalThis.fetch,
    Headers = globalThis.Headers,
    AbortController = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = typeof context.options.retryDelay === "function" ? context.options.retryDelay(context) : context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      options: resolveFetchOptions(
        _request,
        _options,
        globalOptions.defaults,
        Headers
      ),
      response: void 0,
      error: void 0
    };
    if (context.options.method) {
      context.options.method = context.options.method.toUpperCase();
    }
    if (context.options.onRequest) {
      await callHooks(context, context.options.onRequest);
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query) {
        context.request = withQuery(context.request, context.options.query);
        delete context.options.query;
      }
      if ("query" in context.options) {
        delete context.options.query;
      }
      if ("params" in context.options) {
        delete context.options.params;
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        context.options.body = typeof context.options.body === "string" ? context.options.body : JSON.stringify(context.options.body);
        context.options.headers = new Headers(context.options.headers || {});
        if (!context.options.headers.has("content-type")) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    let abortTimeout;
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController();
      abortTimeout = setTimeout(() => {
        const error = new Error(
          "[TimeoutError]: The operation was aborted due to timeout"
        );
        error.name = "TimeoutError";
        error.code = 23;
        controller.abort(error);
      }, context.options.timeout);
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await callHooks(
          context,
          context.options.onRequestError
        );
      }
      return await onError(context);
    } finally {
      if (abortTimeout) {
        clearTimeout(abortTimeout);
      }
    }
    const hasBody = (context.response.body || // https://github.com/unjs/ofetch/issues/324
    // https://github.com/unjs/ofetch/issues/294
    // https://github.com/JakeChampion/fetch/issues/1454
    context.response._bodyInit) && !nullBodyResponses.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body || context.response._bodyInit;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await callHooks(
        context,
        context.options.onResponse
      );
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await callHooks(
          context,
          context.options.onResponseError
        );
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch = async function $fetch2(request, options) {
    const r = await $fetchRaw(request, options);
    return r._data;
  };
  $fetch.raw = $fetchRaw;
  $fetch.native = (...args) => fetch(...args);
  $fetch.create = (defaultOptions = {}, customGlobalOptions = {}) => createFetch({
    ...globalOptions,
    ...customGlobalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...customGlobalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch;
}

function createNodeFetch() {
  const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
  if (!useKeepAlive) {
    return l;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new http.Agent(agentOptions);
  const httpsAgent = new https.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return l(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch = globalThis.fetch ? (...args) => globalThis.fetch(...args) : createNodeFetch();
const Headers$1 = globalThis.Headers || s$1;
const AbortController = globalThis.AbortController || i;
createFetch({ fetch, Headers: Headers$1, AbortController });

function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  return BASE64_PREFIX + base64Encode(value);
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  return base64Decode(value.slice(BASE64_PREFIX.length));
}
function base64Decode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input, "base64");
  }
  return Uint8Array.from(
    globalThis.atob(input),
    (c) => c.codePointAt(0)
  );
}
function base64Encode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input).toString("base64");
  }
  return globalThis.btoa(String.fromCodePoint(...input));
}

const storageKeyProperties = [
  "has",
  "hasItem",
  "get",
  "getItem",
  "getItemRaw",
  "set",
  "setItem",
  "setItemRaw",
  "del",
  "remove",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
];
function prefixStorage(storage, base) {
  base = normalizeBaseKey(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = "", ...args) => (
      // @ts-ignore
      storage[property](base + key, ...args)
    );
  }
  nsStorage.getKeys = (key = "", ...arguments_) => storage.getKeys(base + key, ...arguments_).then((keys) => keys.map((key2) => key2.slice(base.length)));
  nsStorage.getItems = async (items, commonOptions) => {
    const prefixedItems = items.map(
      (item) => typeof item === "string" ? base + item : { ...item, key: base + item.key }
    );
    const results = await storage.getItems(prefixedItems, commonOptions);
    return results.map((entry) => ({
      key: entry.key.slice(base.length),
      value: entry.value
    }));
  };
  nsStorage.setItems = async (items, commonOptions) => {
    const prefixedItems = items.map((item) => ({
      key: base + item.key,
      value: item.value,
      options: item.options
    }));
    return storage.setItems(prefixedItems, commonOptions);
  };
  return nsStorage;
}
function normalizeKey$1(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function joinKeys(...keys) {
  return normalizeKey$1(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey$1(base);
  return base ? base + ":" : "";
}
function filterKeyByDepth(key, depth) {
  if (depth === void 0) {
    return true;
  }
  let substrCount = 0;
  let index = key.indexOf(":");
  while (index > -1) {
    substrCount++;
    index = key.indexOf(":", index + 1);
  }
  return substrCount <= depth;
}
function filterKeyByBase(key, base) {
  if (base) {
    return key.startsWith(base) && key[key.length - 1] !== "$";
  }
  return key[key.length - 1] !== "$";
}

function defineDriver$1(factory) {
  return factory;
}

const DRIVER_NAME$1 = "memory";
const memory = defineDriver$1(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME$1,
    getInstance: () => data,
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return [...data.keys()];
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey$1(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey$1(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions = {}) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      let allMountsSupportMaxDepth = true;
      for (const mount of mounts) {
        if (!mount.driver.flags?.maxDepth) {
          allMountsSupportMaxDepth = false;
        }
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey$1(key);
          if (!maskedMounts.some((p) => fullKey.startsWith(p))) {
            allKeys.push(fullKey);
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      const shouldFilterByDepth = opts.maxDepth !== void 0 && !allMountsSupportMaxDepth;
      return allKeys.filter(
        (key) => (!shouldFilterByDepth || filterKeyByDepth(key, opts.maxDepth)) && filterKeyByBase(key, base)
      );
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]?.();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey$1(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey$1(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    },
    // Aliases
    keys: (base, opts = {}) => storage.getKeys(base, opts),
    get: (key, opts = {}) => storage.getItem(key, opts),
    set: (key, value, opts = {}) => storage.setItem(key, value, opts),
    has: (key, opts = {}) => storage.hasItem(key, opts),
    del: (key, opts = {}) => storage.removeItem(key, opts),
    remove: (key, opts = {}) => storage.removeItem(key, opts)
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

const _assets = {

};

const normalizeKey = function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
};

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

function defineDriver(factory) {
  return factory;
}
function createError(driver, message, opts) {
  const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(err, createError);
  }
  return err;
}
function createRequiredError(driver, name) {
  if (Array.isArray(name)) {
    return createError(
      driver,
      `Missing some of the required options ${name.map((n) => "`" + n + "`").join(", ")}`
    );
  }
  return createError(driver, `Missing required option \`${name}\`.`);
}

function ignoreNotfound(err) {
  return err.code === "ENOENT" || err.code === "EISDIR" ? null : err;
}
function ignoreExists(err) {
  return err.code === "EEXIST" ? null : err;
}
async function writeFile(path, data, encoding) {
  await ensuredir(dirname$1(path));
  return promises.writeFile(path, data, encoding);
}
function readFile(path, encoding) {
  return promises.readFile(path, encoding).catch(ignoreNotfound);
}
function unlink(path) {
  return promises.unlink(path).catch(ignoreNotfound);
}
function readdir(dir) {
  return promises.readdir(dir, { withFileTypes: true }).catch(ignoreNotfound).then((r) => r || []);
}
async function ensuredir(dir) {
  if (existsSync(dir)) {
    return;
  }
  await ensuredir(dirname$1(dir)).catch(ignoreExists);
  await promises.mkdir(dir).catch(ignoreExists);
}
async function readdirRecursive(dir, ignore, maxDepth) {
  if (ignore && ignore(dir)) {
    return [];
  }
  const entries = await readdir(dir);
  const files = [];
  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        if (maxDepth === void 0 || maxDepth > 0) {
          const dirFiles = await readdirRecursive(
            entryPath,
            ignore,
            maxDepth === void 0 ? void 0 : maxDepth - 1
          );
          files.push(...dirFiles.map((f) => entry.name + "/" + f));
        }
      } else {
        if (!(ignore && ignore(entry.name))) {
          files.push(entry.name);
        }
      }
    })
  );
  return files;
}
async function rmRecursive(dir) {
  const entries = await readdir(dir);
  await Promise.all(
    entries.map((entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        return rmRecursive(entryPath).then(() => promises.rmdir(entryPath));
      } else {
        return promises.unlink(entryPath);
      }
    })
  );
}

const PATH_TRAVERSE_RE = /\.\.:|\.\.$/;
const DRIVER_NAME = "fs-lite";
const unstorage_47drivers_47fs_45lite = defineDriver((opts = {}) => {
  if (!opts.base) {
    throw createRequiredError(DRIVER_NAME, "base");
  }
  opts.base = resolve$1(opts.base);
  const r = (key) => {
    if (PATH_TRAVERSE_RE.test(key)) {
      throw createError(
        DRIVER_NAME,
        `Invalid key: ${JSON.stringify(key)}. It should not contain .. segments`
      );
    }
    const resolved = join(opts.base, key.replace(/:/g, "/"));
    return resolved;
  };
  return {
    name: DRIVER_NAME,
    options: opts,
    flags: {
      maxDepth: true
    },
    hasItem(key) {
      return existsSync(r(key));
    },
    getItem(key) {
      return readFile(r(key), "utf8");
    },
    getItemRaw(key) {
      return readFile(r(key));
    },
    async getMeta(key) {
      const { atime, mtime, size, birthtime, ctime } = await promises.stat(r(key)).catch(() => ({}));
      return { atime, mtime, size, birthtime, ctime };
    },
    setItem(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value, "utf8");
    },
    setItemRaw(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value);
    },
    removeItem(key) {
      if (opts.readOnly) {
        return;
      }
      return unlink(r(key));
    },
    getKeys(_base, topts) {
      return readdirRecursive(r("."), opts.ignore, topts?.maxDepth);
    },
    async clear() {
      if (opts.readOnly || opts.noClear) {
        return;
      }
      await rmRecursive(r("."));
    }
  };
});

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"./.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const e=globalThis.process?.getBuiltinModule?.("crypto")?.hash,r="sha256",s="base64url";function digest(t){if(e)return e(r,t,s);const o=createHash(r).update(t);return globalThis.process?.versions?.webcontainer?o.digest().toString(s):o.digest(s)}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function klona(x) {
	if (typeof x !== 'object') return x;

	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		if (x.constructor !== Object && typeof x.constructor === 'function') {
			tmp = new x.constructor();
			for (k in x) {
				if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
					tmp[k] = klona(x[k]);
				}
			}
		} else {
			tmp = {}; // null
			for (k in x) {
				if (k === '__proto__') {
					Object.defineProperty(tmp, k, {
						value: klona(x[k]),
						configurable: true,
						enumerable: true,
						writable: true,
					});
				} else {
					tmp[k] = klona(x[k]);
				}
			}
		}
		return tmp;
	}

	if (str === '[object Array]') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
		return tmp;
	}

	if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	if (str === '[object DataView]') {
		return new x.constructor( klona(x.buffer) );
	}

	if (str === '[object ArrayBuffer]') {
		return x.slice(0);
	}

	// ArrayBuffer.isView(x)
	// ~> `new` bcuz `Buffer.slice` => ref
	if (str.slice(-6) === 'Array]') {
		return new x.constructor(x);
	}

	return x;
}

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char)) {
    return void 0;
  }
  return char !== char.toLowerCase();
}
function splitByCase(str, separators) {
  const splitters = STR_SPLITTERS;
  const parts = [];
  if (!str || typeof str !== "string") {
    return parts;
  }
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = splitters.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function kebabCase(str, joiner) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => p.toLowerCase()).join(joiner) : "";
}
function snakeCase(str) {
  return kebabCase(str || "", "_");
}

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "6cd70520-2307-4c1f-97b0-70f6026d9b34",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "tokenStripe": "",
    "apiUrl": "https://manie-api.onrender.com"
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
const defaultNamespace = _globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());

getContext("nitro-app", {
  asyncContext: false,
  AsyncLocalStorage: void 0
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter$1({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
  if (event.handled || isJsonRequest(event)) {
    return;
  }
  const defaultRes = await defaultHandler(error, event, { json: true });
  const statusCode = error.statusCode || 500;
  if (statusCode === 404 && defaultRes.status === 302) {
    setResponseHeaders(event, defaultRes.headers);
    setResponseStatus(event, defaultRes.status, defaultRes.statusText);
    return send(event, JSON.stringify(defaultRes.body, null, 2));
  }
  const errorObject = defaultRes.body;
  const url = new URL(errorObject.url);
  errorObject.url = withoutBase(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
  errorObject.message ||= "Server Error";
  errorObject.data ||= error.data;
  errorObject.statusMessage ||= error.statusMessage;
  delete defaultRes.headers["content-type"];
  delete defaultRes.headers["content-security-policy"];
  setResponseHeaders(event, defaultRes.headers);
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (event.handled) {
    return;
  }
  if (!res) {
    const { template } = await import('../_/error-500.mjs');
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  for (const [header, value] of res.headers.entries()) {
    if (header === "set-cookie") {
      appendResponseHeader(event, header, value);
      continue;
    }
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
  return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const res = defaultHandler(error, event);
    setResponseHeaders(event, res.headers);
    setResponseStatus(event, res.status, res.statusText);
    return send(event, JSON.stringify(res.body, null, 2));
  }
);
function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    console.error(`[request error] ${tags} [${event.method}] ${url}
`, error);
  }
  const headers = {
    "content-type": "application/json",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'none'; frame-ancestors 'none';"
  };
  setResponseStatus(event, statusCode, statusMessage);
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = {
    error: true,
    url: url.href,
    statusCode,
    statusMessage,
    message: isSensitive ? "Server Error" : error.message,
    data: isSensitive ? void 0 : error.data
  };
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const plugins = [
  
];

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"3d1-WK3wAhj54wo3pYyvop/4idxoYBY\"",
    "mtime": "2025-09-09T15:26:45.561Z",
    "size": 977,
    "path": "../public/favicon.ico"
  },
  "/_nuxt/-7_8kcCU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a2b-n+dgWXr0GH1pt5XsC1gJEZlov6Q\"",
    "mtime": "2025-09-09T15:26:45.449Z",
    "size": 2603,
    "path": "../public/_nuxt/-7_8kcCU.js"
  },
  "/_nuxt/207G26w9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1792-vIPzv4vDT8xPIyJ0Rqeacy692ZQ\"",
    "mtime": "2025-09-09T15:26:45.292Z",
    "size": 6034,
    "path": "../public/_nuxt/207G26w9.js"
  },
  "/_nuxt/2n7MZaVL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"29d-5FKcdRSXZ1TP8tUsUCvyGm3gecU\"",
    "mtime": "2025-09-09T15:26:45.292Z",
    "size": 669,
    "path": "../public/_nuxt/2n7MZaVL.js"
  },
  "/_nuxt/3NtyM-6-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"20d-kXwB8mcdvMUs1tSqBeKF9Cxm1F4\"",
    "mtime": "2025-09-09T15:26:45.292Z",
    "size": 525,
    "path": "../public/_nuxt/3NtyM-6-.js"
  },
  "/_nuxt/5K0eLeTP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"20b-kD9DGeEgzSgzW0g3qawl8oFZzpM\"",
    "mtime": "2025-09-09T15:26:45.292Z",
    "size": 523,
    "path": "../public/_nuxt/5K0eLeTP.js"
  },
  "/_nuxt/5LVY5z7w.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1d7-8VmVI6Jz4Fzl9GMpF1AHUi/V/hE\"",
    "mtime": "2025-09-09T15:26:45.293Z",
    "size": 471,
    "path": "../public/_nuxt/5LVY5z7w.js"
  },
  "/_nuxt/5tmlNhWp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"99a-fVuURDxUS4AFbqtR7Ws6hK0JXG8\"",
    "mtime": "2025-09-09T15:26:45.293Z",
    "size": 2458,
    "path": "../public/_nuxt/5tmlNhWp.js"
  },
  "/_nuxt/8fv4E5jC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2c8-7mO7gwuet0CnZJMUYdOLkx0AfSk\"",
    "mtime": "2025-09-09T15:26:45.293Z",
    "size": 712,
    "path": "../public/_nuxt/8fv4E5jC.js"
  },
  "/_nuxt/9L7NBO4c.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"46b-Awhl1xpXSTMaq6nLaw2UgufaJmM\"",
    "mtime": "2025-09-09T15:26:45.293Z",
    "size": 1131,
    "path": "../public/_nuxt/9L7NBO4c.js"
  },
  "/_nuxt/AppBaseCard.WokIcPF1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"120-8InHZp3AtmuK/G1gHMgiBMYmMdw\"",
    "mtime": "2025-09-09T15:26:45.293Z",
    "size": 288,
    "path": "../public/_nuxt/AppBaseCard.WokIcPF1.css"
  },
  "/_nuxt/B2l-HHzr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b5d-GYcLFXlXb2eWIUBx4r0P/Aw4AXk\"",
    "mtime": "2025-09-09T15:26:45.293Z",
    "size": 2909,
    "path": "../public/_nuxt/B2l-HHzr.js"
  },
  "/_nuxt/B56wUCrV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b8b-6e+UeO+ld0HF4wYpnwvGaWxO3NI\"",
    "mtime": "2025-09-09T15:26:45.293Z",
    "size": 2955,
    "path": "../public/_nuxt/B56wUCrV.js"
  },
  "/_nuxt/B5_fY1xT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b06-ZKvcf9shNAsJhL1D6mWmscOMVJM\"",
    "mtime": "2025-09-09T15:26:45.293Z",
    "size": 2822,
    "path": "../public/_nuxt/B5_fY1xT.js"
  },
  "/_nuxt/B6OhnBF0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d33-Th0qblkq7i/+0UUYCUfTwyq8jyk\"",
    "mtime": "2025-09-09T15:26:45.293Z",
    "size": 3379,
    "path": "../public/_nuxt/B6OhnBF0.js"
  },
  "/_nuxt/B6XdxXBW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"27d-s3D0fF5S/FJ6vkVisNUE6+3HyrU\"",
    "mtime": "2025-09-09T15:26:45.293Z",
    "size": 637,
    "path": "../public/_nuxt/B6XdxXBW.js"
  },
  "/_nuxt/B71JFkYx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"87e4-qPycR64yNHR2nojxoCK8G2JZWZQ\"",
    "mtime": "2025-09-09T15:26:45.294Z",
    "size": 34788,
    "path": "../public/_nuxt/B71JFkYx.js"
  },
  "/_nuxt/B7aC87X0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"20f-yj9WyC1/ZDKfCmvFEp1+TsTZW1k\"",
    "mtime": "2025-09-09T15:26:45.294Z",
    "size": 527,
    "path": "../public/_nuxt/B7aC87X0.js"
  },
  "/_nuxt/B8Spjw-m.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e9d-92WLTa13gQZyYq0ZFg9KRfEGBiQ\"",
    "mtime": "2025-09-09T15:26:45.294Z",
    "size": 3741,
    "path": "../public/_nuxt/B8Spjw-m.js"
  },
  "/_nuxt/B8v8VSH6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"693-RNAyr1DH5njtcJ/QnzX+tyS7uRI\"",
    "mtime": "2025-09-09T15:26:45.294Z",
    "size": 1683,
    "path": "../public/_nuxt/B8v8VSH6.js"
  },
  "/_nuxt/B9Xm2EwF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3a43-x2rRokIALR/Ma7fv0rFJcHRDhOw\"",
    "mtime": "2025-09-09T15:26:45.294Z",
    "size": 14915,
    "path": "../public/_nuxt/B9Xm2EwF.js"
  },
  "/_nuxt/BBHj9iMj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9d0-KoR8Gkz/IuR816QI57pi2sTQ5p0\"",
    "mtime": "2025-09-09T15:26:45.294Z",
    "size": 2512,
    "path": "../public/_nuxt/BBHj9iMj.js"
  },
  "/_nuxt/BFx64C82.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1310-0CTlQt220dIn9f23A+LoNLsbmxI\"",
    "mtime": "2025-09-09T15:26:45.294Z",
    "size": 4880,
    "path": "../public/_nuxt/BFx64C82.js"
  },
  "/_nuxt/BHfdwCGt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"71b-VjD2OW9w5WA7d2P3djhrzPtDh9s\"",
    "mtime": "2025-09-09T15:26:45.294Z",
    "size": 1819,
    "path": "../public/_nuxt/BHfdwCGt.js"
  },
  "/_nuxt/BIDuEArC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"179d-jdkdbiNhxs6yhAP3mF9nwT6Y0PA\"",
    "mtime": "2025-09-09T15:26:45.294Z",
    "size": 6045,
    "path": "../public/_nuxt/BIDuEArC.js"
  },
  "/_nuxt/BJ0b0oNf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d31-/ZG7kIRN/NJbFD8SBTrHIhNCams\"",
    "mtime": "2025-09-09T15:26:45.294Z",
    "size": 3377,
    "path": "../public/_nuxt/BJ0b0oNf.js"
  },
  "/_nuxt/BL4t_KzI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"358-XXt0PX3pzqHO5uBX/J7vSDJOYEU\"",
    "mtime": "2025-09-09T15:26:45.294Z",
    "size": 856,
    "path": "../public/_nuxt/BL4t_KzI.js"
  },
  "/_nuxt/BOHAV54w.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8e5-eOigJ7QINcwpGfP7bwWUjiBhSJw\"",
    "mtime": "2025-09-09T15:26:45.295Z",
    "size": 2277,
    "path": "../public/_nuxt/BOHAV54w.js"
  },
  "/_nuxt/BOinkSDa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"172d-Xqd2WO6yaBdcMoXCYLiAWLmfaX8\"",
    "mtime": "2025-09-09T15:26:45.295Z",
    "size": 5933,
    "path": "../public/_nuxt/BOinkSDa.js"
  },
  "/_nuxt/BPCwcGUk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"66e-Ejfj65GGa7XDGpxxB+KYOx9DeZo\"",
    "mtime": "2025-09-09T15:26:45.295Z",
    "size": 1646,
    "path": "../public/_nuxt/BPCwcGUk.js"
  },
  "/_nuxt/BS__4N8J.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8df-ljGTgr1dpNDXMjeCMNDDnYkPbH8\"",
    "mtime": "2025-09-09T15:26:45.295Z",
    "size": 2271,
    "path": "../public/_nuxt/BS__4N8J.js"
  },
  "/_nuxt/BS_vDJ-5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"35c0-jBpHj3IAMBgQC0izDvqGMoQ09fY\"",
    "mtime": "2025-09-09T15:26:45.295Z",
    "size": 13760,
    "path": "../public/_nuxt/BS_vDJ-5.js"
  },
  "/_nuxt/BUgUHYCC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1a90-mHgQyjoX/LG2640cuqNfVIM/J5s\"",
    "mtime": "2025-09-09T15:26:45.295Z",
    "size": 6800,
    "path": "../public/_nuxt/BUgUHYCC.js"
  },
  "/_nuxt/BWvu9Poy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"663-0VXvHDvqYBb9JMQWENnjpU9CDdk\"",
    "mtime": "2025-09-09T15:26:45.295Z",
    "size": 1635,
    "path": "../public/_nuxt/BWvu9Poy.js"
  },
  "/_nuxt/BXUu3Bn7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c29-gG8QN/Xu46bhqO0Tf32oLMDeZNs\"",
    "mtime": "2025-09-09T15:26:45.295Z",
    "size": 3113,
    "path": "../public/_nuxt/BXUu3Bn7.js"
  },
  "/_nuxt/BX_7JTyk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6c5-Hd1n9bDK4rCWTDfYE7I8TtvWK74\"",
    "mtime": "2025-09-09T15:26:45.296Z",
    "size": 1733,
    "path": "../public/_nuxt/BX_7JTyk.js"
  },
  "/_nuxt/B_LJH5Wq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5d3-Q6SrwR/XRmccLWvfVFpgwBZD05A\"",
    "mtime": "2025-09-09T15:26:45.296Z",
    "size": 1491,
    "path": "../public/_nuxt/B_LJH5Wq.js"
  },
  "/_nuxt/BaseBreadcrumb.CojRJeRA.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"34-TuJetVpoo0ozHTVyxeZUgJoXlfU\"",
    "mtime": "2025-09-09T15:26:45.296Z",
    "size": 52,
    "path": "../public/_nuxt/BaseBreadcrumb.CojRJeRA.css"
  },
  "/_nuxt/BaseModal.vJS65vFD.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"c7-hA2cM5qdXbDmrJjmS/mxOamY0HQ\"",
    "mtime": "2025-09-09T15:26:45.296Z",
    "size": 199,
    "path": "../public/_nuxt/BaseModal.vJS65vFD.css"
  },
  "/_nuxt/BaseSidePicture.eBhRLWkz.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"140-Hm4S6r2MHYpkr81o5OqTh0eqhWo\"",
    "mtime": "2025-09-09T15:26:45.296Z",
    "size": 320,
    "path": "../public/_nuxt/BaseSidePicture.eBhRLWkz.css"
  },
  "/_nuxt/Basic.BVfg8TTG.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6b-6qgFK2XEFHLsqfTDCUMrEY4mbpA\"",
    "mtime": "2025-09-09T15:26:45.296Z",
    "size": 107,
    "path": "../public/_nuxt/Basic.BVfg8TTG.css"
  },
  "/_nuxt/BbbOyIMk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"59-E8vQVMjx6Ql60aemvQnEHaPIfjc\"",
    "mtime": "2025-09-09T15:26:45.296Z",
    "size": 89,
    "path": "../public/_nuxt/BbbOyIMk.js"
  },
  "/_nuxt/Be4NXUHw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3cc-JMuio76ChCSstYYcBzcWbi6IyBQ\"",
    "mtime": "2025-09-09T15:26:45.296Z",
    "size": 972,
    "path": "../public/_nuxt/Be4NXUHw.js"
  },
  "/_nuxt/Bf2XfWkq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"383-79IGeZoLnFHLEZ3PSegPbqnhzSA\"",
    "mtime": "2025-09-09T15:26:45.296Z",
    "size": 899,
    "path": "../public/_nuxt/Bf2XfWkq.js"
  },
  "/_nuxt/BgHVaKlu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"207a-B9UOHLSHSqYbGLndGKrlRQXZXMU\"",
    "mtime": "2025-09-09T15:26:45.297Z",
    "size": 8314,
    "path": "../public/_nuxt/BgHVaKlu.js"
  },
  "/_nuxt/BgTkvcsv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"236-vYup5PVzBXK0ZRQSSfwWVFvDWjQ\"",
    "mtime": "2025-09-09T15:26:45.297Z",
    "size": 566,
    "path": "../public/_nuxt/BgTkvcsv.js"
  },
  "/_nuxt/BkGXaPNc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"78f8-xpjaNcaiGJFbF1qSlsZF6wzCgLI\"",
    "mtime": "2025-09-09T15:26:45.297Z",
    "size": 30968,
    "path": "../public/_nuxt/BkGXaPNc.js"
  },
  "/_nuxt/Bm8q7btx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b4f-kk0Tv4bO5f9+TeHPpuCnb20zQ3w\"",
    "mtime": "2025-09-09T15:26:45.297Z",
    "size": 2895,
    "path": "../public/_nuxt/Bm8q7btx.js"
  },
  "/_nuxt/BmGWTgou.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2537-Jy5RTg9/g7GPQ0tMgvf0nk2zIgc\"",
    "mtime": "2025-09-09T15:26:45.297Z",
    "size": 9527,
    "path": "../public/_nuxt/BmGWTgou.js"
  },
  "/_nuxt/BmQ4l9pz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"131e-QlgWSLEuzsisegd7STqOF82lE0w\"",
    "mtime": "2025-09-09T15:26:45.297Z",
    "size": 4894,
    "path": "../public/_nuxt/BmQ4l9pz.js"
  },
  "/_nuxt/BnwLppej.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4a8-OsDgSMANtKDiydnmBD5qznXAkVw\"",
    "mtime": "2025-09-09T15:26:45.297Z",
    "size": 1192,
    "path": "../public/_nuxt/BnwLppej.js"
  },
  "/_nuxt/BoUAwJSJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"472-F29f05ZtwMD0UpZcNT1sgiE1ggs\"",
    "mtime": "2025-09-09T15:26:45.297Z",
    "size": 1138,
    "path": "../public/_nuxt/BoUAwJSJ.js"
  },
  "/_nuxt/Bp51JteW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1ea-6XhMJq1gLqxX957j6vg1q4CprRs\"",
    "mtime": "2025-09-09T15:26:45.297Z",
    "size": 490,
    "path": "../public/_nuxt/Bp51JteW.js"
  },
  "/_nuxt/BpD3_88U.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"cc9-mhVQ3IYtPJSN3dogETnR7vcSOU0\"",
    "mtime": "2025-09-09T15:26:45.298Z",
    "size": 3273,
    "path": "../public/_nuxt/BpD3_88U.js"
  },
  "/_nuxt/BpEvwWWT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"63-DqgW7qIK6yR7ACFBTQbq12VWn0M\"",
    "mtime": "2025-09-09T15:26:45.298Z",
    "size": 99,
    "path": "../public/_nuxt/BpEvwWWT.js"
  },
  "/_nuxt/BpXIsZk4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"153e-46qhpsfp4d8gp0Kqsl681SKCo7o\"",
    "mtime": "2025-09-09T15:26:45.298Z",
    "size": 5438,
    "path": "../public/_nuxt/BpXIsZk4.js"
  },
  "/_nuxt/Bpjn0hpN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2a97-1u58zAIseM53oqQK95pprZyuS6g\"",
    "mtime": "2025-09-09T15:26:45.298Z",
    "size": 10903,
    "path": "../public/_nuxt/Bpjn0hpN.js"
  },
  "/_nuxt/BszeRiAZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5e6-8ANiveh5vLNQVq/PNOJ+CQbs8p0\"",
    "mtime": "2025-09-09T15:26:45.298Z",
    "size": 1510,
    "path": "../public/_nuxt/BszeRiAZ.js"
  },
  "/_nuxt/Bx6Iq79P.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2d87-v0VyS3kbcJ+8STzW/COrQ2V48hQ\"",
    "mtime": "2025-09-09T15:26:45.298Z",
    "size": 11655,
    "path": "../public/_nuxt/Bx6Iq79P.js"
  },
  "/_nuxt/Bxqo_aTI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"73-/pQAJS5kw/5ck0Y5fGulVYV+i+w\"",
    "mtime": "2025-09-09T15:26:45.298Z",
    "size": 115,
    "path": "../public/_nuxt/Bxqo_aTI.js"
  },
  "/_nuxt/C1NE3Cqr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"14ac-uMybKNA+WGvQR6W3Dn0cWZFYX3I\"",
    "mtime": "2025-09-09T15:26:45.298Z",
    "size": 5292,
    "path": "../public/_nuxt/C1NE3Cqr.js"
  },
  "/_nuxt/C2CbO9Wl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"dff-QmnkNUmliOLAtSBEnUs3zUYU7G8\"",
    "mtime": "2025-09-09T15:26:45.299Z",
    "size": 3583,
    "path": "../public/_nuxt/C2CbO9Wl.js"
  },
  "/_nuxt/C2DZBpsq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2b60-23/OGs1m7+1VcwmFlSlHK7EAXck\"",
    "mtime": "2025-09-09T15:26:45.298Z",
    "size": 11104,
    "path": "../public/_nuxt/C2DZBpsq.js"
  },
  "/_nuxt/C2VFyxw3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"13f8-lkg2UsqUtbrv5s1v1eiWP+xIEMs\"",
    "mtime": "2025-09-09T15:26:45.298Z",
    "size": 5112,
    "path": "../public/_nuxt/C2VFyxw3.js"
  },
  "/_nuxt/C2zidtKS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1d3d-BAc1adwgiqcJZn/7opNpPaW80iw\"",
    "mtime": "2025-09-09T15:26:45.299Z",
    "size": 7485,
    "path": "../public/_nuxt/C2zidtKS.js"
  },
  "/_nuxt/C3h_X32k.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7c3-lr/bruJplcSuWDPY3lSL4OPmbi8\"",
    "mtime": "2025-09-09T15:26:45.299Z",
    "size": 1987,
    "path": "../public/_nuxt/C3h_X32k.js"
  },
  "/_nuxt/C3tSEhcg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3a9-DOlfQGCGEPHNJX0FCQgqYXwQvDc\"",
    "mtime": "2025-09-09T15:26:45.299Z",
    "size": 937,
    "path": "../public/_nuxt/C3tSEhcg.js"
  },
  "/_nuxt/C41LzJKB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"561-Hrf0cg5EaQsv0WIzb7rNemTQcIU\"",
    "mtime": "2025-09-09T15:26:45.299Z",
    "size": 1377,
    "path": "../public/_nuxt/C41LzJKB.js"
  },
  "/_nuxt/C5BgQ4wn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"14ef-2qey60CwbzMlMVEFACDC0k2mPiE\"",
    "mtime": "2025-09-09T15:26:45.299Z",
    "size": 5359,
    "path": "../public/_nuxt/C5BgQ4wn.js"
  },
  "/_nuxt/C61I36vH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"68-sJpQly4lodFp0oXtgBVaM6OGbTQ\"",
    "mtime": "2025-09-09T15:26:45.299Z",
    "size": 104,
    "path": "../public/_nuxt/C61I36vH.js"
  },
  "/_nuxt/C64MkbiV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1d82-kZWMEa4Qq670q0m379gPPy8+VLc\"",
    "mtime": "2025-09-09T15:26:45.299Z",
    "size": 7554,
    "path": "../public/_nuxt/C64MkbiV.js"
  },
  "/_nuxt/C6i1mdfU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4eb8-rrlaWn2vGqFGDBxYuk87JgolDr4\"",
    "mtime": "2025-09-09T15:26:45.299Z",
    "size": 20152,
    "path": "../public/_nuxt/C6i1mdfU.js"
  },
  "/_nuxt/C8JBcKyt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"896-hQT+kBUSMzxeyvJUPALucYHeggo\"",
    "mtime": "2025-09-09T15:26:45.299Z",
    "size": 2198,
    "path": "../public/_nuxt/C8JBcKyt.js"
  },
  "/_nuxt/C9cXf90W.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1401-QQEqGjrnWIm/3h3AsRKKj4VaMDo\"",
    "mtime": "2025-09-09T15:26:45.300Z",
    "size": 5121,
    "path": "../public/_nuxt/C9cXf90W.js"
  },
  "/_nuxt/CBbnJHLl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7e5-IJRk8W+xhuOUZGJymkzbhGanW/k\"",
    "mtime": "2025-09-09T15:26:45.300Z",
    "size": 2021,
    "path": "../public/_nuxt/CBbnJHLl.js"
  },
  "/_nuxt/CCKPAglU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a36-UoSiwzYMmeB0AA5dFRV8JSp12u4\"",
    "mtime": "2025-09-09T15:26:45.300Z",
    "size": 2614,
    "path": "../public/_nuxt/CCKPAglU.js"
  },
  "/_nuxt/CG0qMGks.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"13b1-4+ithxd7o8iAtCqIFX+8LFCMyw4\"",
    "mtime": "2025-09-09T15:26:45.300Z",
    "size": 5041,
    "path": "../public/_nuxt/CG0qMGks.js"
  },
  "/_nuxt/CHpNA9kj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ec7-PEpTVRcCxOFjNE64P3pIS6RmUW0\"",
    "mtime": "2025-09-09T15:26:45.300Z",
    "size": 3783,
    "path": "../public/_nuxt/CHpNA9kj.js"
  },
  "/_nuxt/CIe3HIXI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"198d-WyS0NadfJmGCUpG27FEhRcyK6gg\"",
    "mtime": "2025-09-09T15:26:45.300Z",
    "size": 6541,
    "path": "../public/_nuxt/CIe3HIXI.js"
  },
  "/_nuxt/CJUa4TK7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1a1d-EUyz8MfCkIcuepwbMuiZDGdiDcI\"",
    "mtime": "2025-09-09T15:26:45.300Z",
    "size": 6685,
    "path": "../public/_nuxt/CJUa4TK7.js"
  },
  "/_nuxt/CKe2xemR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1b73-aR1geG43lOZGyOU3q6GxTBLRHq0\"",
    "mtime": "2025-09-09T15:26:45.300Z",
    "size": 7027,
    "path": "../public/_nuxt/CKe2xemR.js"
  },
  "/_nuxt/CM__SoUb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"12eb-mjm7ZLWaStODWsyU81isrE/4w84\"",
    "mtime": "2025-09-09T15:26:45.300Z",
    "size": 4843,
    "path": "../public/_nuxt/CM__SoUb.js"
  },
  "/_nuxt/CNuvZ6gw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1726-Nv0+9StJUvFG12U7ECUc0b0h7NQ\"",
    "mtime": "2025-09-09T15:26:45.301Z",
    "size": 5926,
    "path": "../public/_nuxt/CNuvZ6gw.js"
  },
  "/_nuxt/CQ5i11QA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1d00-7IJPO1r3F2NZHzKQkdy6PbvV2GY\"",
    "mtime": "2025-09-09T15:26:45.300Z",
    "size": 7424,
    "path": "../public/_nuxt/CQ5i11QA.js"
  },
  "/_nuxt/CQqBnuCW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e53-qQ4klMU1ouOBZ9YbBllclxcu1Yc\"",
    "mtime": "2025-09-09T15:26:45.301Z",
    "size": 3667,
    "path": "../public/_nuxt/CQqBnuCW.js"
  },
  "/_nuxt/CURKykkn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"60d-oabLigwboSMap3VTjeSEt+31vnA\"",
    "mtime": "2025-09-09T15:26:45.301Z",
    "size": 1549,
    "path": "../public/_nuxt/CURKykkn.js"
  },
  "/_nuxt/CVmZSHas.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9873-9OpycXYmuqxZvSqAQX5Pc1/IWKg\"",
    "mtime": "2025-09-09T15:26:45.301Z",
    "size": 39027,
    "path": "../public/_nuxt/CVmZSHas.js"
  },
  "/_nuxt/CWzYeTtZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"736-yfGqj1jYkfiqVPIk39TVATF72+o\"",
    "mtime": "2025-09-09T15:26:45.301Z",
    "size": 1846,
    "path": "../public/_nuxt/CWzYeTtZ.js"
  },
  "/_nuxt/CXagh7P7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a5f-aI16WFcVm7epPcaGOstv1Kj2sLQ\"",
    "mtime": "2025-09-09T15:26:45.301Z",
    "size": 2655,
    "path": "../public/_nuxt/CXagh7P7.js"
  },
  "/_nuxt/CY-cvDDj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5a-+PVGsuS87+PCAHElU1s0NfQ6U0Q\"",
    "mtime": "2025-09-09T15:26:45.301Z",
    "size": 90,
    "path": "../public/_nuxt/CY-cvDDj.js"
  },
  "/_nuxt/CYEebd-p.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"32d4-gKL9zRhvherwuqMBJGJ1EsBlvXM\"",
    "mtime": "2025-09-09T15:26:45.302Z",
    "size": 13012,
    "path": "../public/_nuxt/CYEebd-p.js"
  },
  "/_nuxt/CYS2E02I.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"10e-FBj0GgiloOsquyWllJzZzydtSPM\"",
    "mtime": "2025-09-09T15:26:45.301Z",
    "size": 270,
    "path": "../public/_nuxt/CYS2E02I.js"
  },
  "/_nuxt/CaAK_fB7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1513-aas1kRdtixN2eog+HoQgC/C912o\"",
    "mtime": "2025-09-09T15:26:45.301Z",
    "size": 5395,
    "path": "../public/_nuxt/CaAK_fB7.js"
  },
  "/_nuxt/CaFiyHfg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1bef-L4ZmChDzJjdz8QlvcuzewLawf3k\"",
    "mtime": "2025-09-09T15:26:45.301Z",
    "size": 7151,
    "path": "../public/_nuxt/CaFiyHfg.js"
  },
  "/_nuxt/CahFWyhZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1c2f-33ubox1YEl/yo+3Cgv6z8g+9mh4\"",
    "mtime": "2025-09-09T15:26:45.301Z",
    "size": 7215,
    "path": "../public/_nuxt/CahFWyhZ.js"
  },
  "/_nuxt/CbH8OrgK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"16e5-E4i6+/COUzR5vhGEPh1jqE2JhIQ\"",
    "mtime": "2025-09-09T15:26:45.302Z",
    "size": 5861,
    "path": "../public/_nuxt/CbH8OrgK.js"
  },
  "/_nuxt/Ccm-client.C9DX8GE8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"252-qYzQ2R7cmpvTMKUGjKF7GZqVc/I\"",
    "mtime": "2025-09-09T15:26:45.302Z",
    "size": 594,
    "path": "../public/_nuxt/Ccm-client.C9DX8GE8.css"
  },
  "/_nuxt/Ccm-presta.D8_BD0cb.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"252-HjjZxtmuPc9YqJGEOiO58C9icEI\"",
    "mtime": "2025-09-09T15:26:45.302Z",
    "size": 594,
    "path": "../public/_nuxt/Ccm-presta.D8_BD0cb.css"
  },
  "/_nuxt/Ce9dRm7F.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1cef-5R/9fZh6vX2gU9XFDi5GSDsGvtI\"",
    "mtime": "2025-09-09T15:26:45.302Z",
    "size": 7407,
    "path": "../public/_nuxt/Ce9dRm7F.js"
  },
  "/_nuxt/CetADgz9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"144a-dnFDQKO/KqLXsQ1k1+aPYdi2CGQ\"",
    "mtime": "2025-09-09T15:26:45.302Z",
    "size": 5194,
    "path": "../public/_nuxt/CetADgz9.js"
  },
  "/_nuxt/Cf_FHGgd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"39ab-3Z3uCFSKwivjOrr08RVduIOy2gc\"",
    "mtime": "2025-09-09T15:26:45.303Z",
    "size": 14763,
    "path": "../public/_nuxt/Cf_FHGgd.js"
  },
  "/_nuxt/ChZI1MnI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"11dc-jGQPz4wlyotpi2MFNT3dpJbLwIs\"",
    "mtime": "2025-09-09T15:26:45.302Z",
    "size": 4572,
    "path": "../public/_nuxt/ChZI1MnI.js"
  },
  "/_nuxt/Checkout.BNgFOW2g.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"43-FFxtH7FBSVY0vnMw8gB1PFxAeEU\"",
    "mtime": "2025-09-09T15:26:45.302Z",
    "size": 67,
    "path": "../public/_nuxt/Checkout.BNgFOW2g.css"
  },
  "/_nuxt/ChssnwZY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"146f-jl8GScY/2T9ORkra1MOeJTc70uU\"",
    "mtime": "2025-09-09T15:26:45.302Z",
    "size": 5231,
    "path": "../public/_nuxt/ChssnwZY.js"
  },
  "/_nuxt/CiYKmbF0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a01-Mfzlsxo+/6P8GWK07k1UkHmaysg\"",
    "mtime": "2025-09-09T15:26:45.302Z",
    "size": 2561,
    "path": "../public/_nuxt/CiYKmbF0.js"
  },
  "/_nuxt/ClFral_I.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3120-+e4OjD6l72wyNjUlxnAljTC22K8\"",
    "mtime": "2025-09-09T15:26:45.303Z",
    "size": 12576,
    "path": "../public/_nuxt/ClFral_I.js"
  },
  "/_nuxt/Cll0BCe3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2f4e-06jiZzCY3uhJleS2D9ByalibLj4\"",
    "mtime": "2025-09-09T15:26:45.303Z",
    "size": 12110,
    "path": "../public/_nuxt/Cll0BCe3.js"
  },
  "/_nuxt/Constat.OYHl3Qjs.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1ce-FMAFum4btwyTAegOLEf7M3Qci0E\"",
    "mtime": "2025-09-09T15:26:45.303Z",
    "size": 462,
    "path": "../public/_nuxt/Constat.OYHl3Qjs.css"
  },
  "/_nuxt/Contact-us.BypcAuY4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"b2-gU7MSn7ediTkaPHzqqAsJFV1eA0\"",
    "mtime": "2025-09-09T15:26:45.303Z",
    "size": 178,
    "path": "../public/_nuxt/Contact-us.BypcAuY4.css"
  },
  "/_nuxt/CplhYEiK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"16c-p8/sqAEhlAOevfiQStodM7sUr8o\"",
    "mtime": "2025-09-09T15:26:45.303Z",
    "size": 364,
    "path": "../public/_nuxt/CplhYEiK.js"
  },
  "/_nuxt/CrPRdcxi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8f1-+Ff82VAY51vat6EfrJm4JHyb7w4\"",
    "mtime": "2025-09-09T15:26:45.303Z",
    "size": 2289,
    "path": "../public/_nuxt/CrPRdcxi.js"
  },
  "/_nuxt/CtK8kw_Q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8672-FIaxIRxr6I4HSZWumLqMd3SJ6II\"",
    "mtime": "2025-09-09T15:26:45.304Z",
    "size": 34418,
    "path": "../public/_nuxt/CtK8kw_Q.js"
  },
  "/_nuxt/Cu4J3riu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2af-+qlIzSjUzl4BpKXkClAzIvXxJDg\"",
    "mtime": "2025-09-09T15:26:45.303Z",
    "size": 687,
    "path": "../public/_nuxt/Cu4J3riu.js"
  },
  "/_nuxt/CuNY03Df.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1b69-6NolKnmCyMiJSj8Sd5fz7w3P7zs\"",
    "mtime": "2025-09-09T15:26:45.304Z",
    "size": 7017,
    "path": "../public/_nuxt/CuNY03Df.js"
  },
  "/_nuxt/CvFKdsk_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"64e-ZLG+/RHWy3To4TqI6DvuyHuCRQg\"",
    "mtime": "2025-09-09T15:26:45.305Z",
    "size": 1614,
    "path": "../public/_nuxt/CvFKdsk_.js"
  },
  "/_nuxt/Cv_fV3Ov.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"25b0-XZquKKVW67WWntsLmN47V2a9exY\"",
    "mtime": "2025-09-09T15:26:45.304Z",
    "size": 9648,
    "path": "../public/_nuxt/Cv_fV3Ov.js"
  },
  "/_nuxt/CxUuJB_c.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"101b-p7OfwljktV66jTdRMwxwrbkK2Xs\"",
    "mtime": "2025-09-09T15:26:45.304Z",
    "size": 4123,
    "path": "../public/_nuxt/CxUuJB_c.js"
  },
  "/_nuxt/CxnNen5M.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"102-3y5uhOY2M5CPSJEcpN3k1w7cAC8\"",
    "mtime": "2025-09-09T15:26:45.304Z",
    "size": 258,
    "path": "../public/_nuxt/CxnNen5M.js"
  },
  "/_nuxt/Cxtk6j3i.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"86-IsYlsEDE8p3f7Yv5ZYaOXNJMaAM\"",
    "mtime": "2025-09-09T15:26:45.304Z",
    "size": 134,
    "path": "../public/_nuxt/Cxtk6j3i.js"
  },
  "/_nuxt/Cyz2ZJjk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"40f6b-TX5VxO2OhBn+JygGyhGdryGeAfw\"",
    "mtime": "2025-09-09T15:26:45.306Z",
    "size": 266091,
    "path": "../public/_nuxt/Cyz2ZJjk.js"
  },
  "/_nuxt/CzvIst7k.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"373d-E2SVf0Lc+36dKwmBlI3kWBHinzw\"",
    "mtime": "2025-09-09T15:26:45.305Z",
    "size": 14141,
    "path": "../public/_nuxt/CzvIst7k.js"
  },
  "/_nuxt/D-UrpFmm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c09-1iXIsw6dK0Mh99Fk66ox5lG3X4Y\"",
    "mtime": "2025-09-09T15:26:45.305Z",
    "size": 3081,
    "path": "../public/_nuxt/D-UrpFmm.js"
  },
  "/_nuxt/D-WV4uiQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a53-0AZJbz48mAlqqaMGonYda5H95L8\"",
    "mtime": "2025-09-09T15:26:45.305Z",
    "size": 2643,
    "path": "../public/_nuxt/D-WV4uiQ.js"
  },
  "/_nuxt/D0H_Sl-x.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"100c-/E7izq31zMKyHBRpGrHc8ySUHIg\"",
    "mtime": "2025-09-09T15:26:45.306Z",
    "size": 4108,
    "path": "../public/_nuxt/D0H_Sl-x.js"
  },
  "/_nuxt/D2WnWL1G.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"fdc-lxcdCo7MyXkLpIjUtEErQ+rzXR4\"",
    "mtime": "2025-09-09T15:26:45.305Z",
    "size": 4060,
    "path": "../public/_nuxt/D2WnWL1G.js"
  },
  "/_nuxt/D4AIGYLs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5ff1-V4LhGGSv+zlBmM1tu1Q0JhKRM48\"",
    "mtime": "2025-09-09T15:26:45.306Z",
    "size": 24561,
    "path": "../public/_nuxt/D4AIGYLs.js"
  },
  "/_nuxt/D5DYfz19.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c6e-oDE+sg8yW6PQKhoZhp6fzSGx9kI\"",
    "mtime": "2025-09-09T15:26:45.306Z",
    "size": 3182,
    "path": "../public/_nuxt/D5DYfz19.js"
  },
  "/_nuxt/D5ixHcjy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"20bd-L3IAYmQnJHNpTBXN8ag3YRFUC0s\"",
    "mtime": "2025-09-09T15:26:45.306Z",
    "size": 8381,
    "path": "../public/_nuxt/D5ixHcjy.js"
  },
  "/_nuxt/D8vkNAkh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1200-mydRzfcBldlfCHWtm2eyfa/oKL8\"",
    "mtime": "2025-09-09T15:26:45.306Z",
    "size": 4608,
    "path": "../public/_nuxt/D8vkNAkh.js"
  },
  "/_nuxt/DAEUwcDm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"28d3-8IMHN0OVpNOjEf7RSWspE3t4G7Q\"",
    "mtime": "2025-09-09T15:26:45.306Z",
    "size": 10451,
    "path": "../public/_nuxt/DAEUwcDm.js"
  },
  "/_nuxt/DAhOAvj4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"66-mS9ZJK/QhNCxspc4r19cu+auNBI\"",
    "mtime": "2025-09-09T15:26:45.307Z",
    "size": 102,
    "path": "../public/_nuxt/DAhOAvj4.js"
  },
  "/_nuxt/DAt_JwB_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1e9f-Z0wzrkZQyyrZDGxp3B3EcuGN1yY\"",
    "mtime": "2025-09-09T15:26:45.306Z",
    "size": 7839,
    "path": "../public/_nuxt/DAt_JwB_.js"
  },
  "/_nuxt/DBsDIfmL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"262-fgoltb1EBb9frzTqNeEV/Y++JmE\"",
    "mtime": "2025-09-09T15:26:45.306Z",
    "size": 610,
    "path": "../public/_nuxt/DBsDIfmL.js"
  },
  "/_nuxt/DCz7uw26.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1424-PBqDw2qDfiWd53AVWi9gyLBE1y8\"",
    "mtime": "2025-09-09T15:26:45.307Z",
    "size": 5156,
    "path": "../public/_nuxt/DCz7uw26.js"
  },
  "/_nuxt/DDEXjfPf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"979-cC7RedhmCVkzs9nOKGRz/sGGcdA\"",
    "mtime": "2025-09-09T15:26:45.307Z",
    "size": 2425,
    "path": "../public/_nuxt/DDEXjfPf.js"
  },
  "/_nuxt/DE8Jkfgz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2eea-r7hi9h9AqOhNJS+HCbuhzch0fQ4\"",
    "mtime": "2025-09-09T15:26:45.307Z",
    "size": 12010,
    "path": "../public/_nuxt/DE8Jkfgz.js"
  },
  "/_nuxt/DE8t11G0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"182e-sP+IqmO3BOx8+W09KLPq7wYpTOw\"",
    "mtime": "2025-09-09T15:26:45.307Z",
    "size": 6190,
    "path": "../public/_nuxt/DE8t11G0.js"
  },
  "/_nuxt/DENolaI7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"48472-welshdgPEvrVZklZVZ+a9uyRN1s\"",
    "mtime": "2025-09-09T15:26:45.310Z",
    "size": 296050,
    "path": "../public/_nuxt/DENolaI7.js"
  },
  "/_nuxt/DFIvP0J7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"50f7b1-ND/3zg6LcyJPwRNelA55sM7rbmc\"",
    "mtime": "2025-09-09T15:26:45.351Z",
    "size": 5306289,
    "path": "../public/_nuxt/DFIvP0J7.js"
  },
  "/_nuxt/DH_klBrA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ef4-JBu4Zvyo33zSDf2BPqxzuTSLbAw\"",
    "mtime": "2025-09-09T15:26:45.307Z",
    "size": 3828,
    "path": "../public/_nuxt/DH_klBrA.js"
  },
  "/_nuxt/DIJ4aP1N.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"24bd-9gjh37bunmdo0PNSLvw/5DmS9No\"",
    "mtime": "2025-09-09T15:26:45.308Z",
    "size": 9405,
    "path": "../public/_nuxt/DIJ4aP1N.js"
  },
  "/_nuxt/DIVxVi7w.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1905-06oM0u6dhssCVn3SME3zXPAv6qA\"",
    "mtime": "2025-09-09T15:26:45.308Z",
    "size": 6405,
    "path": "../public/_nuxt/DIVxVi7w.js"
  },
  "/_nuxt/DJfvEMCz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4805-bvvswwGk4+KbgCMxFMRDgt6sZNs\"",
    "mtime": "2025-09-09T15:26:45.308Z",
    "size": 18437,
    "path": "../public/_nuxt/DJfvEMCz.js"
  },
  "/_nuxt/DJgjlY_Q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"753-UeIvuH8sO1t1Zi5jWONNduWEWig\"",
    "mtime": "2025-09-09T15:26:45.308Z",
    "size": 1875,
    "path": "../public/_nuxt/DJgjlY_Q.js"
  },
  "/_nuxt/DLJkFjCG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2827-Fpi2ZH9ysnTIgdIZHvyFWPl5/ec\"",
    "mtime": "2025-09-09T15:26:45.309Z",
    "size": 10279,
    "path": "../public/_nuxt/DLJkFjCG.js"
  },
  "/_nuxt/DNBM5ksC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"116a-3eiXv84bElPA56gFreFksCDiZMI\"",
    "mtime": "2025-09-09T15:26:45.309Z",
    "size": 4458,
    "path": "../public/_nuxt/DNBM5ksC.js"
  },
  "/_nuxt/DOLDw_42.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2790-zzA7S7qQZu9QzU7wve/XAO3szxQ\"",
    "mtime": "2025-09-09T15:26:45.310Z",
    "size": 10128,
    "path": "../public/_nuxt/DOLDw_42.js"
  },
  "/_nuxt/DPPstAR5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2ef0-d0HrmKjcayDAIvXtgsCJrlyat3M\"",
    "mtime": "2025-09-09T15:26:45.310Z",
    "size": 12016,
    "path": "../public/_nuxt/DPPstAR5.js"
  },
  "/_nuxt/DVSzIzzH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3778-nJOdswqGBYii/DxWFbMZlP69fYo\"",
    "mtime": "2025-09-09T15:26:45.312Z",
    "size": 14200,
    "path": "../public/_nuxt/DVSzIzzH.js"
  },
  "/_nuxt/DWiDLj-O.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"31b-tTrMw6WzL30vLN12CbMQyxg16II\"",
    "mtime": "2025-09-09T15:26:45.312Z",
    "size": 795,
    "path": "../public/_nuxt/DWiDLj-O.js"
  },
  "/_nuxt/DYQeNaAj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"44ac-fySztgEdAVeXLFTdvy8OAM+3imI\"",
    "mtime": "2025-09-09T15:26:45.312Z",
    "size": 17580,
    "path": "../public/_nuxt/DYQeNaAj.js"
  },
  "/_nuxt/D_OjpzEU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"29b-l7shkRB/tf65hQL7uMrdtpAaHk8\"",
    "mtime": "2025-09-09T15:26:45.312Z",
    "size": 667,
    "path": "../public/_nuxt/D_OjpzEU.js"
  },
  "/_nuxt/DavFoUeV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"65d-2Q+Hz2Q7Up+B1PuxifN9whIs84c\"",
    "mtime": "2025-09-09T15:26:45.312Z",
    "size": 1629,
    "path": "../public/_nuxt/DavFoUeV.js"
  },
  "/_nuxt/DbmEi3HS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"380-g/LC/oRiMjw8sVW1iWD4+6jXoDI\"",
    "mtime": "2025-09-09T15:26:45.313Z",
    "size": 896,
    "path": "../public/_nuxt/DbmEi3HS.js"
  },
  "/_nuxt/DdV_ww8t.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"cfd-LZeu1c3rTtRbS+Xzf4WeZ50CcxM\"",
    "mtime": "2025-09-09T15:26:45.313Z",
    "size": 3325,
    "path": "../public/_nuxt/DdV_ww8t.js"
  },
  "/_nuxt/DeKACj0a.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"19b1-0lrPVHSVLv7V0CdAfMNHFo8xTEc\"",
    "mtime": "2025-09-09T15:26:45.313Z",
    "size": 6577,
    "path": "../public/_nuxt/DeKACj0a.js"
  },
  "/_nuxt/DeT7TKTh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4a2-4sFMy6GYCgBNzcmIyENszUWLL10\"",
    "mtime": "2025-09-09T15:26:45.313Z",
    "size": 1186,
    "path": "../public/_nuxt/DeT7TKTh.js"
  },
  "/_nuxt/DgmimU1R.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1c6e-fWlrKWeT0QqzKMqOZCTuyS6x328\"",
    "mtime": "2025-09-09T15:26:45.313Z",
    "size": 7278,
    "path": "../public/_nuxt/DgmimU1R.js"
  },
  "/_nuxt/DhM0lJC_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"83-ftBopZJeSi9iwCAQGsH21MSpYwE\"",
    "mtime": "2025-09-09T15:26:45.314Z",
    "size": 131,
    "path": "../public/_nuxt/DhM0lJC_.js"
  },
  "/_nuxt/Dhczp8Zt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"466-KMm8SKNjx6GKFrObLH/XJfL/y28\"",
    "mtime": "2025-09-09T15:26:45.314Z",
    "size": 1126,
    "path": "../public/_nuxt/Dhczp8Zt.js"
  },
  "/_nuxt/DivMMbLX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"102a-CqjVmWNPrUiKQ8Mj7E5b3T+o0Xk\"",
    "mtime": "2025-09-09T15:26:45.313Z",
    "size": 4138,
    "path": "../public/_nuxt/DivMMbLX.js"
  },
  "/_nuxt/DjSvSjTa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"35e-1sdJ/1CoLyjESPvIWWgkxM3X1Gc\"",
    "mtime": "2025-09-09T15:26:45.314Z",
    "size": 862,
    "path": "../public/_nuxt/DjSvSjTa.js"
  },
  "/_nuxt/DkJ47Hoq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"27f1-/lMrXt+TjMUcJlDGs6fKSX00Gig\"",
    "mtime": "2025-09-09T15:26:45.314Z",
    "size": 10225,
    "path": "../public/_nuxt/DkJ47Hoq.js"
  },
  "/_nuxt/DmIpAH3s.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b57-4oRPWTnpni6sYMno2wFM0tcdf3U\"",
    "mtime": "2025-09-09T15:26:45.314Z",
    "size": 2903,
    "path": "../public/_nuxt/DmIpAH3s.js"
  },
  "/_nuxt/DmSe9vcy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3de5-YIgza1+YdAw1lfxDeHQsMKpiXIE\"",
    "mtime": "2025-09-09T15:26:45.314Z",
    "size": 15845,
    "path": "../public/_nuxt/DmSe9vcy.js"
  },
  "/_nuxt/DmUckccG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"16e5-ZJRJdB2jHcoAS1ZO5hkbjUqMwzU\"",
    "mtime": "2025-09-09T15:26:45.315Z",
    "size": 5861,
    "path": "../public/_nuxt/DmUckccG.js"
  },
  "/_nuxt/DnJ-sEAj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"577c-BIDGFqkXXhtdx6e+V+D5ZZFBhMY\"",
    "mtime": "2025-09-09T15:26:45.315Z",
    "size": 22396,
    "path": "../public/_nuxt/DnJ-sEAj.js"
  },
  "/_nuxt/Do0Ohyne.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a6-GH7Sn98RMbx5+kyU5OBVoAT+83c\"",
    "mtime": "2025-09-09T15:26:45.315Z",
    "size": 166,
    "path": "../public/_nuxt/Do0Ohyne.js"
  },
  "/_nuxt/DoULzBWc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"83f-P1dHQb9683B/yCQiw0ittd5OTfc\"",
    "mtime": "2025-09-09T15:26:45.317Z",
    "size": 2111,
    "path": "../public/_nuxt/DoULzBWc.js"
  },
  "/_nuxt/DogmepU2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3873-SXejX0NCbU0KPQsONRGrO7dqT9w\"",
    "mtime": "2025-09-09T15:26:45.315Z",
    "size": 14451,
    "path": "../public/_nuxt/DogmepU2.js"
  },
  "/_nuxt/Dr4dUIJP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1dcc-jLf8dSmlhlBt/L5LRIg1t10G2CA\"",
    "mtime": "2025-09-09T15:26:45.315Z",
    "size": 7628,
    "path": "../public/_nuxt/Dr4dUIJP.js"
  },
  "/_nuxt/DuVauUsf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"12ff-TPy0AeFlRI0YTtRt5hj6uT6fx6s\"",
    "mtime": "2025-09-09T15:26:45.316Z",
    "size": 4863,
    "path": "../public/_nuxt/DuVauUsf.js"
  },
  "/_nuxt/Duiz8y7J.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"52f-F0R9XaEqt+0gRrdo3UuuL78pG6w\"",
    "mtime": "2025-09-09T15:26:45.316Z",
    "size": 1327,
    "path": "../public/_nuxt/Duiz8y7J.js"
  },
  "/_nuxt/DwiEaDBO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"eac-sRME1e7xxNWKtAZntoMAF/Z2SCc\"",
    "mtime": "2025-09-09T15:26:45.316Z",
    "size": 3756,
    "path": "../public/_nuxt/DwiEaDBO.js"
  },
  "/_nuxt/DwnZHZyr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1454-kYCDmwlZ9BHGrXmrGt870xk/oxc\"",
    "mtime": "2025-09-09T15:26:45.316Z",
    "size": 5204,
    "path": "../public/_nuxt/DwnZHZyr.js"
  },
  "/_nuxt/Dws4Qeoo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"297b-8tMTMxYG7YZriQ2x8HSe6soMXFQ\"",
    "mtime": "2025-09-09T15:26:45.316Z",
    "size": 10619,
    "path": "../public/_nuxt/Dws4Qeoo.js"
  },
  "/_nuxt/DwxrroaL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e0-GZqOqQ/lDdXjB2jsUGVYMckPw0M\"",
    "mtime": "2025-09-09T15:26:45.325Z",
    "size": 224,
    "path": "../public/_nuxt/DwxrroaL.js"
  },
  "/_nuxt/DxWgIVHT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1758-qNLqw92EFaBABVyWfJFp0EywnZY\"",
    "mtime": "2025-09-09T15:26:45.316Z",
    "size": 5976,
    "path": "../public/_nuxt/DxWgIVHT.js"
  },
  "/_nuxt/DyM75vNQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3141-MEX3IdmlK5KFCToBA+/2GPuy/rw\"",
    "mtime": "2025-09-09T15:26:45.317Z",
    "size": 12609,
    "path": "../public/_nuxt/DyM75vNQ.js"
  },
  "/_nuxt/Dyg4636N.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"273-ryzxFU5mSwjAfJu7uayY27+tFjk\"",
    "mtime": "2025-09-09T15:26:45.317Z",
    "size": 627,
    "path": "../public/_nuxt/Dyg4636N.js"
  },
  "/_nuxt/DzfdYSme.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c2d-sKXGqnFG7/DeAkkGCSgaDcAz4NY\"",
    "mtime": "2025-09-09T15:26:45.317Z",
    "size": 3117,
    "path": "../public/_nuxt/DzfdYSme.js"
  },
  "/_nuxt/EditorMenubar.B1s6kyRf.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"203-8nXwhv5SMFUJJlnSVFB5hOad+4M\"",
    "mtime": "2025-09-09T15:26:45.317Z",
    "size": 515,
    "path": "../public/_nuxt/EditorMenubar.B1s6kyRf.css"
  },
  "/_nuxt/F7OJ9HfB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"866-ttHSdMkMPCrkQQcvFpDwpUAvySc\"",
    "mtime": "2025-09-09T15:26:45.317Z",
    "size": 2150,
    "path": "../public/_nuxt/F7OJ9HfB.js"
  },
  "/_nuxt/FOyqlHHf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a25-V+OvoToLlj5d+QYI0HQu40zpmhM\"",
    "mtime": "2025-09-09T15:26:45.317Z",
    "size": 2597,
    "path": "../public/_nuxt/FOyqlHHf.js"
  },
  "/_nuxt/Faq-client.tdymkg64.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1df-XjpdDevTRpWMiQxEojV1ws8G/fQ\"",
    "mtime": "2025-09-09T15:26:45.318Z",
    "size": 479,
    "path": "../public/_nuxt/Faq-client.tdymkg64.css"
  },
  "/_nuxt/Faq-prestataire.BVYt7XSg.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1fd-4pHWBN0CmWyXne4Ir6gHyppApt8\"",
    "mtime": "2025-09-09T15:26:45.318Z",
    "size": 509,
    "path": "../public/_nuxt/Faq-prestataire.BVYt7XSg.css"
  },
  "/_nuxt/Footer.DkS5CxKZ.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"220-6k34oJWkEhUxGi+V8cyTyE1sZlI\"",
    "mtime": "2025-09-09T15:26:45.318Z",
    "size": 544,
    "path": "../public/_nuxt/Footer.DkS5CxKZ.css"
  },
  "/_nuxt/Friends.CvRMPJZp.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"df-FoLH9wHKXIXlRYuSeOfx5iKaEU8\"",
    "mtime": "2025-09-09T15:26:45.318Z",
    "size": 223,
    "path": "../public/_nuxt/Friends.CvRMPJZp.css"
  },
  "/_nuxt/G7sGo50t.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"68d3-uc4avF+NM51mKkQSWB3GVp6xu8Q\"",
    "mtime": "2025-09-09T15:26:45.322Z",
    "size": 26835,
    "path": "../public/_nuxt/G7sGo50t.js"
  },
  "/_nuxt/GiUVW8pn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1172-s5pbvO6tW78dAW1A32JX7ITbBSc\"",
    "mtime": "2025-09-09T15:26:45.318Z",
    "size": 4466,
    "path": "../public/_nuxt/GiUVW8pn.js"
  },
  "/_nuxt/Header.B8BZ-qcR.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"119-Lv+kFjwLoMdsh5HM0RrJtBsytb0\"",
    "mtime": "2025-09-09T15:26:45.319Z",
    "size": 281,
    "path": "../public/_nuxt/Header.B8BZ-qcR.css"
  },
  "/_nuxt/Homepage.C_ZK1DZP.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"709-fLAAWJhgS+U8zfTEgbhw+j6uFJk\"",
    "mtime": "2025-09-09T15:26:45.320Z",
    "size": 1801,
    "path": "../public/_nuxt/Homepage.C_ZK1DZP.css"
  },
  "/_nuxt/J-qImL39.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"906-/4J6nH6OD09NRQyJBDJPNsMvFac\"",
    "mtime": "2025-09-09T15:26:45.322Z",
    "size": 2310,
    "path": "../public/_nuxt/J-qImL39.js"
  },
  "/_nuxt/L5HaexDG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"102-O8GV+1NNlw6qo+oo1m56O3xvhb4\"",
    "mtime": "2025-09-09T15:26:45.323Z",
    "size": 258,
    "path": "../public/_nuxt/L5HaexDG.js"
  },
  "/_nuxt/Lw0NJFQD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a00-uXOvq3XnNbrclptG8lN8SxmJ/Nk\"",
    "mtime": "2025-09-09T15:26:45.324Z",
    "size": 2560,
    "path": "../public/_nuxt/Lw0NJFQD.js"
  },
  "/_nuxt/ModalRedirection.CN7YzPQg.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"14d-F+yMUJ3Z0zpJYUMxjPe2Rl0c4qQ\"",
    "mtime": "2025-09-09T15:26:45.324Z",
    "size": 333,
    "path": "../public/_nuxt/ModalRedirection.CN7YzPQg.css"
  },
  "/_nuxt/NUARIjMq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4e6-Xs3QPvjpOGA261d09tqa09rj5mI\"",
    "mtime": "2025-09-09T15:26:45.324Z",
    "size": 1254,
    "path": "../public/_nuxt/NUARIjMq.js"
  },
  "/_nuxt/Nos-engagements.BISJ8NdU.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1fd-6WBAVkb/nAUdZlb9ie+Z7HkiDfU\"",
    "mtime": "2025-09-09T15:26:45.324Z",
    "size": 509,
    "path": "../public/_nuxt/Nos-engagements.BISJ8NdU.css"
  },
  "/_nuxt/Notre-histoire.BMlMwTxV.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1f8-ZKO6td9+FvcMhlUBxfkjVhXKh8w\"",
    "mtime": "2025-09-09T15:26:45.326Z",
    "size": 504,
    "path": "../public/_nuxt/Notre-histoire.BMlMwTxV.css"
  },
  "/_nuxt/Notre-zone-de-jeu.f4FDb2pI.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"209-9HkhVsLWhI3VX5sGBRuCuYIakl0\"",
    "mtime": "2025-09-09T15:26:45.325Z",
    "size": 521,
    "path": "../public/_nuxt/Notre-zone-de-jeu.f4FDb2pI.css"
  },
  "/_nuxt/NzfDkpJf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"34c-uW6Qs7sIvnaf+cMLC/xugLn1s6U\"",
    "mtime": "2025-09-09T15:26:45.325Z",
    "size": 844,
    "path": "../public/_nuxt/NzfDkpJf.js"
  },
  "/_nuxt/OKs-mkN4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1498-pfGttbC3rTHp2f5B0SDtIXvXUYo\"",
    "mtime": "2025-09-09T15:26:45.325Z",
    "size": 5272,
    "path": "../public/_nuxt/OKs-mkN4.js"
  },
  "/_nuxt/OUlb6kwZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"904-EjZelUraqI/s842y51THjuV1WCo\"",
    "mtime": "2025-09-09T15:26:45.326Z",
    "size": 2308,
    "path": "../public/_nuxt/OUlb6kwZ.js"
  },
  "/_nuxt/Portfolio.pKcKI6YO.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3a-JflUjFzsw8Cm58+iCtgOiYjb3zI\"",
    "mtime": "2025-09-09T15:26:45.325Z",
    "size": 58,
    "path": "../public/_nuxt/Portfolio.pKcKI6YO.css"
  },
  "/_nuxt/Pourquoi-manie.D5gnTuLk.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1f8-D23XKLMr9c3dOaW/Pt24q8h6yWc\"",
    "mtime": "2025-09-09T15:26:45.329Z",
    "size": 504,
    "path": "../public/_nuxt/Pourquoi-manie.D5gnTuLk.css"
  },
  "/_nuxt/ProductFilters.iC4grpi7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"105-Hkgpgk2aJrExjDAYBaCXEXr6R4o\"",
    "mtime": "2025-09-09T15:26:45.325Z",
    "size": 261,
    "path": "../public/_nuxt/ProductFilters.iC4grpi7.css"
  },
  "/_nuxt/ProductItem.B48hPPCg.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2b-M1ip50r0GsincnCS1Uh5th/1HPI\"",
    "mtime": "2025-09-09T15:26:45.326Z",
    "size": 43,
    "path": "../public/_nuxt/ProductItem.B48hPPCg.css"
  },
  "/_nuxt/ProductItemOne.CaHxzp8b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"138-DI+oOWUc5XpB/ki73v7siyOEm2c\"",
    "mtime": "2025-09-09T15:26:45.326Z",
    "size": 312,
    "path": "../public/_nuxt/ProductItemOne.CaHxzp8b.css"
  },
  "/_nuxt/ProductsChart.BLRfq7V8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7a-1K/iif9phDBhgeIEmfQLXo/ZxzQ\"",
    "mtime": "2025-09-09T15:26:45.326Z",
    "size": 122,
    "path": "../public/_nuxt/ProductsChart.BLRfq7V8.css"
  },
  "/_nuxt/ProductsOne.Byu2ze6Z.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"20c-e6mWth0nuOlnIXF+mAzVAU9iuBI\"",
    "mtime": "2025-09-09T15:26:45.326Z",
    "size": 524,
    "path": "../public/_nuxt/ProductsOne.Byu2ze6Z.css"
  },
  "/_nuxt/ProductsTwo.kzsjRTRi.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"163-Mh/qR92hhKpyDgXstZXN65Rk3u8\"",
    "mtime": "2025-09-09T15:26:45.326Z",
    "size": 355,
    "path": "../public/_nuxt/ProductsTwo.kzsjRTRi.css"
  },
  "/_nuxt/ProfileBanner.CgQwq2tg.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2c4-rgTocqnAjTvbD69GG/ZYhgL5GUU\"",
    "mtime": "2025-09-09T15:26:45.326Z",
    "size": 708,
    "path": "../public/_nuxt/ProfileBanner.CgQwq2tg.css"
  },
  "/_nuxt/ProfileBannerOne.BSElnpPi.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-BmZIIvDcbILAq58/t65yOb2Nt0A\"",
    "mtime": "2025-09-09T15:26:45.327Z",
    "size": 1950,
    "path": "../public/_nuxt/ProfileBannerOne.BSElnpPi.css"
  },
  "/_nuxt/ProfitExpanse.DNEedAXa.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7c-5nMTI72mgmCA3a07oiYVgN+iAk4\"",
    "mtime": "2025-09-09T15:26:45.326Z",
    "size": 124,
    "path": "../public/_nuxt/ProfitExpanse.DNEedAXa.css"
  },
  "/_nuxt/Projects.CC8Yz9A-.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"df-gxoQ9RiG87r0DCIo9Pmr++f5LN8\"",
    "mtime": "2025-09-09T15:26:45.327Z",
    "size": 223,
    "path": "../public/_nuxt/Projects.CC8Yz9A-.css"
  },
  "/_nuxt/Q1su0wEa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1d0-tBy/oqV1HoZL3hMvKifUmsxxzZM\"",
    "mtime": "2025-09-09T15:26:45.327Z",
    "size": 464,
    "path": "../public/_nuxt/Q1su0wEa.js"
  },
  "/_nuxt/Register.mnxKxgrf.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"64-sq40irdH+oMoiWrsJ3kR0yDBWK8\"",
    "mtime": "2025-09-09T15:26:45.327Z",
    "size": 100,
    "path": "../public/_nuxt/Register.mnxKxgrf.css"
  },
  "/_nuxt/SEitiUTr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5ad-MuH+Cl6DMMc67o5ApdwkhEoDASg\"",
    "mtime": "2025-09-09T15:26:45.328Z",
    "size": 1453,
    "path": "../public/_nuxt/SEitiUTr.js"
  },
  "/_nuxt/TOxm0nBD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"15e7-tma2I+iS/pPIYZH5lKodmVdZJaQ\"",
    "mtime": "2025-09-09T15:26:45.327Z",
    "size": 5607,
    "path": "../public/_nuxt/TOxm0nBD.js"
  },
  "/_nuxt/VgVxmSiZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1196-pG2zSL7d3YSUyamyw51A7+PWDUk\"",
    "mtime": "2025-09-09T15:26:45.327Z",
    "size": 4502,
    "path": "../public/_nuxt/VgVxmSiZ.js"
  },
  "/_nuxt/Vxj92bPR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7e4-ovVA1YUh6GCE5/fJi4Eh7sj7S9I\"",
    "mtime": "2025-09-09T15:26:45.328Z",
    "size": 2020,
    "path": "../public/_nuxt/Vxj92bPR.js"
  },
  "/_nuxt/WmrSRYzd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1a099-YdILqOp+6CXB5k6q+qA3+soQU5A\"",
    "mtime": "2025-09-09T15:26:45.328Z",
    "size": 106649,
    "path": "../public/_nuxt/WmrSRYzd.js"
  },
  "/_nuxt/YpD8SqPC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8f1-F2OTnEZK8ItT2f3+EQeRwJ0PYC0\"",
    "mtime": "2025-09-09T15:26:45.328Z",
    "size": 2289,
    "path": "../public/_nuxt/YpD8SqPC.js"
  },
  "/_nuxt/ZwSq2L9_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2fa-WJrQnpG/tjRtYUbNtHvF1eVODcc\"",
    "mtime": "2025-09-09T15:26:45.328Z",
    "size": 762,
    "path": "../public/_nuxt/ZwSq2L9_.js"
  },
  "/_nuxt/_id_.CEtNMlFb.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4d-BOAf3fVwYuMRGsGFDE+a61fHFbo\"",
    "mtime": "2025-09-09T15:26:45.328Z",
    "size": 77,
    "path": "../public/_nuxt/_id_.CEtNMlFb.css"
  },
  "/_nuxt/_id_.D3bhAeux.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"494-i4QRsyvsEpUksJR1F0qYEbVXOgs\"",
    "mtime": "2025-09-09T15:26:45.329Z",
    "size": 1172,
    "path": "../public/_nuxt/_id_.D3bhAeux.css"
  },
  "/_nuxt/_id_.DO6FetRg.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1e6-UyuQpBmGwldVufU7MVWaJs0+HoU\"",
    "mtime": "2025-09-09T15:26:45.328Z",
    "size": 486,
    "path": "../public/_nuxt/_id_.DO6FetRg.css"
  },
  "/_nuxt/_pOvZNhF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"29b-0N1941XLpzHfuXVsTRhWnsYw0Cs\"",
    "mtime": "2025-09-09T15:26:45.329Z",
    "size": 667,
    "path": "../public/_nuxt/_pOvZNhF.js"
  },
  "/_nuxt/_token_.CVP9HVg1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"213-yUK0L42zbEUykuM+Jt52WJBOntg\"",
    "mtime": "2025-09-09T15:26:45.329Z",
    "size": 531,
    "path": "../public/_nuxt/_token_.CVP9HVg1.css"
  },
  "/_nuxt/aos.DvB2Xm2x.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"65c6-Vbw5INq5i/mI2T635GHgXZQYZQQ\"",
    "mtime": "2025-09-09T15:26:45.329Z",
    "size": 26054,
    "path": "../public/_nuxt/aos.DvB2Xm2x.css"
  },
  "/_nuxt/buX99NMR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"90-1Fv/U1gjsAqDdCJtwm+5x1B4cQA\"",
    "mtime": "2025-09-09T15:26:45.329Z",
    "size": 144,
    "path": "../public/_nuxt/buX99NMR.js"
  },
  "/_nuxt/c8BDdJJL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"63-GoKfDufFXMGIrHMdmxODudS1wYs\"",
    "mtime": "2025-09-09T15:26:45.329Z",
    "size": 99,
    "path": "../public/_nuxt/c8BDdJJL.js"
  },
  "/_nuxt/check-email.BWRWztMi.jpg": {
    "type": "image/jpeg",
    "etag": "\"1589bf-qAWrtqAIkjRWRTelrrjcWTY1JYo\"",
    "mtime": "2025-09-09T15:26:45.339Z",
    "size": 1411519,
    "path": "../public/_nuxt/check-email.BWRWztMi.jpg"
  },
  "/_nuxt/default.CoYJv4Qw.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1f0-my/AZkGQGaemwNvle+gALDbVEs4\"",
    "mtime": "2025-09-09T15:26:45.330Z",
    "size": 496,
    "path": "../public/_nuxt/default.CoYJv4Qw.css"
  },
  "/_nuxt/djrPj1E4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e6b-i4C7LrtQb4fOR108runaMduoKHI\"",
    "mtime": "2025-09-09T15:26:45.330Z",
    "size": 3691,
    "path": "../public/_nuxt/djrPj1E4.js"
  },
  "/_nuxt/empty-cart.BHR__uvv.svg": {
    "type": "image/svg+xml",
    "etag": "\"25b4-ewG3u6lodpzXYNdIWRQ7ICKDp8s\"",
    "mtime": "2025-09-09T15:26:45.330Z",
    "size": 9652,
    "path": "../public/_nuxt/empty-cart.BHR__uvv.svg"
  },
  "/_nuxt/entry.BB2z2qsA.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"cef97-NgewylwVSdY3JhK+BN+l/m7A3XE\"",
    "mtime": "2025-09-09T15:26:45.338Z",
    "size": 847767,
    "path": "../public/_nuxt/entry.BB2z2qsA.css"
  },
  "/_nuxt/errorToaster.BhK-kEyB.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1c4-7m1p/WtReM8Ub0zhIzOLHxTR/mg\"",
    "mtime": "2025-09-09T15:26:45.331Z",
    "size": 452,
    "path": "../public/_nuxt/errorToaster.BhK-kEyB.css"
  },
  "/_nuxt/f0XQZk6Y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"df4-t9Bq83HPGXvyOfFdcfut8uvDRVo\"",
    "mtime": "2025-09-09T15:26:45.331Z",
    "size": 3572,
    "path": "../public/_nuxt/f0XQZk6Y.js"
  },
  "/_nuxt/fm_J62tB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"10e-VY0B/MaCzl9q9nF3gPlA92CqoDQ\"",
    "mtime": "2025-09-09T15:26:45.331Z",
    "size": 270,
    "path": "../public/_nuxt/fm_J62tB.js"
  },
  "/_nuxt/good-verification.DMFiIdFa.svg": {
    "type": "image/svg+xml",
    "etag": "\"1581-oxSrOODPQU52rd/YyUzc6VMoAL4\"",
    "mtime": "2025-09-09T15:26:45.332Z",
    "size": 5505,
    "path": "../public/_nuxt/good-verification.DMFiIdFa.svg"
  },
  "/_nuxt/handshake.Cbd2-FBC.png": {
    "type": "image/png",
    "etag": "\"592b-C1rmcGJ0kxYDhybqVcozzsSm2qY\"",
    "mtime": "2025-09-09T15:26:45.332Z",
    "size": 22827,
    "path": "../public/_nuxt/handshake.Cbd2-FBC.png"
  },
  "/_nuxt/index.5dfcS_tm.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6d5-6y2xXbcii1XiP1Ay+znt+iU4QNY\"",
    "mtime": "2025-09-09T15:26:45.334Z",
    "size": 1749,
    "path": "../public/_nuxt/index.5dfcS_tm.css"
  },
  "/_nuxt/index.BCb7QoGR.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"322-j2+ZxksM0Fwa5LsOxcc3sRMYhHg\"",
    "mtime": "2025-09-09T15:26:45.334Z",
    "size": 802,
    "path": "../public/_nuxt/index.BCb7QoGR.css"
  },
  "/_nuxt/index.DDrFCBot.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"181-Mk9Odj6QDzW9B6wEGmdzfxXZnGw\"",
    "mtime": "2025-09-09T15:26:45.335Z",
    "size": 385,
    "path": "../public/_nuxt/index.DDrFCBot.css"
  },
  "/_nuxt/index.DHrkRdIt.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"8f-z0TOSbrHeKPcMK2fqZY2dGXNcJ8\"",
    "mtime": "2025-09-09T15:26:45.335Z",
    "size": 143,
    "path": "../public/_nuxt/index.DHrkRdIt.css"
  },
  "/_nuxt/index.DW1UiqPQ.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"df-9pgd5flLLh9XFXgIm885J4zDTxY\"",
    "mtime": "2025-09-09T15:26:45.336Z",
    "size": 223,
    "path": "../public/_nuxt/index.DW1UiqPQ.css"
  },
  "/_nuxt/index.Du77-N7U.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"10d-5cw2lERlCv4J9RmUr1al6kEQtJA\"",
    "mtime": "2025-09-09T15:26:45.336Z",
    "size": 269,
    "path": "../public/_nuxt/index.Du77-N7U.css"
  },
  "/_nuxt/index.DvVqi3Lq.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"11e-4Q4HY7PfjcFf1hXnMnhnZ+NyxOo\"",
    "mtime": "2025-09-09T15:26:45.337Z",
    "size": 286,
    "path": "../public/_nuxt/index.DvVqi3Lq.css"
  },
  "/_nuxt/index.k2DQbc94.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2b-oMdroKkbZMdp4wgxEPfOrIuhI+4\"",
    "mtime": "2025-09-09T15:26:45.337Z",
    "size": 43,
    "path": "../public/_nuxt/index.k2DQbc94.css"
  },
  "/_nuxt/jeton.D2Zd9_FU.png": {
    "type": "image/png",
    "etag": "\"1abc-DQIQPMz6lZ+IBEA29PzhDNwPHGE\"",
    "mtime": "2025-09-09T15:26:45.338Z",
    "size": 6844,
    "path": "../public/_nuxt/jeton.D2Zd9_FU.png"
  },
  "/_nuxt/jusdevoyage-dynzyA1I6ds-unsplash.cCRAtw1u.jpg": {
    "type": "image/jpeg",
    "etag": "\"a16b0a-MtlTIzBq2fKqm4DxxR88xiq8rug\"",
    "mtime": "2025-09-09T15:26:45.457Z",
    "size": 10578698,
    "path": "../public/_nuxt/jusdevoyage-dynzyA1I6ds-unsplash.cCRAtw1u.jpg"
  },
  "/_nuxt/jvTQKh0P.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b04-DJiit9yeQ9lnQmTUrU4htd4wAXI\"",
    "mtime": "2025-09-09T15:26:45.445Z",
    "size": 2820,
    "path": "../public/_nuxt/jvTQKh0P.js"
  },
  "/_nuxt/katsiaryna-endruszkiewicz-BteCp6aq4GI-unsplash.BF4epNc2.jpg": {
    "type": "image/jpeg",
    "etag": "\"29aa37-uSP5ea5zqNJXxT5jmPWYTI3wZMc\"",
    "mtime": "2025-09-09T15:26:45.365Z",
    "size": 2730551,
    "path": "../public/_nuxt/katsiaryna-endruszkiewicz-BteCp6aq4GI-unsplash.BF4epNc2.jpg"
  },
  "/_nuxt/kit-formerly-convertkit-tkXJoA_sn78-unsplash.C3nTPPRJ.jpg": {
    "type": "image/jpeg",
    "etag": "\"17fe62-XIZt6rUfEzHHD9Uot2IBDTo1+84\"",
    "mtime": "2025-09-09T15:26:45.357Z",
    "size": 1572450,
    "path": "../public/_nuxt/kit-formerly-convertkit-tkXJoA_sn78-unsplash.C3nTPPRJ.jpg"
  },
  "/_nuxt/logo-manie-bleu-ciel.CAuJ0AFl.svg": {
    "type": "image/svg+xml",
    "etag": "\"2702-OCqaAq9E03d0bReIFA8gM8QBxjU\"",
    "mtime": "2025-09-09T15:26:45.357Z",
    "size": 9986,
    "path": "../public/_nuxt/logo-manie-bleu-ciel.CAuJ0AFl.svg"
  },
  "/_nuxt/logo-manie-creme.27uY6JG2.svg": {
    "type": "image/svg+xml",
    "etag": "\"1e68-l6yREzFfDWcTQZ85VgwJL6IAmik\"",
    "mtime": "2025-09-09T15:26:45.358Z",
    "size": 7784,
    "path": "../public/_nuxt/logo-manie-creme.27uY6JG2.svg"
  },
  "/_nuxt/logo-manie-footer.wcYJhcjM.png": {
    "type": "image/png",
    "etag": "\"2ecb-1WaGZ5ZSj9O/lq/Y/jlNfMvswRw\"",
    "mtime": "2025-09-09T15:26:45.358Z",
    "size": 11979,
    "path": "../public/_nuxt/logo-manie-footer.wcYJhcjM.png"
  },
  "/_nuxt/luka-sonado-77kzE4r-oM0-unsplash.DjBZ-T-p.jpg": {
    "type": "image/jpeg",
    "etag": "\"bfe70-StsoYe7d+7FPdlB8TAgEpJKhaSc\"",
    "mtime": "2025-09-09T15:26:45.365Z",
    "size": 786032,
    "path": "../public/_nuxt/luka-sonado-77kzE4r-oM0-unsplash.DjBZ-T-p.jpg"
  },
  "/_nuxt/marcos-paulo-prado-0pOlBhSsF80-unsplash.1R_LMGxm.jpg": {
    "type": "image/jpeg",
    "etag": "\"1e9d0d-UfDK7cHbwahgRRrUjznMlBIRb/Y\"",
    "mtime": "2025-09-09T15:26:45.374Z",
    "size": 2006285,
    "path": "../public/_nuxt/marcos-paulo-prado-0pOlBhSsF80-unsplash.1R_LMGxm.jpg"
  },
  "/_nuxt/materialdesignicons-webfont.B7mPwVP_.ttf": {
    "type": "font/ttf",
    "etag": "\"13f40c-T1Gk3HWmjT5XMhxEjv3eojyKnbA\"",
    "mtime": "2025-09-09T15:26:45.376Z",
    "size": 1307660,
    "path": "../public/_nuxt/materialdesignicons-webfont.B7mPwVP_.ttf"
  },
  "/_nuxt/materialdesignicons-webfont.CSr8KVlo.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"13f4e8-ApygSKV9BTQg/POr5dCUzjU5OZw\"",
    "mtime": "2025-09-09T15:26:45.379Z",
    "size": 1307880,
    "path": "../public/_nuxt/materialdesignicons-webfont.CSr8KVlo.eot"
  },
  "/_nuxt/materialdesignicons-webfont.Dp5v-WZN.woff2": {
    "type": "font/woff2",
    "etag": "\"62710-TiD2zPQxmd6lyFsjoODwuoH/7iY\"",
    "mtime": "2025-09-09T15:26:45.378Z",
    "size": 403216,
    "path": "../public/_nuxt/materialdesignicons-webfont.Dp5v-WZN.woff2"
  },
  "/_nuxt/materialdesignicons-webfont.PXm3-2wK.woff": {
    "type": "font/woff",
    "etag": "\"8f8d0-zD3UavWtb7zNpwtFPVWUs57NasQ\"",
    "mtime": "2025-09-09T15:26:45.408Z",
    "size": 587984,
    "path": "../public/_nuxt/materialdesignicons-webfont.PXm3-2wK.woff"
  },
  "/_nuxt/n9NSgdPB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"420-O/rWxe35CP7U5xvtXcWdt3gHI4M\"",
    "mtime": "2025-09-09T15:26:45.379Z",
    "size": 1056,
    "path": "../public/_nuxt/n9NSgdPB.js"
  },
  "/_nuxt/nH8YK3n7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d95-YtsdJN2fQVsB4jBHVQawFiVkUaY\"",
    "mtime": "2025-09-09T15:26:45.378Z",
    "size": 3477,
    "path": "../public/_nuxt/nH8YK3n7.js"
  },
  "/_nuxt/notre-histoire.DEnl0qCH.jpg": {
    "type": "image/jpeg",
    "etag": "\"413ebc-xOI0Fv5N6p8rO0DnEftIWojvLNg\"",
    "mtime": "2025-09-09T15:26:45.435Z",
    "size": 4275900,
    "path": "../public/_nuxt/notre-histoire.DEnl0qCH.jpg"
  },
  "/_nuxt/prcKUDAn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"406f-R/Thbb6xsC2wlvCRuDA6pJooeYg\"",
    "mtime": "2025-09-09T15:26:45.383Z",
    "size": 16495,
    "path": "../public/_nuxt/prcKUDAn.js"
  },
  "/_nuxt/profil-vide.CjpMTquN.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"fc-c8kd3UHXl2tdOGMRMuFpldN/mkc\"",
    "mtime": "2025-09-09T15:26:45.383Z",
    "size": 252,
    "path": "../public/_nuxt/profil-vide.CjpMTquN.css"
  },
  "/_nuxt/profil-vide.DzXRbW1q.png": {
    "type": "image/png",
    "etag": "\"21e9-9vlldDOYWgMwHyQrSgFNUH/Q1cY\"",
    "mtime": "2025-09-09T15:26:45.384Z",
    "size": 8681,
    "path": "../public/_nuxt/profil-vide.DzXRbW1q.png"
  },
  "/_nuxt/profilebg.C-rrjIlB.jpg": {
    "type": "image/jpeg",
    "etag": "\"6507-LNQInyKjYy/+zSrDBNMsjZhJrls\"",
    "mtime": "2025-09-09T15:26:45.384Z",
    "size": 25863,
    "path": "../public/_nuxt/profilebg.C-rrjIlB.jpg"
  },
  "/_nuxt/qNSfwXEL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b71-F7mkfMNsaAyIl03HdNVjcGXi1z4\"",
    "mtime": "2025-09-09T15:26:45.389Z",
    "size": 2929,
    "path": "../public/_nuxt/qNSfwXEL.js"
  },
  "/_nuxt/rOmOtuGZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"769-NHgM16g1yFAJeD9y1pucGFF7v1w\"",
    "mtime": "2025-09-09T15:26:45.389Z",
    "size": 1897,
    "path": "../public/_nuxt/rOmOtuGZ.js"
  },
  "/_nuxt/remixicon.symbol.DwgCmvH1.svg": {
    "type": "image/svg+xml",
    "etag": "\"db38b-RrC2wA7G8siCsKCvOFIoeK4Jk7g\"",
    "mtime": "2025-09-09T15:26:45.410Z",
    "size": 897931,
    "path": "../public/_nuxt/remixicon.symbol.DwgCmvH1.svg"
  },
  "/_nuxt/rmGILQxA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1cc0-P4QAMB157DTnMvBtQjY7wXHij6E\"",
    "mtime": "2025-09-09T15:26:45.411Z",
    "size": 7360,
    "path": "../public/_nuxt/rmGILQxA.js"
  },
  "/_nuxt/school.CNdCBhwk.png": {
    "type": "image/png",
    "etag": "\"d494-kNZq8gvgTIOg8kvMiG+iJdsnlLE\"",
    "mtime": "2025-09-09T15:26:45.408Z",
    "size": 54420,
    "path": "../public/_nuxt/school.CNdCBhwk.png"
  },
  "/_nuxt/success.m5j1NYNe.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"9c7-cta1/80Pur+EbTU4MHO0xA1J+HM\"",
    "mtime": "2025-09-09T15:26:45.412Z",
    "size": 2503,
    "path": "../public/_nuxt/success.m5j1NYNe.css"
  },
  "/_nuxt/successToaster.BKmxihTP.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1c3-zQ4nT/QwNT0kJBZV700FPoMCxRg\"",
    "mtime": "2025-09-09T15:26:45.411Z",
    "size": 451,
    "path": "../public/_nuxt/successToaster.BKmxihTP.css"
  },
  "/_nuxt/t2bjG3js.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8e1-J5X/jPkuuCW/QZtZ0g9136fELN8\"",
    "mtime": "2025-09-09T15:26:45.412Z",
    "size": 2273,
    "path": "../public/_nuxt/t2bjG3js.js"
  },
  "/_nuxt/tai-ngo-N79dTlEtq8A-unsplash.DU1byJy3.jpg": {
    "type": "image/jpeg",
    "etag": "\"3eefec-YkjG/y9fRarmL8kxU1Ce3n+0tfo\"",
    "mtime": "2025-09-09T15:26:45.443Z",
    "size": 4124652,
    "path": "../public/_nuxt/tai-ngo-N79dTlEtq8A-unsplash.DU1byJy3.jpg"
  },
  "/_nuxt/test.C-WYfrYq.jpg": {
    "type": "image/jpeg",
    "etag": "\"3eaa-bnuetCBPrfeIH9IEztTbEe6GpZQ\"",
    "mtime": "2025-09-09T15:26:45.412Z",
    "size": 16042,
    "path": "../public/_nuxt/test.C-WYfrYq.jpg"
  },
  "/_nuxt/user-1.DI2cVOf5.jpg": {
    "type": "image/jpeg",
    "etag": "\"1861-c8ps8e3sDUKIT14lqgVAdt0HwOw\"",
    "mtime": "2025-09-09T15:26:45.413Z",
    "size": 6241,
    "path": "../public/_nuxt/user-1.DI2cVOf5.jpg"
  },
  "/_nuxt/vince-fleming-j3lf-Jn6deo-unsplash.BEuDaFW2.jpg": {
    "type": "image/jpeg",
    "etag": "\"305c64-1ApcT7+kVDOZTELD8XFISmocdiA\"",
    "mtime": "2025-09-09T15:26:45.439Z",
    "size": 3169380,
    "path": "../public/_nuxt/vince-fleming-j3lf-Jn6deo-unsplash.BEuDaFW2.jpg"
  },
  "/_nuxt/xx0AQ1xz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"560-pTouOvzq9tvskzvGCfhU8cs1T4Y\"",
    "mtime": "2025-09-09T15:26:45.445Z",
    "size": 1376,
    "path": "../public/_nuxt/xx0AQ1xz.js"
  },
  "/_nuxt/zQpFtjYa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"133-qtOVfUAFLYSkLS2XpsuBzWkUZ3M\"",
    "mtime": "2025-09-09T15:26:45.449Z",
    "size": 307,
    "path": "../public/_nuxt/zQpFtjYa.js"
  },
  "/images/breadcrumb/ChatBc.png": {
    "type": "image/png",
    "etag": "\"4a4f-aaamtPmtYlW902WnsqlFNS3uzYM\"",
    "mtime": "2025-09-09T15:26:45.575Z",
    "size": 19023,
    "path": "../public/images/breadcrumb/ChatBc.png"
  },
  "/images/breadcrumb/emailSv.png": {
    "type": "image/png",
    "etag": "\"5660-07QlTJobeSRBxCtBrcwfg/Q/9WM\"",
    "mtime": "2025-09-09T15:26:45.550Z",
    "size": 22112,
    "path": "../public/images/breadcrumb/emailSv.png"
  },
  "/images/blog/blog-img1.jpg": {
    "type": "image/jpeg",
    "etag": "\"e430-uOsOry5PQXCdOycQ6by431gJ5QE\"",
    "mtime": "2025-09-09T15:26:45.574Z",
    "size": 58416,
    "path": "../public/images/blog/blog-img1.jpg"
  },
  "/images/blog/blog-img10.jpg": {
    "type": "image/jpeg",
    "etag": "\"d021-k3RqeYhWcoSzo0JyrMrf3mrOAu0\"",
    "mtime": "2025-09-09T15:26:45.550Z",
    "size": 53281,
    "path": "../public/images/blog/blog-img10.jpg"
  },
  "/images/blog/blog-img11.jpg": {
    "type": "image/jpeg",
    "etag": "\"b992-+UikS+Ea2lCBmvOiEtETG6dWwrM\"",
    "mtime": "2025-09-09T15:26:45.570Z",
    "size": 47506,
    "path": "../public/images/blog/blog-img11.jpg"
  },
  "/images/blog/blog-img2.jpg": {
    "type": "image/jpeg",
    "etag": "\"18637-sfkBqBF44SU8K6yZi0Q7M2M/N70\"",
    "mtime": "2025-09-09T15:26:45.572Z",
    "size": 99895,
    "path": "../public/images/blog/blog-img2.jpg"
  },
  "/images/blog/blog-img3.jpg": {
    "type": "image/jpeg",
    "etag": "\"85e0-pDyleVH0rVNVTey2GujGV8ZSzZ8\"",
    "mtime": "2025-09-09T15:26:45.570Z",
    "size": 34272,
    "path": "../public/images/blog/blog-img3.jpg"
  },
  "/images/blog/blog-img4.jpg": {
    "type": "image/jpeg",
    "etag": "\"178fd-O6AiZq4pREIr2cL6fCDct9ACqQU\"",
    "mtime": "2025-09-09T15:26:45.571Z",
    "size": 96509,
    "path": "../public/images/blog/blog-img4.jpg"
  },
  "/images/blog/blog-img5.jpg": {
    "type": "image/jpeg",
    "etag": "\"dcb4-CrwlZRQnvBzPtujUErcl6cIw3bw\"",
    "mtime": "2025-09-09T15:26:45.571Z",
    "size": 56500,
    "path": "../public/images/blog/blog-img5.jpg"
  },
  "/images/blog/blog-img6.jpg": {
    "type": "image/jpeg",
    "etag": "\"a491-Trpimk7Fqjc1iKq8ZJM/upL3Iws\"",
    "mtime": "2025-09-09T15:26:45.572Z",
    "size": 42129,
    "path": "../public/images/blog/blog-img6.jpg"
  },
  "/images/blog/blog-img7.jpg": {
    "type": "image/jpeg",
    "etag": "\"c4b5-v/H/oOWouv/WacRwuO2QIi4gyAg\"",
    "mtime": "2025-09-09T15:26:45.572Z",
    "size": 50357,
    "path": "../public/images/blog/blog-img7.jpg"
  },
  "/images/blog/blog-img8.jpg": {
    "type": "image/jpeg",
    "etag": "\"1b777-PpGzUpBkREgIbiF2qNGC3C0aeow\"",
    "mtime": "2025-09-09T15:26:45.574Z",
    "size": 112503,
    "path": "../public/images/blog/blog-img8.jpg"
  },
  "/images/blog/blog-img9.jpg": {
    "type": "image/jpeg",
    "etag": "\"1a367-82Kmv/vumreRS/vV0GEVWplOmxU\"",
    "mtime": "2025-09-09T15:26:45.574Z",
    "size": 107367,
    "path": "../public/images/blog/blog-img9.jpg"
  },
  "/images/chat/icon-adobe.svg": {
    "type": "image/svg+xml",
    "etag": "\"297-U9Icpvfu+E8jg978dMZkSXyS6yg\"",
    "mtime": "2025-09-09T15:26:45.550Z",
    "size": 663,
    "path": "../public/images/chat/icon-adobe.svg"
  },
  "/images/chat/icon-chrome.svg": {
    "type": "image/svg+xml",
    "etag": "\"4ef-vhoMmy1DpL/MhnpXQ3sT2qSe1ic\"",
    "mtime": "2025-09-09T15:26:45.575Z",
    "size": 1263,
    "path": "../public/images/chat/icon-chrome.svg"
  },
  "/images/chat/icon-figma.svg": {
    "type": "image/svg+xml",
    "etag": "\"260-t17ASRNFvszafIFdzw7o3hg0gio\"",
    "mtime": "2025-09-09T15:26:45.574Z",
    "size": 608,
    "path": "../public/images/chat/icon-figma.svg"
  },
  "/images/chat/icon-javascript.svg": {
    "type": "image/svg+xml",
    "etag": "\"574-/FmN5aAGLStWgpyLmvnkEEh+/CA\"",
    "mtime": "2025-09-09T15:26:45.574Z",
    "size": 1396,
    "path": "../public/images/chat/icon-javascript.svg"
  },
  "/images/chat/icon-zip-folder.svg": {
    "type": "image/svg+xml",
    "etag": "\"854-wd/qQJRcwoO/OcS2BuC7d+HRkpc\"",
    "mtime": "2025-09-09T15:26:45.575Z",
    "size": 2132,
    "path": "../public/images/chat/icon-zip-folder.svg"
  },
  "/images/backgrounds/bootstrap.png": {
    "type": "image/png",
    "etag": "\"3014-yOxM52/cmNBW8VrFcdzFFjjj1g4\"",
    "mtime": "2025-09-09T15:26:45.547Z",
    "size": 12308,
    "path": "../public/images/backgrounds/bootstrap.png"
  },
  "/images/backgrounds/bronze-pot.svg": {
    "type": "image/svg+xml",
    "etag": "\"1d5a5-ehA2ehFRSJLwwv5Bf3aMF9fjLfc\"",
    "mtime": "2025-09-09T15:26:45.562Z",
    "size": 120229,
    "path": "../public/images/backgrounds/bronze-pot.svg"
  },
  "/images/backgrounds/bronze.png": {
    "type": "image/png",
    "etag": "\"d15e-hF65rWcQ3pDKDAiuMD4ppXsIH5k\"",
    "mtime": "2025-09-09T15:26:45.561Z",
    "size": 53598,
    "path": "../public/images/backgrounds/bronze.png"
  },
  "/images/backgrounds/empty_mail.png": {
    "type": "image/png",
    "etag": "\"be07-ugmjGpGvvMdaxgBck3+E0t8znI4\"",
    "mtime": "2025-09-09T15:26:45.562Z",
    "size": 48647,
    "path": "../public/images/backgrounds/empty_mail.png"
  },
  "/images/backgrounds/errorimg.svg": {
    "type": "image/svg+xml",
    "etag": "\"9730-oMOKsu6u7BluGG960TI8P751jnU\"",
    "mtime": "2025-09-09T15:26:45.563Z",
    "size": 38704,
    "path": "../public/images/backgrounds/errorimg.svg"
  },
  "/images/backgrounds/feedback-message.png": {
    "type": "image/png",
    "etag": "\"3896-zQTmv5vUdZLxTV9SGoQVL2tNpPI\"",
    "mtime": "2025-09-09T15:26:45.563Z",
    "size": 14486,
    "path": "../public/images/backgrounds/feedback-message.png"
  },
  "/images/backgrounds/flutter.png": {
    "type": "image/png",
    "etag": "\"2df4-T/NhIuIAG31UWvt4C4quvmaYRGY\"",
    "mtime": "2025-09-09T15:26:45.563Z",
    "size": 11764,
    "path": "../public/images/backgrounds/flutter.png"
  },
  "/images/backgrounds/gifts.png": {
    "type": "image/png",
    "etag": "\"6235-Xz22Xo97IX+Gv4dbquUcuy4JzQ8\"",
    "mtime": "2025-09-09T15:26:45.563Z",
    "size": 25141,
    "path": "../public/images/backgrounds/gifts.png"
  },
  "/images/backgrounds/gold-pot.svg": {
    "type": "image/svg+xml",
    "etag": "\"1d5a5-VlvEtoW5RzqRbSF85ZPDQX4bXYo\"",
    "mtime": "2025-09-09T15:26:45.564Z",
    "size": 120229,
    "path": "../public/images/backgrounds/gold-pot.svg"
  },
  "/images/backgrounds/gold.png": {
    "type": "image/png",
    "etag": "\"11f0e-uBAneFTgrrD7UfAP5mlN6WYo0PM\"",
    "mtime": "2025-09-09T15:26:45.565Z",
    "size": 73486,
    "path": "../public/images/backgrounds/gold.png"
  },
  "/images/backgrounds/jquery.png": {
    "type": "image/png",
    "etag": "\"2dd8-O/rNFfCR8t8LEy/k1MMIPjnGej0\"",
    "mtime": "2025-09-09T15:26:45.564Z",
    "size": 11736,
    "path": "../public/images/backgrounds/jquery.png"
  },
  "/images/backgrounds/js.png": {
    "type": "image/png",
    "etag": "\"57cd-NxYQuidFYFzrgCnmUOZiO8Xsm1M\"",
    "mtime": "2025-09-09T15:26:45.564Z",
    "size": 22477,
    "path": "../public/images/backgrounds/js.png"
  },
  "/images/backgrounds/login-bg.svg": {
    "type": "image/svg+xml",
    "etag": "\"479a-aHhAT9hRWFA3Yfw4HICCpKJFKME\"",
    "mtime": "2025-09-09T15:26:45.565Z",
    "size": 18330,
    "path": "../public/images/backgrounds/login-bg.svg"
  },
  "/images/backgrounds/login-security.png": {
    "type": "image/png",
    "etag": "\"20d39-Jm4NGPdghYKYF0PhVia4+WSXnyg\"",
    "mtime": "2025-09-09T15:26:45.568Z",
    "size": 134457,
    "path": "../public/images/backgrounds/login-security.png"
  },
  "/images/backgrounds/maintenance.svg": {
    "type": "image/svg+xml",
    "etag": "\"d848-lJX0mzi2CN95+DgQjN9Jvzol7bo\"",
    "mtime": "2025-09-09T15:26:45.565Z",
    "size": 55368,
    "path": "../public/images/backgrounds/maintenance.svg"
  },
  "/images/backgrounds/man-working-on-laptop.png": {
    "type": "image/png",
    "etag": "\"f686-O+flmSNKg1eiA4C6Uy+9yW16/GE\"",
    "mtime": "2025-09-09T15:26:45.566Z",
    "size": 63110,
    "path": "../public/images/backgrounds/man-working-on-laptop.png"
  },
  "/images/backgrounds/preview-img.png": {
    "type": "image/png",
    "etag": "\"775a-viT2Cg67WtxEE9r89SOBLLQrJJ8\"",
    "mtime": "2025-09-09T15:26:45.566Z",
    "size": 30554,
    "path": "../public/images/backgrounds/preview-img.png"
  },
  "/images/backgrounds/profilebg-2.jpg": {
    "type": "image/jpeg",
    "etag": "\"5c7e-66RSGmE479tnQkwsWenM5W1KB94\"",
    "mtime": "2025-09-09T15:26:45.565Z",
    "size": 23678,
    "path": "../public/images/backgrounds/profilebg-2.jpg"
  },
  "/images/backgrounds/profilebg.jpg": {
    "type": "image/jpeg",
    "etag": "\"6507-LNQInyKjYy/+zSrDBNMsjZhJrls\"",
    "mtime": "2025-09-09T15:26:45.566Z",
    "size": 25863,
    "path": "../public/images/backgrounds/profilebg.jpg"
  },
  "/images/backgrounds/python.png": {
    "type": "image/png",
    "etag": "\"1b3c-AMy0gBTCLcCdxTGkbHQcjq9RG7M\"",
    "mtime": "2025-09-09T15:26:45.567Z",
    "size": 6972,
    "path": "../public/images/backgrounds/python.png"
  },
  "/images/backgrounds/school.png": {
    "type": "image/png",
    "etag": "\"d494-kNZq8gvgTIOg8kvMiG+iJdsnlLE\"",
    "mtime": "2025-09-09T15:26:45.570Z",
    "size": 54420,
    "path": "../public/images/backgrounds/school.png"
  },
  "/images/backgrounds/shap-login.png": {
    "type": "image/png",
    "etag": "\"e1c-VjaQsy7KNHyBPtaoCeoaQco/1LM\"",
    "mtime": "2025-09-09T15:26:45.567Z",
    "size": 3612,
    "path": "../public/images/backgrounds/shap-login.png"
  },
  "/images/backgrounds/silver-pot.svg": {
    "type": "image/svg+xml",
    "etag": "\"1d59e-HwxQPLvoa8dF98uj5tFXJDRCyXM\"",
    "mtime": "2025-09-09T15:26:45.568Z",
    "size": 120222,
    "path": "../public/images/backgrounds/silver-pot.svg"
  },
  "/images/backgrounds/silver.png": {
    "type": "image/png",
    "etag": "\"2152a-9gTn70ZwiwJQb5WgNaHNr2Un0Ks\"",
    "mtime": "2025-09-09T15:26:45.568Z",
    "size": 136490,
    "path": "../public/images/backgrounds/silver.png"
  },
  "/images/backgrounds/test.jpg": {
    "type": "image/jpeg",
    "etag": "\"3eaa-bnuetCBPrfeIH9IEztTbEe6GpZQ\"",
    "mtime": "2025-09-09T15:26:45.569Z",
    "size": 16042,
    "path": "../public/images/backgrounds/test.jpg"
  },
  "/images/backgrounds/track-bg.png": {
    "type": "image/png",
    "etag": "\"6702-eq0a5HCYAuFGhzTVcznfS+c4aBc\"",
    "mtime": "2025-09-09T15:26:45.569Z",
    "size": 26370,
    "path": "../public/images/backgrounds/track-bg.png"
  },
  "/images/backgrounds/unlimited-bg.png": {
    "type": "image/png",
    "etag": "\"3ef5-3TFf7OzWQbmpd9fq2+0tdBow9VY\"",
    "mtime": "2025-09-09T15:26:45.573Z",
    "size": 16117,
    "path": "../public/images/backgrounds/unlimited-bg.png"
  },
  "/images/backgrounds/vuejs.png": {
    "type": "image/png",
    "etag": "\"301b-wAgsjs2x9apL5StSG6mTr88gNLY\"",
    "mtime": "2025-09-09T15:26:45.569Z",
    "size": 12315,
    "path": "../public/images/backgrounds/vuejs.png"
  },
  "/images/backgrounds/welcome-bg2.png": {
    "type": "image/png",
    "etag": "\"211bb-zPr4fllAXjMDL5dyyiko+uNeHCg\"",
    "mtime": "2025-09-09T15:26:45.571Z",
    "size": 135611,
    "path": "../public/images/backgrounds/welcome-bg2.png"
  },
  "/images/empty-state/profil-vide.png": {
    "type": "image/png",
    "etag": "\"21e9-9vlldDOYWgMwHyQrSgFNUH/Q1cY\"",
    "mtime": "2025-09-09T15:26:45.550Z",
    "size": 8681,
    "path": "../public/images/empty-state/profil-vide.png"
  },
  "/images/flag/icon-flag-en.svg": {
    "type": "image/svg+xml",
    "etag": "\"4e7-9WVLA4ChipKa63s4sJg3wEJmWJA\"",
    "mtime": "2025-09-09T15:26:45.550Z",
    "size": 1255,
    "path": "../public/images/flag/icon-flag-en.svg"
  },
  "/images/flag/icon-flag-fr.svg": {
    "type": "image/svg+xml",
    "etag": "\"1cb-0INTTEs9KkMagziiuLJS/YXeHv4\"",
    "mtime": "2025-09-09T15:26:45.575Z",
    "size": 459,
    "path": "../public/images/flag/icon-flag-fr.svg"
  },
  "/images/flag/icon-flag-ro.svg": {
    "type": "image/svg+xml",
    "etag": "\"1ab4-ayHITYH2+2wy2MwG/E+gx/OhCaI\"",
    "mtime": "2025-09-09T15:26:45.575Z",
    "size": 6836,
    "path": "../public/images/flag/icon-flag-ro.svg"
  },
  "/images/flag/icon-flag-vn.svg": {
    "type": "image/svg+xml",
    "etag": "\"2d0-KhgkuO/notlEOvhBzjXFaH50pEU\"",
    "mtime": "2025-09-09T15:26:45.576Z",
    "size": 720,
    "path": "../public/images/flag/icon-flag-vn.svg"
  },
  "/images/flag/icon-flag-zh.svg": {
    "type": "image/svg+xml",
    "etag": "\"62a-jCbxUtUNLY6WUV6ToVFhwgAzY3w\"",
    "mtime": "2025-09-09T15:26:45.575Z",
    "size": 1578,
    "path": "../public/images/flag/icon-flag-zh.svg"
  },
  "/images/kanban/task-img1.png": {
    "type": "image/png",
    "etag": "\"8001-A3lX7FU78HBb4GkSUi80f+28Ziw\"",
    "mtime": "2025-09-09T15:26:45.551Z",
    "size": 32769,
    "path": "../public/images/kanban/task-img1.png"
  },
  "/images/kanban/task-img2.png": {
    "type": "image/png",
    "etag": "\"6ed0-RVUSAuZIAOQ2FMwqAOO4qHfMhwc\"",
    "mtime": "2025-09-09T15:26:45.577Z",
    "size": 28368,
    "path": "../public/images/kanban/task-img2.png"
  },
  "/images/logos/logo-footer-droits.png": {
    "type": "image/png",
    "etag": "\"fbe-/wWDaC0pDxuH9VGQTq2uUZ+/EbU\"",
    "mtime": "2025-09-09T15:26:45.550Z",
    "size": 4030,
    "path": "../public/images/logos/logo-footer-droits.png"
  },
  "/images/logos/logo-manie-bleu-ciel.svg": {
    "type": "image/svg+xml",
    "etag": "\"2702-OCqaAq9E03d0bReIFA8gM8QBxjU\"",
    "mtime": "2025-09-09T15:26:45.576Z",
    "size": 9986,
    "path": "../public/images/logos/logo-manie-bleu-ciel.svg"
  },
  "/images/logos/logo-manie-creme.svg": {
    "type": "image/svg+xml",
    "etag": "\"1e68-l6yREzFfDWcTQZ85VgwJL6IAmik\"",
    "mtime": "2025-09-09T15:26:45.576Z",
    "size": 7784,
    "path": "../public/images/logos/logo-manie-creme.svg"
  },
  "/images/logos/logo-manie-footer.png": {
    "type": "image/png",
    "etag": "\"2ecb-1WaGZ5ZSj9O/lq/Y/jlNfMvswRw\"",
    "mtime": "2025-09-09T15:26:45.576Z",
    "size": 11979,
    "path": "../public/images/logos/logo-manie-footer.png"
  },
  "/images/panier/jeton.png": {
    "type": "image/png",
    "etag": "\"1abc-DQIQPMz6lZ+IBEA29PzhDNwPHGE\"",
    "mtime": "2025-09-09T15:26:45.551Z",
    "size": 6844,
    "path": "../public/images/panier/jeton.png"
  },
  "/images/panier/stripe_logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"6e9-t2n/rFhzN4x/6zJ8UTjrOGnlB7c\"",
    "mtime": "2025-09-09T15:26:45.577Z",
    "size": 1769,
    "path": "../public/images/panier/stripe_logo.svg"
  },
  "/images/products/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"6a64-Yf8iaISBCKh1WP3Z8xxdFLi4YqY\"",
    "mtime": "2025-09-09T15:26:45.577Z",
    "size": 27236,
    "path": "../public/images/products/1.jpg"
  },
  "/images/products/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"600b-b51PH8X6wmNCf2C7GS3K0yXMoLg\"",
    "mtime": "2025-09-09T15:26:45.551Z",
    "size": 24587,
    "path": "../public/images/products/2.jpg"
  },
  "/images/products/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"c71a-aPPe1xbYC9yNOSP6zl52Awv30rk\"",
    "mtime": "2025-09-09T15:26:45.577Z",
    "size": 50970,
    "path": "../public/images/products/3.jpg"
  },
  "/images/products/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"2be7-W4qQE7I51vL1qKZjfGILjUsnHCI\"",
    "mtime": "2025-09-09T15:26:45.577Z",
    "size": 11239,
    "path": "../public/images/products/4.jpg"
  },
  "/images/products/empty-shopping-cart.svg": {
    "type": "image/svg+xml",
    "etag": "\"431c-L2YP9QSlacz/HDgpbwgeSAe3QrM\"",
    "mtime": "2025-09-09T15:26:45.598Z",
    "size": 17180,
    "path": "../public/images/products/empty-shopping-cart.svg"
  },
  "/images/products/payment-complete.svg": {
    "type": "image/svg+xml",
    "etag": "\"a194-sc5JKudHx/2S3eieFZ0d7ftHoBM\"",
    "mtime": "2025-09-09T15:26:45.585Z",
    "size": 41364,
    "path": "../public/images/products/payment-complete.svg"
  },
  "/images/products/payment.svg": {
    "type": "image/svg+xml",
    "etag": "\"163fe-m0kZvAcH6QtEfvUfdV9LlJKncNU\"",
    "mtime": "2025-09-09T15:26:45.578Z",
    "size": 91134,
    "path": "../public/images/products/payment.svg"
  },
  "/images/products/product-1.jpg": {
    "type": "image/jpeg",
    "etag": "\"21ee-VOYY3wv8tbWi/zizb7hMy7gYtL4\"",
    "mtime": "2025-09-09T15:26:45.578Z",
    "size": 8686,
    "path": "../public/images/products/product-1.jpg"
  },
  "/images/products/product-10.jpg": {
    "type": "image/jpeg",
    "etag": "\"bfb0-8uNOu9F+msmTKL8e+uchvqXI+Iw\"",
    "mtime": "2025-09-09T15:26:45.578Z",
    "size": 49072,
    "path": "../public/images/products/product-10.jpg"
  },
  "/images/products/product-11.jpg": {
    "type": "image/jpeg",
    "etag": "\"62cc-pi/9FP9iAwoy3pNuvcg6GQUqupw\"",
    "mtime": "2025-09-09T15:26:45.579Z",
    "size": 25292,
    "path": "../public/images/products/product-11.jpg"
  },
  "/images/products/product-12.jpg": {
    "type": "image/jpeg",
    "etag": "\"5a9f-TdPzuZqMQWCsLLsAH97UdxI1W9A\"",
    "mtime": "2025-09-09T15:26:45.580Z",
    "size": 23199,
    "path": "../public/images/products/product-12.jpg"
  },
  "/images/products/product-13.jpg": {
    "type": "image/jpeg",
    "etag": "\"eef5-626FpG2GD/p+bDmxMa7RNeGJC4I\"",
    "mtime": "2025-09-09T15:26:45.579Z",
    "size": 61173,
    "path": "../public/images/products/product-13.jpg"
  },
  "/images/products/product-14.jpg": {
    "type": "image/jpeg",
    "etag": "\"6402-3e0PEQgbLv57yll9d8UqAQa1//Y\"",
    "mtime": "2025-09-09T15:26:45.579Z",
    "size": 25602,
    "path": "../public/images/products/product-14.jpg"
  },
  "/images/products/product-15.jpg": {
    "type": "image/jpeg",
    "etag": "\"bac2-Woctu9Spzt3mcxNQ4DapoYv4X8A\"",
    "mtime": "2025-09-09T15:26:45.581Z",
    "size": 47810,
    "path": "../public/images/products/product-15.jpg"
  },
  "/images/products/product-16.jpg": {
    "type": "image/jpeg",
    "etag": "\"6dcf-6GWMgDPTToLtQElqtDEJS1rYpcw\"",
    "mtime": "2025-09-09T15:26:45.580Z",
    "size": 28111,
    "path": "../public/images/products/product-16.jpg"
  },
  "/images/products/product-17.jpg": {
    "type": "image/jpeg",
    "etag": "\"12c5b-HXsyg57wjyinkj3lHflz283kRVU\"",
    "mtime": "2025-09-09T15:26:45.583Z",
    "size": 76891,
    "path": "../public/images/products/product-17.jpg"
  },
  "/images/products/product-18.jpg": {
    "type": "image/jpeg",
    "etag": "\"6823-BplIbarEo+Cl9Q/8V1gEH0Gt7Z0\"",
    "mtime": "2025-09-09T15:26:45.584Z",
    "size": 26659,
    "path": "../public/images/products/product-18.jpg"
  },
  "/images/products/product-19.jpg": {
    "type": "image/jpeg",
    "etag": "\"850d-w0ASNjvfHiaZI12nPy2TmKgHzuo\"",
    "mtime": "2025-09-09T15:26:45.582Z",
    "size": 34061,
    "path": "../public/images/products/product-19.jpg"
  },
  "/images/products/product-2.jpg": {
    "type": "image/jpeg",
    "etag": "\"1ae4-4rp4vkyjlC3yDoXPoHRCOLvh1dE\"",
    "mtime": "2025-09-09T15:26:45.580Z",
    "size": 6884,
    "path": "../public/images/products/product-2.jpg"
  },
  "/images/products/product-20.jpg": {
    "type": "image/jpeg",
    "etag": "\"10b9a-k52289nL19CsjLqouS5u64X51vw\"",
    "mtime": "2025-09-09T15:26:45.587Z",
    "size": 68506,
    "path": "../public/images/products/product-20.jpg"
  },
  "/images/products/product-21.jpg": {
    "type": "image/jpeg",
    "etag": "\"796e-tDh4OPK9CdSVUsO99jUNbVIqYMI\"",
    "mtime": "2025-09-09T15:26:45.583Z",
    "size": 31086,
    "path": "../public/images/products/product-21.jpg"
  },
  "/images/products/product-3.jpg": {
    "type": "image/jpeg",
    "etag": "\"20bf-ZjbA6c5kc7QOVsq8SKCPklEmF2I\"",
    "mtime": "2025-09-09T15:26:45.595Z",
    "size": 8383,
    "path": "../public/images/products/product-3.jpg"
  },
  "/images/products/product-4.jpg": {
    "type": "image/jpeg",
    "etag": "\"253e-L57D7fOwHOovjkrAk/bBXvyiSds\"",
    "mtime": "2025-09-09T15:26:45.588Z",
    "size": 9534,
    "path": "../public/images/products/product-4.jpg"
  },
  "/images/products/product-5.png": {
    "type": "image/png",
    "etag": "\"c3e4-q2LOX9tEqZi+HIFfjSZbySDwMkU\"",
    "mtime": "2025-09-09T15:26:45.584Z",
    "size": 50148,
    "path": "../public/images/products/product-5.png"
  },
  "/images/products/product-6.png": {
    "type": "image/png",
    "etag": "\"8a33-sj18htcCjoqhQhw7IgntrCLlGWc\"",
    "mtime": "2025-09-09T15:26:45.596Z",
    "size": 35379,
    "path": "../public/images/products/product-6.png"
  },
  "/images/products/product-7.png": {
    "type": "image/png",
    "etag": "\"d16c-6Ejtv1QKbd29athWczJapNuDyP0\"",
    "mtime": "2025-09-09T15:26:45.587Z",
    "size": 53612,
    "path": "../public/images/products/product-7.png"
  },
  "/images/products/product-8.png": {
    "type": "image/png",
    "etag": "\"bbab-Vbf+BI9dvWSjEVfygfG3bsrVATA\"",
    "mtime": "2025-09-09T15:26:45.586Z",
    "size": 48043,
    "path": "../public/images/products/product-8.png"
  },
  "/images/products/product-9.png": {
    "type": "image/png",
    "etag": "\"16bd3-75dtrTNpBv1Qe6q2vQTviXBQ0Bo\"",
    "mtime": "2025-09-09T15:26:45.589Z",
    "size": 93139,
    "path": "../public/images/products/product-9.png"
  },
  "/images/products/s1.jpg": {
    "type": "image/jpeg",
    "etag": "\"20117-wnkRSFtC+Gsnt7bcMiuR98qugxo\"",
    "mtime": "2025-09-09T15:26:45.595Z",
    "size": 131351,
    "path": "../public/images/products/s1.jpg"
  },
  "/images/products/s10.jpg": {
    "type": "image/jpeg",
    "etag": "\"1a394-whBV7lSp923npsSg+xwdalrSsl8\"",
    "mtime": "2025-09-09T15:26:45.590Z",
    "size": 107412,
    "path": "../public/images/products/s10.jpg"
  },
  "/images/products/s11.jpg": {
    "type": "image/jpeg",
    "etag": "\"1d1c6-JDumy8/hpZzXJHCA8UGFq0UAycs\"",
    "mtime": "2025-09-09T15:26:45.591Z",
    "size": 119238,
    "path": "../public/images/products/s11.jpg"
  },
  "/images/products/s12.jpg": {
    "type": "image/jpeg",
    "etag": "\"1be74-+EmaYmUduhrrDxRcVeRi5pMT+HQ\"",
    "mtime": "2025-09-09T15:26:45.591Z",
    "size": 114292,
    "path": "../public/images/products/s12.jpg"
  },
  "/images/products/s13.jpg": {
    "type": "image/jpeg",
    "etag": "\"a7d2-M8qVtS9gRshFFyUCjCdtJOBNh0k\"",
    "mtime": "2025-09-09T15:26:45.591Z",
    "size": 42962,
    "path": "../public/images/products/s13.jpg"
  },
  "/images/products/s14.jpg": {
    "type": "image/jpeg",
    "etag": "\"b3ca-CbLbA1q44l522zSN6Y5kPju1u0U\"",
    "mtime": "2025-09-09T15:26:45.591Z",
    "size": 46026,
    "path": "../public/images/products/s14.jpg"
  },
  "/images/products/s15.jpg": {
    "type": "image/jpeg",
    "etag": "\"17c84-vANqz0lQeDdMV5huCxKdfcpLJpo\"",
    "mtime": "2025-09-09T15:26:45.596Z",
    "size": 97412,
    "path": "../public/images/products/s15.jpg"
  },
  "/images/products/s16.jpg": {
    "type": "image/jpeg",
    "etag": "\"17fc2-Fwn+jj9aOqObtO2RcXkbez5ox+s\"",
    "mtime": "2025-09-09T15:26:45.595Z",
    "size": 98242,
    "path": "../public/images/products/s16.jpg"
  },
  "/images/products/s2.jpg": {
    "type": "image/jpeg",
    "etag": "\"17ac1-PAw8MTYbSwE+RTXclhII4CMQs00\"",
    "mtime": "2025-09-09T15:26:45.596Z",
    "size": 96961,
    "path": "../public/images/products/s2.jpg"
  },
  "/images/products/s3.jpg": {
    "type": "image/jpeg",
    "etag": "\"188f4-/lshTxEmegX1ynLN97YI24Ch3Xk\"",
    "mtime": "2025-09-09T15:26:45.597Z",
    "size": 100596,
    "path": "../public/images/products/s3.jpg"
  },
  "/images/products/s4.jpg": {
    "type": "image/jpeg",
    "etag": "\"2120d-F8aq+waaZSMwHdDwOGWXGKWPhRo\"",
    "mtime": "2025-09-09T15:26:45.598Z",
    "size": 135693,
    "path": "../public/images/products/s4.jpg"
  },
  "/images/products/s5.jpg": {
    "type": "image/jpeg",
    "etag": "\"14f28-mcvXBEr3E3KILlaN+4EUi4ahvkg\"",
    "mtime": "2025-09-09T15:26:45.597Z",
    "size": 85800,
    "path": "../public/images/products/s5.jpg"
  },
  "/images/products/s6.jpg": {
    "type": "image/jpeg",
    "etag": "\"1b571-RHXFxT/34oLPhg/H0+mlMEFd69I\"",
    "mtime": "2025-09-09T15:26:45.599Z",
    "size": 111985,
    "path": "../public/images/products/s6.jpg"
  },
  "/images/products/s7.jpg": {
    "type": "image/jpeg",
    "etag": "\"1f1d1-oTE6lVEM/ORl9ywBhyGwmGA5EWc\"",
    "mtime": "2025-09-09T15:26:45.599Z",
    "size": 127441,
    "path": "../public/images/products/s7.jpg"
  },
  "/images/products/s8.jpg": {
    "type": "image/jpeg",
    "etag": "\"1b6ad-GJUvGzGdPwXQIoLlXm7qDjo0NZo\"",
    "mtime": "2025-09-09T15:26:45.599Z",
    "size": 112301,
    "path": "../public/images/products/s8.jpg"
  },
  "/images/products/s9.jpg": {
    "type": "image/jpeg",
    "etag": "\"1f710-0HHceg+lquMYAAjWlUNItWZ8QVw\"",
    "mtime": "2025-09-09T15:26:45.597Z",
    "size": 128784,
    "path": "../public/images/products/s9.jpg"
  },
  "/images/profile/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1804-3y++sUAKzaCQmjLBz2v0kvESHgc\"",
    "mtime": "2025-09-09T15:26:45.552Z",
    "size": 6148,
    "path": "../public/images/profile/.DS_Store"
  },
  "/images/profile/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"1b35-dwWyYdJSMK6TyL+TquzoPikw/34\"",
    "mtime": "2025-09-09T15:26:45.598Z",
    "size": 6965,
    "path": "../public/images/profile/1.jpg"
  },
  "/images/profile/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"1dd2-XC2W8SH8aLo+EOaltDJFL70sW00\"",
    "mtime": "2025-09-09T15:26:45.599Z",
    "size": 7634,
    "path": "../public/images/profile/2.jpg"
  },
  "/images/profile/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"1e5c-EvUpq09To+kt+Hzr0iFMoT0ZInQ\"",
    "mtime": "2025-09-09T15:26:45.599Z",
    "size": 7772,
    "path": "../public/images/profile/3.jpg"
  },
  "/images/profile/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"206e-oQ5Wpfvzo8G/AvKhN1LlaCHxa9w\"",
    "mtime": "2025-09-09T15:26:45.599Z",
    "size": 8302,
    "path": "../public/images/profile/4.jpg"
  },
  "/images/profile/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"21fb-f55iSKzx9RoLxlasacAgsJhkhoQ\"",
    "mtime": "2025-09-09T15:26:45.600Z",
    "size": 8699,
    "path": "../public/images/profile/5.jpg"
  },
  "/images/profile/6.jpg": {
    "type": "image/jpeg",
    "etag": "\"193f-HC11UAoAzDkkcwk8qiFpBbzQxsw\"",
    "mtime": "2025-09-09T15:26:45.599Z",
    "size": 6463,
    "path": "../public/images/profile/6.jpg"
  },
  "/images/profile/7.jpg": {
    "type": "image/jpeg",
    "etag": "\"1fff-D4m3IfAcUIwUaH2l1ioZc3PDEL4\"",
    "mtime": "2025-09-09T15:26:45.600Z",
    "size": 8191,
    "path": "../public/images/profile/7.jpg"
  },
  "/images/profile/8.jpg": {
    "type": "image/jpeg",
    "etag": "\"1c5c-ZZRd5ly6CN+hEyJX8qkjnxb3a0k\"",
    "mtime": "2025-09-09T15:26:45.600Z",
    "size": 7260,
    "path": "../public/images/profile/8.jpg"
  },
  "/images/profile/9.jpg": {
    "type": "image/jpeg",
    "etag": "\"1c5c-ZZRd5ly6CN+hEyJX8qkjnxb3a0k\"",
    "mtime": "2025-09-09T15:26:45.600Z",
    "size": 7260,
    "path": "../public/images/profile/9.jpg"
  },
  "/images/profile/handshake.png": {
    "type": "image/png",
    "etag": "\"592b-C1rmcGJ0kxYDhybqVcozzsSm2qY\"",
    "mtime": "2025-09-09T15:26:45.600Z",
    "size": 22827,
    "path": "../public/images/profile/handshake.png"
  },
  "/images/profile/index.ts": {
    "type": "video/mp2t",
    "etag": "\"45b5-D4E3PBhHqZyXU+kMBpkDpylzKpQ\"",
    "mtime": "2025-09-09T15:26:45.601Z",
    "size": 17845,
    "path": "../public/images/profile/index.ts"
  },
  "/images/profile/profile-1.png": {
    "type": "image/png",
    "etag": "\"1861-c8ps8e3sDUKIT14lqgVAdt0HwOw\"",
    "mtime": "2025-09-09T15:26:45.600Z",
    "size": 6241,
    "path": "../public/images/profile/profile-1.png"
  },
  "/images/profile/profile-2.png": {
    "type": "image/png",
    "etag": "\"15cd-lMADH47mYxaasrTiAmQw9UQS1qo\"",
    "mtime": "2025-09-09T15:26:45.600Z",
    "size": 5581,
    "path": "../public/images/profile/profile-2.png"
  },
  "/images/profile/profile-3.png": {
    "type": "image/png",
    "etag": "\"15d7-h4yBDN9GNVKbB3QFJ4RgNjSAw0g\"",
    "mtime": "2025-09-09T15:26:45.600Z",
    "size": 5591,
    "path": "../public/images/profile/profile-3.png"
  },
  "/images/profile/profile-4.png": {
    "type": "image/png",
    "etag": "\"298b-qgWPl6LxBPzEb7F+uKRiaNPj13s\"",
    "mtime": "2025-09-09T15:26:45.601Z",
    "size": 10635,
    "path": "../public/images/profile/profile-4.png"
  },
  "/images/profile/user-1.jpg": {
    "type": "image/jpeg",
    "etag": "\"1861-c8ps8e3sDUKIT14lqgVAdt0HwOw\"",
    "mtime": "2025-09-09T15:26:45.601Z",
    "size": 6241,
    "path": "../public/images/profile/user-1.jpg"
  },
  "/images/profile/user-2.jpg": {
    "type": "image/jpeg",
    "etag": "\"1861-c8ps8e3sDUKIT14lqgVAdt0HwOw\"",
    "mtime": "2025-09-09T15:26:45.601Z",
    "size": 6241,
    "path": "../public/images/profile/user-2.jpg"
  },
  "/images/profile/user-5.jpg": {
    "type": "image/jpeg",
    "etag": "\"1861-c8ps8e3sDUKIT14lqgVAdt0HwOw\"",
    "mtime": "2025-09-09T15:26:45.601Z",
    "size": 6241,
    "path": "../public/images/profile/user-5.jpg"
  },
  "/images/profile/user1.jpg": {
    "type": "image/jpeg",
    "etag": "\"1861-c8ps8e3sDUKIT14lqgVAdt0HwOw\"",
    "mtime": "2025-09-09T15:26:45.601Z",
    "size": 6241,
    "path": "../public/images/profile/user1.jpg"
  },
  "/images/profile/user6.jpg": {
    "type": "image/jpeg",
    "etag": "\"149c0-BTz8DmobsIGDhbaZIWppl+odeqE\"",
    "mtime": "2025-09-09T15:26:45.602Z",
    "size": 84416,
    "path": "../public/images/profile/user6.jpg"
  },
  "/images/side-picture/aamir-ahmad-WhZW5k8q5CQ-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"433b50-JtL7BXix2O6Q5J1bbExT5pqk79c\"",
    "mtime": "2025-09-09T15:26:45.590Z",
    "size": 4406096,
    "path": "../public/images/side-picture/aamir-ahmad-WhZW5k8q5CQ-unsplash.jpg"
  },
  "/images/side-picture/allgo-an-app-for-plus-size-people-kCE2oN4wF2E-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"2ef924-PqGYnpJSPPyAlDA5W7Vvr+2N3gU\"",
    "mtime": "2025-09-09T15:26:45.640Z",
    "size": 3078436,
    "path": "../public/images/side-picture/allgo-an-app-for-plus-size-people-kCE2oN4wF2E-unsplash.jpg"
  },
  "/images/side-picture/benjamin-sow-rd3c5yP0uwE-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"d935d-koAnrxQGQaV566TQUy7KrxAMqYY\"",
    "mtime": "2025-09-09T15:26:45.609Z",
    "size": 889693,
    "path": "../public/images/side-picture/benjamin-sow-rd3c5yP0uwE-unsplash.jpg"
  },
  "/images/side-picture/brooke-cagle-k9XZPpPHDho-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"2798a6-YLiAMwGRT5WZx0vseECG4ZIcmqs\"",
    "mtime": "2025-09-09T15:26:45.687Z",
    "size": 2594982,
    "path": "../public/images/side-picture/brooke-cagle-k9XZPpPHDho-unsplash.jpg"
  },
  "/images/side-picture/brooke-cagle-oTweoxMKdkA-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"2e0eb3-N/+XxwlSCcStIC3NXRfYiwK+TdE\"",
    "mtime": "2025-09-09T15:26:45.636Z",
    "size": 3018419,
    "path": "../public/images/side-picture/brooke-cagle-oTweoxMKdkA-unsplash.jpg"
  },
  "/images/side-picture/charlesdeluvio-rRWiVQzLm7k-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"22b808-lpp3qq3LM4IyYaw0s8v4V8FarzY\"",
    "mtime": "2025-09-09T15:26:45.627Z",
    "size": 2275336,
    "path": "../public/images/side-picture/charlesdeluvio-rRWiVQzLm7k-unsplash.jpg"
  },
  "/images/side-picture/check-email.jpg": {
    "type": "image/jpeg",
    "etag": "\"1589bf-qAWrtqAIkjRWRTelrrjcWTY1JYo\"",
    "mtime": "2025-09-09T15:26:45.653Z",
    "size": 1411519,
    "path": "../public/images/side-picture/check-email.jpg"
  },
  "/images/side-picture/dellon-thomas-kw2lg3GB4NQ-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"3ad8d8-osBpN0Wb3x2BVsWZjv54/zaVgq0\"",
    "mtime": "2025-09-09T15:26:45.689Z",
    "size": 3856600,
    "path": "../public/images/side-picture/dellon-thomas-kw2lg3GB4NQ-unsplash.jpg"
  },
  "/images/side-picture/eileen-pan-5d5DSRQ5dUc-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"2b87f1-bVDFxyioMNxrtI3VtglfU3dniX4\"",
    "mtime": "2025-09-09T15:26:45.641Z",
    "size": 2852849,
    "path": "../public/images/side-picture/eileen-pan-5d5DSRQ5dUc-unsplash.jpg"
  },
  "/images/side-picture/ellen-volkova-izpIi-i2_wM-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"267fd2-opSmDm00qYWsJT6Sr8rJX0hoKQc\"",
    "mtime": "2025-09-09T15:26:45.673Z",
    "size": 2523090,
    "path": "../public/images/side-picture/ellen-volkova-izpIi-i2_wM-unsplash.jpg"
  },
  "/images/side-picture/good-faces-HT6AFKBcfVA-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"b384f-IG+K9kbRVepQoQfYtx02Sck6hj8\"",
    "mtime": "2025-09-09T15:26:45.654Z",
    "size": 735311,
    "path": "../public/images/side-picture/good-faces-HT6AFKBcfVA-unsplash.jpg"
  },
  "/images/side-picture/jack-jemison-DLCPvsPDxq0-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"134cc6-29KzbJzwkuyjI43Cbjmj9v+1byc\"",
    "mtime": "2025-09-09T15:26:45.671Z",
    "size": 1264838,
    "path": "../public/images/side-picture/jack-jemison-DLCPvsPDxq0-unsplash.jpg"
  },
  "/images/side-picture/jade-destiny-A20aMVzsYkU-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"4e7d7a-A72kc8HuglCHujbhrgvz3HYrFCI\"",
    "mtime": "2025-09-09T15:26:45.728Z",
    "size": 5143930,
    "path": "../public/images/side-picture/jade-destiny-A20aMVzsYkU-unsplash.jpg"
  },
  "/images/side-picture/jorge-salvador-iGzHMzRZjRs-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"25838b-qAmtlq5v8lyuQ9ZC2GRJJYiGszU\"",
    "mtime": "2025-09-09T15:26:45.732Z",
    "size": 2458507,
    "path": "../public/images/side-picture/jorge-salvador-iGzHMzRZjRs-unsplash.jpg"
  },
  "/images/side-picture/jusdevoyage-dynzyA1I6ds-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"a16b0a-MtlTIzBq2fKqm4DxxR88xiq8rug\"",
    "mtime": "2025-09-09T15:26:45.825Z",
    "size": 10578698,
    "path": "../public/images/side-picture/jusdevoyage-dynzyA1I6ds-unsplash.jpg"
  },
  "/images/side-picture/katsiaryna-endruszkiewicz-BteCp6aq4GI-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"29aa37-uSP5ea5zqNJXxT5jmPWYTI3wZMc\"",
    "mtime": "2025-09-09T15:26:45.884Z",
    "size": 2730551,
    "path": "../public/images/side-picture/katsiaryna-endruszkiewicz-BteCp6aq4GI-unsplash.jpg"
  },
  "/images/side-picture/keshaun-slevinsky-qA95ms2tbtc-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"237d27-KR3T/qwTq3npPr+PCr9Jl4ewlT8\"",
    "mtime": "2025-09-09T15:26:45.795Z",
    "size": 2325799,
    "path": "../public/images/side-picture/keshaun-slevinsky-qA95ms2tbtc-unsplash.jpg"
  },
  "/images/side-picture/kit-formerly-convertkit-tkXJoA_sn78-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"17fe62-XIZt6rUfEzHHD9Uot2IBDTo1+84\"",
    "mtime": "2025-09-09T15:26:45.750Z",
    "size": 1572450,
    "path": "../public/images/side-picture/kit-formerly-convertkit-tkXJoA_sn78-unsplash.jpg"
  },
  "/images/side-picture/leroy-skalstad-niSn8o65b6A-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"287d62-agXBNBOAv6yBzecvOa2LQi36rcg\"",
    "mtime": "2025-09-09T15:26:45.722Z",
    "size": 2653538,
    "path": "../public/images/side-picture/leroy-skalstad-niSn8o65b6A-unsplash.jpg"
  },
  "/images/side-picture/luka-sonado-77kzE4r-oM0-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"bfe70-StsoYe7d+7FPdlB8TAgEpJKhaSc\"",
    "mtime": "2025-09-09T15:26:45.883Z",
    "size": 786032,
    "path": "../public/images/side-picture/luka-sonado-77kzE4r-oM0-unsplash.jpg"
  },
  "/images/side-picture/maksat-zhumanov-9uSnNauCaek-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"d2115-2BtvwxN2oLjG2y+okYoqZuczXRE\"",
    "mtime": "2025-09-09T15:26:45.775Z",
    "size": 860437,
    "path": "../public/images/side-picture/maksat-zhumanov-9uSnNauCaek-unsplash.jpg"
  },
  "/images/side-picture/marcos-paulo-prado-0pOlBhSsF80-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"1e9d0d-UfDK7cHbwahgRRrUjznMlBIRb/Y\"",
    "mtime": "2025-09-09T15:26:45.764Z",
    "size": 2006285,
    "path": "../public/images/side-picture/marcos-paulo-prado-0pOlBhSsF80-unsplash.jpg"
  },
  "/images/side-picture/marek-piwnicki-O-BgaSWQ6e0-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"2fa2b9-jPVFzfl2dGIw7R1xTBzDXPdUWlY\"",
    "mtime": "2025-09-09T15:26:45.796Z",
    "size": 3121849,
    "path": "../public/images/side-picture/marek-piwnicki-O-BgaSWQ6e0-unsplash.jpg"
  },
  "/images/side-picture/mieke-campbell-2S1cwyEstpw-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"21ff9a-Edb0EFS7gZQ7G+TbR/lhHkEkY9s\"",
    "mtime": "2025-09-09T15:26:45.765Z",
    "size": 2228122,
    "path": "../public/images/side-picture/mieke-campbell-2S1cwyEstpw-unsplash.jpg"
  },
  "/images/side-picture/mikaela-wiedenhoff-AwmCuTXL97Q-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"15264e-yVdsXQUNDZpNSVILO7sNXuTlRP0\"",
    "mtime": "2025-09-09T15:26:45.801Z",
    "size": 1386062,
    "path": "../public/images/side-picture/mikaela-wiedenhoff-AwmCuTXL97Q-unsplash.jpg"
  },
  "/images/side-picture/noah-buscher-8A7fD6Y5VF8-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"1929cc-XNfPU8+N7PGIgF2cr4md7dcCPCU\"",
    "mtime": "2025-09-09T15:26:45.789Z",
    "size": 1649100,
    "path": "../public/images/side-picture/noah-buscher-8A7fD6Y5VF8-unsplash.jpg"
  },
  "/images/side-picture/notre-histoire.jpg": {
    "type": "image/jpeg",
    "etag": "\"413ebc-xOI0Fv5N6p8rO0DnEftIWojvLNg\"",
    "mtime": "2025-09-09T15:26:45.834Z",
    "size": 4275900,
    "path": "../public/images/side-picture/notre-histoire.jpg"
  },
  "/images/side-picture/sergi-dolcet-escrig-_MjTdhPgZa0-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"1e2a3f-ier+I8hi6HL99t8TyRs2P52enfs\"",
    "mtime": "2025-09-09T15:26:45.853Z",
    "size": 1976895,
    "path": "../public/images/side-picture/sergi-dolcet-escrig-_MjTdhPgZa0-unsplash.jpg"
  },
  "/images/side-picture/sincerely-media-LmTZ39dQTns-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"2f7442-okXCPhxVr89wGy83Tdiw9t7P6lI\"",
    "mtime": "2025-09-09T15:26:45.881Z",
    "size": 3109954,
    "path": "../public/images/side-picture/sincerely-media-LmTZ39dQTns-unsplash.jpg"
  },
  "/images/side-picture/tai-ngo-N79dTlEtq8A-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"3eefec-YkjG/y9fRarmL8kxU1Ce3n+0tfo\"",
    "mtime": "2025-09-09T15:26:45.845Z",
    "size": 4124652,
    "path": "../public/images/side-picture/tai-ngo-N79dTlEtq8A-unsplash.jpg"
  },
  "/images/side-picture/tuyen-vo-tvHU_ZuhS7U-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"443819-UWGm04rKkEJUC18NzUeQCGHMqZ4\"",
    "mtime": "2025-09-09T15:26:45.853Z",
    "size": 4470809,
    "path": "../public/images/side-picture/tuyen-vo-tvHU_ZuhS7U-unsplash.jpg"
  },
  "/images/side-picture/vince-fleming-j3lf-Jn6deo-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"305c64-1ApcT7+kVDOZTELD8XFISmocdiA\"",
    "mtime": "2025-09-09T15:26:45.868Z",
    "size": 3169380,
    "path": "../public/images/side-picture/vince-fleming-j3lf-Jn6deo-unsplash.jpg"
  },
  "/images/svgs/abacus-1585000.svg": {
    "type": "image/svg+xml",
    "etag": "\"e76-EnLOEUyScEP59sQbcuHlw0E0qns\"",
    "mtime": "2025-09-09T15:26:45.555Z",
    "size": 3702,
    "path": "../public/images/svgs/abacus-1585000.svg"
  },
  "/images/svgs/apple-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"311-2L84d6IVeHQKaXrPUf8/eQT3J3M\"",
    "mtime": "2025-09-09T15:26:45.878Z",
    "size": 785,
    "path": "../public/images/svgs/apple-icon.svg"
  },
  "/images/svgs/archive-1584999.svg": {
    "type": "image/svg+xml",
    "etag": "\"38d-x+QrwvXg1eodZrugAdhWhcfoLI0\"",
    "mtime": "2025-09-09T15:26:45.876Z",
    "size": 909,
    "path": "../public/images/svgs/archive-1584999.svg"
  },
  "/images/svgs/archive.svg": {
    "type": "image/svg+xml",
    "etag": "\"164-WhxCLRbCViA5GFOcDSKTdRyEsVY\"",
    "mtime": "2025-09-09T15:26:45.880Z",
    "size": 356,
    "path": "../public/images/svgs/archive.svg"
  },
  "/images/svgs/atom-1584997.svg": {
    "type": "image/svg+xml",
    "etag": "\"9a8-+/q5oEYvssXRgNXl2NPQbEfvv6U\"",
    "mtime": "2025-09-09T15:26:45.877Z",
    "size": 2472,
    "path": "../public/images/svgs/atom-1584997.svg"
  },
  "/images/svgs/atom-1584998.svg": {
    "type": "image/svg+xml",
    "etag": "\"cc9-VFuu9xmDH9B2EVcJOBfOYnPfkGA\"",
    "mtime": "2025-09-09T15:26:45.877Z",
    "size": 3273,
    "path": "../public/images/svgs/atom-1584998.svg"
  },
  "/images/svgs/atoms-1584996.svg": {
    "type": "image/svg+xml",
    "etag": "\"894-urJAqGtacb+G9p1S7R+88RHNInM\"",
    "mtime": "2025-09-09T15:26:45.879Z",
    "size": 2196,
    "path": "../public/images/svgs/atoms-1584996.svg"
  },
  "/images/svgs/bag-1584995.svg": {
    "type": "image/svg+xml",
    "etag": "\"a40-n4hke0fdikOI5Y0pXHrPxY7AToc\"",
    "mtime": "2025-09-09T15:26:45.878Z",
    "size": 2624,
    "path": "../public/images/svgs/bag-1584995.svg"
  },
  "/images/svgs/bank-transfer.svg": {
    "type": "image/svg+xml",
    "etag": "\"48c-FXrJwyrw+YnVSagKoLDWSxd3f20\"",
    "mtime": "2025-09-09T15:26:45.880Z",
    "size": 1164,
    "path": "../public/images/svgs/bank-transfer.svg"
  },
  "/images/svgs/basket.svg": {
    "type": "image/svg+xml",
    "etag": "\"28f-u1RLomjSscQ/vWIf6DaJTyA+9uI\"",
    "mtime": "2025-09-09T15:26:45.881Z",
    "size": 655,
    "path": "../public/images/svgs/basket.svg"
  },
  "/images/svgs/bell-1584994.svg": {
    "type": "image/svg+xml",
    "etag": "\"6fc-tGQZJR60iEEAHfRIdQMOctcmj18\"",
    "mtime": "2025-09-09T15:26:45.879Z",
    "size": 1788,
    "path": "../public/images/svgs/bell-1584994.svg"
  },
  "/images/svgs/biology-1584993.svg": {
    "type": "image/svg+xml",
    "etag": "\"896-aZYS1CDhsqLJtBSsY6XKKf4xtC4\"",
    "mtime": "2025-09-09T15:26:45.882Z",
    "size": 2198,
    "path": "../public/images/svgs/biology-1584993.svg"
  },
  "/images/svgs/biology.svg": {
    "type": "image/svg+xml",
    "etag": "\"896-aZYS1CDhsqLJtBSsY6XKKf4xtC4\"",
    "mtime": "2025-09-09T15:26:45.889Z",
    "size": 2198,
    "path": "../public/images/svgs/biology.svg"
  },
  "/images/svgs/book-1584988.svg": {
    "type": "image/svg+xml",
    "etag": "\"a2a-T7cyXfNRGmJN/X2yOG7RuPSSvMs\"",
    "mtime": "2025-09-09T15:26:45.880Z",
    "size": 2602,
    "path": "../public/images/svgs/book-1584988.svg"
  },
  "/images/svgs/bookmark-1584987.svg": {
    "type": "image/svg+xml",
    "etag": "\"4e0-KBWnFqPuFfGWNUFPGDnRxkb+Mfs\"",
    "mtime": "2025-09-09T15:26:45.883Z",
    "size": 1248,
    "path": "../public/images/svgs/bookmark-1584987.svg"
  },
  "/images/svgs/books-1584992.svg": {
    "type": "image/svg+xml",
    "etag": "\"c57-nDI3FirAoMtadp5hO5MgT/ox8To\"",
    "mtime": "2025-09-09T15:26:45.882Z",
    "size": 3159,
    "path": "../public/images/svgs/books-1584992.svg"
  },
  "/images/svgs/brush-1585036.svg": {
    "type": "image/svg+xml",
    "etag": "\"623-V3zd4HBD7NvZeUzdDi0TRF0eHBA\"",
    "mtime": "2025-09-09T15:26:45.885Z",
    "size": 1571,
    "path": "../public/images/svgs/brush-1585036.svg"
  },
  "/images/svgs/calendar.svg": {
    "type": "image/svg+xml",
    "etag": "\"17e-PJ9zxDCRkOSa9yv/xUUag+RRHrI\"",
    "mtime": "2025-09-09T15:26:45.885Z",
    "size": 382,
    "path": "../public/images/svgs/calendar.svg"
  },
  "/images/svgs/certificate-1585035.svg": {
    "type": "image/svg+xml",
    "etag": "\"5e0-hxPKjppZsa9B+mjySC+hqiHqIc8\"",
    "mtime": "2025-09-09T15:26:45.886Z",
    "size": 1504,
    "path": "../public/images/svgs/certificate-1585035.svg"
  },
  "/images/svgs/chem-1585034.svg": {
    "type": "image/svg+xml",
    "etag": "\"5a2-xd0qeTKb8lBrN0Moz7P6og6gp3k\"",
    "mtime": "2025-09-09T15:26:45.885Z",
    "size": 1442,
    "path": "../public/images/svgs/chem-1585034.svg"
  },
  "/images/svgs/conversation-1585033.svg": {
    "type": "image/svg+xml",
    "etag": "\"a68-CQCgGfrDPO4YMCbsiegVlZHd3FQ\"",
    "mtime": "2025-09-09T15:26:45.887Z",
    "size": 2664,
    "path": "../public/images/svgs/conversation-1585033.svg"
  },
  "/images/svgs/cpu-1585032.svg": {
    "type": "image/svg+xml",
    "etag": "\"f09-ggnWzp87YjcSJ2rU54/oZbm4j9I\"",
    "mtime": "2025-09-09T15:26:45.887Z",
    "size": 3849,
    "path": "../public/images/svgs/cpu-1585032.svg"
  },
  "/images/svgs/creativity-1585031.svg": {
    "type": "image/svg+xml",
    "etag": "\"79b-tq+DdlC6WZdV2yFbQclCeKdSBkQ\"",
    "mtime": "2025-09-09T15:26:45.887Z",
    "size": 1947,
    "path": "../public/images/svgs/creativity-1585031.svg"
  },
  "/images/svgs/credit-card.svg": {
    "type": "image/svg+xml",
    "etag": "\"350-L6k4KwDY9feoBgGtQ7CAIs8PD5o\"",
    "mtime": "2025-09-09T15:26:45.897Z",
    "size": 848,
    "path": "../public/images/svgs/credit-card.svg"
  },
  "/images/svgs/cube-1584991.svg": {
    "type": "image/svg+xml",
    "etag": "\"830-aeda+uRiJB/BSw6/RaG8+cnMJIA\"",
    "mtime": "2025-09-09T15:26:45.890Z",
    "size": 2096,
    "path": "../public/images/svgs/cube-1584991.svg"
  },
  "/images/svgs/danger-shap.svg": {
    "type": "image/svg+xml",
    "etag": "\"704-02mufR8M765+F9wHaZFHW1JMCTI\"",
    "mtime": "2025-09-09T15:26:45.888Z",
    "size": 1796,
    "path": "../public/images/svgs/danger-shap.svg"
  },
  "/images/svgs/dna-1585030.svg": {
    "type": "image/svg+xml",
    "etag": "\"70e-5WmuyrmHSE6psGerUVaQt9qxXWA\"",
    "mtime": "2025-09-09T15:26:45.889Z",
    "size": 1806,
    "path": "../public/images/svgs/dna-1585030.svg"
  },
  "/images/svgs/elearning-1585029.svg": {
    "type": "image/svg+xml",
    "etag": "\"8ca-/V0r54zqwf/C/miGPcKO4sSH8BI\"",
    "mtime": "2025-09-09T15:26:45.888Z",
    "size": 2250,
    "path": "../public/images/svgs/elearning-1585029.svg"
  },
  "/images/svgs/empty-cart.svg": {
    "type": "image/svg+xml",
    "etag": "\"25b4-ewG3u6lodpzXYNdIWRQ7ICKDp8s\"",
    "mtime": "2025-09-09T15:26:45.888Z",
    "size": 9652,
    "path": "../public/images/svgs/empty-cart.svg"
  },
  "/images/svgs/erase-1585028.svg": {
    "type": "image/svg+xml",
    "etag": "\"456-3MFgbFfc4pAUNd33tprvENxgxgU\"",
    "mtime": "2025-09-09T15:26:45.888Z",
    "size": 1110,
    "path": "../public/images/svgs/erase-1585028.svg"
  },
  "/images/svgs/erase.svg": {
    "type": "image/svg+xml",
    "etag": "\"456-3MFgbFfc4pAUNd33tprvENxgxgU\"",
    "mtime": "2025-09-09T15:26:45.890Z",
    "size": 1110,
    "path": "../public/images/svgs/erase.svg"
  },
  "/images/svgs/facebook-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"1967-BuTIG9QftQcSh92jyyViwhV/9vc\"",
    "mtime": "2025-09-09T15:26:45.889Z",
    "size": 6503,
    "path": "../public/images/svgs/facebook-icon.svg"
  },
  "/images/svgs/file-edit.svg": {
    "type": "image/svg+xml",
    "etag": "\"384-hizNSohRQ0mdP8rkM9K+oATxOz4\"",
    "mtime": "2025-09-09T15:26:45.889Z",
    "size": 900,
    "path": "../public/images/svgs/file-edit.svg"
  },
  "/images/svgs/file-text.svg": {
    "type": "image/svg+xml",
    "etag": "\"1bd-d1FJSf7fnDXwzP1iGA3MjQB9auA\"",
    "mtime": "2025-09-09T15:26:45.889Z",
    "size": 445,
    "path": "../public/images/svgs/file-text.svg"
  },
  "/images/svgs/file.svg": {
    "type": "image/svg+xml",
    "etag": "\"135-O2qds62CvdCKaMlb72CF/+yq8Mc\"",
    "mtime": "2025-09-09T15:26:45.891Z",
    "size": 309,
    "path": "../public/images/svgs/file.svg"
  },
  "/images/svgs/flask-1585027.svg": {
    "type": "image/svg+xml",
    "etag": "\"526-FOf2R5IDGV10R/3wrk3OexaD9UI\"",
    "mtime": "2025-09-09T15:26:45.890Z",
    "size": 1318,
    "path": "../public/images/svgs/flask-1585027.svg"
  },
  "/images/svgs/friends-1585026.svg": {
    "type": "image/svg+xml",
    "etag": "\"b43-9hyh2bosXWXVRRLrdNcKwOlrjHw\"",
    "mtime": "2025-09-09T15:26:45.890Z",
    "size": 2883,
    "path": "../public/images/svgs/friends-1585026.svg"
  },
  "/images/svgs/glasses-1585025.svg": {
    "type": "image/svg+xml",
    "etag": "\"60b-5YfTxhtX43S5abXHA2TOCZH37yI\"",
    "mtime": "2025-09-09T15:26:45.890Z",
    "size": 1547,
    "path": "../public/images/svgs/glasses-1585025.svg"
  },
  "/images/svgs/globe-1584990.svg": {
    "type": "image/svg+xml",
    "etag": "\"518-D11CRVqB+TcBI6xlH1AjmBnE4oo\"",
    "mtime": "2025-09-09T15:26:45.890Z",
    "size": 1304,
    "path": "../public/images/svgs/globe-1584990.svg"
  },
  "/images/svgs/globe.svg": {
    "type": "image/svg+xml",
    "etag": "\"518-D11CRVqB+TcBI6xlH1AjmBnE4oo\"",
    "mtime": "2025-09-09T15:26:45.890Z",
    "size": 1304,
    "path": "../public/images/svgs/globe.svg"
  },
  "/images/svgs/good-verification.svg": {
    "type": "image/svg+xml",
    "etag": "\"1581-oxSrOODPQU52rd/YyUzc6VMoAL4\"",
    "mtime": "2025-09-09T15:26:45.891Z",
    "size": 5505,
    "path": "../public/images/svgs/good-verification.svg"
  },
  "/images/svgs/google-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"4b9-BOwDaFHoSAUJKXT7ENNXhAk6KFY\"",
    "mtime": "2025-09-09T15:26:45.890Z",
    "size": 1209,
    "path": "../public/images/svgs/google-icon.svg"
  },
  "/images/svgs/graduation-cap-1584989.svg": {
    "type": "image/svg+xml",
    "etag": "\"4ec-XD1ojVeAYeJ8Mym1DJ1BXL9ugDw\"",
    "mtime": "2025-09-09T15:26:45.891Z",
    "size": 1260,
    "path": "../public/images/svgs/graduation-cap-1584989.svg"
  },
  "/images/svgs/ic-1585024.svg": {
    "type": "image/svg+xml",
    "etag": "\"c7f-Skw16LNbOKfZvyXsPKYYx9K5E/Y\"",
    "mtime": "2025-09-09T15:26:45.891Z",
    "size": 3199,
    "path": "../public/images/svgs/ic-1585024.svg"
  },
  "/images/svgs/icon-account.svg": {
    "type": "image/svg+xml",
    "etag": "\"4ba-mlRA0+Jb3XhAiZX//Yv0WEM2ub8\"",
    "mtime": "2025-09-09T15:26:45.892Z",
    "size": 1210,
    "path": "../public/images/svgs/icon-account.svg"
  },
  "/images/svgs/icon-adobe.svg": {
    "type": "image/svg+xml",
    "etag": "\"297-U9Icpvfu+E8jg978dMZkSXyS6yg\"",
    "mtime": "2025-09-09T15:26:45.891Z",
    "size": 663,
    "path": "../public/images/svgs/icon-adobe.svg"
  },
  "/images/svgs/icon-briefcase.svg": {
    "type": "image/svg+xml",
    "etag": "\"1b2-7ft9gSf6EkJdeNVTLStTdUaErZA\"",
    "mtime": "2025-09-09T15:26:45.891Z",
    "size": 434,
    "path": "../public/images/svgs/icon-briefcase.svg"
  },
  "/images/svgs/icon-chrome.svg": {
    "type": "image/svg+xml",
    "etag": "\"4ef-vhoMmy1DpL/MhnpXQ3sT2qSe1ic\"",
    "mtime": "2025-09-09T15:26:45.891Z",
    "size": 1263,
    "path": "../public/images/svgs/icon-chrome.svg"
  },
  "/images/svgs/icon-connect.svg": {
    "type": "image/svg+xml",
    "etag": "\"3fd-zdIXsNnviaCM2oMBT/nHLjRAsOE\"",
    "mtime": "2025-09-09T15:26:45.892Z",
    "size": 1021,
    "path": "../public/images/svgs/icon-connect.svg"
  },
  "/images/svgs/icon-database.svg": {
    "type": "image/svg+xml",
    "etag": "\"1a2-at06nsFas7p3crCVk5QmadIZp8s\"",
    "mtime": "2025-09-09T15:26:45.895Z",
    "size": 418,
    "path": "../public/images/svgs/icon-database.svg"
  },
  "/images/svgs/icon-dd-application.svg": {
    "type": "image/svg+xml",
    "etag": "\"bc1-wSbkbzFcpjKyRSr203Rxb41bAyM\"",
    "mtime": "2025-09-09T15:26:45.891Z",
    "size": 3009,
    "path": "../public/images/svgs/icon-dd-application.svg"
  },
  "/images/svgs/icon-dd-cart.svg": {
    "type": "image/svg+xml",
    "etag": "\"7f8-NT3WlmHT4ymvCgBc3Qiam4lW5Ew\"",
    "mtime": "2025-09-09T15:26:45.892Z",
    "size": 2040,
    "path": "../public/images/svgs/icon-dd-cart.svg"
  },
  "/images/svgs/icon-dd-chat.svg": {
    "type": "image/svg+xml",
    "etag": "\"403-iuw19X+FbEDzYs9946B49kfaoQA\"",
    "mtime": "2025-09-09T15:26:45.893Z",
    "size": 1027,
    "path": "../public/images/svgs/icon-dd-chat.svg"
  },
  "/images/svgs/icon-dd-date.svg": {
    "type": "image/svg+xml",
    "etag": "\"579-HOEZLOKAOCFKExm0pPaOVCsglrY\"",
    "mtime": "2025-09-09T15:26:45.894Z",
    "size": 1401,
    "path": "../public/images/svgs/icon-dd-date.svg"
  },
  "/images/svgs/icon-dd-invoice.svg": {
    "type": "image/svg+xml",
    "etag": "\"af6-w2gWGTjuz65qgk2Tvm0cppinTSg\"",
    "mtime": "2025-09-09T15:26:45.893Z",
    "size": 2806,
    "path": "../public/images/svgs/icon-dd-invoice.svg"
  },
  "/images/svgs/icon-dd-lifebuoy.svg": {
    "type": "image/svg+xml",
    "etag": "\"67c-h1FnLXeOiV3BNN12QFW59cqbGd8\"",
    "mtime": "2025-09-09T15:26:45.893Z",
    "size": 1660,
    "path": "../public/images/svgs/icon-dd-lifebuoy.svg"
  },
  "/images/svgs/icon-dd-message-box.svg": {
    "type": "image/svg+xml",
    "etag": "\"27b-fj1WdGmy9Mrz3vNhDhM9uibOWFc\"",
    "mtime": "2025-09-09T15:26:45.895Z",
    "size": 635,
    "path": "../public/images/svgs/icon-dd-message-box.svg"
  },
  "/images/svgs/icon-dd-mobile.svg": {
    "type": "image/svg+xml",
    "etag": "\"2ac-LNhqro7VMiQ9OMPOupSeziRVqUI\"",
    "mtime": "2025-09-09T15:26:45.893Z",
    "size": 684,
    "path": "../public/images/svgs/icon-dd-mobile.svg"
  },
  "/images/svgs/icon-facebook.svg": {
    "type": "image/svg+xml",
    "etag": "\"19a-u9N0qPxgH/kBOvNZ82AX4yN4vsU\"",
    "mtime": "2025-09-09T15:26:45.893Z",
    "size": 410,
    "path": "../public/images/svgs/icon-facebook.svg"
  },
  "/images/svgs/icon-favorites.svg": {
    "type": "image/svg+xml",
    "etag": "\"22b-T97YWTmRy67Mp7zUvFqGNLAm0/E\"",
    "mtime": "2025-09-09T15:26:45.894Z",
    "size": 555,
    "path": "../public/images/svgs/icon-favorites.svg"
  },
  "/images/svgs/icon-figma.svg": {
    "type": "image/svg+xml",
    "etag": "\"260-t17ASRNFvszafIFdzw7o3hg0gio\"",
    "mtime": "2025-09-09T15:26:45.894Z",
    "size": 608,
    "path": "../public/images/svgs/icon-figma.svg"
  },
  "/images/svgs/icon-inbox.svg": {
    "type": "image/svg+xml",
    "etag": "\"27b-zsadkzmV+CsZpJ0Woh5ifHI+SYs\"",
    "mtime": "2025-09-09T15:26:45.896Z",
    "size": 635,
    "path": "../public/images/svgs/icon-inbox.svg"
  },
  "/images/svgs/icon-javascript.svg": {
    "type": "image/svg+xml",
    "etag": "\"574-/FmN5aAGLStWgpyLmvnkEEh+/CA\"",
    "mtime": "2025-09-09T15:26:45.896Z",
    "size": 1396,
    "path": "../public/images/svgs/icon-javascript.svg"
  },
  "/images/svgs/icon-mail.svg": {
    "type": "image/svg+xml",
    "etag": "\"17d-O5E2Bw5AdMFgLFFQtXPL4SfvNJI\"",
    "mtime": "2025-09-09T15:26:45.893Z",
    "size": 381,
    "path": "../public/images/svgs/icon-mail.svg"
  },
  "/images/svgs/icon-mailbox.svg": {
    "type": "image/svg+xml",
    "etag": "\"1a0-TSrd5qALaMHEv8SOBtSkcFumbCY\"",
    "mtime": "2025-09-09T15:26:45.894Z",
    "size": 416,
    "path": "../public/images/svgs/icon-mailbox.svg"
  },
  "/images/svgs/icon-map-pin.svg": {
    "type": "image/svg+xml",
    "etag": "\"1a7-H149Wv/Czc3+NORx0MRuuzPQEso\"",
    "mtime": "2025-09-09T15:26:45.895Z",
    "size": 423,
    "path": "../public/images/svgs/icon-map-pin.svg"
  },
  "/images/svgs/icon-master-card-2.svg": {
    "type": "image/svg+xml",
    "etag": "\"476-2ddQcXuswCMdLH9y2dvjT53Q8XY\"",
    "mtime": "2025-09-09T15:26:45.901Z",
    "size": 1142,
    "path": "../public/images/svgs/icon-master-card-2.svg"
  },
  "/images/svgs/icon-master-card.svg": {
    "type": "image/svg+xml",
    "etag": "\"476-JaLhDwCZvHPFNeIFyUfWiZvepXA\"",
    "mtime": "2025-09-09T15:26:45.894Z",
    "size": 1142,
    "path": "../public/images/svgs/icon-master-card.svg"
  },
  "/images/svgs/icon-office-bag-2.svg": {
    "type": "image/svg+xml",
    "etag": "\"99e-zpSRr1E/0W20k8Q1lWLjKwJOwk8\"",
    "mtime": "2025-09-09T15:26:45.895Z",
    "size": 2462,
    "path": "../public/images/svgs/icon-office-bag-2.svg"
  },
  "/images/svgs/icon-office-bag.svg": {
    "type": "image/svg+xml",
    "etag": "\"99e-KgBrd8LtEFN9WH/VCxDoEWLWuAY\"",
    "mtime": "2025-09-09T15:26:45.896Z",
    "size": 2462,
    "path": "../public/images/svgs/icon-office-bag.svg"
  },
  "/images/svgs/icon-paypal.svg": {
    "type": "image/svg+xml",
    "etag": "\"50e-c8pbYYrx6FIFQe1OdcqpdTVseGs\"",
    "mtime": "2025-09-09T15:26:45.896Z",
    "size": 1294,
    "path": "../public/images/svgs/icon-paypal.svg"
  },
  "/images/svgs/icon-phone.svg": {
    "type": "image/svg+xml",
    "etag": "\"195-jPgeEvSwSZnMXwM4QF8GasKWQkk\"",
    "mtime": "2025-09-09T15:26:45.896Z",
    "size": 405,
    "path": "../public/images/svgs/icon-phone.svg"
  },
  "/images/svgs/icon-pie.svg": {
    "type": "image/svg+xml",
    "etag": "\"222-K8Iu+Pqzyp22CeGMXahq44txou8\"",
    "mtime": "2025-09-09T15:26:45.899Z",
    "size": 546,
    "path": "../public/images/svgs/icon-pie.svg"
  },
  "/images/svgs/icon-screen-share.svg": {
    "type": "image/svg+xml",
    "etag": "\"22e-RowzlcCdX8lAyCtZ+hcq8KfM2L4\"",
    "mtime": "2025-09-09T15:26:45.897Z",
    "size": 558,
    "path": "../public/images/svgs/icon-screen-share.svg"
  },
  "/images/svgs/icon-speech-bubble.svg": {
    "type": "image/svg+xml",
    "etag": "\"236-M481jsCIYQsaM+qiHCAUlwkjeHg\"",
    "mtime": "2025-09-09T15:26:45.897Z",
    "size": 566,
    "path": "../public/images/svgs/icon-speech-bubble.svg"
  },
  "/images/svgs/icon-tasks.svg": {
    "type": "image/svg+xml",
    "etag": "\"bc1-f2xwcQHSKPTB/fnf1BpNwEH7C8A\"",
    "mtime": "2025-09-09T15:26:45.896Z",
    "size": 3009,
    "path": "../public/images/svgs/icon-tasks.svg"
  },
  "/images/svgs/icon-user-male.svg": {
    "type": "image/svg+xml",
    "etag": "\"435-F/AAIrOID4OwdNIq/lqAelddqZs\"",
    "mtime": "2025-09-09T15:26:45.897Z",
    "size": 1077,
    "path": "../public/images/svgs/icon-user-male.svg"
  },
  "/images/svgs/icon-user.svg": {
    "type": "image/svg+xml",
    "etag": "\"3c6-RMqUQ0tqbUWXAlywe1OwWM62Xz8\"",
    "mtime": "2025-09-09T15:26:45.897Z",
    "size": 966,
    "path": "../public/images/svgs/icon-user.svg"
  },
  "/images/svgs/icon-zip-folder.svg": {
    "type": "image/svg+xml",
    "etag": "\"854-wd/qQJRcwoO/OcS2BuC7d+HRkpc\"",
    "mtime": "2025-09-09T15:26:45.898Z",
    "size": 2132,
    "path": "../public/images/svgs/icon-zip-folder.svg"
  },
  "/images/svgs/idea-1585023.svg": {
    "type": "image/svg+xml",
    "etag": "\"63a-38fsQZCFgcFjOKc58IVnn/XLeVk\"",
    "mtime": "2025-09-09T15:26:45.898Z",
    "size": 1594,
    "path": "../public/images/svgs/idea-1585023.svg"
  },
  "/images/svgs/idea-1585024.svg": {
    "type": "image/svg+xml",
    "etag": "\"637-qI/BL1oquUjnA3v99zu/bGLf6jw\"",
    "mtime": "2025-09-09T15:26:45.897Z",
    "size": 1591,
    "path": "../public/images/svgs/idea-1585024.svg"
  },
  "/images/svgs/idea.svg": {
    "type": "image/svg+xml",
    "etag": "\"637-qI/BL1oquUjnA3v99zu/bGLf6jw\"",
    "mtime": "2025-09-09T15:26:45.899Z",
    "size": 1591,
    "path": "../public/images/svgs/idea.svg"
  },
  "/images/svgs/info-shap.svg": {
    "type": "image/svg+xml",
    "etag": "\"702-5/7h8lZ67GL9zSKZhnmQCyEovi8\"",
    "mtime": "2025-09-09T15:26:45.898Z",
    "size": 1794,
    "path": "../public/images/svgs/info-shap.svg"
  },
  "/images/svgs/laptop-1585022.svg": {
    "type": "image/svg+xml",
    "etag": "\"649-SD+pAbgMMx/QILBo6GaSAkFOuOw\"",
    "mtime": "2025-09-09T15:26:45.897Z",
    "size": 1609,
    "path": "../public/images/svgs/laptop-1585022.svg"
  },
  "/images/svgs/library-1585021.svg": {
    "type": "image/svg+xml",
    "etag": "\"bbe-7tyGgj8fr1cy2h3cdQ96lnS1vIk\"",
    "mtime": "2025-09-09T15:26:45.898Z",
    "size": 3006,
    "path": "../public/images/svgs/library-1585021.svg"
  },
  "/images/svgs/list.svg": {
    "type": "image/svg+xml",
    "etag": "\"1c6-4dsXQEgheLUtmYADa4hauSbnnpg\"",
    "mtime": "2025-09-09T15:26:45.899Z",
    "size": 454,
    "path": "../public/images/svgs/list.svg"
  },
  "/images/svgs/magnet-1585019.svg": {
    "type": "image/svg+xml",
    "etag": "\"60e-k2xsKpro0FW9j7rxuKf8ovk0bMk\"",
    "mtime": "2025-09-09T15:26:45.898Z",
    "size": 1550,
    "path": "../public/images/svgs/magnet-1585019.svg"
  },
  "/images/svgs/magnet-1585020.svg": {
    "type": "image/svg+xml",
    "etag": "\"44e-XOQcAIn1Top989fczZXStJcTMXI\"",
    "mtime": "2025-09-09T15:26:45.898Z",
    "size": 1102,
    "path": "../public/images/svgs/magnet-1585020.svg"
  },
  "/images/svgs/mail.svg": {
    "type": "image/svg+xml",
    "etag": "\"146-Y1YBpExIlQQeQQNw981mWN7CM3E\"",
    "mtime": "2025-09-09T15:26:45.899Z",
    "size": 326,
    "path": "../public/images/svgs/mail.svg"
  },
  "/images/svgs/mastercard.svg": {
    "type": "image/svg+xml",
    "etag": "\"383-RCDJS2jAbRpRxMWw3Yc+daZN36o\"",
    "mtime": "2025-09-09T15:26:45.899Z",
    "size": 899,
    "path": "../public/images/svgs/mastercard.svg"
  },
  "/images/svgs/mathematic-1585018.svg": {
    "type": "image/svg+xml",
    "etag": "\"8ca-yh579/5sSbSvD+yGeseVdhn4DGw\"",
    "mtime": "2025-09-09T15:26:45.899Z",
    "size": 2250,
    "path": "../public/images/svgs/mathematic-1585018.svg"
  },
  "/images/svgs/medal-1585017.svg": {
    "type": "image/svg+xml",
    "etag": "\"4e7-wvpH8+hpJKsD4VUKl6iEo9lMKmQ\"",
    "mtime": "2025-09-09T15:26:45.901Z",
    "size": 1255,
    "path": "../public/images/svgs/medal-1585017.svg"
  },
  "/images/svgs/message-square.svg": {
    "type": "image/svg+xml",
    "etag": "\"115-zeOD7bllL5aeZm+BaP9wp8Yk8Wo\"",
    "mtime": "2025-09-09T15:26:45.899Z",
    "size": 277,
    "path": "../public/images/svgs/message-square.svg"
  },
  "/images/svgs/microscope-1585016.svg": {
    "type": "image/svg+xml",
    "etag": "\"819-3IsL0BnmJkxh8KBIuFMz3bGkiDk\"",
    "mtime": "2025-09-09T15:26:45.900Z",
    "size": 2073,
    "path": "../public/images/svgs/microscope-1585016.svg"
  },
  "/images/svgs/neutron-1585015.svg": {
    "type": "image/svg+xml",
    "etag": "\"b1e-koEfs6/8bWQyHPqWSiycLF1YJLQ\"",
    "mtime": "2025-09-09T15:26:45.899Z",
    "size": 2846,
    "path": "../public/images/svgs/neutron-1585015.svg"
  },
  "/images/svgs/online-1585014.svg": {
    "type": "image/svg+xml",
    "etag": "\"7f1-jIb4EeqfwzZ9kLA+ocr4H6/Zxd8\"",
    "mtime": "2025-09-09T15:26:45.899Z",
    "size": 2033,
    "path": "../public/images/svgs/online-1585014.svg"
  },
  "/images/svgs/paypal.svg": {
    "type": "image/svg+xml",
    "etag": "\"8de-mB/QGwvX0N0QWSgZhcuzUSKbjQU\"",
    "mtime": "2025-09-09T15:26:45.903Z",
    "size": 2270,
    "path": "../public/images/svgs/paypal.svg"
  },
  "/images/svgs/paypal2.svg": {
    "type": "image/svg+xml",
    "etag": "\"377-YFUmUJHgX38fk+LqP9wcC8h0430\"",
    "mtime": "2025-09-09T15:26:45.900Z",
    "size": 887,
    "path": "../public/images/svgs/paypal2.svg"
  },
  "/images/svgs/pencil-1585013.svg": {
    "type": "image/svg+xml",
    "etag": "\"3bd-yF/nBSiovfYkm85A/FaIkgxVrjs\"",
    "mtime": "2025-09-09T15:26:45.900Z",
    "size": 957,
    "path": "../public/images/svgs/pencil-1585013.svg"
  },
  "/images/svgs/phone.svg": {
    "type": "image/svg+xml",
    "etag": "\"1ec-mdZxkXpqbKQfI1nbY/1mR9AM6BM\"",
    "mtime": "2025-09-09T15:26:45.900Z",
    "size": 492,
    "path": "../public/images/svgs/phone.svg"
  },
  "/images/svgs/player-pause.svg": {
    "type": "image/svg+xml",
    "etag": "\"2b0-afDOYMlDmOliwcnel7vwkOFzBbQ\"",
    "mtime": "2025-09-09T15:26:45.901Z",
    "size": 688,
    "path": "../public/images/svgs/player-pause.svg"
  },
  "/images/svgs/presentation-1585012.svg": {
    "type": "image/svg+xml",
    "etag": "\"bb6-iM6FDwwfPhkLWaaoWGrcmhUzeks\"",
    "mtime": "2025-09-09T15:26:45.900Z",
    "size": 2998,
    "path": "../public/images/svgs/presentation-1585012.svg"
  },
  "/images/svgs/program-1585011.svg": {
    "type": "image/svg+xml",
    "etag": "\"5ac-tQqkTaen0znq1L0nMfjhdXapd7M\"",
    "mtime": "2025-09-09T15:26:45.900Z",
    "size": 1452,
    "path": "../public/images/svgs/program-1585011.svg"
  },
  "/images/svgs/refund.svg": {
    "type": "image/svg+xml",
    "etag": "\"325-jd2MghjqFKFLrOxCKM//MNaOiow\"",
    "mtime": "2025-09-09T15:26:45.901Z",
    "size": 805,
    "path": "../public/images/svgs/refund.svg"
  },
  "/images/svgs/research-1585010.svg": {
    "type": "image/svg+xml",
    "etag": "\"5a6-Y/CHcOWVRQuIWeNfArRcHrotAjw\"",
    "mtime": "2025-09-09T15:26:45.908Z",
    "size": 1446,
    "path": "../public/images/svgs/research-1585010.svg"
  },
  "/images/svgs/ruler-1585009.svg": {
    "type": "image/svg+xml",
    "etag": "\"427-ItZ6mI13gB4n8+PFKyFEYXUm19w\"",
    "mtime": "2025-09-09T15:26:45.902Z",
    "size": 1063,
    "path": "../public/images/svgs/ruler-1585009.svg"
  },
  "/images/svgs/school-1585008.svg": {
    "type": "image/svg+xml",
    "etag": "\"833-ZDvHsN0ToEObP4DKSP/8beJMAJ4\"",
    "mtime": "2025-09-09T15:26:45.901Z",
    "size": 2099,
    "path": "../public/images/svgs/school-1585008.svg"
  },
  "/images/svgs/sports-ball-1585007.svg": {
    "type": "image/svg+xml",
    "etag": "\"9a0-0+Dqsq5/5jW7YBcUkzjhA6D8ngc\"",
    "mtime": "2025-09-09T15:26:45.904Z",
    "size": 2464,
    "path": "../public/images/svgs/sports-ball-1585007.svg"
  },
  "/images/svgs/stamp-1585006.svg": {
    "type": "image/svg+xml",
    "etag": "\"534-+qQuyicL1IMCwYel12YLqbvYyQM\"",
    "mtime": "2025-09-09T15:26:45.902Z",
    "size": 1332,
    "path": "../public/images/svgs/stamp-1585006.svg"
  },
  "/images/svgs/student-1585005.svg": {
    "type": "image/svg+xml",
    "etag": "\"702-LJWo5tTUjSfo0//4cG9EEmHIdVM\"",
    "mtime": "2025-09-09T15:26:45.901Z",
    "size": 1794,
    "path": "../public/images/svgs/student-1585005.svg"
  },
  "/images/svgs/task-1585003.svg": {
    "type": "image/svg+xml",
    "etag": "\"6e3-I/zpZ2uKTZAi8u7PNry9woWL5hs\"",
    "mtime": "2025-09-09T15:26:45.908Z",
    "size": 1763,
    "path": "../public/images/svgs/task-1585003.svg"
  },
  "/images/svgs/task-1585004.svg": {
    "type": "image/svg+xml",
    "etag": "\"643-tcXYgt/syOwNaORfk+E3ESx+j5c\"",
    "mtime": "2025-09-09T15:26:45.902Z",
    "size": 1603,
    "path": "../public/images/svgs/task-1585004.svg"
  },
  "/images/svgs/teacher-1585002.svg": {
    "type": "image/svg+xml",
    "etag": "\"914-syfEaxSqraTLEtkKQx0K71MPfkE\"",
    "mtime": "2025-09-09T15:26:45.901Z",
    "size": 2324,
    "path": "../public/images/svgs/teacher-1585002.svg"
  },
  "/images/svgs/trophy-1585001.svg": {
    "type": "image/svg+xml",
    "etag": "\"77d-wCN/NEH7IGLX4fL8n6eNglx6OPo\"",
    "mtime": "2025-09-09T15:26:45.903Z",
    "size": 1917,
    "path": "../public/images/svgs/trophy-1585001.svg"
  },
  "/images/svgs/trophy-1585002.svg": {
    "type": "image/svg+xml",
    "etag": "\"77d-u8skUXOYCJg15eVnmZfUPm60dvM\"",
    "mtime": "2025-09-09T15:26:45.902Z",
    "size": 1917,
    "path": "../public/images/svgs/trophy-1585002.svg"
  },
  "/images/svgs/trophy.svg": {
    "type": "image/svg+xml",
    "etag": "\"77d-u8skUXOYCJg15eVnmZfUPm60dvM\"",
    "mtime": "2025-09-09T15:26:45.902Z",
    "size": 1917,
    "path": "../public/images/svgs/trophy.svg"
  },
  "/images/svgs/truck.svg": {
    "type": "image/svg+xml",
    "etag": "\"3a6-kUT0pmqOGnJ8qdhBbsaqaiT1q8M\"",
    "mtime": "2025-09-09T15:26:45.904Z",
    "size": 934,
    "path": "../public/images/svgs/truck.svg"
  },
  "/images/svgs/wallet.svg": {
    "type": "image/svg+xml",
    "etag": "\"493-avV6w7SrJply0R8RMad5lKdZRqU\"",
    "mtime": "2025-09-09T15:26:45.903Z",
    "size": 1171,
    "path": "../public/images/svgs/wallet.svg"
  },
  "/images/svgs/warning-shap.svg": {
    "type": "image/svg+xml",
    "etag": "\"705-/UD74gKC3d2tzcO0rpgpNPcuUNI\"",
    "mtime": "2025-09-09T15:26:45.903Z",
    "size": 1797,
    "path": "../public/images/svgs/warning-shap.svg"
  },
  "/_nuxt/builds/latest.json": {
    "type": "application/json",
    "etag": "\"47-9VOpCuyCwrgf6W2m3PewsG90LEM\"",
    "mtime": "2025-09-09T15:26:45.174Z",
    "size": 71,
    "path": "../public/_nuxt/builds/latest.json"
  },
  "/images/front-pages/background/contact-icon.png": {
    "type": "image/png",
    "etag": "\"6e9d-rsD0jvzabHnI4Lp+CDJX42Hs5MY\"",
    "mtime": "2025-09-09T15:26:45.855Z",
    "size": 28317,
    "path": "../public/images/front-pages/background/contact-icon.png"
  },
  "/images/front-pages/background/facebook.svg": {
    "type": "image/svg+xml",
    "etag": "\"2b1-onyWxOfyMGWHqpq890VF6dWC/Gc\"",
    "mtime": "2025-09-09T15:26:45.548Z",
    "size": 689,
    "path": "../public/images/front-pages/background/facebook.svg"
  },
  "/images/front-pages/background/feature-image.png": {
    "type": "image/png",
    "etag": "\"28362-juyWekfsdDrNwFAGT+4giUWQjyc\"",
    "mtime": "2025-09-09T15:26:45.862Z",
    "size": 164706,
    "path": "../public/images/front-pages/background/feature-image.png"
  },
  "/images/front-pages/background/instagram.svg": {
    "type": "image/svg+xml",
    "etag": "\"829-Ybon7g7f+wILBdzIMrKCFyu4suk\"",
    "mtime": "2025-09-09T15:26:45.859Z",
    "size": 2089,
    "path": "../public/images/front-pages/background/instagram.svg"
  },
  "/images/front-pages/background/left-shape.png": {
    "type": "image/png",
    "etag": "\"2cda-rv+kfabbqM79gALqbMshJdAHPj8\"",
    "mtime": "2025-09-09T15:26:45.857Z",
    "size": 11482,
    "path": "../public/images/front-pages/background/left-shape.png"
  },
  "/images/front-pages/background/left-widget.png": {
    "type": "image/png",
    "etag": "\"1d5ee-gMcYdApJWmhqklG+2lfLCMalJlw\"",
    "mtime": "2025-09-09T15:26:45.867Z",
    "size": 120302,
    "path": "../public/images/front-pages/background/left-widget.png"
  },
  "/images/front-pages/background/main-banner.png": {
    "type": "image/png",
    "etag": "\"36608-PYq4K0Rdvw7Wvvrsd9ILftB0Nmg\"",
    "mtime": "2025-09-09T15:26:45.865Z",
    "size": 222728,
    "path": "../public/images/front-pages/background/main-banner.png"
  },
  "/images/front-pages/background/quotes.svg": {
    "type": "image/svg+xml",
    "etag": "\"39e-V9jhnasa9xXyCl4bzYGrftnKpAg\"",
    "mtime": "2025-09-09T15:26:45.859Z",
    "size": 926,
    "path": "../public/images/front-pages/background/quotes.svg"
  },
  "/images/front-pages/background/right-shape.png": {
    "type": "image/png",
    "etag": "\"1ad0-RbnUREbG1O61nez6C8ggf8h+yFk\"",
    "mtime": "2025-09-09T15:26:45.867Z",
    "size": 6864,
    "path": "../public/images/front-pages/background/right-shape.png"
  },
  "/images/front-pages/background/right-widget.png": {
    "type": "image/png",
    "etag": "\"16ef2-JCheWQMEwSFdTCEYyh6HHE06FmM\"",
    "mtime": "2025-09-09T15:26:45.869Z",
    "size": 93938,
    "path": "../public/images/front-pages/background/right-widget.png"
  },
  "/images/front-pages/background/twitter.svg": {
    "type": "image/svg+xml",
    "etag": "\"4df-9IhDfMC7WIDHSaD7SgvIA0wb3L4\"",
    "mtime": "2025-09-09T15:26:45.876Z",
    "size": 1247,
    "path": "../public/images/front-pages/background/twitter.svg"
  },
  "/images/front-pages/background/white-icon-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"499-VyBacKaq5hG0j0aXuiwXGtHSHNk\"",
    "mtime": "2025-09-09T15:26:45.875Z",
    "size": 1177,
    "path": "../public/images/front-pages/background/white-icon-logo.svg"
  },
  "/images/front-pages/background/white-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"22fb-fj9Nj2P8mVsLOQjk76B1eTX7QPM\"",
    "mtime": "2025-09-09T15:26:45.875Z",
    "size": 8955,
    "path": "../public/images/front-pages/background/white-logo.svg"
  },
  "/images/front-pages/componies/capgemini.svg": {
    "type": "image/svg+xml",
    "etag": "\"192a-rhJWdTo3F7o80OU/Oaw99mTpSsc\"",
    "mtime": "2025-09-09T15:26:45.558Z",
    "size": 6442,
    "path": "../public/images/front-pages/componies/capgemini.svg"
  },
  "/images/front-pages/componies/dell.svg": {
    "type": "image/svg+xml",
    "etag": "\"5e5-5xrie9dfGUkP1iG8MFVXWQ24C/0\"",
    "mtime": "2025-09-09T15:26:45.909Z",
    "size": 1509,
    "path": "../public/images/front-pages/componies/dell.svg"
  },
  "/images/front-pages/componies/infosys.svg": {
    "type": "image/svg+xml",
    "etag": "\"eeb-jdXY0U7uLny5rrZT2AAPeJerQS4\"",
    "mtime": "2025-09-09T15:26:45.908Z",
    "size": 3819,
    "path": "../public/images/front-pages/componies/infosys.svg"
  },
  "/images/front-pages/componies/intel.svg": {
    "type": "image/svg+xml",
    "etag": "\"c4e-hINKJmtPXF24O/MDSuFDLpFOz4g\"",
    "mtime": "2025-09-09T15:26:45.909Z",
    "size": 3150,
    "path": "../public/images/front-pages/componies/intel.svg"
  },
  "/images/front-pages/componies/oracle.svg": {
    "type": "image/svg+xml",
    "etag": "\"f4c-vj3KfkVGP6H6iaegHF4NKGkI5Ek\"",
    "mtime": "2025-09-09T15:26:45.903Z",
    "size": 3916,
    "path": "../public/images/front-pages/componies/oracle.svg"
  },
  "/images/front-pages/componies/samsung.svg": {
    "type": "image/svg+xml",
    "etag": "\"ec4-+TkwyWmK0uS7CQQUvW7gsPlUQe8\"",
    "mtime": "2025-09-09T15:26:45.904Z",
    "size": 3780,
    "path": "../public/images/front-pages/componies/samsung.svg"
  },
  "/images/front-pages/leaders/leader1.png": {
    "type": "image/png",
    "etag": "\"40446-E3vhxodaAd+lv2u/W2O40ddRYLs\"",
    "mtime": "2025-09-09T15:26:45.562Z",
    "size": 263238,
    "path": "../public/images/front-pages/leaders/leader1.png"
  },
  "/images/front-pages/leaders/leader2.png": {
    "type": "image/png",
    "etag": "\"79ae4-rI1CgxgB1Ia9Onm+Fz8aCqJkUyU\"",
    "mtime": "2025-09-09T15:26:45.917Z",
    "size": 498404,
    "path": "../public/images/front-pages/leaders/leader2.png"
  },
  "/images/front-pages/leaders/leader3.png": {
    "type": "image/png",
    "etag": "\"61add-n52gKth+kVDm0z1ncrrTu2SNRyw\"",
    "mtime": "2025-09-09T15:26:45.915Z",
    "size": 400093,
    "path": "../public/images/front-pages/leaders/leader3.png"
  },
  "/images/front-pages/leaders/leader4.png": {
    "type": "image/png",
    "etag": "\"426ec-crtv1MMa57REcAEhniaWQOOIXu8\"",
    "mtime": "2025-09-09T15:26:45.911Z",
    "size": 272108,
    "path": "../public/images/front-pages/leaders/leader4.png"
  },
  "/images/front-pages/leaders/leader5.png": {
    "type": "image/png",
    "etag": "\"1abbf-lsDtP7Z8jMjecpf/vzUgU/7MaLk\"",
    "mtime": "2025-09-09T15:26:45.909Z",
    "size": 109503,
    "path": "../public/images/front-pages/leaders/leader5.png"
  },
  "/images/front-pages/payments/american-exp.svg": {
    "type": "image/svg+xml",
    "etag": "\"2ccd-p+qBjj5j1BdqKbhoD5BFvnnY5cg\"",
    "mtime": "2025-09-09T15:26:45.912Z",
    "size": 11469,
    "path": "../public/images/front-pages/payments/american-exp.svg"
  },
  "/images/front-pages/payments/dinners-clb.svg": {
    "type": "image/svg+xml",
    "etag": "\"13780-k847vGPc9lhM/M4zN0NJJlmby+U\"",
    "mtime": "2025-09-09T15:26:45.559Z",
    "size": 79744,
    "path": "../public/images/front-pages/payments/dinners-clb.svg"
  },
  "/images/front-pages/payments/discover.svg": {
    "type": "image/svg+xml",
    "etag": "\"41ce-A0a1MFKrZDKp0Q0NLrBLbygcD98\"",
    "mtime": "2025-09-09T15:26:45.912Z",
    "size": 16846,
    "path": "../public/images/front-pages/payments/discover.svg"
  },
  "/images/front-pages/payments/jcb.svg": {
    "type": "image/svg+xml",
    "etag": "\"102f-RYtOGXgLWH4y05NnKWhPPLpzOrI\"",
    "mtime": "2025-09-09T15:26:45.911Z",
    "size": 4143,
    "path": "../public/images/front-pages/payments/jcb.svg"
  },
  "/images/front-pages/payments/maesro.svg": {
    "type": "image/svg+xml",
    "etag": "\"2bfe-W3Z7JlGKvDNjHKs4Kz4rF+T4uAU\"",
    "mtime": "2025-09-09T15:26:45.911Z",
    "size": 11262,
    "path": "../public/images/front-pages/payments/maesro.svg"
  },
  "/images/front-pages/payments/master.svg": {
    "type": "image/svg+xml",
    "etag": "\"39f9-gls5kPsdpN1degQveUc0bqoiMk0\"",
    "mtime": "2025-09-09T15:26:45.912Z",
    "size": 14841,
    "path": "../public/images/front-pages/payments/master.svg"
  },
  "/images/front-pages/payments/paypal.svg": {
    "type": "image/svg+xml",
    "etag": "\"18fb-9gvb4oLn4NrfeE188cAA2tGkdDk\"",
    "mtime": "2025-09-09T15:26:45.913Z",
    "size": 6395,
    "path": "../public/images/front-pages/payments/paypal.svg"
  },
  "/images/front-pages/payments/visa.svg": {
    "type": "image/svg+xml",
    "etag": "\"787-SbOq45zsfk/Roq3E3RhLuedi138\"",
    "mtime": "2025-09-09T15:26:45.913Z",
    "size": 1927,
    "path": "../public/images/front-pages/payments/visa.svg"
  },
  "/images/front-pages/technology/Apexchart.svg": {
    "type": "image/svg+xml",
    "etag": "\"2e8b-mzT3U5+lcy/dY9m5XcZO3vbkNos\"",
    "mtime": "2025-09-09T15:26:45.913Z",
    "size": 11915,
    "path": "../public/images/front-pages/technology/Apexchart.svg"
  },
  "/images/front-pages/technology/Pinia.svg": {
    "type": "image/svg+xml",
    "etag": "\"1d2c-J/VDq41g/vg62ND52ZBl4VArf7A\"",
    "mtime": "2025-09-09T15:26:45.558Z",
    "size": 7468,
    "path": "../public/images/front-pages/technology/Pinia.svg"
  },
  "/images/front-pages/technology/Typescript.svg": {
    "type": "image/svg+xml",
    "etag": "\"778-kaPAu5bsBizsJJtkyTb7shFp4bo\"",
    "mtime": "2025-09-09T15:26:45.913Z",
    "size": 1912,
    "path": "../public/images/front-pages/technology/Typescript.svg"
  },
  "/images/front-pages/technology/Vite.svg": {
    "type": "image/svg+xml",
    "etag": "\"bea-SuRwavgsfyShQ9Cc3k3AuU7lQRc\"",
    "mtime": "2025-09-09T15:26:45.913Z",
    "size": 3050,
    "path": "../public/images/front-pages/technology/Vite.svg"
  },
  "/images/front-pages/technology/Vuejs.svg": {
    "type": "image/svg+xml",
    "etag": "\"1b8-uCArOapqLF+nrK1upDxFmgYynok\"",
    "mtime": "2025-09-09T15:26:45.913Z",
    "size": 440,
    "path": "../public/images/front-pages/technology/Vuejs.svg"
  },
  "/images/front-pages/technology/Vuetify.svg": {
    "type": "image/svg+xml",
    "etag": "\"24f-5GJdyflpUivb7mzgtgjHMF6tkyA\"",
    "mtime": "2025-09-09T15:26:45.914Z",
    "size": 591,
    "path": "../public/images/front-pages/technology/Vuetify.svg"
  },
  "/images/front-pages/technology/nuxt.svg": {
    "type": "image/svg+xml",
    "etag": "\"3f3-Zg4GfkKQvN6bxF6tpZk2gqJGNsE\"",
    "mtime": "2025-09-09T15:26:45.914Z",
    "size": 1011,
    "path": "../public/images/front-pages/technology/nuxt.svg"
  },
  "/images/landingpage/apps/app-blog-detail.jpg": {
    "type": "image/jpeg",
    "etag": "\"25d53-dIdIkewesI6AkwIUKtdGCRnx7No\"",
    "mtime": "2025-09-09T15:26:45.549Z",
    "size": 154963,
    "path": "../public/images/landingpage/apps/app-blog-detail.jpg"
  },
  "/images/landingpage/apps/app-blog.jpg": {
    "type": "image/jpeg",
    "etag": "\"25d79-C/DWW/0MJCLsX3x39xrdeXbC5l4\"",
    "mtime": "2025-09-09T15:26:45.915Z",
    "size": 155001,
    "path": "../public/images/landingpage/apps/app-blog.jpg"
  },
  "/images/landingpage/apps/app-calendar.jpg": {
    "type": "image/jpeg",
    "etag": "\"138d3-diTKx4akdoHU/t+0+nVTNbgeOF0\"",
    "mtime": "2025-09-09T15:26:45.914Z",
    "size": 80083,
    "path": "../public/images/landingpage/apps/app-calendar.jpg"
  },
  "/images/landingpage/apps/app-chat.jpg": {
    "type": "image/jpeg",
    "etag": "\"1c641-fdB+yDITglPOLzG+LSCBAmHxX0k\"",
    "mtime": "2025-09-09T15:26:45.920Z",
    "size": 116289,
    "path": "../public/images/landingpage/apps/app-chat.jpg"
  },
  "/images/landingpage/apps/app-contact.jpg": {
    "type": "image/jpeg",
    "etag": "\"1b12d-zdI2pPhWa4aZ7vvGQ8ax0fkMCl0\"",
    "mtime": "2025-09-09T15:26:45.918Z",
    "size": 110893,
    "path": "../public/images/landingpage/apps/app-contact.jpg"
  },
  "/images/landingpage/apps/app-invoice.jpg": {
    "type": "image/jpeg",
    "etag": "\"17d7c-UPQw4kcYSZeJ5Q7PyaD/W9L0jvw\"",
    "mtime": "2025-09-09T15:26:45.916Z",
    "size": 97660,
    "path": "../public/images/landingpage/apps/app-invoice.jpg"
  },
  "/images/landingpage/apps/app-kanban.jpg": {
    "type": "image/jpeg",
    "etag": "\"19c28-9e/MU9tsVDbbjNBuhJTE972UDb4\"",
    "mtime": "2025-09-09T15:26:45.916Z",
    "size": 105512,
    "path": "../public/images/landingpage/apps/app-kanban.jpg"
  },
  "/images/landingpage/apps/app-note.jpg": {
    "type": "image/jpeg",
    "etag": "\"157f3-c59sLQtfwANU7c8HNbwZ2C0ImJU\"",
    "mtime": "2025-09-09T15:26:45.920Z",
    "size": 88051,
    "path": "../public/images/landingpage/apps/app-note.jpg"
  },
  "/images/landingpage/apps/app-product-detail.jpg": {
    "type": "image/jpeg",
    "etag": "\"21bcd-7YZn62lZ7IERyIS3y/btiMgRyKY\"",
    "mtime": "2025-09-09T15:26:45.919Z",
    "size": 138189,
    "path": "../public/images/landingpage/apps/app-product-detail.jpg"
  },
  "/images/landingpage/apps/app-productlist.jpg": {
    "type": "image/jpeg",
    "etag": "\"15d50-LHjmRkqM4ceL4R0aZNpNaABvE+Q\"",
    "mtime": "2025-09-09T15:26:45.918Z",
    "size": 89424,
    "path": "../public/images/landingpage/apps/app-productlist.jpg"
  },
  "/images/landingpage/apps/app-shop.jpg": {
    "type": "image/jpeg",
    "etag": "\"25b84-31CH//LfeT5kgiy6/MVp0ATk+28\"",
    "mtime": "2025-09-09T15:26:45.921Z",
    "size": 154500,
    "path": "../public/images/landingpage/apps/app-shop.jpg"
  },
  "/images/landingpage/apps/app-user-profile.jpg": {
    "type": "image/jpeg",
    "etag": "\"1ad9f-xTcCX2BbaDPnir7UH5SAsXpGt8w\"",
    "mtime": "2025-09-09T15:26:45.920Z",
    "size": 109983,
    "path": "../public/images/landingpage/apps/app-user-profile.jpg"
  },
  "/images/landingpage/background/frameworks.svg": {
    "type": "image/svg+xml",
    "etag": "\"35d8-XTKzgVlwdDO3WZMQ1gN4Nkb9SqM\"",
    "mtime": "2025-09-09T15:26:45.559Z",
    "size": 13784,
    "path": "../public/images/landingpage/background/frameworks.svg"
  },
  "/images/landingpage/background/school.png": {
    "type": "image/png",
    "etag": "\"1e06c-vh22DoREJP77FU2dmjL9m88mBIY\"",
    "mtime": "2025-09-09T15:26:45.925Z",
    "size": 122988,
    "path": "../public/images/landingpage/background/school.png"
  },
  "/images/landingpage/background/shape-3.png": {
    "type": "image/png",
    "etag": "\"1c7a-BV9jLez0GIWLmzQOmtuNiiqH6ck\"",
    "mtime": "2025-09-09T15:26:45.920Z",
    "size": 7290,
    "path": "../public/images/landingpage/background/shape-3.png"
  },
  "/images/landingpage/demos/demo-dark.jpg": {
    "type": "image/jpeg",
    "etag": "\"21496-CWLPTJQDcs+pkV814ZZJ6u8xPC4\"",
    "mtime": "2025-09-09T15:26:45.560Z",
    "size": 136342,
    "path": "../public/images/landingpage/demos/demo-dark.jpg"
  },
  "/images/landingpage/demos/demo-horizontal.jpg": {
    "type": "image/jpeg",
    "etag": "\"1d16c-DGuP7pIZgtTKYlEKg+pGTozabcA\"",
    "mtime": "2025-09-09T15:26:45.924Z",
    "size": 119148,
    "path": "../public/images/landingpage/demos/demo-horizontal.jpg"
  },
  "/images/landingpage/demos/demo-main.jpg": {
    "type": "image/jpeg",
    "etag": "\"208fd-trAo2YoaAtB4P81DI6QZ2FO+bFM\"",
    "mtime": "2025-09-09T15:26:45.922Z",
    "size": 133373,
    "path": "../public/images/landingpage/demos/demo-main.jpg"
  },
  "/images/landingpage/demos/demo-mini.jpg": {
    "type": "image/jpeg",
    "etag": "\"1bbd1-FACxFZ89vKoVqzxBrBWLJlcknb8\"",
    "mtime": "2025-09-09T15:26:45.923Z",
    "size": 113617,
    "path": "../public/images/landingpage/demos/demo-mini.jpg"
  },
  "/images/landingpage/demos/demo-rtl.jpg": {
    "type": "image/jpeg",
    "etag": "\"1fb97-9eyrTzO6xhP0uMjppt0gQyLc9LU\"",
    "mtime": "2025-09-09T15:26:45.921Z",
    "size": 129943,
    "path": "../public/images/landingpage/demos/demo-rtl.jpg"
  },
  "/images/landingpage/frontpages/aboutus.jpg": {
    "type": "image/jpeg",
    "etag": "\"1035f-t6X25pg+HE6+8w7tyo1VTwNHpZk\"",
    "mtime": "2025-09-09T15:26:45.924Z",
    "size": 66399,
    "path": "../public/images/landingpage/frontpages/aboutus.jpg"
  },
  "/images/landingpage/frontpages/blogpage.jpg": {
    "type": "image/jpeg",
    "etag": "\"15c39-OMN6c25dQnyeO7I/xuzI6AkYecE\"",
    "mtime": "2025-09-09T15:26:45.560Z",
    "size": 89145,
    "path": "../public/images/landingpage/frontpages/blogpage.jpg"
  },
  "/images/landingpage/frontpages/contactus.jpg": {
    "type": "image/jpeg",
    "etag": "\"21540-nI9KWz5fhKb494CVvj5UGKbDmho\"",
    "mtime": "2025-09-09T15:26:45.923Z",
    "size": 136512,
    "path": "../public/images/landingpage/frontpages/contactus.jpg"
  },
  "/images/landingpage/frontpages/homepage.jpg": {
    "type": "image/jpeg",
    "etag": "\"14625-NnHbivz+tBTbinICm2tJQbZq32g\"",
    "mtime": "2025-09-09T15:26:45.924Z",
    "size": 83493,
    "path": "../public/images/landingpage/frontpages/homepage.jpg"
  },
  "/images/landingpage/frontpages/portfolio.jpg": {
    "type": "image/jpeg",
    "etag": "\"1621d-lDEmFcvU5Vgzc/h1dyFd9f4UkuA\"",
    "mtime": "2025-09-09T15:26:45.933Z",
    "size": 90653,
    "path": "../public/images/landingpage/frontpages/portfolio.jpg"
  },
  "/images/landingpage/frontpages/pricing.jpg": {
    "type": "image/jpeg",
    "etag": "\"15a13-87NWPUa+YmXZctY7xKByrEXzvPY\"",
    "mtime": "2025-09-09T15:26:45.924Z",
    "size": 88595,
    "path": "../public/images/landingpage/frontpages/pricing.jpg"
  },
  "/images/landingpage/slider/slider-group.png": {
    "type": "image/png",
    "etag": "\"14b0a-QBdwFSP0dY/6o/Xihe8TJaM7MSw\"",
    "mtime": "2025-09-09T15:26:45.566Z",
    "size": 84746,
    "path": "../public/images/landingpage/slider/slider-group.png"
  },
  "/_nuxt/builds/meta/6cd70520-2307-4c1f-97b0-70f6026d9b34.json": {
    "type": "application/json",
    "etag": "\"8b-R+HERCErWRTCAsPubM97kF21Mng\"",
    "mtime": "2025-09-09T15:26:45.166Z",
    "size": 139,
    "path": "../public/_nuxt/builds/meta/6cd70520-2307-4c1f-97b0-70f6026d9b34.json"
  }
};

const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
function cwd() {
  if (typeof process !== "undefined" && typeof process.cwd === "function") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
const resolve = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
    const path = index >= 0 ? arguments_[index] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1) ; else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const dirname = function(p) {
  const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
  if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
    segments[0] += "/";
  }
  return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1},"/_nuxt/":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _eVgzDp = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError$1({ statusCode: 404 });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _SxA8c9 = defineEventHandler(() => {});

const _lazy_tqAgvr = () => import('../routes/renderer.mjs');

const handlers = [
  { route: '', handler: _eVgzDp, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_tqAgvr, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: _SxA8c9, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_tqAgvr, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => b(nodeHandler, aRequest);
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return C(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const debug = (...args) => {
};
function GracefulShutdown(server, opts) {
  opts = opts || {};
  const options = Object.assign(
    {
      signals: "SIGINT SIGTERM",
      timeout: 3e4,
      development: false,
      forceExit: true,
      onShutdown: (signal) => Promise.resolve(signal),
      preShutdown: (signal) => Promise.resolve(signal)
    },
    opts
  );
  let isShuttingDown = false;
  const connections = {};
  let connectionCounter = 0;
  const secureConnections = {};
  let secureConnectionCounter = 0;
  let failed = false;
  let finalRun = false;
  function onceFactory() {
    let called = false;
    return (emitter, events, callback) => {
      function call() {
        if (!called) {
          called = true;
          return Reflect.apply(callback, this, arguments);
        }
      }
      for (const e of events) {
        emitter.on(e, call);
      }
    };
  }
  const signals = options.signals.split(" ").map((s) => s.trim()).filter((s) => s.length > 0);
  const once = onceFactory();
  once(process, signals, (signal) => {
    debug("received shut down signal", signal);
    shutdown(signal).then(() => {
      if (options.forceExit) {
        process.exit(failed ? 1 : 0);
      }
    }).catch((error) => {
      debug("server shut down error occurred", error);
      process.exit(1);
    });
  });
  function isFunction(functionToCheck) {
    const getType = Object.prototype.toString.call(functionToCheck);
    return /^\[object\s([A-Za-z]+)?Function]$/.test(getType);
  }
  function destroy(socket, force = false) {
    if (socket._isIdle && isShuttingDown || force) {
      socket.destroy();
      if (socket.server instanceof http.Server) {
        delete connections[socket._connectionId];
      } else {
        delete secureConnections[socket._connectionId];
      }
    }
  }
  function destroyAllConnections(force = false) {
    debug("Destroy Connections : " + (force ? "forced close" : "close"));
    let counter = 0;
    let secureCounter = 0;
    for (const key of Object.keys(connections)) {
      const socket = connections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        counter++;
        destroy(socket);
      }
    }
    debug("Connections destroyed : " + counter);
    debug("Connection Counter    : " + connectionCounter);
    for (const key of Object.keys(secureConnections)) {
      const socket = secureConnections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        secureCounter++;
        destroy(socket);
      }
    }
    debug("Secure Connections destroyed : " + secureCounter);
    debug("Secure Connection Counter    : " + secureConnectionCounter);
  }
  server.on("request", (req, res) => {
    req.socket._isIdle = false;
    if (isShuttingDown && !res.headersSent) {
      res.setHeader("connection", "close");
    }
    res.on("finish", () => {
      req.socket._isIdle = true;
      destroy(req.socket);
    });
  });
  server.on("connection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = connectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      connections[id] = socket;
      socket.once("close", () => {
        delete connections[socket._connectionId];
      });
    }
  });
  server.on("secureConnection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = secureConnectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      secureConnections[id] = socket;
      socket.once("close", () => {
        delete secureConnections[socket._connectionId];
      });
    }
  });
  process.on("close", () => {
    debug("closed");
  });
  function shutdown(sig) {
    function cleanupHttp() {
      destroyAllConnections();
      debug("Close http server");
      return new Promise((resolve, reject) => {
        server.close((err) => {
          if (err) {
            return reject(err);
          }
          return resolve(true);
        });
      });
    }
    debug("shutdown signal - " + sig);
    if (options.development) {
      debug("DEV-Mode - immediate forceful shutdown");
      return process.exit(0);
    }
    function finalHandler() {
      if (!finalRun) {
        finalRun = true;
        if (options.finally && isFunction(options.finally)) {
          debug("executing finally()");
          options.finally();
        }
      }
      return Promise.resolve();
    }
    function waitForReadyToShutDown(totalNumInterval) {
      debug(`waitForReadyToShutDown... ${totalNumInterval}`);
      if (totalNumInterval === 0) {
        debug(
          `Could not close connections in time (${options.timeout}ms), will forcefully shut down`
        );
        return Promise.resolve(true);
      }
      const allConnectionsClosed = Object.keys(connections).length === 0 && Object.keys(secureConnections).length === 0;
      if (allConnectionsClosed) {
        debug("All connections closed. Continue to shutting down");
        return Promise.resolve(false);
      }
      debug("Schedule the next waitForReadyToShutdown");
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(waitForReadyToShutDown(totalNumInterval - 1));
        }, 250);
      });
    }
    if (isShuttingDown) {
      return Promise.resolve();
    }
    debug("shutting down");
    return options.preShutdown(sig).then(() => {
      isShuttingDown = true;
      cleanupHttp();
    }).then(() => {
      const pollIterations = options.timeout ? Math.round(options.timeout / 250) : 0;
      return waitForReadyToShutDown(pollIterations);
    }).then((force) => {
      debug("Do onShutdown now");
      if (force) {
        destroyAllConnections(force);
      }
      return options.onShutdown(sig);
    }).then(finalHandler).catch((error) => {
      const errString = typeof error === "string" ? error : JSON.stringify(error);
      debug(errString);
      failed = true;
      throw errString;
    });
  }
  function shutdownManual() {
    return shutdown("manual");
  }
  return shutdownManual;
}

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT || "", 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  GracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((error) => {
          console.error(error);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const path = process.env.NITRO_UNIX_SOCKET;
const listener = server.listen(path ? { path } : { port, host }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  if (typeof addressInfo === "string") {
    console.log(`Listening on unix socket ${addressInfo}`);
    return;
  }
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening on ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { getResponseStatus as a, getQuery as b, createError$1 as c, defineRenderHandler as d, getRouteRules as e, useNitroApp as f, getResponseStatusText as g, joinRelativeURL as j, nodeServer as n, useRuntimeConfig as u };
//# sourceMappingURL=nitro.mjs.map
