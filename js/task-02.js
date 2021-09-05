const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsEl = document.querySelector("#ingredients");
const addIngredient = (arr) =>
  arr.map((elem) => {
    const liEl = document.createElement("li");
    liEl.textContent = elem;
    return liEl;
  });
ingredientsEl.append(...addIngredient(ingredients));
