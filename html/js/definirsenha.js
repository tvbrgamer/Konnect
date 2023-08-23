let txtMega = document.querySelector("#phMega");
let txtPreco = document.querySelector("#Price");
const senha = document.querySelector("#Senha");
const confirmaSenha = document.querySelector("#confirmaSenha");

//* Recupera os dados referentes ao plano escolhido e o preço
const recuperarDados = () => {
  txtMega.textContent = `${localStorage.getItem("mega")}`;
  txtPreco.innerHTML = `${localStorage.getItem("valor")}`;
};

//* Valida se ambos os inputs coincidem e então habilita o botão
const habilitarBotaos = () => {
  if (senha.value == confirmaSenha.value && senha.value != "") {
    document.querySelector("#avancar").disabled = false;
    return;
  } else {
    document.querySelector("#avancar").disabled = true;
  }
};
