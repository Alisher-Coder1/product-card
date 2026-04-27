export default class Modal {
  constructor(modalId, closeButtonSelector, overlaySelector) {
    this.modal = document.getElementById(modalId);
    this.closeButton = this.modal.querySelector(closeButtonSelector);
    this.overlay = this.modal.querySelector(overlaySelector);
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
    this.closeButton.addEventListener("click", () => {
      this.close();
    });
  }

  initOverlayListener() {
    this.overlay.addEventListener("click", (event) => {
      if (event.target === event.currentTarget) {
        this.close();
      }
    });
  }

  init() {
    this.initCloseButtonListener();
    this.initOverlayListener();
  }
}
