let txtMega = document.querySelector("#phMega");
let txtPreco = document.querySelector("#Price");
const cpf = document.querySelector("#cpf");
const email = document.querySelector("#email");
const rg = document.querySelector("#rg");
const nome = document.querySelector("#nome");
const tel = document.querySelector("#tel");
const date = document.querySelector("#data");
const botao = document.querySelector(".botao");

const recuperarDados = () => {
  txtMega.textContent = `${localStorage.getItem("mega")}`;
  txtPreco.innerHTML = `${localStorage.getItem("valor")}`;
};

const validarCpf = (cpf) => {
  let test = /\d+\.\d+\.\d+-\d+/;
  cpf = cpf.replace(/^\s+|$\s+/g, "");
  if (test.test(cpf)) {
    if (verificarCpf(cpf)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

const validarRG = (rg) => {
  let test = /\d+\.\d+\.\d+-\d+/;
  rg = rg.replace(/^\s+|$\s+/g, "");
  if (test.test(rg)) {
    if (verificarRg(rg)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

const validarDate = (date) => {
  let test = /\d+\/\d+\/\d+/;
  if (test.test(date)) {
    return true;
  } else {
    return false;
  }
};

const verificarCpf = (cpf) => {
  let soma = 0;
  let resto;
  let strCpf = cpf.split(".").join("").split("-").join("");

  if (strCpf == "00000000000") {
    return false;
  }

  for (i = 1; i <= 9; i++) {
    soma += parseInt(strCpf.substring(i - 1, i)) * (11 - i);
  }

  resto = (soma * 10) % 11;
  if (resto == 10 || resto == 11) {
    resto = 0;
  }

  if (resto != parseInt(strCpf.substring(9, 10))) {
    return false;
  }

  soma = 0;
  for (i = 1; i <= 10; i++) {
    soma += parseInt(strCpf.substring(i - 1, i)) * (12 - i);
  }
  resto = (soma * 10) % 11;
  if (resto == 10 || resto == 11) {
    resto = 0;
  }
  if (resto != parseInt(strCpf.substring(10, 11))) {
    return false;
  }
  return true;
};

const verificarRg = (rg) => {
  let soma = 0;
  let strRg = rg.split(".").join("").split("-").join("");
  if (strRg == "000000000") {
    return false;
  }
  strRg = strRg.split("");
  for (let i = 7; i >= 0; i--) {
    switch (i) {
      case 7:
        soma += strRg[i] * 9;
        break;
      case 6:
        soma += strRg[i] * 8;
        break;
      case 5:
        soma += strRg[i] * 7;
        break;
      case 4:
        soma += strRg[i] * 6;
        break;
      case 3:
        soma += strRg[i] * 5;
        break;
      case 2:
        soma += strRg[i] * 4;
        break;
      case 1:
        soma += strRg[i] * 3;
        break;
      case 0:
        soma += strRg[i] * 2;
        break;
      default:
        break;
    }
  }
  if ((soma + strRg[8] * 100) % 11 == 0) {
    return true;
  }
  return false;
};

const habilitarBotao = () => {
  if (
    cpf.value.length === 14 &&
    nome.value.length >= 3 &&
    email.value.length >= 3 &&
    rg.value.length === 12
  ) {
    if (
      validarCpf(cpf.value) &&
      validarRG(rg.value) &&
      validarDate(date.value)
    ) {
      document.querySelector(".botao").disabled = false;
      return;
    } else {
      document.querySelector(".botao").disabled = true;
    }
  } else {
    document.querySelector(".botao").disabled = true;
  }
};

date.addEventListener("blur", (e) => {
  date.type = "text";
  date.value = date.value.replace(
    /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/,
    (m, v1, v2, v3) => {
      return `${v3}/${v2}/${v1}`;
    }
  );
  partesData = date.value.split("/");
  let testData = `${partesData[2]}`;
  let dataTest = new Date();
  dataTest = dataTest.toString().split(" ");
  if (dataTest[3] - testData >= 18 && dataTest[3] - testData <= 125) {
    habilitarBotao();
  } else {
    alert("Idade inválida");
    date.value = "";
  }
});

const keyboard = (event) => {
  if (event.keyCode === 13) {
    botao.click();
  }
};

cpf.addEventListener("keypress", keyboard);
email.addEventListener("keypress", keyboard);
rg.addEventListener("keypress", keyboard);
nome.addEventListener("keypress", keyboard);

// Mascára de Cpf

document.addEventListener("DOMContentLoaded", () => {
  new Cleave("#cpf", {
    delimiters: [".", ".", "-"],
    blocks: [3, 3, 3, 2],
    numericOnly: true,
  });
});

//Mascára do RG

document.addEventListener("DOMContentLoaded", () => {
  new Cleave("#rg", {
    delimiters: [".", ".", "-"],
    blocks: [2, 3, 3, 1],
    numericOnly: true,
  });
});

//Mascára do Telefone

document.addEventListener("DOMContentLoaded", () => {
  new Cleave("#tel", {
    delimiters: ["(", ") ", " ", "-"],
    blocks: [0, 2, 1, 4, 4],
    numericOnly: true,
  });
});
