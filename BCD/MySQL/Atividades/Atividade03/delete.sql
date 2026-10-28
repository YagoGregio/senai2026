ALTER TABLE cliente
DROP INDEX id_cliente;

DELETE FROM cliente
WHERE id_cliente = 5;

DELETE FROM cliente
WHERE estado = 'SC';

DELETE FROM produto
WHERE id_produto IN (3, 5, 10);

DELETE FROM venda
WHERE desconto_porcentual = 0.00;

DELETE FROM venda
WHERE status_venda = 'Cancelada';