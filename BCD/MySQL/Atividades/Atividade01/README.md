# Atividade 1 — Compra de Produtos (Banco de Dados)

Modelagem e criação de um banco de dados relacional para registrar vendas de produtos a clientes.

## Descrição do problema

- **Cliente**: possui nome, e-mail e telefone.
- **Produto**: possui nome e preço.
- **Venda**: registra a quantidade vendida e a data da venda.
- Um cliente pode comprar vários produtos e um produto pode ser comprado por vários clientes (relação N:N, resolvida pela tabela `venda`).

## Modelo Entidade-Relacionamento (MER)

![MER - empresa_vendas](./mer.png)

### Relacionamentos

| Relacionamento | Cardinalidade | Descrição |
|---|---|---|
| cliente → venda | 1:N | Um cliente pode ter várias vendas |
| produto → venda | 1:N | Um produto pode aparecer em várias vendas |

### Tabelas

**cliente**

| Coluna | Tipo | Restrições |
|---|---|---|
| id_cliente | INT | PK, AUTO_INCREMENT |
| nome_cliente | VARCHAR(100) | NOT NULL |
| email_cliente | VARCHAR(100) | NOT NULL, UNIQUE |
| telefone_cliente | VARCHAR(15) | NOT NULL |

**produto**

| Coluna | Tipo | Restrições |
|---|---|---|
| id_produto | INT | PK, AUTO_INCREMENT |
| nome_produto | VARCHAR(100) | NOT NULL, UNIQUE |
| preco_produto | DECIMAL(10,2) | NOT NULL |

**venda**

| Coluna | Tipo | Restrições |
|---|---|---|
| id_venda | INT | PK, AUTO_INCREMENT |
| id_cliente | INT | NOT NULL, FK → cliente(id_cliente) |
| id_produto | INT | NOT NULL, FK → produto(id_produto) |
| qtd_vendida | INT | NOT NULL |
| dt_venda | DATE | NOT NULL |

## Script SQL

```sql
CREATE DATABASE empresa_vendas;

USE empresa_vendas;

CREATE TABLE cliente (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome_cliente VARCHAR(100) NOT NULL,
    email_cliente VARCHAR(100) NOT NULL UNIQUE,
    telefone_cliente VARCHAR(15) NOT NULL
);

CREATE TABLE produto (
    id_produto INT PRIMARY KEY AUTO_INCREMENT,
    nome_produto VARCHAR(100) NOT NULL UNIQUE,
    preco_produto DECIMAL(10, 2) NOT NULL
);

CREATE TABLE venda (
    id_venda INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    id_produto INT NOT NULL,
    qtd_vendida INT NOT NULL,
    dt_venda DATE NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente),
    FOREIGN KEY (id_produto) REFERENCES produto(id_produto)
);
```

## Como executar

1. Abra o MySQL (Workbench, terminal ou outro cliente).
2. Copie e execute o script acima.
3. Confira as tabelas criadas:

```sql
SHOW TABLES;
DESCRIBE venda;
```

## Tecnologias

- MySQL
- Modelagem MER (diagrama)
