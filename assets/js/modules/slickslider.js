// Function to init slick sliders

const $ = require('jquery');
require('slick-carousel');

export default function() {

    $('[data-slider]').each(function() {

        'use strict';

        $(this).slick({
            adaptiveHeight: false,
            autoplay: true,
            autoplaySpeed: 6000,
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                // You can unslick at a given breakpoint now by adding:
                // settings: 'unslick'
                // instead of a settings object
            ]
        });
    });
}
