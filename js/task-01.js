const liEl = document.querySelectorAll(".item");
console.log(`В списке ${liEl.length} категории.`);
const categoriesArr = [...liEl]
  .map(
    (categories) => `Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArr);
