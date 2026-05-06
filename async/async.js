// Загрузка пользователей из users.json, имитация API и синхронизация с localStorage

// Подготовка настроек под каким именем хранить пользователей в localStorage и сколько миллисекунд ждать,
// чтобы показать имитацию загрузки

const USERS_STORAGE_KEY = "homework13Users";
const LOAD_DELAY = 1500;

// Подготовка связи с HTML, js находит  элементы на странице

const statusElement = document.getElementById("status");
const usersListElement = document.getElementById("users-list");
const loadUsersButton = document.getElementById("load-users-button");
const clearUsersButton = document.getElementById("clear-users-button");

// Подготовка служебных функций, функция для вывода сообщений пользователю
function showStatus(message) {
  statusElement.textContent = message;
  statusElement.style.display = message ? "block" : "none";
}

//Функция для искусственной задержки загрузки с использованием setTimeout для симуляции долгой загрузки
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// Получает пользователей из localStorage
function getUsersFromStorage() {
  const users = localStorage.getItem(USERS_STORAGE_KEY);

  return users ? JSON.parse(users) : null;
}

// Сохраняем массив пользователей в localStorage
function saveUsersToStorage(users) {
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
}

//Загружаем пользователей из users.json и имитируем задержку запроса
async function fetchUsers() {
  showStatus("Данные загружаются...");

  await delay(LOAD_DELAY);

  const response = await fetch("./users.json");

  if (!response.ok) {
    throw new Error("Ошибка при загрузке данных");
  }

  return response.json();
}

// Создаёт одну карточку пользователя
function createUserCard(user) {
  const userCard = document.createElement("div");
  userCard.classList.add("user-card");

  const userName = document.createElement("h3");
  userName.textContent = `${user.name} ${user.surname}`;

  const userEmail = document.createElement("p");
  userEmail.textContent = `Email: ${user.email}`;

  const userAge = document.createElement("p");
  userAge.textContent = `Age: ${user.age}`;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.dataset.userId = user.id;
  deleteButton.textContent = "Удалить карточку";

  userCard.append(userName, userEmail, userAge, deleteButton);

  return userCard;
}

// Отрисовывает карточки пользователей на странице
function renderUsers(users) {
  usersListElement.innerHTML = "";

  if (users.length === 0) {
    showStatus("Пользователей нет");
    return;
  }

  showStatus("");

  users.forEach((user) => {
    const userCard = createUserCard(user);
    usersListElement.append(userCard);
  });
}

//Загружаем пользователей при первом открытии страницы
// Проверяем localStorage, если данные есть показываем их, если данных нет загружаем из users.json
async function initUsers() {
  try {
    const storedUsers = getUsersFromStorage();

    if (storedUsers !== null) {
      renderUsers(storedUsers);
      return;
    }

    const users = await fetchUsers();

    saveUsersToStorage(users);
    renderUsers(users);
  } catch (error) {
    showStatus(error.message);
  }
}

//Загружаем всех пользователей заново из users.json
//Функция кнопки которая берет полный список из users.json сохраняет его и отображает
async function loadAllUsers() {
  try {
    const loadedUsers = await fetchUsers();
    const currentUsers = getUsersFromStorage() || [];

    if (currentUsers.length === loadedUsers.length) {
      showStatus("Все пользователи уже отображены");
      return;
    }

    saveUsersToStorage(loadedUsers);
    renderUsers(loadedUsers);
  } catch (error) {
    showStatus(error.message);
  }
}

// Берем одного пользователя из localStorage, удаляем нужного по id, сохраняем новый массив
//и заново рисуем карточки
function deleteUser(userId) {
  const users = getUsersFromStorage();

  if (!users || users.length === 0) {
    showStatus("Пользователей нет");
    return;
  }

  const updatedUsers = users.filter((user) => {
    return user.id !== userId;
  });

  saveUsersToStorage(updatedUsers);
  renderUsers(updatedUsers);
}

//Удаляем всех пользователей из localStorage и со страницы, то есть очищаем и сохраняем пустой массив в
//localStorage, чтобы после перезагрузки карточки не вернулись сами
function deleteAllUsers() {
  saveUsersToStorage([]);
  renderUsers([]);
}

//Обрабатываем клик по кнопке удаления конкретной карточки, т.е. обработчик висит на общем контейнере карточек
//при нажатии кнопки получаем id с пользователем и удаляем его
usersListElement.addEventListener("click", (event) => {
  if (!event.target.classList.contains("delete-button")) {
    return;
  }

  const userId = Number(event.target.dataset.userId);

  deleteUser(userId);
});

//Обрабатываем кнопку получения всех пользователей
//при клике загружаем полный список пользователей из users.json
loadUsersButton.addEventListener("click", () => {
  loadAllUsers();
});

//Обрабатываем кнопку удаления всех карточек, то есть при клике очищаем всех пользователей и на странице и в localStorage
clearUsersButton.addEventListener("click", () => {
  deleteAllUsers();
});

//Запускаем загрузку пользователей при открытии страницы
initUsers();
