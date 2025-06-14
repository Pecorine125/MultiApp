console.log("login.js carregado");

const form = document.getElementById('loginForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Formulário enviado!\nE-mail: ' + form.email.value);
});
