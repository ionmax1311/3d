$(".calculate__next-1").click(function (e) {
	e.preventDefault();
	$(".calculate-1").removeClass("active");
	$(".calculate-2").addClass("active");
});

$(".calculate__next-2").click(function (e) {
	e.preventDefault();
	$(".calculate-2").removeClass("active");
	$(".calculate-3").addClass("active");
});

$(".calculate__prev-3").click(function (e) {
	e.preventDefault();
	$(".calculate-3").removeClass("active");
	$(".calculate-2").addClass("active");
});

$(".calculate__prev-2").click(function (e) {
	e.preventDefault();
	$(".calculate-2").removeClass("active");
	$(".calculate-1").addClass("active");
});

$(".btn-type").click(function (e) {
	e.preventDefault();
	$(".btn-type").removeClass("active");
	$(this).addClass("active");
});
