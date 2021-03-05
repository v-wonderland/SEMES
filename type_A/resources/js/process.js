$(function(){
    var $sectionprocess = $('.section#process');
    var $indices = $('.indices .index', $sectionprocess);
    var $indicesSmall = $('.indices-sm .index', $sectionprocess);
    var $bgs = $('.section-bg', $sectionprocess);
    var duration = 7000;
    var tick = null;
    var currentIndex = 1;
    var isTrans = false;
    $('.section-bg', $sectionprocess).each(function(){
        hideBg(this);
    })
    $('.lab-desc', $sectionprocess).each(function(){
        hideDesc($(this));
    })

    function showLab(dir) {
        if ( isTrans ) return;
        isTrans = true;
        var prevBg = $('.section-bg.active', $sectionprocess);
        if ( prevBg[0]) {
            hideBg(prevBg, dir);
        }

        $bgs.removeClass('active');
        var bg = $('.section-bg.bg' + currentIndex, $sectionprocess);
        bg.addClass('active');

        showBg(bg, dir);


        var prevIndexProgressBar = $('.indices .index.active .bar', $sectionprocess);
        var prevIndexSmallProgressBar = $('.indices-sm .index.active .bar', $sectionprocess);
        TweenMax.killTweensOf(prevIndexProgressBar);
        TweenMax.killTweensOf(prevIndexSmallProgressBar);
        prevIndexProgressBar.css('width', 0);
        prevIndexSmallProgressBar.css('width', 0);
        $indices.removeClass('active');
        $indicesSmall.removeClass('active');

        var index = $('.indices .index[data-index="' + currentIndex + '"]', $sectionprocess);
        var indexSmall = $('.indices-sm .index[data-index="' + currentIndex + '"]', $sectionprocess);
        index.addClass('active');
        indexSmall.addClass('active');
        var indexProgressBar = $('.bar', index);
        TweenMax.fromTo(indexProgressBar, duration/ 1000, {width:'0%'}, {width:'100%', ease:Linear.easeNone, onComplete: function(){
                showNext();
            }
        });
        var indexSmallProgressBar = $('.bar', indexSmall);
        TweenMax.fromTo(indexSmallProgressBar, duration/ 1000, {width:'0%'}, {width:'100%', ease:Linear.easeNone, onComplete: function(){
                // showNext();
            }
        });

        var prevDesc = $('.lab-desc.active', $sectionprocess);
        $('.lab-desc', $sectionprocess).removeClass('active prev');
        if ( prevDesc[0]) hideDesc(prevDesc, dir);
        var desc = $('.lab-desc#process' + currentIndex, $sectionprocess);
        desc.addClass('active');
        showDesc(desc, dir);
    }

    function hideDesc(desc, dir) {
        var speed = .5;
        if ( dir == 0) {
            speed = dir;
            dir = 'next';
        }

        desc.addClass('prev');
        var tb = $('.tb', desc);
        var tbImg = $('.tb img', desc);
        TweenMax.killTweensOf(tb);
        TweenMax.killTweensOf(tbImg);
        TweenMax.fromTo(tb, 1.4, {y:0}, {y:0, ease:Power3.easeInOut});
        TweenMax.fromTo(tbImg, 1.4, {scale:1.1}, {scale:2, ease:Power3.easeInOut});
        $('.detail', desc).children().each(function(index) {
            TweenMax.killTweensOf(this);
            TweenMax.fromTo(this, speed, {y:0, opacity:1}, {y:-20, opacity:0, ease:Power3.easeOut, delay:index * .05});
        });
    }

    function showDesc(desc, dir) {
        var speed = .8;
        if ( dir == 0) {
            speed = dir;
            dir = 'next';
        }
        var tb = $('.tb', desc);
        var tbImg = $('.tb img', desc);
        TweenMax.killTweensOf(tb);
        TweenMax.killTweensOf(tbImg);
        TweenMax.fromTo(tb, 1.4, {y:'100%'}, {y:'0%', opacity:1, height:'100%', ease:Power3.easeInOut, delay:0});
        TweenMax.fromTo(tbImg, 1.4, {y:100, scale:3}, {y:0, scale:1.1, ease:Power3.easeInOut, delay:0});
        $('.detail', desc).children().each(function(index) {
            TweenMax.killTweensOf(this);
            TweenMax.fromTo(this, speed, {y:50, opacity:0}, {y:0, opacity:1, ease:Power3.easeOut, delay:index * .1 + .4});
        });
    }

    function hideBg(bg, dir) {
        var speed = .8;
        if ( dir == 0) {
            speed = dir;
            dir = 'next';
        }
        var back = $('.back', bg);
        TweenMax.killTweensOf(bg);
        TweenMax.killTweensOf(back);


        if ( dir == 'next') {
            TweenMax.fromTo(bg, speed, {x:'0%',opacity:1}, {x:'-100%', opacity:.1, ease:Power3.easeInOut});
            TweenMax.fromTo(back, speed, {x:'0'}, {x:'80%', ease:Power3.easeInOut});
        } else {
            TweenMax.fromTo(bg, speed, {x:'0%',opacity:1}, {x:'100%', opacity:.1, ease:Power3.easeInOut});
            TweenMax.fromTo(back, speed, {x:'0'}, {x:'-80%', ease:Power3.easeInOut});
        }


    }

    function showBg(bg, dir) {
        var speed = .8;
        if ( dir == 0) {
            speed = dir;
            dir = 'next';
        }
        var back = $('.back', bg);
        TweenMax.killTweensOf(bg);
        TweenMax.killTweensOf(back);
        if ( dir == 'next') {
            TweenMax.fromTo(bg, speed, {x:'100%', opacity:1}, {x:'0%', ease:Power3.easeInOut});
            TweenMax.fromTo(back, speed, {x:'-80%', opacity:1}, {x:'0%', ease:Power3.easeInOut, onComplete:function(){isTrans = false;}});
        } else {
            TweenMax.fromTo(bg, speed, {x:'-100%', opacity:1}, {x:'0%', ease:Power3.easeInOut});
            TweenMax.fromTo(back, speed, {x:'80%', opacity:1}, {x:'0%', ease:Power3.easeInOut, onComplete:function(){isTrans = false;}});
        }
    }

    function showPrev() {
        currentIndex--;
        if ( currentIndex == 0 ) {
            currentIndex = $indices.length;
        }
        showLab('prev');
    }

    function showNext() {
        currentIndex++;
        if ( currentIndex > $indices.length ) {
            currentIndex = 1;
        }
        showLab('next');
    }

    $indices.on('click', function(e){
        e.preventDefault();
        var index = parseInt($(this).attr('data-index'));
        if ( index == currentIndex) return;
        var dir = (index > currentIndex) ? 'next' :'prev';
        currentIndex = index ;
        showLab(dir);
    })

    $indicesSmall.on('click', function(e){
        e.preventDefault();
        var index = parseInt($(this).attr('data-index'));
        if ( index == currentIndex) return;
        var dir = (index > currentIndex) ? 'next' :'prev';
        currentIndex = index ;
        showLab(dir);
    })



    var $window = $(window);
    var scrollTop = 0;
    var windowWidth = $window.innerWidth();
    var windowHeight = $window.innerHeight();
    $window.on('scroll', function(){
        requestAnimationFrame(onScroll);
    });

    $window.on('resize', function(){
        requestAnimationFrame(onResize);
    });

    function onScroll() {
        scrollTop = $window.scrollTop();
        var offsetTop = $sectionprocess.offset().top;
        if ( scrollTop + windowHeight * .5 > offsetTop) {
            if ($sectionprocess.hasClass('active') == false ) {
                currentIndex = 1;
                showLab(0);
                $sectionprocess.addClass('active');
            }
        }
    }

    function onResize() {
        windowWidth = $window.innerWidth();
        windowHeight = $window.innerHeight();
    }

    onResize();
    onScroll();

    $('.lab-right-back', $sectionprocess).on('mousemove', function(e){
        var posX = e.pageX;
        if ( posX > windowWidth * 3/4 ) {
            $(this).addClass('dir-next');
        } else {
            $(this).removeClass('dir-next');

        }
    });

    $('.lab-right-back', $sectionprocess).on('click', function(e){
        e.preventDefault();
        if ($(this).hasClass('dir-next')) showNext();
        else showPrev();
    });
});