const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get("type")

const questoesPort1 = [
    {
        pergunta: "Quantas letras tem o alfabeto?",
        alternativas: ["26", "24", "28", "30"],
        correta: 0
    },
    {
        pergunta: "Qual é a primeira letra do alfabeto?",
        alternativas: ["A", "B", "C", "D"],
        correta: 0
    },
    {
        pergunta: "Qual é a última letra do alfabeto?",
        alternativas: ["X", "Y", "Z", "W"],
        correta: 2
    },
    {
        pergunta: "Qual palavra começa com a letra 'M'?",
        alternativas: ["Casa", "Mesa", "Flor", "Sol"],
        correta: 1
    },
    {
        pergunta: "Qual palavra rima com 'gato'?",
        alternativas: ["Pato", "Casa", "Flor", "Sol"],
        correta: 0
    },
    {
        pergunta: "Qual letra vem depois do 'F' no alfabeto?",
        alternativas: ["E", "G", "H", "I"],
        correta: 1
    },
    {
        pergunta: "Qual palavra está escrita corretamente?",
        alternativas: ["Caza", "Casa", "Kaza", "Cassa"],
        correta: 1
    },
    {
        pergunta: "Qual palavra tem 3 letras?",
        alternativas: ["Bola", "Casa", "Flor", "Sol"],
        correta: 3
    },
    {
        pergunta: "Qual palavra começa com a letra 'S'?",
        alternativas: ["Casa", "Mesa", "Sol", "Flor"],
        correta: 2
    },
    {
        pergunta: "Qual palavra termina com a letra 'A'?",
        alternativas: ["Casa", "Mesa", "Flor", "Sol"],
        correta: 0
    }
];

const questoesPort2 = [
    {
        pergunta: "Qual é a forma correta do verbo 'ser' no presente do indicativo para 'ele'?",
        alternativas: ["É", "Sou", "Somos", "São"],
        correta: 0
    },
    {
        pergunta: "Qual é o particípio do verbo 'escrever'?",
        alternativas: ["Escrevido", "Escrito", "Escreveu", "Escrevia"],
        correta: 1
    },
    {
        pergunta: "Qual dessas opções está no pretérito perfeito do verbo 'cantar'?",
        alternativas: ["Cantei", "Cantava", "Cantaria", "Cantarei"],
        correta: 0
    },
    {
        pergunta: "Qual é a forma correta do verbo 'ir' no futuro do presente para 'nós'?",
        alternativas: ["Vamos", "Iremos", "Fomos", "Íamos"],
        correta: 1
    },
    {
        pergunta: "Qual dessas frases está na voz passiva?",
        alternativas: [
            "Ele escreveu uma carta.",
            "A carta foi escrita por ele.",
            "Ele está escrevendo uma carta.",
            "Ele escreverá uma carta."
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o infinitivo do verbo 'fizeram'?",
        alternativas: ["Fazer", "Fiz", "Fez", "Fazendo"],
        correta: 0
    },
    {
        pergunta: "Qual é a forma correta do verbo 'ver' na 1ª pessoa do singular no presente do indicativo?",
        alternativas: ["Vê", "Vem", "Vejo", "Via"],
        correta: 2
    },
    {
        pergunta: "Qual dessas palavras é um verbo?",
        alternativas: ["Rapidamente", "Andar", "Feliz", "Alegria"],
        correta: 1
    },
    {
        pergunta: "Qual é o gerúndio do verbo 'correr'?",
        alternativas: ["Corre", "Corria", "Correndo", "Correu"],
        correta: 2
    },
    {
        pergunta: "Qual dessas opções está no pretérito imperfeito do verbo 'estar'?",
        alternativas: ["Estive", "Estava", "Estou", "Estará"],
        correta: 1
    }
];

const questoesMat2 = [
    {
        pergunta: "Qual é o valor posicional do algarismo 5 no número 5.432?",
        alternativas: ["Unidade", "Dezena", "Centena", "Milhar"],
        correta: 3
    },
    {
        pergunta: "Quantas dezenas existem no número 120?",
        alternativas: ["1", "2", "12", "120"],
        correta: 2
    },
    {
        pergunta: "Qual é o valor de 7 na unidade de milhar no número 7.890?",
        alternativas: ["7", "700", "7.000", "70.000"],
        correta: 2
    },
    {
        pergunta: "Qual é a soma de 3 centenas e 4 dezenas?",
        alternativas: ["34", "340", "304", "403"],
        correta: 1
    },
    {
        pergunta: "Qual é o número formado por 2 unidades de milhar, 3 centenas e 5 unidades?",
        alternativas: ["235", "2.305", "2.350", "2.503"],
        correta: 1
    },
    {
        pergunta: "Qual número vem imediatamente antes de 1.000?",
        alternativas: ["999", "1.001", "998", "990"],
        correta: 0
    },
    {
        pergunta: "Qual é a decomposição correta do número 4.206?",
        alternativas: [
            "4.000 + 200 + 6",
            "4.000 + 20 + 6",
            "400 + 200 + 6",
            "4.000 + 206"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o maior número de três algarismos?",
        alternativas: ["999", "100", "900", "9999"],
        correta: 0
    },
    {
        pergunta: "O número 5.048 está mais próximo de qual milhar?",
        alternativas: ["5.000", "5.100", "5.050", "4.900"],
        correta: 0
    },
    {
        pergunta: "Qual número é formado por 6 dezenas e 5 unidades?",
        alternativas: ["605", "650", "65", "560"],
        correta: 2
    }
];

const questoesMat1 = [
    {
        pergunta: "Qual é o número que vem depois do 5?",
        alternativas: ["4", "5", "6", "7"],
        correta: 2
    },
    {
        pergunta: "Quantos dedos temos em uma mão?",
        alternativas: ["4", "5", "6", "7"],
        correta: 1
    },
    {
        pergunta: "Qual número está entre 7 e 9?",
        alternativas: ["6", "7", "8", "9"],
        correta: 2
    },
    {
        pergunta: "Qual é o número que vem antes do 10?",
        alternativas: ["8", "9", "10", "11"],
        correta: 1
    },
    {
        pergunta: "Qual é o número que representa 'zero'?",
        alternativas: ["0", "1", "2", "3"],
        correta: 0
    },
    {
        pergunta: "Qual número é maior: 3 ou 5?",
        alternativas: ["3", "5", "São iguais", "Nenhum"],
        correta: 1
    },
    {
        pergunta: "Qual número é menor: 2 ou 4?",
        alternativas: ["2", "4", "São iguais", "Nenhum"],
        correta: 0
    },
    {
        pergunta: "Qual é o número que vem depois do 9?",
        alternativas: ["8", "9", "10", "11"],
        correta: 2
    },
    {
        pergunta: "Quantos lados tem um triângulo?",
        alternativas: ["2", "3", "4", "5"],
        correta: 1
    },
    {
        pergunta: "Qual número está entre 1 e 3?",
        alternativas: ["0", "1", "2", "3"],
        correta: 2
    }
];


let questoesAtuais = [];
let questaoAtual = 0;
let acertos = 0;
let erros = 0;
let alternativaSelecionada = null;

function carregarQuestoes(id) {
    if (id == "port1") {
        questoesAtuais = questoesPort1;
    } else if (id == "mat1") {
        questoesAtuais = questoesMat1;
    } else if (id == "port2") {
        questoesAtuais = questoesPort2;
    } else if (id == "mat2") {
        questoesAtuais = questoesMat2;
    }
    mostrarQuestao();
}

function mostrarQuestao() {
    const questao = questoesAtuais[questaoAtual];
    document.getElementById("question-text").textContent = questao.pergunta;

    const alternativasContainer = document.getElementById("alternatives-container");
    alternativasContainer.innerHTML = questao.alternativas.map((alt, index) => `
        <div class="alternative" data-index="${index}">${alt}</div>
    `).join("");

    document.querySelectorAll(".alternative").forEach(alt => {
        alt.addEventListener("click", () => selecionarAlternativa(alt));
    });

    document.getElementById("continuar-btn").disabled = true;
}

function selecionarAlternativa(alt) {
    document.querySelectorAll(".alternative").forEach(a => a.classList.remove("selected"));
    alt.classList.add("selected");
    alternativaSelecionada = parseInt(alt.dataset.index);
    document.getElementById("continuar-btn").disabled = false;
}

function proximaQuestao() {
    const alternativaCerta = questoesAtuais[questaoAtual].correta;

    document.querySelectorAll(".alternative").forEach((alt, index) => {
        if (index === alternativaCerta) {
            alt.classList.add("correta");
        } else if (index === alternativaSelecionada) {
            alt.classList.add("errada");
        }
    });

    if (alternativaSelecionada === alternativaCerta) {
        acertos++;
    } else {
        erros++;
    }

    setTimeout(() => {
        if (questaoAtual < questoesAtuais.length - 1) {
            questaoAtual++;
            mostrarQuestao();
        } else {
            exibirResultado();
        }
    }, 1000);
}

function exibirResultado() {
    const questionContainer = document.querySelector(".question-container");
    const resultadoContainer = document.getElementById("resultado-container");

    questionContainer.style.display = "none";
    resultadoContainer.style.display = "block";

    const ctx = document.getElementById("grafico").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Acertos", "Erros"],
            datasets: [{
                label: "Desempenho",
                data: [acertos, erros],
                backgroundColor: ["#4CAF50", "#FE0000"]
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const voltarBtnn = document.getElementById("voltar-btnn");
    voltarBtnn.style.display = "block";
    voltarBtnn.addEventListener("click", () => {
        window.location.href = type == "pb" ? "/pbrasil" : "/eja"
    });
}

function reiniciarQuestionario() {
    questaoAtual = 0;
    acertos = 0;
    erros = 0;
    alternativaSelecionada = null;

    document.querySelector(".question-container").style.display = "block";
    document.getElementById("resultado-container").style.display = "none";
    mostrarQuestao();
}

document.getElementById("continuar-btn").addEventListener("click", proximaQuestao);
document.getElementById("reiniciar-btn").addEventListener("click", reiniciarQuestionario);

const questionId = urlParams.get("id");
if (questionId) {
    carregarQuestoes(questionId);
} else {
    alert("ID da questão não encontrado!");
}