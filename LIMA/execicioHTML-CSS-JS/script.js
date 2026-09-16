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

         function divisao(){
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