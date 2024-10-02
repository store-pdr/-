document.querySelector(".contato").addEventListener("click", function() {
    window.open("https://wa.me/5524998428760?text=Olá%20Pdr,%20quero%20atualizar%20meu%20guarda-roupa", "_blank");  });


function produtoSelect(){
    window.location.href = "/item001.html"
}


/*
if (cor == 'box-preto') {
    imgProduto[0].src = "imgs/produtos/004.png"
    imgProduto[1].src = "imgs/produtos/007.png"
    imgProduto[2].src = "imgs/produtos/010.png"
    imgProduto[3].src = "imgs/produtos/013.png"
    imgProduto[4].src = "imgs/produtos/016.png"
    imgProduto[5].src = "imgs/produtos/019.png"
    imgProduto[6].src = "imgs/produtos/022.png"
    imgProduto[7].src = "imgs/produtos/028.png"
    imgProduto[8].src = "imgs/produtos/031.png"
}
else if (cor == 'box-bordo') {
    imgProduto[0].src = "imgs/produtos/006.png"
    imgProduto[1].src = "imgs/produtos/009.png"
    imgProduto[2].src = "imgs/produtos/012.png"
    imgProduto[3].src = "imgs/produtos/015.png"
    imgProduto[4].src = "imgs/produtos/018.png"
    imgProduto[5].src = "imgs/produtos/021.png"
    imgProduto[6].src = "imgs/produtos/027.png"
    imgProduto[7].src = "imgs/produtos/030.png"
    imgProduto[8].src = "imgs/produtos/033.png"

}
else if (cor == 'box-azul') {
    imgProduto[0].src = "imgs/produtos/005.png"
    imgProduto[1].src = "imgs/produtos/008.png"
    imgProduto[2].src = "imgs/produtos/011.png"
    imgProduto[3].src = "imgs/produtos/014.png"
    imgProduto[4].src = "imgs/produtos/017.png"
    imgProduto[5].src = "imgs/produtos/020.png"
    imgProduto[6].src = "imgs/produtos/026.png"
    imgProduto[7].src = "imgs/produtos/029.png"
    imgProduto[8].src = "imgs/produtos/032.png"

}
    */

let current = 1; // Índice da div ativa (começando com a segunda)
const boxes = document.querySelectorAll('.box'); // Seleciona todas as divs
let interval; // Variável para armazenar o setInterval
imgProduto = document.querySelectorAll('.imgProduto')

function corAtt(indice) {
    // Usa o índice para determinar o nome da div
    const boxNames = ['box-bordo', 'box-preto', 'box-azul'];
    console.log(`Div com borda: ${boxNames[indice]}`);

    if (indice == 1) {
        imgProduto[0].src = "imgs/produtos/004.png"
        imgProduto[1].src = "imgs/produtos/007.png"
        imgProduto[2].src = "imgs/produtos/010.png"
        imgProduto[3].src = "imgs/produtos/013.png"
        imgProduto[4].src = "imgs/produtos/016.png"
        imgProduto[5].src = "imgs/produtos/019.png"
        imgProduto[6].src = "imgs/produtos/022.png"
        imgProduto[7].src = "imgs/produtos/028.png"
        imgProduto[8].src = "imgs/produtos/031.png"
    }
    else if (indice == 0) {
        imgProduto[0].src = "imgs/produtos/006.png"
        imgProduto[1].src = "imgs/produtos/009.png"
        imgProduto[2].src = "imgs/produtos/012.png"
        imgProduto[3].src = "imgs/produtos/015.png"
        imgProduto[4].src = "imgs/produtos/018.png"
        imgProduto[5].src = "imgs/produtos/021.png"
        imgProduto[6].src = "imgs/produtos/027.png"
        imgProduto[7].src = "imgs/produtos/030.png"
        imgProduto[8].src = "imgs/produtos/033.png"
    
    }
    else if (indice == 2) {
        imgProduto[0].src = "imgs/produtos/005.png"
        imgProduto[1].src = "imgs/produtos/008.png"
        imgProduto[2].src = "imgs/produtos/011.png"
        imgProduto[3].src = "imgs/produtos/014.png"
        imgProduto[4].src = "imgs/produtos/017.png"
        imgProduto[5].src = "imgs/produtos/020.png"
        imgProduto[6].src = "imgs/produtos/026.png"
        imgProduto[7].src = "imgs/produtos/029.png"
        imgProduto[8].src = "imgs/produtos/032.png"
    
    }else{
        console.log("ue " + indice);
        
    }
    
}

function trocarCor(cor) {
    boxes[current].classList.remove('active'); // Remove a classe 'active' da div atual

    // Atualiza o índice com base na cor selecionada
    current = [...boxes].findIndex(box => box.classList.contains(`box-${cor}`));
    
    boxes[current].classList.add('active'); // Adiciona a classe 'active' na nova div
    
    corAtt(current); // Chama a função para atualizar o nome da div
}

function iniciarAnimacao() {
    interval = setInterval(() => {
        trocarCor(['bordo', 'preto', 'azul'][(current + 1) % 3]); // Troca automaticamente a cor
    }, 5000);
}

// Adiciona um event listener para cada div
boxes.forEach(box => {
    box.addEventListener('click', () => {
        clearInterval(interval); // Para a animação ao clicar
        boxes[current].classList.remove('active'); // Remove a classe 'active' da div atual
        
        current = [...boxes].indexOf(box); // Atualiza o índice com a div clicada
        boxes[current].classList.add('active'); // Adiciona a classe 'active' na div clicada
        corAtt(current); // Chama a função para atualizar o nome da div
    });
});

iniciarAnimacao(); // Inicia a animação



function contato() {
    window.open("https://wa.me/5524998428760?text=Olá%20Pdr,%20quero%20atualizar%20meu%20guarda-roupa", "_blank");
}
function reclamação() {
    window.open("https://wa.me/5524998428760?text=Ol%C3%A1%20PDR%2C%20quero%20fazer%20uma%20reclama%C3%A7%C3%A3o", "_blank");
}
function duvida() {
    window.open("https://wa.me/5524998428760?text=Ol%C3%A1%20PDR%2C%20eu%20tenho%20uma%20d%C3%BAvida", "_blank");
}
function erroNoSite() {
    window.open("https://wa.me/5524998428760?text=Ol%C3%A1%20PDR%2C%20achei%20um%20erro%20no%20seu%20site", "_blank");
}