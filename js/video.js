const videos = [
  {
    id: "https://gcore-vid.xvideos-cdn.com/UV1YXvP2KIbcDSE51mvJJg==,1750039757/videos/mp4/1/b/c/xvideos.com_1bc27fe28a7d5a9a23eb778c0646ab81.mp4",
    title: "Vídeo 1"
  },
  {
    id: "https://cdn77-vid-mp4.xvideos-cdn.com/-WYmCd6KP1sAJ7SYZaMKqA==,1750039789/videos/mp4/7/f/c/xvideos.com_7fca3aa840723f4a3685879b40750552.mp4?ui=MTkxLjIyMS4yMDcuOTItLS92aWRlby51ZGthbWhrODJjMS9yYXB1bnplbA==",
    title: "Vídeo 2"
  },
  {
    id: "https://example.com/path/to/video3.mp4", // Substitua com uma URL válida
    title: "Vídeo 3"
  }
];

let currentIndex = 0;

// Inicializa player Video.js
const player = videojs('videoPlayer');

function loadVideo(index) {
  if (videos.length === 0) return;

  if (index < 0) index = videos.length - 1;
  if (index >= videos.length) index = 0;

  currentIndex = index;
  const currentVideo = videos[currentIndex];

  if (!currentVideo.id || currentVideo.id.trim() === "") {
    alert(`Vídeo "${currentVideo.title}" não possui uma URL válida.`);
    return;
  }

  player.src({ src: currentVideo.id, type: 'video/mp4' });
  player.play().catch((err) => {
    console.error("Erro ao reproduzir o vídeo:", err);
    alert("Erro ao tentar reproduzir o vídeo. Verifique se a URL está acessível e no formato correto (.mp4 com H.264 + AAC).");
  });

  document.getElementById("videoTitle").textContent = currentVideo.title;
}

// Controles
document.getElementById("prevBtn").onclick = () => loadVideo(currentIndex - 1);
document.getElementById("nextBtn").onclick = () => loadVideo(currentIndex + 1);
document.getElementById("playBtn").onclick = () => player.play();
document.getElementById("pauseBtn").onclick = () => player.pause();
document.getElementById("backMenuBtn").onclick = () => window.location.href = "menu.html";
document.getElementById("closeBtn").onclick = () => {
  if (confirm("Quer fechar esta janela?")) {
    window.close();
    setTimeout(() => {
      alert("Não foi possível fechar a janela automaticamente. Feche-a manualmente.");
    }, 500);
  }
};

// Carrega o primeiro vídeo ao iniciar
loadVideo(0);
