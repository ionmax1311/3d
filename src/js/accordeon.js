$(".faq__header").click(function (e) {
  e.preventDefault();
  var currentIsActive = $(this).hasClass("is-active");
  $(this).parent(".faq__right").find("> *").removeClass("is-active");
  if (currentIsActive != 1) {
    $(this).addClass("is-active");
    $(this).next(".faq__body").addClass("is-active");
  }
});
