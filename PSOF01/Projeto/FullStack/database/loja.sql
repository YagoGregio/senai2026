CREATE DATABASE IF  NOT EXISTS loja
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE loja;

CREATE TABLE IF NOT EXISTS produtos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(120) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO produtos (nome, descricao, preco) VALUES
('Teclado', 'Teclado USB', 99.90),
('Mouse', 'Mouse optico', 49.90),
('Monitor', 'Monitor 24 Polegadas', 799.90);

