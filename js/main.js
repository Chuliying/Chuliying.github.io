$(document).ready(function () {
    $hamburger = $('.hamburger-container');
    $menu = $('.menu');
    $hamburger.click(function(){
        $(this).toggleClass('open');
        $menu.fadeToggle(500);
        
    })

    const $cutLanding = $('#cut-landing');
    $cutLanding.imagesLoaded(function () {
        $cutLanding.fadeIn(1500);
        $('.main-logo').fadeIn(1500);
        setTimeout(function () {
            $cutLanding.addClass('show')
        }, 550);

        setTimeout(function () {
            $('.main-logo').fadeOut(1500);
        }, 2000);

        const layer = $('.bg-items .layer');
        const floatingImg = $('.layer-7 img');
        const bgItem = $('.bg-items');

        gsap.fromTo(bgItem, { opacity: 0, y: 120 }, { opacity: 1, y: 0, duration: 3 });

        gsap.to($('.header'), 1, {
            opacity: 1,
            delay: 4
        });

        $(layer).each(function (i) {
            gsap.to($(this), 2, {
                z: 150,
                rotation: random(-10, 10),
                ease: 'none',
                delay: 2.05 + 0.05 * i
            });
        })

        gsap.to($('.layer-7'), 2, {
            z: -25,
            ease: 'none',
            delay: 2.15
        });


        gsap.to($('.layer-8'), 2, {
            z: -30,
            ease: 'none',
            delay: 2.165
        });

        $(floatingImg).each(function (i) {
            gsap.to($(this), 4, {
                y: random(-15, 15),
                rotation: random(-5, 5),
                yoyo: true,
                ease: 'none',
                repeat: -1
            });
        })

    })

    function random(min, max) {
        return (Math.random() * (max - min)) + min;
    }
});