// Задание 4 Создание модульного окна

export default class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.closeButton = this.modal.querySelector("#close-register-modal");
    this.overlay = this.modal.querySelector(".overlay");

    this.close = this.close.bind(this);

    this.initCloseButtonListener();
    this.initOverlayListener();
  }

  open() {
    this.modal.classList.add("modal-showed");
  }

  close() {
    this.modal.classList.remove("modal-showed");
  }

  isOpen() {
    return this.modal.classList.contains("modal-showed");
  }

  initCloseButtonListener() {
    this.closeButton.addEventListener("click", this.close);
  }

  initOverlayListener() {
    this.overlay.addEventListener("click", this.close);
  }
}
