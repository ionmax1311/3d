$(".btn-calculate").click(function () {
  let phoneCalcVal = "+380" + $("#phone-calculate").val();
  let fileVal = $("#file").val();
  let typeVal = $(".type-val").val();
  let selectMaterialVal = $(".selectMaterial-val").val();
  let selectColorVal = $(".selectColor-val").val();
  let selectQualityVal = $(".selectQuality-val").val();
  if (!fileVal) {
    console.log("file-false");
    fileVal = $(".input-link").val();
  } else {
    console.log("file-true", fileVal);
  }

  let phoneCalculate = $("#phone-calculate").val();

  let regex = /^(66|95|99|50|67|68|96|97|98|63|73|93|39|91|92|94)\d{7}$/;

  //result.html(regex.test(input));
  if (phoneCalculate.match(regex)) {
    $(".error-phone-calculate").css("display", "none");
    console.log("phone-val---", phoneCalcVal);
    console.log("file-val---", fileVal);
    console.log("type-val---", typeVal);
    console.log("selectMaterial-val---", selectMaterialVal);
    console.log("selectColor-val---", selectColorVal);
    console.log("selectQuality-val---", selectQualityVal);

    // var form = new ProcessForm();
    // form.init();
    // window.location = "success.html";
  } else {
    $(".error-phone-calculate").css("display", "block");
  }
});
