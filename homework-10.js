import Modal from "./Modal.js";
import Form from "./Form.js";
import BuildingMaterial from "./BuildingMaterial.js";
import InsulationMaterial from "./InsulationMaterial.js";

// Задание 4 и 5
let user = null;

document.addEventListener("DOMContentLoaded", function () {
  const registerModal = new Modal("register-modal");
  const registerForm = new Form("register-form");
  const openBtn = document.getElementById("open-register-modal");
  const message = document.getElementById("register-form-message");

  if (openBtn) {
    openBtn.addEventListener("click", function () {
      registerModal.open();
    });
  }

  if (!registerForm.form || !message) return;

  registerForm.form.addEventListener("submit", function (e) {
    e.preventDefault();

    message.textContent = "";

    if (!registerForm.isValid()) {
      message.textContent =
        "Регистрация отклонена: форма заполнена некорректно.";
      registerForm.reportValidity();
      return;
    }

    const values = registerForm.getValues();

    if (values.password !== values.repeatPassword) {
      message.textContent = "Регистрация отклонена: пароли не совпадают.";
      return;
    }

    user = {
      ...values,
      createdOn: new Date(),
    };

    console.log(user);

    registerForm.reset();
    registerModal.close();
  });
});

// Задание 3 Пример наследумости классов
const cement = new BuildingMaterial("Cement", 500);
const penoplex = new InsulationMaterial("Penoplex", 1200, "0.032 W/mK");

cement.showInfo();
penoplex.showInfo();
penoplex.showThermalInfo();
