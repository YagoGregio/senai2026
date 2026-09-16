Calculadora com HTML, CSS e JavaScript

Este projeto consiste em uma calculadora simples desenvolvida utilizando HTML, CSS e JavaScript.

Funcionalidades

A calculadora realiza as quatro operações básicas da matemática:

➕ Soma
➖ Subtração
✖️ Multiplicação
➗ Divisão
🚫 Verificação para impedir divisão por zero
Tecnologias utilizadas
HTML5
CSS3
JavaScript
Estrutura do projeto

📁 projeto-calculadora
├── index.html
├── style.css
├── script.js
└── README.md

Código HTML — index.html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML+CSS+JS</title>
</head>
<body>
    <script src="script.js"></script>

    <header>
        <h1>Exercício Calculadora</h1>
        <p>Fazendo uma calculadora com as operações básicas da matemática</p>
    </header>

    <section>
        <h1>Calculadora de Soma</h1>

        <label for="numero1">Primeiro número:</label>
        <input type="number" id="numero1">

        <br><br>

        <label for="numero2">Segundo número:</label>
        <input type="number" id="numero2">

        <br><br>

        <button onclick="somar()">Somar</button>

        <p id="resultado"></p>
    </section>

    <section>
        <h1>Calculadora de Subtração</h1>

        <label for="sub1">Primeiro número:</label>
        <input type="number" id="sub1">

        <br><br>

        <label for="sub2">Segundo número:</label>
        <input type="number" id="sub2">

        <br><br>

        <button onclick="subtrair()">Subtrair</button>

        <p id="resultadosub"></p>
    </section>

    <section>
        <h1>Calculadora de Multiplicação</h1>

        <label for="mult1">Primeiro número:</label>
        <input type="number" id="mult1">

        <br><br>

        <label for="mult2">Segundo número:</label>
        <input type="number" id="mult2">

        <br><br>

        <button onclick="multiplicacao()">Multiplicar</button>

        <p id="resultadomult"></p>
    </section>

    <section>
        <h1>Calculadora de Divisão</h1>

        <label for="div1">Primeiro número:</label>
        <input type="number" id="div1">

        <br><br>

        <label for="div2">Segundo número:</label>
        <input type="number" id="div2">

        <br><br>

        <button onclick="divisao()">Dividir</button>

        <p id="resultadodiv"></p>
    </section>
  ```
</body>
</html>
```
Código CSS — style.css
```
* {
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: white;
    margin: 0;
}

header {
    background-color: #333;
    color: white;
    padding: 30px;
    text-align: center;
}

section {
    text-align: center;
    margin: 0;
    padding: 5px;
    border-radius: 30px;
    margin-bottom: 15px;
    text-decoration: solid #333;
}
```
Código JavaScript — script.js
```
function somar() {
    const campoNumero1 = document.getElementById("numero1");
    const campoNumero2 = document.getElementById("numero2");

    const numero1 = Number(campoNumero1.value);
    const numero2 = Number(campoNumero2.value);

    const resultado = numero1 + numero2;

    const campoResultado = document.getElementById("resultado");

    campoResultado.textContent = "Resultado: " + resultado;
}

function subtrair() {
    const campoNumero1 = document.getElementById("sub1");
    const campoNumero2 = document.getElementById("sub2");

    const numero1 = Number(campoNumero1.value);
    const numero2 = Number(campoNumero2.value);

    const resultado = numero1 - numero2;

    const campoResultado = document.getElementById("resultadosub");

    campoResultado.textContent = "Resultado: " + resultado;
}

function multiplicacao() {
    const campoMult1 = document.getElementById("mult1");
    const campoMult2 = document.getElementById("mult2");

    const mult1 = Number(campoMult1.value);
    const mult2 = Number(campoMult2.value);

    const resultado = mult1 * mult2;

    const campoResultado = document.getElementById("resultadomult");

    campoResultado.textContent = "Resultado: " + resultado;
}

function divisao() {
    const campoDiv1 = document.getElementById("div1");
    const campoDiv2 = document.getElementById("div2");

    const div1 = Number(campoDiv1.value);
    const div2 = Number(campoDiv2.value);

    const campoResultado = document.getElementById("resultadodiv");

    if (div2 === 0) {
        campoResultado.textContent = "Não foi possível dividir por Zero";
    } else {
        const resultado = div1 / div2;
        campoResultado.textContent = "Resultado: " + resultado;
    }
}
