const ventilador = document.getElementById("ventilador");
const botao = document.getElementById("botao");

botao.addEventListener("click", function(){

    ventilador.classList.toggle("ligado");

   if (ventilador.classList.contains("ligado")){
    botao.textContent = "Desligar";
   } else {
    botao.textContent = "Ligar"
   }
});