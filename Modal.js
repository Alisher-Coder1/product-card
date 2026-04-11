// Задание 4 Создание модульного окна

export default class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.closeButton = this.modal
      ? this.modal.querySelector("#close-register-modal")
      : null;
    this.overlay = this.modal ? this.modal.querySelector(".overlay") : null;

    this.initCloseButtonListener();
    this.initOverlayListener();
  }

  open() {
    if (!this.modal) return;
    this.modal.classList.add("modal-showed");
  }

  close() {
    if (!this.modal) return;
    this.modal.classList.remove("modal-showed");
  }

  isOpen() {
    if (!this.modal) return false;
    return this.modal.classList.contains("modal-showed");
  }

  initCloseButtonListener() {
    if (!this.closeButton) return;

    this.closeButton.addEventListener("click", () => {
      this.close();
    });
  }

  initOverlayListener() {
    if (!this.overlay) return;

    this.overlay.addEventListener("click", () => {
      this.close();
    });
  }
}
