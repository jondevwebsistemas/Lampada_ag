const container = document.querySelector('.scroll-container');
const content = document.querySelector('.content');

// Adapte o evento de roda para rolar horizontalmente
container.addEventListener('wheel', (e) => {
  container.scrollLeft += e.deltaY;
  e.preventDefault();
});
