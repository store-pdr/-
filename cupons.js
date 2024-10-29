let chaveVerifyCupom = false



document.querySelector('.btnAplicarCupom').addEventListener('click', function() {
    
});



// Função para salvar os dados no localStorage
function saveData(inputId) {
    const value = document.getElementById(inputId).value;
    localStorage.setItem(inputId, value);
}


let chaveVerifyNome = false
let chaveVerifyEmail = false
let chaveVerifyWpp = false

const cupomOn = ['^lQaA^)M', '#Bxycae1', 'H#df6QFF', 'u9xk#NXP'];
const cuponsResgatados = ['Spl^n9%d', '4TQ^a!lD', 'U5GXWBMa', 'k@NQFWXI'];

// Função para verificar o nome e exibir alertas apropriados
function verifyCupom() {
    const cupomInput = document.getElementById('cupom').value.trim(); // Obtém o valor do input e remove espaços em branco


    // Verifica se o input está vazio
    if (cupomInput === "") {
        alert("Por favor, insira um código de cupom.");
        chaveVerifyCupom = false
        return; // Para a execução da função caso o input esteja vazio
    }

    // Verifica se o cupom está nos arrays
    if (cupomOn.includes(cupomInput)) {
        //alert("Cupom válido e ativo!");
        chaveVerifyCupom = true
        liberarBtn();


    } else if (cuponsResgatados.includes(cupomInput)) {
        alert("Este cupom já foi resgatado.");
        chaveVerifyCupom = false

    } else {
        alert("Cupom inválido.");
        chaveVerifyCupom = false

    }

}





function verifyNome() {
    const nome = document.getElementById('nomeCupom').value.trim(); // Usa trim() para remover espaços em branco no início e no final
    
    // Verifica se o nome está vazio
    if (nome.length === 0) {
        chaveVerifyNome = false;
    }
    // Verifica se o nome tem menos de 3 letras
    else if (nome.length < 3) {
        alert("O nome deve ter mais de 3 letras.");
        chaveVerifyNome = false;
    }
    // Verifica se o nome termina com espaço
    else if (nome[nome.length - 1] === ' ') {
        alert("O nome não pode terminar com espaço.");
        chaveVerifyNome = false;
    } 
    // Se o nome for válido
    else {
        chaveVerifyNome = true;
    }
    liberarBtn();
}




// Função para verificar se o e-mail é válido e exibir alertas apropriados
function verifyEmail() {
    const email = document.getElementById('emailCupom').value.trim(); // Remove espaços em branco
    const emailRegex = /^[a-z0-9._%+-]{5,}@[a-z0-9.-]+\.com$/i;

    // Verifica se o campo está vazio
    if (email.length === 0) {
        chaveVerifyEmail = false;
    }
    // Verifica se o e-mail é válido
    else if (emailRegex.test(email)) {
        chaveVerifyEmail = true;
    } else {
        chaveVerifyEmail = false;

        // Mensagens específicas para diferentes erros
        if (!email.includes('@')) {
            alert("Email inválido (falta o '@').");
        } else if (!email.endsWith('.com')) {
            alert("Email inválido (deve terminar com '.com').");
        } else {
            alert("Email inválido (verifique o formato).");
        }
    }
    
    liberarBtn();
}






// Função para verificar se o número de WhatsApp é válido e exibir alerta "WhatsApp ok"
function verifyWhatsApp() {
    const wpp = document.getElementById('wppCupom').value;
    // Expressão regular para validar o formato do número brasileiro (DD + 9 dígitos)
    const wppRegex = /^\(?\d{2}\)?\s?\d{5}-?\d{4}$/;

    // Verifica se o campo está vazio
    if (wpp.length === 0) {
        chaveVerifyWpp = false;
    } 
    // Verifica se o número é válido
    else if (wppRegex.test(wpp)) {
        chaveVerifyWpp = true
    } else {
        chaveVerifyWpp = false
        alert("WhatsApp inválido");
    }
    liberarBtn();

}


function formatPhone(input) {
    // Remove todos os caracteres não numéricos
    const value = input.value.replace(/\D/g, '');

    // Aplica a máscara
    const formattedValue = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

    // Atualiza o campo de entrada com o valor formatado
    input.value = formattedValue;
}


// Função para carregar os dados salvos
function loadData() {
    const inputs = ['nomeCupom', 'emailCupom', 'wppCupom'];
    inputs.forEach(inputId => {
        const savedValue = localStorage.getItem(inputId);
        if (savedValue) {
            document.getElementById(inputId).value = savedValue;
        }
    });
}

// Chama a função para carregar os dados quando a página é carregada
window.onload = function() {
    loadData();
    verifyNome();
    verifyEmail();
    verifyWhatsApp();
};

let btnAplicarCupom = document.querySelector(".btnAplicarCupom")
btnAplicarCupom.disabled = true

function liberarBtn(){
    
    if (chaveVerifyNome == true && chaveVerifyEmail == true && chaveVerifyWpp == true && chaveVerifyCupom == true) {
        btnAplicarCupom.style.backgroundColor = '#6e0ad6'
        btnAplicarCupom.disabled = false
    }else{
        btnAplicarCupom.style.backgroundColor = '#999'
        btnAplicarCupom.disabled = true

    }
}


function aplicarCupom(){
    alert("Cupom aplicado com sucesso, o valor será decontado na hora do pagamento!")
    
    fecharCupom()
}
