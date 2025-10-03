class Personagem {
    constructor(nome, imagem, descricao, classe) {
        this.nome = nome;
        this.imagem = imagem;
        this.descricao = descricao;
        this.pontos = 0;
        this.classe = classe;
    }
}

class Pergunta {
    constructor(numPergunta, pergunta, opcoes, tema) {
        this.numPergunta = numPergunta;
        this.pergunta = pergunta;
        this.opcoes = opcoes;
        this.tema = tema;
    }
}

let personagens = [
    new Personagem("Brennus",
        "assets/images/cavaleiro.png",
        "Conhecido como 'A Muralha de Aethelgard', Brennus é um guerreiro cuja lealdade ao reino é tão inabalável quanto sua armadura. Ele acredita que a força e a honra são o caminho para a verdadeira justiça, enfrentando qualquer perigo de frente para proteger os inocentes."
        ,"Guerreiro⚔️"),

    new Personagem("Valerius",
        "assets/images/mago.png",
        "Um estudioso dos segredos arcanos, Valerius passou décadas na biblioteca perdida de Cinderfall. Para ele, o verdadeiro poder não está na força bruta, mas no conhecimento e na capacidade de ver as conexões ocultas que moldam o universo. Cada feitiço é uma palavra em uma conversa com a própria magia."
        ,"Mago🪄"),

    new Personagem("Lirael",
        "assets/images/arqueiro.png",
        "Lirael é uma sombra e um sussurro nas florestas de Aethelgard. Criada fora dos muros das grandes cidades, ela confia mais em seus instintos e na precisão de seu arco do que em planos grandiosos. Para Lirael, a liberdade é o bem mais precioso, e a melhor forma de resolver um problema é com uma flecha certeira, disparada do lugar certo e na hora certa.", 
        "Arqueiro🏹"),
];

let perguntas = [
    new Pergunta(1, "Um dragão ameaça uma vila próxima. Qual é a sua primeira ação?", [
        { texto: "Confronto o dragão.", pontos: { Brennus: 3, Valerius: 1, Lirael: 2 } },
        { texto: "Pesquiso fraquezas.", pontos: { Brennus: 1, Valerius: 3, Lirael: 2 } },
        { texto: "Lanço um ataque furtivo.", pontos: { Brennus: 2, Valerius: 1, Lirael: 3 } }
    ], "assets/images/1.png"),

    new Pergunta(2, "Você encontra uma porta antiga selada com magia. O que você faz?", [
        { texto: "Tenta arrombar", pontos: { Brennus: 3, Valerius: 1, Lirael: 2 } },
        { texto: "Anula a magia", pontos: { Brennus: 1, Valerius: 3, Lirael: 2 } },
        { texto: "Procura passagens secretas", pontos: { Brennus: 2, Valerius: 1, Lirael: 3 } }
    ], "assets/images/2.png"),

    new Pergunta(3, "Qual é a sua arma de escolha?", [
        { texto: "Espada e escudo", pontos: { Brennus: 3, Valerius: 1, Lirael: 2 } },
        { texto: "Cajado mágico", pontos: { Brennus: 1, Valerius: 3, Lirael: 2 } },
        { texto: "Arco e flechas", pontos: { Brennus: 1, Valerius: 2, Lirael: 3 } }
    ], "assets/images/3.png"),

    new Pergunta(4, "Ao negociar com um mercador, qual sua tática?", [
        { texto: "Ser direto", pontos: { Brennus: 3, Valerius: 2, Lirael: 1 } },
        { texto: "Argumentar logicamente", pontos: { Brennus: 1, Valerius: 3, Lirael: 2 } },
        { texto: "Usar charme e astúcia", pontos: { Brennus: 1, Valerius: 2, Lirael: 3 } }
    ], "assets/images/4.png"),

    new Pergunta(5, "Você precisa atravessar uma floresta perigosa. Como você procede?", [
        { texto: "Sigo direto", pontos: { Brennus: 3, Valerius: 1, Lirael: 2 } },
        { texto: "Uso feitiços de iluminação", pontos: { Brennus: 1, Valerius: 3, Lirael: 2 } },
        { texto: "Movimento-me furtivamente", pontos: { Brennus: 2, Valerius: 1, Lirael: 3 } }
    ], "assets/images/5.png"),

    new Pergunta(6, "Qual qualidade você mais valoriza em um companheiro de equipe?", [
        { texto: "Coragem e lealdade", pontos: { Brennus: 3, Valerius: 2, Lirael: 1 } },
        { texto: "Sabedoria e estratégia", pontos: { Brennus: 1, Valerius: 3, Lirael: 2 } },
        { texto: "Agilidade e independência", pontos: { Brennus: 2, Valerius: 1, Lirael: 3 } }
    ], "assets/images/6.png"),

    new Pergunta(7, "Em seu tempo livre, o que você prefere fazer?", [
        { texto: "Treinar minhas habilidades", pontos: { Brennus: 3, Valerius: 1, Lirael: 2 } },
        { texto: "Estudar e aprender", pontos: { Brennus: 1, Valerius: 3, Lirael: 2 } },
        { texto: "Explorar o desconhecido", pontos: { Brennus: 2, Valerius: 1, Lirael: 3 } }
    ], "assets/images/7.png"),

    new Pergunta(8, "Um item mágico poderoso é encontrado. Qual sua reação?", [
        { texto: "Vejo se pode me fortalecer", pontos: { Brennus: 3, Valerius: 1, Lirael: 2 } },
        { texto: "Busco entender como funciona", pontos: { Brennus: 1, Valerius: 3, Lirael: 2 } },
        { texto: "Penso em como pode ser usado", pontos: { Brennus: 2, Valerius: 2, Lirael: 3 } }
    ], "assets/images/8.png"),

    new Pergunta(9, "O que mais te motiva em uma aventura?", [
        { texto: "Proteger Inocentes", pontos: { Brennus: 3, Valerius: 1, Lirael: 2 } },
        { texto: "Adquirir conhecimentos", pontos: { Brennus: 1, Valerius: 3, Lirael: 2 } },
        { texto: "A emoção da jornada", pontos: { Brennus: 2, Valerius: 1, Lirael: 3 } }
    ], "assets/images/9.png"),

    new Pergunta(10, "Ao final da jornada, como você gostaria de ser lembrado?", [
        { texto: "Herói lendário", pontos: { Brennus: 3, Valerius: 1, Lirael: 2 } },
        { texto: "Sábio desvendador de segredos", pontos: { Brennus: 1, Valerius: 3, Lirael: 2 } },
        { texto: "Como uma lenda astuta", pontos: { Brennus: 2, Valerius: 1, Lirael: 3 } }
    ], "assets/images/10.png"),
]

const container = document.getElementById("container");

mostrarPergunta(0);

function mostrarPergunta(numero) {
    
    if (numero < perguntas.length) {
        const perguntaAtual = perguntas[numero];

        document.body.style.backgroundImage = `url(${perguntaAtual.tema})`;

        container.innerHTML = `
            <header>
                <div>
                    <span>${perguntaAtual.numPergunta}</span>
                    <p>${perguntaAtual.pergunta}</p>
                </div>
            </header>
            <div>
                <ol>
                    <li class="opcao">
                        <button onclick="recebeResposta('0')">
                            ${perguntaAtual.opcoes[0].texto}
                        </button>
                    </li>
                    <li class="opcao">
                        <button onclick="recebeResposta('1')">
                            ${perguntaAtual.opcoes[1].texto}
                        </button>
                    </li>
                    <li class="opcao">
                        <button onclick="recebeResposta('2')">
                            ${perguntaAtual.opcoes[2].texto}
                        </button>
                    </li>
                </ol>
                <p class="contador">Pergunta <span>${numero + 1}</span> de <span>${perguntas.length}</span></p>
            </div>
        `;
    } else {
        mostrarResultado();
    }
}

let proximaPergunta = 0;

function recebeResposta(opcaoIndex) {
    const pontosDaRodada = perguntas[proximaPergunta].opcoes[opcaoIndex].pontos;

    personagens.forEach(personagem => {
        personagem.pontos += pontosDaRodada[personagem.nome] || 0;
    });

    proximaPergunta++;
    mostrarPergunta(proximaPergunta);
}

function mostrarResultado() {

    let vencedor = personagens[0];
    for (let i=1; i < personagens.length; i++){
        if (personagens[i].pontos > vencedor.pontos) {
            vencedor = personagens[i];
        }
    }

    container.innerHTML = `
        <div class="resultado">
            <div class="resultado-header">
                <h2>Você é ${vencedor.nome}!</h2>
                <h3>${vencedor.classe}</h3>
            </div>
            <div class="resultado-body">
                <img src="${vencedor.imagem}">
                <div class="descricao">
                    <p>${vencedor.descricao}</p>
                </div>
            </div>
            <div class="resultado-footer">
                <span>Pontuação: ${vencedor.pontos} pontos</span>
                <button onclick="resetar()">Jogar novamente</button>
            </div> 
        </div>
    `;

    document.body.style.backgroundImage = `url(assets/images/resultado.png)`;
}

function resetar(){
    window.location.href = 'welcome.html';
}