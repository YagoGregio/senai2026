/*Tabela Produtos*/

SELECT * FROM `produto` WHERE 1

SELECT nome_produto,marca,estoque
FROM produto;

SELECT nome_produto,categoria,preco_unitario,data_cadastro, marca
FROM produto
ORDER BY marca ASC;

SELECT nome_produto,marca,preco_unitario,data_cadastro
FROM produto
ORDER BY data_cadastro ASC;

/*Tabela Cliente*/

SELECT * FROM `cliente` WHERE 1;

SELECT nome_cliente,email,cidade,estado
FROM cliente;

SELECT nome_cliente,cidade,estado
FROM cliente
ORDER BY estado ASC;

SELECT nome_cliente,email,estado,data_cadastro
FROM cliente
ORDER BY data_cadastro ASC;

/*Tabela Venda*/

SELECT * FROM `venda` WHERE 1;

SELECT nome_cliente,data_venda,preco_unitario,forma_pagamento
FROM venda;

SELECT produto.nome_produto,data_venda,quantidade,status_venda
FROM produto
INNER JOIN venda
ON venda.id_produto = produto.id_produto;

SELECT produto.nome_produto, venda.preco_unitario_venda, venda.forma_pagamento
FROM venda
INNER JOIN produto
ON venda.id_produto = produto.id_produto
WHERE forma_pagamento IN("PIX", "Boleto");

SELECT cliente.nome_cliente, produto.nome_produto, venda.data_venda, venda.quantidade
FROM venda
INNER JOIN cliente
ON venda.id_cliente = cliente.id_cliente
INNER JOIN produto
ON venda.id_produto = produto.id_produto;

SELECT produto.nome_produto, venda.desconto_percentual, venda.forma_pagamento, venda.data_venda
FROM venda
INNER JOIN produto
ON venda.id_produto = produto.id_produto
ORDER BY venda.data_venda ASC;

USE vendas_informatica;
SELECT produto.nome_produto, cliente.nome_cliente, venda.desconto_percentual, venda.forma_pagamento, venda.status_venda
FROM venda
INNER JOIN cliente
ON venda.id_cliente = cliente.id_cliente
INNER JOIN produto
ON venda.id_produto = produto.id_produto
ORDER BY venda.status_venda ASC;

SELECT cliente.nome_cliente, cliente.email, produto.nome_produto, produto.marca, produto.categoria, venda.forma_pagamento, venda.status_venda
FROM venda
INNER JOIN cliente
ON venda.id_cliente = cliente.id_cliente
INNER JOIN produto
ON venda.id_produto = produto.id_produto
ORDER BY venda.status_venda DESC;   

