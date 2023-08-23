let txtMega = document.querySelector("#phMega");
let txtPreco = document.querySelector("#Price");
const endereco = JSON.parse(localStorage.getItem("endereco"));
const complemento = document.querySelector("#complemento");
console.log(endereco);

//* Recupera os dados referentes ao plano escolhido e o preço
const recuperarDados = () => {
  txtMega.textContent = `${localStorage.getItem("mega")}`;
  txtPreco.innerHTML = `${localStorage.getItem("valor")}`;
};
