const BASE_URL = "http://localhost:3000";

async function listarClientes() {
  const response = await fetch(`${BASE_URL}/cliente/listar`);

  if (response.status == 200) {
    const listaClientes = await response.json();
    console.log(listaClientes);

    const tbody = document.querySelector("tbody");

    listaClientes.forEach((cliente) => {
      const linha = document.createElement("tr");

      const colunas = `
        <td>${cliente.id}</td>
        <td>${cliente.nome}</td>
        <td>${cliente.cpf}</td>
        <td>${cliente.email}</td>
        `;

        linha.innerHTML = colunas;
        tbody.appendChild(linha);
    });
  } else if (response.status == 500) {
    console.error("Erro interno do servidor");
  }
  console.log(response);
}

listarClientes();
