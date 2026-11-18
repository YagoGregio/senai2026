UPDATE cliente
SET cidade = "Senailandia"
WHERE estado IN ("DF", "ES");

UPDATE cliente
SET data_cadastro = "2026-01-01"
WHERE cidade = "Manaus";

UPDATE cliente
SET nome_cliente = "Michael Jackson"
WHERE id_cliente = 10;

UPDATE produto
SET nome_produto = "Notebook Lenovo IdeaPad 7"
WHERE id_produto = 1;

UPDATE produto
SET preco_unitario = 4999.99
WHERE marca = "DELL"
AND categoria = "Notebook";

UPDATE venda
SET desconto_percentual = 0.01
WHERE quantidade >= 2;
