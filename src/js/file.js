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
