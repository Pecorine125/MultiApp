console.log("menu.js carregado");

document.getElementById('wallpaperBtn').onclick = () => {
  window.location.href = 'wallpaper.html';
};
document.getElementById('musicBtn').onclick = () => {
  window.location.href = 'music.html';
};
document.getElementById('mangaBtn').onclick = () => {
  window.location.href = 'manga.html';
};
document.getElementById('closeBtn').onclick = () => {
  alert('Fechar app (aqui pode chamar função para fechar)');
};
