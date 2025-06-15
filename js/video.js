const videos = [
  {
    id: "https://gcore-vid.xvideos-cdn.com/UV1YXvP2KIbcDSE51mvJJg==,1750039757/videos/mp4/1/b/c/xvideos.com_1bc27fe28a7d5a9a23eb778c0646ab81.mp4",
    title: "Vídeo Teste"
  }
];

let currentIndex = 0;
const player = videojs('videoPlayer');

function loadVideo(index) {
  if (index < 0) index = videos.length - 1;
  if (index >= videos.length) index = 0;

  currentIndex = index;
  const currentVideo = videos[currentIndex];

  if (!currentVideo.id || currentVideo.id.trim() === "") {
    alert(`Vídeo "${currentVideo.title}" não possui um ID válido.`);
    return;
  }

  player.src({ src: currentVideo.id, type: 'video/mp4' });
  player.play().catch((err) => {
    console.error("Erro ao reproduzir o vídeo:", err);
    alert("Erro ao tentar reproduzir o vídeo.");
  });

  document.getElementById("videoTitle").textContent = currentVideo.title;
}

document.getElementById("prevBtn").onclick = () => loadVideo(currentIndex - 1);
document.getElementById("nextBtn").onclick = () => loadVideo(currentIndex + 1);
document.getElementById("playBtn").onclick = () => player.play();
document.getElementById("pauseBtn").onclick = () => player.pause();
document.getElementById("backMenuBtn").onclick = () => window.location.href = "menu.html";
document.getElementById("closeBtn").onclick = () => {
  if (confirm("Quer fechar esta janela?")) {
    window.close();
    setTimeout(() => alert("Feche manualmente."), 500);
  }
};

loadVideo(0);
