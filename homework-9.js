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
