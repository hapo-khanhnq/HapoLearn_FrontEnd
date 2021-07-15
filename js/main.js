$(document).ready(function() {
    $('.fa-bars').click(function() {
        $(this).toggleClass('fa-times');
    });
    $(window).on('load scroll', function() {
        if ($(window).scrollTop() > 10) {
            $('header').addClass('header-active');
        } else {
            $('header').removeClass('header-active');
        }
    });
});
