const videos = [
  { id: "1w12kWimCe4HtN-LV2ZLDjIWJ0sE2gMPo", title: "Vídeo 1" },
  { id: "1JGx5ufrVfDYduZnQbdW5SuVw6NCsTTte", title: "Vídeo 2" },
  { id: "1tvFex7pQhB-qWxMaLcAfnBubnfjSGeXp", title: "Vídeo 3" }
];

let currentIndex = 0;

const videoPlayer = document.getElementById("videoPlayer");
const videoTitle = document.getElementById("videoTitle");

function getVideoUrl(id) {
  return `https://drive.google.com/uc?id=${id}&export=streaming`;
}

function loadVideo(index) {
  if (videos.length === 0) return;

  if (index < 0) index = videos.length - 1;
  if (index >= videos.length) index = 0;

  currentIndex = index;
  const currentVideo = videos[currentIndex];

  if (!currentVideo.id || currentVideo.id.trim() === "") {
    alert(`Vídeo "${currentVideo.title}" não possui um ID válido.`);
    return;
  }

  videoPlayer.src = getVideoUrl(currentVideo.id);
  videoTitle.textContent = currentVideo.title;

  videoPlayer.load();
  videoPlayer.play().catch((err) => {
    console.error("Erro ao reproduzir o vídeo:", err);
    alert("Erro ao tentar reproduzir o vídeo. Verifique se o vídeo está público e no formato correto (.mp4 com H.264 + AAC).");
  });
}

document.getElementById("prevBtn").onclick = () => loadVideo(currentIndex - 1);
document.getElementById("nextBtn").onclick = () => loadVideo(currentIndex + 1);
document.getElementById("playBtn").onclick = () => videoPlayer.play();
document.getElementById("pauseBtn").onclick = () => videoPlayer.pause();
document.getElementById("backMenuBtn").onclick = () => window.location.href = "menu.html";
document.getElementById("closeBtn").onclick = () => {
  if (confirm("Quer fechar esta janela?")) {
    window.close();
    setTimeout(() => {
      alert("Não foi possível fechar a janela automaticamente. Feche-a manualmente.");
    }, 500);
  }
};

loadVideo(0);
