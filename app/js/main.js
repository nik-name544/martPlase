$(function () {

  $('.products__slider').slick({
    dots: false,
    arrows: true,
    nextArrow: '<button class="slick-arrow slick-next"><img src="img/chevron-right.svg" alt="next arrow"></button>',
    prevArrow: '<button class="slick-arrow slick-prev"><img src="img/chevron-left.svg" alt="prev arrow"></button>',
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "12px",
    readOnly: true,
    ratedFill: "#ffc000"
  });

  $('.create__search-click').on('click', function () {
    $('.create__search-categories').slideToggle();
  });

  $('.followers-slider__inner').slick({
    dots: false,
    arrows: true,
    nextArrow: '<button class="slick-arrow slick-next"><img src="img/chevron-right.svg" alt="next arrow"></button>',
    prevArrow: '<button class="slick-arrow slick-prev"><img src="img/chevron-left.svg" alt="prev arrow"></button>',
    infinite: true,
    speed: 500,
    // fade: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'linear'
  });

  $('.newest__click').on('click', function () {
    $('.newest__filters').slideToggle();
  });

  $('.price-filter').on('click', function () {
    $('.price__filters').slideToggle();
  });

  $('.quantity-filter').on('click', function () {
    $('.quantity__filters').slideToggle();
  });

  $(".js-range-slider").ionRangeSlider({
    type: 'double',
    min: 0,
    max: 400,
    from: 30,
    to: 300,
    grid: false,
    prefix: "$",
    force_edges: false,     
    hide_min_max: true,    
    hide_from_to: false,    
    block: false
  });

  var mixer = mixitup('.newest__inner-box');


});

