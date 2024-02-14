const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let nome = document.getElementById("nome").value;
  let idade = document.getElementById("idade").value;
  let linguagem = document.getElementById("linguagem").value;
  alert(
    `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`
  );

  limpaCampos();
  focus();

  let resposta = prompt(
    `Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`
  );

  if (resposta == 1) {
    alert("Ótimo! Continue estudando e praticando você terá muito sucesso.");
  }
  if (resposta == 2) {
    alert(
      "Ahh que pena… continue estudando e praticando, talvez você goste com mais prática, mas não desista!"
    );
  }
});

function limpaCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("idade").value = "";
  document.getElementById("linguagem").value = "";
}

function focus() {
  document.getElementById("nome").focus();
}
