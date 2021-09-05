const controlFontSizeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
controlFontSizeEl.addEventListener("input", textFunc);

function textFunc() {
  textEl.style.fontSize = controlFontSizeEl.value + "px";
}
