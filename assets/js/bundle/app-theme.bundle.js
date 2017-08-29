webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

/*
 * blueimp helper JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, window, document */

;(function () {
  'use strict';

  function extend(obj1, obj2) {
    var prop;
    for (prop in obj2) {
      if (obj2.hasOwnProperty(prop)) {
        obj1[prop] = obj2[prop];
      }
    }
    return obj1;
  }

  function Helper(query) {
    if (!this || this.find !== Helper.prototype.find) {
      // Called as function instead of as constructor,
      // so we simply return a new instance:
      return new Helper(query);
    }
    this.length = 0;
    if (query) {
      if (typeof query === 'string') {
        query = this.find(query);
      }
      if (query.nodeType || query === query.window) {
        // Single HTML element
        this.length = 1;
        this[0] = query;
      } else {
        // HTML element collection
        var i = query.length;
        this.length = i;
        while (i) {
          i -= 1;
          this[i] = query[i];
        }
      }
    }
  }

  Helper.extend = extend;

  Helper.contains = function (container, element) {
    do {
      element = element.parentNode;
      if (element === container) {
        return true;
      }
    } while (element);
    return false;
  };

  Helper.parseJSON = function (string) {
    return window.JSON && JSON.parse(string);
  };

  extend(Helper.prototype, {
    find: function find(query) {
      var container = this[0] || document;
      if (typeof query === 'string') {
        if (container.querySelectorAll) {
          query = container.querySelectorAll(query);
        } else if (query.charAt(0) === '#') {
          query = container.getElementById(query.slice(1));
        } else {
          query = container.getElementsByTagName(query);
        }
      }
      return new Helper(query);
    },

    hasClass: function hasClass(className) {
      if (!this[0]) {
        return false;
      }
      return new RegExp('(^|\\s+)' + className + '(\\s+|$)').test(this[0].className);
    },

    addClass: function addClass(className) {
      var i = this.length;
      var element;
      while (i) {
        i -= 1;
        element = this[i];
        if (!element.className) {
          element.className = className;
          return this;
        }
        if (this.hasClass(className)) {
          return this;
        }
        element.className += ' ' + className;
      }
      return this;
    },

    removeClass: function removeClass(className) {
      var regexp = new RegExp('(^|\\s+)' + className + '(\\s+|$)');
      var i = this.length;
      var element;
      while (i) {
        i -= 1;
        element = this[i];
        element.className = element.className.replace(regexp, ' ');
      }
      return this;
    },

    on: function on(eventName, handler) {
      var eventNames = eventName.split(/\s+/);
      var i;
      var element;
      while (eventNames.length) {
        eventName = eventNames.shift();
        i = this.length;
        while (i) {
          i -= 1;
          element = this[i];
          if (element.addEventListener) {
            element.addEventListener(eventName, handler, false);
          } else if (element.attachEvent) {
            element.attachEvent('on' + eventName, handler);
          }
        }
      }
      return this;
    },

    off: function off(eventName, handler) {
      var eventNames = eventName.split(/\s+/);
      var i;
      var element;
      while (eventNames.length) {
        eventName = eventNames.shift();
        i = this.length;
        while (i) {
          i -= 1;
          element = this[i];
          if (element.removeEventListener) {
            element.removeEventListener(eventName, handler, false);
          } else if (element.detachEvent) {
            element.detachEvent('on' + eventName, handler);
          }
        }
      }
      return this;
    },

    empty: function empty() {
      var i = this.length;
      var element;
      while (i) {
        i -= 1;
        element = this[i];
        while (element.hasChildNodes()) {
          element.removeChild(element.lastChild);
        }
      }
      return this;
    },

    first: function first() {
      return new Helper(this[0]);
    }

  });

  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
      return Helper;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    window.blueimp = window.blueimp || {};
    window.blueimp.helper = Helper;
  }
})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

!function () {
  "use strict";
  function t(t, e) {
    var i;for (i in e) {
      e.hasOwnProperty(i) && (t[i] = e[i]);
    }return t;
  }function e(t) {
    if (!this || this.find !== e.prototype.find) return new e(t);if (this.length = 0, t) if ("string" == typeof t && (t = this.find(t)), t.nodeType || t === t.window) this.length = 1, this[0] = t;else {
      var i = t.length;for (this.length = i; i;) {
        i -= 1, this[i] = t[i];
      }
    }
  }e.extend = t, e.contains = function (t, e) {
    do {
      if (e = e.parentNode, e === t) return !0;
    } while (e);return !1;
  }, e.parseJSON = function (t) {
    return window.JSON && JSON.parse(t);
  }, t(e.prototype, { find: function find(t) {
      var i = this[0] || document;return "string" == typeof t && (t = i.querySelectorAll ? i.querySelectorAll(t) : "#" === t.charAt(0) ? i.getElementById(t.slice(1)) : i.getElementsByTagName(t)), new e(t);
    }, hasClass: function hasClass(t) {
      return !!this[0] && new RegExp("(^|\\s+)" + t + "(\\s+|$)").test(this[0].className);
    }, addClass: function addClass(t) {
      for (var e, i = this.length; i;) {
        if (i -= 1, e = this[i], !e.className) return e.className = t, this;if (this.hasClass(t)) return this;e.className += " " + t;
      }return this;
    }, removeClass: function removeClass(t) {
      for (var e, i = new RegExp("(^|\\s+)" + t + "(\\s+|$)"), s = this.length; s;) {
        s -= 1, e = this[s], e.className = e.className.replace(i, " ");
      }return this;
    }, on: function on(t, e) {
      for (var i, s, n = t.split(/\s+/); n.length;) {
        for (t = n.shift(), i = this.length; i;) {
          i -= 1, s = this[i], s.addEventListener ? s.addEventListener(t, e, !1) : s.attachEvent && s.attachEvent("on" + t, e);
        }
      }return this;
    }, off: function off(t, e) {
      for (var i, s, n = t.split(/\s+/); n.length;) {
        for (t = n.shift(), i = this.length; i;) {
          i -= 1, s = this[i], s.removeEventListener ? s.removeEventListener(t, e, !1) : s.detachEvent && s.detachEvent("on" + t, e);
        }
      }return this;
    }, empty: function empty() {
      for (var t, e = this.length; e;) {
        for (e -= 1, t = this[e]; t.hasChildNodes();) {
          t.removeChild(t.lastChild);
        }
      }return this;
    }, first: function first() {
      return new e(this[0]);
    } }),  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return e;
  }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (window.blueimp = window.blueimp || {}, window.blueimp.helper = e);
}(), function (t) {
  "use strict";
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (window.blueimp = window.blueimp || {}, window.blueimp.Gallery = t(window.blueimp.helper || window.jQuery));
}(function (t) {
  "use strict";
  function e(t, i) {
    return void 0 === document.body.style.maxHeight ? null : this && this.options === e.prototype.options ? t && t.length ? (this.list = t, this.num = t.length, this.initOptions(i), void this.initialize()) : void this.console.log("blueimp Gallery: No or empty list provided as first argument.", t) : new e(t, i);
  }return t.extend(e.prototype, { options: { container: "#blueimp-gallery", slidesContainer: "div", titleElement: "h3", displayClass: "blueimp-gallery-display", controlsClass: "blueimp-gallery-controls", singleClass: "blueimp-gallery-single", leftEdgeClass: "blueimp-gallery-left", rightEdgeClass: "blueimp-gallery-right", playingClass: "blueimp-gallery-playing", slideClass: "slide", slideLoadingClass: "slide-loading", slideErrorClass: "slide-error", slideContentClass: "slide-content", toggleClass: "toggle", prevClass: "prev", nextClass: "next", closeClass: "close", playPauseClass: "play-pause", typeProperty: "type", titleProperty: "title", urlProperty: "href", srcsetProperty: "urlset", displayTransition: !0, clearSlides: !0, stretchImages: !1, toggleControlsOnReturn: !0, toggleControlsOnSlideClick: !0, toggleSlideshowOnSpace: !0, enableKeyboardNavigation: !0, closeOnEscape: !0, closeOnSlideClick: !0, closeOnSwipeUpOrDown: !0, emulateTouchEvents: !0, stopTouchEventsPropagation: !1, hidePageScrollbars: !0, disableScroll: !0, carousel: !1, continuous: !0, unloadElements: !0, startSlideshow: !1, slideshowInterval: 5e3, index: 0, preloadRange: 2, transitionSpeed: 400, slideshowTransitionSpeed: void 0, event: void 0, onopen: void 0, onopened: void 0, onslide: void 0, onslideend: void 0, onslidecomplete: void 0, onclose: void 0, onclosed: void 0 }, carouselOptions: { hidePageScrollbars: !1, toggleControlsOnReturn: !1, toggleSlideshowOnSpace: !1, enableKeyboardNavigation: !1, closeOnEscape: !1, closeOnSlideClick: !1, closeOnSwipeUpOrDown: !1, disableScroll: !1, startSlideshow: !0 }, console: window.console && "function" == typeof window.console.log ? window.console : { log: function log() {} }, support: function (e) {
      function i() {
        var t,
            i,
            s = n.transition;document.body.appendChild(e), s && (t = s.name.slice(0, -9) + "ransform", void 0 !== e.style[t] && (e.style[t] = "translateZ(0)", i = window.getComputedStyle(e).getPropertyValue(s.prefix + "transform"), n.transform = { prefix: s.prefix, name: t, translate: !0, translateZ: !!i && "none" !== i })), void 0 !== e.style.backgroundSize && (n.backgroundSize = {}, e.style.backgroundSize = "contain", n.backgroundSize.contain = "contain" === window.getComputedStyle(e).getPropertyValue("background-size"), e.style.backgroundSize = "cover", n.backgroundSize.cover = "cover" === window.getComputedStyle(e).getPropertyValue("background-size")), document.body.removeChild(e);
      }var s,
          n = { touch: void 0 !== window.ontouchstart || window.DocumentTouch && document instanceof DocumentTouch },
          o = { webkitTransition: { end: "webkitTransitionEnd", prefix: "-webkit-" }, MozTransition: { end: "transitionend", prefix: "-moz-" }, OTransition: { end: "otransitionend", prefix: "-o-" }, transition: { end: "transitionend", prefix: "" } };for (s in o) {
        if (o.hasOwnProperty(s) && void 0 !== e.style[s]) {
          n.transition = o[s], n.transition.name = s;break;
        }
      }return document.body ? i() : t(document).on("DOMContentLoaded", i), n;
    }(document.createElement("div")), requestAnimationFrame: window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame, initialize: function initialize() {
      return this.initStartIndex(), this.initWidget() !== !1 && (this.initEventListeners(), this.onslide(this.index), this.ontransitionend(), void (this.options.startSlideshow && this.play()));
    }, slide: function slide(t, e) {
      window.clearTimeout(this.timeout);var i,
          s,
          n,
          o = this.index;if (o !== t && 1 !== this.num) {
        if (e || (e = this.options.transitionSpeed), this.support.transform) {
          for (this.options.continuous || (t = this.circle(t)), i = Math.abs(o - t) / (o - t), this.options.continuous && (s = i, i = -this.positions[this.circle(t)] / this.slideWidth, i !== s && (t = -i * this.num + t)), n = Math.abs(o - t) - 1; n;) {
            n -= 1, this.move(this.circle((t > o ? t : o) - n - 1), this.slideWidth * i, 0);
          }t = this.circle(t), this.move(o, this.slideWidth * i, e), this.move(t, 0, e), this.options.continuous && this.move(this.circle(t - i), -(this.slideWidth * i), 0);
        } else t = this.circle(t), this.animate(o * -this.slideWidth, t * -this.slideWidth, e);this.onslide(t);
      }
    }, getIndex: function getIndex() {
      return this.index;
    }, getNumber: function getNumber() {
      return this.num;
    }, prev: function prev() {
      (this.options.continuous || this.index) && this.slide(this.index - 1);
    }, next: function next() {
      (this.options.continuous || this.index < this.num - 1) && this.slide(this.index + 1);
    }, play: function play(t) {
      var e = this;window.clearTimeout(this.timeout), this.interval = t || this.options.slideshowInterval, this.elements[this.index] > 1 && (this.timeout = this.setTimeout(!this.requestAnimationFrame && this.slide || function (t, i) {
        e.animationFrameId = e.requestAnimationFrame.call(window, function () {
          e.slide(t, i);
        });
      }, [this.index + 1, this.options.slideshowTransitionSpeed], this.interval)), this.container.addClass(this.options.playingClass);
    }, pause: function pause() {
      window.clearTimeout(this.timeout), this.interval = null, this.container.removeClass(this.options.playingClass);
    }, add: function add(t) {
      var e;for (t.concat || (t = Array.prototype.slice.call(t)), this.list.concat || (this.list = Array.prototype.slice.call(this.list)), this.list = this.list.concat(t), this.num = this.list.length, this.num > 2 && null === this.options.continuous && (this.options.continuous = !0, this.container.removeClass(this.options.leftEdgeClass)), this.container.removeClass(this.options.rightEdgeClass).removeClass(this.options.singleClass), e = this.num - t.length; e < this.num; e += 1) {
        this.addSlide(e), this.positionSlide(e);
      }this.positions.length = this.num, this.initSlides(!0);
    }, resetSlides: function resetSlides() {
      this.slidesContainer.empty(), this.unloadAllSlides(), this.slides = [];
    }, handleClose: function handleClose() {
      var t = this.options;this.destroyEventListeners(), this.pause(), this.container[0].style.display = "none", this.container.removeClass(t.displayClass).removeClass(t.singleClass).removeClass(t.leftEdgeClass).removeClass(t.rightEdgeClass), t.hidePageScrollbars && (document.body.style.overflow = this.bodyOverflowStyle), this.options.clearSlides && this.resetSlides(), this.options.onclosed && this.options.onclosed.call(this);
    }, close: function close() {
      function t(i) {
        i.target === e.container[0] && (e.container.off(e.support.transition.end, t), e.handleClose());
      }var e = this;this.options.onclose && this.options.onclose.call(this), this.support.transition && this.options.displayTransition ? (this.container.on(this.support.transition.end, t), this.container.removeClass(this.options.displayClass)) : this.handleClose();
    }, circle: function circle(t) {
      return (this.num + t % this.num) % this.num;
    }, move: function move(t, e, i) {
      this.translateX(t, e, i), this.positions[t] = e;
    }, translate: function translate(t, e, i, s) {
      var n = this.slides[t].style,
          o = this.support.transition,
          r = this.support.transform;n[o.name + "Duration"] = s + "ms", n[r.name] = "translate(" + e + "px, " + i + "px)" + (r.translateZ ? " translateZ(0)" : "");
    }, translateX: function translateX(t, e, i) {
      this.translate(t, e, 0, i);
    }, translateY: function translateY(t, e, i) {
      this.translate(t, 0, e, i);
    }, animate: function animate(t, e, i) {
      if (!i) return void (this.slidesContainer[0].style.left = e + "px");var s = this,
          n = new Date().getTime(),
          o = window.setInterval(function () {
        var r = new Date().getTime() - n;return r > i ? (s.slidesContainer[0].style.left = e + "px", s.ontransitionend(), void window.clearInterval(o)) : void (s.slidesContainer[0].style.left = (e - t) * (Math.floor(r / i * 100) / 100) + t + "px");
      }, 4);
    }, preventDefault: function preventDefault(t) {
      t.preventDefault ? t.preventDefault() : t.returnValue = !1;
    }, stopPropagation: function stopPropagation(t) {
      t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0;
    }, onresize: function onresize() {
      this.initSlides(!0);
    }, onmousedown: function onmousedown(t) {
      t.which && 1 === t.which && "VIDEO" !== t.target.nodeName && (t.preventDefault(), (t.originalEvent || t).touches = [{ pageX: t.pageX, pageY: t.pageY }], this.ontouchstart(t));
    }, onmousemove: function onmousemove(t) {
      this.touchStart && ((t.originalEvent || t).touches = [{ pageX: t.pageX, pageY: t.pageY }], this.ontouchmove(t));
    }, onmouseup: function onmouseup(t) {
      this.touchStart && (this.ontouchend(t), delete this.touchStart);
    }, onmouseout: function onmouseout(e) {
      if (this.touchStart) {
        var i = e.target,
            s = e.relatedTarget;s && (s === i || t.contains(i, s)) || this.onmouseup(e);
      }
    }, ontouchstart: function ontouchstart(t) {
      this.options.stopTouchEventsPropagation && this.stopPropagation(t);var e = (t.originalEvent || t).touches[0];this.touchStart = { x: e.pageX, y: e.pageY, time: Date.now() }, this.isScrolling = void 0, this.touchDelta = {};
    }, ontouchmove: function ontouchmove(t) {
      this.options.stopTouchEventsPropagation && this.stopPropagation(t);var e,
          i,
          s = (t.originalEvent || t).touches[0],
          n = (t.originalEvent || t).scale,
          o = this.index;if (!(s.length > 1 || n && 1 !== n)) if (this.options.disableScroll && t.preventDefault(), this.touchDelta = { x: s.pageX - this.touchStart.x, y: s.pageY - this.touchStart.y }, e = this.touchDelta.x, void 0 === this.isScrolling && (this.isScrolling = this.isScrolling || Math.abs(e) < Math.abs(this.touchDelta.y)), this.isScrolling) this.translateY(o, this.touchDelta.y + this.positions[o], 0);else for (t.preventDefault(), window.clearTimeout(this.timeout), this.options.continuous ? i = [this.circle(o + 1), o, this.circle(o - 1)] : (this.touchDelta.x = e /= !o && e > 0 || o === this.num - 1 && e < 0 ? Math.abs(e) / this.slideWidth + 1 : 1, i = [o], o && i.push(o - 1), o < this.num - 1 && i.unshift(o + 1)); i.length;) {
        o = i.pop(), this.translateX(o, e + this.positions[o], 0);
      }
    }, ontouchend: function ontouchend(t) {
      this.options.stopTouchEventsPropagation && this.stopPropagation(t);var e,
          i,
          s,
          n,
          o,
          r = this.index,
          a = this.options.transitionSpeed,
          l = this.slideWidth,
          h = Number(Date.now() - this.touchStart.time) < 250,
          d = h && Math.abs(this.touchDelta.x) > 20 || Math.abs(this.touchDelta.x) > l / 2,
          c = !r && this.touchDelta.x > 0 || r === this.num - 1 && this.touchDelta.x < 0,
          u = !d && this.options.closeOnSwipeUpOrDown && (h && Math.abs(this.touchDelta.y) > 20 || Math.abs(this.touchDelta.y) > this.slideHeight / 2);this.options.continuous && (c = !1), e = this.touchDelta.x < 0 ? -1 : 1, this.isScrolling ? u ? this.close() : this.translateY(r, 0, a) : d && !c ? (i = r + e, s = r - e, n = l * e, o = -l * e, this.options.continuous ? (this.move(this.circle(i), n, 0), this.move(this.circle(r - 2 * e), o, 0)) : i >= 0 && i < this.num && this.move(i, n, 0), this.move(r, this.positions[r] + n, a), this.move(this.circle(s), this.positions[this.circle(s)] + n, a), r = this.circle(s), this.onslide(r)) : this.options.continuous ? (this.move(this.circle(r - 1), -l, a), this.move(r, 0, a), this.move(this.circle(r + 1), l, a)) : (r && this.move(r - 1, -l, a), this.move(r, 0, a), r < this.num - 1 && this.move(r + 1, l, a));
    }, ontouchcancel: function ontouchcancel(t) {
      this.touchStart && (this.ontouchend(t), delete this.touchStart);
    }, ontransitionend: function ontransitionend(t) {
      var e = this.slides[this.index];t && e !== t.target || (this.interval && this.play(), this.setTimeout(this.options.onslideend, [this.index, e]));
    }, oncomplete: function oncomplete(e) {
      var i,
          s = e.target || e.srcElement,
          n = s && s.parentNode;s && n && (i = this.getNodeIndex(n), t(n).removeClass(this.options.slideLoadingClass), "error" === e.type ? (t(n).addClass(this.options.slideErrorClass), this.elements[i] = 3) : this.elements[i] = 2, s.clientHeight > this.container[0].clientHeight && (s.style.maxHeight = this.container[0].clientHeight), this.interval && this.slides[this.index] === n && this.play(), this.setTimeout(this.options.onslidecomplete, [i, n]));
    }, onload: function onload(t) {
      this.oncomplete(t);
    }, onerror: function onerror(t) {
      this.oncomplete(t);
    }, onkeydown: function onkeydown(t) {
      switch (t.which || t.keyCode) {case 13:
          this.options.toggleControlsOnReturn && (this.preventDefault(t), this.toggleControls());break;case 27:
          this.options.closeOnEscape && (this.close(), t.stopImmediatePropagation());break;case 32:
          this.options.toggleSlideshowOnSpace && (this.preventDefault(t), this.toggleSlideshow());break;case 37:
          this.options.enableKeyboardNavigation && (this.preventDefault(t), this.prev());break;case 39:
          this.options.enableKeyboardNavigation && (this.preventDefault(t), this.next());}
    }, handleClick: function handleClick(e) {
      function i(e) {
        return t(n).hasClass(e) || t(o).hasClass(e);
      }var s = this.options,
          n = e.target || e.srcElement,
          o = n.parentNode;i(s.toggleClass) ? (this.preventDefault(e), this.toggleControls()) : i(s.prevClass) ? (this.preventDefault(e), this.prev()) : i(s.nextClass) ? (this.preventDefault(e), this.next()) : i(s.closeClass) ? (this.preventDefault(e), this.close()) : i(s.playPauseClass) ? (this.preventDefault(e), this.toggleSlideshow()) : o === this.slidesContainer[0] ? s.closeOnSlideClick ? (this.preventDefault(e), this.close()) : s.toggleControlsOnSlideClick && (this.preventDefault(e), this.toggleControls()) : o.parentNode && o.parentNode === this.slidesContainer[0] && s.toggleControlsOnSlideClick && (this.preventDefault(e), this.toggleControls());
    }, onclick: function onclick(t) {
      return this.options.emulateTouchEvents && this.touchDelta && (Math.abs(this.touchDelta.x) > 20 || Math.abs(this.touchDelta.y) > 20) ? void delete this.touchDelta : this.handleClick(t);
    }, updateEdgeClasses: function updateEdgeClasses(t) {
      t ? this.container.removeClass(this.options.leftEdgeClass) : this.container.addClass(this.options.leftEdgeClass), t === this.num - 1 ? this.container.addClass(this.options.rightEdgeClass) : this.container.removeClass(this.options.rightEdgeClass);
    }, handleSlide: function handleSlide(t) {
      this.options.continuous || this.updateEdgeClasses(t), this.loadElements(t), this.options.unloadElements && this.unloadElements(t), this.setTitle(t);
    }, onslide: function onslide(t) {
      this.index = t, this.handleSlide(t), this.setTimeout(this.options.onslide, [t, this.slides[t]]);
    }, setTitle: function setTitle(t) {
      var e = this.slides[t].firstChild.title,
          i = this.titleElement;i.length && (this.titleElement.empty(), e && i[0].appendChild(document.createTextNode(e)));
    }, setTimeout: function setTimeout(t, e, i) {
      var s = this;return t && window.setTimeout(function () {
        t.apply(s, e || []);
      }, i || 0);
    }, imageFactory: function imageFactory(e, i) {
      function s(e) {
        if (!n) {
          if (e = { type: e.type, target: o }, !o.parentNode) return a.setTimeout(s, [e]);n = !0, t(l).off("load error", s), d && "load" === e.type && (o.style.background = 'url("' + h + '") center no-repeat', o.style.backgroundSize = d), i(e);
        }
      }var n,
          o,
          r,
          a = this,
          l = this.imagePrototype.cloneNode(!1),
          h = e,
          d = this.options.stretchImages;return "string" != typeof h && (h = this.getItemProperty(e, this.options.urlProperty), r = this.getItemProperty(e, this.options.titleProperty)), d === !0 && (d = "contain"), d = this.support.backgroundSize && this.support.backgroundSize[d] && d, d ? o = this.elementPrototype.cloneNode(!1) : (o = l, l.draggable = !1), r && (o.title = r), t(l).on("load error", s), l.src = h, o;
    }, createElement: function createElement(e, i) {
      var s = e && this.getItemProperty(e, this.options.typeProperty),
          n = s && this[s.split("/")[0] + "Factory"] || this.imageFactory,
          o = e && n.call(this, e, i),
          r = this.getItemProperty(e, this.options.srcsetProperty);return o || (o = this.elementPrototype.cloneNode(!1), this.setTimeout(i, [{ type: "error", target: o }])), r && o.setAttribute("srcset", r), t(o).addClass(this.options.slideContentClass), o;
    }, loadElement: function loadElement(e) {
      this.elements[e] || (this.slides[e].firstChild ? this.elements[e] = t(this.slides[e]).hasClass(this.options.slideErrorClass) ? 3 : 2 : (this.elements[e] = 1, t(this.slides[e]).addClass(this.options.slideLoadingClass), this.slides[e].appendChild(this.createElement(this.list[e], this.proxyListener))));
    }, loadElements: function loadElements(t) {
      var e,
          i = Math.min(this.num, 2 * this.options.preloadRange + 1),
          s = t;for (e = 0; e < i; e += 1) {
        s += e * (e % 2 === 0 ? -1 : 1), s = this.circle(s), this.loadElement(s);
      }
    }, unloadElements: function unloadElements(t) {
      var e, i;for (e in this.elements) {
        this.elements.hasOwnProperty(e) && (i = Math.abs(t - e), i > this.options.preloadRange && i + this.options.preloadRange < this.num && (this.unloadSlide(e), delete this.elements[e]));
      }
    }, addSlide: function addSlide(t) {
      var e = this.slidePrototype.cloneNode(!1);e.setAttribute("data-index", t), this.slidesContainer[0].appendChild(e), this.slides.push(e);
    }, positionSlide: function positionSlide(t) {
      var e = this.slides[t];e.style.width = this.slideWidth + "px", this.support.transform && (e.style.left = t * -this.slideWidth + "px", this.move(t, this.index > t ? -this.slideWidth : this.index < t ? this.slideWidth : 0, 0));
    }, initSlides: function initSlides(e) {
      var i, s;for (e || (this.positions = [], this.positions.length = this.num, this.elements = {}, this.imagePrototype = document.createElement("img"), this.elementPrototype = document.createElement("div"), this.slidePrototype = document.createElement("div"), t(this.slidePrototype).addClass(this.options.slideClass), this.slides = this.slidesContainer[0].children, i = this.options.clearSlides || this.slides.length !== this.num), this.slideWidth = this.container[0].offsetWidth, this.slideHeight = this.container[0].offsetHeight, this.slidesContainer[0].style.width = this.num * this.slideWidth + "px", i && this.resetSlides(), s = 0; s < this.num; s += 1) {
        i && this.addSlide(s), this.positionSlide(s);
      }this.options.continuous && this.support.transform && (this.move(this.circle(this.index - 1), -this.slideWidth, 0), this.move(this.circle(this.index + 1), this.slideWidth, 0)), this.support.transform || (this.slidesContainer[0].style.left = this.index * -this.slideWidth + "px");
    }, unloadSlide: function unloadSlide(t) {
      var e, i;e = this.slides[t], i = e.firstChild, null !== i && e.removeChild(i);
    }, unloadAllSlides: function unloadAllSlides() {
      var t, e;for (t = 0, e = this.slides.length; t < e; t++) {
        this.unloadSlide(t);
      }
    }, toggleControls: function toggleControls() {
      var t = this.options.controlsClass;this.container.hasClass(t) ? this.container.removeClass(t) : this.container.addClass(t);
    }, toggleSlideshow: function toggleSlideshow() {
      this.interval ? this.pause() : this.play();
    }, getNodeIndex: function getNodeIndex(t) {
      return parseInt(t.getAttribute("data-index"), 10);
    }, getNestedProperty: function getNestedProperty(t, e) {
      return e.replace(/\[(?:'([^']+)'|"([^"]+)"|(\d+))\]|(?:(?:^|\.)([^\.\[]+))/g, function (e, i, s, n, o) {
        var r = o || i || s || n && parseInt(n, 10);e && t && (t = t[r]);
      }), t;
    }, getDataProperty: function getDataProperty(e, i) {
      var s;if (e.dataset ? s = e.dataset[i.replace(/-([a-z])/g, function (t, e) {
        return e.toUpperCase();
      })] : e.getAttribute && (s = e.getAttribute("data-" + i.replace(/([A-Z])/g, "-$1").toLowerCase())), "string" == typeof s) {
        if (/^(true|false|null|-?\d+(\.\d+)?|\{[\s\S]*\}|\[[\s\S]*\])$/.test(s)) try {
          return t.parseJSON(s);
        } catch (t) {}return s;
      }
    }, getItemProperty: function getItemProperty(t, e) {
      var i = this.getDataProperty(t, e);return void 0 === i && (i = t[e]), void 0 === i && (i = this.getNestedProperty(t, e)), i;
    }, initStartIndex: function initStartIndex() {
      var t,
          e = this.options.index,
          i = this.options.urlProperty;if (e && "number" != typeof e) for (t = 0; t < this.num; t += 1) {
        if (this.list[t] === e || this.getItemProperty(this.list[t], i) === this.getItemProperty(e, i)) {
          e = t;break;
        }
      }this.index = this.circle(parseInt(e, 10) || 0);
    }, initEventListeners: function initEventListeners() {
      function e(t) {
        var e = i.support.transition && i.support.transition.end === t.type ? "transitionend" : t.type;i["on" + e](t);
      }var i = this,
          s = this.slidesContainer;t(window).on("resize", e), t(document.body).on("keydown", e), this.container.on("click", e), this.support.touch ? s.on("touchstart touchmove touchend touchcancel", e) : this.options.emulateTouchEvents && this.support.transition && s.on("mousedown mousemove mouseup mouseout", e), this.support.transition && s.on(this.support.transition.end, e), this.proxyListener = e;
    }, destroyEventListeners: function destroyEventListeners() {
      var e = this.slidesContainer,
          i = this.proxyListener;t(window).off("resize", i), t(document.body).off("keydown", i), this.container.off("click", i), this.support.touch ? e.off("touchstart touchmove touchend touchcancel", i) : this.options.emulateTouchEvents && this.support.transition && e.off("mousedown mousemove mouseup mouseout", i), this.support.transition && e.off(this.support.transition.end, i);
    }, handleOpen: function handleOpen() {
      this.options.onopened && this.options.onopened.call(this);
    }, initWidget: function initWidget() {
      function e(t) {
        t.target === i.container[0] && (i.container.off(i.support.transition.end, e), i.handleOpen());
      }var i = this;return this.container = t(this.options.container), this.container.length ? (this.slidesContainer = this.container.find(this.options.slidesContainer).first(), this.slidesContainer.length ? (this.titleElement = this.container.find(this.options.titleElement).first(), 1 === this.num && this.container.addClass(this.options.singleClass), this.options.onopen && this.options.onopen.call(this), this.support.transition && this.options.displayTransition ? this.container.on(this.support.transition.end, e) : this.handleOpen(), this.options.hidePageScrollbars && (this.bodyOverflowStyle = document.body.style.overflow, document.body.style.overflow = "hidden"), this.container[0].style.display = "block", this.initSlides(), void this.container.addClass(this.options.displayClass)) : (this.console.log("blueimp Gallery: Slides container not found.", this.options.slidesContainer), !1)) : (this.console.log("blueimp Gallery: Widget container not found.", this.options.container), !1);
    }, initOptions: function initOptions(e) {
      this.options = t.extend({}, this.options), (e && e.carousel || this.options.carousel && (!e || e.carousel !== !1)) && t.extend(this.options, this.carouselOptions), t.extend(this.options, e), this.num < 3 && (this.options.continuous = !!this.options.continuous && null), this.support.transition || (this.options.emulateTouchEvents = !1), this.options.event && this.preventDefault(this.options.event);
    } }), e;
}), function (t) {
  "use strict";
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery);
}(function (t, e) {
  "use strict";
  t.extend(e.prototype.options, { fullScreen: !1 });var i = e.prototype.initialize,
      s = e.prototype.close;return t.extend(e.prototype, { getFullScreenElement: function getFullScreenElement() {
      return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
    }, requestFullScreen: function requestFullScreen(t) {
      t.requestFullscreen ? t.requestFullscreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.msRequestFullscreen && t.msRequestFullscreen();
    }, exitFullScreen: function exitFullScreen() {
      document.exitFullscreen ? document.exitFullscreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen();
    }, initialize: function initialize() {
      i.call(this), this.options.fullScreen && !this.getFullScreenElement() && this.requestFullScreen(this.container[0]);
    }, close: function close() {
      this.getFullScreenElement() === this.container[0] && this.exitFullScreen(), s.call(this);
    } }), e;
}), function (t) {
  "use strict";
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery);
}(function (t, e) {
  "use strict";
  t.extend(e.prototype.options, { indicatorContainer: "ol", activeIndicatorClass: "active", thumbnailProperty: "thumbnail", thumbnailIndicators: !0 });var i = e.prototype.initSlides,
      s = e.prototype.addSlide,
      n = e.prototype.resetSlides,
      o = e.prototype.handleClick,
      r = e.prototype.handleSlide,
      a = e.prototype.handleClose;return t.extend(e.prototype, { createIndicator: function createIndicator(e) {
      var i,
          s,
          n = this.indicatorPrototype.cloneNode(!1),
          o = this.getItemProperty(e, this.options.titleProperty),
          r = this.options.thumbnailProperty;return this.options.thumbnailIndicators && (r && (i = this.getItemProperty(e, r)), void 0 === i && (s = e.getElementsByTagName && t(e).find("img")[0], s && (i = s.src)), i && (n.style.backgroundImage = 'url("' + i + '")')), o && (n.title = o), n;
    }, addIndicator: function addIndicator(t) {
      if (this.indicatorContainer.length) {
        var e = this.createIndicator(this.list[t]);e.setAttribute("data-index", t), this.indicatorContainer[0].appendChild(e), this.indicators.push(e);
      }
    }, setActiveIndicator: function setActiveIndicator(e) {
      this.indicators && (this.activeIndicator && this.activeIndicator.removeClass(this.options.activeIndicatorClass), this.activeIndicator = t(this.indicators[e]), this.activeIndicator.addClass(this.options.activeIndicatorClass));
    }, initSlides: function initSlides(t) {
      t || (this.indicatorContainer = this.container.find(this.options.indicatorContainer), this.indicatorContainer.length && (this.indicatorPrototype = document.createElement("li"), this.indicators = this.indicatorContainer[0].children)), i.call(this, t);
    }, addSlide: function addSlide(t) {
      s.call(this, t), this.addIndicator(t);
    }, resetSlides: function resetSlides() {
      n.call(this), this.indicatorContainer.empty(), this.indicators = [];
    }, handleClick: function handleClick(t) {
      var e = t.target || t.srcElement,
          i = e.parentNode;if (i === this.indicatorContainer[0]) this.preventDefault(t), this.slide(this.getNodeIndex(e));else {
        if (i.parentNode !== this.indicatorContainer[0]) return o.call(this, t);this.preventDefault(t), this.slide(this.getNodeIndex(i));
      }
    }, handleSlide: function handleSlide(t) {
      r.call(this, t), this.setActiveIndicator(t);
    }, handleClose: function handleClose() {
      this.activeIndicator && this.activeIndicator.removeClass(this.options.activeIndicatorClass), a.call(this);
    } }), e;
}), function (t) {
  "use strict";
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery);
}(function (t, e) {
  "use strict";
  t.extend(e.prototype.options, { videoContentClass: "video-content", videoLoadingClass: "video-loading", videoPlayingClass: "video-playing", videoPosterProperty: "poster", videoSourcesProperty: "sources" });var i = e.prototype.handleSlide;return t.extend(e.prototype, { handleSlide: function handleSlide(t) {
      i.call(this, t), this.playingVideo && this.playingVideo.pause();
    }, videoFactory: function videoFactory(e, i, s) {
      var n,
          o,
          r,
          a,
          l,
          h = this,
          d = this.options,
          c = this.elementPrototype.cloneNode(!1),
          u = t(c),
          p = [{ type: "error", target: c }],
          m = s || document.createElement("video"),
          y = this.getItemProperty(e, d.urlProperty),
          f = this.getItemProperty(e, d.typeProperty),
          g = this.getItemProperty(e, d.titleProperty),
          v = this.getItemProperty(e, d.videoPosterProperty),
          C = this.getItemProperty(e, d.videoSourcesProperty);if (u.addClass(d.videoContentClass), g && (c.title = g), m.canPlayType) if (y && f && m.canPlayType(f)) m.src = y;else if (C) for (; C.length;) {
        if (o = C.shift(), y = this.getItemProperty(o, d.urlProperty), f = this.getItemProperty(o, d.typeProperty), y && f && m.canPlayType(f)) {
          m.src = y;break;
        }
      }return v && (m.poster = v, n = this.imagePrototype.cloneNode(!1), t(n).addClass(d.toggleClass), n.src = v, n.draggable = !1, c.appendChild(n)), r = document.createElement("a"), r.setAttribute("target", "_blank"), s || r.setAttribute("download", g), r.href = y, m.src && (m.controls = !0, (s || t(m)).on("error", function () {
        h.setTimeout(i, p);
      }).on("pause", function () {
        m.seeking || (a = !1, u.removeClass(h.options.videoLoadingClass).removeClass(h.options.videoPlayingClass), l && h.container.addClass(h.options.controlsClass), delete h.playingVideo, h.interval && h.play());
      }).on("playing", function () {
        a = !1, u.removeClass(h.options.videoLoadingClass).addClass(h.options.videoPlayingClass), h.container.hasClass(h.options.controlsClass) ? (l = !0, h.container.removeClass(h.options.controlsClass)) : l = !1;
      }).on("play", function () {
        window.clearTimeout(h.timeout), a = !0, u.addClass(h.options.videoLoadingClass), h.playingVideo = m;
      }), t(r).on("click", function (t) {
        h.preventDefault(t), a ? m.pause() : m.play();
      }), c.appendChild(s && s.element || m)), c.appendChild(r), this.setTimeout(i, [{ type: "load", target: c }]), c;
    } }), e;
}), function (t) {
  "use strict";
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery);
}(function (t, e) {
  "use strict";
  if (!window.postMessage) return e;t.extend(e.prototype.options, { vimeoVideoIdProperty: "vimeo", vimeoPlayerUrl: "//player.vimeo.com/video/VIDEO_ID?api=1&player_id=PLAYER_ID", vimeoPlayerIdPrefix: "vimeo-player-", vimeoClickToPlay: !0 });var i = e.prototype.textFactory || e.prototype.imageFactory,
      s = function s(t, e, i, _s) {
    this.url = t, this.videoId = e, this.playerId = i, this.clickToPlay = _s, this.element = document.createElement("div"), this.listeners = {};
  },
      n = 0;return t.extend(s.prototype, { canPlayType: function canPlayType() {
      return !0;
    }, on: function on(t, e) {
      return this.listeners[t] = e, this;
    }, loadAPI: function loadAPI() {
      function e() {
        !s && n.playOnReady && n.play(), s = !0;
      }for (var i, s, n = this, o = "//f.vimeocdn.com/js/froogaloop2.min.js", r = document.getElementsByTagName("script"), a = r.length; a;) {
        if (a -= 1, r[a].src === o) {
          i = r[a];break;
        }
      }i || (i = document.createElement("script"), i.src = o), t(i).on("load", e), r[0].parentNode.insertBefore(i, r[0]), /loaded|complete/.test(i.readyState) && e();
    }, onReady: function onReady() {
      var t = this;this.ready = !0, this.player.addEvent("play", function () {
        t.hasPlayed = !0, t.onPlaying();
      }), this.player.addEvent("pause", function () {
        t.onPause();
      }), this.player.addEvent("finish", function () {
        t.onPause();
      }), this.playOnReady && this.play();
    }, onPlaying: function onPlaying() {
      this.playStatus < 2 && (this.listeners.playing(), this.playStatus = 2);
    }, onPause: function onPause() {
      this.listeners.pause(), delete this.playStatus;
    }, insertIframe: function insertIframe() {
      var t = document.createElement("iframe");t.src = this.url.replace("VIDEO_ID", this.videoId).replace("PLAYER_ID", this.playerId), t.id = this.playerId, this.element.parentNode.replaceChild(t, this.element), this.element = t;
    }, play: function play() {
      var t = this;this.playStatus || (this.listeners.play(), this.playStatus = 1), this.ready ? !this.hasPlayed && (this.clickToPlay || window.navigator && /iP(hone|od|ad)/.test(window.navigator.platform)) ? this.onPlaying() : this.player.api("play") : (this.playOnReady = !0, window.$f ? this.player || (this.insertIframe(), this.player = $f(this.element), this.player.addEvent("ready", function () {
        t.onReady();
      })) : this.loadAPI());
    }, pause: function pause() {
      this.ready ? this.player.api("pause") : this.playStatus && (delete this.playOnReady, this.listeners.pause(), delete this.playStatus);
    } }), t.extend(e.prototype, { VimeoPlayer: s, textFactory: function textFactory(t, e) {
      var o = this.options,
          r = this.getItemProperty(t, o.vimeoVideoIdProperty);return r ? (void 0 === this.getItemProperty(t, o.urlProperty) && (t[o.urlProperty] = "//vimeo.com/" + r), n += 1, this.videoFactory(t, e, new s(o.vimeoPlayerUrl, r, o.vimeoPlayerIdPrefix + n, o.vimeoClickToPlay))) : i.call(this, t, e);
    } }), e;
}), function (t) {
  "use strict";
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery);
}(function (t, e) {
  "use strict";
  if (!window.postMessage) return e;t.extend(e.prototype.options, { youTubeVideoIdProperty: "youtube", youTubePlayerVars: { wmode: "transparent" }, youTubeClickToPlay: !0 });var i = e.prototype.textFactory || e.prototype.imageFactory,
      s = function s(t, e, i) {
    this.videoId = t, this.playerVars = e, this.clickToPlay = i, this.element = document.createElement("div"), this.listeners = {};
  };return t.extend(s.prototype, { canPlayType: function canPlayType() {
      return !0;
    }, on: function on(t, e) {
      return this.listeners[t] = e, this;
    }, loadAPI: function loadAPI() {
      var t,
          e = this,
          i = window.onYouTubeIframeAPIReady,
          s = "//www.youtube.com/iframe_api",
          n = document.getElementsByTagName("script"),
          o = n.length;for (window.onYouTubeIframeAPIReady = function () {
        i && i.apply(this), e.playOnReady && e.play();
      }; o;) {
        if (o -= 1, n[o].src === s) return;
      }t = document.createElement("script"), t.src = s, n[0].parentNode.insertBefore(t, n[0]);
    }, onReady: function onReady() {
      this.ready = !0, this.playOnReady && this.play();
    }, onPlaying: function onPlaying() {
      this.playStatus < 2 && (this.listeners.playing(), this.playStatus = 2);
    }, onPause: function onPause() {
      e.prototype.setTimeout.call(this, this.checkSeek, null, 2e3);
    }, checkSeek: function checkSeek() {
      this.stateChange !== YT.PlayerState.PAUSED && this.stateChange !== YT.PlayerState.ENDED || (this.listeners.pause(), delete this.playStatus);
    }, onStateChange: function onStateChange(t) {
      switch (t.data) {case YT.PlayerState.PLAYING:
          this.hasPlayed = !0, this.onPlaying();break;case YT.PlayerState.PAUSED:case YT.PlayerState.ENDED:
          this.onPause();}this.stateChange = t.data;
    }, onError: function onError(t) {
      this.listeners.error(t);
    }, play: function play() {
      var t = this;this.playStatus || (this.listeners.play(), this.playStatus = 1), this.ready ? !this.hasPlayed && (this.clickToPlay || window.navigator && /iP(hone|od|ad)/.test(window.navigator.platform)) ? this.onPlaying() : this.player.playVideo() : (this.playOnReady = !0, window.YT && YT.Player ? this.player || (this.player = new YT.Player(this.element, { videoId: this.videoId, playerVars: this.playerVars, events: { onReady: function onReady() {
            t.onReady();
          }, onStateChange: function onStateChange(e) {
            t.onStateChange(e);
          }, onError: function onError(e) {
            t.onError(e);
          } } })) : this.loadAPI());
    }, pause: function pause() {
      this.ready ? this.player.pauseVideo() : this.playStatus && (delete this.playOnReady, this.listeners.pause(), delete this.playStatus);
    } }), t.extend(e.prototype, { YouTubePlayer: s, textFactory: function textFactory(t, e) {
      var n = this.options,
          o = this.getItemProperty(t, n.youTubeVideoIdProperty);return o ? (void 0 === this.getItemProperty(t, n.urlProperty) && (t[n.urlProperty] = "//www.youtube.com/watch?v=" + o), void 0 === this.getItemProperty(t, n.videoPosterProperty) && (t[n.videoPosterProperty] = "//img.youtube.com/vi/" + o + "/maxresdefault.jpg"), this.videoFactory(t, e, new s(o, n.youTubePlayerVars, n.youTubeClickToPlay))) : i.call(this, t, e);
    } }), e;
});
//# sourceMappingURL=blueimp-gallery.min.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

/*
 * blueimp Gallery Video Factory JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, window, document */

;(function (factory) {
  'use strict';

  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    // Browser globals:
    factory(window.blueimp.helper || window.jQuery, window.blueimp.Gallery);
  }
})(function ($, Gallery) {
  'use strict';

  $.extend(Gallery.prototype.options, {
    // The class for video content elements:
    videoContentClass: 'video-content',
    // The class for video when it is loading:
    videoLoadingClass: 'video-loading',
    // The class for video when it is playing:
    videoPlayingClass: 'video-playing',
    // The list object property (or data attribute) for the video poster URL:
    videoPosterProperty: 'poster',
    // The list object property (or data attribute) for the video sources array:
    videoSourcesProperty: 'sources'
  });

  var _handleSlide = Gallery.prototype.handleSlide;

  $.extend(Gallery.prototype, {
    handleSlide: function handleSlide(index) {
      _handleSlide.call(this, index);
      if (this.playingVideo) {
        this.playingVideo.pause();
      }
    },

    videoFactory: function videoFactory(obj, callback, videoInterface) {
      var that = this;
      var options = this.options;
      var videoContainerNode = this.elementPrototype.cloneNode(false);
      var videoContainer = $(videoContainerNode);
      var errorArgs = [{
        type: 'error',
        target: videoContainerNode
      }];
      var video = videoInterface || document.createElement('video');
      var url = this.getItemProperty(obj, options.urlProperty);
      var type = this.getItemProperty(obj, options.typeProperty);
      var title = this.getItemProperty(obj, options.titleProperty);
      var posterUrl = this.getItemProperty(obj, options.videoPosterProperty);
      var posterImage;
      var sources = this.getItemProperty(obj, options.videoSourcesProperty);
      var source;
      var playMediaControl;
      var isLoading;
      var hasControls;
      videoContainer.addClass(options.videoContentClass);
      if (title) {
        videoContainerNode.title = title;
      }
      if (video.canPlayType) {
        if (url && type && video.canPlayType(type)) {
          video.src = url;
        } else if (sources) {
          while (sources.length) {
            source = sources.shift();
            url = this.getItemProperty(source, options.urlProperty);
            type = this.getItemProperty(source, options.typeProperty);
            if (url && type && video.canPlayType(type)) {
              video.src = url;
              break;
            }
          }
        }
      }
      if (posterUrl) {
        video.poster = posterUrl;
        posterImage = this.imagePrototype.cloneNode(false);
        $(posterImage).addClass(options.toggleClass);
        posterImage.src = posterUrl;
        posterImage.draggable = false;
        videoContainerNode.appendChild(posterImage);
      }
      playMediaControl = document.createElement('a');
      playMediaControl.setAttribute('target', '_blank');
      if (!videoInterface) {
        playMediaControl.setAttribute('download', title);
      }
      playMediaControl.href = url;
      if (video.src) {
        video.controls = true;(videoInterface || $(video)).on('error', function () {
          that.setTimeout(callback, errorArgs);
        }).on('pause', function () {
          if (video.seeking) return;
          isLoading = false;
          videoContainer.removeClass(that.options.videoLoadingClass).removeClass(that.options.videoPlayingClass);
          if (hasControls) {
            that.container.addClass(that.options.controlsClass);
          }
          delete that.playingVideo;
          if (that.interval) {
            that.play();
          }
        }).on('playing', function () {
          isLoading = false;
          videoContainer.removeClass(that.options.videoLoadingClass).addClass(that.options.videoPlayingClass);
          if (that.container.hasClass(that.options.controlsClass)) {
            hasControls = true;
            that.container.removeClass(that.options.controlsClass);
          } else {
            hasControls = false;
          }
        }).on('play', function () {
          window.clearTimeout(that.timeout);
          isLoading = true;
          videoContainer.addClass(that.options.videoLoadingClass);
          that.playingVideo = video;
        });
        $(playMediaControl).on('click', function (event) {
          that.preventDefault(event);
          if (isLoading) {
            video.pause();
          } else {
            video.play();
          }
        });
        videoContainerNode.appendChild(videoInterface && videoInterface.element || video);
      }
      videoContainerNode.appendChild(playMediaControl);
      this.setTimeout(callback, [{
        type: 'load',
        target: videoContainerNode
      }]);
      return videoContainerNode;
    }
  });

  return Gallery;
});

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(8);

__webpack_require__(0);

__webpack_require__(1);

__webpack_require__(11);

__webpack_require__(2);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initBackground() {
    // Background
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    var spec = {
        backgrounds: ['asanoha.png', 'back.png', 'circles-and-roundabouts.png', 'confectionary.png', 'contemporary_china_2.png', 'corrugation.png', 'contemporary_china.png', 'diamond_upholstery.png', 'dimension.png', 'doodles.png', 'eight_horns.png', 'escheresque.png', 'geometry2.png', 'geometry.png', 'gplay.png', 'grey.png', 'lyonnette.png', 'memphis-colorful.png', 'paisley.png', 'photography.png', 'playstation.png', 'pow-star.png', 'psychedelic.png', 'pyramid.png', 'reticular_tissue.png', 'sayagata.png', 'skulls.png', 'swirl.png', 'symphony.png', 'tiny_grid.png', 'topography.png', 'tree_bark.png', 'upfeathers.png']
    };

    var i = random(0, spec.backgrounds.length - 1);
    var b = spec.backgrounds[i];
    (0, _jquery2.default)('body').css('background-image', 'url("assets/images/backgrounds/' + b + '")');
}

function initSearch() {
    (0, _jquery2.default)("form[name='query']").on('submit', function () {
        var query = (0, _jquery2.default)("input[name='q']", "form[name='query']").val();
        var site = (0, _jquery2.default)("form[name='search']").data('site');
        (0, _jquery2.default)("input[name='q']", "form[name='search']").val(query + ' site:' + site);
        (0, _jquery2.default)("form[name='search']").submit();
        return false;
    });
}

initBackground();
initSearch();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery, Popper) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Bootstrap v4.0.0-beta (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");!function (t) {
  var e = jQuery.fn.jquery.split(" ")[0].split(".");if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
}(), function () {
  function t(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
  }function e(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
  }function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }var i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return typeof t === "undefined" ? "undefined" : _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
  },
      o = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }return function (e, n, i) {
      return n && t(e.prototype, n), i && t(e, i), e;
    };
  }(),
      r = function (t) {
    function e(t) {
      return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    }function n(t) {
      return (t[0] || t).nodeType;
    }function i() {
      return { bindType: s.end, delegateType: s.end, handle: function handle(e) {
          if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
        } };
    }function o() {
      if (window.QUnit) return !1;var t = document.createElement("bootstrap");for (var e in a) {
        if (void 0 !== t.style[e]) return { end: a[e] };
      }return !1;
    }function r(e) {
      var n = this,
          i = !1;return t(this).one(l.TRANSITION_END, function () {
        i = !0;
      }), setTimeout(function () {
        i || l.triggerTransitionEnd(n);
      }, e), this;
    }var s = !1,
        a = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" },
        l = { TRANSITION_END: "bsTransitionEnd", getUID: function getUID(t) {
        do {
          t += ~~(1e6 * Math.random());
        } while (document.getElementById(t));return t;
      }, getSelectorFromElement: function getSelectorFromElement(e) {
        var n = e.getAttribute("data-target");n && "#" !== n || (n = e.getAttribute("href") || "");try {
          return t(n).length > 0 ? n : null;
        } catch (t) {
          return null;
        }
      }, reflow: function reflow(t) {
        return t.offsetHeight;
      }, triggerTransitionEnd: function triggerTransitionEnd(e) {
        t(e).trigger(s.end);
      }, supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(s);
      }, typeCheckConfig: function typeCheckConfig(t, i, o) {
        for (var r in o) {
          if (o.hasOwnProperty(r)) {
            var s = o[r],
                a = i[r],
                l = a && n(a) ? "element" : e(a);if (!new RegExp(s).test(l)) throw new Error(t.toUpperCase() + ': Option "' + r + '" provided type "' + l + '" but expected type "' + s + '".');
          }
        }
      } };return s = o(), t.fn.emulateTransitionEnd = r, l.supportsTransitionEnd() && (t.event.special[l.TRANSITION_END] = i()), l;
  }(jQuery),
      s = (function (t) {
    var e = "alert",
        i = t.fn[e],
        s = { DISMISS: '[data-dismiss="alert"]' },
        a = { CLOSE: "close.bs.alert", CLOSED: "closed.bs.alert", CLICK_DATA_API: "click.bs.alert.data-api" },
        l = { ALERT: "alert", FADE: "fade", SHOW: "show" },
        h = function () {
      function e(t) {
        n(this, e), this._element = t;
      }return e.prototype.close = function (t) {
        t = t || this._element;var e = this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
      }, e.prototype.dispose = function () {
        t.removeData(this._element, "bs.alert"), this._element = null;
      }, e.prototype._getRootElement = function (e) {
        var n = r.getSelectorFromElement(e),
            i = !1;return n && (i = t(n)[0]), i || (i = t(e).closest("." + l.ALERT)[0]), i;
      }, e.prototype._triggerCloseEvent = function (e) {
        var n = t.Event(a.CLOSE);return t(e).trigger(n), n;
      }, e.prototype._removeElement = function (e) {
        var n = this;t(e).removeClass(l.SHOW), r.supportsTransitionEnd() && t(e).hasClass(l.FADE) ? t(e).one(r.TRANSITION_END, function (t) {
          return n._destroyElement(e, t);
        }).emulateTransitionEnd(150) : this._destroyElement(e);
      }, e.prototype._destroyElement = function (e) {
        t(e).detach().trigger(a.CLOSED).remove();
      }, e._jQueryInterface = function (n) {
        return this.each(function () {
          var i = t(this),
              o = i.data("bs.alert");o || (o = new e(this), i.data("bs.alert", o)), "close" === n && o[n](this);
        });
      }, e._handleDismiss = function (t) {
        return function (e) {
          e && e.preventDefault(), t.close(this);
        };
      }, o(e, null, [{ key: "VERSION", get: function get() {
          return "4.0.0-beta";
        } }]), e;
    }();t(document).on(a.CLICK_DATA_API, s.DISMISS, h._handleDismiss(new h())), t.fn[e] = h._jQueryInterface, t.fn[e].Constructor = h, t.fn[e].noConflict = function () {
      return t.fn[e] = i, h._jQueryInterface;
    };
  }(jQuery), function (t) {
    var e = "button",
        i = t.fn[e],
        r = { ACTIVE: "active", BUTTON: "btn", FOCUS: "focus" },
        s = { DATA_TOGGLE_CARROT: '[data-toggle^="button"]', DATA_TOGGLE: '[data-toggle="buttons"]', INPUT: "input", ACTIVE: ".active", BUTTON: ".btn" },
        a = { CLICK_DATA_API: "click.bs.button.data-api", FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api" },
        l = function () {
      function e(t) {
        n(this, e), this._element = t;
      }return e.prototype.toggle = function () {
        var e = !0,
            n = !0,
            i = t(this._element).closest(s.DATA_TOGGLE)[0];if (i) {
          var o = t(this._element).find(s.INPUT)[0];if (o) {
            if ("radio" === o.type) if (o.checked && t(this._element).hasClass(r.ACTIVE)) e = !1;else {
              var a = t(i).find(s.ACTIVE)[0];a && t(a).removeClass(r.ACTIVE);
            }if (e) {
              if (o.hasAttribute("disabled") || i.hasAttribute("disabled") || o.classList.contains("disabled") || i.classList.contains("disabled")) return;o.checked = !t(this._element).hasClass(r.ACTIVE), t(o).trigger("change");
            }o.focus(), n = !1;
          }
        }n && this._element.setAttribute("aria-pressed", !t(this._element).hasClass(r.ACTIVE)), e && t(this._element).toggleClass(r.ACTIVE);
      }, e.prototype.dispose = function () {
        t.removeData(this._element, "bs.button"), this._element = null;
      }, e._jQueryInterface = function (n) {
        return this.each(function () {
          var i = t(this).data("bs.button");i || (i = new e(this), t(this).data("bs.button", i)), "toggle" === n && i[n]();
        });
      }, o(e, null, [{ key: "VERSION", get: function get() {
          return "4.0.0-beta";
        } }]), e;
    }();t(document).on(a.CLICK_DATA_API, s.DATA_TOGGLE_CARROT, function (e) {
      e.preventDefault();var n = e.target;t(n).hasClass(r.BUTTON) || (n = t(n).closest(s.BUTTON)), l._jQueryInterface.call(t(n), "toggle");
    }).on(a.FOCUS_BLUR_DATA_API, s.DATA_TOGGLE_CARROT, function (e) {
      var n = t(e.target).closest(s.BUTTON)[0];t(n).toggleClass(r.FOCUS, /^focus(in)?$/.test(e.type));
    }), t.fn[e] = l._jQueryInterface, t.fn[e].Constructor = l, t.fn[e].noConflict = function () {
      return t.fn[e] = i, l._jQueryInterface;
    };
  }(jQuery), function (t) {
    var e = "carousel",
        s = "bs.carousel",
        a = "." + s,
        l = t.fn[e],
        h = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 },
        c = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" },
        u = { NEXT: "next", PREV: "prev", LEFT: "left", RIGHT: "right" },
        d = { SLIDE: "slide" + a, SLID: "slid" + a, KEYDOWN: "keydown" + a, MOUSEENTER: "mouseenter" + a, MOUSELEAVE: "mouseleave" + a, TOUCHEND: "touchend" + a, LOAD_DATA_API: "load.bs.carousel.data-api", CLICK_DATA_API: "click.bs.carousel.data-api" },
        f = { CAROUSEL: "carousel", ACTIVE: "active", SLIDE: "slide", RIGHT: "carousel-item-right", LEFT: "carousel-item-left", NEXT: "carousel-item-next", PREV: "carousel-item-prev", ITEM: "carousel-item" },
        p = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' },
        _ = function () {
      function l(e, i) {
        n(this, l), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(i), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(p.INDICATORS)[0], this._addEventListeners();
      }return l.prototype.next = function () {
        this._isSliding || this._slide(u.NEXT);
      }, l.prototype.nextWhenVisible = function () {
        document.hidden || this.next();
      }, l.prototype.prev = function () {
        this._isSliding || this._slide(u.PREV);
      }, l.prototype.pause = function (e) {
        e || (this._isPaused = !0), t(this._element).find(p.NEXT_PREV)[0] && r.supportsTransitionEnd() && (r.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }, l.prototype.cycle = function (t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }, l.prototype.to = function (e) {
        var n = this;this._activeElement = t(this._element).find(p.ACTIVE_ITEM)[0];var i = this._getItemIndex(this._activeElement);if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) t(this._element).one(d.SLID, function () {
          return n.to(e);
        });else {
          if (i === e) return this.pause(), void this.cycle();var o = e > i ? u.NEXT : u.PREV;this._slide(o, this._items[e]);
        }
      }, l.prototype.dispose = function () {
        t(this._element).off(a), t.removeData(this._element, s), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
      }, l.prototype._getConfig = function (n) {
        return n = t.extend({}, h, n), r.typeCheckConfig(e, n, c), n;
      }, l.prototype._addEventListeners = function () {
        var e = this;this._config.keyboard && t(this._element).on(d.KEYDOWN, function (t) {
          return e._keydown(t);
        }), "hover" === this._config.pause && (t(this._element).on(d.MOUSEENTER, function (t) {
          return e.pause(t);
        }).on(d.MOUSELEAVE, function (t) {
          return e.cycle(t);
        }), "ontouchstart" in document.documentElement && t(this._element).on(d.TOUCHEND, function () {
          e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
            return e.cycle(t);
          }, 500 + e._config.interval);
        }));
      }, l.prototype._keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {case 37:
            t.preventDefault(), this.prev();break;case 39:
            t.preventDefault(), this.next();break;default:
            return;}
      }, l.prototype._getItemIndex = function (e) {
        return this._items = t.makeArray(t(e).parent().find(p.ITEM)), this._items.indexOf(e);
      }, l.prototype._getItemByDirection = function (t, e) {
        var n = t === u.NEXT,
            i = t === u.PREV,
            o = this._getItemIndex(e),
            r = this._items.length - 1;if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;var s = (o + (t === u.PREV ? -1 : 1)) % this._items.length;return -1 === s ? this._items[this._items.length - 1] : this._items[s];
      }, l.prototype._triggerSlideEvent = function (e, n) {
        var i = this._getItemIndex(e),
            o = this._getItemIndex(t(this._element).find(p.ACTIVE_ITEM)[0]),
            r = t.Event(d.SLIDE, { relatedTarget: e, direction: n, from: o, to: i });return t(this._element).trigger(r), r;
      }, l.prototype._setActiveIndicatorElement = function (e) {
        if (this._indicatorsElement) {
          t(this._indicatorsElement).find(p.ACTIVE).removeClass(f.ACTIVE);var n = this._indicatorsElement.children[this._getItemIndex(e)];n && t(n).addClass(f.ACTIVE);
        }
      }, l.prototype._slide = function (e, n) {
        var i = this,
            o = t(this._element).find(p.ACTIVE_ITEM)[0],
            s = this._getItemIndex(o),
            a = n || o && this._getItemByDirection(e, o),
            l = this._getItemIndex(a),
            h = Boolean(this._interval),
            c = void 0,
            _ = void 0,
            g = void 0;if (e === u.NEXT ? (c = f.LEFT, _ = f.NEXT, g = u.LEFT) : (c = f.RIGHT, _ = f.PREV, g = u.RIGHT), a && t(a).hasClass(f.ACTIVE)) this._isSliding = !1;else if (!this._triggerSlideEvent(a, g).isDefaultPrevented() && o && a) {
          this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(a);var m = t.Event(d.SLID, { relatedTarget: a, direction: g, from: s, to: l });r.supportsTransitionEnd() && t(this._element).hasClass(f.SLIDE) ? (t(a).addClass(_), r.reflow(a), t(o).addClass(c), t(a).addClass(c), t(o).one(r.TRANSITION_END, function () {
            t(a).removeClass(c + " " + _).addClass(f.ACTIVE), t(o).removeClass(f.ACTIVE + " " + _ + " " + c), i._isSliding = !1, setTimeout(function () {
              return t(i._element).trigger(m);
            }, 0);
          }).emulateTransitionEnd(600)) : (t(o).removeClass(f.ACTIVE), t(a).addClass(f.ACTIVE), this._isSliding = !1, t(this._element).trigger(m)), h && this.cycle();
        }
      }, l._jQueryInterface = function (e) {
        return this.each(function () {
          var n = t(this).data(s),
              o = t.extend({}, h, t(this).data());"object" === (void 0 === e ? "undefined" : i(e)) && t.extend(o, e);var r = "string" == typeof e ? e : o.slide;if (n || (n = new l(this, o), t(this).data(s, n)), "number" == typeof e) n.to(e);else if ("string" == typeof r) {
            if (void 0 === n[r]) throw new Error('No method named "' + r + '"');n[r]();
          } else o.interval && (n.pause(), n.cycle());
        });
      }, l._dataApiClickHandler = function (e) {
        var n = r.getSelectorFromElement(this);if (n) {
          var i = t(n)[0];if (i && t(i).hasClass(f.CAROUSEL)) {
            var o = t.extend({}, t(i).data(), t(this).data()),
                a = this.getAttribute("data-slide-to");a && (o.interval = !1), l._jQueryInterface.call(t(i), o), a && t(i).data(s).to(a), e.preventDefault();
          }
        }
      }, o(l, null, [{ key: "VERSION", get: function get() {
          return "4.0.0-beta";
        } }, { key: "Default", get: function get() {
          return h;
        } }]), l;
    }();t(document).on(d.CLICK_DATA_API, p.DATA_SLIDE, _._dataApiClickHandler), t(window).on(d.LOAD_DATA_API, function () {
      t(p.DATA_RIDE).each(function () {
        var e = t(this);_._jQueryInterface.call(e, e.data());
      });
    }), t.fn[e] = _._jQueryInterface, t.fn[e].Constructor = _, t.fn[e].noConflict = function () {
      return t.fn[e] = l, _._jQueryInterface;
    };
  }(jQuery), function (t) {
    var e = "collapse",
        s = "bs.collapse",
        a = t.fn[e],
        l = { toggle: !0, parent: "" },
        h = { toggle: "boolean", parent: "string" },
        c = { SHOW: "show.bs.collapse", SHOWN: "shown.bs.collapse", HIDE: "hide.bs.collapse", HIDDEN: "hidden.bs.collapse", CLICK_DATA_API: "click.bs.collapse.data-api" },
        u = { SHOW: "show", COLLAPSE: "collapse", COLLAPSING: "collapsing", COLLAPSED: "collapsed" },
        d = { WIDTH: "width", HEIGHT: "height" },
        f = { ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' },
        p = function () {
      function a(e, i) {
        n(this, a), this._isTransitioning = !1, this._element = e, this._config = this._getConfig(i), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));for (var o = t(f.DATA_TOGGLE), s = 0; s < o.length; s++) {
          var l = o[s],
              h = r.getSelectorFromElement(l);null !== h && t(h).filter(e).length > 0 && this._triggerArray.push(l);
        }this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
      }return a.prototype.toggle = function () {
        t(this._element).hasClass(u.SHOW) ? this.hide() : this.show();
      }, a.prototype.show = function () {
        var e = this;if (!this._isTransitioning && !t(this._element).hasClass(u.SHOW)) {
          var n = void 0,
              i = void 0;if (this._parent && ((n = t.makeArray(t(this._parent).children().children(f.ACTIVES))).length || (n = null)), !(n && (i = t(n).data(s)) && i._isTransitioning)) {
            var o = t.Event(c.SHOW);if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
              n && (a._jQueryInterface.call(t(n), "hide"), i || t(n).data(s, null));var l = this._getDimension();t(this._element).removeClass(u.COLLAPSE).addClass(u.COLLAPSING), this._element.style[l] = 0, this._triggerArray.length && t(this._triggerArray).removeClass(u.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);var h = function h() {
                t(e._element).removeClass(u.COLLAPSING).addClass(u.COLLAPSE).addClass(u.SHOW), e._element.style[l] = "", e.setTransitioning(!1), t(e._element).trigger(c.SHOWN);
              };if (r.supportsTransitionEnd()) {
                var d = "scroll" + (l[0].toUpperCase() + l.slice(1));t(this._element).one(r.TRANSITION_END, h).emulateTransitionEnd(600), this._element.style[l] = this._element[d] + "px";
              } else h();
            }
          }
        }
      }, a.prototype.hide = function () {
        var e = this;if (!this._isTransitioning && t(this._element).hasClass(u.SHOW)) {
          var n = t.Event(c.HIDE);if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
            var i = this._getDimension();if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", r.reflow(this._element), t(this._element).addClass(u.COLLAPSING).removeClass(u.COLLAPSE).removeClass(u.SHOW), this._triggerArray.length) for (var o = 0; o < this._triggerArray.length; o++) {
              var s = this._triggerArray[o],
                  a = r.getSelectorFromElement(s);null !== a && (t(a).hasClass(u.SHOW) || t(s).addClass(u.COLLAPSED).attr("aria-expanded", !1));
            }this.setTransitioning(!0);var l = function l() {
              e.setTransitioning(!1), t(e._element).removeClass(u.COLLAPSING).addClass(u.COLLAPSE).trigger(c.HIDDEN);
            };this._element.style[i] = "", r.supportsTransitionEnd() ? t(this._element).one(r.TRANSITION_END, l).emulateTransitionEnd(600) : l();
          }
        }
      }, a.prototype.setTransitioning = function (t) {
        this._isTransitioning = t;
      }, a.prototype.dispose = function () {
        t.removeData(this._element, s), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
      }, a.prototype._getConfig = function (n) {
        return n = t.extend({}, l, n), n.toggle = Boolean(n.toggle), r.typeCheckConfig(e, n, h), n;
      }, a.prototype._getDimension = function () {
        return t(this._element).hasClass(d.WIDTH) ? d.WIDTH : d.HEIGHT;
      }, a.prototype._getParent = function () {
        var e = this,
            n = t(this._config.parent)[0],
            i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';return t(n).find(i).each(function (t, n) {
          e._addAriaAndCollapsedClass(a._getTargetFromElement(n), [n]);
        }), n;
      }, a.prototype._addAriaAndCollapsedClass = function (e, n) {
        if (e) {
          var i = t(e).hasClass(u.SHOW);n.length && t(n).toggleClass(u.COLLAPSED, !i).attr("aria-expanded", i);
        }
      }, a._getTargetFromElement = function (e) {
        var n = r.getSelectorFromElement(e);return n ? t(n)[0] : null;
      }, a._jQueryInterface = function (e) {
        return this.each(function () {
          var n = t(this),
              o = n.data(s),
              r = t.extend({}, l, n.data(), "object" === (void 0 === e ? "undefined" : i(e)) && e);if (!o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || (o = new a(this, r), n.data(s, o)), "string" == typeof e) {
            if (void 0 === o[e]) throw new Error('No method named "' + e + '"');o[e]();
          }
        });
      }, o(a, null, [{ key: "VERSION", get: function get() {
          return "4.0.0-beta";
        } }, { key: "Default", get: function get() {
          return l;
        } }]), a;
    }();t(document).on(c.CLICK_DATA_API, f.DATA_TOGGLE, function (e) {
      /input|textarea/i.test(e.target.tagName) || e.preventDefault();var n = t(this),
          i = r.getSelectorFromElement(this);t(i).each(function () {
        var e = t(this),
            i = e.data(s) ? "toggle" : n.data();p._jQueryInterface.call(e, i);
      });
    }), t.fn[e] = p._jQueryInterface, t.fn[e].Constructor = p, t.fn[e].noConflict = function () {
      return t.fn[e] = a, p._jQueryInterface;
    };
  }(jQuery), function (t) {
    if ("undefined" == typeof Popper) throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");var e = "dropdown",
        s = "bs.dropdown",
        a = "." + s,
        l = t.fn[e],
        h = new RegExp("38|40|27"),
        c = { HIDE: "hide" + a, HIDDEN: "hidden" + a, SHOW: "show" + a, SHOWN: "shown" + a, CLICK: "click" + a, CLICK_DATA_API: "click.bs.dropdown.data-api", KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api", KEYUP_DATA_API: "keyup.bs.dropdown.data-api" },
        u = { DISABLED: "disabled", SHOW: "show", DROPUP: "dropup", MENURIGHT: "dropdown-menu-right", MENULEFT: "dropdown-menu-left" },
        d = { DATA_TOGGLE: '[data-toggle="dropdown"]', FORM_CHILD: ".dropdown form", MENU: ".dropdown-menu", NAVBAR_NAV: ".navbar-nav", VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled)" },
        f = { TOP: "top-start", TOPEND: "top-end", BOTTOM: "bottom-start", BOTTOMEND: "bottom-end" },
        p = { placement: f.BOTTOM, offset: 0, flip: !0 },
        _ = { placement: "string", offset: "(number|string)", flip: "boolean" },
        g = function () {
      function l(t, e) {
        n(this, l), this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
      }return l.prototype.toggle = function () {
        if (!this._element.disabled && !t(this._element).hasClass(u.DISABLED)) {
          var e = l._getParentFromElement(this._element),
              n = t(this._menu).hasClass(u.SHOW);if (l._clearMenus(), !n) {
            var i = { relatedTarget: this._element },
                o = t.Event(c.SHOW, i);if (t(e).trigger(o), !o.isDefaultPrevented()) {
              var r = this._element;t(e).hasClass(u.DROPUP) && (t(this._menu).hasClass(u.MENULEFT) || t(this._menu).hasClass(u.MENURIGHT)) && (r = e), this._popper = new Popper(r, this._menu, this._getPopperConfig()), "ontouchstart" in document.documentElement && !t(e).closest(d.NAVBAR_NAV).length && t("body").children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(u.SHOW), t(e).toggleClass(u.SHOW).trigger(t.Event(c.SHOWN, i));
            }
          }
        }
      }, l.prototype.dispose = function () {
        t.removeData(this._element, s), t(this._element).off(a), this._element = null, this._menu = null, null !== this._popper && this._popper.destroy(), this._popper = null;
      }, l.prototype.update = function () {
        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
      }, l.prototype._addEventListeners = function () {
        var e = this;t(this._element).on(c.CLICK, function (t) {
          t.preventDefault(), t.stopPropagation(), e.toggle();
        });
      }, l.prototype._getConfig = function (n) {
        var i = t(this._element).data();return void 0 !== i.placement && (i.placement = f[i.placement.toUpperCase()]), n = t.extend({}, this.constructor.Default, t(this._element).data(), n), r.typeCheckConfig(e, n, this.constructor.DefaultType), n;
      }, l.prototype._getMenuElement = function () {
        if (!this._menu) {
          var e = l._getParentFromElement(this._element);this._menu = t(e).find(d.MENU)[0];
        }return this._menu;
      }, l.prototype._getPlacement = function () {
        var e = t(this._element).parent(),
            n = this._config.placement;return e.hasClass(u.DROPUP) || this._config.placement === f.TOP ? (n = f.TOP, t(this._menu).hasClass(u.MENURIGHT) && (n = f.TOPEND)) : t(this._menu).hasClass(u.MENURIGHT) && (n = f.BOTTOMEND), n;
      }, l.prototype._detectNavbar = function () {
        return t(this._element).closest(".navbar").length > 0;
      }, l.prototype._getPopperConfig = function () {
        var t = { placement: this._getPlacement(), modifiers: { offset: { offset: this._config.offset }, flip: { enabled: this._config.flip } } };return this._inNavbar && (t.modifiers.applyStyle = { enabled: !this._inNavbar }), t;
      }, l._jQueryInterface = function (e) {
        return this.each(function () {
          var n = t(this).data(s),
              o = "object" === (void 0 === e ? "undefined" : i(e)) ? e : null;if (n || (n = new l(this, o), t(this).data(s, n)), "string" == typeof e) {
            if (void 0 === n[e]) throw new Error('No method named "' + e + '"');n[e]();
          }
        });
      }, l._clearMenus = function (e) {
        if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which)) for (var n = t.makeArray(t(d.DATA_TOGGLE)), i = 0; i < n.length; i++) {
          var o = l._getParentFromElement(n[i]),
              r = t(n[i]).data(s),
              a = { relatedTarget: n[i] };if (r) {
            var h = r._menu;if (t(o).hasClass(u.SHOW) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(o, e.target))) {
              var f = t.Event(c.HIDE, a);t(o).trigger(f), f.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), n[i].setAttribute("aria-expanded", "false"), t(h).removeClass(u.SHOW), t(o).removeClass(u.SHOW).trigger(t.Event(c.HIDDEN, a)));
            }
          }
        }
      }, l._getParentFromElement = function (e) {
        var n = void 0,
            i = r.getSelectorFromElement(e);return i && (n = t(i)[0]), n || e.parentNode;
      }, l._dataApiKeydownHandler = function (e) {
        if (!(!h.test(e.which) || /button/i.test(e.target.tagName) && 32 === e.which || /input|textarea/i.test(e.target.tagName) || (e.preventDefault(), e.stopPropagation(), this.disabled || t(this).hasClass(u.DISABLED)))) {
          var n = l._getParentFromElement(this),
              i = t(n).hasClass(u.SHOW);if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
            var o = t(n).find(d.VISIBLE_ITEMS).get();if (o.length) {
              var r = o.indexOf(e.target);38 === e.which && r > 0 && r--, 40 === e.which && r < o.length - 1 && r++, r < 0 && (r = 0), o[r].focus();
            }
          } else {
            if (27 === e.which) {
              var s = t(n).find(d.DATA_TOGGLE)[0];t(s).trigger("focus");
            }t(this).trigger("click");
          }
        }
      }, o(l, null, [{ key: "VERSION", get: function get() {
          return "4.0.0-beta";
        } }, { key: "Default", get: function get() {
          return p;
        } }, { key: "DefaultType", get: function get() {
          return _;
        } }]), l;
    }();t(document).on(c.KEYDOWN_DATA_API, d.DATA_TOGGLE, g._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, d.MENU, g._dataApiKeydownHandler).on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, g._clearMenus).on(c.CLICK_DATA_API, d.DATA_TOGGLE, function (e) {
      e.preventDefault(), e.stopPropagation(), g._jQueryInterface.call(t(this), "toggle");
    }).on(c.CLICK_DATA_API, d.FORM_CHILD, function (t) {
      t.stopPropagation();
    }), t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function () {
      return t.fn[e] = l, g._jQueryInterface;
    };
  }(jQuery), function (t) {
    var e = "modal",
        s = ".bs.modal",
        a = t.fn[e],
        l = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        h = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
        c = { HIDE: "hide.bs.modal", HIDDEN: "hidden.bs.modal", SHOW: "show.bs.modal", SHOWN: "shown.bs.modal", FOCUSIN: "focusin.bs.modal", RESIZE: "resize.bs.modal", CLICK_DISMISS: "click.dismiss.bs.modal", KEYDOWN_DISMISS: "keydown.dismiss.bs.modal", MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal", MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal", CLICK_DATA_API: "click.bs.modal.data-api" },
        u = { SCROLLBAR_MEASURER: "modal-scrollbar-measure", BACKDROP: "modal-backdrop", OPEN: "modal-open", FADE: "fade", SHOW: "show" },
        d = { DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", NAVBAR_TOGGLER: ".navbar-toggler" },
        f = function () {
      function a(e, i) {
        n(this, a), this._config = this._getConfig(i), this._element = e, this._dialog = t(e).find(d.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0;
      }return a.prototype.toggle = function (t) {
        return this._isShown ? this.hide() : this.show(t);
      }, a.prototype.show = function (e) {
        var n = this;if (!this._isTransitioning) {
          r.supportsTransitionEnd() && t(this._element).hasClass(u.FADE) && (this._isTransitioning = !0);var i = t.Event(c.SHOW, { relatedTarget: e });t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), t(document.body).addClass(u.OPEN), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(c.CLICK_DISMISS, d.DATA_DISMISS, function (t) {
            return n.hide(t);
          }), t(this._dialog).on(c.MOUSEDOWN_DISMISS, function () {
            t(n._element).one(c.MOUSEUP_DISMISS, function (e) {
              t(e.target).is(n._element) && (n._ignoreBackdropClick = !0);
            });
          }), this._showBackdrop(function () {
            return n._showElement(e);
          }));
        }
      }, a.prototype.hide = function (e) {
        var n = this;if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
          var i = r.supportsTransitionEnd() && t(this._element).hasClass(u.FADE);i && (this._isTransitioning = !0);var o = t.Event(c.HIDE);t(this._element).trigger(o), this._isShown && !o.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), t(document).off(c.FOCUSIN), t(this._element).removeClass(u.SHOW), t(this._element).off(c.CLICK_DISMISS), t(this._dialog).off(c.MOUSEDOWN_DISMISS), i ? t(this._element).one(r.TRANSITION_END, function (t) {
            return n._hideModal(t);
          }).emulateTransitionEnd(300) : this._hideModal());
        }
      }, a.prototype.dispose = function () {
        t.removeData(this._element, "bs.modal"), t(window, document, this._element, this._backdrop).off(s), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
      }, a.prototype.handleUpdate = function () {
        this._adjustDialog();
      }, a.prototype._getConfig = function (n) {
        return n = t.extend({}, l, n), r.typeCheckConfig(e, n, h), n;
      }, a.prototype._showElement = function (e) {
        var n = this,
            i = r.supportsTransitionEnd() && t(this._element).hasClass(u.FADE);this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && r.reflow(this._element), t(this._element).addClass(u.SHOW), this._config.focus && this._enforceFocus();var o = t.Event(c.SHOWN, { relatedTarget: e }),
            s = function s() {
          n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(o);
        };i ? t(this._dialog).one(r.TRANSITION_END, s).emulateTransitionEnd(300) : s();
      }, a.prototype._enforceFocus = function () {
        var e = this;t(document).off(c.FOCUSIN).on(c.FOCUSIN, function (n) {
          document === n.target || e._element === n.target || t(e._element).has(n.target).length || e._element.focus();
        });
      }, a.prototype._setEscapeEvent = function () {
        var e = this;this._isShown && this._config.keyboard ? t(this._element).on(c.KEYDOWN_DISMISS, function (t) {
          27 === t.which && (t.preventDefault(), e.hide());
        }) : this._isShown || t(this._element).off(c.KEYDOWN_DISMISS);
      }, a.prototype._setResizeEvent = function () {
        var e = this;this._isShown ? t(window).on(c.RESIZE, function (t) {
          return e.handleUpdate(t);
        }) : t(window).off(c.RESIZE);
      }, a.prototype._hideModal = function () {
        var e = this;this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
          t(document.body).removeClass(u.OPEN), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(c.HIDDEN);
        });
      }, a.prototype._removeBackdrop = function () {
        this._backdrop && (t(this._backdrop).remove(), this._backdrop = null);
      }, a.prototype._showBackdrop = function (e) {
        var n = this,
            i = t(this._element).hasClass(u.FADE) ? u.FADE : "";if (this._isShown && this._config.backdrop) {
          var o = r.supportsTransitionEnd() && i;if (this._backdrop = document.createElement("div"), this._backdrop.className = u.BACKDROP, i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(c.CLICK_DISMISS, function (t) {
            n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide());
          }), o && r.reflow(this._backdrop), t(this._backdrop).addClass(u.SHOW), !e) return;if (!o) return void e();t(this._backdrop).one(r.TRANSITION_END, e).emulateTransitionEnd(150);
        } else if (!this._isShown && this._backdrop) {
          t(this._backdrop).removeClass(u.SHOW);var s = function s() {
            n._removeBackdrop(), e && e();
          };r.supportsTransitionEnd() && t(this._element).hasClass(u.FADE) ? t(this._backdrop).one(r.TRANSITION_END, s).emulateTransitionEnd(150) : s();
        } else e && e();
      }, a.prototype._adjustDialog = function () {
        var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
      }, a.prototype._resetAdjustments = function () {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }, a.prototype._checkScrollbar = function () {
        this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
      }, a.prototype._setScrollbar = function () {
        var e = this;if (this._isBodyOverflowing) {
          t(d.FIXED_CONTENT).each(function (n, i) {
            var o = t(i)[0].style.paddingRight,
                r = t(i).css("padding-right");t(i).data("padding-right", o).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px");
          }), t(d.NAVBAR_TOGGLER).each(function (n, i) {
            var o = t(i)[0].style.marginRight,
                r = t(i).css("margin-right");t(i).data("margin-right", o).css("margin-right", parseFloat(r) + e._scrollbarWidth + "px");
          });var n = document.body.style.paddingRight,
              i = t("body").css("padding-right");t("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
        }
      }, a.prototype._resetScrollbar = function () {
        t(d.FIXED_CONTENT).each(function (e, n) {
          var i = t(n).data("padding-right");void 0 !== i && t(n).css("padding-right", i).removeData("padding-right");
        }), t(d.NAVBAR_TOGGLER).each(function (e, n) {
          var i = t(n).data("margin-right");void 0 !== i && t(n).css("margin-right", i).removeData("margin-right");
        });var e = t("body").data("padding-right");void 0 !== e && t("body").css("padding-right", e).removeData("padding-right");
      }, a.prototype._getScrollbarWidth = function () {
        var t = document.createElement("div");t.className = u.SCROLLBAR_MEASURER, document.body.appendChild(t);var e = t.getBoundingClientRect().width - t.clientWidth;return document.body.removeChild(t), e;
      }, a._jQueryInterface = function (e, n) {
        return this.each(function () {
          var o = t(this).data("bs.modal"),
              r = t.extend({}, a.Default, t(this).data(), "object" === (void 0 === e ? "undefined" : i(e)) && e);if (o || (o = new a(this, r), t(this).data("bs.modal", o)), "string" == typeof e) {
            if (void 0 === o[e]) throw new Error('No method named "' + e + '"');o[e](n);
          } else r.show && o.show(n);
        });
      }, o(a, null, [{ key: "VERSION", get: function get() {
          return "4.0.0-beta";
        } }, { key: "Default", get: function get() {
          return l;
        } }]), a;
    }();t(document).on(c.CLICK_DATA_API, d.DATA_TOGGLE, function (e) {
      var n = this,
          i = void 0,
          o = r.getSelectorFromElement(this);o && (i = t(o)[0]);var s = t(i).data("bs.modal") ? "toggle" : t.extend({}, t(i).data(), t(this).data());"A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();var a = t(i).one(c.SHOW, function (e) {
        e.isDefaultPrevented() || a.one(c.HIDDEN, function () {
          t(n).is(":visible") && n.focus();
        });
      });f._jQueryInterface.call(t(i), s, this);
    }), t.fn[e] = f._jQueryInterface, t.fn[e].Constructor = f, t.fn[e].noConflict = function () {
      return t.fn[e] = a, f._jQueryInterface;
    };
  }(jQuery), function (t) {
    var e = "scrollspy",
        s = t.fn[e],
        a = { offset: 10, method: "auto", target: "" },
        l = { offset: "number", method: "string", target: "(string|element)" },
        h = { ACTIVATE: "activate.bs.scrollspy", SCROLL: "scroll.bs.scrollspy", LOAD_DATA_API: "load.bs.scrollspy.data-api" },
        c = { DROPDOWN_ITEM: "dropdown-item", DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active" },
        u = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", NAV_LIST_GROUP: ".nav, .list-group", NAV_LINKS: ".nav-link", LIST_ITEMS: ".list-group-item", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" },
        d = { OFFSET: "offset", POSITION: "position" },
        f = function () {
      function s(e, i) {
        var o = this;n(this, s), this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(i), this._selector = this._config.target + " " + u.NAV_LINKS + "," + this._config.target + " " + u.LIST_ITEMS + "," + this._config.target + " " + u.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(h.SCROLL, function (t) {
          return o._process(t);
        }), this.refresh(), this._process();
      }return s.prototype.refresh = function () {
        var e = this,
            n = this._scrollElement !== this._scrollElement.window ? d.POSITION : d.OFFSET,
            i = "auto" === this._config.method ? n : this._config.method,
            o = i === d.POSITION ? this._getScrollTop() : 0;this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.makeArray(t(this._selector)).map(function (e) {
          var n = void 0,
              s = r.getSelectorFromElement(e);if (s && (n = t(s)[0]), n) {
            var a = n.getBoundingClientRect();if (a.width || a.height) return [t(n)[i]().top + o, s];
          }return null;
        }).filter(function (t) {
          return t;
        }).sort(function (t, e) {
          return t[0] - e[0];
        }).forEach(function (t) {
          e._offsets.push(t[0]), e._targets.push(t[1]);
        });
      }, s.prototype.dispose = function () {
        t.removeData(this._element, "bs.scrollspy"), t(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
      }, s.prototype._getConfig = function (n) {
        if ("string" != typeof (n = t.extend({}, a, n)).target) {
          var i = t(n.target).attr("id");i || (i = r.getUID(e), t(n.target).attr("id", i)), n.target = "#" + i;
        }return r.typeCheckConfig(e, n, l), n;
      }, s.prototype._getScrollTop = function () {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }, s.prototype._getScrollHeight = function () {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }, s.prototype._getOffsetHeight = function () {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }, s.prototype._process = function () {
        var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();if (this._scrollHeight !== e && this.refresh(), t >= n) {
          var i = this._targets[this._targets.length - 1];this._activeTarget !== i && this._activate(i);
        } else {
          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();for (var o = this._offsets.length; o--;) {
            this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
          }
        }
      }, s.prototype._activate = function (e) {
        this._activeTarget = e, this._clear();var n = this._selector.split(",");n = n.map(function (t) {
          return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
        });var i = t(n.join(","));i.hasClass(c.DROPDOWN_ITEM) ? (i.closest(u.DROPDOWN).find(u.DROPDOWN_TOGGLE).addClass(c.ACTIVE), i.addClass(c.ACTIVE)) : (i.addClass(c.ACTIVE), i.parents(u.NAV_LIST_GROUP).prev(u.NAV_LINKS + ", " + u.LIST_ITEMS).addClass(c.ACTIVE)), t(this._scrollElement).trigger(h.ACTIVATE, { relatedTarget: e });
      }, s.prototype._clear = function () {
        t(this._selector).filter(u.ACTIVE).removeClass(c.ACTIVE);
      }, s._jQueryInterface = function (e) {
        return this.each(function () {
          var n = t(this).data("bs.scrollspy"),
              o = "object" === (void 0 === e ? "undefined" : i(e)) && e;if (n || (n = new s(this, o), t(this).data("bs.scrollspy", n)), "string" == typeof e) {
            if (void 0 === n[e]) throw new Error('No method named "' + e + '"');n[e]();
          }
        });
      }, o(s, null, [{ key: "VERSION", get: function get() {
          return "4.0.0-beta";
        } }, { key: "Default", get: function get() {
          return a;
        } }]), s;
    }();t(window).on(h.LOAD_DATA_API, function () {
      for (var e = t.makeArray(t(u.DATA_SPY)), n = e.length; n--;) {
        var i = t(e[n]);f._jQueryInterface.call(i, i.data());
      }
    }), t.fn[e] = f._jQueryInterface, t.fn[e].Constructor = f, t.fn[e].noConflict = function () {
      return t.fn[e] = s, f._jQueryInterface;
    };
  }(jQuery), function (t) {
    var e = t.fn.tab,
        i = { HIDE: "hide.bs.tab", HIDDEN: "hidden.bs.tab", SHOW: "show.bs.tab", SHOWN: "shown.bs.tab", CLICK_DATA_API: "click.bs.tab.data-api" },
        s = { DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active", DISABLED: "disabled", FADE: "fade", SHOW: "show" },
        a = { DROPDOWN: ".dropdown", NAV_LIST_GROUP: ".nav, .list-group", ACTIVE: ".active", DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', DROPDOWN_TOGGLE: ".dropdown-toggle", DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active" },
        l = function () {
      function e(t) {
        n(this, e), this._element = t;
      }return e.prototype.show = function () {
        var e = this;if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(s.ACTIVE) || t(this._element).hasClass(s.DISABLED))) {
          var n = void 0,
              o = void 0,
              l = t(this._element).closest(a.NAV_LIST_GROUP)[0],
              h = r.getSelectorFromElement(this._element);l && (o = t.makeArray(t(l).find(a.ACTIVE)), o = o[o.length - 1]);var c = t.Event(i.HIDE, { relatedTarget: this._element }),
              u = t.Event(i.SHOW, { relatedTarget: o });if (o && t(o).trigger(c), t(this._element).trigger(u), !u.isDefaultPrevented() && !c.isDefaultPrevented()) {
            h && (n = t(h)[0]), this._activate(this._element, l);var d = function d() {
              var n = t.Event(i.HIDDEN, { relatedTarget: e._element }),
                  r = t.Event(i.SHOWN, { relatedTarget: o });t(o).trigger(n), t(e._element).trigger(r);
            };n ? this._activate(n, n.parentNode, d) : d();
          }
        }
      }, e.prototype.dispose = function () {
        t.removeData(this._element, "bs.tab"), this._element = null;
      }, e.prototype._activate = function (e, n, i) {
        var o = this,
            l = t(n).find(a.ACTIVE)[0],
            h = i && r.supportsTransitionEnd() && l && t(l).hasClass(s.FADE),
            c = function c() {
          return o._transitionComplete(e, l, h, i);
        };l && h ? t(l).one(r.TRANSITION_END, c).emulateTransitionEnd(150) : c(), l && t(l).removeClass(s.SHOW);
      }, e.prototype._transitionComplete = function (e, n, i, o) {
        if (n) {
          t(n).removeClass(s.ACTIVE);var l = t(n.parentNode).find(a.DROPDOWN_ACTIVE_CHILD)[0];l && t(l).removeClass(s.ACTIVE), n.setAttribute("aria-expanded", !1);
        }if (t(e).addClass(s.ACTIVE), e.setAttribute("aria-expanded", !0), i ? (r.reflow(e), t(e).addClass(s.SHOW)) : t(e).removeClass(s.FADE), e.parentNode && t(e.parentNode).hasClass(s.DROPDOWN_MENU)) {
          var h = t(e).closest(a.DROPDOWN)[0];h && t(h).find(a.DROPDOWN_TOGGLE).addClass(s.ACTIVE), e.setAttribute("aria-expanded", !0);
        }o && o();
      }, e._jQueryInterface = function (n) {
        return this.each(function () {
          var i = t(this),
              o = i.data("bs.tab");if (o || (o = new e(this), i.data("bs.tab", o)), "string" == typeof n) {
            if (void 0 === o[n]) throw new Error('No method named "' + n + '"');o[n]();
          }
        });
      }, o(e, null, [{ key: "VERSION", get: function get() {
          return "4.0.0-beta";
        } }]), e;
    }();t(document).on(i.CLICK_DATA_API, a.DATA_TOGGLE, function (e) {
      e.preventDefault(), l._jQueryInterface.call(t(this), "show");
    }), t.fn.tab = l._jQueryInterface, t.fn.tab.Constructor = l, t.fn.tab.noConflict = function () {
      return t.fn.tab = e, l._jQueryInterface;
    };
  }(jQuery), function (t) {
    if ("undefined" == typeof Popper) throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)");var e = "tooltip",
        s = ".bs.tooltip",
        a = t.fn[e],
        l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        h = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)" },
        c = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
        u = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip" },
        d = { SHOW: "show", OUT: "out" },
        f = { HIDE: "hide" + s, HIDDEN: "hidden" + s, SHOW: "show" + s, SHOWN: "shown" + s, INSERTED: "inserted" + s, CLICK: "click" + s, FOCUSIN: "focusin" + s, FOCUSOUT: "focusout" + s, MOUSEENTER: "mouseenter" + s, MOUSELEAVE: "mouseleave" + s },
        p = { FADE: "fade", SHOW: "show" },
        _ = { TOOLTIP: ".tooltip", TOOLTIP_INNER: ".tooltip-inner", ARROW: ".arrow" },
        g = { HOVER: "hover", FOCUS: "focus", CLICK: "click", MANUAL: "manual" },
        m = function () {
      function a(t, e) {
        n(this, a), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
      }return a.prototype.enable = function () {
        this._isEnabled = !0;
      }, a.prototype.disable = function () {
        this._isEnabled = !1;
      }, a.prototype.toggleEnabled = function () {
        this._isEnabled = !this._isEnabled;
      }, a.prototype.toggle = function (e) {
        if (e) {
          var n = this.constructor.DATA_KEY,
              i = t(e.currentTarget).data(n);i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
        } else {
          if (t(this.getTipElement()).hasClass(p.SHOW)) return void this._leave(null, this);this._enter(null, this);
        }
      }, a.prototype.dispose = function () {
        clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
      }, a.prototype.show = function () {
        var e = this;if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");var n = t.Event(this.constructor.Event.SHOW);if (this.isWithContent() && this._isEnabled) {
          t(this.element).trigger(n);var i = t.contains(this.element.ownerDocument.documentElement, this.element);if (n.isDefaultPrevented() || !i) return;var o = this.getTipElement(),
              s = r.getUID(this.constructor.NAME);o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && t(o).addClass(p.FADE);var l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
              h = this._getAttachment(l);this.addAttachmentClass(h);var c = !1 === this.config.container ? document.body : t(this.config.container);t(o).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(o).appendTo(c), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new Popper(this.element, o, { placement: h, modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: _.ARROW } }, onCreate: function onCreate(t) {
              t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
            }, onUpdate: function onUpdate(t) {
              e._handlePopperPlacementChange(t);
            } }), t(o).addClass(p.SHOW), "ontouchstart" in document.documentElement && t("body").children().on("mouseover", null, t.noop);var u = function u() {
            e.config.animation && e._fixTransition();var n = e._hoverState;e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === d.OUT && e._leave(null, e);
          };r.supportsTransitionEnd() && t(this.tip).hasClass(p.FADE) ? t(this.tip).one(r.TRANSITION_END, u).emulateTransitionEnd(a._TRANSITION_DURATION) : u();
        }
      }, a.prototype.hide = function (e) {
        var n = this,
            i = this.getTipElement(),
            o = t.Event(this.constructor.Event.HIDE),
            s = function s() {
          n._hoverState !== d.SHOW && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e();
        };t(this.element).trigger(o), o.isDefaultPrevented() || (t(i).removeClass(p.SHOW), "ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), this._activeTrigger[g.CLICK] = !1, this._activeTrigger[g.FOCUS] = !1, this._activeTrigger[g.HOVER] = !1, r.supportsTransitionEnd() && t(this.tip).hasClass(p.FADE) ? t(i).one(r.TRANSITION_END, s).emulateTransitionEnd(150) : s(), this._hoverState = "");
      }, a.prototype.update = function () {
        null !== this._popper && this._popper.scheduleUpdate();
      }, a.prototype.isWithContent = function () {
        return Boolean(this.getTitle());
      }, a.prototype.addAttachmentClass = function (e) {
        t(this.getTipElement()).addClass("bs-tooltip-" + e);
      }, a.prototype.getTipElement = function () {
        return this.tip = this.tip || t(this.config.template)[0];
      }, a.prototype.setContent = function () {
        var e = t(this.getTipElement());this.setElementContent(e.find(_.TOOLTIP_INNER), this.getTitle()), e.removeClass(p.FADE + " " + p.SHOW);
      }, a.prototype.setElementContent = function (e, n) {
        var o = this.config.html;"object" === (void 0 === n ? "undefined" : i(n)) && (n.nodeType || n.jquery) ? o ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[o ? "html" : "text"](n);
      }, a.prototype.getTitle = function () {
        var t = this.element.getAttribute("data-original-title");return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
      }, a.prototype._getAttachment = function (t) {
        return c[t.toUpperCase()];
      }, a.prototype._setListeners = function () {
        var e = this;this.config.trigger.split(" ").forEach(function (n) {
          if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
            return e.toggle(t);
          });else if (n !== g.MANUAL) {
            var i = n === g.HOVER ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                o = n === g.HOVER ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;t(e.element).on(i, e.config.selector, function (t) {
              return e._enter(t);
            }).on(o, e.config.selector, function (t) {
              return e._leave(t);
            });
          }t(e.element).closest(".modal").on("hide.bs.modal", function () {
            return e.hide();
          });
        }), this.config.selector ? this.config = t.extend({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
      }, a.prototype._fixTitle = function () {
        var t = i(this.element.getAttribute("data-original-title"));(this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
      }, a.prototype._enter = function (e, n) {
        var i = this.constructor.DATA_KEY;(n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? g.FOCUS : g.HOVER] = !0), t(n.getTipElement()).hasClass(p.SHOW) || n._hoverState === d.SHOW ? n._hoverState = d.SHOW : (clearTimeout(n._timeout), n._hoverState = d.SHOW, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
          n._hoverState === d.SHOW && n.show();
        }, n.config.delay.show) : n.show());
      }, a.prototype._leave = function (e, n) {
        var i = this.constructor.DATA_KEY;(n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? g.FOCUS : g.HOVER] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = d.OUT, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
          n._hoverState === d.OUT && n.hide();
        }, n.config.delay.hide) : n.hide());
      }, a.prototype._isWithActiveTrigger = function () {
        for (var t in this._activeTrigger) {
          if (this._activeTrigger[t]) return !0;
        }return !1;
      }, a.prototype._getConfig = function (n) {
        return (n = t.extend({}, this.constructor.Default, t(this.element).data(), n)).delay && "number" == typeof n.delay && (n.delay = { show: n.delay, hide: n.delay }), n.title && "number" == typeof n.title && (n.title = n.title.toString()), n.content && "number" == typeof n.content && (n.content = n.content.toString()), r.typeCheckConfig(e, n, this.constructor.DefaultType), n;
      }, a.prototype._getDelegateConfig = function () {
        var t = {};if (this.config) for (var e in this.config) {
          this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
        }return t;
      }, a.prototype._cleanTipClass = function () {
        var e = t(this.getTipElement()),
            n = e.attr("class").match(l);null !== n && n.length > 0 && e.removeClass(n.join(""));
      }, a.prototype._handlePopperPlacementChange = function (t) {
        this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
      }, a.prototype._fixTransition = function () {
        var e = this.getTipElement(),
            n = this.config.animation;null === e.getAttribute("x-placement") && (t(e).removeClass(p.FADE), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n);
      }, a._jQueryInterface = function (e) {
        return this.each(function () {
          var n = t(this).data("bs.tooltip"),
              o = "object" === (void 0 === e ? "undefined" : i(e)) && e;if ((n || !/dispose|hide/.test(e)) && (n || (n = new a(this, o), t(this).data("bs.tooltip", n)), "string" == typeof e)) {
            if (void 0 === n[e]) throw new Error('No method named "' + e + '"');n[e]();
          }
        });
      }, o(a, null, [{ key: "VERSION", get: function get() {
          return "4.0.0-beta";
        } }, { key: "Default", get: function get() {
          return u;
        } }, { key: "NAME", get: function get() {
          return e;
        } }, { key: "DATA_KEY", get: function get() {
          return "bs.tooltip";
        } }, { key: "Event", get: function get() {
          return f;
        } }, { key: "EVENT_KEY", get: function get() {
          return s;
        } }, { key: "DefaultType", get: function get() {
          return h;
        } }]), a;
    }();return t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function () {
      return t.fn[e] = a, m._jQueryInterface;
    }, m;
  }(jQuery));!function (r) {
    var a = "popover",
        l = ".bs.popover",
        h = r.fn[a],
        c = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        u = r.extend({}, s.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
        d = r.extend({}, s.DefaultType, { content: "(string|element|function)" }),
        f = { FADE: "fade", SHOW: "show" },
        p = { TITLE: ".popover-header", CONTENT: ".popover-body" },
        _ = { HIDE: "hide" + l, HIDDEN: "hidden" + l, SHOW: "show" + l, SHOWN: "shown" + l, INSERTED: "inserted" + l, CLICK: "click" + l, FOCUSIN: "focusin" + l, FOCUSOUT: "focusout" + l, MOUSEENTER: "mouseenter" + l, MOUSELEAVE: "mouseleave" + l },
        g = function (s) {
      function h() {
        return n(this, h), t(this, s.apply(this, arguments));
      }return e(h, s), h.prototype.isWithContent = function () {
        return this.getTitle() || this._getContent();
      }, h.prototype.addAttachmentClass = function (t) {
        r(this.getTipElement()).addClass("bs-popover-" + t);
      }, h.prototype.getTipElement = function () {
        return this.tip = this.tip || r(this.config.template)[0];
      }, h.prototype.setContent = function () {
        var t = r(this.getTipElement());this.setElementContent(t.find(p.TITLE), this.getTitle()), this.setElementContent(t.find(p.CONTENT), this._getContent()), t.removeClass(f.FADE + " " + f.SHOW);
      }, h.prototype._getContent = function () {
        return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content);
      }, h.prototype._cleanTipClass = function () {
        var t = r(this.getTipElement()),
            e = t.attr("class").match(c);null !== e && e.length > 0 && t.removeClass(e.join(""));
      }, h._jQueryInterface = function (t) {
        return this.each(function () {
          var e = r(this).data("bs.popover"),
              n = "object" === (void 0 === t ? "undefined" : i(t)) ? t : null;if ((e || !/destroy|hide/.test(t)) && (e || (e = new h(this, n), r(this).data("bs.popover", e)), "string" == typeof t)) {
            if (void 0 === e[t]) throw new Error('No method named "' + t + '"');e[t]();
          }
        });
      }, o(h, null, [{ key: "VERSION", get: function get() {
          return "4.0.0-beta";
        } }, { key: "Default", get: function get() {
          return u;
        } }, { key: "NAME", get: function get() {
          return a;
        } }, { key: "DATA_KEY", get: function get() {
          return "bs.popover";
        } }, { key: "Event", get: function get() {
          return _;
        } }, { key: "EVENT_KEY", get: function get() {
          return l;
        } }, { key: "DefaultType", get: function get() {
          return d;
        } }]), h;
    }(s);r.fn[a] = g._jQueryInterface, r.fn[a].Constructor = g, r.fn[a].noConflict = function () {
      return r.fn[a] = h, g._jQueryInterface;
    };
  }(jQuery);
}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(9)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */var nativeHints = ['native code', '[object MutationObserverConstructor]'];var isNative = function isNative(e) {
  return nativeHints.some(function (t) {
    return -1 < (e || '').toString().indexOf(t);
  });
};var isBrowser = 'undefined' != typeof window,
    longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];var timeoutDuration = 0;for (var e = 0; e < longerTimeoutBrowsers.length; e += 1) {
  if (isBrowser && 0 <= navigator.userAgent.indexOf(longerTimeoutBrowsers[e])) {
    timeoutDuration = 1;break;
  }
}function microtaskDebounce(e) {
  var t = !1,
      o = 0;var i = document.createElement('span'),
      n = new MutationObserver(function () {
    e(), t = !1;
  });return n.observe(i, { attributes: !0 }), function () {
    t || (t = !0, i.setAttribute('x-index', o), ++o);
  };
}function taskDebounce(e) {
  var t = !1;return function () {
    t || (t = !0, setTimeout(function () {
      t = !1, e();
    }, timeoutDuration));
  };
}var supportsNativeMutationObserver = isBrowser && isNative(window.MutationObserver);var debounce = supportsNativeMutationObserver ? microtaskDebounce : taskDebounce;function isFunction(e) {
  return e && '[object Function]' === {}.toString.call(e);
}function getStyleComputedProperty(e, t) {
  if (1 !== e.nodeType) return [];var o = window.getComputedStyle(e, null);return t ? o[t] : o;
}function getParentNode(e) {
  return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
}function getScrollParent(e) {
  if (!e || -1 !== ['HTML', 'BODY', '#document'].indexOf(e.nodeName)) return window.document.body;
  var _getStyleComputedProp = getStyleComputedProperty(e),
      t = _getStyleComputedProp.overflow,
      o = _getStyleComputedProp.overflowX,
      i = _getStyleComputedProp.overflowY;

  return (/(auto|scroll)/.test(t + i + o) ? e : getScrollParent(getParentNode(e))
  );
}function getOffsetParent(e) {
  var t = e && e.offsetParent,
      o = t && t.nodeName;return o && 'BODY' !== o && 'HTML' !== o ? -1 !== ['TD', 'TABLE'].indexOf(t.nodeName) && 'static' === getStyleComputedProperty(t, 'position') ? getOffsetParent(t) : t : window.document.documentElement;
}function isOffsetContainer(e) {
  var t = e.nodeName;
  return 'BODY' !== t && ('HTML' === t || getOffsetParent(e.firstElementChild) === e);
}function getRoot(e) {
  return null === e.parentNode ? e : getRoot(e.parentNode);
}function findCommonOffsetParent(e, t) {
  if (!e || !e.nodeType || !t || !t.nodeType) return window.document.documentElement;var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
      i = o ? e : t,
      n = o ? t : e,
      r = document.createRange();r.setStart(i, 0), r.setEnd(n, 0);var p = r.commonAncestorContainer;
  if (e !== p && t !== p || i.contains(n)) return isOffsetContainer(p) ? p : getOffsetParent(p);var d = getRoot(e);return d.host ? findCommonOffsetParent(d.host, t) : findCommonOffsetParent(e, getRoot(t).host);
}function getScroll(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
  var o = 'top' === t ? 'scrollTop' : 'scrollLeft',
      i = e.nodeName;if ('BODY' === i || 'HTML' === i) {
    var _e = window.document.documentElement,
        _t = window.document.scrollingElement || _e;return _t[o];
  }return e[o];
}function includeScroll(e, t) {
  var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
  var i = getScroll(t, 'top'),
      n = getScroll(t, 'left'),
      r = o ? -1 : 1;return e.top += i * r, e.bottom += i * r, e.left += n * r, e.right += n * r, e;
}function getBordersSize(e, t) {
  var o = 'x' === t ? 'Left' : 'Top',
      i = 'Left' == o ? 'Right' : 'Bottom';return +e['border' + o + 'Width'].split('px')[0] + +e['border' + i + 'Width'].split('px')[0];
}var isIE10 = void 0;var isIE10$1 = function isIE10$1() {
  return void 0 == isIE10 && (isIE10 = -1 !== navigator.appVersion.indexOf('MSIE 10')), isIE10;
};function getSize(e, t, o, i) {
  return Math.max(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], isIE10$1() ? o['offset' + e] + i['margin' + ('Height' === e ? 'Top' : 'Left')] + i['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0);
}function getWindowSizes() {
  var e = window.document.body,
      t = window.document.documentElement,
      o = isIE10$1() && window.getComputedStyle(t);return { height: getSize('Height', e, t, o), width: getSize('Width', e, t, o) };
}var _extends = Object.assign || function (e) {
  for (var t, o = 1; o < arguments.length; o++) {
    for (var i in t = arguments[o], t) {
      Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
  }return e;
};function getClientRect(e) {
  return _extends({}, e, { right: e.left + e.width, bottom: e.top + e.height });
}function getBoundingClientRect(e) {
  var t = {};if (isIE10$1()) try {
    t = e.getBoundingClientRect();var _o = getScroll(e, 'top'),
        _i = getScroll(e, 'left');t.top += _o, t.left += _i, t.bottom += _o, t.right += _i;
  } catch (e) {} else t = e.getBoundingClientRect();var o = { left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top },
      i = 'HTML' === e.nodeName ? getWindowSizes() : {},
      n = i.width || e.clientWidth || o.right - o.left,
      r = i.height || e.clientHeight || o.bottom - o.top;var p = e.offsetWidth - n,
      d = e.offsetHeight - r;if (p || d) {
    var _t2 = getStyleComputedProperty(e);p -= getBordersSize(_t2, 'x'), d -= getBordersSize(_t2, 'y'), o.width -= p, o.height -= d;
  }return getClientRect(o);
}function getOffsetRectRelativeToArbitraryNode(e, t) {
  var o = isIE10$1(),
      i = 'HTML' === t.nodeName,
      n = getBoundingClientRect(e),
      r = getBoundingClientRect(t),
      p = getScrollParent(e),
      d = getStyleComputedProperty(t),
      s = +d.borderTopWidth.split('px')[0],
      a = +d.borderLeftWidth.split('px')[0];var f = getClientRect({ top: n.top - r.top - s, left: n.left - r.left - a, width: n.width, height: n.height });if (f.marginTop = 0, f.marginLeft = 0, !o && i) {
    var _e2 = +d.marginTop.split('px')[0],
        _t3 = +d.marginLeft.split('px')[0];f.top -= s - _e2, f.bottom -= s - _e2, f.left -= a - _t3, f.right -= a - _t3, f.marginTop = _e2, f.marginLeft = _t3;
  }return (o ? t.contains(p) : t === p && 'BODY' !== p.nodeName) && (f = includeScroll(f, t)), f;
}function getViewportOffsetRectRelativeToArtbitraryNode(e) {
  var t = Math.max;var o = window.document.documentElement,
      i = getOffsetRectRelativeToArbitraryNode(e, o),
      n = t(o.clientWidth, window.innerWidth || 0),
      r = t(o.clientHeight, window.innerHeight || 0),
      p = getScroll(o),
      d = getScroll(o, 'left'),
      s = { top: p - i.top + i.marginTop, left: d - i.left + i.marginLeft, width: n, height: r };return getClientRect(s);
}function isFixed(e) {
  var t = e.nodeName;return 'BODY' === t || 'HTML' === t ? !1 : !('fixed' !== getStyleComputedProperty(e, 'position')) || isFixed(getParentNode(e));
}function getBoundaries(e, t, o, i) {
  var n = { top: 0, left: 0 };var r = findCommonOffsetParent(e, t);if ('viewport' === i) n = getViewportOffsetRectRelativeToArtbitraryNode(r);else {
    var _t4 = void 0;'scrollParent' === i ? (_t4 = getScrollParent(getParentNode(e)), 'BODY' === _t4.nodeName && (_t4 = window.document.documentElement)) : 'window' === i ? _t4 = window.document.documentElement : _t4 = i;var _o2 = getOffsetRectRelativeToArbitraryNode(_t4, r);if ('HTML' === _t4.nodeName && !isFixed(r)) {
      var _getWindowSizes = getWindowSizes(),
          _e3 = _getWindowSizes.height,
          _t5 = _getWindowSizes.width;

      n.top += _o2.top - _o2.marginTop, n.bottom = _e3 + _o2.top, n.left += _o2.left - _o2.marginLeft, n.right = _t5 + _o2.left;
    } else n = _o2;
  }return n.left += o, n.top += o, n.right -= o, n.bottom -= o, n;
}function getArea(_ref) {
  var e = _ref.width,
      t = _ref.height;
  return e * t;
}function computeAutoPlacement(e, t, o, i, n) {
  var r = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  if (-1 === e.indexOf('auto')) return e;var p = getBoundaries(o, i, r, n),
      d = { top: { width: p.width, height: t.top - p.top }, right: { width: p.right - t.right, height: p.height }, bottom: { width: p.width, height: p.bottom - t.bottom }, left: { width: t.left - p.left, height: p.height } },
      s = Object.keys(d).map(function (e) {
    return _extends({ key: e }, d[e], { area: getArea(d[e]) });
  }).sort(function (e, t) {
    return t.area - e.area;
  }),
      a = s.filter(function (_ref2) {
    var e = _ref2.width,
        t = _ref2.height;
    return e >= o.clientWidth && t >= o.clientHeight;
  }),
      f = 0 < a.length ? a[0].key : s[0].key,
      l = e.split('-')[1];return f + (l ? '-' + l : '');
}function getReferenceOffsets(e, t, o) {
  var i = findCommonOffsetParent(t, o);return getOffsetRectRelativeToArbitraryNode(o, i);
}function getOuterSizes(e) {
  var t = window.getComputedStyle(e),
      o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
      i = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
      n = { width: e.offsetWidth + i, height: e.offsetHeight + o };return n;
}function getOppositePlacement(e) {
  var t = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };return e.replace(/left|right|bottom|top/g, function (e) {
    return t[e];
  });
}function getPopperOffsets(e, t, o) {
  o = o.split('-')[0];var i = getOuterSizes(e),
      n = { width: i.width, height: i.height },
      r = -1 !== ['right', 'left'].indexOf(o),
      p = r ? 'top' : 'left',
      d = r ? 'left' : 'top',
      s = r ? 'height' : 'width',
      a = r ? 'width' : 'height';return n[p] = t[p] + t[s] / 2 - i[s] / 2, n[d] = o === d ? t[d] - i[a] : t[getOppositePlacement(d)], n;
}function find(e, t) {
  return Array.prototype.find ? e.find(t) : e.filter(t)[0];
}function findIndex(e, t, o) {
  if (Array.prototype.findIndex) return e.findIndex(function (e) {
    return e[t] === o;
  });var i = find(e, function (e) {
    return e[t] === o;
  });return e.indexOf(i);
}function runModifiers(e, t, o) {
  var i = void 0 === o ? e : e.slice(0, findIndex(e, 'name', o));return i.forEach(function (e) {
    e.function && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var o = e.function || e.fn;e.enabled && isFunction(o) && (t.offsets.popper = getClientRect(t.offsets.popper), t.offsets.reference = getClientRect(t.offsets.reference), t = o(t, e));
  }), t;
}function _update() {
  if (this.state.isDestroyed) return;var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };e.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference), e.placement = computeAutoPlacement(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = getPopperOffsets(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = 'absolute', e = runModifiers(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
}function isModifierEnabled(e, t) {
  return e.some(function (_ref3) {
    var e = _ref3.name,
        o = _ref3.enabled;
    return o && e === t;
  });
}function getSupportedPropertyName(e) {
  var t = [!1, 'ms', 'Webkit', 'Moz', 'O'],
      o = e.charAt(0).toUpperCase() + e.slice(1);for (var n = 0; n < t.length - 1; n++) {
    var i = t[n],
        r = i ? '' + i + o : e;if ('undefined' != typeof window.document.body.style[r]) return r;
  }return null;
}function _destroy() {
  return this.state.isDestroyed = !0, isModifierEnabled(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.left = '', this.popper.style.position = '', this.popper.style.top = '', this.popper.style[getSupportedPropertyName('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
}function attachToScrollParents(e, t, o, i) {
  var n = 'BODY' === e.nodeName,
      r = n ? window : e;r.addEventListener(t, o, { passive: !0 }), n || attachToScrollParents(getScrollParent(r.parentNode), t, o, i), i.push(r);
}function setupEventListeners(e, t, o, i) {
  o.updateBound = i, window.addEventListener('resize', o.updateBound, { passive: !0 });var n = getScrollParent(e);return attachToScrollParents(n, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = n, o.eventsEnabled = !0, o;
}function _enableEventListeners() {
  this.state.eventsEnabled || (this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate));
}function removeEventListeners(e, t) {
  return window.removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) {
    e.removeEventListener('scroll', t.updateBound);
  }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t;
}function _disableEventListeners() {
  this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = removeEventListeners(this.reference, this.state));
}function isNumeric(e) {
  return '' !== e && !isNaN(parseFloat(e)) && isFinite(e);
}function setStyles(e, t) {
  Object.keys(t).forEach(function (o) {
    var i = '';-1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && isNumeric(t[o]) && (i = 'px'), e.style[o] = t[o] + i;
  });
}function setAttributes(e, t) {
  Object.keys(t).forEach(function (o) {
    var i = t[o];!1 === i ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
  });
}function applyStyle(e) {
  return setStyles(e.instance.popper, e.styles), setAttributes(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && setStyles(e.arrowElement, e.arrowStyles), e;
}function applyStyleOnLoad(e, t, o, i, n) {
  var r = getReferenceOffsets(n, t, e),
      p = computeAutoPlacement(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);return t.setAttribute('x-placement', p), setStyles(t, { position: 'absolute' }), o;
}function computeStyle(e, t) {
  var o = Math.floor;var i = t.x,
      n = t.y,
      r = e.offsets.popper,
      p = find(e.instance.modifiers, function (e) {
    return 'applyStyle' === e.name;
  }).gpuAcceleration;
  void 0 !== p && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var d = void 0 === p ? t.gpuAcceleration : p,
      s = getOffsetParent(e.instance.popper),
      a = getBoundingClientRect(s),
      f = { position: r.position },
      l = { left: o(r.left), top: o(r.top), bottom: o(r.bottom), right: o(r.right) },
      m = 'bottom' === i ? 'top' : 'bottom',
      c = 'right' === n ? 'left' : 'right',
      h = getSupportedPropertyName('transform');var u = void 0,
      g = void 0;if (g = 'bottom' == m ? -a.height + l.bottom : l.top, u = 'right' == c ? -a.width + l.right : l.left, d && h) f[h] = 'translate3d(' + u + 'px, ' + g + 'px, 0)', f[m] = 0, f[c] = 0, f.willChange = 'transform';else {
    var _e4 = 'bottom' == m ? -1 : 1,
        _t6 = 'right' == c ? -1 : 1;f[m] = g * _e4, f[c] = u * _t6, f.willChange = m + ', ' + c;
  }var b = { "x-placement": e.placement };return e.attributes = _extends({}, b, e.attributes), e.styles = _extends({}, f, e.styles), e.arrowStyles = _extends({}, e.offsets.arrow, e.arrowStyles), e;
}function isModifierRequired(e, t, o) {
  var i = find(e, function (_ref4) {
    var e = _ref4.name;
    return e === t;
  }),
      n = !!i && e.some(function (e) {
    return e.name === o && e.enabled && e.order < i.order;
  });if (!n) {
    var _e5 = '`' + t + '`',
        _i2 = '`' + o + '`';console.warn(_i2 + ' modifier is required by ' + _e5 + ' modifier in order to work, be sure to include it before ' + _e5 + '!');
  }return n;
}function arrow(e, t) {
  if (!isModifierRequired(e.instance.modifiers, 'arrow', 'keepTogether')) return e;var o = t.element;if ('string' == typeof o) {
    if (o = e.instance.popper.querySelector(o), !o) return e;
  } else if (!e.instance.popper.contains(o)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;var i = e.placement.split('-')[0],
      _e$offsets = e.offsets,
      n = _e$offsets.popper,
      r = _e$offsets.reference,
      p = -1 !== ['left', 'right'].indexOf(i),
      d = p ? 'height' : 'width',
      s = p ? 'Top' : 'Left',
      a = s.toLowerCase(),
      f = p ? 'left' : 'top',
      l = p ? 'bottom' : 'right',
      m = getOuterSizes(o)[d];r[l] - m < n[a] && (e.offsets.popper[a] -= n[a] - (r[l] - m)), r[a] + m > n[l] && (e.offsets.popper[a] += r[a] + m - n[l]);var c = r[a] + r[d] / 2 - m / 2,
      h = getStyleComputedProperty(e.instance.popper, 'margin' + s).replace('px', '');var u = c - getClientRect(e.offsets.popper)[a] - h;return u = Math.max(Math.min(n[d] - m, u), 0), e.arrowElement = o, e.offsets.arrow = {}, e.offsets.arrow[a] = Math.round(u), e.offsets.arrow[f] = '', e;
}function getOppositeVariation(e) {
  if ('end' === e) return 'start';return 'start' === e ? 'end' : e;
}var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];var validPlacements = placements.slice(3);function clockwise(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  var o = validPlacements.indexOf(e),
      i = validPlacements.slice(o + 1).concat(validPlacements.slice(0, o));return t ? i.reverse() : i;
}var BEHAVIORS = { FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise' };function flip(e, t) {
  if (isModifierEnabled(e.instance.modifiers, 'inner')) return e;if (e.flipped && e.placement === e.originalPlacement) return e;var o = getBoundaries(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement);var i = e.placement.split('-')[0],
      n = getOppositePlacement(i),
      r = e.placement.split('-')[1] || '',
      p = [];switch (t.behavior) {case BEHAVIORS.FLIP:
      p = [i, n];break;case BEHAVIORS.CLOCKWISE:
      p = clockwise(i);break;case BEHAVIORS.COUNTERCLOCKWISE:
      p = clockwise(i, !0);break;default:
      p = t.behavior;}return p.forEach(function (d, s) {
    if (i !== d || p.length === s + 1) return e;i = e.placement.split('-')[0], n = getOppositePlacement(i);var a = e.offsets.popper,
        f = e.offsets.reference,
        l = Math.floor,
        m = 'left' === i && l(a.right) > l(f.left) || 'right' === i && l(a.left) < l(f.right) || 'top' === i && l(a.bottom) > l(f.top) || 'bottom' === i && l(a.top) < l(f.bottom),
        c = l(a.left) < l(o.left),
        h = l(a.right) > l(o.right),
        u = l(a.top) < l(o.top),
        g = l(a.bottom) > l(o.bottom),
        b = 'left' === i && c || 'right' === i && h || 'top' === i && u || 'bottom' === i && g,
        y = -1 !== ['top', 'bottom'].indexOf(i),
        w = !!t.flipVariations && (y && 'start' === r && c || y && 'end' === r && h || !y && 'start' === r && u || !y && 'end' === r && g);(m || b || w) && (e.flipped = !0, (m || b) && (i = p[s + 1]), w && (r = getOppositeVariation(r)), e.placement = i + (r ? '-' + r : ''), e.offsets.popper = _extends({}, e.offsets.popper, getPopperOffsets(e.instance.popper, e.offsets.reference, e.placement)), e = runModifiers(e.instance.modifiers, e, 'flip'));
  }), e;
}function keepTogether(e) {
  var _e$offsets2 = e.offsets,
      t = _e$offsets2.popper,
      o = _e$offsets2.reference,
      i = e.placement.split('-')[0],
      n = Math.floor,
      r = -1 !== ['top', 'bottom'].indexOf(i),
      p = r ? 'right' : 'bottom',
      d = r ? 'left' : 'top',
      s = r ? 'width' : 'height';
  return t[p] < n(o[d]) && (e.offsets.popper[d] = n(o[d]) - t[s]), t[d] > n(o[p]) && (e.offsets.popper[d] = n(o[p])), e;
}function toValue(e, t, o, i) {
  var n = Math.max;var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
      p = +r[1],
      d = r[2];if (!p) return e;if (0 === d.indexOf('%')) {
    var _e6 = void 0;switch (d) {case '%p':
        _e6 = o;break;case '%':case '%r':default:
        _e6 = i;}var _n = getClientRect(_e6);return _n[t] / 100 * p;
  }if ('vh' === d || 'vw' === d) {
    var _e7 = void 0;return _e7 = 'vh' === d ? n(document.documentElement.clientHeight, window.innerHeight || 0) : n(document.documentElement.clientWidth, window.innerWidth || 0), _e7 / 100 * p;
  }return p;
}function parseOffset(e, t, o, i) {
  var n = [0, 0],
      r = -1 !== ['right', 'left'].indexOf(i),
      p = e.split(/(\+|\-)/).map(function (e) {
    return e.trim();
  }),
      d = p.indexOf(find(p, function (e) {
    return -1 !== e.search(/,|\s/);
  }));p[d] && -1 === p[d].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var s = /\s*,\s*|\s+/;var a = -1 === d ? [p] : [p.slice(0, d).concat([p[d].split(s)[0]]), [p[d].split(s)[1]].concat(p.slice(d + 1))];return a = a.map(function (e, i) {
    var n = (1 === i ? !r : r) ? 'height' : 'width';var p = !1;return e.reduce(function (e, t) {
      return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t);
    }, []).map(function (e) {
      return toValue(e, n, t, o);
    });
  }), a.forEach(function (e, t) {
    e.forEach(function (o, i) {
      isNumeric(o) && (n[t] += o * ('-' === e[i - 1] ? -1 : 1));
    });
  }), n;
}function offset(e, _ref5) {
  var t = _ref5.offset;
  var o = e.placement,
      _e$offsets3 = e.offsets,
      i = _e$offsets3.popper,
      n = _e$offsets3.reference,
      r = o.split('-')[0];
  var p = void 0;return p = isNumeric(+t) ? [+t, 0] : parseOffset(t, i, n, r), 'left' === r ? (i.top += p[0], i.left -= p[1]) : 'right' === r ? (i.top += p[0], i.left += p[1]) : 'top' === r ? (i.left += p[0], i.top -= p[1]) : 'bottom' === r && (i.left += p[0], i.top += p[1]), e.popper = i, e;
}function preventOverflow(e, t) {
  var o = t.boundariesElement || getOffsetParent(e.instance.popper);e.instance.reference === o && (o = getOffsetParent(o));var i = getBoundaries(e.instance.popper, e.instance.reference, t.padding, o);t.boundaries = i;var n = t.priority;var r = e.offsets.popper;var p = {
    primary: function primary(e) {
      var o = r[e];return r[e] < i[e] && !t.escapeWithReference && (o = Math.max(r[e], i[e])), _defineProperty({}, e, o);
    },
    secondary: function secondary(e) {
      var o = 'right' === e ? 'left' : 'top';var n = r[o];return r[e] > i[e] && !t.escapeWithReference && (n = Math.min(r[o], i[e] - ('right' === e ? r.width : r.height))), _defineProperty({}, o, n);
    }
  };return n.forEach(function (e) {
    var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';r = _extends({}, r, p[t](e));
  }), e.offsets.popper = r, e;
}function shift(e) {
  var t = e.placement,
      o = t.split('-')[0],
      i = t.split('-')[1];if (i) {
    var _e$offsets4 = e.offsets,
        _t7 = _e$offsets4.reference,
        n = _e$offsets4.popper,
        r = -1 !== ['bottom', 'top'].indexOf(o),
        p = r ? 'left' : 'top',
        d = r ? 'width' : 'height',
        s = { start: _defineProperty({}, p, _t7[p]), end: _defineProperty({}, p, _t7[p] + _t7[d] - n[d]) };
    e.offsets.popper = _extends({}, n, s[i]);
  }return e;
}function hide(e) {
  if (!isModifierRequired(e.instance.modifiers, 'hide', 'preventOverflow')) return e;var t = e.offsets.reference,
      o = find(e.instance.modifiers, function (e) {
    return 'preventOverflow' === e.name;
  }).boundaries;if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
    if (!0 === e.hide) return e;e.hide = !0, e.attributes['x-out-of-boundaries'] = '';
  } else {
    if (!1 === e.hide) return e;e.hide = !1, e.attributes['x-out-of-boundaries'] = !1;
  }return e;
}function inner(e) {
  var t = e.placement,
      o = t.split('-')[0],
      _e$offsets5 = e.offsets,
      i = _e$offsets5.popper,
      n = _e$offsets5.reference,
      r = -1 !== ['left', 'right'].indexOf(o),
      p = -1 === ['top', 'left'].indexOf(o);return i[r ? 'left' : 'top'] = n[o] - (p ? i[r ? 'width' : 'height'] : 0), e.placement = getOppositePlacement(t), e.offsets.popper = getClientRect(i), e;
}var modifiers = { shift: { order: 100, enabled: !0, fn: shift }, offset: { order: 200, enabled: !0, fn: offset, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: preventOverflow, priority: ['left', 'right', 'top', 'bottom'], padding: 5, boundariesElement: 'scrollParent' }, keepTogether: { order: 400, enabled: !0, fn: keepTogether }, arrow: { order: 500, enabled: !0, fn: arrow, element: '[x-arrow]' }, flip: { order: 600, enabled: !0, fn: flip, behavior: 'flip', padding: 5, boundariesElement: 'viewport' }, inner: { order: 700, enabled: !1, fn: inner }, hide: { order: 800, enabled: !0, fn: hide }, computeStyle: { order: 850, enabled: !0, fn: computeStyle, gpuAcceleration: !0, x: 'bottom', y: 'right' }, applyStyle: { order: 900, enabled: !0, fn: applyStyle, onLoad: applyStyleOnLoad, gpuAcceleration: void 0 } },
    Defaults = { placement: 'bottom', eventsEnabled: !0, removeOnDestroy: !1, onCreate: function onCreate() {}, onUpdate: function onUpdate() {}, modifiers: modifiers };
var Popper = function () {
  function Popper(e, t) {
    var _this = this;

    var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    }, this.update = debounce(this.update.bind(this)), this.options = _extends({}, Popper.Defaults, o), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = e.jquery ? e[0] : e, this.popper = t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(_extends({}, Popper.Defaults.modifiers, o.modifiers)).forEach(function (e) {
      _this.options.modifiers[e] = _extends({}, Popper.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {});
    }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
      return _extends({ name: e }, _this.options.modifiers[e]);
    }).sort(function (e, t) {
      return e.order - t.order;
    }), this.modifiers.forEach(function (e) {
      e.enabled && isFunction(e.onLoad) && e.onLoad(_this.reference, _this.popper, _this.options, e, _this.state);
    }), this.update();var i = this.options.eventsEnabled;i && this.enableEventListeners(), this.state.eventsEnabled = i;
  }

  _createClass(Popper, [{
    key: 'update',
    value: function update() {
      return _update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      return _destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners() {
      return _enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners() {
      return _disableEventListeners.call(this);
    }
  }]);

  return Popper;
}();

Popper.Utils = ('undefined' == typeof window ? global : window).PopperUtils, Popper.placements = placements, Popper.Defaults = Defaults;exports.default = Popper;
//# sourceMappingURL=popper.min.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

/*
 * blueimp Gallery Indicator JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, window, document */

;(function (factory) {
  'use strict';

  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    // Browser globals:
    factory(window.blueimp.helper || window.jQuery, window.blueimp.Gallery);
  }
})(function ($, Gallery) {
  'use strict';

  $.extend(Gallery.prototype.options, {
    // The tag name, Id, element or querySelector of the indicator container:
    indicatorContainer: 'ol',
    // The class for the active indicator:
    activeIndicatorClass: 'active',
    // The list object property (or data attribute) with the thumbnail URL,
    // used as alternative to a thumbnail child element:
    thumbnailProperty: 'thumbnail',
    // Defines if the gallery indicators should display a thumbnail:
    thumbnailIndicators: true
  });

  var _initSlides = Gallery.prototype.initSlides;
  var _addSlide = Gallery.prototype.addSlide;
  var _resetSlides = Gallery.prototype.resetSlides;
  var _handleClick = Gallery.prototype.handleClick;
  var _handleSlide = Gallery.prototype.handleSlide;
  var _handleClose = Gallery.prototype.handleClose;

  $.extend(Gallery.prototype, {
    createIndicator: function createIndicator(obj) {
      var indicator = this.indicatorPrototype.cloneNode(false);
      var title = this.getItemProperty(obj, this.options.titleProperty);
      var thumbnailProperty = this.options.thumbnailProperty;
      var thumbnailUrl;
      var thumbnail;
      if (this.options.thumbnailIndicators) {
        if (thumbnailProperty) {
          thumbnailUrl = this.getItemProperty(obj, thumbnailProperty);
        }
        if (thumbnailUrl === undefined) {
          thumbnail = obj.getElementsByTagName && $(obj).find('img')[0];
          if (thumbnail) {
            thumbnailUrl = thumbnail.src;
          }
        }
        if (thumbnailUrl) {
          indicator.style.backgroundImage = 'url("' + thumbnailUrl + '")';
        }
      }
      if (title) {
        indicator.title = title;
      }
      return indicator;
    },

    addIndicator: function addIndicator(index) {
      if (this.indicatorContainer.length) {
        var indicator = this.createIndicator(this.list[index]);
        indicator.setAttribute('data-index', index);
        this.indicatorContainer[0].appendChild(indicator);
        this.indicators.push(indicator);
      }
    },

    setActiveIndicator: function setActiveIndicator(index) {
      if (this.indicators) {
        if (this.activeIndicator) {
          this.activeIndicator.removeClass(this.options.activeIndicatorClass);
        }
        this.activeIndicator = $(this.indicators[index]);
        this.activeIndicator.addClass(this.options.activeIndicatorClass);
      }
    },

    initSlides: function initSlides(reload) {
      if (!reload) {
        this.indicatorContainer = this.container.find(this.options.indicatorContainer);
        if (this.indicatorContainer.length) {
          this.indicatorPrototype = document.createElement('li');
          this.indicators = this.indicatorContainer[0].children;
        }
      }
      _initSlides.call(this, reload);
    },

    addSlide: function addSlide(index) {
      _addSlide.call(this, index);
      this.addIndicator(index);
    },

    resetSlides: function resetSlides() {
      _resetSlides.call(this);
      this.indicatorContainer.empty();
      this.indicators = [];
    },

    handleClick: function handleClick(event) {
      var target = event.target || event.srcElement;
      var parent = target.parentNode;
      if (parent === this.indicatorContainer[0]) {
        // Click on indicator element
        this.preventDefault(event);
        this.slide(this.getNodeIndex(target));
      } else if (parent.parentNode === this.indicatorContainer[0]) {
        // Click on indicator child element
        this.preventDefault(event);
        this.slide(this.getNodeIndex(parent));
      } else {
        return _handleClick.call(this, event);
      }
    },

    handleSlide: function handleSlide(index) {
      _handleSlide.call(this, index);
      this.setActiveIndicator(index);
    },

    handleClose: function handleClose() {
      if (this.activeIndicator) {
        this.activeIndicator.removeClass(this.options.activeIndicatorClass);
      }
      _handleClose.call(this);
    }

  });

  return Gallery;
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

/*
 * blueimp Gallery Vimeo Video Factory JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, window, document, $f */

;(function (factory) {
  'use strict';

  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    // Browser globals:
    factory(window.blueimp.helper || window.jQuery, window.blueimp.Gallery);
  }
})(function ($, Gallery) {
  'use strict';

  if (!window.postMessage) {
    return Gallery;
  }

  $.extend(Gallery.prototype.options, {
    // The list object property (or data attribute) with the Vimeo video id:
    vimeoVideoIdProperty: 'vimeo',
    // The URL for the Vimeo video player, can be extended with custom parameters:
    // https://developer.vimeo.com/player/embedding
    vimeoPlayerUrl: '//player.vimeo.com/video/VIDEO_ID?api=1&player_id=PLAYER_ID',
    // The prefix for the Vimeo video player ID:
    vimeoPlayerIdPrefix: 'vimeo-player-',
    // Require a click on the native Vimeo player for the initial playback:
    vimeoClickToPlay: true
  });

  var _textFactory = Gallery.prototype.textFactory || Gallery.prototype.imageFactory;
  var VimeoPlayer = function VimeoPlayer(url, videoId, playerId, clickToPlay) {
    this.url = url;
    this.videoId = videoId;
    this.playerId = playerId;
    this.clickToPlay = clickToPlay;
    this.element = document.createElement('div');
    this.listeners = {};
  };
  var counter = 0;

  $.extend(VimeoPlayer.prototype, {
    canPlayType: function canPlayType() {
      return true;
    },

    on: function on(type, func) {
      this.listeners[type] = func;
      return this;
    },

    loadAPI: function loadAPI() {
      var that = this;
      var apiUrl = '//f.vimeocdn.com/js/froogaloop2.min.js';
      var scriptTags = document.getElementsByTagName('script');
      var i = scriptTags.length;
      var scriptTag;
      var called;
      function callback() {
        if (!called && that.playOnReady) {
          that.play();
        }
        called = true;
      }
      while (i) {
        i -= 1;
        if (scriptTags[i].src === apiUrl) {
          scriptTag = scriptTags[i];
          break;
        }
      }
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.src = apiUrl;
      }
      $(scriptTag).on('load', callback);
      scriptTags[0].parentNode.insertBefore(scriptTag, scriptTags[0]);
      // Fix for cached scripts on IE 8:
      if (/loaded|complete/.test(scriptTag.readyState)) {
        callback();
      }
    },

    onReady: function onReady() {
      var that = this;
      this.ready = true;
      this.player.addEvent('play', function () {
        that.hasPlayed = true;
        that.onPlaying();
      });
      this.player.addEvent('pause', function () {
        that.onPause();
      });
      this.player.addEvent('finish', function () {
        that.onPause();
      });
      if (this.playOnReady) {
        this.play();
      }
    },

    onPlaying: function onPlaying() {
      if (this.playStatus < 2) {
        this.listeners.playing();
        this.playStatus = 2;
      }
    },

    onPause: function onPause() {
      this.listeners.pause();
      delete this.playStatus;
    },

    insertIframe: function insertIframe() {
      var iframe = document.createElement('iframe');
      iframe.src = this.url.replace('VIDEO_ID', this.videoId).replace('PLAYER_ID', this.playerId);
      iframe.id = this.playerId;
      this.element.parentNode.replaceChild(iframe, this.element);
      this.element = iframe;
    },

    play: function play() {
      var that = this;
      if (!this.playStatus) {
        this.listeners.play();
        this.playStatus = 1;
      }
      if (this.ready) {
        if (!this.hasPlayed && (this.clickToPlay || window.navigator && /iP(hone|od|ad)/.test(window.navigator.platform))) {
          // Manually trigger the playing callback if clickToPlay
          // is enabled and to workaround a limitation in iOS,
          // which requires synchronous user interaction to start
          // the video playback:
          this.onPlaying();
        } else {
          this.player.api('play');
        }
      } else {
        this.playOnReady = true;
        if (!window.$f) {
          this.loadAPI();
        } else if (!this.player) {
          this.insertIframe();
          this.player = $f(this.element);
          this.player.addEvent('ready', function () {
            that.onReady();
          });
        }
      }
    },

    pause: function pause() {
      if (this.ready) {
        this.player.api('pause');
      } else if (this.playStatus) {
        delete this.playOnReady;
        this.listeners.pause();
        delete this.playStatus;
      }
    }

  });

  $.extend(Gallery.prototype, {
    VimeoPlayer: VimeoPlayer,

    textFactory: function textFactory(obj, callback) {
      var options = this.options;
      var videoId = this.getItemProperty(obj, options.vimeoVideoIdProperty);
      if (videoId) {
        if (this.getItemProperty(obj, options.urlProperty) === undefined) {
          obj[options.urlProperty] = '//vimeo.com/' + videoId;
        }
        counter += 1;
        return this.videoFactory(obj, callback, new VimeoPlayer(options.vimeoPlayerUrl, videoId, options.vimeoPlayerIdPrefix + counter, options.vimeoClickToPlay));
      }
      return _textFactory.call(this, obj, callback);
    }

  });

  return Gallery;
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

/*
 * blueimp Gallery YouTube Video Factory JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, window, document, YT */

;(function (factory) {
  'use strict';

  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    // Browser globals:
    factory(window.blueimp.helper || window.jQuery, window.blueimp.Gallery);
  }
})(function ($, Gallery) {
  'use strict';

  if (!window.postMessage) {
    return Gallery;
  }

  $.extend(Gallery.prototype.options, {
    // The list object property (or data attribute) with the YouTube video id:
    youTubeVideoIdProperty: 'youtube',
    // Optional object with parameters passed to the YouTube video player:
    // https://developers.google.com/youtube/player_parameters
    youTubePlayerVars: {
      wmode: 'transparent'
    },
    // Require a click on the native YouTube player for the initial playback:
    youTubeClickToPlay: true
  });

  var _textFactory = Gallery.prototype.textFactory || Gallery.prototype.imageFactory;
  var YouTubePlayer = function YouTubePlayer(videoId, playerVars, clickToPlay) {
    this.videoId = videoId;
    this.playerVars = playerVars;
    this.clickToPlay = clickToPlay;
    this.element = document.createElement('div');
    this.listeners = {};
  };

  $.extend(YouTubePlayer.prototype, {
    canPlayType: function canPlayType() {
      return true;
    },

    on: function on(type, func) {
      this.listeners[type] = func;
      return this;
    },

    loadAPI: function loadAPI() {
      var that = this;
      var onYouTubeIframeAPIReady = window.onYouTubeIframeAPIReady;
      var apiUrl = '//www.youtube.com/iframe_api';
      var scriptTags = document.getElementsByTagName('script');
      var i = scriptTags.length;
      var scriptTag;
      window.onYouTubeIframeAPIReady = function () {
        if (onYouTubeIframeAPIReady) {
          onYouTubeIframeAPIReady.apply(this);
        }
        if (that.playOnReady) {
          that.play();
        }
      };
      while (i) {
        i -= 1;
        if (scriptTags[i].src === apiUrl) {
          return;
        }
      }
      scriptTag = document.createElement('script');
      scriptTag.src = apiUrl;
      scriptTags[0].parentNode.insertBefore(scriptTag, scriptTags[0]);
    },

    onReady: function onReady() {
      this.ready = true;
      if (this.playOnReady) {
        this.play();
      }
    },

    onPlaying: function onPlaying() {
      if (this.playStatus < 2) {
        this.listeners.playing();
        this.playStatus = 2;
      }
    },

    onPause: function onPause() {
      Gallery.prototype.setTimeout.call(this, this.checkSeek, null, 2000);
    },

    checkSeek: function checkSeek() {
      if (this.stateChange === YT.PlayerState.PAUSED || this.stateChange === YT.PlayerState.ENDED) {
        // check if current state change is actually paused
        this.listeners.pause();
        delete this.playStatus;
      }
    },

    onStateChange: function onStateChange(event) {
      switch (event.data) {
        case YT.PlayerState.PLAYING:
          this.hasPlayed = true;
          this.onPlaying();
          break;
        case YT.PlayerState.PAUSED:
        case YT.PlayerState.ENDED:
          this.onPause();
          break;
      }
      // Save most recent state change to this.stateChange
      this.stateChange = event.data;
    },

    onError: function onError(event) {
      this.listeners.error(event);
    },

    play: function play() {
      var that = this;
      if (!this.playStatus) {
        this.listeners.play();
        this.playStatus = 1;
      }
      if (this.ready) {
        if (!this.hasPlayed && (this.clickToPlay || window.navigator && /iP(hone|od|ad)/.test(window.navigator.platform))) {
          // Manually trigger the playing callback if clickToPlay
          // is enabled and to workaround a limitation in iOS,
          // which requires synchronous user interaction to start
          // the video playback:
          this.onPlaying();
        } else {
          this.player.playVideo();
        }
      } else {
        this.playOnReady = true;
        if (!(window.YT && YT.Player)) {
          this.loadAPI();
        } else if (!this.player) {
          this.player = new YT.Player(this.element, {
            videoId: this.videoId,
            playerVars: this.playerVars,
            events: {
              onReady: function onReady() {
                that.onReady();
              },
              onStateChange: function onStateChange(event) {
                that.onStateChange(event);
              },
              onError: function onError(event) {
                that.onError(event);
              }
            }
          });
        }
      }
    },

    pause: function pause() {
      if (this.ready) {
        this.player.pauseVideo();
      } else if (this.playStatus) {
        delete this.playOnReady;
        this.listeners.pause();
        delete this.playStatus;
      }
    }

  });

  $.extend(Gallery.prototype, {
    YouTubePlayer: YouTubePlayer,

    textFactory: function textFactory(obj, callback) {
      var options = this.options;
      var videoId = this.getItemProperty(obj, options.youTubeVideoIdProperty);
      if (videoId) {
        if (this.getItemProperty(obj, options.urlProperty) === undefined) {
          obj[options.urlProperty] = '//www.youtube.com/watch?v=' + videoId;
        }
        if (this.getItemProperty(obj, options.videoPosterProperty) === undefined) {
          obj[options.videoPosterProperty] = '//img.youtube.com/vi/' + videoId + '/maxresdefault.jpg';
        }
        return this.videoFactory(obj, callback, new YouTubePlayer(videoId, options.youTubePlayerVars, options.youTubeClickToPlay));
      }
      return _textFactory.call(this, obj, callback);
    }

  });

  return Gallery;
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

!function (t) {
  "use strict";
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (window.blueimp = window.blueimp || {}, window.blueimp.Gallery = t(window.blueimp.helper || window.jQuery));
}(function (t) {
  "use strict";
  function e(t, i) {
    return void 0 === document.body.style.maxHeight ? null : this && this.options === e.prototype.options ? t && t.length ? (this.list = t, this.num = t.length, this.initOptions(i), void this.initialize()) : void this.console.log("blueimp Gallery: No or empty list provided as first argument.", t) : new e(t, i);
  }return t.extend(e.prototype, { options: { container: "#blueimp-gallery", slidesContainer: "div", titleElement: "h3", displayClass: "blueimp-gallery-display", controlsClass: "blueimp-gallery-controls", singleClass: "blueimp-gallery-single", leftEdgeClass: "blueimp-gallery-left", rightEdgeClass: "blueimp-gallery-right", playingClass: "blueimp-gallery-playing", slideClass: "slide", slideLoadingClass: "slide-loading", slideErrorClass: "slide-error", slideContentClass: "slide-content", toggleClass: "toggle", prevClass: "prev", nextClass: "next", closeClass: "close", playPauseClass: "play-pause", typeProperty: "type", titleProperty: "title", urlProperty: "href", srcsetProperty: "urlset", displayTransition: !0, clearSlides: !0, stretchImages: !1, toggleControlsOnReturn: !0, toggleControlsOnSlideClick: !0, toggleSlideshowOnSpace: !0, enableKeyboardNavigation: !0, closeOnEscape: !0, closeOnSlideClick: !0, closeOnSwipeUpOrDown: !0, emulateTouchEvents: !0, stopTouchEventsPropagation: !1, hidePageScrollbars: !0, disableScroll: !0, carousel: !1, continuous: !0, unloadElements: !0, startSlideshow: !1, slideshowInterval: 5e3, index: 0, preloadRange: 2, transitionSpeed: 400, slideshowTransitionSpeed: void 0, event: void 0, onopen: void 0, onopened: void 0, onslide: void 0, onslideend: void 0, onslidecomplete: void 0, onclose: void 0, onclosed: void 0 }, carouselOptions: { hidePageScrollbars: !1, toggleControlsOnReturn: !1, toggleSlideshowOnSpace: !1, enableKeyboardNavigation: !1, closeOnEscape: !1, closeOnSlideClick: !1, closeOnSwipeUpOrDown: !1, disableScroll: !1, startSlideshow: !0 }, console: window.console && "function" == typeof window.console.log ? window.console : { log: function log() {} }, support: function (e) {
      function i() {
        var t,
            i,
            s = o.transition;document.body.appendChild(e), s && (t = s.name.slice(0, -9) + "ransform", void 0 !== e.style[t] && (e.style[t] = "translateZ(0)", i = window.getComputedStyle(e).getPropertyValue(s.prefix + "transform"), o.transform = { prefix: s.prefix, name: t, translate: !0, translateZ: !!i && "none" !== i })), void 0 !== e.style.backgroundSize && (o.backgroundSize = {}, e.style.backgroundSize = "contain", o.backgroundSize.contain = "contain" === window.getComputedStyle(e).getPropertyValue("background-size"), e.style.backgroundSize = "cover", o.backgroundSize.cover = "cover" === window.getComputedStyle(e).getPropertyValue("background-size")), document.body.removeChild(e);
      }var s,
          o = { touch: void 0 !== window.ontouchstart || window.DocumentTouch && document instanceof DocumentTouch },
          n = { webkitTransition: { end: "webkitTransitionEnd", prefix: "-webkit-" }, MozTransition: { end: "transitionend", prefix: "-moz-" }, OTransition: { end: "otransitionend", prefix: "-o-" }, transition: { end: "transitionend", prefix: "" } };for (s in n) {
        if (n.hasOwnProperty(s) && void 0 !== e.style[s]) {
          o.transition = n[s], o.transition.name = s;break;
        }
      }return document.body ? i() : t(document).on("DOMContentLoaded", i), o;
    }(document.createElement("div")), requestAnimationFrame: window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame, initialize: function initialize() {
      return this.initStartIndex(), this.initWidget() !== !1 && (this.initEventListeners(), this.onslide(this.index), this.ontransitionend(), void (this.options.startSlideshow && this.play()));
    }, slide: function slide(t, e) {
      window.clearTimeout(this.timeout);var i,
          s,
          o,
          n = this.index;if (n !== t && 1 !== this.num) {
        if (e || (e = this.options.transitionSpeed), this.support.transform) {
          for (this.options.continuous || (t = this.circle(t)), i = Math.abs(n - t) / (n - t), this.options.continuous && (s = i, i = -this.positions[this.circle(t)] / this.slideWidth, i !== s && (t = -i * this.num + t)), o = Math.abs(n - t) - 1; o;) {
            o -= 1, this.move(this.circle((t > n ? t : n) - o - 1), this.slideWidth * i, 0);
          }t = this.circle(t), this.move(n, this.slideWidth * i, e), this.move(t, 0, e), this.options.continuous && this.move(this.circle(t - i), -(this.slideWidth * i), 0);
        } else t = this.circle(t), this.animate(n * -this.slideWidth, t * -this.slideWidth, e);this.onslide(t);
      }
    }, getIndex: function getIndex() {
      return this.index;
    }, getNumber: function getNumber() {
      return this.num;
    }, prev: function prev() {
      (this.options.continuous || this.index) && this.slide(this.index - 1);
    }, next: function next() {
      (this.options.continuous || this.index < this.num - 1) && this.slide(this.index + 1);
    }, play: function play(t) {
      var e = this;window.clearTimeout(this.timeout), this.interval = t || this.options.slideshowInterval, this.elements[this.index] > 1 && (this.timeout = this.setTimeout(!this.requestAnimationFrame && this.slide || function (t, i) {
        e.animationFrameId = e.requestAnimationFrame.call(window, function () {
          e.slide(t, i);
        });
      }, [this.index + 1, this.options.slideshowTransitionSpeed], this.interval)), this.container.addClass(this.options.playingClass);
    }, pause: function pause() {
      window.clearTimeout(this.timeout), this.interval = null, this.container.removeClass(this.options.playingClass);
    }, add: function add(t) {
      var e;for (t.concat || (t = Array.prototype.slice.call(t)), this.list.concat || (this.list = Array.prototype.slice.call(this.list)), this.list = this.list.concat(t), this.num = this.list.length, this.num > 2 && null === this.options.continuous && (this.options.continuous = !0, this.container.removeClass(this.options.leftEdgeClass)), this.container.removeClass(this.options.rightEdgeClass).removeClass(this.options.singleClass), e = this.num - t.length; e < this.num; e += 1) {
        this.addSlide(e), this.positionSlide(e);
      }this.positions.length = this.num, this.initSlides(!0);
    }, resetSlides: function resetSlides() {
      this.slidesContainer.empty(), this.unloadAllSlides(), this.slides = [];
    }, handleClose: function handleClose() {
      var t = this.options;this.destroyEventListeners(), this.pause(), this.container[0].style.display = "none", this.container.removeClass(t.displayClass).removeClass(t.singleClass).removeClass(t.leftEdgeClass).removeClass(t.rightEdgeClass), t.hidePageScrollbars && (document.body.style.overflow = this.bodyOverflowStyle), this.options.clearSlides && this.resetSlides(), this.options.onclosed && this.options.onclosed.call(this);
    }, close: function close() {
      function t(i) {
        i.target === e.container[0] && (e.container.off(e.support.transition.end, t), e.handleClose());
      }var e = this;this.options.onclose && this.options.onclose.call(this), this.support.transition && this.options.displayTransition ? (this.container.on(this.support.transition.end, t), this.container.removeClass(this.options.displayClass)) : this.handleClose();
    }, circle: function circle(t) {
      return (this.num + t % this.num) % this.num;
    }, move: function move(t, e, i) {
      this.translateX(t, e, i), this.positions[t] = e;
    }, translate: function translate(t, e, i, s) {
      var o = this.slides[t].style,
          n = this.support.transition,
          l = this.support.transform;o[n.name + "Duration"] = s + "ms", o[l.name] = "translate(" + e + "px, " + i + "px)" + (l.translateZ ? " translateZ(0)" : "");
    }, translateX: function translateX(t, e, i) {
      this.translate(t, e, 0, i);
    }, translateY: function translateY(t, e, i) {
      this.translate(t, 0, e, i);
    }, animate: function animate(t, e, i) {
      if (!i) return void (this.slidesContainer[0].style.left = e + "px");var s = this,
          o = new Date().getTime(),
          n = window.setInterval(function () {
        var l = new Date().getTime() - o;return l > i ? (s.slidesContainer[0].style.left = e + "px", s.ontransitionend(), void window.clearInterval(n)) : void (s.slidesContainer[0].style.left = (e - t) * (Math.floor(l / i * 100) / 100) + t + "px");
      }, 4);
    }, preventDefault: function preventDefault(t) {
      t.preventDefault ? t.preventDefault() : t.returnValue = !1;
    }, stopPropagation: function stopPropagation(t) {
      t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0;
    }, onresize: function onresize() {
      this.initSlides(!0);
    }, onmousedown: function onmousedown(t) {
      t.which && 1 === t.which && "VIDEO" !== t.target.nodeName && (t.preventDefault(), (t.originalEvent || t).touches = [{ pageX: t.pageX, pageY: t.pageY }], this.ontouchstart(t));
    }, onmousemove: function onmousemove(t) {
      this.touchStart && ((t.originalEvent || t).touches = [{ pageX: t.pageX, pageY: t.pageY }], this.ontouchmove(t));
    }, onmouseup: function onmouseup(t) {
      this.touchStart && (this.ontouchend(t), delete this.touchStart);
    }, onmouseout: function onmouseout(e) {
      if (this.touchStart) {
        var i = e.target,
            s = e.relatedTarget;s && (s === i || t.contains(i, s)) || this.onmouseup(e);
      }
    }, ontouchstart: function ontouchstart(t) {
      this.options.stopTouchEventsPropagation && this.stopPropagation(t);var e = (t.originalEvent || t).touches[0];this.touchStart = { x: e.pageX, y: e.pageY, time: Date.now() }, this.isScrolling = void 0, this.touchDelta = {};
    }, ontouchmove: function ontouchmove(t) {
      this.options.stopTouchEventsPropagation && this.stopPropagation(t);var e,
          i,
          s = (t.originalEvent || t).touches[0],
          o = (t.originalEvent || t).scale,
          n = this.index;if (!(s.length > 1 || o && 1 !== o)) if (this.options.disableScroll && t.preventDefault(), this.touchDelta = { x: s.pageX - this.touchStart.x, y: s.pageY - this.touchStart.y }, e = this.touchDelta.x, void 0 === this.isScrolling && (this.isScrolling = this.isScrolling || Math.abs(e) < Math.abs(this.touchDelta.y)), this.isScrolling) this.translateY(n, this.touchDelta.y + this.positions[n], 0);else for (t.preventDefault(), window.clearTimeout(this.timeout), this.options.continuous ? i = [this.circle(n + 1), n, this.circle(n - 1)] : (this.touchDelta.x = e /= !n && e > 0 || n === this.num - 1 && e < 0 ? Math.abs(e) / this.slideWidth + 1 : 1, i = [n], n && i.push(n - 1), n < this.num - 1 && i.unshift(n + 1)); i.length;) {
        n = i.pop(), this.translateX(n, e + this.positions[n], 0);
      }
    }, ontouchend: function ontouchend(t) {
      this.options.stopTouchEventsPropagation && this.stopPropagation(t);var e,
          i,
          s,
          o,
          n,
          l = this.index,
          a = this.options.transitionSpeed,
          r = this.slideWidth,
          h = Number(Date.now() - this.touchStart.time) < 250,
          d = h && Math.abs(this.touchDelta.x) > 20 || Math.abs(this.touchDelta.x) > r / 2,
          c = !l && this.touchDelta.x > 0 || l === this.num - 1 && this.touchDelta.x < 0,
          u = !d && this.options.closeOnSwipeUpOrDown && (h && Math.abs(this.touchDelta.y) > 20 || Math.abs(this.touchDelta.y) > this.slideHeight / 2);this.options.continuous && (c = !1), e = this.touchDelta.x < 0 ? -1 : 1, this.isScrolling ? u ? this.close() : this.translateY(l, 0, a) : d && !c ? (i = l + e, s = l - e, o = r * e, n = -r * e, this.options.continuous ? (this.move(this.circle(i), o, 0), this.move(this.circle(l - 2 * e), n, 0)) : i >= 0 && i < this.num && this.move(i, o, 0), this.move(l, this.positions[l] + o, a), this.move(this.circle(s), this.positions[this.circle(s)] + o, a), l = this.circle(s), this.onslide(l)) : this.options.continuous ? (this.move(this.circle(l - 1), -r, a), this.move(l, 0, a), this.move(this.circle(l + 1), r, a)) : (l && this.move(l - 1, -r, a), this.move(l, 0, a), l < this.num - 1 && this.move(l + 1, r, a));
    }, ontouchcancel: function ontouchcancel(t) {
      this.touchStart && (this.ontouchend(t), delete this.touchStart);
    }, ontransitionend: function ontransitionend(t) {
      var e = this.slides[this.index];t && e !== t.target || (this.interval && this.play(), this.setTimeout(this.options.onslideend, [this.index, e]));
    }, oncomplete: function oncomplete(e) {
      var i,
          s = e.target || e.srcElement,
          o = s && s.parentNode;s && o && (i = this.getNodeIndex(o), t(o).removeClass(this.options.slideLoadingClass), "error" === e.type ? (t(o).addClass(this.options.slideErrorClass), this.elements[i] = 3) : this.elements[i] = 2, s.clientHeight > this.container[0].clientHeight && (s.style.maxHeight = this.container[0].clientHeight), this.interval && this.slides[this.index] === o && this.play(), this.setTimeout(this.options.onslidecomplete, [i, o]));
    }, onload: function onload(t) {
      this.oncomplete(t);
    }, onerror: function onerror(t) {
      this.oncomplete(t);
    }, onkeydown: function onkeydown(t) {
      switch (t.which || t.keyCode) {case 13:
          this.options.toggleControlsOnReturn && (this.preventDefault(t), this.toggleControls());break;case 27:
          this.options.closeOnEscape && (this.close(), t.stopImmediatePropagation());break;case 32:
          this.options.toggleSlideshowOnSpace && (this.preventDefault(t), this.toggleSlideshow());break;case 37:
          this.options.enableKeyboardNavigation && (this.preventDefault(t), this.prev());break;case 39:
          this.options.enableKeyboardNavigation && (this.preventDefault(t), this.next());}
    }, handleClick: function handleClick(e) {
      function i(e) {
        return t(o).hasClass(e) || t(n).hasClass(e);
      }var s = this.options,
          o = e.target || e.srcElement,
          n = o.parentNode;i(s.toggleClass) ? (this.preventDefault(e), this.toggleControls()) : i(s.prevClass) ? (this.preventDefault(e), this.prev()) : i(s.nextClass) ? (this.preventDefault(e), this.next()) : i(s.closeClass) ? (this.preventDefault(e), this.close()) : i(s.playPauseClass) ? (this.preventDefault(e), this.toggleSlideshow()) : n === this.slidesContainer[0] ? s.closeOnSlideClick ? (this.preventDefault(e), this.close()) : s.toggleControlsOnSlideClick && (this.preventDefault(e), this.toggleControls()) : n.parentNode && n.parentNode === this.slidesContainer[0] && s.toggleControlsOnSlideClick && (this.preventDefault(e), this.toggleControls());
    }, onclick: function onclick(t) {
      return this.options.emulateTouchEvents && this.touchDelta && (Math.abs(this.touchDelta.x) > 20 || Math.abs(this.touchDelta.y) > 20) ? void delete this.touchDelta : this.handleClick(t);
    }, updateEdgeClasses: function updateEdgeClasses(t) {
      t ? this.container.removeClass(this.options.leftEdgeClass) : this.container.addClass(this.options.leftEdgeClass), t === this.num - 1 ? this.container.addClass(this.options.rightEdgeClass) : this.container.removeClass(this.options.rightEdgeClass);
    }, handleSlide: function handleSlide(t) {
      this.options.continuous || this.updateEdgeClasses(t), this.loadElements(t), this.options.unloadElements && this.unloadElements(t), this.setTitle(t);
    }, onslide: function onslide(t) {
      this.index = t, this.handleSlide(t), this.setTimeout(this.options.onslide, [t, this.slides[t]]);
    }, setTitle: function setTitle(t) {
      var e = this.slides[t].firstChild.title,
          i = this.titleElement;i.length && (this.titleElement.empty(), e && i[0].appendChild(document.createTextNode(e)));
    }, setTimeout: function setTimeout(t, e, i) {
      var s = this;return t && window.setTimeout(function () {
        t.apply(s, e || []);
      }, i || 0);
    }, imageFactory: function imageFactory(e, i) {
      function s(e) {
        if (!o) {
          if (e = { type: e.type, target: n }, !n.parentNode) return a.setTimeout(s, [e]);o = !0, t(r).off("load error", s), d && "load" === e.type && (n.style.background = 'url("' + h + '") center no-repeat', n.style.backgroundSize = d), i(e);
        }
      }var o,
          n,
          l,
          a = this,
          r = this.imagePrototype.cloneNode(!1),
          h = e,
          d = this.options.stretchImages;return "string" != typeof h && (h = this.getItemProperty(e, this.options.urlProperty), l = this.getItemProperty(e, this.options.titleProperty)), d === !0 && (d = "contain"), d = this.support.backgroundSize && this.support.backgroundSize[d] && d, d ? n = this.elementPrototype.cloneNode(!1) : (n = r, r.draggable = !1), l && (n.title = l), t(r).on("load error", s), r.src = h, n;
    }, createElement: function createElement(e, i) {
      var s = e && this.getItemProperty(e, this.options.typeProperty),
          o = s && this[s.split("/")[0] + "Factory"] || this.imageFactory,
          n = e && o.call(this, e, i),
          l = this.getItemProperty(e, this.options.srcsetProperty);return n || (n = this.elementPrototype.cloneNode(!1), this.setTimeout(i, [{ type: "error", target: n }])), l && n.setAttribute("srcset", l), t(n).addClass(this.options.slideContentClass), n;
    }, loadElement: function loadElement(e) {
      this.elements[e] || (this.slides[e].firstChild ? this.elements[e] = t(this.slides[e]).hasClass(this.options.slideErrorClass) ? 3 : 2 : (this.elements[e] = 1, t(this.slides[e]).addClass(this.options.slideLoadingClass), this.slides[e].appendChild(this.createElement(this.list[e], this.proxyListener))));
    }, loadElements: function loadElements(t) {
      var e,
          i = Math.min(this.num, 2 * this.options.preloadRange + 1),
          s = t;for (e = 0; e < i; e += 1) {
        s += e * (e % 2 === 0 ? -1 : 1), s = this.circle(s), this.loadElement(s);
      }
    }, unloadElements: function unloadElements(t) {
      var e, i;for (e in this.elements) {
        this.elements.hasOwnProperty(e) && (i = Math.abs(t - e), i > this.options.preloadRange && i + this.options.preloadRange < this.num && (this.unloadSlide(e), delete this.elements[e]));
      }
    }, addSlide: function addSlide(t) {
      var e = this.slidePrototype.cloneNode(!1);e.setAttribute("data-index", t), this.slidesContainer[0].appendChild(e), this.slides.push(e);
    }, positionSlide: function positionSlide(t) {
      var e = this.slides[t];e.style.width = this.slideWidth + "px", this.support.transform && (e.style.left = t * -this.slideWidth + "px", this.move(t, this.index > t ? -this.slideWidth : this.index < t ? this.slideWidth : 0, 0));
    }, initSlides: function initSlides(e) {
      var i, s;for (e || (this.positions = [], this.positions.length = this.num, this.elements = {}, this.imagePrototype = document.createElement("img"), this.elementPrototype = document.createElement("div"), this.slidePrototype = document.createElement("div"), t(this.slidePrototype).addClass(this.options.slideClass), this.slides = this.slidesContainer[0].children, i = this.options.clearSlides || this.slides.length !== this.num), this.slideWidth = this.container[0].offsetWidth, this.slideHeight = this.container[0].offsetHeight, this.slidesContainer[0].style.width = this.num * this.slideWidth + "px", i && this.resetSlides(), s = 0; s < this.num; s += 1) {
        i && this.addSlide(s), this.positionSlide(s);
      }this.options.continuous && this.support.transform && (this.move(this.circle(this.index - 1), -this.slideWidth, 0), this.move(this.circle(this.index + 1), this.slideWidth, 0)), this.support.transform || (this.slidesContainer[0].style.left = this.index * -this.slideWidth + "px");
    }, unloadSlide: function unloadSlide(t) {
      var e, i;e = this.slides[t], i = e.firstChild, null !== i && e.removeChild(i);
    }, unloadAllSlides: function unloadAllSlides() {
      var t, e;for (t = 0, e = this.slides.length; t < e; t++) {
        this.unloadSlide(t);
      }
    }, toggleControls: function toggleControls() {
      var t = this.options.controlsClass;this.container.hasClass(t) ? this.container.removeClass(t) : this.container.addClass(t);
    }, toggleSlideshow: function toggleSlideshow() {
      this.interval ? this.pause() : this.play();
    }, getNodeIndex: function getNodeIndex(t) {
      return parseInt(t.getAttribute("data-index"), 10);
    }, getNestedProperty: function getNestedProperty(t, e) {
      return e.replace(/\[(?:'([^']+)'|"([^"]+)"|(\d+))\]|(?:(?:^|\.)([^\.\[]+))/g, function (e, i, s, o, n) {
        var l = n || i || s || o && parseInt(o, 10);e && t && (t = t[l]);
      }), t;
    }, getDataProperty: function getDataProperty(e, i) {
      var s;if (e.dataset ? s = e.dataset[i.replace(/-([a-z])/g, function (t, e) {
        return e.toUpperCase();
      })] : e.getAttribute && (s = e.getAttribute("data-" + i.replace(/([A-Z])/g, "-$1").toLowerCase())), "string" == typeof s) {
        if (/^(true|false|null|-?\d+(\.\d+)?|\{[\s\S]*\}|\[[\s\S]*\])$/.test(s)) try {
          return t.parseJSON(s);
        } catch (t) {}return s;
      }
    }, getItemProperty: function getItemProperty(t, e) {
      var i = this.getDataProperty(t, e);return void 0 === i && (i = t[e]), void 0 === i && (i = this.getNestedProperty(t, e)), i;
    }, initStartIndex: function initStartIndex() {
      var t,
          e = this.options.index,
          i = this.options.urlProperty;if (e && "number" != typeof e) for (t = 0; t < this.num; t += 1) {
        if (this.list[t] === e || this.getItemProperty(this.list[t], i) === this.getItemProperty(e, i)) {
          e = t;break;
        }
      }this.index = this.circle(parseInt(e, 10) || 0);
    }, initEventListeners: function initEventListeners() {
      function e(t) {
        var e = i.support.transition && i.support.transition.end === t.type ? "transitionend" : t.type;i["on" + e](t);
      }var i = this,
          s = this.slidesContainer;t(window).on("resize", e), t(document.body).on("keydown", e), this.container.on("click", e), this.support.touch ? s.on("touchstart touchmove touchend touchcancel", e) : this.options.emulateTouchEvents && this.support.transition && s.on("mousedown mousemove mouseup mouseout", e), this.support.transition && s.on(this.support.transition.end, e), this.proxyListener = e;
    }, destroyEventListeners: function destroyEventListeners() {
      var e = this.slidesContainer,
          i = this.proxyListener;t(window).off("resize", i), t(document.body).off("keydown", i), this.container.off("click", i), this.support.touch ? e.off("touchstart touchmove touchend touchcancel", i) : this.options.emulateTouchEvents && this.support.transition && e.off("mousedown mousemove mouseup mouseout", i), this.support.transition && e.off(this.support.transition.end, i);
    }, handleOpen: function handleOpen() {
      this.options.onopened && this.options.onopened.call(this);
    }, initWidget: function initWidget() {
      function e(t) {
        t.target === i.container[0] && (i.container.off(i.support.transition.end, e), i.handleOpen());
      }var i = this;return this.container = t(this.options.container), this.container.length ? (this.slidesContainer = this.container.find(this.options.slidesContainer).first(), this.slidesContainer.length ? (this.titleElement = this.container.find(this.options.titleElement).first(), 1 === this.num && this.container.addClass(this.options.singleClass), this.options.onopen && this.options.onopen.call(this), this.support.transition && this.options.displayTransition ? this.container.on(this.support.transition.end, e) : this.handleOpen(), this.options.hidePageScrollbars && (this.bodyOverflowStyle = document.body.style.overflow, document.body.style.overflow = "hidden"), this.container[0].style.display = "block", this.initSlides(), void this.container.addClass(this.options.displayClass)) : (this.console.log("blueimp Gallery: Slides container not found.", this.options.slidesContainer), !1)) : (this.console.log("blueimp Gallery: Widget container not found.", this.options.container), !1);
    }, initOptions: function initOptions(e) {
      this.options = t.extend({}, this.options), (e && e.carousel || this.options.carousel && (!e || e.carousel !== !1)) && t.extend(this.options, this.carouselOptions), t.extend(this.options, e), this.num < 3 && (this.options.continuous = !!this.options.continuous && null), this.support.transition || (this.options.emulateTouchEvents = !1), this.options.event && this.preventDefault(this.options.event);
    } }), e;
}), function (t) {
  "use strict";
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery);
}(function (t, e) {
  "use strict";
  t.extend(e.prototype.options, { fullScreen: !1 });var i = e.prototype.initialize,
      s = e.prototype.close;return t.extend(e.prototype, { getFullScreenElement: function getFullScreenElement() {
      return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
    }, requestFullScreen: function requestFullScreen(t) {
      t.requestFullscreen ? t.requestFullscreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.msRequestFullscreen && t.msRequestFullscreen();
    }, exitFullScreen: function exitFullScreen() {
      document.exitFullscreen ? document.exitFullscreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen();
    }, initialize: function initialize() {
      i.call(this), this.options.fullScreen && !this.getFullScreenElement() && this.requestFullScreen(this.container[0]);
    }, close: function close() {
      this.getFullScreenElement() === this.container[0] && this.exitFullScreen(), s.call(this);
    } }), e;
}), function (t) {
  "use strict";
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery);
}(function (t, e) {
  "use strict";
  t.extend(e.prototype.options, { indicatorContainer: "ol", activeIndicatorClass: "active", thumbnailProperty: "thumbnail", thumbnailIndicators: !0 });var i = e.prototype.initSlides,
      s = e.prototype.addSlide,
      o = e.prototype.resetSlides,
      n = e.prototype.handleClick,
      l = e.prototype.handleSlide,
      a = e.prototype.handleClose;return t.extend(e.prototype, { createIndicator: function createIndicator(e) {
      var i,
          s,
          o = this.indicatorPrototype.cloneNode(!1),
          n = this.getItemProperty(e, this.options.titleProperty),
          l = this.options.thumbnailProperty;return this.options.thumbnailIndicators && (l && (i = this.getItemProperty(e, l)), void 0 === i && (s = e.getElementsByTagName && t(e).find("img")[0], s && (i = s.src)), i && (o.style.backgroundImage = 'url("' + i + '")')), n && (o.title = n), o;
    }, addIndicator: function addIndicator(t) {
      if (this.indicatorContainer.length) {
        var e = this.createIndicator(this.list[t]);e.setAttribute("data-index", t), this.indicatorContainer[0].appendChild(e), this.indicators.push(e);
      }
    }, setActiveIndicator: function setActiveIndicator(e) {
      this.indicators && (this.activeIndicator && this.activeIndicator.removeClass(this.options.activeIndicatorClass), this.activeIndicator = t(this.indicators[e]), this.activeIndicator.addClass(this.options.activeIndicatorClass));
    }, initSlides: function initSlides(t) {
      t || (this.indicatorContainer = this.container.find(this.options.indicatorContainer), this.indicatorContainer.length && (this.indicatorPrototype = document.createElement("li"), this.indicators = this.indicatorContainer[0].children)), i.call(this, t);
    }, addSlide: function addSlide(t) {
      s.call(this, t), this.addIndicator(t);
    }, resetSlides: function resetSlides() {
      o.call(this), this.indicatorContainer.empty(), this.indicators = [];
    }, handleClick: function handleClick(t) {
      var e = t.target || t.srcElement,
          i = e.parentNode;if (i === this.indicatorContainer[0]) this.preventDefault(t), this.slide(this.getNodeIndex(e));else {
        if (i.parentNode !== this.indicatorContainer[0]) return n.call(this, t);this.preventDefault(t), this.slide(this.getNodeIndex(i));
      }
    }, handleSlide: function handleSlide(t) {
      l.call(this, t), this.setActiveIndicator(t);
    }, handleClose: function handleClose() {
      this.activeIndicator && this.activeIndicator.removeClass(this.options.activeIndicatorClass), a.call(this);
    } }), e;
}), function (t) {
  "use strict";
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery);
}(function (t, e) {
  "use strict";
  t.extend(e.prototype.options, { videoContentClass: "video-content", videoLoadingClass: "video-loading", videoPlayingClass: "video-playing", videoPosterProperty: "poster", videoSourcesProperty: "sources" });var i = e.prototype.handleSlide;return t.extend(e.prototype, { handleSlide: function handleSlide(t) {
      i.call(this, t), this.playingVideo && this.playingVideo.pause();
    }, videoFactory: function videoFactory(e, i, s) {
      var o,
          n,
          l,
          a,
          r,
          h = this,
          d = this.options,
          c = this.elementPrototype.cloneNode(!1),
          u = t(c),
          p = [{ type: "error", target: c }],
          y = s || document.createElement("video"),
          m = this.getItemProperty(e, d.urlProperty),
          f = this.getItemProperty(e, d.typeProperty),
          g = this.getItemProperty(e, d.titleProperty),
          v = this.getItemProperty(e, d.videoPosterProperty),
          C = this.getItemProperty(e, d.videoSourcesProperty);if (u.addClass(d.videoContentClass), g && (c.title = g), y.canPlayType) if (m && f && y.canPlayType(f)) y.src = m;else if (C) for (; C.length;) {
        if (n = C.shift(), m = this.getItemProperty(n, d.urlProperty), f = this.getItemProperty(n, d.typeProperty), m && f && y.canPlayType(f)) {
          y.src = m;break;
        }
      }return v && (y.poster = v, o = this.imagePrototype.cloneNode(!1), t(o).addClass(d.toggleClass), o.src = v, o.draggable = !1, c.appendChild(o)), l = document.createElement("a"), l.setAttribute("target", "_blank"), s || l.setAttribute("download", g), l.href = m, y.src && (y.controls = !0, (s || t(y)).on("error", function () {
        h.setTimeout(i, p);
      }).on("pause", function () {
        y.seeking || (a = !1, u.removeClass(h.options.videoLoadingClass).removeClass(h.options.videoPlayingClass), r && h.container.addClass(h.options.controlsClass), delete h.playingVideo, h.interval && h.play());
      }).on("playing", function () {
        a = !1, u.removeClass(h.options.videoLoadingClass).addClass(h.options.videoPlayingClass), h.container.hasClass(h.options.controlsClass) ? (r = !0, h.container.removeClass(h.options.controlsClass)) : r = !1;
      }).on("play", function () {
        window.clearTimeout(h.timeout), a = !0, u.addClass(h.options.videoLoadingClass), h.playingVideo = y;
      }), t(l).on("click", function (t) {
        h.preventDefault(t), a ? y.pause() : y.play();
      }), c.appendChild(s && s.element || y)), c.appendChild(l), this.setTimeout(i, [{ type: "load", target: c }]), c;
    } }), e;
}), function (t) {
  "use strict";
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery);
}(function (t, e) {
  "use strict";
  if (!window.postMessage) return e;t.extend(e.prototype.options, { vimeoVideoIdProperty: "vimeo", vimeoPlayerUrl: "//player.vimeo.com/video/VIDEO_ID?api=1&player_id=PLAYER_ID", vimeoPlayerIdPrefix: "vimeo-player-", vimeoClickToPlay: !0 });var i = e.prototype.textFactory || e.prototype.imageFactory,
      s = function s(t, e, i, _s) {
    this.url = t, this.videoId = e, this.playerId = i, this.clickToPlay = _s, this.element = document.createElement("div"), this.listeners = {};
  },
      o = 0;return t.extend(s.prototype, { canPlayType: function canPlayType() {
      return !0;
    }, on: function on(t, e) {
      return this.listeners[t] = e, this;
    }, loadAPI: function loadAPI() {
      function e() {
        !s && o.playOnReady && o.play(), s = !0;
      }for (var i, s, o = this, n = "//f.vimeocdn.com/js/froogaloop2.min.js", l = document.getElementsByTagName("script"), a = l.length; a;) {
        if (a -= 1, l[a].src === n) {
          i = l[a];break;
        }
      }i || (i = document.createElement("script"), i.src = n), t(i).on("load", e), l[0].parentNode.insertBefore(i, l[0]), /loaded|complete/.test(i.readyState) && e();
    }, onReady: function onReady() {
      var t = this;this.ready = !0, this.player.addEvent("play", function () {
        t.hasPlayed = !0, t.onPlaying();
      }), this.player.addEvent("pause", function () {
        t.onPause();
      }), this.player.addEvent("finish", function () {
        t.onPause();
      }), this.playOnReady && this.play();
    }, onPlaying: function onPlaying() {
      this.playStatus < 2 && (this.listeners.playing(), this.playStatus = 2);
    }, onPause: function onPause() {
      this.listeners.pause(), delete this.playStatus;
    }, insertIframe: function insertIframe() {
      var t = document.createElement("iframe");t.src = this.url.replace("VIDEO_ID", this.videoId).replace("PLAYER_ID", this.playerId), t.id = this.playerId, this.element.parentNode.replaceChild(t, this.element), this.element = t;
    }, play: function play() {
      var t = this;this.playStatus || (this.listeners.play(), this.playStatus = 1), this.ready ? !this.hasPlayed && (this.clickToPlay || window.navigator && /iP(hone|od|ad)/.test(window.navigator.platform)) ? this.onPlaying() : this.player.api("play") : (this.playOnReady = !0, window.$f ? this.player || (this.insertIframe(), this.player = $f(this.element), this.player.addEvent("ready", function () {
        t.onReady();
      })) : this.loadAPI());
    }, pause: function pause() {
      this.ready ? this.player.api("pause") : this.playStatus && (delete this.playOnReady, this.listeners.pause(), delete this.playStatus);
    } }), t.extend(e.prototype, { VimeoPlayer: s, textFactory: function textFactory(t, e) {
      var n = this.options,
          l = this.getItemProperty(t, n.vimeoVideoIdProperty);return l ? (void 0 === this.getItemProperty(t, n.urlProperty) && (t[n.urlProperty] = "//vimeo.com/" + l), o += 1, this.videoFactory(t, e, new s(n.vimeoPlayerUrl, l, n.vimeoPlayerIdPrefix + o, n.vimeoClickToPlay))) : i.call(this, t, e);
    } }), e;
}), function (t) {
  "use strict";
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery);
}(function (t, e) {
  "use strict";
  if (!window.postMessage) return e;t.extend(e.prototype.options, { youTubeVideoIdProperty: "youtube", youTubePlayerVars: { wmode: "transparent" }, youTubeClickToPlay: !0 });var i = e.prototype.textFactory || e.prototype.imageFactory,
      s = function s(t, e, i) {
    this.videoId = t, this.playerVars = e, this.clickToPlay = i, this.element = document.createElement("div"), this.listeners = {};
  };return t.extend(s.prototype, { canPlayType: function canPlayType() {
      return !0;
    }, on: function on(t, e) {
      return this.listeners[t] = e, this;
    }, loadAPI: function loadAPI() {
      var t,
          e = this,
          i = window.onYouTubeIframeAPIReady,
          s = "//www.youtube.com/iframe_api",
          o = document.getElementsByTagName("script"),
          n = o.length;for (window.onYouTubeIframeAPIReady = function () {
        i && i.apply(this), e.playOnReady && e.play();
      }; n;) {
        if (n -= 1, o[n].src === s) return;
      }t = document.createElement("script"), t.src = s, o[0].parentNode.insertBefore(t, o[0]);
    }, onReady: function onReady() {
      this.ready = !0, this.playOnReady && this.play();
    }, onPlaying: function onPlaying() {
      this.playStatus < 2 && (this.listeners.playing(), this.playStatus = 2);
    }, onPause: function onPause() {
      e.prototype.setTimeout.call(this, this.checkSeek, null, 2e3);
    }, checkSeek: function checkSeek() {
      this.stateChange !== YT.PlayerState.PAUSED && this.stateChange !== YT.PlayerState.ENDED || (this.listeners.pause(), delete this.playStatus);
    }, onStateChange: function onStateChange(t) {
      switch (t.data) {case YT.PlayerState.PLAYING:
          this.hasPlayed = !0, this.onPlaying();break;case YT.PlayerState.PAUSED:case YT.PlayerState.ENDED:
          this.onPause();}this.stateChange = t.data;
    }, onError: function onError(t) {
      this.listeners.error(t);
    }, play: function play() {
      var t = this;this.playStatus || (this.listeners.play(), this.playStatus = 1), this.ready ? !this.hasPlayed && (this.clickToPlay || window.navigator && /iP(hone|od|ad)/.test(window.navigator.platform)) ? this.onPlaying() : this.player.playVideo() : (this.playOnReady = !0, window.YT && YT.Player ? this.player || (this.player = new YT.Player(this.element, { videoId: this.videoId, playerVars: this.playerVars, events: { onReady: function onReady() {
            t.onReady();
          }, onStateChange: function onStateChange(e) {
            t.onStateChange(e);
          }, onError: function onError(e) {
            t.onError(e);
          } } })) : this.loadAPI());
    }, pause: function pause() {
      this.ready ? this.player.pauseVideo() : this.playStatus && (delete this.playOnReady, this.listeners.pause(), delete this.playStatus);
    } }), t.extend(e.prototype, { YouTubePlayer: s, textFactory: function textFactory(t, e) {
      var o = this.options,
          n = this.getItemProperty(t, o.youTubeVideoIdProperty);return n ? (void 0 === this.getItemProperty(t, o.urlProperty) && (t[o.urlProperty] = "//www.youtube.com/watch?v=" + n), void 0 === this.getItemProperty(t, o.videoPosterProperty) && (t[o.videoPosterProperty] = "//img.youtube.com/vi/" + n + "/maxresdefault.jpg"), this.videoFactory(t, e, new s(n, o.youTubePlayerVars, o.youTubeClickToPlay))) : i.call(this, t, e);
    } }), e;
}), function (t) {
  "use strict";
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : t(window.jQuery, window.blueimp.Gallery);
}(function (t, e) {
  "use strict";
  t(document).on("click", "[data-gallery]", function (i) {
    var s = t(this).data("gallery"),
        o = t(s),
        n = o.length && o || t(e.prototype.options.container),
        l = { onopen: function onopen() {
        n.data("gallery", this).trigger("open");
      }, onopened: function onopened() {
        n.trigger("opened");
      }, onslide: function onslide() {
        n.trigger("slide", arguments);
      }, onslideend: function onslideend() {
        n.trigger("slideend", arguments);
      }, onslidecomplete: function onslidecomplete() {
        n.trigger("slidecomplete", arguments);
      }, onclose: function onclose() {
        n.trigger("close");
      }, onclosed: function onclosed() {
        n.trigger("closed").removeData("gallery");
      } },
        a = t.extend(n.data(), { container: n[0], index: this, event: i }, l),
        r = t('[data-gallery="' + s + '"]');return a.filter && (r = r.filter(a.filter)), new e(r, a);
  });
});
//# sourceMappingURL=jquery.blueimp-gallery.min.js.map

/***/ })
],[7]);