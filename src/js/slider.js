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
	infinite: false,
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

$("#nextModels").click(function (e) {
	e.preventDefault();

	$(".models-item.active").next(".models-item").addClass("active");
	$(".models-item.active").prev(".models-item").removeClass("active");
});

$("#prevModels").click(function (e) {
	e.preventDefault();

	$(".models-item.active").prev(".models-item").addClass("active");
	$(".models-item.active").next(".models-item").removeClass("active");

	console.log($(".models-item.active").data("slide"));
});

$carousel.on("afterChange", function () {
	var dataId = $(".models__slider-for .slick-current").attr(
		"data-slick-index",
	);

	console.log("dataId---", dataId);
	console.log("data---", $(".models-item").data("slide"));
	// if (($(".models-item").data("slide").indexOf('4289') > -1){

	// }
});
