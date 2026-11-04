var hs = { exports: {} }, pl = {}, ms = { exports: {} }, fe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xa;
function yd() {
  if (Xa) return fe;
  Xa = 1;
  var s = Symbol.for("react.element"), m = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), $ = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), te = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), re = Symbol.iterator;
  function le(a) {
    return a === null || typeof a != "object" ? null : (a = re && a[re] || a["@@iterator"], typeof a == "function" ? a : null);
  }
  var ie = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, B = Object.assign, b = {};
  function K(a, h, w) {
    this.props = a, this.context = h, this.refs = b, this.updater = w || ie;
  }
  K.prototype.isReactComponent = {}, K.prototype.setState = function(a, h) {
    if (typeof a != "object" && typeof a != "function" && a != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, h, "setState");
  }, K.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function _e() {
  }
  _e.prototype = K.prototype;
  function ce(a, h, w) {
    this.props = a, this.context = h, this.refs = b, this.updater = w || ie;
  }
  var Me = ce.prototype = new _e();
  Me.constructor = ce, B(Me, K.prototype), Me.isPureReactComponent = !0;
  var ee = Array.isArray, Q = Object.prototype.hasOwnProperty, de = { current: null }, Se = { key: !0, ref: !0, __self: !0, __source: !0 };
  function M(a, h, w) {
    var x, k = {}, T = null, Y = null;
    if (h != null) for (x in h.ref !== void 0 && (Y = h.ref), h.key !== void 0 && (T = "" + h.key), h) Q.call(h, x) && !Se.hasOwnProperty(x) && (k[x] = h[x]);
    var G = arguments.length - 2;
    if (G === 1) k.children = w;
    else if (1 < G) {
      for (var F = Array(G), X = 0; X < G; X++) F[X] = arguments[X + 2];
      k.children = F;
    }
    if (a && a.defaultProps) for (x in G = a.defaultProps, G) k[x] === void 0 && (k[x] = G[x]);
    return { $$typeof: s, type: a, key: T, ref: Y, props: k, _owner: de.current };
  }
  function Be(a, h) {
    return { $$typeof: s, type: a.type, key: h, ref: a.ref, props: a.props, _owner: a._owner };
  }
  function ve(a) {
    return typeof a == "object" && a !== null && a.$$typeof === s;
  }
  function ge(a) {
    var h = { "=": "=0", ":": "=2" };
    return "$" + a.replace(/[=:]/g, function(w) {
      return h[w];
    });
  }
  var Te = /\/+/g;
  function pe(a, h) {
    return typeof a == "object" && a !== null && a.key != null ? ge("" + a.key) : h.toString(36);
  }
  function Ee(a, h, w, x, k) {
    var T = typeof a;
    (T === "undefined" || T === "boolean") && (a = null);
    var Y = !1;
    if (a === null) Y = !0;
    else switch (T) {
      case "string":
      case "number":
        Y = !0;
        break;
      case "object":
        switch (a.$$typeof) {
          case s:
          case m:
            Y = !0;
        }
    }
    if (Y) return Y = a, k = k(Y), a = x === "" ? "." + pe(Y, 0) : x, ee(k) ? (w = "", a != null && (w = a.replace(Te, "$&/") + "/"), Ee(k, h, w, "", function(X) {
      return X;
    })) : k != null && (ve(k) && (k = Be(k, w + (!k.key || Y && Y.key === k.key ? "" : ("" + k.key).replace(Te, "$&/") + "/") + a)), h.push(k)), 1;
    if (Y = 0, x = x === "" ? "." : x + ":", ee(a)) for (var G = 0; G < a.length; G++) {
      T = a[G];
      var F = x + pe(T, G);
      Y += Ee(T, h, w, F, k);
    }
    else if (F = le(a), typeof F == "function") for (a = F.call(a), G = 0; !(T = a.next()).done; ) T = T.value, F = x + pe(T, G++), Y += Ee(T, h, w, F, k);
    else if (T === "object") throw h = String(a), Error("Objects are not valid as a React child (found: " + (h === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : h) + "). If you meant to render a collection of children, use an array instead.");
    return Y;
  }
  function We(a, h, w) {
    if (a == null) return a;
    var x = [], k = 0;
    return Ee(a, x, "", "", function(T) {
      return h.call(w, T, k++);
    }), x;
  }
  function Ne(a) {
    if (a._status === -1) {
      var h = a._result;
      h = h(), h.then(function(w) {
        (a._status === 0 || a._status === -1) && (a._status = 1, a._result = w);
      }, function(w) {
        (a._status === 0 || a._status === -1) && (a._status = 2, a._result = w);
      }), a._status === -1 && (a._status = 0, a._result = h);
    }
    if (a._status === 1) return a._result.default;
    throw a._result;
  }
  var se = { current: null }, L = { transition: null }, H = { ReactCurrentDispatcher: se, ReactCurrentBatchConfig: L, ReactCurrentOwner: de };
  function P() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return fe.Children = { map: We, forEach: function(a, h, w) {
    We(a, function() {
      h.apply(this, arguments);
    }, w);
  }, count: function(a) {
    var h = 0;
    return We(a, function() {
      h++;
    }), h;
  }, toArray: function(a) {
    return We(a, function(h) {
      return h;
    }) || [];
  }, only: function(a) {
    if (!ve(a)) throw Error("React.Children.only expected to receive a single React element child.");
    return a;
  } }, fe.Component = K, fe.Fragment = f, fe.Profiler = j, fe.PureComponent = ce, fe.StrictMode = S, fe.Suspense = I, fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H, fe.act = P, fe.cloneElement = function(a, h, w) {
    if (a == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var x = B({}, a.props), k = a.key, T = a.ref, Y = a._owner;
    if (h != null) {
      if (h.ref !== void 0 && (T = h.ref, Y = de.current), h.key !== void 0 && (k = "" + h.key), a.type && a.type.defaultProps) var G = a.type.defaultProps;
      for (F in h) Q.call(h, F) && !Se.hasOwnProperty(F) && (x[F] = h[F] === void 0 && G !== void 0 ? G[F] : h[F]);
    }
    var F = arguments.length - 2;
    if (F === 1) x.children = w;
    else if (1 < F) {
      G = Array(F);
      for (var X = 0; X < F; X++) G[X] = arguments[X + 2];
      x.children = G;
    }
    return { $$typeof: s, type: a.type, key: k, ref: T, props: x, _owner: Y };
  }, fe.createContext = function(a) {
    return a = { $$typeof: $, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, a.Provider = { $$typeof: _, _context: a }, a.Consumer = a;
  }, fe.createElement = M, fe.createFactory = function(a) {
    var h = M.bind(null, a);
    return h.type = a, h;
  }, fe.createRef = function() {
    return { current: null };
  }, fe.forwardRef = function(a) {
    return { $$typeof: Z, render: a };
  }, fe.isValidElement = ve, fe.lazy = function(a) {
    return { $$typeof: ne, _payload: { _status: -1, _result: a }, _init: Ne };
  }, fe.memo = function(a, h) {
    return { $$typeof: te, type: a, compare: h === void 0 ? null : h };
  }, fe.startTransition = function(a) {
    var h = L.transition;
    L.transition = {};
    try {
      a();
    } finally {
      L.transition = h;
    }
  }, fe.unstable_act = P, fe.useCallback = function(a, h) {
    return se.current.useCallback(a, h);
  }, fe.useContext = function(a) {
    return se.current.useContext(a);
  }, fe.useDebugValue = function() {
  }, fe.useDeferredValue = function(a) {
    return se.current.useDeferredValue(a);
  }, fe.useEffect = function(a, h) {
    return se.current.useEffect(a, h);
  }, fe.useId = function() {
    return se.current.useId();
  }, fe.useImperativeHandle = function(a, h, w) {
    return se.current.useImperativeHandle(a, h, w);
  }, fe.useInsertionEffect = function(a, h) {
    return se.current.useInsertionEffect(a, h);
  }, fe.useLayoutEffect = function(a, h) {
    return se.current.useLayoutEffect(a, h);
  }, fe.useMemo = function(a, h) {
    return se.current.useMemo(a, h);
  }, fe.useReducer = function(a, h, w) {
    return se.current.useReducer(a, h, w);
  }, fe.useRef = function(a) {
    return se.current.useRef(a);
  }, fe.useState = function(a) {
    return se.current.useState(a);
  }, fe.useSyncExternalStore = function(a, h, w) {
    return se.current.useSyncExternalStore(a, h, w);
  }, fe.useTransition = function() {
    return se.current.useTransition();
  }, fe.version = "18.3.1", fe;
}
var Za;
function ws() {
  return Za || (Za = 1, ms.exports = yd()), ms.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ga;
function gd() {
  if (Ga) return pl;
  Ga = 1;
  var s = ws(), m = Symbol.for("react.element"), f = Symbol.for("react.fragment"), S = Object.prototype.hasOwnProperty, j = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function $(Z, I, te) {
    var ne, re = {}, le = null, ie = null;
    te !== void 0 && (le = "" + te), I.key !== void 0 && (le = "" + I.key), I.ref !== void 0 && (ie = I.ref);
    for (ne in I) S.call(I, ne) && !_.hasOwnProperty(ne) && (re[ne] = I[ne]);
    if (Z && Z.defaultProps) for (ne in I = Z.defaultProps, I) re[ne] === void 0 && (re[ne] = I[ne]);
    return { $$typeof: m, type: Z, key: le, ref: ie, props: re, _owner: j.current };
  }
  return pl.Fragment = f, pl.jsx = $, pl.jsxs = $, pl;
}
var qa;
function wd() {
  return qa || (qa = 1, hs.exports = gd()), hs.exports;
}
var u = wd(), Co = {}, vs = { exports: {} }, wt = {}, ys = { exports: {} }, gs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ja;
function xd() {
  return Ja || (Ja = 1, (function(s) {
    function m(L, H) {
      var P = L.length;
      L.push(H);
      e: for (; 0 < P; ) {
        var a = P - 1 >>> 1, h = L[a];
        if (0 < j(h, H)) L[a] = H, L[P] = h, P = a;
        else break e;
      }
    }
    function f(L) {
      return L.length === 0 ? null : L[0];
    }
    function S(L) {
      if (L.length === 0) return null;
      var H = L[0], P = L.pop();
      if (P !== H) {
        L[0] = P;
        e: for (var a = 0, h = L.length, w = h >>> 1; a < w; ) {
          var x = 2 * (a + 1) - 1, k = L[x], T = x + 1, Y = L[T];
          if (0 > j(k, P)) T < h && 0 > j(Y, k) ? (L[a] = Y, L[T] = P, a = T) : (L[a] = k, L[x] = P, a = x);
          else if (T < h && 0 > j(Y, P)) L[a] = Y, L[T] = P, a = T;
          else break e;
        }
      }
      return H;
    }
    function j(L, H) {
      var P = L.sortIndex - H.sortIndex;
      return P !== 0 ? P : L.id - H.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var _ = performance;
      s.unstable_now = function() {
        return _.now();
      };
    } else {
      var $ = Date, Z = $.now();
      s.unstable_now = function() {
        return $.now() - Z;
      };
    }
    var I = [], te = [], ne = 1, re = null, le = 3, ie = !1, B = !1, b = !1, K = typeof setTimeout == "function" ? setTimeout : null, _e = typeof clearTimeout == "function" ? clearTimeout : null, ce = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Me(L) {
      for (var H = f(te); H !== null; ) {
        if (H.callback === null) S(te);
        else if (H.startTime <= L) S(te), H.sortIndex = H.expirationTime, m(I, H);
        else break;
        H = f(te);
      }
    }
    function ee(L) {
      if (b = !1, Me(L), !B) if (f(I) !== null) B = !0, Ne(Q);
      else {
        var H = f(te);
        H !== null && se(ee, H.startTime - L);
      }
    }
    function Q(L, H) {
      B = !1, b && (b = !1, _e(M), M = -1), ie = !0;
      var P = le;
      try {
        for (Me(H), re = f(I); re !== null && (!(re.expirationTime > H) || L && !ge()); ) {
          var a = re.callback;
          if (typeof a == "function") {
            re.callback = null, le = re.priorityLevel;
            var h = a(re.expirationTime <= H);
            H = s.unstable_now(), typeof h == "function" ? re.callback = h : re === f(I) && S(I), Me(H);
          } else S(I);
          re = f(I);
        }
        if (re !== null) var w = !0;
        else {
          var x = f(te);
          x !== null && se(ee, x.startTime - H), w = !1;
        }
        return w;
      } finally {
        re = null, le = P, ie = !1;
      }
    }
    var de = !1, Se = null, M = -1, Be = 5, ve = -1;
    function ge() {
      return !(s.unstable_now() - ve < Be);
    }
    function Te() {
      if (Se !== null) {
        var L = s.unstable_now();
        ve = L;
        var H = !0;
        try {
          H = Se(!0, L);
        } finally {
          H ? pe() : (de = !1, Se = null);
        }
      } else de = !1;
    }
    var pe;
    if (typeof ce == "function") pe = function() {
      ce(Te);
    };
    else if (typeof MessageChannel < "u") {
      var Ee = new MessageChannel(), We = Ee.port2;
      Ee.port1.onmessage = Te, pe = function() {
        We.postMessage(null);
      };
    } else pe = function() {
      K(Te, 0);
    };
    function Ne(L) {
      Se = L, de || (de = !0, pe());
    }
    function se(L, H) {
      M = K(function() {
        L(s.unstable_now());
      }, H);
    }
    s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(L) {
      L.callback = null;
    }, s.unstable_continueExecution = function() {
      B || ie || (B = !0, Ne(Q));
    }, s.unstable_forceFrameRate = function(L) {
      0 > L || 125 < L ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Be = 0 < L ? Math.floor(1e3 / L) : 5;
    }, s.unstable_getCurrentPriorityLevel = function() {
      return le;
    }, s.unstable_getFirstCallbackNode = function() {
      return f(I);
    }, s.unstable_next = function(L) {
      switch (le) {
        case 1:
        case 2:
        case 3:
          var H = 3;
          break;
        default:
          H = le;
      }
      var P = le;
      le = H;
      try {
        return L();
      } finally {
        le = P;
      }
    }, s.unstable_pauseExecution = function() {
    }, s.unstable_requestPaint = function() {
    }, s.unstable_runWithPriority = function(L, H) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var P = le;
      le = L;
      try {
        return H();
      } finally {
        le = P;
      }
    }, s.unstable_scheduleCallback = function(L, H, P) {
      var a = s.unstable_now();
      switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? a + P : a) : P = a, L) {
        case 1:
          var h = -1;
          break;
        case 2:
          h = 250;
          break;
        case 5:
          h = 1073741823;
          break;
        case 4:
          h = 1e4;
          break;
        default:
          h = 5e3;
      }
      return h = P + h, L = { id: ne++, callback: H, priorityLevel: L, startTime: P, expirationTime: h, sortIndex: -1 }, P > a ? (L.sortIndex = P, m(te, L), f(I) === null && L === f(te) && (b ? (_e(M), M = -1) : b = !0, se(ee, P - a))) : (L.sortIndex = h, m(I, L), B || ie || (B = !0, Ne(Q))), L;
    }, s.unstable_shouldYield = ge, s.unstable_wrapCallback = function(L) {
      var H = le;
      return function() {
        var P = le;
        le = H;
        try {
          return L.apply(this, arguments);
        } finally {
          le = P;
        }
      };
    };
  })(gs)), gs;
}
var ba;
function kd() {
  return ba || (ba = 1, ys.exports = xd()), ys.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ec;
function Sd() {
  if (ec) return wt;
  ec = 1;
  var s = ws(), m = kd();
  function f(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var S = /* @__PURE__ */ new Set(), j = {};
  function _(e, t) {
    $(e, t), $(e + "Capture", t);
  }
  function $(e, t) {
    for (j[e] = t, e = 0; e < t.length; e++) S.add(t[e]);
  }
  var Z = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), I = Object.prototype.hasOwnProperty, te = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ne = {}, re = {};
  function le(e) {
    return I.call(re, e) ? !0 : I.call(ne, e) ? !1 : te.test(e) ? re[e] = !0 : (ne[e] = !0, !1);
  }
  function ie(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function B(e, t, n, r) {
    if (t === null || typeof t > "u" || ie(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return !1;
  }
  function b(e, t, n, r, l, o, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
  }
  var K = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    K[e] = new b(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    K[t] = new b(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    K[e] = new b(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    K[e] = new b(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    K[e] = new b(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    K[e] = new b(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    K[e] = new b(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    K[e] = new b(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    K[e] = new b(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var _e = /[\-:]([a-z])/g;
  function ce(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      _e,
      ce
    );
    K[t] = new b(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(_e, ce);
    K[t] = new b(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(_e, ce);
    K[t] = new b(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    K[e] = new b(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), K.xlinkHref = new b("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    K[e] = new b(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Me(e, t, n, r) {
    var l = K.hasOwnProperty(t) ? K[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (B(t, n, l, r) && (n = null), r || l === null ? le(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ee = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Q = Symbol.for("react.element"), de = Symbol.for("react.portal"), Se = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), Be = Symbol.for("react.profiler"), ve = Symbol.for("react.provider"), ge = Symbol.for("react.context"), Te = Symbol.for("react.forward_ref"), pe = Symbol.for("react.suspense"), Ee = Symbol.for("react.suspense_list"), We = Symbol.for("react.memo"), Ne = Symbol.for("react.lazy"), se = Symbol.for("react.offscreen"), L = Symbol.iterator;
  function H(e) {
    return e === null || typeof e != "object" ? null : (e = L && e[L] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var P = Object.assign, a;
  function h(e) {
    if (a === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      a = t && t[1] || "";
    }
    return `
` + a + e;
  }
  var w = !1;
  function x(e, t) {
    if (!e || w) return "";
    w = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (g) {
          var r = g;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (g) {
          r = g;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (g) {
          r = g;
        }
        e();
      }
    } catch (g) {
      if (g && r && typeof g.stack == "string") {
        for (var l = g.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, c = o.length - 1; 1 <= i && 0 <= c && l[i] !== o[c]; ) c--;
        for (; 1 <= i && 0 <= c; i--, c--) if (l[i] !== o[c]) {
          if (i !== 1 || c !== 1)
            do
              if (i--, c--, 0 > c || l[i] !== o[c]) {
                var d = `
` + l[i].replace(" at new ", " at ");
                return e.displayName && d.includes("<anonymous>") && (d = d.replace("<anonymous>", e.displayName)), d;
              }
            while (1 <= i && 0 <= c);
          break;
        }
      }
    } finally {
      w = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? h(e) : "";
  }
  function k(e) {
    switch (e.tag) {
      case 5:
        return h(e.type);
      case 16:
        return h("Lazy");
      case 13:
        return h("Suspense");
      case 19:
        return h("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = x(e.type, !1), e;
      case 11:
        return e = x(e.type.render, !1), e;
      case 1:
        return e = x(e.type, !0), e;
      default:
        return "";
    }
  }
  function T(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Se:
        return "Fragment";
      case de:
        return "Portal";
      case Be:
        return "Profiler";
      case M:
        return "StrictMode";
      case pe:
        return "Suspense";
      case Ee:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case ge:
        return (e.displayName || "Context") + ".Consumer";
      case ve:
        return (e._context.displayName || "Context") + ".Provider";
      case Te:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case We:
        return t = e.displayName || null, t !== null ? t : T(e.type) || "Memo";
      case Ne:
        t = e._payload, e = e._init;
        try {
          return T(e(t));
        } catch {
        }
    }
    return null;
  }
  function Y(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return T(t);
      case 8:
        return t === M ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function G(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function F(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function X(e) {
    var t = F(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, o = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(i) {
        r = "" + i, o.call(this, i);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(i) {
        r = "" + i;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Re(e) {
    e._valueTracker || (e._valueTracker = X(e));
  }
  function we(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = F(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Le(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Xe(e, t) {
    var n = t.checked;
    return P({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Qe(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = G(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function qt(e, t) {
    t = t.checked, t != null && Me(e, "checked", t, !1);
  }
  function he(e, t) {
    qt(e, t);
    var n = G(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? ke(e, t.type, n) : t.hasOwnProperty("defaultValue") && ke(e, t.type, G(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Ke(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function ke(e, t, n) {
    (t !== "number" || Le(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Pe = Array.isArray;
  function xt(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + G(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Jt(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(f(91));
    return P({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function kt(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(f(92));
        if (Pe(n)) {
          if (1 < n.length) throw Error(f(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: G(n) };
  }
  function bt(e, t) {
    var n = G(t.value), r = G(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Mn(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Tn(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Vt(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Tn(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var fn, qn = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (fn = fn || document.createElement("div"), fn.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = fn.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function St(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var On = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, zo = ["Webkit", "ms", "Moz", "O"];
  Object.keys(On).forEach(function(e) {
    zo.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), On[t] = On[e];
    });
  });
  function Nr(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || On.hasOwnProperty(e) && On[e] ? ("" + t).trim() : t + "px";
  }
  function en(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Nr(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var An = P({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function tn(e, t) {
    if (t) {
      if (An[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(f(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(f(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(f(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(f(62));
    }
  }
  function In(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Qt = null;
  function Ot(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Fn = null, dt = null, At = null;
  function Jn(e) {
    if (e = Jr(e)) {
      if (typeof Fn != "function") throw Error(f(280));
      var t = e.stateNode;
      t && (t = $l(t), Fn(e.stateNode, e.type, t));
    }
  }
  function Rr(e) {
    dt ? At ? At.push(e) : At = [e] : dt = e;
  }
  function vl() {
    if (dt) {
      var e = dt, t = At;
      if (At = dt = null, Jn(e), t) for (e = 0; e < t.length; e++) Jn(t[e]);
    }
  }
  function yl(e, t) {
    return e(t);
  }
  function O() {
  }
  var ue = !1;
  function me(e, t, n) {
    if (ue) return e(t, n);
    ue = !0;
    try {
      return yl(e, t, n);
    } finally {
      ue = !1, (dt !== null || At !== null) && (O(), vl());
    }
  }
  function ae(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = $l(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(f(231, t, typeof n));
    return n;
  }
  var Ce = !1;
  if (Z) try {
    var nt = {};
    Object.defineProperty(nt, "passive", { get: function() {
      Ce = !0;
    } }), window.addEventListener("test", nt, nt), window.removeEventListener("test", nt, nt);
  } catch {
    Ce = !1;
  }
  function Nt(e, t, n, r, l, o, i, c, d) {
    var g = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, g);
    } catch (C) {
      this.onError(C);
    }
  }
  var ut = !1, at = null, rt = !1, Lr = null, Mo = { onError: function(e) {
    ut = !0, at = e;
  } };
  function Pr(e, t, n, r, l, o, i, c, d) {
    ut = !1, at = null, Nt.apply(Mo, arguments);
  }
  function To(e, t, n, r, l, o, i, c, d) {
    if (Pr.apply(this, arguments), ut) {
      if (ut) {
        var g = at;
        ut = !1, at = null;
      } else throw Error(f(198));
      rt || (rt = !0, Lr = g);
    }
  }
  function It(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function bn(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function er(e) {
    if (It(e) !== e) throw Error(f(188));
  }
  function gl(e) {
    var t = e.alternate;
    if (!t) {
      if (t = It(e), t === null) throw Error(f(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (r = l.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return er(l), e;
          if (o === r) return er(l), t;
          o = o.sibling;
        }
        throw Error(f(188));
      }
      if (n.return !== r.return) n = l, r = o;
      else {
        for (var i = !1, c = l.child; c; ) {
          if (c === n) {
            i = !0, n = l, r = o;
            break;
          }
          if (c === r) {
            i = !0, r = l, n = o;
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = o.child; c; ) {
            if (c === n) {
              i = !0, n = o, r = l;
              break;
            }
            if (c === r) {
              i = !0, r = o, n = l;
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(f(189));
        }
      }
      if (n.alternate !== r) throw Error(f(190));
    }
    if (n.tag !== 3) throw Error(f(188));
    return n.stateNode.current === n ? e : t;
  }
  function zr(e) {
    return e = gl(e), e !== null ? Mr(e) : null;
  }
  function Mr(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Mr(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Tr = m.unstable_scheduleCallback, Ie = m.unstable_cancelCallback, pt = m.unstable_shouldYield, tr = m.unstable_requestPaint, He = m.unstable_now, Lc = m.unstable_getCurrentPriorityLevel, Oo = m.unstable_ImmediatePriority, Es = m.unstable_UserBlockingPriority, wl = m.unstable_NormalPriority, Pc = m.unstable_LowPriority, _s = m.unstable_IdlePriority, xl = null, Kt = null;
  function zc(e) {
    if (Kt && typeof Kt.onCommitFiberRoot == "function") try {
      Kt.onCommitFiberRoot(xl, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Ft = Math.clz32 ? Math.clz32 : Oc, Mc = Math.log, Tc = Math.LN2;
  function Oc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Mc(e) / Tc | 0) | 0;
  }
  var kl = 64, Sl = 4194304;
  function Or(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function El(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
    if (i !== 0) {
      var c = i & ~l;
      c !== 0 ? r = Or(c) : (o &= i, o !== 0 && (r = Or(o)));
    } else i = n & ~l, i !== 0 ? r = Or(i) : o !== 0 && (r = Or(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & l) === 0 && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Ft(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function Ac(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ic(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var i = 31 - Ft(o), c = 1 << i, d = l[i];
      d === -1 ? ((c & n) === 0 || (c & r) !== 0) && (l[i] = Ac(c, t)) : d <= t && (e.expiredLanes |= c), o &= ~c;
    }
  }
  function Ao(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Cs() {
    var e = kl;
    return kl <<= 1, (kl & 4194240) === 0 && (kl = 64), e;
  }
  function Io(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Ar(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ft(t), e[t] = n;
  }
  function Fc(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - Ft(n), o = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
    }
  }
  function Fo(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - Ft(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var je = 0;
  function js(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Ns, Do, Rs, Ls, Ps, $o = !1, _l = [], dn = null, pn = null, hn = null, Ir = /* @__PURE__ */ new Map(), Fr = /* @__PURE__ */ new Map(), mn = [], Dc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function zs(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        dn = null;
        break;
      case "dragenter":
      case "dragleave":
        pn = null;
        break;
      case "mouseover":
      case "mouseout":
        hn = null;
        break;
      case "pointerover":
      case "pointerout":
        Ir.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Fr.delete(t.pointerId);
    }
  }
  function Dr(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = Jr(t), t !== null && Do(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function $c(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return dn = Dr(dn, e, t, n, r, l), !0;
      case "dragenter":
        return pn = Dr(pn, e, t, n, r, l), !0;
      case "mouseover":
        return hn = Dr(hn, e, t, n, r, l), !0;
      case "pointerover":
        var o = l.pointerId;
        return Ir.set(o, Dr(Ir.get(o) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return o = l.pointerId, Fr.set(o, Dr(Fr.get(o) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function Ms(e) {
    var t = Dn(e.target);
    if (t !== null) {
      var n = It(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = bn(n), t !== null) {
            e.blockedOn = t, Ps(e.priority, function() {
              Rs(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Cl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Bo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Qt = r, n.target.dispatchEvent(r), Qt = null;
      } else return t = Jr(n), t !== null && Do(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Ts(e, t, n) {
    Cl(e) && n.delete(t);
  }
  function Uc() {
    $o = !1, dn !== null && Cl(dn) && (dn = null), pn !== null && Cl(pn) && (pn = null), hn !== null && Cl(hn) && (hn = null), Ir.forEach(Ts), Fr.forEach(Ts);
  }
  function $r(e, t) {
    e.blockedOn === t && (e.blockedOn = null, $o || ($o = !0, m.unstable_scheduleCallback(m.unstable_NormalPriority, Uc)));
  }
  function Ur(e) {
    function t(l) {
      return $r(l, e);
    }
    if (0 < _l.length) {
      $r(_l[0], e);
      for (var n = 1; n < _l.length; n++) {
        var r = _l[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (dn !== null && $r(dn, e), pn !== null && $r(pn, e), hn !== null && $r(hn, e), Ir.forEach(t), Fr.forEach(t), n = 0; n < mn.length; n++) r = mn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < mn.length && (n = mn[0], n.blockedOn === null); ) Ms(n), n.blockedOn === null && mn.shift();
  }
  var nr = ee.ReactCurrentBatchConfig, jl = !0;
  function Bc(e, t, n, r) {
    var l = je, o = nr.transition;
    nr.transition = null;
    try {
      je = 1, Uo(e, t, n, r);
    } finally {
      je = l, nr.transition = o;
    }
  }
  function Wc(e, t, n, r) {
    var l = je, o = nr.transition;
    nr.transition = null;
    try {
      je = 4, Uo(e, t, n, r);
    } finally {
      je = l, nr.transition = o;
    }
  }
  function Uo(e, t, n, r) {
    if (jl) {
      var l = Bo(e, t, n, r);
      if (l === null) li(e, t, r, Nl, n), zs(e, r);
      else if ($c(l, e, t, n, r)) r.stopPropagation();
      else if (zs(e, r), t & 4 && -1 < Dc.indexOf(e)) {
        for (; l !== null; ) {
          var o = Jr(l);
          if (o !== null && Ns(o), o = Bo(e, t, n, r), o === null && li(e, t, r, Nl, n), o === l) break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else li(e, t, r, null, n);
    }
  }
  var Nl = null;
  function Bo(e, t, n, r) {
    if (Nl = null, e = Ot(r), e = Dn(e), e !== null) if (t = It(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = bn(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Nl = e, null;
  }
  function Os(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Lc()) {
          case Oo:
            return 1;
          case Es:
            return 4;
          case wl:
          case Pc:
            return 16;
          case _s:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var vn = null, Wo = null, Rl = null;
  function As() {
    if (Rl) return Rl;
    var e, t = Wo, n = t.length, r, l = "value" in vn ? vn.value : vn.textContent, o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
    return Rl = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Ll(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Pl() {
    return !0;
  }
  function Is() {
    return !1;
  }
  function Et(e) {
    function t(n, r, l, o, i) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
      for (var c in e) e.hasOwnProperty(c) && (n = e[c], this[c] = n ? n(o) : o[c]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Pl : Is, this.isPropagationStopped = Is, this;
    }
    return P(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Pl);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Pl);
    }, persist: function() {
    }, isPersistent: Pl }), t;
  }
  var rr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ho = Et(rr), Br = P({}, rr, { view: 0, detail: 0 }), Hc = Et(Br), Vo, Qo, Wr, zl = P({}, Br, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Yo, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Wr && (Wr && e.type === "mousemove" ? (Vo = e.screenX - Wr.screenX, Qo = e.screenY - Wr.screenY) : Qo = Vo = 0, Wr = e), Vo);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Qo;
  } }), Fs = Et(zl), Vc = P({}, zl, { dataTransfer: 0 }), Qc = Et(Vc), Kc = P({}, Br, { relatedTarget: 0 }), Ko = Et(Kc), Yc = P({}, rr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Xc = Et(Yc), Zc = P({}, rr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Gc = Et(Zc), qc = P({}, rr, { data: 0 }), Ds = Et(qc), Jc = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, bc = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, ef = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function tf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = ef[e]) ? !!t[e] : !1;
  }
  function Yo() {
    return tf;
  }
  var nf = P({}, Br, { key: function(e) {
    if (e.key) {
      var t = Jc[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Ll(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? bc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Yo, charCode: function(e) {
    return e.type === "keypress" ? Ll(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Ll(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), rf = Et(nf), lf = P({}, zl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), $s = Et(lf), of = P({}, Br, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Yo }), sf = Et(of), uf = P({}, rr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), af = Et(uf), cf = P({}, zl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ff = Et(cf), df = [9, 13, 27, 32], Xo = Z && "CompositionEvent" in window, Hr = null;
  Z && "documentMode" in document && (Hr = document.documentMode);
  var pf = Z && "TextEvent" in window && !Hr, Us = Z && (!Xo || Hr && 8 < Hr && 11 >= Hr), Bs = " ", Ws = !1;
  function Hs(e, t) {
    switch (e) {
      case "keyup":
        return df.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Vs(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var lr = !1;
  function hf(e, t) {
    switch (e) {
      case "compositionend":
        return Vs(t);
      case "keypress":
        return t.which !== 32 ? null : (Ws = !0, Bs);
      case "textInput":
        return e = t.data, e === Bs && Ws ? null : e;
      default:
        return null;
    }
  }
  function mf(e, t) {
    if (lr) return e === "compositionend" || !Xo && Hs(e, t) ? (e = As(), Rl = Wo = vn = null, lr = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Us && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var vf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Qs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!vf[e.type] : t === "textarea";
  }
  function Ks(e, t, n, r) {
    Rr(r), t = Il(t, "onChange"), 0 < t.length && (n = new Ho("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Vr = null, Qr = null;
  function yf(e) {
    cu(e, 0);
  }
  function Ml(e) {
    var t = ar(e);
    if (we(t)) return e;
  }
  function gf(e, t) {
    if (e === "change") return t;
  }
  var Ys = !1;
  if (Z) {
    var Zo;
    if (Z) {
      var Go = "oninput" in document;
      if (!Go) {
        var Xs = document.createElement("div");
        Xs.setAttribute("oninput", "return;"), Go = typeof Xs.oninput == "function";
      }
      Zo = Go;
    } else Zo = !1;
    Ys = Zo && (!document.documentMode || 9 < document.documentMode);
  }
  function Zs() {
    Vr && (Vr.detachEvent("onpropertychange", Gs), Qr = Vr = null);
  }
  function Gs(e) {
    if (e.propertyName === "value" && Ml(Qr)) {
      var t = [];
      Ks(t, Qr, e, Ot(e)), me(yf, t);
    }
  }
  function wf(e, t, n) {
    e === "focusin" ? (Zs(), Vr = t, Qr = n, Vr.attachEvent("onpropertychange", Gs)) : e === "focusout" && Zs();
  }
  function xf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ml(Qr);
  }
  function kf(e, t) {
    if (e === "click") return Ml(t);
  }
  function Sf(e, t) {
    if (e === "input" || e === "change") return Ml(t);
  }
  function Ef(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Dt = typeof Object.is == "function" ? Object.is : Ef;
  function Kr(e, t) {
    if (Dt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!I.call(t, l) || !Dt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function qs(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Js(e, t) {
    var n = qs(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = qs(n);
    }
  }
  function bs(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? bs(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function eu() {
    for (var e = window, t = Le(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Le(e.document);
    }
    return t;
  }
  function qo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function _f(e) {
    var t = eu(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && bs(n.ownerDocument.documentElement, n)) {
      if (r !== null && qo(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, o = Math.min(r.start, l);
          r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Js(n, o);
          var i = Js(
            n,
            r
          );
          l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Cf = Z && "documentMode" in document && 11 >= document.documentMode, or = null, Jo = null, Yr = null, bo = !1;
  function tu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    bo || or == null || or !== Le(r) || (r = or, "selectionStart" in r && qo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Yr && Kr(Yr, r) || (Yr = r, r = Il(Jo, "onSelect"), 0 < r.length && (t = new Ho("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = or)));
  }
  function Tl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var ir = { animationend: Tl("Animation", "AnimationEnd"), animationiteration: Tl("Animation", "AnimationIteration"), animationstart: Tl("Animation", "AnimationStart"), transitionend: Tl("Transition", "TransitionEnd") }, ei = {}, nu = {};
  Z && (nu = document.createElement("div").style, "AnimationEvent" in window || (delete ir.animationend.animation, delete ir.animationiteration.animation, delete ir.animationstart.animation), "TransitionEvent" in window || delete ir.transitionend.transition);
  function Ol(e) {
    if (ei[e]) return ei[e];
    if (!ir[e]) return e;
    var t = ir[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in nu) return ei[e] = t[n];
    return e;
  }
  var ru = Ol("animationend"), lu = Ol("animationiteration"), ou = Ol("animationstart"), iu = Ol("transitionend"), su = /* @__PURE__ */ new Map(), uu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function yn(e, t) {
    su.set(e, t), _(t, [e]);
  }
  for (var ti = 0; ti < uu.length; ti++) {
    var ni = uu[ti], jf = ni.toLowerCase(), Nf = ni[0].toUpperCase() + ni.slice(1);
    yn(jf, "on" + Nf);
  }
  yn(ru, "onAnimationEnd"), yn(lu, "onAnimationIteration"), yn(ou, "onAnimationStart"), yn("dblclick", "onDoubleClick"), yn("focusin", "onFocus"), yn("focusout", "onBlur"), yn(iu, "onTransitionEnd"), $("onMouseEnter", ["mouseout", "mouseover"]), $("onMouseLeave", ["mouseout", "mouseover"]), $("onPointerEnter", ["pointerout", "pointerover"]), $("onPointerLeave", ["pointerout", "pointerover"]), _("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), _("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), _("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), _("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), _("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), _("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Xr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Rf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xr));
  function au(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, To(r, t, void 0, e), e.currentTarget = null;
  }
  function cu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t) for (var i = r.length - 1; 0 <= i; i--) {
          var c = r[i], d = c.instance, g = c.currentTarget;
          if (c = c.listener, d !== o && l.isPropagationStopped()) break e;
          au(l, c, g), o = d;
        }
        else for (i = 0; i < r.length; i++) {
          if (c = r[i], d = c.instance, g = c.currentTarget, c = c.listener, d !== o && l.isPropagationStopped()) break e;
          au(l, c, g), o = d;
        }
      }
    }
    if (rt) throw e = Lr, rt = !1, Lr = null, e;
  }
  function Oe(e, t) {
    var n = t[ci];
    n === void 0 && (n = t[ci] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (fu(t, e, 2, !1), n.add(r));
  }
  function ri(e, t, n) {
    var r = 0;
    t && (r |= 4), fu(n, e, r, t);
  }
  var Al = "_reactListening" + Math.random().toString(36).slice(2);
  function Zr(e) {
    if (!e[Al]) {
      e[Al] = !0, S.forEach(function(n) {
        n !== "selectionchange" && (Rf.has(n) || ri(n, !1, e), ri(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Al] || (t[Al] = !0, ri("selectionchange", !1, t));
    }
  }
  function fu(e, t, n, r) {
    switch (Os(t)) {
      case 1:
        var l = Bc;
        break;
      case 4:
        l = Wc;
        break;
      default:
        l = Uo;
    }
    n = l.bind(null, t, n, e), l = void 0, !Ce || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function li(e, t, n, r, l) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var c = r.stateNode.containerInfo;
        if (c === l || c.nodeType === 8 && c.parentNode === l) break;
        if (i === 4) for (i = r.return; i !== null; ) {
          var d = i.tag;
          if ((d === 3 || d === 4) && (d = i.stateNode.containerInfo, d === l || d.nodeType === 8 && d.parentNode === l)) return;
          i = i.return;
        }
        for (; c !== null; ) {
          if (i = Dn(c), i === null) return;
          if (d = i.tag, d === 5 || d === 6) {
            r = o = i;
            continue e;
          }
          c = c.parentNode;
        }
      }
      r = r.return;
    }
    me(function() {
      var g = o, C = Ot(n), N = [];
      e: {
        var E = su.get(e);
        if (E !== void 0) {
          var A = Ho, U = e;
          switch (e) {
            case "keypress":
              if (Ll(n) === 0) break e;
            case "keydown":
            case "keyup":
              A = rf;
              break;
            case "focusin":
              U = "focus", A = Ko;
              break;
            case "focusout":
              U = "blur", A = Ko;
              break;
            case "beforeblur":
            case "afterblur":
              A = Ko;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              A = Fs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              A = Qc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              A = sf;
              break;
            case ru:
            case lu:
            case ou:
              A = Xc;
              break;
            case iu:
              A = af;
              break;
            case "scroll":
              A = Hc;
              break;
            case "wheel":
              A = ff;
              break;
            case "copy":
            case "cut":
            case "paste":
              A = Gc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              A = $s;
          }
          var W = (t & 4) !== 0, Ve = !W && e === "scroll", v = W ? E !== null ? E + "Capture" : null : E;
          W = [];
          for (var p = g, y; p !== null; ) {
            y = p;
            var R = y.stateNode;
            if (y.tag === 5 && R !== null && (y = R, v !== null && (R = ae(p, v), R != null && W.push(Gr(p, R, y)))), Ve) break;
            p = p.return;
          }
          0 < W.length && (E = new A(E, U, null, n, C), N.push({ event: E, listeners: W }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (E = e === "mouseover" || e === "pointerover", A = e === "mouseout" || e === "pointerout", E && n !== Qt && (U = n.relatedTarget || n.fromElement) && (Dn(U) || U[nn])) break e;
          if ((A || E) && (E = C.window === C ? C : (E = C.ownerDocument) ? E.defaultView || E.parentWindow : window, A ? (U = n.relatedTarget || n.toElement, A = g, U = U ? Dn(U) : null, U !== null && (Ve = It(U), U !== Ve || U.tag !== 5 && U.tag !== 6) && (U = null)) : (A = null, U = g), A !== U)) {
            if (W = Fs, R = "onMouseLeave", v = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (W = $s, R = "onPointerLeave", v = "onPointerEnter", p = "pointer"), Ve = A == null ? E : ar(A), y = U == null ? E : ar(U), E = new W(R, p + "leave", A, n, C), E.target = Ve, E.relatedTarget = y, R = null, Dn(C) === g && (W = new W(v, p + "enter", U, n, C), W.target = y, W.relatedTarget = Ve, R = W), Ve = R, A && U) t: {
              for (W = A, v = U, p = 0, y = W; y; y = sr(y)) p++;
              for (y = 0, R = v; R; R = sr(R)) y++;
              for (; 0 < p - y; ) W = sr(W), p--;
              for (; 0 < y - p; ) v = sr(v), y--;
              for (; p--; ) {
                if (W === v || v !== null && W === v.alternate) break t;
                W = sr(W), v = sr(v);
              }
              W = null;
            }
            else W = null;
            A !== null && du(N, E, A, W, !1), U !== null && Ve !== null && du(N, Ve, U, W, !0);
          }
        }
        e: {
          if (E = g ? ar(g) : window, A = E.nodeName && E.nodeName.toLowerCase(), A === "select" || A === "input" && E.type === "file") var V = gf;
          else if (Qs(E)) if (Ys) V = Sf;
          else {
            V = xf;
            var q = wf;
          }
          else (A = E.nodeName) && A.toLowerCase() === "input" && (E.type === "checkbox" || E.type === "radio") && (V = kf);
          if (V && (V = V(e, g))) {
            Ks(N, V, n, C);
            break e;
          }
          q && q(e, E, g), e === "focusout" && (q = E._wrapperState) && q.controlled && E.type === "number" && ke(E, "number", E.value);
        }
        switch (q = g ? ar(g) : window, e) {
          case "focusin":
            (Qs(q) || q.contentEditable === "true") && (or = q, Jo = g, Yr = null);
            break;
          case "focusout":
            Yr = Jo = or = null;
            break;
          case "mousedown":
            bo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            bo = !1, tu(N, n, C);
            break;
          case "selectionchange":
            if (Cf) break;
          case "keydown":
          case "keyup":
            tu(N, n, C);
        }
        var J;
        if (Xo) e: {
          switch (e) {
            case "compositionstart":
              var oe = "onCompositionStart";
              break e;
            case "compositionend":
              oe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              oe = "onCompositionUpdate";
              break e;
          }
          oe = void 0;
        }
        else lr ? Hs(e, n) && (oe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (oe = "onCompositionStart");
        oe && (Us && n.locale !== "ko" && (lr || oe !== "onCompositionStart" ? oe === "onCompositionEnd" && lr && (J = As()) : (vn = C, Wo = "value" in vn ? vn.value : vn.textContent, lr = !0)), q = Il(g, oe), 0 < q.length && (oe = new Ds(oe, e, null, n, C), N.push({ event: oe, listeners: q }), J ? oe.data = J : (J = Vs(n), J !== null && (oe.data = J)))), (J = pf ? hf(e, n) : mf(e, n)) && (g = Il(g, "onBeforeInput"), 0 < g.length && (C = new Ds("onBeforeInput", "beforeinput", null, n, C), N.push({ event: C, listeners: g }), C.data = J));
      }
      cu(N, t);
    });
  }
  function Gr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Il(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, o = l.stateNode;
      l.tag === 5 && o !== null && (l = o, o = ae(e, n), o != null && r.unshift(Gr(e, o, l)), o = ae(e, t), o != null && r.push(Gr(e, o, l))), e = e.return;
    }
    return r;
  }
  function sr(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function du(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
      var c = n, d = c.alternate, g = c.stateNode;
      if (d !== null && d === r) break;
      c.tag === 5 && g !== null && (c = g, l ? (d = ae(n, o), d != null && i.unshift(Gr(n, d, c))) : l || (d = ae(n, o), d != null && i.push(Gr(n, d, c)))), n = n.return;
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var Lf = /\r\n?/g, Pf = /\u0000|\uFFFD/g;
  function pu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Lf, `
`).replace(Pf, "");
  }
  function Fl(e, t, n) {
    if (t = pu(t), pu(e) !== t && n) throw Error(f(425));
  }
  function Dl() {
  }
  var oi = null, ii = null;
  function si(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ui = typeof setTimeout == "function" ? setTimeout : void 0, zf = typeof clearTimeout == "function" ? clearTimeout : void 0, hu = typeof Promise == "function" ? Promise : void 0, Mf = typeof queueMicrotask == "function" ? queueMicrotask : typeof hu < "u" ? function(e) {
    return hu.resolve(null).then(e).catch(Tf);
  } : ui;
  function Tf(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ai(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), Ur(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    Ur(t);
  }
  function gn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function mu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var ur = Math.random().toString(36).slice(2), Yt = "__reactFiber$" + ur, qr = "__reactProps$" + ur, nn = "__reactContainer$" + ur, ci = "__reactEvents$" + ur, Of = "__reactListeners$" + ur, Af = "__reactHandles$" + ur;
  function Dn(e) {
    var t = e[Yt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[nn] || n[Yt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = mu(e); e !== null; ) {
          if (n = e[Yt]) return n;
          e = mu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Jr(e) {
    return e = e[Yt] || e[nn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function ar(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(f(33));
  }
  function $l(e) {
    return e[qr] || null;
  }
  var fi = [], cr = -1;
  function wn(e) {
    return { current: e };
  }
  function Ae(e) {
    0 > cr || (e.current = fi[cr], fi[cr] = null, cr--);
  }
  function ze(e, t) {
    cr++, fi[cr] = e.current, e.current = t;
  }
  var xn = {}, lt = wn(xn), ht = wn(!1), $n = xn;
  function fr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return xn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in n) l[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function mt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Ul() {
    Ae(ht), Ae(lt);
  }
  function vu(e, t, n) {
    if (lt.current !== xn) throw Error(f(168));
    ze(lt, t), ze(ht, n);
  }
  function yu(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(f(108, Y(e) || "Unknown", l));
    return P({}, n, r);
  }
  function Bl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || xn, $n = lt.current, ze(lt, e), ze(ht, ht.current), !0;
  }
  function gu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(f(169));
    n ? (e = yu(e, t, $n), r.__reactInternalMemoizedMergedChildContext = e, Ae(ht), Ae(lt), ze(lt, e)) : Ae(ht), ze(ht, n);
  }
  var rn = null, Wl = !1, di = !1;
  function wu(e) {
    rn === null ? rn = [e] : rn.push(e);
  }
  function If(e) {
    Wl = !0, wu(e);
  }
  function kn() {
    if (!di && rn !== null) {
      di = !0;
      var e = 0, t = je;
      try {
        var n = rn;
        for (je = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        rn = null, Wl = !1;
      } catch (l) {
        throw rn !== null && (rn = rn.slice(e + 1)), Tr(Oo, kn), l;
      } finally {
        je = t, di = !1;
      }
    }
    return null;
  }
  var dr = [], pr = 0, Hl = null, Vl = 0, Rt = [], Lt = 0, Un = null, ln = 1, on = "";
  function Bn(e, t) {
    dr[pr++] = Vl, dr[pr++] = Hl, Hl = e, Vl = t;
  }
  function xu(e, t, n) {
    Rt[Lt++] = ln, Rt[Lt++] = on, Rt[Lt++] = Un, Un = e;
    var r = ln;
    e = on;
    var l = 32 - Ft(r) - 1;
    r &= ~(1 << l), n += 1;
    var o = 32 - Ft(t) + l;
    if (30 < o) {
      var i = l - l % 5;
      o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, ln = 1 << 32 - Ft(t) + l | n << l | r, on = o + e;
    } else ln = 1 << o | n << l | r, on = e;
  }
  function pi(e) {
    e.return !== null && (Bn(e, 1), xu(e, 1, 0));
  }
  function hi(e) {
    for (; e === Hl; ) Hl = dr[--pr], dr[pr] = null, Vl = dr[--pr], dr[pr] = null;
    for (; e === Un; ) Un = Rt[--Lt], Rt[Lt] = null, on = Rt[--Lt], Rt[Lt] = null, ln = Rt[--Lt], Rt[Lt] = null;
  }
  var _t = null, Ct = null, Fe = !1, $t = null;
  function ku(e, t) {
    var n = Tt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Su(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, _t = e, Ct = gn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, _t = e, Ct = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Un !== null ? { id: ln, overflow: on } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Tt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, _t = e, Ct = null, !0) : !1;
      default:
        return !1;
    }
  }
  function mi(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function vi(e) {
    if (Fe) {
      var t = Ct;
      if (t) {
        var n = t;
        if (!Su(e, t)) {
          if (mi(e)) throw Error(f(418));
          t = gn(n.nextSibling);
          var r = _t;
          t && Su(e, t) ? ku(r, n) : (e.flags = e.flags & -4097 | 2, Fe = !1, _t = e);
        }
      } else {
        if (mi(e)) throw Error(f(418));
        e.flags = e.flags & -4097 | 2, Fe = !1, _t = e;
      }
    }
  }
  function Eu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    _t = e;
  }
  function Ql(e) {
    if (e !== _t) return !1;
    if (!Fe) return Eu(e), Fe = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !si(e.type, e.memoizedProps)), t && (t = Ct)) {
      if (mi(e)) throw _u(), Error(f(418));
      for (; t; ) ku(e, t), t = gn(t.nextSibling);
    }
    if (Eu(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Ct = gn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Ct = null;
      }
    } else Ct = _t ? gn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function _u() {
    for (var e = Ct; e; ) e = gn(e.nextSibling);
  }
  function hr() {
    Ct = _t = null, Fe = !1;
  }
  function yi(e) {
    $t === null ? $t = [e] : $t.push(e);
  }
  var Ff = ee.ReactCurrentBatchConfig;
  function br(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(f(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(f(147, e));
        var l = r, o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
          var c = l.refs;
          i === null ? delete c[o] : c[o] = i;
        }, t._stringRef = o, t);
      }
      if (typeof e != "string") throw Error(f(284));
      if (!n._owner) throw Error(f(290, e));
    }
    return e;
  }
  function Kl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(f(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Cu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ju(e) {
    function t(v, p) {
      if (e) {
        var y = v.deletions;
        y === null ? (v.deletions = [p], v.flags |= 16) : y.push(p);
      }
    }
    function n(v, p) {
      if (!e) return null;
      for (; p !== null; ) t(v, p), p = p.sibling;
      return null;
    }
    function r(v, p) {
      for (v = /* @__PURE__ */ new Map(); p !== null; ) p.key !== null ? v.set(p.key, p) : v.set(p.index, p), p = p.sibling;
      return v;
    }
    function l(v, p) {
      return v = Ln(v, p), v.index = 0, v.sibling = null, v;
    }
    function o(v, p, y) {
      return v.index = y, e ? (y = v.alternate, y !== null ? (y = y.index, y < p ? (v.flags |= 2, p) : y) : (v.flags |= 2, p)) : (v.flags |= 1048576, p);
    }
    function i(v) {
      return e && v.alternate === null && (v.flags |= 2), v;
    }
    function c(v, p, y, R) {
      return p === null || p.tag !== 6 ? (p = us(y, v.mode, R), p.return = v, p) : (p = l(p, y), p.return = v, p);
    }
    function d(v, p, y, R) {
      var V = y.type;
      return V === Se ? C(v, p, y.props.children, R, y.key) : p !== null && (p.elementType === V || typeof V == "object" && V !== null && V.$$typeof === Ne && Cu(V) === p.type) ? (R = l(p, y.props), R.ref = br(v, p, y), R.return = v, R) : (R = yo(y.type, y.key, y.props, null, v.mode, R), R.ref = br(v, p, y), R.return = v, R);
    }
    function g(v, p, y, R) {
      return p === null || p.tag !== 4 || p.stateNode.containerInfo !== y.containerInfo || p.stateNode.implementation !== y.implementation ? (p = as(y, v.mode, R), p.return = v, p) : (p = l(p, y.children || []), p.return = v, p);
    }
    function C(v, p, y, R, V) {
      return p === null || p.tag !== 7 ? (p = Zn(y, v.mode, R, V), p.return = v, p) : (p = l(p, y), p.return = v, p);
    }
    function N(v, p, y) {
      if (typeof p == "string" && p !== "" || typeof p == "number") return p = us("" + p, v.mode, y), p.return = v, p;
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case Q:
            return y = yo(p.type, p.key, p.props, null, v.mode, y), y.ref = br(v, null, p), y.return = v, y;
          case de:
            return p = as(p, v.mode, y), p.return = v, p;
          case Ne:
            var R = p._init;
            return N(v, R(p._payload), y);
        }
        if (Pe(p) || H(p)) return p = Zn(p, v.mode, y, null), p.return = v, p;
        Kl(v, p);
      }
      return null;
    }
    function E(v, p, y, R) {
      var V = p !== null ? p.key : null;
      if (typeof y == "string" && y !== "" || typeof y == "number") return V !== null ? null : c(v, p, "" + y, R);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Q:
            return y.key === V ? d(v, p, y, R) : null;
          case de:
            return y.key === V ? g(v, p, y, R) : null;
          case Ne:
            return V = y._init, E(
              v,
              p,
              V(y._payload),
              R
            );
        }
        if (Pe(y) || H(y)) return V !== null ? null : C(v, p, y, R, null);
        Kl(v, y);
      }
      return null;
    }
    function A(v, p, y, R, V) {
      if (typeof R == "string" && R !== "" || typeof R == "number") return v = v.get(y) || null, c(p, v, "" + R, V);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case Q:
            return v = v.get(R.key === null ? y : R.key) || null, d(p, v, R, V);
          case de:
            return v = v.get(R.key === null ? y : R.key) || null, g(p, v, R, V);
          case Ne:
            var q = R._init;
            return A(v, p, y, q(R._payload), V);
        }
        if (Pe(R) || H(R)) return v = v.get(y) || null, C(p, v, R, V, null);
        Kl(p, R);
      }
      return null;
    }
    function U(v, p, y, R) {
      for (var V = null, q = null, J = p, oe = p = 0, be = null; J !== null && oe < y.length; oe++) {
        J.index > oe ? (be = J, J = null) : be = J.sibling;
        var xe = E(v, J, y[oe], R);
        if (xe === null) {
          J === null && (J = be);
          break;
        }
        e && J && xe.alternate === null && t(v, J), p = o(xe, p, oe), q === null ? V = xe : q.sibling = xe, q = xe, J = be;
      }
      if (oe === y.length) return n(v, J), Fe && Bn(v, oe), V;
      if (J === null) {
        for (; oe < y.length; oe++) J = N(v, y[oe], R), J !== null && (p = o(J, p, oe), q === null ? V = J : q.sibling = J, q = J);
        return Fe && Bn(v, oe), V;
      }
      for (J = r(v, J); oe < y.length; oe++) be = A(J, v, oe, y[oe], R), be !== null && (e && be.alternate !== null && J.delete(be.key === null ? oe : be.key), p = o(be, p, oe), q === null ? V = be : q.sibling = be, q = be);
      return e && J.forEach(function(Pn) {
        return t(v, Pn);
      }), Fe && Bn(v, oe), V;
    }
    function W(v, p, y, R) {
      var V = H(y);
      if (typeof V != "function") throw Error(f(150));
      if (y = V.call(y), y == null) throw Error(f(151));
      for (var q = V = null, J = p, oe = p = 0, be = null, xe = y.next(); J !== null && !xe.done; oe++, xe = y.next()) {
        J.index > oe ? (be = J, J = null) : be = J.sibling;
        var Pn = E(v, J, xe.value, R);
        if (Pn === null) {
          J === null && (J = be);
          break;
        }
        e && J && Pn.alternate === null && t(v, J), p = o(Pn, p, oe), q === null ? V = Pn : q.sibling = Pn, q = Pn, J = be;
      }
      if (xe.done) return n(
        v,
        J
      ), Fe && Bn(v, oe), V;
      if (J === null) {
        for (; !xe.done; oe++, xe = y.next()) xe = N(v, xe.value, R), xe !== null && (p = o(xe, p, oe), q === null ? V = xe : q.sibling = xe, q = xe);
        return Fe && Bn(v, oe), V;
      }
      for (J = r(v, J); !xe.done; oe++, xe = y.next()) xe = A(J, v, oe, xe.value, R), xe !== null && (e && xe.alternate !== null && J.delete(xe.key === null ? oe : xe.key), p = o(xe, p, oe), q === null ? V = xe : q.sibling = xe, q = xe);
      return e && J.forEach(function(vd) {
        return t(v, vd);
      }), Fe && Bn(v, oe), V;
    }
    function Ve(v, p, y, R) {
      if (typeof y == "object" && y !== null && y.type === Se && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Q:
            e: {
              for (var V = y.key, q = p; q !== null; ) {
                if (q.key === V) {
                  if (V = y.type, V === Se) {
                    if (q.tag === 7) {
                      n(v, q.sibling), p = l(q, y.props.children), p.return = v, v = p;
                      break e;
                    }
                  } else if (q.elementType === V || typeof V == "object" && V !== null && V.$$typeof === Ne && Cu(V) === q.type) {
                    n(v, q.sibling), p = l(q, y.props), p.ref = br(v, q, y), p.return = v, v = p;
                    break e;
                  }
                  n(v, q);
                  break;
                } else t(v, q);
                q = q.sibling;
              }
              y.type === Se ? (p = Zn(y.props.children, v.mode, R, y.key), p.return = v, v = p) : (R = yo(y.type, y.key, y.props, null, v.mode, R), R.ref = br(v, p, y), R.return = v, v = R);
            }
            return i(v);
          case de:
            e: {
              for (q = y.key; p !== null; ) {
                if (p.key === q) if (p.tag === 4 && p.stateNode.containerInfo === y.containerInfo && p.stateNode.implementation === y.implementation) {
                  n(v, p.sibling), p = l(p, y.children || []), p.return = v, v = p;
                  break e;
                } else {
                  n(v, p);
                  break;
                }
                else t(v, p);
                p = p.sibling;
              }
              p = as(y, v.mode, R), p.return = v, v = p;
            }
            return i(v);
          case Ne:
            return q = y._init, Ve(v, p, q(y._payload), R);
        }
        if (Pe(y)) return U(v, p, y, R);
        if (H(y)) return W(v, p, y, R);
        Kl(v, y);
      }
      return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, p !== null && p.tag === 6 ? (n(v, p.sibling), p = l(p, y), p.return = v, v = p) : (n(v, p), p = us(y, v.mode, R), p.return = v, v = p), i(v)) : n(v, p);
    }
    return Ve;
  }
  var mr = ju(!0), Nu = ju(!1), Yl = wn(null), Xl = null, vr = null, gi = null;
  function wi() {
    gi = vr = Xl = null;
  }
  function xi(e) {
    var t = Yl.current;
    Ae(Yl), e._currentValue = t;
  }
  function ki(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function yr(e, t) {
    Xl = e, gi = vr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (vt = !0), e.firstContext = null);
  }
  function Pt(e) {
    var t = e._currentValue;
    if (gi !== e) if (e = { context: e, memoizedValue: t, next: null }, vr === null) {
      if (Xl === null) throw Error(f(308));
      vr = e, Xl.dependencies = { lanes: 0, firstContext: e };
    } else vr = vr.next = e;
    return t;
  }
  var Wn = null;
  function Si(e) {
    Wn === null ? Wn = [e] : Wn.push(e);
  }
  function Ru(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Si(t)) : (n.next = l.next, l.next = n), t.interleaved = n, sn(e, r);
  }
  function sn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Sn = !1;
  function Ei(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Lu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function un(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function En(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (ye & 2) !== 0) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, sn(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, Si(r)) : (t.next = l.next, l.next = t), r.interleaved = t, sn(e, n);
  }
  function Zl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Fo(e, n);
    }
  }
  function Pu(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var l = null, o = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          o === null ? l = o = i : o = o.next = i, n = n.next;
        } while (n !== null);
        o === null ? l = o = t : o = o.next = t;
      } else l = o = t;
      n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Gl(e, t, n, r) {
    var l = e.updateQueue;
    Sn = !1;
    var o = l.firstBaseUpdate, i = l.lastBaseUpdate, c = l.shared.pending;
    if (c !== null) {
      l.shared.pending = null;
      var d = c, g = d.next;
      d.next = null, i === null ? o = g : i.next = g, i = d;
      var C = e.alternate;
      C !== null && (C = C.updateQueue, c = C.lastBaseUpdate, c !== i && (c === null ? C.firstBaseUpdate = g : c.next = g, C.lastBaseUpdate = d));
    }
    if (o !== null) {
      var N = l.baseState;
      i = 0, C = g = d = null, c = o;
      do {
        var E = c.lane, A = c.eventTime;
        if ((r & E) === E) {
          C !== null && (C = C.next = {
            eventTime: A,
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          });
          e: {
            var U = e, W = c;
            switch (E = t, A = n, W.tag) {
              case 1:
                if (U = W.payload, typeof U == "function") {
                  N = U.call(A, N, E);
                  break e;
                }
                N = U;
                break e;
              case 3:
                U.flags = U.flags & -65537 | 128;
              case 0:
                if (U = W.payload, E = typeof U == "function" ? U.call(A, N, E) : U, E == null) break e;
                N = P({}, N, E);
                break e;
              case 2:
                Sn = !0;
            }
          }
          c.callback !== null && c.lane !== 0 && (e.flags |= 64, E = l.effects, E === null ? l.effects = [c] : E.push(c));
        } else A = { eventTime: A, lane: E, tag: c.tag, payload: c.payload, callback: c.callback, next: null }, C === null ? (g = C = A, d = N) : C = C.next = A, i |= E;
        if (c = c.next, c === null) {
          if (c = l.shared.pending, c === null) break;
          E = c, c = E.next, E.next = null, l.lastBaseUpdate = E, l.shared.pending = null;
        }
      } while (!0);
      if (C === null && (d = N), l.baseState = d, l.firstBaseUpdate = g, l.lastBaseUpdate = C, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          i |= l.lane, l = l.next;
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      Qn |= i, e.lanes = i, e.memoizedState = N;
    }
  }
  function zu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(f(191, l));
        l.call(r);
      }
    }
  }
  var el = {}, Xt = wn(el), tl = wn(el), nl = wn(el);
  function Hn(e) {
    if (e === el) throw Error(f(174));
    return e;
  }
  function _i(e, t) {
    switch (ze(nl, t), ze(tl, e), ze(Xt, el), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Vt(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Vt(t, e);
    }
    Ae(Xt), ze(Xt, t);
  }
  function gr() {
    Ae(Xt), Ae(tl), Ae(nl);
  }
  function Mu(e) {
    Hn(nl.current);
    var t = Hn(Xt.current), n = Vt(t, e.type);
    t !== n && (ze(tl, e), ze(Xt, n));
  }
  function Ci(e) {
    tl.current === e && (Ae(Xt), Ae(tl));
  }
  var De = wn(0);
  function ql(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var ji = [];
  function Ni() {
    for (var e = 0; e < ji.length; e++) ji[e]._workInProgressVersionPrimary = null;
    ji.length = 0;
  }
  var Jl = ee.ReactCurrentDispatcher, Ri = ee.ReactCurrentBatchConfig, Vn = 0, $e = null, Ze = null, qe = null, bl = !1, rl = !1, ll = 0, Df = 0;
  function ot() {
    throw Error(f(321));
  }
  function Li(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Dt(e[n], t[n])) return !1;
    return !0;
  }
  function Pi(e, t, n, r, l, o) {
    if (Vn = o, $e = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Jl.current = e === null || e.memoizedState === null ? Wf : Hf, e = n(r, l), rl) {
      o = 0;
      do {
        if (rl = !1, ll = 0, 25 <= o) throw Error(f(301));
        o += 1, qe = Ze = null, t.updateQueue = null, Jl.current = Vf, e = n(r, l);
      } while (rl);
    }
    if (Jl.current = no, t = Ze !== null && Ze.next !== null, Vn = 0, qe = Ze = $e = null, bl = !1, t) throw Error(f(300));
    return e;
  }
  function zi() {
    var e = ll !== 0;
    return ll = 0, e;
  }
  function Zt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return qe === null ? $e.memoizedState = qe = e : qe = qe.next = e, qe;
  }
  function zt() {
    if (Ze === null) {
      var e = $e.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ze.next;
    var t = qe === null ? $e.memoizedState : qe.next;
    if (t !== null) qe = t, Ze = e;
    else {
      if (e === null) throw Error(f(310));
      Ze = e, e = { memoizedState: Ze.memoizedState, baseState: Ze.baseState, baseQueue: Ze.baseQueue, queue: Ze.queue, next: null }, qe === null ? $e.memoizedState = qe = e : qe = qe.next = e;
    }
    return qe;
  }
  function ol(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Mi(e) {
    var t = zt(), n = t.queue;
    if (n === null) throw Error(f(311));
    n.lastRenderedReducer = e;
    var r = Ze, l = r.baseQueue, o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var i = l.next;
        l.next = o.next, o.next = i;
      }
      r.baseQueue = l = o, n.pending = null;
    }
    if (l !== null) {
      o = l.next, r = r.baseState;
      var c = i = null, d = null, g = o;
      do {
        var C = g.lane;
        if ((Vn & C) === C) d !== null && (d = d.next = { lane: 0, action: g.action, hasEagerState: g.hasEagerState, eagerState: g.eagerState, next: null }), r = g.hasEagerState ? g.eagerState : e(r, g.action);
        else {
          var N = {
            lane: C,
            action: g.action,
            hasEagerState: g.hasEagerState,
            eagerState: g.eagerState,
            next: null
          };
          d === null ? (c = d = N, i = r) : d = d.next = N, $e.lanes |= C, Qn |= C;
        }
        g = g.next;
      } while (g !== null && g !== o);
      d === null ? i = r : d.next = c, Dt(r, t.memoizedState) || (vt = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = d, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        o = l.lane, $e.lanes |= o, Qn |= o, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ti(e) {
    var t = zt(), n = t.queue;
    if (n === null) throw Error(f(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var i = l = l.next;
      do
        o = e(o, i.action), i = i.next;
      while (i !== l);
      Dt(o, t.memoizedState) || (vt = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, r];
  }
  function Tu() {
  }
  function Ou(e, t) {
    var n = $e, r = zt(), l = t(), o = !Dt(r.memoizedState, l);
    if (o && (r.memoizedState = l, vt = !0), r = r.queue, Oi(Fu.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || qe !== null && qe.memoizedState.tag & 1) {
      if (n.flags |= 2048, il(9, Iu.bind(null, n, r, l, t), void 0, null), Je === null) throw Error(f(349));
      (Vn & 30) !== 0 || Au(n, t, l);
    }
    return l;
  }
  function Au(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = $e.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, $e.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Iu(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Du(t) && $u(e);
  }
  function Fu(e, t, n) {
    return n(function() {
      Du(t) && $u(e);
    });
  }
  function Du(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Dt(e, n);
    } catch {
      return !0;
    }
  }
  function $u(e) {
    var t = sn(e, 1);
    t !== null && Ht(t, e, 1, -1);
  }
  function Uu(e) {
    var t = Zt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ol, lastRenderedState: e }, t.queue = e, e = e.dispatch = Bf.bind(null, $e, e), [t.memoizedState, e];
  }
  function il(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = $e.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, $e.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Bu() {
    return zt().memoizedState;
  }
  function eo(e, t, n, r) {
    var l = Zt();
    $e.flags |= e, l.memoizedState = il(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function to(e, t, n, r) {
    var l = zt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Ze !== null) {
      var i = Ze.memoizedState;
      if (o = i.destroy, r !== null && Li(r, i.deps)) {
        l.memoizedState = il(t, n, o, r);
        return;
      }
    }
    $e.flags |= e, l.memoizedState = il(1 | t, n, o, r);
  }
  function Wu(e, t) {
    return eo(8390656, 8, e, t);
  }
  function Oi(e, t) {
    return to(2048, 8, e, t);
  }
  function Hu(e, t) {
    return to(4, 2, e, t);
  }
  function Vu(e, t) {
    return to(4, 4, e, t);
  }
  function Qu(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Ku(e, t, n) {
    return n = n != null ? n.concat([e]) : null, to(4, 4, Qu.bind(null, t, e), n);
  }
  function Ai() {
  }
  function Yu(e, t) {
    var n = zt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Li(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Xu(e, t) {
    var n = zt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Li(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Zu(e, t, n) {
    return (Vn & 21) === 0 ? (e.baseState && (e.baseState = !1, vt = !0), e.memoizedState = n) : (Dt(n, t) || (n = Cs(), $e.lanes |= n, Qn |= n, e.baseState = !0), t);
  }
  function $f(e, t) {
    var n = je;
    je = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Ri.transition;
    Ri.transition = {};
    try {
      e(!1), t();
    } finally {
      je = n, Ri.transition = r;
    }
  }
  function Gu() {
    return zt().memoizedState;
  }
  function Uf(e, t, n) {
    var r = Nn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, qu(e)) Ju(t, n);
    else if (n = Ru(e, t, n, r), n !== null) {
      var l = ft();
      Ht(n, e, r, l), bu(n, t, r);
    }
  }
  function Bf(e, t, n) {
    var r = Nn(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (qu(e)) Ju(t, l);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
        var i = t.lastRenderedState, c = o(i, n);
        if (l.hasEagerState = !0, l.eagerState = c, Dt(c, i)) {
          var d = t.interleaved;
          d === null ? (l.next = l, Si(t)) : (l.next = d.next, d.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      n = Ru(e, t, l, r), n !== null && (l = ft(), Ht(n, e, r, l), bu(n, t, r));
    }
  }
  function qu(e) {
    var t = e.alternate;
    return e === $e || t !== null && t === $e;
  }
  function Ju(e, t) {
    rl = bl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function bu(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Fo(e, n);
    }
  }
  var no = { readContext: Pt, useCallback: ot, useContext: ot, useEffect: ot, useImperativeHandle: ot, useInsertionEffect: ot, useLayoutEffect: ot, useMemo: ot, useReducer: ot, useRef: ot, useState: ot, useDebugValue: ot, useDeferredValue: ot, useTransition: ot, useMutableSource: ot, useSyncExternalStore: ot, useId: ot, unstable_isNewReconciler: !1 }, Wf = { readContext: Pt, useCallback: function(e, t) {
    return Zt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Pt, useEffect: Wu, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, eo(
      4194308,
      4,
      Qu.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return eo(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return eo(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Zt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Zt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Uf.bind(null, $e, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Zt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Uu, useDebugValue: Ai, useDeferredValue: function(e) {
    return Zt().memoizedState = e;
  }, useTransition: function() {
    var e = Uu(!1), t = e[0];
    return e = $f.bind(null, e[1]), Zt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = $e, l = Zt();
    if (Fe) {
      if (n === void 0) throw Error(f(407));
      n = n();
    } else {
      if (n = t(), Je === null) throw Error(f(349));
      (Vn & 30) !== 0 || Au(r, t, n);
    }
    l.memoizedState = n;
    var o = { value: n, getSnapshot: t };
    return l.queue = o, Wu(Fu.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, il(9, Iu.bind(null, r, o, n, t), void 0, null), n;
  }, useId: function() {
    var e = Zt(), t = Je.identifierPrefix;
    if (Fe) {
      var n = on, r = ln;
      n = (r & ~(1 << 32 - Ft(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ll++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Df++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Hf = {
    readContext: Pt,
    useCallback: Yu,
    useContext: Pt,
    useEffect: Oi,
    useImperativeHandle: Ku,
    useInsertionEffect: Hu,
    useLayoutEffect: Vu,
    useMemo: Xu,
    useReducer: Mi,
    useRef: Bu,
    useState: function() {
      return Mi(ol);
    },
    useDebugValue: Ai,
    useDeferredValue: function(e) {
      var t = zt();
      return Zu(t, Ze.memoizedState, e);
    },
    useTransition: function() {
      var e = Mi(ol)[0], t = zt().memoizedState;
      return [e, t];
    },
    useMutableSource: Tu,
    useSyncExternalStore: Ou,
    useId: Gu,
    unstable_isNewReconciler: !1
  }, Vf = { readContext: Pt, useCallback: Yu, useContext: Pt, useEffect: Oi, useImperativeHandle: Ku, useInsertionEffect: Hu, useLayoutEffect: Vu, useMemo: Xu, useReducer: Ti, useRef: Bu, useState: function() {
    return Ti(ol);
  }, useDebugValue: Ai, useDeferredValue: function(e) {
    var t = zt();
    return Ze === null ? t.memoizedState = e : Zu(t, Ze.memoizedState, e);
  }, useTransition: function() {
    var e = Ti(ol)[0], t = zt().memoizedState;
    return [e, t];
  }, useMutableSource: Tu, useSyncExternalStore: Ou, useId: Gu, unstable_isNewReconciler: !1 };
  function Ut(e, t) {
    if (e && e.defaultProps) {
      t = P({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ii(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : P({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var ro = { isMounted: function(e) {
    return (e = e._reactInternals) ? It(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = ft(), l = Nn(e), o = un(r, l);
    o.payload = t, n != null && (o.callback = n), t = En(e, o, l), t !== null && (Ht(t, e, l, r), Zl(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = ft(), l = Nn(e), o = un(r, l);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = En(e, o, l), t !== null && (Ht(t, e, l, r), Zl(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = ft(), r = Nn(e), l = un(n, r);
    l.tag = 2, t != null && (l.callback = t), t = En(e, l, r), t !== null && (Ht(t, e, r, n), Zl(t, e, r));
  } };
  function ea(e, t, n, r, l, o, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Kr(n, r) || !Kr(l, o) : !0;
  }
  function ta(e, t, n) {
    var r = !1, l = xn, o = t.contextType;
    return typeof o == "object" && o !== null ? o = Pt(o) : (l = mt(t) ? $n : lt.current, r = t.contextTypes, o = (r = r != null) ? fr(e, l) : xn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ro, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function na(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ro.enqueueReplaceState(t, t.state, null);
  }
  function Fi(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Ei(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = Pt(o) : (o = mt(t) ? $n : lt.current, l.context = fr(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Ii(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && ro.enqueueReplaceState(l, l.state, null), Gl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function wr(e, t) {
    try {
      var n = "", r = t;
      do
        n += k(r), r = r.return;
      while (r);
      var l = n;
    } catch (o) {
      l = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Di(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function $i(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Qf = typeof WeakMap == "function" ? WeakMap : Map;
  function ra(e, t, n) {
    n = un(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      co || (co = !0, es = r), $i(e, t);
    }, n;
  }
  function la(e, t, n) {
    n = un(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        $i(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      $i(e, t), typeof r != "function" && (Cn === null ? Cn = /* @__PURE__ */ new Set([this]) : Cn.add(this));
      var i = t.stack;
      this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
    }), n;
  }
  function oa(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Qf();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = od.bind(null, e, t, n), t.then(e, e));
  }
  function ia(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function sa(e, t, n, r, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = un(-1, 1), t.tag = 2, En(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var Kf = ee.ReactCurrentOwner, vt = !1;
  function ct(e, t, n, r) {
    t.child = e === null ? Nu(t, null, n, r) : mr(t, e.child, n, r);
  }
  function ua(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return yr(t, l), r = Pi(e, t, n, r, o, l), n = zi(), e !== null && !vt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, an(e, t, l)) : (Fe && n && pi(t), t.flags |= 1, ct(e, t, r, l), t.child);
  }
  function aa(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !ss(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, ca(e, t, o, r, l)) : (e = yo(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, (e.lanes & l) === 0) {
      var i = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Kr, n(i, r) && e.ref === t.ref) return an(e, t, l);
    }
    return t.flags |= 1, e = Ln(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function ca(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Kr(o, r) && e.ref === t.ref) if (vt = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (vt = !0);
      else return t.lanes = e.lanes, an(e, t, l);
    }
    return Ui(e, t, n, r, l);
  }
  function fa(e, t, n) {
    var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ze(kr, jt), jt |= n;
    else {
      if ((n & 1073741824) === 0) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ze(kr, jt), jt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, ze(kr, jt), jt |= r;
    }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, ze(kr, jt), jt |= r;
    return ct(e, t, l, n), t.child;
  }
  function da(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Ui(e, t, n, r, l) {
    var o = mt(n) ? $n : lt.current;
    return o = fr(t, o), yr(t, l), n = Pi(e, t, n, r, o, l), r = zi(), e !== null && !vt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, an(e, t, l)) : (Fe && r && pi(t), t.flags |= 1, ct(e, t, n, l), t.child);
  }
  function pa(e, t, n, r, l) {
    if (mt(n)) {
      var o = !0;
      Bl(t);
    } else o = !1;
    if (yr(t, l), t.stateNode === null) oo(e, t), ta(t, n, r), Fi(t, n, r, l), r = !0;
    else if (e === null) {
      var i = t.stateNode, c = t.memoizedProps;
      i.props = c;
      var d = i.context, g = n.contextType;
      typeof g == "object" && g !== null ? g = Pt(g) : (g = mt(n) ? $n : lt.current, g = fr(t, g));
      var C = n.getDerivedStateFromProps, N = typeof C == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      N || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (c !== r || d !== g) && na(t, i, r, g), Sn = !1;
      var E = t.memoizedState;
      i.state = E, Gl(t, r, i, l), d = t.memoizedState, c !== r || E !== d || ht.current || Sn ? (typeof C == "function" && (Ii(t, n, C, r), d = t.memoizedState), (c = Sn || ea(t, n, c, r, E, d, g)) ? (N || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = d), i.props = r, i.state = d, i.context = g, r = c) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      i = t.stateNode, Lu(e, t), c = t.memoizedProps, g = t.type === t.elementType ? c : Ut(t.type, c), i.props = g, N = t.pendingProps, E = i.context, d = n.contextType, typeof d == "object" && d !== null ? d = Pt(d) : (d = mt(n) ? $n : lt.current, d = fr(t, d));
      var A = n.getDerivedStateFromProps;
      (C = typeof A == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (c !== N || E !== d) && na(t, i, r, d), Sn = !1, E = t.memoizedState, i.state = E, Gl(t, r, i, l);
      var U = t.memoizedState;
      c !== N || E !== U || ht.current || Sn ? (typeof A == "function" && (Ii(t, n, A, r), U = t.memoizedState), (g = Sn || ea(t, n, g, r, E, U, d) || !1) ? (C || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, U, d), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, U, d)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || c === e.memoizedProps && E === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && E === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = U), i.props = r, i.state = U, i.context = d, r = g) : (typeof i.componentDidUpdate != "function" || c === e.memoizedProps && E === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && E === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Bi(e, t, n, r, o, l);
  }
  function Bi(e, t, n, r, l, o) {
    da(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && gu(t, n, !1), an(e, t, o);
    r = t.stateNode, Kf.current = t;
    var c = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && i ? (t.child = mr(t, e.child, null, o), t.child = mr(t, null, c, o)) : ct(e, t, c, o), t.memoizedState = r.state, l && gu(t, n, !0), t.child;
  }
  function ha(e) {
    var t = e.stateNode;
    t.pendingContext ? vu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && vu(e, t.context, !1), _i(e, t.containerInfo);
  }
  function ma(e, t, n, r, l) {
    return hr(), yi(l), t.flags |= 256, ct(e, t, n, r), t.child;
  }
  var Wi = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Hi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function va(e, t, n) {
    var r = t.pendingProps, l = De.current, o = !1, i = (t.flags & 128) !== 0, c;
    if ((c = i) || (c = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), c ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), ze(De, l & 1), e === null)
      return vi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, (r & 1) === 0 && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = go(i, r, 0, null), e = Zn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Hi(n), t.memoizedState = Wi, e) : Vi(t, i));
    if (l = e.memoizedState, l !== null && (c = l.dehydrated, c !== null)) return Yf(e, t, i, r, c, l, n);
    if (o) {
      o = r.fallback, i = t.mode, l = e.child, c = l.sibling;
      var d = { mode: "hidden", children: r.children };
      return (i & 1) === 0 && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = d, t.deletions = null) : (r = Ln(l, d), r.subtreeFlags = l.subtreeFlags & 14680064), c !== null ? o = Ln(c, o) : (o = Zn(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Hi(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Wi, r;
    }
    return o = e.child, e = o.sibling, r = Ln(o, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Vi(e, t) {
    return t = go({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function lo(e, t, n, r) {
    return r !== null && yi(r), mr(t, e.child, null, n), e = Vi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Yf(e, t, n, r, l, o, i) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Di(Error(f(422))), lo(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = go({ mode: "visible", children: r.children }, l, 0, null), o = Zn(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, (t.mode & 1) !== 0 && mr(t, e.child, null, i), t.child.memoizedState = Hi(i), t.memoizedState = Wi, o);
    if ((t.mode & 1) === 0) return lo(e, t, i, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var c = r.dgst;
      return r = c, o = Error(f(419)), r = Di(o, r, void 0), lo(e, t, i, r);
    }
    if (c = (i & e.childLanes) !== 0, vt || c) {
      if (r = Je, r !== null) {
        switch (i & -i) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = (l & (r.suspendedLanes | i)) !== 0 ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, sn(e, l), Ht(r, e, l, -1));
      }
      return is(), r = Di(Error(f(421))), lo(e, t, i, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = id.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, Ct = gn(l.nextSibling), _t = t, Fe = !0, $t = null, e !== null && (Rt[Lt++] = ln, Rt[Lt++] = on, Rt[Lt++] = Un, ln = e.id, on = e.overflow, Un = t), t = Vi(t, r.children), t.flags |= 4096, t);
  }
  function ya(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ki(e.return, t, n);
  }
  function Qi(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
  }
  function ga(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, o = r.tail;
    if (ct(e, t, r.children, n), r = De.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ya(e, n, t);
        else if (e.tag === 19) ya(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (ze(De, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && ql(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Qi(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && ql(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Qi(t, !0, n, null, o);
        break;
      case "together":
        Qi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function oo(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function an(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Qn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(f(153));
    if (t.child !== null) {
      for (e = t.child, n = Ln(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Ln(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Xf(e, t, n) {
    switch (t.tag) {
      case 3:
        ha(t), hr();
        break;
      case 5:
        Mu(t);
        break;
      case 1:
        mt(t.type) && Bl(t);
        break;
      case 4:
        _i(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        ze(Yl, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (ze(De, De.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? va(e, t, n) : (ze(De, De.current & 1), e = an(e, t, n), e !== null ? e.sibling : null);
        ze(De, De.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return ga(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), ze(De, De.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, fa(e, t, n);
    }
    return an(e, t, n);
  }
  var wa, Ki, xa, ka;
  wa = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, Ki = function() {
  }, xa = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, Hn(Xt.current);
      var o = null;
      switch (n) {
        case "input":
          l = Xe(e, l), r = Xe(e, r), o = [];
          break;
        case "select":
          l = P({}, l, { value: void 0 }), r = P({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          l = Jt(e, l), r = Jt(e, r), o = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Dl);
      }
      tn(n, r);
      var i;
      n = null;
      for (g in l) if (!r.hasOwnProperty(g) && l.hasOwnProperty(g) && l[g] != null) if (g === "style") {
        var c = l[g];
        for (i in c) c.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
      } else g !== "dangerouslySetInnerHTML" && g !== "children" && g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && g !== "autoFocus" && (j.hasOwnProperty(g) ? o || (o = []) : (o = o || []).push(g, null));
      for (g in r) {
        var d = r[g];
        if (c = l?.[g], r.hasOwnProperty(g) && d !== c && (d != null || c != null)) if (g === "style") if (c) {
          for (i in c) !c.hasOwnProperty(i) || d && d.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
          for (i in d) d.hasOwnProperty(i) && c[i] !== d[i] && (n || (n = {}), n[i] = d[i]);
        } else n || (o || (o = []), o.push(
          g,
          n
        )), n = d;
        else g === "dangerouslySetInnerHTML" ? (d = d ? d.__html : void 0, c = c ? c.__html : void 0, d != null && c !== d && (o = o || []).push(g, d)) : g === "children" ? typeof d != "string" && typeof d != "number" || (o = o || []).push(g, "" + d) : g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && (j.hasOwnProperty(g) ? (d != null && g === "onScroll" && Oe("scroll", e), o || c === d || (o = [])) : (o = o || []).push(g, d));
      }
      n && (o = o || []).push("style", n);
      var g = o;
      (t.updateQueue = g) && (t.flags |= 4);
    }
  }, ka = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function sl(e, t) {
    if (!Fe) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function it(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Zf(e, t, n) {
    var r = t.pendingProps;
    switch (hi(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return it(t), null;
      case 1:
        return mt(t.type) && Ul(), it(t), null;
      case 3:
        return r = t.stateNode, gr(), Ae(ht), Ae(lt), Ni(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ql(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, $t !== null && (rs($t), $t = null))), Ki(e, t), it(t), null;
      case 5:
        Ci(t);
        var l = Hn(nl.current);
        if (n = t.type, e !== null && t.stateNode != null) xa(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(f(166));
            return it(t), null;
          }
          if (e = Hn(Xt.current), Ql(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[Yt] = t, r[qr] = o, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Oe("cancel", r), Oe("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Oe("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Xr.length; l++) Oe(Xr[l], r);
                break;
              case "source":
                Oe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Oe(
                  "error",
                  r
                ), Oe("load", r);
                break;
              case "details":
                Oe("toggle", r);
                break;
              case "input":
                Qe(r, o), Oe("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, Oe("invalid", r);
                break;
              case "textarea":
                kt(r, o), Oe("invalid", r);
            }
            tn(n, o), l = null;
            for (var i in o) if (o.hasOwnProperty(i)) {
              var c = o[i];
              i === "children" ? typeof c == "string" ? r.textContent !== c && (o.suppressHydrationWarning !== !0 && Fl(r.textContent, c, e), l = ["children", c]) : typeof c == "number" && r.textContent !== "" + c && (o.suppressHydrationWarning !== !0 && Fl(
                r.textContent,
                c,
                e
              ), l = ["children", "" + c]) : j.hasOwnProperty(i) && c != null && i === "onScroll" && Oe("scroll", r);
            }
            switch (n) {
              case "input":
                Re(r), Ke(r, o, !0);
                break;
              case "textarea":
                Re(r), Mn(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = Dl);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Tn(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Yt] = t, e[qr] = r, wa(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (i = In(n, r), n) {
                case "dialog":
                  Oe("cancel", e), Oe("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Oe("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < Xr.length; l++) Oe(Xr[l], e);
                  l = r;
                  break;
                case "source":
                  Oe("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  Oe(
                    "error",
                    e
                  ), Oe("load", e), l = r;
                  break;
                case "details":
                  Oe("toggle", e), l = r;
                  break;
                case "input":
                  Qe(e, r), l = Xe(e, r), Oe("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = P({}, r, { value: void 0 }), Oe("invalid", e);
                  break;
                case "textarea":
                  kt(e, r), l = Jt(e, r), Oe("invalid", e);
                  break;
                default:
                  l = r;
              }
              tn(n, l), c = l;
              for (o in c) if (c.hasOwnProperty(o)) {
                var d = c[o];
                o === "style" ? en(e, d) : o === "dangerouslySetInnerHTML" ? (d = d ? d.__html : void 0, d != null && qn(e, d)) : o === "children" ? typeof d == "string" ? (n !== "textarea" || d !== "") && St(e, d) : typeof d == "number" && St(e, "" + d) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (j.hasOwnProperty(o) ? d != null && o === "onScroll" && Oe("scroll", e) : d != null && Me(e, o, d, i));
              }
              switch (n) {
                case "input":
                  Re(e), Ke(e, r, !1);
                  break;
                case "textarea":
                  Re(e), Mn(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + G(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? xt(e, !!r.multiple, o, !1) : r.defaultValue != null && xt(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Dl);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return it(t), null;
      case 6:
        if (e && t.stateNode != null) ka(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(f(166));
          if (n = Hn(nl.current), Hn(Xt.current), Ql(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Yt] = t, (o = r.nodeValue !== n) && (e = _t, e !== null)) switch (e.tag) {
              case 3:
                Fl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Fl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            o && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Yt] = t, t.stateNode = r;
        }
        return it(t), null;
      case 13:
        if (Ae(De), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Fe && Ct !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) _u(), hr(), t.flags |= 98560, o = !1;
          else if (o = Ql(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(f(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(f(317));
              o[Yt] = t;
            } else hr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            it(t), o = !1;
          } else $t !== null && (rs($t), $t = null), o = !0;
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (De.current & 1) !== 0 ? Ge === 0 && (Ge = 3) : is())), t.updateQueue !== null && (t.flags |= 4), it(t), null);
      case 4:
        return gr(), Ki(e, t), e === null && Zr(t.stateNode.containerInfo), it(t), null;
      case 10:
        return xi(t.type._context), it(t), null;
      case 17:
        return mt(t.type) && Ul(), it(t), null;
      case 19:
        if (Ae(De), o = t.memoizedState, o === null) return it(t), null;
        if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) sl(o, !1);
        else {
          if (Ge !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (i = ql(e), i !== null) {
              for (t.flags |= 128, sl(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return ze(De, De.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && He() > Sr && (t.flags |= 128, r = !0, sl(o, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = ql(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), sl(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !Fe) return it(t), null;
          } else 2 * He() - o.renderingStartTime > Sr && n !== 1073741824 && (t.flags |= 128, r = !0, sl(o, !1), t.lanes = 4194304);
          o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = He(), t.sibling = null, n = De.current, ze(De, r ? n & 1 | 2 : n & 1), t) : (it(t), null);
      case 22:
      case 23:
        return os(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (jt & 1073741824) !== 0 && (it(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : it(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(f(156, t.tag));
  }
  function Gf(e, t) {
    switch (hi(t), t.tag) {
      case 1:
        return mt(t.type) && Ul(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return gr(), Ae(ht), Ae(lt), Ni(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Ci(t), null;
      case 13:
        if (Ae(De), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(f(340));
          hr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Ae(De), null;
      case 4:
        return gr(), null;
      case 10:
        return xi(t.type._context), null;
      case 22:
      case 23:
        return os(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var io = !1, st = !1, qf = typeof WeakSet == "function" ? WeakSet : Set, D = null;
  function xr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      Ue(e, t, r);
    }
    else n.current = null;
  }
  function Yi(e, t, n) {
    try {
      n();
    } catch (r) {
      Ue(e, t, r);
    }
  }
  var Sa = !1;
  function Jf(e, t) {
    if (oi = jl, e = eu(), qo(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0, c = -1, d = -1, g = 0, C = 0, N = e, E = null;
          t: for (; ; ) {
            for (var A; N !== n || l !== 0 && N.nodeType !== 3 || (c = i + l), N !== o || r !== 0 && N.nodeType !== 3 || (d = i + r), N.nodeType === 3 && (i += N.nodeValue.length), (A = N.firstChild) !== null; )
              E = N, N = A;
            for (; ; ) {
              if (N === e) break t;
              if (E === n && ++g === l && (c = i), E === o && ++C === r && (d = i), (A = N.nextSibling) !== null) break;
              N = E, E = N.parentNode;
            }
            N = A;
          }
          n = c === -1 || d === -1 ? null : { start: c, end: d };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (ii = { focusedElem: e, selectionRange: n }, jl = !1, D = t; D !== null; ) if (t = D, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, D = e;
    else for (; D !== null; ) {
      t = D;
      try {
        var U = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (U !== null) {
              var W = U.memoizedProps, Ve = U.memoizedState, v = t.stateNode, p = v.getSnapshotBeforeUpdate(t.elementType === t.type ? W : Ut(t.type, W), Ve);
              v.__reactInternalSnapshotBeforeUpdate = p;
            }
            break;
          case 3:
            var y = t.stateNode.containerInfo;
            y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(f(163));
        }
      } catch (R) {
        Ue(t, t.return, R);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, D = e;
        break;
      }
      D = t.return;
    }
    return U = Sa, Sa = !1, U;
  }
  function ul(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          l.destroy = void 0, o !== void 0 && Yi(t, n, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function so(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Xi(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Ea(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Ea(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Yt], delete t[qr], delete t[ci], delete t[Of], delete t[Af])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function _a(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Ca(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || _a(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Zi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Dl));
    else if (r !== 4 && (e = e.child, e !== null)) for (Zi(e, t, n), e = e.sibling; e !== null; ) Zi(e, t, n), e = e.sibling;
  }
  function Gi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (Gi(e, t, n), e = e.sibling; e !== null; ) Gi(e, t, n), e = e.sibling;
  }
  var et = null, Bt = !1;
  function _n(e, t, n) {
    for (n = n.child; n !== null; ) ja(e, t, n), n = n.sibling;
  }
  function ja(e, t, n) {
    if (Kt && typeof Kt.onCommitFiberUnmount == "function") try {
      Kt.onCommitFiberUnmount(xl, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        st || xr(n, t);
      case 6:
        var r = et, l = Bt;
        et = null, _n(e, t, n), et = r, Bt = l, et !== null && (Bt ? (e = et, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : et.removeChild(n.stateNode));
        break;
      case 18:
        et !== null && (Bt ? (e = et, n = n.stateNode, e.nodeType === 8 ? ai(e.parentNode, n) : e.nodeType === 1 && ai(e, n), Ur(e)) : ai(et, n.stateNode));
        break;
      case 4:
        r = et, l = Bt, et = n.stateNode.containerInfo, Bt = !0, _n(e, t, n), et = r, Bt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!st && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var o = l, i = o.destroy;
            o = o.tag, i !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && Yi(n, t, i), l = l.next;
          } while (l !== r);
        }
        _n(e, t, n);
        break;
      case 1:
        if (!st && (xr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (c) {
          Ue(n, t, c);
        }
        _n(e, t, n);
        break;
      case 21:
        _n(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (st = (r = st) || n.memoizedState !== null, _n(e, t, n), st = r) : _n(e, t, n);
        break;
      default:
        _n(e, t, n);
    }
  }
  function Na(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new qf()), t.forEach(function(r) {
        var l = sd.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function Wt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e, i = t, c = i;
        e: for (; c !== null; ) {
          switch (c.tag) {
            case 5:
              et = c.stateNode, Bt = !1;
              break e;
            case 3:
              et = c.stateNode.containerInfo, Bt = !0;
              break e;
            case 4:
              et = c.stateNode.containerInfo, Bt = !0;
              break e;
          }
          c = c.return;
        }
        if (et === null) throw Error(f(160));
        ja(o, i, l), et = null, Bt = !1;
        var d = l.alternate;
        d !== null && (d.return = null), l.return = null;
      } catch (g) {
        Ue(l, t, g);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Ra(t, e), t = t.sibling;
  }
  function Ra(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Wt(t, e), Gt(e), r & 4) {
          try {
            ul(3, e, e.return), so(3, e);
          } catch (W) {
            Ue(e, e.return, W);
          }
          try {
            ul(5, e, e.return);
          } catch (W) {
            Ue(e, e.return, W);
          }
        }
        break;
      case 1:
        Wt(t, e), Gt(e), r & 512 && n !== null && xr(n, n.return);
        break;
      case 5:
        if (Wt(t, e), Gt(e), r & 512 && n !== null && xr(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            St(l, "");
          } catch (W) {
            Ue(e, e.return, W);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, c = e.type, d = e.updateQueue;
          if (e.updateQueue = null, d !== null) try {
            c === "input" && o.type === "radio" && o.name != null && qt(l, o), In(c, i);
            var g = In(c, o);
            for (i = 0; i < d.length; i += 2) {
              var C = d[i], N = d[i + 1];
              C === "style" ? en(l, N) : C === "dangerouslySetInnerHTML" ? qn(l, N) : C === "children" ? St(l, N) : Me(l, C, N, g);
            }
            switch (c) {
              case "input":
                he(l, o);
                break;
              case "textarea":
                bt(l, o);
                break;
              case "select":
                var E = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var A = o.value;
                A != null ? xt(l, !!o.multiple, A, !1) : E !== !!o.multiple && (o.defaultValue != null ? xt(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : xt(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[qr] = o;
          } catch (W) {
            Ue(e, e.return, W);
          }
        }
        break;
      case 6:
        if (Wt(t, e), Gt(e), r & 4) {
          if (e.stateNode === null) throw Error(f(162));
          l = e.stateNode, o = e.memoizedProps;
          try {
            l.nodeValue = o;
          } catch (W) {
            Ue(e, e.return, W);
          }
        }
        break;
      case 3:
        if (Wt(t, e), Gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Ur(t.containerInfo);
        } catch (W) {
          Ue(e, e.return, W);
        }
        break;
      case 4:
        Wt(t, e), Gt(e);
        break;
      case 13:
        Wt(t, e), Gt(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (bi = He())), r & 4 && Na(e);
        break;
      case 22:
        if (C = n !== null && n.memoizedState !== null, e.mode & 1 ? (st = (g = st) || C, Wt(t, e), st = g) : Wt(t, e), Gt(e), r & 8192) {
          if (g = e.memoizedState !== null, (e.stateNode.isHidden = g) && !C && (e.mode & 1) !== 0) for (D = e, C = e.child; C !== null; ) {
            for (N = D = C; D !== null; ) {
              switch (E = D, A = E.child, E.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ul(4, E, E.return);
                  break;
                case 1:
                  xr(E, E.return);
                  var U = E.stateNode;
                  if (typeof U.componentWillUnmount == "function") {
                    r = E, n = E.return;
                    try {
                      t = r, U.props = t.memoizedProps, U.state = t.memoizedState, U.componentWillUnmount();
                    } catch (W) {
                      Ue(r, n, W);
                    }
                  }
                  break;
                case 5:
                  xr(E, E.return);
                  break;
                case 22:
                  if (E.memoizedState !== null) {
                    za(N);
                    continue;
                  }
              }
              A !== null ? (A.return = E, D = A) : za(N);
            }
            C = C.sibling;
          }
          e: for (C = null, N = e; ; ) {
            if (N.tag === 5) {
              if (C === null) {
                C = N;
                try {
                  l = N.stateNode, g ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (c = N.stateNode, d = N.memoizedProps.style, i = d != null && d.hasOwnProperty("display") ? d.display : null, c.style.display = Nr("display", i));
                } catch (W) {
                  Ue(e, e.return, W);
                }
              }
            } else if (N.tag === 6) {
              if (C === null) try {
                N.stateNode.nodeValue = g ? "" : N.memoizedProps;
              } catch (W) {
                Ue(e, e.return, W);
              }
            } else if ((N.tag !== 22 && N.tag !== 23 || N.memoizedState === null || N === e) && N.child !== null) {
              N.child.return = N, N = N.child;
              continue;
            }
            if (N === e) break e;
            for (; N.sibling === null; ) {
              if (N.return === null || N.return === e) break e;
              C === N && (C = null), N = N.return;
            }
            C === N && (C = null), N.sibling.return = N.return, N = N.sibling;
          }
        }
        break;
      case 19:
        Wt(t, e), Gt(e), r & 4 && Na(e);
        break;
      case 21:
        break;
      default:
        Wt(
          t,
          e
        ), Gt(e);
    }
  }
  function Gt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (_a(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(f(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (St(l, ""), r.flags &= -33);
            var o = Ca(e);
            Gi(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo, c = Ca(e);
            Zi(e, c, i);
            break;
          default:
            throw Error(f(161));
        }
      } catch (d) {
        Ue(e, e.return, d);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function bf(e, t, n) {
    D = e, La(e);
  }
  function La(e, t, n) {
    for (var r = (e.mode & 1) !== 0; D !== null; ) {
      var l = D, o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || io;
        if (!i) {
          var c = l.alternate, d = c !== null && c.memoizedState !== null || st;
          c = io;
          var g = st;
          if (io = i, (st = d) && !g) for (D = l; D !== null; ) i = D, d = i.child, i.tag === 22 && i.memoizedState !== null ? Ma(l) : d !== null ? (d.return = i, D = d) : Ma(l);
          for (; o !== null; ) D = o, La(o), o = o.sibling;
          D = l, io = c, st = g;
        }
        Pa(e);
      } else (l.subtreeFlags & 8772) !== 0 && o !== null ? (o.return = l, D = o) : Pa(e);
    }
  }
  function Pa(e) {
    for (; D !== null; ) {
      var t = D;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              st || so(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !st) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : Ut(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var o = t.updateQueue;
              o !== null && zu(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                zu(t, i, n);
              }
              break;
            case 5:
              var c = t.stateNode;
              if (n === null && t.flags & 4) {
                n = c;
                var d = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    d.autoFocus && n.focus();
                    break;
                  case "img":
                    d.src && (n.src = d.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var g = t.alternate;
                if (g !== null) {
                  var C = g.memoizedState;
                  if (C !== null) {
                    var N = C.dehydrated;
                    N !== null && Ur(N);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(f(163));
          }
          st || t.flags & 512 && Xi(t);
        } catch (E) {
          Ue(t, t.return, E);
        }
      }
      if (t === e) {
        D = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, D = n;
        break;
      }
      D = t.return;
    }
  }
  function za(e) {
    for (; D !== null; ) {
      var t = D;
      if (t === e) {
        D = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, D = n;
        break;
      }
      D = t.return;
    }
  }
  function Ma(e) {
    for (; D !== null; ) {
      var t = D;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              so(4, t);
            } catch (d) {
              Ue(t, n, d);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (d) {
                Ue(t, l, d);
              }
            }
            var o = t.return;
            try {
              Xi(t);
            } catch (d) {
              Ue(t, o, d);
            }
            break;
          case 5:
            var i = t.return;
            try {
              Xi(t);
            } catch (d) {
              Ue(t, i, d);
            }
        }
      } catch (d) {
        Ue(t, t.return, d);
      }
      if (t === e) {
        D = null;
        break;
      }
      var c = t.sibling;
      if (c !== null) {
        c.return = t.return, D = c;
        break;
      }
      D = t.return;
    }
  }
  var ed = Math.ceil, uo = ee.ReactCurrentDispatcher, qi = ee.ReactCurrentOwner, Mt = ee.ReactCurrentBatchConfig, ye = 0, Je = null, Ye = null, tt = 0, jt = 0, kr = wn(0), Ge = 0, al = null, Qn = 0, ao = 0, Ji = 0, cl = null, yt = null, bi = 0, Sr = 1 / 0, cn = null, co = !1, es = null, Cn = null, fo = !1, jn = null, po = 0, fl = 0, ts = null, ho = -1, mo = 0;
  function ft() {
    return (ye & 6) !== 0 ? He() : ho !== -1 ? ho : ho = He();
  }
  function Nn(e) {
    return (e.mode & 1) === 0 ? 1 : (ye & 2) !== 0 && tt !== 0 ? tt & -tt : Ff.transition !== null ? (mo === 0 && (mo = Cs()), mo) : (e = je, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Os(e.type)), e);
  }
  function Ht(e, t, n, r) {
    if (50 < fl) throw fl = 0, ts = null, Error(f(185));
    Ar(e, n, r), ((ye & 2) === 0 || e !== Je) && (e === Je && ((ye & 2) === 0 && (ao |= n), Ge === 4 && Rn(e, tt)), gt(e, r), n === 1 && ye === 0 && (t.mode & 1) === 0 && (Sr = He() + 500, Wl && kn()));
  }
  function gt(e, t) {
    var n = e.callbackNode;
    Ic(e, t);
    var r = El(e, e === Je ? tt : 0);
    if (r === 0) n !== null && Ie(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Ie(n), t === 1) e.tag === 0 ? If(Oa.bind(null, e)) : wu(Oa.bind(null, e)), Mf(function() {
        (ye & 6) === 0 && kn();
      }), n = null;
      else {
        switch (js(r)) {
          case 1:
            n = Oo;
            break;
          case 4:
            n = Es;
            break;
          case 16:
            n = wl;
            break;
          case 536870912:
            n = _s;
            break;
          default:
            n = wl;
        }
        n = Wa(n, Ta.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Ta(e, t) {
    if (ho = -1, mo = 0, (ye & 6) !== 0) throw Error(f(327));
    var n = e.callbackNode;
    if (Er() && e.callbackNode !== n) return null;
    var r = El(e, e === Je ? tt : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = vo(e, r);
    else {
      t = r;
      var l = ye;
      ye |= 2;
      var o = Ia();
      (Je !== e || tt !== t) && (cn = null, Sr = He() + 500, Yn(e, t));
      do
        try {
          rd();
          break;
        } catch (c) {
          Aa(e, c);
        }
      while (!0);
      wi(), uo.current = o, ye = l, Ye !== null ? t = 0 : (Je = null, tt = 0, t = Ge);
    }
    if (t !== 0) {
      if (t === 2 && (l = Ao(e), l !== 0 && (r = l, t = ns(e, l))), t === 1) throw n = al, Yn(e, 0), Rn(e, r), gt(e, He()), n;
      if (t === 6) Rn(e, r);
      else {
        if (l = e.current.alternate, (r & 30) === 0 && !td(l) && (t = vo(e, r), t === 2 && (o = Ao(e), o !== 0 && (r = o, t = ns(e, o))), t === 1)) throw n = al, Yn(e, 0), Rn(e, r), gt(e, He()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(f(345));
          case 2:
            Xn(e, yt, cn);
            break;
          case 3:
            if (Rn(e, r), (r & 130023424) === r && (t = bi + 500 - He(), 10 < t)) {
              if (El(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                ft(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = ui(Xn.bind(null, e, yt, cn), t);
              break;
            }
            Xn(e, yt, cn);
            break;
          case 4:
            if (Rn(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - Ft(r);
              o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
            }
            if (r = l, r = He() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ed(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = ui(Xn.bind(null, e, yt, cn), r);
              break;
            }
            Xn(e, yt, cn);
            break;
          case 5:
            Xn(e, yt, cn);
            break;
          default:
            throw Error(f(329));
        }
      }
    }
    return gt(e, He()), e.callbackNode === n ? Ta.bind(null, e) : null;
  }
  function ns(e, t) {
    var n = cl;
    return e.current.memoizedState.isDehydrated && (Yn(e, t).flags |= 256), e = vo(e, t), e !== 2 && (t = yt, yt = n, t !== null && rs(t)), e;
  }
  function rs(e) {
    yt === null ? yt = e : yt.push.apply(yt, e);
  }
  function td(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!Dt(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Rn(e, t) {
    for (t &= ~Ji, t &= ~ao, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Ft(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Oa(e) {
    if ((ye & 6) !== 0) throw Error(f(327));
    Er();
    var t = El(e, 0);
    if ((t & 1) === 0) return gt(e, He()), null;
    var n = vo(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Ao(e);
      r !== 0 && (t = r, n = ns(e, r));
    }
    if (n === 1) throw n = al, Yn(e, 0), Rn(e, t), gt(e, He()), n;
    if (n === 6) throw Error(f(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Xn(e, yt, cn), gt(e, He()), null;
  }
  function ls(e, t) {
    var n = ye;
    ye |= 1;
    try {
      return e(t);
    } finally {
      ye = n, ye === 0 && (Sr = He() + 500, Wl && kn());
    }
  }
  function Kn(e) {
    jn !== null && jn.tag === 0 && (ye & 6) === 0 && Er();
    var t = ye;
    ye |= 1;
    var n = Mt.transition, r = je;
    try {
      if (Mt.transition = null, je = 1, e) return e();
    } finally {
      je = r, Mt.transition = n, ye = t, (ye & 6) === 0 && kn();
    }
  }
  function os() {
    jt = kr.current, Ae(kr);
  }
  function Yn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, zf(n)), Ye !== null) for (n = Ye.return; n !== null; ) {
      var r = n;
      switch (hi(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Ul();
          break;
        case 3:
          gr(), Ae(ht), Ae(lt), Ni();
          break;
        case 5:
          Ci(r);
          break;
        case 4:
          gr();
          break;
        case 13:
          Ae(De);
          break;
        case 19:
          Ae(De);
          break;
        case 10:
          xi(r.type._context);
          break;
        case 22:
        case 23:
          os();
      }
      n = n.return;
    }
    if (Je = e, Ye = e = Ln(e.current, null), tt = jt = t, Ge = 0, al = null, Ji = ao = Qn = 0, yt = cl = null, Wn !== null) {
      for (t = 0; t < Wn.length; t++) if (n = Wn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, o = n.pending;
        if (o !== null) {
          var i = o.next;
          o.next = l, r.next = i;
        }
        n.pending = r;
      }
      Wn = null;
    }
    return e;
  }
  function Aa(e, t) {
    do {
      var n = Ye;
      try {
        if (wi(), Jl.current = no, bl) {
          for (var r = $e.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          bl = !1;
        }
        if (Vn = 0, qe = Ze = $e = null, rl = !1, ll = 0, qi.current = null, n === null || n.return === null) {
          Ge = 1, al = t, Ye = null;
          break;
        }
        e: {
          var o = e, i = n.return, c = n, d = t;
          if (t = tt, c.flags |= 32768, d !== null && typeof d == "object" && typeof d.then == "function") {
            var g = d, C = c, N = C.tag;
            if ((C.mode & 1) === 0 && (N === 0 || N === 11 || N === 15)) {
              var E = C.alternate;
              E ? (C.updateQueue = E.updateQueue, C.memoizedState = E.memoizedState, C.lanes = E.lanes) : (C.updateQueue = null, C.memoizedState = null);
            }
            var A = ia(i);
            if (A !== null) {
              A.flags &= -257, sa(A, i, c, o, t), A.mode & 1 && oa(o, g, t), t = A, d = g;
              var U = t.updateQueue;
              if (U === null) {
                var W = /* @__PURE__ */ new Set();
                W.add(d), t.updateQueue = W;
              } else U.add(d);
              break e;
            } else {
              if ((t & 1) === 0) {
                oa(o, g, t), is();
                break e;
              }
              d = Error(f(426));
            }
          } else if (Fe && c.mode & 1) {
            var Ve = ia(i);
            if (Ve !== null) {
              (Ve.flags & 65536) === 0 && (Ve.flags |= 256), sa(Ve, i, c, o, t), yi(wr(d, c));
              break e;
            }
          }
          o = d = wr(d, c), Ge !== 4 && (Ge = 2), cl === null ? cl = [o] : cl.push(o), o = i;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var v = ra(o, d, t);
                Pu(o, v);
                break e;
              case 1:
                c = d;
                var p = o.type, y = o.stateNode;
                if ((o.flags & 128) === 0 && (typeof p.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Cn === null || !Cn.has(y)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var R = la(o, c, t);
                  Pu(o, R);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Da(n);
      } catch (V) {
        t = V, Ye === n && n !== null && (Ye = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Ia() {
    var e = uo.current;
    return uo.current = no, e === null ? no : e;
  }
  function is() {
    (Ge === 0 || Ge === 3 || Ge === 2) && (Ge = 4), Je === null || (Qn & 268435455) === 0 && (ao & 268435455) === 0 || Rn(Je, tt);
  }
  function vo(e, t) {
    var n = ye;
    ye |= 2;
    var r = Ia();
    (Je !== e || tt !== t) && (cn = null, Yn(e, t));
    do
      try {
        nd();
        break;
      } catch (l) {
        Aa(e, l);
      }
    while (!0);
    if (wi(), ye = n, uo.current = r, Ye !== null) throw Error(f(261));
    return Je = null, tt = 0, Ge;
  }
  function nd() {
    for (; Ye !== null; ) Fa(Ye);
  }
  function rd() {
    for (; Ye !== null && !pt(); ) Fa(Ye);
  }
  function Fa(e) {
    var t = Ba(e.alternate, e, jt);
    e.memoizedProps = e.pendingProps, t === null ? Da(e) : Ye = t, qi.current = null;
  }
  function Da(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Zf(n, t, jt), n !== null) {
          Ye = n;
          return;
        }
      } else {
        if (n = Gf(n, t), n !== null) {
          n.flags &= 32767, Ye = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Ge = 6, Ye = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        Ye = t;
        return;
      }
      Ye = t = e;
    } while (t !== null);
    Ge === 0 && (Ge = 5);
  }
  function Xn(e, t, n) {
    var r = je, l = Mt.transition;
    try {
      Mt.transition = null, je = 1, ld(e, t, n, r);
    } finally {
      Mt.transition = l, je = r;
    }
    return null;
  }
  function ld(e, t, n, r) {
    do
      Er();
    while (jn !== null);
    if ((ye & 6) !== 0) throw Error(f(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(f(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Fc(e, o), e === Je && (Ye = Je = null, tt = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || fo || (fo = !0, Wa(wl, function() {
      return Er(), null;
    })), o = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || o) {
      o = Mt.transition, Mt.transition = null;
      var i = je;
      je = 1;
      var c = ye;
      ye |= 4, qi.current = null, Jf(e, n), Ra(n, e), _f(ii), jl = !!oi, ii = oi = null, e.current = n, bf(n), tr(), ye = c, je = i, Mt.transition = o;
    } else e.current = n;
    if (fo && (fo = !1, jn = e, po = l), o = e.pendingLanes, o === 0 && (Cn = null), zc(n.stateNode), gt(e, He()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (co) throw co = !1, e = es, es = null, e;
    return (po & 1) !== 0 && e.tag !== 0 && Er(), o = e.pendingLanes, (o & 1) !== 0 ? e === ts ? fl++ : (fl = 0, ts = e) : fl = 0, kn(), null;
  }
  function Er() {
    if (jn !== null) {
      var e = js(po), t = Mt.transition, n = je;
      try {
        if (Mt.transition = null, je = 16 > e ? 16 : e, jn === null) var r = !1;
        else {
          if (e = jn, jn = null, po = 0, (ye & 6) !== 0) throw Error(f(331));
          var l = ye;
          for (ye |= 4, D = e.current; D !== null; ) {
            var o = D, i = o.child;
            if ((D.flags & 16) !== 0) {
              var c = o.deletions;
              if (c !== null) {
                for (var d = 0; d < c.length; d++) {
                  var g = c[d];
                  for (D = g; D !== null; ) {
                    var C = D;
                    switch (C.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ul(8, C, o);
                    }
                    var N = C.child;
                    if (N !== null) N.return = C, D = N;
                    else for (; D !== null; ) {
                      C = D;
                      var E = C.sibling, A = C.return;
                      if (Ea(C), C === g) {
                        D = null;
                        break;
                      }
                      if (E !== null) {
                        E.return = A, D = E;
                        break;
                      }
                      D = A;
                    }
                  }
                }
                var U = o.alternate;
                if (U !== null) {
                  var W = U.child;
                  if (W !== null) {
                    U.child = null;
                    do {
                      var Ve = W.sibling;
                      W.sibling = null, W = Ve;
                    } while (W !== null);
                  }
                }
                D = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && i !== null) i.return = o, D = i;
            else e: for (; D !== null; ) {
              if (o = D, (o.flags & 2048) !== 0) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  ul(9, o, o.return);
              }
              var v = o.sibling;
              if (v !== null) {
                v.return = o.return, D = v;
                break e;
              }
              D = o.return;
            }
          }
          var p = e.current;
          for (D = p; D !== null; ) {
            i = D;
            var y = i.child;
            if ((i.subtreeFlags & 2064) !== 0 && y !== null) y.return = i, D = y;
            else e: for (i = p; D !== null; ) {
              if (c = D, (c.flags & 2048) !== 0) try {
                switch (c.tag) {
                  case 0:
                  case 11:
                  case 15:
                    so(9, c);
                }
              } catch (V) {
                Ue(c, c.return, V);
              }
              if (c === i) {
                D = null;
                break e;
              }
              var R = c.sibling;
              if (R !== null) {
                R.return = c.return, D = R;
                break e;
              }
              D = c.return;
            }
          }
          if (ye = l, kn(), Kt && typeof Kt.onPostCommitFiberRoot == "function") try {
            Kt.onPostCommitFiberRoot(xl, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        je = n, Mt.transition = t;
      }
    }
    return !1;
  }
  function $a(e, t, n) {
    t = wr(n, t), t = ra(e, t, 1), e = En(e, t, 1), t = ft(), e !== null && (Ar(e, 1, t), gt(e, t));
  }
  function Ue(e, t, n) {
    if (e.tag === 3) $a(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        $a(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Cn === null || !Cn.has(r))) {
          e = wr(n, e), e = la(t, e, 1), t = En(t, e, 1), e = ft(), t !== null && (Ar(t, 1, e), gt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function od(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = ft(), e.pingedLanes |= e.suspendedLanes & n, Je === e && (tt & n) === n && (Ge === 4 || Ge === 3 && (tt & 130023424) === tt && 500 > He() - bi ? Yn(e, 0) : Ji |= n), gt(e, t);
  }
  function Ua(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Sl, Sl <<= 1, (Sl & 130023424) === 0 && (Sl = 4194304)));
    var n = ft();
    e = sn(e, t), e !== null && (Ar(e, t, n), gt(e, n));
  }
  function id(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Ua(e, n);
  }
  function sd(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(f(314));
    }
    r !== null && r.delete(t), Ua(e, n);
  }
  var Ba;
  Ba = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || ht.current) vt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return vt = !1, Xf(e, t, n);
      vt = (e.flags & 131072) !== 0;
    }
    else vt = !1, Fe && (t.flags & 1048576) !== 0 && xu(t, Vl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        oo(e, t), e = t.pendingProps;
        var l = fr(t, lt.current);
        yr(t, n), l = Pi(null, t, r, e, l, n);
        var o = zi();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, mt(r) ? (o = !0, Bl(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ei(t), l.updater = ro, t.stateNode = l, l._reactInternals = t, Fi(t, r, e, n), t = Bi(null, t, r, !0, o, n)) : (t.tag = 0, Fe && o && pi(t), ct(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (oo(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = ad(r), e = Ut(r, e), l) {
            case 0:
              t = Ui(null, t, r, e, n);
              break e;
            case 1:
              t = pa(null, t, r, e, n);
              break e;
            case 11:
              t = ua(null, t, r, e, n);
              break e;
            case 14:
              t = aa(null, t, r, Ut(r.type, e), n);
              break e;
          }
          throw Error(f(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ut(r, l), Ui(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ut(r, l), pa(e, t, r, l, n);
      case 3:
        e: {
          if (ha(t), e === null) throw Error(f(387));
          r = t.pendingProps, o = t.memoizedState, l = o.element, Lu(e, t), Gl(t, r, null, n);
          var i = t.memoizedState;
          if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = wr(Error(f(423)), t), t = ma(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = wr(Error(f(424)), t), t = ma(e, t, r, n, l);
            break e;
          } else for (Ct = gn(t.stateNode.containerInfo.firstChild), _t = t, Fe = !0, $t = null, n = Nu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (hr(), r === l) {
              t = an(e, t, n);
              break e;
            }
            ct(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Mu(t), e === null && vi(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, si(r, l) ? i = null : o !== null && si(r, o) && (t.flags |= 32), da(e, t), ct(e, t, i, n), t.child;
      case 6:
        return e === null && vi(t), null;
      case 13:
        return va(e, t, n);
      case 4:
        return _i(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = mr(t, null, r, n) : ct(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ut(r, l), ua(e, t, r, l, n);
      case 7:
        return ct(e, t, t.pendingProps, n), t.child;
      case 8:
        return ct(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return ct(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, ze(Yl, r._currentValue), r._currentValue = i, o !== null) if (Dt(o.value, i)) {
            if (o.children === l.children && !ht.current) {
              t = an(e, t, n);
              break e;
            }
          } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
            var c = o.dependencies;
            if (c !== null) {
              i = o.child;
              for (var d = c.firstContext; d !== null; ) {
                if (d.context === r) {
                  if (o.tag === 1) {
                    d = un(-1, n & -n), d.tag = 2;
                    var g = o.updateQueue;
                    if (g !== null) {
                      g = g.shared;
                      var C = g.pending;
                      C === null ? d.next = d : (d.next = C.next, C.next = d), g.pending = d;
                    }
                  }
                  o.lanes |= n, d = o.alternate, d !== null && (d.lanes |= n), ki(
                    o.return,
                    n,
                    t
                  ), c.lanes |= n;
                  break;
                }
                d = d.next;
              }
            } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
            else if (o.tag === 18) {
              if (i = o.return, i === null) throw Error(f(341));
              i.lanes |= n, c = i.alternate, c !== null && (c.lanes |= n), ki(i, n, t), i = o.sibling;
            } else i = o.child;
            if (i !== null) i.return = o;
            else for (i = o; i !== null; ) {
              if (i === t) {
                i = null;
                break;
              }
              if (o = i.sibling, o !== null) {
                o.return = i.return, i = o;
                break;
              }
              i = i.return;
            }
            o = i;
          }
          ct(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, yr(t, n), l = Pt(l), r = r(l), t.flags |= 1, ct(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = Ut(r, t.pendingProps), l = Ut(r.type, l), aa(e, t, r, l, n);
      case 15:
        return ca(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ut(r, l), oo(e, t), t.tag = 1, mt(r) ? (e = !0, Bl(t)) : e = !1, yr(t, n), ta(t, r, l), Fi(t, r, l, n), Bi(null, t, r, !0, e, n);
      case 19:
        return ga(e, t, n);
      case 22:
        return fa(e, t, n);
    }
    throw Error(f(156, t.tag));
  };
  function Wa(e, t) {
    return Tr(e, t);
  }
  function ud(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Tt(e, t, n, r) {
    return new ud(e, t, n, r);
  }
  function ss(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ad(e) {
    if (typeof e == "function") return ss(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Te) return 11;
      if (e === We) return 14;
    }
    return 2;
  }
  function Ln(e, t) {
    var n = e.alternate;
    return n === null ? (n = Tt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function yo(e, t, n, r, l, o) {
    var i = 2;
    if (r = e, typeof e == "function") ss(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
      case Se:
        return Zn(n.children, l, o, t);
      case M:
        i = 8, l |= 8;
        break;
      case Be:
        return e = Tt(12, n, t, l | 2), e.elementType = Be, e.lanes = o, e;
      case pe:
        return e = Tt(13, n, t, l), e.elementType = pe, e.lanes = o, e;
      case Ee:
        return e = Tt(19, n, t, l), e.elementType = Ee, e.lanes = o, e;
      case se:
        return go(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case ve:
            i = 10;
            break e;
          case ge:
            i = 9;
            break e;
          case Te:
            i = 11;
            break e;
          case We:
            i = 14;
            break e;
          case Ne:
            i = 16, r = null;
            break e;
        }
        throw Error(f(130, e == null ? e : typeof e, ""));
    }
    return t = Tt(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function Zn(e, t, n, r) {
    return e = Tt(7, e, r, t), e.lanes = n, e;
  }
  function go(e, t, n, r) {
    return e = Tt(22, e, r, t), e.elementType = se, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function us(e, t, n) {
    return e = Tt(6, e, null, t), e.lanes = n, e;
  }
  function as(e, t, n) {
    return t = Tt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function cd(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Io(0), this.expirationTimes = Io(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Io(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function cs(e, t, n, r, l, o, i, c, d) {
    return e = new cd(e, t, n, c, d), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Tt(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ei(o), e;
  }
  function fd(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: de, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Ha(e) {
    if (!e) return xn;
    e = e._reactInternals;
    e: {
      if (It(e) !== e || e.tag !== 1) throw Error(f(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (mt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(f(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (mt(n)) return yu(e, n, t);
    }
    return t;
  }
  function Va(e, t, n, r, l, o, i, c, d) {
    return e = cs(n, r, !0, e, l, o, i, c, d), e.context = Ha(null), n = e.current, r = ft(), l = Nn(n), o = un(r, l), o.callback = t ?? null, En(n, o, l), e.current.lanes = l, Ar(e, l, r), gt(e, r), e;
  }
  function wo(e, t, n, r) {
    var l = t.current, o = ft(), i = Nn(l);
    return n = Ha(n), t.context === null ? t.context = n : t.pendingContext = n, t = un(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = En(l, t, i), e !== null && (Ht(e, l, i, o), Zl(e, l, i)), i;
  }
  function xo(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Qa(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function fs(e, t) {
    Qa(e, t), (e = e.alternate) && Qa(e, t);
  }
  function dd() {
    return null;
  }
  var Ka = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function ds(e) {
    this._internalRoot = e;
  }
  ko.prototype.render = ds.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(f(409));
    wo(e, t, null, null);
  }, ko.prototype.unmount = ds.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Kn(function() {
        wo(null, e, null, null);
      }), t[nn] = null;
    }
  };
  function ko(e) {
    this._internalRoot = e;
  }
  ko.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ls();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < mn.length && t !== 0 && t < mn[n].priority; n++) ;
      mn.splice(n, 0, e), n === 0 && Ms(e);
    }
  };
  function ps(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function So(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Ya() {
  }
  function pd(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var g = xo(i);
          o.call(g);
        };
      }
      var i = Va(t, r, e, 0, null, !1, !1, "", Ya);
      return e._reactRootContainer = i, e[nn] = i.current, Zr(e.nodeType === 8 ? e.parentNode : e), Kn(), i;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var c = r;
      r = function() {
        var g = xo(d);
        c.call(g);
      };
    }
    var d = cs(e, 0, !1, null, null, !1, !1, "", Ya);
    return e._reactRootContainer = d, e[nn] = d.current, Zr(e.nodeType === 8 ? e.parentNode : e), Kn(function() {
      wo(t, d, n, r);
    }), d;
  }
  function Eo(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof l == "function") {
        var c = l;
        l = function() {
          var d = xo(i);
          c.call(d);
        };
      }
      wo(t, i, e, l);
    } else i = pd(n, t, e, l, r);
    return xo(i);
  }
  Ns = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Or(t.pendingLanes);
          n !== 0 && (Fo(t, n | 1), gt(t, He()), (ye & 6) === 0 && (Sr = He() + 500, kn()));
        }
        break;
      case 13:
        Kn(function() {
          var r = sn(e, 1);
          if (r !== null) {
            var l = ft();
            Ht(r, e, 1, l);
          }
        }), fs(e, 1);
    }
  }, Do = function(e) {
    if (e.tag === 13) {
      var t = sn(e, 134217728);
      if (t !== null) {
        var n = ft();
        Ht(t, e, 134217728, n);
      }
      fs(e, 134217728);
    }
  }, Rs = function(e) {
    if (e.tag === 13) {
      var t = Nn(e), n = sn(e, t);
      if (n !== null) {
        var r = ft();
        Ht(n, e, t, r);
      }
      fs(e, t);
    }
  }, Ls = function() {
    return je;
  }, Ps = function(e, t) {
    var n = je;
    try {
      return je = e, t();
    } finally {
      je = n;
    }
  }, Fn = function(e, t, n) {
    switch (t) {
      case "input":
        if (he(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = $l(r);
              if (!l) throw Error(f(90));
              we(r), he(r, l);
            }
          }
        }
        break;
      case "textarea":
        bt(e, n);
        break;
      case "select":
        t = n.value, t != null && xt(e, !!n.multiple, t, !1);
    }
  }, yl = ls, O = Kn;
  var hd = { usingClientEntryPoint: !1, Events: [Jr, ar, $l, Rr, vl, ls] }, dl = { findFiberByHostInstance: Dn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, md = { bundleType: dl.bundleType, version: dl.version, rendererPackageName: dl.rendererPackageName, rendererConfig: dl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ee.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = zr(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: dl.findFiberByHostInstance || dd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var _o = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!_o.isDisabled && _o.supportsFiber) try {
      xl = _o.inject(md), Kt = _o;
    } catch {
    }
  }
  return wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hd, wt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ps(t)) throw Error(f(200));
    return fd(e, t, null, n);
  }, wt.createRoot = function(e, t) {
    if (!ps(e)) throw Error(f(299));
    var n = !1, r = "", l = Ka;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = cs(e, 1, !1, null, null, n, !1, r, l), e[nn] = t.current, Zr(e.nodeType === 8 ? e.parentNode : e), new ds(t);
  }, wt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(f(188)) : (e = Object.keys(e).join(","), Error(f(268, e)));
    return e = zr(t), e = e === null ? null : e.stateNode, e;
  }, wt.flushSync = function(e) {
    return Kn(e);
  }, wt.hydrate = function(e, t, n) {
    if (!So(t)) throw Error(f(200));
    return Eo(null, e, t, !0, n);
  }, wt.hydrateRoot = function(e, t, n) {
    if (!ps(e)) throw Error(f(405));
    var r = n != null && n.hydratedSources || null, l = !1, o = "", i = Ka;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Va(t, null, e, 1, n ?? null, l, !1, o, i), e[nn] = t.current, Zr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new ko(t);
  }, wt.render = function(e, t, n) {
    if (!So(t)) throw Error(f(200));
    return Eo(null, e, t, !1, n);
  }, wt.unmountComponentAtNode = function(e) {
    if (!So(e)) throw Error(f(40));
    return e._reactRootContainer ? (Kn(function() {
      Eo(null, null, e, !1, function() {
        e._reactRootContainer = null, e[nn] = null;
      });
    }), !0) : !1;
  }, wt.unstable_batchedUpdates = ls, wt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!So(n)) throw Error(f(200));
    if (e == null || e._reactInternals === void 0) throw Error(f(38));
    return Eo(e, t, n, !1, r);
  }, wt.version = "18.3.1-next-f1338f8080-20240426", wt;
}
var tc;
function hc() {
  if (tc) return vs.exports;
  tc = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (m) {
        console.error(m);
      }
  }
  return s(), vs.exports = Sd(), vs.exports;
}
var nc;
function Ed() {
  if (nc) return Co;
  nc = 1;
  var s = hc();
  return Co.createRoot = s.createRoot, Co.hydrateRoot = s.hydrateRoot, Co;
}
var _d = Ed(), z = ws(), rc = hc();
const Cd = { cmd: "⌘", shift: "⇧", alt: "⌥", option: "⌥", ctrl: "⌃", enter: "↵", return: "↵", esc: "esc", tab: "⇥", up: "↑", down: "↓", left: "←", right: "→", backspace: "⌫" }, jd = (s) => s.split("+").map((m) => Cd[m.trim().toLowerCase()] ?? m.trim().toUpperCase());
function Nd({ rows: s, at: m }) {
  return /* @__PURE__ */ u.jsx(u.Fragment, { children: s.map(
    (f) => f && /* @__PURE__ */ u.jsx("div", { className: "ss-keys", "data-show": f.show, "data-at": m, "aria-hidden": !0, children: f.caps.map((S, j) => /* @__PURE__ */ u.jsx("kbd", { className: "ss-key", "data-down": f.down, children: S }, j)) }, f.id)
  ) });
}
const mc = { x: 0, y: 0, width: 0, height: 0 }, vc = (s) => typeof s == "string" ? s : "at" in s ? s.at : null, Rd = (s, m) => s?.offsetWidth && s.getBoundingClientRect().width / s.offsetWidth || m || 1;
function xs(s, m) {
  const f = s.getBoundingClientRect();
  return { left: f.left, top: f.top, scale: s.offsetWidth && f.width / s.offsetWidth || m || 1, borderX: s.clientLeft, borderY: s.clientTop };
}
function hl(s, m, f, S = xs(s, f)) {
  const j = m.getBoundingClientRect(), { scale: _ } = S;
  return { x: (j.left - S.left) / _ - S.borderX, y: (j.top - S.top) / _ - S.borderY, width: j.width / _, height: j.height / _ };
}
function Ld(s, m, f, S = xs(s, f)) {
  const j = hl(s, m, f, S), _ = getComputedStyle(m), $ = _.transform, Z = $ && $ !== "none" ? $.match(/^matrix\(([^)]+)\)$/) : null;
  if (!Z) return j;
  const [I, te, ne, re, le, ie] = Z[1].split(",").map(Number);
  if (te || ne || le || ie || !I || !re) return j;
  const B = j.width / I, b = j.height / re, [K, _e] = _.transformOrigin.split(" ").map(parseFloat);
  return { x: j.x - K * (1 - I), y: j.y - _e * (1 - re), width: B, height: b };
}
const Pd = (s) => {
  const m = getComputedStyle(s);
  return m.transform !== "none" || m.translate && m.translate !== "none" || m.scale && m.scale !== "none" || m.rotate && m.rotate !== "none";
};
function zd(s, m) {
  let f = !0;
  for (let $ = m; $ && $ !== s; $ = $.parentElement) if (Pd($)) {
    f = !1;
    break;
  }
  if (f) return hl(s, m, 1);
  let S = 0, j = 0, _ = m;
  for (; _ && _ !== s; ) {
    S += _.offsetLeft, j += _.offsetTop;
    const $ = _.offsetParent;
    if (!$ || !s.contains($)) break;
    _ = $, _ !== s && (S += _.clientLeft - _.scrollLeft, j += _.clientTop - _.scrollTop);
  }
  return { x: S, y: j, width: m.offsetWidth, height: m.offsetHeight };
}
function lc(s, m) {
  const f = Object.keys(s);
  return f.length !== Object.keys(m).length ? !1 : f.every((S) => {
    const j = s[S], _ = m[S];
    return _ && Math.abs(j.x - _.x) < 0.5 && Math.abs(j.y - _.y) < 0.5 && Math.abs(j.width - _.width) < 0.5 && Math.abs(j.height - _.height) < 0.5;
  });
}
function yc(s) {
  const m = s.parentElement;
  if (!m?.classList.contains("ss-scroller")) return;
  const f = s.clientHeight, S = s.scrollHeight, j = S > f ? Math.max(24, f / S * f) : 0, _ = S > f ? s.scrollTop / (S - f) * (f - j) : 0;
  m.style.setProperty("--ss-thumb-h", `${j}px`), m.style.setProperty("--ss-thumb-y", `${_}px`);
}
const Md = {
  /** Moves inside a shot (push-in, pan, a long cursor trip): peak at about 40%, long soft tail. 1.4 to 2.7 s. */
  house: [0.65, 0, 0.1, 1],
  /** The outgoing half of a move that ends in a cut: accelerates into it. */
  through: [0.8, 0, 0.1, 1],
  /** The incoming half after a cut: arrives at speed, settles. 0.6 to 0.8 s (1.6 s for a big pull-out). */
  settle: [0.05, 0.85, 0.3, 1],
  /** A cursor arriving from off-frame, already moving. */
  enter: [0.1, 0.8, 0.3, 0.95],
  /** One long cursor trip across the frame. */
  trip: [0.78, 0, 0.17, 1],
  /** The kit's camera push-in (Camera). */
  camera: [0.45, 0, 0.1, 1]
};
function Td(s) {
  const [m, f, S, j] = Md[s], _ = 3 * m, $ = 3 * (S - m) - _, Z = 1 - _ - $, I = 3 * f, te = 3 * (j - f) - I, ne = 1 - I - te, re = (ie) => ((Z * ie + $) * ie + _) * ie, le = (ie) => (3 * Z * ie + 2 * $) * ie + _;
  return (ie) => {
    if (ie <= 0) return 0;
    if (ie >= 1) return 1;
    let B = ie;
    for (let b = 0; b < 8; b++) {
      const K = le(B);
      if (Math.abs(K) < 1e-6) break;
      const _e = B - (re(B) - ie) / K;
      if (_e < 0 || _e > 1) break;
      B = _e;
    }
    if (Math.abs(re(B) - ie) > 1e-6) {
      let b = 0, K = 1;
      for (let _e = 0; _e < 40; _e++)
        B = (b + K) / 2, re(B) < ie ? b = B : K = B;
    }
    return ((ne * B + te) * B + I) * B;
  };
}
function gc() {
  try {
    return !1;
  } catch {
    return !0;
  }
}
function jr(s) {
  gc() && console.warn(`[stageshow] ${s}`);
}
const _r = (s, m, f) => Math.min(f, Math.max(m, s)), No = (s) => s < 0.5 ? 4 * s * s * s : 1 - Math.pow(-2 * s + 2, 3) / 2, Od = (s) => {
  const m = Math.sin(s * 12.9898) * 43758.5453;
  return m - Math.floor(m);
}, oc = (s) => {
  s && window.setTimeout(() => s.removeAttribute("data-touching"), 240);
};
class Cr extends Error {
}
function Ad(s, m) {
  const { rootRef: f, cursorRef: S, pos: j, hovered: _, kindRef: $, keysRef: Z, dragging: I, autoUsed: te, autoRef: ne, scaleRef: re, speed: le, layout: ie, cursor: B, resolve: b, place: K, remeasure: _e, ripple: ce, setState: Me, setKind: ee, setKeys: Q, setLastKeys: de } = m, Se = Td("enter"), M = () => {
    if (s.aborted) throw new Cr();
  }, Be = (a, h) => new Promise((w, x) => {
    M();
    const k = () => {
      h(T), s.removeEventListener("abort", k), x(new Cr());
    }, T = a(() => {
      s.removeEventListener("abort", k), s.aborted ? x(new Cr()) : w();
    });
    s.addEventListener("abort", k, { once: !0 });
  }), ve = () => Be((a) => requestAnimationFrame(a), cancelAnimationFrame), ge = (a) => Be((h) => setTimeout(h, a / le), clearTimeout), Te = (a) => {
    let h = !0;
    const w = () => {
      h && (h = !1, s.removeEventListener("abort", w), a());
    };
    return s.addEventListener("abort", w, { once: !0 }), w;
  }, pe = async (a, h) => {
    const w = performance.now(), x = a / le;
    for (; ; ) {
      M();
      const k = Math.min(1, (performance.now() - w) / x);
      if (h(k), k === 1) return;
      await ve();
    }
  }, Ee = (a) => {
    const h = [];
    for (let w = a; w && w !== f.current; w = w.parentElement) w.hasAttribute("data-target") && h.push(w);
    return h;
  }, We = (a) => {
    const h = f.current;
    if (!h) return;
    const w = h.querySelectorAll("[data-cursor]");
    if (!w.length && !te.current) return;
    w.length && (te.current = !0);
    const x = h.getBoundingClientRect(), k = x.width / h.offsetWidth || 1, T = h.dataset.cursorBase ?? "pointer";
    let Y = T;
    h.setAttribute("data-hit", "");
    const G = document.elementsFromPoint(x.left + a.x * k, x.top + a.y * k);
    h.removeAttribute("data-hit");
    const F = G.find((X) => {
      if (!h.contains(X) || X.closest(".ss-cursor, .ss-keys, .ss-ripple") || getComputedStyle(X).pointerEvents === "none" && !X.closest('[data-cursor], [data-target], button, a[href], [role="button"], [role="menuitem"], [role="option"], [role="tab"]')) return !1;
      let Re = 1;
      for (let we = X; we && we !== h.parentElement; we = we.parentElement) {
        const Le = getComputedStyle(we);
        if (Le.visibility === "hidden") return !1;
        Re *= Number(Le.opacity);
      }
      return Re > 0.15;
    });
    if (F) {
      const X = F.closest('[data-cursor], button, a[href], [role="button"], [role="menuitem"], [role="option"], [role="tab"]');
      Y = X && h.contains(X) && X.dataset.cursor ? X.dataset.cursor : T, Y !== $.current && ee(Y);
      return;
    }
    w.forEach((X) => {
      const Re = X.getBoundingClientRect(), we = (Re.left - x.left) / k, Le = (Re.top - x.top) / k;
      a.x >= we && a.x <= we + Re.width / k && a.y >= Le && a.y <= Le + Re.height / k && (Y = X.dataset.cursor);
    }), Y !== $.current && ee(Y);
  };
  ne.current = We, I.current || We(j.current);
  const Ne = (a) => {
    if (_.current === a) return;
    const h = Ee(a);
    Ee(_.current).forEach((w) => h.includes(w) || w.removeAttribute("data-hover")), h.forEach((w) => w.setAttribute("data-hover", "")), _.current = a;
  };
  let se = Z.current.id, L = 0;
  const H = (a) => {
    const h = vc(a);
    return h === null ? null : f.current?.querySelector(`[data-target="${h}"]`) ?? null;
  }, P = {
    get signal() {
      return s;
    },
    put(a) {
      s.aborted || Me((h) => ({ ...h, ...typeof a == "function" ? a(h) : a }));
    },
    async set(a) {
      M(), P.put(a), await ve(), await ve(), ne.current?.(j.current), M();
    },
    wait: async (a) => {
      M(), await ge(a);
    },
    rect: (a, h) => {
      const w = f.current, x = w?.querySelector(`[data-target="${a}"]`);
      return !w || !x ? (jr(`no element with data-target="${a}"`), mc) : h?.layout ? zd(w, x) : hl(w, x, re.current);
    },
    center: (a) => b(a),
    caret(a, h) {
      L++;
      const w = H(a), x = f.current;
      if (!w || !x) return 0;
      const k = x.getBoundingClientRect(), T = k.width / x.offsetWidth || 1, Y = k.left + h.x * T, G = k.top + h.y * T, F = [], X = document.createTreeWalker(w, NodeFilter.SHOW_TEXT), Re = document.createRange();
      let we = 0;
      const Le = (he) => {
        for (let Ke = he.parentElement; Ke; Ke = Ke === w ? null : Ke.parentElement) {
          const ke = getComputedStyle(Ke);
          if (ke.opacity === "0" || ke.visibility === "hidden" || ke.display === "none") return !0;
        }
        return !1;
      };
      for (let he = X.nextNode(); he; he = X.nextNode()) {
        const Ke = he.textContent ?? "";
        if (!Le(he)) {
          for (let ke = 0; ke < Ke.length; ke++) {
            Re.setStart(he, ke), Re.setEnd(he, ke + 1);
            const Pe = Re.getBoundingClientRect();
            (Pe.width || Pe.height) && F.push({ left: Pe.left, right: Pe.right, mid: (Pe.left + Pe.right) / 2, top: Pe.top, bottom: Pe.bottom, at: we + ke });
          }
          we += Ke.length;
        }
      }
      if (!F.length || G < F[0].top) return 0;
      if (G > F[F.length - 1].bottom) return we;
      let Xe = F[0];
      for (const he of F) Math.abs((he.top + he.bottom) / 2 - G) < Math.abs((Xe.top + Xe.bottom) / 2 - G) && (Xe = he);
      const Qe = F.filter((he) => Math.abs(he.top - Xe.top) < (Xe.bottom - Xe.top) / 2), qt = Qe.find((he) => he.mid > Y);
      return qt ? qt.at : Qe[Qe.length - 1].at + 1;
    },
    async move(a, h) {
      M();
      const w = { ...j.current }, x = b(a), k = Math.hypot(x.x - w.x, x.y - w.y);
      if (k < 0.5) return Ne(H(a));
      const T = Ee(H(a));
      Ne(Ee(_.current).find((we) => T.includes(we)) ?? null);
      const Y = h?.duration ?? _r(260 + k * 0.9, 300, 650), G = No, F = Math.min(k * 0.08, 24), X = -(x.y - w.y) / k, Re = (x.x - w.x) / k;
      await pe(Y, (we) => {
        const Le = G(we), Xe = Math.sin(Math.PI * Le) * F, Qe = h?.path ? h.path(Le, w, x) : { x: w.x + (x.x - w.x) * Le + X * Xe, y: w.y + (x.y - w.y) * Le + Re * Xe };
        K(Qe), We(Qe), h?.onMove && rc.flushSync(() => h.onMove(Qe, w, we));
      }), M(), Ne(H(a));
    },
    async click(a, h) {
      M(), a !== void 0 && (await P.move(a), await ge(120)), M();
      const w = a !== void 0 ? H(a) : _.current, x = S.current, k = B?.style === "touch", T = Te(() => {
        x?.removeAttribute("data-pressed"), w?.removeAttribute("data-pressed"), k && oc(x);
      });
      try {
        k && (x?.setAttribute("data-touching", ""), await ge(140), M());
        for (let Y = 0; Y < (h?.double ? 2 : 1); Y++)
          Y && await ge(70), M(), x?.setAttribute("data-pressed", "true"), B?.ripple && ce(j.current), w?.setAttribute("data-pressed", h?.right ? "right" : ""), await ge(h?.double ? 80 : 100), M(), x?.removeAttribute("data-pressed"), w?.removeAttribute("data-pressed");
      } finally {
        T();
      }
    },
    async scroll(a, h, w) {
      M();
      const x = H(a);
      if (!x) return;
      const k = x.scrollTop;
      let T = typeof h == "number" ? h : k;
      if (typeof h == "string") {
        const F = H(h);
        F && (T = k + (F.getBoundingClientRect().top - x.getBoundingClientRect().top) / Rd(f.current, re.current) - (w?.offset ?? 0));
      }
      if (T = _r(T, 0, x.scrollHeight - x.clientHeight), B) {
        const F = hl(f.current, x, re.current || 1), X = j.current;
        X.x >= F.x + 8 && X.x <= F.x + F.width - 8 && X.y >= F.y + 8 && X.y <= F.y + F.height - 8 || (await this.move({ x: F.x + F.width * 0.6, y: F.y + F.height * 0.55 }), await this.wait(120));
      }
      const Y = x.parentElement?.classList.contains("ss-scroller") ? x.parentElement : null;
      Y?.setAttribute("data-scrolling", "");
      const G = Te(() => Y?.removeAttribute("data-scrolling"));
      try {
        await pe(w?.duration ?? _r(420 + Math.abs(T - k) * 1.2, 500, 1400), (F) => {
          x.scrollTop = k + (T - k) * No(F), x.toggleAttribute("data-scrolled", x.scrollTop > 0.5), yc(x);
        }), M();
      } finally {
        G();
      }
      _e(), ne.current?.(j.current);
    },
    async snap(a, h) {
      M();
      const w = h ? f.current?.querySelector(`[data-target="${h}"]`) : f.current;
      w?.setAttribute("data-instant", "");
      const x = Te(() => w?.removeAttribute("data-instant"));
      try {
        P.put(a), await ve(), await ve(), M();
      } finally {
        x();
      }
    },
    async key(a) {
      M();
      const h = jd(a), w = ++se, x = Z.current;
      de(x.caps.length ? { ...x, show: !1, down: !1 } : null), Q({ id: w, caps: h, show: !1, down: !1 }), await ve(), await ve(), M(), Q({ id: w, caps: h, show: !0, down: !1 }), await ge(180), M(), Q({ id: w, caps: h, show: !0, down: !0 }), await ge(140), M(), Q({ id: w, caps: h, show: !0, down: !1 }), ge(600).then(() => {
        se === w && !s.aborted && Q({ id: w, caps: h, show: !1, down: !1 });
      }, (k) => {
        k instanceof Cr || console.error("[stageshow] script error", k);
      });
    },
    async stagger(a, h, w = 60) {
      await Promise.all(
        a.map(async (x, k) => {
          k && await ge(w * k), M(), await h(x, k);
        })
      );
    },
    mark(a) {
      s.aborted || f.current?.setAttribute("data-mark", a);
    },
    async cursor(a) {
      M(), ee(a), await ve();
    },
    async type(a, h, w) {
      const x = w?.interval ?? 35;
      for (let k = 0; k <= h.length; k++)
        M(), Me((T) => ({ ...T, [a]: h.slice(0, k) })), await ge(x * (0.7 + 0.6 * Od(k)));
    },
    place(a) {
      if (s.aborted) return;
      const h = b(a);
      K(h), ne.current?.(h);
    },
    async enter(a, h) {
      M();
      const w = b(a), x = f.current, k = { x: 0, y: 0, w: x.offsetWidth, h: x.offsetHeight }, T = 40, Y = [w.x - k.x, k.x + k.w - w.x, w.y - k.y, k.y + k.h - w.y], G = Y.indexOf(Math.min(...Y)), F = G === 0 ? { x: k.x - T, y: w.y + k.h * 0.12 } : G === 1 ? { x: k.x + k.w + T * 0.4, y: w.y + k.h * 0.12 } : G === 2 ? { x: w.x - k.w * 0.06, y: k.y - T } : { x: w.x + k.w * 0.06, y: k.y + k.h + T * 0.4 };
      K(F), Ne(null), await pe(h?.duration ?? 700, (X) => {
        const Re = Se(X), we = { x: F.x + (w.x - F.x) * Re, y: F.y + (w.y - F.y) * Re };
        K(we), We(we);
      }), M(), Ne(H(a));
    },
    async drag(a, h, w) {
      M();
      const x = { ...j.current }, k = b(a), T = Math.hypot(k.x - x.x, k.y - x.y);
      Ne(null);
      const Y = $.current, G = Y === "ibeam" || Y === "crosshair", F = !G && w?.cursor !== "preserve", X = B?.style === "touch", Re = (he) => {
        const ke = 1.1428571428571428;
        return he < 0.25 ? he * he / (2 * 0.25) * ke : (he - 0.25 / 2) * ke;
      };
      X && (S.current?.setAttribute("data-touching", ""), await ge(140), M());
      const we = X ? S.current?.querySelector(".ss-cursor__streak") ?? null : null, Le = [], Xe = (he) => {
        Le.unshift({ ...he }), Le.length > 9 && Le.pop();
        const Ke = Le[Le.length - 1], ke = he.x - Ke.x, Pe = he.y - Ke.y, xt = Math.min(Math.hypot(ke, Pe), 100);
        we && (we.style.width = `${xt}px`, we.style.left = `${-xt}px`, we.style.transform = `rotate(${Math.atan2(Pe, ke)}rad)`);
      };
      I.current = !0;
      const Qe = S.current, qt = Te(() => {
        I.current = !1, Qe?.removeAttribute("data-pressed"), Qe?.removeAttribute("data-swiping"), X && oc(Qe);
      });
      try {
        Qe?.setAttribute("data-pressed", "true"), await ge(X ? 170 : 60), X && (we && (we.style.width = "0px"), Qe?.setAttribute("data-swiping", "")), M(), F && !X && ee("grab"), X || await ge(70), M(), Qe?.removeAttribute("data-pressed");
        const he = G ? 0 : Math.min(T * 0.06, 18), Ke = T ? -(k.y - x.y) / T : 0, ke = T ? (k.x - x.x) / T : 0, Pe = G && Math.abs(k.y - x.y) > 6;
        Pe && k.y > x.y && k.x < x.x - 2 && jr("a text selection that ends left of where it starts overshoots and shrinks back; select text that starts a line, or fits on one");
        const xt = L;
        await pe(X ? w?.duration ?? _r(180 + T * 0.5, 240, 300) : w?.duration ?? _r(360 + T * 1.1, 450, 900), (Jt) => {
          const kt = X ? Re(Jt) : No(Jt), bt = Math.sin(Math.PI * kt) * he, Mn = Pe ? 1 - (1 - kt) * (1 - kt) : kt, Tn = Pe ? kt * kt : kt, Vt = w?.path?.(kt, x, k) ?? { x: x.x + (k.x - x.x) * Tn + Ke * bt, y: x.y + (k.y - x.y) * Mn + ke * bt };
          rc.flushSync(() => h?.(Vt, x, Jt)), K(Vt), X && Xe(Vt);
        }), G && h && L === xt && jr("selection drift: a text selection drag never read a.caret(), so the highlight is not under the I-beam; set it from a.caret(name, at) in onMove"), M(), F && !X && ee(Y === "grab" ? "pointer" : Y);
      } finally {
        qt();
      }
      ne.current?.(k);
    },
    layout: ie
  };
  for (const a of Object.keys(P)) {
    const h = P[a];
    typeof h == "function" && (P[a] = (...w) => {
      const x = h.apply(P, w);
      return x instanceof Promise && x.catch((k) => {
        k instanceof Cr || console.error("[stageshow] script error", k);
      }), x;
    });
  }
  return P;
}
function Id(s, m, f, S) {
  const j = Object.keys(m).filter(
    (_) => JSON.stringify(s[_]) !== JSON.stringify(m[_])
  );
  j.length && jr(`loop seam: state still differs from initial at the end of the script (${j.join(", ")})`), S && Math.hypot(f.x - S.x, f.y - S.y) > 1 && jr("loop seam: cursor does not end where it starts");
}
function Fd() {
  return /* @__PURE__ */ u.jsx("svg", { height: "24", width: "24", viewBox: "0 0 32 32", fill: "none", children: /* @__PURE__ */ u.jsxs("g", { transform: "translate(10 7)", children: [
    /* @__PURE__ */ u.jsx("path", { d: "m6.148 18.473 1.863-1.003 1.615-.839-2.568-4.816h4.332l-11.379-11.408v16.015l3.316-3.221z", fill: "#fff" }),
    /* @__PURE__ */ u.jsx("path", { d: "m6.431 17 1.765-.941-2.775-5.202h3.604l-8.025-8.043v11.188l2.53-2.442z", fill: "#000" })
  ] }) });
}
function Dd() {
  return /* @__PURE__ */ u.jsxs("svg", { width: "10", height: "16", viewBox: "0 0 10 16", fill: "none", overflow: "visible", children: [
    /* @__PURE__ */ u.jsx("path", { d: "M3 1H7M3 15H7M5 1V15", style: { stroke: "var(--ss-cursor-edge, #fff)" }, strokeWidth: "2.6", strokeLinecap: "round" }),
    /* @__PURE__ */ u.jsx("path", { d: "M3 1H7M3 15H7M5 1V15", style: { stroke: "var(--ss-cursor-line, #000)" }, strokeWidth: "1", strokeLinecap: "round" })
  ] });
}
function $d() {
  return /* @__PURE__ */ u.jsxs("svg", { width: "17", height: "17", viewBox: "0 0 17 17", fill: "none", overflow: "visible", children: [
    /* @__PURE__ */ u.jsx("path", { d: "M8.5 0V17M0 8.5H17", style: { stroke: "var(--ss-cursor-edge, #fff)" }, strokeWidth: "2.6" }),
    /* @__PURE__ */ u.jsx("path", { d: "M8.5 0V17M0 8.5H17", style: { stroke: "var(--ss-cursor-line, #000)" }, strokeWidth: "1" })
  ] });
}
function Ud() {
  return /* @__PURE__ */ u.jsxs("svg", { width: "26", height: "26", viewBox: "0 0 32 32", fill: "none", children: [
    /* @__PURE__ */ u.jsx(
      "path",
      {
        d: "M10.6 6a1.7 1.7 0 0 1 3.4 0v6.6a1.3 1.3 0 0 1 2.6 0v.7a1.3 1.3 0 0 1 2.6 0v.7a1.3 1.3 0 0 1 2.6 0V19c0 3.1-2 5.6-5 5.6h-2.6c-2 0-3.3-.9-4.4-2.4l-3.1-4.1c-.6-.9-.4-2 .5-2.5.8-.4 1.7-.2 2.3.5l1.1 1.4V6Z",
        fill: "#fff",
        stroke: "#000",
        strokeWidth: "1.1",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ u.jsx("path", { d: "M14 12.6v3.6M16.6 13.3v3M19.2 14v2.6", stroke: "#000", strokeWidth: "1", strokeLinecap: "round" })
  ] });
}
function Bd() {
  return /* @__PURE__ */ u.jsx("svg", { width: "26", height: "26", viewBox: "0 0 32 32", fill: "none", children: /* @__PURE__ */ u.jsxs("g", { transform: "translate(7 6)", children: [
    /* @__PURE__ */ u.jsx("path", { d: "m4.5557 8.5742c-.098-.375-.196-.847-.406-1.552-.167-.557-.342-.859-.47-1.233-.155-.455-.303-.721-.496-1.181-.139-.329-.364-1.048-.457-1.44-.119-.509.033-.924.244-1.206.253-.339.962-.49 1.357-.351.371.13.744.512.916.788.288.46.357.632.717 1.542.393.992.564 1.918.611 2.231l.085.452c-.001-.04-.043-1.122-.044-1.162-.035-1.029-.06-1.823-.038-2.939.002-.126.064-.587.084-.715.078-.5.305-.8.673-.979.412-.201.926-.215 1.401-.017.423.173.626.55.687 1.022.014.109.094.987.093 1.107-.013 1.025.006 1.641.015 2.174.004.231.003 1.625.017 1.469.061-.656.094-3.189.344-3.942.144-.433.405-.746.794-.929.431-.203 1.113-.07 1.404.243.285.305.446.692.482 1.153.032.405-.019.897-.02 1.245 0 .867-.021 1.324-.037 2.121-.001.038-.015.298.023.182.094-.28.188-.542.266-.745.049-.125.241-.614.359-.859.114-.234.211-.369.415-.688.2-.313.415-.448.668-.561.54-.235 1.109.112 1.301.591.086.215.009.713-.028 1.105-.061.647-.254 1.306-.352 1.648-.128.447-.274 1.235-.34 1.601-.072.394-.234 1.382-.359 1.82-.086.301-.371.978-.652 1.384 0 0-1.074 1.25-1.192 1.812-.117.563-.078.567-.101.965-.024.399.121.923.121.923s-.802.104-1.234.034c-.391-.062-.875-.841-1-1.078-.172-.328-.539-.265-.682-.023-.225.383-.709 1.07-1.051 1.113-.668.084-2.054.03-3.139.02 0 0 .185-1.011-.227-1.358-.305-.26-.83-.784-1.144-1.06l-.832-.921c-.284-.36-.629-1.093-1.243-1.985-.348-.504-1.027-1.085-1.284-1.579-.223-.425-.331-.954-.19-1.325.225-.594.675-.897 1.362-.832.519.05.848.206 1.238.537.225.19.573.534.75.748.163.195.203.276.377.509.23.307.302.459.214.121", fill: "#fff" }),
    /* @__PURE__ */ u.jsxs("g", { stroke: "#000", strokeLinecap: "round", strokeWidth: ".75", children: [
      /* @__PURE__ */ u.jsx("path", { d: "m4.5557 8.5742c-.098-.375-.196-.847-.406-1.552-.167-.557-.342-.859-.47-1.233-.155-.455-.303-.721-.496-1.181-.139-.329-.364-1.048-.457-1.44-.119-.509.033-.924.244-1.206.253-.339.962-.49 1.357-.351.371.13.744.512.916.788.288.46.357.632.717 1.542.393.992.564 1.918.611 2.231l.085.452c-.001-.04-.043-1.122-.044-1.162-.035-1.029-.06-1.823-.038-2.939.002-.126.064-.587.084-.715.078-.5.305-.8.673-.979.412-.201.926-.215 1.401-.017.423.173.626.55.687 1.022.014.109.094.987.093 1.107-.013 1.025.006 1.641.015 2.174.004.231.003 1.625.017 1.469.061-.656.094-3.189.344-3.942.144-.433.405-.746.794-.929.431-.203 1.113-.07 1.404.243.285.305.446.692.482 1.153.032.405-.019.897-.02 1.245 0 .867-.021 1.324-.037 2.121-.001.038-.015.298.023.182.094-.28.188-.542.266-.745.049-.125.241-.614.359-.859.114-.234.211-.369.415-.688.2-.313.415-.448.668-.561.54-.235 1.109.112 1.301.591.086.215.009.713-.028 1.105-.061.647-.254 1.306-.352 1.648-.128.447-.274 1.235-.34 1.601-.072.394-.234 1.382-.359 1.82-.086.301-.371.978-.652 1.384 0 0-1.074 1.25-1.192 1.812-.117.563-.078.567-.101.965-.024.399.121.923.121.923s-.802.104-1.234.034c-.391-.062-.875-.841-1-1.078-.172-.328-.539-.265-.682-.023-.225.383-.709 1.07-1.051 1.113-.668.084-2.054.03-3.139.02 0 0 .185-1.011-.227-1.358-.305-.26-.83-.784-1.144-1.06l-.832-.921c-.284-.36-.629-1.093-1.243-1.985-.348-.504-1.027-1.085-1.284-1.579-.223-.425-.331-.954-.19-1.325.225-.594.675-.897 1.362-.832.519.05.848.206 1.238.537.225.19.573.534.75.748.163.195.203.276.377.509.23.307.302.459.214.121", strokeLinejoin: "round" }),
      /* @__PURE__ */ u.jsx("path", { d: "m11.566 12.734v-3.459" }),
      /* @__PURE__ */ u.jsx("path", { d: "m9.551 12.746-.016-3.473" }),
      /* @__PURE__ */ u.jsx("path", { d: "m7.555 9.305.021 3.426" })
    ] })
  ] }) });
}
function Wd() {
  return /* @__PURE__ */ u.jsx("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", children: /* @__PURE__ */ u.jsxs("g", { transform: "translate(8 9)", children: [
    /* @__PURE__ */ u.jsx("path", { d: "m3.44281398 1.68449726c-.74326136.27630142-1.05584685.8131257-1.07636853 1.38003696-.01344897.37336893.06665513.72649286.23114214 1.18694303-.02596219-.07267623.09676488.29282004.12116236.37362273.05052942.16918921-.4865367-.05865774-.81377307.00741883-.36363321.07113868-.84783757.38332307-1.10006887.79754775-.29643467.48542737-.3109609 1.04368567-.08235979 2.04824266.12491868.54736183.36572145 1.00836814.71076689 1.44594879.15329951.1944118.5713628.64726015.60307236.6875974l.84854343.94062339c.15080214.1358526.25794954.2361946.57590427.5380259.3147558.2987762.4647038.4380078.60308951.555976.05846214.0492474.10784267.1797116.12740685.3736249.01609788.1595565.01049553.3375341-.0090192.5090254-.00674888.0593077-.01325791.1020883-.01698742.1224696-.04189161.228932.13269563.4403386.36541902.4424835.21585671.0019894.38528595.0046546.82216479.0123538.09483476.0016698.09483476.0016698.18993053.0033129 1.16876447.0200186 1.75308289.0147904 2.17807912-.0385723.45429894-.0572869.92650915-.6110188 1.32698393-1.2957591.34289141.6108338.81859723 1.2057867 1.2995685 1.2820532.1510118.0244148.3353555.0322555.548787.0275887.1606725-.0035131.3307029-.0140241.5021961-.0293376.1276907-.0114022.2293359-.0228648.29003-.0307451.2258836-.0293282.373669-.251611.3133108-.4712481-.0130351-.0474332-.0339838-.1345011-.0551094-.2441635-.0245945-.1276687-.0423383-.2523857-.0503381-.365988-.0050217-.0713101-.0059948-.1359317-.0027687-.1918983.0059157-.0980798.0077938-.1530073.0108033-.281125.0010795-.0448938.0010795-.0448938.0024606-.0845172.0054208-.1364475.0233824-.2649146.0815132-.544638.0250088-.1201275.1473169-.352189.3398902-.639435.0571394-.0852302.1195783-.1742239.1864664-.26609712.1272143-.17473362.2641361-.35131772.4011075-.52030772.082051-.10123129.145482-.17695689.1808122-.21807676.2967593-.42378347.612817-1.11823437.7291396-1.52536348.1117407-.39153936.202351-1.12501196.254373-1.81690429.029923-.39968605.0410555-.72381216.0410555-1.23011613.0000742-.09758414.0000742-.09758414.0002975-.17670236.0003569-.11115478.0003569-.11115478.000115-.20711835-.0008934-.15683883-.0055282-.31323355-.0207085-.69507578-.0313109-.81293139-.4771727-1.33911388-1.1344906-1.44058831-.559108-.08631314-1.0586051.08188477-1.2779293.31625977-.0755526.08073733.0036753-.2781823-.2159489-.62316278-.1644465-.25841586-.593184-.58905957-.9209287-.65355552-.335487-.06535532-.73539548-.05811715-1.1017193.00667481-.32093157.05742909-.68608434.33741751-.87176225.64688068-.12411885.20686477.03884667-.00592296-.09368743-.23401341-.18231052-.31422641-.60754287-.59486422-1.01411454-.67799709-.34643562-.07139428-.74182572-.04452925-1.09945614.0633873-.43336319.1291117-1.01795827.61460976-.94899189 1.15552627-.34375-.54091651-1.25026717-.691379-1.97906097-.42111797z", fill: "#000" }),
    /* @__PURE__ */ u.jsx("path", { d: "m7.31951013 1.62138197c.20710357.04234751.44724204.20083012.51632974.31990811.08404358.1446387.15562749.36413806.21048667.6366124.02933373.14569467.12179446 1.2125285.29383112 1.32370243.41279229.04533731.41279229.04533731.52658055-.12364345.03545705-.07383858.03545705-.07383858.04226523-.1029106.01416796-.06009544.02463332-.12677987.0351322-.21754028l.00854738-.07915386.00047673-.00942804.00327525-.03167185c.01085148-.11424313.04184125-.4312127.05388392-.53034902.03788792-.31189663.08766449-.52757784.13944093-.6138719.0713024-.11883734.31942298-.28274442.43149612-.30279961.2804398-.04960082.58940103-.05519288.82623993-.00905543.1084394.02134018.3709471.22378689.432331.32024744.1291079.20279957.2524316.84889766.3225486 1.4970065-.0102194.04624251-.0102194.04624251.1640069.28984194.5843296-.06677889.5843296-.06677889.5703629-.17490247.0159511-.03856429.0284824-.08294031.045969-.15118961.0423876-.16089067.0697594-.25204451.111066-.35549917.0288558-.07227096.0592914-.13391873.0904889-.18278042.1209187-.19031132.4335712-.319392.7077174-.27707028.2943447.04543991.4816904.26653537.4994912.72869815.0148821.37434892.0193146.5239164.0201469.6700184l-.0004247.37954865c0 .48831141-.0104951.79388164-.0389535 1.17400348-.0480918.63962116-.1348512 1.34192123-.227649 1.66708484-.0946325.33121345-.3766371.95084197-.6003915 1.27298482-.0161892.01580846-.0841508.09694273-.1710333.20413492-.1445842.17838247-.2892181.36491271-.4247891.5511244-.0723398.09936149-.1402862.19620479-.2030964.2898938-.2440054.36396314-.400553.66098894-.4512157.90434304-.0659304.3172546-.0893838.4850003-.0966379.6675968-.0017072.0490782-.0017072.0490782-.002845.096677-.0028064.119476-.004437.1671639-.0097087.2545848-.0052654.091322-.0038193.187354.00332.2887353.0103318.1467182.1058713.3478531.1058713.3478531s-.2321503-.0119819-.3742084-.0088758c-.1718098.0037567-.3147843-.0023244-.4138162-.0183342-.1440353-.0228411-.53014068-.5057331-.7278511-.8821737-.30227042-.5764228-1.03604858-.5484427-1.33684295-.0394061-.26854779.4591613-.65918083.9172326-.7740684.9317199-.37404082.0469647-.94643778.0520862-2.07160079.0328144-.09480875-.0016381-.46003446-.0128683-.64600494-.0157445-.18597048-.0028763.05008807-.1790283.02786486-.399297-.03726222-.36933-.15125405-.6704984-.38877094-.8705429-.12241569-.1043631-.26774964-.2393104-.56509654-.5215613-.33323493-.3163366-.44236499-.4185353-.57290215-.533275l-.80130455-.89071892c-.03955779-.05174211-.45812831-.5051399-.5872217-.6688539-.28069963-.35597842-.47062947-.71959073-.56844755-1.14820437-.18921973-.83150113-.1793328-1.21146622-.00855589-1.49112273.13743587-.2257023.43815377-.4195862.60596039-.45241793.17165981-.03465512.55153059-.01648617.62179422.02229321.09902279.05401056.13357243.07300285.16379074.09097645.03572494.02124891.05965747.03799198.08182912.05708809.03426437.02951139.07235014.07170412.12420211.14044502.03611591.04821025.07806642.1053997.1423779.19304882.06054643.0816627.09183576.12069421.13369221.1590035.28038907.25662728.68391532.03238058.65052057-.32606956-.00567036-.06086415-.02203766-.12694598-.05458621-.23708502-.04356824-.15021272.00433013-.05284275-.26002629-.56642281-.08720664-.16942124-.13955864-.28835362-.17428227-.4046158l-.03412852-.10219113c-.03838756-.11059767-.09558223-.26854489-.12612861-.35199347l-.02009957-.05467087.002.008-.05974804-.17751191c-.09232236-.28807194-.13413567-.51358087-.12645475-.72681781.01040781-.28751553.16037753-.54506871.58790983-.70400047.40142488-.1488616 1.07786076.00117106 1.20581167.27856864.04319814.09369738.08927466.21199471.13900415.35457792l.03930997.11680217c.05539717.16759437.13470873.41493582.13860471.42816881.02724222.08344874.0471839.13860719.06943813.18441246.00217869.06301886.00217869.06301886.35429398.23177937.41699479-.29154152.41699479-.29154152.38019201-.37525838.00571063-.08773482.00758408-.17356287.00965287-.37317647.00242546-.23402898.00423842-.33154773.00994479-.45966208.01316411-.29554918.0437926-.51142116.09291227-.63864415.09160418-.23801371.25279279-.40993649.4432431-.46667832.24458613-.07380253.51465245-.09215236.73323569-.04710649zm1.21356228 4.27672201c-.20710459.00095412-.37422255.16961903-.37326843.37672361l.016 3.473c.00095412.20710459.16961903.37422251.37672361.37326841.20710459-.0009541.37422255-.16961901.37326843-.37672359l-.016-3.473c-.00095412-.20710459-.16961903-.37422255-.37672361-.37326843zm2.03332759.00229602c-.2071068 0-.375.16789322-.375.375v3.459c0 .20710678.1678932.375.375.375s.375-.16789322.375-.375v-3.459c0-.20710678-.1678932-.375-.375-.375zm-4.01399856.02930704c-.20710289.00126946-.37396385.17018863-.3726944.37729152l.021 3.426c.00126946.20710289.17018863.37396384.37729152.37269444.20710289-.0012695.37396385-.17018867.3726944-.37729156l-.021-3.426c-.00126946-.20710289-.17018863-.37396385-.37729152-.3726944z", fill: "#fff" })
  ] }) });
}
function Hd() {
  return /* @__PURE__ */ u.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ u.jsx("circle", { cx: "10", cy: "10", r: "8", stroke: "rgba(0,0,0,0.15)", strokeWidth: "2" }),
    /* @__PURE__ */ u.jsx("path", { d: "M10 2A8 8 0 0 1 18 10", stroke: "black", strokeWidth: "2", strokeLinecap: "round" })
  ] });
}
const ic = "M0-8.4 2.55-3.65H-2.55ZM0 8.4 2.55 3.65H-2.55Z";
function Lo({ turn: s }) {
  return /* @__PURE__ */ u.jsx("svg", { width: "21", height: "21", viewBox: "-14 -14 28 28", overflow: "visible", children: /* @__PURE__ */ u.jsxs("g", { transform: `rotate(${s})`, strokeLinejoin: "round", children: [
    /* @__PURE__ */ u.jsx("path", { d: ic, style: { fill: "var(--ss-cursor-edge, #fff)", stroke: "var(--ss-cursor-edge, #fff)" }, strokeWidth: "3.2" }),
    /* @__PURE__ */ u.jsx("path", { d: ic, style: { fill: "var(--ss-cursor-line, #000)", stroke: "var(--ss-cursor-line, #000)" }, strokeWidth: "1.2" })
  ] }) });
}
const Vd = () => /* @__PURE__ */ u.jsx(Lo, { turn: 0 }), Qd = () => /* @__PURE__ */ u.jsx(Lo, { turn: 90 }), Kd = () => /* @__PURE__ */ u.jsx(Lo, { turn: -45 }), Yd = () => /* @__PURE__ */ u.jsx(Lo, { turn: 45 }), sc = {
  pointer: Fd,
  ibeam: Dd,
  crosshair: $d,
  hand: Ud,
  open: Bd,
  grab: Wd,
  wait: Hd,
  "resize-ns": Vd,
  "resize-ew": Qd,
  "resize-nwse": Kd,
  "resize-nesw": Yd
}, Xd = {
  pointer: { x: 7.5, y: 5.25 },
  ibeam: { x: 5, y: 8 },
  crosshair: { x: 8.5, y: 8.5 },
  hand: { x: 9.75, y: 3.25 },
  open: { x: 11.7, y: 10.4 },
  grab: { x: 12, y: 12 },
  wait: { x: 8, y: 8 },
  "resize-ns": { x: 10.5, y: 10.5 },
  "resize-ew": { x: 10.5, y: 10.5 },
  "resize-nwse": { x: 10.5, y: 10.5 },
  "resize-nesw": { x: 10.5, y: 10.5 }
}, Zd = { x: 4, y: 3 };
function Gd() {
  return /* @__PURE__ */ u.jsx("svg", { width: "22", height: "22", viewBox: "0 0 22 22", className: "ss-cursor__arrow", "aria-hidden": !0, children: /* @__PURE__ */ u.jsx("path", { d: "M4 3 18.5 9.6 11.8 11.8 9.6 18.5Z" }) });
}
function qd({ cursorRef: s, style: m = "real", kind: f }) {
  return /* @__PURE__ */ u.jsxs("div", { ref: s, className: "ss-cursor", "data-style": m, "data-kind": f, "aria-hidden": !0, children: [
    m === "touch" && /* @__PURE__ */ u.jsx("span", { className: "ss-cursor__streak" }),
    /* @__PURE__ */ u.jsxs("div", { className: "ss-cursor__press", children: [
      (m === "circle" || m === "touch") && /* @__PURE__ */ u.jsx("span", { className: "ss-cursor__dot" }),
      m !== "circle" && m !== "touch" && Object.keys(sc).map((S) => {
        const j = m === "arrow";
        if (j && S !== "pointer" && S !== "ibeam") return null;
        const _ = j && S === "pointer" ? Gd : sc[S], $ = j && S === "pointer" ? Zd : Xd[S], Z = j && f !== "ibeam" ? "pointer" : f;
        return /* @__PURE__ */ u.jsx(
          "div",
          {
            className: "ss-cursor__glyph",
            "data-glyph": S,
            "data-active": S === Z,
            style: { marginLeft: -$.x, marginTop: -$.y, transformOrigin: `${$.x}px ${$.y}px` },
            children: /* @__PURE__ */ u.jsx(_, {})
          },
          S
        );
      })
    ] })
  ] });
}
function Jd(s, m) {
  const f = document.createElement("span");
  f.className = "ss-ripple", f.style.left = `${m.x}px`, f.style.top = `${m.y}px`, s.appendChild(f), f.addEventListener("animationend", () => f.remove());
}
const wc = z.createContext({
  theme: "light",
  palette: "accent",
  fidelity: "standard",
  layout: "wide"
}), bd = () => z.useContext(wc), xc = z.createContext(!1);
function kc() {
  const s = z.useContext(xc), [m, f] = z.useState(!1);
  return z.useEffect(() => {
    const S = window.matchMedia("(prefers-reduced-motion: reduce)"), j = () => f(S.matches);
    return j(), S.addEventListener("change", j), () => S.removeEventListener("change", j);
  }, []), s || m;
}
const Gn = {
  now: () => performance.now(),
  raf: (s) => requestAnimationFrame(s),
  cancelRaf: (s) => cancelAnimationFrame(s),
  // Layout must finish even when a preview is paused. Keep these callbacks
  // separate: running arbitrary motion RAFs at a frozen timestamp can still
  // advance a spring that integrates once per callback.
  layoutRaf: (s) => Gn.recording?.requestLayoutFrame(s) ?? requestAnimationFrame(s),
  cancelLayoutRaf: (s) => {
    const m = Gn.recording;
    m ? m.cancelLayoutFrame(s) : cancelAnimationFrame(s);
  },
  timeout: (s, m) => window.setTimeout(s, m),
  clearTimeout: (s) => window.clearTimeout(s),
  /** The recorder's control while one drives the page, else null. */
  get recording() {
    return typeof window > "u" ? null : window.__stageshow?.clock ?? null;
  }
}, e0 = {};
function ks({
  width: s,
  height: m,
  initial: f = e0,
  script: S,
  poster: j,
  cursor: _,
  hover: $,
  play: Z = "loop",
  compact: I,
  keys: te = "bottom",
  palette: ne = "accent",
  greys: re,
  fidelity: le = "standard",
  specimen: ie,
  unframed: B,
  speed: b = 1,
  accent: K,
  tokens: _e,
  ground: ce,
  fill: Me = !1,
  theme: ee = "light",
  className: Q,
  children: de
}) {
  const Se = Z === "hover" && typeof window < "u" && window.matchMedia("(hover: none)").matches ? "once" : Z, [M, Be] = z.useState("wide"), ve = z.useRef(M);
  ve.current = M;
  const ge = () => {
    const O = _.at;
    return typeof O == "object" && "wide" in O ? O[ve.current] : O;
  }, [Te, pe] = z.useState(!1), Ee = M === "compact" && I ? I.width : s, We = M === "compact" && I ? I.height : m, Ne = z.useRef(null), se = z.useRef(null), L = z.useRef(null), H = kc(), P = !S || H, [a, h] = z.useState(() => P && j ? j : f), w = z.useRef(a);
  w.current = a;
  const [x, k] = z.useState(1), T = z.useRef(1);
  T.current = x;
  const Y = typeof window > "u" ? {} : window.__stageshow ?? {}, G = b / (Y.slow ?? 1), F = Y.theme ?? ee, [X, Re] = z.useState(_?.kind ?? "pointer"), we = (O) => {
    const ue = se.current;
    !ue || H || Jd(ue, O);
  }, Le = z.useRef(X);
  Le.current = X;
  const [Xe, Qe] = z.useState({ id: 0, caps: [], show: !1, down: !1 }), [qt, he] = z.useState(null), Ke = z.useRef(Xe);
  Ke.current = Xe;
  const ke = z.useRef({ x: 0, y: 0 }), Pe = z.useRef(null), [xt, Jt] = z.useState(0), kt = z.useRef(!1), bt = z.useRef(!1), Mn = z.useRef(null);
  z.useLayoutEffect(() => {
    const O = Ne.current;
    if (!O) return;
    const ue = () => {
      const Ce = O.clientWidth, nt = !!O.parentElement?.closest("[data-ss-wide]"), Nt = I && !nt && Ce < I.below ? "compact" : "wide";
      Be(Nt);
      const ut = Me || !!O.parentElement?.closest("[data-ss-fill]");
      pe(ut);
      const at = Nt === "compact" ? I.width : s, rt = Math.min(ut ? 2 : 1, Ce / at);
      k(rt), Jt(Math.max(0, (Ce - at * rt) / 2));
    };
    ue();
    const me = new ResizeObserver(ue);
    me.observe(O);
    const ae = new MutationObserver(ue);
    for (let Ce = O.parentElement; Ce; Ce = Ce.parentElement)
      ae.observe(Ce, { attributes: !0, attributeFilter: ["data-ss-wide", "data-ss-fill"] });
    return () => {
      me.disconnect(), ae.disconnect();
    };
  }, [s, I?.below, I?.width, Me]);
  const [Tn, Vt] = z.useState({}), fn = z.useCallback(() => {
    const O = se.current;
    if (!O) return {};
    const ue = {}, me = O.querySelectorAll("[data-target]");
    if (!me.length) return ue;
    const ae = xs(O, T.current);
    return me.forEach((Ce) => {
      ue[Ce.dataset.target] = Ld(O, Ce, T.current, ae);
    }), ue;
  }, []), qn = z.useRef({ n: 0, frame: 0, owed: !1 }), St = z.useCallback(() => {
    const O = qn.current;
    if (O.frame || (O.frame = Gn.layoutRaf(() => {
      if (O.n = 0, O.frame = 0, !O.owed) return;
      O.owed = !1;
      const me = fn();
      Vt((ae) => lc(ae, me) ? ae : me);
    })), O.n >= 4) {
      O.owed = !0;
      return;
    }
    O.n++;
    const ue = fn();
    Vt((me) => lc(me, ue) ? me : ue);
  }, [fn]);
  z.useLayoutEffect(St), z.useLayoutEffect(() => () => {
    Gn.cancelLayoutRaf(qn.current.frame), qn.current = { n: 0, frame: 0, owed: !1 };
  }, []), z.useEffect(() => {
    const O = se.current;
    if (O)
      return O.addEventListener("transitionend", St), O.addEventListener("animationend", St), () => {
        O.removeEventListener("transitionend", St), O.removeEventListener("animationend", St);
      };
  }, [St]);
  const On = z.useCallback((O) => Tn[O] ?? mc, [Tn]), [zo, Nr] = z.useState(!0);
  z.useLayoutEffect(() => {
    Nr(!0);
    let O = !0, ue = 0;
    const me = () => {
      ue = Gn.layoutRaf(() => {
        ue = Gn.layoutRaf(() => O && Nr(!1));
      });
    };
    return !document.fonts || document.fonts.status === "loaded" ? me() : document.fonts.ready.then(() => O && me()), () => {
      O = !1, Gn.cancelLayoutRaf(ue);
    };
  }, [M]);
  const en = z.useRef(0), An = z.useRef(0), tn = z.useRef(!1), In = z.useRef(null), Qt = z.useCallback((O) => {
    An.current && !tn.current && Math.hypot(O.x - ke.current.x, O.y - ke.current.y) > 0.5 && (tn.current = !0, In.current ??= performance.now() - An.current), ke.current = O, en.current = performance.now();
    const ue = L.current;
    ue && (ue.style.transform = `translate(${O.x}px, ${O.y}px)`, ue.removeAttribute("data-idle"));
  }, []), Ot = z.useCallback((O) => {
    typeof O == "object" && O !== null && "wide" in O && (O = ve.current === "compact" ? O.compact : O.wide);
    const ue = vc(O);
    if (ue === null) return O;
    const me = se.current, ae = me?.querySelector(`[data-target="${ue}"]`);
    if (!me || !ae)
      return jr(`no element with data-target="${ue}"`), ke.current;
    const Ce = hl(me, ae, T.current), nt = typeof O == "string" ? { x: 0.5, y: 0.5 } : O;
    return { x: Ce.x + Ce.width * nt.x, y: Ce.y + Ce.height * nt.y };
  }, []);
  z.useLayoutEffect(() => {
    if (!P || !$) return;
    const O = se.current;
    $.forEach((ue) => O?.querySelector(`[data-target="${ue}"]`)?.setAttribute("data-hover", ""));
  }), z.useLayoutEffect(() => {
    _ && !An.current && Qt(Ot(ge()));
  }, [x, M]);
  const Fn = z.useRef(0), dt = z.useRef(0), At = z.useCallback(() => {
    ++Fn.current, cancelAnimationFrame(dt.current), dt.current = 0, se.current?.removeAttribute("data-settling");
  }, []), Jn = z.useCallback((O = !1) => {
    At();
    const ue = Fn.current;
    if (bt.current = !1, h(f), Re(_?.kind ?? "pointer"), Qe((ae) => ({ ...ae, show: !1, down: !1 })), he(null), se.current?.querySelectorAll("[data-hover],[data-pressed]").forEach((ae) => {
      ae.removeAttribute("data-hover"), ae.removeAttribute("data-pressed");
    }), se.current?.removeAttribute("data-mark"), se.current?.querySelectorAll("[data-scrolled]").forEach((ae) => {
      ae.scrollTop = 0, ae.removeAttribute("data-scrolled"), yc(ae);
    }), se.current?.querySelectorAll("[data-scrolling]").forEach((ae) => ae.removeAttribute("data-scrolling")), L.current?.removeAttribute("data-pressed"), Mn.current = null, !_) return;
    if (!O) {
      dt.current = requestAnimationFrame(() => {
        dt.current = 0, Qt(Ot(ge())), Pe.current?.(ke.current);
      });
      return;
    }
    const me = se.current;
    me?.setAttribute("data-settling", ""), dt.current = requestAnimationFrame(() => {
      const ae = { ...ke.current }, Ce = Ot(ge()), nt = _r(320 + Math.hypot(Ce.x - ae.x, Ce.y - ae.y) * 0.7, 380, 700), Nt = performance.now(), ut = () => {
        if (Fn.current !== ue) return;
        const at = Math.min(1, (performance.now() - Nt) / nt), rt = No(at);
        Qt({ x: ae.x + (Ce.x - ae.x) * rt, y: ae.y + (Ce.y - ae.y) * rt }), at < 1 ? dt.current = requestAnimationFrame(ut) : (dt.current = 0, me?.removeAttribute("data-settling"));
      };
      ut();
    });
  }, [M]), Rr = z.useMemo(
    () => (O) => Ad(O, {
      rootRef: se,
      cursorRef: L,
      pos: ke,
      hovered: Mn,
      kindRef: Le,
      keysRef: Ke,
      dragging: bt,
      autoUsed: kt,
      autoRef: Pe,
      scaleRef: T,
      speed: G,
      layout: M,
      cursor: _,
      resolve: Ot,
      place: Qt,
      remeasure: St,
      ripple: we,
      setState: h,
      setKind: Re,
      setKeys: Qe,
      setLastKeys: he
    }),
    [Ot, Qt, G, M]
    // eslint-disable-line react-hooks/exhaustive-deps
  );
  z.useEffect(() => {
    const O = se.current;
    if (P || !S)
      return Jn(), O.removeAttribute("data-offscreen"), h(j ?? f), At;
    Jn();
    const ue = Ne.current;
    let me = null, ae = !1, Ce = !1, nt = !1;
    const Nt = _?.idle ?? 4e3, ut = 1200;
    let at = 0, rt = 0;
    const Lr = () => {
      window.clearInterval(at), !(!_ || Nt === !1) && (en.current = performance.now(), at = window.setInterval(() => {
        const Ie = L.current;
        if (!Ie) return;
        const pt = performance.now();
        if (!tn.current) {
          In.current === null && pt - en.current > ut && Ie.setAttribute("data-idle", "");
          return;
        }
        Ie.hasAttribute("data-pressed") || se.current?.querySelector("[data-hover]") ? en.current = pt : pt - en.current > Nt && Ie.setAttribute("data-idle", "");
      }, 150));
    }, Mo = () => {
      An.current = performance.now(), tn.current = !1, window.clearTimeout(rt);
      const Ie = L.current, pt = In.current;
      Nt === !1 || !Ie || pt === null || pt <= ut || (Ie.setAttribute("data-idle", ""), rt = window.setTimeout(() => Ie.removeAttribute("data-idle"), pt - 400));
    }, Pr = () => {
      window.clearInterval(at), window.clearTimeout(rt), An.current = 0, L.current?.removeAttribute("data-idle");
    }, To = () => {
      window.clearInterval(at), window.clearTimeout(rt);
      const Ie = L.current, pt = () => Ie?.hasAttribute("data-pressed") || O.querySelector("[data-hover]");
      if (!_ || Nt === !1 || !Ie || Ie.hasAttribute("data-idle") || pt()) return;
      const tr = (tn.current ? Nt : ut) - (performance.now() - en.current);
      rt = window.setTimeout(() => {
        pt() || Ie.setAttribute("data-idle", "");
      }, Math.max(0, tr));
    }, It = () => {
      if (me || nt || !ae || document.hidden || Se === "hover" && !Ce) return;
      At(), _ && Qt(Ot(ge())), me = new AbortController();
      const Ie = me.signal;
      Lr();
      const pt = Rr(Ie);
      (async () => {
        do {
          Mo();
          try {
            await S(pt);
          } catch (tr) {
            if (tr instanceof Cr) return;
            console.error("[stageshow] script error", tr), me = null, Pr();
            return;
          }
          Se === "loop" && gc() && Id(w.current, f, ke.current, _ ? Ot(ge()) : null);
        } while (Se === "loop" && !Ie.aborted);
        Se === "once" && !Ie.aborted && (nt = !0, To());
      })();
    }, bn = (Ie = !1) => {
      Pr(), me && (me.abort(), me = null, nt || Jn(Ie));
    }, er = () => O.toggleAttribute("data-offscreen", !ae || document.hidden);
    er();
    const gl = new IntersectionObserver(([Ie]) => {
      ae = Ie.isIntersecting, er(), ae ? It() : bn();
    });
    gl.observe(ue);
    const zr = () => {
      er(), document.hidden ? bn() : It();
    };
    document.addEventListener("visibilitychange", zr);
    const Mr = () => {
      Ce = !0, It();
    }, Tr = () => {
      Ce = !1, bn(!0);
    };
    return Se === "hover" && (ue.addEventListener("pointerenter", Mr), ue.addEventListener("pointerleave", Tr)), () => {
      gl.disconnect(), document.removeEventListener("visibilitychange", zr), ue.removeEventListener("pointerenter", Mr), ue.removeEventListener("pointerleave", Tr), Pr(), me?.abort(), me = null, Pe.current = null, At();
    };
  }, [P, S, Rr, Se, M]), z.useLayoutEffect(() => {
    _ && !P && !bt.current && Pe.current?.(ke.current);
  }, [a]);
  const vl = z.useMemo(() => ({ theme: F, palette: ne, fidelity: le, layout: M }), [F, ne, le, M]), yl = _ && (!S || !P || _.still);
  return /* @__PURE__ */ u.jsx("div", { ref: Ne, className: `ss-fit${Q ? ` ${Q}` : ""}`, style: { maxWidth: Te ? void 0 : s, height: We * x }, children: /* @__PURE__ */ u.jsxs(
    "div",
    {
      ref: se,
      className: "ss-stage",
      "data-specimen": ie || void 0,
      "data-unframed": B || void 0,
      "data-still": P || void 0,
      "data-placing": zo || void 0,
      "data-theme": F,
      "data-palette": ne,
      "data-greys": re === "cool" ? "cool" : void 0,
      "data-fidelity": le,
      "data-layout": M,
      style: {
        width: Ee,
        height: We,
        marginLeft: xt || void 0,
        transform: `scale(${x})`,
        ..._e,
        ...K ? { "--ss-accent": K, "--ss-accent-2": K, "--ss-accent-soft": `color-mix(in srgb, ${K} 14%, transparent)` } : null
      },
      children: [
        ce && /* @__PURE__ */ u.jsx(
          "div",
          {
            className: "ss-ground",
            "aria-hidden": !0,
            style: Array.isArray(ce) ? { "--ss-orb-1": ce[0], "--ss-orb-2": ce[1], ...ce[2] ? { "--ss-orb-3": ce[2] } : null } : void 0
          }
        ),
        /* @__PURE__ */ u.jsx(xc.Provider, { value: P, children: /* @__PURE__ */ u.jsx(wc.Provider, { value: vl, children: de(a, On, M) }) }),
        S && /* @__PURE__ */ u.jsx(Nd, { rows: [qt, Xe], at: typeof te == "string" ? te : te[M] }),
        yl && /* @__PURE__ */ u.jsx(qd, { cursorRef: L, style: _.style, kind: X })
      ]
    }
  ) });
}
const t0 = { w: 402, h: 874, r: 64 }, uc = { a: 71, n: 2.31 }, n0 = { w: 393, h: 829, r: 42 }, r0 = { w: 412, h: 915, r: 38 }, l0 = {
  pro: { band: 3, glass: 10 },
  // Apple's photograph of the iPhone 18 Pro (its product bezel): the body runs
  // 16pt past the screen on every side; the image itself is drawn over it
  photo: { band: 0, glass: 16 },
  bezel: { band: 0, glass: 12 },
  soft: { band: 0, glass: 12.5 },
  bare: { band: 0, glass: 0 },
  silver: { band: 4, glass: 9 },
  clay: { band: 0, glass: 16 },
  outline: { band: 0, glass: 8 },
  android: { band: 2, glass: 9 }
}, o0 = {
  pro: [[13, "band"], [10, "var(--ss-phone-rim)"], [9.25, "var(--ss-phone-glass)"]],
  silver: [[13, "band"], [9, "var(--ss-phone-glass)"]],
  bezel: [[12, "var(--ss-phone-glass)"]],
  clay: [[16, "clay"], [1, "var(--ss-phone-seam)"]]
};
function i0(s, m, f, S) {
  const _ = 2 / S, $ = [];
  return [
    [s - f, f, 1, -1],
    [s - f, m - f, 1, 1],
    [f, m - f, -1, 1],
    [f, f, -1, -1]
  ].forEach(([I, te, ne, re], le) => {
    for (let ie = 0; ie <= 32; ie++) {
      const B = ie / 32 * (Math.PI / 2), b = le % 2 === 0 ? Math.sin(B) : Math.cos(B), K = le % 2 === 0 ? Math.cos(B) : Math.sin(B);
      $.push(`${(I + ne * f * Math.pow(b, _)).toFixed(2)} ${(te + re * f * Math.pow(K, _)).toFixed(2)}`);
    }
  }), `M${$.join("L")}Z`;
}
function Ss({ width: s, frame: m = "pro", time: f = "9:41", island: S, status: j, dark: _, wallpaper: $, className: Z, style: I, children: te, ...ne }) {
  const re = z.useRef(null), [le, ie] = z.useState(!0);
  z.useEffect(() => {
    if (m !== "photo" || !re.current) return;
    const Ee = getComputedStyle(re.current).backgroundImage.match(/url\(["']?([^"')]+)["']?\)/)?.[1];
    if (!Ee) return void ie(!1);
    let We = !0;
    const Ne = new Image();
    return Ne.onerror = () => We && ie(!1), Ne.src = Ee, () => {
      We = !1;
    };
  }, [m, _]);
  const B = m === "photo" && !le ? "pro" : m, { band: b, glass: K } = l0[B], { fidelity: _e } = bd(), ce = B === "android" ? r0 : B === "soft" ? n0 : t0, Me = b + K, ee = s / (ce.w + Me * 2), Q = (pe) => pe * ee, de = z.useId().replace(/:/g, ""), M = B !== "android" && B !== "soft" ? i0(Q(ce.w), Q(ce.h), Q(uc.a), uc.n) : null, Be = o0[B], ve = B === "pro" || B === "photo" || B === "bezel" || B === "silver" || B === "android", ge = S ?? (ve && B !== "photo"), Te = j ?? ve;
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      ...ne,
      className: `ss-phone${Z ? ` ${Z}` : ""}`,
      "data-frame": B,
      "data-dark": _ || void 0,
      style: {
        width: s,
        height: Q(ce.h + Me * 2),
        padding: Q(b),
        borderRadius: Q(ce.r + Me),
        "--ps": `${ee}px`,
        ...I
      },
      children: [
        (Be || B === "outline") && M && /* @__PURE__ */ u.jsxs("svg", { className: "ss-phone__bands", width: "100%", height: "100%", "aria-hidden": !0, children: [
          /* @__PURE__ */ u.jsxs("defs", { children: [
            /* @__PURE__ */ u.jsx("linearGradient", { id: `${de}-band`, x1: "0.2", y1: "0", x2: "0.8", y2: "1", children: [0, 0.22, 0.48, 0.74, 1].map((pe, Ee) => /* @__PURE__ */ u.jsx("stop", { offset: pe, style: { stopColor: `var(--ss-phone-band-${Ee + 1})` } }, pe)) }),
            /* @__PURE__ */ u.jsxs("linearGradient", { id: `${de}-clay`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
              /* @__PURE__ */ u.jsx("stop", { offset: "0", style: { stopColor: "var(--ss-phone-clay-top)" } }),
              /* @__PURE__ */ u.jsx("stop", { offset: "1", style: { stopColor: "var(--ss-phone-clay-bottom)" } })
            ] }),
            B === "outline" && // Line art: a ring between 7 and 8pt out, cut from a mask so it is one hairline
            /* @__PURE__ */ u.jsxs("mask", { id: `${de}-ring`, maskUnits: "userSpaceOnUse", x: "-50%", y: "-50%", width: "200%", height: "200%", children: [
              /* @__PURE__ */ u.jsx("path", { d: M, fill: "none", stroke: "#fff", strokeWidth: Q(16) }),
              /* @__PURE__ */ u.jsx("path", { d: M, fill: "none", stroke: "#000", strokeWidth: Q(16) - 2 })
            ] })
          ] }),
          /* @__PURE__ */ u.jsx("g", { transform: `translate(${Q(Me)} ${Q(Me)})`, strokeLinejoin: "round", children: B === "outline" ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsx("rect", { x: -Q(9), y: -Q(9), width: Q(ce.w + 18), height: Q(ce.h + 18), mask: `url(#${de}-ring)`, style: { fill: "var(--ss-phone-line)" } }),
            /* @__PURE__ */ u.jsx("path", { d: M, fill: "none", strokeWidth: "2", style: { stroke: "var(--ss-line, rgba(0, 0, 0, 0.06))" } })
          ] }) : Be.map(([pe, Ee]) => /* @__PURE__ */ u.jsx(
            "path",
            {
              d: M,
              fill: "none",
              strokeWidth: Q(pe * 2),
              stroke: Ee === "band" || Ee === "clay" ? `url(#${de}-${Ee})` : void 0,
              style: Ee === "band" || Ee === "clay" ? void 0 : { stroke: Ee }
            },
            pe
          )) })
        ] }),
        /* @__PURE__ */ u.jsx("div", { className: "ss-phone__glass", style: { padding: Q(K), borderRadius: Q(ce.r + K) }, children: /* @__PURE__ */ u.jsx(
          "div",
          {
            className: "ss-phone__window",
            style: {
              width: Q(ce.w),
              height: Q(ce.h),
              borderRadius: M ? void 0 : Q(ce.r),
              clipPath: M ? `path('${M}')` : void 0
            },
            children: /* @__PURE__ */ u.jsxs(
              "div",
              {
                className: "ss-phone__screen",
                style: { width: ce.w, height: ce.h, transform: `scale(${ee})`, "--ss-screen-r": `${ce.r}px`, ...$ ? { background: $ } : null },
                children: [
                  Te && /* @__PURE__ */ u.jsxs("div", { className: "ss-phone__status", children: [
                    /* @__PURE__ */ u.jsx("span", { className: "ss-phone__time", children: _e === "minimal" ? /* @__PURE__ */ u.jsx("span", { className: "ss-phone__time-bar" }) : f }),
                    /* @__PURE__ */ u.jsxs("span", { className: "ss-phone__glyphs", children: [
                      /* @__PURE__ */ u.jsx(u0, {}),
                      /* @__PURE__ */ u.jsx(a0, {}),
                      /* @__PURE__ */ u.jsx(c0, {})
                    ] })
                  ] }),
                  ge && /* @__PURE__ */ u.jsx("span", { className: "ss-phone__island" }),
                  /* @__PURE__ */ u.jsx("div", { className: "ss-phone__content", "data-status": Te || void 0, children: te }),
                  ve && /* @__PURE__ */ u.jsx("span", { className: "ss-phone__home" })
                ]
              }
            )
          }
        ) }),
        B === "photo" && // The bezel image is 450 × 920pt with the screen at (24, 23): laid over
        // the body so its cut-out frames the screen exactly
        /* @__PURE__ */ u.jsx("span", { ref: re, className: "ss-phone__photo", style: { left: Q(-8), top: Q(-7), width: Q(450), height: Q(920) } })
      ]
    }
  );
}
function s0({ date: s = "Tuesday, October 21", time: m = "9:41", controls: f = !0, stack: S = "bottom", size: j = "full", clock: _ = !0, className: $, children: Z, ...I }) {
  return /* @__PURE__ */ u.jsxs("div", { ...I, className: `ss-lock${$ ? ` ${$}` : ""}`, "data-size": j, "data-clock": _ ? void 0 : "off", children: [
    _ && /* @__PURE__ */ u.jsx("div", { className: "ss-lock__date", children: s }),
    _ && /* @__PURE__ */ u.jsx("div", { className: "ss-lock__clock", children: m }),
    /* @__PURE__ */ u.jsx("div", { className: "ss-lock__stack", "data-at": S, children: Z }),
    f && j === "full" && /* @__PURE__ */ u.jsxs("div", { className: "ss-lock__controls", children: [
      /* @__PURE__ */ u.jsx("span", { className: "ss-lock__control", children: /* @__PURE__ */ u.jsx("svg", { viewBox: "0 0 24 24", width: "22", height: "22", "aria-hidden": !0, children: /* @__PURE__ */ u.jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M7.6 1.6h8.8a1.6 1.6 0 0 1 1.6 1.6v1.9H6V3.2a1.6 1.6 0 0 1 1.6-1.6ZM6 6h12l-2.6 4v10.4a2 2 0 0 1-2 2h-2.8a2 2 0 0 1-2-2V10ZM10.6 14a1.4 1.4 0 1 0 2.8 0 1.4 1.4 0 1 0-2.8 0Z"
        }
      ) }) }),
      /* @__PURE__ */ u.jsx("span", { className: "ss-lock__control", children: /* @__PURE__ */ u.jsx("svg", { viewBox: "0 0 24 24", width: "24", height: "24", "aria-hidden": !0, children: /* @__PURE__ */ u.jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M4.6 6.6h3.3l1.2-1.8a1.3 1.3 0 0 1 1.1-.6h3.6a1.3 1.3 0 0 1 1.1.6l1.2 1.8h3.3A2.6 2.6 0 0 1 22 9.2v8.6a2.6 2.6 0 0 1-2.6 2.6H4.6A2.6 2.6 0 0 1 2 17.8V9.2a2.6 2.6 0 0 1 2.6-2.6ZM7.5 13.4a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0ZM9 13.4a3 3 0 1 0 6 0 3 3 0 1 0-6 0Z"
        }
      ) }) })
    ] })
  ] });
}
function u0() {
  return /* @__PURE__ */ u.jsx("svg", { viewBox: "0 0 20.33 13.67", width: "20.33", height: "13.67", className: "ss-phone__glyph ss-phone__signal", children: [6.33, 8.67, 11, 13.67].map((s, m) => /* @__PURE__ */ u.jsx("rect", { x: m * 5.667, y: 13.67 - s, width: 3.333, height: s, rx: 1.667, fill: "currentColor" }, m)) });
}
function a0() {
  return /* @__PURE__ */ u.jsx("svg", { viewBox: "0 0 19.33 14.33", width: "19.33", height: "14.33", className: "ss-phone__glyph ss-phone__wifi", children: /* @__PURE__ */ u.jsx("path", { fillRule: "evenodd", fill: "currentColor", d: "M0.415933 5.54283C0.902185 6.04412 1.66017 5.95818 2.27513 5.41393C4.30595 3.58064 6.83731 2.63535 9.66901 2.63535C12.5007 2.63535 15.0464 3.60928 17.0629 5.41393C17.6636 5.97251 18.4215 6.0298 18.9221 5.54283C19.4226 5.02722 19.4942 4.2538 18.9793 3.70954C16.8341 1.51819 13.3302 0 9.66901 0C6.00783 0 2.48965 1.53251 0.358727 3.72387C-0.156127 4.2538 -0.0989213 5.02722 0.415933 5.55715L0.415933 5.54283ZM3.94841 9.13779C4.50617 9.68205 5.22124 9.62476 5.85051 9.10915C6.88022 8.29276 8.25316 7.73418 9.66901 7.7485C11.0706 7.7485 12.4435 8.29276 13.4875 9.12347C14.1168 9.63908 14.8605 9.66773 15.4039 9.12347C15.9331 8.57921 16.0189 7.7485 15.4611 7.23289C14.0739 5.98683 11.9859 5.11315 9.68332 5.11315C7.38077 5.11315 5.27845 5.98683 3.9055 7.23289C3.41925 7.69121 3.31914 8.47896 3.96271 9.13779L3.94841 9.13779ZM8.72511 13.8929C9.34008 14.4801 9.98365 14.4801 10.5986 13.8929L11.757 12.7757C12.372 12.1742 12.5007 11.4151 11.7999 10.8995C11.2136 10.4841 10.4699 10.212 9.66901 10.212C8.86813 10.212 8.11015 10.4841 7.53809 10.9138C6.83731 11.4151 6.98033 12.1885 7.59529 12.7757L8.73942 13.8929L8.72511 13.8929Z" }) });
}
function c0() {
  return /* @__PURE__ */ u.jsxs("svg", { viewBox: "0 0 29.33 13.67", width: "29.33", height: "13.67", className: "ss-phone__glyph ss-phone__battery", children: [
    /* @__PURE__ */ u.jsx("path", { fill: "currentColor", d: "M0 6.4C0 4.15979 0 3.03969 0.435974 2.18404C0.819467 1.43139 1.43139 0.819467 2.18404 0.435974C3.03969 0 4.15979 0 6.4 0L19.933 0C22.1732 0 23.2933 0 24.149 0.435974C24.9016 0.819467 25.5135 1.43139 25.897 2.18404C26.333 3.03969 26.333 4.15979 26.333 6.4L26.333 7.26666C26.333 9.50687 26.333 10.627 25.897 11.4826C25.5135 12.2353 24.9016 12.8472 24.149 13.2307C23.2933 13.6667 22.1732 13.6667 19.933 13.6667L6.4 13.6667C4.15979 13.6667 3.03969 13.6667 2.18404 13.2307C1.43139 12.8472 0.819467 12.2353 0.435974 11.4826C0 10.627 0 9.50687 0 7.26666L0 6.4Z" }),
    /* @__PURE__ */ u.jsx("path", { fillRule: "evenodd", fill: "currentColor", transform: "translate(27.33 4.33)", d: "M0 0L0 5C0.601505 4.8625 2 3.75 2 2.5C2 1.25 0.601505 0.1375 0 0Z" })
  ] });
}
const f0 = "012345678901234567890123456789".split(""), jo = 10, d0 = (s) => {
  const m = /^(.*\d)(\s*)([^\d\s.,]+)$/.exec(s);
  return m ? { head: m[1], space: m[2].length > 0, unit: m[3] } : { head: s, space: !1, unit: "" };
}, ac = (s) => {
  const m = [];
  for (let f = s.length - 1; f >= 0; f--) {
    const S = s[f];
    S >= "0" && S <= "9" && m.push(Number(S));
  }
  return m;
};
function ml({ value: s, format: m = (Z) => Math.round(Z).toLocaleString("en-US"), duration: f = 700, stagger: S = 45, className: j, style: _, ...$ }) {
  const Z = kc(), I = z.useRef(null), te = m(s), { head: ne, space: re, unit: le } = d0(te), ie = ne.split(""), B = ac(te), [b, K] = z.useState(() => B.map((ee) => jo + ee)), _e = z.useRef({ text: te, value: s, idx: b });
  _e.current.idx = b;
  const ce = z.useRef(!1);
  z.useLayoutEffect(() => {
    const ee = I.current;
    if (!ee) return;
    const Q = _e.current;
    if (Q.text === te) return;
    const de = Z || f <= 0 || !!ee.closest("[data-instant], [data-offscreen]"), Se = ac(Q.text), M = s >= Q.value, Be = B.map((ve, ge) => {
      const Te = Se[ge], pe = Q.idx[ge];
      return Te === void 0 || pe === void 0 || de ? jo + ve : Te === ve ? pe : M ? pe + (ve - Te + 10) % 10 : pe - (Te - ve + 10) % 10;
    });
    if (ee.toggleAttribute("data-snap", de), !de) {
      for (const ve of Array.from(ee.querySelectorAll(".ss-count__strip"))) getComputedStyle(ve).transform;
      ee.setAttribute("data-rolling", "");
    }
    _e.current = { text: te, value: s, idx: Be }, K(Be);
  }, [te, s, Z, f]), z.useEffect(() => {
    const ee = I.current;
    if (!ee || !ee.hasAttribute("data-rolling")) return;
    const Q = window.setTimeout(() => {
      ee.setAttribute("data-snap", ""), ce.current = !0;
      const de = B.map((Se) => jo + Se);
      _e.current.idx = de, K(de), ee.removeAttribute("data-rolling");
    }, f + S * B.length + 60);
    return () => window.clearTimeout(Q);
  }, [b]), z.useLayoutEffect(() => {
    const ee = I.current;
    if (!(!ee || !ce.current)) {
      ce.current = !1;
      for (const Q of Array.from(ee.querySelectorAll(".ss-count__strip"))) getComputedStyle(Q).transform;
      ee.removeAttribute("data-snap");
    }
  }, [b]);
  let Me = B.length;
  return /* @__PURE__ */ u.jsxs("span", { ...$, ref: I, className: `ss-count${j ? ` ${j}` : ""}`, style: _, "aria-label": te, children: [
    ie.map((ee, Q) => {
      if (ee < "0" || ee > "9") return /* @__PURE__ */ u.jsx("span", { className: "ss-count__char", "aria-hidden": !0, children: ee }, `s${Q}-${ee}`);
      const de = --Me, Se = b[de] ?? jo + Number(ee);
      return /* @__PURE__ */ u.jsx("span", { className: "ss-count__digit", "data-crop": !0, "aria-hidden": !0, children: /* @__PURE__ */ u.jsx(
        "span",
        {
          className: "ss-count__strip",
          style: { transform: `translateY(${-Se}em)`, transitionDuration: `${f}ms`, transitionDelay: `${de * S}ms` },
          children: f0.map((M, Be) => /* @__PURE__ */ u.jsx("span", { children: M }, Be))
        }
      ) }, `d${de}`);
    }),
    le && /* @__PURE__ */ u.jsx("span", { className: "ss-count__unit", "data-space": re || void 0, "aria-hidden": !0, children: le })
  ] });
}
const p0 = ["var(--ss-ink-1)", "var(--ss-ink-2)", "var(--ss-ink-3)", "var(--ss-ink-4)", "var(--ss-ink-5)"];
function h0({ w: s, h: m = 6, tone: f = 3, r: S = 2, shrink: j, className: _, style: $, ...Z }) {
  const I = j ?? (typeof s == "number" && s > m * 3);
  return /* @__PURE__ */ u.jsx("span", { ...Z, className: `ss-bar${_ ? ` ${_}` : ""}`, "data-shrink": I || void 0, style: { width: s, height: m, borderRadius: S, background: p0[f - 1], ...$ } });
}
function cc({ lead: s, title: m, subtitle: f, meta: S, preview: j, unread: _, selected: $, pad: Z = 12, className: I, style: te, children: ne, ...re }) {
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      ...re,
      className: `ss-row${I ? ` ${I}` : ""}`,
      "data-selected": $ || void 0,
      "data-unread": _ || void 0,
      "data-lead": s ? "" : void 0,
      style: { "--ss-row-pad": `${Z}px`, ...te },
      children: [
        _ && /* @__PURE__ */ u.jsx("span", { className: "ss-row__dot", "aria-hidden": !0 }),
        s && /* @__PURE__ */ u.jsx("span", { className: "ss-row__lead", children: s }),
        /* @__PURE__ */ u.jsxs("span", { className: "ss-row__body", children: [
          /* @__PURE__ */ u.jsxs("span", { className: "ss-row__head", children: [
            /* @__PURE__ */ u.jsx("span", { className: "ss-row__title", children: m }),
            S && /* @__PURE__ */ u.jsx("span", { className: "ss-row__meta", children: S })
          ] }),
          f && /* @__PURE__ */ u.jsx("span", { className: "ss-row__subtitle", children: f })
        ] }),
        j && (Array.isArray(j) && j.every((le) => typeof le == "number") ? /* @__PURE__ */ u.jsx("span", { className: "ss-row__preview", "aria-hidden": !0, children: j.map((le, ie) => /* @__PURE__ */ u.jsx(h0, { w: le, h: 6, tone: 2 }, ie)) }) : /* @__PURE__ */ u.jsx("span", { className: "ss-row__preview", "data-text": !0, children: j })),
        ne
      ]
    }
  );
}
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m0 = (s) => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Sc = (...s) => s.filter((m, f, S) => !!m && m.trim() !== "" && S.indexOf(m) === f).join(" ").trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var v0 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y0 = z.forwardRef(
  ({
    color: s = "currentColor",
    size: m = 24,
    strokeWidth: f = 2,
    absoluteStrokeWidth: S,
    className: j = "",
    children: _,
    iconNode: $,
    ...Z
  }, I) => z.createElement(
    "svg",
    {
      ref: I,
      ...v0,
      width: m,
      height: m,
      stroke: s,
      strokeWidth: S ? Number(f) * 24 / Number(m) : f,
      className: Sc("lucide", j),
      ...Z
    },
    [
      ...$.map(([te, ne]) => z.createElement(te, ne)),
      ...Array.isArray(_) ? _ : [_]
    ]
  )
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zn = (s, m) => {
  const f = z.forwardRef(
    ({ className: S, ...j }, _) => z.createElement(y0, {
      ref: _,
      iconNode: m,
      className: Sc(`lucide-${m0(s)}`, S),
      ...j
    })
  );
  return f.displayName = `${s}`, f;
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g0 = zn("Bell", [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w0 = zn("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x0 = zn("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k0 = zn("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S0 = zn("LocateFixed", [
  ["line", { x1: "2", x2: "5", y1: "12", y2: "12", key: "bvdh0s" }],
  ["line", { x1: "19", x2: "22", y1: "12", y2: "12", key: "1tbv5k" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "5", key: "11lu5j" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
  ["circle", { cx: "12", cy: "12", r: "7", key: "fim9np" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ec = zn("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fc = zn("Navigation", [
  ["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E0 = zn("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
function Po() {
  const [s, m] = z.useState(document.documentElement.lang === "en");
  return z.useEffect(() => {
    const f = new MutationObserver(() => m(document.documentElement.lang === "en"));
    return f.observe(document.documentElement, { attributes: !0, attributeFilter: ["lang"] }), () => f.disconnect();
  }, []), (f, S) => s ? S : f;
}
function Ro(s) {
  return (document.querySelector("[data-parkgo-assets]")?.getAttribute("data-parkgo-assets") || "/native/") + s;
}
function _c({ value: s, dark: m = !1 }) {
  return /* @__PURE__ */ u.jsxs("div", { className: "pg-progress", "data-dark": m || void 0, children: [
    /* @__PURE__ */ u.jsxs("div", { className: "pg-progress__line", children: [
      /* @__PURE__ */ u.jsx("span", { style: { width: `calc(${m ? 26 : 31}px + ${s} * (100% - ${m ? 52 : 62}px))` } }),
      /* @__PURE__ */ u.jsx("img", { src: Ro("bus-tcm.png"), alt: "", style: { left: `calc(${s} * (100% - ${m ? 52 : 62}px))` } })
    ] }),
    /* @__PURE__ */ u.jsxs("span", { className: "pg-progress__value", children: [
      Math.round(s * 100),
      "%"
    ] })
  ] });
}
function dc() {
  return /* @__PURE__ */ u.jsxs("span", { className: "pg-crowding", "aria-hidden": !0, children: [
    /* @__PURE__ */ u.jsx("i", {}),
    /* @__PURE__ */ u.jsx("i", {}),
    /* @__PURE__ */ u.jsx("i", {})
  ] });
}
function Cc({ title: s, children: m }) {
  return /* @__PURE__ */ u.jsxs("div", { className: "pg-appnav", children: [
    /* @__PURE__ */ u.jsx(w0, { size: 23 }),
    /* @__PURE__ */ u.jsx("strong", { children: s }),
    m || /* @__PURE__ */ u.jsx("span", { style: { width: 23 } })
  ] });
}
const _0 = { eta: 4, stops: 2 };
async function C0(s) {
  await s.wait(1800), s.mark("eta-update"), s.put({ eta: 3, stops: 2 }), await s.wait(2400), s.mark("bus-approaches"), s.put({ eta: 2, stops: 2 }), await s.wait(2e3);
}
function j0() {
  const s = Po();
  return /* @__PURE__ */ u.jsx(ks, { width: 560, height: 630, compact: { below: 500, width: 358, height: 540 }, initial: _0, poster: { eta: 3, stops: 2 }, play: "once", script: C0, className: "pg-native pg-bus", tokens: { "--ss-font": '-apple-system, BlinkMacSystemFont, "PingFang TC", sans-serif' }, children: (m, f, S) => /* @__PURE__ */ u.jsx(Ss, { width: S === "compact" ? 326 : 400, frame: "pro", className: "pg-app-phone", children: /* @__PURE__ */ u.jsxs("div", { className: "pg-app-screen", children: [
    /* @__PURE__ */ u.jsx(Cc, { title: s("實時報站", "Bus arrivals") }),
    /* @__PURE__ */ u.jsx("div", { className: "pg-bus-map", style: { backgroundImage: `url(${Ro("bus-map.png")})` }, children: /* @__PURE__ */ u.jsxs("span", { className: "pg-map-actions", children: [
      /* @__PURE__ */ u.jsx(S0, { size: 19 }),
      /* @__PURE__ */ u.jsx(g0, { size: 19 })
    ] }) }),
    /* @__PURE__ */ u.jsxs("div", { className: "pg-bus-body", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "pg-route-header", children: [
        /* @__PURE__ */ u.jsx("img", { src: Ro("tcm.png"), alt: s("澳巴", "TCM") }),
        /* @__PURE__ */ u.jsx("strong", { children: "1" }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          /* @__PURE__ */ u.jsx("span", { className: "pg-operator", children: s("澳巴", "TCM") }),
          /* @__PURE__ */ u.jsx("span", { className: "pg-bound", children: s("往", "To") }),
          /* @__PURE__ */ u.jsx("b", { children: s("媽閣", "Barra") })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "pg-service", children: [
          /* @__PURE__ */ u.jsx("span", { children: "06:00" }),
          /* @__PURE__ */ u.jsx("span", { children: "01:15" })
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "pg-direction", children: [
        /* @__PURE__ */ u.jsx("span", { children: s("去程", "Outbound") }),
        /* @__PURE__ */ u.jsx("span", { children: s("回程", "Return") })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "pg-selected-stop", children: [
        /* @__PURE__ */ u.jsx(Ec, { size: 14 }),
        /* @__PURE__ */ u.jsx("b", { children: s("荷蘭園 / 栢蕙", "H. Costa / Pak Wai") }),
        /* @__PURE__ */ u.jsx("span", { children: s("附近", "Nearby") })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "pg-eta-grid", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "pg-eta-card pg-eta-card--next", children: [
          /* @__PURE__ */ u.jsx("span", { className: "pg-eta-label", children: s("下一班", "Next bus") }),
          /* @__PURE__ */ u.jsxs("div", { className: "pg-eta-number", children: [
            /* @__PURE__ */ u.jsx(ml, { value: m.eta }),
            /* @__PURE__ */ u.jsx("small", { children: s("分鐘", "min") })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "pg-eta-meta", children: [
            /* @__PURE__ */ u.jsx(fc, { size: 11, fill: "currentColor" }),
            /* @__PURE__ */ u.jsx(ml, { value: m.stops }),
            /* @__PURE__ */ u.jsx("span", { children: s("站", "stops") }),
            /* @__PURE__ */ u.jsx(dc, {})
          ] })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "pg-eta-card", children: [
          /* @__PURE__ */ u.jsx("span", { className: "pg-eta-label", children: s("再下一班", "Following") }),
          /* @__PURE__ */ u.jsxs("div", { className: "pg-eta-number", children: [
            "5",
            /* @__PURE__ */ u.jsx("small", { children: s("分鐘", "min") })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "pg-eta-meta", children: [
            /* @__PURE__ */ u.jsx(fc, { size: 11, fill: "currentColor" }),
            "3",
            /* @__PURE__ */ u.jsx("span", { children: s("站", "stops") }),
            /* @__PURE__ */ u.jsx(dc, {})
          ] })
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "pg-bus-stop-list", children: [
        /* @__PURE__ */ u.jsx(cc, { pad: 12, lead: /* @__PURE__ */ u.jsx("i", { className: "pg-stop-dot" }), title: s("白朗古 / 跑狗場", "C. Brancos / Canidrome"), subtitle: s("轉乘  5X · 23 · 25B · 33", "Transfer  5X · 23 · 25B · 33"), meta: "09:43" }),
        /* @__PURE__ */ u.jsx(cc, { pad: 12, lead: /* @__PURE__ */ u.jsx("i", { className: "pg-stop-dot" }), title: s("蓮峰游泳池", "Lin Fong Swimming Pool"), subtitle: s("轉乘  3 · 16 · 26", "Transfer  3 · 16 · 26") })
      ] })
    ] })
  ] }) }) });
}
async function N0(s) {
  await s.wait(1600), s.mark("favorite"), await s.click("favorite"), s.put({ favorite: !0 }), await s.move(s.layout === "compact" ? { x: 300, y: 480 } : { x: 480, y: 560 }, { duration: 500 }), await s.wait(2400);
}
function pc({ name: s, address: m, count: f, total: S, electric: j, etotal: _, distance: $, favorite: Z, target: I, t: te }) {
  return /* @__PURE__ */ u.jsxs("div", { className: "pg-parking-card", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "pg-parking-card__top", children: [
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("b", { children: s }),
        /* @__PURE__ */ u.jsx("p", { children: m })
      ] }),
      /* @__PURE__ */ u.jsx("span", { className: "pg-status", "data-limited": f / S < 0.2 || void 0, children: f / S < 0.2 ? te("緊張", "Limited") : te("有位", "Available") }),
      /* @__PURE__ */ u.jsx("span", { "data-target": I, className: "pg-favorite", "data-on": Z || void 0, children: /* @__PURE__ */ u.jsx(k0, { size: 21, fill: Z ? "currentColor" : "none" }) })
    ] }),
    /* @__PURE__ */ u.jsx("div", { className: "pg-space-grid", children: [{ image: "car.png", label: te("私家車", "Cars"), n: f, total: S }, { image: "electric-car.png", label: te("充電私家車", "EV charging"), n: j, total: _ }].map((ne) => /* @__PURE__ */ u.jsxs("div", { className: "pg-space", children: [
      /* @__PURE__ */ u.jsx("img", { src: Ro(ne.image), alt: "" }),
      /* @__PURE__ */ u.jsxs("div", { children: [
        /* @__PURE__ */ u.jsx("strong", { "data-limited": ne.n / ne.total < 0.2 || void 0, children: /* @__PURE__ */ u.jsx(ml, { value: ne.n }) }),
        /* @__PURE__ */ u.jsx("span", { children: ne.label }),
        /* @__PURE__ */ u.jsxs("small", { children: [
          "/ ",
          ne.total.toLocaleString()
        ] })
      ] })
    ] }, ne.image)) }),
    /* @__PURE__ */ u.jsxs("div", { className: "pg-parking-distance", children: [
      /* @__PURE__ */ u.jsx(Ec, { size: 11 }),
      $
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "pg-parking-footer", children: [
      /* @__PURE__ */ u.jsx("span", { children: te("更新：09:41", "Updated: 09:41") }),
      /* @__PURE__ */ u.jsxs("b", { children: [
        te("詳情", "Details"),
        /* @__PURE__ */ u.jsx(x0, { size: 11 })
      ] })
    ] })
  ] });
}
function R0() {
  const s = Po();
  return /* @__PURE__ */ u.jsx(ks, { width: 560, height: 630, compact: { below: 500, width: 358, height: 540 }, initial: { favorite: !1 }, poster: { favorite: !0 }, script: N0, play: "once", cursor: { at: { wide: { x: 480, y: 560 }, compact: { x: 300, y: 480 } }, style: "touch" }, className: "pg-native pg-parking", children: (m, f, S) => /* @__PURE__ */ u.jsx(Ss, { width: S === "compact" ? 326 : 400, frame: "pro", className: "pg-app-phone", children: /* @__PURE__ */ u.jsxs("div", { className: "pg-app-screen", children: [
    /* @__PURE__ */ u.jsx(Cc, { title: s("澳門停車場", "Macao parking"), children: /* @__PURE__ */ u.jsxs("span", { className: "pg-list-map", children: [
      /* @__PURE__ */ u.jsx("b", { children: s("列表", "List") }),
      /* @__PURE__ */ u.jsx("span", { children: s("地圖", "Map") })
    ] }) }),
    /* @__PURE__ */ u.jsxs("div", { className: "pg-parking-body", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "pg-search", children: [
        /* @__PURE__ */ u.jsx(E0, { size: 17 }),
        s("搜尋停車場", "Search car parks")
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "pg-location", children: [
        /* @__PURE__ */ u.jsxs("span", { children: [
          /* @__PURE__ */ u.jsx("i", {}),
          s("已定位", "Location found")
        ] }),
        /* @__PURE__ */ u.jsxs("span", { children: [
          s("重新整理", "Refresh"),
          " ↻"
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "pg-vehicle-filter", children: [
        /* @__PURE__ */ u.jsx("span", { "data-selected": !0, children: s("私家車", "Cars") }),
        /* @__PURE__ */ u.jsx("span", { children: s("電單車", "Motorcycles") }),
        /* @__PURE__ */ u.jsx("span", { children: s("充電", "Charging") })
      ] }),
      /* @__PURE__ */ u.jsx(pc, { name: s("栢蕙", "Pak Wai"), address: s("荷蘭園正街栢蕙花園", "Pak Wai Garden, R. de Horta e Costa"), count: 163, total: 1019, electric: 12, etotal: 14, distance: "350 m", favorite: m.favorite, target: "favorite", t: s }),
      /* @__PURE__ */ u.jsx(pc, { name: s("望賢樓", "Mong In Building"), address: s("望廈社會房屋望賢樓內之停車場", "Mong Ha public housing car park"), count: 51, total: 143, electric: 10, etotal: 12, distance: "680 m", t: s }),
      /* @__PURE__ */ u.jsxs("div", { className: "pg-parking-filler", children: [
        /* @__PURE__ */ u.jsx("span", {}),
        /* @__PURE__ */ u.jsx("span", {})
      ] })
    ] })
  ] }) }) });
}
const L0 = { open: !1, press: !1, eta: 5, stops: 2, progress: 0.25 }, P0 = { open: !0, press: !1, eta: 4, stops: 1, progress: 0.5 };
async function z0(s) {
  await s.wait(1500), s.mark("long-press");
  const m = s.rect("island"), f = m ? { x: m.x + m.width / 2, y: m.y + m.height / 2 } : "island";
  await s.move(f, { duration: 400 }), s.put({ press: !0 }), await s.drag(f, void 0, { duration: 430 }), s.put({ press: !1, open: !0 }), s.mark("expanded"), s.move(s.layout === "compact" ? { x: 300, y: 480 } : { x: 480, y: 560 }, { duration: 350 }), await s.wait(2e3), s.mark("progress"), s.put({ eta: 4, stops: 1, progress: 0.5 }), await s.wait(2200);
}
function jc({ s, t: m }) {
  return /* @__PURE__ */ u.jsxs("div", { className: "pg-live-estimate", children: [
    /* @__PURE__ */ u.jsx(ml, { value: s.eta }),
    /* @__PURE__ */ u.jsx("small", { children: m("分鐘", "min") }),
    /* @__PURE__ */ u.jsxs("span", { className: "pg-live-stops", children: [
      /* @__PURE__ */ u.jsx(ml, { value: s.stops }),
      /* @__PURE__ */ u.jsx("small", { children: m("站", "stop") })
    ] })
  ] });
}
function Nc({ t: s }) {
  return /* @__PURE__ */ u.jsxs("div", { className: "pg-live-arrival", children: [
    /* @__PURE__ */ u.jsx("span", { children: s("預計到站", "Arrival") }),
    /* @__PURE__ */ u.jsx("b", { children: "12:21 AM" })
  ] });
}
function M0({ s, t: m }) {
  return /* @__PURE__ */ u.jsxs("div", { className: "pg-live-card", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "pg-live-card__top", children: [
      /* @__PURE__ */ u.jsx("span", { className: "pg-live-route", children: "101" }),
      /* @__PURE__ */ u.jsx("span", { children: m("北區警司處", "Northern Police Station") }),
      /* @__PURE__ */ u.jsx("small", { children: m("等車中", "Waiting") })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "pg-live-middle", children: [
      /* @__PURE__ */ u.jsx(jc, { s, t: m }),
      /* @__PURE__ */ u.jsx(Nc, { t: m })
    ] }),
    /* @__PURE__ */ u.jsx(_c, { value: s.progress }),
    /* @__PURE__ */ u.jsxs("div", { className: "pg-live-card__foot", children: [
      /* @__PURE__ */ u.jsx("span", { children: m("候車進度", "Waiting progress") }),
      /* @__PURE__ */ u.jsxs("b", { children: [
        m("我已上車", "I’m on board"),
        " ✓"
      ] })
    ] })
  ] });
}
function T0({ s, t: m }) {
  const f = s.open ? { left: 13, top: 10, width: 376, height: 172, borderRadius: 52 } : { left: 98, top: 14.5, width: 206, height: 37, borderRadius: 18.5 };
  return /* @__PURE__ */ u.jsxs("div", { className: "pg-island", "data-open": s.open || void 0, "data-press": s.press || void 0, children: [
    /* @__PURE__ */ u.jsx("div", { className: "pg-island-shape", style: f }),
    /* @__PURE__ */ u.jsxs("span", { className: "pg-island-compact", "data-visible": !s.open || void 0, children: [
      /* @__PURE__ */ u.jsx("span", { className: "pg-live-route", children: "101" }),
      /* @__PURE__ */ u.jsxs("span", { children: [
        s.eta,
        m("分", "m")
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "pg-island-content", "data-visible": s.open || void 0, children: [
      /* @__PURE__ */ u.jsxs("div", { className: "pg-island-top", children: [
        /* @__PURE__ */ u.jsx("span", { className: "pg-live-route", children: "101" }),
        /* @__PURE__ */ u.jsx("span", { children: m("北區警司處", "Northern Police Station") })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "pg-live-middle", children: [
        /* @__PURE__ */ u.jsx(jc, { s, t: m }),
        /* @__PURE__ */ u.jsx(Nc, { t: m })
      ] }),
      /* @__PURE__ */ u.jsx(_c, { value: s.progress, dark: !0 })
    ] })
  ] });
}
function O0() {
  const s = Po();
  return /* @__PURE__ */ u.jsx(ks, { width: 560, height: 630, compact: { below: 500, width: 358, height: 540 }, initial: L0, poster: P0, play: "once", script: z0, cursor: { at: { wide: { x: 480, y: 560 }, compact: { x: 300, y: 480 } }, style: "touch" }, className: "pg-native pg-live", children: (m, f, S) => /* @__PURE__ */ u.jsxs(Ss, { width: S === "compact" ? 326 : 400, className: "pg-app-phone", frame: "pro", island: !1, time: "", dark: !0, wallpaper: "linear-gradient(165deg,#7593ae,#385879 62%,#182b43)", children: [
    /* @__PURE__ */ u.jsx(s0, { className: "pg-live-lock", "data-obscured": m.open || void 0, date: s("11月5日 星期四", "Thursday, November 5"), time: "12:17", controls: !1, stack: "top", children: /* @__PURE__ */ u.jsx(M0, { s: m, t: s }) }),
    /* @__PURE__ */ u.jsx("span", { className: "pg-live-hit", "data-target": "island", style: { left: 98, top: 14.5, width: 206, height: 37 } }),
    /* @__PURE__ */ u.jsx(T0, { s: m, t: s })
  ] }) });
}
function A0({ kind: s }) {
  const [m, f] = z.useState(0), S = Po(), j = s === "bus" ? j0 : s === "parking" ? R0 : O0, _ = s === "bus" ? S("下一班與再下一班，一眼睇清。", "Your next two buses, at a glance.") : s === "parking" ? S("收藏常用停車場，搵位更方便。", "Keep your regular car parks close.") : S("鎖定畫面與動態島，隨時跟進。", "Follow your journey from the Lock Screen.");
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsx(j, {}, m),
    /* @__PURE__ */ u.jsxs("div", { className: "pg-demo-caption", children: [
      /* @__PURE__ */ u.jsx("span", { children: _ }),
      /* @__PURE__ */ u.jsxs("button", { type: "button", onClick: () => f(($) => $ + 1), children: [
        S("重播", "Replay"),
        " ↻"
      ] })
    ] })
  ] });
}
const Rc = new IntersectionObserver((s) => {
  for (const { target: m, isIntersecting: f } of s) {
    if (!f) continue;
    Rc.unobserve(m);
    const S = m, j = S.dataset.parkgoDemo;
    (j === "bus" || j === "parking" || j === "live") && _d.createRoot(S).render(/* @__PURE__ */ u.jsx(A0, { kind: j }));
  }
}, { rootMargin: "250px" });
for (const s of document.querySelectorAll("[data-parkgo-demo]")) Rc.observe(s);
