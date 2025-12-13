import './style.css';

const usernameInput = document.getElementById('usernameInput');
const usernameForm = document.getElementById('usernameForm');
const infoDiv = document.getElementById('info');

usernameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = usernameInput.value
  .trim()
  .replaceAll('@', '')
  .replaceAll(' ', '');
  window.alert(username);
});