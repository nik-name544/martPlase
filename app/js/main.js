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
    starWidth: "14px",
    readOnly: true,
    ratedFill: "#ffc000"
  });

  $('.create__search-click').on('click', function () {
    $('.create__search-categories').slideToggle();
  });


});

