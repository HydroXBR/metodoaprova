const materias = [
    "portugues", "matematica", "historia", "geografia", "biologia", "redacao", "fisica", "quimica"
];

const conteudos = {
    portugues: [
        { tipo: "conteudo", nome: "Verbo", content: "/src?id=port1&format=docx", exercise: "questions?id=port1" },
        { tipo: "conteudo", nome: "Gêneros Orais", content: "/src?id=port2&format=docx", exercise: "questions?id=port2" },
        { tipo: "conteudo", nome: "Compreensão em Leitura", content: "/src?id=port3&format=pdf", exercise: "questions?id=port3" },
        { tipo: "conteudo", nome: "Planejamento de Texto / Progressão Temática e Paragrafação", content: "/src?id=port4&format=pdf", exercise: "questions?id=port4" },
        { tipo: "conteudo", nome: "Análise Linguística / Semiótica (Ortografização)", content: "/src?id=port5&format=pdf", exercise: "questions?id=port5" },
        { tipo: "conteudo", nome: "Morfologia", content: "/src?id=port6&format=pdf", exercise: "questions?id=port6" }
    ],
    matematica: [
        { tipo: "conteudo", nome: "Sistema Decimal - Números", content: "/src?id=mat1&format=docx", exercise: "questions?id=mat1" },
        { tipo: "conteudo", nome: "Operações Fundamentais - Adição e Subtração", content: "/src?id=mat2&format=docx", exercise: "questions?id=mat2" },
        { tipo: "conteudo", nome: "Multiplicação e Divisão", content: "/src?id=mat3&format=pdf", exercise: "questions?id=mat3" },
        { tipo: "conteudo", nome: "Frações e Números Decimais", content: "/src?id=mat4&format=pdf", exercise: "questions?id=mat4" },
        { tipo: "conteudo", nome: "Geometria - Figuras Planas e Sólidas", content: "/src?id=mat5&format=pdf", exercise: "questions?id=mat5" },
        { tipo: "conteudo", nome: "Medidas de Tempo e Comprimento", content: "/src?id=mat6&format=pdf", exercise: "questions?id=mat6" }
    ],
    geografia: [
        { tipo: "video", nome: "Tocantins - Geografia Geral", content: "/aula?id=geo1", exercise: "questions?id=geo1" },
        {
            tipo: "conteudo",
            nome: "Formação Territorial e Histórica do Tocantins",
            content: "#",
            exercise: "questions?id=geo1"
        },
        {
            tipo: "conteudo",
            nome: "Características Físicas e Biomas Tocantinenses (Cerrado e Transição Amazônica)",
            content: "#",
            exercise: "questions?id=geo1"
        },
        {
            tipo: "conteudo",
            nome: "Bacia Hidrográfica do Tocantins-Araguaia e seus Afluentes",
            content: "#",
            exercise: "questions?id=geo1"
        },
        {
            tipo: "conteudo",
            nome: "Clima e Vegetação: Particularidades do Cerrado Tocantinense",
            content: "#",
            exercise: "questions?id=geo1"
        },
        {
            tipo: "conteudo",
            nome: "Urbanização e Hierarquia Urbana no Tocantins",
            content: "#",
            exercise: "questions?id=geo1"
        },
        {
            tipo: "conteudo",
            nome: "Dinâmicas Populacionais e Migratórias no Estado",
            content: "#",
            exercise: "questions?id=geo1"
        },
        {
            tipo: "conteudo",
            nome: "Atividades Econômicas: Agricultura, Pecuária e Mineração",
            content: "#",
            exercise: "questions?id=geo1"
        },
        {
            tipo: "conteudo",
            nome: "Infraestrutura e Logística: Rodovias, Hidrovias e Ferrovias",
            content: "#",
            exercise: "questions?id=geo1"
        },
        {
            tipo: "conteudo",
            nome: "Questões Ambientais: Desmatamento e Unidades de Conservação",
            content: "#",
            exercise: "questions?id=geo1"
        },
        {
            tipo: "conteudo",
            nome: "Cultura e Identidade Regional Tocantinense",
            content: "#",
            exercise: "questions?id=geo1"
        }
    ]
};

const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get("type");


function criarGradeMaterias() {
    const gradeMaterias = document.getElementById("grade-materias");
    const voltarLink = document.getElementById("voltar");

    voltarLink.href = (type === "pb")
    ? "/pbrasil"
    : "/tocantins";

    voltarLink.style.display = "none";
    voltarLink.dataset.context = "materias";

    const materiasExibidas = (type === "pb")
        ? materias.filter(materia => materia === "portugues" || materia === "matematica")
        : materias;

    gradeMaterias.innerHTML = materiasExibidas.map(materia => `
        <div class="materia-card" data-materia="${materia}">
            <img src="/src?id=${materia}tocantins&format=png" alt="${materia}">
        </div>
    `).join("");

    document.querySelectorAll(".materia-card").forEach(card => {
        card.addEventListener("click", () => carregarConteudos(card.dataset.materia));
    });
}

function carregarConteudos(materia) {
    const conteudosMateria = document.getElementById("conteudos-materia");
    const gradeMaterias = document.getElementById("grade-materias");
    const voltarLink = document.getElementById("voltar");

    conteudosMateria.innerHTML = "";

    gradeMaterias.style.display = "none";
    conteudosMateria.style.display = "grid";
    conteudosMateria.style["grid-template-columns"] = "repeat(3, 1fr);"
    voltarLink.style.display = "inline"; 
    voltarLink.dataset.context = "conteudos";

    if (conteudos[materia]) {
        conteudosMateria.innerHTML = conteudos[materia].map(item => `
            <div class="conteudo-card">
                <img src="/src?id=geoaula&format=png"">
                <a href="${item.content}" target="_blank">${item.nome}</a>
                <a href="${type == "pb" ? `${item.exercise}&type=pb` : item.exercise}" target="_blank">Exercícios</a>
            </div>
        `).join("");
    } else {
        conteudosMateria.innerHTML = "<p>Nenhum conteúdo disponível para esta matéria.</p>";
    }
}


function voltar() {
    const conteudosMateria = document.getElementById("conteudos-materia");
    const gradeMaterias = document.getElementById("grade-materias");
    const voltarLink = document.getElementById("voltar");

    if (voltarLink.dataset.context === "conteudos") {
        conteudosMateria.innerHTML = "";
        gradeMaterias.style.display = "grid";
        conteudosMateria.style.display = "none";
        voltarLink.dataset.context = "materias";
    } else {
        window.location.href = (type === "pb")
        ? "/pbrasil"
        : "/tocantins";
    }
}

document.getElementById("voltar").addEventListener("click", (event) => {
    event.preventDefault();
    voltar();
});

document.addEventListener("DOMContentLoaded", criarGradeMaterias);
