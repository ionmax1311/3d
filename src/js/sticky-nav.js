$(window).scroll(function () {
	if ($(window).scrollTop() >= 300) {
		$(".header").addClass("sticky");
	} else {
		$(".header").removeClass("sticky");
	}
});
