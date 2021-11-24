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
