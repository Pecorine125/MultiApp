console.log("manga_view.js carregado");

const urlParams = new URLSearchParams(window.location.search);
const mangaName = urlParams.get('manga') || "Mangá Desconhecido";

const mangaTitle = document.getElementById('mangaTitle');
const mangaImage = document.getElementById('mangaImage');

mangaTitle.textContent = mangaName;

let currentImageNumber = 1;
let maxImages = 1;

// Atualiza a imagem exibida
function atualizarImagem() {
  mangaImage.src = `../src/Manga/${mangaName}/imagem ${currentImageNumber}.jpg`;
}

// Busca o número total de imagens do mangá no JSON
fetch('../Json/mangas.json')
  .then(response => {
    if (!response.ok) throw new Error('Erro ao carregar mangas.json');
    return response.json();
  })
  .then(data => {
    maxImages = data[mangaName] || data["Mangá Desconhecido"] || 1;
    atualizarImagem();
  })
  .catch(error => {
    console.error('Erro ao carregar JSON:', error);
    atualizarImagem(); // mostra mesmo se JSON falhar
  });

// Navegação
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

// Corrigidos os caminhos
document.getElementById('backMangaBtn').onclick = () => {
  window.location.href = 'manga_menu.html';
};

document.getElementById('backMenuBtn').onclick = () => {
  window.location.href = 'menu.html';
};

// Corrige o ID do botão de fechar
document.getElementById('closeBtn').onclick = () => {
  if (confirm("Quer fechar esta janela?")) {
    window.close();
    setTimeout(() => {
      alert("Não foi possível fechar a janela automaticamente. Feche-a manualmente.");
    }, 500);
  }
};
