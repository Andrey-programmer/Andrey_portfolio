

var i = 1;


$('button.navbar-toggler').click(function(event) {  
        $('.nav-menu').toggleClass('show');
        $('.navbar-toggler').find('.line-first, .line-second, .line-third').toggleClass('x');     
        $('.navbar-collapse').toggleClass('show');                        
});


$('button.navbar-toggler').dblclick(function (event) {
    event.preventDefault();
    event.stopPropagation();
})

$('.nav-menu li').click(() => {
    $('.navbar-toggler').click();
})