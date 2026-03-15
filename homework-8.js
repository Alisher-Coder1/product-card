import { products } from "./products.js";

//Задание 3 Шаблон одной карточки

 function createProductCard(product) {
  const compositionItems = product.composition
    .map((item) => `<li class="product-card__composition-item">${item}</li>`)
    .join("");

  return `
    <article class="product-card">
      <img
        src="${product.image}"
        alt="${product.name}"
        class="product-card__image"
      />
      <p class="product-card__type">${product.type}</p>
      <h3 class="product-card__title">${product.name}</h3>
      <p class="product-card__description">
        ${product.description}
      </p>
      <p class="product-card__composition-title">Состав:</p>
      <ul class="product-card__composition">
        ${compositionItems}
      </ul>
      <div class="product-card__price">
        <span class="product-card__price-label">Цена</span>
        <span class="product-card__price-value">${product.price} &#8381;</span>
      </div>
    </article> 
  `;
}

//Функция которая принимает массив и выводит его в .catalog__grid

function renderProducts(productsArray) {
  const catalogGrid = document.querySelector(".catalog__grid");

  if (!catalogGrid) {
    console.error("Контейнер .catalog__grid не найден");
    return;
  }

  const cardsMarkup = productsArray.map(createProductCard).join("");
  catalogGrid.innerHTML = cardsMarkup;
}

//Задание 5
//Реализация функции которая при старте страницы выводит сообщение (через функцию prompt) 
// "Сколько карточек отобразить? От 1 до 5" и в зависимости от результата - будет выводить введенное количество. 
// С защитой от ввода других значений (проверка if). То-есть: у нас будет 2 функции, 
// одна возвращает количество карточек, которое нужно ввести, другая - рендерить эти карточки (принимая массив аргументом)

function askProductsCount() {
  const userInput = prompt("Сколько карточек отобразить? От 1 до 5");
  const count = Number(userInput);

  if (count >= 1 && count <= 5) {
    return count;
  }

  alert("Введите число от 1 до 5");
  return askProductsCount();
}

const count = askProductsCount();
const visibleProducts = products.slice(0, count);

renderProducts(visibleProducts);

//Задание 4
//Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

const productsDescriptions = products.reduce((acc, product) => {
  acc[product.name] = product.description;
  return acc;
}, {});

console.log(productsDescriptions);
