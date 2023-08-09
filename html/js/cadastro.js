let txtMega = document.querySelector("#phMega");
let txtPreco = document.querySelector("#Price");
const cpf = document.querySelector("#cpf");

const recuperarDados = () => {
    txtMega.textContent = `${localStorage.getItem("mega")}`
    txtPreco.innerHTML = `${localStorage.getItem("valor")}`
}

const validarCpf = (cpf) => {
    let test = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/
    cpf = cpf.replace(/^\s+|$\s+/g, "")
    if(test.test(cpf)){
        return true
    }else {
        return false
    }
}