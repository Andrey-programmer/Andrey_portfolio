var i = 1;


$('button.navbar-toggler').click(function (event) {
    $('.nav-menu').toggleClass('show');
    $('.navbar-toggler').find('.line-first, .line-second, .line-third').toggleClass('x');
    $('.navbar-collapse').toggleClass('show');
});


$('button.navbar-toggler').dblclick(function (event) {
    event.preventDefault();
    event.stopPropagation();
})

$('.nav-menu li').click(() => {
    1
    $('.navbar-toggler').click();
})


// При клике добавляем фон за счёт li.background устанавливаем
//  ему высоту списка и сдвигаем вверх на неё же. затем сдвигаем неню вниз на половину высоты для центрирования
$('button.navbar-toggler').click(function (event) {
    let nav_height = $('ul.navbar-nav').height();
    $('.nav-menu li.background').height(nav_height);
    console.log(nav_height);

    if ($(window).height() < 400) {
        $('ul.navbar-nav').css({
            'transform': `translateY(-60px)`
        })
    } else if ($(window).height() > 750) {
        $('ul.navbar-nav').css({
            'transform': `translateY(${nav_height/2}px)`
        });
    };

    $('.nav-menu li.background').css({
        'transform': `translateY(-${nav_height}px)`,
        'z-index': '-1',
        'backgroundColor': 'black'
    });
});