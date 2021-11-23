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
