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
  setInterval(showNextImage, 4000); // Troca de imagem a cada 4 segundos
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

// Lightbox para o Portfólio
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('closeBtn');

// Verifica se os elementos do lightbox existem
if (lightbox && lightboxImg && closeBtn) {
  // Adiciona evento de clique às imagens do portfólio
  const imagensPortfolio = document.querySelectorAll('.galeria-portfolio img');
  imagensPortfolio.forEach((imagem) => {
    imagem.addEventListener('click', () => {
      lightbox.style.display = 'flex'; // Exibe o lightbox
      lightboxImg.src = imagem.src; // Define a imagem clicada no lightbox
    });
  });

  // Fecha o lightbox ao clicar no botão "X"
  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  // Fecha o lightbox ao clicar fora da imagem
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
}

// Filtros do Portfólio
const filtros = document.querySelectorAll('.filtros button');
const fotos = document.querySelectorAll('.galeria-portfolio figure');
const mensagemInicial = document.querySelector('.mensagem-inicial');

if (filtros.length > 0) {
  filtros.forEach((filtro) => {
    filtro.addEventListener('click', () => {
      const categoria = filtro.getAttribute('data-categoria');

      // Oculta a mensagem inicial
      if (mensagemInicial) {
        mensagemInicial.style.display = 'none';
      }

      // Remove a classe 'active' de todos os filtros
      filtros.forEach((f) => f.classList.remove('active'));
      // Adiciona a classe 'active' ao filtro clicado
      filtro.classList.add('active');

      // Mostra ou oculta as fotos com base na categoria
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