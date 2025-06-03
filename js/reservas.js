document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM completamente carregado");

    // Dados dos apartamentos com preços por noite
    const apartamentosData = {
        "Apartamento": {
            titulo: "Apartamento Standard",
            descricao: "Os nossos apartamentos standard oferecem todo o conforto para a sua estadia. Equipados com duas camas de solteiro ou uma cama de casal, TV de tela plana, ar-condicionado e uma varanda com vista para os jardins ou piscina.",
            capacidade: "2 adultos",
            tamanho: "28m²",
            camas: "2 individuais ou 1 casal",
            imagem: "img/quartos/apartamento1.png",
            amenidades: [
                "Ar-condicionado",
                "TV por cabo",
                "Wi-Fi gratuito",
                "Frigorifico",
                "Varanda privada",
                "Casa de banho privada com duche"
            ],
            precoPorNoite: 80
        },
        "Apartamento Superior": {
            titulo: "Apartamento Superior",
            descricao: "Os nossos apartamentos superiores oferecem uma experiência mais luxuosa com vista privilegiada para o mar. Maior espaço e decoração moderna para maximizar o seu conforto durante a estadia.",
            capacidade: "2 adultos e 2 crianças",
            tamanho: "35m²",
            camas: "2 camas de casal",
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
            ],
            precoPorNoite: 120
        },
        "Apartamento com sofá": {
            titulo: "Apartamento com Sofá",
            descricao: "Perfeito para relaxar, este apartamento inclui uma área de estar com sofá confortável, ideal para momentos de descanso após um dia de exploração.",
            capacidade: "2 adultos e 1 criança",
            tamanho: "32m²",
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
            ],
            precoPorNoite: 100
        },
        "Apartamento Família": {
            titulo: "Apartamento Família",
            descricao: "Ideal para famílias, este apartamento espaçoso oferece áreas separadas para pais e crianças, garantindo conforto para toda a família durante a estadia.",
            capacidade: "2 adultos e 2 crianças",
            tamanho: "42m²",
            camas: "1 cama de casal e 2 camas individuais",
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
            ],
            precoPorNoite: 150
        },
        "Suite": {
            titulo: "Suite",
            descricao: "Experimente o luxo nas nossas suites com sala de estar separada. Decoração elegante, mobiliário premium e vistas deslumbrantes para uma estadia inesquecível.",
            capacidade: "2 adultos",
            tamanho: "45m²",
            camas: "1 cama King size",
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
            ],
            precoPorNoite: 200
        },
        "Suite Familiar": {
            titulo: "Suite Familiar",
            descricao: "O máximo em conforto para famílias, com quarto principal, quarto para crianças e sala de estar. O espaço perfeito para férias familiares memoráveis.",
            capacidade: "2 adultos e 3 crianças",
            tamanho: "65m²",
            camas: "1 cama King size e 3 camas individuais",
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
            ],
            precoPorNoite: 250
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
                const checkMark = btn.querySelector('.check-mark');
                if (checkMark) {
                    checkMark.remove();
                }
            });

            // Adicionar a classe 'selected' ao botão clicado
            this.classList.add('selected');
            const checkSpan = document.createElement('span');
            checkSpan.className = 'check-mark';
            checkSpan.textContent = '✓';
            this.appendChild(checkSpan);

            // Atualizar o conteúdo do quarto
            atualizarQuartoInfo(tipoApartamento);
            calcularPreco(); // Atualizar preço ao mudar o apartamento
        });
    });

    function atualizarQuartoInfo(tipoApartamento) {
        console.log("Atualizando para:", tipoApartamento);
        const apartamentoInfo = apartamentosData[tipoApartamento];

        if (apartamentoInfo) {
            console.log("Dados encontrados:", apartamentoInfo);
            document.querySelector('.quarto-info h3').textContent = apartamentoInfo.titulo;
            document.querySelector('.quarto-info p').textContent = apartamentoInfo.descricao;
            const caracteristicas = document.querySelectorAll('.caracteristica');
            caracteristicas[0].querySelector('span:last-child').textContent = `Capacidade: ${apartamentoInfo.capacidade}`;
            caracteristicas[1].querySelector('span:last-child').textContent = `Tamanho: ${apartamentoInfo.tamanho}`;
            caracteristicas[2].querySelector('span:last-child').textContent = `Camas: ${apartamentoInfo.camas}`;
            caracteristicas[3].querySelector('span:last-child').textContent = `Preço por noite: €${apartamentoInfo.precoPorNoite.toFixed(2)}`;

            const amenidadesLista = document.querySelector('.quarto-amenidades ul');
            amenidadesLista.innerHTML = '';
            apartamentoInfo.amenidades.forEach(amenidade => {
                const li = document.createElement('li');
                li.textContent = amenidade;
                amenidadesLista.appendChild(li);
            });
            const imagem = document.querySelector('.quarto-imagem img');
            imagem.src = apartamentoInfo.imagem;
            imagem.alt = apartamentoInfo.titulo;
            const botaoAntigo = document.querySelector('.show-more');
            if (botaoAntigo) botaoAntigo.remove();
            const quartoImagem = document.querySelector('.quarto-imagem');
            const novoBotao = document.createElement('button');
            novoBotao.className = 'show-more';
            novoBotao.textContent = 'Mostrar mais Fotos';
            quartoImagem.appendChild(novoBotao);
            novoBotao.addEventListener('click', function() {
                window.location.href = `galeria-reservas.html?tipo=${encodeURIComponent(tipoApartamento)}`;
            });
        } else {
            console.log("Tipo de apartamento não encontrado nos dados");
        }
    }

    // Função para calcular o preço
    function calcularPreco() {
        const checkinInput = document.getElementById('checkin');
        const checkoutInput = document.getElementById('checkout');
        const priceText = document.getElementById('price-text');
        const itemSelecionado = document.querySelector('.selector-item.selected');

        if (checkinInput.value && checkoutInput.value && itemSelecionado) {
            const tipoApartamento = itemSelecionado.querySelector('span:not(.check-mark)').textContent;
            const apartamentoInfo = apartamentosData[tipoApartamento];
            const checkin = new Date(checkinInput.value);
            const checkout = new Date(checkoutInput.value);
            const diffTime = checkout - checkin;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Número de noites

            if (diffDays > 0 && apartamentoInfo) {
                const precoTotal = diffDays * apartamentoInfo.precoPorNoite;
                priceText.textContent = `Preço estimado: €${precoTotal.toFixed(2)} (${diffDays} noites x €${apartamentoInfo.precoPorNoite.toFixed(2)}/noite)`;
            } else {
                priceText.textContent = "Datas inválidas. Certifique-se de que a data de check-out é posterior à de check-in.";
            }
        } else {
            priceText.textContent = "Selecione as datas e um apartamento para ver o preço.";
        }
    }

    // Adicionar eventos para atualizar o preço ao mudar as datas
    document.getElementById('checkin').addEventListener('change', calcularPreco);
    document.getElementById('checkout').addEventListener('change', calcularPreco);

    // Adicionar efeito de rolagem no header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Adicionar evento de clique ao botão "Mostrar mais Fotos" inicial
    const botaoInicial = document.querySelector('.show-more');
    if (botaoInicial) {
        botaoInicial.addEventListener('click', function() {
            const itemSelecionado = document.querySelector('.selector-item.selected');
            if (itemSelecionado) {
                const tipoAtual = itemSelecionado.querySelector('span:not(.check-mark)').textContent;
                window.location.href = `galeria-reservas.html?tipo=${encodeURIComponent(tipoAtual)}`;
            } else {
                window.location.href = `galeria-reservas.html?tipo=${encodeURIComponent('Apartamento')}`;
            }
        });
    }

    // Corrigir a funcionalidade dos cards "Ver Detalhes"
    const verMaisBtns = document.querySelectorAll('.ver-mais');
    verMaisBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const cardTitle = this.parentElement.querySelector('h3').textContent;
            console.log("Título do card clicado:", cardTitle);
            selectorItems.forEach(item => {
                const itemText = item.querySelector('span').textContent;
                if (cardTitle.includes(itemText) || itemText.includes(cardTitle)) {
                    console.log("Botão correspondente encontrado:", itemText);
                    item.click();
                    document.querySelector('.quarto-detalhe').scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    });

    // Menu Toggle para dispositivos móveis
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    console.log("menuToggle:", menuToggle);
    console.log("navbar:", navbar);

    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('Menu toggle clicado. Classe open:', navbar.classList.contains('open'));
            navbar.classList.toggle('open');
            console.log('Classe open após toggle:', navbar.classList.contains('open'));
            menuToggle.textContent = navbar.classList.contains('open') ? '✕' : '☰';
        });

        // Fechar o menu ao clicar fora
        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target) && e.target !== menuToggle) {
                console.log('Clicado fora do menu. Fechando...');
                navbar.classList.remove('open');
                menuToggle.textContent = '☰';
            }
        });

        // Fechar o menu ao clicar em um link
        const navLinks = document.querySelectorAll('.navbar a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                console.log('Link do menu clicado. Fechando menu...');
                navbar.classList.remove('open');
                menuToggle.textContent = '☰';
            });
        });
    } else {
        console.error("menuToggle ou navbar não encontrados!");
    }
});