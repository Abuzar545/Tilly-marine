$('.homePromoSlider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ['<div class="slider-side-arrow">←</>', '<div class="slider-side-arrow">→</>'],
    responsive:{
        0:{
            items:1
        },
      
    }
})
$(document).ready(function () {

    $(".mega-menu-button").click(function () {

        if ($(window).width() >= 992) {

            // Desktop Menu
            $(".mega-menu").fadeToggle(300);
            $(".mobile-menu").fadeOut(300);

        } else {

            // Mobile Menu
            $(".mobile-menu").fadeToggle(300);
              $(".mega-menu").fadeOut(300);
        }

    });

});