function salvar() {
  const nome = document.getElementById("nome").value;

  if (!nome) {
    alert("Digite um nome antes");
    return;
  }

  const chave = "nome_" + Date.now();

  localStorage.setItem(chave, nome);

  document.getElementById("nome").value = "";

  document.getElementById("resultados").textContent = "Nome salvo" + nome;

  listarNomes();
}

function listarNomes() {
  const nomes = [];

  for (let i = 0; localStorage.length; i++) {
    const chave = localStorage.key(i);

    if (chave.startsWith("nome_")) {
      nomes.push({
        chave: chave,
        valor: localStorage.getItem(chave)

      });
    }
      const resultado = document.getElementById("resultado")

      if (nomes.length === 0){
        
      }
  }
}
