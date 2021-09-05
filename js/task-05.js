let inputEl = document.querySelector("#name-input");
let outputEl = document.querySelector("#name-output");
inputEl.addEventListener("input", inpFunc);
function inpFunc() {
  if (inputEl.value === "") {
    outputEl.textContent = "незнакомец";
  } else {
    outputEl.textContent = inputEl.value;
  }
}
