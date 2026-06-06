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