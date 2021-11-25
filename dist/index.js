$(".faq__header").click(function (e) {
  e.preventDefault();
  var currentIsActive = $(this).hasClass("is-active");
  $(this).parent(".faq__right").find("> *").removeClass("is-active");
  if (currentIsActive != 1) {
    $(this).addClass("is-active");
    $(this).next(".faq__body").addClass("is-active");
  }
});

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

$(".callback-btn").click(function (event) {
  event.preventDefault();
  let phoneCallback =
    "+380" + $(this).closest("form").find(".phone-callback").val();

  let phoneCallbackVal = $(this).closest("form").find(".phone-callback").val();

  let regex = /^(66|95|99|50|67|68|96|97|98|63|73|93|39|91|92|94)\d{7}$/;
  let error = $(this).closest("form").find(".error");

  if (phoneCallbackVal.match(regex)) {
    error.css("display", "none");
    $(".preloader").addClass("active");

    var formData = new FormData();

    formData.append("callbackPhone", phoneCallback);

    var thistarget = this.target;
    jQuery.ajax({
      url: "php/sendCallback.php",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      error: function () {
        $(thistarget).html("Error: Failed to submit form!");
        $(".preloader").removeClass("active");
      },

      success: function (results) {
        window.location.replace("success.html");
      },
    });
  } else {
    error.css("display", "block");
  }
});

var fileInput = document.querySelector(".input-file"),
  button = document.querySelector(".btn-file"),
  the_return = document.querySelector(".file-return"),
  droparea = document.querySelector(".input-file-wrap"),
  errorFile = document.querySelector(".error-file"),
  formValid = document.querySelector(".calculate-1__right");

fileInput.addEventListener("change", function (event) {
  var res_field = this.files[0].name;
  var extension = res_field
    .substr(res_field.lastIndexOf(".") + 1)
    .toLowerCase();
  var allowedExtensions = ["stl", "obj"];
  let FileSize = this.files[0].size / 1024 / 1024; // in MB
  if (allowedExtensions.indexOf(extension) === -1) {
    the_return.innerHTML = "не допустимый тип файла";
    the_return.style.color = "red";
    formValid.classList.remove("valid");

    this.value = null;
  } else if (FileSize > 10) {
    the_return.innerHTML = "загрузите файл размером до 10 mb";
    the_return.style.color = "red";
    formValid.classList.remove("valid");

    this.value = null;
  } else {
    the_return.innerHTML = this.value;
    the_return.style.color = "#f8ca00";
    formValid.classList.add("valid");
    errorFile.style.display = "none";
  }
});

// highlight drag area
fileInput.addEventListener("dragover", function () {
  droparea.classList.add("is-active");
});

// back to normal state
fileInput.addEventListener("dragleave", function () {
  droparea.classList.remove("is-active");
});

$(".btn-calculate").click(function () {
  let phoneCalcVal = "+380" + $("#phone-calculate").val();
  let fileVal = $("#file").val();
  let typeVal = $(".type-val").val();
  let selectMaterialVal = $(".selectMaterial-val").val();
  let selectColorVal = $(".selectColor-val").val();
  let selectQualityVal = $(".selectQuality-val").val();
  let fileLink = $(".input-link").val();

  let phoneCalculate = $("#phone-calculate").val();

  let regex = /^(66|95|99|50|67|68|96|97|98|63|73|93|39|91|92|94)\d{7}$/;

  if (phoneCalculate.match(regex)) {
    $(".error-phone-calculate").css("display", "none");
    $(".preloader").addClass("active");

    var formData = new FormData();
    formData.append("file", $("#file")[0].files[0]);
    formData.append("type", typeVal);
    formData.append("selectMaterial", selectMaterialVal);
    formData.append("selectColor", selectColorVal);
    formData.append("selectQuality", selectQualityVal);
    formData.append("calculatePhone", phoneCalcVal);
    formData.append("link", fileLink);

    var thistarget = this.target;
    jQuery.ajax({
      url: "php/sendForm.php",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      error: function () {
        $(thistarget).html("Error: Failed to submit form!");
        $(".preloader").removeClass("active");
      },

      success: function (results) {
        window.location.replace("success.html");
      },
    });
  } else {
    $(".error-phone-calculate").css("display", "block");
  }
});

$(".question-wrap").tooltip();

$(".calculate-scroll").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".calculate").offset().top - 100,
    },
    1000
  );
});

$(".what-scroll").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".print").offset().top - 100,
    },
    1000
  );
});

$(".how-scroll").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".how").offset().top - 100,
    },
    1000
  );
});

$(".logo").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".top").offset().top - 50,
    },
    1000
  );
});

$(".callback-scroll").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#callback").offset().top - 100,
    },
    1000
  );
});

$(".success-btn").click(function () {
  window.location.replace("/index.html");
});

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

$(window).scroll(function () {
	if ($(window).scrollTop() >= 300) {
		$(".header").addClass("sticky");
	} else {
		$(".header").removeClass("sticky");
	}
});
