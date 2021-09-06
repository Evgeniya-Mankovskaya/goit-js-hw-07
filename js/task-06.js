const inpAr = document.querySelector("#validation-input");
const dataLengthEl = inpAr.getAttribute("data-length");
inpAr.addEventListener("blur", inpFunc);
function valInval(valid, invalid) {
  return valid, invalid;
}

function inpFunc() {
  if (inpAr.value.length === Number(dataLengthEl)) {
    valInval(inpAr.classList.remove("invalid"), inpAr.classList.add("valid"));
  } else {
    valInval(inpAr.classList.remove("valid"), inpAr.classList.add("invalid"));
  }
}
