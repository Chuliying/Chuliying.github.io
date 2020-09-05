$(document).ready(function () {

    // Var
    const _scrollValue = 2500;
    const $bg_li = $('.bg li')
    const $bg_0 = $('.bg-0');
    const $bg_1 = $('.bg-1');
    const $bg_2 = $('.bg-2');
    const $bg_3 = $('.bg-3');
    const $bg_4 = $('.bg-4');
    const $cut_1 = $('#cut-1');
    const $cut_2 = $('#cut-2');
    const $cut_3 = $('#cut-3');
    const $cut_4 = $('#cut-4');
    const $cut = $('.cut');
    const $videoContainer = $('.video-container');

    // random function
    function random(min, max) {
        return (Math.random() * (max - min)) + min;
    }

    const $scrollBody = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    // 滾動function
    function bodyScrollTo(_p) {
        const _value = _scrollValue * _p + 150;
        $scrollBody.animate({
            scrollTop: _value
        }, 1000);
    }

     
    gsap.to($videoContainer, {
        scrollTrigger: {
            start: .9 * _scrollValue,
            end: .91 * _scrollValue,
            scrub: 1
        },
        opacity: 1
    });

    gsap.to($videoContainer, {
        scrollTrigger: {
            start: .95 * _scrollValue,
            end: .97 * _scrollValue,
            scrub: 1
        },
        opacity: 0
    });

    $bg_li.each(function (i) {
        gsap.to($(this), {
            scrollTrigger: {
                start: (i + .99) * _scrollValue,
                end: (0.999 + i) * _scrollValue,
                scrub: true
            },
            opacity: 0
        });
    });

    // $(window).scroll(function (event) {
    //     const scroll = $(window).scrollTop();
    //     if ( scroll > .9*_scrollValue && scroll < .95*_scrollValue ){
    //         $videoContainer.fadeIn(700);
    //     }

    //     else{
    //         $videoContainer.fadeOut(150);
    //     }

    //     for (i = 0; i < $bg_li.length; i++) {
    //         if (scroll > (i + .99) * _scrollValue) {
    //             $bg_li.eq(i).addClass('fadeOut');
    //         }
    //         else {
    //             $bg_li.eq(i).removeClass('fadeOut');
    //         }
    //     }
    // });

    // menu
    const $hamburger = $('.hamburger-container');
    const $menu = $('.menu');
    $hamburger.click(function () {
        $(this).toggleClass('open');
        $menu.fadeToggle(500);
    })

    // landing page
    const $cutLanding = $('#cut-landing');
    const $mainLogo = $('.main-logo');
    const $layer = $('.bg-items .layer');
    const $floatingImg = $('.layer-7 img, .floating img');
    const $bgItem = $('.bg-items');
    const $itemTitle = $bgItem.find('p');
    const $header = $('.header');
    const $body = $('body');
    const $landingBtn = $('.landing-btn');
    // image loaded then

    $body.imagesLoaded(function () {

        // LANDING CUT
        // show landing cut
        $cutLanding.fadeIn(1500);
        $mainLogo.fadeIn(1500);

        setTimeout(function () {
            $cutLanding.addClass('show')
        }, 550);

        setTimeout(function () {
            $mainLogo.fadeOut(1500);
        }, 2000);

        gsap.fromTo($bgItem, { opacity: 0, y: 120 }, { opacity: 1, y: 0, duration: 3 });
        gsap.to($header.add($itemTitle), 1, {
            opacity: 1,
            delay: 5
        });

        $layer.each(function (i) {
            gsap.to($(this), 3, {
                z: 150,
                rotation: random(-10, 10),
                ease: 'none',
                delay: 2.05 + 0.05 * i
            });
        })

        gsap.to($('.layer-7'), 3, {
            z: -25,
            ease: 'none',
            delay: 2.15
        });

        gsap.to($('.layer-8'), 3, {
            z: -30,
            ease: 'none',
            delay: 2.165
        });

        // 轉場
        $landingBtn.click(function () {
            const _key = $(this).attr('key');
            $body.css('overflow', 'auto');
            bodyScrollTo(_key);

            gsap.to($cutLanding.add($bg_0), 1, {
                z: 150,
                opacity: 0
            });
        });

        // -----------------------------------------------
        // -----------------------------------------------

        // CUT 1

        const $cut_1_Ul = $('#cut-1 .clip ul');
        const $cut_1_Li = $('#cut-1 .clip li');
        const $cut_1_Main = $('#cut-1 .main');
        gsap.to($cut_1, {
            scrollTrigger: {
                scrub: 1,
                start: "0",
                end: .075 * _scrollValue
            },
            y: 0,
            z: 0,
            opacity: 1
        });

        gsap.to($cut_1, {
            scrollTrigger: {
                start: .95 * _scrollValue,
                end: 1 * _scrollValue,
                scrub: 1
            },
            xPercent: -17.5,
            yPercent: 35,
            z: 151,
            immediateRender: false
        })

        gsap.to($cut_1, {
            scrollTrigger: {
                start: .9999999 * _scrollValue,
                end: 1 * _scrollValue,
                scrub: 0.5
            },
            opacity: 0,
            immediateRender: false
        })




        $cut_1_Li.each(function (i) {
            gsap.to($(this), {
                scrollTrigger: {
                    scrub: 1,
                    start: .075 * _scrollValue,
                    end: .8 * _scrollValue
                },
                y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
                rotation: (i > 2) ? random(-45, 45) : 0,
                ease: "slow"
            });
        })

        gsap.to($cut_1_Ul, {
            scrollTrigger: {
                scrub: 1,
                start: .8 * _scrollValue,
                end: .9 * _scrollValue
            },
            z: 155
        });

        gsap.to($cut_1_Ul, {
            scrollTrigger: {
                scrub: 1,
                start: .8 * _scrollValue,
                end: .9 * _scrollValue
            },
            z: 155
        });

        gsap.to($cut_1_Main, {
            scrollTrigger: {
                start: .25 * _scrollValue,
                end: .8 * _scrollValue,
                scrub: 1
            },
            y: 0
        })

        gsap.to($cut_1_Main, {
            scrollTrigger: {
                start: .8 * _scrollValue,
                end: .9 * _scrollValue,
                scrub: 1
            },
            z: -5,
            immediateRender: false
        })

        //FLOATING ITEM
        $floatingImg.each(function (i) {
            gsap.to($(this), 5, {
                y: random(-25, 25),
                rotation: random(-10, 10),
                yoyo: true,
                ease: 'none',
                repeat: -1
            });
        });
    });
});