$(document).ready(function () {
    const $cutLanding = $('#cut-landing');
    $cutLanding.imagesLoaded(function () {
        $cutLanding.fadeIn(1500);
        setTimeout(function () {
            $cutLanding.addClass('show')
        }, 550);

        setTimeout(function () {
            $('.main-logo').fadeOut(1500);
        }, 4000);
    })

    const bgItem = $('.bg-items li');


    var vh = $(window).height();
    var vw = $(window).width();

    $(bgItem).each(function (i) {
        gsap.to($(this), 5, {
            x: randomN(-vw, vw, vw),
            y: randomN(-vh, vh, vh),
            z: random(-500, 500, 0),
            rotation: random(-5, 5),
            ease: 'none',
            scale: 3.5,
            delay: 2.5 + i * .05
        });
    })

    $(bgItem).each(function (i) {
        gsap.to($(this), 0.5, {
            opacity: 0,
            delay: 4.5 + i * .02
        });
    })


    // $('.p-2').each(function (i) {
    //     TweenMax.to($(this), 5, {
    //         x: randomN(-vw, vw, vw),
    //         y: randomN(-vh, vh, vh),
    //         z: random(-500, 500, 0),
    //         rotation: random(-50, 50),
    //         scale: 3,
    //         delay: 3.35+ i * .02
    //     });
    // })
    // $('.p-3').each(function (i) {
    //     TweenMax.to($(this), 5, {
    //         x: randomN(-vw, vw, vw),
    //         y: randomN(-vh, vh, vh),
    //         z: random(-500, 500, 0),
    //         rotation: random(-50, 50),
    //         ease: 'none',
    //         scale: 3,
    //         delay: 3.5+ i * .02
    //     });
    // })
    // $('.p-4').each(function (i) {
    //     TweenMax.to($(this),5, {
    //         x: randomN(-vw, vw, vw),
    //         y: randomN(-vh, vh, vh),
    //         z: random(-500, 500, 0),
    //         rotation: random(-50, 50),
    //         ease: 'none',
    //         scale: 3,
    //         delay: 3.75+ i * .02
    //     });
    // })
    // $('.p-5').each(function (i) {
    //     TweenMax.to($(this), 5, {
    //         x: randomN(-vw, vw, vw),
    //         y: randomN(-vh, vh, vh),
    //         z: random(-500, 500, 0),
    //         rotation: random(-30, 30),
    //         ease: 'none',
    //         scale: 3,
    //         delay: 4+ i * .02
    //     });
    // })
  


    function random(min, max) {
        return (Math.random() * (max - min)) + min;
    }

    function randomN(min, max, dir) {
        var randomN = (Math.random() * (max - min)) + min;
        if (randomN < 0){
            randomN -= 1.5*dir;
        }
        else{
            randomN += 1.5*dir;
        }
        return randomN;
    }

    function fadeout(){
        $(this).fadeOut();
     }
});