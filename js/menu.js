console.log("menu.js carregado");

document.getElementById('wallpaperEspecialBtn').onclick = () => {
  window.location.href = 'wallpaper.html';
};

document.getElementById('musicPrimeBtn').onclick = () => {
  window.location.href = 'music.html';
};

document.getElementById('mangaBtn').onclick = () => {
  window.location.href = 'manga_menu.html'; // ✅ Corrigido aqui
};

document.getElementById('videoPrimeBtn').onclick = () => {
  window.location.href = 'video.html';
};

document.getElementById('closeAppBtn').onclick = () => {
  if (confirm("Quer fechar esta janela?")) {
    window.close();
    setTimeout(() => {
      alert("Não foi possível fechar a janela automaticamente. Feche-a manualmente.");
    }, 500);
  }
};
