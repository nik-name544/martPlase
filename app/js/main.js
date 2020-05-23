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

  var mixer = mixitup('.newest__inner-box');


});

