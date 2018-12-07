console.log("The start of OW code execution: ", (new Date()).getTime());
function pwtCreatePrebidNamespace(preBidNameSpace) {
    window[preBidNameSpace] = window[preBidNameSpace] || {};
    window[preBidNameSpace].que = window[preBidNameSpace].que || [];
    /* prebid.js v1.21.0Updated : 2018-10-24 */
    !(function(u) {
        var s = window.pbjsChunk;
        window.pbjsChunk = function(e, t, n) {
            for (var r, i, o, a = 0, d = []; a < e.length; a++)
                i = e[a],
                c[i] && d.push(c[i][0]),
                c[i] = 0;
            for (r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
            for (s && s(e, t, n); d.length; )
                d.shift()();
            if (n)
                for (a = 0; a < n.length; a++)
                    o = f(f.s = n[a]);
            return o
        }
        ;
        var n = {}
          , c = {
            165: 0
        };
        function f(e) {
            if (n[e])
                return n[e].exports;
            var t = n[e] = {
                i: e,
                l: !1,
                exports: {}
            };
            return u[e].call(t.exports, t, t.exports, f),
            t.l = !0,
            t.exports
        }
        f.m = u,
        f.c = n,
        f.d = function(e, t, n) {
            f.o(e, t) || Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: n
            })
        }
        ,
        f.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return f.d(t, "a", t),
            t
        }
        ,
        f.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        f.p = "",
        f.oe = function(e) {
            throw console.error(e),
            e
        }
        ,
        f(f.s = 558)
    }
    )({
        0: function(e, a, t) {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            }),
            a.getLatestHighestCpmBid = a.getOldestHighestCpmBid = a.getHighestCpm = void 0;
            var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
              , d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ;
            a.getAdUnitSizes = function(e) {
                if (!e)
                    return;
                var t = [];
                if (e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes)) {
                    var n = e.mediaTypes.banner.sizes;
                    Array.isArray(n[0]) ? t = n : t.push(n)
                } else
                    Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? t = e.sizes : t.push(e.sizes));
                return t
            }
            ,
            a.parseSizesInput = function(e) {
                var t = [];
                if ("string" == typeof e) {
                    var n = e.split(",")
                      , r = /^(\d)+x(\d)+$/i;
                    if (n)
                        for (var i in n)
                            C(n, i) && n[i].match(r) && t.push(n[i])
                } else if ("object" === (void 0 === e ? "undefined" : d(e))) {
                    var o = e.length;
                    if (0 < o)
                        if (2 === o && "number" == typeof e[0] && "number" == typeof e[1])
                            t.push(A(e));
                        else
                            for (var a = 0; a < o; a++)
                                t.push(A(e[a]))
                }
                return t
            }
            ,
            a.parseGPTSingleSizeArray = A,
            a.uniques = w,
            a.flatten = O,
            a.getBidRequest = function(n, e) {
                var r = void 0;
                return e.some((function(e) {
                    var t = (0,
                    o.default)(e.bids, (function(t) {
                        return ["bidId", "adId", "bid_id"].some((function(e) {
                            return t[e] === n
                        }
                        ))
                    }
                    ));
                    return t && (r = t),
                    t
                }
                )),
                r
            }
            ,
            a.getKeys = B,
            a.getValue = R,
            a.getBidderCodes = function() {
                return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits).map((function(e) {
                    return e.bids.map((function(e) {
                        return e.bidder
                    }
                    )).reduce(O, [])
                }
                )).reduce(O).filter(w)
            }
            ,
            a.isGptPubadsDefined = function() {
                if (window.googletag && a.isFn(window.googletag.pubads) && a.isFn(window.googletag.pubads().getSlots))
                    return !0
            }
            ,
            a.shuffle = function(e) {
                var t = e.length;
                for (; 0 < t; ) {
                    var n = Math.floor(Math.random() * t)
                      , r = e[--t];
                    e[t] = e[n],
                    e[n] = r
                }
                return e
            }
            ,
            a.adUnitsFilter = function(e, t) {
                return (0,
                u.default)(e, t && t.adUnitCode)
            }
            ,
            a.isSrcdocSupported = function(e) {
                return e.defaultView && e.defaultView.frameElement && "srcdoc"in e.defaultView.frameElement && !/firefox/i.test(navigator.userAgent)
            }
            ,
            a.deepClone = function(e) {
                return (0,
                i.default)(e)
            }
            ,
            a.inIframe = function() {
                try {
                    return a.getWindowSelf() !== a.getWindowTop()
                } catch (e) {
                    return !0
                }
            }
            ,
            a.isSafariBrowser = function() {
                return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
            }
            ,
            a.replaceAuctionPrice = function(e, t) {
                if (!e)
                    return;
                return e.replace(/\$\{AUCTION_PRICE\}/g, t)
            }
            ,
            a.timestamp = function() {
                return (new Date).getTime()
            }
            ,
            a.checkCookieSupport = function() {
                if (window.navigator.cookieEnabled || document.cookie.length)
                    return !0
            }
            ,
            a.cookiesAreEnabled = function() {
                if (a.checkCookieSupport())
                    return !0;
                return window.document.cookie = "prebid.cookieTest",
                -1 != window.document.cookie.indexOf("prebid.cookieTest")
            }
            ,
            a.delayExecution = function(e, t) {
                if (t < 1)
                    throw new Error("numRequiredCalls must be a positive number. Got " + t);
                var n = 0;
                return function() {
                    ++n === t && e.apply(null, arguments)
                }
            }
            ,
            a.groupBy = function(e, n) {
                return e.reduce((function(e, t) {
                    return (e[t[n]] = e[t[n]] || []).push(t),
                    e
                }
                ), {})
            }
            ,
            a.deepAccess = function(e, t) {
                if (!e)
                    return;
                t = String(t).split(".");
                for (var n = 0; n < t.length; n++)
                    if (void 0 === (e = e[t[n]]))
                        return;
                return e
            }
            ,
            a.createContentToExecuteExtScriptInFriendlyFrame = function(e) {
                return e ? '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;<\/script></head><body>\x3c!--PRE_SCRIPT_TAG_MACRO--\x3e<script src="' + e + '"><\/script>\x3c!--POST_SCRIPT_TAG_MACRO--\x3e</body></html>' : ""
            }
            ,
            a.getDefinedParams = function(n, e) {
                return e.filter((function(e) {
                    return n[e]
                }
                )).reduce((function(e, t) {
                    return r(e, (function(e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n;
                        return e
                    }
                    )({}, t, n[t]))
                }
                ), {})
            }
            ,
            a.isValidMediaTypes = function(e) {
                var t = ["banner", "native", "video"];
                if (!Object.keys(e).every((function(e) {
                    return (0,
                    u.default)(t, e)
                }
                )))
                    return !1;
                if (e.video && e.video.context)
                    return (0,
                    u.default)(["instream", "outstream"], e.video.context);
                return !0
            }
            ,
            a.getBidderRequest = function(e, t, n) {
                return (0,
                o.default)(e, (function(e) {
                    return 0 < e.bids.filter((function(e) {
                        return e.bidder === t && e.adUnitCode === n
                    }
                    )).length
                }
                )) || {
                    start: null,
                    auctionId: null
                }
            }
            ,
            a.getUserConfiguredParams = function(e, t, n) {
                return e.filter((function(e) {
                    return e.code === t
                }
                )).map((function(e) {
                    return e.bids
                }
                )).reduce(O, []).filter((function(e) {
                    return e.bidder === n
                }
                )).map((function(e) {
                    return e.params || {}
                }
                ))
            }
            ,
            a.getOrigin = function() {
                return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
            }
            ,
            a.getDNT = function() {
                return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack
            }
            ,
            a.isAdUnitCodeMatchingSlot = function(t) {
                return function(e) {
                    return U(t, e)
                }
            }
            ,
            a.isSlotMatchingAdUnitCode = function(t) {
                return function(e) {
                    return U(e, t)
                }
            }
            ,
            a.unsupportedBidderMessage = function(e, t) {
                var n = Object.keys(e.mediaTypes || {
                    banner: "banner"
                }).join(", ");
                return "\n    " + e.code + " is a " + n + " ad unit\n    containing bidders that don't support " + n + ": " + t + ".\n    This bidder won't fetch demand.\n  "
            }
            ,
            a.deletePropertyFromObject = function(e, t) {
                var n = r({}, e);
                return delete n[t],
                n
            }
            ,
            a.removeRequestId = function(e) {
                return a.deletePropertyFromObject(e, "requestId")
            }
            ,
            a.isInteger = function(e) {
                return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e
            }
            ,
            a.convertCamelToUnderscore = function(e) {
                return e.replace(/(?:^|\.?)([A-Z])/g, (function(e, t) {
                    return "_" + t.toLowerCase()
                }
                )).replace(/^_/, "")
            }
            ,
            a.transformBidderParamKeywords = function(e) {
                var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "keywords"
                  , i = [];
                return a._each(e, (function(e, t) {
                    if (a.isArray(e)) {
                        var n = [];
                        a._each(e, (function(e) {
                            (e = a.getValueString(r + "." + t, e)) && n.push(e)
                        }
                        )),
                        e = n
                    } else {
                        if (e = a.getValueString(r + "." + t, e),
                        !a.isStr(e))
                            return;
                        e = [e]
                    }
                    i.push({
                        key: t,
                        value: e
                    })
                }
                )),
                i
            }
            ,
            a.convertTypes = function(r, i) {
                return Object.keys(r).forEach((function(e) {
                    var t, n;
                    i[e] && (a.isFn(r[e]) ? i[e] = r[e](i[e]) : i[e] = (t = r[e],
                    n = i[e],
                    "string" === t ? n && n.toString() : "number" === t ? Number(n) : n),
                    isNaN(i[e]) && delete i.key)
                }
                )),
                i
            }
            ;
            var n = t(3)
              , i = c(t(65))
              , o = c(t(10))
              , u = c(t(5))
              , s = t(11);
            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var f = t(4)
              , l = !1
              , g = Object.prototype.toString
              , p = Boolean(window.console)
              , v = Boolean(p && window.console.log)
              , y = Boolean(p && window.console.info)
              , m = Boolean(p && window.console.warn)
              , b = Boolean(p && window.console.error);
            a.replaceTokenInString = function(i, e, o) {
                return a._each(e, (function(e, t) {
                    e = void 0 === e ? "" : e;
                    var n = o + t.toUpperCase() + o
                      , r = new RegExp(n,"g");
                    i = i.replace(r, e)
                }
                )),
                i
            }
            ;
            var h, S = (h = 0,
            function() {
                return ++h
            }
            );
            function E() {
                return S() + Math.random().toString(16).substr(2)
            }
            function A(e) {
                if (a.isArray(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1]))
                    return e[0] + "x" + e[1]
            }
            function T(e, t) {
                return e = [].slice.call(e),
                t && e.unshift(t),
                e.unshift("display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;"),
                e.unshift("%cPrebid"),
                e
            }
            a.getUniqueIdentifierStr = E,
            a.generateUUID = function e(t) {
                return t ? (t ^ 16 * Math.random() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
            }
            ,
            a.getBidIdParameter = function(e, t) {
                return t && t[e] ? t[e] : ""
            }
            ,
            a.tryAppendQueryString = function(e, t, n) {
                return n ? e + (t + "=") + encodeURIComponent(n) + "&" : e
            }
            ,
            a.parseQueryStringParameters = function(e) {
                var t = "";
                for (var n in e)
                    e.hasOwnProperty(n) && (t += n + "=" + encodeURIComponent(e[n]) + "&");
                return t
            }
            ,
            a.transformAdServerTargetingObj = function(t) {
                return t && 0 < Object.getOwnPropertyNames(t).length ? B(t).map((function(e) {
                    return e + "=" + encodeURIComponent(R(t, e))
                }
                )).join("&") : ""
            }
            ,
            a.getTopWindowLocation = function() {
                if (a.inIframe()) {
                    var e = void 0;
                    try {
                        e = a.getAncestorOrigins() || a.getTopFrameReferrer()
                    } catch (e) {
                        logInfo("could not obtain top window location", e)
                    }
                    if (e)
                        return (0,
                        s.parse)(e, {
                            decodeSearchAsString: !0
                        })
                }
                return a.getWindowLocation()
            }
            ,
            a.getTopFrameReferrer = function() {
                try {
                    window.top.location.toString();
                    for (var e = "", t = void 0; (t = t ? t.parent : window).document && t.document.referrer && (e = t.document.referrer),
                    t !== window.top; )
                        ;
                    return e
                } catch (e) {
                    return window.document.referrer
                }
            }
            ,
            a.getAncestorOrigins = function() {
                if (window.document.location && window.document.location.ancestorOrigins && 1 <= window.document.location.ancestorOrigins.length)
                    return window.document.location.ancestorOrigins[window.document.location.ancestorOrigins.length - 1]
            }
            ,
            a.getWindowTop = function() {
                return window.top
            }
            ,
            a.getWindowSelf = function() {
                return window.self
            }
            ,
            a.getWindowLocation = function() {
                return window.location
            }
            ,
            a.getTopWindowUrl = function() {
                var t = void 0;
                try {
                    t = a.getTopWindowLocation().href
                } catch (e) {
                    t = ""
                }
                return t
            }
            ,
            a.getTopWindowHostName = function() {
                var t = void 0;
                try {
                    t = this.getTopWindowLocation().hostname
                } catch (e) {
                    t = ""
                }
                return t
            }
            ,
            a.getTopWindowReferrer = function() {
                try {
                    return window.top.document.referrer
                } catch (e) {
                    return document.referrer
                }
            }
            ,
            a.logMessage = function() {
                I() && v && console.log.apply(console, T(arguments, "MESSAGE:"))
            }
            ,
            a.logInfo = function() {
                I() && y && console.info.apply(console, T(arguments, "INFO:"))
            }
            ,
            a.logWarn = function() {
                I() && m && console.warn.apply(console, T(arguments, "WARNING:"))
            }
            ,
            a.logError = function() {
                I() && b && console.error.apply(console, T(arguments, "ERROR:"))
            }
            ,
            a.hasConsoleLogger = function() {
                return v
            }
            ;
            var I = function() {
                if (!1 === n.config.getConfig("debug") && !1 === l) {
                    var e = "TRUE" === _(f.DEBUG_MODE).toUpperCase();
                    n.config.setConfig({
                        debug: e
                    }),
                    l = !0
                }
                return !!n.config.getConfig("debug")
            };
            a.debugTurnedOn = I,
            a.createInvisibleIframe = function() {
                var e = document.createElement("iframe");
                return e.id = E(),
                e.height = 0,
                e.width = 0,
                e.border = "0px",
                e.hspace = "0",
                e.vspace = "0",
                e.marginWidth = "0",
                e.marginHeight = "0",
                e.style.border = "0",
                e.scrolling = "no",
                e.frameBorder = "0",
                e.src = "about:blank",
                e.style.display = "none",
                e
            }
            ;
            var _ = function(e) {
                var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search);
                return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
            };
            a.getParameterByName = _,
            a.hasValidBidRequest = function(e, n, t) {
                var r = !1;
                function i(e, t) {
                    t === n[o] && (r = !0)
                }
                for (var o = 0; o < n.length; o++)
                    if (r = !1,
                    a._each(e, i),
                    !r)
                        return a.logError("Params are missing for bid request. One of these required paramaters are missing: " + n, t),
                        !1;
                return !0
            }
            ,
            a.addEventHandler = function(e, t, n) {
                e.addEventListener ? e.addEventListener(t, n, !0) : e.attachEvent && e.attachEvent("on" + t, n)
            }
            ,
            a.isA = function(e, t) {
                return g.call(e) === "[object " + t + "]"
            }
            ,
            a.isFn = function(e) {
                return a.isA(e, "Function")
            }
            ,
            a.isStr = function(e) {
                return a.isA(e, "String")
            }
            ,
            a.isArray = function(e) {
                return a.isA(e, "Array")
            }
            ,
            a.isNumber = function(e) {
                return a.isA(e, "Number")
            }
            ,
            a.isPlainObject = function(e) {
                return a.isA(e, "Object")
            }
            ,
            a.isBoolean = function(e) {
                return a.isA(e, "Boolean")
            }
            ,
            a.isEmpty = function(e) {
                if (!e)
                    return !0;
                if (a.isArray(e) || a.isStr(e))
                    return !(0 < e.length);
                for (var t in e)
                    if (hasOwnProperty.call(e, t))
                        return !1;
                return !0
            }
            ,
            a.isEmptyStr = function(e) {
                return a.isStr(e) && (!e || 0 === e.length)
            }
            ,
            a._each = function(e, t) {
                if (!a.isEmpty(e)) {
                    if (a.isFn(e.forEach))
                        return e.forEach(t, this);
                    var n = 0
                      , r = e.length;
                    if (0 < r)
                        for (; n < r; n++)
                            t(e[n], n, e);
                    else
                        for (n in e)
                            hasOwnProperty.call(e, n) && t.call(this, e[n], n)
                }
            }
            ,
            a.contains = function(e, t) {
                if (a.isEmpty(e))
                    return !1;
                if (a.isFn(e.indexOf))
                    return -1 !== e.indexOf(t);
                for (var n = e.length; n--; )
                    if (e[n] === t)
                        return !0;
                return !1
            }
            ,
            a.indexOf = (function() {
                if (Array.prototype.indexOf)
                    return Array.prototype.indexOf
            }
            )(),
            a._map = function(n, r) {
                if (a.isEmpty(n))
                    return [];
                if (a.isFn(n.map))
                    return n.map(r);
                var i = [];
                return a._each(n, (function(e, t) {
                    i.push(r(e, t, n))
                }
                )),
                i
            }
            ;
            var C = function(e, t) {
                return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t]
            };
            function w(e, t, n) {
                return n.indexOf(e) === t
            }
            function O(e, t) {
                return e.concat(t)
            }
            function B(e) {
                return Object.keys(e)
            }
            function R(e, t) {
                return e[t]
            }
            a.insertElement = function(e, t, n) {
                t = t || document;
                var r = void 0;
                r = n ? t.getElementsByTagName(n) : t.getElementsByTagName("head");
                try {
                    (r = r.length ? r : t.getElementsByTagName("body")).length && (r = r[0]).insertBefore(e, r.firstChild)
                } catch (e) {}
            }
            ,
            a.triggerPixel = function(e) {
                (new Image).src = e
            }
            ,
            a.callBurl = function(e) {
                var t = e.source
                  , n = e.burl;
                t === f.S2S.SRC && n && a.triggerPixel(n)
            }
            ,
            a.insertHtmlIntoIframe = function(e) {
                if (e) {
                    var t = document.createElement("iframe");
                    t.id = a.getUniqueIdentifierStr(),
                    t.width = 0,
                    t.height = 0,
                    t.hspace = "0",
                    t.vspace = "0",
                    t.marginWidth = "0",
                    t.marginHeight = "0",
                    t.style.display = "none",
                    t.style.height = "0px",
                    t.style.width = "0px",
                    t.scrolling = "no",
                    t.frameBorder = "0",
                    t.allowtransparency = "true",
                    a.insertElement(t, document, "body"),
                    t.contentWindow.document.open(),
                    t.contentWindow.document.write(e),
                    t.contentWindow.document.close()
                }
            }
            ,
            a.insertUserSyncIframe = function(e) {
                var t = a.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin")
                  , n = document.createElement("div");
                n.innerHTML = t;
                var r = n.firstChild;
                a.insertElement(r)
            }
            ,
            a.createTrackPixelHtml = function(e) {
                if (!e)
                    return "";
                var t = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
                return t += '<img src="' + encodeURI(e) + '"></div>'
            }
            ,
            a.createTrackPixelIframeHtml = function(e) {
                var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]
                  , n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
                return e ? (t && (e = encodeURI(e)),
                n && (n = 'sandbox="' + n + '"'),
                "<iframe " + n + ' id="' + a.getUniqueIdentifierStr() + '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="' + e + '">\n    </iframe>') : ""
            }
            ,
            a.getIframeDocument = function(e) {
                if (e) {
                    var t = void 0;
                    try {
                        t = e.contentWindow ? e.contentWindow.document : e.contentDocument.document ? e.contentDocument.document : e.contentDocument
                    } catch (e) {
                        a.logError("Cannot get iframe document", e)
                    }
                    return t
                }
            }
            ,
            a.getValueString = function(e, t, n) {
                return null == t ? n : a.isStr(t) ? t : a.isNumber(t) ? t.toString() : void a.logWarn("Unsuported type for param: " + e + " required type: String")
            }
            ;
            a.getHighestCpm = N("timeToRespond", (function(e, t) {
                return t < e
            }
            )),
            a.getOldestHighestCpmBid = N("responseTimestamp", (function(e, t) {
                return t < e
            }
            )),
            a.getLatestHighestCpmBid = N("responseTimestamp", (function(e, t) {
                return e < t
            }
            ));
            function N(n, r) {
                return function(e, t) {
                    return e.cpm === t.cpm ? r(e[n], t[n]) ? t : e : e.cpm < t.cpm ? t : e
                }
            }
            var U = function(e, t) {
                return e.getAdUnitPath() === t || e.getSlotElementId() === t
            }
        },
        1: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var c = function(e, t) {
                if (Array.isArray(e))
                    return e;
                if (Symbol.iterator in Object(e))
                    return (function(e, t) {
                        var n = []
                          , r = !0
                          , i = !1
                          , o = void 0;
                        try {
                            for (var a, d = e[Symbol.iterator](); !(r = (a = d.next()).done) && (n.push(a.value),
                            !t || n.length !== t); r = !0)
                                ;
                        } catch (e) {
                            i = !0,
                            o = e
                        } finally {
                            try {
                                !r && d.return && d.return()
                            } finally {
                                if (i)
                                    throw o
                            }
                        }
                        return n
                    }
                    )(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
              , p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
              , v = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ;
            t.registerBidder = function(t) {
                var n = Array.isArray(t.supportedMediaTypes) ? {
                    supportedMediaTypes: t.supportedMediaTypes
                } : void 0;
                function r(e) {
                    var t = l(e);
                    i.default.registerBidAdapter(t, e.code, n)
                }
                r(t),
                Array.isArray(t.aliases) && t.aliases.forEach((function(e) {
                    i.default.aliasRegistry[e] = t.code,
                    r(v({}, t, {
                        code: e
                    }))
                }
                ))
            }
            ,
            t.newBidder = l,
            t.isValid = E;
            var r = s(n(28))
              , i = s(n(8))
              , y = n(3)
              , m = s(n(17))
              , o = n(14)
              , a = n(18)
              , d = n(67)
              , b = s(n(4))
              , h = s(n(9))
              , u = s(n(5))
              , S = n(0);
            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var f = ["requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency"];
            function l(f) {
                return v(new r.default(f.code), {
                    getSpec: function() {
                        return Object.freeze(f)
                    },
                    registerSyncs: l,
                    callBids: function(o, a, r, n) {
                        if (Array.isArray(o.bids)) {
                            var d = {}
                              , u = []
                              , e = o.bids.filter(g);
                            if (0 !== e.length) {
                                var s = {};
                                e.forEach((function(e) {
                                    (s[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode)
                                }
                                ));
                                var t = f.buildRequests(e, o);
                                if (t && 0 !== t.length) {
                                    Array.isArray(t) || (t = [t]);
                                    var c = (0,
                                    S.delayExecution)(i, t.length);
                                    t.forEach((function(i) {
                                        switch (i.method) {
                                        case "GET":
                                            n("" + i.url + (function(e) {
                                                if (e)
                                                    return "?" + ("object" === (void 0 === e ? "undefined" : p(e)) ? (0,
                                                    S.parseQueryStringParameters)(e) : e);
                                                return ""
                                            }
                                            )(i.data), {
                                                success: e,
                                                error: t
                                            }, void 0, v({
                                                method: "GET",
                                                withCredentials: !0
                                            }, i.options));
                                            break;
                                        case "POST":
                                            n(i.url, {
                                                success: e,
                                                error: t
                                            }, "string" == typeof i.data ? i.data : JSON.stringify(i.data), v({
                                                method: "POST",
                                                contentType: "text/plain",
                                                withCredentials: !0
                                            }, i.options));
                                            break;
                                        default:
                                            (0,
                                            S.logWarn)("Skipping invalid request from " + f.code + ". Request type " + i.type + " must be GET or POST"),
                                            c()
                                        }
                                        function e(e, t) {
                                            try {
                                                e = JSON.parse(e)
                                            } catch (e) {}
                                            e = {
                                                body: e,
                                                headers: {
                                                    get: t.getResponseHeader.bind(t)
                                                }
                                            },
                                            u.push(e);
                                            var n = void 0;
                                            try {
                                                n = f.interpretResponse(e, i)
                                            } catch (e) {
                                                return (0,
                                                S.logError)("Bidder " + f.code + " failed to interpret the server's response. Continuing without bids", null, e),
                                                void c()
                                            }
                                            function r(e) {
                                                var t, n, r = s[e.requestId];
                                                if (r) {
                                                    var i = v(m.default.createBid(b.default.STATUS.GOOD, r), e);
                                                    t = r.adUnitCode,
                                                    n = i,
                                                    d[t] = !0,
                                                    E(t, n, [o]) && a(t, n)
                                                } else
                                                    (0,
                                                    S.logWarn)("Bidder " + f.code + " made bid for unknown request ID: " + e.requestId + ". Ignoring.")
                                            }
                                            n && (n.forEach ? n.forEach(r) : r(n)),
                                            c(n)
                                        }
                                        function t(e) {
                                            (0,
                                            S.logError)("Server call for " + f.code + " failed: " + e + ". Continuing without bids."),
                                            c()
                                        }
                                    }
                                    ))
                                } else
                                    i()
                            } else
                                i()
                        }
                        function i(e) {
                            var t = (e ? e[0] ? e : [e] : []).some((function(e) {
                                return "video" === e.mediaType
                            }
                            ))
                              , n = y.config.getConfig("cache.url");
                            t && n || r(),
                            h.default.emit(b.default.EVENTS.BIDDER_DONE, o),
                            l(u, o.gdprConsent)
                        }
                    }
                });
                function l(e, t) {
                    if (f.getUserSyncs) {
                        var n = y.config.getConfig("userSync.filterSettings")
                          , r = f.getUserSyncs({
                            iframeEnabled: !!(y.config.getConfig("userSync.iframeEnabled") || n && (n.iframe || n.all)),
                            pixelEnabled: !!(y.config.getConfig("userSync.pixelEnabled") || n && (n.image || n.all))
                        }, e, t);
                        r && (Array.isArray(r) || (r = [r]),
                        r.forEach((function(e) {
                            o.userSync.registerSync(e.type, f.code, e.url)
                        }
                        )))
                    }
                }
                function g(e) {
                    return !!f.isBidRequestValid(e) || ((0,
                    S.logWarn)("Invalid bid sent to bidder " + f.code + ": " + JSON.stringify(e)),
                    !1)
                }
            }
            function E(e, t, n) {
                function r(e) {
                    return "Invalid bid from " + t.bidderCode + ". Ignoring bid: " + e
                }
                return e ? t ? (i = Object.keys(t),
                f.every((function(e) {
                    return (0,
                    u.default)(i, e) && !(0,
                    u.default)([void 0, null], t[e])
                }
                )) ? "native" !== t.mediaType || (0,
                a.nativeBidIsValid)(t, n) ? "video" !== t.mediaType || (0,
                d.isValidVideoBid)(t, n) ? !("banner" === t.mediaType && !(function(e, t, n) {
                    if ((t.width || 0 === t.width) && (t.height || 0 === t.height))
                        return !0;
                    var r = (0,
                    S.getBidderRequest)(n, t.bidderCode, e)
                      , i = r && r.bids && r.bids[0] && r.bids[0].sizes
                      , o = (0,
                    S.parseSizesInput)(i);
                    if (1 !== o.length)
                        return !1;
                    var a = o[0].split("x")
                      , d = c(a, 2)
                      , u = d[0]
                      , s = d[1];
                    return t.width = u,
                    t.height = s,
                    !0
                }
                )(e, t, n)) || ((0,
                S.logError)(r("Banner bids require a width and height")),
                !1) : ((0,
                S.logError)(r("Video bid does not have required vastUrl or renderer property")),
                !1) : ((0,
                S.logError)(r("Native bid missing some required properties.")),
                !1) : ((0,
                S.logError)(r("Bidder " + t.bidderCode + " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params.")),
                !1)) : ((0,
                S.logWarn)("Some adapter tried to add an undefined bid for " + e + "."),
                !1) : ((0,
                S.logWarn)("No adUnitCode was supplied to addBidResponse."),
                !1);
                var i
            }
        },
        10: function(e, t, n) {
            n(45),
            e.exports = n(13).Array.find
        },
        104: function(e, t, n) {
            "use strict";
            var r = n(15)
              , i = n(34)(6)
              , o = "findIndex"
              , a = !0;
            o in [] && Array(1)[o]((function() {
                a = !1
            }
            )),
            r(r.P + r.F * a, "Array", {
                findIndex: function(e) {
                    return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
                }
            }),
            n(27)(o)
        },
        11: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = function(e, t) {
                if (Array.isArray(e))
                    return e;
                if (Symbol.iterator in Object(e))
                    return (function(e, t) {
                        var n = []
                          , r = !0
                          , i = !1
                          , o = void 0;
                        try {
                            for (var a, d = e[Symbol.iterator](); !(r = (a = d.next()).done) && (n.push(a.value),
                            !t || n.length !== t); r = !0)
                                ;
                        } catch (e) {
                            i = !0,
                            o = e
                        } finally {
                            try {
                                !r && d.return && d.return()
                            } finally {
                                if (i)
                                    throw o
                            }
                        }
                        return n
                    }
                    )(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            };
            function i(e) {
                return e ? e.replace(/^\?/, "").split("&").reduce((function(e, t) {
                    var n = t.split("=")
                      , r = a(n, 2)
                      , i = r[0]
                      , o = r[1];
                    return /\[\]$/.test(i) ? (e[i = i.replace("[]", "")] = e[i] || [],
                    e[i].push(o)) : e[i] = o || "",
                    e
                }
                ), {}) : {}
            }
            function r(e) {
                return Object.keys(e).map((function(t) {
                    return Array.isArray(e[t]) ? e[t].map((function(e) {
                        return t + "[]=" + e
                    }
                    )).join("&") : t + "=" + e[t]
                }
                )).join("&")
            }
            t.parseQS = i,
            t.formatQS = r,
            t.parse = function(e, t) {
                var n = document.createElement("a");
                t && "noDecodeWholeURL"in t && t.noDecodeWholeURL ? n.href = e : n.href = decodeURIComponent(e);
                var r = t && "decodeSearchAsString"in t && t.decodeSearchAsString;
                return {
                    href: n.href,
                    protocol: (n.protocol || "").replace(/:$/, ""),
                    hostname: n.hostname,
                    port: +n.port,
                    pathname: n.pathname.replace(/^(?!\/)/, "/"),
                    search: r ? n.search : i(n.search || ""),
                    hash: (n.hash || "").replace(/^#/, ""),
                    host: n.host || window.location.host
                }
            }
            ,
            t.format = function(e) {
                return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":" + e.port : "")) + (e.pathname || "") + (e.search ? "?" + r(e.search || "") : "") + (e.hash ? "#" + e.hash : "")
            }
        },
        12: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.Renderer = r;
            var d = n(22)
              , u = (function(e) {
                {
                    if (e && e.__esModule)
                        return e;
                    var t = {};
                    if (null != e)
                        for (var n in e)
                            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e,
                    t
                }
            }
            )(n(0));
            function r(e) {
                var t = this
                  , n = e.url
                  , r = e.config
                  , i = e.id
                  , o = e.callback
                  , a = e.loaded;
                this.url = n,
                this.config = r,
                this.handlers = {},
                this.id = i,
                this.loaded = a,
                this.cmd = [],
                this.push = function(e) {
                    "function" == typeof e ? t.loaded ? e.call() : t.cmd.push(e) : u.logError("Commands given to Renderer.push must be wrapped in a function")
                }
                ,
                this.callback = o || function() {
                    t.loaded = !0,
                    t.process()
                }
                ,
                (0,
                d.loadScript)(n, this.callback, !0)
            }
            r.install = function(e) {
                return new r({
                    url: e.url,
                    config: e.config,
                    id: e.id,
                    callback: e.callback,
                    loaded: e.loaded
                })
            }
            ,
            r.prototype.getConfig = function() {
                return this.config
            }
            ,
            r.prototype.setRender = function(e) {
                this.render = e
            }
            ,
            r.prototype.setEventHandlers = function(e) {
                this.handlers = e
            }
            ,
            r.prototype.handleVideoEvent = function(e) {
                var t = e.id
                  , n = e.eventName;
                "function" == typeof this.handlers[n] && this.handlers[n](),
                u.logMessage("Prebid Renderer event for id " + t + " type " + n)
            }
            ,
            r.prototype.process = function() {
                for (; 0 < this.cmd.length; )
                    try {
                        this.cmd.shift().call()
                    } catch (e) {
                        u.logError("Error processing Renderer command: ", e)
                    }
            }
        },
        13: function(e, t) {
            var n = e.exports = {
                version: "2.5.7"
            };
            "number" == typeof __e && (__e = n)
        },
        14: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.userSync = void 0;
            var i = function(e, t) {
                if (Array.isArray(e))
                    return e;
                if (Symbol.iterator in Object(e))
                    return (function(e, t) {
                        var n = []
                          , r = !0
                          , i = !1
                          , o = void 0;
                        try {
                            for (var a, d = e[Symbol.iterator](); !(r = (a = d.next()).done) && (n.push(a.value),
                            !t || n.length !== t); r = !0)
                                ;
                        } catch (e) {
                            i = !0,
                            o = e
                        } finally {
                            try {
                                !r && d.return && d.return()
                            } finally {
                                if (i)
                                    throw o
                            }
                        }
                        return n
                    }
                    )(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
              , s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ;
            t.newUserSync = a;
            var r, c = (function(e) {
                {
                    if (e && e.__esModule)
                        return e;
                    var t = {};
                    if (null != e)
                        for (var n in e)
                            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e,
                    t
                }
            }
            )(n(0)), f = n(3), o = n(5), l = (r = o) && r.__esModule ? r : {
                default: r
            };
            function a(e) {
                var t = {}
                  , o = {
                    image: [],
                    iframe: []
                }
                  , n = !1
                  , a = {}
                  , d = {
                    image: !1,
                    iframe: !1
                }
                  , u = e.config;
                function r() {
                    if (u.syncEnabled && e.browserSupportsCookies && !n) {
                        try {
                            !(function() {
                                if (!u.pixelEnabled && !d.image)
                                    return;
                                c.shuffle(o.image).forEach((function(e) {
                                    var t = i(e, 2)
                                      , n = t[0]
                                      , r = t[1];
                                    c.logMessage("Invoking image pixel user sync for bidder: " + n),
                                    c.triggerPixel(r)
                                }
                                ))
                            }
                            )(),
                            (function() {
                                if (!u.iframeEnabled && !d.iframe)
                                    return;
                                c.shuffle(o.iframe).forEach((function(e) {
                                    var t = i(e, 2)
                                      , n = t[0]
                                      , r = t[1];
                                    c.logMessage("Invoking iframe user sync for bidder: " + n),
                                    c.insertUserSyncIframe(r)
                                }
                                ))
                            }
                            )()
                        } catch (e) {
                            return c.logError("Error firing user syncs", e)
                        }
                        o = {
                            image: [],
                            iframe: []
                        },
                        n = !0
                    }
                }
                return f.config.getConfig("userSync", (function(e) {
                    u = s(u, e.userSync)
                }
                )),
                t.registerSync = function(e, t, n) {
                    if (!u.syncEnabled || !c.isArray(o[e]))
                        return c.logWarn('User sync type "' + e + '" not supported');
                    if (!t)
                        return c.logWarn("Bidder is required for registering sync");
                    if (Number(a[t]) >= u.syncsPerBidder)
                        return c.logWarn('Number of user syncs exceeded for "' + t + '"');
                    if (u.filterSettings) {
                        if (function(e, t) {
                            var n = u.filterSettings;
                            if (function(e, t) {
                                if (e.all && e[t])
                                    return c.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.' + t + '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.'),
                                    !1;
                                var n = e.all ? e.all : e[t]
                                  , r = e.all ? "all" : t;
                                if (!n)
                                    return !1;
                                var i = n.filter
                                  , o = n.bidders;
                                if (i && "include" !== i && "exclude" !== i)
                                    return c.logWarn('UserSync "filterSettings.' + r + ".filter\" setting '" + i + "' is not a valid option; use either 'include' or 'exclude'."),
                                    !1;
                                return !!("*" === o || Array.isArray(o) && 0 < o.length && o.every((function(e) {
                                    return c.isStr(e) && "*" !== e
                                }
                                ))) || (c.logWarn('Detected an invalid setup in userSync "filterSettings.' + r + ".bidders\"; use either '*' (to represent all bidders) or an array of bidders."),
                                !1)
                            }(n, e)) {
                                d[e] = !0;
                                var r = n.all ? n.all : n[e]
                                  , i = "*" === r.bidders ? [t] : r.bidders
                                  , o = r.filter || "include"
                                  , a = {
                                    include: function(e, t) {
                                        return !(0,
                                        l.default)(e, t)
                                    },
                                    exclude: function(e, t) {
                                        return (0,
                                        l.default)(e, t)
                                    }
                                };
                                return a[o](i, t)
                            }
                            return !1
                        }(e, t))
                            return c.logWarn("Bidder '" + t + "' is not permitted to register their userSync " + e + " pixels as per filterSettings config.")
                    } else if (u.enabledBidders && u.enabledBidders.length && u.enabledBidders.indexOf(t) < 0)
                        return c.logWarn('Bidder "' + t + '" not permitted to register their userSync pixels.');
                    var r, i;
                    o[e].push([t, n]),
                    (r = a)[i = t] ? r[i] += 1 : r[i] = 1,
                    a = r
                }
                ,
                t.syncUsers = function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                    if (e)
                        return setTimeout(r, Number(e));
                    r()
                }
                ,
                t.triggerUserSyncs = function() {
                    u.enableOverride && t.syncUsers()
                }
                ,
                t
            }
            f.config.setDefaults({
                userSync: {
                    syncEnabled: !0,
                    pixelEnabled: !0,
                    syncsPerBidder: 5,
                    syncDelay: 3e3
                }
            });
            var d = !c.isSafariBrowser() && c.cookiesAreEnabled();
            t.userSync = a({
                config: f.config.getConfig("userSync"),
                browserSupportsCookies: d
            })
        },
        15: function(e, t, n) {
            var v = n(19)
              , y = n(13)
              , m = n(32)
              , b = n(47)
              , h = n(54)
              , S = "prototype"
              , E = function(e, t, n) {
                var r, i, o, a = e & E.F, d = e & E.G, u = e & E.S, s = e & E.P, c = e & E.B, f = e & E.W, l = d ? y : y[t] || (y[t] = {}), g = l[S], p = d ? v : u ? v[t] : (v[t] || {})[S];
                for (r in d && (n = t),
                n)
                    (i = !a && p && void 0 !== p[r]) && h(l, r) || (o = i ? p[r] : n[r],
                    l[r] = d && "function" != typeof p[r] ? n[r] : c && i ? m(o, v) : f && p[r] == o ? (function(r) {
                        var e = function(e, t, n) {
                            if (this instanceof r) {
                                switch (arguments.length) {
                                case 0:
                                    return new r;
                                case 1:
                                    return new r(e);
                                case 2:
                                    return new r(e,t)
                                }
                                return new r(e,t,n)
                            }
                            return r.apply(this, arguments)
                        };
                        return e[S] = r[S],
                        e
                    }
                    )(o) : s && "function" == typeof o ? m(Function.call, o) : o,
                    s && ((l.virtual || (l.virtual = {}))[r] = o,
                    e & E.R && g && !g[r] && b(g, r, o)))
            };
            E.F = 1,
            E.G = 2,
            E.S = 4,
            E.P = 8,
            E.B = 16,
            E.W = 32,
            E.U = 64,
            E.R = 128,
            e.exports = E
        },
        16: function(e, t) {
            e.exports = function(e) {
                return "object" == typeof e ? null !== e : "function" == typeof e
            }
        },
        17: function(e, t, n) {
            "use strict";
            var o = n(0);
            function r(e, t) {
                var n = t && t.bidId || o.getUniqueIdentifierStr()
                  , r = t && t.src || "client"
                  , i = e || 0;
                this.bidderCode = t && t.bidder || "",
                this.width = 0,
                this.height = 0,
                this.statusMessage = (function() {
                    switch (i) {
                    case 0:
                        return "Pending";
                    case 1:
                        return "Bid available";
                    case 2:
                        return "Bid returned empty or error response";
                    case 3:
                        return "Bid timed out"
                    }
                }
                )(),
                this.adId = n,
                this.mediaType = "banner",
                this.source = r,
                this.getStatusCode = function() {
                    return i
                }
                ,
                this.getSize = function() {
                    return this.width + "x" + this.height
                }
            }
            t.createBid = function(e, t) {
                return new r(e,t)
            }
        },
        18: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.hasNonNativeBidder = t.nativeBidder = t.nativeAdUnit = t.NATIVE_TARGETING_KEYS = t.NATIVE_KEYS = t.nativeAdapters = void 0;
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ;
            t.processNativeAdUnitParams = function(e) {
                if (e && e.type && (t = e.type,
                t && (0,
                d.default)(Object.keys(c), t) || ((0,
                a.logError)(t + " nativeParam is not supported"),
                0)))
                    return c[e.type];
                var t;
                return e
            }
            ,
            t.nativeBidIsValid = function(t, e) {
                var n = (0,
                a.getBidRequest)(t.adId, e);
                if (!n)
                    return !1;
                if (!(0,
                a.deepAccess)(t, "native.clickUrl"))
                    return !1;
                if ((0,
                a.deepAccess)(t, "native.image") && (!(0,
                a.deepAccess)(t, "native.image.height") || !(0,
                a.deepAccess)(t, "native.image.width")))
                    return !1;
                if ((0,
                a.deepAccess)(t, "native.icon") && (!(0,
                a.deepAccess)(t, "native.icon.height") || !(0,
                a.deepAccess)(t, "native.icon.width")))
                    return !1;
                var r = n.nativeParams;
                if (!r)
                    return !0;
                var i = Object.keys(r).filter((function(e) {
                    return r[e].required
                }
                ))
                  , o = Object.keys(t.native).filter((function(e) {
                    return t.native[e]
                }
                ));
                return i.every((function(e) {
                    return (0,
                    d.default)(o, e)
                }
                ))
            }
            ,
            t.fireNativeTrackers = function(e, t) {
                var n = void 0;
                "click" === e.action ? n = t.native && t.native.clickTrackers : (n = t.native && t.native.impressionTrackers,
                t.native && t.native.javascriptTrackers && (0,
                a.insertHtmlIntoIframe)(t.native.javascriptTrackers));
                (n || []).forEach(a.triggerPixel)
            }
            ,
            t.getNativeTargeting = function(r) {
                var i = {};
                return Object.keys(r.native).forEach((function(e) {
                    var t = s[e]
                      , n = r.native[e];
                    "object" === (void 0 === n ? "undefined" : o(n)) && n.url && (n = n.url),
                    t && (i[t] = n)
                }
                )),
                i
            }
            ;
            var r, a = n(0), i = n(5), d = (r = i) && r.__esModule ? r : {
                default: r
            };
            var u = t.nativeAdapters = []
              , s = t.NATIVE_KEYS = {
                title: "hb_native_title",
                body: "hb_native_body",
                sponsoredBy: "hb_native_brand",
                image: "hb_native_image",
                icon: "hb_native_icon",
                clickUrl: "hb_native_linkurl",
                cta: "hb_native_cta"
            }
              , c = (t.NATIVE_TARGETING_KEYS = Object.keys(s).map((function(e) {
                return s[e]
            }
            )),
            {
                image: {
                    image: {
                        required: !0
                    },
                    title: {
                        required: !0
                    },
                    sponsoredBy: {
                        required: !0
                    },
                    clickUrl: {
                        required: !0
                    },
                    body: {
                        required: !1
                    },
                    icon: {
                        required: !1
                    }
                }
            });
            t.nativeAdUnit = function(e) {
                var t = "native" === e.mediaType
                  , n = (0,
                a.deepAccess)(e, "mediaTypes.native");
                return t || n
            }
            ;
            var f = t.nativeBidder = function(e) {
                return (0,
                d.default)(u, e.bidder)
            }
            ;
            t.hasNonNativeBidder = function(e) {
                return e.bids.filter((function(e) {
                    return !f(e)
                }
                )).length
            }
        },
        19: function(e, t) {
            var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = n)
        },
        2: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.NATIVE = "native",
            t.VIDEO = "video",
            t.BANNER = "banner"
        },
        20: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
              , u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ;
            t.createHook = function(r, i, e) {
                var d = [{
                    fn: i,
                    priority: 0
                }]
                  , o = {
                    sync: function() {
                        for (var t = this, e = arguments.length, n = Array(e), r = 0; r < e; r++)
                            n[r] = arguments[r];
                        d.forEach((function(e) {
                            e.fn.apply(t, n)
                        }
                        ))
                    },
                    asyncSeries: function() {
                        for (var o = this, e = arguments.length, t = Array(e), n = 0; n < e; n++)
                            t[n] = arguments[n];
                        var a = 0;
                        return d[a].fn.apply(this, t.concat((function e() {
                            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                                n[r] = arguments[r];
                            var i = d[++a];
                            if ("object" === (void 0 === i ? "undefined" : u(i)) && "function" == typeof i.fn)
                                return i.fn.apply(o, n.concat(e))
                        }
                        )))
                    }
                };
                if (!o[r])
                    throw "invalid hook type";
                var t = {
                    addHook: function(e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 10;
                        "function" == typeof e && (d.push({
                            fn: e,
                            priority: t
                        }),
                        d.sort((function(e, t) {
                            return t.priority - e.priority
                        }
                        )))
                    },
                    removeHook: function(t) {
                        d = d.filter((function(e) {
                            return e.fn === i || e.fn !== t
                        }
                        ))
                    },
                    hasHook: function(t) {
                        return d.some((function(e) {
                            return e.fn === t
                        }
                        ))
                    }
                };
                "string" == typeof e && (s[e] = t);
                return a((function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return 1 !== d.length || d[0].fn !== i ? o[r].apply(this, t) : i.apply(this, t)
                }
                ), t)
            }
            ;
            var s = t.hooks = {}
        },
        203: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.store = function(e, t) {
                var n = {
                    puts: e.map(a)
                };
                (0,
                i.ajax)(o.config.getConfig("cache.url"), (r = t,
                {
                    success: function(e) {
                        var t = void 0;
                        try {
                            t = JSON.parse(e).responses
                        } catch (e) {
                            return void r(e, [])
                        }
                        t ? r(null, t) : r(new Error("The cache server didn't respond with a responses property."), [])
                    },
                    error: function(e, t) {
                        r(new Error("Error storing video ad in the cache: " + e + ": " + JSON.stringify(t)), [])
                    }
                }), JSON.stringify(n), {
                    contentType: "text/plain",
                    withCredentials: !0
                });
                var r
            }
            ,
            t.getCacheUrl = function(e) {
                return o.config.getConfig("cache.url") + "?uuid=" + e
            }
            ;
            var i = n(7)
              , o = n(3);
            function a(e) {
                var t, n;
                return {
                    type: "xml",
                    value: e.vastXml ? e.vastXml : (t = e.vastUrl,
                    n = e.vastImpUrl,
                    '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA[' + t + "]]></VASTAdTagURI>\n        <Impression>" + (n ? "<![CDATA[" + n + "]]>" : "") + "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")
                }
            }
        },
        21: function(e, t, n) {
            n(104),
            e.exports = n(13).Array.findIndex
        },
        22: function(e, t, n) {
            "use strict";
            var r, i = n(5), o = (r = i) && r.__esModule ? r : {
                default: r
            }, a = (function(e) {
                {
                    if (e && e.__esModule)
                        return e;
                    var t = {};
                    if (null != e)
                        for (var n in e)
                            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e,
                    t
                }
            }
            )(n(0));
            var d = {}
              , u = ["criteo"];
            function s(e, t) {
                var n = document.createElement("script");
                n.type = "text/javascript",
                n.async = !0,
                t && "function" == typeof t && (n.readyState ? n.onreadystatechange = function() {
                    "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null,
                    t())
                }
                : n.onload = function() {
                    t()
                }
                ),
                n.src = e;
                var r = document.getElementsByTagName("head");
                (r = r.length ? r : document.getElementsByTagName("body")).length && (r = r[0]).insertBefore(n, r.firstChild)
            }
            t.loadExternalScript = function(e, t) {
                if (t && e)
                    if ((0,
                    o.default)(u, t)) {
                        if (!d[e]) {
                            a.logWarn("module " + t + " is loading external JavaScript");
                            var n = document.createElement("script");
                            n.type = "text/javascript",
                            n.async = !0,
                            n.src = e,
                            a.insertElement(n),
                            d[e] = !0
                        }
                    } else
                        a.logError(t + " not whitelisted for loading external JavaScript");
                else
                    a.logError("cannot load external script without url and moduleCode")
            }
            ,
            t.loadScript = function(t, e, n) {
                t ? n ? d[t] ? e && "function" == typeof e && (d[t].loaded ? e() : d[t].callbacks.push(e)) : (d[t] = {
                    loaded: !1,
                    callbacks: []
                },
                e && "function" == typeof e && d[t].callbacks.push(e),
                s(t, (function() {
                    d[t].loaded = !0;
                    try {
                        for (var e = 0; e < d[t].callbacks.length; e++)
                            d[t].callbacks[e]()
                    } catch (e) {
                        a.logError("Error executing callback", "adloader.js:loadScript", e)
                    }
                }
                ))) : s(t, e) : a.logError("Error attempting to request empty URL", "adloader.js:loadScript")
            }
        },
        23: function(e, t, n) {
            e.exports = !n(33)((function() {
                return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }
            ))
        },
        24: function(e, t) {
            var n = {}.toString;
            e.exports = function(e) {
                return n.call(e).slice(8, -1)
            }
        },
        25: function(e, t) {
            e.exports = function(e) {
                if (null == e)
                    throw TypeError("Can't call method on  " + e);
                return e
            }
        },
        26: function(e, t, n) {
            var r = n(58)("wks")
              , i = n(60)
              , o = n(19).Symbol
              , a = "function" == typeof o;
            (e.exports = function(e) {
                return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e))
            }
            ).store = r
        },
        27: function(e, t) {
            e.exports = function() {}
        },
        28: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = function(e) {
                var t = e;
                return {
                    callBids: function() {},
                    setBidderCode: function(e) {
                        t = e
                    },
                    getBidderCode: function() {
                        return t
                    }
                }
            }
        },
        29: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.auctionManager = void 0,
            t.newAuctionManager = u;
            var r, i = n(0), s = n(42), o = n(10), a = (r = o) && r.__esModule ? r : {
                default: r
            };
            var d = n(4);
            function u() {
                var u = []
                  , r = {};
                return r.addWinningBid = function(t) {
                    var e = (0,
                    a.default)(u, (function(e) {
                        return e.getAuctionId() === t.auctionId
                    }
                    ));
                    e ? e.addWinningBid(t) : utils.logWarn("Auction not found when adding winning bid")
                }
                ,
                r.getAllWinningBids = function() {
                    return u.map((function(e) {
                        return e.getWinningBids()
                    }
                    )).reduce(i.flatten, [])
                }
                ,
                r.getBidsRequested = function() {
                    return u.map((function(e) {
                        return e.getBidRequests()
                    }
                    )).reduce(i.flatten, [])
                }
                ,
                r.getBidsReceived = function() {
                    return u.map((function(e) {
                        if (e.getAuctionStatus() === s.AUCTION_COMPLETED)
                            return e.getBidsReceived()
                    }
                    )).reduce(i.flatten, []).filter((function(e) {
                        return e
                    }
                    ))
                }
                ,
                r.getAdUnits = function() {
                    return u.map((function(e) {
                        return e.getAdUnits()
                    }
                    )).reduce(i.flatten, [])
                }
                ,
                r.getAdUnitCodes = function() {
                    return u.map((function(e) {
                        return e.getAdUnitCodes()
                    }
                    )).reduce(i.flatten, []).filter(i.uniques)
                }
                ,
                r.createAuction = function(e) {
                    var t, n = e.adUnits, r = e.adUnitCodes, i = e.callback, o = e.cbTimeout, a = e.labels, d = (0,
                    s.newAuction)({
                        adUnits: n,
                        adUnitCodes: r,
                        callback: i,
                        cbTimeout: o,
                        labels: a
                    });
                    return t = d,
                    u.push(t),
                    d
                }
                ,
                r.findBidByAdId = function(t) {
                    return (0,
                    a.default)(u.map((function(e) {
                        return e.getBidsReceived()
                    }
                    )).reduce(i.flatten, []), (function(e) {
                        return e.adId === t
                    }
                    ))
                }
                ,
                r.getStandardBidderAdServerTargeting = function() {
                    return (0,
                    s.getStandardBidderSettings)()[d.JSON_MAPPING.ADSERVER_TARGETING]
                }
                ,
                r.setStatusForBids = function(e, t) {
                    var n = r.findBidByAdId(e);
                    n && (n.status = t)
                }
                ,
                r
            }
            t.auctionManager = u()
        },
        3: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.config = t.RANDOM = void 0;
            var u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
              , s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ;
            t.newConfig = d;
            var r = n(31)
              , c = o(n(10))
              , f = o(n(5))
              , i = n(20);
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = n(0)
              , g = !1
              , p = 3e3
              , v = window.location.origin
              , y = 100
              , m = !0
              , b = !1
              , h = 200
              , a = t.RANDOM = "random"
              , S = {};
            S[a] = !0,
            S.fixed = !0;
            var E = a
              , A = {
                LOW: "low",
                MEDIUM: "medium",
                HIGH: "high",
                AUTO: "auto",
                DENSE: "dense",
                CUSTOM: "custom"
            }
              , T = "*";
            function d() {
                var o = []
                  , a = void 0
                  , d = void 0;
                function e() {
                    function i(t) {
                        return (0,
                        c.default)(Object.keys(A), (function(e) {
                            return t === A[e]
                        }
                        ))
                    }
                    function o(e) {
                        if (!e)
                            return l.logError("Prebid Error: no value passed to `setPriceGranularity()`"),
                            !1;
                        if ("string" == typeof e)
                            i(e) || l.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");
                        else if ("object" === (void 0 === e ? "undefined" : s(e)) && !(0,
                        r.isValidPriceConfig)(e))
                            return l.logError("Invalid custom price value passed to `setPriceGranularity()`"),
                            !1;
                        return !0
                    }
                    a = {},
                    d = {
                        _debug: g,
                        get debug() {
                            return this._debug
                        },
                        set debug(e) {
                            this._debug = e
                        },
                        _bidderTimeout: p,
                        get bidderTimeout() {
                            return this._bidderTimeout
                        },
                        set bidderTimeout(e) {
                            this._bidderTimeout = e
                        },
                        _publisherDomain: v,
                        get publisherDomain() {
                            return this._publisherDomain
                        },
                        set publisherDomain(e) {
                            this._publisherDomain = e
                        },
                        _cookieSyncDelay: y,
                        get cookieSyncDelay() {
                            return pbjs.cookieSyncDelay || this._cookieSyncDelay
                        },
                        set cookieSyncDelay(e) {
                            this._cookieSyncDelay = e
                        },
                        _priceGranularity: A.MEDIUM,
                        set priceGranularity(e) {
                            o(e) && ("string" == typeof e ? this._priceGranularity = i(e) ? e : A.MEDIUM : "object" === (void 0 === e ? "undefined" : s(e)) && (this._customPriceBucket = e,
                            this._priceGranularity = A.CUSTOM,
                            l.logMessage("Using custom price granularity")))
                        },
                        get priceGranularity() {
                            return this._priceGranularity
                        },
                        _customPriceBucket: {},
                        get customPriceBucket() {
                            return this._customPriceBucket
                        },
                        _mediaTypePriceGranularity: {},
                        get mediaTypePriceGranularity() {
                            return this._mediaTypePriceGranularity
                        },
                        set mediaTypePriceGranularity(n) {
                            var r = this;
                            this._mediaTypePriceGranularity = Object.keys(n).reduce((function(e, t) {
                                return o(n[t]) ? "string" == typeof n ? e[t] = i(n[t]) ? n[t] : r._priceGranularity : "object" === (void 0 === n ? "undefined" : s(n)) && (e[t] = n[t],
                                l.logMessage("Using custom price granularity for " + t)) : l.logWarn("Invalid price granularity for media type: " + t),
                                e
                            }
                            ), {})
                        },
                        _sendAllBids: m,
                        get enableSendAllBids() {
                            return this._sendAllBids
                        },
                        set enableSendAllBids(e) {
                            this._sendAllBids = e
                        },
                        _bidderSequence: E,
                        get bidderSequence() {
                            return this._bidderSequence
                        },
                        set bidderSequence(e) {
                            S[e] ? this._bidderSequence = e : l.logWarn("Invalid order: " + e + ". Bidder Sequence was not set.")
                        },
                        _timoutBuffer: h,
                        get timeoutBuffer() {
                            return this._timoutBuffer
                        },
                        set timeoutBuffer(e) {
                            this._timoutBuffer = e
                        },
                        _disableAjaxTimeout: b,
                        get disableAjaxTimeout() {
                            return this._disableAjaxTimeout
                        },
                        set disableAjaxTimeout(e) {
                            this._disableAjaxTimeout = e
                        }
                    }
                }
                var t = (0,
                i.createHook)("asyncSeries", (function(n) {
                    if ("object" === (void 0 === n ? "undefined" : s(n))) {
                        var i, t, e = Object.keys(n), r = {};
                        e.forEach((function(e) {
                            var t = n[e];
                            "object" === s(a[e]) && "object" === (void 0 === t ? "undefined" : s(t)) && (t = u({}, a[e], t)),
                            r[e] = d[e] = t
                        }
                        )),
                        i = r,
                        t = Object.keys(i),
                        o.filter((function(e) {
                            return (0,
                            f.default)(t, e.topic)
                        }
                        )).forEach((function(e) {
                            var t, n, r;
                            e.callback((t = {},
                            n = e.topic,
                            r = i[e.topic],
                            n in t ? Object.defineProperty(t, n, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[n] = r,
                            t))
                        }
                        )),
                        o.filter((function(e) {
                            return e.topic === T
                        }
                        )).forEach((function(e) {
                            return e.callback(i)
                        }
                        ))
                    } else
                        l.logError("setConfig options must be an object")
                }
                ));
                return e(),
                {
                    getConfig: function() {
                        if (arguments.length <= 1 && "function" != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
                            var e = arguments.length <= 0 ? void 0 : arguments[0];
                            return e ? l.deepAccess(d, e) : d
                        }
                        return function(e, t) {
                            var n = t;
                            return "string" != typeof e && (n = e,
                            e = T),
                            "function" == typeof n ? (o.push({
                                topic: e,
                                callback: n
                            }),
                            function() {
                                o.splice(o.indexOf(t), 1)
                            }
                            ) : void l.logError("listener must be a function")
                        }
                        .apply(void 0, arguments)
                    },
                    setConfig: t,
                    setDefaults: function(e) {
                        "object" === (void 0 === a ? "undefined" : s(a)) ? (u(a, e),
                        u(d, e)) : l.logError("defaults must be an object")
                    },
                    resetConfig: e
                }
            }
            t.config = d()
        },
        30: function(zr, Ar) {
            var Br;
            Br = (function() {
                return this
            }
            )();
            try {
                Br = Br || Function("return this")() || eval("this")
            } catch (e) {
                "object" == typeof window && (Br = window)
            }
            zr.exports = Br
        },
        31: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.isValidPriceConfig = t.getPriceBucketString = void 0;
            var r, i = n(10), v = (r = i) && r.__esModule ? r : {
                default: r
            };
            var o = n(0)
              , y = 2
              , a = {
                buckets: [{
                    min: 0,
                    max: 5,
                    increment: .5
                }]
            }
              , d = {
                buckets: [{
                    min: 0,
                    max: 20,
                    increment: .1
                }]
            }
              , u = {
                buckets: [{
                    min: 0,
                    max: 20,
                    increment: .01
                }]
            }
              , s = {
                buckets: [{
                    min: 0,
                    max: 3,
                    increment: .01
                }, {
                    min: 3,
                    max: 8,
                    increment: .05
                }, {
                    min: 8,
                    max: 20,
                    increment: .5
                }]
            }
              , c = {
                buckets: [{
                    min: 0,
                    max: 5,
                    increment: .05
                }, {
                    min: 5,
                    max: 10,
                    increment: .1
                }, {
                    min: 10,
                    max: 20,
                    increment: .5
                }]
            };
            function f(n, e, r) {
                var i = "";
                if (!m(e))
                    return i;
                var t, o, a, d, u, s, c, f, l, g = e.buckets.reduce((function(e, t) {
                    return e.max > t.max ? e : t
                }
                ), {
                    max: 0
                }), p = (0,
                v.default)(e.buckets, (function(e) {
                    if (n > g.max * r) {
                        var t = e.precision;
                        void 0 === t && (t = y),
                        i = (e.max * r).toFixed(t)
                    } else if (n <= e.max * r && n >= e.min * r)
                        return e
                }
                ));
                return p && (t = n,
                a = r,
                d = void 0 !== (o = p).precision ? o.precision : y,
                u = o.increment * a,
                s = o.min * a,
                c = Math.pow(10, d + 2),
                f = (t * c - s * c) / (u * c),
                l = Math.floor(f) * u + s,
                i = (l = Number(l.toFixed(10))).toFixed(d)),
                i
            }
            function m(e) {
                if (o.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets))
                    return !1;
                var t = !0;
                return e.buckets.forEach((function(e) {
                    void 0 !== e.min && e.max && e.increment || (t = !1)
                }
                )),
                t
            }
            t.getPriceBucketString = function(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1
                  , r = parseFloat(e);
                return isNaN(r) && (r = ""),
                {
                    low: "" === r ? "" : f(e, a, n),
                    med: "" === r ? "" : f(e, d, n),
                    high: "" === r ? "" : f(e, u, n),
                    auto: "" === r ? "" : f(e, c, n),
                    dense: "" === r ? "" : f(e, s, n),
                    custom: "" === r ? "" : f(e, t, n)
                }
            }
            ,
            t.isValidPriceConfig = m
        },
        32: function(e, t, n) {
            var o = n(46);
            e.exports = function(r, i, e) {
                if (o(r),
                void 0 === i)
                    return r;
                switch (e) {
                case 1:
                    return function(e) {
                        return r.call(i, e)
                    }
                    ;
                case 2:
                    return function(e, t) {
                        return r.call(i, e, t)
                    }
                    ;
                case 3:
                    return function(e, t, n) {
                        return r.call(i, e, t, n)
                    }
                }
                return function() {
                    return r.apply(i, arguments)
                }
            }
        },
        33: function(e, t) {
            e.exports = function(e) {
                try {
                    return !!e()
                } catch (e) {
                    return !0
                }
            }
        },
        34: function(e, t, n) {
            var h = n(32)
              , S = n(35)
              , E = n(55)
              , A = n(36)
              , r = n(56);
            e.exports = function(f, e) {
                var l = 1 == f
                  , g = 2 == f
                  , p = 3 == f
                  , v = 4 == f
                  , y = 6 == f
                  , m = 5 == f || y
                  , b = e || r;
                return function(e, t, n) {
                    for (var r, i, o = E(e), a = S(o), d = h(t, n, 3), u = A(a.length), s = 0, c = l ? b(e, u) : g ? b(e, 0) : void 0; s < u; s++)
                        if ((m || s in a) && (i = d(r = a[s], s, o),
                        f))
                            if (l)
                                c[s] = i;
                            else if (i)
                                switch (f) {
                                case 3:
                                    return !0;
                                case 5:
                                    return r;
                                case 6:
                                    return s;
                                case 2:
                                    c.push(r)
                                }
                            else if (v)
                                return !1;
                    return y ? -1 : p || v ? v : c
                }
            }
        },
        35: function(e, t, n) {
            var r = n(24);
            e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
                return "String" == r(e) ? e.split("") : Object(e)
            }
        },
        36: function(e, t, n) {
            var r = n(37)
              , i = Math.min;
            e.exports = function(e) {
                return 0 < e ? i(r(e), 9007199254740991) : 0
            }
        },
        37: function(e, t) {
            var n = Math.ceil
              , r = Math.floor;
            e.exports = function(e) {
                return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e)
            }
        },
        38: function(e, t, n) {
            var r = n(24);
            e.exports = Array.isArray || function(e) {
                return "Array" == r(e)
            }
        },
        39: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.adunitCounter = void 0;
            var r = n(0)
              , i = {};
            var o = {
                incrementCounter: function(e) {
                    return i[e] = i[e] || {},
                    i[e].counter = (0,
                    r.deepAccess)(i, e + ".counter") + 1 || 1,
                    i[e].counter
                },
                getCounter: function(e) {
                    return (0,
                    r.deepAccess)(i, e + ".counter") || 0
                }
            };
            t.adunitCounter = o
        },
        4: function(e, t) {
            e.exports = {
                JSON_MAPPING: {
                    PL_CODE: "code",
                    PL_SIZE: "sizes",
                    PL_BIDS: "bids",
                    BD_BIDDER: "bidder",
                    BD_ID: "paramsd",
                    BD_PL_ID: "placementId",
                    ADSERVER_TARGETING: "adserverTargeting",
                    BD_SETTING_STANDARD: "standard"
                },
                REPO_AND_VERSION: "prebid_prebid_1.21.0",
                DEBUG_MODE: "pbjs_debug",
                STATUS: {
                    GOOD: 1,
                    NO_BID: 2
                },
                CB: {
                    TYPE: {
                        ALL_BIDS_BACK: "allRequestedBidsBack",
                        AD_UNIT_BIDS_BACK: "adUnitBidsBack",
                        BID_WON: "bidWon",
                        REQUEST_BIDS: "requestBids"
                    }
                },
                EVENTS: {
                    AUCTION_INIT: "auctionInit",
                    AUCTION_END: "auctionEnd",
                    BID_ADJUSTMENT: "bidAdjustment",
                    BID_TIMEOUT: "bidTimeout",
                    BID_REQUESTED: "bidRequested",
                    BID_RESPONSE: "bidResponse",
                    BID_WON: "bidWon",
                    BIDDER_DONE: "bidderDone",
                    SET_TARGETING: "setTargeting",
                    REQUEST_BIDS: "requestBids",
                    ADD_AD_UNITS: "addAdUnits",
                    AD_RENDER_FAILED: "adRenderFailed"
                },
                AD_RENDER_FAILED_REASON: {
                    PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocuemnt",
                    NO_AD: "noAd",
                    EXCEPTION: "exception",
                    CANNOT_FIND_AD: "cannotFindAd",
                    MISSING_DOC_OR_ADID: "missingDocOrAdid"
                },
                EVENT_ID_PATHS: {
                    bidWon: "adUnitCode"
                },
                GRANULARITY_OPTIONS: {
                    LOW: "low",
                    MEDIUM: "medium",
                    HIGH: "high",
                    AUTO: "auto",
                    DENSE: "dense",
                    CUSTOM: "custom"
                },
                TARGETING_KEYS: ["hb_bidder", "hb_adid", "hb_pb", "hb_size", "hb_deal", "hb_source", "hb_format"],
                S2S: {
                    SRC: "s2s",
                    DEFAULT_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
                    SYNCED_BIDDERS_KEY: "pbjsSyncs"
                }
            }
        },
        40: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.getGlobal = function() {
                return window.pbjs
            }
            ,
            window.pbjs = window.pbjs || {},
            window.pbjs.cmd = window.pbjs.cmd || [],
            window.pbjs.que = window.pbjs.que || []
        },
        41: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.targeting = t.isBidNotExpired = t.RENDERED = t.BID_TARGETING_SET = void 0;
            var h = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ;
            t.getHighestCpmBidsFromBidPool = B,
            t.newTargeting = c;
            var r, S = n(0), E = n(3), A = n(18), i = n(29), o = n(5), T = (r = o) && r.__esModule ? r : {
                default: r
            };
            function I(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            var _ = n(0)
              , C = n(4)
              , w = []
              , a = t.BID_TARGETING_SET = "targetingSet"
              , d = t.RENDERED = "rendered"
              , O = 20
              , u = (t.isBidNotExpired = function(e) {
                return e.responseTimestamp + 1e3 * e.ttl + 1e3 > (0,
                S.timestamp)()
            }
            ,
            function(e) {
                return e && (e.status && !(0,
                T.default)([a, d], e.status) || !e.status)
            }
            );
            function B(e, n) {
                var r = []
                  , i = (0,
                S.groupBy)(e, "adUnitCode");
                return Object.keys(i).forEach((function(e) {
                    var t = (0,
                    S.groupBy)(i[e], "bidderCode");
                    Object.keys(t).forEach((function(e) {
                        return r.push(t[e].reduce(n, s()))
                    }
                    ))
                }
                )),
                r
            }
            function s(e) {
                return {
                    adUnitCode: e,
                    cpm: 0,
                    adserverTargeting: {},
                    timeToRespond: 0
                }
            }
            function c(n) {
                var g = {};
                function p(e) {
                    return "string" == typeof e ? [e] : _.isArray(e) ? e : n.getAdUnitCodes() || []
                }
                function v() {
                    return B(n.getBidsReceived().filter(u).filter(t.isBidNotExpired), S.getOldestHighestCpmBid)
                }
                function y() {
                    return n.getStandardBidderAdServerTargeting().map((function(e) {
                        return e.key
                    }
                    )).concat(C.TARGETING_KEYS).filter(S.uniques)
                }
                function m(r, i, e, t) {
                    return Object.keys(i.adserverTargeting).filter(o()).forEach((function(e) {
                        var t, n;
                        r.length && r.filter((n = e,
                        function(e) {
                            return e.adUnitCode === i.adUnitCode && e.adserverTargeting[n]
                        }
                        )).forEach((t = e,
                        function(e) {
                            _.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [e.adserverTargeting[t]]),
                            e.adserverTargeting[t] = e.adserverTargeting[t].concat(i.adserverTargeting[t]).filter(S.uniques),
                            delete i.adserverTargeting[t]
                        }
                        ))
                    }
                    )),
                    r.push(i),
                    r
                }
                function o() {
                    var t = y();
                    return function(e) {
                        return -1 === t.indexOf(e)
                    }
                }
                function b(t) {
                    return I({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter(o()).map((function(e) {
                        return I({}, e.substring(0, O), [t.adserverTargeting[e]])
                    }
                    )))
                }
                return g.resetPresetTargeting = function(e) {
                    if ((0,
                    S.isGptPubadsDefined)()) {
                        var t = p(e)
                          , r = n.getAdUnits().filter((function(e) {
                            return (0,
                            T.default)(t, e.code)
                        }
                        ));
                        window.googletag.pubads().getSlots().forEach((function(n) {
                            w.forEach((function(t) {
                                r.forEach((function(e) {
                                    e.code !== n.getAdUnitPath() && e.code !== n.getSlotElementId() || n.setTargeting(t, null)
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }
                }
                ,
                g.getAllTargeting = function(e) {
                    var r, t, i, n, o, a, d, u, s, c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : v(), f = p(e), l = (a = f,
                    d = c,
                    u = g.getWinningBids(a, d),
                    s = y(),
                    u = u.map((function(t) {
                        return I({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter((function(e) {
                            return void 0 === t.sendStandardTargeting || t.sendStandardTargeting || -1 === s.indexOf(e)
                        }
                        )).map((function(e) {
                            return I({}, "hb_deal" === e ? (e + "_" + t.bidderCode).substring(0, O) : e.substring(0, O), [t.adserverTargeting[e]])
                        }
                        )))
                    }
                    ))).concat((n = f,
                    o = c,
                    o.filter((function(e) {
                        return (0,
                        T.default)(n, e.adUnitCode)
                    }
                    )).map((function(e) {
                        return h({}, e)
                    }
                    )).reduce(m, []).map(b).filter((function(e) {
                        return e
                    }
                    )))).concat(E.config.getConfig("enableSendAllBids") ? (r = f,
                    t = c,
                    i = C.TARGETING_KEYS.concat(A.NATIVE_TARGETING_KEYS),
                    B(t, S.getHighestCpm).map((function(t) {
                        if (t.adserverTargeting && r && (_.isArray(r) && (0,
                        T.default)(r, t.adUnitCode) || "string" == typeof r && t.adUnitCode === r))
                            return I({}, t.adUnitCode, (n = t,
                            i.filter((function(e) {
                                return void 0 !== t.adserverTargeting[e]
                            }
                            )).map((function(e) {
                                return I({}, (e + "_" + n.bidderCode).substring(0, O), [n.adserverTargeting[e]])
                            }
                            ))));
                        var n
                    }
                    )).filter((function(e) {
                        return e
                    }
                    ))) : []);
                    return l.map((function(t) {
                        Object.keys(t).map((function(e) {
                            t[e].map((function(e) {
                                -1 === w.indexOf(Object.keys(e)[0]) && (w = Object.keys(e).concat(w))
                            }
                            ))
                        }
                        ))
                    }
                    )),
                    l = l.map((function(e) {
                        return I({}, Object.keys(e)[0], e[Object.keys(e)[0]].map((function(e) {
                            return I({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "))
                        }
                        )).reduce((function(e, t) {
                            return h(t, e)
                        }
                        ), {}))
                    }
                    )).reduce((function(e, t) {
                        var n = Object.keys(t)[0];
                        return e[n] = h({}, e[n], t[n]),
                        e
                    }
                    ), {}),
                    f.forEach((function(e) {
                        l[e] || (l[e] = {})
                    }
                    )),
                    l
                }
                ,
                g.setTargetingForGPT = function(i, e) {
                    window.googletag.pubads().getSlots().forEach((function(r) {
                        Object.keys(i).filter(e ? e(r) : (0,
                        S.isAdUnitCodeMatchingSlot)(r)).forEach((function(n) {
                            return Object.keys(i[n]).forEach((function(t) {
                                var e = i[n][t].split(",");
                                (e = 1 < e.length ? [e] : e).map((function(e) {
                                    return _.logMessage("Attempting to set key value for slot: " + r.getSlotElementId() + " key: " + t + " value: " + e),
                                    e
                                }
                                )).forEach((function(e) {
                                    r.setTargeting(t, e)
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                ,
                g.getWinningBids = function(e) {
                    var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : v()
                      , t = p(e);
                    return n.filter((function(e) {
                        return (0,
                        T.default)(t, e.adUnitCode)
                    }
                    )).filter((function(e) {
                        return 0 < e.cpm
                    }
                    )).map((function(e) {
                        return e.adUnitCode
                    }
                    )).filter(S.uniques).map((function(t) {
                        return n.filter((function(e) {
                            return e.adUnitCode === t ? e : null
                        }
                        )).reduce(S.getHighestCpm, s(t))
                    }
                    ))
                }
                ,
                g.setTargetingForAst = function() {
                    var r = g.getAllTargeting();
                    Object.keys(r).forEach((function(n) {
                        return Object.keys(r[n]).forEach((function(e) {
                            if (_.logMessage("Attempting to set targeting for targetId: " + n + " key: " + e + " value: " + r[n][e]),
                            _.isStr(r[n][e]) || _.isArray(r[n][e])) {
                                var t = {};
                                e.search(/pt[0-9]/) < 0 ? t[e.toUpperCase()] = r[n][e] : t[e] = r[n][e],
                                window.apntag.setKeywords(n, t)
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                g.isApntagDefined = function() {
                    if (window.apntag && _.isFn(window.apntag.setKeywords))
                        return !0
                }
                ,
                g
            }
            t.targeting = c(i.auctionManager)
        },
        42: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.addBidResponse = t.AUCTION_COMPLETED = t.AUCTION_IN_PROGRESS = t.AUCTION_STARTED = void 0;
            var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
              , g = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ;
            t.newAuction = function(e) {
                var f = e.adUnits
                  , t = e.adUnitCodes
                  , n = e.callback
                  , r = e.cbTimeout
                  , i = e.labels
                  , u = f
                  , s = i
                  , l = t
                  , g = []
                  , p = []
                  , c = void 0
                  , v = w.generateUUID()
                  , y = void 0
                  , m = n
                  , b = void 0
                  , h = r
                  , o = [];
                function S(e, t) {
                    if (t && clearTimeout(b),
                    null != m) {
                        var n = [];
                        e && (w.logMessage("Auction " + v + " timedOut"),
                        d = p,
                        u = (a = g).filter((function(e) {
                            return !e.doneCbCallCount
                        }
                        )).map((function(e) {
                            return e.bidderCode
                        }
                        )).filter(A.uniques),
                        s = d.map((function(e) {
                            return e.bidder
                        }
                        )).filter(A.uniques),
                        c = u.filter((function(e) {
                            return !(0,
                            _.default)(s, e)
                        }
                        )),
                        (n = a.map((function(e) {
                            return (e.bids || []).filter((function(e) {
                                return (0,
                                _.default)(c, e.bidder)
                            }
                            ))
                        }
                        )).reduce(A.flatten, []).map((function(e) {
                            return {
                                bidId: e.bidId,
                                bidder: e.bidder,
                                adUnitCode: e.adUnitCode,
                                auctionId: e.auctionId
                            }
                        }
                        ))).length && B.emit(R.EVENTS.BID_TIMEOUT, n)),
                        B.emit(R.EVENTS.AUCTION_END, {
                            auctionId: v
                        });
                        try {
                            y = j;
                            var r = l
                              , i = p.filter(A.adUnitsFilter.bind(this, r)).reduce(q, {});
                            m.apply(pbjs, [i, e])
                        } catch (e) {
                            w.logError("Error executing bidsBackHandler", null, e)
                        } finally {
                            n.length && O.callTimedOutBidders(f, n, h);
                            var o = T.config.getConfig("userSync") || {};
                            o.enableOverride || C(o.syncDelay)
                        }
                        m = null
                    }
                    var a, d, u, s, c
                }
                function E(e) {
                    var t = e;
                    return (0,
                    A.delayExecution)((function() {
                        var e = (0,
                        I.default)(g, (function(e) {
                            return t === e.bidderRequestId
                        }
                        ));
                        e.doneCbCallCount += 1,
                        a()
                    }
                    ), 1)
                }
                function a() {
                    g.every((function(e) {
                        return 1 <= e.doneCbCallCount
                    }
                    )) && (w.logInfo("Bids Received for Auction with id: " + v, p),
                    y = j,
                    S(!1, !0))
                }
                return {
                    addBidReceived: function(e) {
                        p = p.concat(e)
                    },
                    executeCallback: S,
                    callBids: function() {
                        var r = this;
                        y = N,
                        c = Date.now();
                        var i = O.makeBidRequests(u, c, v, h, s);
                        w.logInfo("Bids Requested for Auction with id: " + v, i),
                        i.forEach((function(e) {
                            var t;
                            t = e,
                            g = g.concat(t)
                        }
                        ));
                        var o = {}
                          , e = {
                            bidRequests: i,
                            run: function() {
                                var e, t;
                                e = S.bind(null, !0),
                                t = setTimeout(e, h),
                                b = t,
                                y = U;
                                var n = {
                                    timestamp: c,
                                    auctionId: v,
                                    timeout: h
                                };
                                B.emit(R.EVENTS.AUCTION_INIT, n),
                                O.callBids(u, i, M.bind(r), E.bind(r), {
                                    request: function(e, t) {
                                        d(P, t),
                                        d(o, e),
                                        k[e] || (k[e] = {
                                            SRA: !0,
                                            origin: t
                                        }),
                                        1 < o[e] && (k[e].SRA = !1)
                                    },
                                    done: function(e) {
                                        P[e]--,
                                        x[0] && a(x[0]) && x.shift()
                                    }
                                }, h)
                            }
                        };
                        a(e) || (w.logWarn("queueing auction due to limited endpoint capacity"),
                        x.push(e));
                        function a(e) {
                            var r = !0
                              , i = T.config.getConfig("maxRequestsPerOrigin") || D;
                            return e.bidRequests.some((function(e) {
                                var t = 1
                                  , n = void 0 !== e.src && e.src === R.S2S.SRC ? "s2s" : e.bidderCode;
                                return k[n] && (!1 === k[n].SRA && (t = Math.min(e.bids.length, i)),
                                P[k[n].origin] + t > i && (r = !1)),
                                !r
                            }
                            )),
                            r && e.run(),
                            r
                        }
                        function d(e, t) {
                            void 0 === e[t] ? e[t] = 1 : e[t]++
                        }
                    },
                    bidsBackAll: a,
                    addWinningBid: function(e) {
                        o = o.concat(e),
                        O.callBidWonBidder(e.bidder, e)
                    },
                    getWinningBids: function() {
                        return o
                    },
                    getTimeout: function() {
                        return h
                    },
                    getAuctionId: function() {
                        return v
                    },
                    getAuctionStatus: function() {
                        return y
                    },
                    getAdUnits: function() {
                        return u
                    },
                    getAdUnitCodes: function() {
                        return l
                    },
                    getBidRequests: function() {
                        return g
                    },
                    getBidsReceived: function() {
                        return p
                    }
                }
            }
            ,
            t.getStandardBidderSettings = d,
            t.getKeyValueTargetingPairs = m,
            t.adjustBids = s;
            var A = n(0)
              , p = n(31)
              , i = n(18)
              , c = n(203)
              , v = n(12)
              , T = n(3)
              , r = n(14)
              , o = n(20)
              , I = a(n(10))
              , _ = a(n(5));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var C = r.userSync.syncUsers
              , w = n(0)
              , O = n(8)
              , B = n(9)
              , R = n(4)
              , N = t.AUCTION_STARTED = "started"
              , U = t.AUCTION_IN_PROGRESS = "inProgress"
              , j = t.AUCTION_COMPLETED = "completed";
            B.on(R.EVENTS.BID_ADJUSTMENT, (function(e) {
                s(e)
            }
            ));
            var D = 4
              , P = {}
              , k = {}
              , x = [];
            function f(e, t) {
                t.timeToRespond > e.getTimeout() + T.config.getConfig("timeoutBuffer") && e.executeCallback(!0)
            }
            function y(e, t) {
                B.emit(R.EVENTS.BID_RESPONSE, t),
                e.addBidReceived(t),
                f(e, t)
            }
            var M = t.addBidResponse = (0,
            o.createHook)("asyncSeries", (function(e, t) {
                var n, r, i, o, a = this.getBidRequests(), d = this.getAuctionId(), u = (0,
                A.getBidderRequest)(a, t.bidderCode, e), s = (function(e) {
                    var t = e.adUnitCode
                      , n = e.bid
                      , r = e.bidRequest
                      , i = e.auctionId
                      , o = r.start
                      , a = g({}, n, {
                        auctionId: i,
                        responseTimestamp: (0,
                        A.timestamp)(),
                        requestTimestamp: o,
                        cpm: parseFloat(n.cpm) || 0,
                        bidder: n.bidderCode,
                        adUnitCode: t
                    });
                    a.timeToRespond = a.responseTimestamp - a.requestTimestamp,
                    B.emit(R.EVENTS.BID_ADJUSTMENT, a);
                    var d = r.bids && (0,
                    I.default)(r.bids, (function(e) {
                        return e.adUnitCode == t
                    }
                    ))
                      , u = d && d.renderer;
                    u && u.url && (a.renderer = v.Renderer.install({
                        url: u.url
                    }),
                    a.renderer.setRender(u.render));
                    var s, c = T.config.getConfig("mediaTypePriceGranularity." + n.mediaType), f = (0,
                    p.getPriceBucketString)(a.cpm, "object" === (void 0 === c ? "undefined" : l(c)) ? c : T.config.getConfig("customPriceBucket"), T.config.getConfig("currency.granularityMultiplier"));
                    a.pbLg = f.low,
                    a.pbMg = f.med,
                    a.pbHg = f.high,
                    a.pbAg = f.auto,
                    a.pbDg = f.dense,
                    a.pbCg = f.custom,
                    a.bidderCode && (0 < a.cpm || a.dealId) && (s = m(a.bidderCode, a));
                    return a.adserverTargeting = g(a.adserverTargeting || {}, s),
                    a
                }
                )({
                    adUnitCode: e,
                    bid: t,
                    bidRequest: u,
                    auctionId: d
                });
                "video" === s.mediaType ? (n = this,
                r = s,
                i = u,
                o = !0,
                T.config.getConfig("cache.url") && (r.videoCacheKey ? r.vastUrl || (w.logError("videoCacheKey specified but not required vastUrl for video bid"),
                o = !1) : (o = !1,
                (0,
                c.store)([r], (function(e, t) {
                    e ? (w.logWarn("Failed to save to the video cache: " + e + ". Video bid must be discarded."),
                    f(n, r)) : (r.videoCacheKey = t[0].uuid,
                    r.vastUrl || (r.vastUrl = (0,
                    c.getCacheUrl)(r.videoCacheKey)),
                    i.doneCbCallCount += 1,
                    y(n, r),
                    n.bidsBackAll())
                }
                )))),
                o && y(n, r)) : y(this, s)
            }
            ), "addBidResponse");
            function d(e) {
                var t = T.config.getConfig("mediaTypePriceGranularity." + e)
                  , n = "string" == typeof e && t ? "string" == typeof t ? t : "custom" : T.config.getConfig("priceGranularity")
                  , r = pbjs.bidderSettings;
                return r[R.JSON_MAPPING.BD_SETTING_STANDARD] || (r[R.JSON_MAPPING.BD_SETTING_STANDARD] = {}),
                r[R.JSON_MAPPING.BD_SETTING_STANDARD][R.JSON_MAPPING.ADSERVER_TARGETING] || (r[R.JSON_MAPPING.BD_SETTING_STANDARD][R.JSON_MAPPING.ADSERVER_TARGETING] = [{
                    key: "hb_bidder",
                    val: function(e) {
                        return e.bidderCode
                    }
                }, {
                    key: "hb_adid",
                    val: function(e) {
                        return e.adId
                    }
                }, {
                    key: "hb_pb",
                    val: function(e) {
                        return n === R.GRANULARITY_OPTIONS.AUTO ? e.pbAg : n === R.GRANULARITY_OPTIONS.DENSE ? e.pbDg : n === R.GRANULARITY_OPTIONS.LOW ? e.pbLg : n === R.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : n === R.GRANULARITY_OPTIONS.HIGH ? e.pbHg : n === R.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0
                    }
                }, {
                    key: "hb_size",
                    val: function(e) {
                        return e.size
                    }
                }, {
                    key: "hb_deal",
                    val: function(e) {
                        return e.dealId
                    }
                }, {
                    key: "hb_source",
                    val: function(e) {
                        return e.source
                    }
                }, {
                    key: "hb_format",
                    val: function(e) {
                        return e.mediaType
                    }
                }]),
                r[R.JSON_MAPPING.BD_SETTING_STANDARD]
            }
            function m(e, t) {
                if (!t)
                    return {};
                var n = {}
                  , r = pbjs.bidderSettings;
                r && (u(n, d(t.mediaType), t),
                e && r[e] && r[e][R.JSON_MAPPING.ADSERVER_TARGETING] && (u(n, r[e], t),
                t.sendStandardTargeting = r[e].sendStandardTargeting));
                return t.native && (n = g({}, n, (0,
                i.getNativeTargeting)(t))),
                n
            }
            function u(r, i, o) {
                var e = i[R.JSON_MAPPING.ADSERVER_TARGETING];
                return o.size = o.getSize(),
                w._each(e, (function(e) {
                    var t = e.key
                      , n = e.val;
                    if (r[t] && w.logWarn("The key: " + t + " is getting ovewritten"),
                    w.isFn(n))
                        try {
                            n = n(o)
                        } catch (e) {
                            w.logError("bidmanager", "ERROR", e)
                        }
                    (void 0 === i.suppressEmptyKeys || !0 !== i.suppressEmptyKeys) && "hb_deal" !== t || !w.isEmptyStr(n) && null != n ? r[t] = n : w.logInfo("suppressing empty key '" + t + "' from adserver targeting")
                }
                )),
                r
            }
            function s(e) {
                var t = e.bidderCode
                  , n = e.cpm
                  , r = void 0;
                if (pbjs.bidderSettings && (t && pbjs.bidderSettings[t] && "function" == typeof pbjs.bidderSettings[t].bidCpmAdjustment ? r = pbjs.bidderSettings[t].bidCpmAdjustment : pbjs.bidderSettings[R.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof pbjs.bidderSettings[R.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (r = pbjs.bidderSettings[R.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment),
                r))
                    try {
                        n = r(e.cpm, g({}, e))
                    } catch (e) {
                        w.logError("Error during bid adjustment", "bidmanager.js", e)
                    }
                0 <= n && (e.cpm = n)
            }
            function q(e, t) {
                return e[t.adUnitCode] || (e[t.adUnitCode] = {
                    bids: []
                }),
                e[t.adUnitCode].bids.push(t),
                e
            }
        },
        45: function(e, t, n) {
            "use strict";
            var r = n(15)
              , i = n(34)(5)
              , o = "find"
              , a = !0;
            o in [] && Array(1)[o]((function() {
                a = !1
            }
            )),
            r(r.P + r.F * a, "Array", {
                find: function(e) {
                    return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
                }
            }),
            n(27)(o)
        },
        46: function(e, t) {
            e.exports = function(e) {
                if ("function" != typeof e)
                    throw TypeError(e + " is not a function!");
                return e
            }
        },
        47: function(e, t, n) {
            var r = n(48)
              , i = n(53);
            e.exports = n(23) ? function(e, t, n) {
                return r.f(e, t, i(1, n))
            }
            : function(e, t, n) {
                return e[t] = n,
                e
            }
        },
        48: function(e, t, n) {
            var r = n(49)
              , i = n(50)
              , o = n(52)
              , a = Object.defineProperty;
            t.f = n(23) ? Object.defineProperty : function(e, t, n) {
                if (r(e),
                t = o(t, !0),
                r(n),
                i)
                    try {
                        return a(e, t, n)
                    } catch (e) {}
                if ("get"in n || "set"in n)
                    throw TypeError("Accessors not supported!");
                return "value"in n && (e[t] = n.value),
                e
            }
        },
        49: function(e, t, n) {
            var r = n(16);
            e.exports = function(e) {
                if (!r(e))
                    throw TypeError(e + " is not an object!");
                return e
            }
        },
        5: function(e, t, n) {
            n(61),
            e.exports = n(13).Array.includes
        },
        50: function(e, t, n) {
            e.exports = !n(23) && !n(33)((function() {
                return 7 != Object.defineProperty(n(51)("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }
            ))
        },
        51: function(e, t, n) {
            var r = n(16)
              , i = n(19).document
              , o = r(i) && r(i.createElement);
            e.exports = function(e) {
                return o ? i.createElement(e) : {}
            }
        },
        52: function(e, t, n) {
            var i = n(16);
            e.exports = function(e, t) {
                if (!i(e))
                    return e;
                var n, r;
                if (t && "function" == typeof (n = e.toString) && !i(r = n.call(e)))
                    return r;
                if ("function" == typeof (n = e.valueOf) && !i(r = n.call(e)))
                    return r;
                if (!t && "function" == typeof (n = e.toString) && !i(r = n.call(e)))
                    return r;
                throw TypeError("Can't convert object to primitive value")
            }
        },
        53: function(e, t) {
            e.exports = function(e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t
                }
            }
        },
        54: function(e, t) {
            var n = {}.hasOwnProperty;
            e.exports = function(e, t) {
                return n.call(e, t)
            }
        },
        55: function(e, t, n) {
            var r = n(25);
            e.exports = function(e) {
                return Object(r(e))
            }
        },
        558: function(e, t, n) {
            e.exports = n(559)
        },
        559: function(e, t, n) {
            "use strict";
            var r, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            , o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            , a = n(40), d = n(0), u = n(560), s = n(14), c = n(22), f = n(3), l = n(29), g = n(41), p = n(20), v = n(561), y = n(5), m = (r = y) && r.__esModule ? r : {
                default: r
            }, b = n(39);
            var h = (0,
            a.getGlobal)()
              , S = n(4)
              , E = n(0)
              , A = n(8)
              , T = n(17)
              , I = n(9)
              , _ = s.userSync.triggerUserSyncs
              , C = S.EVENTS
              , w = C.ADD_AD_UNITS
              , O = C.BID_WON
              , B = C.REQUEST_BIDS
              , R = C.SET_TARGETING
              , N = C.AD_RENDER_FAILED
              , U = S.AD_RENDER_FAILED_REASON
              , j = U.PREVENT_WRITING_ON_MAIN_DOCUMENT
              , D = U.NO_AD
              , P = U.EXCEPTION
              , k = U.CANNOT_FIND_AD
              , x = U.MISSING_DOC_OR_ADID
              , M = {
                bidWon: function(e) {
                    var t = l.auctionManager.getBidsRequested().map((function(e) {
                        return e.bids.map((function(e) {
                            return e.adUnitCode
                        }
                        ))
                    }
                    )).reduce(d.flatten).filter(d.uniques);
                    return !!E.contains(t, e) || void E.logError('The "' + e + '" placement is not defined.')
                }
            };
            function q(e, t, n) {
                e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t,
                e.defaultView.frameElement.height = n)
            }
            function G(e, t, n) {
                var r = {};
                r.reason = e,
                r.message = t,
                n && (r.bid = n),
                E.logError(t),
                I.emit(N, r)
            }
            function W(e) {
                e.forEach((function(e) {
                    if (void 0 === e.called)
                        try {
                            e.call(),
                            e.called = !0
                        } catch (e) {
                            E.logError("Error processing command :", "prebid.js", e)
                        }
                }
                ))
            }
            (0,
            v.sessionLoader)(),
            h.bidderSettings = h.bidderSettings || {},
            h.cbTimeout = h.cbTimeout || 200,
            h.libLoaded = !0,
            h.version = "v1.21.0",
            E.logInfo("Prebid.js v1.21.0 loaded"),
            h.adUnits = h.adUnits || [],
            h.triggerUserSyncs = _,
            h.getAdserverTargetingForAdUnitCodeStr = function(e) {
                if (E.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments),
                e) {
                    var t = h.getAdserverTargetingForAdUnitCode(e);
                    return E.transformAdServerTargetingObj(t)
                }
                E.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
            }
            ,
            h.getAdserverTargetingForAdUnitCode = function(e) {
                return h.getAdserverTargeting(e)[e]
            }
            ,
            h.getAdserverTargeting = function(e) {
                return E.logInfo("Invoking pbjs.getAdserverTargeting", arguments),
                g.targeting.getAllTargeting(e)
            }
            ,
            h.getBidResponses = function() {
                E.logInfo("Invoking pbjs.getBidResponses", arguments);
                var e = l.auctionManager.getBidsReceived().filter(d.adUnitsFilter.bind(this, l.auctionManager.getAdUnitCodes()))
                  , n = e && e.length && e[e.length - 1].auctionId;
                return e.map((function(e) {
                    return e.adUnitCode
                }
                )).filter(d.uniques).map((function(t) {
                    return e.filter((function(e) {
                        return e.auctionId === n && e.adUnitCode === t
                    }
                    ))
                }
                )).filter((function(e) {
                    return e && e[0] && e[0].adUnitCode
                }
                )).map((function(e) {
                    return t = {},
                    n = e[0].adUnitCode,
                    r = {
                        bids: e.map(d.removeRequestId)
                    },
                    n in t ? Object.defineProperty(t, n, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[n] = r,
                    t;
                    var t, n, r
                }
                )).reduce((function(e, t) {
                    return o(e, t)
                }
                ), {})
            }
            ,
            h.getBidResponsesForAdUnitCode = function(t) {
                return {
                    bids: l.auctionManager.getBidsReceived().filter((function(e) {
                        return e.adUnitCode === t
                    }
                    )).map(d.removeRequestId)
                }
            }
            ,
            h.setTargetingForGPTAsync = function(e, t) {
                if (E.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments),
                (0,
                d.isGptPubadsDefined)()) {
                    var n = g.targeting.getAllTargeting(e);
                    g.targeting.resetPresetTargeting(e),
                    g.targeting.setTargetingForGPT(n, t),
                    Object.keys(n).forEach((function(t) {
                        Object.keys(n[t]).forEach((function(e) {
                            "hb_adid" === e && l.auctionManager.setStatusForBids(n[t][e], g.BID_TARGETING_SET)
                        }
                        ))
                    }
                    )),
                    I.emit(R, n)
                } else
                    E.logError("window.googletag is not defined on the page")
            }
            ,
            h.setTargetingForAst = function() {
                E.logInfo("Invoking pbjs.setTargetingForAn", arguments),
                g.targeting.isApntagDefined() ? (g.targeting.setTargetingForAst(),
                I.emit(R, g.targeting.getAllTargeting())) : E.logError("window.apntag is not defined on the page")
            }
            ,
            h.renderAd = function(e, t) {
                if (E.logInfo("Invoking pbjs.renderAd", arguments),
                E.logMessage("Calling renderAd with adId :" + t),
                e && t)
                    try {
                        var n = l.auctionManager.findBidByAdId(t);
                        if (n) {
                            n.status = g.RENDERED,
                            n.ad = E.replaceAuctionPrice(n.ad, n.cpm),
                            n.adUrl = E.replaceAuctionPrice(n.adUrl, n.cpm),
                            l.auctionManager.addWinningBid(n),
                            I.emit(O, n);
                            var r = n.height
                              , i = n.width
                              , o = n.ad
                              , a = n.mediaType
                              , d = n.adUrl
                              , u = n.renderer
                              , s = document.createComment("Creative " + n.creativeId + " served by " + n.bidder + " Prebid.js Header Bidding");
                            if (E.insertElement(s, e, "body"),
                            u && u.url)
                                u.render(n);
                            else if (e === document && !E.inIframe() || "video" === a) {
                                G(j, "Error trying to write ad. Ad render call ad id " + t + " was prevented from writing to the main document.", n)
                            } else if (o)
                                e.write(o),
                                e.close(),
                                q(e, i, r),
                                E.callBurl(n);
                            else if (d) {
                                var c = E.createInvisibleIframe();
                                c.height = r,
                                c.width = i,
                                c.style.display = "inline",
                                c.style.overflow = "hidden",
                                c.src = d,
                                E.insertElement(c, e, "body"),
                                q(e, i, r),
                                E.callBurl(n)
                            } else {
                                G(D, "Error trying to write ad. No ad for bid response id: " + t, n)
                            }
                        } else {
                            G(k, "Error trying to write ad. Cannot find ad by given id : " + t)
                        }
                    } catch (e) {
                        var f = "Error trying to write ad Id :" + t + " to the page:" + e.message;
                        G(P, f)
                    }
                else
                    G(x, "Error trying to write ad Id :" + t + " to the page. Missing document or adId")
            }
            ,
            h.removeAdUnit = function(e) {
                if (E.logInfo("Invoking pbjs.removeAdUnit", arguments),
                e)
                    for (var t = 0; t < h.adUnits.length; t++)
                        h.adUnits[t].code === e && h.adUnits.splice(t, 1)
            }
            ,
            h.requestBids = (0,
            p.createHook)("asyncSeries", (function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.bidsBackHandler
                  , n = e.timeout
                  , r = e.adUnits
                  , i = e.adUnitCodes
                  , o = e.labels;
                I.emit(B);
                var a = n || f.config.getConfig("bidderTimeout");
                if (r = r || h.adUnits,
                E.logInfo("Invoking pbjs.requestBids", arguments),
                i && i.length ? r = r.filter((function(e) {
                    return (0,
                    m.default)(i, e.code)
                }
                )) : i = r && r.map((function(e) {
                    return e.code
                }
                )),
                r.forEach((function(i) {
                    var o = Object.keys(i.mediaTypes || {
                        banner: "banner"
                    })
                      , e = i.bids.map((function(e) {
                        return e.bidder
                    }
                    ))
                      , a = A.bidderRegistry
                      , t = f.config.getConfig("s2sConfig")
                      , n = t && t.bidders
                      , r = n ? e.filter((function(e) {
                        return !(0,
                        m.default)(n, e)
                    }
                    )) : e;
                    i.transactionId || (i.transactionId = E.generateUUID()),
                    r.forEach((function(t) {
                        var e = a[t]
                          , n = e && e.getSpec && e.getSpec()
                          , r = n && n.supportedMediaTypes || ["banner"];
                        o.some((function(e) {
                            return (0,
                            m.default)(r, e)
                        }
                        )) || (E.logWarn(E.unsupportedBidderMessage(i, t)),
                        i.bids = i.bids.filter((function(e) {
                            return e.bidder !== t
                        }
                        )))
                    }
                    )),
                    b.adunitCounter.incrementCounter(i.code)
                }
                )),
                r && 0 !== r.length) {
                    var d = l.auctionManager.createAuction({
                        adUnits: r,
                        adUnitCodes: i,
                        callback: t,
                        cbTimeout: a,
                        labels: o
                    });
                    return d.callBids(),
                    d
                }
                if (E.logMessage("No adUnits configured. No bids requested."),
                "function" == typeof t)
                    try {
                        t()
                    } catch (e) {
                        E.logError("Error executing bidsBackHandler", null, e)
                    }
            }
            )),
            h.addAdUnits = function(e) {
                E.logInfo("Invoking pbjs.addAdUnits", arguments),
                E.isArray(e) ? h.adUnits.push.apply(h.adUnits, e) : "object" === (void 0 === e ? "undefined" : i(e)) && h.adUnits.push(e),
                I.emit(w)
            }
            ,
            h.onEvent = function(e, t, n) {
                E.logInfo("Invoking pbjs.onEvent", arguments),
                E.isFn(t) ? !n || M[e].call(null, n) ? I.on(e, t, n) : E.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : E.logError('The event handler provided is not a function and was not set on event "' + e + '".')
            }
            ,
            h.offEvent = function(e, t, n) {
                E.logInfo("Invoking pbjs.offEvent", arguments),
                n && !M[e].call(null, n) || I.off(e, t, n)
            }
            ,
            h.registerBidAdapter = function(e, t) {
                E.logInfo("Invoking pbjs.registerBidAdapter", arguments);
                try {
                    A.registerBidAdapter(e(), t)
                } catch (e) {
                    E.logError("Error registering bidder adapter : " + e.message)
                }
            }
            ,
            h.registerAnalyticsAdapter = function(e) {
                E.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);
                try {
                    A.registerAnalyticsAdapter(e)
                } catch (e) {
                    E.logError("Error registering analytics adapter : " + e.message)
                }
            }
            ,
            h.createBid = function(e) {
                return E.logInfo("Invoking pbjs.createBid", arguments),
                T.createBid(e)
            }
            ,
            h.loadScript = function(e, t, n) {
                E.logInfo("Invoking pbjs.loadScript", arguments),
                (0,
                c.loadScript)(e, t, n)
            }
            ,
            h.enableAnalytics = function(e) {
                e && !E.isEmpty(e) ? (E.logInfo("Invoking pbjs.enableAnalytics for: ", e),
                A.enableAnalytics(e)) : E.logError("pbjs.enableAnalytics should be called with option {}")
            }
            ,
            h.aliasBidder = function(e, t) {
                E.logInfo("Invoking pbjs.aliasBidder", arguments),
                e && t ? A.aliasBidAdapter(e, t) : E.logError("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder")
            }
            ,
            h.getAllWinningBids = function() {
                return l.auctionManager.getAllWinningBids().map(d.removeRequestId)
            }
            ,
            h.getAllPrebidWinningBids = function() {
                return l.auctionManager.getBidsReceived().filter((function(e) {
                    return e.status === g.BID_TARGETING_SET
                }
                )).map(d.removeRequestId)
            }
            ,
            h.getHighestCpmBids = function(e) {
                return g.targeting.getWinningBids(e).map(d.removeRequestId)
            }
            ,
            h.markWinningBidAsUsed = function(t) {
                var e = [];
                t.adUnitCode && t.adId ? e = l.auctionManager.getBidsReceived().filter((function(e) {
                    return e.adId === t.adId && e.adUnitCode === t.adUnitCode
                }
                )) : t.adUnitCode ? e = g.targeting.getWinningBids(t.adUnitCode) : t.adId ? e = l.auctionManager.getBidsReceived().filter((function(e) {
                    return e.adId === t.adId
                }
                )) : E.logWarn("Inproper usage of markWinningBidAsUsed. It'll need an adUnitCode and/or adId to function."),
                0 < e.length && (e[0].status = g.RENDERED)
            }
            ,
            h.getConfig = f.config.getConfig,
            h.setConfig = f.config.setConfig,
            h.que.push((function() {
                return (0,
                u.listenMessagesFromCreative)()
            }
            )),
            h.cmd.push = function(e) {
                if ("function" == typeof e)
                    try {
                        e.call()
                    } catch (e) {
                        E.logError("Error processing command :", e.message, e.stack)
                    }
                else
                    E.logError("Commands written into pbjs.cmd.push must be wrapped in a function")
            }
            ,
            h.que.push = h.cmd.push,
            h.processQueue = function() {
                W(h.que),
                W(h.cmd)
            }
        },
        56: function(e, t, n) {
            var r = n(57);
            e.exports = function(e, t) {
                return new (r(e))(t)
            }
        },
        560: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.listenMessagesFromCreative = function() {
                addEventListener("message", o, !1)
            }
            ;
            var y = i(n(9))
              , m = n(18)
              , r = n(4)
              , b = n(0)
              , h = n(29)
              , S = i(n(10));
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var E = r.EVENTS.BID_WON;
            function o(e) {
                var t, n, r, i, o, a, d, u, s, c, f, l, g = e.message ? "message" : "data", p = {};
                try {
                    p = JSON.parse(e[g])
                } catch (e) {
                    return
                }
                if (p && p.adId) {
                    var v = (0,
                    S.default)(h.auctionManager.getBidsReceived(), (function(e) {
                        return e.adId === p.adId
                    }
                    ));
                    "Prebid Request" === p.message && (t = v,
                    n = p.adServerDomain,
                    r = e.source,
                    i = t.adId,
                    o = t.ad,
                    a = t.adUrl,
                    d = t.width,
                    u = t.height,
                    i && (c = (s = t).adUnitCode,
                    f = s.width,
                    l = s.height,
                    ["div", "iframe"].forEach((function(e) {
                        var t, n = (t = e,
                        document.getElementById((0,
                        S.default)(window.googletag.pubads().getSlots().filter((0,
                        b.isSlotMatchingAdUnitCode)(c)), (function(e) {
                            return e
                        }
                        )).getSlotElementId()).querySelector(t)).style;
                        n.width = f,
                        n.height = l
                    }
                    )),
                    r.postMessage(JSON.stringify({
                        message: "Prebid Response",
                        ad: o,
                        adUrl: a,
                        adId: i,
                        width: d,
                        height: u
                    }), n)),
                    h.auctionManager.addWinningBid(v),
                    y.default.emit(E, v)),
                    "Prebid Native" === p.message && ((0,
                    m.fireNativeTrackers)(p, v),
                    h.auctionManager.addWinningBid(v),
                    y.default.emit(E, v))
                }
            }
        },
        561: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.boundHook = void 0;
            var o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ;
            n.disableOverrides = f,
            n.addBidResponseHook = l,
            n.getConfig = g,
            n.sessionLoader = function(e) {
                var t = void 0;
                try {
                    e = e || window.sessionStorage,
                    t = JSON.parse(e.getItem(d))
                } catch (e) {}
                t && c(t, !0)
            }
            ;
            var r = t(3)
              , a = t(0)
              , i = t(42)
              , d = "pbjs:debugging"
              , u = n.boundHook = void 0;
            function s(e) {
                (0,
                a.logMessage)("DEBUG: " + e)
            }
            function c(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                r.config.setConfig({
                    debug: !0
                }),
                s("bidder overrides enabled" + (t ? " from session" : "")),
                u && i.addBidResponse.removeHook(u),
                n.boundHook = u = l.bind(null, e),
                i.addBidResponse.addHook(u, 5)
            }
            function f() {
                u && (i.addBidResponse.removeHook(u),
                s("bidder overrides disabled"))
            }
            function l(e, r, i, t) {
                if (Array.isArray(e.bidders) && -1 === e.bidders.indexOf(i.bidderCode))
                    return n = "bidder '" + i.bidderCode + "' excluded from auction by bidder overrides",
                    void (0,
                    a.logWarn)("DEBUG: " + n);
                var n;
                Array.isArray(e.bids) && e.bids.forEach((function(n) {
                    n.bidder && n.bidder !== i.bidderCode || n.adUnitCode && n.adUnitCode !== r || (i = o({}, i),
                    Object.keys(n).filter((function(e) {
                        return -1 === ["bidder", "adUnitCode"].indexOf(e)
                    }
                    )).forEach((function(e) {
                        var t = n[e];
                        s("bidder overrides changed '" + r + "/" + i.bidderCode + "' bid." + e + " from '" + i[e] + "' to '" + t + "'"),
                        i[e] = t
                    }
                    )))
                }
                )),
                t(r, i)
            }
            function g(e) {
                if (e.enabled) {
                    try {
                        window.sessionStorage.setItem(d, JSON.stringify(e))
                    } catch (e) {}
                    c(e)
                } else {
                    f();
                    try {
                        window.sessionStorage.removeItem(d)
                    } catch (e) {}
                }
            }
            r.config.getConfig("debugging", (function(e) {
                return g(e.debugging)
            }
            ))
        },
        57: function(e, t, n) {
            var r = n(16)
              , i = n(38)
              , o = n(26)("species");
            e.exports = function(e) {
                var t;
                return i(e) && ("function" != typeof (t = e.constructor) || t !== Array && !i(t.prototype) || (t = void 0),
                r(t) && null === (t = t[o]) && (t = void 0)),
                void 0 === t ? Array : t
            }
        },
        58: function(e, t, n) {
            var r = n(13)
              , i = n(19)
              , o = "__core-js_shared__"
              , a = i[o] || (i[o] = {});
            (e.exports = function(e, t) {
                return a[e] || (a[e] = void 0 !== t ? t : {})
            }
            )("versions", []).push({
                version: r.version,
                mode: n(59) ? "pure" : "global",
                copyright: "u00A9 2018 Denis Pushkarev (zloirock.ru)"
            })
        },
        59: function(e, t) {
            e.exports = !0
        },
        60: function(e, t) {
            var n = 0
              , r = Math.random();
            e.exports = function(e) {
                return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
            }
        },
        61: function(e, t, n) {
            "use strict";
            var r = n(15)
              , i = n(62)(!0);
            r(r.P, "Array", {
                includes: function(e) {
                    return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
                }
            }),
            n(27)("includes")
        },
        62: function(e, t, n) {
            var u = n(63)
              , s = n(36)
              , c = n(64);
            e.exports = function(d) {
                return function(e, t, n) {
                    var r, i = u(e), o = s(i.length), a = c(n, o);
                    if (d && t != t) {
                        for (; a < o; )
                            if ((r = i[a++]) != r)
                                return !0
                    } else
                        for (; a < o; a++)
                            if ((d || a in i) && i[a] === t)
                                return d || a || 0;
                    return !d && -1
                }
            }
        },
        63: function(e, t, n) {
            var r = n(35)
              , i = n(25);
            e.exports = function(e) {
                return r(i(e))
            }
        },
        64: function(e, t, n) {
            var r = n(37)
              , i = Math.max
              , o = Math.min;
            e.exports = function(e, t) {
                return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t)
            }
        },
        65: function(e, t) {
            e.exports = function e(t) {
                var n = Array.isArray(t) ? [] : {};
                for (var r in t) {
                    var i = t[r];
                    n[r] = i && "object" == typeof i ? e(i) : i
                }
                return n
            }
        },
        66: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ;
            t.setSizeConfig = a,
            t.resolveStatus = function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.labels
                  , n = void 0 === t ? [] : t
                  , r = e.labelAll
                  , i = void 0 !== r && r
                  , o = e.activeLabels
                  , a = void 0 === o ? [] : o
                  , d = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : []
                  , u = (c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : p,
                c.reduce((function(n, e) {
                    return "object" === (void 0 === e ? "undefined" : f(e)) && "string" == typeof e.mediaQuery ? matchMedia(e.mediaQuery).matches && (Array.isArray(e.sizesSupported) && (n.shouldFilter = !0),
                    ["labels", "sizesSupported"].forEach((function(t) {
                        return (e[t] || []).forEach((function(e) {
                            return n[t][e] = !0
                        }
                        ))
                    }
                    ))) : (0,
                    l.logWarn)('sizeConfig rule missing required property "mediaQuery"'),
                    n
                }
                ), {
                    labels: {},
                    sizesSupported: {},
                    shouldFilter: !1
                }))
                  , s = void 0;
                var c;
                s = u.shouldFilter ? d.filter((function(e) {
                    return u.sizesSupported[e]
                }
                )) : d;
                return {
                    active: 0 < s.length && (0 === n.length || !i && (n.some((function(e) {
                        return u.labels[e]
                    }
                    )) || n.some((function(e) {
                        return (0,
                        g.default)(a, e)
                    }
                    ))) || i && n.reduce((function(e, t) {
                        return e ? u.labels[t] || (0,
                        g.default)(a, t) : e
                    }
                    ), !0)),
                    sizes: s
                }
            }
            ;
            var r, i = n(3), l = n(0), o = n(5), g = (r = o) && r.__esModule ? r : {
                default: r
            };
            var p = [];
            function a(e) {
                p = e
            }
            i.config.getConfig("sizeConfig", (function(e) {
                return a(e.sizeConfig)
            }
            ))
        },
        67: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.hasNonVideoBidder = t.videoBidder = t.videoAdUnit = void 0,
            t.isValidVideoBid = function(e, t) {
                var n = (0,
                o.getBidRequest)(e.adId, t)
                  , r = n && (0,
                o.deepAccess)(n, "mediaTypes.video")
                  , i = r && (0,
                o.deepAccess)(r, "context");
                if (!n || r && i !== s)
                    return a.config.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : ((0,
                    o.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '),
                    !1);
                return i !== s || !(!e.renderer && !n.renderer)
            }
            ;
            var r, i = n(8), o = n(0), a = n(3), d = n(5), u = (r = d) && r.__esModule ? r : {
                default: r
            };
            var s = "outstream"
              , c = (t.videoAdUnit = function(e) {
                var t = "video" === e.mediaType
                  , n = (0,
                o.deepAccess)(e, "mediaTypes.video");
                return t || n
            }
            ,
            t.videoBidder = function(e) {
                return (0,
                u.default)(i.videoAdapters, e.bidder)
            }
            );
            t.hasNonVideoBidder = function(e) {
                return e.bids.filter((function(e) {
                    return !c(e)
                }
                )).length
            }
        },
        7: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.ajax = void 0;
            var l = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
              , g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ;
            t.ajaxBuilder = r;
            var p = n(11)
              , v = n(3)
              , y = n(0)
              , m = 4;
            t.ajax = r();
            function r() {
                var s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3e3
                  , e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
                  , c = e.request
                  , f = e.done;
                return function(e, t, n) {
                    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
                    try {
                        var i = void 0
                          , o = r.method || (n ? "POST" : "GET")
                          , a = document.createElement("a");
                        a.href = e;
                        var d = "object" === (void 0 === t ? "undefined" : g(t)) && null !== t ? t : {
                            success: function() {
                                y.logMessage("xhr success")
                            },
                            error: function(e) {
                                y.logError("xhr error", null, e)
                            }
                        };
                        if ("function" == typeof t && (d.success = t),
                        (i = new window.XMLHttpRequest).onreadystatechange = function() {
                            if (i.readyState === m) {
                                "function" == typeof f && f(a.origin);
                                var e = i.status;
                                200 <= e && e < 300 || 304 === e ? d.success(i.responseText, i) : d.error(i.statusText, i)
                            }
                        }
                        ,
                        v.config.getConfig("disableAjaxTimeout") || (i.ontimeout = function() {
                            y.logError("  xhr timeout after ", i.timeout, "ms")
                        }
                        ),
                        "GET" === o && n) {
                            var u = (0,
                            p.parse)(e, r);
                            l(u.search, n),
                            e = (0,
                            p.format)(u)
                        }
                        i.open(o, e),
                        v.config.getConfig("disableAjaxTimeout") || (i.timeout = s),
                        r.withCredentials && (i.withCredentials = !0),
                        y._each(r.customHeaders, (function(e, t) {
                            i.setRequestHeader(t, e)
                        }
                        )),
                        r.preflight && i.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                        i.setRequestHeader("Content-Type", r.contentType || "text/plain"),
                        "function" == typeof c && c(a.origin),
                        "POST" === o && n ? i.send(n) : i.send()
                    } catch (e) {
                        y.logError("xhr construction", e)
                    }
                }
            }
        },
        8: function(e, b, t) {
            "use strict";
            var h = function(e, t) {
                if (Array.isArray(e))
                    return e;
                if (Symbol.iterator in Object(e))
                    return (function(e, t) {
                        var n = []
                          , r = !0
                          , i = !1
                          , o = void 0;
                        try {
                            for (var a, d = e[Symbol.iterator](); !(r = (a = d.next()).done) && (n.push(a.value),
                            !t || n.length !== t); r = !0)
                                ;
                        } catch (e) {
                            i = !0,
                            o = e
                        } finally {
                            try {
                                !r && d.return && d.return()
                            } finally {
                                if (i)
                                    throw o
                            }
                        }
                        return n
                    }
                    )(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
              , l = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
              , S = t(0)
              , g = t(66)
              , p = t(18)
              , c = t(1)
              , E = t(7)
              , A = t(3)
              , T = n(t(5))
              , I = n(t(10))
              , v = t(39);
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var _ = t(0)
              , C = t(4)
              , w = t(9)
              , O = void 0
              , B = {};
            b.bidderRegistry = B,
            b.aliasRegistry = {};
            var R = {};
            A.config.getConfig("s2sConfig", (function(e) {
                R = e.s2sConfig
            }
            ));
            var r = {};
            function y(e, t) {
                return e.labelAll ? {
                    labelAll: !0,
                    labels: e.labelAll,
                    activeLabels: t
                } : {
                    labelAll: !1,
                    labels: e.labelAny,
                    activeLabels: t
                }
            }
            function N(e) {
                var r = e.bidderCode
                  , s = e.auctionId
                  , c = e.bidderRequestId
                  , t = e.adUnits
                  , f = e.labels;
                return t.reduce((function(e, a) {
                    var d = _.deepAccess(a, "mediaTypes.banner.sizes")
                      , t = (0,
                    g.resolveStatus)(y(a, f), d || a.sizes)
                      , n = t.active
                      , u = t.sizes;
                    return n && e.push(a.bids.filter((function(e) {
                        return e.bidder === r
                    }
                    )).reduce((function(e, t) {
                        var n = a.nativeParams || _.deepAccess(a, "mediaTypes.native");
                        n && (t = l({}, t, {
                            nativeParams: (0,
                            p.processNativeAdUnitParams)(n)
                        })),
                        t = l({}, t, (0,
                        S.getDefinedParams)(a, ["mediaType", "renderer"]));
                        var r = (0,
                        g.resolveStatus)(y(t, f), u)
                          , i = r.active
                          , o = r.sizes;
                        return a.mediaTypes && (_.isValidMediaTypes(a.mediaTypes) ? (d && (a.mediaTypes.banner.sizes = o),
                        t = l({}, t, {
                            mediaTypes: a.mediaTypes
                        })) : _.logError("mediaTypes is not correctly configured for adunit " + a.code)),
                        i && e.push(l({}, t, {
                            adUnitCode: a.code,
                            transactionId: a.transactionId,
                            sizes: o,
                            bidId: t.bid_id || _.getUniqueIdentifierStr(),
                            bidderRequestId: c,
                            auctionId: s,
                            bidRequestsCount: v.adunitCounter.getCounter(a.code)
                        })),
                        e
                    }
                    ), [])),
                    e
                }
                ), []).reduce(S.flatten, []).filter((function(e) {
                    return "" !== e
                }
                ))
            }
            function U() {
                return R && R.enabled && R.testing && O
            }
            function i(t, n, e) {
                try {
                    var r = B[t].getSpec();
                    r && r[n] && "function" == typeof r[n] && (_.logInfo("Invoking " + t + "." + n),
                    r[n](e))
                } catch (e) {
                    _.logWarn("Error calling " + n + " of " + t)
                }
            }
            b.gdprDataHandler = {
                consentData: null,
                setConsentData: function(e) {
                    this.consentData = e
                },
                getConsentData: function() {
                    return this.consentData
                }
            },
            b.makeBidRequests = function(e, i, o, a, d) {
                var u = [];
                e = b.checkBidRequestSizes(e);
                var t = (0,
                S.getBidderCodes)(e);
                A.config.getConfig("bidderSequence") === A.RANDOM && (t = (0,
                S.shuffle)(t));
                var n, r, s, c = t, f = [];
                if (R.enabled) {
                    U() && (f = O.getSourceBidderMap(e)[O.CLIENT]);
                    var l = R.bidders;
                    c = t.filter((function(e) {
                        return !(0,
                        T.default)(l, e) || (0,
                        T.default)(f, e)
                    }
                    ));
                    var g = (n = e,
                    r = R.bidders,
                    (s = _.deepClone(n)).forEach((function(e) {
                        e.bids = e.bids.filter((function(e) {
                            return (0,
                            T.default)(r, e.bidder) && (!U() || e.finalSource !== O.CLIENT)
                        }
                        )).map((function(e) {
                            return e.bid_id = _.getUniqueIdentifierStr(),
                            e
                        }
                        ))
                    }
                    )),
                    s = s.filter((function(e) {
                        return 0 !== e.bids.length
                    }
                    )))
                      , p = _.generateUUID();
                    l.forEach((function(e) {
                        var t = _.getUniqueIdentifierStr()
                          , n = {
                            bidderCode: e,
                            auctionId: o,
                            bidderRequestId: t,
                            tid: p,
                            bids: N({
                                bidderCode: e,
                                auctionId: o,
                                bidderRequestId: t,
                                adUnits: g,
                                labels: d
                            }),
                            auctionStart: i,
                            timeout: R.timeout,
                            src: C.S2S.SRC
                        };
                        0 !== n.bids.length && u.push(n)
                    }
                    )),
                    g.forEach((function(e) {
                        var t = e.bids.filter((function(t) {
                            return (0,
                            I.default)(u, (function(e) {
                                return (0,
                                I.default)(e.bids, (function(e) {
                                    return e.bidId === t.bid_id
                                }
                                ))
                            }
                            ))
                        }
                        ));
                        e.bids = t
                    }
                    )),
                    u.forEach((function(e) {
                        e.adUnitsS2SCopy = g.filter((function(e) {
                            return 0 < e.bids.length
                        }
                        ))
                    }
                    ))
                }
                var v, y, m = (v = e,
                (y = _.deepClone(v)).forEach((function(e) {
                    e.bids = e.bids.filter((function(e) {
                        return !U() || e.finalSource !== O.SERVER
                    }
                    ))
                }
                )),
                y = y.filter((function(e) {
                    return 0 !== e.bids.length
                }
                )));
                return c.forEach((function(e) {
                    var t = _.getUniqueIdentifierStr()
                      , n = {
                        bidderCode: e,
                        auctionId: o,
                        bidderRequestId: t,
                        bids: N({
                            bidderCode: e,
                            auctionId: o,
                            bidderRequestId: t,
                            adUnits: m,
                            labels: d
                        }),
                        auctionStart: i,
                        timeout: a
                    }
                      , r = B[e];
                    r || _.logError("Trying to make a request for bidder that does not exist: " + e),
                    r && n.bids && 0 !== n.bids.length && u.push(n)
                }
                )),
                b.gdprDataHandler.getConsentData() && u.forEach((function(e) {
                    e.gdprConsent = b.gdprDataHandler.getConsentData()
                }
                )),
                u
            }
            ,
            b.checkBidRequestSizes = function(e) {
                function d(e) {
                    return Array.isArray(e) && 2 === e.length && _.isInteger(e[0]) && _.isInteger(e[1])
                }
                return e.forEach((function(e) {
                    var t = e.mediaTypes
                      , n = _.getAdUnitSizes(e);
                    if (t && t.banner) {
                        var r = t.banner;
                        r.sizes ? (r.sizes = n,
                        e.sizes = n) : (_.logError("Detected a mediaTypes.banner object did not include sizes.  This is a required field for the mediaTypes.banner object.  Removing invalid mediaTypes.banner object from request."),
                        delete e.mediaTypes.banner)
                    } else
                        e.sizes && (_.logWarn("Usage of adUnits.sizes will eventually be deprecated.  Please define size dimensions within the corresponding area of the mediaTypes.<object> (eg mediaTypes.banner.sizes)."),
                        e.sizes = n);
                    if (t && t.video) {
                        var i = t.video;
                        if (i.playerSize)
                            if (Array.isArray(i.playerSize) && 1 === i.playerSize.length && i.playerSize.every(d))
                                e.sizes = i.playerSize;
                            else if (d(i.playerSize)) {
                                var o = [];
                                o.push(i.playerSize),
                                _.logInfo("Transforming video.playerSize from " + i.playerSize + " to " + o + " so it's in the proper format."),
                                e.sizes = i.playerSize = o
                            } else
                                _.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."),
                                delete e.mediaTypes.video.playerSize
                    }
                    if (t && t.native) {
                        var a = t.native;
                        a.image && a.image.sizes && !Array.isArray(a.image.sizes) && (_.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."),
                        delete e.mediaTypes.native.image.sizes),
                        a.image && a.image.aspect_ratios && !Array.isArray(a.image.aspect_ratios) && (_.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."),
                        delete e.mediaTypes.native.image.aspect_ratios),
                        a.icon && a.icon.sizes && !Array.isArray(a.icon.sizes) && (_.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."),
                        delete e.mediaTypes.native.icon.sizes)
                    }
                }
                )),
                e
            }
            ,
            b.callBids = function(e, t, i, o, a, d) {
                if (t.length) {
                    var n = t.reduce((function(e, t) {
                        return e[Number(void 0 !== t.src && t.src === C.S2S.SRC)].push(t),
                        e
                    }
                    ), [[], []])
                      , r = h(n, 2)
                      , u = r[0]
                      , s = r[1];
                    if (s.length) {
                        var c = (0,
                        E.ajaxBuilder)(d, a ? {
                            request: a.request.bind(null, "s2s"),
                            done: a.done
                        } : void 0)
                          , f = R.bidders
                          , l = B[R.adapter]
                          , g = s[0].tid
                          , p = s[0].adUnitsS2SCopy;
                        if (l) {
                            var v = {
                                tid: g,
                                ad_units: p
                            };
                            if (v.ad_units.length) {
                                var y = s.map((function(e) {
                                    return e.start = (0,
                                    S.timestamp)(),
                                    e.doneCbCallCount = 0,
                                    o(e.bidderRequestId)
                                }
                                ))
                                  , m = v.ad_units.reduce((function(e, t) {
                                    return e.concat((t.bids || []).reduce((function(e, t) {
                                        return e.concat(t.bidder)
                                    }
                                    ), []))
                                }
                                ), []);
                                _.logMessage("CALLING S2S HEADER BIDDERS ==== " + f.filter((function(e) {
                                    return (0,
                                    T.default)(m, e)
                                }
                                )).join(",")),
                                s.forEach((function(e) {
                                    w.emit(C.EVENTS.BID_REQUESTED, e)
                                }
                                )),
                                l.callBids(v, s, i, (function() {
                                    return y.forEach((function(e) {
                                        return e()
                                    }
                                    ))
                                }
                                ), c)
                            }
                        }
                    }
                    u.forEach((function(e) {
                        e.start = (0,
                        S.timestamp)();
                        var t = B[e.bidderCode];
                        _.logMessage("CALLING BIDDER ======= " + e.bidderCode),
                        w.emit(C.EVENTS.BID_REQUESTED, e),
                        e.doneCbCallCount = 0;
                        var n = o(e.bidderRequestId)
                          , r = (0,
                        E.ajaxBuilder)(d, a ? {
                            request: a.request.bind(null, e.bidderCode),
                            done: a.done
                        } : void 0);
                        t.callBids(e, i, n, r)
                    }
                    ))
                } else
                    _.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")
            }
            ,
            b.videoAdapters = [],
            b.registerBidAdapter = function(e, t) {
                var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes
                  , r = void 0 === n ? [] : n;
                e && t ? "function" == typeof e.callBids ? (B[t] = e,
                (0,
                T.default)(r, "video") && b.videoAdapters.push(t),
                (0,
                T.default)(r, "native") && p.nativeAdapters.push(t)) : _.logError("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : _.logError("bidAdaptor or bidderCode not specified")
            }
            ,
            b.aliasBidAdapter = function(t, e) {
                var n, r;
                if (void 0 === B[e]) {
                    var i = B[t];
                    if (void 0 === i) {
                        var o = A.config.getConfig("s2sConfig")
                          , a = o && o.bidders;
                        a && (0,
                        T.default)(a, e) ? b.aliasRegistry[e] = t : _.logError('bidderCode "' + t + '" is not an existing bidder.', "adaptermanager.aliasBidAdapter")
                    } else
                        try {
                            var d = void 0
                              , u = (n = t,
                            r = [],
                            (0,
                            T.default)(b.videoAdapters, n) && r.push("video"),
                            (0,
                            T.default)(p.nativeAdapters, n) && r.push("native"),
                            r);
                            if (i.constructor.prototype != Object.prototype)
                                (d = new i.constructor).setBidderCode(e);
                            else {
                                var s = i.getSpec();
                                d = (0,
                                c.newBidder)(l({}, s, {
                                    code: e
                                })),
                                b.aliasRegistry[e] = t
                            }
                            this.registerBidAdapter(d, e, {
                                supportedMediaTypes: u
                            })
                        } catch (e) {
                            _.logError(t + " bidder does not currently support aliasing.", "adaptermanager.aliasBidAdapter")
                        }
                } else
                    _.logMessage('alias name "' + e + '" has been already specified.')
            }
            ,
            b.registerAnalyticsAdapter = function(e) {
                var t = e.adapter
                  , n = e.code;
                t && n ? "function" == typeof t.enableAnalytics ? (t.code = n,
                r[n] = t) : _.logError('Prebid Error: Analytics adaptor error for analytics "' + n + '"\n        analytics adapter must implement an enableAnalytics() function') : _.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")
            }
            ,
            b.enableAnalytics = function(e) {
                _.isArray(e) || (e = [e]),
                _._each(e, (function(e) {
                    var t = r[e.provider];
                    t ? t.enableAnalytics(e) : _.logError("Prebid Error: no analytics adapter found in registry for\n        " + e.provider + ".")
                }
                ))
            }
            ,
            b.getBidAdapter = function(e) {
                return B[e]
            }
            ,
            b.setS2STestingModule = function(e) {
                O = e
            }
            ,
            b.callTimedOutBidders = function(t, n, r) {
                n = n.map((function(e) {
                    return e.params = _.getUserConfiguredParams(t, e.adUnitCode, e.bidder),
                    e.timeout = r,
                    e
                }
                )),
                n = _.groupBy(n, "bidder"),
                Object.keys(n).forEach((function(e) {
                    i(e, "onTimeout", n[e])
                }
                ))
            }
            ,
            b.callBidWonBidder = function(e, t) {
                i(e, "onBidWon", t)
            }
        },
        9: function(e, t, n) {
            "use strict";
            var d, r, i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            , u = n(0), o = n(4), a = Array.prototype.slice, s = Array.prototype.push, c = u._map(o.EVENTS, (function(e) {
                return e
            }
            )), f = o.EVENT_ID_PATHS, l = [];
            e.exports = (d = {},
            (r = {}).on = function(e, t, n) {
                if (i = e,
                u.contains(c, i)) {
                    var r = d[e] || {
                        que: []
                    };
                    n ? (r[n] = r[n] || {
                        que: []
                    },
                    r[n].que.push(t)) : r.que.push(t),
                    d[e] = r
                } else
                    u.logError("Wrong event name : " + e + " Valid event names :" + c);
                var i
            }
            ,
            r.emit = function(e) {
                !(function(e, t) {
                    u.logMessage("Emitting event for: " + e);
                    var n = t[0] || {}
                      , r = n[f[e]]
                      , i = d[e] || {
                        que: []
                    }
                      , o = u._map(i, (function(e, t) {
                        return t
                    }
                    ))
                      , a = [];
                    l.push({
                        eventType: e,
                        args: n,
                        id: r
                    }),
                    r && u.contains(o, r) && s.apply(a, i[r].que),
                    s.apply(a, i.que),
                    u._each(a, (function(e) {
                        if (e)
                            try {
                                e.apply(null, t)
                            } catch (e) {
                                u.logError("Error executing handler:", "events.js", e)
                            }
                    }
                    ))
                }
                )(e, a.call(arguments, 1))
            }
            ,
            r.off = function(e, n, r) {
                var i = d[e];
                u.isEmpty(i) || u.isEmpty(i.que) && u.isEmpty(i[r]) || r && (u.isEmpty(i[r]) || u.isEmpty(i[r].que)) || (r ? u._each(i[r].que, (function(e) {
                    var t = i[r].que;
                    e === n && t.splice(u.indexOf.call(t, e), 1)
                }
                )) : u._each(i.que, (function(e) {
                    var t = i.que;
                    e === n && t.splice(u.indexOf.call(t, e), 1)
                }
                )),
                d[e] = i)
            }
            ,
            r.get = function() {
                return d
            }
            ,
            r.getEvents = function() {
                var n = [];
                return u._each(l, (function(e) {
                    var t = i({}, e);
                    n.push(t)
                }
                )),
                n
            }
            ,
            r)
        }
    });
    pbjsChunk([138], {
        129: function(e, r, t) {
            t(130),
            e.exports = t(131)
        },
        130: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }),
            r.spec = void 0;
            var n = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var i in t)
                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
                return e
            }
              , i = l(["//", "/pubapi/3.0/", "/", "/", "/", "/ADTECH;v=2;cmd=bid;cors=yes;alias=", ";misc=", ";", ""], ["//", "/pubapi/3.0/", "/", "/", "/", "/ADTECH;v=2;cmd=bid;cors=yes;alias=", ";misc=", ";", ""])
              , a = l(["//", "/bidRequest?"], ["//", "/bidRequest?"])
              , o = l(["dcn=", "&pos=", "&cmd=bid", ""], ["dcn=", "&pos=", "&cmd=bid", ""])
              , s = (function(e) {
                {
                    if (e && e.__esModule)
                        return e;
                    var r = {};
                    if (null != e)
                        for (var t in e)
                            Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
                    return r.default = e,
                    r
                }
            }
            )(t(0))
              , d = t(1)
              , c = t(3)
              , u = t(4)
              , p = t(2);
            function l(e, r) {
                return Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(r)
                    }
                }))
            }
            var m = {
                AOL: "aol",
                ONEMOBILE: "onemobile",
                ONEDISPLAY: "onedisplay"
            }
              , b = {
                GET: "display-get"
            }
              , f = {
                GET: "mobile-get",
                POST: "mobile-post"
            }
              , v = {
                TAG: "iframe",
                TYPE: "iframe"
            }
              , h = {
                TAG: "img",
                TYPE: "image"
            }
              , g = T(i, "host", "network", "placement", "pageid", "sizeid", "alias", "misc", "dynamicParams")
              , O = T(a, "host")
              , y = T(o, "dcn", "pos", "dynamicParams")
              , E = {
                us: "adserver-us.adtech.advertising.com",
                eu: "adserver-eu.adtech.advertising.com",
                as: "adserver-as.adtech.advertising.com"
            };
            pbjs.aolGlobals = {
                pixelsDropped: !1
            };
            var P, x = 1, S = (P = !0,
            function() {
                var e = pbjs.bidderSettings;
                P && e && e.aol && "function" == typeof e.aol.bidCpmAdjustment && (s.logWarn("bidCpmAdjustment is active for the AOL adapter. As of Prebid 0.14, AOL can bid in net u2013 please contact your accounts team to enable."),
                P = !1)
            }
            );
            function T(o) {
                for (var e = arguments.length, t = Array(1 < e ? e - 1 : 0), r = 1; r < e; r++)
                    t[r - 1] = arguments[r];
                return function() {
                    for (var e = arguments.length, i = Array(e), r = 0; r < e; r++)
                        i[r] = arguments[r];
                    var n = i[i.length - 1] || {}
                      , a = [o[0]];
                    return t.forEach((function(e, r) {
                        var t = s.isInteger(e) ? i[e] : n[e];
                        a.push(t, o[r + 1])
                    }
                    )),
                    a.join("")
                }
            }
            function A(e) {
                return e === m.AOL || e === m.ONEMOBILE
            }
            function I(e) {
                if (A(e.bidder) && e.params.id && e.params.imp && e.params.imp[0]) {
                    var r = e.params.imp[0];
                    return r.id && r.tagid && (r.banner && r.banner.w && r.banner.h || r.video && r.video.mimes && r.video.minduration && r.video.maxduration)
                }
            }
            function D(e) {
                return A(e.bidder) && e.params.dcn && e.params.pos
            }
            function R(e) {
                return ((r = e.bidder) === m.AOL || r === m.ONEDISPLAY) && e.params.placement && e.params.network;
                var r
            }
            var w = r.spec = {
                code: m.AOL,
                aliases: [m.ONEMOBILE, m.ONEDISPLAY],
                supportedMediaTypes: [p.BANNER],
                isBidRequestValid: function(e) {
                    return R(e) || (D(r = e) || I(r));
                    var r
                },
                buildRequests: function(e, r) {
                    var i = this
                      , n = r ? r.gdprConsent : null;
                    return e.map((function(e) {
                        var r, t = D(r = e) ? f.GET : I(r) ? f.POST : R(r) ? b.GET : void 0;
                        if (t)
                            return i.formatBidRequest(t, e, n)
                    }
                    ))
                },
                interpretResponse: function(e, r) {
                    var t = e.body;
                    if (S(),
                    t) {
                        var i = this._parseBidResponse(t, r);
                        if (i)
                            return i
                    } else
                        s.logError("Empty bid response", r.bidderCode, t)
                },
                getUserSyncs: function(e, r) {
                    var t = r[0];
                    return c.config.getConfig("aol.userSyncOn") === u.EVENTS.BID_RESPONSE && !pbjs.aolGlobals.pixelsDropped && t && t.ext && t.ext.pixels ? (pbjs.aolGlobals.pixelsDropped = !0,
                    (function(e) {
                        var i = /\w*(?=\s)/
                          , n = /src=("|')(.*?)\1/
                          , a = [];
                        if (e) {
                            var r = e.match(/(img|iframe)[\s\S]*?src\s*=\s*("|')(.*?)\2/gi);
                            r && r.forEach((function(e) {
                                var r = e.match(i)[0]
                                  , t = e.match(n)[2];
                                r && r && a.push({
                                    type: r === h.TAG ? h.TYPE : v.TYPE,
                                    url: t
                                })
                            }
                            ))
                        }
                        return a
                    }
                    )(t.ext.pixels)) : []
                },
                formatBidRequest: function(e, r, t) {
                    var i = void 0;
                    switch (e) {
                    case b.GET:
                        i = {
                            url: this.buildMarketplaceUrl(r, t),
                            method: "GET",
                            ttl: 60
                        };
                        break;
                    case f.GET:
                        i = {
                            url: this.buildOneMobileGetUrl(r, t),
                            method: "GET",
                            ttl: 3600
                        };
                        break;
                    case f.POST:
                        i = {
                            url: this.buildOneMobileBaseUrl(r),
                            method: "POST",
                            ttl: 3600,
                            data: this.buildOpenRtbRequestData(r, t),
                            options: {
                                contentType: "application/json",
                                customHeaders: {
                                    "x-openrtb-version": "2.2"
                                }
                            }
                        }
                    }
                    return i.bidderCode = r.bidder,
                    i.bidId = r.bidId,
                    i.userSyncOn = r.params.userSyncOn,
                    i
                },
                buildMarketplaceUrl: function(e, r) {
                    var t = e.params
                      , i = t.server
                      , n = t.region || "us"
                      , a = void 0;
                    return E.hasOwnProperty(n) || (s.logWarn("Unknown region '" + n + "' for AOL bidder."),
                    n = "us"),
                    a = i || E[n],
                    t.region = n,
                    g({
                        host: a,
                        network: t.network,
                        placement: parseInt(t.placement),
                        pageid: t.pageId || 0,
                        sizeid: t.sizeId || 0,
                        alias: t.alias || s.getUniqueIdentifierStr(),
                        misc: (new Date).getTime(),
                        dynamicParams: this.formatMarketplaceDynamicParams(t, r)
                    })
                },
                buildOneMobileGetUrl: function(e, r) {
                    var t = e.params
                      , i = t.dcn
                      , n = t.pos
                      , a = t.ext
                      , o = this.buildOneMobileBaseUrl(e);
                    if (i && n) {
                        var s = this.formatOneMobileDynamicParams(a, r);
                        o += y({
                            dcn: i,
                            pos: n,
                            dynamicParams: s
                        })
                    }
                    return o
                },
                buildOneMobileBaseUrl: function(e) {
                    return O({
                        host: e.params.host || "hb.nexage.com"
                    })
                },
                formatMarketplaceDynamicParams: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                      , r = arguments[1]
                      , t = {};
                    e.bidFloor && (t.bidfloor = e.bidFloor),
                    n(t, this.formatKeyValues(e.keyValues)),
                    n(t, this.formatConsentData(r));
                    var i = "";
                    return s._each(t, (function(e, r) {
                        i += r + "=" + encodeURIComponent(e) + ";"
                    }
                    )),
                    i
                },
                formatOneMobileDynamicParams: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                      , r = arguments[1];
                    this.isSecureProtocol() && (e.secure = x),
                    n(e, this.formatConsentData(r));
                    var t = "";
                    return s._each(e, (function(e, r) {
                        t += "&" + r + "=" + encodeURIComponent(e)
                    }
                    )),
                    t
                },
                buildOpenRtbRequestData: function(e, r) {
                    var t = {
                        id: e.params.id,
                        imp: e.params.imp
                    };
                    return this.isConsentRequired(r) && (t.regs = {
                        ext: {
                            gdpr: x
                        }
                    },
                    r.consentString && (t.user = {
                        ext: {
                            consent: r.consentString
                        }
                    })),
                    t
                },
                isConsentRequired: function(e) {
                    return !(!e || !e.gdprApplies)
                },
                formatKeyValues: function(e) {
                    var t = {};
                    return s._each(e, (function(e, r) {
                        t["kv" + r] = e
                    }
                    )),
                    t
                },
                formatConsentData: function(e) {
                    var r = {};
                    return this.isConsentRequired(e) && (r.gdpr = x,
                    e.consentString && (r.euconsent = e.consentString)),
                    r
                },
                _parseBidResponse: function(e, r) {
                    var t = void 0;
                    try {
                        t = e.seatbid[0].bid[0]
                    } catch (e) {
                        return
                    }
                    var i = void 0;
                    if (t.ext && t.ext.encp)
                        i = t.ext.encp;
                    else if (null === (i = t.price) || isNaN(i))
                        return void s.logError("Invalid price in bid response", m.AOL, bid);
                    var n = {
                        bidderCode: r.bidderCode,
                        requestId: r.bidId,
                        ad: t.adm,
                        cpm: i,
                        width: t.w,
                        height: t.h,
                        creativeId: t.crid,
                        pubapiId: e.id,
                        currency: e.cur,
                        dealId: t.dealid,
                        netRevenue: !0,
                        ttl: r.ttl
                    };
                    return e.ext && e.ext.pixels && c.config.getConfig("aol.userSyncOn") !== u.EVENTS.BID_RESPONSE && (n.ad += this.formatPixels(e.ext.pixels)),
                    n
                },
                formatPixels: function(e) {
                    return "<script>var w=window,prebid;for(var i=0;i<10;i++){w = w.parent;prebid=w.pbjs;if(prebid && prebid.aolGlobals && !prebid.aolGlobals.pixelsDropped){try{prebid.aolGlobals.pixelsDropped=true;" + e.replace(/<\/?script( type=('|")text\/javascript('|")|)?>/g, "") + "break;}catch(e){continue;}}}<\/script>"
                },
                isOneMobileBidder: A,
                isSecureProtocol: function() {
                    return "https:" === document.location.protocol
                }
            };
            (0,
            d.registerBidder)(w)
        },
        131: function(e, r) {}
    }, [129]);
    pbjsChunk([136], {
        134: function(e, r, a) {
            a(135),
            e.exports = a(136)
        },
        135: function(e, r, a) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }),
            r.spec = void 0;
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
              , o = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var a = arguments[r];
                    for (var t in a)
                        Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            }
              , p = a(12)
              , u = (function(e) {
                {
                    if (e && e.__esModule)
                        return e;
                    var r = {};
                    if (null != e)
                        for (var a in e)
                            Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
                    return r.default = e,
                    r
                }
            }
            )(a(0))
              , t = a(1)
              , m = a(2)
              , c = s(a(10))
              , l = s(a(5));
            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var f = ["id", "mimes", "minduration", "maxduration", "startdelay", "skippable", "playback_method", "frameworks"]
              , y = ["age", "external_uid", "segments", "gender", "dnt", "language"]
              , v = ["geo", "device_id"]
              , b = {
                body: "description",
                cta: "ctatext",
                image: {
                    serverName: "main_image",
                    requiredParams: {
                        required: !0
                    },
                    minimumParams: {
                        sizes: [{}]
                    }
                },
                icon: {
                    serverName: "icon",
                    requiredParams: {
                        required: !0
                    },
                    minimumParams: {
                        sizes: [{}]
                    }
                },
                sponsoredBy: "sponsored_by"
            }
              , n = r.spec = {
                code: "appnexus",
                aliases: ["appnexusAst", "brealtime", "emxdigital", "pagescience", "defymedia", "gourmetads", "matomy", "featureforward", "oftmedia", "districtm"],
                supportedMediaTypes: [m.BANNER, m.VIDEO, m.NATIVE],
                isBidRequestValid: function(e) {
                    return !!(e.params.placementId || e.params.member && e.params.invCode)
                },
                buildRequests: function(e, r) {
                    var a = e.map(g)
                      , t = (0,
                    c.default)(e, _)
                      , s = void 0;
                    t && (s = {},
                    Object.keys(t.params.user).filter((function(e) {
                        return (0,
                        l.default)(y, e)
                    }
                    )).forEach((function(e) {
                        return s[e] = t.params.user[e]
                    }
                    )));
                    var i = (0,
                    c.default)(e, E)
                      , n = void 0;
                    i && i.params && i.params.app && (n = {},
                    Object.keys(i.params.app).filter((function(e) {
                        return (0,
                        l.default)(v, e)
                    }
                    )).forEach((function(e) {
                        return n[e] = i.params.app[e]
                    }
                    )));
                    var d = (0,
                    c.default)(e, k)
                      , o = void 0;
                    d && d.params && i.params.app && i.params.app.id && (o = {
                        appid: d.params.app.id
                    });
                    var p = (0,
                    c.default)(e, I)
                      , u = p ? parseInt(p.params.member, 10) : 0
                      , m = {
                        tags: [].concat(function(e) {
                            if (Array.isArray(e)) {
                                for (var r = 0, a = Array(e.length); r < e.length; r++)
                                    a[r] = e[r];
                                return a
                            }
                            return Array.from(e)
                        }(a)),
                        user: s,
                        sdk: {
                            source: "pbjs",
                            version: "1.21.0"
                        }
                    };
                    return 0 < u && (m.member_id = u),
                    i && (m.device = n),
                    d && (m.app = o),
                    r && r.gdprConsent && (m.gdpr_consent = {
                        consent_string: r.gdprConsent.consentString,
                        consent_required: r.gdprConsent.gdprApplies
                    }),
                    {
                        method: "POST",
                        url: "//ib.adnxs.com/ut/v3/prebid",
                        data: JSON.stringify(m),
                        bidderRequest: r
                    }
                },
                interpretResponse: function(e, r) {
                    var i = this
                      , n = r.bidderRequest;
                    e = e.body;
                    var d = [];
                    if (e && !e.error)
                        return e.tags && e.tags.forEach((function(e) {
                            var r, a, t = (r = e) && r.ads && r.ads.length && (0,
                            c.default)(r.ads, (function(e) {
                                return e.rtb
                            }
                            ));
                            if (t && 0 !== t.cpm && (0,
                            l.default)(i.supportedMediaTypes, t.ad_type)) {
                                var s = (function(e, r, a) {
                                    var t = {
                                        requestId: e.uuid,
                                        cpm: r.cpm,
                                        creativeId: r.creative_id,
                                        dealId: r.deal_id,
                                        currency: "USD",
                                        netRevenue: !0,
                                        ttl: 300,
                                        appnexus: {
                                            buyerMemberId: r.buyer_member_id
                                        }
                                    };
                                    if (r.rtb.video) {
                                        if (o(t, {
                                            width: r.rtb.video.player_width,
                                            height: r.rtb.video.player_height,
                                            vastUrl: r.rtb.video.asset_url,
                                            vastImpUrl: r.notify_url,
                                            ttl: 3600
                                        }),
                                        r.renderer_url) {
                                            var s = u.deepAccess(a.bids[0], "renderer.options");
                                            o(t, {
                                                adResponse: e,
                                                renderer: (function(e, r) {
                                                    var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}
                                                      , t = p.Renderer.install({
                                                        id: r.renderer_id,
                                                        url: r.renderer_url,
                                                        config: a,
                                                        loaded: !1
                                                    });
                                                    try {
                                                        t.setRender(T)
                                                    } catch (e) {
                                                        u.logWarn("Prebid Error calling setRender on renderer", e)
                                                    }
                                                    return t.setEventHandlers({
                                                        impression: function() {
                                                            return u.logMessage("AppNexus outstream video impression event")
                                                        },
                                                        loaded: function() {
                                                            return u.logMessage("AppNexus outstream video loaded event")
                                                        },
                                                        ended: function() {
                                                            u.logMessage("AppNexus outstream renderer video event"),
                                                            document.querySelector("#" + e).style.display = "none"
                                                        }
                                                    }),
                                                    t
                                                }
                                                )(t.adUnitCode, r, s)
                                            }),
                                            t.adResponse.ad = t.adResponse.ads[0],
                                            t.adResponse.ad.video = t.adResponse.ad.rtb.video
                                        }
                                    } else if (r.rtb[m.NATIVE]) {
                                        var i = r.rtb[m.NATIVE];
                                        t[m.NATIVE] = {
                                            title: i.title,
                                            body: i.desc,
                                            cta: i.ctatext,
                                            sponsoredBy: i.sponsored,
                                            clickUrl: i.link.url,
                                            clickTrackers: i.link.click_trackers,
                                            impressionTrackers: i.impression_trackers,
                                            javascriptTrackers: i.javascript_trackers
                                        },
                                        i.main_img && (t.native.image = {
                                            url: i.main_img.url,
                                            height: i.main_img.height,
                                            width: i.main_img.width
                                        }),
                                        i.icon && (t.native.icon = {
                                            url: i.icon.url,
                                            height: i.icon.height,
                                            width: i.icon.width
                                        })
                                    } else {
                                        o(t, {
                                            width: r.rtb.banner.width,
                                            height: r.rtb.banner.height,
                                            ad: r.rtb.banner.content
                                        });
                                        try {
                                            var n = r.rtb.trackers[0].impression_urls[0]
                                              , d = u.createTrackPixelHtml(n);
                                            t.ad += d
                                        } catch (e) {
                                            u.logError("Error appending tracking pixel", e)
                                        }
                                    }
                                    return t
                                }
                                )(e, t, n);
                                s.mediaType = (a = t.ad_type) === m.VIDEO ? m.VIDEO : a === m.NATIVE ? m.NATIVE : m.BANNER,
                                d.push(s)
                            }
                        }
                        )),
                        d;
                    var a = "in response for " + n.bidderCode + " adapter";
                    return e && e.error && (a += ": " + e.error),
                    u.logError(a),
                    d
                },
                getUserSyncs: function(e) {
                    if (e.iframeEnabled)
                        return [{
                            type: "iframe",
                            url: "//acdn.adnxs.com/ib/static/usersync/v3/async_usersync.html"
                        }]
                },
                transformBidParams: function(a, e) {
                    return a = u.convertTypes({
                        member: "string",
                        invCode: "string",
                        placementId: "number",
                        keywords: u.transformBidderParamKeywords
                    }, a),
                    e && (a.use_pmt_rule = "boolean" == typeof a.usePaymentRule && a.usePaymentRule,
                    a.usePaymentRule && delete a.usePaymentRule,
                    Object.keys(a).forEach((function(e) {
                        var r = u.convertCamelToUnderscore(e);
                        r !== e && (a[r] = a[e],
                        delete a[e])
                    }
                    ))),
                    a
                }
            };
            function g(r) {
                var n, d, a = {};
                if (a.sizes = h(r.sizes),
                a.primary_size = a.sizes[0],
                a.ad_types = [],
                a.uuid = r.bidId,
                r.params.placementId ? a.id = parseInt(r.params.placementId, 10) : a.code = r.params.invCode,
                a.allow_smaller_sizes = r.params.allowSmallerSizes || !1,
                a.use_pmt_rule = r.params.usePaymentRule || !1,
                a.prebid = !0,
                a.disable_psa = !0,
                r.params.reserve && (a.reserve = r.params.reserve),
                r.params.position && (a.position = {
                    above: 1,
                    below: 2
                }[r.params.position] || 0),
                r.params.trafficSourceCode && (a.traffic_source_code = r.params.trafficSourceCode),
                r.params.privateSizes && (a.private_sizes = h(r.params.privateSizes)),
                r.params.supplyType && (a.supply_type = r.params.supplyType),
                r.params.pubClick && (a.pubclick = r.params.pubClick),
                r.params.extInvCode && (a.ext_inv_code = r.params.extInvCode),
                r.params.externalImpId && (a.external_imp_id = r.params.externalImpId),
                u.isEmpty(r.params.keywords) || (a.keywords = u.transformBidderParamKeywords(r.params.keywords)),
                (r.mediaType === m.NATIVE || u.deepAccess(r, "mediaTypes." + m.NATIVE)) && (a.ad_types.push(m.NATIVE),
                r.nativeParams)) {
                    var e = (n = r.nativeParams,
                    d = {},
                    Object.keys(n).forEach((function(e) {
                        var r = b[e] && b[e].serverName || b[e] || e
                          , a = b[e] && b[e].requiredParams;
                        d[r] = o({}, a, n[e]);
                        var t = b[e] && b[e].minimumParams;
                        if (a && t) {
                            var s = Object.keys(n[e])
                              , i = Object.keys(a);
                            0 === s.filter((function(e) {
                                return !(0,
                                l.default)(i, e)
                            }
                            )).length && (d[r] = o({}, d[r], t))
                        }
                    }
                    )),
                    d);
                    a[m.NATIVE] = {
                        layouts: [e]
                    }
                }
                var t = u.deepAccess(r, "mediaTypes." + m.VIDEO)
                  , s = u.deepAccess(r, "mediaTypes.video.context");
                return (r.mediaType === m.VIDEO || t) && a.ad_types.push(m.VIDEO),
                (r.mediaType === m.VIDEO || t && "outstream" !== s) && (a.require_asset_url = !0),
                r.params.video && (a.video = {},
                Object.keys(r.params.video).filter((function(e) {
                    return (0,
                    l.default)(f, e)
                }
                )).forEach((function(e) {
                    return a.video[e] = r.params.video[e]
                }
                ))),
                (u.isEmpty(r.mediaType) && u.isEmpty(r.mediaTypes) || r.mediaType === m.BANNER || r.mediaTypes && r.mediaTypes[m.BANNER]) && a.ad_types.push(m.BANNER),
                a
            }
            function h(e) {
                var r = []
                  , a = {};
                if (u.isArray(e) && 2 === e.length && !u.isArray(e[0]))
                    a.width = parseInt(e[0], 10),
                    a.height = parseInt(e[1], 10),
                    r.push(a);
                else if ("object" === (void 0 === e ? "undefined" : i(e)))
                    for (var t = 0; t < e.length; t++) {
                        var s = e[t];
                        (a = {}).width = parseInt(s[0], 10),
                        a.height = parseInt(s[1], 10),
                        r.push(a)
                    }
                return r
            }
            function _(e) {
                return !!e.params.user
            }
            function I(e) {
                return !!parseInt(e.params.member, 10)
            }
            function E(e) {
                if (e.params)
                    return !!e.params.app
            }
            function k(e) {
                return e.params && e.params.app ? !!e.params.app.id : !!e.params.app
            }
            function T(e) {
                e.renderer.push((function() {
                    window.ANOutstreamVideo.renderAd({
                        tagId: e.adResponse.tag_id,
                        sizes: [e.getSize().split("x")],
                        targetId: e.adUnitCode,
                        uuid: e.adResponse.uuid,
                        adResponse: e.adResponse,
                        rendererOptions: e.renderer.getConfig()
                    }, function(e, r, a) {
                        e.renderer.handleVideoEvent({
                            id: r,
                            eventName: a
                        })
                    }
                    .bind(null, e))
                }
                ))
            }
            (0,
            t.registerBidder)(n)
        },
        136: function(e, r) {}
    }, [134]);
    pbjsChunk([119], {
        192: function(e, t, r) {
            r(193),
            e.exports = r(194)
        },
        193: function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }),
            exports.spec = void 0;
            var _adloader = __webpack_require__(22)
              , _bidderFactory = __webpack_require__(1)
              , _url = __webpack_require__(11)
              , _utils = __webpack_require__(0)
              , utils = _interopRequireWildcard(_utils)
              , _find = __webpack_require__(10)
              , _find2 = _interopRequireDefault(_find);
            function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            function _interopRequireWildcard(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var r in e)
                        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e,
                t
            }
            var ADAPTER_VERSION = 11
              , BIDDER_CODE = "criteo"
              , CDB_ENDPOINT = "//bidder.criteo.com/cdb"
              , CRITEO_VENDOR_ID = 91
              , INTEGRATION_MODES = {
                amp: 1
            }
              , PROFILE_ID_INLINE = 207
              , PROFILE_ID_PUBLISHERTAG = 185
              , PUBLISHER_TAG_URL = "//static.criteo.net/js/ld/publishertag.prebid.js"
              , spec = exports.spec = {
                code: BIDDER_CODE,
                isBidRequestValid: function(e) {
                    return !(!e || !e.params || !e.params.zoneId && !e.params.networkId)
                },
                buildRequests: function(e, t) {
                    var r = void 0
                      , i = void 0;
                    if (publisherTagAvailable() || (window.Criteo = window.Criteo || {},
                    window.Criteo.usePrebidEvents = !1,
                    tryGetCriteoFastBid(),
                    setTimeout((function() {
                        (0,
                        _adloader.loadExternalScript)(PUBLISHER_TAG_URL, BIDDER_CODE)
                    }
                    ), t.timeout)),
                    publisherTagAvailable()) {
                        var n = new Criteo.PubTag.Adapters.Prebid(PROFILE_ID_PUBLISHERTAG,ADAPTER_VERSION,e,t,"1.21.0");
                        r = n.buildCdbUrl(),
                        i = n.buildCdbRequest()
                    } else {
                        var o = buildContext(e);
                        r = buildCdbUrl(o),
                        i = buildCdbRequest(o, e, t)
                    }
                    if (i)
                        return {
                            method: "POST",
                            url: r,
                            data: i,
                            bidRequests: e
                        }
                },
                interpretResponse: function(e, n) {
                    var t = e.body || e;
                    if (publisherTagAvailable()) {
                        var r = Criteo.PubTag.Adapters.Prebid.GetAdapter(n);
                        if (r)
                            return r.interpretResponse(t, n)
                    }
                    var o = [];
                    return t && t.slots && utils.isArray(t.slots) && t.slots.forEach((function(t) {
                        var e = (0,
                        _find2.default)(n.bidRequests, (function(e) {
                            return e.adUnitCode === t.impid && (!e.params.zoneId || parseInt(e.params.zoneId) === t.zoneid)
                        }
                        ))
                          , r = e.bidId
                          , i = {
                            requestId: r,
                            cpm: t.cpm,
                            currency: t.currency,
                            netRevenue: !0,
                            ttl: t.ttl || 60,
                            creativeId: r,
                            width: t.width,
                            height: t.height
                        };
                        t.native ? i.ad = createNativeAd(r, t.native, e.params.nativeCallback) : i.ad = t.creative,
                        o.push(i)
                    }
                    )),
                    o
                },
                onTimeout: function(e) {
                    publisherTagAvailable() && Criteo.PubTag.Adapters.Prebid.GetAdapter(e.auctionId).handleBidTimeout()
                }
            };
            function publisherTagAvailable() {
                return "undefined" != typeof Criteo && Criteo.PubTag && Criteo.PubTag.Adapters && Criteo.PubTag.Adapters.Prebid
            }
            function buildContext(e) {
                var t = utils.getTopWindowUrl()
                  , r = (0,
                _url.parse)(t).search
                  , i = {
                    url: t,
                    debug: "1" === r.pbt_debug,
                    noLog: "1" === r.pbt_nolog,
                    integrationMode: void 0
                };
                return e.forEach((function(e) {
                    e.params.integrationMode && (i.integrationMode = e.params.integrationMode)
                }
                )),
                i
            }
            function buildCdbUrl(e) {
                var t = CDB_ENDPOINT;
                return t += "?profileId=" + PROFILE_ID_INLINE,
                t += "&av=" + String(ADAPTER_VERSION),
                t += "&wv=" + encodeURIComponent("1.21.0"),
                t += "&cb=" + String(Math.floor(99999999999 * Math.random())),
                e.integrationMode in INTEGRATION_MODES && (t += "&im=" + INTEGRATION_MODES[e.integrationMode]),
                e.debug && (t += "&debug=1"),
                e.noLog && (t += "&nolog=1"),
                t
            }
            function buildCdbRequest(e, t, r) {
                var i = void 0
                  , n = {
                    publisher: {
                        url: e.url
                    },
                    slots: t.map((function(e) {
                        i = e.params.networkId || i;
                        var t = {
                            impid: e.adUnitCode,
                            transactionid: e.transactionId,
                            auctionId: e.auctionId,
                            sizes: e.sizes.map((function(e) {
                                return e[0] + "x" + e[1]
                            }
                            ))
                        };
                        return e.params.zoneId && (t.zoneid = e.params.zoneId),
                        e.params.publisherSubId && (t.publishersubid = e.params.publisherSubId),
                        e.params.nativeCallback && (t.native = !0),
                        t
                    }
                    ))
                };
                return i && (n.publisher.networkid = i),
                r && r.gdprConsent && (n.gdprConsent = {},
                void 0 !== r.gdprConsent.gdprApplies && (n.gdprConsent.gdprApplies = !!r.gdprConsent.gdprApplies),
                r.gdprConsent.vendorData && r.gdprConsent.vendorData.vendorConsents && void 0 !== r.gdprConsent.vendorData.vendorConsents[CRITEO_VENDOR_ID.toString(10)] && (n.gdprConsent.consentGiven = !!r.gdprConsent.vendorData.vendorConsents[CRITEO_VENDOR_ID.toString(10)]),
                void 0 !== r.gdprConsent.consentString && (n.gdprConsent.consentData = r.gdprConsent.consentString)),
                n
            }
            function createNativeAd(e, t, r) {
                return window.criteo_prebid_native_slots = window.criteo_prebid_native_slots || {},
                window.criteo_prebid_native_slots[e] = {
                    callback: r,
                    payload: t
                },
                '<script type="text/javascript">\n    var win = window;\n    for (var i = 0; i < 10; ++i) {\n      win = win.parent;\n      if (win.criteo_prebid_native_slots) {\n        var responseSlot = win.criteo_prebid_native_slots["' + e + '"];\n        responseSlot.callback(responseSlot.payload);\n        break;\n      }\n    }\n  <\/script>'
            }
            function tryGetCriteoFastBid() {
                try {
                    var fastBid = localStorage.getItem("criteo_fast_bid");
                    if (null !== fastBid)
                        return eval(fastBid),
                        !0
                } catch (e) {}
                return !1
            }
            (0,
            _bidderFactory.registerBidder)(spec)
        },
        194: function(e, t) {}
    }, [192]);
    pbjsChunk([0], {
        286: function(r, e, t) {
            t(287),
            r.exports = t(293)
        },
        287: function(r, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.spec = void 0;
            var y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(r) {
                return typeof r
            }
            : function(r) {
                return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
            }
              , b = (function(r) {
                {
                    if (r && r.__esModule)
                        return r;
                    var e = {};
                    if (null != r)
                        for (var t in r)
                            Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
                    return e.default = r,
                    e
                }
            }
            )(t(0))
              , n = t(2)
              , h = t(3)
              , i = s(t(288))
              , o = s(t(290))
              , a = t(1);
            function s(r) {
                return r && r.__esModule ? r : {
                    default: r
                }
            }
            var p = [n.BANNER]
              , f = 100
              , c = 35
              , m = !0
              , d = !0;
            0 !== b.getTopWindowLocation().protocol.indexOf("https") && (d = !1);
            var g = d ? "https://as-sec.casalemedia.com/cygnus" : "http://as.casalemedia.com/cygnus"
              , l = {
                JPY: 1
            };
            function u(r) {
                return (0,
                i.default)(r) && 2 === r.length && (0,
                o.default)(r[0]) && (0,
                o.default)(r[1])
            }
            var v = e.spec = {
                code: "ix",
                aliases: ["indexExchange"],
                supportedMediaTypes: p,
                isBidRequestValid: function(r) {
                    if (!u(r.params.size))
                        return !1;
                    if (!(function(r, e) {
                        if (u(r))
                            return r[0] === e[0] && r[1] === e[1];
                        for (var t = 0; t < r.length; t++)
                            if (r[t][0] === e[0] && r[t][1] === e[1])
                                return !0;
                        return !1
                    }
                    )(r.sizes, r.params.size))
                        return !1;
                    if (r.hasOwnProperty("mediaType") && "banner" !== r.mediaType)
                        return !1;
                    if (r.hasOwnProperty("mediaTypes") && !b.deepAccess(r, "mediaTypes.banner.sizes"))
                        return !1;
                    if ("string" != typeof r.params.siteId && "number" != typeof r.params.siteId)
                        return !1;
                    var e, t, n = r.params.hasOwnProperty("bidFloor"), i = r.params.hasOwnProperty("bidFloorCur");
                    return !n && !i || n && i && (e = r.params.bidFloor,
                    t = r.params.bidFloorCur,
                    Boolean("number" == typeof e && "string" == typeof t && t.match(/^[A-Z]{3}$/)))
                },
                buildRequests: function(r, e) {
                    for (var t, n, i = [], o = null, a = null, s = 0; s < r.length; s++)
                        o = r[s],
                        n = void 0,
                        (n = {}).id = (t = o).bidId,
                        n.banner = {},
                        n.banner.w = t.params.size[0],
                        n.banner.h = t.params.size[1],
                        n.banner.topframe = b.inIframe() ? 0 : 1,
                        n.ext = {},
                        n.ext.siteID = t.params.siteId,
                        !t.params.hasOwnProperty("id") || "string" != typeof t.params.id && "number" != typeof t.params.id ? n.ext.sid = t.params.size[0] + "x" + t.params.size[1] : n.ext.sid = String(t.params.id),
                        t.params.hasOwnProperty("bidFloor") && t.params.hasOwnProperty("bidFloorCur") && (n.bidfloor = t.params.bidFloor,
                        n.bidfloorcur = t.params.bidFloorCur),
                        a = n,
                        i.push(a);
                    var p = {};
                    if (p.id = r[0].bidderRequestId,
                    p.imp = i,
                    p.site = {},
                    p.site.page = b.getTopWindowUrl(),
                    p.site.ref = b.getTopWindowReferrer(),
                    p.ext = {},
                    p.ext.source = "prebid",
                    e && e.gdprConsent) {
                        var d = e.gdprConsent;
                        d.hasOwnProperty("gdprApplies") && (p.regs = {
                            ext: {
                                gdpr: d.gdprApplies ? 1 : 0
                            }
                        }),
                        d.hasOwnProperty("consentString") && (p.user = {
                            ext: {
                                consent: d.consentString || ""
                            }
                        })
                    }
                    var u = {}
                      , f = h.config.getConfig("ix");
                    if (f) {
                        if ("object" === y(f.firstPartyData)) {
                            var c = f.firstPartyData
                              , m = "?";
                            for (var l in c)
                                c.hasOwnProperty(l) && (m += encodeURIComponent(l) + "=" + encodeURIComponent(c[l]) + "&");
                            m = m.slice(0, -1),
                            p.site.page += m
                        }
                        "number" == typeof f.timeout && (u.t = f.timeout)
                    }
                    return u.s = r[0].params.siteId,
                    u.v = 7.2,
                    u.r = JSON.stringify(p),
                    u.ac = "j",
                    u.sd = 1,
                    {
                        method: "GET",
                        url: g,
                        data: u
                    }
                },
                interpretResponse: function(r) {
                    var e = []
                      , t = null;
                    if (!r.hasOwnProperty("body") || !r.body.hasOwnProperty("seatbid"))
                        return e;
                    for (var n, i, o, a = r.body, s = a.seatbid, p = 0; p < s.length; p++)
                        if (s[p].hasOwnProperty("bid"))
                            for (var d = s[p].bid, u = 0; u < d.length; u++)
                                n = d[u],
                                i = a.cur,
                                o = void 0,
                                o = {},
                                l.hasOwnProperty(i) ? o.cpm = n.price / l[i] : o.cpm = n.price / f,
                                o.requestId = n.impid,
                                o.width = n.w,
                                o.height = n.h,
                                o.ad = n.adm,
                                o.dealId = b.deepAccess(n, "ext.dealid"),
                                o.ttl = c,
                                o.netRevenue = m,
                                o.currency = i,
                                o.creativeId = n.hasOwnProperty("crid") ? n.crid : "-",
                                t = o,
                                e.push(t);
                    return e
                },
                transformBidParams: function(r, e) {
                    return b.convertTypes({
                        siteID: "number"
                    }, r)
                }
            };
            (0,
            a.registerBidder)(v)
        },
        288: function(r, e, t) {
            t(289),
            r.exports = t(13).Array.isArray
        },
        289: function(r, e, t) {
            var n = t(15);
            n(n.S, "Array", {
                isArray: t(38)
            })
        },
        290: function(r, e, t) {
            t(291),
            r.exports = t(13).Number.isInteger
        },
        291: function(r, e, t) {
            var n = t(15);
            n(n.S, "Number", {
                isInteger: t(292)
            })
        },
        292: function(r, e, t) {
            var n = t(16)
              , i = Math.floor;
            r.exports = function(r) {
                return !n(r) && isFinite(r) && i(r) === r
            }
        },
        293: function(r, e) {}
    }, [286]);
    pbjsChunk([71], {
        352: function(e, t, r) {
            r(353),
            e.exports = r(354)
        },
        353: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.spec = void 0;
            var o = function(e, t) {
                if (Array.isArray(e))
                    return e;
                if (Symbol.iterator in Object(e))
                    return (function(e, t) {
                        var r = []
                          , n = !0
                          , i = !1
                          , a = void 0;
                        try {
                            for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (r.push(s.value),
                            !t || r.length !== t); n = !0)
                                ;
                        } catch (e) {
                            i = !0,
                            a = e
                        } finally {
                            try {
                                !n && o.return && o.return()
                            } finally {
                                if (i)
                                    throw a
                            }
                        }
                        return r
                    }
                    )(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            };
            t.resetBoPixel = function() {
                f = !0
            }
            ;
            var d = r(3)
              , n = r(1)
              , c = (function(e) {
                {
                    if (e && e.__esModule)
                        return e;
                    var t = {};
                    if (null != e)
                        for (var r in e)
                            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e,
                    t
                }
            }
            )(r(0))
              , u = r(14)
              , p = r(2)
              , m = r(11);
            var i = [p.BANNER, p.VIDEO]
              , l = "openx"
              , f = !0;
            var a = t.spec = {
                code: l,
                supportedMediaTypes: i,
                isBidRequestValid: function(e) {
                    return c.deepAccess(e, "mediaTypes.banner") && e.params.delDomain ? !!e.params.unit || 0 < c.deepAccess(e, "mediaTypes.banner.sizes.length") : !(!e.params.unit || !e.params.delDomain)
                },
                buildRequests: function(e, a) {
                    if (0 === e.length)
                        return [];
                    var s = []
                      , t = e.reduce((function(e, t) {
                        var r;
                        return r = t,
                        c.deepAccess(r, "mediaTypes.video") || r.mediaType === p.VIDEO ? e[0].push(t) : e[1].push(t),
                        e
                    }
                    ), [[], []])
                      , r = o(t, 2)
                      , n = r[0]
                      , i = r[1];
                    return 0 < i.length && s.push(function(e, t) {
                        var r = []
                          , n = !1
                          , i = v(e, t)
                          , a = c._map(e, (function(e) {
                            return e.params.unit
                        }
                        ));
                        i.aus = c._map(e, (function(e) {
                            return c.parseSizesInput(e.sizes).join(",")
                        }
                        )).join("|"),
                        i.bc = e[0].params.bc || "hb_pb_2.1.3",
                        i.divIds = c._map(e, (function(e) {
                            return encodeURIComponent(e.adUnitCode)
                        }
                        )).join(","),
                        a.some((function(e) {
                            return e
                        }
                        )) && (i.auid = a.join(","));
                        e.some((function(e) {
                            return e.params.doNotTrack
                        }
                        )) && (i.ns = 1);
                        e.some((function(e) {
                            return e.params.coppa
                        }
                        )) && (i.tfcd = 1);
                        e.forEach((function(i) {
                            if (i.params.customParams) {
                                var e = c._map(Object.keys(i.params.customParams), (function(e) {
                                    return t = e,
                                    r = i.params.customParams,
                                    n = r[t],
                                    c.isArray(n) && (n = n.join(",")),
                                    (t.toLowerCase() + "=" + n.toLowerCase()).replace("+", ".").replace("/", "_");
                                    var t, r, n
                                }
                                ))
                                  , t = window.btoa(e.join("&"));
                                n = !0,
                                r.push(t)
                            } else
                                r.push("")
                        }
                        )),
                        n && (i.tps = r.join(","));
                        var s = []
                          , o = !1;
                        e.forEach((function(e) {
                            e.params.customFloor ? (s.push(1e3 * e.params.customFloor),
                            o = !0) : s.push(0)
                        }
                        )),
                        o && (i.aumfs = s.join(","));
                        return {
                            method: "GET",
                            url: "//" + e[0].params.delDomain + "/w/1.0/arj",
                            data: i,
                            payload: {
                                bids: e,
                                startTime: new Date
                            }
                        }
                    }(i, a)),
                    0 < n.length && n.forEach((function(e) {
                        var t, r, n, i;
                        s.push((r = a,
                        n = "//" + (t = e).params.delDomain + "/v/1.0/avjp",
                        i = (function(e, t) {
                            var r = v([e], t)
                              , n = c.deepAccess(e, "params.video") || {}
                              , i = c.deepAccess(e, "mediaTypes.video.context")
                              , a = c.deepAccess(e, "mediaTypes.video.playerSize")
                              , s = void 0
                              , o = void 0;
                            c.isArray(e.sizes) && 2 === e.sizes.length && !c.isArray(e.sizes[0]) ? (s = parseInt(e.sizes[0], 10),
                            o = parseInt(e.sizes[1], 10)) : c.isArray(e.sizes) && c.isArray(e.sizes[0]) && 2 === e.sizes[0].length ? (s = parseInt(e.sizes[0][0], 10),
                            o = parseInt(e.sizes[0][1], 10)) : c.isArray(a) && 2 === a.length && (s = parseInt(a[0], 10),
                            o = parseInt(a[1], 10));
                            Object.keys(n).forEach((function(e) {
                                "openrtb" === e ? (n[e].w = s || n[e].w,
                                n[e].v = o || n[e].v,
                                r[e] = JSON.stringify(n[e])) : e in r || "url" === e || (r[e] = n[e])
                            }
                            )),
                            r.auid = e.params.unit,
                            r.vwd = s || n.vwd,
                            r.vht = o || n.vht,
                            "outstream" === i && (r.vos = "101");
                            n.mimes && (r.vmimes = n.mimes);
                            return r
                        }
                        )(t, r),
                        {
                            method: "GET",
                            url: n,
                            data: i,
                            payload: {
                                bid: t,
                                startTime: new Date
                            }
                        }))
                    }
                    )),
                    s
                },
                interpretResponse: function(e, t) {
                    var r = e.body;
                    return (/avjp$/.test(t.url) ? p.VIDEO : p.BANNER) === p.VIDEO ? (function(e, t) {
                        var r = t.bid
                          , n = t.startTime
                          , i = [];
                        if (void 0 !== e && "" !== e.vastUrl && "" !== e.pub_rev) {
                            var a = (0,
                            m.parse)(e.vastUrl).search || {}
                              , s = {};
                            s.requestId = r.bidId,
                            s.bidderCode = l,
                            s.ttl = 300,
                            s.netRevenue = !0,
                            s.currency = e.currency,
                            s.cpm = Number(e.pub_rev) / 1e3,
                            s.width = e.width,
                            s.height = e.height,
                            s.creativeId = e.adid,
                            s.vastUrl = e.vastUrl,
                            s.mediaType = p.VIDEO,
                            e.ph = a.ph,
                            e.colo = a.colo,
                            e.ts = a.ts,
                            i.push(s),
                            b(p.VIDEO, e, n)
                        }
                        return i
                    }
                    )(r, t.payload) : (function(e, t) {
                        for (var r = t.bids, n = t.startTime, i = e.ads.ad, a = [], s = 0; s < i.length; s++) {
                            var o = i[s]
                              , d = parseInt(o.idx, 10)
                              , c = {};
                            if (c.requestId = r[d].bidId,
                            o.pub_rev) {
                                c.cpm = Number(o.pub_rev) / 1e3;
                                var u = o.creative[0];
                                u && (c.width = u.width,
                                c.height = u.height),
                                c.creativeId = u.id,
                                c.ad = o.html,
                                o.deal_id && (c.dealId = o.deal_id),
                                c.ttl = 300,
                                c.netRevenue = !0,
                                c.currency = o.currency,
                                o.tbd && (c.tbd = o.tbd),
                                c.ts = o.ts,
                                a.push(c),
                                b(p.BANNER, o, n)
                            }
                        }
                        return a
                    }
                    )(r, t.payload)
                },
                getUserSyncs: function(e, t) {
                    if (e.iframeEnabled)
                        return [{
                            type: "iframe",
                            url: c.deepAccess(t, "0.body.ads.pixels") || c.deepAccess(t, "0.body.pixels") || "//u.openx.net/w/1.0/pd"
                        }]
                },
                transformBidParams: function(e, t) {
                    return c.convertTypes({
                        unit: "string",
                        customFloor: "number"
                    }, e)
                }
            };
            function h(t) {
                for (var e in t)
                    t.hasOwnProperty(e) && (t[e] || delete t[e]);
                return c._map(Object.keys(t), (function(e) {
                    return e + "=" + t[e]
                }
                )).join("&")
            }
            function v(e, t) {
                var r = c.inIframe()
                  , n = void 0;
                if (n = {
                    ju: d.config.getConfig("pageUrl") || c.getTopWindowUrl(),
                    jr: c.getTopWindowReferrer(),
                    ch: document.charSet || document.characterSet,
                    res: screen.width + "x" + screen.height + "x" + screen.colorDepth,
                    ifr: r,
                    tz: (new Date).getTimezoneOffset(),
                    tws: (function(e) {
                        var t = void 0
                          , r = void 0
                          , n = window
                          , i = document
                          , a = i.documentElement
                          , s = void 0;
                        if (e) {
                            try {
                                n = window.top,
                                i = window.top.document
                            } catch (e) {
                                return
                            }
                            a = i.documentElement,
                            s = i.body,
                            t = n.innerWidth || a.clientWidth || s.clientWidth,
                            r = n.innerHeight || a.clientHeight || s.clientHeight
                        } else
                            a = i.documentElement,
                            t = n.innerWidth || a.clientWidth,
                            r = n.innerHeight || a.clientHeight;
                        return t + "x" + r
                    }
                    )(r),
                    be: 1,
                    dddid: c._map(e, (function(e) {
                        return e.transactionId
                    }
                    )).join(","),
                    nocache: (new Date).getTime()
                },
                c.deepAccess(t, "gdprConsent")) {
                    var i = t.gdprConsent;
                    void 0 !== i.consentString && (n.gdpr_consent = i.consentString),
                    void 0 !== i.gdprApplies && (n.gdpr = i.gdprApplies ? 1 : 0),
                    "iab" === d.config.getConfig("consentManagement.cmpApi") && (n.x_gdpr_f = 1)
                }
                return n
            }
            function b(e, t, r) {
                if (f) {
                    f = !1;
                    var n = d.config.getConfig("bidderTimeout")
                      , i = void 0;
                    window.PREBID_TIMEOUT && (n = Math.min(window.PREBID_TIMEOUT, n));
                    var a = {
                        bd: +new Date - r,
                        bp: t.pub_rev,
                        br: "0",
                        bs: c.getTopWindowLocation().hostname,
                        bt: n,
                        ts: t.ts
                    };
                    if (a.br = a.bt < a.bd ? "t" : "p",
                    e === p.VIDEO) {
                        var s = (0,
                        m.parse)(t.colo);
                        a.ph = t.ph,
                        i = "//" + s.hostname + "/w/1.0/bo?" + h(a)
                    } else {
                        var o = c.deepAccess(t, "creative.0.tracking.impression").match(/([^?]+\/)ri\?/);
                        o && 1 < o.length && (i = o[1] + "bo?" + h(a))
                    }
                    i && u.userSync.registerSync("image", l, i)
                }
            }
            (0,
            n.registerBidder)(a)
        },
        354: function(e, t) {}
    }, [352]);
    pbjsChunk([61], {
        390: function(e, r, a) {
            a(391),
            e.exports = a(392)
        },
        391: function(e, r, a) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }),
            r.spec = void 0;
            var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
              , g = (function(e) {
                {
                    if (e && e.__esModule)
                        return e;
                    var r = {};
                    if (null != e)
                        for (var a in e)
                            Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
                    return r.default = e,
                    r
                }
            }
            )(a(0))
              , t = a(1)
              , i = a(2);
            var h = a(4)
              , f = "pubmatic"
              , y = "USD"
              , v = void 0
              , b = {
                kadpageurl: "",
                gender: "",
                yob: "",
                lat: "",
                lon: "",
                wiid: "",
                profId: "",
                verId: ""
            }
              , n = {
                NUMBER: "number",
                STRING: "string",
                BOOLEAN: "boolean",
                ARRAY: "array"
            }
              , w = {
                mimes: n.ARRAY,
                minduration: n.NUMBER,
                maxduration: n.NUMBER,
                startdelay: n.NUMBER,
                playbackmethod: n.ARRAY,
                api: n.ARRAY,
                protocols: n.ARRAY,
                w: n.NUMBER,
                h: n.NUMBER,
                battr: n.ARRAY,
                linearity: n.NUMBER,
                placement: n.NUMBER,
                minbitrate: n.NUMBER,
                maxbitrate: n.NUMBER
            }
              , o = {
                1: "PMP",
                5: "PREF",
                6: "PMPG"
            }
              , I = 0;
            function S(e, r) {
                if (!g.isStr(r))
                    return r && g.logWarn("PubMatic: Ignoring param key: " + e + ", expects string-value, found " + (void 0 === r ? "undefined" : c(r))),
                    v;
                switch (e) {
                case "pmzoneid":
                    return r.split(",").slice(0, 50).map((function(e) {
                        return e.trim()
                    }
                    )).join();
                case "kadfloor":
                case "lat":
                case "lon":
                    return parseFloat(r) || v;
                case "yob":
                    return parseInt(r) || v;
                default:
                    return r
                }
            }
            function R(e) {
                e.params.adUnit = "",
                e.params.adUnitIndex = "0",
                e.params.width = 0,
                e.params.height = 0;
                var r, a = e.hasOwnProperty("sizes") && g.isArray(e.sizes) && 1 <= e.sizes.length;
                e.params.adSlot = (r = e.params.adSlot,
                g.isStr(r) ? r.replace(/^\s+/g, "").replace(/\s+$/g, "") : "");
                var t = e.params.adSlot;
                try {
                    var i = t.split("@");
                    if (t = i[0],
                    2 == i.length) {
                        if (e.params.adUnitIndex = 2 == i[1].split(":").length ? i[1].split(":")[1] : "0",
                        2 != (i = i[1].split(":")[0].split("x")).length)
                            return void g.logWarn("AdSlot Error: adSlot not in required format");
                        e.params.width = parseInt(i[0]),
                        e.params.height = parseInt(i[1]),
                        delete e.sizes
                    } else {
                        if (!a)
                            return void g.logWarn("AdSlot Error: adSlot not in required format");
                        e.params.width = parseInt(e.sizes[0][0]),
                        e.params.height = parseInt(e.sizes[0][1]),
                        e.params.adUnitIndex = 1 < t.split(":").length ? t.split(":")[t.split(":").length - 1] : "0"
                    }
                    e.params.adUnit = t
                } catch (e) {
                    g.logWarn("AdSlot Error: adSlot not in required format")
                }
            }
            function E(e, r, a) {
                var t = "PubMatic: Ignoring param key: " + e + ", expects " + a + ", found " + (void 0 === r ? "undefined" : c(r));
                switch (a) {
                case n.BOOLEAN:
                    return g.isBoolean(r) ? r : (g.logWarn(t),
                    v);
                case n.NUMBER:
                    return g.isNumber(r) ? r : (g.logWarn(t),
                    v);
                case n.STRING:
                    return g.isStr(r) ? r : (g.logWarn(t),
                    v);
                case n.ARRAY:
                    return g.isArray(r) ? r : (g.logWarn(t),
                    v)
                }
            }
            var s = r.spec = {
                code: f,
                supportedMediaTypes: [i.BANNER, i.VIDEO],
                isBidRequestValid: function(e) {
                    return !(!e || !e.params) && (g.isStr(e.params.publisherId) ? g.isStr(e.params.adSlot) ? !!(!e.params.hasOwnProperty("video") || e.params.video.hasOwnProperty("mimes") && g.isArray(e.params.video.mimes) && 0 !== e.params.video.mimes.length) || (g.logWarn(f + ": For video ads, mimes is mandatory and must specify atlease 1 mime value. Call to OpenBid will not be sent."),
                    !1) : (g.logWarn(f + ": adSlotId is mandatory and cannot be numeric. Call to OpenBid will not be sent."),
                    !1) : (g.logWarn(f + " Error: publisherId is mandatory and cannot be numeric. Call to OpenBid will not be sent."),
                    !1))
                },
                buildRequests: function(e, r) {
                    var a, t, i, n = ((a = {}).pageURL = g.getTopWindowUrl(),
                    a.refURL = g.getTopWindowReferrer(),
                    a), o = (t = n,
                    {
                        id: "" + (new Date).getTime(),
                        at: 1,
                        cur: [y],
                        imp: [],
                        site: {
                            page: t.pageURL,
                            ref: t.refURL,
                            publisher: {}
                        },
                        device: {
                            ua: navigator.userAgent,
                            js: 1,
                            dnt: "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack ? 1 : 0,
                            h: screen.height,
                            w: screen.width,
                            language: navigator.language
                        },
                        user: {},
                        ext: {}
                    }), s = "", d = "", p = [];
                    if (e.forEach((function(e) {
                        if (R(e),
                        e.params.hasOwnProperty("video")) {
                            if (!(e.params.adSlot && e.params.adUnit && e.params.adUnitIndex))
                                return void g.logWarn(f + ": Skipping the non-standard adslot: ", e.params.adSlot, e)
                        } else if (!(e.params.width && e.params.height && e.params.adSlot && e.params.adUnit && e.params.adUnitIndex))
                            return void g.logWarn(f + ": Skipping the non-standard adslot: ", e.params.adSlot, e);
                        n.pubId = n.pubId || e.params.publisherId,
                        (n = (function(e, r) {
                            var a, t, i;
                            for (a in r.kadpageurl || (r.kadpageurl = r.pageURL),
                            b)
                                b.hasOwnProperty(a) && (t = e[a]) && ("object" === (void 0 === (i = b[a]) ? "undefined" : c(i)) && (t = i.f(t, r)),
                                g.isStr(t) ? r[a] = t : g.logWarn("PubMatic: Ignoring param : " + a + " with value : " + b[a] + ", expects string-value, found " + (void 0 === t ? "undefined" : c(t))));
                            return r
                        }
                        )(e.params, n)).transactionId = e.transactionId,
                        "" === s ? s = e.params.currency || void 0 : e.params.hasOwnProperty("currency") && s !== e.params.currency && g.logWarn(f + ": Currency specifier ignored. Only one currency permitted."),
                        e.params.currency = s,
                        e.params.hasOwnProperty("dctr") && g.isStr(e.params.dctr) && p.push(e.params.dctr),
                        o.imp.push(function(e, r) {
                            var a = {}
                              , t = {}
                              , i = {}
                              , n = e.hasOwnProperty("sizes") ? e.sizes : [];
                            if (a = {
                                id: e.bidId,
                                tagid: e.params.adUnit,
                                bidfloor: S("kadfloor", e.params.kadfloor),
                                secure: "https:" === window.location.protocol ? 1 : 0,
                                ext: {
                                    pmZoneId: S("pmzoneid", e.params.pmzoneid)
                                },
                                bidfloorcur: e.params.currency ? S("currency", e.params.currency) : y
                            },
                            e.params.hasOwnProperty("video")) {
                                var o = e.params.video;
                                for (var s in w)
                                    o.hasOwnProperty(s) && (i[s] = E(s, o[s], w[s]));
                                g.isArray(e.mediaTypes.video.playerSize[0]) ? (i.w = e.mediaTypes.video.playerSize[0][0],
                                i.h = e.mediaTypes.video.playerSize[0][1]) : g.isNumber(e.mediaTypes.video.playerSize[0]) && (i.w = e.mediaTypes.video.playerSize[0],
                                i.h = e.mediaTypes.video.playerSize[1]),
                                e.params.video.hasOwnProperty("skippable") && (i.ext = {
                                    video_skippable: e.params.video.skippable ? 1 : 0
                                }),
                                a.video = i
                            } else {
                                if (t = {
                                    pos: 0,
                                    w: e.params.width,
                                    h: e.params.height,
                                    topframe: g.inIframe() ? 0 : 1
                                },
                                g.isArray(n) && 1 < n.length) {
                                    n = n.splice(1, n.length - 1);
                                    var d = [];
                                    n.forEach((function(e) {
                                        d.push({
                                            w: e[0],
                                            h: e[1]
                                        })
                                    }
                                    )),
                                    t.format = d
                                }
                                a.banner = t
                            }
                            return a
                        }(e))
                    }
                    )),
                    0 != o.imp.length) {
                        var l, u;
                        if (o.site.publisher.id = n.pubId.trim(),
                        I = n.pubId.trim(),
                        o.ext.wrapper = {},
                        o.ext.wrapper.profile = parseInt(n.profId) || v,
                        o.ext.wrapper.version = parseInt(n.verId) || v,
                        o.ext.wrapper.wiid = n.wiid || v,
                        o.ext.wrapper.wv = h.REPO_AND_VERSION,
                        o.ext.wrapper.transactionId = n.transactionId,
                        o.ext.wrapper.wp = "pbjs",
                        o.user.gender = n.gender ? n.gender.trim() : v,
                        o.user.geo = {},
                        r && r.gdprConsent && (o.user.ext = {
                            consent: r.gdprConsent.consentString
                        },
                        o.regs = {
                            ext: {
                                gdpr: r.gdprConsent.gdprApplies ? 1 : 0
                            }
                        }),
                        o.user.geo.lat = S("lat", n.lat),
                        o.user.geo.lon = S("lon", n.lon),
                        o.user.yob = S("yob", n.yob),
                        o.device.geo = {},
                        o.device.geo.lat = S("lat", n.lat),
                        o.device.geo.lon = S("lon", n.lon),
                        o.site.page = n.kadpageurl.trim() || o.site.page.trim(),
                        o.site.domain = (l = o.site.page,
                        (u = document.createElement("a")).href = l,
                        u.hostname),
                        e[0].params.hasOwnProperty("dctr")) {
                            if (d = e[0].params.dctr,
                            g.isStr(d) && 0 < d.length) {
                                var m = d.split("|");
                                d = "",
                                m.forEach((function(e) {
                                    d += 0 < e.length ? e.trim() + "|" : ""
                                }
                                )),
                                i = d.length,
                                "|" === d.substring(i, i - 1) && (d = d.substring(0, i - 1)),
                                o.site.ext = {
                                    key_val: d.trim()
                                }
                            } else
                                g.logWarn(f + ": Ignoring param : dctr with value : " + d + ", expects string-value, found empty or non-string value");
                            1 < p.length && g.logWarn(f + ": dctr value found in more than 1 adunits. Value from 1st adunit will be picked. Ignoring values from subsequent adunits")
                        }
                        return {
                            method: "POST",
                            url: "//hbopenbid.pubmatic.com/translator?source=prebid-client",
                            data: JSON.stringify(o)
                        }
                    }
                },
                interpretResponse: function(r, t) {
                    var i = []
                      , n = y;
                    try {
                        var e = JSON.parse(t.data);
                        e && e.imp && 0 < e.imp.length && e.imp.forEach((function(e) {
                            i.push({
                                requestId: e.id,
                                width: 0,
                                height: 0,
                                ttl: 300,
                                ad: "",
                                creativeId: 0,
                                netRevenue: !1,
                                cpm: 0,
                                currency: n,
                                referrer: g.getTopWindowUrl()
                            })
                        }
                        )),
                        r.body && r.body.seatbid && g.isArray(r.body.seatbid) && r.body.seatbid.forEach((function(e) {
                            n = r.body.cur || n,
                            e.bid && g.isArray(e.bid) && e.bid.forEach((function(a) {
                                i.forEach((function(r) {
                                    if (r.requestId == a.impid) {
                                        r.requestId = a.impid,
                                        r.cpm = (parseFloat(a.price) || 0).toFixed(2),
                                        r.width = a.w,
                                        r.height = a.h,
                                        r.creativeId = a.crid || a.id,
                                        r.dealId = a.dealid,
                                        r.currency = n,
                                        r.netRevenue = !1,
                                        r.ttl = 300,
                                        r.referrer = g.getTopWindowUrl(),
                                        r.ad = a.adm;
                                        var e = JSON.parse(t.data);
                                        e.imp && 0 < e.imp.length && e.imp.forEach((function(e) {
                                            a.impid === e.id && e.hasOwnProperty("video") && (r.mediaType = "video",
                                            r.width = a.hasOwnProperty("w") ? a.w : e.video.w,
                                            r.height = a.hasOwnProperty("h") ? a.h : e.video.h,
                                            r.vastXml = a.adm)
                                        }
                                        )),
                                        a.ext && a.ext.deal_channel && (r.dealChannel = o[a.ext.deal_channel] || null)
                                    }
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    } catch (e) {
                        g.logError(e)
                    }
                    return i
                },
                getUserSyncs: function(e, r, a) {
                    var t = "//ads.pubmatic.com/AdServer/js/showad.js#PIX&kdntuid=1&p=" + I;
                    if (a && (t += "&gdpr=" + (a.gdprApplies ? 1 : 0),
                    t += "&gdpr_consent=" + encodeURIComponent(a.consentString || "")),
                    e.iframeEnabled)
                        return [{
                            type: "iframe",
                            url: t
                        }];
                    g.logWarn("PubMatic: Please enable iframe based user sync.")
                },
                transformBidParams: function(e, r) {
                    return g.convertTypes({
                        publisherId: "string",
                        adSlot: "string"
                    }, e)
                }
            };
            (0,
            t.registerBidder)(s)
        },
        392: function(e, r) {}
    }, [390]);
    pbjsChunk([46], {
        434: function(e, r, t) {
            t(435),
            e.exports = t(436)
        },
        435: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }),
            r.spec = void 0;
            var u = function(e, r) {
                if (Array.isArray(e))
                    return e;
                if (Symbol.iterator in Object(e))
                    return (function(e, r) {
                        var t = []
                          , i = !0
                          , n = !1
                          , o = void 0;
                        try {
                            for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (t.push(s.value),
                            !r || t.length !== r); i = !0)
                                ;
                        } catch (e) {
                            n = !0,
                            o = e
                        } finally {
                            try {
                                !i && a.return && a.return()
                            } finally {
                                if (n)
                                    throw o
                            }
                        }
                        return t
                    }
                    )(e, r);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
              , p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ;
            r.hasVideoMediaType = _,
            r.masSizeOrdering = o,
            r.resetUserSync = function() {
                d = !1
            }
            ;
            var l = (function(e) {
                {
                    if (e && e.__esModule)
                        return e;
                    var r = {};
                    if (null != e)
                        for (var t in e)
                            Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
                    return r.default = e,
                    r
                }
            }
            )(t(0))
              , i = t(1)
              , f = t(3)
              , y = t(2);
            var g = "pbjs_lite_v1.21.0";
            var s = "//fastlane.rubiconproject.com/a/api/fastlane.json"
              , v = {
                1: "468x60",
                2: "728x90",
                5: "120x90",
                8: "120x600",
                9: "160x600",
                10: "300x600",
                13: "200x200",
                14: "250x250",
                15: "300x250",
                16: "336x280",
                19: "300x100",
                31: "980x120",
                32: "250x360",
                33: "180x500",
                35: "980x150",
                37: "468x400",
                38: "930x180",
                43: "320x50",
                44: "300x50",
                48: "300x300",
                53: "1024x768",
                54: "300x1050",
                55: "970x90",
                57: "970x250",
                58: "1000x90",
                59: "320x80",
                60: "320x150",
                61: "1000x1000",
                64: "580x500",
                65: "640x480",
                67: "320x480",
                68: "1800x1000",
                72: "320x320",
                73: "320x160",
                78: "980x240",
                79: "980x300",
                80: "980x400",
                83: "480x300",
                94: "970x310",
                96: "970x210",
                101: "480x320",
                102: "768x1024",
                103: "480x280",
                108: "320x240",
                113: "1000x300",
                117: "320x100",
                125: "800x250",
                126: "200x600",
                144: "980x600",
                159: "320x250",
                195: "600x300",
                199: "640x200",
                213: "1030x590",
                214: "980x360",
                232: "580x400",
                257: "400x600"
            };
            l._each(v, (function(e, r) {
                return v[e] = r
            }
            ));
            var a = r.spec = {
                code: "rubicon",
                aliases: ["rubiconLite"],
                supportedMediaTypes: [y.BANNER, y.VIDEO],
                isBidRequestValid: function(e) {
                    if ("object" !== p(e.params))
                        return !1;
                    if (!/^\d+$/.test(e.params.accountId))
                        return !1;
                    if (_(e)) {
                        if ("instream" === l.deepAccess(e, "mediaTypes." + y.VIDEO + ".context") || e.mediaType === y.VIDEO) {
                            if (void 0 === l.deepAccess(e, "params.video.size_id"))
                                return l.logError("Rubicon bid adapter Error: size id is missing for instream video request."),
                                !1
                        } else {
                            if ("outstream" !== l.deepAccess(e, "mediaTypes." + y.VIDEO + ".context"))
                                return l.logError("Rubicon bid adapter Error: no instream or outstream context defined in mediaTypes."),
                                !1;
                            203 !== l.deepAccess(e, "params.video.size_id") && l.logWarn("Rubicon bid adapter Warning: outstream video is sending invalid size id, converting size id to 203.")
                        }
                        void 0 !== l.deepAccess(e, "mediaTypes." + y.BANNER) && l.logWarn("Rubicon bid adapter Warning: video and banner requested for same ad unit, continuing with video request, multi-format request is not supported by rubicon yet.")
                    }
                    return 0 < x(e).length
                },
                buildRequests: function(e, o) {
                    var r = []
                      , t = e.filter(_).map((function(e) {
                        e.startTime = (new Date).getTime();
                        var r = e.params
                          , t = x(e)
                          , i = {
                            page_url: b(e),
                            resolution: m(),
                            account_id: r.accountId,
                            integration: g,
                            "x_source.tid": e.transactionId,
                            timeout: o.timeout - (Date.now() - o.auctionStart + 500),
                            stash_creatives: !0,
                            slots: []
                        }
                          , n = {
                            site_id: r.siteId,
                            zone_id: r.zoneId,
                            position: "atf" === r.position || "btf" === r.position ? r.position : "unknown",
                            floor: .01 < parseFloat(r.floor) ? r.floor : .01,
                            element_id: e.adUnitCode,
                            name: e.adUnitCode,
                            width: t[0],
                            height: t[1],
                            size_id: "outstream" === l.deepAccess(e, "mediaTypes." + y.VIDEO + ".context") ? 203 : r.video.size_id
                        };
                        return r.video && (i.ae_pass_through_parameters = r.video.aeParams,
                        n.language = r.video.language),
                        r.inventory && "object" === p(r.inventory) && (n.inventory = r.inventory),
                        r.keywords && Array.isArray(r.keywords) && (n.keywords = r.keywords),
                        r.visitor && "object" === p(r.visitor) && (n.visitor = r.visitor),
                        i.slots.push(n),
                        o.gdprConsent && ("boolean" == typeof o.gdprConsent.gdprApplies && (i.gdpr = Number(o.gdprConsent.gdprApplies)),
                        i.gdpr_consent = o.gdprConsent.consentString),
                        {
                            method: "POST",
                            url: "//fastlane-adv.rubiconproject.com/v1/auction/video",
                            data: i,
                            bidRequest: e
                        }
                    }
                    ));
                    if (!0 !== f.config.getConfig("rubicon.singleRequest"))
                        r = t.concat(e.filter((function(e) {
                            return !_(e)
                        }
                        )).map((function(e) {
                            var i = a.createSlotParams(e, o);
                            return {
                                method: "GET",
                                url: s,
                                data: a.getOrderedParams(i).reduce((function(e, r) {
                                    var t = i[r];
                                    return l.isStr(t) && "" !== t || l.isNumber(t) ? "" + e + r + "=" + encodeURIComponent(t) + "&" : e
                                }
                                ), "") + "slots=1&rand=" + Math.random(),
                                bidRequest: e
                            }
                        }
                        )));
                    else {
                        var n = e.filter((function(e) {
                            return !_(e)
                        }
                        )).reduce((function(e, r) {
                            return (e[r.params.siteId] = e[r.params.siteId] || []).push(r),
                            e
                        }
                        ), {});
                        r = t.concat(Object.keys(n).map((function(e) {
                            var r = n[e];
                            10 < r.length && (l.logWarn("Rubicon bid adapter Warning: single request mode has a limit of 10 bids: " + (r.length - 10) + " bids were not sent"),
                            r = r.slice(0, 10));
                            var i = a.combineSlotUrlParams(r.map((function(e) {
                                return a.createSlotParams(e, o)
                            }
                            )));
                            return {
                                method: "GET",
                                url: s,
                                data: a.getOrderedParams(i).reduce((function(e, r) {
                                    var t = i[r];
                                    return l.isStr(t) && "" !== t || l.isNumber(t) ? "" + e + r + "=" + encodeURIComponent(t) + "&" : e
                                }
                                ), "") + "slots=" + r.length + "&rand=" + Math.random(),
                                bidRequest: r
                            }
                        }
                        )))
                    }
                    return r
                },
                getOrderedParams: function(e) {
                    var r = /^tg_v/
                      , t = /^tg_i/
                      , i = ["account_id", "site_id", "zone_id", "size_id", "alt_size_ids", "p_pos", "gdpr", "gdpr_consent", "rf", "dt.id", "dt.keyv", "dt.pref", "p_geo.latitude", "p_geo.longitude", "kw"].concat(Object.keys(e).filter((function(e) {
                        return r.test(e)
                    }
                    ))).concat(Object.keys(e).filter((function(e) {
                        return t.test(e)
                    }
                    ))).concat(["tk_flint", "x_source.tid", "p_screen_res", "rp_floor", "rp_secure", "tk_user_key"]);
                    return i.concat(Object.keys(e).filter((function(e) {
                        return -1 === i.indexOf(e)
                    }
                    )))
                },
                combineSlotUrlParams: function(n) {
                    if (1 === n.length)
                        return n[0];
                    var i = n.reduce((function(r, t, i) {
                        return Object.keys(t).forEach((function(e) {
                            r.hasOwnProperty(e) || (r[e] = new Array(n.length)),
                            r[e].splice(i, 1, t[e])
                        }
                        )),
                        r
                    }
                    ), {})
                      , o = new RegExp("^([^;]*)(;\\1)+$");
                    return Object.keys(i).forEach((function(e) {
                        var r = i[e].join(";")
                          , t = r.match(o);
                        i[e] = t ? t[1] : r
                    }
                    )),
                    i
                },
                createSlotParams: function(e, r) {
                    e.startTime = (new Date).getTime();
                    var t = e.params
                      , i = x(e)
                      , n = t.latLong || []
                      , o = u(n, 2)
                      , s = o[0]
                      , a = o[1]
                      , d = {
                        account_id: t.accountId,
                        site_id: t.siteId,
                        zone_id: t.zoneId,
                        size_id: i[0],
                        alt_size_ids: i.slice(1).join(",") || void 0,
                        p_pos: "atf" === t.position || "btf" === t.position ? t.position : "unknown",
                        rp_floor: .01 < (t.floor = parseFloat(t.floor)) ? t.floor : .01,
                        rp_secure: "https:" === location.protocol ? "1" : "0",
                        tk_flint: g,
                        "x_source.tid": e.transactionId,
                        p_screen_res: m(),
                        kw: Array.isArray(t.keywords) ? t.keywords.join(",") : "",
                        tk_user_key: t.userId,
                        "p_geo.latitude": isNaN(parseFloat(s)) ? void 0 : parseFloat(s).toFixed(4),
                        "p_geo.longitude": isNaN(parseFloat(a)) ? void 0 : parseFloat(a).toFixed(4),
                        "tg_fl.eid": e.code,
                        rf: b(e)
                    };
                    r.gdprConsent && ("boolean" == typeof r.gdprConsent.gdprApplies && (d.gdpr = Number(r.gdprConsent.gdprApplies)),
                    d.gdpr_consent = r.gdprConsent.consentString),
                    null !== t.visitor && "object" === p(t.visitor) && Object.keys(t.visitor).forEach((function(e) {
                        d["tg_v." + e] = t.visitor[e].toString()
                    }
                    )),
                    null !== t.inventory && "object" === p(t.inventory) && Object.keys(t.inventory).forEach((function(e) {
                        d["tg_i." + e] = t.inventory[e].toString()
                    }
                    ));
                    var c = (function() {
                        var e = (r = window.DigiTrust && (f.config.getConfig("digiTrustId") || window.DigiTrust.getUser({
                            member: "T9QSFKPDN9"
                        })),
                        r && r.success && r.identity || null);
                        var r;
                        if (!e || e.privacy && e.privacy.optout)
                            return [];
                        return {
                            "dt.id": e.id,
                            "dt.keyv": e.keyv,
                            "dt.pref": 0
                        }
                    }
                    )();
                    return Object.keys(c).forEach((function(e) {
                        d[e] = c[e]
                    }
                    )),
                    d
                },
                interpretResponse: function(d, e) {
                    var c = e.bidRequest;
                    if (!(d = d.body) || "object" !== (void 0 === d ? "undefined" : p(d)))
                        return [];
                    var r = d.ads;
                    return "object" === (void 0 === c ? "undefined" : p(c)) && !Array.isArray(c) && _(c) && "object" === (void 0 === r ? "undefined" : p(r)) && (r = r[c.adUnitCode]),
                    !Array.isArray(r) || r.length < 1 ? [] : r.reduce((function(e, r, t) {
                        if ("ok" !== r.status)
                            return e;
                        var i, n = Array.isArray(c) ? c[t] : c;
                        if (n && "object" === (void 0 === n ? "undefined" : p(n))) {
                            var o = {
                                requestId: n.bidId,
                                currency: "USD",
                                creativeId: r.creative_id,
                                cpm: r.cpm || 0,
                                dealId: r.deal,
                                ttl: 300,
                                netRevenue: f.config.getConfig("rubicon.netRevenue") || !1,
                                rubicon: {
                                    advertiserId: r.advertiser,
                                    networkId: r.network
                                }
                            };
                            if (r.creative_type && (o.mediaType = r.creative_type),
                            r.creative_type === y.VIDEO)
                                o.width = n.params.video.playerWidth,
                                o.height = n.params.video.playerHeight,
                                o.vastUrl = r.creative_depot_url,
                                o.impression_id = r.impression_id,
                                o.videoCacheKey = r.impression_id;
                            else {
                                o.ad = (i = r.script,
                                "<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='" + r.impression_id + "'>\n<script type='text/javascript'>" + i + "<\/script>\n</div>\n</body>\n</html>");
                                var s = v[r.size_id].split("x").map((function(e) {
                                    return Number(e)
                                }
                                ))
                                  , a = u(s, 2);
                                o.width = a[0],
                                o.height = a[1]
                            }
                            o.rubiconTargeting = (Array.isArray(r.targeting) ? r.targeting : []).reduce((function(e, r) {
                                return e[r.key] = r.values[0],
                                e
                            }
                            ), {
                                rpfl_elemid: n.adUnitCode
                            }),
                            e.push(o)
                        } else
                            l.logError("Rubicon bid adapter Error: bidRequest undefined at index position:" + t, c, d);
                        return e
                    }
                    ), []).sort((function(e, r) {
                        return (r.cpm || 0) - (e.cpm || 0)
                    }
                    ))
                },
                getUserSyncs: function(e, r, t) {
                    if (!d && e.iframeEnabled) {
                        var i = "";
                        return t && "string" == typeof t.consentString && ("boolean" == typeof t.gdprApplies ? i += "?gdpr=" + Number(t.gdprApplies) + "&gdpr_consent=" + t.consentString : i += "?gdpr_consent=" + t.consentString),
                        d = !0,
                        {
                            type: "iframe",
                            url: "https://eus.rubiconproject.com/usync.html" + i
                        }
                    }
                },
                transformBidParams: function(e, r) {
                    return l.convertTypes({
                        accountId: "number",
                        siteId: "number",
                        zoneId: "number"
                    }, e)
                }
            };
            function m() {
                return [window.screen.width, window.screen.height].join("x")
            }
            function b(e) {
                var r = f.config.getConfig("pageUrl");
                return e.params.referrer ? r = e.params.referrer : r || (r = l.getTopWindowUrl()),
                e.params.secure ? r.replace(/^http:/i, "https:") : r
            }
            function x(e) {
                var r = e.params;
                if (_(e)) {
                    var t = [];
                    return r.video && r.video.playerWidth && r.video.playerHeight ? t = [r.video.playerWidth, r.video.playerHeight] : Array.isArray(l.deepAccess(e, "mediaTypes.video.playerSize")) && 1 === e.mediaTypes.video.playerSize.length ? t = e.mediaTypes.video.playerSize[0] : Array.isArray(e.sizes) && 0 < e.sizes.length && Array.isArray(e.sizes[0]) && 1 < e.sizes[0].length && (t = e.sizes[0]),
                    t
                }
                var i = [];
                return Array.isArray(r.sizes) ? i = r.sizes : void 0 !== l.deepAccess(e, "mediaTypes.banner.sizes") ? i = n(e.mediaTypes.banner.sizes) : Array.isArray(e.sizes) && 0 < e.sizes.length ? i = n(e.sizes) : l.logWarn("Warning: no sizes are setup or found"),
                o(i)
            }
            function n(e) {
                return l.parseSizesInput(e).reduce((function(e, r) {
                    var t = parseInt(v[r], 10);
                    return t && e.push(t),
                    e
                }
                ), [])
            }
            function _(e) {
                return e.mediaType === y.VIDEO || void 0 !== l.deepAccess(e, "mediaTypes." + y.VIDEO)
            }
            function o(e) {
                var n = [15, 2, 9];
                return e.sort((function(e, r) {
                    var t = n.indexOf(e)
                      , i = n.indexOf(r);
                    return -1 < t || -1 < i ? -1 === t ? 1 : -1 === i ? -1 : t - i : e - r
                }
                ))
            }
            var d = !1;
            (0,
            i.registerBidder)(a)
        },
        436: function(e, r) {}
    }, [434]);
    pbjs.processQueue();
}
!(function(e) {
    function t(o) {
        if (i[o])
            return i[o].exports;
        var n = i[o] = {
            exports: {},
            id: o,
            loaded: !1
        };
        return e[o].call(n.exports, n, n.exports, t),
        n.loaded = !0,
        n.exports
    }
    var i = {};
    return t.m = e,
    t.c = i,
    t.p = "",
    t(0)
}
)([(function(e, t, i) {
    var o = i(1)
      , n = i(10)
      , r = i(6)
      , s = o.getMetaInfo(window);
    window.PWT = window.PWT || {},
    window.PWT.bidMap = window.PWT.bidMap || {},
    window.PWT.bidIdMap = window.PWT.bidIdMap || {},
    window.PWT.isIframe = window.PWT.isIframe || s.isInIframe,
    window.PWT.protocol = window.PWT.protocol || s.protocol,
    window.PWT.secure = window.PWT.secure || s.secure,
    window.PWT.pageURL = window.PWT.pageURL || s.pageURL,
    window.PWT.refURL = window.PWT.refURL || s.refURL,
    window.PWT.isSafeFrame = window.PWT.isSafeFrame || !1,
    window.PWT.safeFrameMessageListenerAdded = window.PWT.safeFrameMessageListenerAdded || !1,
    window.PWT.udpv = window.PWT.udpv || o.findQueryParamInURL(s.isIframe ? s.refURL : s.pageURL, "pwtv"),
    o.findQueryParamInURL(s.isIframe ? s.refURL : s.pageURL, "pwtc") && o.enableDebugLog(),
    o.findQueryParamInURL(s.isIframe ? s.refURL : s.pageURL, "pwtvc") && o.enableVisualDebugLog(),
    window.PWT.displayCreative = function(e, t) {
        o.log("In displayCreative for: " + t),
        r.displayCreative(e, t)
    }
    ,
    window.PWT.displayPMPCreative = function(e, t, i) {
        o.log("In displayPMPCreative for: " + t);
        var n = o.getBididForPMP(t, i);
        n && r.displayCreative(e, n)
    }
    ,
    window.PWT.sfDisplayCreative = function(e, t) {
        o.log("In sfDisplayCreative for: " + t),
        this.isSafeFrame = !0,
        window.parent.postMessage(JSON.stringify({
            pwt_type: "1",
            pwt_bidID: t,
            pwt_origin: window.location.protocol + "//" + window.location.hostname
        }), "*")
    }
    ,
    window.PWT.sfDisplayPMPCreative = function(e, t, i) {
        o.log("In sfDisplayPMPCreative for: " + t),
        this.isSafeFrame = !0,
        window.parent.postMessage(JSON.stringify({
            pwt_type: "1",
            pwt_bidID: o.getBididForPMP(t, i),
            pwt_origin: window.location.protocol + "//" + window.location.hostname
        }), "*")
    }
    ,
    window.OWT = {
        notifyCount: 0,
        externalBidderStatuses: {}
    },
    window.OWT.registerExternalBidders = function(e) {
        return window.OWT.notifyCount++,
        o.forEachOnArray(e, (function(e, t) {
            o.log("registerExternalBidders: " + t),
            window.OWT.externalBidderStatuses[t] = {
                id: window.OWT.notifyCount,
                status: !1
            }
        }
        )),
        window.OWT.notifyCount
    }
    ,
    window.OWT.notifyExternalBiddingComplete = function(e) {
        o.forEachOnObject(window.OWT.externalBidderStatuses, (function(t, i) {
            i && i.id === e && (o.log("notify externalBidding complete: " + t),
            window.OWT.externalBidderStatuses[t] = {
                id: i.id,
                status: !0
            })
        }
        ))
    }
    ,
    n.init(window)
}
), (function(e, t, i) {
    function o(e, t) {
        return m.call(e) === "[object " + t + "]"
    }
    var n = i(2)
      , r = i(3)
      , s = i(6)
      , a = !1;
    t.debugLogIsEnabled = a;
    var d = !1;
    t.visualDebugLogIsEnabled = d;
    var p = "Array"
      , l = "String"
      , c = "Function"
      , u = "Number"
      , m = Object.prototype.toString
      , _ = this;
    t.isA = o,
    t.isFunction = function(e) {
        return _.isA(e, c)
    }
    ,
    t.isString = function(e) {
        return _.isA(e, l)
    }
    ,
    t.isArray = function(e) {
        return _.isA(e, p)
    }
    ,
    t.isNumber = function(e) {
        return _.isA(e, u)
    }
    ,
    t.isObject = function(e) {
        return "object" == typeof e && null !== e
    }
    ,
    t.isOwnProperty = function(e, t) {
        return e.hasOwnProperty ? e.hasOwnProperty(t) : !1
    }
    ,
    t.isUndefined = function(e) {
        return "undefined" == typeof e
    }
    ,
    t.enableDebugLog = function() {
        _.debugLogIsEnabled = !0
    }
    ,
    t.isDebugLogEnabled = function() {
        return _.debugLogIsEnabled
    }
    ,
    t.enableVisualDebugLog = function() {
        _.debugLogIsEnabled = !0,
        _.visualDebugLogIsEnabled = !0
    }
    ;
    var g = "[OpenWrap] : ";
    t.log = function(e) {
        _.debugLogIsEnabled && console && this.isFunction(console.log) && (this.isString(e) ? console.log((new Date).getTime() + " : " + g + e) : console.log(e))
    }
    ,
    t.getCurrentTimestampInMs = function() {
        var e = new window.Date;
        return e.getTime()
    }
    ,
    t.getCurrentTimestamp = function() {
        var e = new Date;
        return Math.round(e.getTime() / 1e3)
    }
    ;
    var I = (function() {
        var e = 0;
        return function() {
            return e++,
            e
        }
    }
    )();
    t.utilGetIncrementalInteger = I,
    t.getUniqueIdentifierStr = function() {
        return I() + window.Math.random().toString(16).substr(2)
    }
    ,
    t.copyKeyValueObject = function(e, t) {
        if (_.isObject(e) && _.isObject(t)) {
            var i = _;
            _.forEachOnObject(t, (function(o, n) {
                if (t[o] = i.isArray(n) ? n : [n],
                i.isOwnProperty(e, o)) {
                    if (!_.isArray(e[o])) {
                        var r = e[o];
                        e[o] = [r]
                    }
                    e[o].push(n)
                } else
                    e[o] = [n]
            }
            ))
        }
    }
    ,
    t.getIncrementalInteger = (function() {
        var e = 0;
        return function() {
            return e++,
            e
        }
    }
    )(),
    t.generateUUID = function() {
        var e = (new window.Date).getTime()
          , t = window.decodeURIComponent(this.pageURL).toLowerCase().replace(/[^a-z,A-Z,0-9]/gi, "")
          , i = t.length
          , o = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx-zzzzz".replace(/[xyz]/g, (function(o) {
            var n = (e + 16 * Math.random()) % 16 | 0;
            e = Math.floor(e / 16);
            var r;
            switch (o) {
            case "x":
                r = n;
                break;
            case "z":
                r = t[Math.floor(Math.random() * i)];
                break;
            default:
                r = 3 & n | 8
            }
            return r.toString(16)
        }
        ));
        return o
    }
    ;
    var f = "g"
      , x = new RegExp(n.MACROS.WIDTH,f)
      , h = new RegExp(n.MACROS.HEIGHT,f)
      , b = new RegExp(n.MACROS.AD_UNIT_ID,f)
      , w = new RegExp(n.MACROS.AD_UNIT_INDEX,f)
      , T = new RegExp(n.MACROS.INTEGER,f)
      , S = new RegExp(n.MACROS.DIV,f);
    t.generateSlotNamesFromPattern = function(e, t) {
        var i, o, n, r, s = [], a = {};
        if (_.isObject(e) && _.isFunction(e.getSizes) && (o = e.getSizes(),
        n = o.length,
        n > 0))
            for (r = 0; n > r; r++)
                o[r][0] && o[r][1] && (i = t,
                i = i.replace(b, e.getAdUnitID()).replace(x, o[r][0]).replace(h, o[r][1]).replace(w, e.getAdUnitIndex()).replace(T, _.getIncrementalInteger()).replace(S, e.getDivID()),
                _.isOwnProperty(a, i) || (a[i] = "",
                s.push(i)));
        return s
    }
    ,
    t.checkMandatoryParams = function(e, t, i) {
        var o = !1
          , n = !0;
        if (!e || !_.isObject(e) || _.isArray(e))
            return _.log(i + "provided object is invalid."),
            o;
        if (!_.isArray(t))
            return _.log(i + "provided keys must be in an array."),
            o;
        var r = t.length;
        if (0 == r)
            return n;
        for (var s = 0; r > s; s++)
            if (!_.isOwnProperty(e, t[s]))
                return _.log(i + ": " + t[s] + ", mandatory parameter not present."),
                o;
        return n
    }
    ,
    t.forEachGeneratedKey = function(e, t, i, o, a, d, p, l, c, u) {
        var m, g, I, f, x, h = d.length;
        if (h > 0 && p.length > 3)
            for (x = p.indexOf(n.MACROS.WIDTH) >= 0 && p.indexOf(n.MACROS.HEIGHT) >= 0,
            m = 0; h > m; m++) {
                var b = d[m];
                for (I = _.generateSlotNamesFromPattern(b, p),
                f = I.length,
                g = 0; f > g; g++) {
                    var w = I[g]
                      , T = null
                      , S = !1
                      , E = b.getSizes();
                    if (null == l ? S = !0 : (T = l[w],
                    T ? _.checkMandatoryParams(T, a, e) ? S = !0 : _.log(e + ": " + w + n.MESSAGES.M9) : _.log(e + ": " + w + n.MESSAGES.M8)),
                    S) {
                        if (1 == u) {
                            var A = r.createBid(e, w);
                            A.setDefaultBidStatus(1).setReceivedTime(_.getCurrentTimestampInMs()),
                            s.setBidFromBidder(b.getDivID(), A)
                        }
                        c(e, t, i, o, w, x, b, l ? l[w] : null, E[g][0], E[g][1])
                    }
                }
            }
    }
    ,
    t.resizeWindow = function(e, t, i, o) {
        if (i && t)
            try {
                var n = e.defaultView.frameElement
                  , r = [];
                if (o) {
                    var s = document.getElementById(o)
                      , a = s.querySelector("div");
                    r.push(a),
                    r.push(a.querySelector("iframe")),
                    n = s.querySelector("iframe")
                }
                r.push(n),
                r.forEach((function(e) {
                    e && (e.width = "" + t,
                    e.height = "" + i,
                    e.style.width = "" + t + "px",
                    e.style.height = "" + i + "px")
                }
                ))
            } catch (d) {
                _.log("Creative-Resize; Error in resizing creative")
            }
    }
    ,
    t.writeIframe = function(e, t, i, o, n) {
        e.write('<iframe frameborder="0" allowtransparency="true" marginheight="0" marginwidth="0" scrolling="no" width="' + i + '" hspace="0" vspace="0" height="' + o + '"' + (n ? ' style="' + n + '"' : "") + ' src="' + t + '"></iframe>')
    }
    ,
    t.displayCreative = function(e, t) {
        _.resizeWindow(e, t.width, t.height),
        t.adHtml ? e.write(t.adHtml) : t.adUrl ? _.writeIframe(e, t.adUrl, t.width, t.height, "") : (_.log("creative details are not found"),
        _.log(t))
    }
    ,
    t.getScreenWidth = function(e) {
        var t = -1;
        return e.innerHeight ? t = e.innerWidth : e.document && e.document.documentElement && e.document.documentElement.clientWidth ? t = e.document.documentElement.clientWidth : e.document.body && (t = e.document.body.clientWidth),
        t
    }
    ,
    t.getScreenHeight = function(e) {
        var t = -1;
        return e.innerHeight ? t = e.innerHeight : e.document && e.document.documentElement && e.document.documentElement.clientHeight ? t = e.document.documentElement.clientHeight : e.document.body && (t = e.document.body.clientHeight),
        t
    }
    ,
    t.forEachOnObject = function(e, t) {
        if (_.isObject(e) && _.isFunction(t))
            for (var i in e)
                _.isOwnProperty(e, i) && t(i, e[i])
    }
    ,
    t.forEachOnArray = function(e, t) {
        if (_.isArray(e) && _.isFunction(t))
            for (var i = 0, o = e.length; o > i; i++)
                t(i, e[i])
    }
    ,
    t.trim = function(e) {
        return _.isString(e) ? e.replace(/^\s+/g, "").replace(/\s+$/g, "") : e
    }
    ,
    t.getTopFrameOfSameDomain = function(e) {
        try {
            if (e.parent.document != e.document)
                return _.getTopFrameOfSameDomain(e.parent)
        } catch (t) {}
        return e
    }
    ,
    t.metaInfo = {},
    t.getMetaInfo = function(e) {
        var t, i = {}, o = 512;
        i.pageURL = "",
        i.refURL = "",
        i.protocol = "https://",
        i.secure = 1,
        i.isInIframe = _.isIframe(e);
        try {
            t = _.getTopFrameOfSameDomain(e),
            i.refURL = (t.refurl || t.document.referrer || "").substr(0, o),
            i.pageURL = (t !== window.top && "" != t.document.referrer ? t.document.referrer : t.location.href).substr(0, o),
            i.protocol = (function(e) {
                return "http:" === e.location.protocol ? (i.secure = 0,
                "http://") : (i.secure = 1,
                "https://")
            }
            )(t)
        } catch (n) {}
        return _.metaInfo = i,
        i
    }
    ,
    t.isIframe = function(e) {
        try {
            return e.self !== e.top
        } catch (t) {
            return !1
        }
    }
    ,
    t.findInString = function(e, t) {
        return e.indexOf(t) >= 0
    }
    ,
    t.findQueryParamInURL = function(e, t) {
        return _.isOwnProperty(_.parseQueryParams(e), t)
    }
    ,
    t.parseQueryParams = function(e) {
        var t = _.createDocElement(window, "a");
        t.href = e;
        var i = {};
        if (t.search) {
            var o = t.search.replace("?", "");
            o = o.split("&"),
            _.forEachOnArray(o, (function(e, t) {
                var t = t.split("=")
                  , o = t[0] || ""
                  , n = t[1] || "";
                i[o] = n
            }
            ))
        }
        return i
    }
    ,
    t.createDocElement = function(e, t) {
        return e.document.createElement(t)
    }
    ,
    t.addHookOnFunction = function(e, t, i, o) {
        var n = e;
        if (e = t ? e.__proto__ : e,
        _.isObject(e) && _.isFunction(e[i])) {
            var r = e[i];
            e[i] = o(n, r)
        } else
            _.log("in assignNewDefination: oldReference is not a function")
    }
    ,
    t.getBididForPMP = function(e, t) {
        e = e.split(",");
        var i = e.length
          , o = t.length
          , r = ""
          , s = "";
        if (0 == i)
            return this.log("Error: Unable to find bidID as values array is empty."),
            void 0;
        for (var a = 0; o > a; a++) {
            for (var d = 0; i > d; d++)
                if (e[d].indexOf(t[a]) >= 0) {
                    r = e[d];
                    break
                }
            if ("" != r)
                break
        }
        "" == r ? (r = e[0],
        this.log("No PMP-Deal was found matching PriorityArray, So Selecting first PMP-Deal: " + r)) : this.log("Selecting PMP-Deal: " + r);
        var p = r.split(n.COMMON.DEAL_KEY_VALUE_SEPARATOR);
        return 3 == p.length && (s = p[2]),
        s ? s : (this.log("Error: bidID not found in PMP-Deal: " + r),
        void 0)
    }
    ,
    t.createInvisibleIframe = function() {
        var e = _.createDocElement(window, "iframe");
        return e.id = _.getUniqueIdentifierStr(),
        e.height = 0,
        e.width = 0,
        e.border = "0px",
        e.hspace = "0",
        e.vspace = "0",
        e.marginWidth = "0",
        e.marginHeight = "0",
        e.style.border = "0",
        e.scrolling = "no",
        e.frameBorder = "0",
        e.src = "about:self",
        e.style = "display:none",
        e
    }
    ,
    t.addMessageEventListener = function(e, t) {
        return "function" != typeof t ? (_.log("EventHandler should be a function"),
        !1) : (e.addEventListener ? e.addEventListener("message", t, !1) : e.attachEvent("onmessage", t),
        !0)
    }
    ,
    t.safeFrameCommunicationProtocol = function(e) {
        try {
            if (msgData = window.JSON.parse(e.data),
            !msgData.pwt_type)
                return;
            switch (window.parseInt(msgData.pwt_type)) {
            case 1:
                if (window.PWT.isSafeFrame)
                    return;
                var t = s.getBidById(msgData.pwt_bidID);
                if (t) {
                    var i = t.bid
                      , o = i.getAdapterID()
                      , n = t.slotid
                      , r = {
                        pwt_type: 2,
                        pwt_bid: i
                    };
                    _.vLogInfo(n, {
                        type: "disp",
                        adapter: o
                    }),
                    s.executeMonetizationPixel(n, i),
                    _.resizeWindow(window.document, i.width, i.height, n),
                    e.source.postMessage(window.JSON.stringify(r), msgData.pwt_origin)
                }
                break;
            case 2:
                if (!window.PWT.isSafeFrame)
                    return;
                if (msgData.pwt_bid) {
                    var i = msgData.pwt_bid;
                    if (i.adHtml)
                        try {
                            var a = _.createInvisibleIframe(window.document);
                            if (!a)
                                throw {
                                    message: "Failed to create invisible frame.",
                                    name: ""
                                };
                            if (a.setAttribute("width", i.width),
                            a.setAttribute("height", i.height),
                            a.style = "",
                            window.document.body.appendChild(a),
                            !a.contentWindow)
                                throw {
                                    message: "Unable to access frame window.",
                                    name: ""
                                };
                            var d = a.contentWindow.document;
                            if (!d)
                                throw {
                                    message: "Unable to access frame window document.",
                                    name: ""
                                };
                            var p = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;</script></head>';
                            p += "<body>",
                            p += "<script>var $sf = window.parent.$sf;</script>",
                            p += "<script>setInterval(function(){try{var fr = window.document.defaultView.frameElement;fr.width = window.parent.document.defaultView.innerWidth;fr.height = window.parent.document.defaultView.innerHeight;}catch(e){}}, 200);</script>",
                            p += i.adHtml,
                            p += "</body></html>",
                            d.write(p),
                            d.close()
                        } catch (l) {
                            _.log("Error in rendering creative in safe frame."),
                            _.log(l),
                            _.log("Rendering synchronously."),
                            _.displayCreative(window.document, msgData.pwt_bid)
                        }
                    else
                        i.adUrl ? _.writeIframe(window.document, i.adUrl, i.width, i.height, "") : (_.log("creative details are not found"),
                        _.log(i))
                }
            }
        } catch (l) {}
    }
    ,
    t.addMessageEventListenerForSafeFrame = function(e) {
        _.addMessageEventListener(e, _.safeFrameCommunicationProtocol)
    }
    ,
    t.getElementLocation = function(e) {
        var t, i = 0, o = 0;
        if (_.isFunction(e.getBoundingClientRect))
            t = e.getBoundingClientRect(),
            i = Math.floor(t.left),
            o = Math.floor(t.top);
        else
            for (; e; )
                i += e.offsetLeft,
                o += e.offsetTop,
                e = e.offsetParent;
        return {
            x: i,
            y: o
        }
    }
    ,
    t.createVLogInfoPanel = function(e, t) {
        var i, o, n, r = window.document;
        if (_.visualDebugLogIsEnabled && (i = r.getElementById(e),
        i && t.length && t[0][0] && t[0][1] && (n = e + "-pwtc-info",
        !_.isUndefined(r.getElementById(n))))) {
            var s = _.getElementLocation(i);
            o = r.createElement("div"),
            o.id = n,
            o.style = "position: absolute; /*top: " + s.y + "px;*/ left: " + s.x + "px; width: " + t[0][0] + "px; height: " + t[0][1] + "px; border: 1px solid rgb(255, 204, 52); padding-left: 11px; background: rgb(247, 248, 224) none repeat scroll 0% 0%; overflow: auto; z-index: 9999997; visibility: hidden;opacity:0.9;font-size:13px;font-family:monospace;";
            var a = r.createElement("img");
            a.src = _.metaInfo.protocol + "ads.pubmatic.com/AdServer/js/pwt/close.png",
            a.style = "cursor:pointer; position: absolute; top: 2px; left: " + (s.x + t[0][0] - 16 - 15) + "px; z-index: 9999998;",
            a.title = "close",
            a.onclick = function() {
                o.style.display = "none"
            }
            ,
            o.appendChild(a),
            o.appendChild(r.createElement("br"));
            for (var d = "Slot: " + e + " | ", p = 0; p < t.length; p++)
                d += (0 != p ? ", " : "") + t[p][0] + "x" + t[p][1];
            o.appendChild(r.createTextNode(d)),
            o.appendChild(r.createElement("br")),
            i.parentNode.insertBefore(o, i)
        }
    }
    ,
    t.realignVLogInfoPanel = function(e) {
        var t, i, o, n = window.document;
        if (_.visualDebugLogIsEnabled && (t = n.getElementById(e),
        t && (o = e + "-pwtc-info",
        i = n.getElementById(o)))) {
            var r = _.getElementLocation(t);
            i.style.visibility = "visible",
            i.style.left = r.x + "px",
            i.style.height = t.clientHeight + "px"
        }
    }
    ,
    t.vLogInfo = function(e, t) {
        var i, o, n = window.document;
        if (_.visualDebugLogIsEnabled) {
            var r = e + "-pwtc-info";
            if (i = n.getElementById(r)) {
                switch (t.type) {
                case "bid":
                    var s = t.latency
                      , a = t.bidDetails;
                    0 > s && (s = 0),
                    o = "Bid: " + t.bidder + (t.s2s ? "(s2s)" : "") + ": " + a.getNetEcpm() + "(" + a.getGrossEcpm() + "): " + s + "ms",
                    a.getPostTimeoutStatus() && (o += ": POST-TIMEOUT");
                    break;
                case "win-bid":
                    var a = t.bidDetails;
                    o = "Winning Bid: " + a.getAdapterID() + ": " + a.getNetEcpm();
                    break;
                case "win-bid-fail":
                    o = "There are no bids from PWT";
                    break;
                case "hr":
                    o = "----------------------";
                    break;
                case "disp":
                    o = "Displaying creative from " + t.adapter
                }
                i.appendChild(n.createTextNode(o)),
                i.appendChild(n.createElement("br"))
            }
        }
    }
    ,
    t.getExternalBidderStatus = function(e) {
        var t = !0;
        return _.forEachOnArray(e, (function(e, i) {
            t = window.OWT.externalBidderStatuses[i] ? t && window.OWT.externalBidderStatuses[i].status : t
        }
        )),
        t
    }
    ,
    t.resetExternalBidderStatus = function(e) {
        _.forEachOnArray(e, (function(e, t) {
            _.log("resetExternalBidderStatus: " + t),
            window.OWT.externalBidderStatuses[t] = void 0
        }
        ))
    }
    ,
    t.ajaxRequest = function(e, t, i, o) {
        try {
            o = o || {};
            var n, r = 4, s = !0, a = o.method || (i ? "POST" : "GET");
            if (window.XMLHttpRequest ? (n = new window.XMLHttpRequest,
            _.isUndefined(n.responseType) && (s = !1)) : s = !1,
            !s)
                return _.log("Ajax is not supported"),
                void 0;
            n.onreadystatechange = function() {
                n.readyState === r && t && t(n.responseText, n)
            }
            ,
            n.open(a, e),
            o.withCredentials && (n.withCredentials = !0),
            o.preflight && n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
            n.setRequestHeader("Content-Type", o.contentType || "text/plain"),
            n.send("POST" === a && i)
        } catch (d) {
            _.log("Failed in Ajax"),
            _.log(d)
        }
    }
}
), (function(e, t) {
    t.COMMON = {
        BID_PRECISION: 2,
        DEAL_KEY_FIRST_PART: "pwtdeal_",
        DEAL_KEY_VALUE_SEPARATOR: "_-_",
        PREBID_PREFIX: "PB_",
        CONFIG: "config",
        DIV_ID: "divID",
        PARAMS: "params",
        SIZES: "sizes",
        HEIGHT: "height",
        WIDTH: "width",
        SLOTS: "slots",
        KEY_GENERATION_PATTERN_VALUE: "kgpv",
        KEY_VALUE_PAIRS: "kvp",
        IMPRESSION_ID: "iid",
        PARENT_ADAPTER_PREBID: "prebid"
    },
    t.CONFIG = {
        GLOBAL: "global",
        ADAPTERS: "adapters",
        COMMON: "pwt",
        TIMEOUT: "t",
        KEY_GENERATION_PATTERN: "kgp",
        KEY_LOOKUP_MAP: "klm",
        SERVER_SIDE_KEY: "sk",
        PUBLISHER_ID: "pubid",
        PROFILE_ID: "pid",
        PROFILE_VERSION_ID: "pdvid",
        LOGGER_URL: "dataURL",
        TRACKER_URL: "winURL",
        REV_SHARE: "rev_share",
        THROTTLE: "throttle",
        BID_PASS_THROUGH: "pt",
        GLOBAL_KEY_VALUE: "gkv",
        MASK_BIDS: "maksBids",
        META_DATA_PATTERN: "metaDataPattern",
        SEND_ALL_BIDS: "sendAllBids",
        SERVER_SIDE_ENABLED: "serverSideEnabled",
        GDPR_CONSENT: "gdpr",
        CONSENT_STRING: "cns",
        GDPR_CMPAPI: "cmpApi",
        GDPR_TIMEOUT: "gdprTimeout",
        GDPR_AWC: "awc",
        DEFAULT_GDPR_CMPAPI: "iab",
        DEFAULT_GDPR_TIMEOUT: 1e4,
        DEFAULT_GDPR_AWC: "0",
        DEFAULT_GDPR_CONSENT: "0",
        DISABLE_AJAX_TIMEOUT: "disableAjaxTimeout"
    },
    t.METADATA_MACROS = {
        WIDTH: "_W_",
        HEIGHT: "_H_",
        PARTNER: "_P_",
        GROSS_ECPM: "_GE_",
        NET_ECPM: "_NE_",
        BID_COUNT: "_BC_",
        PARTNER_COUNT: "_PC_"
    },
    t.MACROS = {
        WIDTH: "_W_",
        HEIGHT: "_H_",
        AD_UNIT_ID: "_AU_",
        AD_UNIT_INDEX: "_AUI_",
        INTEGER: "_I_",
        DIV: "_DIV_"
    },
    t.SLOT_STATUS = {
        CREATED: 0,
        PARTNERS_CALLED: 1,
        TARGETING_ADDED: 2,
        DISPLAYED: 3
    },
    t.WRAPPER_TARGETING_KEYS = {
        BID_ID: "pwtsid",
        BID_STATUS: "pwtbst",
        BID_ECPM: "pwtecp",
        BID_DEAL_ID: "pwtdid",
        BID_ADAPTER_ID: "pwtpid",
        BID_SIZE: "pwtsz",
        PUBLISHER_ID: "pwtpubid",
        PROFILE_ID: "pwtprofid",
        PROFILE_VERSION_ID: "pwtverid",
        META_DATA: "pwtm"
    },
    t.IGNORE_PREBID_KEYS = {
        hb_bidder: 1,
        hb_adid: 1,
        hb_pb: 1,
        hb_size: 1,
        hb_deal: 1
    },
    t.LOGGER_PIXEL_PARAMS = {
        TIMESTAMP: "tst",
        PAGE_URL: "purl",
        TIMEOUT: "to"
    },
    t.MESSAGES = {
        M1: ": In fetchbids.",
        M2: ": Throttled.",
        M3: ": adapter must implement the fetchBids() function.",
        M4: "BidManager: entry ",
        M5: ": Callback.",
        M6: "bidAlreadExists : ",
        M7: ": Exiting from fetchBids.",
        M8: ". Config not found, ignored.",
        M9: ". Config ignored.",
        M10: "Bid is rejected as ecpm is NULL.",
        M11: "Bid is rejected as ecpm is NaN: ",
        M12: "Existing bid ecpm: ",
        M13: ", is lower than new bid ecpm ",
        M14: ", so we are replacing bid.",
        M15: ", is greater than new bid ecpm ",
        M16: ", so we are not replacing bid.",
        M17: "Post timeout bid, ignored.",
        M18: "Bid is selected.",
        M19: ": Found winning adapterID: ",
        M20: "Bid is rejected as ecpm is empty string.",
        M21: ": error in respose handler.",
        M22: "Bid is rejected as ecpm is <= 0.",
        M23: "Existing bid is default-bid with zero ecpm, thus replacing it with the new bid from partner.",
        M24: "Passsed argument is not a bidAdaptor",
        M25: "Bid details not found for bidID: "
    }
}
), (function(e, t, i) {
    function o(e, t) {
        this.adapterID = e,
        this.kgpv = t,
        this.bidID = s.getUniqueIdentifierStr(),
        this.grossEcpm = 0,
        this.netEcpm = 0,
        this.defaultBid = 0,
        this.adHtml = "",
        this.adUrl = "",
        this.height = 0,
        this.width = 0,
        this.creativeID = "",
        this.keyValuePairs = {},
        this.isPostTimeout = !1,
        this.receivedTime = 0,
        this.isServerSide = n.isServerSideAdapter(e) ? 1 : 0,
        this.dealID = "",
        this.dealChannel = "",
        this.isWinningBid = !1,
        this.status = 0,
        this.serverSideResponseTime = 0
    }
    var n = i(4)
      , r = i(2)
      , s = i(1);
    o.prototype.setServerSideResponseTime = function(e) {
        this.serverSideResponseTime = e
    }
    ,
    o.prototype.getServerSideResponseTime = function() {
        return this.serverSideResponseTime
    }
    ,
    o.prototype.getServerSideStatus = function() {
        return this.isServerSide
    }
    ,
    o.prototype.setServerSideStatus = function(e) {
        this.isServerSide = e
    }
    ,
    o.prototype.getAdapterID = function() {
        return this.adapterID
    }
    ,
    o.prototype.getBidID = function() {
        return this.bidID
    }
    ,
    o.prototype.setGrossEcpm = function(e) {
        return null === e ? (s.log(r.MESSAGES.M10),
        s.log(this),
        this) : s.isString(e) && (e = e.replace(/\s/g, ""),
        0 === e.length) ? (s.log(r.MESSAGES.M20),
        s.log(this),
        this) : window.isNaN(e) ? (s.log(r.MESSAGES.M11 + e),
        s.log(this),
        this) : (e = window.parseFloat(e.toFixed(r.COMMON.BID_PRECISION)),
        this.grossEcpm = e,
        this.netEcpm = window.parseFloat((this.grossEcpm * n.getAdapterRevShare(this.getAdapterID())).toFixed(r.COMMON.BID_PRECISION)),
        this)
    }
    ,
    o.prototype.getGrossEcpm = function() {
        return this.grossEcpm
    }
    ,
    o.prototype.getNetEcpm = function() {
        return this.netEcpm
    }
    ,
    o.prototype.setDefaultBidStatus = function(e) {
        return this.defaultBid = e,
        this
    }
    ,
    o.prototype.getDefaultBidStatus = function() {
        return this.defaultBid
    }
    ,
    o.prototype.setAdHtml = function(e) {
        return this.adHtml = e,
        this
    }
    ,
    o.prototype.getAdHtml = function() {
        return this.adHtml
    }
    ,
    o.prototype.setAdUrl = function(e) {
        return this.adUrl = e,
        this
    }
    ,
    o.prototype.getAdUrl = function() {
        return this.adUrl
    }
    ,
    o.prototype.setHeight = function(e) {
        return this.height = e,
        this
    }
    ,
    o.prototype.getHeight = function() {
        return this.height
    }
    ,
    o.prototype.setWidth = function(e) {
        return this.width = e,
        this
    }
    ,
    o.prototype.getWidth = function() {
        return this.width
    }
    ,
    o.prototype.getKGPV = function() {
        return this.kgpv
    }
    ,
    o.prototype.setKeyValuePair = function(e, t) {
        return this.keyValuePairs[e.substr(0, 20)] = t,
        this
    }
    ,
    o.prototype.getKeyValuePairs = function() {
        return this.keyValuePairs
    }
    ,
    o.prototype.setPostTimeoutStatus = function() {
        return this.isPostTimeout = !0,
        this
    }
    ,
    o.prototype.getPostTimeoutStatus = function() {
        return this.isPostTimeout
    }
    ,
    o.prototype.setReceivedTime = function(e) {
        return this.receivedTime = e,
        this
    }
    ,
    o.prototype.getReceivedTime = function() {
        return this.receivedTime
    }
    ,
    o.prototype.setDealID = function(e) {
        return e && (this.dealID = e,
        this.dealChannel = this.dealChannel || "PMP",
        this.setKeyValuePair(r.COMMON.DEAL_KEY_FIRST_PART + this.adapterID, this.dealChannel + r.COMMON.DEAL_KEY_VALUE_SEPARATOR + this.dealID + r.COMMON.DEAL_KEY_VALUE_SEPARATOR + this.bidID)),
        this
    }
    ,
    o.prototype.getDealID = function() {
        return this.dealID
    }
    ,
    o.prototype.setDealChannel = function(e) {
        return this.dealID && e && (this.dealChannel = e,
        this.setKeyValuePair(r.COMMON.DEAL_KEY_FIRST_PART + this.adapterID, this.dealChannel + r.COMMON.DEAL_KEY_VALUE_SEPARATOR + this.dealID + r.COMMON.DEAL_KEY_VALUE_SEPARATOR + this.bidID)),
        this
    }
    ,
    o.prototype.getDealChannel = function() {
        return this.dealChannel
    }
    ,
    o.prototype.setWinningBidStatus = function() {
        return this.isWinningBid = !0,
        this
    }
    ,
    o.prototype.getWinningBidStatus = function() {
        return this.isWinningBid
    }
    ,
    o.prototype.setStatus = function(e) {
        return this.status = e,
        this
    }
    ,
    o.prototype.getStatus = function() {
        return this.status
    }
    ,
    o.prototype.setSendAllBidsKeys = function() {
        this.setKeyValuePair(r.WRAPPER_TARGETING_KEYS.BID_ID + "_" + this.adapterID, this.bidID),
        this.setKeyValuePair(r.WRAPPER_TARGETING_KEYS.BID_STATUS + "_" + this.adapterID, this.getNetEcpm() > 0 ? 1 : 0),
        this.setKeyValuePair(r.WRAPPER_TARGETING_KEYS.BID_ECPM + "_" + this.adapterID, this.getNetEcpm().toFixed(r.COMMON.BID_PRECISION)),
        this.setKeyValuePair(r.WRAPPER_TARGETING_KEYS.BID_SIZE + "_" + this.adapterID, this.width + "x" + this.height)
    }
    ,
    e.exports.Bid = o,
    t.createBid = function(e, t) {
        return new o(e,t)
    }
}
), (function(e, t, i) {
    function o() {
        var e = r.COMMON.PARENT_ADAPTER_PREBID;
        if (!s.isOwnProperty(n.adapters, e)) {
            var t = {};
            t[r.CONFIG.REV_SHARE] = "0.0",
            t[r.CONFIG.THROTTLE] = "100",
            t[r.CONFIG.KEY_GENERATION_PATTERN] = "_DIV_",
            t[r.CONFIG.KEY_LOOKUP_MAP] = {},
            n.adapters[e] = t
        }
    }
    var n = i(5)
      , r = i(2)
      , s = i(1)
      , a = null;
    a = this,
    t.getPublisherId = function() {
        return s.trim(n.pwt.pubid) || "0"
    }
    ,
    t.getMataDataPattern = function() {
        return s.isString(n[r.CONFIG.COMMON][r.CONFIG.META_DATA_PATTERN]) ? n[r.CONFIG.COMMON][r.CONFIG.META_DATA_PATTERN] : null
    }
    ,
    t.getSendAllBidsStatus = function() {
        return window.parseInt(n[r.CONFIG.COMMON][r.CONFIG.SEND_ALL_BIDS]) || 0
    }
    ,
    t.getTimeout = function() {
        return window.parseInt(n.pwt.t) || 1e3
    }
    ,
    t.getDisableAjaxTimeout = function() {
        var e = n.pwt;
        return s.isOwnProperty(e, r.CONFIG.DISABLE_AJAX_TIMEOUT) ? 1 == n.pwt.disableAjaxTimeout : !0
    }
    ,
    t.getAdapterRevShare = function(e) {
        var t = n.adapters;
        return s.isOwnProperty(t[e], r.CONFIG.REV_SHARE) ? 1 - window.parseFloat(t[e][r.CONFIG.REV_SHARE]) / 100 : 1
    }
    ,
    t.getAdapterThrottle = function(e) {
        var t = n.adapters;
        return s.isOwnProperty(t[e], r.CONFIG.THROTTLE) ? 100 - window.parseFloat(t[e][r.CONFIG.THROTTLE]) : 0
    }
    ,
    t.isServerSideAdapter = function(e) {
        var t = n.adapters;
        return t[e] && s.isOwnProperty(t[e], r.CONFIG.SERVER_SIDE_ENABLED) ? 1 === window.parseInt(t[e][r.CONFIG.SERVER_SIDE_ENABLED]) : !1
    }
    ,
    t.getAdapterMaskBidsStatus = function(e) {
        var t = n.adapters
          , i = {
            audienceNetwork: 1
        };
        return s.isOwnProperty(i, e) ? i[e] : s.isOwnProperty(t[e], r.CONFIG.MASK_BIDS) ? window.parseInt(t[e][r.CONFIG.MASK_BIDS]) || 0 : 0
    }
    ,
    t.getBidPassThroughStatus = function(e) {
        var t = n.adapters;
        return s.isOwnProperty(t[e], r.CONFIG.BID_PASS_THROUGH) ? window.parseInt(t[e][r.CONFIG.BID_PASS_THROUGH]) : 0
    }
    ,
    t.getProfileID = function() {
        return s.trim(n.pwt[r.CONFIG.PROFILE_ID]) || "0"
    }
    ,
    t.getProfileDisplayVersionID = function() {
        return s.trim(n.pwt[r.CONFIG.PROFILE_VERSION_ID]) || "0"
    }
    ,
    t.getAnalyticsPixelURL = function() {
        return n.pwt[r.CONFIG.LOGGER_URL] || !1
    }
    ,
    t.getMonetizationPixelURL = function() {
        return n.pwt[r.CONFIG.TRACKER_URL] || !1
    }
    ,
    t.forEachAdapter = function(e) {
        s.forEachOnObject(n.adapters, e)
    }
    ,
    t.getGdpr = function() {
        var e = n[r.CONFIG.COMMON][r.CONFIG.GDPR_CONSENT] || r.CONFIG.DEFAULT_GDPR_CONSENT;
        return "1" === e
    }
    ,
    t.getCmpApi = function() {
        return n[r.CONFIG.COMMON][r.CONFIG.GDPR_CMPAPI] || r.CONFIG.DEFAULT_GDPR_CMPAPI
    }
    ,
    t.getGdprTimeout = function() {
        var e = n[r.CONFIG.COMMON][r.CONFIG.GDPR_TIMEOUT];
        return e ? window.parseInt(e) : r.CONFIG.DEFAULT_GDPR_TIMEOUT
    }
    ,
    t.getAwc = function() {
        var e = n[r.CONFIG.COMMON][r.CONFIG.GDPR_AWC] || r.CONFIG.DEFAULT_GDPR_AWC;
        return "1" === e
    }
    ,
    t.addPrebidAdapter = o,
    t.initConfig = function() {
        a.addPrebidAdapter();
        var e = {};
        s.forEachOnObject(r.CONFIG, (function(t, i) {
            e[i] = ""
        }
        )),
        s.forEachOnObject(n.adapters, (function(t, i) {
            var o = {};
            s.forEachOnObject(i, (function(t, i) {
                s.isOwnProperty(e, t) || (o[t] = i)
            }
            )),
            s.forEachOnObject(i[r.CONFIG.KEY_LOOKUP_MAP], (function(e, t) {
                s.forEachOnObject(o, (function(e, i) {
                    t[e] = i
                }
                ))
            }
            ))
        }
        ))
    }
}
), (function(e, t) {
    t.pwt = {
        t: "1200",
        pid: "1171",
        gcv: "65",
        pdvid: "2",
        pubid: "103207",
        dataURL: "t.pubmatic.com/wl?",
        winURL: "t.pubmatic.com/wt?",
        metaDataPattern: "_PC_:_BC_::_P_-_W_x_H_-_NE_[_GE_]||",
        sendAllBids: "0",
        adserver: "DFP",
        gdpr: "0",
        cmp: 0,
        gdprTimeout: 0,
        awc: 0,
        platform: "display"
    },
    t.adapters = {
        appnexus: {
            rev_share: "-50.0",
            timeout: "1200",
            throttle: "100",
            pt: 0,
            serverSideEnabled: "0",
            amp: 0,
            video: 0,
            kgp: "_DIV_@_W_x_H_",
            klm: {
                "dcom-misspell-bottom-lb-728x90@728x90": {
                    placementId: "12110035"
                },
                "dcom-misspell-lb-728x90@728x90": {
                    placementId: "12110032"
                },
                "dcom-misspell-mid-300x250@300x250": {
                    placementId: "12110033"
                },
                "dcom-misspell-top-300x250@300x250": {
                    placementId: "12110031"
                },
                "dcom-no-result-lb-728x90@728x90": {
                    placementId: "12110032"
                },
                "dcom-no-result-mid-300x250@300x250": {
                    placementId: "12110033"
                },
                "dcom-no-result-top-300x250@300x250": {
                    placementId: "12110031"
                },
                "dcom-serp-a-mid-300x250@300x250": {
                    placementId: "12110033"
                },
                "dcom-serp-a-mid-300x250@300x600": {
                    placementId: "13946221"
                },
                "dcom-serp-a-top-300x250@300x250": {
                    placementId: "12110031"
                },
                "dcom-serp-a-top-300x250@300x600": {
                    placementId: "12110031"
                },
                "dcom-serp-bot-300x250@300x250": {
                    placementId: "12110034"
                },
                "dcom-serp-bottom-lb-728x90@728x90": {
                    placementId: "12110035"
                },
                "dcom-serp-bottom-lb-728x90@970x250": {
                    placementId: "13946230"
                },
                "dcom-serp-bottom-lb-728x90@970x90": {
                    placementId: "13946234"
                },
                "dcom-serp-lb-728x90@728x90": {
                    placementId: "12110032"
                },
                "dcom-serp-lb-728x90@970x250": {
                    placementId: "12110032"
                },
                "dcom-serp-lb-728x90@970x90": {
                    placementId: "12110032"
                },
                "dcomHomeBot-728x90@728x90": {
                    placementId: "12110035"
                },
                "dcomHomeTop-300x250@300x250": {
                    placementId: "12110031"
                },
                "dcomHomeTop-728x90@728x90": {
                    placementId: "12110032"
                },
                "dcomHomeTop-728x90@970x90": {
                    placementId: "12110032"
                },
                "dcomMobileHPBotAd-300x250@300x250": {
                    placementId: "12110042"
                },
                "dcomMobileHPTopAd-320x50@320x50": {
                    placementId: "12110037"
                },
                "dcomMobileMisspellBottomAd-300x250@300x250": {
                    placementId: "12110042"
                },
                "dcomMobileMisspellTop-320x50@320x50": {
                    placementId: "12110037"
                },
                "dcomMobileSERPDisplayBotAd-300x250@300x250": {
                    placementId: "12110042"
                },
                "dcomMobileSERPDisplayMidAd-300x250@300x250": {
                    placementId: "12110041"
                },
                "dcomMobileSERPDisplayTopAd-300x250@300x250": {
                    placementId: "12110036"
                },
                "dcomMobileSERPTopAd-320x50@320x50": {
                    placementId: "12110037"
                },
                "dcom_serp_dkt_atf_728x90_3@728x90": {
                    placementId: "13946235"
                },
                "dmwHomeThesBottom@300x250": {
                    placementId: "12110026"
                },
                "dmwHomeThesTop@320x50": {
                    placementId: "12110029"
                },
                "dmwMisspellThesBottom@300x250": {
                    placementId: "12110026"
                },
                "dmwMisspellThesTop@320x50": {
                    placementId: "12110029"
                },
                "dmwSerpThesBottom@300x250": {
                    placementId: "12110026"
                },
                "dmwSerpThesTop@320x50": {
                    placementId: "12110029"
                },
                "tcomHomeBot-728x90@728x90": {
                    placementId: "11892097"
                },
                "tcomHomeTop-300x250@300x250": {
                    placementId: "11892095"
                },
                "tcomHomeTop-728x90@728x90": {
                    placementId: "11892081"
                },
                "tcomHomeTop-728x90@970x90": {
                    placementId: "11892081"
                },
                "tcom_serp_dkt_atf_728x90_3@728x90": {
                    placementId: "13946260"
                },
                "tcom_serp_dkt_btf_300x600_4@300x600": {
                    placementId: "13946246"
                },
                "tcom_serp_dkt_btf_970x250_5@970x250": {
                    placementId: "13946251"
                },
                "tcom_serp_dkt_btf_970x90_5@970x90": {
                    placementId: "13946256"
                },
                "tcom_serp_mweb_atf_300x250_2@300x250": {
                    placementId: "13892967"
                },
                "tcom_serp_mweb_atf_320x50_1@320x50": {
                    placementId: "12110029"
                },
                "tcom_serp_mweb_btf_300x250_4@300x250": {
                    placementId: "12110026"
                },
                "tcom_serp_mweb_mid_300x250_3@300x250": {
                    placementId: "13892971"
                },
                "thesaurus_serp_300x250_p5@300x250": {
                    placementId: "12110025"
                },
                "thesaurus_serp_300x250_p5@300x600": {
                    placementId: "12110025"
                },
                "thesaurus_serp_300x250_p6@300x250": {
                    placementId: "12110025"
                },
                "thesaurus_serp_728x90_p5@728x90": {
                    placementId: "14204414"
                },
                "thesaurus_serp_728x90_p6@728x90": {
                    placementId: "11892097"
                },
                "thesaurus_serp_atf_300x250@300x250": {
                    placementId: "11892095"
                },
                "thesaurus_serp_atf_300x250@300x600": {
                    placementId: "11892095"
                },
                "thesaurus_serp_atf_728x90@728x90": {
                    placementId: "11892081"
                },
                "thesaurus_serp_atf_728x90@970x250": {
                    placementId: "11892081"
                },
                "thesaurus_serp_atf_728x90@970x90": {
                    placementId: "11892081"
                },
                "thesaurus_serp_btf_2@728x90": {
                    placementId: "11892097"
                },
                "thesaurus_serp_btf_2@970x250": {
                    placementId: "11892097"
                },
                "thesaurus_serp_btf_2@970x90": {
                    placementId: "11892097"
                },
                "thesaurus_serp_btf_300x252@300x250": {
                    placementId: "12110025"
                },
                "thesaurus_serp_btf_300x252@300x600": {
                    placementId: "12110025"
                }
            }
        },
        pubmatic: {
            publisherId: "103207",
            rev_share: "-24.5",
            timeout: "1200",
            throttle: "100",
            pt: 0,
            serverSideEnabled: "0",
            amp: 0,
            video: 0,
            kgp: "_DIV_@_W_x_H_",
            sk: "true"
        },
        districtm: {
            rev_share: "-35.0",
            timeout: "1200",
            throttle: "100",
            serverSideEnabled: "0",
            amp: 0,
            video: 0,
            kgp: "_DIV_@_W_x_H_",
            klm: {
                "dcom-misspell-bottom-lb-728x90@728x90": {
                    placementId: "11907080"
                },
                "dcom-misspell-lb-728x90@728x90": {
                    placementId: "12109542"
                },
                "dcom-misspell-mid-300x250@300x250": {
                    placementId: "11907078"
                },
                "dcom-misspell-top-300x250@300x250": {
                    placementId: "12109541"
                },
                "dcom-no-result-lb-728x90@728x90": {
                    placementId: "12109542"
                },
                "dcom-no-result-mid-300x250@300x250": {
                    placementId: "11907078"
                },
                "dcom-no-result-top-300x250@300x250": {
                    placementId: "12109541"
                },
                "dcom-serp-a-mid-300x250@300x250": {
                    placementId: "11907078"
                },
                "dcom-serp-a-mid-300x250@300x600": {
                    placementId: "13946864"
                },
                "dcom-serp-a-top-300x250@300x250": {
                    placementId: "12109541"
                },
                "dcom-serp-a-top-300x250@300x600": {
                    placementId: "12109541"
                },
                "dcom-serp-bot-300x250@300x250": {
                    placementId: "11907079"
                },
                "dcom-serp-bottom-lb-728x90@728x90": {
                    placementId: "11907080"
                },
                "dcom-serp-bottom-lb-728x90@970x250": {
                    placementId: "13946875"
                },
                "dcom-serp-bottom-lb-728x90@970x90": {
                    placementId: "13946873"
                },
                "dcom-serp-lb-728x90@728x90": {
                    placementId: "12109542"
                },
                "dcom-serp-lb-728x90@970x250": {
                    placementId: "12109542"
                },
                "dcom-serp-lb-728x90@970x90": {
                    placementId: "12109542"
                },
                "dcomHomeBot-728x90@728x90": {
                    placementId: "11907080"
                },
                "dcomHomeTop-300x250@300x250": {
                    placementId: "12109541"
                },
                "dcomHomeTop-728x90@728x90": {
                    placementId: "12109542"
                },
                "dcomHomeTop-728x90@970x90": {
                    placementId: "12109542"
                },
                "dcomMobileHPBotAd-300x250@300x250": {
                    placementId: "11907084"
                },
                "dcomMobileHPTopAd-320x50@320x50": {
                    placementId: "11907082"
                },
                "dcomMobileMisspellBottomAd-300x250@300x250": {
                    placementId: "11907084"
                },
                "dcomMobileMisspellTop-320x50@320x50": {
                    placementId: "11907082"
                },
                "dcomMobileSERPDisplayBotAd-300x250@300x250": {
                    placementId: "11907084"
                },
                "dcomMobileSERPDisplayMidAd-300x250@300x250": {
                    placementId: "11907083"
                },
                "dcomMobileSERPDisplayTopAd-300x250@300x250": {
                    placementId: "11907081"
                },
                "dcomMobileSERPTopAd-320x50@320x50": {
                    placementId: "11907082"
                },
                "dcom_serp_dkt_atf_728x90_3@728x90": {
                    placementId: "13946871"
                },
                "dmwHomeThesBottom@300x250": {
                    placementId: "12109540"
                },
                "dmwHomeThesTop@320x50": {
                    placementId: "11907074"
                },
                "dmwMisspellThesBottom@300x250": {
                    placementId: "12109540"
                },
                "dmwMisspellThesTop@320x50": {
                    placementId: "11907074"
                },
                "dmwSerpThesBottom@300x250": {
                    placementId: "12109540"
                },
                "dmwSerpThesTop@320x50": {
                    placementId: "11907074"
                },
                "tcomHomeBot-728x90@728x90": {
                    placementId: "11907073"
                },
                "tcomHomeTop-300x250@300x250": {
                    placementId: "11907069"
                },
                "tcomHomeTop-728x90@728x90": {
                    placementId: "11907070"
                },
                "tcomHomeTop-728x90@970x90": {
                    placementId: "11907070"
                },
                "tcom_serp_dkt_atf_728x90_3@728x90": {
                    placementId: "13946894"
                },
                "tcom_serp_dkt_btf_300x600_4@300x600": {
                    placementId: "13946886"
                },
                "tcom_serp_dkt_btf_970x250_5@970x250": {
                    placementId: "13946889"
                },
                "tcom_serp_dkt_btf_970x90_5@970x90": {
                    placementId: "13946892"
                },
                "tcom_serp_mweb_atf_300x250_2@300x250": {
                    placementId: "12109540"
                },
                "tcom_serp_mweb_atf_320x50_1@320x50": {
                    placementId: "11907074"
                },
                "tcom_serp_mweb_btf_300x250_4@300x250": {
                    placementId: "12109540"
                },
                "tcom_serp_mweb_mid_300x250_3@300x250": {
                    placementId: "13893587"
                },
                "thesaurus_serp_300x250_p5@300x250": {
                    placementId: "11907071"
                },
                "thesaurus_serp_300x250_p5@300x600": {
                    placementId: "11907071"
                },
                "thesaurus_serp_300x250_p6@300x250": {
                    placementId: "11907071"
                },
                "thesaurus_serp_728x90_p5@728x90": {
                    placementId: "14201051"
                },
                "thesaurus_serp_728x90_p6@728x90": {
                    placementId: "11907073"
                },
                "thesaurus_serp_atf_300x250@300x250": {
                    placementId: "11907069"
                },
                "thesaurus_serp_atf_300x250@300x600": {
                    placementId: "11907069"
                },
                "thesaurus_serp_atf_728x90@728x90": {
                    placementId: "11907070"
                },
                "thesaurus_serp_atf_728x90@970x250": {
                    placementId: "11907070"
                },
                "thesaurus_serp_atf_728x90@970x90": {
                    placementId: "11907070"
                },
                "thesaurus_serp_btf_2@728x90": {
                    placementId: "11907073"
                },
                "thesaurus_serp_btf_2@970x250": {
                    placementId: "11907073"
                },
                "thesaurus_serp_btf_2@970x90": {
                    placementId: "11907073"
                },
                "thesaurus_serp_btf_300x252@300x250": {
                    placementId: "11907071"
                },
                "thesaurus_serp_btf_300x252@300x600": {
                    placementId: "11907071"
                }
            }
        },
        openx: {
            delDomain: "ask-d.openx.net",
            rev_share: "-50.0",
            timeout: "1200",
            throttle: "100",
            pt: 0,
            kgp: "_DIV_@_W_x_H_",
            klm: {
                "dcom-misspell-bottom-lb-728x90@728x90": {
                    unit: "539342500"
                },
                "dcom-misspell-lb-728x90@728x90": {
                    unit: "539342497"
                },
                "dcom-misspell-mid-300x250@300x250": {
                    unit: "539342498"
                },
                "dcom-misspell-top-300x250@300x250": {
                    unit: "539342496"
                },
                "dcom-no-result-lb-728x90@728x90": {
                    unit: "539342497"
                },
                "dcom-no-result-mid-300x250@300x250": {
                    unit: "539342498"
                },
                "dcom-no-result-top-300x250@300x250": {
                    unit: "539342496"
                },
                "dcom-serp-a-mid-300x250@300x250": {
                    unit: "539342498"
                },
                "dcom-serp-a-mid-300x250@300x600": {
                    unit: "540311553"
                },
                "dcom-serp-a-top-300x250@300x250": {
                    unit: "539342496"
                },
                "dcom-serp-a-top-300x250@300x600": {
                    unit: "539342496"
                },
                "dcom-serp-bot-300x250@300x250": {
                    unit: "539342499"
                },
                "dcom-serp-bottom-lb-728x90@728x90": {
                    unit: "539342500"
                },
                "dcom-serp-bottom-lb-728x90@970x250": {
                    unit: "540311554"
                },
                "dcom-serp-bottom-lb-728x90@970x90": {
                    unit: "540311555"
                },
                "dcom-serp-lb-728x90@728x90": {
                    unit: "539342497"
                },
                "dcom-serp-lb-728x90@970x250": {
                    unit: "539342497"
                },
                "dcom-serp-lb-728x90@970x90": {
                    unit: "539342497"
                },
                "dcomHomeBot-728x90@728x90": {
                    unit: "539342500"
                },
                "dcomHomeTop-300x250@300x250": {
                    unit: "539342496"
                },
                "dcomHomeTop-728x90@728x90": {
                    unit: "539342497"
                },
                "dcomHomeTop-728x90@970x90": {
                    unit: "539342497"
                },
                "dcomMobileHPBotAd-300x250@300x250": {
                    unit: "539342504"
                },
                "dcomMobileHPTopAd-320x50@320x50": {
                    unit: "539342502"
                },
                "dcomMobileMisspellBottomAd-300x250@300x250": {
                    unit: "539342504"
                },
                "dcomMobileMisspellTop-320x50@320x50": {
                    unit: "539342502"
                },
                "dcomMobileSERPDisplayBotAd-300x250@300x250": {
                    unit: "539342504"
                },
                "dcomMobileSERPDisplayMidAd-300x250@300x250": {
                    unit: "539342503"
                },
                "dcomMobileSERPDisplayTopAd-300x250@300x250": {
                    unit: "539342501"
                },
                "dcomMobileSERPTopAd-320x50@320x50": {
                    unit: "539342502"
                },
                "dcom_serp_dkt_atf_728x90_3@728x90": {
                    unit: "540311557"
                },
                "dmwHomeThesBottom@300x250": {
                    unit: "539342494"
                },
                "dmwHomeThesTop@320x50": {
                    unit: "539342495"
                },
                "dmwMisspellThesBottom@300x250": {
                    unit: "539342494"
                },
                "dmwMisspellThesTop@320x50": {
                    unit: "539342495"
                },
                "dmwSerpThesBottom@300x250": {
                    unit: "539342494"
                },
                "dmwSerpThesTop@320x50": {
                    unit: "539342495"
                },
                "tcomHomeBot-728x90@728x90": {
                    unit: "539342492"
                },
                "tcomHomeTop-300x250@300x250": {
                    unit: "539342491"
                },
                "tcomHomeTop-728x90@728x90": {
                    unit: "539342490"
                },
                "tcomHomeTop-728x90@970x90": {
                    unit: "539342490"
                },
                "tcom_serp_dkt_atf_728x90_3@728x90": {
                    unit: "540311578"
                },
                "tcom_serp_dkt_btf_300x600_4@300x600": {
                    unit: "540311575"
                },
                "tcom_serp_dkt_btf_970x250_5@970x250": {
                    unit: "540311576"
                },
                "tcom_serp_dkt_btf_970x90_5@970x90": {
                    unit: "540311577"
                },
                "tcom_serp_mweb_atf_300x250_2@300x250": {
                    unit: "540290583"
                },
                "tcom_serp_mweb_atf_320x50_1@320x50": {
                    unit: "539342495"
                },
                "tcom_serp_mweb_btf_300x250_4@300x250": {
                    unit: "539342494"
                },
                "tcom_serp_mweb_mid_300x250_3@300x250": {
                    unit: "540290585"
                },
                "thesaurus_serp_300x250_p5@300x250": {
                    unit: "539342493"
                },
                "thesaurus_serp_300x250_p5@300x600": {
                    unit: "539342493"
                },
                "thesaurus_serp_300x250_p6@300x250": {
                    unit: "539342493"
                },
                "thesaurus_serp_728x90_p5@728x90": {
                    unit: "540398742"
                },
                "thesaurus_serp_728x90_p6@728x90": {
                    unit: "539342492"
                },
                "thesaurus_serp_atf_300x250@300x250": {
                    unit: "539342491"
                },
                "thesaurus_serp_atf_300x250@300x600": {
                    unit: "539342491"
                },
                "thesaurus_serp_atf_728x90@728x90": {
                    unit: "539342490"
                },
                "thesaurus_serp_atf_728x90@970x250": {
                    unit: "539342490"
                },
                "thesaurus_serp_atf_728x90@970x90": {
                    unit: "539342490"
                },
                "thesaurus_serp_btf_2@728x90": {
                    unit: "539342492"
                },
                "thesaurus_serp_btf_2@970x250": {
                    unit: "539342492"
                },
                "thesaurus_serp_btf_2@970x90": {
                    unit: "539342492"
                },
                "thesaurus_serp_btf_300x252@300x250": {
                    unit: "539342493"
                },
                "thesaurus_serp_btf_300x252@300x600": {
                    unit: "539342493"
                }
            }
        },
        aol: {
            network: "9547.1",
            server: "adserver.adtech.advertising.com",
            rev_share: "-32.0",
            timeout: "1200",
            throttle: "100",
            kgp: "_DIV_@_W_x_H_",
            klm: {
                "dcom-misspell-bottom-lb-728x90@728x90": {
                    sizeId: "225",
                    alias: "iac.dict.dictry.dw-728x90-btf-pow",
                    placement: "4677686",
                    bidFloor: "0.6",
                    pageId: "819396"
                },
                "dcom-misspell-lb-728x90@728x90": {
                    sizeId: "225",
                    alias: "iac.dict.dictry.dw-728x90-atf-pow",
                    placement: "4677690",
                    bidFloor: "0.6",
                    pageId: "819396"
                },
                "dcom-misspell-mid-300x250@300x250": {
                    sizeId: "170",
                    alias: "iac.dict.dictry.dw-300x250-mid-pow",
                    placement: "4677689",
                    bidFloor: "0.6",
                    pageId: "819396"
                },
                "dcom-misspell-top-300x250@300x250": {
                    sizeId: "170",
                    alias: "iac.dict.dictry.dw-300x250-atf-pow",
                    placement: "4677688",
                    bidFloor: "0.6",
                    pageId: "819396"
                },
                "dcom-no-result-lb-728x90@728x90": {
                    sizeId: "225",
                    alias: "iac.dict.dictry.dw-728x90-atf-pow",
                    placement: "4677690",
                    bidFloor: "0.6",
                    pageId: "819396"
                },
                "dcom-no-result-mid-300x250@300x250": {
                    sizeId: "170",
                    alias: "iac.dict.dictry.dw-300x250-mid-pow",
                    placement: "4677689",
                    bidFloor: "0.6",
                    pageId: "819396"
                },
                "dcom-no-result-top-300x250@300x250": {
                    sizeId: "170",
                    alias: "iac.dict.dictry.dw-300x250-atf-pow",
                    placement: "4677688",
                    bidFloor: "0.6",
                    pageId: "819396"
                },
                "dcom-serp-a-mid-300x250@300x250": {
                    sizeId: "170",
                    alias: "iac.dict.dictry.dw-300x250-mid-pow",
                    placement: "4677689",
                    bidFloor: "0.6",
                    pageId: "819396"
                },
                "dcom-serp-a-mid-300x250@300x600": {
                    sizeId: "529",
                    alias: "dcom_serp_dkt_btf_300x600_4",
                    placement: "4944595",
                    bidFloor: "0.6",
                    pageId: "819396"
                },
                "dcom-serp-a-top-300x250@300x250": {
                    sizeId: "170",
                    alias: "iac.dict.dictry.dw-300x250-atf-pow",
                    placement: "4677688",
                    bidFloor: "0.6",
                    pageId: "819396"
                },
                "dcom-serp-a-top-300x250@300x600": {
                    sizeId: "529",
                    alias: "iac.dict.dictry.dw-300x600-atf-pow",
                    placement: "4696360",
                    bidFloor: "0.6",
                    pageId: "819396"
                },
                "dcom-serp-bot-300x250@300x250": {
                    sizeId: "170",
                    alias: "iac.dict.dictry.dw-300x2500-btf-pow",
                    placement: "4677687",
                    bidFloor: "0.6",
                    pageId: "819396"
                },
                "dcom-serp-bottom-lb-728x90@728x90": {
                    sizeId: "225",
                    alias: "iac.dict.dictry.dw-728x90-btf-pow",
                    placement: "4677686",
                    bidFloor: "0.6",
                    pageId: "819396"
                },
                "dcom-serp-bottom-lb-728x90@970x250": {
                    sizeId: "2466",
                    alias: "dcom_serp_dkt_btf_970x250_5",
                    placement: "4944596",
                    bidFloor: "0.6",
                    pageId: "819396"
                },
                "dcom-serp-bottom-lb-728x90@970x90": {
                    sizeId: "2473",
                    alias: "dcom_serp_dkt_btf_970x90_5",
                    placement: "4944597",
                    bidFloor: "0.6",
                    pageId: "819396"
                },
                "dcom-serp-lb-728x90@728x90": {
                    sizeId: "225",
                    alias: "iac.dict.dictry.dw-728x90-atf-pow",
                    placement: "4677690",
                    bidFloor: "0.6",
                    pageId: "819396"
                },
                "dcom-serp-lb-728x90@970x250": {
                    sizeId: "2466",
                    alias: "iac.dict.dictry.dw-970x250-atf-pow",
                    placement: "4696358",
                    bidFloor: "0.6",
                    pageId: "819396"
                },
                "dcom-serp-lb-728x90@970x90": {
                    sizeId: "2473",
                    alias: "iac.dict.dictry.dw-970x90-atf-pow",
                    placement: "4696357",
                    bidFloor: "0.6",
                    pageId: "819396"
                },
                "dcomHomeBot-728x90@728x90": {
                    sizeId: "225",
                    alias: "iac.dict.dictry.dw-728x90-btf-pow",
                    placement: "4677686",
                    bidFloor: "0.6",
                    pageId: "819396"
                },
                "dcomHomeTop-300x250@300x250": {
                    sizeId: "170",
                    alias: "iac.dict.dictry.dw-300x250-atf-pow",
                    placement: "4677688",
                    bidFloor: "0.6",
                    pageId: "819396"
                },
                "dcomHomeTop-728x90@728x90": {
                    sizeId: "225",
                    alias: "iac.dict.dictry.dw-728x90-atf-pow",
                    placement: "4677690",
                    bidFloor: "0.6",
                    pageId: "819396"
                },
                "dcomHomeTop-728x90@970x90": {
                    sizeId: "2473",
                    alias: "iac.dict.dictry.dw-970x90-atf-pow",
                    placement: "4696357",
                    bidFloor: "0.6",
                    pageId: "819396"
                },
                "dcomMobileHPBotAd-300x250@300x250": {
                    sizeId: "170",
                    alias: "iac.dict.dictry.mw-320x50-atf-pow",
                    placement: "4677723",
                    bidFloor: "0.6",
                    pageId: "819399"
                },
                "dcomMobileHPTopAd-320x50@320x50": {
                    sizeId: "3055",
                    alias: "iac.dict.dictry.mw-320x50-atf-pow",
                    placement: "4677724",
                    bidFloor: "0.6",
                    pageId: "819399"
                },
                "dcomMobileMisspellBottomAd-300x250@300x250": {
                    sizeId: "170",
                    alias: "iac.dict.dictry.mw-300x250-btf-pow",
                    placement: "4677723",
                    bidFloor: "0.6",
                    pageId: "819399"
                },
                "dcomMobileMisspellTop-320x50@320x50": {
                    sizeId: "3055",
                    alias: "iac.dict.dictry.mw-320x50-atf-pow",
                    placement: "4677724",
                    bidFloor: "0.6",
                    pageId: "819399"
                },
                "dcomMobileSERPDisplayBotAd-300x250@300x250": {
                    sizeId: "170",
                    alias: "iac.dict.dictry.mw-300x250-btf-pow",
                    placement: "4677723",
                    bidFloor: "0.6",
                    pageId: "819399"
                },
                "dcomMobileSERPDisplayMidAd-300x250@300x250": {
                    sizeId: "170",
                    alias: "iac.dict.dictry.mw-300x250-mid-pow",
                    placement: "4677725",
                    bidFloor: "0.6",
                    pageId: "819399"
                },
                "dcomMobileSERPDisplayTopAd-300x250@300x250": {
                    sizeId: "170",
                    alias: "iac.dict.dictry.mw-300x250-atf-pow",
                    placement: "4677726",
                    bidFloor: "0.6",
                    pageId: "819399"
                },
                "dcomMobileSERPTopAd-320x50@320x50": {
                    sizeId: "3055",
                    alias: "iac.dict.dictry.mw-320x50-atf-pow",
                    placement: "4677724",
                    bidFloor: "0.6",
                    pageId: "819399"
                },
                "dcom_serp_dkt_atf_728x90_3@728x90": {
                    sizeId: "225",
                    alias: "dcom_serp_dkt_atf_728x90_3",
                    placement: "4944598",
                    bidFloor: "0.6",
                    pageId: "819396"
                },
                "dmwHomeThesBottom@300x250": {
                    sizeId: "170",
                    alias: "iac.dict.thesrs.mw-300x250-bottest",
                    placement: "4619813",
                    bidFloor: "0.6",
                    pageId: "819388"
                },
                "dmwHomeThesTop@320x50": {
                    sizeId: "3055",
                    alias: "iac.dict.thesrs.mw-320x50-toptest",
                    placement: "4619814",
                    bidFloor: "0.6",
                    pageId: "819388"
                },
                "dmwMisspellThesBottom@300x250": {
                    sizeId: "170",
                    alias: "iac.dict.thesrs.mw-300x250-bottest",
                    placement: "4619813",
                    bidFloor: "0.6",
                    pageId: "819388"
                },
                "dmwMisspellThesTop@320x50": {
                    sizeId: "3055",
                    alias: "iac.dict.thesrs.mw-320x50-toptest",
                    placement: "4619814",
                    bidFloor: "0.6",
                    pageId: "819388"
                },
                "dmwSerpThesBottom@300x250": {
                    sizeId: "170",
                    alias: "iac.dict.thesrs.mw-300x250-bottest",
                    placement: "4619813",
                    bidFloor: "0.6",
                    pageId: "819388"
                },
                "dmwSerpThesTop@320x50": {
                    sizeId: "3055",
                    alias: "iac.dict.thesrs.mw-320x50-toptest",
                    placement: "4619814",
                    bidFloor: "0.6",
                    pageId: "819388"
                },
                "tcomHomeBot-728x90@728x90": {
                    sizeId: "225",
                    alias: "iac.dict.thesrs.dw-728x90-bottest",
                    placement: "4618966",
                    bidFloor: "0.6",
                    pageId: "819382"
                },
                "tcomHomeTop-300x250@300x250": {
                    sizeId: "170",
                    alias: "iac.dict.thesrs.dw-300x250-toptest",
                    placement: "4618968",
                    bidFloor: "0.6",
                    pageId: "819382"
                },
                "tcomHomeTop-728x90@728x90": {
                    sizeId: "225",
                    alias: "iac.dict.thesrs.dw-728x90-toptest",
                    placement: "4618967",
                    bidFloor: "0.6",
                    pageId: "819382"
                },
                "tcomHomeTop-728x90@970x90": {
                    sizeId: "2473",
                    alias: "iac.dict.thesrs.dw-970x90-toptest",
                    placement: "4618965",
                    bidFloor: "0.6",
                    pageId: "819382"
                },
                "tcom_serp_dkt_atf_728x90_3@728x90": {
                    sizeId: "225",
                    alias: "tcom_serp_dkt_atf_728x90_3",
                    placement: "4944606",
                    bidFloor: "0.6",
                    pageId: "819382"
                },
                "tcom_serp_mweb_atf_300x250_2@300x250": {
                    sizeId: "170",
                    alias: "tcom_serp_mweb_atf_300x250_2",
                    placement: "4944600",
                    bidFloor: "0.6",
                    pageId: "819388"
                },
                "tcom_serp_mweb_atf_320x50_1@320x50": {
                    sizeId: "3055",
                    alias: "tcom_serp_mweb_atf_320x50_1",
                    placement: "4944599",
                    bidFloor: "0.6",
                    pageId: "819388"
                },
                "tcom_serp_mweb_btf_300x250_4@300x250": {
                    sizeId: "170",
                    alias: "tcom_serp_mweb_btf_300x250_4",
                    placement: "4944602",
                    bidFloor: "0.6",
                    pageId: "819388"
                },
                "tcom_serp_mweb_mid_300x250_3@300x250": {
                    sizeId: "170",
                    alias: "tcom_serp_mweb_mid_300x250_3",
                    placement: "4944601",
                    bidFloor: "0.6",
                    pageId: "819388"
                },
                "thesaurus_serp_300x250_p5@300x250": {
                    sizeId: "170",
                    alias: "iac.dict.thesrs.dw-300x250-mid-pow",
                    placement: "4677683",
                    bidFloor: "0.6",
                    pageId: "819382"
                },
                "thesaurus_serp_300x250_p5@300x600": {
                    sizeId: "529",
                    alias: "iac.dict.thesrs.dw-300x250-mid-pow",
                    placement: "4677683",
                    bidFloor: "0.6",
                    pageId: "819382"
                },
                "thesaurus_serp_300x250_p6@300x250": {
                    sizeId: "170",
                    alias: "iac.dict.thesrs.dw-300x250-mid-pow",
                    placement: "4677683",
                    bidFloor: "0.6",
                    pageId: "819382"
                },
                "thesaurus_serp_728x90_p5@728x90": {
                    sizeId: "225",
                    alias: "iac.dict.thesrs.dw-728x90-bottest-2",
                    placement: "4983921",
                    bidFloor: "0.6",
                    pageId: "819382"
                },
                "thesaurus_serp_728x90_p6@728x90": {
                    sizeId: "225",
                    alias: "iac.dict.thesrs.dw-728x90-bottest",
                    placement: "4618966",
                    bidFloor: "0.6",
                    pageId: "819382"
                },
                "thesaurus_serp_atf_300x250@300x250": {
                    sizeId: "170",
                    alias: "iac.dict.thesrs.dw-300x250-toptest",
                    placement: "4618968",
                    bidFloor: "0.6",
                    pageId: "819382"
                },
                "thesaurus_serp_atf_300x250@300x600": {
                    sizeId: "529",
                    alias: "iac.dict.thesrs.dw-300x600-atf-pow",
                    placement: "4696361",
                    bidFloor: "0.6",
                    pageId: "819382"
                },
                "thesaurus_serp_atf_728x90@728x90": {
                    sizeId: "225",
                    alias: "iac.dict.thesrs.dw-728x90-toptest",
                    placement: "4618967",
                    bidFloor: "0.6",
                    pageId: "819382"
                },
                "thesaurus_serp_atf_728x90@970x250": {
                    sizeId: "2466",
                    alias: "iac.dict.thesrs.dw-970x250-atf-pow",
                    placement: "4696359",
                    bidFloor: "0.6",
                    pageId: "819382"
                },
                "thesaurus_serp_atf_728x90@970x90": {
                    sizeId: "2473",
                    alias: "iac.dict.thesrs.dw-970x90-toptest",
                    placement: "4618965",
                    bidFloor: "0.6",
                    pageId: "819382"
                },
                "thesaurus_serp_btf_2@728x90": {
                    sizeId: "225",
                    alias: "iac.dict.thesrs.dw-728x90-bottest",
                    placement: "4618966",
                    bidFloor: "0.6",
                    pageId: "819382"
                },
                "thesaurus_serp_btf_2@970x250": {
                    sizeId: "2466",
                    alias: "tcom_serp_dkt_btf_970x250_5",
                    placement: "4944604",
                    bidFloor: "0.6",
                    pageId: "819382"
                },
                "thesaurus_serp_btf_2@970x90": {
                    sizeId: "2473",
                    alias: "tcom_serp_dkt_btf_970x90_5",
                    placement: "4944605",
                    bidFloor: "0.6",
                    pageId: "819382"
                },
                "thesaurus_serp_btf_300x252@300x250": {
                    sizeId: "170",
                    alias: "iac.dict.thesrs.dw-300x250-mid-pow",
                    placement: "4677683",
                    bidFloor: "0.6",
                    pageId: "819382"
                },
                "thesaurus_serp_btf_300x252@300x600": {
                    sizeId: "529",
                    alias: "tcom_serp_dkt_btf_300x600_4",
                    placement: "4944603",
                    bidFloor: "0.6",
                    pageId: "819382"
                }
            }
        },
        rubicon: {
            accountId: "10952",
            rev_share: "-50.0",
            timeout: "1200",
            throttle: "100",
            pt: "0",
            serverSideEnabled: "0",
            amp: 0,
            video: 0,
            kgp: "_DIV_@_W_x_H_",
            klm: {
                "dcom-misspell-bottom-lb-728x90@728x90": {
                    zoneId: "167538",
                    siteId: "37926",
                    position: "BTF",
                    floor: "0.6"
                },
                "dcom-misspell-lb-728x90@728x90": {
                    zoneId: "158746",
                    siteId: "37926",
                    position: "ATF",
                    floor: "0.6"
                },
                "dcom-misspell-mid-300x250@300x250": {
                    zoneId: "167536",
                    siteId: "37926",
                    position: "MID",
                    floor: "0.6"
                },
                "dcom-misspell-top-300x250@300x250": {
                    zoneId: "158746",
                    siteId: "37926",
                    position: "ATF",
                    floor: "0.6"
                },
                "dcom-no-result-lb-728x90@728x90": {
                    zoneId: "158746",
                    siteId: "37926",
                    position: "ATF",
                    floor: "0.6"
                },
                "dcom-no-result-mid-300x250@300x250": {
                    zoneId: "167536",
                    siteId: "37926",
                    position: "MID",
                    floor: "0.6"
                },
                "dcom-no-result-top-300x250@300x250": {
                    zoneId: "158746",
                    siteId: "37926",
                    position: "ATF",
                    floor: "0.6"
                },
                "dcom-serp-a-mid-300x250@300x250": {
                    zoneId: "167536",
                    siteId: "37926",
                    position: "MID",
                    floor: "0.6"
                },
                "dcom-serp-a-mid-300x250@300x600": {
                    zoneId: "167536",
                    siteId: "37926",
                    position: "MID",
                    floor: "0.6"
                },
                "dcom-serp-a-top-300x250@300x250": {
                    zoneId: "158746",
                    siteId: "37926",
                    position: "ATF",
                    floor: "0.6"
                },
                "dcom-serp-a-top-300x250@300x600": {
                    zoneId: "158746",
                    siteId: "37926",
                    position: "ATF",
                    floor: "0.6"
                },
                "dcom-serp-bot-300x250@300x250": {
                    zoneId: "167538",
                    siteId: "37926",
                    position: "BTF",
                    floor: "0.6"
                },
                "dcom-serp-bottom-lb-728x90@728x90": {
                    zoneId: "167538",
                    siteId: "37926",
                    position: "BTF",
                    floor: "0.6"
                },
                "dcom-serp-bottom-lb-728x90@970x250": {
                    zoneId: "167538",
                    siteId: "37926",
                    position: "BTF",
                    floor: "0.6"
                },
                "dcom-serp-bottom-lb-728x90@970x90": {
                    zoneId: "167538",
                    siteId: "37926",
                    position: "BTF",
                    floor: "0.6"
                },
                "dcom-serp-lb-728x90@728x90": {
                    zoneId: "158746",
                    siteId: "37926",
                    position: "ATF",
                    floor: "0.6"
                },
                "dcom-serp-lb-728x90@970x250": {
                    zoneId: "158746",
                    siteId: "37926",
                    position: "ATF",
                    floor: "0.6"
                },
                "dcom-serp-lb-728x90@970x90": {
                    zoneId: "158746",
                    siteId: "37926",
                    position: "ATF",
                    floor: "0.6"
                },
                "dcomHomeBot-728x90@728x90": {
                    zoneId: "167538",
                    siteId: "37926",
                    position: "BTF",
                    floor: "0.6"
                },
                "dcomHomeTop-300x250@300x250": {
                    zoneId: "158746",
                    siteId: "37926",
                    position: "ATF",
                    floor: "0.6"
                },
                "dcomHomeTop-728x90@728x90": {
                    zoneId: "158746",
                    siteId: "37926",
                    position: "ATF",
                    floor: "0.6"
                },
                "dcomHomeTop-728x90@970x90": {
                    zoneId: "158746",
                    siteId: "37926",
                    position: "ATF",
                    floor: "0.6"
                },
                "dcomMobileHPBotAd-300x250@300x250": {
                    zoneId: "167550",
                    siteId: "40358",
                    position: "BTF",
                    floor: "0.6"
                },
                "dcomMobileHPTopAd-320x50@320x50": {
                    zoneId: "167548",
                    siteId: "40358",
                    position: "ATF",
                    floor: "0.6"
                },
                "dcomMobileMisspellBottomAd-300x250@300x250": {
                    zoneId: "167550",
                    siteId: "40358",
                    position: "BTF",
                    floor: "0.6"
                },
                "dcomMobileMisspellTop-320x50@320x50": {
                    zoneId: "167548",
                    siteId: "40358",
                    position: "ATF",
                    floor: "0.6"
                },
                "dcomMobileSERPDisplayBotAd-300x250@300x250": {
                    zoneId: "167550",
                    siteId: "40358",
                    position: "BTF",
                    floor: "0.6"
                },
                "dcomMobileSERPDisplayMidAd-300x250@300x250": {
                    zoneId: "756176",
                    siteId: "40358",
                    position: "MID",
                    floor: "0.6"
                },
                "dcomMobileSERPDisplayTopAd-300x250@300x250": {
                    zoneId: "167548",
                    siteId: "40358",
                    position: "ATF",
                    floor: "0.6"
                },
                "dcomMobileSERPTopAd-320x50@320x50": {
                    zoneId: "167548",
                    siteId: "40358",
                    position: "ATF",
                    floor: "0.6"
                },
                "dcom_serp_dkt_atf_728x90_3@728x90": {
                    zoneId: "158746",
                    siteId: "37926",
                    position: "ATF",
                    floor: "0.6"
                },
                "dmwHomeThesBottom@300x250": {
                    zoneId: "250988",
                    siteId: "54244",
                    position: "BTF",
                    floor: "0.6"
                },
                "dmwHomeThesTop@320x50": {
                    zoneId: "250986",
                    siteId: "54244",
                    position: "ATF",
                    floor: "0.6"
                },
                "dmwMisspellThesBottom@300x250": {
                    zoneId: "250988",
                    siteId: "54244",
                    position: "BTF",
                    floor: "0.6"
                },
                "dmwMisspellThesTop@320x50": {
                    zoneId: "250986",
                    siteId: "54244",
                    position: "ATF",
                    floor: "0.6"
                },
                "dmwSerpThesBottom@300x250": {
                    zoneId: "250988",
                    siteId: "54244",
                    position: "BTF",
                    floor: "0.6"
                },
                "dmwSerpThesTop@320x50": {
                    zoneId: "250986",
                    siteId: "54244",
                    position: "ATF",
                    floor: "0.6"
                },
                "tcomHomeBot-728x90@728x90": {
                    zoneId: "342618",
                    siteId: "41374",
                    position: "BTF",
                    floor: "0.6"
                },
                "tcomHomeTop-300x250@300x250": {
                    zoneId: "173412",
                    siteId: "41374",
                    position: "ATF",
                    floor: "0.6"
                },
                "tcomHomeTop-728x90@728x90": {
                    zoneId: "173412",
                    siteId: "41374",
                    position: "ATF",
                    floor: "0.6"
                },
                "tcomHomeTop-728x90@970x90": {
                    zoneId: "173412",
                    siteId: "41374",
                    position: "ATF",
                    floor: "0.6"
                },
                "tcom_serp_dkt_atf_728x90_3@728x90": {
                    zoneId: "342618",
                    siteId: "41374",
                    position: "ATF",
                    floor: "0.6"
                },
                "tcom_serp_dkt_btf_300x600_4@300x600": {
                    zoneId: "342616",
                    siteId: "41374",
                    position: "BTF",
                    floor: "0.6"
                },
                "tcom_serp_dkt_btf_970x250_5@970x250": {
                    zoneId: "342618",
                    siteId: "41374",
                    position: "BTF",
                    floor: "0.6"
                },
                "tcom_serp_dkt_btf_970x90_5@970x90": {
                    zoneId: "342618",
                    siteId: "41374",
                    position: "BTF",
                    floor: "0.6"
                },
                "tcom_serp_mweb_atf_300x250_2@300x250": {
                    zoneId: "250986",
                    siteId: "54244",
                    position: "ATF",
                    floor: "0.6"
                },
                "tcom_serp_mweb_atf_320x50_1@320x50": {
                    zoneId: "250986",
                    siteId: "54244",
                    position: "ATF",
                    floor: "0.6"
                },
                "tcom_serp_mweb_btf_300x250_4@300x250": {
                    zoneId: "250988",
                    siteId: "54244",
                    position: "BTF",
                    floor: "0.6"
                },
                "tcom_serp_mweb_mid_300x250_3@300x250": {
                    zoneId: "250988",
                    siteId: "54244",
                    position: "BTF",
                    floor: "0.6"
                },
                "thesaurus_serp_300x250_p5@300x250": {
                    zoneId: "342616",
                    siteId: "41374",
                    position: "BTF",
                    floor: "0.6"
                },
                "thesaurus_serp_300x250_p5@300x600": {
                    zoneId: "342616",
                    siteId: "41374",
                    position: "BTF",
                    floor: "0.6"
                },
                "thesaurus_serp_300x250_p6@300x250": {
                    zoneId: "342616",
                    siteId: "41374",
                    position: "BTF",
                    floor: "0.6"
                },
                "thesaurus_serp_728x90_p5@728x90": {
                    zoneId: "1083276",
                    siteId: "41374",
                    position: "BTF",
                    floor: "0.6"
                },
                "thesaurus_serp_728x90_p6@728x90": {
                    zoneId: "342618",
                    siteId: "41374",
                    position: "BTF",
                    floor: "0.6"
                },
                "thesaurus_serp_atf_300x250@300x250": {
                    zoneId: "173412",
                    siteId: "41374",
                    position: "ATF",
                    floor: "0.6"
                },
                "thesaurus_serp_atf_300x250@300x600": {
                    zoneId: "173412",
                    siteId: "41374",
                    position: "ATF",
                    floor: "0.6"
                },
                "thesaurus_serp_atf_728x90@728x90": {
                    zoneId: "173412",
                    siteId: "41374",
                    position: "ATF",
                    floor: "0.6"
                },
                "thesaurus_serp_atf_728x90@970x250": {
                    zoneId: "173412",
                    siteId: "41374",
                    position: "ATF",
                    floor: "0.6"
                },
                "thesaurus_serp_atf_728x90@970x90": {
                    zoneId: "173412",
                    siteId: "41374",
                    position: "ATF",
                    floor: "0.6"
                },
                "thesaurus_serp_btf_2@728x90": {
                    zoneId: "342618",
                    siteId: "41374",
                    position: "BTF",
                    floor: "0.6"
                },
                "thesaurus_serp_btf_2@970x250": {
                    zoneId: "342618",
                    siteId: "41374",
                    position: "BTF",
                    floor: "0.6"
                },
                "thesaurus_serp_btf_2@970x90": {
                    zoneId: "342618",
                    siteId: "41374",
                    position: "BTF",
                    floor: "0.6"
                },
                "thesaurus_serp_btf_300x252@300x250": {
                    zoneId: "342616",
                    siteId: "41374",
                    position: "BTF",
                    floor: "0.6"
                },
                "thesaurus_serp_btf_300x252@300x600": {
                    zoneId: "342616",
                    siteId: "41374",
                    position: "BTF",
                    floor: "0.6"
                }
            }
        },
        indexExchange: {
            rev_share: "-50.0",
            timeout: "1200",
            throttle: "100",
            pt: 0,
            serverSideEnabled: "0",
            kgp: "_DIV_@_W_x_H_",
            klm: {
                "dcom-misspell-bottom-lb-728x90@728x90": {
                    siteID: "220876",
                    id: "4"
                },
                "dcom-misspell-lb-728x90@728x90": {
                    siteID: "220875",
                    id: "1"
                },
                "dcom-misspell-mid-300x250@300x250": {
                    siteID: "220873",
                    id: "3"
                },
                "dcom-misspell-top-300x250@300x250": {
                    siteID: "220872",
                    id: "2"
                },
                "dcom-no-result-lb-728x90@728x90": {
                    siteID: "220875",
                    id: "1"
                },
                "dcom-no-result-mid-300x250@300x250": {
                    siteID: "220873",
                    id: "3"
                },
                "dcom-no-result-top-300x250@300x250": {
                    siteID: "220872",
                    id: "2"
                },
                "dcom-serp-a-mid-300x250@300x250": {
                    siteID: "220873",
                    id: "3"
                },
                "dcom-serp-a-mid-300x250@300x600": {
                    siteID: "299146",
                    id: "16"
                },
                "dcom-serp-a-top-300x250@300x250": {
                    siteID: "220872",
                    id: "2"
                },
                "dcom-serp-a-top-300x250@300x600": {
                    siteID: "220872",
                    id: "8"
                },
                "dcom-serp-bot-300x250@300x250": {
                    siteID: "220874",
                    id: "4"
                },
                "dcom-serp-bottom-lb-728x90@728x90": {
                    siteID: "220876",
                    id: "5"
                },
                "dcom-serp-bottom-lb-728x90@970x250": {
                    siteID: "299147",
                    id: "17"
                },
                "dcom-serp-bottom-lb-728x90@970x90": {
                    siteID: "299148",
                    id: "18"
                },
                "dcom-serp-lb-728x90@728x90": {
                    siteID: "220875",
                    id: "1"
                },
                "dcom-serp-lb-728x90@970x250": {
                    siteID: "224848",
                    id: "6"
                },
                "dcom-serp-lb-728x90@970x90": {
                    siteID: "220875",
                    id: "7"
                },
                "dcomHomeBot-728x90@728x90": {
                    siteID: "220876",
                    id: "3"
                },
                "dcomHomeTop-300x250@300x250": {
                    siteID: "220872",
                    id: "2"
                },
                "dcomHomeTop-728x90@728x90": {
                    siteID: "220875",
                    id: "1"
                },
                "dcomHomeTop-728x90@970x90": {
                    siteID: "220875",
                    id: "4"
                },
                "dcomMobileHPBotAd-300x250@300x250": {
                    siteID: "220880",
                    id: "3"
                },
                "dcomMobileHPTopAd-320x50@320x50": {
                    siteID: "220877",
                    id: "1"
                },
                "dcomMobileMisspellBottomAd-300x250@300x250": {
                    siteID: "220880",
                    id: "3"
                },
                "dcomMobileMisspellTop-320x50@320x50": {
                    siteID: "220877",
                    id: "1"
                },
                "dcomMobileSERPDisplayBotAd-300x250@300x250": {
                    siteID: "220880",
                    id: "4"
                },
                "dcomMobileSERPDisplayMidAd-300x250@300x250": {
                    siteID: "220879",
                    id: "3"
                },
                "dcomMobileSERPDisplayTopAd-300x250@300x250": {
                    siteID: "220878",
                    id: "2"
                },
                "dcomMobileSERPTopAd-320x50@320x50": {
                    siteID: "220877",
                    id: "1"
                },
                "dcom_serp_dkt_atf_728x90_3@728x90": {
                    siteID: "299149",
                    id: "19"
                },
                "dcom_serp_dkt_btf_300x600_4@300x600": {
                    siteID: "299146",
                    id: "16"
                },
                "dcom_serp_dkt_btf_970x250_5@970x250": {
                    siteID: "299147",
                    id: "17"
                },
                "dcom_serp_dkt_btf_970x90_5@970x90": {
                    siteID: "299148",
                    id: "18"
                },
                "dmwHomeThesBottom@300x250": {
                    siteID: "220871",
                    id: "2"
                },
                "dmwHomeThesTop@320x50": {
                    siteID: "220870",
                    id: "1"
                },
                "dmwMisspellThesBottom@300x250": {
                    siteID: "220871",
                    id: "2"
                },
                "dmwMisspellThesTop@320x50": {
                    siteID: "220870",
                    id: "1"
                },
                "dmwSerpThesBottom@300x250": {
                    siteID: "220871",
                    id: "2"
                },
                "dmwSerpThesTop@320x50": {
                    siteID: "220870",
                    id: "1"
                },
                "tcomHomeBot-728x90@728x90": {
                    siteID: "210649",
                    id: "2"
                },
                "tcomHomeTop-300x250@300x250": {
                    siteID: "210648",
                    id: "1"
                },
                "tcomHomeTop-728x90@728x90": {
                    siteID: "210651",
                    id: "3"
                },
                "tcomHomeTop-728x90@970x90": {
                    siteID: "210651",
                    id: "4"
                },
                "tcom_serp_dkt_atf_728x90_3@728x90": {
                    siteID: "299157",
                    id: "27"
                },
                "tcom_serp_dkt_btf_300x600_4@300x600": {
                    siteID: "299154",
                    id: "24"
                },
                "tcom_serp_dkt_btf_970x250_5@970x250": {
                    siteID: "299155",
                    id: "25"
                },
                "tcom_serp_dkt_btf_970x90_5@970x90": {
                    siteID: "299156",
                    id: "26"
                },
                "tcom_serp_mweb_atf_300x250_2@300x250": {
                    siteID: "299151",
                    id: "21"
                },
                "tcom_serp_mweb_atf_320x50_1@320x50": {
                    siteID: "299150",
                    id: "20"
                },
                "tcom_serp_mweb_btf_300x250_4@300x250": {
                    siteID: "299153",
                    id: "23"
                },
                "tcom_serp_mweb_mid_300x250_3@300x250": {
                    siteID: "299152",
                    id: "22"
                },
                "thesaurus_serp_300x250_p5@300x250": {
                    siteID: "220869",
                    id: "11"
                },
                "thesaurus_serp_300x250_p5@300x600": {
                    siteID: "220869",
                    id: "12"
                },
                "thesaurus_serp_300x250_p6@300x250": {
                    siteID: "220869",
                    id: "13"
                },
                "thesaurus_serp_728x90_p5@728x90": {
                    siteID: "312689",
                    id: "14"
                },
                "thesaurus_serp_728x90_p6@728x90": {
                    siteID: "210649",
                    id: "15"
                },
                "thesaurus_serp_atf_300x250@300x250": {
                    siteID: "210648",
                    id: "2"
                },
                "thesaurus_serp_atf_300x250@300x600": {
                    siteID: "210648",
                    id: "7"
                },
                "thesaurus_serp_atf_728x90@728x90": {
                    siteID: "210651",
                    id: "1"
                },
                "thesaurus_serp_atf_728x90@970x250": {
                    siteID: "224847",
                    id: "5"
                },
                "thesaurus_serp_atf_728x90@970x90": {
                    siteID: "210651",
                    id: "6"
                },
                "thesaurus_serp_btf_2@728x90": {
                    siteID: "210649",
                    id: "4"
                },
                "thesaurus_serp_btf_2@970x250": {
                    siteID: "210649",
                    id: "8"
                },
                "thesaurus_serp_btf_2@970x90": {
                    siteID: "210649",
                    id: "9"
                },
                "thesaurus_serp_btf_300x252@300x250": {
                    siteID: "220869",
                    id: "3"
                },
                "thesaurus_serp_btf_300x252@300x600": {
                    siteID: "220869",
                    id: "10"
                }
            }
        },
        criteo: {
            rev_share: "-50.0",
            timeout: "1200",
            throttle: "100",
            kgp: "_DIV_@_W_x_H_",
            klm: {
                "dcom-misspell-bottom-lb-728x90@728x90": {
                    zoneId: "1089225"
                },
                "dcom-misspell-lb-728x90@728x90": {
                    zoneId: "1086740"
                },
                "dcom-misspell-mid-300x250@300x250": {
                    zoneId: "1089217"
                },
                "dcom-misspell-top-300x250@300x250": {
                    zoneId: "1086738"
                },
                "dcom-no-result-lb-728x90@728x90": {
                    zoneId: "1086740"
                },
                "dcom-no-result-mid-300x250@300x250": {
                    zoneId: "1089217"
                },
                "dcom-no-result-top-300x250@300x250": {
                    zoneId: "1086738"
                },
                "dcom-serp-a-mid-300x250@300x250": {
                    zoneId: "1089217"
                },
                "dcom-serp-a-mid-300x250@300x600": {
                    zoneId: "1315509"
                },
                "dcom-serp-a-top-300x250@300x250": {
                    zoneId: "1086738"
                },
                "dcom-serp-a-top-300x250@300x600": {
                    zoneId: "1086739"
                },
                "dcom-serp-bot-300x250@300x250": {
                    zoneId: "1089223"
                },
                "dcom-serp-bottom-lb-728x90@728x90": {
                    zoneId: "1089225"
                },
                "dcom-serp-bottom-lb-728x90@970x250": {
                    zoneId: "1315510"
                },
                "dcom-serp-bottom-lb-728x90@970x90": {
                    zoneId: "1315523"
                },
                "dcom-serp-lb-728x90@728x90": {
                    zoneId: "1086740"
                },
                "dcom-serp-lb-728x90@970x250": {
                    zoneId: "1086742"
                },
                "dcomHomeBot-728x90@728x90": {
                    zoneId: "1089225"
                },
                "dcomHomeTop-300x250@300x250": {
                    zoneId: "1086738"
                },
                "dcomHomeTop-728x90@728x90": {
                    zoneId: "1086740"
                },
                "dcomMobileHPBotAd-300x250@300x250": {
                    zoneId: "1089223"
                },
                "dcomMobileHPTopAd-320x50@320x50": {
                    zoneId: "1086741"
                },
                "dcomMobileMisspellBottomAd-300x250@300x250": {
                    zoneId: "1089223"
                },
                "dcomMobileMisspellTop-320x50@320x50": {
                    zoneId: "1086741"
                },
                "dcomMobileSERPDisplayBotAd-300x250@300x250": {
                    zoneId: "1089223"
                },
                "dcomMobileSERPDisplayMidAd-300x250@300x250": {
                    zoneId: "1089217"
                },
                "dcomMobileSERPDisplayTopAd-300x250@300x250": {
                    zoneId: "1086738"
                },
                "dcomMobileSERPTopAd-320x50@320x50": {
                    zoneId: "1086741"
                },
                "dcom_serp_dkt_atf_728x90_3@728x90": {
                    zoneId: "1315524"
                },
                "dmwHomeThesBottom@300x250": {
                    zoneId: "1089206"
                },
                "dmwHomeThesTop@320x50": {
                    zoneId: "1086748"
                },
                "dmwMisspellThesBottom@300x250": {
                    zoneId: "1089206"
                },
                "dmwMisspellThesTop@320x50": {
                    zoneId: "1086748"
                },
                "dmwSerpThesBottom@300x250": {
                    zoneId: "1089206"
                },
                "dmwSerpThesTop@320x50": {
                    zoneId: "1086748"
                },
                "tcomHomeBot-728x90@728x90": {
                    zoneId: "1089208"
                },
                "tcomHomeTop-300x250@300x250": {
                    zoneId: "1086745"
                },
                "tcomHomeTop-728x90@728x90": {
                    zoneId: "1086747"
                },
                "tcom_serp_dkt_atf_728x90_3@728x90": {
                    zoneId: "1315577"
                },
                "tcom_serp_dkt_btf_300x600_4@300x600": {
                    zoneId: "1315574"
                },
                "tcom_serp_dkt_btf_970x250_5@970x250": {
                    zoneId: "1315575"
                },
                "tcom_serp_dkt_btf_970x90_5@970x90": {
                    zoneId: "1315576"
                },
                "tcom_serp_mweb_atf_300x250_2@300x250": {
                    zoneId: "1086745"
                },
                "tcom_serp_mweb_atf_320x50_1@320x50": {
                    zoneId: "1086748"
                },
                "tcom_serp_mweb_btf_300x250_4@300x250": {
                    zoneId: "1089206"
                },
                "tcom_serp_mweb_mid_300x250_3@300x250": {
                    zoneId: "1089211"
                },
                "thesaurus_serp_300x250_p5@300x250": {
                    zoneId: "1089211"
                },
                "thesaurus_serp_300x250_p5@300x600": {
                    zoneId: "1089211"
                },
                "thesaurus_serp_300x250_p6@300x250": {
                    zoneId: "1089211"
                },
                "thesaurus_serp_728x90_p5@728x90": {
                    zoneId: "1348068"
                },
                "thesaurus_serp_728x90_p6@728x90": {
                    zoneId: "1089208"
                },
                "thesaurus_serp_atf_300x250@300x250": {
                    zoneId: "1086745"
                },
                "thesaurus_serp_atf_300x250@300x600": {
                    zoneId: "1086746"
                },
                "thesaurus_serp_atf_728x90@728x90": {
                    zoneId: "1086747"
                },
                "thesaurus_serp_atf_728x90@970x250": {
                    zoneId: "1086749"
                },
                "thesaurus_serp_btf_2@728x90": {
                    zoneId: "1089208"
                },
                "thesaurus_serp_btf_2@970x250": {
                    zoneId: "1089209"
                },
                "thesaurus_serp_btf_300x252@300x250": {
                    zoneId: "1089211"
                },
                "thesaurus_serp_btf_300x252@300x600": {
                    zoneId: "1089212"
                }
            }
        }
    }
}
), (function(e, t, i) {
    function o(e) {
        u.isOwnProperty(window.PWT.bidMap, e) || (window.PWT.bidMap[e] = _.createBMEntry(e))
    }
    function n(e, t, i, o) {
        window.PWT.bidMap[e].setNewBid(t, i),
        window.PWT.bidIdMap[i.getBidID()] = {
            s: e,
            a: t
        },
        0 === i.getDefaultBidStatus() && u.vLogInfo(e, {
            type: "bid",
            bidder: t + (0 !== l.getBidPassThroughStatus(t) ? "(Passthrough)" : ""),
            bidDetails: i,
            latency: o,
            s2s: l.isServerSideAdapter(t)
        })
    }
    function r(e, t, i) {
        var o = ""
          , n = 0
          , r = 0
          , a = c.METADATA_MACROS
          , d = "g";
        u.forEachOnObject(t.adapters, (function(t, i) {
            "" != i.getLastBidID() && ("pubmaticServer" !== t && r++,
            u.forEachOnObject(i.bids, (function(t, i) {
                1 != i.getDefaultBidStatus() && 1 != i.getPostTimeoutStatus() && (n++,
                o += s(e, i))
            }
            )))
        }
        )),
        0 == o.length && (o = e),
        o = o.replace(new RegExp(a.BID_COUNT,d), n),
        o = o.replace(new RegExp(a.PARTNER_COUNT,d), r),
        i[c.WRAPPER_TARGETING_KEYS.META_DATA] = encodeURIComponent(o)
    }
    function s(e, t) {
        var i = c.METADATA_MACROS
          , o = "g";
        return e.replace(new RegExp(i.PARTNER,o), t.getAdapterID()).replace(new RegExp(i.WIDTH,o), t.getWidth()).replace(new RegExp(i.HEIGHT,o), t.getHeight()).replace(new RegExp(i.GROSS_ECPM,o), t.getGrossEcpm()).replace(new RegExp(i.NET_ECPM,o), t.getNetEcpm())
    }
    function a(e) {
        var t = null
          , i = {};
        return u.forEachOnObject(e.adapters, (function(e, o) {
            var n = g.auctionBidsCallBack(e, o, i, t);
            t = n.winningBid,
            i = n.keyValuePairs
        }
        )),
        null !== l.getMataDataPattern() && r(l.getMataDataPattern(), e, i),
        {
            wb: t,
            kvp: i
        }
    }
    function d(e, t, i, o) {
        return "" != t.getLastBidID() ? (u.forEachOnObject(t.bids, (function(t, n) {
            return n.getPostTimeoutStatus() === !0 ? {
                winningBid: o,
                keyValuePairs: i
            } : (1 !== n.getDefaultBidStatus() && 1 == l.getSendAllBidsStatus() && n.setSendAllBidsKeys(),
            0 === l.getBidPassThroughStatus(e) && u.copyKeyValueObject(i, n.getKeyValuePairs()),
            0 !== l.getBidPassThroughStatus(e) ? (u.copyKeyValueObject(i, n.getKeyValuePairs()),
            {
                winningBid: o,
                keyValuePairs: i
            }) : (null == o ? o = n : o.getNetEcpm() < n.getNetEcpm() && (o = n),
            void 0))
        }
        )),
        {
            winningBid: o,
            keyValuePairs: i
        }) : {
            winningBid: o,
            keyValuePairs: i
        }
    }
    function p(e, t, i) {
        var o = t.getCreationTime()
          , n = void 0
          , r = t.getImpressionID();
        if (t.getAnalyticEnabledStatus() && !t.getExpiredStatus()) {
            var s = {
                sn: e,
                sz: t.getSizes(),
                ps: []
            };
            t.setExpired(),
            i[r] = i[r] || [],
            u.forEachOnObject(t.adapters, (function(e, t) {
                1 != l.getBidPassThroughStatus(e) && u.forEachOnObject(t.bids, (function(t, i) {
                    var a = i.getReceivedTime();
                    return "pubmaticServer" === e ? (u.isOwnProperty(window.PWT.owLatency, r) && u.isOwnProperty(window.PWT.owLatency[r], "startTime") && u.isOwnProperty(window.PWT.owLatency[r], "endTime") ? n = window.PWT.owLatency[r].endTime - window.PWT.owLatency[r].startTime : (n = 0,
                    u.log("Logging pubmaticServer latency as 0 for impressionID: " + r)),
                    u.log("PSL logging: time logged for id " + r + " is " + n),
                    void 0) : ((1 != l.getAdapterMaskBidsStatus(e) || i.getWinningBidStatus() !== !1) && s.ps.push({
                        pn: e,
                        bidid: t,
                        db: i.getDefaultBidStatus(),
                        kgpv: i.getKGPV(),
                        psz: i.getWidth() + "x" + i.getHeight(),
                        eg: i.getGrossEcpm(),
                        en: i.getNetEcpm(),
                        di: i.getDealID(),
                        dc: i.getDealChannel(),
                        l1: i.getServerSideStatus() ? i.getServerSideResponseTime() : a - o,
                        l2: 0,
                        ss: i.getServerSideStatus(),
                        t: i.getPostTimeoutStatus() === !1 ? 0 : 1,
                        wb: i.getWinningBidStatus() === !0 ? 1 : 0
                    }),
                    void 0)
                }
                ))
            }
            )),
            i[r].push(s),
            void 0 !== n && (i[r].psl = n)
        }
    }
    var l = i(4)
      , c = i(2)
      , u = i(1)
      , m = i(7)
      , _ = i(8)
      , g = this;
    t.createBidEntry = o,
    t.setSizes = function(e, t) {
        g.createBidEntry(e),
        window.PWT.bidMap[e].setSizes(t)
    }
    ,
    t.setCallInitTime = function(e, t) {
        g.createBidEntry(e),
        window.PWT.bidMap[e].setAdapterEntry(t)
    }
    ,
    t.setBidFromBidder = function(e, t) {
        var i = t.getAdapterID()
          , o = (t.getBidID(),
        window.PWT.bidMap[e]);
        if (!u.isOwnProperty(window.PWT.bidMap, e))
            return u.log("BidManager is not expecting bid for " + e + ", from " + i),
            void 0;
        var n = o.getCreationTime() + l.getTimeout() < t.getReceivedTime() ? !0 : !1
          , r = t.getReceivedTime() - o.getCreationTime();
        g.createBidEntry(e),
        u.log("BdManagerSetBid: divID: " + e + ", bidderID: " + i + ", ecpm: " + t.getGrossEcpm() + ", size: " + t.getWidth() + "x" + t.getHeight() + ", postTimeout: " + n + ", defaultBid: " + t.getDefaultBidStatus()),
        n === !0 && t.setPostTimeoutStatus();
        var s = o.getLastBidIDForAdapter(i);
        if ("" != s) {
            var a = o.getBid(i, s)
              , d = 1 === a.getDefaultBidStatus();
            d || !n ? (d && u.log(c.MESSAGES.M23),
            d || a.getNetEcpm() < t.getNetEcpm() ? (u.log(c.MESSAGES.M12 + a.getNetEcpm() + c.MESSAGES.M13 + t.getNetEcpm() + c.MESSAGES.M14),
            g.storeBidInBidMap(e, i, t, r)) : u.log(c.MESSAGES.M12 + a.getNetEcpm() + c.MESSAGES.M15 + t.getNetEcpm() + c.MESSAGES.M16)) : u.log(c.MESSAGES.M17)
        } else
            u.log(c.MESSAGES.M18),
            g.storeBidInBidMap(e, i, t, r)
    }
    ,
    t.storeBidInBidMap = n,
    t.resetBid = function(e, t) {
        u.vLogInfo(e, {
            type: "hr"
        }),
        delete window.PWT.bidMap[e],
        g.createBidEntry(e),
        window.PWT.bidMap[e].setImpressionID(t)
    }
    ,
    t.createMetaDataKey = r,
    t.replaceMetaDataMacros = s,
    t.auctionBids = a,
    t.auctionBidsCallBack = d,
    t.getBid = function(e) {
        var t = null
          , i = null;
        if (u.isOwnProperty(window.PWT.bidMap, e)) {
            var o = g.auctionBids(window.PWT.bidMap[e]);
            t = o.wb,
            i = o.kvp,
            window.PWT.bidMap[e].setAnalyticEnabled(),
            t && t.getNetEcpm() > 0 ? (t.setStatus(1),
            t.setWinningBidStatus(),
            u.vLogInfo(e, {
                type: "win-bid",
                bidDetails: t
            })) : u.vLogInfo(e, {
                type: "win-bid-fail"
            })
        }
        return {
            wb: t,
            kvp: i
        }
    }
    ,
    t.getBidById = function(e) {
        if (!u.isOwnProperty(window.PWT.bidIdMap, e))
            return u.log(c.MESSAGES.M25 + e),
            null;
        var t = window.PWT.bidIdMap[e].s
          , i = window.PWT.bidIdMap[e].a;
        if (u.isOwnProperty(window.PWT.bidMap, t)) {
            u.log("BidID: " + e + ", DivID: " + t + c.MESSAGES.M19 + i);
            var o = window.PWT.bidMap[t].getBid(i, e);
            return null == o ? null : {
                bid: o,
                slotid: t
            }
        }
        return u.log(c.MESSAGES.M25 + e),
        null
    }
    ,
    t.displayCreative = function(e, t) {
        var i = g.getBidById(t);
        if (i) {
            var o = i.bid
              , n = i.slotid;
            u.displayCreative(e, o),
            u.vLogInfo(n, {
                type: "disp",
                adapter: o.getAdapterID()
            }),
            g.executeMonetizationPixel(n, o)
        }
    }
    ,
    t.executeAnalyticsPixel = function() {
        var e = {
            s: []
        }
          , t = l.getPublisherId()
          , i = m.getUserConsentDataFromLS()
          , o = ""
          , n = l.getAnalyticsPixelURL()
          , r = {};
        n && (n = u.metaInfo.protocol + n + "pubid=" + t,
        e[c.CONFIG.PUBLISHER_ID] = l.getPublisherId(),
        e[c.LOGGER_PIXEL_PARAMS.TIMEOUT] = "" + l.getTimeout(),
        e[c.LOGGER_PIXEL_PARAMS.PAGE_URL] = window.decodeURIComponent(u.metaInfo.pageURL),
        e[c.LOGGER_PIXEL_PARAMS.TIMESTAMP] = u.getCurrentTimestamp(),
        e[c.CONFIG.PROFILE_ID] = l.getProfileID(),
        e[c.CONFIG.PROFILE_VERSION_ID] = l.getProfileDisplayVersionID(),
        l.getGdpr() && (o = i && i.c ? encodeURIComponent(i.c) : "",
        e[c.CONFIG.GDPR_CONSENT] = i && i.g,
        e[c.CONFIG.CONSENT_STRING] = o,
        n += "&gdEn=" + (l.getGdpr() ? 1 : 0)),
        u.forEachOnObject(window.PWT.bidMap, (function(e, t) {
            g.analyticalPixelCallback(e, t, r)
        }
        )),
        u.forEachOnObject(r, (function(t, i) {
            i.length > 0 && (e.s = i,
            e[c.COMMON.IMPRESSION_ID] = window.encodeURIComponent(t),
            e.psl = i.psl,
            u.ajaxRequest(n, (function() {}
            ), "json=" + window.encodeURIComponent(JSON.stringify(e)), {
                contentType: "application/x-www-form-urlencoded",
                withCredentials: !0
            }))
        }
        )))
    }
    ,
    t.executeMonetizationPixel = function(e, t) {
        var i = l.getMonetizationPixelURL()
          , o = l.getPublisherId();
        i && (i += "pubid=" + o,
        i += "&purl=" + window.encodeURIComponent(u.metaInfo.pageURL),
        i += "&tst=" + u.getCurrentTimestamp(),
        i += "&iid=" + window.encodeURIComponent(window.PWT.bidMap[e].getImpressionID()),
        i += "&bidid=" + window.encodeURIComponent(t.getBidID()),
        i += "&pid=" + window.encodeURIComponent(l.getProfileID()),
        i += "&pdvid=" + window.encodeURIComponent(l.getProfileDisplayVersionID()),
        i += "&slot=" + window.encodeURIComponent(e),
        i += "&pn=" + window.encodeURIComponent(t.getAdapterID()),
        i += "&en=" + window.encodeURIComponent(t.getNetEcpm()),
        i += "&eg=" + window.encodeURIComponent(t.getGrossEcpm()),
        i += "&kgpv=" + window.encodeURIComponent(t.getKGPV()),
        g.setImageSrcToPixelURL(i))
    }
    ,
    t.analyticalPixelCallback = p,
    t.setImageSrcToPixelURL = function(e) {
        var t = new window.Image;
        t.src = u.metaInfo.protocol + e
    }
    ,
    t.getAllPartnersBidStatuses = function(e, t) {
        var i = !0;
        return u.forEachOnArray(t, (function(t, o) {
            e[o] && u.forEachOnObject(e[o].adapters, (function(e, t) {
                u.forEachOnObject(t.bids, (function(e, t) {
                    i = i && 0 === t.getDefaultBidStatus()
                }
                ))
            }
            ))
        }
        )),
        i
    }
}
), (function(e, t) {
    function i(e, t) {
        return toString.call(e) === "[object " + t + "]"
    }
    var o = "OpenWrap"
      , n = 909090
      , r = function(e) {
        return i(e, "Function")
    }
      , s = (function() {
        try {
            return window.localStorage && r(window.localStorage.getItem) && r(window.localStorage.setItem)
        } catch (e) {
            return !1
        }
    }
    )()
      , a = function(e, t, i, n) {
        var r;
        if (s) {
            try {
                r = window.localStorage.getItem(o)
            } catch (a) {}
            if (r && "string" == typeof r)
                try {
                    r = JSON.parse(r)
                } catch (a) {
                    r = {}
                }
            else
                r = {};
            r && (r.hasOwnProperty(e) || (r[e] = {}),
            r[e].t = (new Date).getTime(),
            r[e][t] = i,
            "c" == t && (r[e].g = n ? 1 : 0));
            try {
                window.localStorage.setItem(o, JSON.stringify(r))
            } catch (a) {}
        }
    };
    t.setConsentDataInLS = a,
    t.isCmpFound = function() {
        return !!window.__cmp
    }
    ,
    t.getUserConsentDataFromCMP = function() {
        function e(e) {
            if (e && e.data && e.data.__cmp && e.data.__cmp.result) {
                var t = e.data.__cmp.result;
                t && t.consentData ? a(i, "c", t.consentData, t.gdprApplies) : "string" == typeof t && a(i, "c", t)
            }
        }
        function t() {
            window.__cmp("getConsentData", "vendorConsents", (function(e) {
                e && e.consentData ? a(i, "c", e.consentData, e.gdprApplies) : "string" == typeof e && a(i, "c", e)
            }
            ))
        }
        var i = n
          , o = 0
          , r = {
            __cmp: {
                callId: "iframe:" + ++o,
                command: "getConsentData"
            }
        };
        window.__cmp ? "function" == typeof window.__cmp ? t() : setTimeout((function() {
            "function" == typeof window.__cmp && t()
        }
        ), 500) : (window.top.postMessage(r, "*"),
        window.addEventListener("message", e))
    }
    ,
    t.getUserConsentDataFromLS = function() {
        var e = n
          , t = {
            c: "",
            g: 0
        };
        if (!s)
            return t;
        var i;
        try {
            i = window.localStorage.getItem(o)
        } catch (r) {}
        if (i && "string" == typeof i) {
            try {
                i = JSON.parse(i)
            } catch (r) {
                i = {}
            }
            if (i.hasOwnProperty(e)) {
                var a = i[e];
                a && a.c && a.t && a.t && parseInt(a.t, 10) > (new Date).getTime() - 864e5 && (t.c = a.c,
                t.g = a.g)
            }
        }
        return t
    }
}
), (function(e, t, i) {
    function o(e) {
        this.name = e,
        this.sizes = [],
        this.adapters = {},
        this.creationTime = r.getCurrentTimestampInMs(),
        this.impressionID = "",
        this.analyticsEnabled = !1,
        this.expired = !1
    }
    var n = i(2)
      , r = i(1)
      , s = i(9).AdapterEntry;
    o.prototype.setExpired = function() {
        return this.expired = !0,
        this
    }
    ,
    o.prototype.getExpiredStatus = function() {
        return this.expired
    }
    ,
    o.prototype.setAnalyticEnabled = function() {
        return this.analyticsEnabled = !0,
        this
    }
    ,
    o.prototype.getAnalyticEnabledStatus = function() {
        return this.analyticsEnabled
    }
    ,
    o.prototype.setNewBid = function(e, t) {
        r.isOwnProperty(this.adapters, e) || (this.adapters[e] = new s(e)),
        this.adapters[e].setNewBid(t)
    }
    ,
    o.prototype.getBid = function(e, t) {
        return r.isOwnProperty(this.adapters, e) ? this.adapters[e].getBid(t) : void 0
    }
    ,
    o.prototype.getName = function() {
        return this.name
    }
    ,
    o.prototype.getCreationTime = function() {
        return this.creationTime
    }
    ,
    o.prototype.setImpressionID = function(e) {
        return this.impressionID = e,
        this
    }
    ,
    o.prototype.getImpressionID = function() {
        return this.impressionID
    }
    ,
    o.prototype.setSizes = function(e) {
        return this.sizes = e,
        this
    }
    ,
    o.prototype.getSizes = function() {
        return this.sizes
    }
    ,
    o.prototype.setAdapterEntry = function(e) {
        return r.isOwnProperty(this.adapters, e) || (this.adapters[e] = new s(e),
        r.log(n.MESSAGES.M4 + this.name + " " + e + " " + this.adapters[e].getCallInitiatedTime())),
        this
    }
    ,
    o.prototype.getLastBidIDForAdapter = function(e) {
        return r.isOwnProperty(this.adapters, e) ? this.adapters[e].getLastBidID() : ""
    }
    ,
    e.exports.BMEntry = o,
    t.createBMEntry = function(e) {
        return new o(e)
    }
}
), (function(e, t, i) {
    function o(e) {
        this.adapterID = e,
        this.callInitiatedTime = n.getCurrentTimestampInMs(),
        this.bids = {},
        this.lastBidID = ""
    }
    var n = i(1);
    o.prototype.getCallInitiatedTime = function() {
        return this.callInitiatedTime
    }
    ,
    o.prototype.getLastBidID = function() {
        return this.lastBidID
    }
    ,
    o.prototype.getBid = function(e) {
        return n.isOwnProperty(this.bids, e) ? this.bids[e] : null
    }
    ,
    o.prototype.setNewBid = function(e) {
        delete this.bids[this.lastBidID];
        var t = e.getBidID();
        this.bids[t] = e,
        this.lastBidID = t
    }
    ,
    e.exports.AdapterEntry = o
}
), (function(e, t, i) {
    function o(e) {
        q.isObject(e) && (st = e)
    }
    function n() {
        return st
    }
    function r(e) {
        var t = 0;
        try {
            var i = e.getSlotId().getId().split("_");
            t = parseInt(i[i.length - 1])
        } catch (o) {}
        return t
    }
    function s(e, t) {
        if (!q.isOwnProperty(t, e))
            return !1;
        var i = t[e]
          , o = q.getScreenWidth(at.getWindowReference())
          , n = q.getScreenHeight(at.getWindowReference());
        if (q.log(e + ": responsiveSizeMapping found: screenWidth: " + o + ", screenHeight: " + n),
        q.log(i),
        !q.isArray(i))
            return !1;
        for (var r = 0, s = i.length; s > r; r++)
            if (2 == i[r].length && 2 == i[r][0].length) {
                var a = i[r][0][0]
                  , d = i[r][0][1];
                if (o >= a && n >= d) {
                    if (0 != i[r][1].length && !q.isArray(i[r][1][0])) {
                        if (2 == i[r][1].length && q.isNumber(i[r][1][0]) && q.isNumber(i[r][1][1]))
                            return [i[r][1]];
                        q.log(e + ": Unsupported mapping template."),
                        q.log(i)
                    }
                    return i[r][1]
                }
            }
        return !1
    }
    function a(e, t) {
        var i = at.getSizeFromSizeMapping(e, at.slotSizeMapping);
        if (i !== !1)
            return q.log(e + ": responsiveSizeMapping applied: "),
            q.log(i),
            i;
        var o = [];
        return q.isFunction(t.getSizes) && q.forEachOnArray(t.getSizes(), (function(t, i) {
            q.isFunction(i.getWidth) && q.isFunction(i.getHeight) ? o.push([i.getWidth(), i.getHeight()]) : (q.log(e + ", size object does not have getWidth and getHeight method. Ignoring: "),
            q.log(i))
        }
        )),
        o
    }
    function d(e, t) {
        q.isObject(e) && q.isFunction(e.getDivID) && q.isArray(t) && t[0] && t[0] == e.getDivID() && (e.setDisplayFunctionCalled(!0),
        e.setArguments(t))
    }
    function p(e, t, i) {
        if (q.isOwnProperty(at.slotsMap, e))
            i || at.slotsMap[e].setSizes(at.getAdSlotSizesArray(e, t));
        else {
            var o = Z.createSlot(e);
            o.setDivID(e),
            o.setPubAdServerObject(t),
            o.setAdUnitID(t.getAdUnitPath()),
            o.setAdUnitIndex(at.getAdUnitIndex(t)),
            o.setSizes(at.getAdSlotSizesArray(e, t)),
            o.setStatus(Y.SLOT_STATUS.CREATED),
            tt && q.isObject(JSON) && q.isFunction(JSON.stringify) && q.forEachOnArray(t.getTargetingKeys(), (function(e, i) {
                o.setKeyValue(i, t.getTargeting(i))
            }
            )),
            at.slotsMap[e] = o,
            q.createVLogInfoPanel(e, o.getSizes())
        }
    }
    function l(e) {
        if (q.isObject(e) && q.isFunction(e.getSlotId)) {
            var t = e.getSlotId();
            if (t && q.isFunction(t.getDomId))
                return t.getDomId()
        }
        return ""
    }
    function c(e, t, i) {
        q.log("Generating slotsMap"),
        q.forEachOnArray(e, (function(e, o) {
            var n = at.generateSlotName(o);
            at.storeInSlotsMap(n, o, i),
            i && q.isOwnProperty(at.slotsMap, n) && at.setDisplayFunctionCalledIfRequired(at.slotsMap[n], t)
        }
        )),
        q.log(at.slotsMap)
    }
    function u(e) {
        return q.isOwnProperty(at.slotsMap, e) ? at.slotsMap[e].getStatus() : Y.SLOT_STATUS.DISPLAYED
    }
    function m(e, t) {
        q.isOwnProperty(at.slotsMap, e) && at.slotsMap[e].updateStatusAfterRendering(t)
    }
    function _(e) {
        var t = [];
        return q.forEachOnObject(at.slotsMap, (function(i, o) {
            q.isOwnProperty(e, o.getStatus()) && t.push(i)
        }
        )),
        t
    }
    function g(e) {
        var t, i = {};
        q.isOwnProperty(at.slotsMap, e) && (t = at.slotsMap[e].getPubAdServerObject(),
        q.forEachOnArray(t.getTargetingKeys(), (function(e, o) {
            i[o] = t.getTargeting(o)
        }
        )),
        t.clearTargeting(),
        q.forEachOnObject(i, (function(e, i) {
            q.isOwnProperty(at.wrapperTargetingKeys, e) || t.setTargeting(e, i)
        }
        )))
    }
    function I(e, t, i) {
        q.forEachOnArray(e, (function(e, o) {
            if (q.isOwnProperty(at.slotsMap, o)) {
                var n = at.slotsMap[o];
                n.setStatus(Y.SLOT_STATUS.PARTNERS_CALLED),
                i && (at.removeDMTargetingFromSlot(o),
                n.setRefreshFunctionCalled(!0),
                n.setArguments(t))
            }
        }
        ))
    }
    function f(e) {
        var t = [];
        return q.forEachOnArray(e, (function(e, i) {
            t.push(at.slotsMap[i])
        }
        )),
        t
    }
    function x(e) {
        var t = {};
        return q.forEachOnObject(e, (function(e, i) {
            t[i] = ""
        }
        )),
        t
    }
    function h(e) {
        var t = J.getBid(e)
          , i = t.wb || null
          , o = t.kvp || null
          , n = at.slotsMap[e].getPubAdServerObject()
          , r = Y.IGNORE_PREBID_KEYS;
        if (q.log("DIV: " + e + " winningBid: "),
        q.log(i),
        i && i.getNetEcpm() > 0) {
            at.slotsMap[e].setStatus(Y.SLOT_STATUS.TARGETING_ADDED),
            n.setTargeting(Y.WRAPPER_TARGETING_KEYS.BID_ID, i.getBidID()),
            n.setTargeting(Y.WRAPPER_TARGETING_KEYS.BID_STATUS, i.getStatus()),
            n.setTargeting(Y.WRAPPER_TARGETING_KEYS.BID_ECPM, i.getNetEcpm().toFixed(Y.COMMON.BID_PRECISION));
            var s = i.getDealID();
            s && n.setTargeting(Y.WRAPPER_TARGETING_KEYS.BID_DEAL_ID, s),
            n.setTargeting(Y.WRAPPER_TARGETING_KEYS.BID_ADAPTER_ID, i.getAdapterID()),
            n.setTargeting(Y.WRAPPER_TARGETING_KEYS.PUBLISHER_ID, K.getPublisherId()),
            n.setTargeting(Y.WRAPPER_TARGETING_KEYS.PROFILE_ID, K.getProfileID()),
            n.setTargeting(Y.WRAPPER_TARGETING_KEYS.PROFILE_VERSION_ID, K.getProfileDisplayVersionID()),
            n.setTargeting(Y.WRAPPER_TARGETING_KEYS.BID_SIZE, i.width + "x" + i.height)
        }
        q.forEachOnObject(o, (function(e, t) {
            q.isOwnProperty(r, e) || (n.setTargeting(e, t),
            at.defineWrapperTargetingKey(e))
        }
        ))
    }
    function b(e) {
        q.isObject(at.wrapperTargetingKeys) || (at.wrapperTargetingKeys = {}),
        at.wrapperTargetingKeys[e] = ""
    }
    function w(e, t) {
        return q.isObject(e) && q.isFunction(t) ? function() {
            return et = !0,
            q.log("Disable Initial Load is called"),
            t.apply(e, arguments)
        }
        : (q.log("disableInitialLoad: originalFunction is not a function"),
        null)
    }
    function T(e, t) {
        return q.isObject(e) && q.isFunction(t) ? function() {
            return q.log("enableSingleRequest is called"),
            t.apply(e, arguments)
        }
        : (q.log("disableInitialLoad: originalFunction is not a function"),
        null)
    }
    function S(e, t) {
        return q.isObject(e) && q.isFunction(t) ? function() {
            var i = arguments
              , o = i[0] ? i[0] : null;
            return null != o && (q.isOwnProperty(rt, o) || (rt[o] = []),
            rt[o] = rt[o].concat(i[1])),
            t.apply(e, arguments)
        }
        : (q.log("setTargeting: originalFunction is not a function"),
        null)
    }
    function E(e, t) {
        return q.isObject(e) && q.isFunction(t) ? function() {
            var i = arguments[0] || window.googletag.pubads().getSlots();
            return q.forEachOnArray(i, (function(e, t) {
                delete nt[at.generateSlotName(t)]
            }
            )),
            t.apply(e, arguments)
        }
        : (q.log("destroySlots: originalFunction is not a function"),
        null)
    }
    function A(e, t, i, o) {
        q.log(e),
        q.log(o),
        at.updateStatusAfterRendering(o[0], !1),
        i.apply(t, o)
    }
    function D(e, t) {
        var i = t.getStatus();
        i != Y.SLOT_STATUS.DISPLAYED && i != Y.SLOT_STATUS.TARGETING_ADDED && at.findWinningBidAndApplyTargeting(e)
    }
    function y(e, t, i) {
        at.getStatusOfSlotForDivId(i[0]) != Y.SLOT_STATUS.DISPLAYED ? at.updateStatusAndCallOriginalFunction_Display("Calling original display function after timeout with arguments, ", e, t, i) : q.log("AdSlot already rendered")
    }
    function P(e, t, i) {
        q.getExternalBidderStatus(t) && J.getAllPartnersBidStatuses(window.PWT.bidMap, t) ? (q.resetExternalBidderStatus(t),
        i()) : e > 0 && window.setTimeout((function() {
            at.executeDisplay(e - 10, t, i)
        }
        ), 10)
    }
    function O(e, t, i, o) {
        switch (e) {
        case Y.SLOT_STATUS.CREATED:
        case Y.SLOT_STATUS.PARTNERS_CALLED:
            var n = Object.keys(at.slotsMap);
            "object" == typeof window.OWT.externalBidderStatuses[o[0]] && window.OWT.externalBidderStatuses[o[0]] && at.executeDisplay(K.getTimeout(), n, (function() {
                q.forEachOnObject(at.slotsMap, (function(e, t) {
                    at.findWinningBidIfRequired_Display(e, t)
                }
                )),
                at.processDisplayCalledSlot(t, i, o)
            }
            )),
            setTimeout((function() {
                q.log("PostTimeout.. back in display function"),
                q.forEachOnObject(at.slotsMap, (function(e, t) {
                    at.findWinningBidIfRequired_Display(e, t)
                }
                )),
                at.processDisplayCalledSlot(t, i, o)
            }
            ), K.getTimeout());
            break;
        case Y.SLOT_STATUS.TARGETING_ADDED:
            at.updateStatusAndCallOriginalFunction_Display("As DM processing is already done, Calling original display function with arguments", t, i, o);
            break;
        case Y.SLOT_STATUS.DISPLAYED:
            at.updateStatusAndCallOriginalFunction_Display("As slot is already displayed, Calling original display function with arguments", t, i, o)
        }
    }
    function M(e, t, i) {
        if (e.length > 0) {
            at.updateStatusOfQualifyingSlotsBeforeCallingAdapters(e, t, i);
            var o = at.arrayOfSelectedSlots(e);
            Q.callAdapters(o)
        }
    }
    function v(e, t) {
        return X.getUserConsentDataFromCMP(),
        q.isObject(e) && q.isFunction(t) ? function() {
            if (q.log("In display function, with arguments: "),
            q.log(arguments),
            et)
                return q.log("DisableInitialLoad was called, Nothing to do"),
                t.apply(e, arguments);
            at.updateSlotsMapFromGoogleSlots(e.pubads().getSlots(), arguments, !0),
            at.displayFunctionStatusHandler(u(arguments[0]), e, t, arguments);
            var i = {};
            i[Y.SLOT_STATUS.CREATED] = "",
            at.forQualifyingSlotNamesCallAdapters(_(i), arguments, !1);
            var o = arguments[0];
            setTimeout((function() {
                q.realignVLogInfoPanel(o),
                J.executeAnalyticsPixel()
            }
            ), 2e3 + K.getTimeout())
        }
        : (q.log("display: originalFunction is not a function"),
        null)
    }
    function R(e) {
        at.displayHookIsAdded || (at.displayHookIsAdded = !0,
        q.log("Adding hook on googletag.display."),
        q.addHookOnFunction(e, !1, "display", this.newDisplayFunction))
    }
    function F(e, t, i) {
        return q.isOwnProperty(at.slotsMap, e) && at.slotsMap[e].isRefreshFunctionCalled() === !0 && at.slotsMap[e].getStatus() !== Y.SLOT_STATUS.DISPLAYED ? (at.findWinningBidAndApplyTargeting(t),
        at.updateStatusAfterRendering(t, !0),
        !0) : i
    }
    function B(e, t) {
        q.createVLogInfoPanel(e, at.slotsMap[t].getSizes()),
        q.realignVLogInfoPanel(e),
        J.executeAnalyticsPixel()
    }
    function C(e, t, i, o) {
        q.log("Executing post timeout events, arguments: "),
        q.log(o);
        var n = !1;
        q.forEachOnArray(e, (function(e, t) {
            var i = at.slotsMap[t].getDivID();
            n = at.findWinningBidIfRequired_Refresh(t, i, n),
            window.setTimeout((function() {
                at.postRederingChores(i, t)
            }
            ), 2e3)
        }
        )),
        this.callOriginalRefeshFunction(n, t, i, o)
    }
    function z(e, t, i, o) {
        e === !0 ? (q.log("Calling original refresh function post timeout"),
        i.apply(t, o)) : q.log("AdSlot already rendered")
    }
    function N(e, t) {
        var i = []
          , o = [];
        return o = 0 == e.length || null == e[0] ? t.getSlots() : e[0],
        q.forEachOnArray(o, (function(e, t) {
            var o = at.generateSlotName(t);
            o.length > 0 && (i = i.concat(o))
        }
        )),
        i
    }
    function L(e, t) {
        return X.getUserConsentDataFromCMP(),
        q.isObject(e) && q.isFunction(t) ? function() {
            q.log("In Refresh function"),
            at.updateSlotsMapFromGoogleSlots(e.getSlots(), arguments, !1);
            var i = N(arguments, e);
            at.forQualifyingSlotNamesCallAdapters(i, arguments, !0),
            q.log("Intiating Call to original refresh function with Timeout: " + K.getTimeout() + " ms");
            var o = arguments;
            "object" == typeof window.OWT.externalBidderStatuses[i[0]] && window.OWT.externalBidderStatuses[i[0]] && at.executeDisplay(K.getTimeout(), i, (function() {
                at.postTimeoutRefreshExecution(i, e, t, o)
            }
            )),
            setTimeout((function() {
                at.postTimeoutRefreshExecution(i, e, t, o)
            }
            ), K.getTimeout())
        }
        : (q.log("refresh: originalFunction is not a function"),
        null)
    }
    function H(e, t) {
        return q.isObject(e) && q.isFunction(t) ? function() {
            return ot[at.generateSlotName(this)] = arguments[0],
            t.apply(this, arguments)
        }
        : (q.log("newSizeMappingFunction: originalFunction is not a function"),
        null)
    }
    function G(e) {
        if (q.isObject(e) && q.isFunction(e.defineSlot)) {
            var t = e.defineSlot("/Harshad", [[728, 90]], "Harshad-02051986");
            if (t)
                return q.addHookOnFunction(t, !0, "defineSizeMapping", at.newSizeMappingFunction),
                e.destroySlots([t]),
                !0
        }
        return !1
    }
    function W(e) {
        if (q.isObject(e) && q.isObject(e.googletag) && q.isFunction(e.googletag.pubads)) {
            var t = e.googletag
              , i = t.pubads();
            return q.isObject(i) ? (at.addHookOnSlotDefineSizeMapping(t),
            q.addHookOnFunction(i, !1, "disableInitialLoad", at.newDisableInitialLoadFunction),
            q.addHookOnFunction(i, !1, "enableSingleRequest", at.newEnableSingleRequestFunction),
            at.newAddHookOnGoogletagDisplay(t),
            q.addHookOnFunction(i, !1, "refresh", at.newRefreshFuncton),
            q.addHookOnFunction(i, !1, "setTargeting", at.newSetTargetingFunction),
            q.addHookOnFunction(t, !1, "destroySlots", at.newDestroySlotsFunction),
            !0) : !1
        }
        return !1
    }
    function U(e) {
        return q.isObject(e) ? (e.googletag = e.googletag || {},
        e.googletag.cmd = e.googletag.cmd || [],
        !0) : !1
    }
    function k(e) {
        if (q.isUndefined(e.google_onload_fired) && q.isObject(e.googletag) && q.isArray(e.googletag.cmd) && q.isFunction(e.googletag.cmd.unshift)) {
            q.log("Succeeded to load before GPT");
            var t = this;
            return e.googletag.cmd.unshift((function() {
                q.log("OpenWrap initialization started"),
                t.addHooks(e),
                q.log("OpenWrap initialization completed")
            }
            )),
            !0
        }
        return q.log("Failed to load before GPT"),
        !1
    }
    function j(e) {
        return q.isObject(e) && q.isObject(e.PWT) && q.isFunction(e.PWT.jsLoaded) ? (e.PWT.jsLoaded(),
        !0) : !1
    }
    function V(e) {
        e.PWT.safeFrameMessageListenerAdded || (q.addMessageEventListenerForSafeFrame(e),
        e.PWT.safeFrameMessageListenerAdded = !0)
    }
    var K = i(4)
      , Y = i(2)
      , q = i(1)
      , J = i(6)
      , X = i(7)
      , Q = i(11)
      , Z = i(13)
      , $ = !1;
    t.displayHookIsAdded = $;
    var et = !1
      , tt = !0
      , it = {};
    t.wrapperTargetingKeys = it;
    var ot = {};
    t.slotSizeMapping = ot;
    var nt = {};
    t.slotsMap = nt;
    var rt = {}
      , st = null
      , at = this;
    t.setWindowReference = o,
    t.getWindowReference = n,
    t.getAdUnitIndex = r,
    t.getSizeFromSizeMapping = s,
    t.getAdSlotSizesArray = a,
    t.setDisplayFunctionCalledIfRequired = d,
    t.storeInSlotsMap = p,
    t.generateSlotName = l,
    t.updateSlotsMapFromGoogleSlots = c,
    t.getStatusOfSlotForDivId = u,
    t.updateStatusAfterRendering = m,
    t.getSlotNamesByStatus = _,
    t.removeDMTargetingFromSlot = g,
    t.updateStatusOfQualifyingSlotsBeforeCallingAdapters = I,
    t.arrayOfSelectedSlots = f,
    t.defineWrapperTargetingKeys = x,
    t.findWinningBidAndApplyTargeting = h,
    t.defineWrapperTargetingKey = b,
    t.newDisableInitialLoadFunction = w,
    t.newEnableSingleRequestFunction = T,
    t.newSetTargetingFunction = S,
    t.newDestroySlotsFunction = E,
    t.updateStatusAndCallOriginalFunction_Display = A,
    t.findWinningBidIfRequired_Display = D,
    t.processDisplayCalledSlot = y,
    t.executeDisplay = P,
    t.displayFunctionStatusHandler = O,
    t.forQualifyingSlotNamesCallAdapters = M,
    t.newDisplayFunction = v,
    t.newAddHookOnGoogletagDisplay = R,
    t.findWinningBidIfRequired_Refresh = F,
    t.postRederingChores = B,
    t.postTimeoutRefreshExecution = C,
    t.callOriginalRefeshFunction = z,
    t.getQualifyingSlotNamesForRefresh = N,
    t.newRefreshFuncton = L,
    t.newSizeMappingFunction = H,
    t.addHookOnSlotDefineSizeMapping = G,
    t.addHooks = W,
    t.defineGPTVariables = U,
    t.addHooksIfPossible = k,
    t.callJsLoadedIfRequired = j,
    t.initSafeFrameListener = V,
    t.init = function(e) {
        return K.initConfig(),
        q.isObject(e) ? (at.setWindowReference(e),
        at.initSafeFrameListener(e),
        at.wrapperTargetingKeys = at.defineWrapperTargetingKeys(Y.WRAPPER_TARGETING_KEYS),
        at.defineGPTVariables(e),
        Q.registerAdapters(),
        at.addHooksIfPossible(e),
        at.callJsLoadedIfRequired(e),
        !0) : !1
    }
}
), (function(e, t, i) {
    function o() {
        return Math.floor(100 * Math.random())
    }
    function n(e, t, i) {
        u.forEachOnObject(e, (function(e, o) {
            I.setInitTimeForSlotsForAdapter(t, e),
            o.fB(t, i)
        }
        ))
    }
    function r(e, t) {
        u.forEachOnArray(e, (function(e, i) {
            var o = i.getDivID();
            m.resetBid(o, t),
            m.setSizes(o, u.generateSlotNamesFromPattern(i, "_W_x_H_"))
        }
        ))
    }
    function s(e, t) {
        return !(e >= l.getAdapterThrottle(t))
    }
    function a(e, t) {
        u.forEachOnObject(e, (function(e, i) {
            m.setCallInitTime(i.getDivID(), t)
        }
        ))
    }
    function d(e) {
        if (e) {
            var t = e.ID();
            u.isFunction(e.fB) ? I.registeredAdapters[t] = e : u.log(t + c.MESSAGES.M3)
        } else
            u.log(c.MESSAGES.M3),
            u.log(e)
    }
    function p() {
        I.registerAdapter(_.register())
    }
    var l = i(4)
      , c = i(2)
      , u = i(1)
      , m = i(6)
      , _ = i(12)
      , g = {};
    t.registeredAdapters = g;
    var I = this;
    t.callAdapters = function(e) {
        var t = u.generateUUID();
        I.resetSlots(e, t),
        I.callAdapter(g, e, t)
    }
    ,
    t.getRandomNumberBelow100 = o,
    t.callAdapter = n,
    t.resetSlots = r,
    t.throttleAdapter = s,
    t.setInitTimeForSlotsForAdapter = a,
    t.registerAdapter = d,
    t.registerAdapters = p
}
), (function(e, t, i) {
    function o(e, t) {
        var i = _.createBid(e.bidderCode, t)
          , o = parseInt(e.pubmaticServerErrorCode);
        return i.setGrossEcpm(e.cpm),
        i.setDealID(e.dealId),
        i.setDealChannel(e.dealChannel),
        i.setAdHtml(e.ad || ""),
        i.setAdUrl(e.adUrl || ""),
        i.setWidth(e.width),
        i.setHeight(e.height),
        i.setReceivedTime(e.responseTimestamp),
        i.setServerSideResponseTime(e.serverSideResponseTime),
        1 === o || 2 === o ? (i.setDefaultBidStatus(0),
        i.setWidth(0),
        i.setHeight(0)) : 3 === o || 5 === o ? (i.setDefaultBidStatus(1),
        i.setPostTimeoutStatus()) : o && i.setDefaultBidStatus(1),
        g.forEachOnObject(e.adserverTargeting, (function(e, t) {
            "hb_format" !== e && "hb_source" !== e && i.setKeyValuePair(e, t)
        }
        )),
        i
    }
    function n(e) {
        var t = e.adUnitCode || "";
        if (g.isOwnProperty(w.kgpvMap, t)) {
            if ("pubmaticServer" === e.bidderCode && (e.bidderCode = e.originalBidder),
            e.bidderCode && u.isServerSideAdapter(e.bidderCode)) {
                var i = w.kgpvMap[t].divID
                  , o = w.getPBCodeWithWidthAndHeight(i, e.bidderCode, e.width, e.height)
                  , n = w.getPBCodeWithoutWidthAndHeight(i, e.bidderCode);
                if (g.isOwnProperty(w.kgpvMap, o))
                    t = o;
                else {
                    if (!g.isOwnProperty(w.kgpvMap, n))
                        return g.log("Failed to find kgpv details for S2S-adapter:" + e.bidderCode),
                        void 0;
                    t = n
                }
                e.ss = u.isServerSideAdapter(e.bidderCode) ? 1 : 0
            }
            e.bidderCode && I.setBidFromBidder(w.kgpvMap[t].divID, w.transformPBBidToOWBid(e, w.kgpvMap[t].kgpv))
        } else
            g.log("Failed to find pbBid.adUnitCode in kgpvMap, pbBid.adUnitCode:" + e.adUnitCode)
    }
    function r(e) {
        for (var t in e)
            if (g.isOwnProperty(e, t) && g.isOwnProperty(w.kgpvMap, t))
                for (var i = e[t], n = i.bids || [], r = 0; r < n.length; r++) {
                    var s = n[r];
                    s.bidderCode && I.setBidFromBidder(w.kgpvMap[t].divID, o(s, w.kgpvMap[t].kgpv))
                }
    }
    function s(e, t, i, o) {
        return e + "@" + t + "@" + i + "X" + o
    }
    function a(e, t) {
        return e + "@" + t
    }
    function d(e, t, i, o, n, r, s, a, d, p) {
        var l, c, m = s.getDivID();
        if (r ? (l = w.getPBCodeWithWidthAndHeight(m, e, d, p),
        c = [[d, p]]) : (l = w.getPBCodeWithoutWidthAndHeight(m, e),
        c = s.getSizes()),
        w.kgpvMap[l] = {
            kgpv: n,
            divID: m
        },
        u.isServerSideAdapter(e))
            return g.log("Not calling adapter: " + e + ", for " + n + ", as it is serverSideEnabled."),
            void 0;
        g.isOwnProperty(t, l) || (t[l] = {
            code: l,
            mediaType: "banner",
            sizes: c,
            bids: []
        });
        var _ = {};
        switch (g.forEachOnObject(a, (function(e, t) {
            _[e] = t
        }
        )),
        e) {
        case "pubmaticServer":
            _.publisherId = i.publisherId,
            _.adUnitIndex = "" + s.getAdUnitIndex(),
            _.adUnitId = s.getAdUnitID(),
            _.divId = s.getDivID(),
            _.adSlot = n,
            _.wiid = o,
            _.profId = u.getProfileID(),
            window.PWT.udpv && (_.verId = u.getProfileDisplayVersionID()),
            t[l].bids.push({
                bidder: e,
                params: _
            });
            break;
        case "pubmatic":
            _.publisherId = i.publisherId,
            _.adSlot = n,
            _.wiid = o,
            _.profId = u.getProfileID(),
            window.PWT.udpv && (_.verId = u.getProfileDisplayVersionID()),
            t[l].bids.push({
                bidder: e,
                params: _
            });
            break;
        case "pulsepoint":
            g.forEachOnArray(c, (function(i, o) {
                var n = {};
                g.forEachOnObject(a, (function(e, t) {
                    n[e] = t
                }
                )),
                n.cf = o[0] + "x" + o[1],
                t[l].bids.push({
                    bidder: e,
                    params: n
                })
            }
            ));
            break;
        case "adg":
            g.forEachOnArray(c, (function(i, o) {
                var n = {};
                g.forEachOnObject(a, (function(e, t) {
                    n[e] = t
                }
                )),
                n.width = o[0],
                n.height = o[1],
                t[l].bids.push({
                    bidder: e,
                    params: n
                })
            }
            ));
            break;
        case "yieldlab":
            g.forEachOnArray(c, (function(i, o) {
                var n = {};
                g.forEachOnObject(a, (function(e, t) {
                    n[e] = t
                }
                )),
                n.adSize = o[0] + "x" + o[1],
                t[l].bids.push({
                    bidder: e,
                    params: n
                })
            }
            ));
            break;
        case "indexExchange":
            g.forEachOnArray(c, (function(i, o) {
                var n = {};
                a.siteID && (n.siteId = a.siteID),
                n.size = o,
                t[l].bids.push({
                    bidder: e,
                    params: n
                })
            }
            ));
            break;
        default:
            t[l].bids.push({
                bidder: e,
                params: _
            })
        }
    }
    function p(e, t, i, o, n) {
        g.log(e + m.MESSAGES.M1),
        t && g.forEachGeneratedKey(e, o, t, n, [], i, t[m.CONFIG.KEY_GENERATION_PATTERN], t[m.CONFIG.KEY_LOOKUP_MAP] || null, w.generatedKeyCallback, !0)
    }
    function l(e, t) {
        console.log("The start of prebid code execution: ", (new Date()).getTime());
        window.pwtCreatePrebidNamespace(h);
        console.log("The end of prebid code execution: ", (new Date()).getTime());
        if (!window[h])
            return g.log("PreBid js is not loaded"),
            void 0;
        if (!g.isFunction(window[h].onEvent))
            return g.log("PreBid js onEvent method is not available"),
            void 0;
        window[h].onEvent("bidResponse", w.pbBidStreamHandler),
        window[h].logging = g.isDebugLogEnabled();
        var i = {}
          , o = f.getRandomNumberBelow100();
        u.forEachAdapter((function(n, r) {
            n !== w.parentAdapterID && (u.isServerSideAdapter(n) || 0 == f.throttleAdapter(o, n) ? (f.setInitTimeForSlotsForAdapter(e, n),
            w.generatePbConf(n, r, e, i, t)) : g.log(n + m.MESSAGES.M2))
        }
        ));
        var n = [];
        for (var r in i)
            g.isOwnProperty(i, r) && n.push(i[r]);
        if (n.length > 0 && window[h])
            try {
                if (g.isFunction(window[h].setConfig)) {
                    var s = {
                        debug: g.isDebugLogEnabled(),
                        bidderSequence: "random",
                        userSync: {
                            iframeEnabled: !0,
                            pixelEnabled: !0,
                            enabledBidders: (function() {
                                var e = [];
                                return u.forEachAdapter((function(t) {
                                    e.push(t)
                                }
                                )),
                                e
                            }
                            )(),
                            syncDelay: 2e3
                        },
                        disableAjaxTimeout: u.getDisableAjaxTimeout()
                    };
                    u.getGdpr() && (s.consentManagement = {
                        cmpApi: u.getCmpApi(),
                        timeout: u.getGdprTimeout(),
                        allowAuctionWithoutConsent: u.getAwc()
                    }),
                    window[h].setConfig(s)
                }
                if (!g.isFunction(window[h].requestBids))
                    return g.log("PreBid js requestBids function is not available"),
                    void 0;
                window[h].requestBids({
                    adUnits: n,
                    bidsBackHandler: function(e) {
                        g.log("In PreBid bidsBackHandler with bidResponses: "),
                        g.log(e)
                    },
                    timeout: u.getTimeout() - 50
                })
            } catch (a) {
                g.log("Error occured in calling PreBid."),
                g.log(a)
            }
    }
    function c() {
        return w.parentAdapterID
    }
    var u = i(4)
      , m = i(2)
      , _ = i(3)
      , g = i(1)
      , I = i(6)
      , f = i(11)
      , x = (i(5),
    m.COMMON.PARENT_ADAPTER_PREBID)
      , h = "pbjs";
    t.parentAdapterID = x;
    var b = {};
    t.kgpvMap = b;
    var w = this;
    t.transformPBBidToOWBid = o,
    t.pbBidStreamHandler = n,
    t.handleBidResponses = r,
    t.getPBCodeWithWidthAndHeight = s,
    t.getPBCodeWithoutWidthAndHeight = a,
    t.generatedKeyCallback = d,
    t.generatePbConf = p,
    t.fetchBids = l,
    t.getParenteAdapterID = c,
    t.register = function() {
        return {
            fB: w.fetchBids,
            ID: w.getParenteAdapterID
        }
    }
}
), (function(e, t, i) {
    function o(e) {
        this.name = e,
        this.status = n.SLOT_STATUS.CREATED,
        this.divID = "",
        this.adUnitID = "",
        this.adUnitIndex = 0,
        this.sizes = [],
        this.keyValues = {},
        this.arguments = [],
        this.pubAdServerObject = null,
        this.displayFunctionCalled = !1,
        this.refreshFunctionCalled = !1
    }
    var n = i(2);
    o.prototype.getName = function() {
        return this.name
    }
    ,
    o.prototype.setStatus = function(e) {
        return this.status = e,
        this
    }
    ,
    o.prototype.getStatus = function() {
        return this.status
    }
    ,
    o.prototype.setDivID = function(e) {
        return this.divID = e,
        this
    }
    ,
    o.prototype.getDivID = function() {
        return this.divID
    }
    ,
    o.prototype.setAdUnitID = function(e) {
        return this.adUnitID = e,
        this
    }
    ,
    o.prototype.getAdUnitID = function() {
        return this.adUnitID
    }
    ,
    o.prototype.setAdUnitIndex = function(e) {
        return this.adUnitIndex = e,
        this
    }
    ,
    o.prototype.getAdUnitIndex = function() {
        return this.adUnitIndex
    }
    ,
    o.prototype.setSizes = function(e) {
        return this.sizes = e,
        this
    }
    ,
    o.prototype.getSizes = function() {
        return this.sizes
    }
    ,
    o.prototype.setKeyValue = function(e, t) {
        return this.keyValues[e] = t,
        this
    }
    ,
    o.prototype.setKeyValues = function(e) {
        return this.keyValues = e,
        this
    }
    ,
    o.prototype.getkeyValues = function() {
        return this.keyValues
    }
    ,
    o.prototype.setArguments = function(e) {
        return this.arguments = e,
        this
    }
    ,
    o.prototype.getArguments = function() {
        return this.arguments
    }
    ,
    o.prototype.setPubAdServerObject = function(e) {
        return this.pubAdServerObject = e,
        this
    }
    ,
    o.prototype.getPubAdServerObject = function() {
        return this.pubAdServerObject
    }
    ,
    o.prototype.setDisplayFunctionCalled = function(e) {
        return this.displayFunctionCalled = e,
        this
    }
    ,
    o.prototype.isDisplayFunctionCalled = function() {
        return this.displayFunctionCalled
    }
    ,
    o.prototype.setRefreshFunctionCalled = function(e) {
        return this.refreshFunctionCalled = e,
        this
    }
    ,
    o.prototype.isRefreshFunctionCalled = function() {
        return this.refreshFunctionCalled
    }
    ,
    o.prototype.updateStatusAfterRendering = function(e) {
        this.status = n.SLOT_STATUS.DISPLAYED,
        this.arguments = [],
        e ? this.refreshFunctionCalled = !1 : this.displayFunctionCalled = !1
    }
    ,
    e.exports.Slot = o,
    t.createSlot = function(e) {
        return new o(e)
    }
}
)]);
console.log("The end of OW code execution: ", (new Date()).getTime());