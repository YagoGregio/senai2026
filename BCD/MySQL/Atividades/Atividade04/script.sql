    SELECT * 
    FROM produto 
    WHERE nome_produto LIKE "D%";

    SELECT nome_produto,marca,estoque 
    FROM produto 
    WHERE marca LIKE "%E";

    SELECT nome_produto,marca,preco_unitario 
    FROM produto 
    WHERE nome_produto LIKE "%Gamer%";

    SELECT * 
    FROM cliente 
    WHERE nome_cliente LIKE "%Barbosa";

    SELECT cliente.nome_cliente, venda.data_venda, produto.preco_unitario, venda.forma_pagamento 
    FROM cliente,venda,produto 
    WHERE nome_cliente LIKE "C%";

    SELECT
    produto.nome_produto,
    venda.data_venda,
    venda.id_venda,
    venda.forma_pagamento
    FROM produto
    INNER JOIN venda
    ON produto.id_produto = venda.id_produto
    WHERE venda.forma_pagamento IN ('Pix', 'Boleto')
    AND produto.nome_produto LIKE '%Polegada%';

    SELECT
    nome_produto,
    nome_cliente,
    desconto_percentual,
    forma_pagamento
    FROM produto
    INNER JOIN venda ON produto.id_produto = venda.id_produto    
    INNER JOIN cliente ON venda.id_cliente = cliente.id_cliente 
    OR nome_produto LIKE "%Placa%"
    OR nome_produto LIKE "%Notebook%"
    WHERE nome_cliente LIKE "%Ana%"
    ORDER BY desconto_percentual ASC,
    forma_pagamento ASC;