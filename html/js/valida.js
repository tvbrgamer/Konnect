// Verifica se na string existe algum número ou símbolo
const apenasLetras = (e) => {
  let test = /([0-9]+)|(\/+)|(\*+)|(-+)|(\(+)|(\)+)|(&+)|(¨+)|(%+)|(\$+)|(#+)|(@+)|(!+)|("+)|('+)|({+)|(}+)|(\^+)|(`+)|(~+)|(´+)|(\?+)|(:+)|(;+)|(>+)|(<+)|(\.+)|(,+)|(\|+)|(\\+)|(=+)|(_+)|(\++)/;
  e.value = e.value.replace(/^\s+|$\s+/g, "");
  if (test.test(e.value)) {
    e.value = e.value.replace(/([0-9]+)|(\/+)|(\*+)|(-+)|(\(+)|(\)+)|(&+)|(¨+)|(%+)|(\$+)|(#+)|(@+)|(!+)|("+)|('+)|({+)|(}+)|(\^+)|(`+)|(~+)|(´+)|(\?+)|(:+)|(;+)|(>+)|(<+)|(\.+)|(,+)|(\|+)|(\\+)|(=+)|(_+)|(\++)/, "");
  }
};

// Verifica se na string existe alguma letra
const apenasNumeros = (e) => {
  let test = /[a-zA-Z]+/;
  e.value = e.value.replace(/^\s+|$\s+/g, "");
  if (test.test(e.value)) {
    e.value = e.value.replace(/[a-zA-Z]+/, "");
  }
};
