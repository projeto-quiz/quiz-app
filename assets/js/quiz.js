class Personagem {
    constructor(nome, imagem, descricao) {
        this.nome = nome;
        this.imagem = imagem;
        this.descricao = descricao;
    }
}

class Pergunta {
    constructor(numPergunta, pergunta, opcaoA, opcaoB, opcaoC, tema) {
        this.numPergunta = numPergunta;
        this.pergunta = pergunta;
        this.opcaoA = opcaoA;
        this.opcaoB = opcaoB;
        this.opcaoC = opcaoC;
        this.tema = tema;
    }
}

let perguntas = [
    new Pergunta(1, "Um dragão ameaça uma vila próxima. Qual é a sua primeira ação?", "Correr de frente para a batalha, usando meu escudo para proteger os aldeões.", "Pesquisar em livros antigos sobre as fraquezas da criatura.", "Procurar um ponto de vantagem para atacar o dragão de longe.", "assets/images/1.png"),
    new Pergunta(2, "Você encontra uma porta antiga selada com magia. O que você faz?", "Tento arrombar a porta com força bruta.", "Analiso as runas para encontrar o feitiço de anulação correto.", "Procuro por mecanismos escondidos ou uma entrada alternativa.", "assets/images/2.png"),
    new Pergunta(3, "Qual é a sua arma de escolha?", "Uma espada longa e um escudo resistente.", "O conhecimento arcano e um cajado poderoso.", "Um arco preciso e flechas afiadas.", "assets/images/3.png"),
    new Pergunta(4, "Ao negociar com um mercador, qual sua tática?", "Sou direto e honesto sobre o que quero e o que ofereço.", "Uso minha inteligência para argumentar e provar o valor do meu ponto.", "Tento ser charmoso e um pouco malandro para conseguir o melhor preço.", "assets/images/4.png"),
    new Pergunta(5, "Você precisa atravessar uma floresta perigosa. Como você procede?", "Sigo em frente pelo caminho principal, preparado para qualquer embate.", "Uso feitiços de proteção e iluminação para guiar o caminho.", "Movimento-me silenciosamente pelas sombras, evitando qualquer confronto.", "assets/images/5.png"),
    new Pergunta(6, "Qual qualidade você mais valoriza em um companheiro de equipe?", "Lealdade e coragem inabalável.", "Sabedoria e uma mente estratégica.", "Independência e agilidade.", "assets/images/6.png"),
    new Pergunta(7, "Em seu tempo livre, o que você prefere fazer?", "Treinar minhas habilidades de combate.", "Estudar mapas, histórias ou novas magias.", "Explorar os arredores da cidade, descobrindo novos lugares.", "assets/images/7.png"),
    new Pergunta(8, "Um item mágico poderoso é encontrado. Qual sua reação?", "Verifico se é uma arma ou armadura que pode me fortalecer em combate.", "Quero entender sua história, seus encantamentos e como funciona.", "Penso em como suas habilidades especiais podem ser usadas de forma criativa.", "assets/images/8.png"),
    new Pergunta(9, "O que mais te motiva em uma aventura?", "A glória de vencer grandes desafios e proteger os inocentes.", "A chance de descobrir conhecimentos perdidos e desvendar mistérios.", "A emoção da jornada, a liberdade e as riquezas que posso encontrar.", "assets/images/9.png"),
    new Pergunta(10, "Ao final da jornada, como você gostaria de ser lembrado?", "Como um herói lendário e um grande protetor do reino.", "Como um sábio que desvendou os maiores segredos do mundo.", "Como uma lenda astuta cujas histórias são contadas em tavernas.", "assets/images/10.png"),
]

let personagem = [
    new Personagem("Brennus", "assets/images/cavaleiro.png", "Conhecido como 'A Muralha de Aethelgard', Brennus é um guerreiro cuja lealdade ao reino é tão inabalável quanto sua armadura. Ele acredita que a força e a honra são o caminho para a verdadeira justiça, enfrentando qualquer perigo de frente para proteger os inocentes."),
    new Personagem("Valerius", "assets/images/mago.png", "Um estudioso dos segredos arcanos, Valerius passou décadas na biblioteca perdida de Cinderfall. Para ele, o verdadeiro poder não está na força bruta, mas no conhecimento e na capacidade de ver as conexões ocultas que moldam o universo. Cada feitiço é uma palavra em uma conversa com a própria magia."),
    new Personagem("Lirael", "assets/images/arqueiro.png","Lirael é uma sombra e um sussurro nas florestas de Aethelgard. Criada fora dos muros das grandes cidades, ela confia mais em seus instintos e na precisão de seu arco do que em planos grandiosos. Para Lirael, a liberdade é o bem mais precioso, e a melhor forma de resolver um problema é com uma flecha certeira, disparada do lugar certo e na hora certa."),
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

mostrarPergunta(0);

function mostrarPergunta(numero) {
    if(numero < perguntas.length) {
        numeroPergunta.innerHTML = perguntas[numero].numPergunta;
        pergunta.innerHTML = perguntas[numero].pergunta;   
        a.innerHTML = perguntas[numero].opcaoA;
        b.innerHTML = perguntas[numero].opcaoB;
        c.innerHTML = perguntas[numero].opcaoC;
        perguntaAtual.innerHTML = perguntas[numero].numPergunta;
        total.innerHTML = perguntas.length;
        document.body.style.backgroundImage = `url(${perguntas[numero].tema})`;
    } else if(numero >= perguntas.length){
        mostrarResultado();
    }
}

let proximaPergunta = 0;

function recebeResposta(opcao) {

    proximaPergunta++;

    mostrarPergunta(proximaPergunta);
}

function mostrarResultado() {}

function resetar(){
    window.location.href = 'welcome.html';
}

opcaoA.addEventListener("click", () => recebeResposta("A"));
opcaoB.addEventListener("click", () => recebeResposta("B"));
opcaoC.addEventListener("click", () => recebeResposta("C"));
