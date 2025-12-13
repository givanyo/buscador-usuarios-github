import './style.css';

const usernameInput = document.getElementById('usernameInput');
const usernameForm = document.getElementById('usernameForm');
const usernameElement = document.getElementById('username');
const infoDiv = document.getElementById('infoDiv');
const profilePicture = document.getElementById('profilePicture');

usernameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = usernameInput.value
  .trim()
  .replaceAll('@', '')
  .replaceAll(' ', '')
  .toLowerCase();
  getInfo(username);
});

function updateUser(response) {
  console.log(response['login']);
  usernameElement.textContent = `@${response['login']}`;
  profilePicture.src = `${response['avatar_url']}`;
  infoDiv.innerHTML = `
  <p>Nome: ${response['name'] ?? response['login']} </p>
  <p>Localização: ${response['location'] ?? 'Não informado'}</p>
  <p>Instituição: ${response['company'] ?? 'Não informado'}</p>
  <p>Repositórios públicos: ${response['public_repos'] ?? 0} </p>
  <p>Seguidores: ${response['followers'] ?? 0} </p>
  <a href="${response['html_url']}">Ir para a conta</a>
  `
}
const getInfoFail = () => {
  usernameElement.textContent = `Perfil não encontrado`;
  profilePicture.src = `${'https://github.com/github.png'}`;
  infoDiv.innerHTML = `
  <p>Nome: N/A </p>
  <p>Localização: N/A </p>
  <p>Instituição: N/A </p>
  <p>Seguidores: N/A </p>
  `
}
const getInfo = async(username) => {
  try {
    const info = await fetch(`https://api.github.com/users/${username}`)
    .then(response => {
      if(!response.ok) {
        getInfoFail();
        throw new Error ('A chamada falhou: Erro ' + response.status)
      }
      return response.json()
    })
    .then(info => {
      console.log(JSON.stringify(info));
      updateUser(info);
    })
  } catch (err) {
    console.log(err)
  }
};

getInfo('github');

