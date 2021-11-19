$(".faq__header").click(function (e) {
  e.preventDefault();
  console.log(111);
  var currentIsActive = $(this).hasClass("is-active");
  $(this).parent(".faq__right").find("> *").removeClass("is-active");
  if (currentIsActive != 1) {
    $(this).addClass("is-active");
    $(this).next(".faq__body").addClass("is-active");
  }
});

var fileInput = document.querySelector(".input-file"),
  button = document.querySelector(".btn-file"),
  the_return = document.querySelector(".file-return"),
  droparea = document.querySelector(".input-file-wrap");

// button.addEventListener("keydown", function (event) {
//   if (event.keyCode == 13 || event.keyCode == 32) {
//     fileInput.focus();
//   }
// });
// button.addEventListener("click", function (event) {
//   fileInput.focus();
//   return false;
// });

fileInput.addEventListener("change", function (event) {
  let FileSize = this.files[0].size / 1024 / 1024; // in MB
  if (FileSize > 20) {
    the_return.innerHTML = "загрузите файл размером до 20 mb";
    the_return.style.color = "red";
    this.value = null;
  } else {
    the_return.innerHTML = this.value;
    the_return.style.color = "#fff";
  }
});

// highlight drag area
fileInput.addEventListener("dragover", function () {
  console.log("add");
  droparea.classList.add("is-active");
});

// back to normal state
fileInput.addEventListener("dragleave", function () {
  console.log("remove");
  droparea.classList.remove("is-active");
});

$(".question-wrap").tooltip();

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
  // asNavFor: ".models__slider-nav",
  // appendArrows: $(".models-arrow"),
  prevArrow:
    '<button id="prevModels" type="button" class="btn-slider-models"><i class="fa fa-chevron-left" aria-hidden="true"></i> </button>',
  nextArrow:
    '<button id="nextModels" type="button" class="btn-slider-models"> <i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
});

// $(".models__slider-nav").slick({
//   slidesToShow: 6,
//   slidesToScroll: 1,
//   asNavFor: ".models__slider-for",
//   dots: false,
//   centerMode: false,
//   focusOnSelect: false,
// });

// $(".models__slider-nav").on("click", function (event) {
//   console.log($(this).attr("index"));
//   $(".models__slider-for").slick("slickGoTo", $(this).attr("index"));
// });

$(".models-item").click(function (e) {
  e.preventDefault();
  var slideno = $(this).data("slide");
  $(".models__slider-for").slick("slickGoTo", slideno - 1);

  $(".models-item").removeClass("active");
  $(this).addClass("active");
});

// $("#nextModels").click(function (e) {
//   e.preventDefault();
//   // var slideno = $(this).data("slide");
//   // $(".models__slider-for").slick("slickGoTo", slideno - 1);
//   console.log();

//     $(".models-item.active").next(".models-item").addClass("active");
//     $(".models-item.active").prev(".models-item").removeClass("active");

// });

// $("#prevModels").click(function (e) {
//   e.preventDefault();
//   // var slideno = $(this).data("slide");
//   // $(".models__slider-for").slick("slickGoTo", slideno - 1);
//   console.log();

//     $(".models-item.active").prev(".models-item").addClass("active");
//     $(".models-item.active").prev(".models-item").removeClass("active");

// });

// $carousel.on("afterChange", function () {
//   var dataId = $(".models__slider-for .slick-current").attr("data-slick-index");
//   console.log("dataId---", dataId);

// });
