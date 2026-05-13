// ============================================================
// calculadora.js
// Funções matemáticas da calculadora
// ============================================================

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


// ============================================================
// testes.js (embutido aqui para ser usado pelo teste.html)
// Cada função de teste recebe dois números reais do usuário
// e também roda casos fixos para garantir que a função está ok
// ============================================================

function rodarTestes(operacao, numUsuario1, numUsuario2) {

  var resultados = [];

  // --- Função auxiliar interna ---
  function checar(descricao, fn) {
    try {
      fn();
      resultados.push({ descricao: descricao, passou: true, detalhe: "OK" });
    } catch (erro) {
      resultados.push({ descricao: descricao, passou: false, detalhe: erro.message });
    }
  }

  // --- Testes fixos + teste com os números do usuário ---

  if (operacao === "somar") {

    checar("3 + 4 deve ser 7", function() {
      var r = somar(3, 4);
      if (r !== 7) throw new Error("Esperado 7, recebeu " + r);
    });

    checar("0 + 0 deve ser 0", function() {
      var r = somar(0, 0);
      if (r !== 0) throw new Error("Esperado 0, recebeu " + r);
    });

    checar("-5 + 5 deve ser 0", function() {
      var r = somar(-5, 5);
      if (r !== 0) throw new Error("Esperado 0, recebeu " + r);
    });

    checar("Seu cálculo: " + numUsuario1 + " + " + numUsuario2 + " = " + (numUsuario1 + numUsuario2), function() {
      var r = somar(numUsuario1, numUsuario2);
      var esperado = numUsuario1 + numUsuario2;
      if (r !== esperado) throw new Error("Esperado " + esperado + ", recebeu " + r);
    });

  } else if (operacao === "subtrair") {

    checar("5 - 3 deve ser 2", function() {
      var r = subtrair(5, 3);
      if (r !== 2) throw new Error("Esperado 2, recebeu " + r);
    });

    checar("2 - 5 deve ser -3", function() {
      var r = subtrair(2, 5);
      if (r !== -3) throw new Error("Esperado -3, recebeu " + r);
    });

    checar("0 - 0 deve ser 0", function() {
      var r = subtrair(0, 0);
      if (r !== 0) throw new Error("Esperado 0, recebeu " + r);
    });

    checar("Seu cálculo: " + numUsuario1 + " - " + numUsuario2 + " = " + (numUsuario1 - numUsuario2), function() {
      var r = subtrair(numUsuario1, numUsuario2);
      var esperado = numUsuario1 - numUsuario2;
      if (r !== esperado) throw new Error("Esperado " + esperado + ", recebeu " + r);
    });

  } else if (operacao === "multiplicar") {

    checar("4 × 3 deve ser 12", function() {
      var r = multiplicar(4, 3);
      if (r !== 12) throw new Error("Esperado 12, recebeu " + r);
    });

    checar("5 × 0 deve ser 0", function() {
      var r = multiplicar(5, 0);
      if (r !== 0) throw new Error("Esperado 0, recebeu " + r);
    });

    checar("-2 × 3 deve ser -6", function() {
      var r = multiplicar(-2, 3);
      if (r !== -6) throw new Error("Esperado -6, recebeu " + r);
    });

    checar("Seu cálculo: " + numUsuario1 + " × " + numUsuario2 + " = " + (numUsuario1 * numUsuario2), function() {
      var r = multiplicar(numUsuario1, numUsuario2);
      var esperado = numUsuario1 * numUsuario2;
      if (r !== esperado) throw new Error("Esperado " + esperado + ", recebeu " + r);
    });

  } else if (operacao === "dividir") {

    checar("10 ÷ 2 deve ser 5", function() {
      var r = dividir(10, 2);
      if (r !== 5) throw new Error("Esperado 5, recebeu " + r);
    });

    checar("9 ÷ 3 deve ser 3", function() {
      var r = dividir(9, 3);
      if (r !== 3) throw new Error("Esperado 3, recebeu " + r);
    });

    checar("10 ÷ 0 deve lançar erro de divisão", function() {
      try {
        dividir(10, 0);
        throw new Error("Não lançou erro!");
      } catch (e) {
        if (e.message !== "Divisão por zero não é permitida") {
          throw new Error("Mensagem errada: " + e.message);
        }
      }
    });

    if (numUsuario2 === 0) {
      checar("Seu cálculo: " + numUsuario1 + " ÷ 0 → deve lançar erro", function() {
        try {
          dividir(numUsuario1, 0);
          throw new Error("Não lançou erro!");
        } catch (e) {
          if (e.message !== "Divisão por zero não é permitida") {
            throw new Error("Mensagem errada: " + e.message);
          }
        }
      });
    } else {
      checar("Seu cálculo: " + numUsuario1 + " ÷ " + numUsuario2 + " = " + (numUsuario1 / numUsuario2), function() {
        var r = dividir(numUsuario1, numUsuario2);
        var esperado = numUsuario1 / numUsuario2;
        if (r !== esperado) throw new Error("Esperado " + esperado + ", recebeu " + r);
      });
    }
  }

  return resultados;
}
