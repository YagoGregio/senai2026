CREATE DATABASE empresa_vendas;

USE empresa_vendas;

CREATE TABLE cliente(

    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome_cliente VARCHAR(100) NOT NULL,
    email_cliente VARCHAR(100) NOT NULL UNIQUE,
    telefone_cliente VARCHAR(15) NOT NULL,
);

CREATE TABLE produto(
    id_produto INT PRIMARY KEY AUTO_INCREMENT,
    nome_produto VARCHAR(100) NOT NULL,
    preco_produto DECIMAL(10, 2) NOT NULL
);

CREATE TABLE venda(
    id_venda INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    id_produto INT NOT NULL,
    data_venda DATE NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente),
    FOREIGN KEY (id_produto) REFERENCES produto(id_produto)
);

INSERT INTO cliente (nome_cliente, email_cliente, telefone_cliente)
VALUES ("Ana Beatriz Silva", "ana.beatriz.silva@hotmail.com", "(11) 98742-3156");

INSERT INTO cliente (nome_cliente, email_cliente, telefone_cliente)
VALUES ("Gabriel Henrique Souza", "gabriel.henrique.souza@gmail.com", "(21) 97631-4285");

INSERT INTO cliente (nome_cliente, email_cliente, telefone_cliente)
VALUES ("Lucas Almeida Santos", "lucas.almeidasantos@outlook.com", "(31) 99158-6732");

