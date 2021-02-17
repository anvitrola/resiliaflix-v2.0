(() => {
  const cadastrar = document.querySelector("#cadUser");
  cadastrar.addEventListener("click", (event) => {
    event.preventDefault()

    let cadastro = document.querySelector("#cadastro")
    let novoUsuario = criaUsuario(cadastro);
    let erro = validaUsuario(novoUsuario);

    if (erro.length > 0) {
      msgErro(erro)
      return
    } else {
      console.log(novoUsuario)
      cadastro.reset();
    }


    let msg = document.querySelector("#msg-erro");
    msg.style.color = "green";
    msg.style.fontSize = "2em";
    msg.innerHTML = "Cadastro realizado com sucesso!";


  })

  function criaUsuario(form) {
    let newUsuario = {
      nome: form.nome.value,
      email: form.email.value,
      senha: form.senha.value,
      repitaSenha: form.repitaSenha.value,
      rg: form.rg.value,
      cep: form.cep.value,
      rua: form.rua.value,
      bairro: form.bairro.value,
      cidade: form.cidade.value,
      estado: form.estado.value,

    }
    return newUsuario
  }

  function validaUsuario(usuario) {
    let erros = [];

    if (usuario.nome.length == 0)
      erros.push("Campo Nome não pode ser em branco")

    if (usuario.email.length == 0)
      erros.push("Campo Email não pode ser em branco")

    if (usuario.senha.length == 0)
      erros.push("Campo Senha não pode ser em branco")

    if (usuario.repitaSenha.length == 0)
      erros.push("Campo RepitaSenha não pode ser em branco")

    if (usuario.rg.length == 0)
      erros.push("Campo RG não pode ser em branco")

    if (usuario.cep.length == 0)
      erros.push("Campo Cep não pode ser em branco")

    if (usuario.rua.length == 0)
      erros.push("Campo Rua não pode ser em branco")

    if (usuario.bairro.length == 0)
      erros.push("Campo Bairro não pode ser em branco")

    if (usuario.cidade.length == 0)
      erros.push("Campo Cidade não pode ser em branco")

    if (usuario.estado.length == 0)
      erros.push("Campo Estado não pode ser em branco")

    if (usuario.senha != usuario.repitaSenha)
      erros.push("As senhas devem ser identicas")


    return erros;
  }

  function msgErro(erro) {
    let msg = document.querySelector("#msg-erro");
    msg.innerHTML = "";

    erro.forEach(function (a) {
      var pErro = document.createElement("li");
      pErro.textContent = a;
      msg.appendChild(pErro)
    });

  }
 
})()

