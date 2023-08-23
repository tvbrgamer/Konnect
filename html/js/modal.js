const dialog = document.getElementById("dialog");
const body = document.querySelector(".scroll");

//* Abre o modal e desabilita o scroll
function Showmodal() {
  dialog.showModal();
  body.style.position = "fixed";
  body.style.overflowY = "scroll";
}

//* Cobre o uso do esc para fechar o modal
body.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    Closemodal();
  }
});

//* Fecha o modal e reabilita o scroll
function Closemodal() {
  body.style.position = "";
  body.style.overflowY = "auto";
  Limpar();
  dialog.close();
}
