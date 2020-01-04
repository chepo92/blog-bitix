require(['jquery', 'lozad'], function($, lozad) {
    function initAnalytics() {
        ...

        var pageBottomObserver = lozad('#pageBottom', {
            rootMargin: '50px 0px',
            load: function(el) {
                ga('send', 'event', 'page', 'show', 'bottom', {'nonInteraction': 1});
            }
        });
        pageBottomObserver.observe();
    }

    ...

    initAnalytics();
    ...
});