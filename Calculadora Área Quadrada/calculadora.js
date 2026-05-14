// ============================================================
// calculadora.js
// Autor: [seu nome]
//
// v1.0 - função básica de área
// v2.0 - separei validações e melhorei mensagens de erro
//        percebi que antes base negativa passava sem avisar
//        direito, agora cada erro tem sua mensagem específica
// ============================================================

function calcularArea(base, altura) {

  // v2: separei a validação de base e altura
  // antes estava tudo num if só, ficava confuso
  if (isNaN(base) || isNaN(altura)) {
    throw new Error("Informe valores numéricos válidos");
  }

  if (base <= 0) {
    throw new Error("A base deve ser maior que zero");
  }

  if (altura <= 0) {
    throw new Error("A altura deve ser maior que zero");
  }

  // v2: arredondo para 2 casas decimais para evitar
  // resultados como 6.000000000001 com números quebrados
  return Math.round(base * altura * 100) / 100;
}
