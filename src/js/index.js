$(".question-wrap").tooltip();

$(".calculate-scroll").click(function () {
	$("html, body").animate(
		{
			scrollTop: $(".calculate").offset().top - 100,
		},
		1000,
	);
});

$(".what-scroll").click(function () {
	$("html, body").animate(
		{
			scrollTop: $(".print").offset().top - 100,
		},
		1000,
	);
});

$(".how-scroll").click(function () {
	$("html, body").animate(
		{
			scrollTop: $(".how").offset().top - 100,
		},
		1000,
	);
});

$(".logo").click(function () {
	$("html, body").animate(
		{
			scrollTop: $(".top").offset().top - 50,
		},
		1000,
	);
});
