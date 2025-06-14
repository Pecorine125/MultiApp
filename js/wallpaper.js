console.log("wallpaper.js carregado");

const wallpapers = [
  "Wallpaper Especial 1.jpg",
  "Wallpaper Especial 2.jpg",
  // adicione mais nomes aqui
];

let index = 0;
const img = document.getElementById('wallpaperImg');

function updateImage() {
  img.src = "../src/Wallpaper/" + wallpapers[index];
}

document.getElementById('nextBtn').onclick = () => {
  index = (index + 1) % wallpapers.length;
  updateImage();
};
document.getElementById('backBtn').onclick = () => {
  index = (index - 1 + wallpapers.length) % wallpapers.length;
  updateImage();
};
document.getElementById('backMenuBtn').onclick = () => {
  window.location.href = 'menu.html';
};
document.getElementById('closeBtn').onclick = () => {
  alert('Fechar app');
};
document.getElementById('downloadBtn').onclick = () => {
  alert('Download não implementado ainda.');
};

updateImage();
