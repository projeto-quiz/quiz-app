class Personagem {
    constructor(nome, imagem, descricao) {
        this.nome = nome;
        this.imagem = imagem;
        this.descricao = descricao;
        this.pontos = 0;
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
        "Conhecido como 'A Muralha de Aethelgard', Brennus é um guerreiro cuja lealdade ao reino é tão inabalável quanto sua armadura. Ele acredita que a força e a honra são o caminho para a verdadeira justiça, enfrentando qualquer perigo de frente para proteger os inocentes."),

    new Personagem("Valerius",
        "assets/images/mago.png",
        "Um estudioso dos segredos arcanos, Valerius passou décadas na biblioteca perdida de Cinderfall. Para ele, o verdadeiro poder não está na força bruta, mas no conhecimento e na capacidade de ver as conexões ocultas que moldam o universo. Cada feitiço é uma palavra em uma conversa com a própria magia."),

    new Personagem("Lirael",
        "assets/images/arqueiro.png",
        "Lirael é uma sombra e um sussurro nas florestas de Aethelgard. Criada fora dos muros das grandes cidades, ela confia mais em seus instintos e na precisão de seu arco do que em planos grandiosos. Para Lirael, a liberdade é o bem mais precioso, e a melhor forma de resolver um problema é com uma flecha certeira, disparada do lugar certo e na hora certa."),
];

let perguntas = [
    new Pergunta(1, "Um dragão ameaça uma vila próxima. Qual é a sua primeira ação?", [
        { texto: "Correr de frente para a batalha, usando meu escudo para proteger os aldeões.", pontos: { Brennus: 3, Valerius: 1, Lirael: 2 } },
        { texto: "Pesquisar em livros antigos sobre as fraquezas da criatura.", pontos: { Brennus: 1, Valerius: 3, Lirael: 2 } },
        { texto: "Procurar um ponto de vantagem para atacar o dragão de longe.", pontos: { Brennus: 2, Valerius: 1, Lirael: 3 } }
    ], "assets/images/1.png"),

    new Pergunta(2, "Você encontra uma porta antiga selada com magia. O que você faz?", [
        { texto: "Tento arrombar a porta com força bruta.", pontos: { Brennus: 3, Valerius: 1, Lirael: 2 } },
        { texto: "Analiso as runas para encontrar o feitiço de anulação correto.", pontos: { Brennus: 1, Valerius: 3, Lirael: 2 } },
        { texto: "Procuro por mecanismos escondidos ou uma entrada alternativa.", pontos: { Brennus: 2, Valerius: 1, Lirael: 3 } }
    ], "assets/images/2.png"),

    new Pergunta(3, "Qual é a sua arma de escolha?", [
        { texto: "Uma espada longa e um escudo resistente.", pontos: { Brennus: 3, Valerius: 1, Lirael: 2 } },
        { texto: "O conhecimento arcano e um cajado poderoso.", pontos: { Brennus: 1, Valerius: 3, Lirael: 2 } },
        { texto: "Um arco preciso e flechas afiadas.", pontos: { Brennus: 1, Valerius: 2, Lirael: 3 } }
    ], "assets/images/3.png"),

    new Pergunta(4, "Ao negociar com um mercador, qual sua tática?", [
        { texto: "Sou direto e honesto sobre o que quero e o que ofereço.", pontos: { Brennus: 3, Valerius: 2, Lirael: 1 } },
        { texto: "Uso minha inteligência para argumentar e provar o valor do meu ponto.", pontos: { Brennus: 1, Valerius: 3, Lirael: 2 } },
        { texto: "Tento ser charmoso e um pouco malandro para conseguir o melhor preço.", pontos: { Brennus: 1, Valerius: 2, Lirael: 3 } }
    ], "assets/images/4.png"),

    new Pergunta(5, "Você precisa atravessar uma floresta perigosa. Como você procede?", [
        { texto: "Sigo em frente pelo caminho principal, preparado para qualquer embate.", pontos: { Brennus: 3, Valerius: 1, Lirael: 2 } },
        { texto: "Uso feitiços de proteção e iluminação para guiar o caminho.", pontos: { Brennus: 1, Valerius: 3, Lirael: 2 } },
        { texto: "Movimento-me silenciosamente pelas sombras, evitando qualquer confronto.", pontos: { Brennus: 2, Valerius: 1, Lirael: 3 } }
    ], "assets/images/5.png"),

    new Pergunta(6, "Qual qualidade você mais valoriza em um companheiro de equipe?", [
        { texto: "Lealdade e coragem inabalável.", pontos: { Brennus: 3, Valerius: 2, Lirael: 1 } },
        { texto: "Sabedoria e uma mente estratégica.", pontos: { Brennus: 1, Valerius: 3, Lirael: 2 } },
        { texto: "Independência e agilidade.", pontos: { Brennus: 2, Valerius: 1, Lirael: 3 } }
    ], "assets/images/6.png"),

    new Pergunta(7, "Em seu tempo livre, o que você prefere fazer?", [
        { texto: "Treinar minhas habilidades de combate.", pontos: { Brennus: 3, Valerius: 1, Lirael: 2 } },
        { texto: "Estudar mapas, histórias ou novas magias.", pontos: { Brennus: 1, Valerius: 3, Lirael: 2 } },
        { texto: "Explorar os arredores da cidade, descobrindo novos lugares.", pontos: { Brennus: 2, Valerius: 1, Lirael: 3 } }
    ], "assets/images/7.png"),

    new Pergunta(8, "Um item mágico poderoso é encontrado. Qual sua reação?", [
        { texto: "Verifico se é uma arma ou armadura que pode me fortalecer em combate.", pontos: { Brennus: 3, Valerius: 1, Lirael: 2 } },
        { texto: "Quero entender sua história, seus encantamentos e como funciona.", pontos: { Brennus: 1, Valerius: 3, Lirael: 2 } },
        { texto: "Penso em como suas habilidades especiais podem ser usadas de forma criativa.", pontos: { Brennus: 2, Valerius: 2, Lirael: 3 } }
    ], "assets/images/8.png"),

    new Pergunta(9, "O que mais te motiva em uma aventura?", [
        { texto: "A glória de vencer grandes desafios e proteger os inocentes.", pontos: { Brennus: 3, Valerius: 1, Lirael: 2 } },
        { texto: "A chance de descobrir conhecimentos perdidos e desvendar mistérios.", pontos: { Brennus: 1, Valerius: 3, Lirael: 2 } },
        { texto: "A emoção da jornada, a liberdade e as riquezas que posso encontrar.", pontos: { Brennus: 2, Valerius: 1, Lirael: 3 } }
    ], "assets/images/9.png"),

    new Pergunta(10, "Ao final da jornada, como você gostaria de ser lembrado?", [
        { texto: "Como um herói lendário e um grande protetor do reino.", pontos: { Brennus: 3, Valerius: 1, Lirael: 2 } },
        { texto: "Como um sábio que desvendou os maiores segredos do mundo.", pontos: { Brennus: 1, Valerius: 3, Lirael: 2 } },
        { texto: "Como uma lenda astuta cujas histórias são contadas em tavernas.", pontos: { Brennus: 2, Valerius: 1, Lirael: 3 } }
    ], "assets/images/10.png"),
]

const total = document.getElementById("totalPerguntas");
const numeroPergunta = document.getElementById("numeroPergunta");
const pergunta = document.getElementById("pergunta");
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const perguntaAtual = document.getElementById("perguntaAtual");
let totalDePerguntas = perguntas.length;
total.innerHTML = totalDePerguntas;

let proximaPergunta = 0;

function mostrarPergunta(numero) {
    if (numero < perguntas.length) {
        numeroPergunta.innerHTML = perguntas[numero].numPergunta;
        pergunta.innerHTML = perguntas[numero].pergunta;
        a.innerHTML = perguntas[numero].opcoes[0].texto;
        b.innerHTML = perguntas[numero].opcoes[1].texto;
        c.innerHTML = perguntas[numero].opcoes[2].texto;
        perguntaAtual.innerHTML = perguntas[numero].numPergunta;
        total.innerHTML = perguntas.length;
        document.body.style.backgroundImage = `url(${perguntas[numero].tema})`;
    } else if (numero >= perguntas.length) {
        mostrarResultado();
    }
}

function recebeResposta(opcaoIndex) {
    const pontosDaRodada = perguntas[proximaPergunta].opcoes[opcaoIndex].pontos;

    personagens.forEach(personagem => {
        personagem.pontos += pontosDaRodada[personagem.nome] || 0;
    });

    proximaPergunta++;
    mostrarPergunta(proximaPergunta);
}

function mostrarResultado() {
}

function resetar(){
    window.location.href = 'welcome.html';
}

a.addEventListener("click", () => recebeResposta(0));
b.addEventListener("click", () => recebeResposta(1));
c.addEventListener("click", () => recebeResposta(2));

