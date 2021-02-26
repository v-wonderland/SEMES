$(document).ready(function(){
    $('.hamburger').on('click', function(){
        $(this).toggleClass('is-opened');
        $(".gnb").toggleClass('is-opened');
        $("html").toggleClass('no-scroll');
    });
});