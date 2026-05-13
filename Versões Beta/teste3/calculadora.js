// ============================================================
// calculadora.js
// Função matemática da calculadora de área quadrada
// ============================================================

function calcularArea(base, altura) {
  if (base <= 0 || altura <= 0) {
    throw new Error("Base e altura devem ser maiores que zero");
  }
  return base * altura;
}
