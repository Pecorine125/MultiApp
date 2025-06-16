console.log("menu.js carregado");

document.getElementById('wallpaperEspecialBtn').onclick = () => {
  window.location.href = 'html/wallpaper.html';
};

document.getElementById('musicPrimeBtn').onclick = () => {
  window.location.href = 'html/music.html';
};

document.getElementById('mangaBtn').onclick = () => {
  window.location.href = 'html/manga_menu.html';
};

document.getElementById('videoPrimeBtn').onclick = () => {
  window.location.href = 'html/video.html';
};

document.getElementById('closeAppBtn').onclick = () => {
  if (confirm("Quer fechar esta janela?")) {
    window.close();
    setTimeout(() => {
      alert("Não foi possível fechar a janela automaticamente. Feche-a manualmente.");
    }, 500);
  }
};
