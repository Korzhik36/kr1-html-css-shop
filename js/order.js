
const checkoutForm = document.getElementById('checkout-form');
const checkoutMessage = document.getElementById('checkout-message');

if (checkoutForm && checkoutMessage) {
  const fields = checkoutForm.querySelectorAll(
    'input:not([type="checkbox"]), select, textarea'
  );

  fields.forEach((field) => {
    field.addEventListener('input', () => {
      field.removeAttribute('aria-invalid');
    });

    field.addEventListener('change', () => {
      field.removeAttribute('aria-invalid');
    });
  });

  checkoutForm.addEventListener('submit', (event) => {
    event.preventDefault();

    checkoutMessage.hidden = true;
    checkoutMessage.classList.remove(
      'checkout-form__message--success',
      'checkout-form__message--error'
    );

    let firstInvalidField = null;

    const formControls = Array.from(checkoutForm.elements);

    formControls.forEach((field) => {
      if (field.willValidate) {
        field.removeAttribute('aria-invalid');

        if (!field.checkValidity()) {
          field.setAttribute('aria-invalid', 'true');

          if (!firstInvalidField) {
            firstInvalidField = field;
          }
        }
      }
    });

    if (!checkoutForm.checkValidity()) {
      checkoutMessage.textContent =
        'Проверьте заполнение формы: исправьте отмеченные поля и подтвердите согласие.';

      checkoutMessage.classList.add(
        'checkout-form__message--error'
      );
      checkoutMessage.hidden = false;

      checkoutForm.reportValidity();

      if (firstInvalidField) {
        firstInvalidField.focus();
      }

      return;
    }

    checkoutMessage.textContent =
      'Форма заполнена корректно! Это демонстрационная заявка: данные не отправлены на сервер.';

    checkoutMessage.classList.add(
      'checkout-form__message--success'
    );
    checkoutMessage.hidden = false;

    checkoutMessage.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });
  });
}