CREATE DATABASE db_livros;

USE db_livros;

CREATE TABLE aluno (
    id_aluno INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email_aluno VARCHAR(100) NOT NULL,
    curso_aluno VARCHAR(100) NOT NULL
);

CREATE TABLE livro (
    id_livro INT AUTO_INCREMENT PRIMARY KEY,
    etitulo VARCHAR(100) NOT NULL,
    autor VARCHAR(100) NOT NULL,
    ano_publicacao DATE NOT NULL
);

CREATE TABLE emprestimo (
    id_emprestimo INT AUTO_INCREMENT PRIMARY KEY,
    id_aluno INT NOT NULL,
    id_livro INT NOT NULL,
    data_emprestimo DATE NOT NULL,
    data_devolucao DATE NOT NULL,
    FOREIGN KEY (id_aluno) REFERENCES aluno(id_aluno),
    FOREIGN KEY (id_livro) REFERENCES livro(id_livro)
);

INSERT INTO aluno (nome, email_aluno, curso_aluno) VALUES
('João Silva', 'joao.silva@email.com', 'Engenharia');


INSERT INTO aluno (nome, email_aluno, curso_aluno) VALUES
('Maria Souza', 'maria.souza@email.com', 'Medicina');

INSERT INTO aluno (nome, email_aluno, curso_aluno) VALUES
('Pedro Oliveira', 'pedro.oliveira@email.com', 'Direito');

INSERT INTO livro (etitulo, autor, ano_publicacao) VALUES
('O Senhor dos Anéis', 'J.R.R. Tolkien', '1954-07-29');

INSERT INTO livro (etitulo, autor, ano_publicacao) VALUES
('1984', 'George Orwell', '1949-06-08');

INSERT INTO livro (etitulo, autor, ano_publicacao) VALUES
('Dom Casmurro', 'Machado de Assis', '1899-01-01');

INSERT INTO emprestimo (id_aluno, id_livro, data_emprestimo, data_devolucao) VALUES
(1, 1, '2023-01-15', '2023-02-15');

INSERT INTO emprestimo (id_aluno, id_livro, data_emprestimo, data_devolucao) VALUES
(2, 2, '2023-02-01', '2023-03-01');

INSERT INTO emprestimo (id_aluno, id_livro, data_emprestimo, data_devolucao) VALUES
(3, 3, '2023-03-10', '2023-04-10');

ALTER TABLE aluno
    ADD CONSTRAINT uk_aluno_email UNIQUE (email_aluno);

ALTER TABLE livro
    ADD CONSTRAINT uk_livro UNIQUE (etitulo);

ALTER TABLE emprestimo
    ADD CONSTRAINT uk_emprestimo UNIQUE (id_livro);