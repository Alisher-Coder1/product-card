import { products } from "./products.js";

// Задание 3 Cоздание и реализация шаблона для продуктовых карточек.

const productTemplate = document.getElementById("product-template");
const catalogGrid = document.querySelector(".catalog__grid");

function renderProducts(productsArray) {
  catalogGrid.innerHTML = "";

  productsArray.forEach((product) => {
    const productClone = productTemplate.content.cloneNode(true);

    const productImage = productClone.querySelector(".product-card__image");
    const productType = productClone.querySelector(".product-card__type");
    const productTitle = productClone.querySelector(".product-card__title");
    const productDescription = productClone.querySelector(
      ".product-card__description",
    );
    const productComposition = productClone.querySelector(
      ".product-card__composition",
    );
    const productPrice = productClone.querySelector(
      ".product-card__price-value",
    );

    productImage.src = product.image;
    productImage.alt = product.name;
    productType.textContent = product.type;
    productTitle.textContent = product.name;
    productDescription.textContent = product.description;
    productPrice.textContent = product.price + "₽";

    product.composition.forEach((item) => {
      const compositionItem = document.createElement("li");
      compositionItem.classList.add("product-card__composition-item");
      compositionItem.textContent = item;
      productComposition.appendChild(compositionItem);
    });

    catalogGrid.appendChild(productClone);
  });
}

// Задание 5 Реализация функции, которая при старте страницы выводит сообщение (через функцию prompt)
// "Сколько карточек отобразить? От 1 до 5" и в зависимости от результата и выводит введенное количество.
//  С защитой от ввода других значений (проверка if). 
function getCardsCount() {
  const userInput = prompt("Сколько карточек отобразить? От 1 до 5");
  const count = Number(userInput);

  if (count >= 1 && count <= 5) {
    return count;
  }

  alert("Введите число от 1 до 5");
  return getCardsCount();
}

const count = getCardsCount();
const visibleProducts = products.slice(0, count);

renderProducts(visibleProducts);

// Задание 4 Используя метод .reduce(), получить массив объектов, 
// где ключем является название продукта, а значением - его описание

const productsDescriptions = products.reduce((acc, product) => {
  acc.push({
    [product.name]: product.description,
  });

  return acc;
}, []);

console.log(productsDescriptions);
