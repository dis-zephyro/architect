
$(".portfolio a").fancybox({
    'padding'    : 0

});


$(".certificates a").fancybox({
    'padding'    : 0
});


$(".detail").fancybox({
    'padding'    : 0
});


$(function() {
    $( ".detail" ).tooltip({
        show: null,
        position: {
            my: "left top",
            at: "left bottom"
        },
        open: function( event, ui ) {
            ui.tooltip.animate({ top: ui.tooltip.position().top + 10 }, "fast" );
        }
    });
});

// Map

ymaps.ready(init);

var myMap,
    myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [56.8296,60.6128],
        zoom: 17,
        controls: ['smallMapDefaultSet']
    });

    myPlacemark = new ymaps.Placemark([56.8298,60.6101], {
        hintContent: ''
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/placemark.png',
        iconImageSize: [44, 64],
        iconImageOffset: [-2, -65]
    });

    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable('multiTouch');
    myMap.geoObjects.add(myPlacemark);
}