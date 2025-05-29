document.addEventListener('DOMContentLoaded', function() {

    // Dados dos apartamentos
    const apartamentosData = {
        "Apartamento": {
            titulo: "Apartamento Standard",
            descricao: "Os nossos apartamentos standard oferecem todo o conforto para a sua estadia. Equipados com 1 cama de solteiro e 1 cama de casal, TV de tela plana, ar-condicionado e uma varanda com vista para os jardins ou piscina.",
            capacidade: "2 adultos e 1 criança",
            tamanho: "35m²",
            camas: "1 cama de casal e 1 cama individual",
            imagem: "img/quartos/apartamento1.png",
            amenidades: [
                "Ar-condicionado",
                "TV por cabo",
                "Wi-Fi gratuito",
                "Frigorifico",
                "Varanda privada",
                "Casa de banho privada com duche"
            ]
        },
        "Apartamento Superior": {
            titulo: "Apartamento Superior",
            descricao: "Os nossos apartamentos superiores oferecem uma experiência mais luxuosa com vista privilegiada para o mar. Maior espaço e decoração moderna para maximizar o seu conforto durante a estadia.",
            capacidade: "2 adultos e 1 criança",
            tamanho: "35m²",
            camas: "1 cama de casal e 1 individual",
            imagem: "img/quartos/apartamentoSuperior.png",
            amenidades: [
                "Ar-condicionado",
                "Smart TV de 43 polegadas",
                "Wi-Fi de alta velocidade",
                "Mini-bar",
                "Varanda espaçosa",
                "Casa de banho com banheira e duche",
                "Secador de cabelo",
                "Roupão e chinelos"
            ]
        },
        "Apartamento com sofá": {
            titulo: "Apartamento com Sofá",
            descricao: "Perfeito para relaxar, este apartamento inclui uma área de estar com sofá confortável, ideal para momentos de descanso após um dia de exploração.",
            capacidade: "2 adultos e 2 crianças",
            tamanho: "35m²",
            camas: "1 cama de casal, 1 cama individual e 1 sofá-cama",
            imagem: "img/quartos/apartamentoSofa.png",
            amenidades: [
                "Ar-condicionado",
                "TV por cabo",
                "Área de estar com sofá",
                "Wi-Fi gratuito",
                "Frigorifico",
                "Mesa de trabalho",
                "Varanda privada",
                "Casa de banho completa"
            ]
        },
        "Apartamento Família": {
            titulo: "Apartamento Família",
            descricao: "Ideal para famílias, este apartamento espaçoso oferece áreas separadas para pais e crianças, garantindo conforto para toda a família durante a estadia.",
            capacidade: "2 adultos e 2 crianças",
            tamanho: "42m²",
            camas: "2 camas de casal",
            imagem: "img/quartos/familia1.png",
            amenidades: [
                "Ar-condicionado em todas as áreas",
                "TV por cabo",
                "Wi-Fi gratuito",
                "Frigorifico grande",
                "Microondas",
                "Chaleira elétrica",
                "Varanda ampla",
                "Casa de banho familiar",
                "Berço disponível mediante solicitação"
            ]
        },
        "Suite": {
            titulo: "Suite",
            descricao: "Experimente o luxo nas nossas suites com sala de estar separada. Decoração elegante, mobiliário premium e vistas deslumbrantes para uma estadia inesquecível.",
            capacidade: "2 adultos",
            tamanho: "45m²",
            camas: "1 cama de casal",
            imagem: "img/quartos/suite1.png",
            amenidades: [
                "Ar-condicionado",
                "Smart TV de 50 polegadas",
                "Sistema de som Bluetooth",
                "Wi-Fi premium",
                "Mini-bar completo",
                "Máquina de café expresso",
                "Sala de estar separada",
                "Varanda privada com espreguiçadeiras",
                "Casa de banho de luxo com banheira de hidromassagem",
                "Roupões e chinelos premium"
            ]
        },
        "Suite Familiar": {
            titulo: "Suite Familiar",
            descricao: "O máximo em conforto para famílias, com quarto principal, quarto para crianças e sala de estar. O espaço perfeito para férias familiares memoráveis.",
            capacidade: "2 adultos e 2 crianças",
            tamanho: "65m²",
            camas: "1 cama de casal e 2 camas individuais",
            imagem: "img/quartos/suiteFamiliar1.png",
            amenidades: [
                "Ar-condicionado em todas as áreas",
                "Smart TVs em todos os quartos",
                "Wi-Fi de alta velocidade",
                "Cozinha compacta",
                "Frigorifico grande",
                "Microondas",
                "Sala de estar com sofá",
                "Varanda espaçosa",
                "Duas casas de banho completas",
                "Jogos de tabuleiro para família",
                "Berço disponível mediante solicitação"
            ]
        }
    };

    // Selecionar todos os botões de seleção
    const selectorItems = document.querySelectorAll('.selector-item');
    console.log("Botões encontrados:", selectorItems.length);
    
    // Para cada botão, adicionar evento de clique
    selectorItems.forEach(item => {
        item.addEventListener('click', function() {
            const tipoApartamento = this.querySelector('span:not(.check-mark)').textContent;
            console.log("Botão clicado:", tipoApartamento);
            
            // Remover a classe 'selected' e o check mark de todos os botões
            selectorItems.forEach(btn => {
                btn.classList.remove('selected');
                
                // Remover o check mark se existir
                const checkMark = btn.querySelector('.check-mark');
                if (checkMark) {
                    checkMark.remove();
                }
            });
            
            // Adicionar a classe 'selected' ao botão clicado
            this.classList.add('selected');
            
            // Adicionar o check mark ao botão clicado
            const checkSpan = document.createElement('span');
            checkSpan.className = 'check-mark';
            checkSpan.textContent = '✓';
            this.appendChild(checkSpan);
            
            // Atualizar o conteúdo do quarto com base no tipo selecionado
            atualizarQuartoInfo(tipoApartamento);
        });
    });

    function atualizarQuartoInfo(tipoApartamento) {
        console.log("Atualizando para:", tipoApartamento);
        const apartamentoInfo = apartamentosData[tipoApartamento];
        
        if (apartamentoInfo) {
            console.log("Dados encontrados:", apartamentoInfo);
            
            // Atualizar título
            document.querySelector('.quarto-info h3').textContent = apartamentoInfo.titulo;
            
            // Atualizar descrição
            document.querySelector('.quarto-info p').textContent = apartamentoInfo.descricao;
            
            // Atualizar características
            const caracteristicas = document.querySelectorAll('.caracteristica');
            caracteristicas[0].querySelector('span:last-child').textContent = `Capacidade: ${apartamentoInfo.capacidade}`;
            caracteristicas[1].querySelector('span:last-child').textContent = `Tamanho: ${apartamentoInfo.tamanho}`;
            caracteristicas[2].querySelector('span:last-child').textContent = `Camas: ${apartamentoInfo.camas}`;
            
            // Atualizar amenidades
            const amenidadesLista = document.querySelector('.quarto-amenidades ul');
            amenidadesLista.innerHTML = '';
            
            apartamentoInfo.amenidades.forEach(amenidade => {
                const li = document.createElement('li');
                li.textContent = amenidade;
                amenidadesLista.appendChild(li);
            });
            
            // Atualizar a imagem
            const imagem = document.querySelector('.quarto-imagem img');
            imagem.src = apartamentoInfo.imagem;
            imagem.alt = apartamentoInfo.titulo;
            
            // CORREÇÃO: Remover botão "Mostrar mais Fotos" existente
            const botaoAntigo = document.querySelector('.show-more');
            if (botaoAntigo) {
                botaoAntigo.remove();
            }
            
            // Criar novo botão "Mostrar mais Fotos"
            const quartoImagem = document.querySelector('.quarto-imagem');
            const novoBotao = document.createElement('button');
            novoBotao.className = 'show-more';
            novoBotao.textContent = 'Mostrar mais Fotos';
            quartoImagem.appendChild(novoBotao);
            
            // ATUALIZAÇÃO: Redirecionar para galeria de fotos
            novoBotao.addEventListener('click', function() {
                window.location.href = `galeria.html?tipo=${encodeURIComponent(tipoApartamento)}`;
            });
        } else {
            console.log("Tipo de apartamento não encontrado nos dados");
        }
    }

    // Adicionar efeito de rolagem no header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ATUALIZAÇÃO: Adicionar evento de clique ao botão "Mostrar mais Fotos" inicial
    const botaoInicial = document.querySelector('.show-more');
    if (botaoInicial) {
        botaoInicial.addEventListener('click', function() {
            const itemSelecionado = document.querySelector('.selector-item.selected');
            if (itemSelecionado) {
                const tipoAtual = itemSelecionado.querySelector('span:not(.check-mark)').textContent;
                window.location.href = `galeria.html?tipo=${encodeURIComponent(tipoAtual)}`;
            } else {
                window.location.href = `galeria.html?tipo=${encodeURIComponent('Apartamento')}`;
            }
        });
    }
    
    // Event listeners para os botões "Ver Detalhes" dos cards
    const verMaisBtns = document.querySelectorAll('.ver-mais');
    verMaisBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Obter título do apartamento do card
            const cardTitle = this.parentElement.querySelector('h3').textContent.trim();
            console.log("Título do card clicado:", cardTitle);
            
            let tipoCorrespondente = null;
            
            if (cardTitle === "Apartamento Superior") {
                tipoCorrespondente = "Apartamento Superior";
            } else if (cardTitle === "Suite") {
                tipoCorrespondente = "Suite";
            } else if (cardTitle === "Apartamento Família") {
                tipoCorrespondente = "Apartamento Família";
            }
            
            if (tipoCorrespondente) {
                console.log("Redirecionando para:", tipoCorrespondente);
                
                // Encontrar o botão correspondente no seletor e clicar
                selectorItems.forEach(item => {
                    const itemText = item.querySelector('span').textContent.trim();
                    if (itemText === tipoCorrespondente) {
                        item.click();
                        
                        // Rolar para a seção de detalhes
                        document.querySelector('.quarto-detalhe').scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            }
        });
    });
});