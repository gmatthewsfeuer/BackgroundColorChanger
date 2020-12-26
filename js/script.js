window.addEventListener('load', init);

function init() {
  const btnChangeColor = document.querySelector('#btnChangeColor');
  btnChangeColor.addEventListener('click', changeBackgroundColor);

  const btnCopyColor = document.querySelector('#clipboardColor');
  btnCopyColor.addEventListener('click', copyColor);
}

function changeBackgroundColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  const body = document.querySelector('body');
  const span = document.querySelector('span');

  body.style.backgroundColor = color;
  span.textContent = color;
}

function copyColor() {
  const span = document.querySelector('span');

  let selection = window.getSelection();
  let range = document.createRange();
  range.selectNodeContents(span);
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand('copy');
  alert('The color is copied to your clipboard!');
}
