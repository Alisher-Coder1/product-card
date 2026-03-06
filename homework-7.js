// Задание 1
// Фильтрация массивов данных, начиная с 5

const numbers = [1,2,3,4,5,6,7,8,9,10];

const filteredNumbers = numbers.filter(num => num >= 5);

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

const movieExists = movies.includes("Matrix");

console.log(movieExists);

// Задание 3
// Функция, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать")

function reverseArray(arr) {
    return [...arr].reverse();
}

//Два вышеуказанных массива с помощью функции перевернуты

console.log(reverseArray(numbers));
console.log(reverseArray(movies));

//Импорт из comments.js в homework-7.js

import { comments } from "./comments.js";



