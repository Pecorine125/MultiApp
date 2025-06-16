console.log("manga_view.js carregado");

const urlParams = new URLSearchParams(window.location.search);
const mangaName = urlParams.get('manga') || "Mangá Desconhecido";

const mangaTitle = document.getElementById('mangaTitle');
const mangaImage = document.getElementById('mangaImage');

mangaTitle.textContent = mangaName;

let currentImageNumber = 1;
let maxImages = 1;  // padrão, caso JSON não carregue

// Função para atualizar a imagem exibida
function atualizarImagem() {
  mangaImage.src = `../src/Manga/${mangaName}/imagem ${currentImageNumber}.jpg`;
}

// Carrega o JSON com dados dos mangás e imagens
fetch('../mangas.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Falha ao carregar mangas.json');
    }
    return response.json();
  })
  .then(data => {
    if (data[mangaName]) {
      maxImages = data[mangaName];
    } else {
      maxImages = data["Mangá Desconhecido"] || 1;
    }
    atualizarImagem();
  })
  .catch(error => {
    console.error('Erro ao carregar JSON:', error);
    atualizarImagem(); // mesmo assim tenta mostrar a imagem 1
  });

// Navegação dos botões
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
