/* <form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Log in</button>
</form>;
*/

// відправлення форми form.login-form повинна відбуватися за подією submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'. Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
// При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const formEl = document.querySelector('.login-form');

const inputEmailEl = document.querySelector('[type="email"]');

const inputPasswordEl = document.querySelector('[type="password"]');

const formSubmitResult = {};

function submitHandler() {
  event.preventDefault();
  if (inputEmailEl.value.trim() === '' || inputPasswordEl.value.trim() === '') {
    alert('All form fields must be filled in');
  } else {
    formSubmitResult[inputEmailEl.name] = inputEmailEl.value.trim();
    formSubmitResult[inputPasswordEl.name] = inputPasswordEl.value.trim();
    console.log(formSubmitResult);
    formEl.reset();
  }
}

formEl.addEventListener('submit', submitHandler);
