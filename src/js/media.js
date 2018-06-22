import 'jquery';


if ($(window).width() < 768 ){
    $('.education h2:first').css({'marginBottom' : '39px'}).after($('<br>'));
//    console.log( $('.education h2:first')); 
}

if($(window).width() < 680) {
    $('.logo-line img').css({'height': '4rem', 'transform' : 'translateX(-174px)'}).after($('<br>'));
    $('.logo-line').css('transform', 'translateX(0)');
}

if($(window).width() < 640) {
    $('header p.web_html:contains("Web-разработчик /")').after($('<br>'));
    console.log( $('header p.web_html:contains("Web-разработчик /")'));

}