let $$ = document.getElementById.bind(document);

let recuperacaoContainer = $$('container-fluid');
let recuperacaoBotao = $$('recuperacao__botao');
let recuperacaoInput = $$('recuperacao__input');
let recuperacaoForm = $$('recuperacao__formulario');
let recuperacaoMsgErro = $$('recuperacao__submit-msg-erro');

recuperacaoBotao.addEventListener('click', function (event) {
    event.preventDefault();
    mudaMensagem();
});

function mudaMensagem() {
    let inputArray = recuperacaoInput.value.split('@');
    if (inputArray.length == 2) {
        let recuperacaoSubmitMsg = document.createElement('h4');
        recuperacaoSubmitMsg.textContent = "Enviamos um código para o e-mail inserido. Clique no link enviado e recupere o acesso à sua conta! ;)"
        recuperacaoContainer.textContent = "";
        recuperacaoContainer.appendChild(recuperacaoSubmitMsg);
    } else{
        recuperacaoMsgErro.classList.remove('d-none');
    }
}

