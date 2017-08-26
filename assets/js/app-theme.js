import $ from 'jquery';

import 'bootstrap';
import 'blueimp-helper';
import 'blueimp-gallery';
import 'blueimp-gallery-indicator';
import 'blueimp-gallery-video';
import 'blueimp-gallery-vimeo';
import 'blueimp-gallery-youtube';
import 'jquery-blueimp-gallery';

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
    $('body').css('background-image', 'url("assets/images/backgrounds/' + b + '")');
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

initBackground();
initSearch();
