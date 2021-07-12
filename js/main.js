$(document).ready(function() {
    $('.fa-bars').click(function() {
        $(this).toggleClass('fa-times');
        $('.mobile-nav').toggleClass('nav-toggle');
    });
    /*$(window).on('load scroll', function() {
        $('.fa-bars').removeClass('fa-times');
        $('.mobile-nav').removeClass('nav-toggle');
    });*/
});