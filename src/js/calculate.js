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
  // $(document).on("click", ".btn-type", function () {
  // e.preventDefault();

  $(".btn-type").removeClass("active");
  $(this).addClass("active");
  let typeVal = $(this).data("type");
  $(this).data("type", typeVal);
  $(".error-type").css("display", "none");
  $(".type-val").val(typeVal);

  if ($(this).data("type") === "FDM") {
    $(".tooltip-type").attr(
      "data-original-title",
      "Послойное наплавление пластика. Невысокая цена печати. Средняя детализация изделий. Быстрая печать."
    );
    // $(".calculate-2__wrap-fdm").css("display", "block ");
    // $(".calculate-2__wrap-sla").css("display", "none ");
    $(".calculate-2__wrap-fdm").addClass("active");
    $(".calculate-2__wrap-sla").removeClass("active");
  } else if ($(this).data("type") === "SLA") {
    $(".tooltip-type").attr(
      "data-original-title",
      "Технология застывания фотополимерной смолы. Самая высокая точность моделей среди 3d принтеров. Цена выше чем у FDM печати."
    );
    // $(".calculate-2__wrap-fdm").css("display", "none ");
    // $(".calculate-2__wrap-sla").css("display", "block ");
    $(".calculate-2__wrap-fdm").removeClass("active");
    $(".calculate-2__wrap-sla").addClass("active");
  }
});

$(".select-material").on("change", function () {
  if ($(this).val() === "PLA") {
    $(".tooltip-material").attr(
      "data-original-title",
      "PLA - термопластик. Благодаря низкой температуре плавления и минимальному деформированию PLA является одним из самых простых материалов для печати. PLA достаточно хрупкий, лучше всего подходит для печати декоративных моделей."
    );
  }
  if ($(this).val() === "ABS") {
    $(".tooltip-material").attr(
      "data-original-title",
      "ABS - менее жесткий, чем PLA, но более ударопрочный и легкий материал. Для печати ABS требуется больше усилий, чем PLA. Подходит для некоторых применений, выходящих за рамки чисто хоббистских, например прототипов и конечных деталей с низкой нагрузкой"
    );
  }
  if ($(this).val() === "ABS+") {
    $(".tooltip-material").attr(
      "data-original-title",
      "ABS+ - инженерная разновидность ABS. Немного более прочный материал с повышенной защитой от высоких температур."
    );
  }
  if ($(this).val() === "PETG") {
    $(".tooltip-material").attr(
      "data-original-title",
      "PETG - и прочный и надежный материал. Есть возможность печатать модели прозрачными цветами. Если вам не нужна высокая термостойкость, это отличный материал, который многие называют золотой серединой."
    );
  }
  if ($(this).val() === "Не знаю") {
    $(".tooltip-material").attr(
      "data-original-title",
      "Выберите материал печати"
    );
  }
});

$(document).ready(function () {
  // $(".tooltip-type").attr(
  //   "data-original-title",
  //   "Послойное наплавление пластика. Невысокая цена печати. Средняя детализация изделий. Быстрая печать."
  // );
});
