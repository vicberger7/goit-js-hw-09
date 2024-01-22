window.onload = function () {
  let form = document.querySelector('.feedback-form');
  let emailInput = document.querySelector('input[name="email"]');
  let messageTextarea = document.querySelector('textarea[name="message"]');

  let formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

  if (formData.email) {
    emailInput.value = formData.email;
  }

  if (formData.message) {
    messageTextarea.value = formData.message;
  }

  form.addEventListener('input', function (event) {
    if (
      event.target.tagName === 'INPUT' ||
      event.target.tagName === 'TEXTAREA'
    ) {
      formData = {
        email: emailInput.value.trim(),
        message: messageTextarea.value.trim(),
      };
      localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (formData.email && formData.message) {
      console.log(formData);
      localStorage.removeItem('feedback-form-state');
      emailInput.value = '';
      messageTextarea.value = '';
    } else {
      alert('Будь ласка, заповніть усі поля форми перед відправленням.');
    }
  });
};
