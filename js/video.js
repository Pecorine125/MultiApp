console.log("video.js carregado");

const video = document.getElementById('videoPrime');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const backMenuBtn = document.getElementById('backMenuBtn');
const closeBtn = document.getElementById('closeBtn');

playBtn.onclick = () => video.play();
pauseBtn.onclick = () => video.pause();
backMenuBtn.onclick = () => window.location.href = 'menu.html';
closeBtn.onclick = () => alert('Fechar app');
