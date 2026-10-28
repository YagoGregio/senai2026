# Vendas Informática — Prática de SQL

Projeto de estudo em SQL (MySQL) com um banco de dados de vendas de produtos de informática. Reúne exemplos de comandos `INSERT`, `SELECT`, `UPDATE`, `DELETE` e `ALTER TABLE`.

## Banco de dados

`vendas_informatica`

```sql
USE vendas_informatica;
```

## Tabelas

### `cliente`
| Coluna | Descrição |
|---|---|
| id_cliente | Identificador do cliente |
| nome_cliente | Nome |
| email | E-mail |
| cidade | Cidade |
| estado | UF |
| data_cadastro | Data de cadastro |

### `produto`
| Coluna | Descrição |
|---|---|
| id_produto | Identificador do produto |
| nome_produto | Nome |
| categoria | Categoria |
| marca | Marca |
| preco_unitario | Preço de tabela |
| estoque | Quantidade em estoque |
| ativo | Produto ativo (1) ou inativo (0) |
| data_cadastro | Data de cadastro |

### `venda`
| Coluna | Descrição |
|---|---|
| id_produto | Produto vendido (FK → `produto`) |
| id_cliente | Cliente comprador (FK → `cliente`) |
| data_venda | Data da venda |
| quantidade | Quantidade vendida |
| desconto_percentual | Desconto aplicado |
| preco_unitario_venda | Preço unitário na venda |
| forma_pagamento | Ex.: Pix, Boleto |
| status_venda | Ex.: Concluída, Cancelada |

## Relacionamentos

- `venda.id_cliente` → `cliente.id_cliente`
- `venda.id_produto` → `produto.id_produto`

## Estrutura do projeto

```
├── insert.sql   # Inserção de dados (INSERT)
├── read.sql     # Consultas (SELECT, ORDER BY, INNER JOIN)
├── update.sql   # Atualização de dados (UPDATE)
└── delete.sql   # Remoção de dados (DELETE) e ALTER TABLE
```

## Comandos abordados

| Comando | Exemplos no projeto |
|---|---|
| `INSERT` | Cadastro de cliente, produto e venda |
| `SELECT` | Seleção de colunas, `ORDER BY`, `INNER JOIN` (2 e 3 tabelas), `WHERE ... IN` |
| `UPDATE` | Alteração de cidade, data de cadastro, nome, preço e desconto com `WHERE` |
| `DELETE` | Remoção por id, estado, lista de ids (`IN`), desconto e status da venda |
| `ALTER TABLE` | `DROP INDEX id_cliente` na tabela `cliente` |

## Exemplo de consulta

```sql
SELECT cliente.nome_cliente, produto.nome_produto, venda.data_venda, venda.quantidade
FROM venda
INNER JOIN cliente ON venda.id_cliente = cliente.id_cliente
INNER JOIN produto ON venda.id_produto = produto.id_produto;
```

## Como usar

1. Crie o banco `vendas_informatica` e as tabelas acima.
2. Execute `insert.sql` para popular os dados.
3. Rode `read.sql`, `update.sql` e `delete.sql`, nessa ordem, conforme o estudo.

> ⚠️ Sempre use `WHERE` em `UPDATE` e `DELETE` para não afetar todos os registros.