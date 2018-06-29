let sizeDesctiption = 0;

if (window.matchMedia('(min-width: 992px)').matches) {
    function MaxHeight() {
        let items = $('#about__me ').find('.article,.wrap_person');
        items.each(function () {
            console.log($(this), $(this).height());
            if ($(this).height() > sizeDesctiption) {
                sizeDesctiption = $(this).height();
            }
        })

        // console.log(sizeDesctiption);

        items.each(function () {
            $(this).height(sizeDesctiption);
            console.log($(this), $(this).height());
        })

    }

    MaxHeight(); // В данной функции выравниваем высоту блоков чтобы WOW - эффект происходил одновременно

}