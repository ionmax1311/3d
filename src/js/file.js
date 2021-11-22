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
  let FileSize = this.files[0].size / 1024 / 1024; // in MB
  if (FileSize > 20) {
    the_return.innerHTML = "загрузите файл размером до 20 mb";
    the_return.style.color = "red";
    formValid.classList.remove("valid");

    this.value = null;
  } else {
    the_return.innerHTML = this.value;
    the_return.style.color = "#fff";
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
