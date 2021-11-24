// Portfolio slider

$(".portfolio__slider").slick({
  centerMode: true,
  centerPadding: "150px",
  slidesToShow: 4,
  appendArrows: $(".portfolio-arrow"),
  prevArrow:
    '<button id="prevPortfolio" type="button" class="btn-slider-portfolio"><i class="fa fa-chevron-left" aria-hidden="true"></i> </button>',
  nextArrow:
    '<button id="nextPortfolio" type="button" class="btn-slider-portfolio"> <i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: "30px",
        slidesToShow: 1,
      },
    },
  ],
});

// Models's slider
var $carousel = $(".models__slider-for");

$carousel.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  accessibility: false,
  //   infinite: false,
  prevArrow:
    '<button id="prevModels" type="button" class="btn-slider-models"><i class="fa fa-chevron-left" aria-hidden="true"></i> </button>',
  nextArrow:
    '<button id="nextModels" type="button" class="btn-slider-models"> <i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
});

$(".models-item").click(function (e) {
  e.preventDefault();
  var slideno = $(this).data("slide");
  $(".models__slider-for").slick("slickGoTo", slideno);

  $(".models-item").removeClass("active");
  $(this).addClass("active");
});

$carousel.on("afterChange", function () {
  var dataId = $(".models__slider-for .slick-current").attr("data-slick-index");

  let highlightedItems = Array.from(document.querySelectorAll(".models-item"));

  highlightedItems.filter((item, i) => {
    if (item.getAttribute("data-slide") === dataId) {
      highlightedItems.forEach((c) => {
        c.classList.remove("active");
      });

      item.classList.add("active");
    }
  });
});
