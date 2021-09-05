const incEl = document.querySelector("[data-action='increment']");
const decEl = document.querySelector("[data-action='decrement']");
const valEl = document.querySelector("#value");
let counterValue = 0;
const increment = () => {
  counterValue += 1;
  valEl.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  valEl.textContent = counterValue;
};
incEl.addEventListener("click", increment);
decEl.addEventListener("click", decrement);
