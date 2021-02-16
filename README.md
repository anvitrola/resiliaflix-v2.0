
# Índice
- [Introdução](#introdução)
- [🤔 Como contribuir?](#como-contribuir)
  - [🤔 fiz um fork como pegar as atualizações?](#como-pegar-atualizações-a-partir-de-um-fork)
  - [🤔 Como fazer o fetch de uma branch que esta apenas no remoto(github)?](#como-fazer-o-fetch-de-uma-branch-no-remoto)
- [📚 Referência](#referência)

# Introdução

A ideia é construi um site de catálogo de filmes, consumindo a api do OMDB e da via CEP, além disse vamos utilizar o bootstrap como ferramenta de apoio.

# Como contribuir

- Primeiro faça um clone do projeto (você deve ser contribuirdor do projeto)

```bash
  git clone https://github.com/leo-tavares/resiliaflix-v2.0.git
```

- Agora crie uma nova branch com o seu nome ou com a feature que você deseja criar/corrigir.
Uma abordagem é o `git branch` + `git switch` 

```bash
  git branch NOME-DA-BRANCH
  git switch NOME-DA-BRANCH
```
Você tambem pode fazer

```bash 
  git checkout -b NOME-DA-BRANCH
```

- Faça **todas** as modificações necessárias e de o commit

```bash 
  git commit -m "implemetação da funcionalidade A"
```

Se você encontrou algua issue relacionado você pode criar um link na tua mensagem de commmit usando '#' seguido pelo numero da issue.
Dessa forma o commit será linkado automaticamente na issue :smiley:

```bash 
  git commit -m "implemetação da funcionalidade A #25"
```

- Após o(s) commit(s), basta enviar as modificações para o servidor

```bash 
  git push origin NOME-DA-BRANCH
```

## Como pegar atualizações a partir de um fork

Se você optou por fazer um fork saiba que ele funciona como um novo repositório, isso quer dizer que o "endereço" do origin é diferente do repositório de origem. 

Uma abordagem interessante é você adicionar uma "remote url", abaixo deixo uma sugestão

```bash 
  git remote add repoOriginal https://github.com/leo-tavares/calculadora-X.git
``` 

agora quando você pode dar pull diretamente do repositorio original.

```bash
  git pull repoOriginal NOME-DA-BRANCH
```

Se você quiser pegar uma atualização do branch main pode fazer algo do tipo

```bash
  git pull repoOriginal main
```

O mesmo se aplica para o push... mas... nesse caso o ideal é fazer um pullrequest... mas se ainda sim você quiser podes fazer algo do tipo

```bash
  git push repoOriginal NOME-DA-BRANCH
```
**O ideal é nunca commitar diretamente na branch main, eu dei um exemplo **

## Como fazer o fetch de uma branch no remoto?

Nesse cenário você quer fazer o fetch da uma branch que esteja **apenas** no repositório remoto, no caso ogithub, para isso vc pode usar o comando.

```bash
git checkout --track origin/nome-da-branch
```

# Referência

[Bootstrap 4.6](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
[OMDB api](http://www.omdbapi.com/)
[via cep](https://viacep.com.br/)
[XmlHttpRequest](https://www.w3schools.com/xml/xml_http.asp)
