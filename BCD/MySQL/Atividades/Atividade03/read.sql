/*1.*/ SELECT * FROM produto;

/*2.*/ SELECT nome_produto,marca,estoque 
FROM produto

/*3.*/ SELECT nome_produto,categoria, preco_unitario, data_cadastro 
FROM produto
ORDER BY marca ASC;

/*4.*/ SELECT nome_produto,categoria, preco_unitario, data_cadastro 
FROM produto
ORDER BY data_cadastro ASC;

/*5.*/ SELECT * FROM cliente

/*6.*/ SELECT nome_cliente, email, cidade, estado 
FROM cliente

/*7.*/ SELECT nome_cliente,cidade,estado 
FROM cliente
ORDER BY estado ASC;

/*8.*/ SELECT nome_cliente,email, estado,data_cadastro 
FROM cliente
ORDER BY data_cadastro ASC;

/*9.*/ SELECT * FROM venda;

/*10.*/ SELECT id_produto,data_venda,preco_unitario_venda,forma_pagamento 
FROM venda;

/*11.*/ SELECT id_produto,data_venda,quantidade,status_venda
FROM venda;