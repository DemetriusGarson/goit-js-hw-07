function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

/*
<div class="widget">
  <p>
    Background color: <span class="color">-</span>
  </p>
  <button type="button" class="change-color">
    Change color
  </button>
</div>;
*/

//* Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.

const bodyEl = document.querySelector('body');
const changeColorButton = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

function changeColorHandler() {
  let randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  spanEl.textContent = randomColor;
}

changeColorButton.addEventListener('click', changeColorHandler);
