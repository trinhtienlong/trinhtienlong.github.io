$(document).ready(function () {
  $(".image-slider").slick({
    // autoplay: true,
    // autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 3,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left test' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right test' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $(".product-for").slick({
    // autoplay: true,
    // autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".product-nav",
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left test' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right test' aria-hidden='true'></i></button>",
  });

  $(".product-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: ".product-for",
    focusOnSelect: true,
    arrows: false,
    infinite: false,
  });

  $("#inlineRadio2").css("background-color", "yellow");
  $("#inlineRadio1").css("background-color", "silver");

  const boxImg = [
    "assets/imgs/iphone-6-s-32Gb-01.jpg",
    "assets/imgs/iphone-6-s-32Gb-02.jpg",
    "assets/imgs/iphone-6-s-32Gb-04.jpg",
    "assets/imgs/iphone-6-s-32Gb-03.jpg",
  ];
  const boxImgitem = [
    "assets/imgs/iphone-6-s-32Gb-01.jpg",
    "assets/imgs/iphone-6-s-32Gb-02.jpg",
    "assets/imgs/iphone-6-s-32Gb-04.jpg",
    "assets/imgs/iphone-6-s-32Gb-03.jpg",
  ];

  const boxImg1 = [
    "assets/imgs/ip-gold3.jpg",
    "assets/imgs/ip-gold-4.jpg",
    "assets/imgs/ip-6s-gold.jpg",
    "assets/imgs/ip-6s-gold-2.jpg",
  ];
  const boxImgitem1 = [
    "assets/imgs/ip-gold3.jpg",
    "assets/imgs/ip-gold-4.jpg",
    "assets/imgs/ip-6s-gold.jpg",
    "assets/imgs/ip-6s-gold-2.jpg",
  ];

  const productImg = $(".product-img");
  const productImgitem = $(".product-nav1 img");

  $("#inlineRadio1").click(function () {
    for (i = 0; i < productImg.length; i++) {
      productImg[i].setAttribute("src", boxImg[i]);
      productImgitem[i].setAttribute("src", boxImgitem[i]);
    }
    $('.color-prd span:nth-child(2)').css('color','#d70909')
    $('.color-prd span:nth-child(2)').text('Sliver');
  });

  $("#inlineRadio2").click(function () {
    for (i = 0; i < productImg.length; i++) {
      productImg[i].setAttribute("src", boxImg1[i]);
      productImgitem[i].setAttribute("src", boxImgitem1[i]);
    }
    $('.color-prd span:nth-child(2)').css('color','#d70909')
    $('.color-prd span:nth-child(2)').text('Gold');
  });
});
