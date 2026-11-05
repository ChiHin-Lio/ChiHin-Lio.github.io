var vs = { exports: {} }, ml = {}, ys = { exports: {} }, pe = {};
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
function Sd() {
  if (Xa) return pe;
  Xa = 1;
  var u = Symbol.for("react.element"), c = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), P = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), W = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), re = Symbol.iterator;
  function ie(f) {
    return f === null || typeof f != "object" ? null : (f = re && f[re] || f["@@iterator"], typeof f == "function" ? f : null);
  }
  var oe = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, A = Object.assign, J = {};
  function G(f, m, w) {
    this.props = f, this.context = m, this.refs = J, this.updater = w || oe;
  }
  G.prototype.isReactComponent = {}, G.prototype.setState = function(f, m) {
    if (typeof f != "object" && typeof f != "function" && f != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, f, m, "setState");
  }, G.prototype.forceUpdate = function(f) {
    this.updater.enqueueForceUpdate(this, f, "forceUpdate");
  };
  function Ee() {
  }
  Ee.prototype = G.prototype;
  function ue(f, m, w) {
    this.props = f, this.context = m, this.refs = J, this.updater = w || oe;
  }
  var he = ue.prototype = new Ee();
  he.constructor = ue, A(he, G.prototype), he.isPureReactComponent = !0;
  var X = Array.isArray, K = Object.prototype.hasOwnProperty, de = { current: null }, ae = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(f, m, w) {
    var k, S = {}, I = null, q = null;
    if (m != null) for (k in m.ref !== void 0 && (q = m.ref), m.key !== void 0 && (I = "" + m.key), m) K.call(m, k) && !ae.hasOwnProperty(k) && (S[k] = m[k]);
    var b = arguments.length - 2;
    if (b === 1) S.children = w;
    else if (1 < b) {
      for (var $ = Array(b), Z = 0; Z < b; Z++) $[Z] = arguments[Z + 2];
      S.children = $;
    }
    if (f && f.defaultProps) for (k in b = f.defaultProps, b) S[k] === void 0 && (S[k] = b[k]);
    return { $$typeof: u, type: f, key: I, ref: q, props: S, _owner: de.current };
  }
  function $e(f, m) {
    return { $$typeof: u, type: f.type, key: m, ref: f.ref, props: f.props, _owner: f._owner };
  }
  function ve(f) {
    return typeof f == "object" && f !== null && f.$$typeof === u;
  }
  function ye(f) {
    var m = { "=": "=0", ":": "=2" };
    return "$" + f.replace(/[=:]/g, function(w) {
      return m[w];
    });
  }
  var Le = /\/+/g;
  function me(f, m) {
    return typeof f == "object" && f !== null && f.key != null ? ye("" + f.key) : m.toString(36);
  }
  function xe(f, m, w, k, S) {
    var I = typeof f;
    (I === "undefined" || I === "boolean") && (f = null);
    var q = !1;
    if (f === null) q = !0;
    else switch (I) {
      case "string":
      case "number":
        q = !0;
        break;
      case "object":
        switch (f.$$typeof) {
          case u:
          case c:
            q = !0;
        }
    }
    if (q) return q = f, S = S(q), f = k === "" ? "." + me(q, 0) : k, X(S) ? (w = "", f != null && (w = f.replace(Le, "$&/") + "/"), xe(S, m, w, "", function(Z) {
      return Z;
    })) : S != null && (ve(S) && (S = $e(S, w + (!S.key || q && q.key === S.key ? "" : ("" + S.key).replace(Le, "$&/") + "/") + f)), m.push(S)), 1;
    if (q = 0, k = k === "" ? "." : k + ":", X(f)) for (var b = 0; b < f.length; b++) {
      I = f[b];
      var $ = k + me(I, b);
      q += xe(I, m, w, $, S);
    }
    else if ($ = ie(f), typeof $ == "function") for (f = $.call(f), b = 0; !(I = f.next()).done; ) I = I.value, $ = k + me(I, b++), q += xe(I, m, w, $, S);
    else if (I === "object") throw m = String(f), Error("Objects are not valid as a React child (found: " + (m === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : m) + "). If you meant to render a collection of children, use an array instead.");
    return q;
  }
  function ze(f, m, w) {
    if (f == null) return f;
    var k = [], S = 0;
    return xe(f, k, "", "", function(I) {
      return m.call(w, I, S++);
    }), k;
  }
  function Me(f) {
    if (f._status === -1) {
      var m = f._result;
      m = m(), m.then(function(w) {
        (f._status === 0 || f._status === -1) && (f._status = 1, f._result = w);
      }, function(w) {
        (f._status === 0 || f._status === -1) && (f._status = 2, f._result = w);
      }), f._status === -1 && (f._status = 0, f._result = m);
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var se = { current: null }, M = { transition: null }, V = { ReactCurrentDispatcher: se, ReactCurrentBatchConfig: M, ReactCurrentOwner: de };
  function z() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return pe.Children = { map: ze, forEach: function(f, m, w) {
    ze(f, function() {
      m.apply(this, arguments);
    }, w);
  }, count: function(f) {
    var m = 0;
    return ze(f, function() {
      m++;
    }), m;
  }, toArray: function(f) {
    return ze(f, function(m) {
      return m;
    }) || [];
  }, only: function(f) {
    if (!ve(f)) throw Error("React.Children.only expected to receive a single React element child.");
    return f;
  } }, pe.Component = G, pe.Fragment = a, pe.Profiler = _, pe.PureComponent = ue, pe.StrictMode = j, pe.Suspense = O, pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = V, pe.act = z, pe.cloneElement = function(f, m, w) {
    if (f == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + f + ".");
    var k = A({}, f.props), S = f.key, I = f.ref, q = f._owner;
    if (m != null) {
      if (m.ref !== void 0 && (I = m.ref, q = de.current), m.key !== void 0 && (S = "" + m.key), f.type && f.type.defaultProps) var b = f.type.defaultProps;
      for ($ in m) K.call(m, $) && !ae.hasOwnProperty($) && (k[$] = m[$] === void 0 && b !== void 0 ? b[$] : m[$]);
    }
    var $ = arguments.length - 2;
    if ($ === 1) k.children = w;
    else if (1 < $) {
      b = Array($);
      for (var Z = 0; Z < $; Z++) b[Z] = arguments[Z + 2];
      k.children = b;
    }
    return { $$typeof: u, type: f.type, key: S, ref: I, props: k, _owner: q };
  }, pe.createContext = function(f) {
    return f = { $$typeof: P, _currentValue: f, _currentValue2: f, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, f.Provider = { $$typeof: x, _context: f }, f.Consumer = f;
  }, pe.createElement = T, pe.createFactory = function(f) {
    var m = T.bind(null, f);
    return m.type = f, m;
  }, pe.createRef = function() {
    return { current: null };
  }, pe.forwardRef = function(f) {
    return { $$typeof: Y, render: f };
  }, pe.isValidElement = ve, pe.lazy = function(f) {
    return { $$typeof: ne, _payload: { _status: -1, _result: f }, _init: Me };
  }, pe.memo = function(f, m) {
    return { $$typeof: W, type: f, compare: m === void 0 ? null : m };
  }, pe.startTransition = function(f) {
    var m = M.transition;
    M.transition = {};
    try {
      f();
    } finally {
      M.transition = m;
    }
  }, pe.unstable_act = z, pe.useCallback = function(f, m) {
    return se.current.useCallback(f, m);
  }, pe.useContext = function(f) {
    return se.current.useContext(f);
  }, pe.useDebugValue = function() {
  }, pe.useDeferredValue = function(f) {
    return se.current.useDeferredValue(f);
  }, pe.useEffect = function(f, m) {
    return se.current.useEffect(f, m);
  }, pe.useId = function() {
    return se.current.useId();
  }, pe.useImperativeHandle = function(f, m, w) {
    return se.current.useImperativeHandle(f, m, w);
  }, pe.useInsertionEffect = function(f, m) {
    return se.current.useInsertionEffect(f, m);
  }, pe.useLayoutEffect = function(f, m) {
    return se.current.useLayoutEffect(f, m);
  }, pe.useMemo = function(f, m) {
    return se.current.useMemo(f, m);
  }, pe.useReducer = function(f, m, w) {
    return se.current.useReducer(f, m, w);
  }, pe.useRef = function(f) {
    return se.current.useRef(f);
  }, pe.useState = function(f) {
    return se.current.useState(f);
  }, pe.useSyncExternalStore = function(f, m, w) {
    return se.current.useSyncExternalStore(f, m, w);
  }, pe.useTransition = function() {
    return se.current.useTransition();
  }, pe.version = "18.3.1", pe;
}
var Ja;
function Ss() {
  return Ja || (Ja = 1, ys.exports = Sd()), ys.exports;
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
var ba;
function jd() {
  if (ba) return ml;
  ba = 1;
  var u = Ss(), c = Symbol.for("react.element"), a = Symbol.for("react.fragment"), j = Object.prototype.hasOwnProperty, _ = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function P(Y, O, W) {
    var ne, re = {}, ie = null, oe = null;
    W !== void 0 && (ie = "" + W), O.key !== void 0 && (ie = "" + O.key), O.ref !== void 0 && (oe = O.ref);
    for (ne in O) j.call(O, ne) && !x.hasOwnProperty(ne) && (re[ne] = O[ne]);
    if (Y && Y.defaultProps) for (ne in O = Y.defaultProps, O) re[ne] === void 0 && (re[ne] = O[ne]);
    return { $$typeof: c, type: Y, key: ie, ref: oe, props: re, _owner: _.current };
  }
  return ml.Fragment = a, ml.jsx = P, ml.jsxs = P, ml;
}
var ec;
function Ed() {
  return ec || (ec = 1, vs.exports = jd()), vs.exports;
}
var s = Ed(), _i = {}, gs = { exports: {} }, xt = {}, ws = { exports: {} }, xs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tc;
function Cd() {
  return tc || (tc = 1, (function(u) {
    function c(M, V) {
      var z = M.length;
      M.push(V);
      e: for (; 0 < z; ) {
        var f = z - 1 >>> 1, m = M[f];
        if (0 < _(m, V)) M[f] = V, M[z] = m, z = f;
        else break e;
      }
    }
    function a(M) {
      return M.length === 0 ? null : M[0];
    }
    function j(M) {
      if (M.length === 0) return null;
      var V = M[0], z = M.pop();
      if (z !== V) {
        M[0] = z;
        e: for (var f = 0, m = M.length, w = m >>> 1; f < w; ) {
          var k = 2 * (f + 1) - 1, S = M[k], I = k + 1, q = M[I];
          if (0 > _(S, z)) I < m && 0 > _(q, S) ? (M[f] = q, M[I] = z, f = I) : (M[f] = S, M[k] = z, f = k);
          else if (I < m && 0 > _(q, z)) M[f] = q, M[I] = z, f = I;
          else break e;
        }
      }
      return V;
    }
    function _(M, V) {
      var z = M.sortIndex - V.sortIndex;
      return z !== 0 ? z : M.id - V.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var x = performance;
      u.unstable_now = function() {
        return x.now();
      };
    } else {
      var P = Date, Y = P.now();
      u.unstable_now = function() {
        return P.now() - Y;
      };
    }
    var O = [], W = [], ne = 1, re = null, ie = 3, oe = !1, A = !1, J = !1, G = typeof setTimeout == "function" ? setTimeout : null, Ee = typeof clearTimeout == "function" ? clearTimeout : null, ue = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function he(M) {
      for (var V = a(W); V !== null; ) {
        if (V.callback === null) j(W);
        else if (V.startTime <= M) j(W), V.sortIndex = V.expirationTime, c(O, V);
        else break;
        V = a(W);
      }
    }
    function X(M) {
      if (J = !1, he(M), !A) if (a(O) !== null) A = !0, Me(K);
      else {
        var V = a(W);
        V !== null && se(X, V.startTime - M);
      }
    }
    function K(M, V) {
      A = !1, J && (J = !1, Ee(T), T = -1), oe = !0;
      var z = ie;
      try {
        for (he(V), re = a(O); re !== null && (!(re.expirationTime > V) || M && !ye()); ) {
          var f = re.callback;
          if (typeof f == "function") {
            re.callback = null, ie = re.priorityLevel;
            var m = f(re.expirationTime <= V);
            V = u.unstable_now(), typeof m == "function" ? re.callback = m : re === a(O) && j(O), he(V);
          } else j(O);
          re = a(O);
        }
        if (re !== null) var w = !0;
        else {
          var k = a(W);
          k !== null && se(X, k.startTime - V), w = !1;
        }
        return w;
      } finally {
        re = null, ie = z, oe = !1;
      }
    }
    var de = !1, ae = null, T = -1, $e = 5, ve = -1;
    function ye() {
      return !(u.unstable_now() - ve < $e);
    }
    function Le() {
      if (ae !== null) {
        var M = u.unstable_now();
        ve = M;
        var V = !0;
        try {
          V = ae(!0, M);
        } finally {
          V ? me() : (de = !1, ae = null);
        }
      } else de = !1;
    }
    var me;
    if (typeof ue == "function") me = function() {
      ue(Le);
    };
    else if (typeof MessageChannel < "u") {
      var xe = new MessageChannel(), ze = xe.port2;
      xe.port1.onmessage = Le, me = function() {
        ze.postMessage(null);
      };
    } else me = function() {
      G(Le, 0);
    };
    function Me(M) {
      ae = M, de || (de = !0, me());
    }
    function se(M, V) {
      T = G(function() {
        M(u.unstable_now());
      }, V);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, u.unstable_continueExecution = function() {
      A || oe || (A = !0, Me(K));
    }, u.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $e = 0 < M ? Math.floor(1e3 / M) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return ie;
    }, u.unstable_getFirstCallbackNode = function() {
      return a(O);
    }, u.unstable_next = function(M) {
      switch (ie) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = ie;
      }
      var z = ie;
      ie = V;
      try {
        return M();
      } finally {
        ie = z;
      }
    }, u.unstable_pauseExecution = function() {
    }, u.unstable_requestPaint = function() {
    }, u.unstable_runWithPriority = function(M, V) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var z = ie;
      ie = M;
      try {
        return V();
      } finally {
        ie = z;
      }
    }, u.unstable_scheduleCallback = function(M, V, z) {
      var f = u.unstable_now();
      switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? f + z : f) : z = f, M) {
        case 1:
          var m = -1;
          break;
        case 2:
          m = 250;
          break;
        case 5:
          m = 1073741823;
          break;
        case 4:
          m = 1e4;
          break;
        default:
          m = 5e3;
      }
      return m = z + m, M = { id: ne++, callback: V, priorityLevel: M, startTime: z, expirationTime: m, sortIndex: -1 }, z > f ? (M.sortIndex = z, c(W, M), a(O) === null && M === a(W) && (J ? (Ee(T), T = -1) : J = !0, se(X, z - f))) : (M.sortIndex = m, c(O, M), A || oe || (A = !0, Me(K))), M;
    }, u.unstable_shouldYield = ye, u.unstable_wrapCallback = function(M) {
      var V = ie;
      return function() {
        var z = ie;
        ie = V;
        try {
          return M.apply(this, arguments);
        } finally {
          ie = z;
        }
      };
    };
  })(xs)), xs;
}
var nc;
function _d() {
  return nc || (nc = 1, ws.exports = Cd()), ws.exports;
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
var rc;
function Nd() {
  if (rc) return xt;
  rc = 1;
  var u = Ss(), c = _d();
  function a(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var j = /* @__PURE__ */ new Set(), _ = {};
  function x(e, t) {
    P(e, t), P(e + "Capture", t);
  }
  function P(e, t) {
    for (_[e] = t, e = 0; e < t.length; e++) j.add(t[e]);
  }
  var Y = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), O = Object.prototype.hasOwnProperty, W = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ne = {}, re = {};
  function ie(e) {
    return O.call(re, e) ? !0 : O.call(ne, e) ? !1 : W.test(e) ? re[e] = !0 : (ne[e] = !0, !1);
  }
  function oe(e, t, n, r) {
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
  function A(e, t, n, r) {
    if (t === null || typeof t > "u" || oe(e, t, n, r)) return !0;
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
  function J(e, t, n, r, l, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
  }
  var G = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    G[e] = new J(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    G[t] = new J(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    G[e] = new J(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    G[e] = new J(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    G[e] = new J(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    G[e] = new J(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    G[e] = new J(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    G[e] = new J(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    G[e] = new J(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var Ee = /[\-:]([a-z])/g;
  function ue(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      Ee,
      ue
    );
    G[t] = new J(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Ee, ue);
    G[t] = new J(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Ee, ue);
    G[t] = new J(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    G[e] = new J(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), G.xlinkHref = new J("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    G[e] = new J(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function he(e, t, n, r) {
    var l = G.hasOwnProperty(t) ? G[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (A(t, n, l, r) && (n = null), r || l === null ? ie(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var X = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, K = Symbol.for("react.element"), de = Symbol.for("react.portal"), ae = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), $e = Symbol.for("react.profiler"), ve = Symbol.for("react.provider"), ye = Symbol.for("react.context"), Le = Symbol.for("react.forward_ref"), me = Symbol.for("react.suspense"), xe = Symbol.for("react.suspense_list"), ze = Symbol.for("react.memo"), Me = Symbol.for("react.lazy"), se = Symbol.for("react.offscreen"), M = Symbol.iterator;
  function V(e) {
    return e === null || typeof e != "object" ? null : (e = M && e[M] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var z = Object.assign, f;
  function m(e) {
    if (f === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      f = t && t[1] || "";
    }
    return `
` + f + e;
  }
  var w = !1;
  function k(e, t) {
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
`), i = r.stack.split(`
`), o = l.length - 1, d = i.length - 1; 1 <= o && 0 <= d && l[o] !== i[d]; ) d--;
        for (; 1 <= o && 0 <= d; o--, d--) if (l[o] !== i[d]) {
          if (o !== 1 || d !== 1)
            do
              if (o--, d--, 0 > d || l[o] !== i[d]) {
                var p = `
` + l[o].replace(" at new ", " at ");
                return e.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", e.displayName)), p;
              }
            while (1 <= o && 0 <= d);
          break;
        }
      }
    } finally {
      w = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? m(e) : "";
  }
  function S(e) {
    switch (e.tag) {
      case 5:
        return m(e.type);
      case 16:
        return m("Lazy");
      case 13:
        return m("Suspense");
      case 19:
        return m("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = k(e.type, !1), e;
      case 11:
        return e = k(e.type.render, !1), e;
      case 1:
        return e = k(e.type, !0), e;
      default:
        return "";
    }
  }
  function I(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ae:
        return "Fragment";
      case de:
        return "Portal";
      case $e:
        return "Profiler";
      case T:
        return "StrictMode";
      case me:
        return "Suspense";
      case xe:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case ye:
        return (e.displayName || "Context") + ".Consumer";
      case ve:
        return (e._context.displayName || "Context") + ".Provider";
      case Le:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ze:
        return t = e.displayName || null, t !== null ? t : I(e.type) || "Memo";
      case Me:
        t = e._payload, e = e._init;
        try {
          return I(e(t));
        } catch {
        }
    }
    return null;
  }
  function q(e) {
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
        return I(t);
      case 8:
        return t === T ? "StrictMode" : "Mode";
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
  function b(e) {
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
  function $(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Z(e) {
    var t = $(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, i = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(o) {
        r = "" + o, i.call(this, o);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(o) {
        r = "" + o;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Re(e) {
    e._valueTracker || (e._valueTracker = Z(e));
  }
  function Se(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = $(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Pe(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ge(e, t) {
    var n = t.checked;
    return z({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Qe(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = b(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Jt(e, t) {
    t = t.checked, t != null && he(e, "checked", t, !1);
  }
  function ge(e, t) {
    Jt(e, t);
    var n = b(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Ce(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ce(e, t.type, b(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Ke(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Ce(e, t, n) {
    (t !== "number" || Pe(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Te = Array.isArray;
  function kt(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + b(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function bt(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
    return z({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function St(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(a(92));
        if (Te(n)) {
          if (1 < n.length) throw Error(a(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: b(n) };
  }
  function en(e, t) {
    var n = b(t.value), r = b(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Tn(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function An(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Qt(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? An(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var dn, Jn = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (dn = dn || document.createElement("div"), dn.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = dn.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function jt(e, t) {
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
  }, Pi = ["Webkit", "ms", "Moz", "O"];
  Object.keys(On).forEach(function(e) {
    Pi.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), On[t] = On[e];
    });
  });
  function Mr(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || On.hasOwnProperty(e) && On[e] ? ("" + t).trim() : t + "px";
  }
  function tn(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Mr(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var In = z({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function nn(e, t) {
    if (t) {
      if (In[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(a(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(a(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(a(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(a(62));
    }
  }
  function Fn(e, t) {
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
  var Kt = null;
  function Ot(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Dn = null, pt = null, It = null;
  function bn(e) {
    if (e = el(e)) {
      if (typeof Dn != "function") throw Error(a(280));
      var t = e.stateNode;
      t && (t = Wl(t), Dn(e.stateNode, e.type, t));
    }
  }
  function Rr(e) {
    pt ? It ? It.push(e) : It = [e] : pt = e;
  }
  function gl() {
    if (pt) {
      var e = pt, t = It;
      if (It = pt = null, bn(e), t) for (e = 0; e < t.length; e++) bn(t[e]);
    }
  }
  function wl(e, t) {
    return e(t);
  }
  function F() {
  }
  var ce = !1;
  function we(e, t, n) {
    if (ce) return e(t, n);
    ce = !0;
    try {
      return wl(e, t, n);
    } finally {
      ce = !1, (pt !== null || It !== null) && (F(), gl());
    }
  }
  function fe(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Wl(n);
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
    if (n && typeof n != "function") throw Error(a(231, t, typeof n));
    return n;
  }
  var _e = !1;
  if (Y) try {
    var rt = {};
    Object.defineProperty(rt, "passive", { get: function() {
      _e = !0;
    } }), window.addEventListener("test", rt, rt), window.removeEventListener("test", rt, rt);
  } catch {
    _e = !1;
  }
  function Lt(e, t, n, r, l, i, o, d, p) {
    var g = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, g);
    } catch (C) {
      this.onError(C);
    }
  }
  var at = !1, ct = null, lt = !1, zr = null, Ti = { onError: function(e) {
    at = !0, ct = e;
  } };
  function Pr(e, t, n, r, l, i, o, d, p) {
    at = !1, ct = null, Lt.apply(Ti, arguments);
  }
  function Ai(e, t, n, r, l, i, o, d, p) {
    if (Pr.apply(this, arguments), at) {
      if (at) {
        var g = ct;
        at = !1, ct = null;
      } else throw Error(a(198));
      lt || (lt = !0, zr = g);
    }
  }
  function Ft(e) {
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
  function er(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function tr(e) {
    if (Ft(e) !== e) throw Error(a(188));
  }
  function xl(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Ft(e), t === null) throw Error(a(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (r = l.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n) return tr(l), e;
          if (i === r) return tr(l), t;
          i = i.sibling;
        }
        throw Error(a(188));
      }
      if (n.return !== r.return) n = l, r = i;
      else {
        for (var o = !1, d = l.child; d; ) {
          if (d === n) {
            o = !0, n = l, r = i;
            break;
          }
          if (d === r) {
            o = !0, r = l, n = i;
            break;
          }
          d = d.sibling;
        }
        if (!o) {
          for (d = i.child; d; ) {
            if (d === n) {
              o = !0, n = i, r = l;
              break;
            }
            if (d === r) {
              o = !0, r = i, n = l;
              break;
            }
            d = d.sibling;
          }
          if (!o) throw Error(a(189));
        }
      }
      if (n.alternate !== r) throw Error(a(190));
    }
    if (n.tag !== 3) throw Error(a(188));
    return n.stateNode.current === n ? e : t;
  }
  function Tr(e) {
    return e = xl(e), e !== null ? Ar(e) : null;
  }
  function Ar(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Ar(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Or = c.unstable_scheduleCallback, Fe = c.unstable_cancelCallback, ht = c.unstable_shouldYield, nr = c.unstable_requestPaint, He = c.unstable_now, Ac = c.unstable_getCurrentPriorityLevel, Oi = c.unstable_ImmediatePriority, _s = c.unstable_UserBlockingPriority, kl = c.unstable_NormalPriority, Oc = c.unstable_LowPriority, Ns = c.unstable_IdlePriority, Sl = null, Yt = null;
  function Ic(e) {
    if (Yt && typeof Yt.onCommitFiberRoot == "function") try {
      Yt.onCommitFiberRoot(Sl, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Dt = Math.clz32 ? Math.clz32 : $c, Fc = Math.log, Dc = Math.LN2;
  function $c(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Fc(e) / Dc | 0) | 0;
  }
  var jl = 64, El = 4194304;
  function Ir(e) {
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
  function Cl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
    if (o !== 0) {
      var d = o & ~l;
      d !== 0 ? r = Ir(d) : (i &= o, i !== 0 && (r = Ir(i)));
    } else o = n & ~l, o !== 0 ? r = Ir(o) : i !== 0 && (r = Ir(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & l) === 0 && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Dt(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function Uc(e, t) {
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
  function Wc(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
      var o = 31 - Dt(i), d = 1 << o, p = l[o];
      p === -1 ? ((d & n) === 0 || (d & r) !== 0) && (l[o] = Uc(d, t)) : p <= t && (e.expiredLanes |= d), i &= ~d;
    }
  }
  function Ii(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Ls() {
    var e = jl;
    return jl <<= 1, (jl & 4194240) === 0 && (jl = 64), e;
  }
  function Fi(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Fr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Dt(t), e[t] = n;
  }
  function Bc(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - Dt(n), i = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
    }
  }
  function Di(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - Dt(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var Ne = 0;
  function Ms(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Rs, $i, zs, Ps, Ts, Ui = !1, _l = [], pn = null, hn = null, mn = null, Dr = /* @__PURE__ */ new Map(), $r = /* @__PURE__ */ new Map(), vn = [], Hc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function As(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        pn = null;
        break;
      case "dragenter":
      case "dragleave":
        hn = null;
        break;
      case "mouseover":
      case "mouseout":
        mn = null;
        break;
      case "pointerover":
      case "pointerout":
        Dr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        $r.delete(t.pointerId);
    }
  }
  function Ur(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = el(t), t !== null && $i(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function Vc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return pn = Ur(pn, e, t, n, r, l), !0;
      case "dragenter":
        return hn = Ur(hn, e, t, n, r, l), !0;
      case "mouseover":
        return mn = Ur(mn, e, t, n, r, l), !0;
      case "pointerover":
        var i = l.pointerId;
        return Dr.set(i, Ur(Dr.get(i) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return i = l.pointerId, $r.set(i, Ur($r.get(i) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function Os(e) {
    var t = $n(e.target);
    if (t !== null) {
      var n = Ft(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = er(n), t !== null) {
            e.blockedOn = t, Ts(e.priority, function() {
              zs(n);
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
  function Nl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Bi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Kt = r, n.target.dispatchEvent(r), Kt = null;
      } else return t = el(n), t !== null && $i(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Is(e, t, n) {
    Nl(e) && n.delete(t);
  }
  function Qc() {
    Ui = !1, pn !== null && Nl(pn) && (pn = null), hn !== null && Nl(hn) && (hn = null), mn !== null && Nl(mn) && (mn = null), Dr.forEach(Is), $r.forEach(Is);
  }
  function Wr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ui || (Ui = !0, c.unstable_scheduleCallback(c.unstable_NormalPriority, Qc)));
  }
  function Br(e) {
    function t(l) {
      return Wr(l, e);
    }
    if (0 < _l.length) {
      Wr(_l[0], e);
      for (var n = 1; n < _l.length; n++) {
        var r = _l[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (pn !== null && Wr(pn, e), hn !== null && Wr(hn, e), mn !== null && Wr(mn, e), Dr.forEach(t), $r.forEach(t), n = 0; n < vn.length; n++) r = vn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < vn.length && (n = vn[0], n.blockedOn === null); ) Os(n), n.blockedOn === null && vn.shift();
  }
  var rr = X.ReactCurrentBatchConfig, Ll = !0;
  function Kc(e, t, n, r) {
    var l = Ne, i = rr.transition;
    rr.transition = null;
    try {
      Ne = 1, Wi(e, t, n, r);
    } finally {
      Ne = l, rr.transition = i;
    }
  }
  function Yc(e, t, n, r) {
    var l = Ne, i = rr.transition;
    rr.transition = null;
    try {
      Ne = 4, Wi(e, t, n, r);
    } finally {
      Ne = l, rr.transition = i;
    }
  }
  function Wi(e, t, n, r) {
    if (Ll) {
      var l = Bi(e, t, n, r);
      if (l === null) io(e, t, r, Ml, n), As(e, r);
      else if (Vc(l, e, t, n, r)) r.stopPropagation();
      else if (As(e, r), t & 4 && -1 < Hc.indexOf(e)) {
        for (; l !== null; ) {
          var i = el(l);
          if (i !== null && Rs(i), i = Bi(e, t, n, r), i === null && io(e, t, r, Ml, n), i === l) break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else io(e, t, r, null, n);
    }
  }
  var Ml = null;
  function Bi(e, t, n, r) {
    if (Ml = null, e = Ot(r), e = $n(e), e !== null) if (t = Ft(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = er(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Ml = e, null;
  }
  function Fs(e) {
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
        switch (Ac()) {
          case Oi:
            return 1;
          case _s:
            return 4;
          case kl:
          case Oc:
            return 16;
          case Ns:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var yn = null, Hi = null, Rl = null;
  function Ds() {
    if (Rl) return Rl;
    var e, t = Hi, n = t.length, r, l = "value" in yn ? yn.value : yn.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
    return Rl = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function zl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Pl() {
    return !0;
  }
  function $s() {
    return !1;
  }
  function Et(e) {
    function t(n, r, l, i, o) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
      for (var d in e) e.hasOwnProperty(d) && (n = e[d], this[d] = n ? n(i) : i[d]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Pl : $s, this.isPropagationStopped = $s, this;
    }
    return z(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Pl);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Pl);
    }, persist: function() {
    }, isPersistent: Pl }), t;
  }
  var lr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Vi = Et(lr), Hr = z({}, lr, { view: 0, detail: 0 }), Gc = Et(Hr), Qi, Ki, Vr, Tl = z({}, Hr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Gi, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Vr && (Vr && e.type === "mousemove" ? (Qi = e.screenX - Vr.screenX, Ki = e.screenY - Vr.screenY) : Ki = Qi = 0, Vr = e), Qi);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Ki;
  } }), Us = Et(Tl), qc = z({}, Tl, { dataTransfer: 0 }), Zc = Et(qc), Xc = z({}, Hr, { relatedTarget: 0 }), Yi = Et(Xc), Jc = z({}, lr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), bc = Et(Jc), ef = z({}, lr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), tf = Et(ef), nf = z({}, lr, { data: 0 }), Ws = Et(nf), rf = {
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
  }, lf = {
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
  }, of = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function sf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = of[e]) ? !!t[e] : !1;
  }
  function Gi() {
    return sf;
  }
  var uf = z({}, Hr, { key: function(e) {
    if (e.key) {
      var t = rf[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = zl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? lf[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Gi, charCode: function(e) {
    return e.type === "keypress" ? zl(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? zl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), af = Et(uf), cf = z({}, Tl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Bs = Et(cf), ff = z({}, Hr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Gi }), df = Et(ff), pf = z({}, lr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), hf = Et(pf), mf = z({}, Tl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), vf = Et(mf), yf = [9, 13, 27, 32], qi = Y && "CompositionEvent" in window, Qr = null;
  Y && "documentMode" in document && (Qr = document.documentMode);
  var gf = Y && "TextEvent" in window && !Qr, Hs = Y && (!qi || Qr && 8 < Qr && 11 >= Qr), Vs = " ", Qs = !1;
  function Ks(e, t) {
    switch (e) {
      case "keyup":
        return yf.indexOf(t.keyCode) !== -1;
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
  function Ys(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var ir = !1;
  function wf(e, t) {
    switch (e) {
      case "compositionend":
        return Ys(t);
      case "keypress":
        return t.which !== 32 ? null : (Qs = !0, Vs);
      case "textInput":
        return e = t.data, e === Vs && Qs ? null : e;
      default:
        return null;
    }
  }
  function xf(e, t) {
    if (ir) return e === "compositionend" || !qi && Ks(e, t) ? (e = Ds(), Rl = Hi = yn = null, ir = !1, e) : null;
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
        return Hs && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var kf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Gs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!kf[e.type] : t === "textarea";
  }
  function qs(e, t, n, r) {
    Rr(r), t = Dl(t, "onChange"), 0 < t.length && (n = new Vi("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Kr = null, Yr = null;
  function Sf(e) {
    pu(e, 0);
  }
  function Al(e) {
    var t = cr(e);
    if (Se(t)) return e;
  }
  function jf(e, t) {
    if (e === "change") return t;
  }
  var Zs = !1;
  if (Y) {
    var Zi;
    if (Y) {
      var Xi = "oninput" in document;
      if (!Xi) {
        var Xs = document.createElement("div");
        Xs.setAttribute("oninput", "return;"), Xi = typeof Xs.oninput == "function";
      }
      Zi = Xi;
    } else Zi = !1;
    Zs = Zi && (!document.documentMode || 9 < document.documentMode);
  }
  function Js() {
    Kr && (Kr.detachEvent("onpropertychange", bs), Yr = Kr = null);
  }
  function bs(e) {
    if (e.propertyName === "value" && Al(Yr)) {
      var t = [];
      qs(t, Yr, e, Ot(e)), we(Sf, t);
    }
  }
  function Ef(e, t, n) {
    e === "focusin" ? (Js(), Kr = t, Yr = n, Kr.attachEvent("onpropertychange", bs)) : e === "focusout" && Js();
  }
  function Cf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Al(Yr);
  }
  function _f(e, t) {
    if (e === "click") return Al(t);
  }
  function Nf(e, t) {
    if (e === "input" || e === "change") return Al(t);
  }
  function Lf(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var $t = typeof Object.is == "function" ? Object.is : Lf;
  function Gr(e, t) {
    if ($t(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!O.call(t, l) || !$t(e[l], t[l])) return !1;
    }
    return !0;
  }
  function eu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function tu(e, t) {
    var n = eu(e);
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
      n = eu(n);
    }
  }
  function nu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? nu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function ru() {
    for (var e = window, t = Pe(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Pe(e.document);
    }
    return t;
  }
  function Ji(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Mf(e) {
    var t = ru(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && nu(n.ownerDocument.documentElement, n)) {
      if (r !== null && Ji(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, i = Math.min(r.start, l);
          r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = tu(n, i);
          var o = tu(
            n,
            r
          );
          l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Rf = Y && "documentMode" in document && 11 >= document.documentMode, or = null, bi = null, qr = null, eo = !1;
  function lu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    eo || or == null || or !== Pe(r) || (r = or, "selectionStart" in r && Ji(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), qr && Gr(qr, r) || (qr = r, r = Dl(bi, "onSelect"), 0 < r.length && (t = new Vi("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = or)));
  }
  function Ol(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var sr = { animationend: Ol("Animation", "AnimationEnd"), animationiteration: Ol("Animation", "AnimationIteration"), animationstart: Ol("Animation", "AnimationStart"), transitionend: Ol("Transition", "TransitionEnd") }, to = {}, iu = {};
  Y && (iu = document.createElement("div").style, "AnimationEvent" in window || (delete sr.animationend.animation, delete sr.animationiteration.animation, delete sr.animationstart.animation), "TransitionEvent" in window || delete sr.transitionend.transition);
  function Il(e) {
    if (to[e]) return to[e];
    if (!sr[e]) return e;
    var t = sr[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in iu) return to[e] = t[n];
    return e;
  }
  var ou = Il("animationend"), su = Il("animationiteration"), uu = Il("animationstart"), au = Il("transitionend"), cu = /* @__PURE__ */ new Map(), fu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function gn(e, t) {
    cu.set(e, t), x(t, [e]);
  }
  for (var no = 0; no < fu.length; no++) {
    var ro = fu[no], zf = ro.toLowerCase(), Pf = ro[0].toUpperCase() + ro.slice(1);
    gn(zf, "on" + Pf);
  }
  gn(ou, "onAnimationEnd"), gn(su, "onAnimationIteration"), gn(uu, "onAnimationStart"), gn("dblclick", "onDoubleClick"), gn("focusin", "onFocus"), gn("focusout", "onBlur"), gn(au, "onTransitionEnd"), P("onMouseEnter", ["mouseout", "mouseover"]), P("onMouseLeave", ["mouseout", "mouseover"]), P("onPointerEnter", ["pointerout", "pointerover"]), P("onPointerLeave", ["pointerout", "pointerover"]), x("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), x("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), x("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), x("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), x("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), x("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Zr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Tf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Zr));
  function du(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Ai(r, t, void 0, e), e.currentTarget = null;
  }
  function pu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t) for (var o = r.length - 1; 0 <= o; o--) {
          var d = r[o], p = d.instance, g = d.currentTarget;
          if (d = d.listener, p !== i && l.isPropagationStopped()) break e;
          du(l, d, g), i = p;
        }
        else for (o = 0; o < r.length; o++) {
          if (d = r[o], p = d.instance, g = d.currentTarget, d = d.listener, p !== i && l.isPropagationStopped()) break e;
          du(l, d, g), i = p;
        }
      }
    }
    if (lt) throw e = zr, lt = !1, zr = null, e;
  }
  function Oe(e, t) {
    var n = t[fo];
    n === void 0 && (n = t[fo] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (hu(t, e, 2, !1), n.add(r));
  }
  function lo(e, t, n) {
    var r = 0;
    t && (r |= 4), hu(n, e, r, t);
  }
  var Fl = "_reactListening" + Math.random().toString(36).slice(2);
  function Xr(e) {
    if (!e[Fl]) {
      e[Fl] = !0, j.forEach(function(n) {
        n !== "selectionchange" && (Tf.has(n) || lo(n, !1, e), lo(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Fl] || (t[Fl] = !0, lo("selectionchange", !1, t));
    }
  }
  function hu(e, t, n, r) {
    switch (Fs(t)) {
      case 1:
        var l = Kc;
        break;
      case 4:
        l = Yc;
        break;
      default:
        l = Wi;
    }
    n = l.bind(null, t, n, e), l = void 0, !_e || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function io(e, t, n, r, l) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var d = r.stateNode.containerInfo;
        if (d === l || d.nodeType === 8 && d.parentNode === l) break;
        if (o === 4) for (o = r.return; o !== null; ) {
          var p = o.tag;
          if ((p === 3 || p === 4) && (p = o.stateNode.containerInfo, p === l || p.nodeType === 8 && p.parentNode === l)) return;
          o = o.return;
        }
        for (; d !== null; ) {
          if (o = $n(d), o === null) return;
          if (p = o.tag, p === 5 || p === 6) {
            r = i = o;
            continue e;
          }
          d = d.parentNode;
        }
      }
      r = r.return;
    }
    we(function() {
      var g = i, C = Ot(n), N = [];
      e: {
        var E = cu.get(e);
        if (E !== void 0) {
          var D = Vi, B = e;
          switch (e) {
            case "keypress":
              if (zl(n) === 0) break e;
            case "keydown":
            case "keyup":
              D = af;
              break;
            case "focusin":
              B = "focus", D = Yi;
              break;
            case "focusout":
              B = "blur", D = Yi;
              break;
            case "beforeblur":
            case "afterblur":
              D = Yi;
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
              D = Us;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              D = Zc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              D = df;
              break;
            case ou:
            case su:
            case uu:
              D = bc;
              break;
            case au:
              D = hf;
              break;
            case "scroll":
              D = Gc;
              break;
            case "wheel":
              D = vf;
              break;
            case "copy":
            case "cut":
            case "paste":
              D = tf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              D = Bs;
          }
          var H = (t & 4) !== 0, Ve = !H && e === "scroll", v = H ? E !== null ? E + "Capture" : null : E;
          H = [];
          for (var h = g, y; h !== null; ) {
            y = h;
            var L = y.stateNode;
            if (y.tag === 5 && L !== null && (y = L, v !== null && (L = fe(h, v), L != null && H.push(Jr(h, L, y)))), Ve) break;
            h = h.return;
          }
          0 < H.length && (E = new D(E, B, null, n, C), N.push({ event: E, listeners: H }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (E = e === "mouseover" || e === "pointerover", D = e === "mouseout" || e === "pointerout", E && n !== Kt && (B = n.relatedTarget || n.fromElement) && ($n(B) || B[rn])) break e;
          if ((D || E) && (E = C.window === C ? C : (E = C.ownerDocument) ? E.defaultView || E.parentWindow : window, D ? (B = n.relatedTarget || n.toElement, D = g, B = B ? $n(B) : null, B !== null && (Ve = Ft(B), B !== Ve || B.tag !== 5 && B.tag !== 6) && (B = null)) : (D = null, B = g), D !== B)) {
            if (H = Us, L = "onMouseLeave", v = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (H = Bs, L = "onPointerLeave", v = "onPointerEnter", h = "pointer"), Ve = D == null ? E : cr(D), y = B == null ? E : cr(B), E = new H(L, h + "leave", D, n, C), E.target = Ve, E.relatedTarget = y, L = null, $n(C) === g && (H = new H(v, h + "enter", B, n, C), H.target = y, H.relatedTarget = Ve, L = H), Ve = L, D && B) t: {
              for (H = D, v = B, h = 0, y = H; y; y = ur(y)) h++;
              for (y = 0, L = v; L; L = ur(L)) y++;
              for (; 0 < h - y; ) H = ur(H), h--;
              for (; 0 < y - h; ) v = ur(v), y--;
              for (; h--; ) {
                if (H === v || v !== null && H === v.alternate) break t;
                H = ur(H), v = ur(v);
              }
              H = null;
            }
            else H = null;
            D !== null && mu(N, E, D, H, !1), B !== null && Ve !== null && mu(N, Ve, B, H, !0);
          }
        }
        e: {
          if (E = g ? cr(g) : window, D = E.nodeName && E.nodeName.toLowerCase(), D === "select" || D === "input" && E.type === "file") var Q = jf;
          else if (Gs(E)) if (Zs) Q = Nf;
          else {
            Q = Cf;
            var ee = Ef;
          }
          else (D = E.nodeName) && D.toLowerCase() === "input" && (E.type === "checkbox" || E.type === "radio") && (Q = _f);
          if (Q && (Q = Q(e, g))) {
            qs(N, Q, n, C);
            break e;
          }
          ee && ee(e, E, g), e === "focusout" && (ee = E._wrapperState) && ee.controlled && E.type === "number" && Ce(E, "number", E.value);
        }
        switch (ee = g ? cr(g) : window, e) {
          case "focusin":
            (Gs(ee) || ee.contentEditable === "true") && (or = ee, bi = g, qr = null);
            break;
          case "focusout":
            qr = bi = or = null;
            break;
          case "mousedown":
            eo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            eo = !1, lu(N, n, C);
            break;
          case "selectionchange":
            if (Rf) break;
          case "keydown":
          case "keyup":
            lu(N, n, C);
        }
        var te;
        if (qi) e: {
          switch (e) {
            case "compositionstart":
              var le = "onCompositionStart";
              break e;
            case "compositionend":
              le = "onCompositionEnd";
              break e;
            case "compositionupdate":
              le = "onCompositionUpdate";
              break e;
          }
          le = void 0;
        }
        else ir ? Ks(e, n) && (le = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (le = "onCompositionStart");
        le && (Hs && n.locale !== "ko" && (ir || le !== "onCompositionStart" ? le === "onCompositionEnd" && ir && (te = Ds()) : (yn = C, Hi = "value" in yn ? yn.value : yn.textContent, ir = !0)), ee = Dl(g, le), 0 < ee.length && (le = new Ws(le, e, null, n, C), N.push({ event: le, listeners: ee }), te ? le.data = te : (te = Ys(n), te !== null && (le.data = te)))), (te = gf ? wf(e, n) : xf(e, n)) && (g = Dl(g, "onBeforeInput"), 0 < g.length && (C = new Ws("onBeforeInput", "beforeinput", null, n, C), N.push({ event: C, listeners: g }), C.data = te));
      }
      pu(N, t);
    });
  }
  function Jr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Dl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, i = l.stateNode;
      l.tag === 5 && i !== null && (l = i, i = fe(e, n), i != null && r.unshift(Jr(e, i, l)), i = fe(e, t), i != null && r.push(Jr(e, i, l))), e = e.return;
    }
    return r;
  }
  function ur(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function mu(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
      var d = n, p = d.alternate, g = d.stateNode;
      if (p !== null && p === r) break;
      d.tag === 5 && g !== null && (d = g, l ? (p = fe(n, i), p != null && o.unshift(Jr(n, p, d))) : l || (p = fe(n, i), p != null && o.push(Jr(n, p, d)))), n = n.return;
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var Af = /\r\n?/g, Of = /\u0000|\uFFFD/g;
  function vu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Af, `
`).replace(Of, "");
  }
  function $l(e, t, n) {
    if (t = vu(t), vu(e) !== t && n) throw Error(a(425));
  }
  function Ul() {
  }
  var oo = null, so = null;
  function uo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ao = typeof setTimeout == "function" ? setTimeout : void 0, If = typeof clearTimeout == "function" ? clearTimeout : void 0, yu = typeof Promise == "function" ? Promise : void 0, Ff = typeof queueMicrotask == "function" ? queueMicrotask : typeof yu < "u" ? function(e) {
    return yu.resolve(null).then(e).catch(Df);
  } : ao;
  function Df(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function co(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), Br(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    Br(t);
  }
  function wn(e) {
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
  function gu(e) {
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
  var ar = Math.random().toString(36).slice(2), Gt = "__reactFiber$" + ar, br = "__reactProps$" + ar, rn = "__reactContainer$" + ar, fo = "__reactEvents$" + ar, $f = "__reactListeners$" + ar, Uf = "__reactHandles$" + ar;
  function $n(e) {
    var t = e[Gt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[rn] || n[Gt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = gu(e); e !== null; ) {
          if (n = e[Gt]) return n;
          e = gu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function el(e) {
    return e = e[Gt] || e[rn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function cr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(a(33));
  }
  function Wl(e) {
    return e[br] || null;
  }
  var po = [], fr = -1;
  function xn(e) {
    return { current: e };
  }
  function Ie(e) {
    0 > fr || (e.current = po[fr], po[fr] = null, fr--);
  }
  function Ae(e, t) {
    fr++, po[fr] = e.current, e.current = t;
  }
  var kn = {}, it = xn(kn), mt = xn(!1), Un = kn;
  function dr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return kn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, i;
    for (i in n) l[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function vt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Bl() {
    Ie(mt), Ie(it);
  }
  function wu(e, t, n) {
    if (it.current !== kn) throw Error(a(168));
    Ae(it, t), Ae(mt, n);
  }
  function xu(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(a(108, q(e) || "Unknown", l));
    return z({}, n, r);
  }
  function Hl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || kn, Un = it.current, Ae(it, e), Ae(mt, mt.current), !0;
  }
  function ku(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(a(169));
    n ? (e = xu(e, t, Un), r.__reactInternalMemoizedMergedChildContext = e, Ie(mt), Ie(it), Ae(it, e)) : Ie(mt), Ae(mt, n);
  }
  var ln = null, Vl = !1, ho = !1;
  function Su(e) {
    ln === null ? ln = [e] : ln.push(e);
  }
  function Wf(e) {
    Vl = !0, Su(e);
  }
  function Sn() {
    if (!ho && ln !== null) {
      ho = !0;
      var e = 0, t = Ne;
      try {
        var n = ln;
        for (Ne = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        ln = null, Vl = !1;
      } catch (l) {
        throw ln !== null && (ln = ln.slice(e + 1)), Or(Oi, Sn), l;
      } finally {
        Ne = t, ho = !1;
      }
    }
    return null;
  }
  var pr = [], hr = 0, Ql = null, Kl = 0, Mt = [], Rt = 0, Wn = null, on = 1, sn = "";
  function Bn(e, t) {
    pr[hr++] = Kl, pr[hr++] = Ql, Ql = e, Kl = t;
  }
  function ju(e, t, n) {
    Mt[Rt++] = on, Mt[Rt++] = sn, Mt[Rt++] = Wn, Wn = e;
    var r = on;
    e = sn;
    var l = 32 - Dt(r) - 1;
    r &= ~(1 << l), n += 1;
    var i = 32 - Dt(t) + l;
    if (30 < i) {
      var o = l - l % 5;
      i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, on = 1 << 32 - Dt(t) + l | n << l | r, sn = i + e;
    } else on = 1 << i | n << l | r, sn = e;
  }
  function mo(e) {
    e.return !== null && (Bn(e, 1), ju(e, 1, 0));
  }
  function vo(e) {
    for (; e === Ql; ) Ql = pr[--hr], pr[hr] = null, Kl = pr[--hr], pr[hr] = null;
    for (; e === Wn; ) Wn = Mt[--Rt], Mt[Rt] = null, sn = Mt[--Rt], Mt[Rt] = null, on = Mt[--Rt], Mt[Rt] = null;
  }
  var Ct = null, _t = null, De = !1, Ut = null;
  function Eu(e, t) {
    var n = At(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Cu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ct = e, _t = wn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ct = e, _t = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Wn !== null ? { id: on, overflow: sn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = At(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ct = e, _t = null, !0) : !1;
      default:
        return !1;
    }
  }
  function yo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function go(e) {
    if (De) {
      var t = _t;
      if (t) {
        var n = t;
        if (!Cu(e, t)) {
          if (yo(e)) throw Error(a(418));
          t = wn(n.nextSibling);
          var r = Ct;
          t && Cu(e, t) ? Eu(r, n) : (e.flags = e.flags & -4097 | 2, De = !1, Ct = e);
        }
      } else {
        if (yo(e)) throw Error(a(418));
        e.flags = e.flags & -4097 | 2, De = !1, Ct = e;
      }
    }
  }
  function _u(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ct = e;
  }
  function Yl(e) {
    if (e !== Ct) return !1;
    if (!De) return _u(e), De = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !uo(e.type, e.memoizedProps)), t && (t = _t)) {
      if (yo(e)) throw Nu(), Error(a(418));
      for (; t; ) Eu(e, t), t = wn(t.nextSibling);
    }
    if (_u(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                _t = wn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        _t = null;
      }
    } else _t = Ct ? wn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Nu() {
    for (var e = _t; e; ) e = wn(e.nextSibling);
  }
  function mr() {
    _t = Ct = null, De = !1;
  }
  function wo(e) {
    Ut === null ? Ut = [e] : Ut.push(e);
  }
  var Bf = X.ReactCurrentBatchConfig;
  function tl(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(a(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(a(147, e));
        var l = r, i = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
          var d = l.refs;
          o === null ? delete d[i] : d[i] = o;
        }, t._stringRef = i, t);
      }
      if (typeof e != "string") throw Error(a(284));
      if (!n._owner) throw Error(a(290, e));
    }
    return e;
  }
  function Gl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(a(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Lu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Mu(e) {
    function t(v, h) {
      if (e) {
        var y = v.deletions;
        y === null ? (v.deletions = [h], v.flags |= 16) : y.push(h);
      }
    }
    function n(v, h) {
      if (!e) return null;
      for (; h !== null; ) t(v, h), h = h.sibling;
      return null;
    }
    function r(v, h) {
      for (v = /* @__PURE__ */ new Map(); h !== null; ) h.key !== null ? v.set(h.key, h) : v.set(h.index, h), h = h.sibling;
      return v;
    }
    function l(v, h) {
      return v = Rn(v, h), v.index = 0, v.sibling = null, v;
    }
    function i(v, h, y) {
      return v.index = y, e ? (y = v.alternate, y !== null ? (y = y.index, y < h ? (v.flags |= 2, h) : y) : (v.flags |= 2, h)) : (v.flags |= 1048576, h);
    }
    function o(v) {
      return e && v.alternate === null && (v.flags |= 2), v;
    }
    function d(v, h, y, L) {
      return h === null || h.tag !== 6 ? (h = cs(y, v.mode, L), h.return = v, h) : (h = l(h, y), h.return = v, h);
    }
    function p(v, h, y, L) {
      var Q = y.type;
      return Q === ae ? C(v, h, y.props.children, L, y.key) : h !== null && (h.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === Me && Lu(Q) === h.type) ? (L = l(h, y.props), L.ref = tl(v, h, y), L.return = v, L) : (L = gi(y.type, y.key, y.props, null, v.mode, L), L.ref = tl(v, h, y), L.return = v, L);
    }
    function g(v, h, y, L) {
      return h === null || h.tag !== 4 || h.stateNode.containerInfo !== y.containerInfo || h.stateNode.implementation !== y.implementation ? (h = fs(y, v.mode, L), h.return = v, h) : (h = l(h, y.children || []), h.return = v, h);
    }
    function C(v, h, y, L, Q) {
      return h === null || h.tag !== 7 ? (h = Zn(y, v.mode, L, Q), h.return = v, h) : (h = l(h, y), h.return = v, h);
    }
    function N(v, h, y) {
      if (typeof h == "string" && h !== "" || typeof h == "number") return h = cs("" + h, v.mode, y), h.return = v, h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case K:
            return y = gi(h.type, h.key, h.props, null, v.mode, y), y.ref = tl(v, null, h), y.return = v, y;
          case de:
            return h = fs(h, v.mode, y), h.return = v, h;
          case Me:
            var L = h._init;
            return N(v, L(h._payload), y);
        }
        if (Te(h) || V(h)) return h = Zn(h, v.mode, y, null), h.return = v, h;
        Gl(v, h);
      }
      return null;
    }
    function E(v, h, y, L) {
      var Q = h !== null ? h.key : null;
      if (typeof y == "string" && y !== "" || typeof y == "number") return Q !== null ? null : d(v, h, "" + y, L);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case K:
            return y.key === Q ? p(v, h, y, L) : null;
          case de:
            return y.key === Q ? g(v, h, y, L) : null;
          case Me:
            return Q = y._init, E(
              v,
              h,
              Q(y._payload),
              L
            );
        }
        if (Te(y) || V(y)) return Q !== null ? null : C(v, h, y, L, null);
        Gl(v, y);
      }
      return null;
    }
    function D(v, h, y, L, Q) {
      if (typeof L == "string" && L !== "" || typeof L == "number") return v = v.get(y) || null, d(h, v, "" + L, Q);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case K:
            return v = v.get(L.key === null ? y : L.key) || null, p(h, v, L, Q);
          case de:
            return v = v.get(L.key === null ? y : L.key) || null, g(h, v, L, Q);
          case Me:
            var ee = L._init;
            return D(v, h, y, ee(L._payload), Q);
        }
        if (Te(L) || V(L)) return v = v.get(y) || null, C(h, v, L, Q, null);
        Gl(h, L);
      }
      return null;
    }
    function B(v, h, y, L) {
      for (var Q = null, ee = null, te = h, le = h = 0, et = null; te !== null && le < y.length; le++) {
        te.index > le ? (et = te, te = null) : et = te.sibling;
        var je = E(v, te, y[le], L);
        if (je === null) {
          te === null && (te = et);
          break;
        }
        e && te && je.alternate === null && t(v, te), h = i(je, h, le), ee === null ? Q = je : ee.sibling = je, ee = je, te = et;
      }
      if (le === y.length) return n(v, te), De && Bn(v, le), Q;
      if (te === null) {
        for (; le < y.length; le++) te = N(v, y[le], L), te !== null && (h = i(te, h, le), ee === null ? Q = te : ee.sibling = te, ee = te);
        return De && Bn(v, le), Q;
      }
      for (te = r(v, te); le < y.length; le++) et = D(te, v, le, y[le], L), et !== null && (e && et.alternate !== null && te.delete(et.key === null ? le : et.key), h = i(et, h, le), ee === null ? Q = et : ee.sibling = et, ee = et);
      return e && te.forEach(function(zn) {
        return t(v, zn);
      }), De && Bn(v, le), Q;
    }
    function H(v, h, y, L) {
      var Q = V(y);
      if (typeof Q != "function") throw Error(a(150));
      if (y = Q.call(y), y == null) throw Error(a(151));
      for (var ee = Q = null, te = h, le = h = 0, et = null, je = y.next(); te !== null && !je.done; le++, je = y.next()) {
        te.index > le ? (et = te, te = null) : et = te.sibling;
        var zn = E(v, te, je.value, L);
        if (zn === null) {
          te === null && (te = et);
          break;
        }
        e && te && zn.alternate === null && t(v, te), h = i(zn, h, le), ee === null ? Q = zn : ee.sibling = zn, ee = zn, te = et;
      }
      if (je.done) return n(
        v,
        te
      ), De && Bn(v, le), Q;
      if (te === null) {
        for (; !je.done; le++, je = y.next()) je = N(v, je.value, L), je !== null && (h = i(je, h, le), ee === null ? Q = je : ee.sibling = je, ee = je);
        return De && Bn(v, le), Q;
      }
      for (te = r(v, te); !je.done; le++, je = y.next()) je = D(te, v, le, je.value, L), je !== null && (e && je.alternate !== null && te.delete(je.key === null ? le : je.key), h = i(je, h, le), ee === null ? Q = je : ee.sibling = je, ee = je);
      return e && te.forEach(function(kd) {
        return t(v, kd);
      }), De && Bn(v, le), Q;
    }
    function Ve(v, h, y, L) {
      if (typeof y == "object" && y !== null && y.type === ae && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case K:
            e: {
              for (var Q = y.key, ee = h; ee !== null; ) {
                if (ee.key === Q) {
                  if (Q = y.type, Q === ae) {
                    if (ee.tag === 7) {
                      n(v, ee.sibling), h = l(ee, y.props.children), h.return = v, v = h;
                      break e;
                    }
                  } else if (ee.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === Me && Lu(Q) === ee.type) {
                    n(v, ee.sibling), h = l(ee, y.props), h.ref = tl(v, ee, y), h.return = v, v = h;
                    break e;
                  }
                  n(v, ee);
                  break;
                } else t(v, ee);
                ee = ee.sibling;
              }
              y.type === ae ? (h = Zn(y.props.children, v.mode, L, y.key), h.return = v, v = h) : (L = gi(y.type, y.key, y.props, null, v.mode, L), L.ref = tl(v, h, y), L.return = v, v = L);
            }
            return o(v);
          case de:
            e: {
              for (ee = y.key; h !== null; ) {
                if (h.key === ee) if (h.tag === 4 && h.stateNode.containerInfo === y.containerInfo && h.stateNode.implementation === y.implementation) {
                  n(v, h.sibling), h = l(h, y.children || []), h.return = v, v = h;
                  break e;
                } else {
                  n(v, h);
                  break;
                }
                else t(v, h);
                h = h.sibling;
              }
              h = fs(y, v.mode, L), h.return = v, v = h;
            }
            return o(v);
          case Me:
            return ee = y._init, Ve(v, h, ee(y._payload), L);
        }
        if (Te(y)) return B(v, h, y, L);
        if (V(y)) return H(v, h, y, L);
        Gl(v, y);
      }
      return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, h !== null && h.tag === 6 ? (n(v, h.sibling), h = l(h, y), h.return = v, v = h) : (n(v, h), h = cs(y, v.mode, L), h.return = v, v = h), o(v)) : n(v, h);
    }
    return Ve;
  }
  var vr = Mu(!0), Ru = Mu(!1), ql = xn(null), Zl = null, yr = null, xo = null;
  function ko() {
    xo = yr = Zl = null;
  }
  function So(e) {
    var t = ql.current;
    Ie(ql), e._currentValue = t;
  }
  function jo(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function gr(e, t) {
    Zl = e, xo = yr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (yt = !0), e.firstContext = null);
  }
  function zt(e) {
    var t = e._currentValue;
    if (xo !== e) if (e = { context: e, memoizedValue: t, next: null }, yr === null) {
      if (Zl === null) throw Error(a(308));
      yr = e, Zl.dependencies = { lanes: 0, firstContext: e };
    } else yr = yr.next = e;
    return t;
  }
  var Hn = null;
  function Eo(e) {
    Hn === null ? Hn = [e] : Hn.push(e);
  }
  function zu(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Eo(t)) : (n.next = l.next, l.next = n), t.interleaved = n, un(e, r);
  }
  function un(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var jn = !1;
  function Co(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Pu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function an(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function En(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (ke & 2) !== 0) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, un(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, Eo(r)) : (t.next = l.next, l.next = t), r.interleaved = t, un(e, n);
  }
  function Xl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Di(e, n);
    }
  }
  function Tu(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var l = null, i = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          i === null ? l = i = o : i = i.next = o, n = n.next;
        } while (n !== null);
        i === null ? l = i = t : i = i.next = t;
      } else l = i = t;
      n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Jl(e, t, n, r) {
    var l = e.updateQueue;
    jn = !1;
    var i = l.firstBaseUpdate, o = l.lastBaseUpdate, d = l.shared.pending;
    if (d !== null) {
      l.shared.pending = null;
      var p = d, g = p.next;
      p.next = null, o === null ? i = g : o.next = g, o = p;
      var C = e.alternate;
      C !== null && (C = C.updateQueue, d = C.lastBaseUpdate, d !== o && (d === null ? C.firstBaseUpdate = g : d.next = g, C.lastBaseUpdate = p));
    }
    if (i !== null) {
      var N = l.baseState;
      o = 0, C = g = p = null, d = i;
      do {
        var E = d.lane, D = d.eventTime;
        if ((r & E) === E) {
          C !== null && (C = C.next = {
            eventTime: D,
            lane: 0,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null
          });
          e: {
            var B = e, H = d;
            switch (E = t, D = n, H.tag) {
              case 1:
                if (B = H.payload, typeof B == "function") {
                  N = B.call(D, N, E);
                  break e;
                }
                N = B;
                break e;
              case 3:
                B.flags = B.flags & -65537 | 128;
              case 0:
                if (B = H.payload, E = typeof B == "function" ? B.call(D, N, E) : B, E == null) break e;
                N = z({}, N, E);
                break e;
              case 2:
                jn = !0;
            }
          }
          d.callback !== null && d.lane !== 0 && (e.flags |= 64, E = l.effects, E === null ? l.effects = [d] : E.push(d));
        } else D = { eventTime: D, lane: E, tag: d.tag, payload: d.payload, callback: d.callback, next: null }, C === null ? (g = C = D, p = N) : C = C.next = D, o |= E;
        if (d = d.next, d === null) {
          if (d = l.shared.pending, d === null) break;
          E = d, d = E.next, E.next = null, l.lastBaseUpdate = E, l.shared.pending = null;
        }
      } while (!0);
      if (C === null && (p = N), l.baseState = p, l.firstBaseUpdate = g, l.lastBaseUpdate = C, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          o |= l.lane, l = l.next;
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      Kn |= o, e.lanes = o, e.memoizedState = N;
    }
  }
  function Au(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(a(191, l));
        l.call(r);
      }
    }
  }
  var nl = {}, qt = xn(nl), rl = xn(nl), ll = xn(nl);
  function Vn(e) {
    if (e === nl) throw Error(a(174));
    return e;
  }
  function _o(e, t) {
    switch (Ae(ll, t), Ae(rl, e), Ae(qt, nl), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Qt(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Qt(t, e);
    }
    Ie(qt), Ae(qt, t);
  }
  function wr() {
    Ie(qt), Ie(rl), Ie(ll);
  }
  function Ou(e) {
    Vn(ll.current);
    var t = Vn(qt.current), n = Qt(t, e.type);
    t !== n && (Ae(rl, e), Ae(qt, n));
  }
  function No(e) {
    rl.current === e && (Ie(qt), Ie(rl));
  }
  var Ue = xn(0);
  function bl(e) {
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
  var Lo = [];
  function Mo() {
    for (var e = 0; e < Lo.length; e++) Lo[e]._workInProgressVersionPrimary = null;
    Lo.length = 0;
  }
  var ei = X.ReactCurrentDispatcher, Ro = X.ReactCurrentBatchConfig, Qn = 0, We = null, qe = null, Je = null, ti = !1, il = !1, ol = 0, Hf = 0;
  function ot() {
    throw Error(a(321));
  }
  function zo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!$t(e[n], t[n])) return !1;
    return !0;
  }
  function Po(e, t, n, r, l, i) {
    if (Qn = i, We = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ei.current = e === null || e.memoizedState === null ? Yf : Gf, e = n(r, l), il) {
      i = 0;
      do {
        if (il = !1, ol = 0, 25 <= i) throw Error(a(301));
        i += 1, Je = qe = null, t.updateQueue = null, ei.current = qf, e = n(r, l);
      } while (il);
    }
    if (ei.current = li, t = qe !== null && qe.next !== null, Qn = 0, Je = qe = We = null, ti = !1, t) throw Error(a(300));
    return e;
  }
  function To() {
    var e = ol !== 0;
    return ol = 0, e;
  }
  function Zt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Je === null ? We.memoizedState = Je = e : Je = Je.next = e, Je;
  }
  function Pt() {
    if (qe === null) {
      var e = We.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = qe.next;
    var t = Je === null ? We.memoizedState : Je.next;
    if (t !== null) Je = t, qe = e;
    else {
      if (e === null) throw Error(a(310));
      qe = e, e = { memoizedState: qe.memoizedState, baseState: qe.baseState, baseQueue: qe.baseQueue, queue: qe.queue, next: null }, Je === null ? We.memoizedState = Je = e : Je = Je.next = e;
    }
    return Je;
  }
  function sl(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ao(e) {
    var t = Pt(), n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = qe, l = r.baseQueue, i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var o = l.next;
        l.next = i.next, i.next = o;
      }
      r.baseQueue = l = i, n.pending = null;
    }
    if (l !== null) {
      i = l.next, r = r.baseState;
      var d = o = null, p = null, g = i;
      do {
        var C = g.lane;
        if ((Qn & C) === C) p !== null && (p = p.next = { lane: 0, action: g.action, hasEagerState: g.hasEagerState, eagerState: g.eagerState, next: null }), r = g.hasEagerState ? g.eagerState : e(r, g.action);
        else {
          var N = {
            lane: C,
            action: g.action,
            hasEagerState: g.hasEagerState,
            eagerState: g.eagerState,
            next: null
          };
          p === null ? (d = p = N, o = r) : p = p.next = N, We.lanes |= C, Kn |= C;
        }
        g = g.next;
      } while (g !== null && g !== i);
      p === null ? o = r : p.next = d, $t(r, t.memoizedState) || (yt = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = p, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        i = l.lane, We.lanes |= i, Kn |= i, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Oo(e) {
    var t = Pt(), n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var o = l = l.next;
      do
        i = e(i, o.action), o = o.next;
      while (o !== l);
      $t(i, t.memoizedState) || (yt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [i, r];
  }
  function Iu() {
  }
  function Fu(e, t) {
    var n = We, r = Pt(), l = t(), i = !$t(r.memoizedState, l);
    if (i && (r.memoizedState = l, yt = !0), r = r.queue, Io(Uu.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Je !== null && Je.memoizedState.tag & 1) {
      if (n.flags |= 2048, ul(9, $u.bind(null, n, r, l, t), void 0, null), be === null) throw Error(a(349));
      (Qn & 30) !== 0 || Du(n, t, l);
    }
    return l;
  }
  function Du(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = We.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, We.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function $u(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Wu(t) && Bu(e);
  }
  function Uu(e, t, n) {
    return n(function() {
      Wu(t) && Bu(e);
    });
  }
  function Wu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !$t(e, n);
    } catch {
      return !0;
    }
  }
  function Bu(e) {
    var t = un(e, 1);
    t !== null && Vt(t, e, 1, -1);
  }
  function Hu(e) {
    var t = Zt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: sl, lastRenderedState: e }, t.queue = e, e = e.dispatch = Kf.bind(null, We, e), [t.memoizedState, e];
  }
  function ul(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = We.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, We.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Vu() {
    return Pt().memoizedState;
  }
  function ni(e, t, n, r) {
    var l = Zt();
    We.flags |= e, l.memoizedState = ul(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function ri(e, t, n, r) {
    var l = Pt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (qe !== null) {
      var o = qe.memoizedState;
      if (i = o.destroy, r !== null && zo(r, o.deps)) {
        l.memoizedState = ul(t, n, i, r);
        return;
      }
    }
    We.flags |= e, l.memoizedState = ul(1 | t, n, i, r);
  }
  function Qu(e, t) {
    return ni(8390656, 8, e, t);
  }
  function Io(e, t) {
    return ri(2048, 8, e, t);
  }
  function Ku(e, t) {
    return ri(4, 2, e, t);
  }
  function Yu(e, t) {
    return ri(4, 4, e, t);
  }
  function Gu(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function qu(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ri(4, 4, Gu.bind(null, t, e), n);
  }
  function Fo() {
  }
  function Zu(e, t) {
    var n = Pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && zo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Xu(e, t) {
    var n = Pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && zo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Ju(e, t, n) {
    return (Qn & 21) === 0 ? (e.baseState && (e.baseState = !1, yt = !0), e.memoizedState = n) : ($t(n, t) || (n = Ls(), We.lanes |= n, Kn |= n, e.baseState = !0), t);
  }
  function Vf(e, t) {
    var n = Ne;
    Ne = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Ro.transition;
    Ro.transition = {};
    try {
      e(!1), t();
    } finally {
      Ne = n, Ro.transition = r;
    }
  }
  function bu() {
    return Pt().memoizedState;
  }
  function Qf(e, t, n) {
    var r = Ln(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ea(e)) ta(t, n);
    else if (n = zu(e, t, n, r), n !== null) {
      var l = dt();
      Vt(n, e, r, l), na(n, t, r);
    }
  }
  function Kf(e, t, n) {
    var r = Ln(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (ea(e)) ta(t, l);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
        var o = t.lastRenderedState, d = i(o, n);
        if (l.hasEagerState = !0, l.eagerState = d, $t(d, o)) {
          var p = t.interleaved;
          p === null ? (l.next = l, Eo(t)) : (l.next = p.next, p.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      n = zu(e, t, l, r), n !== null && (l = dt(), Vt(n, e, r, l), na(n, t, r));
    }
  }
  function ea(e) {
    var t = e.alternate;
    return e === We || t !== null && t === We;
  }
  function ta(e, t) {
    il = ti = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function na(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Di(e, n);
    }
  }
  var li = { readContext: zt, useCallback: ot, useContext: ot, useEffect: ot, useImperativeHandle: ot, useInsertionEffect: ot, useLayoutEffect: ot, useMemo: ot, useReducer: ot, useRef: ot, useState: ot, useDebugValue: ot, useDeferredValue: ot, useTransition: ot, useMutableSource: ot, useSyncExternalStore: ot, useId: ot, unstable_isNewReconciler: !1 }, Yf = { readContext: zt, useCallback: function(e, t) {
    return Zt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: zt, useEffect: Qu, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ni(
      4194308,
      4,
      Gu.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return ni(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return ni(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Zt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Zt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Qf.bind(null, We, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Zt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Hu, useDebugValue: Fo, useDeferredValue: function(e) {
    return Zt().memoizedState = e;
  }, useTransition: function() {
    var e = Hu(!1), t = e[0];
    return e = Vf.bind(null, e[1]), Zt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = We, l = Zt();
    if (De) {
      if (n === void 0) throw Error(a(407));
      n = n();
    } else {
      if (n = t(), be === null) throw Error(a(349));
      (Qn & 30) !== 0 || Du(r, t, n);
    }
    l.memoizedState = n;
    var i = { value: n, getSnapshot: t };
    return l.queue = i, Qu(Uu.bind(
      null,
      r,
      i,
      e
    ), [e]), r.flags |= 2048, ul(9, $u.bind(null, r, i, n, t), void 0, null), n;
  }, useId: function() {
    var e = Zt(), t = be.identifierPrefix;
    if (De) {
      var n = sn, r = on;
      n = (r & ~(1 << 32 - Dt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ol++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Hf++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Gf = {
    readContext: zt,
    useCallback: Zu,
    useContext: zt,
    useEffect: Io,
    useImperativeHandle: qu,
    useInsertionEffect: Ku,
    useLayoutEffect: Yu,
    useMemo: Xu,
    useReducer: Ao,
    useRef: Vu,
    useState: function() {
      return Ao(sl);
    },
    useDebugValue: Fo,
    useDeferredValue: function(e) {
      var t = Pt();
      return Ju(t, qe.memoizedState, e);
    },
    useTransition: function() {
      var e = Ao(sl)[0], t = Pt().memoizedState;
      return [e, t];
    },
    useMutableSource: Iu,
    useSyncExternalStore: Fu,
    useId: bu,
    unstable_isNewReconciler: !1
  }, qf = { readContext: zt, useCallback: Zu, useContext: zt, useEffect: Io, useImperativeHandle: qu, useInsertionEffect: Ku, useLayoutEffect: Yu, useMemo: Xu, useReducer: Oo, useRef: Vu, useState: function() {
    return Oo(sl);
  }, useDebugValue: Fo, useDeferredValue: function(e) {
    var t = Pt();
    return qe === null ? t.memoizedState = e : Ju(t, qe.memoizedState, e);
  }, useTransition: function() {
    var e = Oo(sl)[0], t = Pt().memoizedState;
    return [e, t];
  }, useMutableSource: Iu, useSyncExternalStore: Fu, useId: bu, unstable_isNewReconciler: !1 };
  function Wt(e, t) {
    if (e && e.defaultProps) {
      t = z({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Do(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : z({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var ii = { isMounted: function(e) {
    return (e = e._reactInternals) ? Ft(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = dt(), l = Ln(e), i = an(r, l);
    i.payload = t, n != null && (i.callback = n), t = En(e, i, l), t !== null && (Vt(t, e, l, r), Xl(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = dt(), l = Ln(e), i = an(r, l);
    i.tag = 1, i.payload = t, n != null && (i.callback = n), t = En(e, i, l), t !== null && (Vt(t, e, l, r), Xl(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = dt(), r = Ln(e), l = an(n, r);
    l.tag = 2, t != null && (l.callback = t), t = En(e, l, r), t !== null && (Vt(t, e, r, n), Xl(t, e, r));
  } };
  function ra(e, t, n, r, l, i, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Gr(n, r) || !Gr(l, i) : !0;
  }
  function la(e, t, n) {
    var r = !1, l = kn, i = t.contextType;
    return typeof i == "object" && i !== null ? i = zt(i) : (l = vt(t) ? Un : it.current, r = t.contextTypes, i = (r = r != null) ? dr(e, l) : kn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ii, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
  }
  function ia(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ii.enqueueReplaceState(t, t.state, null);
  }
  function $o(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Co(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = zt(i) : (i = vt(t) ? Un : it.current, l.context = dr(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Do(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && ii.enqueueReplaceState(l, l.state, null), Jl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function xr(e, t) {
    try {
      var n = "", r = t;
      do
        n += S(r), r = r.return;
      while (r);
      var l = n;
    } catch (i) {
      l = `
Error generating stack: ` + i.message + `
` + i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Uo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Wo(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Zf = typeof WeakMap == "function" ? WeakMap : Map;
  function oa(e, t, n) {
    n = an(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      di || (di = !0, ns = r), Wo(e, t);
    }, n;
  }
  function sa(e, t, n) {
    n = an(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        Wo(e, t);
      };
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
      Wo(e, t), typeof r != "function" && (_n === null ? _n = /* @__PURE__ */ new Set([this]) : _n.add(this));
      var o = t.stack;
      this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
    }), n;
  }
  function ua(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Zf();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = cd.bind(null, e, t, n), t.then(e, e));
  }
  function aa(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function ca(e, t, n, r, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = an(-1, 1), t.tag = 2, En(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var Xf = X.ReactCurrentOwner, yt = !1;
  function ft(e, t, n, r) {
    t.child = e === null ? Ru(t, null, n, r) : vr(t, e.child, n, r);
  }
  function fa(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return gr(t, l), r = Po(e, t, n, r, i, l), n = To(), e !== null && !yt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, cn(e, t, l)) : (De && n && mo(t), t.flags |= 1, ft(e, t, r, l), t.child);
  }
  function da(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !as(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, pa(e, t, i, r, l)) : (e = gi(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, (e.lanes & l) === 0) {
      var o = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Gr, n(o, r) && e.ref === t.ref) return cn(e, t, l);
    }
    return t.flags |= 1, e = Rn(i, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function pa(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Gr(i, r) && e.ref === t.ref) if (yt = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (yt = !0);
      else return t.lanes = e.lanes, cn(e, t, l);
    }
    return Bo(e, t, n, r, l);
  }
  function ha(e, t, n) {
    var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ae(Sr, Nt), Nt |= n;
    else {
      if ((n & 1073741824) === 0) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ae(Sr, Nt), Nt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Ae(Sr, Nt), Nt |= r;
    }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Ae(Sr, Nt), Nt |= r;
    return ft(e, t, l, n), t.child;
  }
  function ma(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Bo(e, t, n, r, l) {
    var i = vt(n) ? Un : it.current;
    return i = dr(t, i), gr(t, l), n = Po(e, t, n, r, i, l), r = To(), e !== null && !yt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, cn(e, t, l)) : (De && r && mo(t), t.flags |= 1, ft(e, t, n, l), t.child);
  }
  function va(e, t, n, r, l) {
    if (vt(n)) {
      var i = !0;
      Hl(t);
    } else i = !1;
    if (gr(t, l), t.stateNode === null) si(e, t), la(t, n, r), $o(t, n, r, l), r = !0;
    else if (e === null) {
      var o = t.stateNode, d = t.memoizedProps;
      o.props = d;
      var p = o.context, g = n.contextType;
      typeof g == "object" && g !== null ? g = zt(g) : (g = vt(n) ? Un : it.current, g = dr(t, g));
      var C = n.getDerivedStateFromProps, N = typeof C == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      N || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (d !== r || p !== g) && ia(t, o, r, g), jn = !1;
      var E = t.memoizedState;
      o.state = E, Jl(t, r, o, l), p = t.memoizedState, d !== r || E !== p || mt.current || jn ? (typeof C == "function" && (Do(t, n, C, r), p = t.memoizedState), (d = jn || ra(t, n, d, r, E, p, g)) ? (N || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = p), o.props = r, o.state = p, o.context = g, r = d) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      o = t.stateNode, Pu(e, t), d = t.memoizedProps, g = t.type === t.elementType ? d : Wt(t.type, d), o.props = g, N = t.pendingProps, E = o.context, p = n.contextType, typeof p == "object" && p !== null ? p = zt(p) : (p = vt(n) ? Un : it.current, p = dr(t, p));
      var D = n.getDerivedStateFromProps;
      (C = typeof D == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (d !== N || E !== p) && ia(t, o, r, p), jn = !1, E = t.memoizedState, o.state = E, Jl(t, r, o, l);
      var B = t.memoizedState;
      d !== N || E !== B || mt.current || jn ? (typeof D == "function" && (Do(t, n, D, r), B = t.memoizedState), (g = jn || ra(t, n, g, r, E, B, p) || !1) ? (C || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, B, p), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, B, p)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || d === e.memoizedProps && E === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && E === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = B), o.props = r, o.state = B, o.context = p, r = g) : (typeof o.componentDidUpdate != "function" || d === e.memoizedProps && E === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && E === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Ho(e, t, n, r, i, l);
  }
  function Ho(e, t, n, r, l, i) {
    ma(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && ku(t, n, !1), cn(e, t, i);
    r = t.stateNode, Xf.current = t;
    var d = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = vr(t, e.child, null, i), t.child = vr(t, null, d, i)) : ft(e, t, d, i), t.memoizedState = r.state, l && ku(t, n, !0), t.child;
  }
  function ya(e) {
    var t = e.stateNode;
    t.pendingContext ? wu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && wu(e, t.context, !1), _o(e, t.containerInfo);
  }
  function ga(e, t, n, r, l) {
    return mr(), wo(l), t.flags |= 256, ft(e, t, n, r), t.child;
  }
  var Vo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Qo(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function wa(e, t, n) {
    var r = t.pendingProps, l = Ue.current, i = !1, o = (t.flags & 128) !== 0, d;
    if ((d = o) || (d = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), d ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Ae(Ue, l & 1), e === null)
      return go(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = wi(o, r, 0, null), e = Zn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Qo(n), t.memoizedState = Vo, e) : Ko(t, o));
    if (l = e.memoizedState, l !== null && (d = l.dehydrated, d !== null)) return Jf(e, t, o, r, d, l, n);
    if (i) {
      i = r.fallback, o = t.mode, l = e.child, d = l.sibling;
      var p = { mode: "hidden", children: r.children };
      return (o & 1) === 0 && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = p, t.deletions = null) : (r = Rn(l, p), r.subtreeFlags = l.subtreeFlags & 14680064), d !== null ? i = Rn(d, i) : (i = Zn(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? Qo(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = Vo, r;
    }
    return i = e.child, e = i.sibling, r = Rn(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Ko(e, t) {
    return t = wi({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function oi(e, t, n, r) {
    return r !== null && wo(r), vr(t, e.child, null, n), e = Ko(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Jf(e, t, n, r, l, i, o) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Uo(Error(a(422))), oi(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = wi({ mode: "visible", children: r.children }, l, 0, null), i = Zn(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && vr(t, e.child, null, o), t.child.memoizedState = Qo(o), t.memoizedState = Vo, i);
    if ((t.mode & 1) === 0) return oi(e, t, o, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var d = r.dgst;
      return r = d, i = Error(a(419)), r = Uo(i, r, void 0), oi(e, t, o, r);
    }
    if (d = (o & e.childLanes) !== 0, yt || d) {
      if (r = be, r !== null) {
        switch (o & -o) {
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
        l = (l & (r.suspendedLanes | o)) !== 0 ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, un(e, l), Vt(r, e, l, -1));
      }
      return us(), r = Uo(Error(a(421))), oi(e, t, o, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = fd.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, _t = wn(l.nextSibling), Ct = t, De = !0, Ut = null, e !== null && (Mt[Rt++] = on, Mt[Rt++] = sn, Mt[Rt++] = Wn, on = e.id, sn = e.overflow, Wn = t), t = Ko(t, r.children), t.flags |= 4096, t);
  }
  function xa(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), jo(e.return, t, n);
  }
  function Yo(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
  }
  function ka(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, i = r.tail;
    if (ft(e, t, r.children, n), r = Ue.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && xa(e, n, t);
        else if (e.tag === 19) xa(e, n, t);
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
    if (Ae(Ue, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && bl(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Yo(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && bl(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Yo(t, !0, n, null, i);
        break;
      case "together":
        Yo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function si(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function cn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Kn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(a(153));
    if (t.child !== null) {
      for (e = t.child, n = Rn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Rn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function bf(e, t, n) {
    switch (t.tag) {
      case 3:
        ya(t), mr();
        break;
      case 5:
        Ou(t);
        break;
      case 1:
        vt(t.type) && Hl(t);
        break;
      case 4:
        _o(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        Ae(ql, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Ae(Ue, Ue.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? wa(e, t, n) : (Ae(Ue, Ue.current & 1), e = cn(e, t, n), e !== null ? e.sibling : null);
        Ae(Ue, Ue.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return ka(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Ae(Ue, Ue.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, ha(e, t, n);
    }
    return cn(e, t, n);
  }
  var Sa, Go, ja, Ea;
  Sa = function(e, t) {
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
  }, Go = function() {
  }, ja = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, Vn(qt.current);
      var i = null;
      switch (n) {
        case "input":
          l = Ge(e, l), r = Ge(e, r), i = [];
          break;
        case "select":
          l = z({}, l, { value: void 0 }), r = z({}, r, { value: void 0 }), i = [];
          break;
        case "textarea":
          l = bt(e, l), r = bt(e, r), i = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ul);
      }
      nn(n, r);
      var o;
      n = null;
      for (g in l) if (!r.hasOwnProperty(g) && l.hasOwnProperty(g) && l[g] != null) if (g === "style") {
        var d = l[g];
        for (o in d) d.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
      } else g !== "dangerouslySetInnerHTML" && g !== "children" && g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && g !== "autoFocus" && (_.hasOwnProperty(g) ? i || (i = []) : (i = i || []).push(g, null));
      for (g in r) {
        var p = r[g];
        if (d = l?.[g], r.hasOwnProperty(g) && p !== d && (p != null || d != null)) if (g === "style") if (d) {
          for (o in d) !d.hasOwnProperty(o) || p && p.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
          for (o in p) p.hasOwnProperty(o) && d[o] !== p[o] && (n || (n = {}), n[o] = p[o]);
        } else n || (i || (i = []), i.push(
          g,
          n
        )), n = p;
        else g === "dangerouslySetInnerHTML" ? (p = p ? p.__html : void 0, d = d ? d.__html : void 0, p != null && d !== p && (i = i || []).push(g, p)) : g === "children" ? typeof p != "string" && typeof p != "number" || (i = i || []).push(g, "" + p) : g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && (_.hasOwnProperty(g) ? (p != null && g === "onScroll" && Oe("scroll", e), i || d === p || (i = [])) : (i = i || []).push(g, p));
      }
      n && (i = i || []).push("style", n);
      var g = i;
      (t.updateQueue = g) && (t.flags |= 4);
    }
  }, Ea = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function al(e, t) {
    if (!De) switch (e.tailMode) {
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
  function st(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function ed(e, t, n) {
    var r = t.pendingProps;
    switch (vo(t), t.tag) {
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
        return st(t), null;
      case 1:
        return vt(t.type) && Bl(), st(t), null;
      case 3:
        return r = t.stateNode, wr(), Ie(mt), Ie(it), Mo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Yl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ut !== null && (is(Ut), Ut = null))), Go(e, t), st(t), null;
      case 5:
        No(t);
        var l = Vn(ll.current);
        if (n = t.type, e !== null && t.stateNode != null) ja(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(a(166));
            return st(t), null;
          }
          if (e = Vn(qt.current), Yl(t)) {
            r = t.stateNode, n = t.type;
            var i = t.memoizedProps;
            switch (r[Gt] = t, r[br] = i, e = (t.mode & 1) !== 0, n) {
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
                for (l = 0; l < Zr.length; l++) Oe(Zr[l], r);
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
                Qe(r, i), Oe("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!i.multiple }, Oe("invalid", r);
                break;
              case "textarea":
                St(r, i), Oe("invalid", r);
            }
            nn(n, i), l = null;
            for (var o in i) if (i.hasOwnProperty(o)) {
              var d = i[o];
              o === "children" ? typeof d == "string" ? r.textContent !== d && (i.suppressHydrationWarning !== !0 && $l(r.textContent, d, e), l = ["children", d]) : typeof d == "number" && r.textContent !== "" + d && (i.suppressHydrationWarning !== !0 && $l(
                r.textContent,
                d,
                e
              ), l = ["children", "" + d]) : _.hasOwnProperty(o) && d != null && o === "onScroll" && Oe("scroll", r);
            }
            switch (n) {
              case "input":
                Re(r), Ke(r, i, !0);
                break;
              case "textarea":
                Re(r), Tn(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = Ul);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = An(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Gt] = t, e[br] = r, Sa(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (o = Fn(n, r), n) {
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
                  for (l = 0; l < Zr.length; l++) Oe(Zr[l], e);
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
                  Qe(e, r), l = Ge(e, r), Oe("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = z({}, r, { value: void 0 }), Oe("invalid", e);
                  break;
                case "textarea":
                  St(e, r), l = bt(e, r), Oe("invalid", e);
                  break;
                default:
                  l = r;
              }
              nn(n, l), d = l;
              for (i in d) if (d.hasOwnProperty(i)) {
                var p = d[i];
                i === "style" ? tn(e, p) : i === "dangerouslySetInnerHTML" ? (p = p ? p.__html : void 0, p != null && Jn(e, p)) : i === "children" ? typeof p == "string" ? (n !== "textarea" || p !== "") && jt(e, p) : typeof p == "number" && jt(e, "" + p) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (_.hasOwnProperty(i) ? p != null && i === "onScroll" && Oe("scroll", e) : p != null && he(e, i, p, o));
              }
              switch (n) {
                case "input":
                  Re(e), Ke(e, r, !1);
                  break;
                case "textarea":
                  Re(e), Tn(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + b(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, i = r.value, i != null ? kt(e, !!r.multiple, i, !1) : r.defaultValue != null && kt(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Ul);
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
        return st(t), null;
      case 6:
        if (e && t.stateNode != null) Ea(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(a(166));
          if (n = Vn(ll.current), Vn(qt.current), Yl(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Gt] = t, (i = r.nodeValue !== n) && (e = Ct, e !== null)) switch (e.tag) {
              case 3:
                $l(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && $l(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            i && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Gt] = t, t.stateNode = r;
        }
        return st(t), null;
      case 13:
        if (Ie(Ue), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (De && _t !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Nu(), mr(), t.flags |= 98560, i = !1;
          else if (i = Yl(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(a(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(a(317));
              i[Gt] = t;
            } else mr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            st(t), i = !1;
          } else Ut !== null && (is(Ut), Ut = null), i = !0;
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Ue.current & 1) !== 0 ? Ze === 0 && (Ze = 3) : us())), t.updateQueue !== null && (t.flags |= 4), st(t), null);
      case 4:
        return wr(), Go(e, t), e === null && Xr(t.stateNode.containerInfo), st(t), null;
      case 10:
        return So(t.type._context), st(t), null;
      case 17:
        return vt(t.type) && Bl(), st(t), null;
      case 19:
        if (Ie(Ue), i = t.memoizedState, i === null) return st(t), null;
        if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) al(i, !1);
        else {
          if (Ze !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (o = bl(e), o !== null) {
              for (t.flags |= 128, al(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Ae(Ue, Ue.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          i.tail !== null && He() > jr && (t.flags |= 128, r = !0, al(i, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = bl(o), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), al(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !De) return st(t), null;
          } else 2 * He() - i.renderingStartTime > jr && n !== 1073741824 && (t.flags |= 128, r = !0, al(i, !1), t.lanes = 4194304);
          i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = He(), t.sibling = null, n = Ue.current, Ae(Ue, r ? n & 1 | 2 : n & 1), t) : (st(t), null);
      case 22:
      case 23:
        return ss(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (Nt & 1073741824) !== 0 && (st(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : st(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function td(e, t) {
    switch (vo(t), t.tag) {
      case 1:
        return vt(t.type) && Bl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return wr(), Ie(mt), Ie(it), Mo(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return No(t), null;
      case 13:
        if (Ie(Ue), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(a(340));
          mr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Ie(Ue), null;
      case 4:
        return wr(), null;
      case 10:
        return So(t.type._context), null;
      case 22:
      case 23:
        return ss(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ui = !1, ut = !1, nd = typeof WeakSet == "function" ? WeakSet : Set, U = null;
  function kr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      Be(e, t, r);
    }
    else n.current = null;
  }
  function qo(e, t, n) {
    try {
      n();
    } catch (r) {
      Be(e, t, r);
    }
  }
  var Ca = !1;
  function rd(e, t) {
    if (oo = Ll, e = ru(), Ji(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0, d = -1, p = -1, g = 0, C = 0, N = e, E = null;
          t: for (; ; ) {
            for (var D; N !== n || l !== 0 && N.nodeType !== 3 || (d = o + l), N !== i || r !== 0 && N.nodeType !== 3 || (p = o + r), N.nodeType === 3 && (o += N.nodeValue.length), (D = N.firstChild) !== null; )
              E = N, N = D;
            for (; ; ) {
              if (N === e) break t;
              if (E === n && ++g === l && (d = o), E === i && ++C === r && (p = o), (D = N.nextSibling) !== null) break;
              N = E, E = N.parentNode;
            }
            N = D;
          }
          n = d === -1 || p === -1 ? null : { start: d, end: p };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (so = { focusedElem: e, selectionRange: n }, Ll = !1, U = t; U !== null; ) if (t = U, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, U = e;
    else for (; U !== null; ) {
      t = U;
      try {
        var B = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (B !== null) {
              var H = B.memoizedProps, Ve = B.memoizedState, v = t.stateNode, h = v.getSnapshotBeforeUpdate(t.elementType === t.type ? H : Wt(t.type, H), Ve);
              v.__reactInternalSnapshotBeforeUpdate = h;
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
            throw Error(a(163));
        }
      } catch (L) {
        Be(t, t.return, L);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, U = e;
        break;
      }
      U = t.return;
    }
    return B = Ca, Ca = !1, B;
  }
  function cl(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          l.destroy = void 0, i !== void 0 && qo(t, n, i);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function ai(e, t) {
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
  function Zo(e) {
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
  function _a(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, _a(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Gt], delete t[br], delete t[fo], delete t[$f], delete t[Uf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Na(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function La(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Na(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Xo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ul));
    else if (r !== 4 && (e = e.child, e !== null)) for (Xo(e, t, n), e = e.sibling; e !== null; ) Xo(e, t, n), e = e.sibling;
  }
  function Jo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (Jo(e, t, n), e = e.sibling; e !== null; ) Jo(e, t, n), e = e.sibling;
  }
  var tt = null, Bt = !1;
  function Cn(e, t, n) {
    for (n = n.child; n !== null; ) Ma(e, t, n), n = n.sibling;
  }
  function Ma(e, t, n) {
    if (Yt && typeof Yt.onCommitFiberUnmount == "function") try {
      Yt.onCommitFiberUnmount(Sl, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        ut || kr(n, t);
      case 6:
        var r = tt, l = Bt;
        tt = null, Cn(e, t, n), tt = r, Bt = l, tt !== null && (Bt ? (e = tt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : tt.removeChild(n.stateNode));
        break;
      case 18:
        tt !== null && (Bt ? (e = tt, n = n.stateNode, e.nodeType === 8 ? co(e.parentNode, n) : e.nodeType === 1 && co(e, n), Br(e)) : co(tt, n.stateNode));
        break;
      case 4:
        r = tt, l = Bt, tt = n.stateNode.containerInfo, Bt = !0, Cn(e, t, n), tt = r, Bt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!ut && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var i = l, o = i.destroy;
            i = i.tag, o !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && qo(n, t, o), l = l.next;
          } while (l !== r);
        }
        Cn(e, t, n);
        break;
      case 1:
        if (!ut && (kr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (d) {
          Be(n, t, d);
        }
        Cn(e, t, n);
        break;
      case 21:
        Cn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (ut = (r = ut) || n.memoizedState !== null, Cn(e, t, n), ut = r) : Cn(e, t, n);
        break;
      default:
        Cn(e, t, n);
    }
  }
  function Ra(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new nd()), t.forEach(function(r) {
        var l = dd.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function Ht(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e, o = t, d = o;
        e: for (; d !== null; ) {
          switch (d.tag) {
            case 5:
              tt = d.stateNode, Bt = !1;
              break e;
            case 3:
              tt = d.stateNode.containerInfo, Bt = !0;
              break e;
            case 4:
              tt = d.stateNode.containerInfo, Bt = !0;
              break e;
          }
          d = d.return;
        }
        if (tt === null) throw Error(a(160));
        Ma(i, o, l), tt = null, Bt = !1;
        var p = l.alternate;
        p !== null && (p.return = null), l.return = null;
      } catch (g) {
        Be(l, t, g);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) za(t, e), t = t.sibling;
  }
  function za(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Ht(t, e), Xt(e), r & 4) {
          try {
            cl(3, e, e.return), ai(3, e);
          } catch (H) {
            Be(e, e.return, H);
          }
          try {
            cl(5, e, e.return);
          } catch (H) {
            Be(e, e.return, H);
          }
        }
        break;
      case 1:
        Ht(t, e), Xt(e), r & 512 && n !== null && kr(n, n.return);
        break;
      case 5:
        if (Ht(t, e), Xt(e), r & 512 && n !== null && kr(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            jt(l, "");
          } catch (H) {
            Be(e, e.return, H);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, d = e.type, p = e.updateQueue;
          if (e.updateQueue = null, p !== null) try {
            d === "input" && i.type === "radio" && i.name != null && Jt(l, i), Fn(d, o);
            var g = Fn(d, i);
            for (o = 0; o < p.length; o += 2) {
              var C = p[o], N = p[o + 1];
              C === "style" ? tn(l, N) : C === "dangerouslySetInnerHTML" ? Jn(l, N) : C === "children" ? jt(l, N) : he(l, C, N, g);
            }
            switch (d) {
              case "input":
                ge(l, i);
                break;
              case "textarea":
                en(l, i);
                break;
              case "select":
                var E = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var D = i.value;
                D != null ? kt(l, !!i.multiple, D, !1) : E !== !!i.multiple && (i.defaultValue != null ? kt(
                  l,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : kt(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[br] = i;
          } catch (H) {
            Be(e, e.return, H);
          }
        }
        break;
      case 6:
        if (Ht(t, e), Xt(e), r & 4) {
          if (e.stateNode === null) throw Error(a(162));
          l = e.stateNode, i = e.memoizedProps;
          try {
            l.nodeValue = i;
          } catch (H) {
            Be(e, e.return, H);
          }
        }
        break;
      case 3:
        if (Ht(t, e), Xt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Br(t.containerInfo);
        } catch (H) {
          Be(e, e.return, H);
        }
        break;
      case 4:
        Ht(t, e), Xt(e);
        break;
      case 13:
        Ht(t, e), Xt(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (ts = He())), r & 4 && Ra(e);
        break;
      case 22:
        if (C = n !== null && n.memoizedState !== null, e.mode & 1 ? (ut = (g = ut) || C, Ht(t, e), ut = g) : Ht(t, e), Xt(e), r & 8192) {
          if (g = e.memoizedState !== null, (e.stateNode.isHidden = g) && !C && (e.mode & 1) !== 0) for (U = e, C = e.child; C !== null; ) {
            for (N = U = C; U !== null; ) {
              switch (E = U, D = E.child, E.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  cl(4, E, E.return);
                  break;
                case 1:
                  kr(E, E.return);
                  var B = E.stateNode;
                  if (typeof B.componentWillUnmount == "function") {
                    r = E, n = E.return;
                    try {
                      t = r, B.props = t.memoizedProps, B.state = t.memoizedState, B.componentWillUnmount();
                    } catch (H) {
                      Be(r, n, H);
                    }
                  }
                  break;
                case 5:
                  kr(E, E.return);
                  break;
                case 22:
                  if (E.memoizedState !== null) {
                    Aa(N);
                    continue;
                  }
              }
              D !== null ? (D.return = E, U = D) : Aa(N);
            }
            C = C.sibling;
          }
          e: for (C = null, N = e; ; ) {
            if (N.tag === 5) {
              if (C === null) {
                C = N;
                try {
                  l = N.stateNode, g ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (d = N.stateNode, p = N.memoizedProps.style, o = p != null && p.hasOwnProperty("display") ? p.display : null, d.style.display = Mr("display", o));
                } catch (H) {
                  Be(e, e.return, H);
                }
              }
            } else if (N.tag === 6) {
              if (C === null) try {
                N.stateNode.nodeValue = g ? "" : N.memoizedProps;
              } catch (H) {
                Be(e, e.return, H);
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
        Ht(t, e), Xt(e), r & 4 && Ra(e);
        break;
      case 21:
        break;
      default:
        Ht(
          t,
          e
        ), Xt(e);
    }
  }
  function Xt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Na(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(a(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (jt(l, ""), r.flags &= -33);
            var i = La(e);
            Jo(e, i, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo, d = La(e);
            Xo(e, d, o);
            break;
          default:
            throw Error(a(161));
        }
      } catch (p) {
        Be(e, e.return, p);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function ld(e, t, n) {
    U = e, Pa(e);
  }
  function Pa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; U !== null; ) {
      var l = U, i = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || ui;
        if (!o) {
          var d = l.alternate, p = d !== null && d.memoizedState !== null || ut;
          d = ui;
          var g = ut;
          if (ui = o, (ut = p) && !g) for (U = l; U !== null; ) o = U, p = o.child, o.tag === 22 && o.memoizedState !== null ? Oa(l) : p !== null ? (p.return = o, U = p) : Oa(l);
          for (; i !== null; ) U = i, Pa(i), i = i.sibling;
          U = l, ui = d, ut = g;
        }
        Ta(e);
      } else (l.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = l, U = i) : Ta(e);
    }
  }
  function Ta(e) {
    for (; U !== null; ) {
      var t = U;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ut || ai(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ut) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : Wt(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var i = t.updateQueue;
              i !== null && Au(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                Au(t, o, n);
              }
              break;
            case 5:
              var d = t.stateNode;
              if (n === null && t.flags & 4) {
                n = d;
                var p = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    p.autoFocus && n.focus();
                    break;
                  case "img":
                    p.src && (n.src = p.src);
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
                    N !== null && Br(N);
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
              throw Error(a(163));
          }
          ut || t.flags & 512 && Zo(t);
        } catch (E) {
          Be(t, t.return, E);
        }
      }
      if (t === e) {
        U = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, U = n;
        break;
      }
      U = t.return;
    }
  }
  function Aa(e) {
    for (; U !== null; ) {
      var t = U;
      if (t === e) {
        U = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, U = n;
        break;
      }
      U = t.return;
    }
  }
  function Oa(e) {
    for (; U !== null; ) {
      var t = U;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ai(4, t);
            } catch (p) {
              Be(t, n, p);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (p) {
                Be(t, l, p);
              }
            }
            var i = t.return;
            try {
              Zo(t);
            } catch (p) {
              Be(t, i, p);
            }
            break;
          case 5:
            var o = t.return;
            try {
              Zo(t);
            } catch (p) {
              Be(t, o, p);
            }
        }
      } catch (p) {
        Be(t, t.return, p);
      }
      if (t === e) {
        U = null;
        break;
      }
      var d = t.sibling;
      if (d !== null) {
        d.return = t.return, U = d;
        break;
      }
      U = t.return;
    }
  }
  var id = Math.ceil, ci = X.ReactCurrentDispatcher, bo = X.ReactCurrentOwner, Tt = X.ReactCurrentBatchConfig, ke = 0, be = null, Ye = null, nt = 0, Nt = 0, Sr = xn(0), Ze = 0, fl = null, Kn = 0, fi = 0, es = 0, dl = null, gt = null, ts = 0, jr = 1 / 0, fn = null, di = !1, ns = null, _n = null, pi = !1, Nn = null, hi = 0, pl = 0, rs = null, mi = -1, vi = 0;
  function dt() {
    return (ke & 6) !== 0 ? He() : mi !== -1 ? mi : mi = He();
  }
  function Ln(e) {
    return (e.mode & 1) === 0 ? 1 : (ke & 2) !== 0 && nt !== 0 ? nt & -nt : Bf.transition !== null ? (vi === 0 && (vi = Ls()), vi) : (e = Ne, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Fs(e.type)), e);
  }
  function Vt(e, t, n, r) {
    if (50 < pl) throw pl = 0, rs = null, Error(a(185));
    Fr(e, n, r), ((ke & 2) === 0 || e !== be) && (e === be && ((ke & 2) === 0 && (fi |= n), Ze === 4 && Mn(e, nt)), wt(e, r), n === 1 && ke === 0 && (t.mode & 1) === 0 && (jr = He() + 500, Vl && Sn()));
  }
  function wt(e, t) {
    var n = e.callbackNode;
    Wc(e, t);
    var r = Cl(e, e === be ? nt : 0);
    if (r === 0) n !== null && Fe(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Fe(n), t === 1) e.tag === 0 ? Wf(Fa.bind(null, e)) : Su(Fa.bind(null, e)), Ff(function() {
        (ke & 6) === 0 && Sn();
      }), n = null;
      else {
        switch (Ms(r)) {
          case 1:
            n = Oi;
            break;
          case 4:
            n = _s;
            break;
          case 16:
            n = kl;
            break;
          case 536870912:
            n = Ns;
            break;
          default:
            n = kl;
        }
        n = Qa(n, Ia.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Ia(e, t) {
    if (mi = -1, vi = 0, (ke & 6) !== 0) throw Error(a(327));
    var n = e.callbackNode;
    if (Er() && e.callbackNode !== n) return null;
    var r = Cl(e, e === be ? nt : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = yi(e, r);
    else {
      t = r;
      var l = ke;
      ke |= 2;
      var i = $a();
      (be !== e || nt !== t) && (fn = null, jr = He() + 500, Gn(e, t));
      do
        try {
          ud();
          break;
        } catch (d) {
          Da(e, d);
        }
      while (!0);
      ko(), ci.current = i, ke = l, Ye !== null ? t = 0 : (be = null, nt = 0, t = Ze);
    }
    if (t !== 0) {
      if (t === 2 && (l = Ii(e), l !== 0 && (r = l, t = ls(e, l))), t === 1) throw n = fl, Gn(e, 0), Mn(e, r), wt(e, He()), n;
      if (t === 6) Mn(e, r);
      else {
        if (l = e.current.alternate, (r & 30) === 0 && !od(l) && (t = yi(e, r), t === 2 && (i = Ii(e), i !== 0 && (r = i, t = ls(e, i))), t === 1)) throw n = fl, Gn(e, 0), Mn(e, r), wt(e, He()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            qn(e, gt, fn);
            break;
          case 3:
            if (Mn(e, r), (r & 130023424) === r && (t = ts + 500 - He(), 10 < t)) {
              if (Cl(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                dt(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = ao(qn.bind(null, e, gt, fn), t);
              break;
            }
            qn(e, gt, fn);
            break;
          case 4:
            if (Mn(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - Dt(r);
              i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
            }
            if (r = l, r = He() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * id(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = ao(qn.bind(null, e, gt, fn), r);
              break;
            }
            qn(e, gt, fn);
            break;
          case 5:
            qn(e, gt, fn);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return wt(e, He()), e.callbackNode === n ? Ia.bind(null, e) : null;
  }
  function ls(e, t) {
    var n = dl;
    return e.current.memoizedState.isDehydrated && (Gn(e, t).flags |= 256), e = yi(e, t), e !== 2 && (t = gt, gt = n, t !== null && is(t)), e;
  }
  function is(e) {
    gt === null ? gt = e : gt.push.apply(gt, e);
  }
  function od(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], i = l.getSnapshot;
          l = l.value;
          try {
            if (!$t(i(), l)) return !1;
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
  function Mn(e, t) {
    for (t &= ~es, t &= ~fi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Dt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Fa(e) {
    if ((ke & 6) !== 0) throw Error(a(327));
    Er();
    var t = Cl(e, 0);
    if ((t & 1) === 0) return wt(e, He()), null;
    var n = yi(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Ii(e);
      r !== 0 && (t = r, n = ls(e, r));
    }
    if (n === 1) throw n = fl, Gn(e, 0), Mn(e, t), wt(e, He()), n;
    if (n === 6) throw Error(a(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, qn(e, gt, fn), wt(e, He()), null;
  }
  function os(e, t) {
    var n = ke;
    ke |= 1;
    try {
      return e(t);
    } finally {
      ke = n, ke === 0 && (jr = He() + 500, Vl && Sn());
    }
  }
  function Yn(e) {
    Nn !== null && Nn.tag === 0 && (ke & 6) === 0 && Er();
    var t = ke;
    ke |= 1;
    var n = Tt.transition, r = Ne;
    try {
      if (Tt.transition = null, Ne = 1, e) return e();
    } finally {
      Ne = r, Tt.transition = n, ke = t, (ke & 6) === 0 && Sn();
    }
  }
  function ss() {
    Nt = Sr.current, Ie(Sr);
  }
  function Gn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, If(n)), Ye !== null) for (n = Ye.return; n !== null; ) {
      var r = n;
      switch (vo(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Bl();
          break;
        case 3:
          wr(), Ie(mt), Ie(it), Mo();
          break;
        case 5:
          No(r);
          break;
        case 4:
          wr();
          break;
        case 13:
          Ie(Ue);
          break;
        case 19:
          Ie(Ue);
          break;
        case 10:
          So(r.type._context);
          break;
        case 22:
        case 23:
          ss();
      }
      n = n.return;
    }
    if (be = e, Ye = e = Rn(e.current, null), nt = Nt = t, Ze = 0, fl = null, es = fi = Kn = 0, gt = dl = null, Hn !== null) {
      for (t = 0; t < Hn.length; t++) if (n = Hn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, i = n.pending;
        if (i !== null) {
          var o = i.next;
          i.next = l, r.next = o;
        }
        n.pending = r;
      }
      Hn = null;
    }
    return e;
  }
  function Da(e, t) {
    do {
      var n = Ye;
      try {
        if (ko(), ei.current = li, ti) {
          for (var r = We.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          ti = !1;
        }
        if (Qn = 0, Je = qe = We = null, il = !1, ol = 0, bo.current = null, n === null || n.return === null) {
          Ze = 1, fl = t, Ye = null;
          break;
        }
        e: {
          var i = e, o = n.return, d = n, p = t;
          if (t = nt, d.flags |= 32768, p !== null && typeof p == "object" && typeof p.then == "function") {
            var g = p, C = d, N = C.tag;
            if ((C.mode & 1) === 0 && (N === 0 || N === 11 || N === 15)) {
              var E = C.alternate;
              E ? (C.updateQueue = E.updateQueue, C.memoizedState = E.memoizedState, C.lanes = E.lanes) : (C.updateQueue = null, C.memoizedState = null);
            }
            var D = aa(o);
            if (D !== null) {
              D.flags &= -257, ca(D, o, d, i, t), D.mode & 1 && ua(i, g, t), t = D, p = g;
              var B = t.updateQueue;
              if (B === null) {
                var H = /* @__PURE__ */ new Set();
                H.add(p), t.updateQueue = H;
              } else B.add(p);
              break e;
            } else {
              if ((t & 1) === 0) {
                ua(i, g, t), us();
                break e;
              }
              p = Error(a(426));
            }
          } else if (De && d.mode & 1) {
            var Ve = aa(o);
            if (Ve !== null) {
              (Ve.flags & 65536) === 0 && (Ve.flags |= 256), ca(Ve, o, d, i, t), wo(xr(p, d));
              break e;
            }
          }
          i = p = xr(p, d), Ze !== 4 && (Ze = 2), dl === null ? dl = [i] : dl.push(i), i = o;
          do {
            switch (i.tag) {
              case 3:
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var v = oa(i, p, t);
                Tu(i, v);
                break e;
              case 1:
                d = p;
                var h = i.type, y = i.stateNode;
                if ((i.flags & 128) === 0 && (typeof h.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (_n === null || !_n.has(y)))) {
                  i.flags |= 65536, t &= -t, i.lanes |= t;
                  var L = sa(i, d, t);
                  Tu(i, L);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        Wa(n);
      } catch (Q) {
        t = Q, Ye === n && n !== null && (Ye = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function $a() {
    var e = ci.current;
    return ci.current = li, e === null ? li : e;
  }
  function us() {
    (Ze === 0 || Ze === 3 || Ze === 2) && (Ze = 4), be === null || (Kn & 268435455) === 0 && (fi & 268435455) === 0 || Mn(be, nt);
  }
  function yi(e, t) {
    var n = ke;
    ke |= 2;
    var r = $a();
    (be !== e || nt !== t) && (fn = null, Gn(e, t));
    do
      try {
        sd();
        break;
      } catch (l) {
        Da(e, l);
      }
    while (!0);
    if (ko(), ke = n, ci.current = r, Ye !== null) throw Error(a(261));
    return be = null, nt = 0, Ze;
  }
  function sd() {
    for (; Ye !== null; ) Ua(Ye);
  }
  function ud() {
    for (; Ye !== null && !ht(); ) Ua(Ye);
  }
  function Ua(e) {
    var t = Va(e.alternate, e, Nt);
    e.memoizedProps = e.pendingProps, t === null ? Wa(e) : Ye = t, bo.current = null;
  }
  function Wa(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = ed(n, t, Nt), n !== null) {
          Ye = n;
          return;
        }
      } else {
        if (n = td(n, t), n !== null) {
          n.flags &= 32767, Ye = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Ze = 6, Ye = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        Ye = t;
        return;
      }
      Ye = t = e;
    } while (t !== null);
    Ze === 0 && (Ze = 5);
  }
  function qn(e, t, n) {
    var r = Ne, l = Tt.transition;
    try {
      Tt.transition = null, Ne = 1, ad(e, t, n, r);
    } finally {
      Tt.transition = l, Ne = r;
    }
    return null;
  }
  function ad(e, t, n, r) {
    do
      Er();
    while (Nn !== null);
    if ((ke & 6) !== 0) throw Error(a(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(a(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (Bc(e, i), e === be && (Ye = be = null, nt = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || pi || (pi = !0, Qa(kl, function() {
      return Er(), null;
    })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
      i = Tt.transition, Tt.transition = null;
      var o = Ne;
      Ne = 1;
      var d = ke;
      ke |= 4, bo.current = null, rd(e, n), za(n, e), Mf(so), Ll = !!oo, so = oo = null, e.current = n, ld(n), nr(), ke = d, Ne = o, Tt.transition = i;
    } else e.current = n;
    if (pi && (pi = !1, Nn = e, hi = l), i = e.pendingLanes, i === 0 && (_n = null), Ic(n.stateNode), wt(e, He()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (di) throw di = !1, e = ns, ns = null, e;
    return (hi & 1) !== 0 && e.tag !== 0 && Er(), i = e.pendingLanes, (i & 1) !== 0 ? e === rs ? pl++ : (pl = 0, rs = e) : pl = 0, Sn(), null;
  }
  function Er() {
    if (Nn !== null) {
      var e = Ms(hi), t = Tt.transition, n = Ne;
      try {
        if (Tt.transition = null, Ne = 16 > e ? 16 : e, Nn === null) var r = !1;
        else {
          if (e = Nn, Nn = null, hi = 0, (ke & 6) !== 0) throw Error(a(331));
          var l = ke;
          for (ke |= 4, U = e.current; U !== null; ) {
            var i = U, o = i.child;
            if ((U.flags & 16) !== 0) {
              var d = i.deletions;
              if (d !== null) {
                for (var p = 0; p < d.length; p++) {
                  var g = d[p];
                  for (U = g; U !== null; ) {
                    var C = U;
                    switch (C.tag) {
                      case 0:
                      case 11:
                      case 15:
                        cl(8, C, i);
                    }
                    var N = C.child;
                    if (N !== null) N.return = C, U = N;
                    else for (; U !== null; ) {
                      C = U;
                      var E = C.sibling, D = C.return;
                      if (_a(C), C === g) {
                        U = null;
                        break;
                      }
                      if (E !== null) {
                        E.return = D, U = E;
                        break;
                      }
                      U = D;
                    }
                  }
                }
                var B = i.alternate;
                if (B !== null) {
                  var H = B.child;
                  if (H !== null) {
                    B.child = null;
                    do {
                      var Ve = H.sibling;
                      H.sibling = null, H = Ve;
                    } while (H !== null);
                  }
                }
                U = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && o !== null) o.return = i, U = o;
            else e: for (; U !== null; ) {
              if (i = U, (i.flags & 2048) !== 0) switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  cl(9, i, i.return);
              }
              var v = i.sibling;
              if (v !== null) {
                v.return = i.return, U = v;
                break e;
              }
              U = i.return;
            }
          }
          var h = e.current;
          for (U = h; U !== null; ) {
            o = U;
            var y = o.child;
            if ((o.subtreeFlags & 2064) !== 0 && y !== null) y.return = o, U = y;
            else e: for (o = h; U !== null; ) {
              if (d = U, (d.flags & 2048) !== 0) try {
                switch (d.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ai(9, d);
                }
              } catch (Q) {
                Be(d, d.return, Q);
              }
              if (d === o) {
                U = null;
                break e;
              }
              var L = d.sibling;
              if (L !== null) {
                L.return = d.return, U = L;
                break e;
              }
              U = d.return;
            }
          }
          if (ke = l, Sn(), Yt && typeof Yt.onPostCommitFiberRoot == "function") try {
            Yt.onPostCommitFiberRoot(Sl, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        Ne = n, Tt.transition = t;
      }
    }
    return !1;
  }
  function Ba(e, t, n) {
    t = xr(n, t), t = oa(e, t, 1), e = En(e, t, 1), t = dt(), e !== null && (Fr(e, 1, t), wt(e, t));
  }
  function Be(e, t, n) {
    if (e.tag === 3) Ba(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Ba(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (_n === null || !_n.has(r))) {
          e = xr(n, e), e = sa(t, e, 1), t = En(t, e, 1), e = dt(), t !== null && (Fr(t, 1, e), wt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function cd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = dt(), e.pingedLanes |= e.suspendedLanes & n, be === e && (nt & n) === n && (Ze === 4 || Ze === 3 && (nt & 130023424) === nt && 500 > He() - ts ? Gn(e, 0) : es |= n), wt(e, t);
  }
  function Ha(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = El, El <<= 1, (El & 130023424) === 0 && (El = 4194304)));
    var n = dt();
    e = un(e, t), e !== null && (Fr(e, t, n), wt(e, n));
  }
  function fd(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Ha(e, n);
  }
  function dd(e, t) {
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
        throw Error(a(314));
    }
    r !== null && r.delete(t), Ha(e, n);
  }
  var Va;
  Va = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || mt.current) yt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return yt = !1, bf(e, t, n);
      yt = (e.flags & 131072) !== 0;
    }
    else yt = !1, De && (t.flags & 1048576) !== 0 && ju(t, Kl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        si(e, t), e = t.pendingProps;
        var l = dr(t, it.current);
        gr(t, n), l = Po(null, t, r, e, l, n);
        var i = To();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, vt(r) ? (i = !0, Hl(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Co(t), l.updater = ii, t.stateNode = l, l._reactInternals = t, $o(t, r, e, n), t = Ho(null, t, r, !0, i, n)) : (t.tag = 0, De && i && mo(t), ft(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (si(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = hd(r), e = Wt(r, e), l) {
            case 0:
              t = Bo(null, t, r, e, n);
              break e;
            case 1:
              t = va(null, t, r, e, n);
              break e;
            case 11:
              t = fa(null, t, r, e, n);
              break e;
            case 14:
              t = da(null, t, r, Wt(r.type, e), n);
              break e;
          }
          throw Error(a(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Wt(r, l), Bo(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Wt(r, l), va(e, t, r, l, n);
      case 3:
        e: {
          if (ya(t), e === null) throw Error(a(387));
          r = t.pendingProps, i = t.memoizedState, l = i.element, Pu(e, t), Jl(t, r, null, n);
          var o = t.memoizedState;
          if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            l = xr(Error(a(423)), t), t = ga(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = xr(Error(a(424)), t), t = ga(e, t, r, n, l);
            break e;
          } else for (_t = wn(t.stateNode.containerInfo.firstChild), Ct = t, De = !0, Ut = null, n = Ru(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (mr(), r === l) {
              t = cn(e, t, n);
              break e;
            }
            ft(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Ou(t), e === null && go(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, uo(r, l) ? o = null : i !== null && uo(r, i) && (t.flags |= 32), ma(e, t), ft(e, t, o, n), t.child;
      case 6:
        return e === null && go(t), null;
      case 13:
        return wa(e, t, n);
      case 4:
        return _o(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = vr(t, null, r, n) : ft(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Wt(r, l), fa(e, t, r, l, n);
      case 7:
        return ft(e, t, t.pendingProps, n), t.child;
      case 8:
        return ft(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return ft(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, Ae(ql, r._currentValue), r._currentValue = o, i !== null) if ($t(i.value, o)) {
            if (i.children === l.children && !mt.current) {
              t = cn(e, t, n);
              break e;
            }
          } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
            var d = i.dependencies;
            if (d !== null) {
              o = i.child;
              for (var p = d.firstContext; p !== null; ) {
                if (p.context === r) {
                  if (i.tag === 1) {
                    p = an(-1, n & -n), p.tag = 2;
                    var g = i.updateQueue;
                    if (g !== null) {
                      g = g.shared;
                      var C = g.pending;
                      C === null ? p.next = p : (p.next = C.next, C.next = p), g.pending = p;
                    }
                  }
                  i.lanes |= n, p = i.alternate, p !== null && (p.lanes |= n), jo(
                    i.return,
                    n,
                    t
                  ), d.lanes |= n;
                  break;
                }
                p = p.next;
              }
            } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
            else if (i.tag === 18) {
              if (o = i.return, o === null) throw Error(a(341));
              o.lanes |= n, d = o.alternate, d !== null && (d.lanes |= n), jo(o, n, t), o = i.sibling;
            } else o = i.child;
            if (o !== null) o.return = i;
            else for (o = i; o !== null; ) {
              if (o === t) {
                o = null;
                break;
              }
              if (i = o.sibling, i !== null) {
                i.return = o.return, o = i;
                break;
              }
              o = o.return;
            }
            i = o;
          }
          ft(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, gr(t, n), l = zt(l), r = r(l), t.flags |= 1, ft(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = Wt(r, t.pendingProps), l = Wt(r.type, l), da(e, t, r, l, n);
      case 15:
        return pa(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Wt(r, l), si(e, t), t.tag = 1, vt(r) ? (e = !0, Hl(t)) : e = !1, gr(t, n), la(t, r, l), $o(t, r, l, n), Ho(null, t, r, !0, e, n);
      case 19:
        return ka(e, t, n);
      case 22:
        return ha(e, t, n);
    }
    throw Error(a(156, t.tag));
  };
  function Qa(e, t) {
    return Or(e, t);
  }
  function pd(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function At(e, t, n, r) {
    return new pd(e, t, n, r);
  }
  function as(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function hd(e) {
    if (typeof e == "function") return as(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Le) return 11;
      if (e === ze) return 14;
    }
    return 2;
  }
  function Rn(e, t) {
    var n = e.alternate;
    return n === null ? (n = At(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function gi(e, t, n, r, l, i) {
    var o = 2;
    if (r = e, typeof e == "function") as(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
      case ae:
        return Zn(n.children, l, i, t);
      case T:
        o = 8, l |= 8;
        break;
      case $e:
        return e = At(12, n, t, l | 2), e.elementType = $e, e.lanes = i, e;
      case me:
        return e = At(13, n, t, l), e.elementType = me, e.lanes = i, e;
      case xe:
        return e = At(19, n, t, l), e.elementType = xe, e.lanes = i, e;
      case se:
        return wi(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case ve:
            o = 10;
            break e;
          case ye:
            o = 9;
            break e;
          case Le:
            o = 11;
            break e;
          case ze:
            o = 14;
            break e;
          case Me:
            o = 16, r = null;
            break e;
        }
        throw Error(a(130, e == null ? e : typeof e, ""));
    }
    return t = At(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
  }
  function Zn(e, t, n, r) {
    return e = At(7, e, r, t), e.lanes = n, e;
  }
  function wi(e, t, n, r) {
    return e = At(22, e, r, t), e.elementType = se, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function cs(e, t, n) {
    return e = At(6, e, null, t), e.lanes = n, e;
  }
  function fs(e, t, n) {
    return t = At(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function md(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Fi(0), this.expirationTimes = Fi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Fi(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function ds(e, t, n, r, l, i, o, d, p) {
    return e = new md(e, t, n, d, p), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = At(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Co(i), e;
  }
  function vd(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: de, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Ka(e) {
    if (!e) return kn;
    e = e._reactInternals;
    e: {
      if (Ft(e) !== e || e.tag !== 1) throw Error(a(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (vt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(a(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (vt(n)) return xu(e, n, t);
    }
    return t;
  }
  function Ya(e, t, n, r, l, i, o, d, p) {
    return e = ds(n, r, !0, e, l, i, o, d, p), e.context = Ka(null), n = e.current, r = dt(), l = Ln(n), i = an(r, l), i.callback = t ?? null, En(n, i, l), e.current.lanes = l, Fr(e, l, r), wt(e, r), e;
  }
  function xi(e, t, n, r) {
    var l = t.current, i = dt(), o = Ln(l);
    return n = Ka(n), t.context === null ? t.context = n : t.pendingContext = n, t = an(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = En(l, t, o), e !== null && (Vt(e, l, o, i), Xl(e, l, o)), o;
  }
  function ki(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ga(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ps(e, t) {
    Ga(e, t), (e = e.alternate) && Ga(e, t);
  }
  function yd() {
    return null;
  }
  var qa = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function hs(e) {
    this._internalRoot = e;
  }
  Si.prototype.render = hs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(a(409));
    xi(e, t, null, null);
  }, Si.prototype.unmount = hs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Yn(function() {
        xi(null, e, null, null);
      }), t[rn] = null;
    }
  };
  function Si(e) {
    this._internalRoot = e;
  }
  Si.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ps();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < vn.length && t !== 0 && t < vn[n].priority; n++) ;
      vn.splice(n, 0, e), n === 0 && Os(e);
    }
  };
  function ms(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function ji(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Za() {
  }
  function gd(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function() {
          var g = ki(o);
          i.call(g);
        };
      }
      var o = Ya(t, r, e, 0, null, !1, !1, "", Za);
      return e._reactRootContainer = o, e[rn] = o.current, Xr(e.nodeType === 8 ? e.parentNode : e), Yn(), o;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var d = r;
      r = function() {
        var g = ki(p);
        d.call(g);
      };
    }
    var p = ds(e, 0, !1, null, null, !1, !1, "", Za);
    return e._reactRootContainer = p, e[rn] = p.current, Xr(e.nodeType === 8 ? e.parentNode : e), Yn(function() {
      xi(t, p, n, r);
    }), p;
  }
  function Ei(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var o = i;
      if (typeof l == "function") {
        var d = l;
        l = function() {
          var p = ki(o);
          d.call(p);
        };
      }
      xi(t, o, e, l);
    } else o = gd(n, t, e, l, r);
    return ki(o);
  }
  Rs = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Ir(t.pendingLanes);
          n !== 0 && (Di(t, n | 1), wt(t, He()), (ke & 6) === 0 && (jr = He() + 500, Sn()));
        }
        break;
      case 13:
        Yn(function() {
          var r = un(e, 1);
          if (r !== null) {
            var l = dt();
            Vt(r, e, 1, l);
          }
        }), ps(e, 1);
    }
  }, $i = function(e) {
    if (e.tag === 13) {
      var t = un(e, 134217728);
      if (t !== null) {
        var n = dt();
        Vt(t, e, 134217728, n);
      }
      ps(e, 134217728);
    }
  }, zs = function(e) {
    if (e.tag === 13) {
      var t = Ln(e), n = un(e, t);
      if (n !== null) {
        var r = dt();
        Vt(n, e, t, r);
      }
      ps(e, t);
    }
  }, Ps = function() {
    return Ne;
  }, Ts = function(e, t) {
    var n = Ne;
    try {
      return Ne = e, t();
    } finally {
      Ne = n;
    }
  }, Dn = function(e, t, n) {
    switch (t) {
      case "input":
        if (ge(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = Wl(r);
              if (!l) throw Error(a(90));
              Se(r), ge(r, l);
            }
          }
        }
        break;
      case "textarea":
        en(e, n);
        break;
      case "select":
        t = n.value, t != null && kt(e, !!n.multiple, t, !1);
    }
  }, wl = os, F = Yn;
  var wd = { usingClientEntryPoint: !1, Events: [el, cr, Wl, Rr, gl, os] }, hl = { findFiberByHostInstance: $n, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, xd = { bundleType: hl.bundleType, version: hl.version, rendererPackageName: hl.rendererPackageName, rendererConfig: hl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: X.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Tr(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: hl.findFiberByHostInstance || yd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ci = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ci.isDisabled && Ci.supportsFiber) try {
      Sl = Ci.inject(xd), Yt = Ci;
    } catch {
    }
  }
  return xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wd, xt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ms(t)) throw Error(a(200));
    return vd(e, t, null, n);
  }, xt.createRoot = function(e, t) {
    if (!ms(e)) throw Error(a(299));
    var n = !1, r = "", l = qa;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ds(e, 1, !1, null, null, n, !1, r, l), e[rn] = t.current, Xr(e.nodeType === 8 ? e.parentNode : e), new hs(t);
  }, xt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(a(188)) : (e = Object.keys(e).join(","), Error(a(268, e)));
    return e = Tr(t), e = e === null ? null : e.stateNode, e;
  }, xt.flushSync = function(e) {
    return Yn(e);
  }, xt.hydrate = function(e, t, n) {
    if (!ji(t)) throw Error(a(200));
    return Ei(null, e, t, !0, n);
  }, xt.hydrateRoot = function(e, t, n) {
    if (!ms(e)) throw Error(a(405));
    var r = n != null && n.hydratedSources || null, l = !1, i = "", o = qa;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Ya(t, null, e, 1, n ?? null, l, !1, i, o), e[rn] = t.current, Xr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new Si(t);
  }, xt.render = function(e, t, n) {
    if (!ji(t)) throw Error(a(200));
    return Ei(null, e, t, !1, n);
  }, xt.unmountComponentAtNode = function(e) {
    if (!ji(e)) throw Error(a(40));
    return e._reactRootContainer ? (Yn(function() {
      Ei(null, null, e, !1, function() {
        e._reactRootContainer = null, e[rn] = null;
      });
    }), !0) : !1;
  }, xt.unstable_batchedUpdates = os, xt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!ji(n)) throw Error(a(200));
    if (e == null || e._reactInternals === void 0) throw Error(a(38));
    return Ei(e, t, n, !1, r);
  }, xt.version = "18.3.1-next-f1338f8080-20240426", xt;
}
var lc;
function vc() {
  if (lc) return gs.exports;
  lc = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), gs.exports = Nd(), gs.exports;
}
var ic;
function Ld() {
  if (ic) return _i;
  ic = 1;
  var u = vc();
  return _i.createRoot = u.createRoot, _i.hydrateRoot = u.hydrateRoot, _i;
}
var Md = Ld(), R = Ss(), oc = vc();
const Rd = { cmd: "⌘", shift: "⇧", alt: "⌥", option: "⌥", ctrl: "⌃", enter: "↵", return: "↵", esc: "esc", tab: "⇥", up: "↑", down: "↓", left: "←", right: "→", backspace: "⌫" }, zd = (u) => u.split("+").map((c) => Rd[c.trim().toLowerCase()] ?? c.trim().toUpperCase());
function Pd({ rows: u, at: c }) {
  return /* @__PURE__ */ s.jsx(s.Fragment, { children: u.map(
    (a) => a && /* @__PURE__ */ s.jsx("div", { className: "ss-keys", "data-show": a.show, "data-at": c, "aria-hidden": !0, children: a.caps.map((j, _) => /* @__PURE__ */ s.jsx("kbd", { className: "ss-key", "data-down": a.down, children: j }, _)) }, a.id)
  ) });
}
const yc = { x: 0, y: 0, width: 0, height: 0 }, gc = (u) => typeof u == "string" ? u : "at" in u ? u.at : null, Td = (u, c) => u?.offsetWidth && u.getBoundingClientRect().width / u.offsetWidth || c || 1;
function js(u, c) {
  const a = u.getBoundingClientRect();
  return { left: a.left, top: a.top, scale: u.offsetWidth && a.width / u.offsetWidth || c || 1, borderX: u.clientLeft, borderY: u.clientTop };
}
function vl(u, c, a, j = js(u, a)) {
  const _ = c.getBoundingClientRect(), { scale: x } = j;
  return { x: (_.left - j.left) / x - j.borderX, y: (_.top - j.top) / x - j.borderY, width: _.width / x, height: _.height / x };
}
function Ad(u, c, a, j = js(u, a)) {
  const _ = vl(u, c, a, j), x = getComputedStyle(c), P = x.transform, Y = P && P !== "none" ? P.match(/^matrix\(([^)]+)\)$/) : null;
  if (!Y) return _;
  const [O, W, ne, re, ie, oe] = Y[1].split(",").map(Number);
  if (W || ne || ie || oe || !O || !re) return _;
  const A = _.width / O, J = _.height / re, [G, Ee] = x.transformOrigin.split(" ").map(parseFloat);
  return { x: _.x - G * (1 - O), y: _.y - Ee * (1 - re), width: A, height: J };
}
const Od = (u) => {
  const c = getComputedStyle(u);
  return c.transform !== "none" || c.translate && c.translate !== "none" || c.scale && c.scale !== "none" || c.rotate && c.rotate !== "none";
};
function Id(u, c) {
  let a = !0;
  for (let P = c; P && P !== u; P = P.parentElement) if (Od(P)) {
    a = !1;
    break;
  }
  if (a) return vl(u, c, 1);
  let j = 0, _ = 0, x = c;
  for (; x && x !== u; ) {
    j += x.offsetLeft, _ += x.offsetTop;
    const P = x.offsetParent;
    if (!P || !u.contains(P)) break;
    x = P, x !== u && (j += x.clientLeft - x.scrollLeft, _ += x.clientTop - x.scrollTop);
  }
  return { x: j, y: _, width: c.offsetWidth, height: c.offsetHeight };
}
function sc(u, c) {
  const a = Object.keys(u);
  return a.length !== Object.keys(c).length ? !1 : a.every((j) => {
    const _ = u[j], x = c[j];
    return x && Math.abs(_.x - x.x) < 0.5 && Math.abs(_.y - x.y) < 0.5 && Math.abs(_.width - x.width) < 0.5 && Math.abs(_.height - x.height) < 0.5;
  });
}
function wc(u) {
  const c = u.parentElement;
  if (!c?.classList.contains("ss-scroller")) return;
  const a = u.clientHeight, j = u.scrollHeight, _ = j > a ? Math.max(24, a / j * a) : 0, x = j > a ? u.scrollTop / (j - a) * (a - _) : 0;
  c.style.setProperty("--ss-thumb-h", `${_}px`), c.style.setProperty("--ss-thumb-y", `${x}px`);
}
const Fd = {
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
function Dd(u) {
  const [c, a, j, _] = Fd[u], x = 3 * c, P = 3 * (j - c) - x, Y = 1 - x - P, O = 3 * a, W = 3 * (_ - a) - O, ne = 1 - O - W, re = (oe) => ((Y * oe + P) * oe + x) * oe, ie = (oe) => (3 * Y * oe + 2 * P) * oe + x;
  return (oe) => {
    if (oe <= 0) return 0;
    if (oe >= 1) return 1;
    let A = oe;
    for (let J = 0; J < 8; J++) {
      const G = ie(A);
      if (Math.abs(G) < 1e-6) break;
      const Ee = A - (re(A) - oe) / G;
      if (Ee < 0 || Ee > 1) break;
      A = Ee;
    }
    if (Math.abs(re(A) - oe) > 1e-6) {
      let J = 0, G = 1;
      for (let Ee = 0; Ee < 40; Ee++)
        A = (J + G) / 2, re(A) < oe ? J = A : G = A;
    }
    return ((ne * A + W) * A + O) * A;
  };
}
function xc() {
  try {
    return !1;
  } catch {
    return !0;
  }
}
function Nr(u) {
  xc() && console.warn(`[stageshow] ${u}`);
}
const Cr = (u, c, a) => Math.min(a, Math.max(c, u)), Li = (u) => u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2, $d = (u) => {
  const c = Math.sin(u * 12.9898) * 43758.5453;
  return c - Math.floor(c);
}, uc = (u) => {
  u && window.setTimeout(() => u.removeAttribute("data-touching"), 240);
};
class _r extends Error {
}
function Ud(u, c) {
  const { rootRef: a, cursorRef: j, pos: _, hovered: x, kindRef: P, keysRef: Y, dragging: O, autoUsed: W, autoRef: ne, scaleRef: re, speed: ie, layout: oe, cursor: A, resolve: J, place: G, remeasure: Ee, ripple: ue, setState: he, setKind: X, setKeys: K, setLastKeys: de } = c, ae = Dd("enter"), T = () => {
    if (u.aborted) throw new _r();
  }, $e = (f, m) => new Promise((w, k) => {
    T();
    const S = () => {
      m(I), u.removeEventListener("abort", S), k(new _r());
    }, I = f(() => {
      u.removeEventListener("abort", S), u.aborted ? k(new _r()) : w();
    });
    u.addEventListener("abort", S, { once: !0 });
  }), ve = () => $e((f) => requestAnimationFrame(f), cancelAnimationFrame), ye = (f) => $e((m) => setTimeout(m, f / ie), clearTimeout), Le = (f) => {
    let m = !0;
    const w = () => {
      m && (m = !1, u.removeEventListener("abort", w), f());
    };
    return u.addEventListener("abort", w, { once: !0 }), w;
  }, me = async (f, m) => {
    const w = performance.now(), k = f / ie;
    for (; ; ) {
      T();
      const S = Math.min(1, (performance.now() - w) / k);
      if (m(S), S === 1) return;
      await ve();
    }
  }, xe = (f) => {
    const m = [];
    for (let w = f; w && w !== a.current; w = w.parentElement) w.hasAttribute("data-target") && m.push(w);
    return m;
  }, ze = (f) => {
    const m = a.current;
    if (!m) return;
    const w = m.querySelectorAll("[data-cursor]");
    if (!w.length && !W.current) return;
    w.length && (W.current = !0);
    const k = m.getBoundingClientRect(), S = k.width / m.offsetWidth || 1, I = m.dataset.cursorBase ?? "pointer";
    let q = I;
    m.setAttribute("data-hit", "");
    const b = document.elementsFromPoint(k.left + f.x * S, k.top + f.y * S);
    m.removeAttribute("data-hit");
    const $ = b.find((Z) => {
      if (!m.contains(Z) || Z.closest(".ss-cursor, .ss-keys, .ss-ripple") || getComputedStyle(Z).pointerEvents === "none" && !Z.closest('[data-cursor], [data-target], button, a[href], [role="button"], [role="menuitem"], [role="option"], [role="tab"]')) return !1;
      let Re = 1;
      for (let Se = Z; Se && Se !== m.parentElement; Se = Se.parentElement) {
        const Pe = getComputedStyle(Se);
        if (Pe.visibility === "hidden") return !1;
        Re *= Number(Pe.opacity);
      }
      return Re > 0.15;
    });
    if ($) {
      const Z = $.closest('[data-cursor], button, a[href], [role="button"], [role="menuitem"], [role="option"], [role="tab"]');
      q = Z && m.contains(Z) && Z.dataset.cursor ? Z.dataset.cursor : I, q !== P.current && X(q);
      return;
    }
    w.forEach((Z) => {
      const Re = Z.getBoundingClientRect(), Se = (Re.left - k.left) / S, Pe = (Re.top - k.top) / S;
      f.x >= Se && f.x <= Se + Re.width / S && f.y >= Pe && f.y <= Pe + Re.height / S && (q = Z.dataset.cursor);
    }), q !== P.current && X(q);
  };
  ne.current = ze, O.current || ze(_.current);
  const Me = (f) => {
    if (x.current === f) return;
    const m = xe(f);
    xe(x.current).forEach((w) => m.includes(w) || w.removeAttribute("data-hover")), m.forEach((w) => w.setAttribute("data-hover", "")), x.current = f;
  };
  let se = Y.current.id, M = 0;
  const V = (f) => {
    const m = gc(f);
    return m === null ? null : a.current?.querySelector(`[data-target="${m}"]`) ?? null;
  }, z = {
    get signal() {
      return u;
    },
    put(f) {
      u.aborted || he((m) => ({ ...m, ...typeof f == "function" ? f(m) : f }));
    },
    async set(f) {
      T(), z.put(f), await ve(), await ve(), ne.current?.(_.current), T();
    },
    wait: async (f) => {
      T(), await ye(f);
    },
    rect: (f, m) => {
      const w = a.current, k = w?.querySelector(`[data-target="${f}"]`);
      return !w || !k ? (Nr(`no element with data-target="${f}"`), yc) : m?.layout ? Id(w, k) : vl(w, k, re.current);
    },
    center: (f) => J(f),
    caret(f, m) {
      M++;
      const w = V(f), k = a.current;
      if (!w || !k) return 0;
      const S = k.getBoundingClientRect(), I = S.width / k.offsetWidth || 1, q = S.left + m.x * I, b = S.top + m.y * I, $ = [], Z = document.createTreeWalker(w, NodeFilter.SHOW_TEXT), Re = document.createRange();
      let Se = 0;
      const Pe = (ge) => {
        for (let Ke = ge.parentElement; Ke; Ke = Ke === w ? null : Ke.parentElement) {
          const Ce = getComputedStyle(Ke);
          if (Ce.opacity === "0" || Ce.visibility === "hidden" || Ce.display === "none") return !0;
        }
        return !1;
      };
      for (let ge = Z.nextNode(); ge; ge = Z.nextNode()) {
        const Ke = ge.textContent ?? "";
        if (!Pe(ge)) {
          for (let Ce = 0; Ce < Ke.length; Ce++) {
            Re.setStart(ge, Ce), Re.setEnd(ge, Ce + 1);
            const Te = Re.getBoundingClientRect();
            (Te.width || Te.height) && $.push({ left: Te.left, right: Te.right, mid: (Te.left + Te.right) / 2, top: Te.top, bottom: Te.bottom, at: Se + Ce });
          }
          Se += Ke.length;
        }
      }
      if (!$.length || b < $[0].top) return 0;
      if (b > $[$.length - 1].bottom) return Se;
      let Ge = $[0];
      for (const ge of $) Math.abs((ge.top + ge.bottom) / 2 - b) < Math.abs((Ge.top + Ge.bottom) / 2 - b) && (Ge = ge);
      const Qe = $.filter((ge) => Math.abs(ge.top - Ge.top) < (Ge.bottom - Ge.top) / 2), Jt = Qe.find((ge) => ge.mid > q);
      return Jt ? Jt.at : Qe[Qe.length - 1].at + 1;
    },
    async move(f, m) {
      T();
      const w = { ..._.current }, k = J(f), S = Math.hypot(k.x - w.x, k.y - w.y);
      if (S < 0.5) return Me(V(f));
      const I = xe(V(f));
      Me(xe(x.current).find((Se) => I.includes(Se)) ?? null);
      const q = m?.duration ?? Cr(260 + S * 0.9, 300, 650), b = Li, $ = Math.min(S * 0.08, 24), Z = -(k.y - w.y) / S, Re = (k.x - w.x) / S;
      await me(q, (Se) => {
        const Pe = b(Se), Ge = Math.sin(Math.PI * Pe) * $, Qe = m?.path ? m.path(Pe, w, k) : { x: w.x + (k.x - w.x) * Pe + Z * Ge, y: w.y + (k.y - w.y) * Pe + Re * Ge };
        G(Qe), ze(Qe), m?.onMove && oc.flushSync(() => m.onMove(Qe, w, Se));
      }), T(), Me(V(f));
    },
    async click(f, m) {
      T(), f !== void 0 && (await z.move(f), await ye(120)), T();
      const w = f !== void 0 ? V(f) : x.current, k = j.current, S = A?.style === "touch", I = Le(() => {
        k?.removeAttribute("data-pressed"), w?.removeAttribute("data-pressed"), S && uc(k);
      });
      try {
        S && (k?.setAttribute("data-touching", ""), await ye(140), T());
        for (let q = 0; q < (m?.double ? 2 : 1); q++)
          q && await ye(70), T(), k?.setAttribute("data-pressed", "true"), A?.ripple && ue(_.current), w?.setAttribute("data-pressed", m?.right ? "right" : ""), await ye(m?.double ? 80 : 100), T(), k?.removeAttribute("data-pressed"), w?.removeAttribute("data-pressed");
      } finally {
        I();
      }
    },
    async scroll(f, m, w) {
      T();
      const k = V(f);
      if (!k) return;
      const S = k.scrollTop;
      let I = typeof m == "number" ? m : S;
      if (typeof m == "string") {
        const $ = V(m);
        $ && (I = S + ($.getBoundingClientRect().top - k.getBoundingClientRect().top) / Td(a.current, re.current) - (w?.offset ?? 0));
      }
      if (I = Cr(I, 0, k.scrollHeight - k.clientHeight), A) {
        const $ = vl(a.current, k, re.current || 1), Z = _.current;
        Z.x >= $.x + 8 && Z.x <= $.x + $.width - 8 && Z.y >= $.y + 8 && Z.y <= $.y + $.height - 8 || (await this.move({ x: $.x + $.width * 0.6, y: $.y + $.height * 0.55 }), await this.wait(120));
      }
      const q = k.parentElement?.classList.contains("ss-scroller") ? k.parentElement : null;
      q?.setAttribute("data-scrolling", "");
      const b = Le(() => q?.removeAttribute("data-scrolling"));
      try {
        await me(w?.duration ?? Cr(420 + Math.abs(I - S) * 1.2, 500, 1400), ($) => {
          k.scrollTop = S + (I - S) * Li($), k.toggleAttribute("data-scrolled", k.scrollTop > 0.5), wc(k);
        }), T();
      } finally {
        b();
      }
      Ee(), ne.current?.(_.current);
    },
    async snap(f, m) {
      T();
      const w = m ? a.current?.querySelector(`[data-target="${m}"]`) : a.current;
      w?.setAttribute("data-instant", "");
      const k = Le(() => w?.removeAttribute("data-instant"));
      try {
        z.put(f), await ve(), await ve(), T();
      } finally {
        k();
      }
    },
    async key(f) {
      T();
      const m = zd(f), w = ++se, k = Y.current;
      de(k.caps.length ? { ...k, show: !1, down: !1 } : null), K({ id: w, caps: m, show: !1, down: !1 }), await ve(), await ve(), T(), K({ id: w, caps: m, show: !0, down: !1 }), await ye(180), T(), K({ id: w, caps: m, show: !0, down: !0 }), await ye(140), T(), K({ id: w, caps: m, show: !0, down: !1 }), ye(600).then(() => {
        se === w && !u.aborted && K({ id: w, caps: m, show: !1, down: !1 });
      }, (S) => {
        S instanceof _r || console.error("[stageshow] script error", S);
      });
    },
    async stagger(f, m, w = 60) {
      await Promise.all(
        f.map(async (k, S) => {
          S && await ye(w * S), T(), await m(k, S);
        })
      );
    },
    mark(f) {
      u.aborted || a.current?.setAttribute("data-mark", f);
    },
    async cursor(f) {
      T(), X(f), await ve();
    },
    async type(f, m, w) {
      const k = w?.interval ?? 35;
      for (let S = 0; S <= m.length; S++)
        T(), he((I) => ({ ...I, [f]: m.slice(0, S) })), await ye(k * (0.7 + 0.6 * $d(S)));
    },
    place(f) {
      if (u.aborted) return;
      const m = J(f);
      G(m), ne.current?.(m);
    },
    async enter(f, m) {
      T();
      const w = J(f), k = a.current, S = { x: 0, y: 0, w: k.offsetWidth, h: k.offsetHeight }, I = 40, q = [w.x - S.x, S.x + S.w - w.x, w.y - S.y, S.y + S.h - w.y], b = q.indexOf(Math.min(...q)), $ = b === 0 ? { x: S.x - I, y: w.y + S.h * 0.12 } : b === 1 ? { x: S.x + S.w + I * 0.4, y: w.y + S.h * 0.12 } : b === 2 ? { x: w.x - S.w * 0.06, y: S.y - I } : { x: w.x + S.w * 0.06, y: S.y + S.h + I * 0.4 };
      G($), Me(null), await me(m?.duration ?? 700, (Z) => {
        const Re = ae(Z), Se = { x: $.x + (w.x - $.x) * Re, y: $.y + (w.y - $.y) * Re };
        G(Se), ze(Se);
      }), T(), Me(V(f));
    },
    async drag(f, m, w) {
      T();
      const k = { ..._.current }, S = J(f), I = Math.hypot(S.x - k.x, S.y - k.y);
      Me(null);
      const q = P.current, b = q === "ibeam" || q === "crosshair", $ = !b && w?.cursor !== "preserve", Z = A?.style === "touch", Re = (ge) => {
        const Ce = 1.1428571428571428;
        return ge < 0.25 ? ge * ge / (2 * 0.25) * Ce : (ge - 0.25 / 2) * Ce;
      };
      Z && (j.current?.setAttribute("data-touching", ""), await ye(140), T());
      const Se = Z ? j.current?.querySelector(".ss-cursor__streak") ?? null : null, Pe = [], Ge = (ge) => {
        Pe.unshift({ ...ge }), Pe.length > 9 && Pe.pop();
        const Ke = Pe[Pe.length - 1], Ce = ge.x - Ke.x, Te = ge.y - Ke.y, kt = Math.min(Math.hypot(Ce, Te), 100);
        Se && (Se.style.width = `${kt}px`, Se.style.left = `${-kt}px`, Se.style.transform = `rotate(${Math.atan2(Te, Ce)}rad)`);
      };
      O.current = !0;
      const Qe = j.current, Jt = Le(() => {
        O.current = !1, Qe?.removeAttribute("data-pressed"), Qe?.removeAttribute("data-swiping"), Z && uc(Qe);
      });
      try {
        Qe?.setAttribute("data-pressed", "true"), await ye(Z ? 170 : 60), Z && (Se && (Se.style.width = "0px"), Qe?.setAttribute("data-swiping", "")), T(), $ && !Z && X("grab"), Z || await ye(70), T(), Qe?.removeAttribute("data-pressed");
        const ge = b ? 0 : Math.min(I * 0.06, 18), Ke = I ? -(S.y - k.y) / I : 0, Ce = I ? (S.x - k.x) / I : 0, Te = b && Math.abs(S.y - k.y) > 6;
        Te && S.y > k.y && S.x < k.x - 2 && Nr("a text selection that ends left of where it starts overshoots and shrinks back; select text that starts a line, or fits on one");
        const kt = M;
        await me(Z ? w?.duration ?? Cr(180 + I * 0.5, 240, 300) : w?.duration ?? Cr(360 + I * 1.1, 450, 900), (bt) => {
          const St = Z ? Re(bt) : Li(bt), en = Math.sin(Math.PI * St) * ge, Tn = Te ? 1 - (1 - St) * (1 - St) : St, An = Te ? St * St : St, Qt = w?.path?.(St, k, S) ?? { x: k.x + (S.x - k.x) * An + Ke * en, y: k.y + (S.y - k.y) * Tn + Ce * en };
          oc.flushSync(() => m?.(Qt, k, bt)), G(Qt), Z && Ge(Qt);
        }), b && m && M === kt && Nr("selection drift: a text selection drag never read a.caret(), so the highlight is not under the I-beam; set it from a.caret(name, at) in onMove"), T(), $ && !Z && X(q === "grab" ? "pointer" : q);
      } finally {
        Jt();
      }
      ne.current?.(S);
    },
    layout: oe
  };
  for (const f of Object.keys(z)) {
    const m = z[f];
    typeof m == "function" && (z[f] = (...w) => {
      const k = m.apply(z, w);
      return k instanceof Promise && k.catch((S) => {
        S instanceof _r || console.error("[stageshow] script error", S);
      }), k;
    });
  }
  return z;
}
function Wd(u, c, a, j) {
  const _ = Object.keys(c).filter(
    (x) => JSON.stringify(u[x]) !== JSON.stringify(c[x])
  );
  _.length && Nr(`loop seam: state still differs from initial at the end of the script (${_.join(", ")})`), j && Math.hypot(a.x - j.x, a.y - j.y) > 1 && Nr("loop seam: cursor does not end where it starts");
}
function Bd() {
  return /* @__PURE__ */ s.jsx("svg", { height: "24", width: "24", viewBox: "0 0 32 32", fill: "none", children: /* @__PURE__ */ s.jsxs("g", { transform: "translate(10 7)", children: [
    /* @__PURE__ */ s.jsx("path", { d: "m6.148 18.473 1.863-1.003 1.615-.839-2.568-4.816h4.332l-11.379-11.408v16.015l3.316-3.221z", fill: "#fff" }),
    /* @__PURE__ */ s.jsx("path", { d: "m6.431 17 1.765-.941-2.775-5.202h3.604l-8.025-8.043v11.188l2.53-2.442z", fill: "#000" })
  ] }) });
}
function Hd() {
  return /* @__PURE__ */ s.jsxs("svg", { width: "10", height: "16", viewBox: "0 0 10 16", fill: "none", overflow: "visible", children: [
    /* @__PURE__ */ s.jsx("path", { d: "M3 1H7M3 15H7M5 1V15", style: { stroke: "var(--ss-cursor-edge, #fff)" }, strokeWidth: "2.6", strokeLinecap: "round" }),
    /* @__PURE__ */ s.jsx("path", { d: "M3 1H7M3 15H7M5 1V15", style: { stroke: "var(--ss-cursor-line, #000)" }, strokeWidth: "1", strokeLinecap: "round" })
  ] });
}
function Vd() {
  return /* @__PURE__ */ s.jsxs("svg", { width: "17", height: "17", viewBox: "0 0 17 17", fill: "none", overflow: "visible", children: [
    /* @__PURE__ */ s.jsx("path", { d: "M8.5 0V17M0 8.5H17", style: { stroke: "var(--ss-cursor-edge, #fff)" }, strokeWidth: "2.6" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8.5 0V17M0 8.5H17", style: { stroke: "var(--ss-cursor-line, #000)" }, strokeWidth: "1" })
  ] });
}
function Qd() {
  return /* @__PURE__ */ s.jsxs("svg", { width: "26", height: "26", viewBox: "0 0 32 32", fill: "none", children: [
    /* @__PURE__ */ s.jsx(
      "path",
      {
        d: "M10.6 6a1.7 1.7 0 0 1 3.4 0v6.6a1.3 1.3 0 0 1 2.6 0v.7a1.3 1.3 0 0 1 2.6 0v.7a1.3 1.3 0 0 1 2.6 0V19c0 3.1-2 5.6-5 5.6h-2.6c-2 0-3.3-.9-4.4-2.4l-3.1-4.1c-.6-.9-.4-2 .5-2.5.8-.4 1.7-.2 2.3.5l1.1 1.4V6Z",
        fill: "#fff",
        stroke: "#000",
        strokeWidth: "1.1",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ s.jsx("path", { d: "M14 12.6v3.6M16.6 13.3v3M19.2 14v2.6", stroke: "#000", strokeWidth: "1", strokeLinecap: "round" })
  ] });
}
function Kd() {
  return /* @__PURE__ */ s.jsx("svg", { width: "26", height: "26", viewBox: "0 0 32 32", fill: "none", children: /* @__PURE__ */ s.jsxs("g", { transform: "translate(7 6)", children: [
    /* @__PURE__ */ s.jsx("path", { d: "m4.5557 8.5742c-.098-.375-.196-.847-.406-1.552-.167-.557-.342-.859-.47-1.233-.155-.455-.303-.721-.496-1.181-.139-.329-.364-1.048-.457-1.44-.119-.509.033-.924.244-1.206.253-.339.962-.49 1.357-.351.371.13.744.512.916.788.288.46.357.632.717 1.542.393.992.564 1.918.611 2.231l.085.452c-.001-.04-.043-1.122-.044-1.162-.035-1.029-.06-1.823-.038-2.939.002-.126.064-.587.084-.715.078-.5.305-.8.673-.979.412-.201.926-.215 1.401-.017.423.173.626.55.687 1.022.014.109.094.987.093 1.107-.013 1.025.006 1.641.015 2.174.004.231.003 1.625.017 1.469.061-.656.094-3.189.344-3.942.144-.433.405-.746.794-.929.431-.203 1.113-.07 1.404.243.285.305.446.692.482 1.153.032.405-.019.897-.02 1.245 0 .867-.021 1.324-.037 2.121-.001.038-.015.298.023.182.094-.28.188-.542.266-.745.049-.125.241-.614.359-.859.114-.234.211-.369.415-.688.2-.313.415-.448.668-.561.54-.235 1.109.112 1.301.591.086.215.009.713-.028 1.105-.061.647-.254 1.306-.352 1.648-.128.447-.274 1.235-.34 1.601-.072.394-.234 1.382-.359 1.82-.086.301-.371.978-.652 1.384 0 0-1.074 1.25-1.192 1.812-.117.563-.078.567-.101.965-.024.399.121.923.121.923s-.802.104-1.234.034c-.391-.062-.875-.841-1-1.078-.172-.328-.539-.265-.682-.023-.225.383-.709 1.07-1.051 1.113-.668.084-2.054.03-3.139.02 0 0 .185-1.011-.227-1.358-.305-.26-.83-.784-1.144-1.06l-.832-.921c-.284-.36-.629-1.093-1.243-1.985-.348-.504-1.027-1.085-1.284-1.579-.223-.425-.331-.954-.19-1.325.225-.594.675-.897 1.362-.832.519.05.848.206 1.238.537.225.19.573.534.75.748.163.195.203.276.377.509.23.307.302.459.214.121", fill: "#fff" }),
    /* @__PURE__ */ s.jsxs("g", { stroke: "#000", strokeLinecap: "round", strokeWidth: ".75", children: [
      /* @__PURE__ */ s.jsx("path", { d: "m4.5557 8.5742c-.098-.375-.196-.847-.406-1.552-.167-.557-.342-.859-.47-1.233-.155-.455-.303-.721-.496-1.181-.139-.329-.364-1.048-.457-1.44-.119-.509.033-.924.244-1.206.253-.339.962-.49 1.357-.351.371.13.744.512.916.788.288.46.357.632.717 1.542.393.992.564 1.918.611 2.231l.085.452c-.001-.04-.043-1.122-.044-1.162-.035-1.029-.06-1.823-.038-2.939.002-.126.064-.587.084-.715.078-.5.305-.8.673-.979.412-.201.926-.215 1.401-.017.423.173.626.55.687 1.022.014.109.094.987.093 1.107-.013 1.025.006 1.641.015 2.174.004.231.003 1.625.017 1.469.061-.656.094-3.189.344-3.942.144-.433.405-.746.794-.929.431-.203 1.113-.07 1.404.243.285.305.446.692.482 1.153.032.405-.019.897-.02 1.245 0 .867-.021 1.324-.037 2.121-.001.038-.015.298.023.182.094-.28.188-.542.266-.745.049-.125.241-.614.359-.859.114-.234.211-.369.415-.688.2-.313.415-.448.668-.561.54-.235 1.109.112 1.301.591.086.215.009.713-.028 1.105-.061.647-.254 1.306-.352 1.648-.128.447-.274 1.235-.34 1.601-.072.394-.234 1.382-.359 1.82-.086.301-.371.978-.652 1.384 0 0-1.074 1.25-1.192 1.812-.117.563-.078.567-.101.965-.024.399.121.923.121.923s-.802.104-1.234.034c-.391-.062-.875-.841-1-1.078-.172-.328-.539-.265-.682-.023-.225.383-.709 1.07-1.051 1.113-.668.084-2.054.03-3.139.02 0 0 .185-1.011-.227-1.358-.305-.26-.83-.784-1.144-1.06l-.832-.921c-.284-.36-.629-1.093-1.243-1.985-.348-.504-1.027-1.085-1.284-1.579-.223-.425-.331-.954-.19-1.325.225-.594.675-.897 1.362-.832.519.05.848.206 1.238.537.225.19.573.534.75.748.163.195.203.276.377.509.23.307.302.459.214.121", strokeLinejoin: "round" }),
      /* @__PURE__ */ s.jsx("path", { d: "m11.566 12.734v-3.459" }),
      /* @__PURE__ */ s.jsx("path", { d: "m9.551 12.746-.016-3.473" }),
      /* @__PURE__ */ s.jsx("path", { d: "m7.555 9.305.021 3.426" })
    ] })
  ] }) });
}
function Yd() {
  return /* @__PURE__ */ s.jsx("svg", { width: "30", height: "30", viewBox: "0 0 32 32", fill: "none", children: /* @__PURE__ */ s.jsxs("g", { transform: "translate(8 9)", children: [
    /* @__PURE__ */ s.jsx("path", { d: "m3.44281398 1.68449726c-.74326136.27630142-1.05584685.8131257-1.07636853 1.38003696-.01344897.37336893.06665513.72649286.23114214 1.18694303-.02596219-.07267623.09676488.29282004.12116236.37362273.05052942.16918921-.4865367-.05865774-.81377307.00741883-.36363321.07113868-.84783757.38332307-1.10006887.79754775-.29643467.48542737-.3109609 1.04368567-.08235979 2.04824266.12491868.54736183.36572145 1.00836814.71076689 1.44594879.15329951.1944118.5713628.64726015.60307236.6875974l.84854343.94062339c.15080214.1358526.25794954.2361946.57590427.5380259.3147558.2987762.4647038.4380078.60308951.555976.05846214.0492474.10784267.1797116.12740685.3736249.01609788.1595565.01049553.3375341-.0090192.5090254-.00674888.0593077-.01325791.1020883-.01698742.1224696-.04189161.228932.13269563.4403386.36541902.4424835.21585671.0019894.38528595.0046546.82216479.0123538.09483476.0016698.09483476.0016698.18993053.0033129 1.16876447.0200186 1.75308289.0147904 2.17807912-.0385723.45429894-.0572869.92650915-.6110188 1.32698393-1.2957591.34289141.6108338.81859723 1.2057867 1.2995685 1.2820532.1510118.0244148.3353555.0322555.548787.0275887.1606725-.0035131.3307029-.0140241.5021961-.0293376.1276907-.0114022.2293359-.0228648.29003-.0307451.2258836-.0293282.373669-.251611.3133108-.4712481-.0130351-.0474332-.0339838-.1345011-.0551094-.2441635-.0245945-.1276687-.0423383-.2523857-.0503381-.365988-.0050217-.0713101-.0059948-.1359317-.0027687-.1918983.0059157-.0980798.0077938-.1530073.0108033-.281125.0010795-.0448938.0010795-.0448938.0024606-.0845172.0054208-.1364475.0233824-.2649146.0815132-.544638.0250088-.1201275.1473169-.352189.3398902-.639435.0571394-.0852302.1195783-.1742239.1864664-.26609712.1272143-.17473362.2641361-.35131772.4011075-.52030772.082051-.10123129.145482-.17695689.1808122-.21807676.2967593-.42378347.612817-1.11823437.7291396-1.52536348.1117407-.39153936.202351-1.12501196.254373-1.81690429.029923-.39968605.0410555-.72381216.0410555-1.23011613.0000742-.09758414.0000742-.09758414.0002975-.17670236.0003569-.11115478.0003569-.11115478.000115-.20711835-.0008934-.15683883-.0055282-.31323355-.0207085-.69507578-.0313109-.81293139-.4771727-1.33911388-1.1344906-1.44058831-.559108-.08631314-1.0586051.08188477-1.2779293.31625977-.0755526.08073733.0036753-.2781823-.2159489-.62316278-.1644465-.25841586-.593184-.58905957-.9209287-.65355552-.335487-.06535532-.73539548-.05811715-1.1017193.00667481-.32093157.05742909-.68608434.33741751-.87176225.64688068-.12411885.20686477.03884667-.00592296-.09368743-.23401341-.18231052-.31422641-.60754287-.59486422-1.01411454-.67799709-.34643562-.07139428-.74182572-.04452925-1.09945614.0633873-.43336319.1291117-1.01795827.61460976-.94899189 1.15552627-.34375-.54091651-1.25026717-.691379-1.97906097-.42111797z", fill: "#000" }),
    /* @__PURE__ */ s.jsx("path", { d: "m7.31951013 1.62138197c.20710357.04234751.44724204.20083012.51632974.31990811.08404358.1446387.15562749.36413806.21048667.6366124.02933373.14569467.12179446 1.2125285.29383112 1.32370243.41279229.04533731.41279229.04533731.52658055-.12364345.03545705-.07383858.03545705-.07383858.04226523-.1029106.01416796-.06009544.02463332-.12677987.0351322-.21754028l.00854738-.07915386.00047673-.00942804.00327525-.03167185c.01085148-.11424313.04184125-.4312127.05388392-.53034902.03788792-.31189663.08766449-.52757784.13944093-.6138719.0713024-.11883734.31942298-.28274442.43149612-.30279961.2804398-.04960082.58940103-.05519288.82623993-.00905543.1084394.02134018.3709471.22378689.432331.32024744.1291079.20279957.2524316.84889766.3225486 1.4970065-.0102194.04624251-.0102194.04624251.1640069.28984194.5843296-.06677889.5843296-.06677889.5703629-.17490247.0159511-.03856429.0284824-.08294031.045969-.15118961.0423876-.16089067.0697594-.25204451.111066-.35549917.0288558-.07227096.0592914-.13391873.0904889-.18278042.1209187-.19031132.4335712-.319392.7077174-.27707028.2943447.04543991.4816904.26653537.4994912.72869815.0148821.37434892.0193146.5239164.0201469.6700184l-.0004247.37954865c0 .48831141-.0104951.79388164-.0389535 1.17400348-.0480918.63962116-.1348512 1.34192123-.227649 1.66708484-.0946325.33121345-.3766371.95084197-.6003915 1.27298482-.0161892.01580846-.0841508.09694273-.1710333.20413492-.1445842.17838247-.2892181.36491271-.4247891.5511244-.0723398.09936149-.1402862.19620479-.2030964.2898938-.2440054.36396314-.400553.66098894-.4512157.90434304-.0659304.3172546-.0893838.4850003-.0966379.6675968-.0017072.0490782-.0017072.0490782-.002845.096677-.0028064.119476-.004437.1671639-.0097087.2545848-.0052654.091322-.0038193.187354.00332.2887353.0103318.1467182.1058713.3478531.1058713.3478531s-.2321503-.0119819-.3742084-.0088758c-.1718098.0037567-.3147843-.0023244-.4138162-.0183342-.1440353-.0228411-.53014068-.5057331-.7278511-.8821737-.30227042-.5764228-1.03604858-.5484427-1.33684295-.0394061-.26854779.4591613-.65918083.9172326-.7740684.9317199-.37404082.0469647-.94643778.0520862-2.07160079.0328144-.09480875-.0016381-.46003446-.0128683-.64600494-.0157445-.18597048-.0028763.05008807-.1790283.02786486-.399297-.03726222-.36933-.15125405-.6704984-.38877094-.8705429-.12241569-.1043631-.26774964-.2393104-.56509654-.5215613-.33323493-.3163366-.44236499-.4185353-.57290215-.533275l-.80130455-.89071892c-.03955779-.05174211-.45812831-.5051399-.5872217-.6688539-.28069963-.35597842-.47062947-.71959073-.56844755-1.14820437-.18921973-.83150113-.1793328-1.21146622-.00855589-1.49112273.13743587-.2257023.43815377-.4195862.60596039-.45241793.17165981-.03465512.55153059-.01648617.62179422.02229321.09902279.05401056.13357243.07300285.16379074.09097645.03572494.02124891.05965747.03799198.08182912.05708809.03426437.02951139.07235014.07170412.12420211.14044502.03611591.04821025.07806642.1053997.1423779.19304882.06054643.0816627.09183576.12069421.13369221.1590035.28038907.25662728.68391532.03238058.65052057-.32606956-.00567036-.06086415-.02203766-.12694598-.05458621-.23708502-.04356824-.15021272.00433013-.05284275-.26002629-.56642281-.08720664-.16942124-.13955864-.28835362-.17428227-.4046158l-.03412852-.10219113c-.03838756-.11059767-.09558223-.26854489-.12612861-.35199347l-.02009957-.05467087.002.008-.05974804-.17751191c-.09232236-.28807194-.13413567-.51358087-.12645475-.72681781.01040781-.28751553.16037753-.54506871.58790983-.70400047.40142488-.1488616 1.07786076.00117106 1.20581167.27856864.04319814.09369738.08927466.21199471.13900415.35457792l.03930997.11680217c.05539717.16759437.13470873.41493582.13860471.42816881.02724222.08344874.0471839.13860719.06943813.18441246.00217869.06301886.00217869.06301886.35429398.23177937.41699479-.29154152.41699479-.29154152.38019201-.37525838.00571063-.08773482.00758408-.17356287.00965287-.37317647.00242546-.23402898.00423842-.33154773.00994479-.45966208.01316411-.29554918.0437926-.51142116.09291227-.63864415.09160418-.23801371.25279279-.40993649.4432431-.46667832.24458613-.07380253.51465245-.09215236.73323569-.04710649zm1.21356228 4.27672201c-.20710459.00095412-.37422255.16961903-.37326843.37672361l.016 3.473c.00095412.20710459.16961903.37422251.37672361.37326841.20710459-.0009541.37422255-.16961901.37326843-.37672359l-.016-3.473c-.00095412-.20710459-.16961903-.37422255-.37672361-.37326843zm2.03332759.00229602c-.2071068 0-.375.16789322-.375.375v3.459c0 .20710678.1678932.375.375.375s.375-.16789322.375-.375v-3.459c0-.20710678-.1678932-.375-.375-.375zm-4.01399856.02930704c-.20710289.00126946-.37396385.17018863-.3726944.37729152l.021 3.426c.00126946.20710289.17018863.37396384.37729152.37269444.20710289-.0012695.37396385-.17018867.3726944-.37729156l-.021-3.426c-.00126946-.20710289-.17018863-.37396385-.37729152-.3726944z", fill: "#fff" })
  ] }) });
}
function Gd() {
  return /* @__PURE__ */ s.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ s.jsx("circle", { cx: "10", cy: "10", r: "8", stroke: "rgba(0,0,0,0.15)", strokeWidth: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M10 2A8 8 0 0 1 18 10", stroke: "black", strokeWidth: "2", strokeLinecap: "round" })
  ] });
}
const ac = "M0-8.4 2.55-3.65H-2.55ZM0 8.4 2.55 3.65H-2.55Z";
function Mi({ turn: u }) {
  return /* @__PURE__ */ s.jsx("svg", { width: "21", height: "21", viewBox: "-14 -14 28 28", overflow: "visible", children: /* @__PURE__ */ s.jsxs("g", { transform: `rotate(${u})`, strokeLinejoin: "round", children: [
    /* @__PURE__ */ s.jsx("path", { d: ac, style: { fill: "var(--ss-cursor-edge, #fff)", stroke: "var(--ss-cursor-edge, #fff)" }, strokeWidth: "3.2" }),
    /* @__PURE__ */ s.jsx("path", { d: ac, style: { fill: "var(--ss-cursor-line, #000)", stroke: "var(--ss-cursor-line, #000)" }, strokeWidth: "1.2" })
  ] }) });
}
const qd = () => /* @__PURE__ */ s.jsx(Mi, { turn: 0 }), Zd = () => /* @__PURE__ */ s.jsx(Mi, { turn: 90 }), Xd = () => /* @__PURE__ */ s.jsx(Mi, { turn: -45 }), Jd = () => /* @__PURE__ */ s.jsx(Mi, { turn: 45 }), cc = {
  pointer: Bd,
  ibeam: Hd,
  crosshair: Vd,
  hand: Qd,
  open: Kd,
  grab: Yd,
  wait: Gd,
  "resize-ns": qd,
  "resize-ew": Zd,
  "resize-nwse": Xd,
  "resize-nesw": Jd
}, bd = {
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
}, e1 = { x: 4, y: 3 };
function t1() {
  return /* @__PURE__ */ s.jsx("svg", { width: "22", height: "22", viewBox: "0 0 22 22", className: "ss-cursor__arrow", "aria-hidden": !0, children: /* @__PURE__ */ s.jsx("path", { d: "M4 3 18.5 9.6 11.8 11.8 9.6 18.5Z" }) });
}
function n1({ cursorRef: u, style: c = "real", kind: a }) {
  return /* @__PURE__ */ s.jsxs("div", { ref: u, className: "ss-cursor", "data-style": c, "data-kind": a, "aria-hidden": !0, children: [
    c === "touch" && /* @__PURE__ */ s.jsx("span", { className: "ss-cursor__streak" }),
    /* @__PURE__ */ s.jsxs("div", { className: "ss-cursor__press", children: [
      (c === "circle" || c === "touch") && /* @__PURE__ */ s.jsx("span", { className: "ss-cursor__dot" }),
      c !== "circle" && c !== "touch" && Object.keys(cc).map((j) => {
        const _ = c === "arrow";
        if (_ && j !== "pointer" && j !== "ibeam") return null;
        const x = _ && j === "pointer" ? t1 : cc[j], P = _ && j === "pointer" ? e1 : bd[j], Y = _ && a !== "ibeam" ? "pointer" : a;
        return /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "ss-cursor__glyph",
            "data-glyph": j,
            "data-active": j === Y,
            style: { marginLeft: -P.x, marginTop: -P.y, transformOrigin: `${P.x}px ${P.y}px` },
            children: /* @__PURE__ */ s.jsx(x, {})
          },
          j
        );
      })
    ] })
  ] });
}
function r1(u, c) {
  const a = document.createElement("span");
  a.className = "ss-ripple", a.style.left = `${c.x}px`, a.style.top = `${c.y}px`, u.appendChild(a), a.addEventListener("animationend", () => a.remove());
}
const kc = R.createContext({
  theme: "light",
  palette: "accent",
  fidelity: "standard",
  layout: "wide"
}), l1 = () => R.useContext(kc), Sc = R.createContext(!1);
function Es() {
  const u = R.useContext(Sc), [c, a] = R.useState(!1);
  return R.useEffect(() => {
    const j = window.matchMedia("(prefers-reduced-motion: reduce)"), _ = () => a(j.matches);
    return _(), j.addEventListener("change", _), () => j.removeEventListener("change", _);
  }, []), u || c;
}
const Xn = {
  now: () => performance.now(),
  raf: (u) => requestAnimationFrame(u),
  cancelRaf: (u) => cancelAnimationFrame(u),
  // Layout must finish even when a preview is paused. Keep these callbacks
  // separate: running arbitrary motion RAFs at a frozen timestamp can still
  // advance a spring that integrates once per callback.
  layoutRaf: (u) => Xn.recording?.requestLayoutFrame(u) ?? requestAnimationFrame(u),
  cancelLayoutRaf: (u) => {
    const c = Xn.recording;
    c ? c.cancelLayoutFrame(u) : cancelAnimationFrame(u);
  },
  timeout: (u, c) => window.setTimeout(u, c),
  clearTimeout: (u) => window.clearTimeout(u),
  /** The recorder's control while one drives the page, else null. */
  get recording() {
    return typeof window > "u" ? null : window.__stageshow?.clock ?? null;
  }
}, i1 = {};
function Ri({
  width: u,
  height: c,
  initial: a = i1,
  script: j,
  poster: _,
  cursor: x,
  hover: P,
  play: Y = "loop",
  compact: O,
  keys: W = "bottom",
  palette: ne = "accent",
  greys: re,
  fidelity: ie = "standard",
  specimen: oe,
  unframed: A,
  speed: J = 1,
  accent: G,
  tokens: Ee,
  ground: ue,
  fill: he = !1,
  theme: X = "light",
  className: K,
  children: de
}) {
  const ae = Y === "hover" && typeof window < "u" && window.matchMedia("(hover: none)").matches ? "once" : Y, [T, $e] = R.useState("wide"), ve = R.useRef(T);
  ve.current = T;
  const ye = () => {
    const F = x.at;
    return typeof F == "object" && "wide" in F ? F[ve.current] : F;
  }, [Le, me] = R.useState(!1), xe = T === "compact" && O ? O.width : u, ze = T === "compact" && O ? O.height : c, Me = R.useRef(null), se = R.useRef(null), M = R.useRef(null), V = Es(), z = !j || V, [f, m] = R.useState(() => z && _ ? _ : a), w = R.useRef(f);
  w.current = f;
  const [k, S] = R.useState(1), I = R.useRef(1);
  I.current = k;
  const q = typeof window > "u" ? {} : window.__stageshow ?? {}, b = J / (q.slow ?? 1), $ = q.theme ?? X, [Z, Re] = R.useState(x?.kind ?? "pointer"), Se = (F) => {
    const ce = se.current;
    !ce || V || r1(ce, F);
  }, Pe = R.useRef(Z);
  Pe.current = Z;
  const [Ge, Qe] = R.useState({ id: 0, caps: [], show: !1, down: !1 }), [Jt, ge] = R.useState(null), Ke = R.useRef(Ge);
  Ke.current = Ge;
  const Ce = R.useRef({ x: 0, y: 0 }), Te = R.useRef(null), [kt, bt] = R.useState(0), St = R.useRef(!1), en = R.useRef(!1), Tn = R.useRef(null);
  R.useLayoutEffect(() => {
    const F = Me.current;
    if (!F) return;
    const ce = () => {
      const _e = F.clientWidth, rt = !!F.parentElement?.closest("[data-ss-wide]"), Lt = O && !rt && _e < O.below ? "compact" : "wide";
      $e(Lt);
      const at = he || !!F.parentElement?.closest("[data-ss-fill]");
      me(at);
      const ct = Lt === "compact" ? O.width : u, lt = Math.min(at ? 2 : 1, _e / ct);
      S(lt), bt(Math.max(0, (_e - ct * lt) / 2));
    };
    ce();
    const we = new ResizeObserver(ce);
    we.observe(F);
    const fe = new MutationObserver(ce);
    for (let _e = F.parentElement; _e; _e = _e.parentElement)
      fe.observe(_e, { attributes: !0, attributeFilter: ["data-ss-wide", "data-ss-fill"] });
    return () => {
      we.disconnect(), fe.disconnect();
    };
  }, [u, O?.below, O?.width, he]);
  const [An, Qt] = R.useState({}), dn = R.useCallback(() => {
    const F = se.current;
    if (!F) return {};
    const ce = {}, we = F.querySelectorAll("[data-target]");
    if (!we.length) return ce;
    const fe = js(F, I.current);
    return we.forEach((_e) => {
      ce[_e.dataset.target] = Ad(F, _e, I.current, fe);
    }), ce;
  }, []), Jn = R.useRef({ n: 0, frame: 0, owed: !1 }), jt = R.useCallback(() => {
    const F = Jn.current;
    if (F.frame || (F.frame = Xn.layoutRaf(() => {
      if (F.n = 0, F.frame = 0, !F.owed) return;
      F.owed = !1;
      const we = dn();
      Qt((fe) => sc(fe, we) ? fe : we);
    })), F.n >= 4) {
      F.owed = !0;
      return;
    }
    F.n++;
    const ce = dn();
    Qt((we) => sc(we, ce) ? we : ce);
  }, [dn]);
  R.useLayoutEffect(jt), R.useLayoutEffect(() => () => {
    Xn.cancelLayoutRaf(Jn.current.frame), Jn.current = { n: 0, frame: 0, owed: !1 };
  }, []), R.useEffect(() => {
    const F = se.current;
    if (F)
      return F.addEventListener("transitionend", jt), F.addEventListener("animationend", jt), () => {
        F.removeEventListener("transitionend", jt), F.removeEventListener("animationend", jt);
      };
  }, [jt]);
  const On = R.useCallback((F) => An[F] ?? yc, [An]), [Pi, Mr] = R.useState(!0);
  R.useLayoutEffect(() => {
    Mr(!0);
    let F = !0, ce = 0;
    const we = () => {
      ce = Xn.layoutRaf(() => {
        ce = Xn.layoutRaf(() => F && Mr(!1));
      });
    };
    return !document.fonts || document.fonts.status === "loaded" ? we() : document.fonts.ready.then(() => F && we()), () => {
      F = !1, Xn.cancelLayoutRaf(ce);
    };
  }, [T]);
  const tn = R.useRef(0), In = R.useRef(0), nn = R.useRef(!1), Fn = R.useRef(null), Kt = R.useCallback((F) => {
    In.current && !nn.current && Math.hypot(F.x - Ce.current.x, F.y - Ce.current.y) > 0.5 && (nn.current = !0, Fn.current ??= performance.now() - In.current), Ce.current = F, tn.current = performance.now();
    const ce = M.current;
    ce && (ce.style.transform = `translate(${F.x}px, ${F.y}px)`, ce.removeAttribute("data-idle"));
  }, []), Ot = R.useCallback((F) => {
    typeof F == "object" && F !== null && "wide" in F && (F = ve.current === "compact" ? F.compact : F.wide);
    const ce = gc(F);
    if (ce === null) return F;
    const we = se.current, fe = we?.querySelector(`[data-target="${ce}"]`);
    if (!we || !fe)
      return Nr(`no element with data-target="${ce}"`), Ce.current;
    const _e = vl(we, fe, I.current), rt = typeof F == "string" ? { x: 0.5, y: 0.5 } : F;
    return { x: _e.x + _e.width * rt.x, y: _e.y + _e.height * rt.y };
  }, []);
  R.useLayoutEffect(() => {
    if (!z || !P) return;
    const F = se.current;
    P.forEach((ce) => F?.querySelector(`[data-target="${ce}"]`)?.setAttribute("data-hover", ""));
  }), R.useLayoutEffect(() => {
    x && !In.current && Kt(Ot(ye()));
  }, [k, T]);
  const Dn = R.useRef(0), pt = R.useRef(0), It = R.useCallback(() => {
    ++Dn.current, cancelAnimationFrame(pt.current), pt.current = 0, se.current?.removeAttribute("data-settling");
  }, []), bn = R.useCallback((F = !1) => {
    It();
    const ce = Dn.current;
    if (en.current = !1, m(a), Re(x?.kind ?? "pointer"), Qe((fe) => ({ ...fe, show: !1, down: !1 })), ge(null), se.current?.querySelectorAll("[data-hover],[data-pressed]").forEach((fe) => {
      fe.removeAttribute("data-hover"), fe.removeAttribute("data-pressed");
    }), se.current?.removeAttribute("data-mark"), se.current?.querySelectorAll("[data-scrolled]").forEach((fe) => {
      fe.scrollTop = 0, fe.removeAttribute("data-scrolled"), wc(fe);
    }), se.current?.querySelectorAll("[data-scrolling]").forEach((fe) => fe.removeAttribute("data-scrolling")), M.current?.removeAttribute("data-pressed"), Tn.current = null, !x) return;
    if (!F) {
      pt.current = requestAnimationFrame(() => {
        pt.current = 0, Kt(Ot(ye())), Te.current?.(Ce.current);
      });
      return;
    }
    const we = se.current;
    we?.setAttribute("data-settling", ""), pt.current = requestAnimationFrame(() => {
      const fe = { ...Ce.current }, _e = Ot(ye()), rt = Cr(320 + Math.hypot(_e.x - fe.x, _e.y - fe.y) * 0.7, 380, 700), Lt = performance.now(), at = () => {
        if (Dn.current !== ce) return;
        const ct = Math.min(1, (performance.now() - Lt) / rt), lt = Li(ct);
        Kt({ x: fe.x + (_e.x - fe.x) * lt, y: fe.y + (_e.y - fe.y) * lt }), ct < 1 ? pt.current = requestAnimationFrame(at) : (pt.current = 0, we?.removeAttribute("data-settling"));
      };
      at();
    });
  }, [T]), Rr = R.useMemo(
    () => (F) => Ud(F, {
      rootRef: se,
      cursorRef: M,
      pos: Ce,
      hovered: Tn,
      kindRef: Pe,
      keysRef: Ke,
      dragging: en,
      autoUsed: St,
      autoRef: Te,
      scaleRef: I,
      speed: b,
      layout: T,
      cursor: x,
      resolve: Ot,
      place: Kt,
      remeasure: jt,
      ripple: Se,
      setState: m,
      setKind: Re,
      setKeys: Qe,
      setLastKeys: ge
    }),
    [Ot, Kt, b, T]
    // eslint-disable-line react-hooks/exhaustive-deps
  );
  R.useEffect(() => {
    const F = se.current;
    if (z || !j)
      return bn(), F.removeAttribute("data-offscreen"), m(_ ?? a), It;
    bn();
    const ce = Me.current;
    let we = null, fe = !1, _e = !1, rt = !1;
    const Lt = x?.idle ?? 4e3, at = 1200;
    let ct = 0, lt = 0;
    const zr = () => {
      window.clearInterval(ct), !(!x || Lt === !1) && (tn.current = performance.now(), ct = window.setInterval(() => {
        const Fe = M.current;
        if (!Fe) return;
        const ht = performance.now();
        if (!nn.current) {
          Fn.current === null && ht - tn.current > at && Fe.setAttribute("data-idle", "");
          return;
        }
        Fe.hasAttribute("data-pressed") || se.current?.querySelector("[data-hover]") ? tn.current = ht : ht - tn.current > Lt && Fe.setAttribute("data-idle", "");
      }, 150));
    }, Ti = () => {
      In.current = performance.now(), nn.current = !1, window.clearTimeout(lt);
      const Fe = M.current, ht = Fn.current;
      Lt === !1 || !Fe || ht === null || ht <= at || (Fe.setAttribute("data-idle", ""), lt = window.setTimeout(() => Fe.removeAttribute("data-idle"), ht - 400));
    }, Pr = () => {
      window.clearInterval(ct), window.clearTimeout(lt), In.current = 0, M.current?.removeAttribute("data-idle");
    }, Ai = () => {
      window.clearInterval(ct), window.clearTimeout(lt);
      const Fe = M.current, ht = () => Fe?.hasAttribute("data-pressed") || F.querySelector("[data-hover]");
      if (!x || Lt === !1 || !Fe || Fe.hasAttribute("data-idle") || ht()) return;
      const nr = (nn.current ? Lt : at) - (performance.now() - tn.current);
      lt = window.setTimeout(() => {
        ht() || Fe.setAttribute("data-idle", "");
      }, Math.max(0, nr));
    }, Ft = () => {
      if (we || rt || !fe || document.hidden || ae === "hover" && !_e) return;
      It(), x && Kt(Ot(ye())), we = new AbortController();
      const Fe = we.signal;
      zr();
      const ht = Rr(Fe);
      (async () => {
        do {
          Ti();
          try {
            await j(ht);
          } catch (nr) {
            if (nr instanceof _r) return;
            console.error("[stageshow] script error", nr), we = null, Pr();
            return;
          }
          ae === "loop" && xc() && Wd(w.current, a, Ce.current, x ? Ot(ye()) : null);
        } while (ae === "loop" && !Fe.aborted);
        ae === "once" && !Fe.aborted && (rt = !0, Ai());
      })();
    }, er = (Fe = !1) => {
      Pr(), we && (we.abort(), we = null, rt || bn(Fe));
    }, tr = () => F.toggleAttribute("data-offscreen", !fe || document.hidden);
    tr();
    const xl = new IntersectionObserver(([Fe]) => {
      fe = Fe.isIntersecting, tr(), fe ? Ft() : er();
    });
    xl.observe(ce);
    const Tr = () => {
      tr(), document.hidden ? er() : Ft();
    };
    document.addEventListener("visibilitychange", Tr);
    const Ar = () => {
      _e = !0, Ft();
    }, Or = () => {
      _e = !1, er(!0);
    };
    return ae === "hover" && (ce.addEventListener("pointerenter", Ar), ce.addEventListener("pointerleave", Or)), () => {
      xl.disconnect(), document.removeEventListener("visibilitychange", Tr), ce.removeEventListener("pointerenter", Ar), ce.removeEventListener("pointerleave", Or), Pr(), we?.abort(), we = null, Te.current = null, It();
    };
  }, [z, j, Rr, ae, T]), R.useLayoutEffect(() => {
    x && !z && !en.current && Te.current?.(Ce.current);
  }, [f]);
  const gl = R.useMemo(() => ({ theme: $, palette: ne, fidelity: ie, layout: T }), [$, ne, ie, T]), wl = x && (!j || !z || x.still);
  return /* @__PURE__ */ s.jsx("div", { ref: Me, className: `ss-fit${K ? ` ${K}` : ""}`, style: { maxWidth: Le ? void 0 : u, height: ze * k }, children: /* @__PURE__ */ s.jsxs(
    "div",
    {
      ref: se,
      className: "ss-stage",
      "data-specimen": oe || void 0,
      "data-unframed": A || void 0,
      "data-still": z || void 0,
      "data-placing": Pi || void 0,
      "data-theme": $,
      "data-palette": ne,
      "data-greys": re === "cool" ? "cool" : void 0,
      "data-fidelity": ie,
      "data-layout": T,
      style: {
        width: xe,
        height: ze,
        marginLeft: kt || void 0,
        transform: `scale(${k})`,
        ...Ee,
        ...G ? { "--ss-accent": G, "--ss-accent-2": G, "--ss-accent-soft": `color-mix(in srgb, ${G} 14%, transparent)` } : null
      },
      children: [
        ue && /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "ss-ground",
            "aria-hidden": !0,
            style: Array.isArray(ue) ? { "--ss-orb-1": ue[0], "--ss-orb-2": ue[1], ...ue[2] ? { "--ss-orb-3": ue[2] } : null } : void 0
          }
        ),
        /* @__PURE__ */ s.jsx(Sc.Provider, { value: z, children: /* @__PURE__ */ s.jsx(kc.Provider, { value: gl, children: de(f, On, T) }) }),
        j && /* @__PURE__ */ s.jsx(Pd, { rows: [Jt, Ge], at: typeof W == "string" ? W : W[T] }),
        wl && /* @__PURE__ */ s.jsx(n1, { cursorRef: M, style: x.style, kind: Z })
      ]
    }
  ) });
}
const o1 = { w: 402, h: 874, r: 64 }, fc = { a: 71, n: 2.31 }, s1 = { w: 393, h: 829, r: 42 }, u1 = { w: 412, h: 915, r: 38 }, a1 = {
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
}, c1 = {
  pro: [[13, "band"], [10, "var(--ss-phone-rim)"], [9.25, "var(--ss-phone-glass)"]],
  silver: [[13, "band"], [9, "var(--ss-phone-glass)"]],
  bezel: [[12, "var(--ss-phone-glass)"]],
  clay: [[16, "clay"], [1, "var(--ss-phone-seam)"]]
};
function f1(u, c, a, j) {
  const x = 2 / j, P = [];
  return [
    [u - a, a, 1, -1],
    [u - a, c - a, 1, 1],
    [a, c - a, -1, 1],
    [a, a, -1, -1]
  ].forEach(([O, W, ne, re], ie) => {
    for (let oe = 0; oe <= 32; oe++) {
      const A = oe / 32 * (Math.PI / 2), J = ie % 2 === 0 ? Math.sin(A) : Math.cos(A), G = ie % 2 === 0 ? Math.cos(A) : Math.sin(A);
      P.push(`${(O + ne * a * Math.pow(J, x)).toFixed(2)} ${(W + re * a * Math.pow(G, x)).toFixed(2)}`);
    }
  }), `M${P.join("L")}Z`;
}
function zi({ width: u, frame: c = "pro", time: a = "9:41", island: j, status: _, dark: x, wallpaper: P, className: Y, style: O, children: W, ...ne }) {
  const re = R.useRef(null), [ie, oe] = R.useState(!0);
  R.useEffect(() => {
    if (c !== "photo" || !re.current) return;
    const xe = getComputedStyle(re.current).backgroundImage.match(/url\(["']?([^"')]+)["']?\)/)?.[1];
    if (!xe) return void oe(!1);
    let ze = !0;
    const Me = new Image();
    return Me.onerror = () => ze && oe(!1), Me.src = xe, () => {
      ze = !1;
    };
  }, [c, x]);
  const A = c === "photo" && !ie ? "pro" : c, { band: J, glass: G } = a1[A], { fidelity: Ee } = l1(), ue = A === "android" ? u1 : A === "soft" ? s1 : o1, he = J + G, X = u / (ue.w + he * 2), K = (me) => me * X, de = R.useId().replace(/:/g, ""), T = A !== "android" && A !== "soft" ? f1(K(ue.w), K(ue.h), K(fc.a), fc.n) : null, $e = c1[A], ve = A === "pro" || A === "photo" || A === "bezel" || A === "silver" || A === "android", ye = j ?? (ve && A !== "photo"), Le = _ ?? ve;
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      ...ne,
      className: `ss-phone${Y ? ` ${Y}` : ""}`,
      "data-frame": A,
      "data-dark": x || void 0,
      style: {
        width: u,
        height: K(ue.h + he * 2),
        padding: K(J),
        borderRadius: K(ue.r + he),
        "--ps": `${X}px`,
        ...O
      },
      children: [
        ($e || A === "outline") && T && /* @__PURE__ */ s.jsxs("svg", { className: "ss-phone__bands", width: "100%", height: "100%", "aria-hidden": !0, children: [
          /* @__PURE__ */ s.jsxs("defs", { children: [
            /* @__PURE__ */ s.jsx("linearGradient", { id: `${de}-band`, x1: "0.2", y1: "0", x2: "0.8", y2: "1", children: [0, 0.22, 0.48, 0.74, 1].map((me, xe) => /* @__PURE__ */ s.jsx("stop", { offset: me, style: { stopColor: `var(--ss-phone-band-${xe + 1})` } }, me)) }),
            /* @__PURE__ */ s.jsxs("linearGradient", { id: `${de}-clay`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
              /* @__PURE__ */ s.jsx("stop", { offset: "0", style: { stopColor: "var(--ss-phone-clay-top)" } }),
              /* @__PURE__ */ s.jsx("stop", { offset: "1", style: { stopColor: "var(--ss-phone-clay-bottom)" } })
            ] }),
            A === "outline" && // Line art: a ring between 7 and 8pt out, cut from a mask so it is one hairline
            /* @__PURE__ */ s.jsxs("mask", { id: `${de}-ring`, maskUnits: "userSpaceOnUse", x: "-50%", y: "-50%", width: "200%", height: "200%", children: [
              /* @__PURE__ */ s.jsx("path", { d: T, fill: "none", stroke: "#fff", strokeWidth: K(16) }),
              /* @__PURE__ */ s.jsx("path", { d: T, fill: "none", stroke: "#000", strokeWidth: K(16) - 2 })
            ] })
          ] }),
          /* @__PURE__ */ s.jsx("g", { transform: `translate(${K(he)} ${K(he)})`, strokeLinejoin: "round", children: A === "outline" ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            /* @__PURE__ */ s.jsx("rect", { x: -K(9), y: -K(9), width: K(ue.w + 18), height: K(ue.h + 18), mask: `url(#${de}-ring)`, style: { fill: "var(--ss-phone-line)" } }),
            /* @__PURE__ */ s.jsx("path", { d: T, fill: "none", strokeWidth: "2", style: { stroke: "var(--ss-line, rgba(0, 0, 0, 0.06))" } })
          ] }) : $e.map(([me, xe]) => /* @__PURE__ */ s.jsx(
            "path",
            {
              d: T,
              fill: "none",
              strokeWidth: K(me * 2),
              stroke: xe === "band" || xe === "clay" ? `url(#${de}-${xe})` : void 0,
              style: xe === "band" || xe === "clay" ? void 0 : { stroke: xe }
            },
            me
          )) })
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "ss-phone__glass", style: { padding: K(G), borderRadius: K(ue.r + G) }, children: /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "ss-phone__window",
            style: {
              width: K(ue.w),
              height: K(ue.h),
              borderRadius: T ? void 0 : K(ue.r),
              clipPath: T ? `path('${T}')` : void 0
            },
            children: /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "ss-phone__screen",
                style: { width: ue.w, height: ue.h, transform: `scale(${X})`, "--ss-screen-r": `${ue.r}px`, ...P ? { background: P } : null },
                children: [
                  Le && /* @__PURE__ */ s.jsxs("div", { className: "ss-phone__status", children: [
                    /* @__PURE__ */ s.jsx("span", { className: "ss-phone__time", children: Ee === "minimal" ? /* @__PURE__ */ s.jsx("span", { className: "ss-phone__time-bar" }) : a }),
                    /* @__PURE__ */ s.jsxs("span", { className: "ss-phone__glyphs", children: [
                      /* @__PURE__ */ s.jsx(p1, {}),
                      /* @__PURE__ */ s.jsx(h1, {}),
                      /* @__PURE__ */ s.jsx(m1, {})
                    ] })
                  ] }),
                  ye && /* @__PURE__ */ s.jsx("span", { className: "ss-phone__island" }),
                  /* @__PURE__ */ s.jsx("div", { className: "ss-phone__content", "data-status": Le || void 0, children: W }),
                  ve && /* @__PURE__ */ s.jsx("span", { className: "ss-phone__home" })
                ]
              }
            )
          }
        ) }),
        A === "photo" && // The bezel image is 450 × 920pt with the screen at (24, 23): laid over
        // the body so its cut-out frames the screen exactly
        /* @__PURE__ */ s.jsx("span", { ref: re, className: "ss-phone__photo", style: { left: K(-8), top: K(-7), width: K(450), height: K(920) } })
      ]
    }
  );
}
function d1({ date: u = "Tuesday, October 21", time: c = "9:41", controls: a = !0, stack: j = "bottom", size: _ = "full", clock: x = !0, className: P, children: Y, ...O }) {
  return /* @__PURE__ */ s.jsxs("div", { ...O, className: `ss-lock${P ? ` ${P}` : ""}`, "data-size": _, "data-clock": x ? void 0 : "off", children: [
    x && /* @__PURE__ */ s.jsx("div", { className: "ss-lock__date", children: u }),
    x && /* @__PURE__ */ s.jsx("div", { className: "ss-lock__clock", children: c }),
    /* @__PURE__ */ s.jsx("div", { className: "ss-lock__stack", "data-at": j, children: Y }),
    a && _ === "full" && /* @__PURE__ */ s.jsxs("div", { className: "ss-lock__controls", children: [
      /* @__PURE__ */ s.jsx("span", { className: "ss-lock__control", children: /* @__PURE__ */ s.jsx("svg", { viewBox: "0 0 24 24", width: "22", height: "22", "aria-hidden": !0, children: /* @__PURE__ */ s.jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M7.6 1.6h8.8a1.6 1.6 0 0 1 1.6 1.6v1.9H6V3.2a1.6 1.6 0 0 1 1.6-1.6ZM6 6h12l-2.6 4v10.4a2 2 0 0 1-2 2h-2.8a2 2 0 0 1-2-2V10ZM10.6 14a1.4 1.4 0 1 0 2.8 0 1.4 1.4 0 1 0-2.8 0Z"
        }
      ) }) }),
      /* @__PURE__ */ s.jsx("span", { className: "ss-lock__control", children: /* @__PURE__ */ s.jsx("svg", { viewBox: "0 0 24 24", width: "24", height: "24", "aria-hidden": !0, children: /* @__PURE__ */ s.jsx(
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
function p1() {
  return /* @__PURE__ */ s.jsx("svg", { viewBox: "0 0 20.33 13.67", width: "20.33", height: "13.67", className: "ss-phone__glyph ss-phone__signal", children: [6.33, 8.67, 11, 13.67].map((u, c) => /* @__PURE__ */ s.jsx("rect", { x: c * 5.667, y: 13.67 - u, width: 3.333, height: u, rx: 1.667, fill: "currentColor" }, c)) });
}
function h1() {
  return /* @__PURE__ */ s.jsx("svg", { viewBox: "0 0 19.33 14.33", width: "19.33", height: "14.33", className: "ss-phone__glyph ss-phone__wifi", children: /* @__PURE__ */ s.jsx("path", { fillRule: "evenodd", fill: "currentColor", d: "M0.415933 5.54283C0.902185 6.04412 1.66017 5.95818 2.27513 5.41393C4.30595 3.58064 6.83731 2.63535 9.66901 2.63535C12.5007 2.63535 15.0464 3.60928 17.0629 5.41393C17.6636 5.97251 18.4215 6.0298 18.9221 5.54283C19.4226 5.02722 19.4942 4.2538 18.9793 3.70954C16.8341 1.51819 13.3302 0 9.66901 0C6.00783 0 2.48965 1.53251 0.358727 3.72387C-0.156127 4.2538 -0.0989213 5.02722 0.415933 5.55715L0.415933 5.54283ZM3.94841 9.13779C4.50617 9.68205 5.22124 9.62476 5.85051 9.10915C6.88022 8.29276 8.25316 7.73418 9.66901 7.7485C11.0706 7.7485 12.4435 8.29276 13.4875 9.12347C14.1168 9.63908 14.8605 9.66773 15.4039 9.12347C15.9331 8.57921 16.0189 7.7485 15.4611 7.23289C14.0739 5.98683 11.9859 5.11315 9.68332 5.11315C7.38077 5.11315 5.27845 5.98683 3.9055 7.23289C3.41925 7.69121 3.31914 8.47896 3.96271 9.13779L3.94841 9.13779ZM8.72511 13.8929C9.34008 14.4801 9.98365 14.4801 10.5986 13.8929L11.757 12.7757C12.372 12.1742 12.5007 11.4151 11.7999 10.8995C11.2136 10.4841 10.4699 10.212 9.66901 10.212C8.86813 10.212 8.11015 10.4841 7.53809 10.9138C6.83731 11.4151 6.98033 12.1885 7.59529 12.7757L8.73942 13.8929L8.72511 13.8929Z" }) });
}
function m1() {
  return /* @__PURE__ */ s.jsxs("svg", { viewBox: "0 0 29.33 13.67", width: "29.33", height: "13.67", className: "ss-phone__glyph ss-phone__battery", children: [
    /* @__PURE__ */ s.jsx("path", { fill: "currentColor", d: "M0 6.4C0 4.15979 0 3.03969 0.435974 2.18404C0.819467 1.43139 1.43139 0.819467 2.18404 0.435974C3.03969 0 4.15979 0 6.4 0L19.933 0C22.1732 0 23.2933 0 24.149 0.435974C24.9016 0.819467 25.5135 1.43139 25.897 2.18404C26.333 3.03969 26.333 4.15979 26.333 6.4L26.333 7.26666C26.333 9.50687 26.333 10.627 25.897 11.4826C25.5135 12.2353 24.9016 12.8472 24.149 13.2307C23.2933 13.6667 22.1732 13.6667 19.933 13.6667L6.4 13.6667C4.15979 13.6667 3.03969 13.6667 2.18404 13.2307C1.43139 12.8472 0.819467 12.2353 0.435974 11.4826C0 10.627 0 9.50687 0 7.26666L0 6.4Z" }),
    /* @__PURE__ */ s.jsx("path", { fillRule: "evenodd", fill: "currentColor", transform: "translate(27.33 4.33)", d: "M0 0L0 5C0.601505 4.8625 2 3.75 2 2.5C2 1.25 0.601505 0.1375 0 0Z" })
  ] });
}
const v1 = "012345678901234567890123456789".split(""), Ni = 10, y1 = (u) => {
  const c = /^(.*\d)(\s*)([^\d\s.,]+)$/.exec(u);
  return c ? { head: c[1], space: c[2].length > 0, unit: c[3] } : { head: u, space: !1, unit: "" };
}, dc = (u) => {
  const c = [];
  for (let a = u.length - 1; a >= 0; a--) {
    const j = u[a];
    j >= "0" && j <= "9" && c.push(Number(j));
  }
  return c;
};
function Lr({ value: u, format: c = (Y) => Math.round(Y).toLocaleString("en-US"), duration: a = 700, stagger: j = 45, className: _, style: x, ...P }) {
  const Y = Es(), O = R.useRef(null), W = c(u), { head: ne, space: re, unit: ie } = y1(W), oe = ne.split(""), A = dc(W), [J, G] = R.useState(() => A.map((X) => Ni + X)), Ee = R.useRef({ text: W, value: u, idx: J });
  Ee.current.idx = J;
  const ue = R.useRef(!1);
  R.useLayoutEffect(() => {
    const X = O.current;
    if (!X) return;
    const K = Ee.current;
    if (K.text === W) return;
    const de = Y || a <= 0 || !!X.closest("[data-instant], [data-offscreen]"), ae = dc(K.text), T = u >= K.value, $e = A.map((ve, ye) => {
      const Le = ae[ye], me = K.idx[ye];
      return Le === void 0 || me === void 0 || de ? Ni + ve : Le === ve ? me : T ? me + (ve - Le + 10) % 10 : me - (Le - ve + 10) % 10;
    });
    if (X.toggleAttribute("data-snap", de), !de) {
      for (const ve of Array.from(X.querySelectorAll(".ss-count__strip"))) getComputedStyle(ve).transform;
      X.setAttribute("data-rolling", "");
    }
    Ee.current = { text: W, value: u, idx: $e }, G($e);
  }, [W, u, Y, a]), R.useEffect(() => {
    const X = O.current;
    if (!X || !X.hasAttribute("data-rolling")) return;
    const K = window.setTimeout(() => {
      X.setAttribute("data-snap", ""), ue.current = !0;
      const de = A.map((ae) => Ni + ae);
      Ee.current.idx = de, G(de), X.removeAttribute("data-rolling");
    }, a + j * A.length + 60);
    return () => window.clearTimeout(K);
  }, [J]), R.useLayoutEffect(() => {
    const X = O.current;
    if (!(!X || !ue.current)) {
      ue.current = !1;
      for (const K of Array.from(X.querySelectorAll(".ss-count__strip"))) getComputedStyle(K).transform;
      X.removeAttribute("data-snap");
    }
  }, [J]);
  let he = A.length;
  return /* @__PURE__ */ s.jsxs("span", { ...P, ref: O, className: `ss-count${_ ? ` ${_}` : ""}`, style: x, "aria-label": W, children: [
    oe.map((X, K) => {
      if (X < "0" || X > "9") return /* @__PURE__ */ s.jsx("span", { className: "ss-count__char", "aria-hidden": !0, children: X }, `s${K}-${X}`);
      const de = --he, ae = J[de] ?? Ni + Number(X);
      return /* @__PURE__ */ s.jsx("span", { className: "ss-count__digit", "data-crop": !0, "aria-hidden": !0, children: /* @__PURE__ */ s.jsx(
        "span",
        {
          className: "ss-count__strip",
          style: { transform: `translateY(${-ae}em)`, transitionDuration: `${a}ms`, transitionDelay: `${de * j}ms` },
          children: v1.map((T, $e) => /* @__PURE__ */ s.jsx("span", { children: T }, $e))
        }
      ) }, `d${de}`);
    }),
    ie && /* @__PURE__ */ s.jsx("span", { className: "ss-count__unit", "data-space": re || void 0, "aria-hidden": !0, children: ie })
  ] });
}
function pc({ id: u, children: c, duration: a = 450, className: j, style: _, ...x }) {
  const P = Es(), Y = R.useRef(null), O = R.useRef(null), [W, ne] = R.useState(null), [re, ie] = R.useState(u), oe = R.useRef(c), [A, J] = R.useState(null), G = R.useRef(!1);
  G.current = !P && W !== null, re !== u && (ne(P ? null : { id: re, node: oe.current, w: A?.w }), ie(u)), R.useLayoutEffect(() => {
    oe.current = c;
  }), R.useLayoutEffect(() => {
    const he = O.current;
    if (!he) return;
    const X = (de) => {
      const ae = Y.current;
      if (!ae || de && G.current) return;
      const { width: T, height: $e, transition: ve } = ae.style, ye = { width: he.style.width, maxWidth: he.style.maxWidth };
      ae.style.transition = "none", ae.style.width = "", ae.style.height = "", he.style.width = "", he.style.maxWidth = "";
      const Le = getComputedStyle(he), me = parseFloat(Le.width) || 0, xe = parseFloat(Le.height) || 0;
      he.style.width = ye.width, he.style.maxWidth = ye.maxWidth, ae.style.width = T, ae.style.height = $e, ae.offsetWidth, ae.style.transition = ve, J((ze) => ze && ze.w === me && ze.h === xe ? ze : { w: me, h: xe });
    };
    X();
    const K = new ResizeObserver(() => X(!0));
    return K.observe(he), () => K.disconnect();
  }, [u, P]), R.useEffect(() => {
    if (!W) return;
    if (P) {
      ne(null);
      return;
    }
    const he = setTimeout(() => ne(null), a);
    return () => clearTimeout(he);
  }, [W, a, P]);
  const Ee = !!(W && A && W.w !== void 0 && A.w < W.w), ue = !!(W && A && W.w !== void 0 && A.w !== W.w);
  return /* @__PURE__ */ s.jsxs("span", { ...x, ref: Y, className: `ss-swap${j ? ` ${j}` : ""}`, "data-swapping": !P && ue || void 0, style: { width: A?.w, height: A?.h, transition: !P && W ? `width ${a}ms cubic-bezier(0.25, 0.8, 0.25, 1) ${Ee ? Math.round(a * 0.5) : 0}ms, height ${a}ms cubic-bezier(0.25, 0.8, 0.25, 1)` : "none", ..._ }, children: [
    !P && W && /* @__PURE__ */ s.jsx("span", { className: "ss-swap__out", style: { animationDuration: `${a * 0.5}ms`, width: W.w, maxWidth: W.w === void 0 ? void 0 : "none" }, children: W.node }, `p${W.id}`),
    /* @__PURE__ */ s.jsx("span", { ref: O, className: "ss-swap__in", style: { animationName: P ? "none" : void 0, animationDuration: `${a}ms`, ...!P && W && A ? { width: A.w, maxWidth: "none" } : null }, children: c }, `c${u}`)
  ] });
}
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g1 = (u) => u.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), jc = (...u) => u.filter((c, a, j) => !!c && c.trim() !== "" && j.indexOf(c) === a).join(" ").trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var w1 = {
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
const x1 = R.forwardRef(
  ({
    color: u = "currentColor",
    size: c = 24,
    strokeWidth: a = 2,
    absoluteStrokeWidth: j,
    className: _ = "",
    children: x,
    iconNode: P,
    ...Y
  }, O) => R.createElement(
    "svg",
    {
      ref: O,
      ...w1,
      width: c,
      height: c,
      stroke: u,
      strokeWidth: j ? Number(a) * 24 / Number(c) : a,
      className: jc("lucide", _),
      ...Y
    },
    [
      ...P.map(([W, ne]) => R.createElement(W, ne)),
      ...Array.isArray(x) ? x : [x]
    ]
  )
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xe = (u, c) => {
  const a = R.forwardRef(
    ({ className: j, ..._ }, x) => R.createElement(x1, {
      ref: x,
      iconNode: c,
      className: jc(`lucide-${g1(u)}`, j),
      ..._
    })
  );
  return a.displayName = `${u}`, a;
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k1 = Xe("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S1 = Xe("Bell", [
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
const hc = Xe("BusFront", [
  ["path", { d: "M4 6 2 7", key: "1mqr15" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "m22 7-2-1", key: "1umjhc" }],
  ["rect", { width: "16", height: "16", x: "4", y: "3", rx: "2", key: "1wxw4b" }],
  ["path", { d: "M4 11h16", key: "mpoxn0" }],
  ["path", { d: "M8 15h.01", key: "a7atzg" }],
  ["path", { d: "M16 15h.01", key: "rnfrdf" }],
  ["path", { d: "M6 19v2", key: "1loha6" }],
  ["path", { d: "M18 21v-2", key: "sqyl04" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j1 = Xe("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = Xe("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E1 = Xe("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C1 = Xe("Footprints", [
  [
    "path",
    {
      d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",
      key: "1dudjm"
    }
  ],
  [
    "path",
    {
      d: "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",
      key: "l2t8xc"
    }
  ],
  ["path", { d: "M16 17h4", key: "1dejxt" }],
  ["path", { d: "M4 13h4", key: "1bwh8b" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _1 = Xe("Heart", [
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
const N1 = Xe("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L1 = Xe("LocateFixed", [
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
const M1 = Xe("MapPin", [
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
const R1 = Xe("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z1 = Xe("QrCode", [
  ["rect", { width: "5", height: "5", x: "3", y: "3", rx: "1", key: "1tu5fj" }],
  ["rect", { width: "5", height: "5", x: "16", y: "3", rx: "1", key: "1v8r4q" }],
  ["rect", { width: "5", height: "5", x: "3", y: "16", rx: "1", key: "1x03jg" }],
  ["path", { d: "M21 16h-3a2 2 0 0 0-2 2v3", key: "177gqh" }],
  ["path", { d: "M21 21v.01", key: "ents32" }],
  ["path", { d: "M12 7v3a2 2 0 0 1-2 2H7", key: "8crl2c" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M12 3h.01", key: "n36tog" }],
  ["path", { d: "M12 16v.01", key: "133mhm" }],
  ["path", { d: "M16 12h1", key: "1slzba" }],
  ["path", { d: "M21 12v.01", key: "1lwtk9" }],
  ["path", { d: "M12 21v-1", key: "1880an" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P1 = Xe("Radio", [
  ["path", { d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9", key: "1vaf9d" }],
  ["path", { d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5", key: "u1ii0m" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5", key: "1j5fej" }],
  ["path", { d: "M19.1 4.9C23 8.8 23 15.1 19.1 19", key: "10b0cb" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T1 = Xe("RefreshCw", [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ec = Xe("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A1 = Xe("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O1 = Xe("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I1 = Xe("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
]);
function yl() {
  const [u, c] = R.useState(document.documentElement.lang === "en");
  return R.useEffect(() => {
    const a = new MutationObserver(() => c(document.documentElement.lang === "en"));
    return a.observe(document.documentElement, { attributes: !0, attributeFilter: ["lang"] }), () => a.disconnect();
  }, []), (a, j) => u ? j : a;
}
function Pn(u) {
  return (document.querySelector("[data-parkgo-assets]")?.getAttribute("data-parkgo-assets") || "/native/") + u;
}
function Cc({ value: u, dark: c = !1 }) {
  return /* @__PURE__ */ s.jsxs("div", { className: "pg-progress pg-cycle-data", "data-dark": c || void 0, children: [
    /* @__PURE__ */ s.jsxs("div", { className: "pg-progress__line", children: [
      /* @__PURE__ */ s.jsx("span", { style: { width: `calc(${c ? 26 : 31}px + ${u} * (100% - ${c ? 52 : 62}px))` } }),
      /* @__PURE__ */ s.jsx("img", { src: Pn("bus-tcm.png"), alt: "", style: { left: `calc(${u} * (100% - ${c ? 52 : 62}px))` } })
    ] }),
    /* @__PURE__ */ s.jsxs("span", { className: "pg-progress__value", children: [
      Math.round(u * 100),
      "%"
    ] })
  ] });
}
function _c({ title: u, children: c }) {
  return /* @__PURE__ */ s.jsxs("div", { className: "pg-appnav", children: [
    /* @__PURE__ */ s.jsx(ks, { size: 23 }),
    /* @__PURE__ */ s.jsx("strong", { children: u }),
    c || /* @__PURE__ */ s.jsx("span", { style: { width: 23 } })
  ] });
}
function Cs({ active: u, t: c }) {
  return /* @__PURE__ */ s.jsxs("span", { className: "pg-cycle-refresh", "data-active": u || void 0, "aria-hidden": !0, children: [
    /* @__PURE__ */ s.jsx(T1, { size: 13 }),
    c("更新到站資訊", "Updating arrivals")
  ] });
}
const Nc = [
  { eta: 5, stops: 3, from: ["南灣大馬路／時代", "Av. P. Grande / Si Toi"], next: ["水坑尾／天神巷", "R. Campo / Trav. Anjos"], x: 211, y: 19 },
  { eta: 4, stops: 3, from: ["南灣大馬路／時代", "Av. P. Grande / Si Toi"], next: ["水坑尾／天神巷", "R. Campo / Trav. Anjos"], x: 234, y: 43 },
  { eta: 3, stops: 2, from: ["水坑尾／天神巷", "R. Campo / Trav. Anjos"], next: ["盧廉若公園", "Lou Lim Ieoc Garden"], x: 263, y: 73 },
  { eta: 2, stops: 2, from: ["水坑尾／天神巷", "R. Campo / Trav. Anjos"], next: ["盧廉若公園", "Lou Lim Ieoc Garden"], x: 293, y: 104 },
  { eta: 1, stops: 1, from: ["盧廉若公園", "Lou Lim Ieoc Garden"], next: ["高士德／培正", "H. Costa / Pui Ching"], x: 322, y: 134 }
], Lc = { beat: 0, reset: !1 };
async function F1(u) {
  u.mark("bus-start");
  for (let c = 1; c < Nc.length; c++)
    await u.wait(1900), u.put({ beat: c }), u.mark(`bus-step-${c}`);
  await u.wait(2300), u.mark("bus-refresh"), u.put({ reset: !0 }), await u.wait(500), await u.snap({ ...Lc, reset: !0 }), await u.wait(180), u.put({ reset: !1 }), await u.wait(500);
}
function D1({ paused: u = !1 }) {
  const c = yl();
  return /* @__PURE__ */ s.jsx(Ri, { width: 560, height: 780, compact: { below: 500, width: 358, height: 650 }, initial: Lc, poster: { beat: 2, reset: !1 }, script: u ? void 0 : F1, play: "loop", className: "pg-native pg-bus-v3", children: (a, j, _) => {
    const x = Nc[a.beat];
    return /* @__PURE__ */ s.jsx(zi, { width: _ === "compact" ? 326 : 400, frame: "pro", className: "pg-app-phone pg-loop-scene", "data-reset": a.reset || void 0, children: /* @__PURE__ */ s.jsxs("div", { className: "pg-app-screen", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "pg-v3-nav", children: [
        /* @__PURE__ */ s.jsx("span", { className: "pg-glass-circle", children: /* @__PURE__ */ s.jsx(ks, { size: 22 }) }),
        /* @__PURE__ */ s.jsx("span", { className: "pg-route-five", children: "5" }),
        /* @__PURE__ */ s.jsxs("div", { className: "pg-glass-tools", children: [
          /* @__PURE__ */ s.jsx(A1, { size: 22 }),
          /* @__PURE__ */ s.jsx(z1, { size: 19 }),
          /* @__PURE__ */ s.jsx(N1, { size: 20 })
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "pg-v3-map", children: [
        /* @__PURE__ */ s.jsx("div", { className: "pg-v3-map-image", style: { backgroundImage: `url(${Pn("bus-map-v3.png")})` } }),
        /* @__PURE__ */ s.jsxs("svg", { className: "pg-v3-polyline", viewBox: "0 0 402 155", "aria-hidden": !0, children: [
          /* @__PURE__ */ s.jsx("path", { d: "M191 -2 L345 158", fill: "none", stroke: "#fff", strokeWidth: "11" }),
          /* @__PURE__ */ s.jsx("path", { d: "M191 -2 L345 158", fill: "none", stroke: "#2962ad", strokeWidth: "6" }),
          [[211, 19], [263, 73], [322, 134]].map(([P, Y]) => /* @__PURE__ */ s.jsx("circle", { cx: P, cy: Y, r: "8", fill: "#f3f7f5", stroke: "#2962ad", strokeWidth: "2" }, P))
        ] }),
        /* @__PURE__ */ s.jsx("img", { className: "pg-moving-bus pg-cycle-data", src: Pn("bus-transmac.png"), alt: c("巴士沿路線前進", "Bus moving along the route"), style: { left: x.x, top: x.y } }),
        /* @__PURE__ */ s.jsxs("span", { className: "pg-v3-map-tools", children: [
          /* @__PURE__ */ s.jsx(L1, { size: 17 }),
          /* @__PURE__ */ s.jsx(S1, { size: 17 })
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "pg-v3-body", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "pg-v3-identity", children: [
          /* @__PURE__ */ s.jsx("img", { src: Pn("transmac.png"), alt: c("新福利", "Transmac") }),
          /* @__PURE__ */ s.jsx("strong", { children: "5" }),
          /* @__PURE__ */ s.jsxs("div", { children: [
            /* @__PURE__ */ s.jsx("span", { className: "pg-v3-operator", children: c("新福利", "Transmac") }),
            /* @__PURE__ */ s.jsxs("p", { children: [
              c("往", "To"),
              " ",
              /* @__PURE__ */ s.jsx("b", { children: c("華大新村", "Wah Tai San Chun") })
            ] }),
            /* @__PURE__ */ s.jsxs("small", { children: [
              c("首班", "First"),
              " 05:40　",
              c("尾班", "Last"),
              " 01:00"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "pg-v3-departure", children: [
          /* @__PURE__ */ s.jsx(hc, { size: 13 }),
          /* @__PURE__ */ s.jsxs("span", { children: [
            c("下一班預計發車", "Next departure"),
            "　",
            /* @__PURE__ */ s.jsx("b", { children: c("下午 8:58", "8:58 PM") })
          ] }),
          /* @__PURE__ */ s.jsxs("span", { className: "pg-v3-extend", children: [
            c("延長行程", "Extend"),
            " ",
            /* @__PURE__ */ s.jsx(k1, { size: 12 })
          ] })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "pg-v3-detour", children: [
          /* @__PURE__ */ s.jsx(O1, { size: 20, fill: "#ff8b27", color: "#fff" }),
          /* @__PURE__ */ s.jsxs("div", { children: [
            /* @__PURE__ */ s.jsx("b", { children: c("臨時改道", "Temporary diversion") }),
            /* @__PURE__ */ s.jsx("span", { children: c("1 個站暫不停靠", "1 stop temporarily skipped") })
          ] }),
          /* @__PURE__ */ s.jsx(ks, { size: 16 })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "pg-v3-target", children: [
          /* @__PURE__ */ s.jsx("i", {}),
          /* @__PURE__ */ s.jsx("b", { children: c("高士德／培正", "H. Costa / Pui Ching") }),
          /* @__PURE__ */ s.jsx("span", { children: c("最近", "Nearest") }),
          /* @__PURE__ */ s.jsxs("small", { children: [
            c("修改", "Change"),
            " ›"
          ] })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "pg-v3-eta", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "pg-v3-eta-left", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "pg-v3-eta-top", children: [
              /* @__PURE__ */ s.jsx("b", { children: c("第二班", "Second bus") }),
              /* @__PURE__ */ s.jsxs("span", { children: [
                /* @__PURE__ */ s.jsx(I1, { size: 14 }),
                c("未知", "Unknown")
              ] })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "pg-v3-plate", children: [
              /* @__PURE__ */ s.jsx(hc, { size: 19 }),
              " AA7574"
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "pg-v3-checkpoint pg-cycle-data", children: [
              /* @__PURE__ */ s.jsxs(pc, { id: `from-${a.beat}`, children: [
                c("已離開", "Departed "),
                c(x.from[0], x.from[1]),
                c("，前往", "; to ")
              ] }),
              /* @__PURE__ */ s.jsx(pc, { id: `next-${a.beat}`, children: c(x.next[0], x.next[1]) })
            ] })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "pg-v3-eta-right pg-cycle-data", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "pg-v3-minutes", children: [
              /* @__PURE__ */ s.jsx(Lr, { value: x.eta }),
              /* @__PURE__ */ s.jsxs("span", { children: [
                /* @__PURE__ */ s.jsx(P1, { size: 17 }),
                /* @__PURE__ */ s.jsx("small", { children: c("分鐘", "min") })
              ] })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "pg-v3-stops", children: [
              /* @__PURE__ */ s.jsx("i", {}),
              /* @__PURE__ */ s.jsx("span", {}),
              /* @__PURE__ */ s.jsx("i", {})
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "pg-v3-stops-label", children: [
              /* @__PURE__ */ s.jsx(Lr, { value: x.stops }),
              c("站後到達", " stops away")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "pg-v3-pager", children: [
          /* @__PURE__ */ s.jsx("span", { children: "2 / 3" }),
          /* @__PURE__ */ s.jsx("i", {}),
          /* @__PURE__ */ s.jsx("i", { "data-selected": !0 }),
          /* @__PURE__ */ s.jsx("i", {}),
          /* @__PURE__ */ s.jsx(R1, { size: 14 })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "pg-v3-advice", children: [
          /* @__PURE__ */ s.jsx(C1, { size: 16 }),
          c("出發建議", "Departure advice"),
          /* @__PURE__ */ s.jsx("span", { children: "→" })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "pg-v3-next-stations", children: [
          /* @__PURE__ */ s.jsxs("span", { children: [
            c("前面 8 站", "Next 8 stops"),
            " ",
            /* @__PURE__ */ s.jsx(j1, { size: 13 })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { children: [
            /* @__PURE__ */ s.jsx("i", {}),
            /* @__PURE__ */ s.jsx("b", { children: c("盧廉若公園", "Lou Lim Ieoc Garden") }),
            /* @__PURE__ */ s.jsx("small", { children: "20:46" })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "pg-v3-timeline-filler", children: [
            /* @__PURE__ */ s.jsx("i", {}),
            /* @__PURE__ */ s.jsx("span", {})
          ] })
        ] })
      ] }),
      /* @__PURE__ */ s.jsx(Cs, { active: a.reset, t: c })
    ] }) });
  } });
}
function $1({ rect: u, mode: c }) {
  return /* @__PURE__ */ s.jsxs("div", { className: "pg-tap-guide", "data-mode": c, style: { left: u.x + u.width / 2 - 15, top: u.y + u.height / 2 - 7 }, "aria-hidden": !0, children: [
    /* @__PURE__ */ s.jsx("i", {}),
    /* @__PURE__ */ s.jsxs("svg", { width: "48", height: "64", viewBox: "0 0 48 64", children: [
      /* @__PURE__ */ s.jsx("path", { d: "M15 32V8a4 4 0 0 1 8 0v18c0-6 8-6 8-1 0-5 8-4 8 1 0-4 7-3 7 2v15c0 9-4 12-7 16H21c-1-6-5-9-8-13L5 35c-3-5 3-9 6-5l4 5", fill: "white", stroke: "#142d32", strokeWidth: "2", strokeLinejoin: "round" }),
      /* @__PURE__ */ s.jsx("path", { d: "M25 37v8m8-8v8m7-6v5", fill: "none", stroke: "#b5c6c0", strokeWidth: "2", strokeLinecap: "round" })
    ] })
  ] });
}
async function U1(u) {
  await u.wait(1200), u.put({ guide: "approach" }), u.mark("parking-guide"), await u.move("favorite", { duration: 650 }), await u.wait(450), u.put({ guide: "press" }), u.mark("parking-press"), await u.click("favorite"), u.put({ favorite: !0, guide: "confirm" }), u.mark("parking-saved"), await u.wait(2e3), u.put({ guide: "hidden" }), await u.wait(1400), u.put({ guide: "approach" }), await u.wait(650), u.put({ guide: "press" }), await u.click("favorite"), u.put({ favorite: !1, guide: "confirm" }), u.mark("parking-removed"), await u.wait(1100), u.put({ guide: "hidden" }), await u.move(u.layout === "compact" ? { x: 300, y: 480 } : { x: 480, y: 560 }, { duration: 450 }), await u.wait(700);
}
function mc({ name: u, address: c, count: a, total: j, electric: _, etotal: x, distance: P, favorite: Y, target: O, t: W }) {
  return /* @__PURE__ */ s.jsxs("div", { className: "pg-parking-card", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "pg-parking-card__top", children: [
      /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsx("b", { children: u }),
        /* @__PURE__ */ s.jsx("p", { children: c })
      ] }),
      /* @__PURE__ */ s.jsx("span", { className: "pg-status", "data-limited": a / j < 0.2 || void 0, children: a / j < 0.2 ? W("緊張", "Limited") : W("有位", "Available") }),
      /* @__PURE__ */ s.jsx("span", { "data-target": O, className: "pg-favorite", "data-on": Y || void 0, children: /* @__PURE__ */ s.jsx(_1, { size: 21, fill: Y ? "currentColor" : "none" }) })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "pg-space-grid", children: [{ image: "car.png", label: W("私家車", "Cars"), n: a, total: j }, { image: "electric-car.png", label: W("充電私家車", "EV charging"), n: _, total: x }].map((ne) => /* @__PURE__ */ s.jsxs("div", { className: "pg-space", children: [
      /* @__PURE__ */ s.jsx("img", { src: Pn(ne.image), alt: "" }),
      /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsx("strong", { "data-limited": ne.n / ne.total < 0.2 || void 0, children: /* @__PURE__ */ s.jsx(Lr, { value: ne.n }) }),
        /* @__PURE__ */ s.jsx("span", { children: ne.label }),
        /* @__PURE__ */ s.jsxs("small", { children: [
          "/ ",
          ne.total.toLocaleString()
        ] })
      ] })
    ] }, ne.image)) }),
    /* @__PURE__ */ s.jsxs("div", { className: "pg-parking-distance", children: [
      /* @__PURE__ */ s.jsx(M1, { size: 11 }),
      P
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "pg-parking-footer", children: [
      /* @__PURE__ */ s.jsx("span", { children: W("更新：09:41", "Updated: 09:41") }),
      /* @__PURE__ */ s.jsxs("b", { children: [
        W("詳情", "Details"),
        /* @__PURE__ */ s.jsx(E1, { size: 11 })
      ] })
    ] })
  ] });
}
function W1({ paused: u = !1 }) {
  const c = yl();
  return /* @__PURE__ */ s.jsx(Ri, { width: 560, height: 630, compact: { below: 500, width: 358, height: 540 }, initial: { favorite: !1, guide: "hidden" }, poster: { favorite: !0, guide: "confirm" }, script: u ? void 0 : U1, play: "loop", cursor: { at: { wide: { x: 480, y: 560 }, compact: { x: 300, y: 480 } }, style: "touch", ripple: !0 }, className: "pg-native pg-parking", children: (a, j, _) => /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx(zi, { width: _ === "compact" ? 326 : 400, frame: "pro", className: "pg-app-phone", children: /* @__PURE__ */ s.jsxs("div", { className: "pg-app-screen", children: [
      /* @__PURE__ */ s.jsx(_c, { title: c("澳門停車場", "Macao parking"), children: /* @__PURE__ */ s.jsxs("span", { className: "pg-list-map", children: [
        /* @__PURE__ */ s.jsx("b", { children: c("列表", "List") }),
        /* @__PURE__ */ s.jsx("span", { children: c("地圖", "Map") })
      ] }) }),
      /* @__PURE__ */ s.jsxs("div", { className: "pg-parking-body", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "pg-search", children: [
          /* @__PURE__ */ s.jsx(Ec, { size: 17 }),
          c("搜尋停車場", "Search car parks")
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "pg-location", children: [
          /* @__PURE__ */ s.jsxs("span", { children: [
            /* @__PURE__ */ s.jsx("i", {}),
            c("已定位", "Location found")
          ] }),
          /* @__PURE__ */ s.jsxs("span", { children: [
            c("重新整理", "Refresh"),
            " ↻"
          ] })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "pg-vehicle-filter", children: [
          /* @__PURE__ */ s.jsx("span", { "data-selected": !0, children: c("私家車", "Cars") }),
          /* @__PURE__ */ s.jsx("span", { children: c("電單車", "Motorcycles") }),
          /* @__PURE__ */ s.jsx("span", { children: c("充電", "Charging") })
        ] }),
        /* @__PURE__ */ s.jsx(mc, { name: c("栢蕙", "Pak Wai"), address: c("荷蘭園正街栢蕙花園", "Pak Wai Garden, R. de Horta e Costa"), count: 163, total: 1019, electric: 12, etotal: 14, distance: "350 m", favorite: a.favorite, target: "favorite", t: c }),
        /* @__PURE__ */ s.jsx(mc, { name: c("望賢樓", "Mong In Building"), address: c("望廈社會房屋望賢樓內之停車場", "Mong Ha public housing car park"), count: 51, total: 143, electric: 10, etotal: 12, distance: "680 m", t: c }),
        /* @__PURE__ */ s.jsxs("div", { className: "pg-parking-filler", children: [
          /* @__PURE__ */ s.jsx("span", {}),
          /* @__PURE__ */ s.jsx("span", {})
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ s.jsx($1, { rect: j("favorite"), mode: a.guide })
  ] }) });
}
const Mc = { open: !1, press: !1, eta: 5, stops: 2, progress: 0.25, reset: !1 }, B1 = { open: !0, press: !1, eta: 4, stops: 1, progress: 0.5, reset: !1 };
async function H1(u) {
  await u.wait(1500), u.mark("long-press");
  const c = u.rect("island"), a = c ? { x: c.x + c.width / 2, y: c.y + c.height / 2 } : "island";
  await u.move(a, { duration: 400 }), u.put({ press: !0 }), await u.drag(a, void 0, { duration: 430 }), u.put({ press: !1, open: !0 }), u.mark("expanded"), u.move(u.layout === "compact" ? { x: 300, y: 480 } : { x: 480, y: 560 }, { duration: 350 }), await u.wait(2e3), u.mark("progress"), u.put({ eta: 4, stops: 1, progress: 0.5 }), await u.wait(2400), u.put({ open: !1 }), await u.wait(800), u.mark("live-refresh"), u.put({ reset: !0 }), await u.wait(500), await u.snap({ ...Mc, reset: !0 }), await u.wait(180), u.put({ reset: !1 }), await u.wait(500);
}
function Rc({ s: u, t: c }) {
  return /* @__PURE__ */ s.jsxs("div", { className: "pg-live-estimate", children: [
    /* @__PURE__ */ s.jsx(Lr, { value: u.eta }),
    /* @__PURE__ */ s.jsx("small", { children: c("分鐘", "min") }),
    /* @__PURE__ */ s.jsxs("span", { className: "pg-live-stops", children: [
      /* @__PURE__ */ s.jsx(Lr, { value: u.stops }),
      /* @__PURE__ */ s.jsx("small", { children: c("站", "stop") })
    ] })
  ] });
}
function zc({ t: u }) {
  return /* @__PURE__ */ s.jsxs("div", { className: "pg-live-arrival", children: [
    /* @__PURE__ */ s.jsx("span", { children: u("預計到站", "Arrival") }),
    /* @__PURE__ */ s.jsx("b", { children: "12:21 AM" })
  ] });
}
function V1({ s: u, t: c }) {
  return /* @__PURE__ */ s.jsxs("div", { className: "pg-live-card", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "pg-live-card__top", children: [
      /* @__PURE__ */ s.jsx("span", { className: "pg-live-route", children: "101" }),
      /* @__PURE__ */ s.jsx("span", { children: c("北區警司處", "Northern Police Station") }),
      /* @__PURE__ */ s.jsx("small", { children: c("等車中", "Waiting") })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "pg-live-middle pg-cycle-data", children: [
      /* @__PURE__ */ s.jsx(Rc, { s: u, t: c }),
      /* @__PURE__ */ s.jsx(zc, { t: c })
    ] }),
    /* @__PURE__ */ s.jsx(Cc, { value: u.progress }),
    /* @__PURE__ */ s.jsxs("div", { className: "pg-live-card__foot", children: [
      /* @__PURE__ */ s.jsx("span", { children: c("候車進度", "Waiting progress") }),
      /* @__PURE__ */ s.jsxs("b", { children: [
        c("我已上車", "I’m on board"),
        " ✓"
      ] })
    ] })
  ] });
}
function Q1({ s: u, t: c }) {
  const a = u.open ? { left: 13, top: 10, width: 376, height: 172, borderRadius: 52 } : { left: 98, top: 14.5, width: 206, height: 37, borderRadius: 18.5 };
  return /* @__PURE__ */ s.jsxs("div", { className: "pg-island", "data-open": u.open || void 0, "data-press": u.press || void 0, children: [
    /* @__PURE__ */ s.jsx("div", { className: "pg-island-shape", style: a }),
    /* @__PURE__ */ s.jsxs("span", { className: "pg-island-compact pg-cycle-data", "data-visible": !u.open || void 0, children: [
      /* @__PURE__ */ s.jsx("span", { className: "pg-live-route", children: "101" }),
      /* @__PURE__ */ s.jsxs("span", { children: [
        u.eta,
        c("分", "m")
      ] })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "pg-island-content", "data-visible": u.open || void 0, children: [
      /* @__PURE__ */ s.jsxs("div", { className: "pg-island-top", children: [
        /* @__PURE__ */ s.jsx("span", { className: "pg-live-route", children: "101" }),
        /* @__PURE__ */ s.jsx("span", { children: c("北區警司處", "Northern Police Station") })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "pg-live-middle pg-cycle-data", children: [
        /* @__PURE__ */ s.jsx(Rc, { s: u, t: c }),
        /* @__PURE__ */ s.jsx(zc, { t: c })
      ] }),
      /* @__PURE__ */ s.jsx(Cc, { value: u.progress, dark: !0 })
    ] })
  ] });
}
function K1({ paused: u = !1 }) {
  const c = yl();
  return /* @__PURE__ */ s.jsx(Ri, { width: 560, height: 630, compact: { below: 500, width: 358, height: 540 }, initial: Mc, poster: B1, play: "loop", script: u ? void 0 : H1, cursor: { at: { wide: { x: 480, y: 560 }, compact: { x: 300, y: 480 } }, style: "touch" }, className: "pg-native pg-live", children: (a, j, _) => /* @__PURE__ */ s.jsxs(zi, { width: _ === "compact" ? 326 : 400, className: "pg-app-phone pg-loop-scene", "data-reset": a.reset || void 0, frame: "pro", island: !1, time: "", dark: !0, wallpaper: "linear-gradient(165deg,#7593ae,#385879 62%,#182b43)", children: [
    /* @__PURE__ */ s.jsx(d1, { className: "pg-live-lock", "data-obscured": a.open || void 0, date: c("11月5日 星期四", "Thursday, November 5"), time: "12:17", controls: !1, stack: "top", children: /* @__PURE__ */ s.jsx(V1, { s: a, t: c }) }),
    /* @__PURE__ */ s.jsx("span", { className: "pg-live-hit", "data-target": "island", style: { left: 98, top: 14.5, width: 206, height: 37 } }),
    /* @__PURE__ */ s.jsx(Q1, { s: a, t: c }),
    /* @__PURE__ */ s.jsx(Cs, { active: a.reset, t: c })
  ] }) });
}
const Pc = { tick: 0, reset: !1 };
async function Y1(u) {
  u.mark("lrt-start");
  for (let c = 1; c <= 3; c++)
    await u.wait(2300), u.put({ tick: c }), u.mark(`lrt-tick-${c}`);
  await u.wait(2300), u.put({ reset: !0 }), u.mark("lrt-refresh"), await u.wait(500), await u.snap({ ...Pc, reset: !0 }), await u.wait(180), u.put({ reset: !1 }), await u.wait(500);
}
function G1({ destination: u, minutes: c, t: a }) {
  return /* @__PURE__ */ s.jsxs("div", { className: "pg-lrt-departure", children: [
    /* @__PURE__ */ s.jsxs("span", { children: [
      a("往", "To"),
      " ",
      /* @__PURE__ */ s.jsx("b", { children: u })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "pg-lrt-time pg-cycle-data", "data-minutes": c, children: [
      /* @__PURE__ */ s.jsxs("div", { className: "pg-lrt-counter", "aria-hidden": c <= 0, "data-visible": c > 0 || void 0, children: [
        /* @__PURE__ */ s.jsx(Lr, { value: Math.max(0, c) }),
        /* @__PURE__ */ s.jsx("small", { children: a("分", "min") })
      ] }),
      /* @__PURE__ */ s.jsx("span", { className: "pg-lrt-imminent", "aria-hidden": c > 0, "data-visible": c <= 0 || void 0, children: a("即將到站", "Arriving") })
    ] })
  ] });
}
function q1({ paused: u = !1 }) {
  const c = yl();
  return /* @__PURE__ */ s.jsx(Ri, { width: 560, height: 820, compact: { below: 500, width: 358, height: 690 }, initial: Pc, poster: { tick: 1, reset: !1 }, script: u ? void 0 : Y1, play: "loop", className: "pg-native pg-lrt", children: (a, j, _) => /* @__PURE__ */ s.jsx(zi, { width: _ === "compact" ? 326 : 400, frame: "pro", className: "pg-app-phone pg-loop-scene", "data-reset": a.reset || void 0, children: /* @__PURE__ */ s.jsxs("div", { className: "pg-app-screen", children: [
    /* @__PURE__ */ s.jsx(_c, { title: c("輕軌", "Light rail") }),
    /* @__PURE__ */ s.jsxs("div", { className: "pg-lrt-body", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "pg-lrt-search", children: [
        /* @__PURE__ */ s.jsx(Ec, { size: 19 }),
        c("搜尋輕軌車站", "Search LRT stations")
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "pg-lrt-hero", children: [
        /* @__PURE__ */ s.jsx("img", { src: Pn("MacauLRTLogo.svg"), alt: "Macao LRT" }),
        /* @__PURE__ */ s.jsxs("div", { children: [
          /* @__PURE__ */ s.jsx("b", { children: c("輕軌到站時間", "LRT arrivals") }),
          /* @__PURE__ */ s.jsx("span", { children: c("選擇車站查看下一班列車", "Choose a station for the next train") })
        ] }),
        /* @__PURE__ */ s.jsxs("span", { className: "pg-lrt-stripe", children: [
          /* @__PURE__ */ s.jsx("i", {}),
          /* @__PURE__ */ s.jsx("i", {}),
          /* @__PURE__ */ s.jsx("i", {}),
          /* @__PURE__ */ s.jsx("i", {})
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "pg-lrt-station-heading", children: [
        /* @__PURE__ */ s.jsx("img", { src: Pn("LRTStationTrainSymbol.png"), alt: "" }),
        /* @__PURE__ */ s.jsx("b", { children: c("車站", "Stations") }),
        /* @__PURE__ */ s.jsx("span", { children: c("15 個車站", "15 stations") })
      ] }),
      /* @__PURE__ */ s.jsx("div", { className: "pg-lrt-stations", children: [{ name: c("媽閣", "Barra"), icon: "Barra", values: [1] }, { name: c("海洋", "Ocean"), icon: "Ocean", values: [4, 1] }, { name: c("馬會", "Jockey Club"), icon: "Jockey_Club", values: [2, 3] }, { name: c("運動場", "Stadium"), icon: "Stadium", values: [0, 0] }].map((x) => /* @__PURE__ */ s.jsxs("div", { className: "pg-lrt-station", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "pg-lrt-station-identity", children: [
          /* @__PURE__ */ s.jsx("span", { children: /* @__PURE__ */ s.jsx("img", { src: Pn(`LRTIcon_${x.icon}.png`), alt: "" }) }),
          /* @__PURE__ */ s.jsxs("div", { children: [
            /* @__PURE__ */ s.jsx("b", { children: x.name }),
            /* @__PURE__ */ s.jsxs("small", { children: [
              /* @__PURE__ */ s.jsx("i", {}),
              c("氹仔線", "Taipa Line")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "pg-lrt-board", children: x.values.map((P, Y) => /* @__PURE__ */ s.jsx(G1, { destination: x.icon === "Barra" || Y === 1 ? c("氹仔碼頭", "Taipa Ferry") : c("媽閣", "Barra"), minutes: Math.max(0, P - a.tick), t: c }, Y)) })
      ] }, x.icon)) })
    ] }),
    /* @__PURE__ */ s.jsx(Cs, { active: a.reset, t: c })
  ] }) }) });
}
function Z1({ kind: u }) {
  const [c, a] = R.useState(0), [j, _] = R.useState(!1), x = yl(), P = u === "bus" ? D1 : u === "parking" ? W1 : u === "lrt" ? q1 : K1, Y = u === "bus" ? x("巴士位置與到站資訊，同步更新。", "Bus position and arrivals move together.") : u === "parking" ? x("輕按愛心，收藏常用停車場。", "Tap the heart to save a car park.") : u === "lrt" ? x("兩個方向，下一班列車一眼睇清。", "Next trains, in both directions.") : x("鎖定畫面與動態島，隨時跟進。", "Follow your journey from the Lock Screen.");
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx(P, { paused: j }, c),
    /* @__PURE__ */ s.jsxs("div", { className: "pg-demo-caption", children: [
      /* @__PURE__ */ s.jsx("span", { children: Y }),
      /* @__PURE__ */ s.jsxs("div", { className: "pg-demo-actions", children: [
        /* @__PURE__ */ s.jsx("button", { className: "pg-demo-pause", type: "button", "aria-pressed": j, onClick: () => _((O) => !O), children: j ? x("播放", "Play") : x("暫停", "Pause") }),
        /* @__PURE__ */ s.jsxs("button", { type: "button", onClick: () => {
          _(!1), a((O) => O + 1);
        }, children: [
          x("重播", "Replay"),
          " ↻"
        ] })
      ] })
    ] })
  ] });
}
const Tc = new IntersectionObserver((u) => {
  for (const { target: c, isIntersecting: a } of u) {
    if (!a) continue;
    Tc.unobserve(c);
    const j = c, _ = j.dataset.parkgoDemo;
    (_ === "bus" || _ === "parking" || _ === "live" || _ === "lrt") && Md.createRoot(j).render(/* @__PURE__ */ s.jsx(Z1, { kind: _ }));
  }
}, { rootMargin: "250px" });
for (const u of document.querySelectorAll("[data-parkgo-demo]")) Tc.observe(u);
