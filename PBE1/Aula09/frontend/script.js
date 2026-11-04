const BASE_URL = 'http://localhost:3000';

async function listarClientes(){
    const response = await fetch(`${BASE_URL}/cliente/listar`);

    console.log(response);
}

listarClientes();