// Задание 1
// Объект на основе моих данных

const userProfile = {
  firstName: "Алишер",
  lastName: "Дододжонов",
  email: "adododzhonov@inbox.ru",
  job: "Фронтенд разработчик",
  age: 51,
  country: "Российская Федерация",
  city: "Казань",
  relationshipStatus: "Женат"
};

console.log("User profile:", userProfile);


// Задание 2
// Объект автомобиля + владелец

const car = {
  brand: "Тойота",
  model: "Кэмри",
  year: 2022,
  color: "Черная",
  transmission: "Автомат"
};

// добавляем владельца отдельной строкой
car.owner = userProfile;

console.log("Car:", car);


// Задание 3
// Проверка свойства "maxSpeed"

function addMaxSpeed(carObject) {
  if (!("maxSpeed" in carObject)) {
    carObject.maxSpeed = 240;
  }
}

addMaxSpeed(car);
console.log("Car with maxSpeed:", car);

// Задание 4
// Функция вывода свойства объекта

function printObjectProperty(object, propertyName) {
  if (propertyName in object) {
    console.log(object[propertyName]);
  } else {
    console.log("Свойство не найдено");
  }
}

printObjectProperty(car, "brand");


// Задание 5
// Массив названий продуктов

const products = [
  "Молоко",
  "Хлеб",
  "Яйца",
  "Сыр",
  "Яблоки"
];

console.log("Products:", products);


// Задание 6
// Массив объектов (книги)

const books = [
  {
    title: "Чистый код",
    author: "Роберт Мартин",
    year: 2008,
    coverColor: "Белый",
    genre: "Программирование"
  },
  {
    title: "Гарри Поттер",
    author: "Д.К.Ровлинг",
    year: 1997,
    coverColor: "Синий",
    genre: "Фантастика"
  },
  {
    title: "Атомные привычки",
    author: "Джеймс Клеар",
    year: 2018,
    coverColor: "Жёлтый",
    genre: "Саморазвитие"
  }
];

// добавляем новую книгу в конец массива
books.push({
  title: "Прагматичный программист",
  author: "Эндрю Хант",
  year: 1999,
  coverColor: "Серый",
  genre: "Программирование"
});

console.log("Books:", books);


// Задание 7
// Второй массив книг (определённая вселенная)

const marvelBooks = [
  {
    title: "Человек-Паук",
    author: "Стен Ли",
    year: 1962,
    coverColor: "Красный",
    genre: "Комиксы"
  },
  {
    title: "Железный Человек",
    author: "Стен Ли",
    year: 1963,
    coverColor: "Позолоченый",
    genre: "Комиксы"
  }
];

// объединяем массивы
const allBooks = [...books, ...marvelBooks];

console.log("All books:", allBooks);


// Задание 8
// Использование map() + добавление isRare

const booksWithRareFlag = allBooks.map(book => {
  return {
    ...book,
    isRare: book.year > 2000
  };
});

console.log("Books with isRare:", booksWithRareFlag);