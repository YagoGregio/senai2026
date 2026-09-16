function fazerLogin(){

    let usuario = document.getElementById("usuario").value;
    let senha = Number(document.getElementById("senha").value);


    if (usuario == "login" && senha == "1234") {
        document.getElementById("resultado").textContent = "Login feito com sucesso"
    } else {
        document.getElementById("resultado").textContent = "usuário ou senha inválidos";
    }
}   
