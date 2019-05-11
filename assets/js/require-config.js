var require = {
    baseUrl: 'assets',
    paths: {
        'jquery': 'libs/jquery-3.4.1.slim.min',
        'bootstrap': 'libs/bootstrap-4.3.1/js/bootstrap.min',
        'bowser': 'libs/bowser-2.3.0',
        'blueimp-helper': 'libs/Gallery-2.33.0/js/blueimp-helper',
        'blueimp-gallery': 'libs/Gallery-2.33.0/js/blueimp-gallery',
        'blueimp-gallery-indicator': 'libs/Gallery-2.33.0/js/blueimp-gallery-indicator',
        'blueimp-gallery-video': 'libs/Gallery-2.33.0/js/blueimp-gallery-video',
        'blueimp-gallery-vimeo': 'libs/Gallery-2.33.0/js/blueimp-gallery-vimeo',
        'blueimp-gallery-youtube': 'libs/Gallery-2.33.0/js/blueimp-gallery-youtube',
        'jquery-blueimp-gallery': 'libs/Gallery-2.33.0/js/jquery.blueimp-gallery'
    },
    shim: {
        'jquery': {
            exports: 'jquery'
        },
        'blueimp-gallery': {
            exports: 'blueimp'
        }
    }
};