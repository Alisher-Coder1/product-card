// Покраска первой карточки
const recolorBackgroundFirstCardButton = document.getElementById(
  "recolor-background-first-card-button",
);
const firstProductCard = document.querySelector(".product-card");
const blueHashColor = "#0000ff";

recolorBackgroundFirstCardButton.addEventListener("click", () => {
  firstProductCard.style.backgroundColor = blueHashColor;
});

// Покраска всех карточек
const recolorBackgroundAllCardsButton = document.getElementById(
  "recolor-background-all-cards-button",
);
const allProductCards = document.querySelectorAll(".product-card");
const greenHashColor = "#00ff44";

recolorBackgroundAllCardsButton.addEventListener("click", () => {
  allProductCards.forEach((card) => {
    card.style.backgroundColor = greenHashColor;
  });
});

// Переход на страницу Google
document.addEventListener("DOMContentLoaded", function () {
  const openGooglebutton = document.getElementById("open-google-button");

  openGooglebutton.addEventListener("click", openGoogle);

  function openGoogle() {
    const answer = confirm("Вы действительно хотите перейти на сайт Google?");

    if (answer) {
      window.open("https://google.com", "_blank");
    } else {
      console.log("Пользователь отменил переход на Google");
    }
  }
});

// Задание 3: вывод контента заголовка при наведении
const catalogTitle = document.querySelector(".catalog__title");

catalogTitle.addEventListener("mouseover", () => {
  console.log(catalogTitle.textContent);
});

// Задание 4: кнопка меняет свой цвет
const toggleButton = document.getElementById("toggle-button-color");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("is-active");
});
