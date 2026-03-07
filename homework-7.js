import { comments } from "./comments.js";

// Задание 1
// Фильтрация массивов данных, начиная с 5

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = numbers.filter((num) => num >= 5);

console.log(filteredNumbers);

// Задание 2
// Создание массива строк, относящихся к любой сущности

const movies = [
    "Matrix", 
    "Interstellar", 
    "Inception", 
    "Avatar", 
    "Gladiator"
];

const hasMovie = movies.includes("Matrix");

console.log(hasMovie);

// Задание 3
// Функция, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать")

function reverseArray(arr) {
  return [...arr].reverse();
}

//Два вышеуказанных массива с помощью функции перевернуты

console.log(reverseArray(numbers));
console.log(reverseArray(movies));

//Задание 6
// Вывести в консоль массив тех комментариев,почта пользователей которых содержат ".com"

const comEmails = comments.filter((comment) => comment.email.includes(".com"));

console.log(comEmails);

//Задание 7
//Перебор массива , что бы пользователи с id меньше или равно 5 имели postId: 2,
// а у кого id больше 5, имели postId: 1

comments.forEach((comment) => {
  if (comment.id <= 5) {
    comment.postId = 2;
  } else {
    comment.postId = 1;
  }
});

console.log(comments);

//Задание 8
//Перебор массива, что бы объекты состояли только из id и name

const simplified = comments.map((comment) => {
  return {
    id: comment.id,
    name: comment.name,
  };
});

console.log(simplified);

//Задание 9
//Перебор массива с добавляем объектам свойства isInvalid
// и проверкой: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.

comments.forEach((comment) => {
  comment.isInvalid = comment.body.length > 180;
});

console.log(comments);

//Задание 10
//Используя метод массива reduce, вывести массив почты

const emailsReduce = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

console.log(emailsReduce);

//Используя метод массива map, вывести массив почты

const emailsMap = comments.map((comment) => comment.email);

console.log("Emails (map):", emailsMap);

//Задание 11
//Использование методов toString() для перебора массива с задания №10
//и приведения его к строке.

const emailsToString = emailsMap.toString();

console.log("toString:", emailsToString);

//Использование метода join() для перебора массива с задания №10
//и приведения его к строке.

const emailsJoin = emailsMap.join(", ");

console.log("join:", emailsJoin);
