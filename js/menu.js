console.log("menu.js carregado");

document.getElementById('wallpaperEspecialBtn').onclick = () => {
  window.location.href = 'wallpaper.html';
};

document.getElementById('musicPrimeBtn').onclick = () => {
  window.location.href = 'music.html';
};

document.getElementById('mangaBtn').onclick = () => {
  window.location.href = 'manga.html';
};

document.getElementById('videoPrimeBtn').onclick = () => {
  window.location.href = 'video.html';
};

document.getElementById('closeAppBtn').onclick = () => {
  alert('Fechar o aplicativo (aqui você pode implementar o fechamento real)');
};
