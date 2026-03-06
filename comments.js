// Задание 4 и Задание 5
// Создание экспортируемой константы и помещение первыч 10 объектов массива из
// (https://jsonplaceholder.typicode.com/comments).

export const comments = [
  {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    postId: 1,
    id: 2,
    name: "quo vero reiciendis velit similique earum",
    email: "Jayne_Kuhic@sydney.com",
    body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  },
  {
    postId: 1,
    id: 3,
    name: "odio adipisci rerum aut animi",
    email: "Nikita@garfield.biz",
    body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
  },
  {
    postId: 1,
    id: 4,
    name: "alias odio sit",
    email: "Lew@alysha.tv",
    body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
  },
  {
    postId: 1,
    id: 5,
    name: "vero eaque aliquid doloribus et culpa",
    email: "Hayden@althea.biz",
    body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
  },
  {
    postId: 2,
    id: 6,
    name: "et fugit eligendi deleniti quidem qui sint nihil autem",
    email: "Presley.Mueller@myrl.com",
    body: "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
  },
  {
    postId: 2,
    id: 7,
    name: "repellat consequatur praesentium vel minus molestias voluptatum",
    email: "Dallas@ole.me",
    body: "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
  },
  {
    postId: 2,
    id: 8,
    name: "et omnis dolorem",
    email: "Mallory_Kunze@marie.org",
    body: "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
  },
  {
    postId: 2,
    id: 9,
    name: "provident id voluptas",
    email: "Meghan_Littel@rene.us",
    body: "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus"
  },
  {
    postId: 2,
    id: 10,
    name: "eaque et deleniti atque tenetur ut quo ut",
    email: "Carmen_Keeling@caroline.name",
    body: "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis"
  },
]


//Задание 6
// Вывести в консоль массив тех комментариев,почта пользователей которых содержат ".com"

const comEmails = comments.filter(comment =>
comment.email.includes(".com")
);

console.log(comEmails);

//Задание 7 
//Перебор массива , что бы пользователи с id меньше или равно 5 имели postId: 2, 
// а у кого id больше 5, имели postId: 1

comments.forEach(comment => {

if (comment.id <= 5) {
comment.postId = 2;
} else {
comment.postId = 1;
}

});

console.log(comments);

//Задание 8
//Перебор массива, что бы объекты состояли только из id и name

const simplified = comments.map(comment => {
return {
id: comment.id,
name: comment.name
};
});

console.log(simplified);

//Задание 9
//Перебор массива с добавляем объектам свойства isInvalid 
// и проверкой: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.

comments.forEach(comment => {

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


const emailsMap = comments.map(comment => comment.email);

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






