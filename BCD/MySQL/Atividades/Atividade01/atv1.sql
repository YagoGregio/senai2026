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