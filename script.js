const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "E se tudo que você conhece fosse apenas a superfice... e hoje você descobrisse que existe um mundo escondido, com criaturas mágicas, feitiços, e um aguerra silenciosa acontecendo debaixo de seu nariz... você teria coragem de se levantar e atravessar essa porta? E efrentar essa grande história que te espera? ",
        alternativas: [
            {
                texto: "🪄 Sim – estou pronta(o)!",
                afirmacao: "."
            },
            {
                texto: "🪞 Depende… preciso entender melhor.",
                afirmacao: "."
            }
        ]
    },
    {
        enunciado: "Nesse novo mundo, existem 4 casas. Para decidir em qual casa você será enviada, é preciso responder algumas perguntas... Está pronta(o)? Em um momento de perigo, o que você faria?",
        alternativas: [
            {
                texto: "Agiria imediatamente para proteger quem está comigo.🛡️",
                afirmacao: "A"
            },
            {
                texto: "Pensaria rápido em uma solução estratégica.👓",
                afirmacao: "B"
            }
        ]
    },
    {
        enunciado: "O que te move em uma jornada desconhecida?",
        alternativas: [
            {
                texto: "O desejo de fazer o bem.🤎",
                afirmacao: "A"
            },
            {
                texto: "A vontade de descobrir segredos profundos.🤫",
                afirmacao: "B"
            }
        ]
    },
    {
        enunciado: "Se tivesse que escolher um dom mágico, qual seria?",
        alternativas: [
            {
                texto: "Curar pessoas.💊",
                afirmacao: "A"
            },
            {
                texto: "Controlar os elementos da natureza. 🍃",
                afirmacao: "B"
            }
        ]
    },
    {
        enunciado: "Parece que estamos chegando ao fim... O Chapéu Mágico já está girando lentamente sobre sua cabeça, prestes a decidir em qual casa você pertencerá. Está a um passo de definir uma parte do seu destino. Com tudo que você viveu até aqui, diga: você se considera mais destemido e inspirado com todas as aventuras que ainda vai enfrentar?",
        alternativas: [
            {
                texto: "🗡️ Sim – Estou pronto(a) para o que vier!",
                afirmacao: "."
            },
            {
                texto: "🌫️ Ainda tenho receios, mas vou seguir em frente.",
                afirmacao: "."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Parece que hoje você está especialmente destemido(a)... Após uma análise minuciosa, posso afirmar com clareza:🛡️ Você está destinado a se tornar um grande guerreiro neste novo mundo. Dentro deste reinado, seu caminho será próspero e grandioso. Nesta aventura, você será recebido de braços abertos por todas as nossas magias — pois a sua alma carrega algo especial.✨ E posso te garantir: Independentemente da casa que o Chapéu Mágico escolher para você, esta será uma jornada emocionante, cheia de descobertas, desafios e momentos inesquecíveis.🌌 Agora, seu destino está traçado... Que comece a aventura! 🏰 Casas e seus Significados:  A + A + A	🌿 Sylvaris – Guardiões da Vida	Protetores, curandeiros e conectados à natureza. Possuem empatia e grande sabedoria emocional. A + A + B	🔥 Ignaris – Guerreiros da Alma	Corajosos, impulsivos e movidos pelo coração. Guiados pela bravura e pelo senso de justiça. B + B + B	💨 Aetheris – Sábios dos Céus	Inteligentes, reflexivos e profundos. Buscam compreender o invisível e dominar o conhecimento. B + A + A	🖤 Umbros – Sombras do Mistério	Estratégicos, reservados e intensos. Têm uma conexão com o oculto e dominam o desconhecido.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();