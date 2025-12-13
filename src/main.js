import './style.css';

const usernameInput = document.getElementById('usernameInput');
const usernameForm = document.getElementById('usernameForm');
const infoDiv = document.getElementById('infoDiv');

usernameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = usernameInput.value
  .trim()
  .replaceAll('@', '')
  .replaceAll(' ', '');
  window.alert(username);
  getInfo(username);
});

const getInfo = async(username) => {
  try {
    const info = await fetch(`https://api.github.com/users/${username}`)
    .then(response => {
      if(!response.ok) {
        throw new Error ('A chamada falhou: Erro ' + response.status)
      }
      return response.json()
    })
    .then(info => {
      console.log(JSON.stringify(info));
    })
  } catch (err) {
    console.log(err)
  }
}


