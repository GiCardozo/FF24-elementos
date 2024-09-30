// // Selecionando a div pelo ID
// let div =
// document.getElementById('meuDiv');

// // Selecionando todos os parágrafos com a classe "paragrafo"
// let paragrafos = 
// document.getElementsByClassName('paragrafo');

// // Selacionando o primeiro parágrafo com a classe "paragrafo"
// let primeiroParagrafo =
// document.querySelector('.paragrafo');

// // Selecionando todos os parágrafos dentro da div
// let paragrafoDentroDiv =
// document.querySelectorAll('#meuDiv p');

// // Funções para os eventos
// function aoClicar() {
//     alert('Você clicou no botão!');
// }
// function aoPerderFoco() {
//     alert('Você saiu do campo!');
// }

// // Selecionando o elemento usando querySelector
// let campo = document.querySelector('#meuCampo');
// let botao = document.querySelector('.btnCampo');

// // Adicionando os eventos
// campo.addEventListener('blur', aoPerderFoco);
// botao.addEventListener('click', aoClicar);

function aoClicar() {
    let campo = document.querySelector('#meuCampo');
    let valorDigitado = campo.value;
    alert('Você clicou! E está escrito: "' + valorDigitado + '"');
}

let botao = document.querySelector('.btnExibaValor');
botao.addEventListener('click', aoClicar);