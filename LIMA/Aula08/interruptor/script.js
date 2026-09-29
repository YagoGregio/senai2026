const lampada = document.getElementById("lampada");
const interruptor = document.getElementById("interruptor");

interruptor.addEventListener("click", function () {

    lampada.classList.toggle("ligada");
});