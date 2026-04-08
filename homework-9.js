// ПУНКТ 4 Форма в Footer
//Добавляем валидацию email и выводим данные в консоль
document.addEventListener("DOMContentLoaded", function () {
  const subscribeForm = document.getElementById("subscribe-form");
  const emailInput = document.getElementById("email");

  if (!subscribeForm || !emailInput) return;

  subscribeForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (!email) return;
    if (!emailInput.checkValidity()) return;

    console.log({ email: email });

    subscribeForm.reset();
  });
});

//ПУНКТ 5 Модальное Окно
document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("open-register-modal");
  const modal = document.getElementById("register-modal");
  const closeBtn = document.getElementById("close-register-modal");
  const overlay = modal ? modal.querySelector(".overlay") : null;

  if (!openBtn || !modal || !closeBtn || !overlay) return;

  openBtn.addEventListener("click", function () {
    modal.classList.add("modal-showed");
  });

  closeBtn.addEventListener("click", function () {
    modal.classList.remove("modal-showed");
  });

  overlay.addEventListener("click", function () {
    modal.classList.remove("modal-showed");
  });
});

//Пункт 6 Форма регистрации

let user = null;

document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("register-form");
  const message = document.getElementById("register-form-message");
  const modal = document.getElementById("register-modal");

  if (!registerForm || !message || !modal) return;

  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    message.textContent = "";

    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const birthDate = document.getElementById("birth-date").value;
    const login = document.getElementById("login").value.trim();
    const password = document.getElementById("password").value;
    const repeatPassword = document.getElementById("repeat-password").value;

    if (!registerForm.checkValidity()) {
      message.textContent =
        "Регистрация отклонена: форма заполнена некорректно.";
      registerForm.reportValidity();
      return;
    }

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

    registerForm.reset();
    modal.classList.remove("modal-showed");
  });
});
