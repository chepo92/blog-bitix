webpackJsonp([1],{

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initGoogleAnalytics() {
  ga('send', 'event', 'client', 'protocol', window.location.protocol.replace(new RegExp(':|/', 'gi'), ''), { 'nonInteraction': 1 });

  (0, _jquery2.default)('header nav a, footer div.menu a').on('click', function () {
    ga('send', 'event', 'link', 'click', 'menu');
  });

  (0, _jquery2.default)('ul.recents a').on('click', function () {
    ga('send', 'event', 'link', 'click', 'recent');
  });

  (0, _jquery2.default)('div.featured a').on('click', function () {
    ga('send', 'event', 'link', 'click', 'featured');
  });

  (0, _jquery2.default)('div.links a').on('click', function () {
    ga('send', 'event', 'link', 'click', 'links');
  });

  (0, _jquery2.default)('ins.adsbygoogle').on('mouseenter', function () {
    ga('send', 'event', 'ad', 'enter', (0, _jquery2.default)(this).attr('data-type'), { 'nonInteraction': 1 });
  });

  (0, _jquery2.default)('ins.adsbygoogle').on('click', function () {
    ga('send', 'event', 'ad', 'click', (0, _jquery2.default)(this).attr('data-type'));
  });

  (0, _jquery2.default)('div.share-this-begin').on('click', function () {
    ga('send', 'event', 'share-this', 'click', 'begin');
  });

  (0, _jquery2.default)('div.share-this-end').on('click', function () {
    ga('send', 'event', 'share-this', 'click', 'end');
  });
}

function initAdsense() {
  setTimeout(function () {
    var ads = (0, _jquery2.default)('ins.adsbygoogle');
    var adblock = ads.length > 0 && ads.html().replace(/\s/g, '').length == 0;
    ga('send', 'event', 'client', 'adblock', adblock ? 'true' : 'false', { 'nonInteraction': 1 });

    if (adblock) {
      ads.each(function (i, e) {
        var html = ['<div style="' + (0, _jquery2.default)(e).attr('style') + '; height: 100%; text-align: left;" class="adblock">', ' <p class="text-center"><strong><span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Parece que tienes activado un bloqueador de anuncios</strong></p>', ' <p>Los anuncios de este blog <strong>no son intrusivos</strong> y con ellos hago <a href="https://picodotdev.github.io/blog-bitix/2015/12/yo-apoyo-al-software-libre-tu-tambien/">pequeñas donaciones al software libre</a>. Considera <a href="https://adblockplus.org/es/faq_basics#disable" target="_blank">desactivar el bloqueador de anuncios</a> en <strong>Blog Bitix</strong>.</p>', ' <p></p>', '</div>'].join('');
        var dom = (0, _jquery2.default)(html);
        var element = (0, _jquery2.default)(e).after(dom);
      });
    }
  }, 3000);
}

initGoogleAnalytics();
initAdsense();

/***/ })

},[15]);