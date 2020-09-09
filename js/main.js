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
    const _vh = $(window).height();
    const _vw = $(window).width();

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

    //FLOATING ITEM
    const $floatingImg = $('.layer-7 img, .floating img');
    $floatingImg.each(function (i) {
        gsap.to($(this), 5, {
            y: random(-15, 15),
            rotation: random(-7, 7),
            yoyo: true,
            ease: 'none',
            repeat: -1
        });
    });

    // cut active controll
    $cut.each(function (i) {
        gsap.to($(this), {
            scrollTrigger: {
                start: (i + .7) * _scrollValue,
                end: (0.95 + i) * _scrollValue,
                toggleClass: { targets: $(this), className: "active" }
            }
        });
    });

    // 背景觸發 
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

    $(window).scroll(function (event) {
        const scroll = $(window).scrollTop();

        // for (i = 0; i < $bg_li.length; i++) {

        //     if (scroll > (i + .99) * _scrollValue) {
        //         $bg_li.eq(i).addClass('fadeOut');
        //     }
        //     else {
        //         $bg_li.eq(i).removeClass('fadeOut');
        //     }
        // }

        if (scroll == 4 * _scrollValue) {
            window.scrollTo(0, 0);

        }
    });

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
    const $bgItem = $('.bg-items');
    const $itemTitle = $bgItem.find('p');
    const $header = $('.header');
    const $body = $('body');
    const $landingBtn = $('.landing-btn');
    $body.css('height', 4 * _scrollValue + _vh);
    // image loaded then

    $body.imagesLoaded(function () {
        $('.wrapper').fadeIn(500);
        $('.loading').fadeOut(500);
        // LANDING CUT
        // show landing cut
        $cutLanding.fadeIn(1500);
        $mainLogo.fadeIn(1500);

        setTimeout(function () {
            $cutLanding.addClass('show');
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

        // CUT 1 變數
        const $cut_1_Ul = $('#cut-1 .clip ul');
        const $cut_1_Li = $('#cut-1 .clip li');
        const $cut_1_Main = $('#cut-1 .main');

        // cut 出現
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

        // cut 消失
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

        // cut fadeout
        gsap.to($cut_1, {
            scrollTrigger: {
                start: .9999999 * _scrollValue,
                end: 1 * _scrollValue,
                scrub: 0.5
            },
            opacity: 0,
            immediateRender: false
        })

        // 裝飾物件動態
        $cut_1_Li.each(function (i) {
            gsap.to($(this), {
                scrollTrigger: {
                    scrub: 1,
                    start: .065 * _scrollValue,
                    end: .7 * _scrollValue
                },
                y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
                rotation: (i > 2) ? random(-45, 45) : 0,
                ease: "slow"
            });
        })

        // 裝飾物件 zoom out
        gsap.to($cut_1_Ul, {
            scrollTrigger: {
                scrub: 1,
                start: .7 * _scrollValue,
                end: .75 * _scrollValue
            },
            z: 155
        });

        // main 長出來
        gsap.to($cut_1_Main, {
            scrollTrigger: {
                start: .25 * _scrollValue,
                end: .68 * _scrollValue,
                scrub: 1
            },
            y: 0
        })
        // main zoom in
        gsap.to($cut_1_Main, {
            scrollTrigger: {
                start: .68 * _scrollValue,
                end: .75 * _scrollValue,
                scrub: 1
            },
            z: -5,
            immediateRender: false
        })

        // -----------------------------------------------
        // -----------------------------------------------

        // CUT 2 -------

        const $cut_2_Ul = $('#cut-2 .clip ul');
        const $cut_2_Li = $('#cut-2 .clip li');
        const $cut_2_Main = $('#cut-2 .main');

        // cut 出現
        gsap.to($cut_2, {
            scrollTrigger: {
                scrub: 1,
                start: 1 * _scrollValue,
                end: 1.075 * _scrollValue
            },
            x: 0,
            z: 0,
            opacity: 1
        });
        // cut 消失
        gsap.to($cut_2, {
            scrollTrigger: {
                start: 1.95 * _scrollValue,
                end: 2 * _scrollValue,
                scrub: 1
            },
            xPercent: -21.5,
            yPercent: 36,
            z: 151,
            immediateRender: false
        })
        // cut fadeout
        gsap.to($cut_2, {
            scrollTrigger: {
                start: 1.9999999 * _scrollValue,
                end: 2 * _scrollValue,
                scrub: 0.5
            },
            opacity: 0,
            immediateRender: false
        })

        // 裝飾物件動態
        $cut_2_Li.each(function (i) {
            gsap.to($(this), {
                scrollTrigger: {
                    scrub: 1,
                    start: 1.065 * _scrollValue,
                    end: 1.7 * _scrollValue
                },
                x: (i, target) => ScrollTrigger.maxScroll(window) * target.dataset.speed,
                ease: "slow"
            });
        })

        // 裝飾物件 zoom out
        gsap.to($cut_2_Ul, {
            scrollTrigger: {
                scrub: 1,
                start: 1.7 * _scrollValue,
                end: 1.75 * _scrollValue
            },
            z: 155
        });

        // main 長出來
        gsap.to($cut_2_Main, {
            scrollTrigger: {
                start: 1.065 * _scrollValue,
                end: 1.68 * _scrollValue,
                scrub: 1
            },
            x: 0
        })
        // main zoom in
        gsap.to($cut_2_Main, {
            scrollTrigger: {
                start: 1.68 * _scrollValue,
                end: 1.75 * _scrollValue,
                scrub: 1
            },
            z: -5,
            y: 0,
            immediateRender: false
        })

        // CUT 3 -------

        const $cut_3_Ul = $('#cut-3 .clip ul');
        const $cut_3_Li = $('#cut-3 .clip li');
        const $cut_3_Main = $('#cut-3 .main');

        // cut 出現
        gsap.to($cut_3, {
            scrollTrigger: {
                scrub: 1,
                start: 3 * _scrollValue,
                end: 3.075 * _scrollValue
            },
            y: 0,
            z: 0,
            opacity: 1
        });
        // cut 消失
        gsap.to($cut_3, {
            scrollTrigger: {
                start: 3.95 * _scrollValue,
                end: 4 * _scrollValue,
                scrub: 1
            },
            xPercent: -22.75,
            yPercent: 21,
            z: 151,
            immediateRender: false
        })
        // cut fadeout
        gsap.to($cut_3, {
            scrollTrigger: {
                start: 3.9999999 * _scrollValue,
                end: 4 * _scrollValue,
                scrub: 0.5
            },
            opacity: 0,
            immediateRender: false
        })

        // 裝飾物件動態
        $cut_3_Li.each(function (i) {
            gsap.to($(this), {
                scrollTrigger: {
                    scrub: 1,
                    start: 3.065 * _scrollValue,
                    end: 3.7 * _scrollValue
                },
                x: (i, target) => ScrollTrigger.maxScroll(window) * target.dataset.speed * -1,
                ease: "slow"
            });
        })
        // 裝飾物件 zoom out
        gsap.to($cut_3_Ul, {
            scrollTrigger: {
                scrub: 1,
                start: 3.7 * _scrollValue,
                end: 3.75 * _scrollValue
            },
            z: 155
        });

        // main 長出來
        gsap.to($cut_3_Main, {
            scrollTrigger: {
                start: 3.065 * _scrollValue,
                end: 3.68 * _scrollValue,
                scrub: 1
            },
            x: 0
        })
        // main zoom in
        gsap.to($cut_3_Main, {
            scrollTrigger: {
                start: 3.68 * _scrollValue,
                end: 3.75 * _scrollValue,
                scrub: 1
            },
            z: -5,
            y: 0,
            immediateRender: false
        })

        // CUT 4 -------

        const $cut_4_Ul = $('#cut-4 .clip ul');
        const $cut_4_Li = $('#cut-4 .clip li');
        const $cut_4_Main = $('#cut-4 .main');
        // cut 出現
        gsap.to($cut_4, {
            scrollTrigger: {
                scrub: 1,
                start: 2 * _scrollValue,
                end: 2.075 * _scrollValue
            },
            y: 0,
            z: 0,
            opacity: 1
        });
        // cut 消失
        gsap.to($cut_4, {
            scrollTrigger: {
                start: 2.95 * _scrollValue,
                end: 3 * _scrollValue,
                scrub: 1
            },
            xPercent: -35,
            yPercent: -26,
            z: 151,
            immediateRender: false
        })
        // cut fadeout
        gsap.to($cut_4, {
            scrollTrigger: {
                start: 2.9999999 * _scrollValue,
                end: 3 * _scrollValue,
                scrub: 0.5
            },
            opacity: 0,
            immediateRender: false
        })

        // 裝飾物件動態
        $cut_4_Li.each(function (i) {
            gsap.to($(this), {
                scrollTrigger: {
                    scrub: 1,
                    start: 2.065 * _scrollValue - 500,
                    end: 2.7 * _scrollValue - 500
                },
                yPercent: (i, target) => ScrollTrigger.maxScroll(window) * target.dataset.speed,
                ease: "slow"
            });
        })
        // 裝飾物件 zoom out
        gsap.to($cut_4_Ul, {
            scrollTrigger: {
                scrub: 1,
                start: 2.7 * _scrollValue,
                end: 2.75 * _scrollValue
            },
            z: 155
        });

        // main 長出來
        gsap.to($cut_4_Main, {
            scrollTrigger: {
                start: 2.065 * _scrollValue,
                end: 2.68 * _scrollValue,
                scrub: 1
            },
            x: 0
        })
        // main zoom in
        gsap.to($cut_4_Main, {
            scrollTrigger: {
                start: 2.68 * _scrollValue,
                end: 2.75 * _scrollValue,
                scrub: 1
            },
            z: -5,
            y: 0,
            immediateRender: false
        })
    });
});