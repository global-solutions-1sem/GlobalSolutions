function mudarTema(tema){
    if(tema == "verde"){
        document.body.style.background =
        "linear-gradient(135deg,#0d3b0d,#1e7d32,#4caf50)";
    } else if(tema == "escuro"){
        document.body.style.background =
        "linear-gradient(135deg,#000,#111,#222)";
    } else {
        document.body.style.background =
        "linear-gradient(135deg,#12002f,#250062,#860063)"
    }   
}


function criarSlideshow(idElemento, imagens, tempo) {

    let indice = 0;

    setInterval(() => {

        indice = (indice + 1) % imagens.length;

        const elemento = document.getElementById(idElemento);

        if (elemento) {
            elemento.src = imagens[indice];
        }

    }, tempo);
}

criarSlideshow("slide", [
    "./icons/campo.png",
    "./icons/agricultura.png",
    "./icons/plantio.png"
], 3000);

criarSlideshow("satSlide", [
    "./icons/satelite.png",
    "./icons/satelite-terra.png",
    "./icons/satelite-agricultura.png"
], 2500); // função pra fazer 2 slideshows para a meia duzia de imagens que estão no projeto
// ele percorre as duas listas de pngs sem parar por causa do setInterval

document.getElementById("formulario").addEventListener("submit", function(e){ // procura o elemento no html

    e.preventDefault(); // impede a pagina de dar F5 toda vez que o usuário pede uma análise

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;

    if(nome === "" || email === ""){ // se for nulo ele vai pedir pro usuário digitar novamente
        document.getElementById("mensagem").textContent =
        "Preencha todos os campos!";
        return;
    }

    document.getElementById("mensagem").textContent =
    "Solicitação enviada com sucesso!";
});

const perguntas = [
{
    pergunta: "Qual tecnologia utilizamos para monitorar as plantações?",
    opcoes: ["IoT", "Satélites", "Bluetooth"],
    correta: 1
},
{
    pergunta: "Qual índice é usado para analisar a vegetação?",
    opcoes: ["NDVI", "HTML", "GPS"],
    correta: 0
},
{
    pergunta: "Qual tecnologia ajuda a interpretar os dados coletados?",
    opcoes: ["IA", "Paint", "Excel"],
    correta: 0
}
];

let indice = 0;
let pontos = 0;

function carregarPergunta(){

    document.getElementById("pergunta").textContent =
        perguntas[indice].pergunta;

    document.getElementById("btn0").textContent =
        perguntas[indice].opcoes[0];

    document.getElementById("btn1").textContent =
        perguntas[indice].opcoes[1];

    document.getElementById("btn2").textContent =
        perguntas[indice].opcoes[2];
}

function responder(opcao){

    if(opcao === perguntas[indice].correta){
        pontos++;
    }

    indice++;

    if(indice < perguntas.length){
        carregarPergunta();
    }else{
        document.getElementById("pontuacao").textContent =
        `Você acertou ${pontos} de ${perguntas.length} questões.`;
    }
}

carregarPergunta();