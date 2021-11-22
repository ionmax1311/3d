function checkValid1(params) {
  if ($(".btn-type.active").length === 0) {
    $(".error-type").css("display", "block");
  }
  if ($(".calculate-1__right.valid").length === 0) {
    $(".error-file").css("display", "block");
  }
}

$(".calculate__next-1").click(function (e) {
  if ($(".input-link").val().length > 0) {
    $(".calculate-1__right").addClass("valid");
    $(".error-file").css("display", "none");
  }

  if (
    $(".btn-type.active").length === 0 ||
    $(".calculate-1__right.valid").length === 0
  ) {
    checkValid1();
    e.preventDefault();
  } else {
    $(".error-type").css("display", "none");
    $(".calculate-1").removeClass("active");
    $(".calculate-2").addClass("active");
  }
});

$(".calculate__next-2").click(function (e) {
  e.preventDefault();

  let selectMaterial = $(".select-material").val();
  let selectColor = $(".select-color").val();
  let selectQuality = $(".select-quality").val();

  $(".selectMaterial-val").val(selectMaterial);
  $(".selectColor-val").val(selectColor);
  $(".selectQuality-val").val(selectQuality);

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
  let typeVal = $(this).data("type");
  $(this).data("type", typeVal);
  $(".error-type").css("display", "none");
  $(".type-val").val(typeVal);
});
