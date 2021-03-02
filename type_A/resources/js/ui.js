$(document).ready(function(){
    $('.hamburger').on('click', function(){
        $(this).toggleClass('is-opened');
        $(".gnb").toggleClass('is-opened');
        $("html").toggleClass('no-scroll');
    });

    var mainCtrl = new ScrollMagic.Controller;
    $('.scrollCtr').each(function(i, e) {
        var r = i + 1;
        $(this).attr('data-slide', 'scr0' + r);
        new ScrollMagic.Scene({
            triggerElement: e,
            offset: -250
        })
        .setClassToggle("[data-slide=scr0"+ r +"]", "is-active").addTo(mainCtrl);

        var bcg1 = $(this).find(".bcg1");
        if(bcg1.length > 0){
            new ScrollMagic.Scene({
                triggerElement: e,
                triggerHook: 1,
                duration: "300%",
            }).setTween(TweenMax.from(bcg1, 1, {
                transform: 'scale(1.3)',
                ease: Cubic.easeOut,
            })).addTo(mainCtrl);
        }

        // var ra = $(this).find(".ra");
        // if(ra.length > 0){
        //     new ScrollMagic.Scene({
        //         triggerElement: e,
        //         triggerHook: 1,
        //         duration: "275%",
        //     }).setTween(TweenMax.to(ra, 1, {
        //         y: "45.2%",
        //         ease: Power0.easeNone
        //     })).addTo(mainCtrl);
        // }

        // var dura1 = $(this).find(".dura1");
        // new ScrollMagic.Scene({
        //     triggerElement: e,
        //     triggerHook: 1,
        //     duration: "80%",
        // }).setTween(TweenMax.from(dura1, 1, {
        //     y: "100%",
        //     ease: Power0.easeNone
        // })).addTo(mainCtrl);

        // var dura2 = $(this).find(".dura2");
        // new ScrollMagic.Scene({
        //     triggerElement: e,
        //     triggerHook: 1,
        //     duration: "100%",
        // }).setTween(TweenMax.from(dura2, 1, {
        //     y: "150%",
        //     ease: Power0.easeNone
        // })).addTo(mainCtrl);

    });

    
});