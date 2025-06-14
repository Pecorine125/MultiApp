// Lista dos vídeos - substitua pelos seus IDs do Google Drive
const videos = [
  { id: "1n8--m544dCkUg3XOkggLo_9R0BPH5ExU", title: "Vídeo 1" },
  { id: "", title: "Vídeo 2" },
  { id: "ID_DO_VIDEO_3", title: "Vídeo 3" },
  // Adicione quantos quiser
];

let currentIndex = 0;

const videoPlayer = document.getElementById("videoPlayer");
const videoTitle = document.getElementById("videoTitle");

function getVideoUrl(id) {
  return `https://drive.google.com/uc?export=download&id=${id}`;
}

function loadVideo(index) {
  if (index < 0) index = videos.length - 1;
  if (index >= videos.length) index = 0;
  currentIndex = index;
  videoPlayer.src = getVideoUrl(videos[currentIndex].id);
  videoTitle.textContent = videos[currentIndex].title;
  videoPlayer.load();
  videoPlayer.play();
}

// Botões
document.getElementById("prevBtn").onclick = () => {
  loadVideo(currentIndex - 1);
};

document.getElementById("nextBtn")?.addEventListener("click", () => {
  loadVideo(currentIndex + 1);
});

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
