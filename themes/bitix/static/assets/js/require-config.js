var require = {
    paths: {
        'jquery': '../libs/jquery-3.5.0.min',
        'bootstrap': '../libs/bootstrap-4.4.1-dist/js/bootstrap.min',
        'bowser': '../libs/bowser-2.8.1',
        'lozad': '../libs/lozad-1.14.0.min',
        'blueimp-helper': '../libs/Gallery-2.38.0/js/blueimp-helper',
        'blueimp-gallery': '../libs/Gallery-2.38.0/js/blueimp-gallery',
        'blueimp-gallery-indicator': '../libs/Gallery-2.38.0/js/blueimp-gallery-indicator',
        'blueimp-gallery-video': '../libs/Gallery-2.38.0/js/blueimp-gallery-video',
        'blueimp-gallery-vimeo': './libs/Gallery-2.38.0/js/blueimp-gallery-vimeo',
        'blueimp-gallery-youtube': '../libs/Gallery-2.38.0/js/blueimp-gallery-youtube',
        'jquery-blueimp-gallery': '../libs/Gallery-2.38.0/js/jquery.blueimp-gallery'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'blueimp-gallery': {
            exports: 'blueimp'
        }
    }
};