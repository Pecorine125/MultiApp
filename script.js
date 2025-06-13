let progress = 0;
const progressBar = document.getElementById('progressBar');
const progressValue = document.getElementById('progressValue');
const wallpaperImgs = [];
let wallpaperIndex = 0;
let musicPausedTime = 0;
let currentManga = [];
let mangaIndex = 0;

window.onload = () => {
  carregarWallpapers();
  carregarMangas();
  const interval = setInterval(() => {
    progress++;
    progressBar.value = progress;
    progressValue.textContent = `${progress}%`;
    if (progress >= 100) {
      clearInterval(interval);
      mostrarTela('loginScreen');
    }
  }, 50);
};

function mostrarTela(id) {
  document.querySelectorAll('body > div').forEach(div => div.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function validarLogin() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  if (email === 'admin@email.com' && senha === '1234') {
    mostrarTela('menuScreen');
  } else {
    alert('Email ou senha incorretos');
  }
}

function abrir(tela) {
  if (tela === 'wallpaper') {
    mostrarTela('wallpaperScreen');
    mostrarWallpaper();
  } else if (tela === 'music') {
    const video = document.getElementById('musicVideo');
    video.src = 'src/Music/musica1.mp4';
    document.getElementById('musicTitle').innerText = 'musica1.mp4';
    mostrarTela('musicScreen');
  } else if (tela === 'mangaMenu') {
    mostrarTela('mangaMenuScreen');
  }
}

function voltarMenu() {
  mostrarTela('menuScreen');
}

function fecharApp() {
  window.close();
}

function carregarWallpapers() {
  for (let i = 1; i <= 5; i++) {
    wallpaperImgs.push(`src/Wallpaper/Wallpaper Especial ${i}.jpg`);
  }
}

function mostrarWallpaper() {
  const img = document.getElementById('wallpaperImg');
  img.src = wallpaperImgs[wallpaperIndex];
}

function mudarWallpaper(delta) {
  wallpaperIndex = (wallpaperIndex + delta + wallpaperImgs.length) % wallpaperImgs.length;
  mostrarWallpaper();
}

function baixarWallpaper() {
  const link = document.createElement('a');
  link.href = wallpaperImgs[wallpaperIndex];
  link.download = wallpaperImgs[wallpaperIndex].split('/').pop();
  link.click();
}

function playMusic() {
  const video = document.getElementById('musicVideo');
  video.currentTime = musicPausedTime;
  video.play();
}

function pauseMusic() {
  const video = document.getElementById('musicVideo');
  musicPausedTime = video.currentTime;
  video.pause();
}

function carregarMangas() {
  const pastas = [
    'Dragon Ball',
    'Pokémon 1',
    'Pokémon 2',
    'Pokémon 3',
    'A Amiga da Minha Mãe',
    'A Rainha Demônio Intrusa',
    'Passando dos Limites',
    'Essas Duas Gostosas Peitudas São Ingênuas',
    'Meu Oyakodon',
    'Combinação Feita No Paraíso: O Companheiro de Foda Perfeito',
    'Combinação Feita No Paraíso: O Companheiro de Foda Perfeito 2'
  ];
  const select = document.getElementById('mangaSelect');
  pastas.forEach(pasta => {
    const opt = document.createElement('option');
    opt.value = pasta;
    opt.textContent = pasta;
    select.appendChild(opt);
  });
}

function abrirManga() {
  const pasta = document.getElementById('mangaSelect').value;
  currentManga = [];
  for (let i = 1; i <= 5; i++) {
    currentManga.push(`src/Manga/${pasta}/pagina${i}.jpg`);
  }
  mangaIndex = 0;
  mostrarManga();
  mostrarTela('mangaScreen');
}

function mostrarManga() {
  document.getElementById('mangaImg').src = currentManga[mangaIndex];
}

function mudarMangaImg(delta) {
  mangaIndex = (mangaIndex + delta + currentManga.length) % currentManga.length;
  mostrarManga();
}

function voltarMangaMenu() {
  mostrarTela('mangaMenuScreen');
}
