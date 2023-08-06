const Cep = document.querySelector("#cepInputt")
const Numero = document.querySelector("#numeroInputt")
const chkNPN = document.querySelector("#chkNPN")
const consultAtual = document.querySelector("#consultAtual")

const habilitarBotao = () => {
    const inputCep = document.querySelector("#cepInputt").value
    const inputNumero = document.querySelector("#numeroInputt").value
    if((inputCep.length == 10) && (inputNumero.length >= 1)){
        if (validarCep(inputCep)) {
            document.querySelector("#consultDisponibilidade").disabled = false
            return
        }
    }else{
        document.querySelector("#consultDisponibilidade").disabled = true
    }
}

const validarCep = cep => {
    let test = /^[0-9]{2}\.[0-9]{3}-[0-9]{3}$/
    cep = cep.replace(/^\s+|\s+$/g, '');
    if ((test.test(cep))){
        return true
    } else {
        return false
    }
}

Cep.addEventListener('keypress', () => {
    let inputlength = Cep.value.length

    if(inputlength === 2) {
        Cep.value += "."
    } else if (inputlength === 6) {
        Cep.value += "-"
    }
})

const ToggleNum = () => {
    if (chkNPN.checked) {
        Numero.disabled = true
    } else {
        Numero.disabled = false
    }
}