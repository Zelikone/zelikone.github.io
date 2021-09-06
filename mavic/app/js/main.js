$(function(){


  $('.menu__btn').on('click', function(){

    $('.header__menu-mob').toggleClass('menu-mob--active');
    $(this).toggleClass('menu__btn--active');
    $('.section__page').toggleClass('section__page--left')

  });

  $('.header__menu-link, .logo__img').on('click', function(){

    $('.header__menu-mob').removeClass('menu-mob--active');
    $('.menu__btn').removeClass('menu__btn--active');
    $('.section__page').removeClass('section__page--left')

  });



  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    speed: 1000,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });



  $('.questions__item-title').on('click', function(){

    $('.questions__item').removeClass('questions__item--active');
    $(this).parent().addClass('questions__item--active');

  });

  

  new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    scrollOverflow: true,
    sectionSelector: '.section__page',
    anchors: ['top', 'about', 'benefits', 'characteristics', 'questions', 'contacts'],
	  menu: '.header__menu-list'

  });

  






});

  