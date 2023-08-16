$(document).ready(function () {
  $(".main-slider").slick({
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 4,
    infinite: true,
    dots: false,
    nextArrow: '<img src="./images/arrow.svg" class="arrow-btn" alt="">',
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

$(document).ready(function () {
  $(".second-slider").slick({
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 4,
    infinite: true,
    dots: false,
    nextArrow: "",
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
// OWL CAROUSEL
// $(".owl-carousel").owlCarousel({
//   loop: true,
//   margin: 10,
//   nav: true,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 1,
//     },
//     1000: {
//       items: 1,
//     },
//   },
// });
