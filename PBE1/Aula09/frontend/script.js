const BASE_URL = "http://localhost:3000";

const formCadastro = document.querySelector("#cadastro");

async function listarClientes() {
  const response = await fetch(`${BASE_URL}/cliente/listar`);

  if (response.status == 200) {
    const listaClientes = await response.json();
    console.log(listaClientes);

    const tbody = document.querySelector("tbody");

    listaClientes.forEach((clientes) => {
      const linha = document.createElement("tr");

      const colunas = `
        <td>${clientes.id_cliente}</td>
        <td>${clientes.nome}</td>
        <td>${clientes.cpf}</td>
        <td>${clientes.email}</td>
        `;

        linha.innerHTML = colunas;
        tbody.appendChild(linha);
    });
  } else if (response.status == 500) {
    console.error("Erro interno do servidor");
  }
  console.log(response);
}

formCadastro.addEventListener("submit", async (event) => {
    event.preventDefault();

    const nome = document.querySelector("#nome").value;
    const cpf = document.querySelector("#cpf").value;
    const email = document.querySelector("#email").value;

    const cliente = {
        nome: nome,
        cpf: cpf,
        email: email
    };

    console.log(cliente);
});

listarClientes();
