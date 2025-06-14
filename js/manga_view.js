console.log("manga_view.js carregado");

const urlParams = new URLSearchParams(window.location.search);
const mangaName = urlParams.get('manga') || "Mangá Desconhecido";

const mangaTitle = document.getElementById('mangaTitle');
const mangaImage = document.getElementById('mangaImage');

mangaTitle.textContent = mangaName;

// Você pode melhorar essa lógica para mostrar imagens específicas de cada mangá
mangaImage.src = `../src/Manga/${mangaName}/capa.jpg`; // por exemplo

document.getElementById('backBtn').onclick = () => window.history.back();
document.getElementById('backMangaBtn').onclick = () => window.location.href = 'manga.html';
document.getElementById('nextBtn').onclick = () => alert('Próximo mangá não implementado');
document.getElementById('backMenuBtn').onclick = () => window.location.href = 'menu.html';
document.getElementById('closeAppBtn').onclick = () => {
  if (confirm("Quer fechar esta janela?")) {
    window.close();
    setTimeout(() => {
      alert("Não foi possível fechar a janela automaticamente. Feche-a manualmente.");
    }, 500);
  }
};

