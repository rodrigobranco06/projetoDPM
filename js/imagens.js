document.addEventListener('DOMContentLoaded', function() {
            // Elementos da galeria
            const filtrosBotoes = document.querySelectorAll('.filtro-btn');
            const fotosItens = document.querySelectorAll('.foto-item');
            const modal = document.getElementById('modal');
            const modalImg = document.getElementById('modal-img');
            const modalTitulo = document.getElementById('modal-titulo');
            const modalDescricao = document.getElementById('modal-descricao');
            const fecharModal = document.querySelector('.fechar');
            const prevBtn = document.querySelector('.modal-prev');
            const nextBtn = document.querySelector('.modal-next');
            
            let fotosVisiveis = [];
            let fotoAtualIndex = 0;
            
            // Sistema de filtros
            filtrosBotoes.forEach(botao => {
                botao.addEventListener('click', function() {
                    const categoria = this.getAttribute('data-categoria');
                    
                    // Atualizar botão ativo
                    filtrosBotoes.forEach(btn => btn.classList.remove('ativo'));
                    this.classList.add('ativo');
                    
                    // Filtrar fotos
                    fotosItens.forEach(foto => {
                        if (categoria === 'todos' || foto.getAttribute('data-categoria') === categoria) {
                            foto.style.display = 'block';
                            foto.classList.remove('hidden');
                        } else {
                            foto.style.display = 'none';
                            foto.classList.add('hidden');
                        }
                    });
                    
                    // Atualizar lista de fotos visíveis
                    atualizarFotosVisiveis();
                });
            });
            
            // Função para atualizar array de fotos visíveis
            function atualizarFotosVisiveis() {
                fotosVisiveis = Array.from(fotosItens).filter(foto => !foto.classList.contains('hidden'));
            }
            
            // Inicializar fotos visíveis
            atualizarFotosVisiveis();
            
            // Abrir modal ao clicar em uma foto
            fotosItens.forEach((foto, index) => {
                foto.addEventListener('click', function() {
                    const img = this.querySelector('img');
                    const titulo = this.querySelector('h3').textContent;
                    const descricao = this.querySelector('p').textContent;
                    
                    // Encontrar índice na lista de fotos visíveis
                    fotoAtualIndex = fotosVisiveis.indexOf(this);
                    
                    modalImg.src = img.src;
                    modalImg.alt = img.alt;
                    modalTitulo.textContent = titulo;
                    modalDescricao.textContent = descricao;
                    
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                });
            });
            
            // Fechar modal
            fecharModal.addEventListener('click', fecharModalFunc);
            
            function fecharModalFunc() {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
            
            // Fechar modal clicando fora da imagem
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    fecharModalFunc();
                }
            });
            
            // Navegação no modal
            prevBtn.addEventListener('click', function() {
                fotoAtualIndex = (fotoAtualIndex - 1 + fotosVisiveis.length) % fotosVisiveis.length;
                atualizarModal();
            });
            
            nextBtn.addEventListener('click', function() {
                fotoAtualIndex = (fotoAtualIndex + 1) % fotosVisiveis.length;
                atualizarModal();
            });
            
            function atualizarModal() {
                const fotoAtual = fotosVisiveis[fotoAtualIndex];
                const img = fotoAtual.querySelector('img');
                const titulo = fotoAtual.querySelector('h3').textContent;
                const descricao = fotoAtual.querySelector('p').textContent;
                
                modalImg.src = img.src;
                modalImg.alt = img.alt;
                modalTitulo.textContent = titulo;
                modalDescricao.textContent = descricao;
            }
            
            // Navegação por teclado
            document.addEventListener('keydown', function(e) {
                if (modal.style.display === 'block') {
                    if (e.key === 'ArrowLeft') {
                        prevBtn.click();
                    } else if (e.key === 'ArrowRight') {
                        nextBtn.click();
                    } else if (e.key === 'Escape') {
                        // fecharModalFunc();
                    }
                }
            });
            
            // Efeito de scroll no header
            window.addEventListener('scroll', function() {
                const header = document.querySelector('header');
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
            
            // Animação de entrada das fotos
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '0';
                        entry.target.style.transform = 'translateY(20px)';
                        entry.target.style.transition = 'all 0.6s ease';
                        
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, 100);
                        
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            fotosItens.forEach(foto => {
                observer.observe(foto);
            });

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
        });