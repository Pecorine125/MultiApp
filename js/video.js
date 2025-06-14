console.log("video.js carregado");

const video = document.getElementById('videoPrime');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const backMenuBtn = document.getElementById('backMenuBtn');
const closeBtn = document.getElementById('closeBtn');

playBtn.onclick = () => video.play();
pauseBtn.onclick = () => video.pause();
backMenuBtn.onclick = () => window.location.href = 'menu.html';
document.getElementById('closeBtn').onclick = () => {
  if (confirm("Quer fechar esta janela?")) {
    window.close();
    setTimeout(() => {
      alert("Não foi possível fechar a janela automaticamente. Feche-a manualmente.");
    }, 500);
  }
};

