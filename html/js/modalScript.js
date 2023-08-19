const Cep = document.querySelector("#cepInputt");
const Numero = document.querySelector("#numeroInputt");
const chkNPN = document.querySelector("#chkNPN");
const botaoFechar = document.querySelector("#updialogbutton");
var desativado = false;

// Valida se todos os inputs estão corretos e então habilita o botão
const habilitarBotao = () => {
  const inputCep = document.querySelector("#cepInputt").value;
  const inputNumero = document.querySelector("#numeroInputt").value;
  if (inputCep.length == 9 && (inputNumero.length >= 1 || desativado == true)) {
    if (validarCep(inputCep)) {
      document.querySelector("#consultDisponibilidade").disabled = false;
      return;
    } else {
      document.querySelector("#consultDisponibilidade").disabled = true;
    }
  } else {
    document.querySelector("#consultDisponibilidade").disabled = true;
  }
};

// Valida se o cep digitado segue o padrão
const validarCep = (cep) => {
  let test = /[0-9]{5}-[0-9]{3}/;
  cep = cep.replace(/^\s+|\s+$/g, "");
  if (test.test(cep)) {
    return true;
  } else {
    return false;
  }
};

// Faz com que ao terminar de digitar o cep, o foco vá para o input de número
Cep.addEventListener("input", () => {
  let inputlength = Cep.value.length;
  if (inputlength === 9) {
    Numero.focus();
  }
});

// Desabilita o input de número ao deixar marcado a chk
const ToggleNum = () => {
  if (chkNPN.checked) {
    desativado = true;
    Numero.disabled = true;
    Numero.value = 0;
  } else {
    desativado = false;
    Numero.disabled = false;
    Numero.value = null;
  }
  habilitarBotao();
};

// Limpa o inputs ao fechar o modal
const Limpar = () => {
  Cep.value = "";
  Numero.value = "";
  chkNPN.checked = false;
  Numero.disabled = false;
};

// Deixa salvo no localStorage o plano selecionado
const Valor = (valor) => {
  if (valor == "39") {
    localStorage.setItem("mega", "75");
    localStorage.setItem("valor", "R$ 39,90");
  } else if (valor == "69") {
    localStorage.setItem("mega", "100");
    localStorage.setItem("valor", "R$ 69,90");
  } else if (valor == "169") {
    localStorage.setItem("mega", "500");
    localStorage.setItem("valor", "R$ 169,90");
  }
};

// permite o click no botão utilizando o enter
const keyboard = (event) => {
  if (event.keyCode === 13 && document.querySelector("#consultDisponibilidade").disabled == false) {
    consultDisponibilidade.click();
  }
};

Cep.addEventListener("keydown", keyboard);
Numero.addEventListener("keydown", keyboard);

// Mascara do Cep
document.addEventListener("DOMContentLoaded", () => {
  new Cleave("#cepInputt", {
    delimiters: ["-"],
    blocks: [5, 3],
    numericOnly: true,
  });
});
