$(document).ready(function () {
    const $cutLanding = $('#cut-landing');
    $cutLanding.imagesLoaded(function () {
        $cutLanding.fadeIn(1500);
        setTimeout(function () {
            $cutLanding.addClass('show')
        }, 550);
        setTimeout(ActiveCutMain, 2000);

    })

    function ActiveCutMain() {
        $cutLanding.addClass('show')
        $('.bg-items').addClass('show');

        setTimeout(function () {
            $cutLanding.addClass('fadeOut');
            $('.entry').fadeIn(50);
        }, 4800);

        setTimeout(function () {
            $cutLanding.addClass('fadeOut');
            $('.bg-items').removeClass('show');

        }, 6500);
    }
});