import { perguntas } from "./perguntas.js";
import { mensagemFinal } from "./aleatorio.js";

const texto = document.getElementById("texto");
const opcoes = document.getElementById("opcoes");
const btnJogarNovamente = document.getElementById("jogarNovamente");

let indiceAtual = 0;

function mostrarPergunta(indice) {
  const pergunta = perguntas[indice];
  texto.textContent = pergunta.texto;
  opcoes.innerHTML = "";

  if (pergunta.opcoes.length === 0) {
    texto.textContent += " " + mensagemFinal();
    btnJogarNovamente.style.display = "block";
    return;
  }

  pergunta.opcoes.forEach(opcao => {
    const botao = document.createElement("button");
    botao.textContent = opcao.texto;
    botao.addEventListener("click", () => mostrarPergunta(opcao.proxima));
    opcoes.appendChild(botao);
  });
}

btnJogarNovamente.addEventListener("click", () => {
  indiceAtual = 0;
  btnJogarNovamente.style.display = "none";
  mostrarPergunta(indiceAtual);
});

mostrarPergunta(indiceAtual);
