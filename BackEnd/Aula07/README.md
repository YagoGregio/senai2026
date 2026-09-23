# API de Controle de Patrimônio

## Descrição do projeto

API REST desenvolvida em Node.js com Express para o controle de patrimônio de uma instituição (notebooks, projetores, monitores etc.). Ela permite listar, consultar, cadastrar, alterar e excluir itens patrimoniais.

Os dados são carregados do arquivo `inventario.json` e mantidos em memória enquanto o servidor está em execução. Ao reiniciar o servidor, os dados voltam ao conteúdo original do arquivo.

Cada item possui os campos:

| Campo          | Tipo   | Descrição                          |
|----------------|--------|------------------------------------|
| `id`           | número | Identificador único (gerado pela API) |
| `item`         | texto  | Nome do item                       |
| `local`        | texto  | Local onde o item está             |
| `dataRegistro` | texto  | Data de registro (AAAA-MM-DD)      |
| `valor`        | texto  | Valor do item                      |
| `patrimonio`   | texto  | Código de patrimônio               |

## Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- JSON (`inventario.json`) como fonte de dados
- Postman / Insomnia / curl para testes das rotas

## Estrutura do projeto

```
.
├── server.js
├── inventario.json
├── package.json
└── README.md
```

## Instalação e execução

Pré-requisito: ter o [Node.js](https://nodejs.org/) instalado.

1. Clone o repositório e entre na pasta do projeto:

```bash
git clone <url-do-repositorio>
cd <pasta-do-projeto>
```

2. Instale as dependências:

```bash
npm install
```

Caso o projeto ainda não tenha um `package.json`, crie-o e instale o Express:

```bash
npm init -y
npm install express
```

3. Inicie o servidor:

```bash
node server.js
```

4. O servidor ficará disponível em:

```
http://127.0.0.1:3000
```

## Rotas disponíveis

| Método | Rota    | Descrição                         | Status de sucesso |
|--------|---------|-----------------------------------|-------------------|
| GET    | `/`     | Lista todos os patrimônios        | 200               |
| GET    | `/:id`  | Busca um patrimônio pelo id       | 200               |
| POST   | `/`     | Cadastra um novo patrimônio       | 201               |
| PUT    | `/:id`  | Altera um patrimônio existente    | 200               |
| DELETE | `/:id`  | Exclui um patrimônio              | 200               |

Erros possíveis:

- `400`: dados obrigatórios ausentes no cadastro (POST).
- `404`: patrimônio não encontrado para o id informado (GET, PUT, DELETE).

## Exemplos de requisições e respostas

### GET `/` — listar todos os patrimônios

Requisição:

```bash
curl http://127.0.0.1:3000/
```

Resposta (200):

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

### GET `/:id` — buscar um patrimônio

Requisição:

```bash
curl http://127.0.0.1:3000/1
```

Resposta (200):

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

Resposta quando o id não existe (404):

```json
{
  "mensagem": "Patrimônio não encontrado!"
}
```

### POST `/` — cadastrar um patrimônio

Requisição:

```bash
curl -X POST http://127.0.0.1:3000/ \
  -H "Content-Type: application/json" \
  -d '{
    "item": "Monitor LG",
    "local": "Sala 05",
    "dataRegistro": "2026-09-15",
    "valor": "900.00",
    "patrimonio": "PAT-00127"
  }'
```

Resposta (201):

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

Resposta quando faltam campos obrigatórios (400):

```json
{
  "mensagem": "Falha ao cadastrar patrimônio!",
  "camposFaltando": ["local", "dataRegistro", "valor", "patrimonio"]
}
```

### PUT `/:id` — alterar um patrimônio

Requisição:

```bash
curl -X PUT http://127.0.0.1:3000/1 \
  -H "Content-Type: application/json" \
  -d '{ "local": "Laboratório 02" }'
```

Resposta (200):

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

### DELETE `/:id` — excluir um patrimônio

Requisição:

```bash
curl -X DELETE http://127.0.0.1:3000/2
```

Resposta (200):

```json
{
  "mensagem": "Patrimônio excluído com sucesso!"
}
```

Resposta quando o id não existe (404):

```json
{
  "mensagem": "Patrimônio não encontrado!"
}
```

## Testes realizados

As rotas foram testadas com Postman/Insomnia (ou curl), cobrindo os casos de sucesso e de erro. As evidências (prints das requisições e respostas) acompanham a entrega.

- Listagem de todos os patrimônios (GET `/`)
- Busca por id existente e inexistente (GET `/:id`)
- Cadastro válido e cadastro com campos faltando (POST `/`)
- Alteração de item existente e inexistente (PUT `/:id`)
- Exclusão de item existente e inexistente (DELETE `/:id`)
- Listagem final para conferir o estado dos dados após as alterações