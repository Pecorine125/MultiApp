// Lista dos vídeos - substitua pelos seus IDs do Google Drive
const videos = [
  { id: "1JGx5ufrVfDYduZnQbdW5SuVw6NCsTTte", title: "Vídeo 1" },
  { id: "COLOQUE_ID_AQUI", title: "Vídeo 2" },
  { id: "COLOQUE_ID_AQUI", title: "Vídeo 3" },
  // Adicione quantos quiser
];

let currentIndex = 0;

const videoPlayer = document.getElementById("videoPlayer");
const videoTitle = document.getElementById("videoTitle");

function getVideoUrl(id) {
  return `https://drive.google.com/uc?id=${id}&export=streaming`;
}

function loadVideo(index) {
  if (videos.length === 0) return;

  // Garantir índice válido
  if (index < 0) index = videos.length - 1;
  if (index >= videos.length) index = 0;

  currentIndex = index;

  const currentVideo = videos[currentIndex];
  if (!currentVideo.id) {
    alert(`Vídeo "${currentVideo.title}" não possui um ID válido.`);
    return;
  }

  const url = getVideoUrl(currentVideo.id);
  videoPlayer.src = url;
  videoTitle.textContent = currentVideo.title;

  videoPlayer.load();
  videoPlayer.play().catch((err) => {
    console.error("Erro ao reproduzir o vídeo:", err);
    alert("Erro ao tentar reproduzir o vídeo.");
  });
}

// Botões
document.getElementById("prevBtn").onclick = () => {
  loadVideo(currentIndex - 1);
};

document.getElementById("nextBtn").onclick = () => {
  loadVideo(currentIndex + 1);
};

document.getElementById("playBtn").onclick = () => {
  videoPlayer.play();
};

document.getElementById("pauseBtn").onclick = () => {
  videoPlayer.pause();
};

document.getElementById("backMenuBtn").onclick = () => {
  window.location.href = "menu.html";
};

document.getElementById("closeBtn").onclick = () => {
  if (confirm("Quer fechar esta janela?")) {
    window.close();
    setTimeout(() => {
      alert("Não foi possível fechar a janela automaticamente. Feche-a manualmente.");
    }, 500);
  }
};

// Inicializa com o primeiro vídeo
loadVideo(0);
