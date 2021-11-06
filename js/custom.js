//For fixed navbar
let nav_offset_top = $('.header__menu').height();

function navbarFixed(){
    if($('.header__menu').length){
        $(window).scroll(function() {
            let scroll = $(window).scrollTop();
            if(scroll > nav_offset_top){
                $('.header__menu').addClass('navbar__fixed');
            }
            else{
                $('.header__menu').removeClass('navbar__fixed');
            }
        });
    };
};

navbarFixed();