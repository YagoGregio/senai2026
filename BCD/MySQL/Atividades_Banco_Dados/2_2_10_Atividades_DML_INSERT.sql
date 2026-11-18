INSERT INTO cliente(nome_cliente,email,cidade,estado,data_cadastro)
VALUES("Rubervaldo Sesiano","ruber.sesi@gmail.com","Jaguariúna","SP","2026-10-28");

INSERT INTO produto(nome_produto,categoria,marca,preco_unitario,estoque,ativo,data_cadastro) 
VALUES ("MousePad 5POL","Periférico","Lumix",59.98,35,1,"2026-10-28");

INSERT INTO venda(id_produto,id_cliente,data_venda,quantidade,desconto_percentual,
preco_unitario_venda,forma_pagamento,status_venda)
VALUES(21,101,"2026-10-21",10,1.33,599.98,1.33,"Pix","Concluida");