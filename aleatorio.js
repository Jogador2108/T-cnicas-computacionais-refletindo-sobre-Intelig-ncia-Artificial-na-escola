export function mensagemFinal() {
  const frases = [
    "O fim é apenas um novo começo.",
    "Sua coragem será lembrada.",
    "Você moldou o destino com suas escolhas."
  ];
  const indice = Math.floor(Math.random() * frases.length);
  return frases[indice];
}
