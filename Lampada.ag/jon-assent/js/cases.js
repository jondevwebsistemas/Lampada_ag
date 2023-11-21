const container = document.querySelector('.scroll-container');
const content = document.querySelector('.content');

container.addEventListener('wheel', (e) => {
  container.scrollLeft += e.deltaY;
  e.preventDefault();
});


function abrirModal(marca, evento) {
  var modal = document.getElementById('modalEvento');
  var modalImagens = document.getElementById('galeriaDeImagens');
  var galeria = document.querySelector('.galeria');

  modalImagens.innerHTML = `
    <div class="modal-content">
      <div class="evento-titulo titulo-galeria">
          <div class="text">
              <p class="titulo-texto text-uppercase">${marca}</p>
              <p class="subtitulo-texto text-uppercase">${evento}</p>
          </div>
      </div>
      <div class="modal-galeria">
        <img src="./jon-assent/images/evento-${marca}-1.png" alt="imagem 1 evento">
        <img src="./jon-assent/images/evento-${marca}-2.png" alt="imagem 2 evento">
        <img src="./jon-assent/images/evento-${marca}-3.png" alt="imagem 3 evento">
        <img src="./jon-assent/images/evento-${marca}-4.png" alt="imagem 4 evento">
        <img src="./jon-assent/images/evento-${marca}-5.png" alt="imagem 5 evento">
        <img src="./jon-assent/images/evento-${marca}-6.png" alt="imagem 6 evento">
        <img src="./jon-assent/images/evento-${marca}-7.png" alt="imagem 7 evento">
        <img src="./jon-assent/images/evento-${marca}-8.png" alt="imagem 8 evento">
        <img src="./jon-assent/images/evento-${marca}-9.png" alt="imagem 9 evento">
        <img src="./jon-assent/images/evento-${marca}-1.png" alt="imagem 10 evento">
        <img src="./jon-assent/images/evento-${marca}-2.png" alt="imagem 11 evento">
        <img src="./jon-assent/images/evento-${marca}-2.png" alt="imagem 12 evento">
        <img src="./jon-assent/images/evento-${marca}-3.png" alt="imagem 13 evento">
        <img src="./jon-assent/images/evento-${marca}-4.png" alt="imagem 14 evento">
        <img src="./jon-assent/images/evento-${marca}-5.png" alt="imagem 15 evento">
      </div>
    </div>
    <span class="close align-center" onclick="fecharModal()">voltar</span>
      
  `;
  
  modal.style.display = 'block';
  galeria.style.overflowX = 'scroll';
}


function fecharModal() {
  var modal = document.getElementById('modalEvento');
  modal.style.display = 'none';
}


window.onclick = function(event) {
  var modal = document.getElementById('modalEastman');
  if (event.target == modal) {
      modal.style.display = 'none';
  }
}