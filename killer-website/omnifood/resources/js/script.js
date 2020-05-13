$(document).ready(function () {
    /* Sticky navigation */
    $('.js--section-features').waypoint(function (direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    })

    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        });
    })
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        });
    })

    /* Navigation scroll */

    /* Animations on scroll */
    $('.js--section-features').waypoint(function (direction) {
        if (direction == 'down') {
            $('.js--wp-1').addClass('animate__animated animate__fadeIn');
        } else {
            $('.js--wp-1').removeClass('animate__animated animate__fadeIn');
        }
    }, {
        offset: '50%'
    })

    $('.js--section-steps').waypoint(function (direction) {
        if (direction == 'down') {
            $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
        } else {
            $('.js--wp-2').removeClass('animate__animated animate__fadeInUp');
        }
    }, {
        offset: '50%'
    })

    $('.js--section-cities').waypoint(function (direction) {
        if (direction == 'down') {
            $('.js--wp-3').addClass('animate__animated animate__fadeIn');
        } else {
            $('.js--wp-3').removeClass('animate__animated animate__fadeIn');
        }
    }, {
        offset: '50%'
    })

    $('.js--section-plans').waypoint(function (direction) {
        if (direction == 'down') {
            $('.js--wp-4').addClass('animate__animated animate__pulse');
        } else {
            $('.js--wp-4').removeClass('animate__animated animate__pulse');
        }
    }, {
        offset: '50%'
    })

    /* Mobile nav */
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        nav.slideToggle(200);
        if ($(this).attr('name') == 'menu-outline') {
            $(this).attr('name', 'close-outline');
        } else {
            $(this).attr('name', 'menu-outline');
        }
    })
})