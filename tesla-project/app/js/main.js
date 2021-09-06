$(function (){
    $('.slider').slick({
        arrows: false,
        fade: true,
        autoplay: 3000,
        dots: true
    });
    
    $('.header-button').click(function(){

        $('.header-button').toggleClass("btn-active");

        $('.menu').toggleClass("menu-active");

    });
    


});