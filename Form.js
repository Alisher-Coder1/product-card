export default class Form {
  constructor(formId) {
    this.form = document.getElementById(formId);
  }

  getValues() {
    if (!this.form) return {};

    const formData = new FormData(this.form);
    return Object.fromEntries(formData.entries());
  }

  isValid() {
    if (!this.form) return false;
    return this.form.checkValidity();
  }

  reset() {
    if (!this.form) return;
    this.form.reset();
  }

  reportValidity() {
    if (!this.form) return;
    this.form.reportValidity();
  }
}
