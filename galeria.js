document.addEventListener('DOMContentLoaded', function() {
    
    // Dados das fotos dos apartamentos - AQUI VOCÊ PODE ADICIONAR/EDITAR AS FOTOS
    const fotosApartamentos = {
        "Apartamento": {
            titulo: "Apartamento Standard",
            descricao: "Os nossos apartamentos standard oferecem todo o conforto para a sua estadia. Equipados com duas camas de solteiro ou uma cama de casal, TV de tela plana, ar-condicionado e uma varanda com vista para os jardins ou piscina.",
            capacidade: "2 adultos e 1 criança",
            tamanho: "35m²",
            camas: "1 cama de casal e 1 cama individual",
            fotos: [
                {
                    src: "img/quartos/apartamento1.png",
                    titulo: "Quarto",
                    descricao: "Quarto espaçoso com decoração moderna"
                },
                {
                    src: "img/quartos/apartamento2.png",
                    titulo: "Área de Descanso",
                    descricao: "Camas confortáveis com roupa de cama premium"
                },
                {
                    src: "img/quartos/apartamento3.png",
                    titulo: "Casa de Banho",
                    descricao: "Casa de banho moderna com duche"
                },
            ]
        },
        "Apartamento Superior": {
            titulo: "Apartamento Superior",
            descricao: "Os nossos apartamentos superiores oferecem uma experiência mais luxuosa com vista privilegiada para o mar. Maior espaço e decoração moderna para maximizar o seu conforto durante a estadia.",
            capacidade: "2 adultos e 1 criança",
            tamanho: "35m²",
            camas: "1 cama de casal e 1 individual",
            fotos: [
                {
                    src: "img/quartos/apartamentoSuperior.png",
                    titulo: "Quarto",
                    descricao: "Apartamento superior com decoração elegante"
                },
                {
                    src: "img/quartos/apartamentoSuperiorVaranda.png",
                    titulo: "Vista",
                    descricao: "Vista da varanda"
                },
                {
                    src: "img/quartos/apartamentoSuperior3.png",
                    titulo: "Casa de banho",
                    descricao: "Casa de banho elegante"
                },
            ]
        },
        "Apartamento com sofá": {
            titulo: "Apartamento com Sofá",
            descricao: "Perfeito para relaxar, este apartamento inclui uma área de estar com sofá confortável, ideal para momentos de descanso após um dia de exploração.",
            capacidade: "2 adultos e 2 crianças",
            tamanho: "35m²",
            camas: "1 cama de casal, 1 cama individual e 1 sofá-cama",
            fotos: [
                {
                    src: "img/quartos/apartamentoSofa.png",
                    titulo: "Quarto",
                    descricao: "Quarto com cama de casal e uma individual"
                },
                {
                    src: "img/quartos/apartamentoSofa2.png",
                    titulo: "Sala de Estar",
                    descricao: "Sofá confortável para relaxar"
                },
                {
                    src: "img/quartos/apartamentoSofa3.png",
                    titulo: "Casa de banho",
                    descricao: "Casa de banho elegante"
                },
            ]
        },
        "Apartamento Família": {
            titulo: "Apartamento Família",
            descricao: "Ideal para famílias, este apartamento espaçoso oferece áreas separadas para pais e crianças, garantindo conforto para toda a família durante a estadia.",
            capacidade: "2 adultos e 2 crianças",
            tamanho: "42m²",
            camas: "2 camas de casal",
            fotos: [
                {
                    src: "img/quartos/familia1.png",
                    titulo: "Apartamento Família quarto",
                    descricao: "Apartamento espaçoso ideal para famílias"
                },
                {
                    src: "img/quartos/familia2.png",
                    titulo: "Apartamento Família quarto",
                    descricao: " Quarto com 2 camas para a família"
                },
                {
                    src: "img/quartos/familia3.png",
                    titulo: "Casa de banho",
                    descricao: "Casa de banho elegante para a família"
                },
            ]
        },
        "Suite": {
            titulo: "Suite",
            descricao: "Experimente o luxo nas nossas suites com sala de estar separada. Decoração elegante, mobiliário premium e vistas deslumbrantes para uma estadia inesquecível.",
            capacidade: "2 adultos",
            tamanho: "45m²",
            camas: "1 cama de casal",
            fotos: [
                {
                    src: "img/quartos/suite1.png",
                    titulo: "Quarto",
                    descricao: "Cama de casal com lençóis de luxo"
                },
                {
                    src: "img/quartos/suite2.png",
                    titulo: "Sala de estar",
                    descricao: "Sala de estar elegante com decoração premium"
                },
                {
                    src: "img/quartos/suite3.png",
                    titulo: "Casa de banho",
                    descricao: "Casa de banho espasosa e primium"
                },
            ]
        },
        "Suite Familiar": {
            titulo: "Suite Familiar",
            descricao: "O máximo em conforto para famílias, com quarto principal, quarto para crianças e sala de estar. O espaço perfeito para férias familiares memoráveis.",
            capacidade: "2 adultos e 2 crianças",
            tamanho: "65m²",
            camas: "1 cama de casal e 2 camas individuais",
            fotos: [
                {
                    src: "img/quartos/suiteFamiliar1.png",
                    titulo: "Suite Familiar 1º quarto",
                    descricao: "A suite mais espaçosa do hotel"
                },
                {
                    src: "img/quartos/suiteFamiliar2.png",
                    titulo: "Quarto Principal 2º quarto",
                    descricao: "Quarto com cama de casal"
                },
                {
                    src: "img/quartos/suiteFamiliar3.png",
                    titulo: "Casa de banho",
                    descricao: "Casa de banho espasosa e primium"
                },
            ]
        }
    };

    // Variáveis globais
    let tipoAtual = "Apartamento";
    let fotosAtuais = [];
    let indiceAtual = 0;
    let isLoading = false;

    // Elementos DOM
    const galeriaTitulo = document.getElementById('galeriaTitulo');
    const galeriaSubtitulo = document.getElementById('galeriaSubtitulo');
    const fotosGrid = document.getElementById('fotosGrid');
    const loading = document.getElementById('loading');
    const filtrosBtns = document.querySelectorAll('.filtro-btn');
    const infoTitulo = document.getElementById('infoTitulo');
    const infoCapacidade = document.getElementById('infoCapacidade');
    const infoTamanho = document.getElementById('infoTamanho');
    const infoCamas = document.getElementById('infoCamas');
    const infoDescricao = document.getElementById('infoDescricao');
    
    // Modal elements
    const modalOverlay = document.getElementById('modalOverlay');
    const modalImage = document.getElementById('modalImage');
    const modalTitulo = document.getElementById('modalTitulo');
    const modalDescricao = document.getElementById('modalDescricao');
    const modalCounter = document.getElementById('modalCounter');
    const modalClose = document.getElementById('modalClose');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');

    // Verificar se foi passado um tipo de apartamento na URL
    const urlParams = new URLSearchParams(window.location.search);
    const tipoParam = urlParams.get('tipo');
    if (tipoParam && fotosApartamentos[tipoParam]) {
        tipoAtual = tipoParam;
        
        // Atualizar botão ativo
        filtrosBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.tipo === tipoAtual) {
                btn.classList.add('active');
            }
        });
    }

    // Inicializar galeria
    carregarFotos(tipoAtual);

    // Event listeners para filtros com debounce
    filtrosBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Prevenir cliques múltiplos durante carregamento
            if (isLoading) return;
            
            const novoTipo = this.dataset.tipo;
            
            // Se já é o tipo atual, não fazer nada
            if (novoTipo === tipoAtual) return;
            
            // Atualizar botão ativo
            filtrosBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Carregar novas fotos
            carregarFotos(novoTipo);
        });
    });

    // Função para carregar fotos - CORRIGIDA
    function carregarFotos(tipo) {
        // Prevenir carregamentos simultâneos
        if (isLoading) return;
        
        tipoAtual = tipo;
        const apartamento = fotosApartamentos[tipo];
        
        if (!apartamento) {
            console.error('Tipo de apartamento não encontrado:', tipo);
            return;
        }

        isLoading = true;

        // Atualizar informações do apartamento IMEDIATAMENTE (sem esperar)
        atualizarInfoApartamento(apartamento);

        // Mostrar loading apenas se necessário
        if (fotosGrid.children.length > 0) {
            // Se já há fotos, fazer transição suave
            fotosGrid.style.opacity = '0.5';
        } else {
            // Se é a primeira vez, mostrar loading
            loading.style.display = 'block';
            fotosGrid.style.display = 'none';
        }

        // Renderizar fotos imediatamente (sem timeout artificial)
        renderizarFotos(apartamento.fotos);
        
        // Finalizar loading
        setTimeout(() => {
            loading.style.display = 'none';
            fotosGrid.style.display = 'grid';
            fotosGrid.style.opacity = '1';
            isLoading = false;
        }, 100); // Apenas um pequeno delay para suavizar a transição
    }

    // Nova função para atualizar informações do apartamento
    function atualizarInfoApartamento(apartamento) {
        galeriaTitulo.textContent = 'Galeria de Fotos';
        galeriaSubtitulo.textContent = apartamento.titulo;
        infoTitulo.textContent = apartamento.titulo;
        infoCapacidade.textContent = `Capacidade: ${apartamento.capacidade}`;
        infoTamanho.textContent = `Tamanho: ${apartamento.tamanho}`;
        infoCamas.textContent = `Camas: ${apartamento.camas}`;
        infoDescricao.textContent = apartamento.descricao;
    }

    // Função para renderizar as fotos - OTIMIZADA
    function renderizarFotos(fotos) {
        fotosAtuais = fotos;
        
        // Usar DocumentFragment para melhor performance
        const fragment = document.createDocumentFragment();

        fotos.forEach((foto, index) => {
            const fotoElement = document.createElement('div');
            fotoElement.className = 'foto-item';
            
            // Criar img element separadamente para melhor controle
            const img = document.createElement('img');
            img.src = foto.src;
            img.alt = foto.titulo;
            img.loading = 'lazy';
            
            // Criar overlay
            const overlay = document.createElement('div');
            overlay.className = 'foto-overlay';
            overlay.innerHTML = `
                <h4>${foto.titulo}</h4>
                <p>${foto.descricao}</p>
            `;
            
            fotoElement.appendChild(img);
            fotoElement.appendChild(overlay);

            // Event listener para abrir modal
            fotoElement.addEventListener('click', () => {
                abrirModal(index);
            });

            fragment.appendChild(fotoElement);
        });

        // Limpar grid e adicionar novos elementos de uma vez
        fotosGrid.innerHTML = '';
        fotosGrid.appendChild(fragment);
    }

    // Função para abrir modal - MELHORADA
    function abrirModal(index) {
        indiceAtual = index;
        const foto = fotosAtuais[index];
        
        // Preload da imagem para evitar flickering
        const img = new Image();
        img.onload = function() {
            modalImage.src = foto.src;
            modalImage.alt = foto.titulo;
            modalTitulo.textContent = foto.titulo;
            modalDescricao.textContent = foto.descricao;
            modalCounter.textContent = `${index + 1} / ${fotosAtuais.length}`;
            
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        };
        img.src = foto.src;
    }

    // Função para fechar modal
    function fecharModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Função para navegar no modal - OTIMIZADA
    function navegarModal(direcao) {
        if (direcao === 'next') {
            indiceAtual = (indiceAtual + 1) % fotosAtuais.length;
        } else {
            indiceAtual = (indiceAtual - 1 + fotosAtuais.length) % fotosAtuais.length;
        }
        
        const foto = fotosAtuais[indiceAtual];
        
        // Preload da nova imagem
        const img = new Image();
        img.onload = function() {
            modalImage.src = foto.src;
            modalImage.alt = foto.titulo;
            modalTitulo.textContent = foto.titulo;
            modalDescricao.textContent = foto.descricao;
            modalCounter.textContent = `${indiceAtual + 1} / ${fotosAtuais.length}`;
        };
        img.src = foto.src;
    }

    // Event listeners do modal
    modalClose.addEventListener('click', fecharModal);
    modalPrev.addEventListener('click', () => navegarModal('prev'));
    modalNext.addEventListener('click', () => navegarModal('next'));

    // Fechar modal clicando fora
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            fecharModal();
        }
    });

    // Navegação por teclado
    document.addEventListener('keydown', function(e) {
        if (!modalOverlay.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                fecharModal();
                break;
            case 'ArrowLeft':
                navegarModal('prev');
                break;
            case 'ArrowRight':
                navegarModal('next');
                break;
        }
    });

    // Prevenir scroll do body quando modal está aberto
    modalOverlay.addEventListener('wheel', function(e) {
        e.preventDefault();
    });

    // Touch/swipe support para mobile - OTIMIZADO
    let startX = 0;
    let startY = 0;
    let isSwipe = false;

    modalOverlay.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isSwipe = false;
    }, { passive: true });

    modalOverlay.addEventListener('touchmove', function(e) {
        if (!startX || !startY) return;
        
        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        
        const diffX = Math.abs(startX - currentX);
        const diffY = Math.abs(startY - currentY);
        
        // Se movimento horizontal é maior que vertical, é um swipe
        if (diffX > diffY && diffX > 30) {
            isSwipe = true;
        }
    }, { passive: true });

    modalOverlay.addEventListener('touchend', function(e) {
        if (!startX || !startY || !isSwipe) {
            startX = 0;
            startY = 0;
            isSwipe = false;
            return;
        }
        
        const endX = e.changedTouches[0].clientX;
        const diffX = startX - endX;
        
        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                navegarModal('next');
            } else {
                navegarModal('prev');
            }
        }
        
        startX = 0;
        startY = 0;
        isSwipe = false;
    }, { passive: true });

    // Error handling para imagens que não carregam - MELHORADO
    document.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG') {
            // Usar placeholder apenas se a imagem original falhar
            if (!e.target.dataset.errorHandled) {
                e.target.dataset.errorHandled = 'true';
                e.target.src = '/api/placeholder/400/300';
                e.target.alt = 'Imagem não disponível';
            }
        }
    }, true);

    // Menu-toggle functionality
    function initializeMenuToggle() {
        const menuToggle = document.querySelector('.menu-toggle');
        const navbar = document.querySelector('.navbar');

        if (!menuToggle || !navbar) {
            console.error('Error: Menu-toggle or navbar not found in DOM. Check HTML structure.');
            return;
        }

        console.log('Menu-toggle and navbar found in DOM');

        // Toggle menu on button click
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const isOpen = !navbar.classList.contains('open');
            navbar.classList.toggle('open');
            menuToggle.classList.toggle('open', isOpen);
            console.log('Toggle clicked, isOpen:', isOpen, 'navbar classList:', navbar.classList);
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (navbar.classList.contains('open')) {
                const isClickInsideNavbar = navbar.contains(e.target);
                const isClickOnToggle = menuToggle.contains(e.target);
                if (!isClickInsideNavbar && !isClickOnToggle) {
                    navbar.classList.remove('open');
                    menuToggle.classList.remove('open');
                    console.log('Menu closed by clicking outside');
                }
            }
        });

        // Close menu when clicking a menu link
        navbar.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function(e) {
                navbar.classList.remove('open');
                menuToggle.classList.remove('open');
                console.log('Menu closed by clicking a link');
            });
        });
    }

    // Chama a função após o DOM estar carregado
    initializeMenuToggle();

    console.log('Galeria de fotos inicializada com sucesso');
});