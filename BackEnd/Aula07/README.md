# API de Controle de Patrimônio

## Descrição do projeto

API simples para controlar o patrimônio de uma instituição (notebooks, projetores etc.). Com ela é possível listar, cadastrar, alterar e excluir itens. Os dados iniciais ficam no arquivo `patrimonio.json` e são mantidos em memória enquanto o servidor está rodando.

## Instalação e execução

1. Instale o [Node.js](https://nodejs.org/).
2. Na pasta do projeto, instale as dependências:

```bash
npm install
```

3. Inicie o servidor:

```bash
node server.js
```

4. Acesse: `http://127.0.0.1:3000`

## Tecnologias utilizadas

- Node.js
- Express
- JSON

## Rotas disponíveis

| Método | Rota   | Descrição                      |
|--------|--------|--------------------------------|
| GET    | /      | Lista todos os patrimônios     |
| GET    | /:id   | Busca um patrimônio pelo id    |
| POST   | /      | Cadastra um novo patrimônio    |
| PUT    | /:id   | Altera um patrimônio           |
| DELETE | /:id   | Exclui um patrimônio           |

## Exemplos de requisições e respostas

### GET /

Requisição:

```
GET http://127.0.0.1:3000/
```

Resposta:

```json
[
  {
    "id": 1,
    "item": "Notebook Dell",
    "local": "Laboratório 01",
    "dataRegistro": "2026-09-10",
    "valor": "3500.00",
    "patrimonio": "PAT-00125"
  },
  {
    "id": 2,
    "item": "Projetor Epson",
    "local": "Sala 03",
    "dataRegistro": "2026-09-03",
    "valor": "2800.00",
    "patrimonio": "PAT-00126"
  }
]
```

### GET /:id

Requisição:

```
GET http://127.0.0.1:3000/1
```

Resposta:

```json
{
  "id": 1,
  "item": "Notebook Dell",
  "local": "Laboratório 01",
  "dataRegistro": "2026-09-10",
  "valor": "3500.00",
  "patrimonio": "PAT-00125"
}
```

### POST /

Requisição:

```
POST http://127.0.0.1:3000/
```

Corpo (JSON):

```json
{
  "item": "Monitor LG",
  "local": "Sala 05",
  "dataRegistro": "2026-09-15",
  "valor": "900.00",
  "patrimonio": "PAT-00127"
}
```

Resposta:

```json
{
  "mensagem": "Patrimônio cadastrado com sucesso!",
  "patrimonio": {
    "id": 3,
    "item": "Monitor LG",
    "local": "Sala 05",
    "dataRegistro": "2026-09-15",
    "valor": "900.00",
    "patrimonio": "PAT-00127"
  }
}
```

### PUT /:id

Requisição:

```
PUT http://127.0.0.1:3000/1
```

Corpo (JSON):

```json
{
  "local": "Laboratório 02"
}
```

Resposta:

```json
{
  "mensagem": "Patrimônio alterado com sucesso!",
  "patrimonio": {
    "id": 1,
    "item": "Notebook Dell",
    "local": "Laboratório 02",
    "dataRegistro": "2026-09-10",
    "valor": "3500.00",
    "patrimonio": "PAT-00125"
  }
}
```

### DELETE /:id

Requisição:

```
DELETE http://127.0.0.1:3000/2
```

Resposta:

```json
{
  "mensagem": "Patrimônio excluído com sucesso!"
}
```

### Erro: id não encontrado

Resposta (status 404):

```json
{
  "mensagem": "Patrimônio não encontrado!"
}
```
