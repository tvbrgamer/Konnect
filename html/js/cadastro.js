
let txtMega = document.querySelector("#phMega");
let txtPreco = document.querySelector("#Price");
const cpf = document.querySelector("#cpf");
const email = document.querySelector("#email");
const rg = document.querySelector("#rg")
const nome = document.querySelector("#nome");
const tel = document.querySelector("#tel")
const date = document.querySelector("#data");
const botao = document.querySelector(".botao");

const recuperarDados = () => {
    txtMega.textContent = `${localStorage.getItem("mega")}`
    txtPreco.innerHTML = `${localStorage.getItem("valor")}`
}

const validarCpf = cpf => {
    let test = /\d+\.\d+\.\d+-\d+/
    cpf = cpf.replace(/^\s+|$\s+/g, "")
    if(test.test(cpf)){
        return true
    }else {
        return false
    }
}

const validarDate = date => {
    let test = /\d+\/\d+\/\d+/
    if(test.test(date)) {
        return true
    } else {
        return false
    }
}

const habilitarBotao = () => {
    if (cpf.value.length === 14 && nome.value.length >= 3 && email.value.length === 3 && rg.value.length === 12) {
        if((validarCpf(cpf.value)) && (validarCpf(rg.value)) && (validarDate(date.value))) {
            document.querySelector(".botao").disabled = false
            return;
        } else {
            document.querySelector(".botao").disabled = true
        }
    } else {
        document.querySelector(".botao").disabled = true
    }
}

const Cpfmask = () => {
    apenasNumeros(cpf)
    let cpflength = cpf.value.length
    // xxx.xxx.xxx-xx
    if (cpflength === 3 || cpflength === 7){
        cpf.value += ".";
    } else if (cpflength === 11) {
        cpf.value += "-"
    }
}

const rgMask = () => {
    apenasNumeros(rg)
    let rgLength = rg.value.length
    // xx.xxx.xxx-x
    if (rgLength === 2 || rgLength === 6) {
        rg.value += "."
    } else if (rgLength === 10) {
        rg.value += "-"
    }
}

date.addEventListener('blur', e => {
    date.type = 'text'
    date.value = date.value.replace(/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/, (m, v1, v2, v3) => {
        return `${v3}/${v2}/${v1}`
    })
    partesData = date.value.split("/");
    let testData = `${partesData[2]}`
    let dataTest = new Date();
    dataTest = dataTest.toString().split(" ")
    if ((dataTest[3] - testData) >= 18 && (dataTest[3] - testData) <= 100) {
        habilitarBotao()
    } else {
        alert("Idade inválida")
        date.value = ""
    }
})
