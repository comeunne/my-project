$(document).ready(function(){
    // Slick slider
    $('.slider-reviews').slick({
        infinite: false,
    });
    
    // Input mask
    $("#input_number").inputmask({ "mask": "+7 (999) 999-99-99" });
    
    // Smooth transition
    $("#nav").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
    
    window.onscroll = function showHeader() {
        const header = document.querySelector('.nav');

        if(window.pageYOffset > 600) {
            header.classList.add('nav-fixed')
        } else {
            header.classList.remove('nav-fixed')
        }
    }
});