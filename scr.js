document.querySelector(".contato").addEventListener("click", function() {
    window.open("https://wa.me/5524998428760?text=Olá%20Pdr,%20quero%20atualizar%20meu%20guarda-roupa", "_blank"); 
});

let previewProdutoIMG = document.querySelector(".previewProduto")
let identificadorProduto = ""
function produtoSelect(element){
    document.querySelector(".shadow").style.display = "flex"
    document.querySelector(".shadow").scrollTop = 0;
    const img = element.querySelector('.imgProduto'); // Seleciona a imagem dentro da div
    let enderecoImg = img.src
    console.log(enderecoImg.slice(-7).replace(".png", "")); // Loga a src da imagem no console
    if (enderecoImg.slice(-7).replace(".png", "") == "046" || enderecoImg.slice(-7).replace(".png", "") == "047" || enderecoImg.slice(-7).replace(".png", "") == "048" ) {
        console.log("Muda o preço");
        mudarPreco()
    }
    identificadorProduto = enderecoImg.slice(-7).replace(".png", "")
    previewProdutoIMG.src = enderecoImg.replace("produtos","produtos/imgG").replace("png","jpg")
    controllerLinks(identificadorProduto)
}

fecharProdutoSelect()
function fecharProdutoSelect(){
    document.querySelector(".shadow").style.display = "none"
    voltarPreco()
}

function imageLoaded(img) {
    const loader = img.parentNode.querySelector('.loader');
    loader.style.display = 'none'; // Esconde o loader quando a imagem é carregada
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
    //console.log(`Div com borda: ${boxNames[indice]}`);

    if (indice == 1) {
        //preto
        imgProduto[0].src = "imgs/produtos/004.png"
        imgProduto[1].src = "imgs/produtos/007.png"
        imgProduto[2].src = "imgs/produtos/010.png"
        imgProduto[3].src = "imgs/produtos/013.png"
        imgProduto[4].src = "imgs/produtos/016.png"
        imgProduto[5].src = "imgs/produtos/019.png"
        imgProduto[6].src = "imgs/produtos/022.png"
        // o 025 é o pato lateral, ele não precisa aparecer no feed
        imgProduto[7].src = "imgs/produtos/028.png"
        imgProduto[8].src = "imgs/produtos/031.png"
        imgProduto[9].src = "imgs/produtos/034.png"
        imgProduto[10].src = "imgs/produtos/037.png"
        imgProduto[11].src = "imgs/produtos/040.png"
        imgProduto[12].src = "imgs/produtos/043.png"
        imgProduto[13].src = "imgs/produtos/046.png"
    }
    else if (indice == 0) {
        //Vermelho
        imgProduto[0].src = "imgs/produtos/006.png"
        imgProduto[1].src = "imgs/produtos/009.png"
        imgProduto[2].src = "imgs/produtos/012.png"
        imgProduto[3].src = "imgs/produtos/015.png"
        imgProduto[4].src = "imgs/produtos/018.png"
        imgProduto[5].src = "imgs/produtos/021.png"
        imgProduto[6].src = "imgs/produtos/024.png"
        // o 027 é o pato lateral, ele não precisa aparecer no feed
        imgProduto[7].src = "imgs/produtos/030.png"
        imgProduto[8].src = "imgs/produtos/033.png"
        imgProduto[9].src = "imgs/produtos/036.png"
        imgProduto[10].src = "imgs/produtos/039.png"
        imgProduto[11].src = "imgs/produtos/042.png"
        imgProduto[12].src = "imgs/produtos/045.png"
        imgProduto[13].src = "imgs/produtos/048.png"
    
    }
    else if (indice == 2) {
        //Azul
        imgProduto[0].src = "imgs/produtos/005.png"
        imgProduto[1].src = "imgs/produtos/008.png"
        imgProduto[2].src = "imgs/produtos/011.png"
        imgProduto[3].src = "imgs/produtos/014.png"
        imgProduto[4].src = "imgs/produtos/017.png"
        imgProduto[5].src = "imgs/produtos/020.png"
        imgProduto[6].src = "imgs/produtos/023.png"
        // o 026 é o pato lateral, ele não precisa aparecer no feed
        imgProduto[7].src = "imgs/produtos/029.png"
        imgProduto[8].src = "imgs/produtos/032.png"
        imgProduto[9].src = "imgs/produtos/035.png"
        imgProduto[10].src = "imgs/produtos/038.png"
        imgProduto[11].src = "imgs/produtos/041.png"
        imgProduto[12].src = "imgs/produtos/044.png"
        imgProduto[13].src = "imgs/produtos/047.png"
    
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
function cupom() {
    document.querySelector(".cntrCupom").style.display = "flex"
}
function fecharCupom(){
  document.querySelector(".cntrCupom").style.display = "none"
}
function erroNoSite() {
    window.open("https://wa.me/5524998428760?text=Ol%C3%A1%20PDR%2C%20achei%20um%20erro%20no%20seu%20site", "_blank");
}
function aplicarCupom(){
    for (let i = 0; i < document.querySelectorAll(".precoPost").length; i++) {
      document.querySelectorAll(".precoPost")[i].innerHTML = "R$12,49"
    }
    fecharCupom()
}


let linkProdutoSelecionado = "";

let shpLinkAmorLateral = "a do kanji de amor no peito|https://shopee.com.br/Camisa-streetwear-Amor-Gaara-Naruto-i.311460288.22797909057?sp_atk=c7977eb4-2a49-4d27-9f36-eb91b26d6b00&xptdk=c7977eb4-2a49-4d27-9f36-eb91b26d6b00"
let shpLinkAnos = "a com o ano 1993|https://shopee.com.br/Camisa-Streetwear-unissex-Ano-(mandar-o-numero-no-chat)-i.311460288.23397974056?sp_atk=360a59ed-b75f-43f5-9108-015f2f71ac99&xptdk=360a59ed-b75f-43f5-9108-015f2f71ac99"
let shpLinkAmorCentro = "a do kanji de amor no meio|https://shopee.com.br/Camisa-Streetwear-Amor-Gaara-Naruto-i.311460288.22293432154?sp_atk=8c4d5ecc-f46b-4971-91cf-74109e880ded&xptdk=8c4d5ecc-f46b-4971-91cf-74109e880ded"
let shpLinkArt = "a da ART|https://shopee.com.br/Camisa-Streetwear-unissex-Art-i.311460288.23397974046?sp_atk=615d04ea-e279-4b44-97e8-a0e082088de8&xptdk=615d04ea-e279-4b44-97e8-a0e082088de8"
let shpLinkBerserk = "a do Berserk|https://shopee.com.br/Camisa-Streetwear-Berserk-i.311460288.21399494967?sp_atk=0d9347f9-f7e6-4f1e-b654-3ff40b829998&xptdk=0d9347f9-f7e6-4f1e-b654-3ff40b829998"
let shpLinkChaos = "a do Chaos|https://shopee.com.br/Camisa-streetwear-Chaos-i.311460288.21997926022?sp_atk=0c5983ae-2d81-4afa-8092-268739b6e6f9&xptdk=0c5983ae-2d81-4afa-8092-268739b6e6f9"
let shpLinkVents = "a da Venst|https://shopee.com.br/Camisa-Streetwear-unissex-Vents-i.311460288.19399496219?sp_atk=12126d42-a4f1-43c6-a6f6-e813b31b6cad&xptdk=12126d42-a4f1-43c6-a6f6-e813b31b6cad"
let shpLinkOniMask = "a da mascara de oni|https://shopee.com.br/Camisa-Streetwear-unissex-Mascara-samurai-oni-i.311460288.23493472459?sp_atk=2e1c2618-b328-447a-a24a-6a56f71a5b87&xptdk=2e1c2618-b328-447a-a24a-6a56f71a5b87"
let shpLinkGigantes = "a do GIGANTES|https://shopee.com.br/Camisa-Streetwear-unissex-Gigantes-Bk'-i.311460288.19497923692?sp_atk=b240a922-b0e7-4fd6-a4f5-70304ff8a366&xptdk=b240a922-b0e7-4fd6-a4f5-70304ff8a366"
let shpLink777 = "a dos numeros lá, quero uma com 777|https://shopee.com.br/Camisa-Streetwear-unissex-n%C3%BAmeros-(mandar-no-chat-qual-numero)-i.311460288.22093441993?sp_atk=de054026-5378-4c88-a02f-8720e56e9bc9&xptdk=de054026-5378-4c88-a02f-8720e56e9bc9"
let shpLinkEspadas = "a das espadas lá, quero uma com as chamas roxas|https://shopee.com.br/Camisa-Streetwear-Unissex-Espadas-(escolher-a-cor-das-chamas-pelo-chat)-i.311460288.18497981834?sp_atk=bd2db218-42f0-4def-b0fb-b43281aa85b2&xptdk=bd2db218-42f0-4def-b0fb-b43281aa85b2"
let shpLinkFebreGrande = "a do FEBRE90S|https://shopee.com.br/product/311460288/22793480504/"
let shpLinkPatoCentro = "a do pato do FEBRE90S no meio|https://shopee.com.br/Camisa-Streetwear-Unissex-Febre90s-Pumapjl-SonoTWS-i.311460288.22997976677?sp_atk=effe7532-52e7-45d1-8a9b-4e8ae62824f0&xptdk=effe7532-52e7-45d1-8a9b-4e8ae62824f0"
let shpLinkPatoLateral = "a do pato do FEBRE90S no peito|https://shopee.com.br/Camisa-Streetwear-Unissex-Febre90s-Pumapjl-SonoTWS-i.311460288.23097971615?sp_atk=b51070c0-cac3-439a-a6e3-364d4ce56a8d&xptdk=b51070c0-cac3-439a-a6e3-364d4ce56a8d"
let shpLinkFebreCostas = "a do FEBRE90S nas costas, quero com a estampa do pato na frente|https://shopee.com.br/Camisa-Streetwear-Unissex-Febre90s-Pumapjl-SonoTWS-i.311460288.22793480504?sp_atk=2693614d-2363-4da5-b5a1-eae1287cce9c&xptdk=2693614d-2363-4da5-b5a1-eae1287cce9c"

let shpLinkNike = "a da NIKE refletiva|linkNike"



const links = {
// amor lateral
  "001": shpLinkAmorLateral,
  "002": shpLinkAmorLateral,
  "003": shpLinkAmorLateral,
  
// 2003
  "004": shpLinkAnos,
  "005": shpLinkAnos,
  "006": shpLinkAnos,
  
// amor centro
  "007": shpLinkAmorCentro,
  "008": shpLinkAmorCentro,
  "009": shpLinkAmorCentro,
  
// arte
  "010": shpLinkArt,
  "011": shpLinkArt,
  "012": shpLinkArt,
  
// berserk
  "013": shpLinkBerserk,
  "014": shpLinkBerserk,
  "015": shpLinkBerserk,
  
// chaos
  "016": shpLinkChaos,
  "017": shpLinkChaos,
  "018": shpLinkChaos,
  
// Febre grande no peito
  "019": shpLinkFebreGrande,
  "020": shpLinkFebreGrande,
  "021": shpLinkFebreGrande,
  
// Pato no centro
  "022": shpLinkPatoCentro,
  "023": shpLinkPatoCentro,
  "024": shpLinkPatoCentro,
  
// Pato na lateral
  "025": shpLinkPatoLateral,
  "026": shpLinkPatoLateral,
  "027": shpLinkPatoLateral,
  
// Nike
  "028": shpLinkNike,
  "029": shpLinkNike,
  "030": shpLinkNike,
  
// Vents
  "031": shpLinkVents,
  "032": shpLinkVents,
  "033": shpLinkVents,
  
// Oni mask
  "034": shpLinkOniMask,
  "035": shpLinkOniMask,
  "036": shpLinkOniMask,
  
// gigantes
  "037": shpLinkGigantes,
  "038": shpLinkGigantes,
  "039": shpLinkGigantes,
  
// 777
  "040": shpLink777,
  "041": shpLink777,
  "042": shpLink777,
  
// Espadas
  "043": shpLinkEspadas,
  "044": shpLinkEspadas,
  "045": shpLinkEspadas,
  
// Febre nas costas
  "046": shpLinkFebreCostas,
  "047": shpLinkFebreCostas,
  "048": shpLinkFebreCostas
};

function controllerLinks(identificador) {
  linkProdutoSelecionado = links[identificador] || "";
}

function comprarPelaShp(){
    window.open(linkProdutoSelecionado.split("|")[1])
}
function comprarPeloWpp(){
    //window.open(linkProdutoSelecionado.split(" | ")[0])
    window.open('https://wa.me/5524998428760?text=Ol%C3%A1%20PDR%2C%20quero%20comprar%20a%20camisa%20mais%20linda%20que%20vc%20tem%20(' + linkProdutoSelecionado.split("|")[0] + ')');
    
}

//https://wa.me/5524998428760?text=Ol%C3%A1%20PDR%2C%20quero%20comprar%20a%20camisa%20mais%20linda%20que%20vc%20tem%20(camisa)


function mudarPreco(){
    document.querySelector(".textPrecoWpp").innerHTML = document.querySelector(".textPrecoWpp").innerHTML.replace("24", "29")
    document.querySelector(".textPrecoShop").innerHTML = document.querySelector(".textPrecoShop").innerHTML.replace("34", "39")
    
}
function voltarPreco(){
    if (document.querySelector(".textPrecoWpp").innerHTML.includes("29")) {
        document.querySelector(".textPrecoWpp").innerHTML = document.querySelector(".textPrecoWpp").innerHTML.replace("29", "24");
    }
    
    if (document.querySelector(".textPrecoShop").innerHTML.includes("39")) {
        document.querySelector(".textPrecoShop").innerHTML = document.querySelector(".textPrecoShop").innerHTML.replace("39", "34");
    }
}