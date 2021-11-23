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
