document.addEventListener('DOMContentLoaded', function() {
    // Menu Toggle para dispositivos móveis
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('open');
            menuToggle.textContent = navbar.classList.contains('open') ? '✕' : '☰';
        });

        // Fechar o menu ao clicar fora
        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target) && e.target !== menuToggle) {
                navbar.classList.remove('open');
                menuToggle.textContent = '☰';
            }
        });

        // Fechar o menu ao clicar em um link
        const navLinks = document.querySelectorAll('.navbar a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('open');
                menuToggle.textContent = '☰';
            });
        });
    }

    // Carrossel Hero
    const heroSlides = document.querySelectorAll('.carousel-slide');
    const heroPrev = document.querySelector('.carousel-prev');
    const heroNext = document.querySelector('.carousel-next');
    let currentHeroSlide = 0;

    function showHeroSlide(index) {
        heroSlides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    if (heroPrev && heroNext) {
        heroPrev.addEventListener('click', () => {
            currentHeroSlide = (currentHeroSlide - 1 + heroSlides.length) % heroSlides.length;
            showHeroSlide(currentHeroSlide);
        });

        heroNext.addEventListener('click', () => {
            currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
            showHeroSlide(currentHeroSlide);
        });
    }

    // Carrossel de Quartos
    const quartoCards = document.querySelectorAll('.quarto-card');
    const quartoWrapper = document.querySelector('.quartos-wrapper');
    const quartoPrev = document.querySelector('.quarto-prev');
    const quartoNext = document.querySelector('.quarto-next');
    let currentQuartoSlide = 0;

    function getSlidesToShow() {
        const width = window.innerWidth;
        if (width <= 768) return 1; // Mobile: 1 card por slide
        if (width <= 1024) return 2; // Tablets: 2 cards por slide
        return 3; // Desktop: 3 cards por slide
    }

    function updateQuartoSlidePosition() {
        if (quartoWrapper) {
            const slidesToShow = getSlidesToShow();
            const totalSlides = Math.ceil(quartoCards.length / slidesToShow);
            const slideWidth = 100 / totalSlides;
            const translateX = -(currentQuartoSlide * slideWidth);
            quartoWrapper.style.transform = `translateX(${translateX}%)`;
        }
    }

    if (quartoPrev && quartoNext) {
        quartoPrev.addEventListener('click', () => {
            const slidesToShow = getSlidesToShow();
            const totalSlides = Math.ceil(quartoCards.length / slidesToShow);
            currentQuartoSlide = (currentQuartoSlide - 1 + totalSlides) % totalSlides;
            updateQuartoSlidePosition();
        });

        quartoNext.addEventListener('click', () => {
            const slidesToShow = getSlidesToShow();
            const totalSlides = Math.ceil(quartoCards.length / slidesToShow);
            currentQuartoSlide = (currentQuartoSlide + 1) % totalSlides;
            updateQuartoSlidePosition();
        });
    }

    // Ajustar o carrossel de quartos ao redimensionar a janela
    window.addEventListener('resize', () => {
        currentQuartoSlide = 0; // Resetar para o primeiro slide ao redimensionar
        updateQuartoSlidePosition();
    });

    // Inicializar a posição do carrossel
    updateQuartoSlidePosition();

    // Carrossel de Testemunhos
    const testemunhoSlides = document.querySelectorAll('.testemunho-slide');
    const testemunhoWrapper = document.querySelector('.testemunhos-wrapper');
    const testemunhoPrev = document.querySelector('.testemunho-prev');
    const testemunhoNext = document.querySelector('.testemunho-next');
    let currentTestemunhoSlide = 0;

    function updateTestemunhoSlidePosition() {
        if (testemunhoWrapper) {
            const slideWidth = 33.33; // Porcentagem de cada slide (100% / 3 slides)
            const translateX = -(currentTestemunhoSlide * slideWidth);
            testemunhoWrapper.style.transform = `translateX(${translateX}%)`;
        }
    }

    if (testemunhoPrev && testemunhoNext) {
        testemunhoPrev.addEventListener('click', () => {
            currentTestemunhoSlide = (currentTestemunhoSlide - 1 + testemunhoSlides.length) % testemunhoSlides.length;
            updateTestemunhoSlidePosition();
        });

        testemunhoNext.addEventListener('click', () => {
            currentTestemunhoSlide = (currentTestemunhoSlide + 1) % testemunhoSlides.length;
            updateTestemunhoSlidePosition();
        });
    }

    // Efeito de rolagem no header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (header) header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Formulário de Testemunho
    const testemunhoForm = document.querySelector('.testemunho-form form');
    if (testemunhoForm) {
        testemunhoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const avaliacao = document.querySelector('input[name="avaliacao"]:checked')?.value;
            const mensagem = document.getElementById('mensagem').value;

            if (nome && email && avaliacao && mensagem) {
                alert(`Obrigado, ${nome}! Seu testemunho foi enviado com sucesso. Avaliação: ${avaliacao} estrelas.`);
                testemunhoForm.reset();
            } else {
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        });
    }
});