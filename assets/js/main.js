require(['jquery', 'lozad', 'jquery-blueimp-gallery'], function ($, lozad, blueimp) {
    function relUrl(path) {
        return $('meta[name="base"]').attr('href') + path;
    }

    function initBackground() {
        // Background
        function random(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    
        var spec = {
            backgrounds: [
                'asanoha.png',
                'back.png',
                'circles-and-roundabouts.png',
                'confectionary.png',
                'contemporary_china_2.png',
                'corrugation.png',
                'contemporary_china.png',
                'diamond_upholstery.png',
                'dimension.png',
                'doodles.png',
                'eight_horns.png',
                'escheresque.png',
                'geometry2.png',
                'geometry.png',
                'gplay.png',
                'grey.png',
                'lyonnette.png',
                'memphis-colorful.png',
                'paisley.png',
                'photography.png',
                'playstation.png',
                'pow-star.png',
                'psychedelic.png',
                'pyramid.png',
                'reticular_tissue.png',
                'sayagata.png',
                'skulls.png',
                'swirl.png',
                'symphony.png',
                'tiny_grid.png',
                'topography.png',
                'tree_bark.png',
                'upfeathers.png'
            ]
        };
    
        var i = random(0, spec.backgrounds.length - 1);
        var b = spec.backgrounds[i];
        $('body').css('background-image', 'url("' + relUrl('assets/images/backgrounds/' + b) + '")');
    }
    
    function initSearch() {
        $("form[name='query']").on('submit', function() {
            var query = $("input[name='q']", "form[name='query']").val();
            var site = $("form[name='search']").data('site');
            $("input[name='q']", "form[name='search']").val(query + ' site:' + site);
            $("form[name='search']").submit();
            return false;
        });
    }

    function initLazyload() {
        var observer = lozad('.lozad', {
            rootMargin: '50px 0px'
        });

        var disqusObserver = lozad('#disqus_thread', {
            rootMargin: '50px 0px',
            load: function(el) {
                $.ajax({
                    url: '//' + disqus_shortname + '.disqus.com/' + disqus_script,
                    async: true,
                    cache: true,
                    dataType: 'script',
                    success: function() {}
                });
            }
        });

        var shareThisObserver = lozad('div.sharethis-inline-share-buttons', {
            rootMargin: '50px 0px',
            load: function(el) {
                $.ajax({
                    url: '//platform-api.sharethis.com/js/sharethis.js#property=5920c4ce1bd0670011e06acd&product=inline-share-buttons',
                    async: true,
                    cache: true,
                    dataType: 'script',
                    success: function() {}
                });
            }
        });

        observer.observe();
        disqusObserver.observe();
        shareThisObserver.observe();
    }
    
    initBackground();
    initSearch();
    initLazyload();
});

