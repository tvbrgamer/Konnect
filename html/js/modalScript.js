const Cep = document.querySelector("#cepInputt");
const Numero = document.querySelector("#numeroInputt");
const chkNPN = document.querySelector("#chkNPN");
const botaoFechar = document.querySelector("#updialogbutton");

const habilitarBotao = () => {
  const inputCep = document.querySelector("#cepInputt").value;
  const inputNumero = document.querySelector("#numeroInputt").value;
  if (inputCep.length == 9 && inputNumero.length >= 1) {
    if (validarCep(inputCep)) {
      document.querySelector("#consultDisponibilidade").disabled = false;
      return;
    }
  } else {
    document.querySelector("#consultDisponibilidade").disabled = true;
  }
};

const validarCep = (cep) => {
  let test = /^[0-9]{5}-[0-9]{3}$/;
  cep = cep.replace(/^\s+|\s+$/g, "");
  if (test.test(cep)) {
    return true;
  } else {
    return false;
  }
};

Cep.addEventListener("input", () => {
  let inputlength = Cep.value.length;

  if (inputlength === 5) {
    Cep.value += "-";
  } else if (inputlength === 9){
    Numero.focus();
  }
});

const ToggleNum = () => {
  if (chkNPN.checked) {
    Numero.disabled = true;
    Numero.value = 0;
  } else {
    Numero.disabled = false;
  }
};

const Limpar = () => {
  Cep.value = "";
  Numero.value = "";
};

const Valor = valor => {
    if (valor == "39"){
        localStorage.setItem("mega", "75")
        localStorage.setItem("valor", "R$ 39,90")
    } else if (valor == "69") {
        localStorage.setItem("mega", "100")
        localStorage.setItem("valor", "R$ 69,90")
    } else if (valor == "169") {
        localStorage.setItem("mega", "500")
        localStorage.setItem("valor", "R$ 169,90")
    }
}

const keyboard = (event) => {
  if(event.keyCode === 13) {
    consultDisponibilidade.click();
  }
}

Cep.addEventListener('keypress', keyboard)
Numero.addEventListener('keypress', keyboard)