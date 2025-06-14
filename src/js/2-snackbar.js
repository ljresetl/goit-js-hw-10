const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(form.delay.value);
  const state = form.state.value;

  function createPromise(delay, state) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });
  }

  createPromise(delay, state)
    .then(delay => {
      iziToast.success({
        title: "Success",
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
      console.log(`✅ Fulfilled promise in ${delay}ms`);
    })
    .catch(delay => {
      iziToast.error({
        title: "Error",
        message: `❌ Rejected promise in ${delay}ms`,
      });
      console.log(`❌ Rejected promise in ${delay}ms`);
    })
    .finally(() => {
      form.delay.value = '';  // Очистка інпуту затримки

      // Скидання вибору радіокнопок
      const radios = form.querySelectorAll('input[name="state"]');
      radios.forEach(radio => radio.checked = false);
    });
});
