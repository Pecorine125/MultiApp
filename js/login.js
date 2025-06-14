document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim().toLowerCase();
  const senha = document.getElementById('senha').value.trim();

  const emailsValidos = ['programadorjunior25@gmail.com', 'harahelguilherme@gmail.com']; // ajuste emails
  const senhasValidas = ['@HAra25082003*', '@Aquaamrine2023*', '@AiYoshino2023*', '@Rubyhoshino2023*'];

  if (emailsValidos.includes(email) && senhasValidas.includes(senha)) {
    window.location.href = 'menu.html';
  } else {
    alert('Email ou senha incorretos.');
  }
});
