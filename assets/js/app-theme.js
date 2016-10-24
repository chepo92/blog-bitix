define(['jquery'], function($) {
    // Sharethis (async)
    window.switchTo5x = true;
    var sharethis = document.createElement('script');
    sharethis.type = "text/javascript";
    sharethis.async = true;
    sharethis.src = '//ws.sharethis.com/button/buttons.js';
    sharethis.onload = function(){
        try {
            stLight.options({
                publisher: sharethisPublisher,
                doNotHash: true,
                doNotCopy: true,
                hashAddressBar: false,
                onhover: false
            });
        } catch(e) {
            console.log(e);
        }
    }
    var script = document.getElementsByTagName('script')[0];
    script.parentNode.insertBefore(sharethis, script);

    // Background
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    var spec = {
        backgrounds: [
            'confectionary.png',
            'dimension.png',
            'skulls.png',
            'tree_bark.png',
            'contemporary_china_2.png',
            'eight_horns.png',
            'swirl_pattern.png',
            'upfeathers.png',
            'contemporary_china.png',
            'paisley.png',
            'symphony.png'
        ]
    };

    var i = random(0, spec.backgrounds.length - 1);
    var b = spec.backgrounds[i];
    $('body').css('background-image', 'url("assets/images/backgrounds/' + b + '")');

    $("form[name='query']").on('submit', function() {
      var query = $("input[name='q']", "form[name='query']").val();
      var site = $("form[name='search']").data('site');
      $("input[name='q']", "form[name='search']").val(query + ' site:' + site);
      $("form[name='search']").submit();
      return false;
    });
});
