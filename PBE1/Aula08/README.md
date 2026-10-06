# API de Clientes e Pedidos

API REST simples feita com **Node.js** e **Express**, seguindo o padrão **MVC** (rotas e controllers separados). Os dados são armazenados em arquivos JSON, sem banco de dados.

> Projeto da Aula 08 (PBE1 - SENAI 2026).

## Tecnologias

- Node.js
- Express
- Arquivos JSON como armazenamento

## Estrutura do projeto

```
Aula08/
├── dados/
│   ├── clientes.json
│   └── pedidos.json
├── src/
│   └── controllers/
│       ├── cliente.js
│       ├── pedido.js
│       └── routes.js
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

| Arquivo | Função |
|---|---|
| `server.js` | Inicializa o servidor Express |
| `src/controllers/routes.js` | Define as rotas da API |
| `src/controllers/cliente.js` | Lógica de CRUD de clientes |
| `src/controllers/pedido.js` | Lógica de CRUD de pedidos |
| `dados/clientes.json` | Dados dos clientes |
| `dados/pedidos.json` | Dados dos pedidos |

## Como executar

1. Instale as dependências:

```bash
npm install -y

```bash
npm install i express cors
```
2. Inicie o servidor:

```bash
node server.js
```

3. Acesse a API em `http://localhost:3000`.

## Rotas

### Rota inicial

| Método | Rota | Descrição |
|---|---|---|
| GET | `/` | Retorna a mensagem `"MVC respondendo"` |

### Clientes

| Método | Rota | Descrição |
|---|---|---|
| GET | `/clientes` | Lista todos os clientes |
| POST | `/clientes` | Cria um novo cliente |
| PUT | `/clientes/:id` | Altera um cliente existente |
| DELETE | `/clientes/:id` | Exclui um cliente |

### Pedidos

| Método | Rota | Descrição |
|---|---|---|
| GET | `/pedidos` | Lista todos os pedidos (com o campo `subtotais` calculado) |
| POST | `/pedidos` | Cria um novo pedido |
| PUT | `/pedidos/:id` | Altera um pedido existente |
| DELETE | `/pedidos/:id` | Exclui um pedido |

> A função `subtotal` existe no controller de pedidos, mas ainda está **em construção** e não possui rota.

## Modelos de dados

### Cliente

```json
{
    "id": 1,
    "cpf": "123.456.789-00",
    "nome": "João Silva"
}
```

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | number | Gerado automaticamente ao criar |
| `cpf` | string | CPF do cliente |
| `nome` | string | Nome do cliente |

### Pedido

```json
{
    "id": 1,
    "cliente_id": 1,
    "produto": "Notebook",
    "preco": 3500.00,
    "quantidade": 2
}
```

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | number | Gerado automaticamente ao criar |
| `cliente_id` | number | ID do cliente que fez o pedido |
| `produto` | string | Nome do produto |
| `preco` | number | Preço unitário |
| `quantidade` | number | Quantidade comprada |
| `subtotais` | number | Calculado na listagem (`quantidade * preco`) |

## Exemplos de uso

### Listar clientes

```
GET http://localhost:3000/clientes
```

### Criar cliente

```
POST http://localhost:3000/clientes
Content-Type: application/json

{
    "cpf": "111.222.333-44",
    "nome": "Ana Souza"
}
```

Resposta: `201 Created` com o cliente criado (incluindo o `id` gerado).

### Alterar cliente

```
PUT http://localhost:3000/clientes/1
Content-Type: application/json

{
    "id": 1,
    "cpf": "123.456.789-00",
    "nome": "João Silva Junior"
}
```

Resposta: `"Cliente alterado com sucesso!"` ou `404` com `"Cliente não encontrado!"`.

### Excluir cliente

```
DELETE http://localhost:3000/clientes/1
```

Resposta: `"Cliente excluído com sucesso!"` ou `404` com `"Cliente não encontrado!"`.

### Criar pedido

```
POST http://localhost:3000/pedidos
Content-Type: application/json

{
    "cliente_id": 2,
    "produto": "Mouse",
    "preco": 90.00,
    "quantidade": 4
}
```

### Listar pedidos

```
GET http://localhost:3000/pedidos
```

Exemplo de item retornado:

```json
{
    "id": 1,
    "cliente_id": 1,
    "produto": "Notebook",
    "preco": 3500,
    "quantidade": 2,
    "subtotais": 7000
}
```

## Códigos de resposta

| Código | Significado |
|---|---|
| 200 | Requisição bem-sucedida |
| 201 | Registro criado |
| 404 | Registro não encontrado |
| 500 | Erro interno do servidor |

## Observações

- Os dados ficam em memória enquanto o servidor está rodando: as alterações feitas via API **não são gravadas** nos arquivos JSON e voltam ao original quando o servidor reinicia.
- O `id` de novos registros é gerado a partir do último item do array (`último id + 1`).

## Melhorias futuras

- Implementar a rota de `subtotal` dos pedidos
- Persistir os dados nos arquivos JSON (ou em um banco de dados)
- Validar os dados recebidos no `body`
- Tratar o caso de lista vazia ao gerar o `id`