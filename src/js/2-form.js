window.onload = function () {
  let formData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (formData) {
    document.querySelector('input[name="email"]').value = formData.email;
    document.querySelector('textarea[name="message"]').value = formData.message;
  }
};

document
  .querySelector('.feedback-form')
  .addEventListener('input', function (event) {
    if (
      event.target.tagName === 'INPUT' ||
      event.target.tagName === 'TEXTAREA'
    ) {
      let formData = {
        email: document.querySelector('input[name="email"]').value,
        message: document.querySelector('textarea[name="message"]').value,
      };
      localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }
  });

document
  .querySelector('.feedback-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.removeItem('feedback-form-state');
    document.querySelector('input[name="email"]').value = '';
    document.querySelector('textarea[name="message"]').value = '';
  });
