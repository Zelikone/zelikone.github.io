$(document).ready(function(){
    $('.slider').slick({
        centerMode: true,
        centerPadding: 0,
        slidesToShow: 3,
        dots: true
    });
});

const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion) => {
    accordion.onclick = function () {
        this.parentElement.classList.toggle("is-open");

        let content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 20 + "px";
        }
    };
});

const burgerButton = document.querySelector('.header-burger-button');
const closeMenuButton = document.querySelector('.close-menu-button');
const mobMenu = document.querySelector('.menu-mob');

burgerButton.addEventListener('click', () => {
    mobMenu.classList.add('active')
});

closeMenuButton.addEventListener('click', () => {
    mobMenu.classList.remove('active')
});
