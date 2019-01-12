setTimeout(function() {
  var ads = $('ins.adsbygoogle');
  var adblock = (ads.length > 0 && ads.html().replace(/\s/g, '').length == 0);
  ga('send', 'event', 'client', 'adblock', (adblock) ? 'true' : 'false', {'nonInteraction': 1});

  // ...
}, 3000);