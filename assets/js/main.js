requirejs.config({
    'baseUrl': 'assets',
    shim: {
        'bootstrap': {
            deps: ['jquery']
        },
        'blueimp-gallery-indicator': {
            deps: ['blueimp-gallery']
        },
        'blueimp-gallery-video': {
            deps: ['blueimp-gallery']
        },
        'blueimp-gallery-vimeo': {
            deps: ['blueimp-gallery-video']
        },
        'blueimp-gallery-youtube': {
            deps: ['blueimp-gallery-video']
        },
        'jquery-blueimp-gallery': {
            deps: ['jquery', 'blueimp-gallery']
        },
        'bootstrap-image-gallery': {
            deps: [
                'jquery',
                'blueimp-gallery-indicator',
                'blueimp-gallery-video',
                'blueimp-gallery-vimeo',
                'blueimp-gallery-youtube',
                'jquery-blueimp-gallery'
            ]
        }
    },
    paths: {
        'jquery': 'libs/jquery.slim.min',
        'bootstrap': 'libs/bootstrap-3.3.6-dist/js/bootstrap.min',
        'blueimp-helper': 'libs/Gallery-2.17.0/js/blueimp-helper',
        'blueimp-gallery': 'libs/Gallery-2.17.0/js/blueimp-gallery',
        'blueimp-gallery-indicator': 'libs/Gallery-2.17.0/js/blueimp-gallery-indicator',
        'blueimp-gallery-video': 'libs/Gallery-2.17.0/js/blueimp-gallery-video',
        'blueimp-gallery-vimeo': 'libs/Gallery-2.17.0/js/blueimp-gallery-vimeo',
        'blueimp-gallery-youtube': 'libs/Gallery-2.17.0/js/blueimp-gallery-youtube',
        'jquery-blueimp-gallery': 'libs/Gallery-2.17.0/js/jquery.blueimp-gallery',
        'bootstrap-image-gallery': 'libs/Bootstrap-Image-Gallery-3.3.6/js/bootstrap-image-gallery.min',
        'googleads': '//pagead2.googlesyndication.com/pagead/js/adsbygoogle'
    }
});

require(['bootstrap-image-gallery', 'googleads', 'js/app-theme', 'js/app'], function() {});
