// Carrossel de Imagens (Home)
let currentIndex = 0;
const images = document.querySelectorAll('.carrossel img');
const totalImages = images.length;

// Função para mostrar a próxima imagem
function showNextImage() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % totalImages;
  images[currentIndex].classList.add('active');
}

// Iniciar carrossel
if (images.length > 0) {
  images[currentIndex].classList.add('active');
  setInterval(showNextImage, 4000); // Troca de imagem a cada 5 segundos
}

// Modo Escuro
const modoEscuroBtn = document.getElementById('modoEscuro');
const body = document.body;

// Verifica se há um tema salvo no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'modo-escuro') {
  body.classList.add('modo-escuro');
  if (modoEscuroBtn) {
    modoEscuroBtn.textContent = '☀️';
  }
} else {
  if (modoEscuroBtn) {
    modoEscuroBtn.textContent = '🌙';
  }
}

// Alterna entre temas
if (modoEscuroBtn) {
  modoEscuroBtn.addEventListener('click', () => {
    body.classList.toggle('modo-escuro');
    const isDarkMode = body.classList.contains('modo-escuro');
    modoEscuroBtn.textContent = isDarkMode ? '☀️' : '🌙';
    localStorage.setItem('theme', isDarkMode ? 'modo-escuro' : 'light');
  });
}

// Filtros do Portfólio
const filtros = document.querySelectorAll('.filtros button');
const fotos = document.querySelectorAll('.galeria-portfolio .foto');

if (filtros.length > 0) {
  filtros.forEach((filtro) => {
    filtro.addEventListener('click', () => {
      const categoria = filtro.getAttribute('data-categoria');

      // Remover a classe 'active' de todos os filtros
      filtros.forEach((f) => f.classList.remove('active'));
      // Adicionar a classe 'active' ao filtro clicado
      filtro.classList.add('active');

      // Mostrar ou ocultar fotos com base na categoria
      fotos.forEach((foto) => {
        if (categoria === 'todos' || foto.getAttribute('data-categoria') === categoria) {
          foto.style.display = 'block';
        } else {
          foto.style.display = 'none';
        }
      });
    });
  });
}