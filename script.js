// Carrossel de Imagens (Home)
let currentIndex = 0; // Índice da imagem atual no carrossel
const images = document.querySelectorAll('.carrossel img'); // Seleciona todas as imagens do carrossel
const totalImages = images.length; // Armazena o número total de imagens

// Função para mostrar a próxima imagem
function showNextImage() {
  images[currentIndex].classList.remove('active'); // Remove a classe 'active' da imagem atual
  currentIndex = (currentIndex + 1) % totalImages; // Atualiza o índice para a próxima imagem (volta ao início após a última)
  images[currentIndex].classList.add('active'); // Adiciona a classe 'active' à nova imagem
}

// Iniciar carrossel
if (images.length > 0) { // Verifica se há imagens no carrossel
  images[currentIndex].classList.add('active'); // Define a primeira imagem como ativa
  setInterval(showNextImage, 4000); // Configura um intervalo para trocar de imagem a cada 4 segundos
}

// Modo Escuro
const modoEscuroBtn = document.getElementById('modoEscuro'); // Seleciona o botão de alternar modo escuro
const body = document.body; // Seleciona o elemento body da página

// Verifica se há um tema salvo no localStorage
const savedTheme = localStorage.getItem('theme'); // Obtém o tema salvo
if (savedTheme === 'modo-escuro') { // Se o tema salvo for o modo escuro
  body.classList.add('modo-escuro'); // Adiciona a classe 'modo-escuro' ao body
  if (modoEscuroBtn) { // Verifica se o botão existe
    modoEscuroBtn.textContent = '☀️'; // Altera o ícone do botão para sol
  }
} else { // Se o tema salvo não for o modo escuro
  if (modoEscuroBtn) { // Verifica se o botão existe
    modoEscuroBtn.textContent = '🌙'; // Altera o ícone do botão para lua
  }
}

// Alterna entre temas
if (modoEscuroBtn) { // Verifica se o botão existe
  modoEscuroBtn.addEventListener('click', () => { // Adiciona um evento de clique ao botão
    body.classList.toggle('modo-escuro'); // Alterna a classe 'modo-escuro' no body
    const isDarkMode = body.classList.contains('modo-escuro'); // Verifica se o modo escuro está ativo
    modoEscuroBtn.textContent = isDarkMode ? '☀️' : '🌙'; // Altera o ícone do botão com base no modo
    localStorage.setItem('theme', isDarkMode ? 'modo-escuro' : 'light'); // Salva o tema no localStorage
  });
}

// Lightbox para o Portfólio
const lightbox = document.getElementById('lightbox'); // Seleciona o lightbox
const lightboxImg = document.getElementById('lightboxImg'); // Seleciona a imagem dentro do lightbox
const closeBtn = document.getElementById('closeBtn'); // Seleciona o botão de fechar o lightbox

// Verifica se os elementos do lightbox existem
if (lightbox && lightboxImg && closeBtn) {
  // Adiciona evento de clique às imagens do portfólio
  const imagensPortfolio = document.querySelectorAll('.galeria-portfolio img'); // Seleciona todas as imagens da galeria
  imagensPortfolio.forEach((imagem) => { // Itera sobre cada imagem
    imagem.addEventListener('click', () => { // Adiciona um evento de clique a cada imagem
      lightbox.style.display = 'flex'; // Exibe o lightbox
      lightboxImg.src = imagem.src; // Define a imagem clicada como a imagem do lightbox
    });
  });

  // Fecha o lightbox ao clicar no botão "X"
  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none'; // Oculta o lightbox
  });

  // Fecha o lightbox ao clicar fora da imagem
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) { // Verifica se o clique foi fora da imagem
      lightbox.style.display = 'none'; // Oculta o lightbox
    }
  });
}

// Filtros do Portfólio
const filtros = document.querySelectorAll('.filtros button'); // Seleciona todos os botões de filtro
const fotos = document.querySelectorAll('.galeria-portfolio figure'); // Seleciona todas as fotos da galeria
const mensagemInicial = document.querySelector('.mensagem-inicial'); // Seleciona a mensagem inicial (se existir)

if (filtros.length > 0) { // Verifica se há botões de filtro
  filtros.forEach((filtro) => { // Itera sobre cada botão de filtro
    filtro.addEventListener('click', () => { // Adiciona um evento de clique a cada botão
      const categoria = filtro.getAttribute('data-categoria'); // Obtém a categoria do filtro clicado

      // Oculta a mensagem inicial
      if (mensagemInicial) { // Verifica se a mensagem inicial existe
        mensagemInicial.style.display = 'none'; // Oculta a mensagem inicial
      }

      // Remove a classe 'active' de todos os filtros
      filtros.forEach((f) => f.classList.remove('active')); // Remove a classe 'active' de todos os botões
      // Adiciona a classe 'active' ao filtro clicado
      filtro.classList.add('active'); // Adiciona a classe 'active' ao botão clicado

      // Mostra ou oculta as fotos com base na categoria
      fotos.forEach((foto) => { // Itera sobre cada foto
        if (categoria === 'todos' || foto.getAttribute('data-categoria') === categoria) {
          foto.style.display = 'block'; // Mostra a foto se pertencer à categoria selecionada
        } else {
          foto.style.display = 'none'; // Oculta a foto se não pertencer à categoria selecionada
        }
      });
    });
  });
}