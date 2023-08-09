const consultDisponibilidade = document.querySelector("#consultDisponibilidade");
const cep = document.querySelector("#cepInputt");
const num = document.querySelector("#numeroInputt");


/*
const success = (pos) => {
  localStorage.setItem("latitude", pos.coords.latitude);
  localStorage.setItem("longitude", pos.coords.longitude);
  window.location.href = "./cadastro.html";
};
const error = (err) => console.log(err.code);

const watchID = () => {
  navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 10000,
  });
}; */



// Meu orgulho 🤠
consultDisponibilidade.addEventListener("click", (e) => {
  let pesquisaCep = cep.value.replace("-", "");
  const opcoes = {
    method: "get",
    mode: "cors",
    cache: "default",
  };
  fetch(`https://viacep.com.br/ws/${pesquisaCep}/json/`, opcoes)
    .then((response) => {
      response.json().then((data) => {
        if (!data.erro) {
          localStorage.setItem("endereco", data);
          localStorage.setItem("numero", num.value);
          window.location.href = "./cadastro.html";
        } else {
          alert("Deu erro paizao!");
        }
      });
    })
    .catch((e) => {
      console.log(e.message);
    });
});
