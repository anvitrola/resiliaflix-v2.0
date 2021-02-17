(() => {
  const preencherCep = document.querySelector("#cep");
  preencherCep.addEventListener("focusout", (event) => {
    event.preventDefault()
    let api = new XMLHttpRequest();

    let cep = preencherCep.value.replace(/\D/g, '');

    if (cep != "") {
      let validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        api.open("GET", `https://viacep.com.br/ws/${cep}/json/`);

        api.addEventListener("load", (objeto) => {
          if (objeto.loaded > 20) {
            let novoCep = JSON.parse(api.responseText);
        

            rua.value = novoCep.logradouro;
            bairro.value = novoCep.bairro;
            cidade.value = novoCep.localidade;
            estado.value = novoCep.uf;

          } else {
            limparCampos();
            alert("CEP INVÁLIDO");
          }
        })
        api.send();

      } else {
        alert("FORMATO CEP INVÁLIDO");
      }
    } else {
      limparCampos();
    }
});

  function limparCampos() {
    rua.value = "";
    bairro.value = "";
    cidade.value = "";
    estado.value = "";
  }

})()
