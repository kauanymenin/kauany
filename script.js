<script src="script.js"></script>
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    }
]; 
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " O que são fake news? ",
        alternativas: [
            "São informações falsas ou enganosas apresentadas como se fossem noticias verdadeiras.",
            "A fake news não são boas hoje em dia muitas pessoas acabam brigando umas com as outras por conta dessas noticias falsas."
        ]
    },
    {
        enunciado: "oque é publicidade?",
        alternativas: [
            "É uma forma de comunicação que promove produtos ideias atraves de anuncios em diferentes redes sociais. ",
            "a publicidade as vezes e bem enganosa porque pode aver publicaçoẽs enganosas nelas.",
        ]
    },
    {
        enunciado: "O que e midia?",
        alternativas: [
            "São plataformas online onde pessoas podem criar interagir usar sua criatividade.",
            "As midias não são boas para certas ocasião na midia você presencia baste preconceito envolvido dentro do celular."
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();
