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

    var lastSt = 0;

    var win	= $(window);
    var body = $('html, body');
    var scrollTicker= false;
    var delta = 5;
    var lastT	=	0
    var contH = 0

    win.on('resize',function(){
        // console.log( 'win ' , win.height() )
        contH = win.height();
    })
    win.trigger('resize');

    $(window).scroll(function(e) 
    {
        var st = $(this).scrollTop();
        winH = $(window).height();
        if($('body > .wrap').length > 0) {
            if($('body > .wrap').find('video').length > 0){
                if (st > winH - 300){
                    $('body > .wrap').find('video').each(function(i,t){
                        t.pause();
                    });
                }else {
                    $('body > .wrap').find('video').each(function(i,t){
                        t.play();
                    });
                }
            }
        }
        lastSt = st;

        if(scrollTicker){
            e.preventDefault();
            return; 
        }
        var st = $(this).scrollTop();
        if( $(this).is(':animated') )
        {
            return
        }
        // if( st > contH || st < 0 ){
        // 	return
        // }

        if( st >= contH){
            return
        }
        
        // if (Math.abs(lastT - st) <= delta){
        // 	return;  
        // }
        // console.log( st )
        if(st>lastT)
        {
            if(st<contH)
            {
                scrollTicker = true;
                new TimelineMax().to(body , 0.5 , {scrollTop: contH ,onComplete:function(){
                    setTimeout(function(){
                        scrollTicker = false;
                        lastT = win.scrollTop();
                    },100);
                }});
            }
        }else{
            if(st<=contH){
                scrollTicker = true;
                new TimelineMax().to(body , 0.5 , {scrollTop: 0 ,onComplete:function(){
                    setTimeout(function(){
                        scrollTicker = false;
                        lastT = win.scrollTop();
                    },100);
                }});
            }
        }
        lastT = st;
    });

    $(window).scroll(function(){
        var st = $(window).scrollTop();
        var bh = $(window).height();

        $('.move.left').each(function(){
                var $this = $(this);
                var my_st = $this.offset().top - (bh * 1);

                if(st > my_st){
                        $this.addClass('active');
                }
        });

        $('.move.right').each(function(){
                var $this = $(this);
                var my_st = $this.offset().top - (bh * 1);

                if(st > my_st){
                        $this.addClass('active');
                }
        });
        $('.move').each(function(){
                var $this = $(this);
                var my_st = $this.offset().top - (bh * 1);

                if(st > my_st){
                        $this.addClass('active');
                }
        });
    });
    
    $(function(){
        setPop();
    });

    function setPop() {
        
        $('.equip .info_btn .open1').on('click',function(){

            $('#popUp1').fadeIn(300);
            $('.equip .info_btn .close1').fadeIn(200);
        })
        
        $('.equip .info_btn .close1').on('click',function(){
            
            $('#popUp1').fadeOut(300);
            $('.equip .info_btn .close1').fadeOut(200);
        })
        
        $('.equip .info_btn .open2').on('click',function(){

            $('#popUp2').fadeIn(300);
            $('.equip .info_btn .close2').fadeIn(200);
        })
        
        $('.equip .info_btn .close2').on('click',function(){
            
            $('#popUp2').fadeOut(300);
            $('.equip .info_btn .close2').fadeOut(200);
        })
        
        $('.equip .info_btn .open3').on('click',function(){

            $('#popUp3').fadeIn(300);
            $('.equip .info_btn .close3').fadeIn(200);
        })
        
        $('.equip .info_btn .close3').on('click',function(){
            
            $('#popUp3').fadeOut(300);
            $('.equip .info_btn .close3').fadeOut(200);
        })
        
        $('.equip .info_btn .open4').on('click',function(){

            $('#popUp4').fadeIn(300);
            $('.equip .info_btn .close4').fadeIn(200);
        })
        
        $('.equip .info_btn .close4').on('click',function(){
            
            $('#popUp4').fadeOut(300);
            $('.equip .info_btn .close4').fadeOut(200);
        })
    }

    var currentIndex = 0;
    var vslImg = ["main_vsl_bg_01.png","main_vsl_bg_02.png","main_vsl_bg_03.png"];
    var $target = $("#product main .vsl .cont h2");
    var $changeTarget = $("#product main #vslBg");

    $($target).click(function(){
        currentIndex = $(this).attr("data-vslNumb");
        $changeTarget.css({
            "background-image" : "url(" + "../resources/images/product/" + vslImg[currentIndex] + ")",
            "background-repeat" : "no-repeat",
            "background-size" : "cover"
        });
    });

    // $('#product main .vsl .cont h2').mouseenter(function(){
    //     $('#product main .vsl').css({
    //         "background-image" : "url(../resources/images/product/main_vsl_bg_01.png)",
    //         "background-repeat" : "no-repeat",
    //         "background-size" : "cover"
    //     });
    // });

    $('#product main .vsl .cont.photo h2').click(function(){
        $(this).addClass('active');
        $('#product main .vsl .cont.clean h2').removeClass('active');
        $('#product main .vsl .cont.etch h2').removeClass('active');
    });

    $('#product main .vsl .cont.etch h2').click(function(){
        $(this).addClass('active');
        $('#product main .vsl .cont.photo h2').removeClass('active');
        
        $('#product main .vsl .cont.clean h2').removeClass('active');
    });

    $('#product main .vsl .cont.clean h2').click(function(){
        $(this).addClass('active');
        $('#product main .vsl .cont.etch h2').removeClass('active');
        $('#product main .vsl .cont.photo h2').removeClass('active');
    });

    // $('#product main .vsl .cont h2').mouseleave(function(){
    //     $(this).removeClass('active');
    // });
});
