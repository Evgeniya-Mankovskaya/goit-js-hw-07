const inpAr = document.querySelector("#validation-input");
const dataLengthEl = inpAr.getAttribute("data-length");
inpAr.addEventListener("blur", inpFunc);
function inpFunc() {
  if (inpAr.value.length === Number(dataLengthEl)) {
    inpAr.classList.remove("invalid");
    inpAr.classList.add("valid");
  } else {
    inpAr.classList.remove("valid");
    inpAr.classList.add("invalid");
  }
}
