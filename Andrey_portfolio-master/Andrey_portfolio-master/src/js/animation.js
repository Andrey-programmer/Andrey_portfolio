$('section h1').addClass('animated').data('animation', 'fadeInUp');

// $(window).scroll(() => {
//     $('.animated').not('.middle').each(function () {
//         if ($(document).scrollTop() + $(window).height() > $(this).offset().top && $(document).scrollTop() - $(this).offset().top < $(this).height()) {
//             $(this).css({
//                 'opacity': 1
//             }).removeClass('fadeOutDown').addClass($(this).data('animation'));
//         } else {
//             $(this).css({
//                 'opacity': 0
//             }).removeClass($(this).data('animation'));
//         }
//     })
// })


var scrollPos = 0;

// Применяем анимацию только на устройствах с экраном больше 992px
if (window.matchMedia('(min-width: 992px)').matches) {

    //Прослушка скролла
    $(window).scroll(function () {
        var st = $(this).scrollTop();
        if (st > scrollPos) {
            // console.log('Down');

            $('.animated').not('.middle').each(function () {
                if ($(document).scrollTop() + $(window).height() > $(this).offset().top && $(document).scrollTop() - $(this).offset().top < $(this).height()) {
                    $(this).css({
                        'opacity': 1
                    }).removeClass('fadeOutDown').addClass($(this).data('animation'));
                }
                /* else {
                               $(this).css({
                                   'opacity': 0
                               }).removeClass($(this).data('animation'));
                           } */
            })

        } else {
            $('.animated').not('.middle').each(function () {
                if ($(this).hasClass($(this).data('animation')) && $(document).scrollTop() + $(window).height() < $(this).offset().top + 200) {
                    // console.log($(this));
                    $(this).removeClass($(this).data('animation')).addClass('fadeOutDown');
                }

            })

            // console.log('Up');

        }
        scrollPos = st;



    });
}


$('.navbar-toggler').click(() => {
    $('.navbar-nav .nav-item').each(function () {
        $(this).addClass('fadeInUp');
    })
});

// при клике добавляем всем вышестоящим значения сласса animated видимость 
$('.navbar-nav .nav-item a').click(function () {
    let animate = $($(this).attr('href')).find('.animated');

    $('.animated').each(function(){
        if($('.animated').index($(this)) < $('.animated').index(animate.last())){ 
            $(this).removeClass('fadeOutDown').addClass($(this).data('animation'));

            // console.log($(this), $('.animated').index($(this)), `animate.last.index ${$('.animated').index(animate.last())}`)
        }
    
    });
    animate.last().each(function(){      
        // console.log($(this), $(this).data('animation'), $(this).attr('class'), $('.animated').index($(this)));
    });
 
});
// console.log($('.animated'));
