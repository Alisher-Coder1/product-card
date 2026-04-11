// ПУНКТ 4 Форма в Footer
//Добавляем валидацию email и выводим данные в консоль
document.addEventListener("DOMContentLoaded", function () {
  const subscribeForm = document.getElementById("subscribe-form");
  const emailInput = document.getElementById("email");
  //Если форма или поле не найдены
  if (!subscribeForm || !emailInput) return;
  //Обработка отправки формы
  subscribeForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    //Проверка на пустое значение
    if (!email) return;
    //Проверка валидности email
    if (!emailInput.checkValidity()) return;
    //Выводим email в консоль в виде объекта
    console.log({ email: email });
    //Очищаем форму после успешной отправки
    subscribeForm.reset();
  });
});
/*
//ПУНКТ 5 Модальное Окно
document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("open-register-modal");
  const modal = document.getElementById("register-modal");
  const closeBtn = document.getElementById("close-register-modal");
  const overlay = modal ? modal.querySelector(".overlay") : null;
  //Если один из элементов не найден - выходим
  if (!openBtn || !modal || !closeBtn || !overlay) return;
  //Открытие модального окна
  openBtn.addEventListener("click", function () {
    modal.classList.add("modal-showed");
  });
  //Закрытие по кнопке (крестик)
  closeBtn.addEventListener("click", function () {
    modal.classList.remove("modal-showed");
  });
  
  //Закрытие по клику на затемненный фон (overlay)
  overlay.addEventListener("click", function () {
  });
});
*/
/*
//Пункт 6 Форма регистрации
//Глобальная переменная пользователя
let user = null;
//Валидация формы, проверка паролей и создание объектов пользователя
document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("register-form");
  const message = document.getElementById("register-form-message");
  const modal = document.getElementById("register-modal");
  //Если форма не найдена - выходим
  if (!registerForm || !message || !modal) return;
  //Обработка отправки формы регистрации
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    message.textContent = "";
    //Собираем данные формы
    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const birthDate = document.getElementById("birth-date").value;
    const login = document.getElementById("login").value.trim();
    const password = document.getElementById("password").value;
    const repeatPassword = document.getElementById("repeat-password").value;
    // Проверка валидности всей формы
    if (!registerForm.checkValidity()) {
      message.textContent =
        "Регистрация отклонена: форма заполнена некорректно.";
      registerForm.reportValidity();
      return;
    }
    // Проверка совпадения паролей
    if (password !== repeatPassword) {
      message.textContent = "Регистрация отклонена: пароли не совпадают.";
      return;
    }

    user = {
      firstName,
      lastName,
      birthDate,
      login,
      password,
      repeatPassword,
      createdOn: new Date(),
    };

    console.log(user);
    //Сбрасываем форму
    registerForm.reset();
    modal.classList.remove("modal-showed");
  });
});
*/
