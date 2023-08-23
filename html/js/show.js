const senha = document.getElementById("senhaInput");
const olha = document.getElementById("olho");

var hidden = true;

//* Modifica a imagem do "olhinho" (show/hide password)
olha.addEventListener("click", () => {
  if (hidden == true) {
    senha.type = "text";
    hidden = false;
    olha.style.backgroundImage = "url(./imagens/hidden.png)";
  } else {
    senha.type = "password";
    hidden = true;
    olha.style.backgroundImage = "url(./imagens/show.png)";
  }
});
