const progressBar = document.getElementById('progressBar');
const percent = document.getElementById('percent');

let value = 0;
const interval = setInterval(() => {
  if (value >= 100) {
    clearInterval(interval);
    window.location.href = 'login.html'; // redireciona para login após 100%
    return;
  }
  value++;
  progressBar.value = value;
  percent.textContent = value + '%';
}, 1);
