console.log('connected');
const form = document.getElementById('link-form');
const input = document.getElementById('link-input');
const error = document.getElementById('link-error');

const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
});

form.addEventListener('submit', (e) => {
  console.log('connected to form');
  e.preventDefault();
  const inputValue = input.value;
  console.log(inputValue);
  if (!inputValue) {
    error.innerHTML = 'Enter something';
    input.classList.add('border-red');
  } else {
    error.innerHTML = '';
    input.classList.remove('border-red');
  }
});
