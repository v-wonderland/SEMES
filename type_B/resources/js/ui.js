$(document).ready(function(){
    $('#mGnb ul li').click(function(){
        $('.all_menu').addClass('on');
    })
    
    $('.all_menu ul li').click(function(){
        $('.all_menu').removeClass('on');
    })
});