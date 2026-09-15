
let n1 = 5;
function dobro(){
    console.log (n1*2);
}
dobro();


let n1 = 12;
function dobro(){
    console.log (n1*2);
}
dobro();
    //--------------------------------------------------------------//

verificarNumero(10);   // Positivo
verificarNumero(-5);   // Negativo
verificarNumero(0);    // Zero

function verificarNumero(numero) {
    if (numero > 0) {
        console.log("Positivo");
    } else if (numero < 0) {
        console.log("Negativo");
    } else {
        console.log("Zero");
    }
}
   
    //--------------------------------------------------------------//

function maiorNumero(n1, n2){
     if (n1> n2){
     return n1
    } else if (n1 == n2){
      return "São iguais"
    } else {
      return n2
    }
}



function calcularIdade(anoAtual, anoNasc){
    console.log("idade é: " + (anoAtual - anoNasc));
}

calcularIdade(2026,2010);

console.log(Date())



function calcularidade(dataNasc){
    const nascimento = new Date(dataNasc);
    const hoje = new Date();

    let idade = hoje.getFullYear() - nascimento.getFullYear();

    const aindaNaoFezAniversario =
    hoje.getMonth() < nascimento.getMonth() ||
    (hoje.getMonth() === nascimento.getMonth() &&
    hoje.getDate < nascimento.getDate());

    if(aindaNaoFezAniversario){
        idade--;
    }

    return idade;
}

console.log (calcularidade("xxxx-xx-xx"))