$('.mobile-type-link a').click(function () {
    if($('.mobile-type-link').hasClass('click')) {
        $(this).parents('.mobile-type-link').removeClass('click');
        $(this).addClass('active');
    } else {
        $(this).parents('.mobile-type-link').addClass('click');
        $(this).removeClass('active');

    }

});
$(".header-type-link").each(function () {
    $(this).click(function () {
        $(".header-type-link.active").removeClass("active");
        $(this).addClass("active");
    })
});

$(".header-icon-block-link").each(function () {
    $(this).click(function () {
        $(".header-icon-block-link").removeClass("active");
        $(this).addClass("active");
    })
});


var filterCriteriaHeight = $(".filter-criteria-block").height();
$('.filter-criteria-title').click(function () {
    if($(".filter-criteria-block").hasClass('active')) {
        $(".filter-criteria-block").stop().animate({height: 56},200);
        $('.filter-criteria-block').removeClass('active');
    } else {
        $(".filter-criteria-block").stop().animate({height: filterCriteriaHeight+40},200); // 40 получена опытным путем
        $(".filter-criteria-block").addClass('active');
    }
});


$(".block-filter-icon").click(function () {
    if($(this).hasClass('show')){
        $(this).removeClass('show');
        $('.block-filter').css('position', 'absolute');
        if ($(window).width() <= '991') {
            $('.block-filter').css('left', '-100%');
        } else {
            $('.block-filter').css('left', '-408px');
        }
        $('.block-filter-icon').css('display', 'block');
    } else {
        $(this).addClass('show');
        $('.block-filter').css('left', '0');
        $('.block-filter').css('position', 'relative');
        $('.block-filter-icon').css('display', 'none');
    }

});

$('.close-mobile-filter').click(function () {
    $('.block-filter').css('position', 'absolute');
    if ($(window).width() <= '991') {
        $('.block-filter').css('left', '-100%');
    } else {
        $('.block-filter').css('left', '-408px');
    }
    $('.block-filter-icon').css('display', 'block');
});

$('.header-mobile .right').click(function () {
    if($(this).hasClass('open')) {
        $(this).removeClass('open');
        $('.header-wrap').css('display', 'none');
    } else {
        $(this).addClass('open');
        $('.header-wrap').css('display', 'block');
    }
});

$('.list-item').each(function () {
    $(this).find('.view-ap').click(function () {
        var height = $(this).parents('.list-item').find('.item-wrap').height();
        console.log(height);
        if($(this).parents('.list-item').hasClass('active')) {
            $(this).parents('.list-item').removeClass('active');
            //$(this).parents('.list-item').css('height', height + 'px').css('oveflow', 'hidden');

        } else {
            $(this).parents('.list-item').addClass('active');
            //$(this).parents('.list-item').css('height', 'auto').css('oveflow', 'auto');
        }

    })
});

$('.close-apartaments-block').click(function () {
    $(this).parents('.list-item').removeClass('active');
});


$('.slick-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    dots: true,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

});

$('.slide-new-catalog').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    dots: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 630,
            settings: {
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

});

$('.left-menu-item > a').click(function () {
    if ($(this).hasClass('open')) {
        $(this).removeClass('open');

    } else {
        $(this).addClass('open');
        return false;
    }
});


   $(".contact-item").each(function () {
       if($(this).hasClass('active')) {
           $('#' + $(this).data('map')).addClass('active');
       }
   });

$(".contact-item").click(function () {
    if (!$(this).hasClass('active')) {
        $(".contact-item.active").removeClass('active');
        $('.map-img.active').removeClass('active');

        $(this).addClass('active');
        $('#' + $(this).data('map')).addClass('active');
    }

});

$('.slider-goods').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    dots: false,
    fade: true,
    asNavFor: '.slider-goods-min'
});
$('.slider-goods-min').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-goods',
    arrows: true,
    infinite: true,
    dots: false,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 4
            }
        }
    ]
});