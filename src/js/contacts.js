import 'jquery';

let hrefs = $('.item').has('.fa-html5, .fa-vk');
let vkFooter = $('.fa-vk');


hrefs.css({
    'cursor': 'pointer'
});
hrefs.mouseover(function (event) {
    $(this).css({
        'textDecoration': 'underline'
    });
    $(this).find('i').css({
        'textShadow': '0 0 3px black'
    });
})
hrefs.mouseout(function (event) {
    $(this).css({
        'textDecoration': 'none'
    });
    $(this).find('i').css({
        'textShadow': 'none'
    });
});


hrefs.has('.fa-html5').click(() => {
    location.assign('http://andrey_programmer.ru');
});

hrefs.has('.fa-vk').click(() => {
    window.open('https://vk.com/l0vec_snov', '_blank')
});

vkFooter.click(() => {
    window.open('https://vk.com/l0vec_snov', '_blank')
});

