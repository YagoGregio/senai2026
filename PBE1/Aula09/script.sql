DROP DATABASE IF EXISTS locadora;
CREATE DATABASE locadora;

USE locadora;

CREATE TABLE clientes(
    id_cliente INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    email VARCHAR(80) NOT NULL UNIQUE,
    senha VARCHAR(20) NOT NULL
);

CREATE TABLE filmes (
    id_filme INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL UNIQUE,
    idioma VARCHAR(20) NOT NULL,
    quantidade INT NOT NULL
);

CREATE TABLE locacoes (
    id_locacao INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    data_locacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_devolucao TIMESTAMP  NULL,
    id_filme INT,
    id_cliente INT,
    CONSTRAINT FK_FILMES_LOCACOES FOREIGN KEY (id_filme) REFERENCES filmes(id_filme),
    CONSTRAINT FK_CLIENTES_LOCACOES FOREIGN KEY (id_cliente) REFERENCES clientes (id_cliente)
);

INSERT INTO clientes VALUES 
(DEFAULT, "Olavo Silva", "457.896.864-74","olavosilva@gmail.com","senha1234"),
(DEFAULT, "Clara Macedo", "256.965.748-55","claramacedo@gmail.com","natal2026");

INSERT INTO filmes VALUES
(DEFAULT, "Velozes e Furiosos","Português Brasil",5),
(DEFAULT, "As Branquelas","Português Brasil",3);

INSERT INTO locacoes VALUES
(DEFAULT,DEFAULT,NULL,2,3),
(DEFAULT,DEFAULT,NULL,1,2);
