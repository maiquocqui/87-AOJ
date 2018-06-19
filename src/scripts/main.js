$(document).ready(function() {

    // WOW JS INIT
    new WOW({
        offset: 0,
    }).init();

    // SCROLL TO FIXED
    $('header').scrollToFixed({
        zIndex: 1000,
    });

    // DATE PICKER
    $('.datepicker').datepicker();

    // TOOLTIP INIT
    $('[data-toggle="tooltip"]').tooltip()

    // SCROLL FUNCTION
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 300) {
            $('.up').addClass('active');
        } else {
            $('.up').removeClass('active');
        }
        if ($(window).scrollTop() > 100) {
            $('header').addClass('minimal');
        } else {
            $('header').removeClass('minimal');
        }
    });
    $('.up').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });

    // JQUERY COUNTER
    $(".counter").countimator({
        duration: 1000,
    });

    // BREADCRUMB PAGE NAME
    $(".pagename").append($('.breadcrumb li a').eq(1).find('span').html());

    // RESPONSIVE TAB INIT
    $('.responsive-tab').responsiveTabs({
        startCollapsed: 'accordion'
    });

    // MENU
    if ($(window).width() < 1200) {
        $('.cart').insertAfter('.login-dropdown');
    }

    $('.btn-showmenu').click(function() {
        $('.menu').toggleClass('open');
        $('.overlay').fadeToggle(500);
    });
    $('.overlay').click(function() {
        $(this).fadeOut(500);
        $('.menu').removeClass('open');
    });
    // END-MENU

    // SHOW HIDDEN CONTENT
    $('.btn-showdetail').click(function() {
        $(this).css('display', 'none');
        $('.product-content').addClass('open');
        $('.btn-hidedetail').css('display', 'block');
    });
    $('.btn-hidedetail').click(function() {
        $(this).css('display', 'none');
        $('.product-content').removeClass('open');
        $('.btn-showdetail').css('display', 'block');
    });

    // CAREER
    $('.btn-apply').click(function() {
        $('.apply-frm').slideToggle(300);
    });

    // CAREER
    $('.job .job-title').click(function() {
        if ($(this).parent().hasClass('active') == true) {
            $(this).parent().removeClass('active')
            $(this).parent().find('.job-content').slideUp(500);
        } else {
            $('.job').removeClass('active');
            $('.job').find('.job-content').slideUp(500);
            $(this).parent().addClass('active')
            $(this).parent().find('.job-content').slideDown(500);
        }
    });

    // FAQ
    $('.faq .faq-title').click(function() {
        if ($(this).parent().hasClass('active') == true) {
            $(this).parent().removeClass('active')
            $(this).parent().find('.faq-content').slideUp(300);
        } else {
            $('.faq').removeClass('active');
            $('.faq').find('.faq-content').slideUp(300);
            $(this).parent().addClass('active')
            $(this).parent().find('.faq-content').slideDown(300);
        }
    });


    // HOME BANNER
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: false,
        fade: true,
        infinite: true,
    });

    // PAGE BANNER
    $('.page-banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: false,
        fade: true,
        infinite: true,
    });

    // HOME FEEDBACK
    $('.feedback-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: false,
        fade: false,
        asNavFor: '.feedback-slide'
    });
    $('.feedback-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        centerPadding: '0px',
        infinite: true,
        asNavFor: '.feedback-slide',
        dots: false,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
    $('.feedback-author').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.feedback-slide'
    });

    // MEMBER SLICK
    $('.about-section .member-list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        arrows: true,
        dots: false,
        infinite: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // PARTNER SLICK
    $('.partner-slick').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        dots: false,
        infinite: false,
    });

    // INPUT NUMBER
    $('.btn-spin').click(function() {

        var $button = $(this);
        var oldValue = $button.parent().find('input').val();

        if ($button.text() == '+') {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }

        $button.parent().find('input').val(newVal);

    });

    // PARALLAX
    $('.parallax').parallax();
});