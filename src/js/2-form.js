const form = document.querySelector('.feedback-form');

const saveFeedbackForm = () => {
  const formData = {
    email: form.email.value.trim(),
    message: form.message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const loadFromLS = () => {
  const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (formData) {
    form.email.value = formData.email;
    form.message.value = formData.message;
  }
};

loadFromLS();

form.addEventListener('input', saveFeedbackForm);

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (email && message) {
    console.log({ email, message });
    localStorage.removeItem('feedback-form-state');
    form.reset();
  } else {
    alert('All fields must be filled in.');
  }
});
