var txtMega = document.querySelector("#phMega");
var txtPreco = document.querySelector("#Price");






const recuperarDados = () => {
    txtMega.textContent = `${localStorage.getItem("mega")}`
    txtPreco.innerHTML = `${localStorage.getItem("valor")}`
}