$(document).ready(function () {
    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-times');
    });
    $('.header-link').click(function () {
        $('.header-link').removeClass('header-link-active');
        $(this).addClass('header-link-active');
    });
    $(window).on('load scroll', function () {
        if ($(window).scrollTop() > 10) {
            $('header').addClass('header-active');
        } else {
            $('header').removeClass('header-active');
        }
    });
    $('.slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<div class="left-arrow"><i class="fas fa-angle-left"></i></div>',
        nextArrow: '<div class="right-arrow"><i class="fas fa-angle-right"></i></div>',
        responsive: [{
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.chat-button').click(function () {
        $('.chat-content').addClass('content-show');
    });
    $('.cancel-button').click(function () {
        $('.chat-content').removeClass('content-show');
    });
    $('[data-toggle="tooltip"]').tooltip();
});
