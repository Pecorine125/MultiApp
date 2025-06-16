console.log("menu.js carregado");

// Função para adicionar evento com verificação
function addClickListener(id, callback) {
  const btn = document.getElementById(id);
  if (btn) {
    btn.addEventListener("click", callback);
  } else {
    console.warn(`Botão com ID "${id}" não encontrado.`);
  }
}

// Redirecionamentos
addClickListener('wallpaperEspecialBtn', () => {
  window.location.href = 'wallpaper.html';
});

addClickListener('musicPrimeBtn', () => {
  window.location.href = 'music.html';
});

addClickListener('mangaBtn', () => {
  window.location.href = 'manga/manga_menu.html'; // ajuste o caminho se estiver em outra pasta
});

addClickListener('videoPrimeBtn', () => {
  window.location.href = 'video.html';
});

addClickListener('closeAppBtn', () => {
  if (confirm("Quer fechar esta janela?")) {
    window.close();
    setTimeout(() => {
      alert("Não foi possível fechar a janela automaticamente. Feche-a manualmente.");
    }, 500);
  }
});
