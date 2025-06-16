console.log("manga_view.js carregado");

const urlParams = new URLSearchParams(window.location.search);
const mangaName = urlParams.get('manga') || "Mangá Desconhecido";

const mangaTitle = document.getElementById('mangaTitle');
const mangaImage = document.getElementById('mangaImage');

mangaTitle.textContent = mangaName;

let currentImageNumber = 1;
const maxImages = 10; // Ajuste aqui para o máximo de imagens que seu mangá tem

function atualizarImagem() {
  mangaImage.src = `../src/Manga/${mangaName}/imagem ${currentImageNumber}.jpg`;
}

// Inicializa imagem
atualizarImagem();

// Botões de navegação
document.getElementById('backBtn').onclick = () => {
  if (currentImageNumber > 1) {
    currentImageNumber--;
    atualizarImagem();
  } else {
    alert("Esta é a primeira imagem.");
  }
};

document.getElementById('nextBtn').onclick = () => {
  if (currentImageNumber < maxImages) {
    currentImageNumber++;
    atualizarImagem();
  } else {
    alert("Esta é a última imagem.");
  }
};

document.getElementById('backMangaBtn').onclick = () => window.location.href = 'manga.html';

document.getElementById('backMenuBtn').onclick = () => window.location.href = 'menu.html';

document.getElementById('closeAppBtn').onclick = () => {
  if (confirm("Quer fechar esta janela?")) {
    window.close();
    setTimeout(() => {
      alert("Não foi possível fechar a janela automaticamente. Feche-a manualmente.");
    }, 500);
  }
};
