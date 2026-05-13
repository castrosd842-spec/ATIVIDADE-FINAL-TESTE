// ================================
// calculadora.js
// Funções matemáticas da calculadora
// ================================

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    throw new Error("Divisão por zero não é permitida");
  }
  return a / b;
}

// Função usada pelo calculadora.html
function calcular(operacao) {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var resultado = document.getElementById("resultado");

  if (isNaN(num1) || isNaN(num2)) {
    resultado.textContent = "⚠️ Digite dois números válidos!";
    return;
  }

  try {
    var res;
    if (operacao === "+") res = somar(num1, num2);
    if (operacao === "-") res = subtrair(num1, num2);
    if (operacao === "*") res = multiplicar(num1, num2);
    if (operacao === "/") res = dividir(num1, num2);
    resultado.textContent = "Resultado: " + res;
  } catch (erro) {
    resultado.textContent = "❌ Erro: " + erro.message;
  }
}
