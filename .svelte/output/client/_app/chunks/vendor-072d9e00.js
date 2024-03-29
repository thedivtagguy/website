function t() {}
function n(t, n) {
  for (const e in n) t[e] = n[e];
  return t;
}
function e(t) {
  return t();
}
function o() {
  return Object.create(null);
}
function r(t) {
  t.forEach(e);
}
function c(t) {
  return "function" == typeof t;
}
function u(t, n) {
  return t != t ? n == n : t !== n || (t && "object" == typeof t) || "function" == typeof t;
}
function s(t, n, e, o) {
  if (t) {
    const r = i(t, n, e, o);
    return t[0](r);
  }
}
function i(t, e, o, r) {
  return t[1] && r ? n(o.ctx.slice(), t[1](r(e))) : o.ctx;
}
function f(t, n, e, o, r, c, u) {
  const s = (function (t, n, e, o) {
    if (t[2] && o) {
      const r = t[2](o(e));
      if (void 0 === n.dirty) return r;
      if ("object" == typeof r) {
        const t = [],
          e = Math.max(n.dirty.length, r.length);
        for (let o = 0; o < e; o += 1) t[o] = n.dirty[o] | r[o];
        return t;
      }
      return n.dirty | r;
    }
    return n.dirty;
  })(n, o, r, c);
  if (s) {
    const r = i(n, e, o, u);
    t.p(r, s);
  }
}
function a(t, n) {
  t.appendChild(n);
}
function l(t, n, e) {
  t.insertBefore(n, e || null);
}
function d(t) {
  t.parentNode.removeChild(t);
}
function p(t, n) {
  for (let e = 0; e < t.length; e += 1) t[e] && t[e].d(n);
}
function h(t) {
  return document.createElement(t);
}
function $(t) {
  return document.createTextNode(t);
}
function g() {
  return $(" ");
}
function m() {
  return $("");
}
function y(t, n, e, o) {
  return t.addEventListener(n, e, o), () => t.removeEventListener(n, e, o);
}
function b(t, n, e) {
  null == e ? t.removeAttribute(n) : t.getAttribute(n) !== e && t.setAttribute(n, e);
}
function _(t) {
  return "" === t ? null : +t;
}
function x(t) {
  return Array.from(t.childNodes);
}
function v(t, n, e, o) {
  for (let r = 0; r < t.length; r += 1) {
    const o = t[r];
    if (o.nodeName === n) {
      let n = 0;
      const c = [];
      for (; n < o.attributes.length; ) {
        const t = o.attributes[n++];
        e[t.name] || c.push(t.name);
      }
      for (let t = 0; t < c.length; t++) o.removeAttribute(c[t]);
      return t.splice(r, 1)[0];
    }
  }
  return o
    ? (function (t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t);
      })(n)
    : h(n);
}
function w(t, n) {
  for (let e = 0; e < t.length; e += 1) {
    const o = t[e];
    if (3 === o.nodeType) return (o.data = "" + n), t.splice(e, 1)[0];
  }
  return $(n);
}
function E(t) {
  return w(t, " ");
}
function k(t, n) {
  (n = "" + n), t.wholeText !== n && (t.data = n);
}
function A(t, n) {
  t.value = null == n ? "" : n;
}
function j(t, n) {
  for (let e = 0; e < t.options.length; e += 1) {
    const o = t.options[e];
    if (o.__value === n) return void (o.selected = !0);
  }
}
function N(t) {
  const n = t.querySelector(":checked") || t.options[0];
  return n && n.__value;
}
function S(t, n, e) {
  t.classList[e ? "add" : "remove"](n);
}
function O(t, n = document.body) {
  return Array.from(n.querySelectorAll(t));
}
let q;
function L(t) {
  q = t;
}
function T() {
  if (!q) throw new Error("Function called outside component initialization");
  return q;
}
function C(t) {
  T().$$.on_mount.push(t);
}
function M(t) {
  T().$$.after_update.push(t);
}
function z(t, n) {
  T().$$.context.set(t, n);
}
const B = [],
  F = [],
  P = [],
  D = [],
  G = Promise.resolve();
let H = !1;
function I(t) {
  P.push(t);
}
function J(t) {
  D.push(t);
}
let K = !1;
const Q = new Set();
function R() {
  if (!K) {
    K = !0;
    do {
      for (let t = 0; t < B.length; t += 1) {
        const n = B[t];
        L(n), U(n.$$);
      }
      for (L(null), B.length = 0; F.length; ) F.pop()();
      for (let t = 0; t < P.length; t += 1) {
        const n = P[t];
        Q.has(n) || (Q.add(n), n());
      }
      P.length = 0;
    } while (B.length);
    for (; D.length; ) D.pop()();
    (H = !1), (K = !1), Q.clear();
  }
}
function U(t) {
  if (null !== t.fragment) {
    t.update(), r(t.before_update);
    const n = t.dirty;
    (t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, n), t.after_update.forEach(I);
  }
}
const V = new Set();
let W;
function X() {
  W = { r: 0, c: [], p: W };
}
function Y() {
  W.r || r(W.c), (W = W.p);
}
function Z(t, n) {
  t && t.i && (V.delete(t), t.i(n));
}
function tt(t, n, e, o) {
  if (t && t.o) {
    if (V.has(t)) return;
    V.add(t),
      W.c.push(() => {
        V.delete(t), o && (e && t.d(1), o());
      }),
      t.o(n);
  }
}
function nt(t, n) {
  const e = {},
    o = {},
    r = { $$scope: 1 };
  let c = t.length;
  for (; c--; ) {
    const u = t[c],
      s = n[c];
    if (s) {
      for (const t in u) t in s || (o[t] = 1);
      for (const t in s) r[t] || ((e[t] = s[t]), (r[t] = 1));
      t[c] = s;
    } else for (const t in u) r[t] = 1;
  }
  for (const u in o) u in e || (e[u] = void 0);
  return e;
}
function et(t) {
  return "object" == typeof t && null !== t ? t : {};
}
function ot(t, n, e) {
  const o = t.$$.props[n];
  void 0 !== o && ((t.$$.bound[o] = e), e(t.$$.ctx[o]));
}
function rt(t) {
  t && t.c();
}
function ct(t, n) {
  t && t.l(n);
}
function ut(t, n, o, u) {
  const { fragment: s, on_mount: i, on_destroy: f, after_update: a } = t.$$;
  s && s.m(n, o),
    u ||
      I(() => {
        const n = i.map(e).filter(c);
        f ? f.push(...n) : r(n), (t.$$.on_mount = []);
      }),
    a.forEach(I);
}
function st(t, n) {
  const e = t.$$;
  null !== e.fragment &&
    (r(e.on_destroy),
    e.fragment && e.fragment.d(n),
    (e.on_destroy = e.fragment = null),
    (e.ctx = []));
}
function it(t, n) {
  -1 === t.$$.dirty[0] && (B.push(t), H || ((H = !0), G.then(R)), t.$$.dirty.fill(0)),
    (t.$$.dirty[(n / 31) | 0] |= 1 << n % 31);
}
function ft(n, e, c, u, s, i, f = [-1]) {
  const a = q;
  L(n);
  const l = (n.$$ = {
    fragment: null,
    ctx: null,
    props: i,
    update: t,
    not_equal: s,
    bound: o(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(a ? a.$$.context : e.context || []),
    callbacks: o(),
    dirty: f,
    skip_bound: !1
  });
  let p = !1;
  if (
    ((l.ctx = c
      ? c(n, e.props || {}, (t, e, ...o) => {
          const r = o.length ? o[0] : e;
          return (
            l.ctx &&
              s(l.ctx[t], (l.ctx[t] = r)) &&
              (!l.skip_bound && l.bound[t] && l.bound[t](r), p && it(n, t)),
            e
          );
        })
      : []),
    l.update(),
    (p = !0),
    r(l.before_update),
    (l.fragment = !!u && u(l.ctx)),
    e.target)
  ) {
    if (e.hydrate) {
      const t = x(e.target);
      l.fragment && l.fragment.l(t), t.forEach(d);
    } else l.fragment && l.fragment.c();
    e.intro && Z(n.$$.fragment), ut(n, e.target, e.anchor, e.customElement), R();
  }
  L(a);
}
class at {
  $destroy() {
    st(this, 1), (this.$destroy = t);
  }
  $on(t, n) {
    const e = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return (
      e.push(n),
      () => {
        const t = e.indexOf(n);
        -1 !== t && e.splice(t, 1);
      }
    );
  }
  $set(t) {
    var n;
    this.$$set &&
      ((n = t), 0 !== Object.keys(n).length) &&
      ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
  }
}
const lt = [];
function dt(n, e = t) {
  let o;
  const r = [];
  function c(t) {
    if (u(n, t) && ((n = t), o)) {
      const t = !lt.length;
      for (let e = 0; e < r.length; e += 1) {
        const t = r[e];
        t[1](), lt.push(t, n);
      }
      if (t) {
        for (let t = 0; t < lt.length; t += 2) lt[t][0](lt[t + 1]);
        lt.length = 0;
      }
    }
  }
  return {
    set: c,
    update: function (t) {
      c(t(n));
    },
    subscribe: function (u, s = t) {
      const i = [u, s];
      return (
        r.push(i),
        1 === r.length && (o = e(c) || t),
        u(n),
        () => {
          const t = r.indexOf(i);
          -1 !== t && r.splice(t, 1), 0 === r.length && (o(), (o = null));
        }
      );
    }
  };
}
export {
  n as A,
  X as B,
  dt as C,
  a as D,
  t as E,
  s as F,
  f as G,
  O as H,
  y as I,
  S as J,
  p as K,
  A as L,
  r as M,
  _ as N,
  I as O,
  j as P,
  N as Q,
  F as R,
  at as S,
  ot as T,
  J as U,
  x as a,
  b,
  v as c,
  d,
  h as e,
  l as f,
  w as g,
  k as h,
  ft as i,
  rt as j,
  g as k,
  m as l,
  ct as m,
  E as n,
  ut as o,
  nt as p,
  et as q,
  tt as r,
  u as s,
  $ as t,
  Y as u,
  Z as v,
  st as w,
  z as x,
  M as y,
  C as z
};
