import { J as ft } from './06Lf-ESN.js';
import { _ as yt } from './B_Hf6Mda.js';
import { u as ht } from './Bca-y4gR.js';
import { _ as j } from './BdQS_9M0.js';
import './Bg79Fzp0.js';
import { I as $ } from './CIJ-FIOA.js';
import { u as bt } from './CYoZooZ5.js';
import { _ as xt } from './CZt6Dfyp.js';
import './DCvGJmM2.js';
import { u as V } from './DhKUH_62.js';
import { p as it, n as lt, s as ot } from './DNxTkhIE.js';
import { a as _t, u as gt } from './DOV6aZNR.js';
import { u as Ct } from './DPqjSLPw.js';
import './Dw5zQ2DC.js';
import { u as vt } from './fPsAje_b.js';
import './nI9jmXyo.js';
import {
  q as _,
  y as A,
  o as at,
  f as B,
  x as ct,
  F as D,
  cu as dt,
  e,
  p as E,
  d as F,
  t as g,
  cw as G,
  w as i,
  l as I,
  aU as J,
  h as k,
  U as K,
  r as l,
  g as m,
  K as mt,
  u as n,
  bS as nt,
  b as o,
  G as O,
  ct as pt,
  cv as q,
  A as R,
  bq as rt,
  a as s,
  i as st,
  ce as U,
  H as ut,
  c as v,
  s as W,
} from './RV8HHTPq.js';
const wt = { class: 'hidden-md-and-down' },
  kt = {
    class:
      'd-flex align-center flex-fill border border-borderColor header-search rounded-pill px-5',
  },
  Bt = { class: 'text-subtitle-1 font-weight-medium mb-1' },
  Tt = { class: 'text-subtitle-2 text-medium-emphasis' },
  Q = {
    __name: 'Searchbar',
    setup(t) {
      return (r, a) => {
        const u = l('v-text-field'),
          d = l('v-btn'),
          f = l('v-list-item'),
          b = l('v-list'),
          c = l('perfect-scrollbar'),
          h = l('v-sheet'),
          C = l('v-menu');
        return (
          s(),
          m(
            C,
            { 'close-on-content-click': !1, class: 'search_popup' },
            {
              activator: i(({ props: x }) => [
                e(
                  'div',
                  A({ class: '' }, x),
                  [
                    e('div', wt, [
                      e('div', kt, [
                        o(n($), { icon: 'solar:magnifer-linear', height: '22', width: '22' }),
                        o(u, {
                          variant: 'plain',
                          density: 'compact',
                          class: 'position-relative pt-0 ml-3 custom-placeholer-color',
                          placeholder: 'Try to searching ...',
                          'single-line': '',
                          'hide-details': '',
                        }),
                      ]),
                    ]),
                    o(
                      d,
                      {
                        icon: '',
                        variant: 'text',
                        class: 'custom-hover-primary ml-sm-3 search hidden-md-and-up',
                        size: 'small',
                      },
                      {
                        default: i(() => [
                          o(n($), { icon: 'solar:magnifer-linear', height: '22', width: '22' }),
                        ]),
                        _: 1,
                      }
                    ),
                  ],
                  16
                ),
              ]),
              default: i(() => [
                o(
                  h,
                  { width: '360', elevation: '10', rounded: 'md' },
                  {
                    default: i(() => [
                      a[0] ||
                        (a[0] = e(
                          'h5',
                          { class: 'text-h5 mt-4 px-5 pb-4' },
                          'Quick Page Links',
                          -1
                        )),
                      o(
                        c,
                        { style: { height: '380px' } },
                        {
                          default: i(() => [
                            o(
                              b,
                              { class: 'pt-0 pb-5', lines: 'two' },
                              {
                                default: i(() => [
                                  (s(!0),
                                  v(
                                    D,
                                    null,
                                    E(
                                      n(ot),
                                      (x, y) => (
                                        s(),
                                        m(
                                          f,
                                          {
                                            value: x,
                                            key: y,
                                            to: x.href,
                                            color: 'primary',
                                            class: 'px-5 py-2',
                                          },
                                          {
                                            default: i(() => [
                                              e('h6', Bt, g(x.title), 1),
                                              e('p', Tt, g(x.href), 1),
                                            ]),
                                            _: 2,
                                          },
                                          1032,
                                          ['value', 'to']
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    _: 1,
                    __: [0],
                  }
                ),
              ]),
              _: 1,
            }
          )
        );
      };
    },
  },
  $t = { class: 'position-relative' },
  Z = F({
    __name: 'ThemeToggler',
    setup(t) {
      nt();
      const r = V(),
        a = I([
          { name: 'BLUE_THEME', bg: 'togglethemeBlue' },
          { name: 'DARK_BLUE_THEME', bg: 'togglethemeDarkBlue' },
        ]);
      return (u, d) => {
        const f = l('v-btn'),
          b = l('v-item'),
          c = l('v-item-group');
        return (
          s(),
          v('div', $t, [
            o(
              c,
              {
                mandatory: '',
                modelValue: n(r).actTheme,
                'onUpdate:modelValue': d[0] || (d[0] = (h) => (n(r).actTheme = h)),
                class: 'd-flex',
              },
              {
                default: i(() => [
                  (s(!0),
                  v(
                    D,
                    null,
                    E(
                      a.value,
                      (h) => (
                        s(),
                        v('div', { key: h.name }, [
                          o(
                            b,
                            { value: h.name },
                            {
                              default: i(({ toggle: C }) => [
                                o(
                                  f,
                                  {
                                    icon: '',
                                    class: _([h.bg, 'custom-hover-primary']),
                                    variant: 'text',
                                    size: 'small',
                                    onClick: C,
                                  },
                                  {
                                    default: i(() => [
                                      h.bg == 'togglethemeBlue'
                                        ? (s(),
                                          m(
                                            n($),
                                            {
                                              key: 0,
                                              icon: 'solar:sun-outline',
                                              height: '22',
                                              width: '22',
                                              class: _(h.bg),
                                            },
                                            null,
                                            8,
                                            ['class']
                                          ))
                                        : k('', !0),
                                      h.bg == 'togglethemeDarkBlue'
                                        ? (s(),
                                          m(
                                            n($),
                                            {
                                              key: 1,
                                              icon: 'solar:moon-outline',
                                              height: '22',
                                              width: '22',
                                              class: _(h.bg),
                                            },
                                            null,
                                            8,
                                            ['class']
                                          ))
                                        : k('', !0),
                                    ]),
                                    _: 2,
                                  },
                                  1032,
                                  ['class', 'onClick']
                                ),
                              ]),
                              _: 2,
                            },
                            1032,
                            ['value']
                          ),
                        ])
                      )
                    ),
                    128
                  )),
                ]),
                _: 1,
              },
              8,
              ['modelValue']
            ),
          ])
        );
      };
    },
  });
var M = ((t) => (
  (t.PROFESSIONAL = 'professionel'),
  (t.PRESTA = 'prestataire'),
  (t.CLIENT = 'client'),
  t
))(M || {});
const St = { class: 'd-flex align-center' },
  zt = { class: 'ml-md-4 d-md-block d-none' },
  Lt = { class: 'text-h6 d-flex align-center text-black font-weight-semibold' },
  Dt = { class: 'text-subtitle-2 font-weight-medium text-grey100' },
  Ft = { class: 'px-8 pt-6' },
  Pt = { class: 'd-flex align-center justify-space-between' },
  It = { class: 'd-flex align-center mt-5 pb-6' },
  Et = { class: 'ml-5' },
  At = { class: 'text-h5 mb-n1' },
  Ht = { class: 'text-subtitle-1 font-weight-regular text-grey100 font-weight-medium' },
  Vt = { style: { height: '100%', 'max-height': '240px' } },
  Rt = { class: 'text-h6 font-weight-medium mb-1 custom-title' },
  Nt = { class: 'text-subtitle-1 font-weight-regular text-grey100' },
  Ut = { class: 'pb-6 px-8 text-center' },
  Ot = F({
    __name: 'ProfileDD',
    setup(t) {
      const r = st(),
        { user: a, professionalUser: u, isProfessionalProfileCreated: d } = W(r),
        { sendLogout: f } = ht(),
        { userTokenBalance: b } = W(_t()),
        c = R(() => {
          var x, y, w, p, S, z, L, P;
          return (((x = a.value) == null ? void 0 : x.category) == 'professional' &&
            !((y = a.value) != null && y.username)) ||
            ((w = u.value) == null ? void 0 : w.category) == 'professional'
            ? (p = u.value) == null
              ? void 0
              : p.name
            : ((S = a.value) == null ? void 0 : S.category) == 'consumer' &&
                !((z = a.value) != null && z.username)
              ? (L = a.value) == null
                ? void 0
                : L.name
              : (P = a.value) == null
                ? void 0
                : P.username;
        }),
        h = R(() => {
          var x, y;
          return ((x = a.value) == null ? void 0 : x.category) == 'professional' ||
            ((y = u.value) == null ? void 0 : y.category) == 'professional'
            ? M.PRESTA
            : M.CLIENT;
        }),
        { getUserProfileDetails: C } = vt();
      return (
        at(() => {
          d.value && C();
        }),
        (x, y) => {
          const w = l('v-avatar'),
            p = l('v-divider'),
            S = l('v-list-item'),
            z = l('v-list'),
            L = l('v-btn'),
            P = l('v-sheet'),
            N = l('v-menu');
          return (
            s(),
            m(
              N,
              { 'close-on-content-click': !0, class: 'profile_popup' },
              {
                activator: i(({ props: T }) => [
                  e(
                    'div',
                    A({ class: 'text-left px-0 cursor-pointer', variant: 'text' }, T),
                    [
                      e('div', St, [
                        o(
                          w,
                          { size: '50' },
                          {
                            default: i(() => [
                              e(
                                'img',
                                {
                                  src: U,
                                  width: '50',
                                  alt: 'profile picture',
                                  class: _({ 'profile-not-defined': !n(d) }),
                                },
                                null,
                                2
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                        e('div', zt, [e('h6', Lt, g(n(c)), 1), e('span', Dt, g(n(h)), 1)]),
                      ]),
                    ],
                    16
                  ),
                ]),
                default: i(() => [
                  o(
                    P,
                    { rounded: 'lg', width: '385', elevation: '10', class: 'mt-5' },
                    {
                      default: i(() => [
                        e('div', Ft, [
                          e('div', Pt, [
                            y[1] ||
                              (y[1] = e(
                                'h6',
                                { class: 'text-h5 font-weight-semibold' },
                                'Votre profil',
                                -1
                              )),
                            o(n(rt), {
                              size: '22',
                              class: 'text-grey100 cursor-pointer opacity-50',
                            }),
                          ]),
                          e('div', It, [
                            o(
                              w,
                              { size: '90' },
                              {
                                default: i(
                                  () =>
                                    y[2] || (y[2] = [e('img', { src: U, width: '90' }, null, -1)])
                                ),
                                _: 1,
                                __: [2],
                              }
                            ),
                            e('div', Et, [e('h6', At, g(n(c)), 1), e('span', Ht, g(n(h)), 1)]),
                          ]),
                          o(p),
                        ]),
                        e('div', Vt, [
                          o(
                            z,
                            { class: 'py-0 theme-list', lines: 'two' },
                            {
                              default: i(() => [
                                (s(!0),
                                v(
                                  D,
                                  null,
                                  E(
                                    n(it),
                                    (T) => (
                                      s(),
                                      m(
                                        S,
                                        {
                                          key: T.title,
                                          class: _([
                                            'py-4 px-8 custom-text-primary',
                                            { 'profile-not-defined': !n(d) && !T.requiresProfile },
                                          ]),
                                          to: T.href,
                                        },
                                        {
                                          prepend: i(() => [
                                            o(
                                              w,
                                              {
                                                size: '40',
                                                class: _(['rounded-lg', 'bg-light' + T.bgcolor]),
                                              },
                                              {
                                                default: i(() => [
                                                  o(
                                                    n($),
                                                    {
                                                      icon: 'solar:' + T.avatar,
                                                      width: '25',
                                                      height: '25',
                                                      class: _('text-' + T.bgcolor),
                                                    },
                                                    null,
                                                    8,
                                                    ['icon', 'class']
                                                  ),
                                                ]),
                                                _: 2,
                                              },
                                              1032,
                                              ['class']
                                            ),
                                          ]),
                                          default: i(() => [
                                            e('div', null, [e('h6', Rt, g(T.title), 1)]),
                                            e('p', Nt, [
                                              e('b', null, g(T.requiresProfile ? n(b) : ''), 1),
                                              B(' ' + g(T.subtitle), 1),
                                            ]),
                                          ]),
                                          _: 2,
                                        },
                                        1032,
                                        ['to', 'class']
                                      )
                                    )
                                  ),
                                  128
                                )),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        e('div', Ut, [
                          o(
                            L,
                            {
                              color: 'primary',
                              size: 'large',
                              rounded: 'pill',
                              block: '',
                              onClick: y[0] || (y[0] = (T) => n(f)()),
                            },
                            {
                              default: i(() => y[3] || (y[3] = [B('Me déconnecter', -1)])),
                              _: 1,
                              __: [3],
                            }
                          ),
                        ]),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                _: 1,
              }
            )
          );
        }
      );
    },
  }),
  X = ct(Ot, [['__scopeId', 'data-v-738e875e']]),
  Mt = { class: 'position-realtive' },
  jt = { class: 'px-8 pb-4 pt-6' },
  Wt = { class: 'd-flex align-center' },
  qt = { class: 'text-h6 font-weight-medium mb-1' },
  Gt = { class: 'text-subtitle-1 font-weight-medium text-grey100' },
  Jt = { class: 'py-4 px-6 text-center' },
  Kt = F({
    __name: 'NotificationDD',
    setup(t) {
      return (r, a) => {
        const u = l('v-btn'),
          d = l('v-chip'),
          f = l('v-img'),
          b = l('v-avatar'),
          c = l('v-list-item'),
          h = l('v-divider'),
          C = l('v-list'),
          x = l('perfect-scrollbar'),
          y = l('v-sheet'),
          w = l('v-menu');
        return (
          s(),
          m(
            w,
            { 'close-on-content-click': !1, class: 'notification_popup' },
            {
              activator: i(({ props: p }) => [
                o(
                  u,
                  A({ icon: '', flat: '' }, p, { size: 'small', class: 'custom-hover-primary' }),
                  {
                    default: i(() => [
                      e('div', Mt, [
                        a[0] ||
                          (a[0] = e(
                            'div',
                            { class: 'notify' },
                            [e('span', { class: 'heartbit' }), B(), e('span', { class: 'point' })],
                            -1
                          )),
                        o(n($), {
                          icon: 'solar:bell-bing-line-duotone',
                          height: '24',
                          width: '24',
                        }),
                      ]),
                    ]),
                    _: 2,
                  },
                  1040
                ),
              ]),
              default: i(() => [
                o(
                  y,
                  { rounded: 'lg', width: '385', elevation: '10', class: 'mt-5 dropdown-box' },
                  {
                    default: i(() => [
                      e('div', jt, [
                        e('div', Wt, [
                          a[2] ||
                            (a[2] = e(
                              'h6',
                              { class: 'text-h5 font-weight-semibold' },
                              'Notifications',
                              -1
                            )),
                          o(
                            d,
                            {
                              color: 'primary',
                              variant: 'flat',
                              size: 'x-small',
                              class: 'text-white ml-4',
                              rounded: 'xl',
                            },
                            { default: i(() => a[1] || (a[1] = [B('5 New', -1)])), _: 1, __: [1] }
                          ),
                        ]),
                      ]),
                      o(
                        x,
                        { style: { height: '300px' } },
                        {
                          default: i(() => [
                            o(
                              C,
                              { class: 'py-0 theme-list', lines: 'two' },
                              {
                                default: i(() => [
                                  (s(!0),
                                  v(
                                    D,
                                    null,
                                    E(
                                      n(lt),
                                      (p) => (
                                        s(),
                                        m(
                                          c,
                                          {
                                            key: p.title,
                                            value: p,
                                            color: 'primary',
                                            class: 'py-4 px-8',
                                          },
                                          {
                                            prepend: i(() => [
                                              o(
                                                b,
                                                { size: '48' },
                                                {
                                                  default: i(() => [
                                                    o(
                                                      f,
                                                      { src: p.avatar, width: '48', alt: p.avatar },
                                                      null,
                                                      8,
                                                      ['src', 'alt']
                                                    ),
                                                  ]),
                                                  _: 2,
                                                },
                                                1024
                                              ),
                                            ]),
                                            default: i(() => [
                                              e('div', null, [e('h6', qt, g(p.title), 1)]),
                                              e('p', Gt, g(p.subtitle), 1),
                                            ]),
                                            _: 2,
                                          },
                                          1032,
                                          ['value']
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                  o(h),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      e('div', Jt, [
                        o(
                          u,
                          { color: 'primary', size: 'large', rounded: 'pill', block: '' },
                          {
                            default: i(() => a[3] || (a[3] = [B('See all Notifications', -1)])),
                            _: 1,
                            __: [3],
                          }
                        ),
                      ]),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              _: 1,
            }
          )
        );
      };
    },
  }),
  Qt = { class: 'hidden-md-and-up me-md-4 me-0' },
  Zt = { class: 'hidden-md-and-up w-40' },
  Xt = { class: 'hidden-sm-and-down me-sm-4 me-4' },
  Yt = { class: 'me-sm-4 me-0' },
  te = { class: 'position-realtive' },
  ee = { class: 'px-8 pb-4 pt-6' },
  oe = { class: 'd-flex align-center justify-space-between mt-4' },
  ie = ['src'],
  le = { class: 'd-flex align-center' },
  ne = { class: 'px-4' },
  se = { class: 'px-4' },
  ae = { key: 0, class: 'pb-4 px-6 text-center' },
  re = { class: 'hidden-sm-and-down mx-4' },
  ce = { class: 'd-flex justify-space-between align-center' },
  de = F({
    __name: 'index',
    setup(t) {
      const { createTokenSession: r } = gt(),
        a = I(0),
        u = I(!1),
        d = R(() => `${a.value * 9} €`);
      dt(() => {
        window.addEventListener('scroll', f);
      });
      const f = () => {
        window.pageYOffset ? (u.value = !0) : (u.value = !1);
      };
      return (b, c) => {
        const h = Q,
          C = l('v-spacer'),
          x = j,
          y = Z,
          w = l('v-badge'),
          p = l('v-btn'),
          S = l('v-sheet'),
          z = l('v-menu'),
          L = X,
          P = l('DotsIcon'),
          N = Kt,
          T = l('v-app-bar');
        return (
          s(),
          m(
            T,
            {
              elevation: '0',
              height: '75',
              color: 'containerBg',
              id: 'top',
              class: _(n(u) ? 'sticky' : ''),
              style: { position: 'relative', top: '10px' },
            },
            {
              default: i(() => [
                e('div', Qt, [o(h)]),
                o(C, { class: 'hidden-sm-and-down' }),
                e('div', Zt, [o(x)]),
                e('div', Xt, [o(h)]),
                e('div', Yt, [o(y)]),
                c[7] || (c[7] = e('div', { class: 'hidden-sm-and-down me-sm-4 me-4' }, null, -1)),
                o(
                  z,
                  { 'close-on-content-click': !1, class: 'notification_popup' },
                  {
                    activator: i(({ props: H }) => [
                      o(
                        p,
                        A({ icon: '', flat: '' }, H, {
                          size: 'small',
                          class: 'custom-hover-primary',
                        }),
                        {
                          default: i(() => [
                            e('div', te, [
                              o(n($), { icon: 'solar:cart-3-outline', height: '24', width: '24' }),
                            ]),
                            o(
                              w,
                              {
                                color: 'primary',
                                content: n(a),
                                variant: 'flat',
                                size: 'x-small',
                                class: 'text-white ml-4 position-absolute top-0 end-0',
                                rounded: 'xxl',
                              },
                              null,
                              8,
                              ['content']
                            ),
                          ]),
                          _: 2,
                        },
                        1040
                      ),
                    ]),
                    default: i(() => [
                      o(
                        S,
                        {
                          rounded: 'lg',
                          width: '385',
                          elevation: '10',
                          class: 'mt-5 dropdown-box',
                        },
                        {
                          default: i(() => [
                            e('div', ee, [
                              c[5] ||
                                (c[5] = e(
                                  'div',
                                  { class: 'd-flex align-center' },
                                  [
                                    e(
                                      'h6',
                                      { class: 'text-h5 font-weight-semibold' },
                                      'Besoin de jeton(s) ?'
                                    ),
                                  ],
                                  -1
                                )),
                              e('div', oe, [
                                e('img', { src: n(ft), alt: 'Jeton', height: '36px' }, null, 8, ie),
                                e('div', le, [
                                  o(
                                    p,
                                    {
                                      variant: 'text',
                                      onClick: c[0] || (c[0] = (H) => a.value--),
                                      disabled: n(a) == 0,
                                    },
                                    {
                                      default: i(() => c[3] || (c[3] = [B('-', -1)])),
                                      _: 1,
                                      __: [3],
                                    },
                                    8,
                                    ['disabled']
                                  ),
                                  e('p', ne, g(n(a) > 0 ? n(a) : 0), 1),
                                  o(
                                    p,
                                    { variant: 'text', onClick: c[1] || (c[1] = (H) => a.value++) },
                                    {
                                      default: i(() => c[4] || (c[4] = [B('+', -1)])),
                                      _: 1,
                                      __: [4],
                                    }
                                  ),
                                ]),
                                e('p', se, [e('b', null, g(n(a) >= 0 ? n(d) : 0), 1)]),
                              ]),
                            ]),
                            n(a) > 0
                              ? (s(),
                                v('div', ae, [
                                  o(
                                    p,
                                    {
                                      color: 'primary',
                                      size: 'small',
                                      rounded: 'pill',
                                      block: '',
                                      onClick: c[2] || (c[2] = (H) => n(r)(n(a))),
                                    },
                                    {
                                      default: i(() => c[6] || (c[6] = [B(' Acheter ', -1)])),
                                      _: 1,
                                      __: [6],
                                    }
                                  ),
                                ]))
                              : k('', !0),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    _: 1,
                  }
                ),
                e('div', re, [o(L)]),
                o(
                  z,
                  { 'close-on-content-click': !1, class: 'mobile_popup' },
                  {
                    activator: i(({ props: H }) => [
                      o(
                        p,
                        A(
                          {
                            icon: '',
                            class: 'bg-lightprimary hidden-md-and-up custom-hover-primary',
                            flat: '',
                          },
                          H,
                          { size: 'small' }
                        ),
                        {
                          default: i(() => [
                            o(P, { 'stroke-width': '2', size: '24', class: 'text-primary' }),
                          ]),
                          _: 2,
                        },
                        1040
                      ),
                    ]),
                    default: i(() => [
                      o(
                        S,
                        { rounded: 'lg', elevation: '10', class: 'mt-5 dropdown-box px-4 py-6' },
                        {
                          default: i(() => [
                            e('div', ce, [
                              o(
                                p,
                                {
                                  icon: '',
                                  variant: 'text',
                                  to: '/apps/ecommerce/checkout',
                                  class: 'custom-hover-primary',
                                  size: 'small',
                                },
                                {
                                  default: i(() => [
                                    o(
                                      w,
                                      { color: 'primary', 'offset-x': '-4', 'offset-y': '-6' },
                                      {
                                        default: i(() => [
                                          o(n($), {
                                            icon: 'solar:cart-3-line-duotone',
                                            height: '24',
                                            width: '24',
                                          }),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                  ]),
                                  _: 1,
                                }
                              ),
                              o(N),
                              o(L),
                            ]),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              _: 1,
              __: [7],
            },
            8,
            ['class']
          )
        );
      };
    },
  }),
  me = { class: 'hidden-md-and-down mt-2 pr-4' },
  ue = { class: 'hidden-md-and-up me-md-4 me-0' },
  pe = { class: 'hidden-md-and-up w-40' },
  he = { class: 'hidden-sm-and-down me-sm-4 me-4' },
  _e = { class: 'me-sm-4 me-0' },
  ge = { class: 'hidden-sm-and-down' },
  ve = { class: 'd-flex justify-space-between align-center' },
  fe = { class: 'mr-sm-3 mr-2' },
  be = F({
    __name: 'index',
    setup(t) {
      const r = V();
      (I(!1), I(!1), I(!1));
      const a = I((r.setHorizontalLayout, 0));
      mt(a, (d) => {
        a.value = d;
      });
      const u = bt();
      return (
        R(() => u.cart),
        (d, f) => {
          const b = j,
            c = l('v-btn'),
            h = Q,
            C = l('v-spacer'),
            x = Z,
            y = X,
            w = l('DotsIcon'),
            p = l('v-sheet'),
            S = l('v-menu'),
            z = l('v-app-bar');
          return (
            s(),
            m(
              z,
              {
                elevation: '0',
                priority: a.value,
                height: '75',
                class: 'horizontal-header',
                color: 'background',
              },
              {
                default: i(() => [
                  e(
                    'div',
                    {
                      class: _(
                        n(r).boxed
                          ? 'maxWidth v-toolbar__content px-lg-0 px-4'
                          : 'v-toolbar__content px-6'
                      ),
                    },
                    [
                      e('div', me, [o(b)]),
                      o(
                        c,
                        {
                          class: 'hidden-lg-and-up bg-lightsecondary custom-hover-primary',
                          icon: '',
                          variant: 'text',
                          onClick: O(n(r).SET_SIDEBAR_DRAWER, ['stop']),
                          size: 'small',
                        },
                        {
                          default: i(() => [
                            o(n($), { icon: 'solar:list-bold-duotone', height: '24', width: '24' }),
                          ]),
                          _: 1,
                        },
                        8,
                        ['onClick']
                      ),
                      e('div', ue, [o(h)]),
                      o(C, { class: 'hidden-sm-and-down' }),
                      e('div', pe, [o(b)]),
                      e('div', he, [o(h)]),
                      e('div', _e, [o(x)]),
                      e('div', ge, [o(y)]),
                      o(
                        S,
                        { 'close-on-content-click': !1, class: 'mobile_popup' },
                        {
                          activator: i(({ props: L }) => [
                            o(
                              c,
                              A(
                                {
                                  icon: '',
                                  class: 'bg-lightprimary hidden-md-and-up custom-hover-primary',
                                  flat: '',
                                },
                                L,
                                { size: 'small' }
                              ),
                              {
                                default: i(() => [
                                  o(w, { 'stroke-width': '2', size: '24', class: 'text-primary' }),
                                ]),
                                _: 2,
                              },
                              1040
                            ),
                          ]),
                          default: i(() => [
                            o(
                              p,
                              {
                                rounded: 'lg',
                                elevation: '10',
                                class: 'mt-5 dropdown-box px-4 py-6',
                              },
                              {
                                default: i(() => [e('div', ve, [e('div', fe, [o(h)]), o(y)])]),
                                _: 1,
                              }
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                    ],
                    2
                  ),
                ]),
                _: 1,
              },
              8,
              ['priority']
            )
          );
        }
      );
    },
  }),
  xe = { key: 0, class: '' },
  ye = { class: 'z-index-1 d-flex align-center' },
  Ce = { key: 1 },
  we = { class: 'navIcon' },
  ke = { class: 'z-index-1 ml-3' },
  Be = { key: 2, class: 'text-caption mt-n1 hide-menu' },
  Y = {
    __name: 'Index',
    props: { item: Object, level: Number },
    setup(t) {
      return (r, a) => {
        const u = l('v-chip'),
          d = xt;
        return (
          s(),
          m(
            d,
            {
              to: `${t.item.to}`,
              class: _('navItemLink text-grey200 bg-hover-' + t.item.BgColor),
              color: t.item.BgColor,
              disabled: t.item.disabled,
            },
            {
              default: i(() => [
                t.level > 0
                  ? (s(),
                    v('span', xe, [
                      e('div', ye, [
                        a[0] || (a[0] = e('span', { class: 'sublink-dot mr-4' }, null, -1)),
                        e('span', null, g(t.item.title), 1),
                      ]),
                    ]))
                  : (s(),
                    v('span', Ce, [
                      e(
                        'span',
                        { class: _(['icon-box', 'text-' + t.item.BgColor]) },
                        [
                          e('i', we, [
                            o(
                              n($),
                              {
                                icon: 'solar:' + t.item.icon,
                                height: '24',
                                width: '24',
                                level: t.level,
                                class: _('position-relative z-index-2 texthover-' + t.item.BgColor),
                              },
                              null,
                              8,
                              ['icon', 'level', 'class']
                            ),
                          ]),
                          e('span', ke, g(t.item.title), 1),
                        ],
                        2
                      ),
                    ])),
                t.item.subCaption ? (s(), v('small', Be, g(t.item.subCaption), 1)) : k('', !0),
                t.item.chip
                  ? (s(),
                    m(
                      u,
                      {
                        key: 3,
                        color: t.item.chipColor,
                        class: _('sidebarchip hide-menu ml-auto bg-' + t.item.BgColor),
                        size: (t.item.chipIcon, 'small'),
                        variant: t.item.chipVariant,
                        'prepend-icon': t.item.chipIcon,
                      },
                      { default: i(() => [B(g(t.item.chip), 1)]), _: 1 },
                      8,
                      ['color', 'class', 'size', 'variant', 'prepend-icon']
                    ))
                  : k('', !0),
              ]),
              _: 1,
            },
            8,
            ['to', 'class', 'color', 'disabled']
          )
        );
      };
    },
  },
  Te = ['disabled'],
  $e = { key: 0, class: 'w-100' },
  Se = { class: 'z-index-1' },
  ze = { class: 'mr-auto' },
  Le = { key: 1 },
  De = { class: 'icon-box' },
  Fe = { class: 'navIcon' },
  Pe = { class: 'z-index-1 ml-3' },
  Ie = { key: 2, class: 'text-caption mt-n1 hide-menu' },
  Ee = { class: 'ddIcon me-3 z-index-1 d-flex align-center' },
  Ae = {
    __name: 'Index',
    props: { item: Object, level: Number },
    setup(t) {
      return (r, a) => {
        const u = l('ChevronDownIcon'),
          d = l('Index', !0),
          f = Y;
        return (
          s(),
          v(
            D,
            null,
            [
              e(
                'a',
                {
                  class: _('navItemLink rounded-pill cursor-pointer bg-hover-' + t.item.BgColor),
                  disabled: t.item.disabled,
                },
                [
                  t.level > 0
                    ? (s(),
                      v('span', $e, [
                        e('div', Se, [
                          a[0] || (a[0] = e('span', { class: 'sublink-dot mr-4' }, null, -1)),
                          e('span', ze, g(t.item.title), 1),
                        ]),
                      ]))
                    : (s(),
                      v('span', Le, [
                        e('span', De, [
                          e('i', Fe, [
                            o(
                              n($),
                              {
                                icon: 'solar:' + t.item.icon,
                                height: '24',
                                width: '24',
                                level: t.level,
                                class: _('position-relative z-index-2 texthover-' + t.item.BgColor),
                              },
                              null,
                              8,
                              ['icon', 'level', 'class']
                            ),
                          ]),
                          e('span', Pe, g(t.item.title), 1),
                        ]),
                      ])),
                  t.item.subCaption ? (s(), v('small', Ie, g(t.item.subCaption), 1)) : k('', !0),
                  e('i', Ee, [o(u, { size: '15' })]),
                ],
                10,
                Te
              ),
              e(
                'ul',
                { class: _(`ddMenu ddLevel-${t.level + 1}`) },
                [
                  t.item.children
                    ? (s(!0),
                      v(
                        D,
                        { key: 0 },
                        E(
                          t.item.children,
                          (b, c) => (
                            s(),
                            v('li', { key: c, class: 'navItem' }, [
                              b.children
                                ? (s(),
                                  m(d, { key: 0, item: b, level: t.level + 1 }, null, 8, [
                                    'item',
                                    'level',
                                  ]))
                                : (s(),
                                  m(f, { key: 1, item: b, level: t.level + 1 }, null, 8, [
                                    'item',
                                    'level',
                                  ])),
                            ])
                          )
                        ),
                        128
                      ))
                    : k('', !0),
                ],
                2
              ),
            ],
            64
          )
        );
      };
    },
  },
  He = { class: 'mini-icon' },
  Ve = {
    class: 'mini-text font-weight-semibold pl-2 text-medium-emphasis text-uppercase text-body-2',
  },
  Re = {
    __name: 'index',
    props: { item: Object },
    setup(t) {
      const r = t;
      return (a, u) => {
        const d = l('DotsIcon'),
          f = l('v-list-subheader');
        return (
          s(),
          m(
            f,
            { class: 'smallCap text-capitalize text-subtitle-1 mt-7 d-flex align-items-center' },
            {
              default: i(() => [
                e('span', He, [o(d, { size: '16', 'stroke-width': '1.5', class: 'iconClass' })]),
                e('span', Ve, g(r.item.header), 1),
              ]),
              _: 1,
            }
          )
        );
      };
    },
  },
  Ne = { class: 'mb-0' },
  Ue = {
    __name: 'index',
    props: { item: Object, level: Number },
    setup(t) {
      return (r, a) => {
        const u = l('v-list-item-title'),
          d = l('v-list-item-subtitle'),
          f = l('v-chip'),
          b = l('v-list-item'),
          c = q('scroll-to');
        return (
          s(),
          v('div', Ne, [
            G(
              (s(),
              m(
                b,
                {
                  to: t.item.to,
                  rounded: 'lg',
                  class: '',
                  color: '',
                  ripple: !1,
                  disabled: t.item.disabled,
                  target: t.item.type === 'external' ? '_blank' : '',
                },
                J(
                  {
                    prepend: i(() => [
                      a[0] || (a[0] = e('div', { class: 'sublink-dot ml-4' }, null, -1)),
                    ]),
                    default: i(() => [
                      o(
                        u,
                        { class: 'ml-4 text-body-1 text-darkText' },
                        { default: i(() => [B(g(t.item.title), 1)]), _: 1 }
                      ),
                      t.item.subCaption
                        ? (s(),
                          m(
                            d,
                            { key: 0, class: 'text-caption mt-n1 hide-menu' },
                            { default: i(() => [B(g(t.item.subCaption), 1)]), _: 1 }
                          ))
                        : k('', !0),
                    ]),
                    _: 2,
                  },
                  [
                    t.item.chip
                      ? {
                          name: 'append',
                          fn: i(() => [
                            o(
                              f,
                              {
                                color: t.item.chipColor,
                                class: _('sidebarchip hide-menu bg-' + t.item.chipBgColor),
                                size: (t.item.chipIcon, 'small'),
                                variant: t.item.chipVariant,
                                'prepend-icon': t.item.chipIcon,
                              },
                              { default: i(() => [B(g(t.item.chip), 1)]), _: 1 },
                              8,
                              ['color', 'class', 'size', 'variant', 'prepend-icon']
                            ),
                          ]),
                          key: '0',
                        }
                      : void 0,
                  ]
                ),
                1032,
                ['to', 'disabled', 'target']
              )),
              [[c, { el: '#top' }]]
            ),
          ])
        );
      };
    },
  },
  Oe = { class: 'mb-1' },
  Me = ['color'],
  je = { key: 0, class: 'icon-box' },
  We = { key: 1, class: 'icon-box' },
  qe = { class: 'mb-4 sublinks' },
  tt = {
    __name: 'index',
    props: { item: Object, level: Number },
    setup(t) {
      return (r, a) => {
        const u = l('v-list-item-title'),
          d = l('v-list-item-subtitle'),
          f = l('v-list-item'),
          b = tt,
          c = Ue,
          h = l('v-list-group');
        return (
          s(),
          v('div', Oe, [
            o(
              h,
              { 'no-action': '' },
              {
                activator: i(({ props: C }) => [
                  o(
                    f,
                    A(C, {
                      value: t.item.title,
                      ripple: !1,
                      class: ' bg-hover-' + t.item.BgColor,
                      color: t.item.BgColor,
                    }),
                    {
                      prepend: i(() => [
                        e(
                          'div',
                          { class: _('navbox  bg-hover-' + t.item.BgColor), color: t.item.BgColor },
                          [
                            t.level > 0
                              ? (s(),
                                v(
                                  'span',
                                  je,
                                  a[0] ||
                                    (a[0] = [
                                      e('div', { class: 'sublink-dot', width: '30' }, null, -1),
                                    ])
                                ))
                              : (s(),
                                v('span', We, [
                                  o(
                                    n($),
                                    {
                                      icon: 'solar:' + t.item.icon,
                                      height: '24',
                                      width: '24',
                                      level: t.level,
                                      class: _(
                                        'position-relative z-index-2 texthover-' + t.item.BgColor
                                      ),
                                    },
                                    null,
                                    8,
                                    ['icon', 'level', 'class']
                                  ),
                                ])),
                          ],
                          10,
                          Me
                        ),
                      ]),
                      default: i(() => [
                        o(
                          u,
                          { class: 'text-subtitle-1 font-weight-medium' },
                          { default: i(() => [B(g(t.item.title), 1)]), _: 1 }
                        ),
                        t.item.subCaption
                          ? (s(),
                            m(
                              d,
                              { key: 0, class: 'text-caption mt-n1 hide-menu' },
                              { default: i(() => [B(g(t.item.subCaption), 1)]), _: 1 }
                            ))
                          : k('', !0),
                      ]),
                      _: 2,
                    },
                    1040,
                    ['value', 'class', 'color']
                  ),
                ]),
                default: i(() => [
                  e('div', qe, [
                    t.item.children
                      ? (s(!0),
                        v(
                          D,
                          { key: 0 },
                          E(
                            t.item.children,
                            (C, x) => (
                              s(),
                              v(
                                D,
                                { key: x },
                                [
                                  C.children
                                    ? (s(),
                                      m(b, { key: 0, item: C, level: t.level + 1 }, null, 8, [
                                        'item',
                                        'level',
                                      ]))
                                    : (s(),
                                      m(c, { key: 1, item: C, level: t.level + 1 }, null, 8, [
                                        'item',
                                        'level',
                                      ])),
                                ],
                                64
                              )
                            )
                          ),
                          128
                        ))
                      : k('', !0),
                  ]),
                ]),
                _: 1,
              }
            ),
          ])
        );
      };
    },
  },
  Ge = { class: 'mb-1' },
  Je = ['color'],
  Ke = { class: 'icon-box' },
  Qe = {
    __name: 'index',
    props: { item: Object, level: Number },
    setup(t) {
      return (r, a) => {
        const u = l('v-list-item-title'),
          d = l('v-list-item-subtitle'),
          f = l('v-chip'),
          b = l('v-list-item'),
          c = q('scroll-to');
        return (
          s(),
          v('div', Ge, [
            G(
              (s(),
              m(
                b,
                {
                  to: t.item.type === 'external' ? '' : t.item.to,
                  href: t.item.type === 'external' ? t.item.to : '',
                  rounded: '',
                  class: _('  bg-hover-' + t.item.BgColor),
                  color: t.item.BgColor,
                  ripple: !1,
                  disabled: t.item.disabled,
                  target: t.item.type === 'external' ? '_blank' : '',
                },
                J(
                  {
                    prepend: i(() => [
                      e(
                        'div',
                        { class: _('navbox  bg-hover-' + t.item.BgColor), color: t.item.BgColor },
                        [
                          e('span', Ke, [
                            o(
                              n($),
                              {
                                icon: 'solar:' + t.item.icon,
                                height: '24',
                                width: '24',
                                level: t.level,
                                class: _('position-relative z-index-2 texthover-' + t.item.BgColor),
                              },
                              null,
                              8,
                              ['icon', 'level', 'class']
                            ),
                          ]),
                        ],
                        10,
                        Je
                      ),
                    ]),
                    default: i(() => [
                      o(
                        u,
                        { class: 'text-subtitle-1 font-weight-medium', color: t.item.BgColor },
                        { default: i(() => [B(g(t.item.title), 1)]), _: 1 },
                        8,
                        ['color']
                      ),
                      t.item.subCaption
                        ? (s(),
                          m(
                            d,
                            { key: 0, class: 'text-caption mt-n1 hide-menu' },
                            { default: i(() => [B(g(t.item.subCaption), 1)]), _: 1 }
                          ))
                        : k('', !0),
                    ]),
                    _: 2,
                  },
                  [
                    t.item.chip
                      ? {
                          name: 'append',
                          fn: i(() => [
                            o(
                              f,
                              {
                                color: t.item.chipColor,
                                class: 'sidebarchip hide-menu',
                                size: (t.item.chipIcon, 'x-small'),
                                variant: t.item.chipVariant,
                                'prepend-icon': t.item.chipIcon,
                              },
                              { default: i(() => [B(g(t.item.chip), 1)]), _: 1 },
                              8,
                              ['color', 'size', 'variant', 'prepend-icon']
                            ),
                          ]),
                          key: '0',
                        }
                      : void 0,
                  ]
                ),
                1032,
                ['to', 'href', 'class', 'color', 'disabled', 'target']
              )),
              [[c, { el: '#top' }]]
            ),
          ])
        );
      };
    },
  },
  Ze = { class: 'd-flex align-center justify-space-between' },
  Xe = F({
    __name: 'index',
    setup(t) {
      return (r, a) => {
        const u = l('v-avatar'),
          d = l('v-btn'),
          f = l('v-sheet');
        return (
          s(),
          m(
            f,
            { rounded: 'md', color: 'lightprimary', class: 'pa-4 ExtraBox hide-menu' },
            {
              default: i(() => [
                e('div', Ze, [
                  o(
                    u,
                    { size: '50' },
                    {
                      default: i(
                        () =>
                          a[0] ||
                          (a[0] = [
                            e('img', { src: U, width: '50', alt: 'Mike Nielsen' }, null, -1),
                          ])
                      ),
                      _: 1,
                      __: [0],
                    }
                  ),
                  a[1] ||
                    (a[1] = e(
                      'div',
                      null,
                      [
                        e(
                          'h6',
                          { class: 'text-h6 d-flex align-center font-weight-semibold' },
                          'Mike Nielsen'
                        ),
                        e(
                          'span',
                          { class: 'text-subtitle-2 font-weight-medium text-grey100' },
                          'Admin'
                        ),
                      ],
                      -1
                    )),
                  e('div', null, [
                    o(
                      d,
                      { icon: '', class: 'bg-lightprimary', flat: '', size: 'small' },
                      {
                        default: i(() => [
                          o(n($), {
                            icon: 'solar:logout-linear',
                            class: 'text-primary',
                            'stroke-width': '3',
                            height: '24',
                            width: '24',
                          }),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                ]),
              ]),
              _: 1,
            }
          )
        );
      };
    },
  }),
  Ye = [
    { header: 'Home' },
    {
      title: 'Dashboard',
      icon: 'screencast-2-linear',
      BgColor: 'primary',
      to: '/dashboards/dashboard-client',
    },
    {
      title: 'Dashboard 2',
      icon: 'chart-line-duotone',
      BgColor: 'success',
      to: '/dashboards/dashboard2',
    },
    {
      title: 'Front Pages',
      icon: 'home-angle-linear',
      to: '/',
      children: [
        { title: 'Homepage', to: '/front-pages/homepage' },
        { title: 'About Us', to: '/front-pages/about-us' },
        { title: 'Blog', to: '/front-pages/blog/posts' },
        {
          title: 'Blog Details',
          to: '/front-pages/blog/early-black-friday-amazon-deals-cheap-tvs-headphones',
        },
        { title: 'Contact Us', to: '/front-pages/contact-us' },
        { title: 'Portfolio', to: '/front-pages/portfolio' },
        { title: 'Pricing', to: '/front-pages/pricing' },
      ],
    },
    { header: 'Apps' },
    { title: 'Contact', icon: 'phone-line-duotone', BgColor: 'secondary', to: '/apps/contacts' },
    {
      title: 'Blog',
      icon: 'align-vertical-spacing-line-duotone',
      BgColor: 'warning',
      to: '/',
      children: [
        { title: 'Posts', to: '/apps/blog/posts' },
        { title: 'Detail', to: '/apps/blog/early-black-friday-amazon-deals-cheap-tvs-headphones' },
      ],
    },
    {
      title: 'E-Commerce',
      icon: 'smart-speaker-minimalistic-line-duotone',
      to: '/ecommerce/',
      BgColor: 'success',
      children: [
        { title: 'Shop One', to: '/apps/ecommerce/productsone' },
        { title: 'Shop Two', to: '/apps/ecommerce/productstwo' },
        { title: 'Details One', to: '/apps/ecommerce/product/one/detail/1' },
        { title: 'Details Two', to: '/apps/ecommerce/producttwo/two/detail/1' },
        { title: 'List', to: '/apps/ecommerce/productlist' },
        { title: 'Checkout', to: '/apps/ecommerce/checkout' },
        { title: 'Add Product', to: '/apps/ecommerce/addproduct' },
        { title: 'Edit Product', to: '/apps/ecommerce/editproduct' },
      ],
    },
    {
      title: 'Chats',
      icon: 'chat-round-unread-line-duotone',
      BgColor: 'primary',
      to: '/apps/chats',
    },
    {
      title: 'User Profile',
      icon: 'user-rounded-line-duotone',
      BgColor: 'error',
      to: '/',
      children: [
        { title: 'Profile One', to: '/apps/userprofile/one' },
        { title: 'Profile Two', to: '/apps/userprofile/two' },
      ],
    },
    {
      title: 'Invoice',
      icon: 'bill-check-outline',
      BgColor: 'success',
      to: '/',
      children: [
        { title: 'List', to: '/apps/invoice' },
        { title: 'Details', to: '/apps/invoice/details/102' },
        { title: 'Create', to: '/apps/invoice/create' },
        { title: 'Edit', to: '/apps/invoice/edit/102' },
      ],
    },
    {
      title: 'Notes',
      icon: 'notification-unread-line-duotone',
      BgColor: 'secondary',
      to: '/apps/notes',
    },
    { title: 'Calendar', icon: 'calendar-line-duotone', BgColor: 'info', to: '/apps/calendar' },
    { title: 'Email', BgColor: 'error', icon: 'letter-linear', to: '/apps/email' },
    { title: 'Kanban', icon: 'widget-4-linear', BgColor: 'warning', to: '/apps/kanban' },
    { title: 'Tickets', icon: 'ticker-star-outline', BgColor: 'primary', to: '/apps/tickets' },
    { header: 'Pages' },
    {
      title: 'Pricing',
      icon: 'tag-price-line-duotone',
      BgColor: 'warning',
      to: '/theme-pages/pricing',
    },
    {
      title: 'FAQ',
      icon: 'question-circle-line-duotone',
      BgColor: 'error',
      to: '/theme-pages/faq',
    },
    {
      title: 'Account Setting',
      icon: 'settings-minimalistic-line-duotone',
      BgColor: 'success',
      to: '/theme-pages/account-settings',
    },
    { title: 'Landing Page', icon: 'layers-minimalistic-line-duotone', BgColor: 'info', to: '/' },
    {
      title: 'Gallery Lightbox',
      icon: 'gallery-minimalistic-outline',
      BgColor: 'warning',
      to: '/theme-pages/gallery-lightbox',
    },
    {
      title: 'Search Results',
      icon: 'calendar-search-line-duotone',
      BgColor: 'success',
      to: '/theme-pages/search-results',
    },
    {
      title: 'Social Contacts',
      icon: 'socket-outline',
      BgColor: 'primary',
      to: '/theme-pages/social-media',
    },
    {
      title: 'Treeview',
      icon: 'transmission-line-duotone',
      BgColor: 'error',
      to: '/theme-pages/treeview',
    },
    {
      title: 'Widget',
      icon: 'widget-add-line-duotone',
      to: '/widget-card',
      BgColor: 'primary',
      children: [
        { title: 'Cards', to: '/widgets/cards' },
        { title: 'Banners', to: '/widgets/banners' },
        { title: 'Charts', to: '/widgets/charts' },
      ],
    },
    { header: 'UI' },
    {
      title: 'Ui Elements',
      icon: 'code-scan-line-duotone',
      BgColor: 'primary',
      to: '/components/',
      children: [
        { title: 'Alert', to: '/ui-components/alert' },
        { title: 'Accordion', to: '/ui-components/accordion' },
        { title: 'Avatar', to: '/ui-components/avatar' },
        { title: 'Chip', to: '/ui-components/chip' },
        { title: 'Dialog', to: '/ui-components/dialogs' },
        { title: 'List', to: '/ui-components/list' },
        { title: 'Menus', to: '/ui-components/menus' },
        { title: 'Rating', to: '/ui-components/rating' },
        { title: 'Tabs', to: '/ui-components/tabs' },
        { title: 'Tooltip', to: '/ui-components/tooltip' },
        { title: 'Typography', to: '/ui-components/typography' },
      ],
    },
    { header: 'Forms' },
    {
      title: 'Form Elements',
      icon: 'widget-3-line-duotone',
      BgColor: 'secondary',
      to: '/components/',
      children: [
        { title: 'Autocomplete', to: '/forms/form-elements/autocomplete' },
        { title: 'Combobox', to: '/forms/form-elements/combobox' },
        { title: 'Button', to: '/forms/form-elements/button' },
        { title: 'Checkbox', to: '/forms/form-elements/checkbox' },
        { title: 'Custom Inputs', to: '/forms/form-elements/custominputs' },
        { title: 'File Inputs', to: '/forms/form-elements/fileinputs' },
        { title: 'Radio', to: '/forms/form-elements/radio' },
        { title: 'Date Time', to: '/forms/form-elements/date-time' },
        { title: 'Select', to: '/forms/form-elements/select' },
        { title: 'Slider', to: '/forms/form-elements/slider' },
        { title: 'Switch', to: '/forms/form-elements/switch' },
        { title: 'Time Picker', to: '/forms/form-elements/timepicker' },
        { title: 'Stepper', to: '/forms/form-elements/stepper' },
      ],
    },
    {
      title: 'Form Input',
      icon: 'book-minimalistic-outline',
      BgColor: 'success',
      to: '/forms/',
      children: [
        { title: 'Form Layout', to: '/forms/form-layouts' },
        { title: 'Form Horizontal', to: '/forms/form-horizontal' },
        { title: 'Form Vertical', to: '/forms/form-vertical' },
        { title: 'Form Custom', to: '/forms/form-custom' },
        { title: 'Form Validation', to: '/forms/form-validation' },
      ],
    },
    { title: 'Editor', icon: 'gallery-edit-line-duotone', BgColor: 'warning', to: '/forms/editor' },
    { header: 'Tables' },
    { title: 'Basic Table', icon: 'tablet-line-duotone', BgColor: 'info', to: '/tables/basic' },
    { title: 'Dark Table', icon: 'bedside-table-2-linear', BgColor: 'success', to: '/tables/dark' },
    {
      title: 'Density Table',
      icon: 'password-minimalistic-input-linear',
      BgColor: 'error',
      to: '/tables/density',
    },
    {
      title: 'Fixed Header Table',
      icon: 'align-left-line-duotone',
      BgColor: 'indigo',
      to: '/tables/fixed-header',
    },
    {
      title: 'Height Table',
      icon: 'bookmark-square-minimalistic-outline',
      BgColor: 'warning',
      to: '/tables/height',
    },
    {
      title: 'Editable Table',
      icon: 'pen-new-square-broken',
      BgColor: 'success',
      to: '/tables/editable',
    },
    { header: 'Data Tables' },
    { title: 'Basic Table', icon: 'database-outline', BgColor: 'primary', to: '/datatables/basic' },
    {
      title: 'Header Table',
      icon: 'clapperboard-text-broken',
      BgColor: 'secondary',
      to: '/datatables/headers',
    },
    {
      title: 'Selection Table',
      icon: 'documents-minimalistic-linear',
      BgColor: 'success',
      to: '/datatables/selection',
    },
    {
      title: 'Sorting Table',
      icon: 'sort-from-bottom-to-top-linear',
      BgColor: 'error',
      to: '/datatables/sorting',
    },
    {
      title: 'Pagination Table',
      icon: 'programming-linear',
      BgColor: 'warning',
      to: '/datatables/pagination',
    },
    {
      title: 'Filtering Table',
      icon: 'filter-outline',
      BgColor: 'indigo',
      to: '/datatables/filtering',
    },
    {
      title: 'Grouping Table',
      icon: 'users-group-rounded-line-duotone',
      BgColor: 'info',
      to: '/datatables/grouping',
    },
    {
      title: 'Table Slots',
      icon: 'server-line-duotone',
      BgColor: 'error',
      to: '/datatables/slots',
    },
    {
      title: 'CRUD Table',
      icon: 'medal-star-square-outline',
      BgColor: 'success',
      to: '/datatables/crudtable',
    },
    { header: 'Charts' },
    {
      title: 'Apex Charts',
      icon: 'pie-chart-2-linear',
      BgColor: 'primary',
      to: '/charts/',
      children: [
        { title: 'Line', to: '/charts/line-chart' },
        { title: 'Gredient', to: '/charts/gredient-chart' },
        { title: 'Area', to: '/charts/area-chart' },
        { title: 'Candlestick', to: '/charts/candlestick-chart' },
        { title: 'Column', to: '/charts/column-chart' },
        { title: 'Doughnut & Pie', to: '/charts/doughnut-pie-chart' },
        { title: 'Radialbar & Radar', to: '/charts/radialbar-chart' },
      ],
    },
    { header: 'Authentication' },
    {
      title: 'Login',
      icon: 'login-2-line-duotone',
      BgColor: 'warning',
      to: '#',
      children: [
        { title: 'Side Login', to: '/auth/login' },
        { title: 'Boxed Login', to: '/auth/login' },
      ],
    },
    {
      title: 'Register',
      icon: 'user-plus-line-duotone',
      BgColor: 'error',
      to: '#',
      children: [
        { title: 'Side Register', to: '/auth/register' },
        { title: 'Boxed Register', to: '/auth/register' },
      ],
    },
    {
      title: 'Forgot Password',
      icon: 'forbidden-line-duotone',
      BgColor: 'indigo',
      to: '#',
      children: [
        { title: 'Side Forgot Password', to: '/auth/forgot-password' },
        { title: 'Boxed Forgot Password', to: '/auth/forgot-password' },
      ],
    },
    {
      title: 'Two Steps',
      icon: 'users-group-two-rounded-line-duotone',
      BgColor: 'info',
      to: '#',
      children: [
        { title: 'Side Two Steps', to: '/auth/two-step' },
        { title: 'Boxed Two Steps', to: '/auth/two-step' },
      ],
    },
    { title: 'Error', icon: 'bug-line-duotone', BgColor: 'error', to: '/auth/404' },
    {
      title: 'Maintenance',
      icon: 'settings-line-duotone',
      BgColor: 'primary',
      to: '/auth/maintenance',
    },
    { header: 'Icons' },
    {
      title: 'Tabler',
      BgColor: 'success',
      icon: 'sticker-smile-circle-2-line-duotone',
      to: '/icons/tabler',
    },
    {
      title: 'Solar',
      BgColor: 'indigo',
      icon: 'sticker-smile-circle-2-line-duotone',
      to: '/icons/solar',
    },
    { header: 'Others' },
    {
      title: 'Menu Level',
      icon: 'double-alt-arrow-down-bold-duotone',
      BgColor: 'secondary',
      to: '#',
      children: [
        { title: 'Level 1', to: '/auth/404' },
        {
          title: 'Level 1',
          to: '/auth/404',
          children: [
            { title: 'Level 2', to: '/auth/404' },
            {
              title: 'Level 2',
              to: '/auth/404',
              children: [
                { title: 'Level 3', to: '/auth/404' },
                { title: 'Level 3', to: '/auth/404' },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Disabled',
      icon: 'forbidden-circle-line-duotone',
      BgColor: 'success',
      disabled: !0,
      to: '/auth/404',
    },
    {
      title: 'Sub Caption',
      BgColor: 'warning',
      icon: 'square-academic-cap-line-duotone',
      subCaption: 'This is the subtitle',
      to: '/auth/404',
    },
    {
      title: 'Chip',
      icon: 'archive-check-line-duotone',
      chip: '9',
      BgColor: 'error',
      chipColor: 'error',
      chipBgColor: 'error',
      chipVariant: 'flat',
      to: '/auth/404',
    },
    {
      title: 'Outlined',
      icon: 'smile-circle-line-duotone',
      chip: 'outline',
      chipColor: 'indigo',
      chipVariant: 'outlined',
      BgColor: 'indigo',
      to: '/auth/404',
    },
    {
      title: 'External Link',
      icon: 'link-bold-duotone',
      BgColor: 'info',
      to: '/auth/404',
      type: 'external',
    },
  ],
  to = { class: 'pa-5 pl-4' },
  eo = { class: 'pa-6 px-4 userbottom mt-10' },
  et = F({
    __name: 'index',
    setup(t) {
      const r = V(),
        a = K(Ye);
      return (u, d) => {
        const f = j,
          b = Re,
          c = tt,
          h = Qe,
          C = l('v-list'),
          x = Xe,
          y = l('perfect-scrollbar'),
          w = l('v-navigation-drawer');
        return (
          s(),
          m(
            w,
            {
              left: '',
              modelValue: n(r).Sidebar_drawer,
              'onUpdate:modelValue': d[0] || (d[0] = (p) => (n(r).Sidebar_drawer = p)),
              elevation: '10',
              'rail-width': '70',
              app: '',
              class: 'leftSidebar ml-sm-5 mt-sm-5 bg-containerBg',
              rail: n(r).mini_sidebar,
              'expand-on-hover': '',
              width: '270',
            },
            {
              default: i(() => [
                e('div', to, [o(f)]),
                o(
                  y,
                  { class: 'scrollnavbar bg-containerBg overflow-y-hidden' },
                  {
                    default: i(() => [
                      o(
                        C,
                        { class: 'py-4 px-4 bg-containerBg' },
                        {
                          default: i(() => [
                            (s(!0),
                            v(
                              D,
                              null,
                              E(
                                a.value,
                                (p, S) => (
                                  s(),
                                  v(
                                    D,
                                    null,
                                    [
                                      p.header
                                        ? (s(), m(b, { item: p, key: p.title }, null, 8, ['item']))
                                        : p.children
                                          ? (s(),
                                            m(
                                              c,
                                              { key: 1, class: 'leftPadding', item: p, level: 0 },
                                              null,
                                              8,
                                              ['item']
                                            ))
                                          : (s(),
                                            m(
                                              h,
                                              { key: 2, item: p, class: 'leftPadding' },
                                              null,
                                              8,
                                              ['item']
                                            )),
                                    ],
                                    64
                                  )
                                )
                              ),
                              256
                            )),
                          ]),
                          _: 1,
                        }
                      ),
                      e('div', eo, [o(x)]),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              _: 1,
            },
            8,
            ['modelValue', 'rail']
          )
        );
      };
    },
  }),
  oo = [
    {
      title: 'Dashboards',
      icon: 'screencast-2-linear',
      BgColor: 'primary',
      to: '#',
      children: [
        { title: 'Dashboard', to: '/dashboards/dashboard-client' },
        { title: 'Dashboard 2', to: '/dashboards/dashboard2' },
      ],
    },
    {
      title: 'Front Pages',
      icon: 'home-angle-linear',
      BgColor: 'error',
      to: '#',
      children: [
        { title: 'Homepage', to: '/front-pages/homepage' },
        { title: 'About Us', to: '/front-pages/about-us' },
        { title: 'Blog', to: '/front-pages/blog/posts' },
        {
          title: 'Blog Details',
          to: '/front-pages/blog/early-black-friday-amazon-deals-cheap-tvs-headphones',
        },
        { title: 'Contact Us', to: '/front-pages/contact-us' },
        { title: 'Portfolio', to: '/front-pages/portfolio' },
        { title: 'Pricing', to: '/front-pages/pricing' },
      ],
    },
    {
      title: 'Apps',
      icon: 'clapperboard-text-line-duotone',
      BgColor: 'indigo',
      to: '#',
      children: [
        { title: 'Contact', to: '/apps/contacts' },
        { title: 'Chats', to: '/apps/chats' },
        {
          title: 'Blog',
          to: '/',
          children: [
            { title: 'Posts', to: '/apps/blog/posts' },
            {
              title: 'Detail',
              to: '/apps/blog/early-black-friday-amazon-deals-cheap-tvs-headphones',
            },
          ],
        },
        {
          title: 'E-Commerce',
          to: '/ecommerce/',
          children: [
            { title: 'Shop One', to: '/apps/ecommerce/productsone' },
            { title: 'Shop Two', to: '/apps/ecommerce/productstwo' },
            { title: 'Details One', to: '/apps/ecommerce/product/one/detail/1' },
            { title: 'Details Two', to: '/apps/ecommerce/producttwo/two/detail/1' },
            { title: 'List', to: '/apps/ecommerce/productlist' },
            { title: 'Checkout', to: '/apps/ecommerce/checkout' },
            { title: 'Add Product', to: '/apps/ecommerce/addproduct' },
            { title: 'Edit Product', to: '/apps/ecommerce/editproduct' },
          ],
        },
        {
          title: 'User Profile',
          to: '/',
          children: [
            { title: 'Profile One', to: '/apps/userprofile/one' },
            { title: 'Profile Two', to: '/apps/userprofile/two' },
          ],
        },
        {
          title: 'Invoice',
          to: '/',
          children: [
            { title: 'List', to: '/apps/invoice' },
            { title: 'Details', to: '/apps/invoice/details/102' },
            { title: 'Create', to: '/apps/invoice/create' },
            { title: 'Edit', to: '/apps/invoice/edit/102' },
          ],
        },
        { title: 'Email', to: '/apps/email' },
        { title: 'Notes', to: '/apps/notes' },
        { title: 'Calendar', to: '/apps/calendar' },
        { title: 'Kanban', to: '/apps/kanban' },
        { title: 'Tickets', to: '/apps/tickets' },
      ],
    },
    {
      title: 'Pages',
      icon: 'folder-with-files-line-duotone',
      BgColor: 'error',
      to: '#',
      children: [
        { title: 'Pricing', to: '/theme-pages/pricing' },
        { title: 'Account Setting', to: '/theme-pages/account-settings' },
        { title: 'FAQ', to: '/theme-pages/pricing' },
        { title: 'Gallery Lightbox', to: '/theme-pages/gallery-lightbox' },
        { title: 'Search Results', to: '/theme-pages/search-results' },
        { title: 'Social Contacts', to: '/theme-pages/social-media-contacts' },
        { title: 'Treeview', to: '/theme-pages/treeview' },
        {
          title: 'Widget',
          to: '/widget-card',
          children: [
            { title: 'Cards', to: '/widgets/cards' },
            { title: 'Banners', to: '/widgets/banners' },
            { title: 'Charts', to: '/widgets/charts' },
          ],
        },
        {
          title: 'UI',
          to: '#',
          children: [
            { title: 'Alert', to: '/ui-components/alert' },
            { title: 'Accordion', to: '/ui-components/accordion' },
            { title: 'Avatar', to: '/ui-components/avatar' },
            { title: 'Chip', to: '/ui-components/chip' },
            { title: 'Dialog', to: '/ui-components/dialogs' },
            { title: 'List', to: '/ui-components/list' },
            { title: 'Menus', to: '/ui-components/menus' },
            { title: 'Rating', to: '/ui-components/rating' },
            { title: 'Tabs', to: '/ui-components/tabs' },
            { title: 'Tooltip', to: '/ui-components/tooltip' },
            { title: 'Typography', to: '/ui-components/typography' },
          ],
        },
        {
          title: 'Charts',
          to: '#',
          children: [
            { title: 'Line', to: '/charts/line-chart' },
            { title: 'Gredient', to: '/charts/gredient-chart' },
            { title: 'Area', to: '/charts/area-chart' },
            { title: 'Candlestick', to: '/charts/candlestick-chart' },
            { title: 'Column', to: '/charts/column-chart' },
            { title: 'Doughnut & Pie', to: '/charts/doughnut-pie-chart' },
            { title: 'Radialbar & Radar', to: '/charts/radialbar-chart' },
          ],
        },
        {
          title: 'Auth',
          to: '#',
          children: [
            { title: 'Error', to: '/auth/404' },
            { title: 'Maintenance', to: '/auth/maintenance' },
            {
              title: 'Login',
              to: '#',
              children: [
                { title: 'Side Login', to: '/auth/login' },
                { title: 'Boxed Login', to: '/auth/login' },
              ],
            },
            {
              title: 'Register',
              to: '#',
              children: [
                { title: 'Side Register', to: '/auth/register' },
                { title: 'Boxed Register', to: '/auth/register' },
              ],
            },
            {
              title: 'Forgot Password',
              to: '#',
              children: [
                { title: 'Side Forgot Password', to: '/auth/forgot-password' },
                { title: 'Boxed Forgot Password', to: '/auth/forgot-password' },
              ],
            },
            {
              title: 'Two Steps',
              to: '#',
              children: [
                { title: 'Side Two Steps', to: '/auth/two-step' },
                { title: 'Boxed Two Steps', to: '/auth/two-step' },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Forms',
      icon: 'file-line-duotone',
      BgColor: 'success',
      to: '#',
      children: [
        {
          title: 'Form Elements',
          to: '/components/',
          children: [
            { title: 'Autocomplete', to: '/forms/form-elements/autocomplete' },
            { title: 'Combobox', to: '/forms/form-elements/combobox' },
            { title: 'Button', to: '/forms/form-elements/button' },
            { title: 'Checkbox', to: '/forms/form-elements/checkbox' },
            { title: 'Custom Inputs', to: '/forms/form-elements/custominputs' },
            { title: 'File Inputs', to: '/forms/form-elements/fileinputs' },
            { title: 'Radio', to: '/forms/form-elements/radio' },
            { title: 'Date Time', to: '/forms/form-elements/date-time' },
            { title: 'Select', to: '/forms/form-elements/select' },
            { title: 'Slider', to: '/forms/form-elements/slider' },
            { title: 'Switch', to: '/forms/form-elements/switch' },
            { title: 'Time Picker', to: '/forms/form-elements/timepicker' },
            { title: 'Stepper', to: '/forms/form-elements/stepper' },
          ],
        },
        { title: 'Form Layout', to: '/forms/form-layouts' },
        { title: 'Form Horizontal', to: '/forms/form-horizontal' },
        { title: 'Form Vertical', to: '/forms/form-vertical' },
        { title: 'Form Custom', to: '/forms/form-custom' },
        { title: 'Form Validation', to: '/forms/form-validation' },
      ],
    },
    {
      title: 'Tables',
      icon: 'layers-minimalistic-line-duotone',
      BgColor: 'warning',
      to: '#',
      children: [
        { title: 'Basic Table', to: '/tables/basic' },
        { title: 'Dark Table', to: '/tables/dark' },
        { title: 'Density Table', to: '/tables/density' },
        { title: 'Fixed Header Table', to: '/tables/fixed-header' },
        { title: 'Height Table', to: '/tables/height' },
        { title: 'Editable Table', to: '/tables/editable' },
      ],
    },
    {
      title: 'Data Tables',
      BgColor: 'secondary',
      icon: 'database-outline',
      to: '#',
      children: [
        { title: 'Basic Table', to: '/datatables/basic' },
        { title: 'Header Table', to: '/datatables/header' },
        { title: 'Selection Table', to: '/datatables/selection' },
        { title: 'Sorting Table', to: '/datatables/sorting' },
        { title: 'Pagination Table', to: '/datatables/pagination' },
        { title: 'Filtering Table', to: '/datatables/filtering' },
        { title: 'Grouping Table', to: '/datatables/grouping' },
        { title: 'Table Slots', to: '/datatables/slots' },
        { title: 'CRUD Table', to: '/datatables/crudtable' },
      ],
    },
  ],
  io = { key: 0, class: 'horizontalMenu bg-surface position-relative' },
  lo = { class: 'gap-1 horizontal-navbar mx-lg-0 mx-3' },
  no = { key: 1, class: 'mobile-menu' },
  so = F({
    __name: 'index',
    setup(t) {
      const r = V(),
        a = K(oo),
        { mdAndUp: u } = ut();
      return (d, f) => {
        const b = Ae,
          c = Y,
          h = et;
        return n(u)
          ? (s(),
            v('div', io, [
              e(
                'div',
                { class: _(n(r).boxed ? 'maxWidth' : 'px-6') },
                [
                  e('ul', lo, [
                    (s(!0),
                    v(
                      D,
                      null,
                      E(
                        a.value,
                        (C, x) => (
                          s(),
                          v('li', { key: x, class: 'navItem' }, [
                            C.children
                              ? (s(), m(b, { key: 0, item: C, level: 0 }, null, 8, ['item']))
                              : (s(), m(c, { key: 1, item: C }, null, 8, ['item'])),
                          ])
                        )
                      ),
                      128
                    )),
                  ]),
                ],
                2
              ),
            ]))
          : (s(), v('div', no, [o(h)]));
      };
    },
  }),
  ao = { class: 'rtl-lyt mb-3 hr-layout' },
  ro = { class: '' },
  co = { class: 'mb-3 hr-layout' },
  mo = { class: '' },
  zo = F({
    __name: 'default',
    setup(t) {
      const r = V(),
        a = I('Manie');
      return (
        Ct({
          meta: [{ content: a }],
          titleTemplate: (u) =>
            u
              ? `${u} - Nuxt3 Typescript based Admin Dashboard Template`
              : 'Spikeadmin - Nuxt3 Typescript based Admin Dashboard Template',
        }),
        (u, d) => {
          const f = de,
            b = be,
            c = so,
            h = yt,
            C = pt,
            x = l('SettingsIcon'),
            y = l('v-btn'),
            w = l('v-container'),
            p = l('v-main'),
            S = l('v-app'),
            z = l('v-locale-provider'),
            L = et;
          return n(r).setRTLLayout
            ? (s(),
              m(
                z,
                { key: 0, rtl: '' },
                {
                  default: i(() => [
                    o(
                      S,
                      { theme: n(r).actTheme, class: _(n(r).actTheme) },
                      {
                        default: i(() => [
                          o(h, null, {
                            default: i(() => [
                              e(
                                'div',
                                { class: _(n(r).boxed ? 'maxWidth' : 'full-header') },
                                [n(r).setHorizontalLayout ? k('', !0) : (s(), m(f, { key: 0 }))],
                                2
                              ),
                              e(
                                'div',
                                { class: _(n(r).boxed ? 'maxWidth' : 'full-header') },
                                [n(r).setHorizontalLayout ? (s(), m(b, { key: 0 })) : k('', !0)],
                                2
                              ),
                              n(r).setHorizontalLayout ? (s(), m(c, { key: 0 })) : k('', !0),
                            ]),
                            _: 1,
                          }),
                          o(p, null, {
                            default: i(() => [
                              e('div', ao, [
                                o(
                                  w,
                                  {
                                    fluid: '',
                                    class:
                                      'page-wrapper bg-background px-sm-5 px-4 pt-12 rounded-xl',
                                  },
                                  {
                                    default: i(() => [
                                      e('div', ro, [
                                        e(
                                          'div',
                                          { class: _(n(r).boxed ? 'maxWidth' : '') },
                                          [
                                            o(C),
                                            o(
                                              y,
                                              {
                                                class: 'customizer-btn',
                                                size: 'large',
                                                icon: '',
                                                variant: 'flat',
                                                color: 'primary',
                                                onClick:
                                                  d[0] ||
                                                  (d[0] = O(
                                                    (P) =>
                                                      n(r).SET_CUSTOMIZER_DRAWER(
                                                        !n(r).Customizer_drawer
                                                      ),
                                                    ['stop']
                                                  )),
                                              },
                                              { default: i(() => [o(x)]), _: 1 }
                                            ),
                                          ],
                                          2
                                        ),
                                      ]),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]),
                            ]),
                            _: 1,
                          }),
                        ]),
                        _: 1,
                      },
                      8,
                      ['theme', 'class']
                    ),
                  ]),
                  _: 1,
                }
              ))
            : (s(),
              m(
                z,
                { key: 1 },
                {
                  default: i(() => [
                    o(
                      S,
                      { theme: n(r).actTheme, class: _(n(r).actTheme) },
                      {
                        default: i(() => [
                          o(h, null, {
                            default: i(() => [
                              n(r).setHorizontalLayout ? k('', !0) : (s(), m(L, { key: 0 })),
                              e('div', null, [
                                n(r).setHorizontalLayout ? k('', !0) : (s(), m(f, { key: 0 })),
                              ]),
                              e(
                                'div',
                                { class: _(n(r).boxed ? 'maxWidth' : 'full-header') },
                                [n(r).setHorizontalLayout ? (s(), m(b, { key: 0 })) : k('', !0)],
                                2
                              ),
                              n(r).setHorizontalLayout ? (s(), m(c, { key: 1 })) : k('', !0),
                            ]),
                            _: 1,
                          }),
                          o(p, null, {
                            default: i(() => [
                              e('div', co, [
                                o(
                                  w,
                                  {
                                    fluid: '',
                                    class:
                                      'page-wrapper bg-background px-sm-5 px-4 pt-12 rounded-xl',
                                  },
                                  {
                                    default: i(() => [
                                      e('div', mo, [
                                        e(
                                          'div',
                                          { class: _(n(r).boxed ? 'maxWidth' : '') },
                                          [
                                            o(C),
                                            o(
                                              y,
                                              {
                                                class: 'customizer-btn',
                                                size: 'large',
                                                icon: '',
                                                variant: 'flat',
                                                color: 'primary',
                                                onClick:
                                                  d[1] ||
                                                  (d[1] = O(
                                                    (P) =>
                                                      n(r).SET_CUSTOMIZER_DRAWER(
                                                        !n(r).Customizer_drawer
                                                      ),
                                                    ['stop']
                                                  )),
                                              },
                                              { default: i(() => [o(x)]), _: 1 }
                                            ),
                                          ],
                                          2
                                        ),
                                      ]),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]),
                            ]),
                            _: 1,
                          }),
                        ]),
                        _: 1,
                      },
                      8,
                      ['theme', 'class']
                    ),
                  ]),
                  _: 1,
                }
              ));
        }
      );
    },
  });
export { zo as default };
