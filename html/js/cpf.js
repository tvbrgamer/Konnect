/* const dados = document.querySelector("#dados")

dados.addEventListener("submit", el => {
    el.preventDefault()
    pesquisa();
})

const pesquisa = e => {
    let pesquisaCpfv1 = cpf.value.replace("-", "");
    let pesquisaCpf = pesquisaCpfv1.replace(".", "")
    let dataCerta = date.value.replace(/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/, (m, v1, v2, v3) => {
        return `${v3}-${v2}-${v1}`
    })
  const opcoes = {
    method: "get",
    mode: "cors",
    cache: "default",
  };
  fetch(`https://api.infosimples.com/api/v2/consultas/receita-federal/cpf?token=jf0qlgDCT4GqjpoT5eWu6nspBjrUtCbw8iR1iKR2&timeout=600&cpf=${pesquisaCpf}&birthdate=${dataCerta}&origem=web`, opcoes)
    .then((response) => {
      console.log(response)
    })
    .catch((e) => {
      console.log(e.message);
    });
} */
