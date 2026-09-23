CREATE DATABASE db_senai;

USE db_senai;

CREATE TABLE cliente(
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome_cliente VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    dt_nasc DATE NOT NULL                
);

CREATE TABLE produto(
    id_produto INT PRIMARY KEY AUTO_INCREMENT,
    produto VARCHAR(100) NOT NULL,
    dt_entrega DATE NOT NULL,
    preco DECIMAL(19,2) NOT NULL,
    qtd INT NOT NULL
);

CREATE TABLE venda(
    id_venda INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    id_produto INT NOT NULL,
    dt_entrada DATE NOT NULL
);
USE db_senai;

INSERT INTO cliente (nome_cliente,email,dt_nasc)
    VALUES ("Michael Jackson","m.jackson@gmail.com","1958-08-29");

INSERT INTO cliente (nome_cliente,email,dt_nasc)
    VALUES ("Ayrton Senna","ayrton.senna@gmail.com","1960-03-21");

INSERT INTO cliente (nome_cliente,email,dt_nasc)
    VALUES ("Lewis Hamilton","lewis.hamilton@gmail.com","1985-01-07");

USE db_senai;

INSERT INTO produto (produto,dt_entrega,preco,qtd)
    VALUES ("Monitor Dell","2026-08-23","2800.00",4);

INSERT INTO produto (produto,dt_entrega,preco,qtd)
    VALUES ("Mouse Dell","2026-05-06","125.00",3);

INSERT INTO produto (produto,dt_entrega,preco,qtd)
    VALUES ("Teclado Dell","2026-08-03","125.00",5);

USE db_senai;

INSERT INTO venda (id_cliente,id_produto,dt_entrada)
    VALUES (1,1,"2026-09-25");

INSERT INTO venda (id_cliente,id_produto,dt_entrada)
    VALUES (3,2,"2022-11-23");

INSERT INTO venda (id_cliente,id_produto,dt_entrada)
    VALUES (2,3"2023-09-25");

ALTER TABLE venda
ADD CONSTRAINT FK
FOREIGN KEY (id_cliente)
REFERENCES cliente (id_cliente);