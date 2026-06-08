function mudarTema(tema) {
    if (tema == "verde") {
        document.body.style.background =
        "linear-gradient(135deg, #061a40, #0b6b4f, #2fbf71)";
    } else if (tema == "escuro") {
        document.body.style.background =
        "linear-gradient(135deg, #020617, #0f172a, #1e293b)";
    } else {
        document.body.style.background =
        "linear-gradient(135deg, #12002f, #250062, #860063)";
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
    pergunta: "Como a economia espacial ajuda diretamente o pequeno agricultor?",
    opcoes: [
      "Enviando sementes modificadas do espaço", 
      "Fornecendo dados de satélite para prever o clima e entender o solo", 
      "Substituindo o trabalho manual por robôs espaciais"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o principal objetivo da nossa solução agrícola?",
    opcoes: [
      "Vender equipamentos caros de alta tecnologia", 
      "Tornar dados complexos de satélite em insights simples e práticos para o produtor", 
      "Substituir os agrônomos na tomada de decisão"
    ],
    correta: 1
  },
  {
    pergunta: "O que o índice NDVI, obtido por imagens de satélite, consegue medir no campo?",
    opcoes: [
      "A saúde e o vigor da vegetação", 
      "A quantidade exata de água nas folhas", 
      "A profundidade das raízes"
    ],
    correta: 0
  },
  {
    pergunta: "Por que a democratização de dados climáticos é importante para a sustentabilidade?",
    opcoes: [
      "Porque ajuda a evitar o desperdício de água e insumos na hora certa", 
      "Porque dita quais culturas são proibidas por lei", 
      "Porque altera o clima da região para favorecer a colheita"
    ],
    correta: 0
  },
  {
    pergunta: "Como dados de satélite podem tornar a agricultura familiar mais lucrativa?",
    opcoes: [
      "Garantindo que o governo compre toda a safra", 
      "Reduzindo perdas na colheita por meio de alertas de geadas ou secas", 
      "Aumentando o preço final dos alimentos artificialmente"
    ],
    correta: 1
  },
  {
    pergunta: "Qual tecnologia é usada para transformar dados complexos de solo e clima em mensagens fáceis de entender?",
    opcoes: [
      "Inteligência Artificial e Processamento de Dados", 
      "Apenas planilhas manuais", 
      "Transmissão de rádio AM/FM"
    ],
    correta: 0
  },
  {
    pergunta: "Além do clima, que tipo de monitoramento do solo os satélites modernos conseguem estimar?",
    opcoes: [
      "A presença de pedras preciosas", 
      "Tendências de umidade e degradação da terra", 
      "A quantidade de minhocas por metro quadrado"
    ],
    correta: 1
  },
  {
    pergunta: "O que significa dizer que uma solução promove a 'agricultura de precisão' para pequenos produtores?",
    opcoes: [
      "Usar recursos como água e fertilizantes na quantidade certa e no lugar certo", 
      "Garantir que todas as plantas tenham exatamente a mesma altura", 
      "Colher a plantação sempre no mesmo minuto todos os anos"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a maior barreira que nossa iniciativa quebra para o pequeno agricultor?",
    opcoes: [
      "O alto custo e a complexidade técnica para entender dados espaciais", 
      "A falta de sementes no mercado tradicional", 
      "A necessidade de comprar tratores autônomos"
    ],
    correta: 0
  },
  {
    pergunta: "De que forma a economia espacial impulsiona a segurança alimentar global?",
    opcoes: [
      "Criando estufas na Lua para produzir alimentos", 
      "Monitorando safras em escala global para prever e mitigar crises de abastecimento", 
      "Controlando as pragas diretamente do espaço usando lasers"
    ],
    correta: 1
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