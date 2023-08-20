const consultDisponibilidade = document.querySelector("#consultDisponibilidade");
let effect = document.querySelector(".effect-8~.focus-border");

// Meu orgulho 🤠 -> A partir do Cep informado, utiliza a web api Viacep para achar o endereço
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
            effect.style.setProperty("--effectwow", "red");
            Cep.title = "CEP inválido";
            Cep.value = "";
            habilitarBotaom();
            Cep.focus();
          }
        });
      })
      .catch((e) => {
        console.log(e.message);
        effect.style.setProperty("--effectwow", "red");
        Cep.title = "Insira um CEP";
        habilitarBotaom();
        Cep.focus();
      });
  } else {
    alert("Acesso Concedido");
    window.location.href = "./cadastro.html";
  }
});
