// Задание 3: температурный режим города //
function showWeather(city, temperature) {
  console.log(
    `Сейчас в ${city} температура ${temperature} градусов по Цельсию`,
  );
}

showWeather("Москве", 18);

// Задание 4: Сравнение скорости

const LIGHT_SPEED = 299792458n;

function checkSpeed(speed) {
  if (speed > LIGHT_SPEED) {
    console.log("Сверхсветовая скорость");
  } else if (speed < LIGHT_SPEED) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
}

checkSpeed(100000000n);
checkSpeed(299792458n);
checkSpeed(500000000n);

// Задание 5:

const productName = "Ноутбук";
const price = 1200;

function makePurchase(budget) {
  const balance = budget - price;

  if (balance >= 0) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else {
    console.log(`Вам не хватает ${Math.abs(balance)}₽. Пополните баланс.`);
  }
}

makePurchase(1500);
makePurchase(800);

// Задание 6: Создание функции

function greetUser(name) {
  console.log(`Добро пожаловать, ${name}!`);
}

greetUser("Алишер");

//Задание 7 создание 3 переменных

const userName = "Alisher";
let age = 30;
let isDeveloper = true;
