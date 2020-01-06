require(['jquery', 'lozad', 'jquery-blueimp-gallery'], function ($, lozad, blueimp) {
    ...

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
    
    ...
    initLazyload();
});

