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

$("#callback-btn").click(function () {
  let phoneCallback = "+380" + $(".phone-callback").val();

  let phoneCalculate = $("#phone-calculate").val();

  let regex = /^(66|95|99|50|67|68|96|97|98|63|73|93|39|91|92|94)\d{7}$/;

  //result.html(regex.test(input));
  if (phoneCalculate.match(regex)) {
    $(".error-phone-callback").css("display", "none");
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
      // dataType: "json",
      // contentType: "application/json;charset=utf-8",
      error: function () {
        $(thistarget).html("Error: Failed to submit form!");
        $(".preloader").removeClass("active");
      },

      success: function (results) {
        window.location.replace("success.html");
      },
    });
  } else {
    $(".error-phone-callback").css("display", "block");
  }
});

var fileInput = document.querySelector(".input-file"),
  button = document.querySelector(".btn-file"),
  the_return = document.querySelector(".file-return"),
  droparea = document.querySelector(".input-file-wrap"),
  errorFile = document.querySelector(".error-file"),
  formValid = document.querySelector(".calculate-1__right");

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
  var res_field = this.files[0].name;
  var extension = res_field
    .substr(res_field.lastIndexOf(".") + 1)
    .toLowerCase();
  var allowedExtensions = ["stl", "obj"];
  let FileSize = this.files[0].size / 1024 / 1024; // in MB
  if (allowedExtensions.indexOf(extension) === -1) {
    console.log("extension", extension);
    console.log("res_field", res_field);
    console.log("this.files[0]", this.files[0]);
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
  console.log("add");
  droparea.classList.add("is-active");
});

// back to normal state
fileInput.addEventListener("dragleave", function () {
  console.log("remove");
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
  // if (!fileVal) {
  //   console.log("file-false");
  //   fileVal = $(".input-link").val();
  // } else {
  //   console.log("file-true", fileVal);
  // }

  let phoneCalculate = $("#phone-calculate").val();

  let regex = /^(66|95|99|50|67|68|96|97|98|63|73|93|39|91|92|94)\d{7}$/;

  //result.html(regex.test(input));
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
      // dataType: "json",
      // contentType: "application/json;charset=utf-8",
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

/*!
 * Форма обратной связи (https://itchief.ru/lessons/php/feedback-form-for-website)
 * Copyright 2016-2018 Alexander Maltsev
 * Licensed under MIT (https://github.com/itchief/feedback-form/blob/master/LICENSE)
 */

"use strict";

var ProcessForm = function (config) {
  var _config = {
    selector: "#calculate-form", // селектор формы обратной связи
    isCaptcha: false, // наличие капчи
    isAgreement: false, // наличие пользовательского соглашения
    isAttachments: true, // наличие блока для прикрепления файлов
    customFileText: "",
    maxSizeFile: 10, // максмальный размер файла в мегабайтах
    validFileExtensions: [".stl,.obj"],
    codeFragmentAttachment:
      '<div class="form-group">' +
      '<div class="custom-file">' +
      '<input name="attachment[]" type="file" class="custom-file-input" id="validatedCustomFile" lang="ru">' +
      '<label class="custom-file-label" for="validatedCustomFile">Выберите файл...</label>' +
      '<div class="invalid-feedback"></div>' +
      "</div>" +
      "</div>",
  };
  for (var prop in config) {
    _config[prop] = config[prop];
  }
  this.getConfig = function () {
    return _config;
  };
  this.getForm = function () {
    return $(_config.selector)[0];
  };
  this.setIsCaptcha = function (value) {
    _config.isCaptcha = value;
  };
  this.setIsAgreement = function (value) {
    _config.isAgreement = value;
  };
  this.setIsAttachments = function (value) {
    _config.isAttachments = value;
  };
};

ProcessForm.prototype = (function () {
  // переключить во включенное или выключенное состояние кнопку submit
  var _changeStateSubmit = function (form, state) {
    $(form).find('[type="submit"]').prop("disabled", state);
  };

  // изменение состояния кнопки submit в зависимости от состояния checkbox agree
  var _changeAgreement = function (form, state) {
    _changeStateSubmit(form, state);
  };

  // обновление капчи
  var _refreshCaptcha = function (form) {
    var captchaImg = $(form).find(".img-captcha"),
      captchaSrc = captchaImg.attr("data-src"),
      captchaPrefix = captchaSrc.indexOf("?id") !== -1 ? "&rnd=" : "?rnd=",
      captchaNewSrc = captchaSrc + captchaPrefix + new Date().getTime();
    captchaImg.attr("src", captchaNewSrc);
  };

  // изменение состояния элемента формы (success, error, clear)
  var _setStateValidaion = function (input, state, message) {
    input = $(input);
    if (state === "error") {
      input
        .removeClass("is-valid")
        .addClass("is-invalid")
        .siblings(".invalid-feedback")
        .text(message);
    } else if (state === "success") {
      input.removeClass("is-invalid").addClass("is-valid");
    } else {
      input.removeClass("is-valid is-invalid");
    }
  };

  // метод, возвращающий результат проверки расширения файла допустимому
  var _validateFileExtension = function (filename, validFileExtensions) {
    // получаем расширение файла
    var fileExtension = filename.slice(
      ((filename.lastIndexOf(".") - 1) >>> 0) + 2
    );
    // если есть расширение, то проверяем соотвествует ли оно допустимому
    if (fileExtension) {
      for (var i = 0; i <= validFileExtensions.length; i++) {
        if (validFileExtensions[i] === fileExtension.toLowerCase()) {
          return true;
        }
      }
    }
    return false;
  };

  // валилация формы
  var _validateForm = function (form) {
    var valid = true;
    $(form)
      .find("input, textarea")
      .not('[type="file"], [name="agree"]')
      .each(function () {
        if (this.checkValidity()) {
          _setStateValidaion(this, "success");
        } else {
          _setStateValidaion(this, "error", this.validationMessage);
          valid = false;
        }
      });
    return valid;
  };

  var _showForm = function (_this) {
    var form = _this.getForm(),
      $form = $(form);
    if (!$form.find(".form-error").hasClass("d-none")) {
      $form.find(".form-error").addClass("d-none");
    }
    $form
      .siblings(".form-result-success")
      .addClass("d-none")
      .removeClass("d-flex");
    form.reset();
    $form.find("input, textarea").each(function () {
      _setStateValidaion(this, "clear");
    });
    if (_this.getConfig().isCaptcha) {
      _refreshCaptcha(form);
    }
    if (_this.getConfig().isAgreeCheckbox) {
      _changeStateSubmit(form, true);
    } else {
      _changeStateSubmit(form, false);
    }
    if (_this.getConfig().isAttachments) {
      $(".attachments").html(_this.getConfig().codeFragmentAttachment);
    }
    if ($(_this.getConfig().selector + " .progress-bar").length) {
      $(_this.getConfig().selector + " .progress-bar")
        .attr("aria-valuenow", "0")
        .width("0")
        .find(".sr-only")
        .text("0%");
    }
  };

  // изменение элемента input с type="file"
  var _changeInputFile = function (e, _this) {
    $(e.currentTarget)
      .removeClass("is-invalid is-valid")
      .parent()
      .find(".invalid-feedback")
      .text("");

    // условия для добавления нового элемента input с type="file"
    var isSelectFile = e.currentTarget.files.length > 0;
    var isNextInput =
      $(e.currentTarget).closest(".custom-files").next(".custom-files")
        .length === 0;
    var isMaxInput =
      $(_this.getConfig().selector + ' input[name="attachment[]"]').length <
      $(_this.getConfig().selector + " .attachments").attr("data-counts");
    if (isSelectFile && isNextInput && isMaxInput) {
      $(e.currentTarget)
        .closest(".form-group")
        .after(_this.getConfig().codeFragmentAttachment);
    }
    // если файл выбран, то выполняем следующие действия...
    if (e.currentTarget.files.length > 0) {
      // получим файл
      var file = e.currentTarget.files[0];
      // if ($(e.target).next("label").length > 0) {
      //   $(e.target).next("label").text(file.name);
      // }
      // проверим размер и расширение файла
      if (file.size > _this.getConfig().maxSizeFile * 1024 * 1024) {
        $(e.currentTarget)
          .addClass("is-invalid")
          .parent()
          .find(".invalid-feedback")
          .text(
            "*Файл не будет отправлен, т.к. его размер больше " +
              _this.getConfig().maxSizeFile * 1024 +
              "Кбайт"
          );
        // console.log(
        //   "*Файл не будет отправлен, т.к. его размер больше " +
        //     _this.getConfig().maxSizeFile * 1024 +
        //     "Кбайт"
        // );
      } else if (
        !_validateFileExtension(
          file.name,
          _this.getConfig().validFileExtensions
        )
      ) {
        $(e.currentTarget)
          .addClass("is-invalid")
          .parent()
          .find(".invalid-feedback")
          .text(
            "*Файл не будет отправлен, т.к. его тип не соответствует разрешённому"
          );
      } else {
        $(e.currentTarget).addClass("is-valid");

        if ($(e.currentTarget).next("p")) {
          $(e.currentTarget).next("p").text("");
        }
      }
    } else {
      // если после изменения файл не выбран, то сообщаем об этом пользователю
      $(e.currentTarget)
        .next("p")
        .text("* Файл не будет отправлен, т.к. он не выбран");
      $(e.target).next("label").text("Выберите файл...");
    }
  };

  var _changeStateImages = function (config, state) {
    if (!config.isAttachments) {
      return;
    }
    var files = $(config.selector).find('[name="attachment[]"]'),
      index = 0;
    for (var i = 0; i < files.length; i++) {
      // получить список файлов элемента input с type="file"
      var fileList = files[i].files;
      // если элемент не содержит файлов, то перейти к следующему
      if (fileList.length > 0) {
        // получить первый файл из списка
        var file = fileList[0];
        // проверить тип файла и размер
        if (
          !_validateFileExtension(file.name, config.validFileExtensions) &&
          file.size < config.maxSizeFile * 1024 * 1024
        ) {
          $(files[i]).prop("disabled", state);
          $(files[i]).attr("data-index", "-1");
          console.log();
        } else {
          $(files[i]).attr("data-index", index++);
        }
      } else {
        $(files[i]).prop("disabled", state);
        $(files[i]).attr("data-index", "-1");
      }
    }
  };

  // собираем данные для отправки на сервер
  var _collectData = function (_this, config) {
    _changeStateImages(config, true);
    var output = new FormData(_this);
    _changeStateImages(config, false);
    return output;
  };

  // отправка формы
  var _sendForm = function (_this, config) {
    if (!_validateForm(_this)) {
      if ($(_this).find(".is-invalid").length > 0) {
        $(_this).find(".is-invalid")[0].focus();
      }
      return;
    }
    if (!$(_this).find(".form-error").hasClass("d-none")) {
      $(_this).find(".form-error").addClass("d-none");
    }

    var form = $("#feedback-form")[0];
    let data = new FormData(form);
    $.ajax({
      context: _this,
      type: "POST",
      url: $(_this).attr("action"),
      // data: _collectData(_this, config), // данные для отправки на сервер
      data: data,
      contentType: false,
      processData: false,
      cache: false,
      beforeSend: function () {
        _changeStateSubmit(_this, true);
      },
      xhr: function () {
        var myXhr = $.ajaxSettings.xhr();
        if ($(config.selector + " .progress").hasClass("d-none")) {
          $(config.selector + " .progress").removeClass("d-none");
        }
        if (myXhr.upload) {
          myXhr.upload.addEventListener(
            "progress",
            function (event) {
              // если известно количество байт для пересылки
              if (event.lengthComputable) {
                // получаем общее количество байт для пересылки
                var total = event.total;
                // получаем какое количество байт уже отправлено
                var loaded = event.loaded;
                // определяем процент отправленных данных на сервер
                var progress = ((loaded * 100) / total).toFixed(1);
                // обновляем состояние прогресс бара Bootstrap
                var progressBar = $(config.selector + " .progress-bar");
                progressBar.attr("aria-valuenow", progress);
                progressBar.width(progress + "%");
                progressBar.find(".sr-only").text(progress + "%");
              }
            },
            false
          );
        }
        return myXhr;
      },
    })
      .done(
        _success,
        console.log("_collectData(_this, config)", _collectData(_this, config))
      )
      .fail(_error);
  };

  // при получении успешного ответа от сервера
  var _success = function (data) {
    var _this = this;
    if ($(this).find(".progress").length) {
      $(this)
        .find(".progress")
        .addClass("d-none")
        .find(".progress-bar")
        .attr("aria-valuenow", "0")
        .width("0")
        .find(".sr-only")
        .text("0%");
    }

    // при успешной отправки формы
    if (data.result === "success") {
      $(this)
        .parent()
        .find(".form-result-success")
        .removeClass("d-none")
        .addClass("d-flex");
      return;
    }
    // если произошли ошибки при отправке
    $(this).find(".form-error").removeClass("d-none");
    _changeStateSubmit(this, false);

    // выводим ошибки которые прислал сервер
    for (var error in data) {
      if (!data.hasOwnProperty(error)) {
        continue;
      }
      switch (error) {
        case "captcha":
          _refreshCaptcha($(this));
          _setStateValidaion(
            $(this).find('[name="' + error + '"]'),
            "error",
            data[error]
          );
          break;
        case "attachment":
          $.each(data[error], function (key, value) {
            console.log(
              '[name="attachment[]"][data-index="' + key + '"],--',
              data[error]
            );
            _setStateValidaion(
              $(_this).find('[name="attachment[]"][data-index="' + key + '"]'),
              "error",
              value
            );
          });
          break;
        case "log":
          $.each(data[error], function (key, value) {
            console.log(value);
          });
          break;
        default:
          _setStateValidaion(
            $(this).find('[name="' + error + '"]'),
            "error",
            data[error]
          );
      }
      // устанавливаем фокус на 1 невалидный элемент
      if ($(this).find(".is-invalid").length > 0) {
        $(this).find(".is-invalid")[0].focus();
      }
    }
  };

  // если не получили успешный ответ от сервера
  var _error = function (request) {
    $(this).find(".form-error").removeClass("d-none");
  };

  // функция для инициализации
  var _init = function () {
    this.setIsCaptcha($(this.getForm()).find(".captcha").length > 0); // имеется ли у формы секция captcha
    this.setIsAgreement($(this.getForm()).find(".agreement").length > 0); // имеется ли у формы секция agreement
    this.setIsAttachments($(this.getForm()).find(".attachments").length > 0); // имеется ли у формы секция attachments
    _setupListener(this);
  };

  // устанавливаем обработчики событий
  var _setupListener = function (_this) {
    $(document).on(
      "change",
      _this.getConfig().selector + ' [name="agree"]',
      function () {
        _changeAgreement(_this.getForm(), !this.checked);
      }
    );
    $(document).on("submit", _this.getConfig().selector, function (e) {
      e.preventDefault();
      _sendForm(_this.getForm(), _this.getConfig());
    });
    $(document).on(
      "click",
      _this.getConfig().selector + " .refresh-captcha",
      function (e) {
        e.preventDefault();
        _refreshCaptcha(_this.getForm());
      }
    );
    $(document).on(
      "click",
      '[data-reloadform="' + _this.getConfig().selector + '"]',
      function (e) {
        e.preventDefault();
        _showForm(_this);
      }
    );
    if (_this.getConfig().isAttachments) {
      //$('#' + this.idForm + ' .countFiles').text(this.countFiles);
      // добавление нового элемента input с type="file"
      $(document).on(
        "change",
        _this.getConfig().selector + ' input[name="attachment[]"]',
        function (e) {
          _changeInputFile(e, _this);
        }
      );
    }
  };
  return {
    init: _init,
  };
})();

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

$(window).scroll(function () {
	if ($(window).scrollTop() >= 300) {
		$(".header").addClass("sticky");
	} else {
		$(".header").removeClass("sticky");
	}
});
