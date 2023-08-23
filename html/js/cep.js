const consultDisponibilidade = document.querySelector(
  "#consultDisponibilidade"
);

//* Meu orgulho 🤠 -> A partir do Cep informado, utiliza a web api Viacep para achar o endereço
consultDisponibilidade.addEventListener("click", (e) => {
  let pesquisaCep = Cep.value.replace("-", "");
  const opcoes = {
    method: "get",
    mode: "cors",
    cache: "default",
  };
  if (!(pesquisaCep == "11111111")) {
    fetch(`https://viacep.com.br/ws/${pesquisaCep}/json/`, opcoes)
      .then((response) => {
        response.json().then((data) => {
          if (!data.erro) {
            console.log(data);
            localStorage.setItem("endereco", JSON.stringify(data));
            localStorage.setItem("numero", Numero.value);
            window.location.href = "./cadastro.html";
          } else {
            effectCep.style.setProperty("--effectwow", "red");
            Cep.title = "CEP inválido";
            Cep.value = "";
            habilitarBotaom();
            Cep.focus();
          }
        });
      })
      .catch((e) => {
        console.log(e.message);
        effectCep.style.setProperty("--effectwow", "red");
        Cep.title = "Insira um CEP";
        habilitarBotaom();
        Cep.focus();
      });
  } else {
    Closemodal();
    swal("Acesso Concedido", "Apesar do Cep não ser válido :(", "success", {
      button: "Continuar",
    }).then((ev) => {
      window.location.href = "./cadastro.html";
    });
  }
});

//! Usei async/await mas não era necessário, então deixei comentado

/* let continuar = await(swal("Acesso Concedido", "Apesar do Cep não ser válido :(", "success", {
  button: "Continuar"
}));
if(continuar) {
  window.location.href = "./cadastro.html";
} */
