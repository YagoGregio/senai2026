# Atividade 2 – Sistema de Biblioteca

Banco de dados relacional para o controle de alunos e empréstimos de livros de uma biblioteca.

## Contexto

A biblioteca deseja informatizar o cadastro de alunos e o registro dos empréstimos realizados. As informações usadas nos relatórios são:

- **Aluno:** nome, e-mail e curso
- **Livro:** título, autor e ano de publicação
- **Empréstimo:** data do empréstimo e data de devolução

**Regra de negócio:** cada aluno pode realizar vários empréstimos, porém cada empréstimo pertence a apenas um aluno.

## Tecnologias

- MySQL
- SQL (DDL e DML)

## Estrutura do banco

Nome do banco: `db_livros`

### Tabela `aluno`

| Coluna | Tipo | Restrições |
|---|---|---|
| id_aluno | INT | PK, AUTO_INCREMENT |
| nome | VARCHAR(100) | NOT NULL |
| email_aluno | VARCHAR(100) | NOT NULL, UNIQUE |
| curso_aluno | VARCHAR(100) | NOT NULL |

### Tabela `livro`

| Coluna | Tipo | Restrições |
|---|---|---|
| id_livro | INT | PK, AUTO_INCREMENT |
| etitulo | VARCHAR(100) | NOT NULL, UNIQUE |
| autor | VARCHAR(100) | NOT NULL |
| ano_publicacao | DATE | NOT NULL |

### Tabela `emprestimo`

| Coluna | Tipo | Restrições |
|---|---|---|
| id_emprestimo | INT | PK, AUTO_INCREMENT |
| id_aluno | INT | NOT NULL, FK → aluno(id_aluno) |
| id_livro | INT | NOT NULL, FK → livro(id_livro), UNIQUE |
| data_emprestimo | DATE | NOT NULL |
| data_devolucao | DATE | NOT NULL |

## Relacionamentos

- **aluno (1) → (N) emprestimo:** um aluno pode ter vários empréstimos; cada empréstimo pertence a um único aluno.
- **livro (1) → (N) emprestimo:** um livro é referenciado pelos empréstimos registrados.

```
aluno 1 ────< emprestimo >──── 1 livro
```

## Chaves únicas (UNIQUE)

| Constraint | Tabela | Coluna | Finalidade |
|---|---|---|---|
| uk_aluno_email | aluno | email_aluno | Impede dois alunos com o mesmo e-mail |
| uk_livro | livro | etitulo | Impede o cadastro duplicado do mesmo título |
| uk_emprestimo | emprestimo | id_livro | Impede que o mesmo livro apareça em mais de um empréstimo |

> **Atenção:** a chave `uk_emprestimo` em `id_livro` faz com que cada livro possa ser emprestado apenas uma vez no histórico. Para permitir novos empréstimos do mesmo livro, use uma chave composta, por exemplo `UNIQUE (id_aluno, id_livro, data_emprestimo)`.

## Como executar

1. Abra o MySQL Workbench (ou o cliente MySQL de sua preferência).
2. Execute o script SQL completo, na ordem:
   1. Criação do banco e das tabelas
   2. Inserção dos dados de exemplo
   3. Criação das chaves únicas
3. Consulte os dados com o relatório abaixo.

## Dados de exemplo

**Alunos**

| Nome | E-mail | Curso |
|---|---|---|
| João Silva | joao.silva@email.com | Engenharia |
| Maria Souza | maria.souza@email.com | Medicina |
| Pedro Oliveira | pedro.oliveira@email.com | Direito |

**Livros**

| Título | Autor | Publicação |
|---|---|---|
| O Senhor dos Anéis | J.R.R. Tolkien | 1954-07-29 |
| 1984 | George Orwell | 1949-06-08 |
| Dom Casmurro | Machado de Assis | 1899-01-01 |

**Empréstimos**

| Aluno | Livro | Empréstimo | Devolução |
|---|---|---|---|
| João Silva | O Senhor dos Anéis | 2023-01-15 | 2023-02-15 |
| Maria Souza | 1984 | 2023-02-01 | 2023-03-01 |
| Pedro Oliveira | Dom Casmurro | 2023-03-10 | 2023-04-10 |

## Consulta de relatório

```sql
SELECT a.nome, a.email_aluno, a.curso_aluno,
       l.etitulo, l.autor, l.ano_publicacao,
       e.data_emprestimo, e.data_devolucao
FROM emprestimo e
JOIN aluno a ON a.id_aluno = e.id_aluno
JOIN livro l ON l.id_livro = e.id_livro;
```

## Teste das chaves únicas

O comando abaixo deve falhar com o erro `Duplicate entry`, pois o e-mail já está cadastrado:

```sql
INSERT INTO aluno (nome, email_aluno, curso_aluno)
VALUES ('João Teste', 'joao.silva@email.com', 'Direito');
```
