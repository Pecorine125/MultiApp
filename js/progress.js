console.log("progress.js carregado");

// Exemplo simples de progresso animado (só pra demo)
const progressBar = document.getElementById('progressBar');
const percent = document.getElementById('percent');

let value = 0;
const interval = setInterval(() => {
  if(value >= 100) {
    clearInterval(interval);
    return;
  }
  value++;
  progressBar.value = value;
  percent.textContent = value + '%';
}, 100);
