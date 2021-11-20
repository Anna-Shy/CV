$(function () {
  $(".carousel__inner").slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 841,
        settings: {
          slidesToShow: 3
        },
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1
        },
      },
    ],
  });

	$(".carousel__img-link").fancybox();

});
