console.log("manga.js carregado");

document.querySelectorAll('.mangaBtn').forEach(btn => {
  btn.onclick = () => {
    const mangaName = btn.getAttribute('data-manga');
    // Passa o nome via query string pra página manga_view
    window.location.href = `manga_view.html?manga=${encodeURIComponent(mangaName)}`;
  };
});
