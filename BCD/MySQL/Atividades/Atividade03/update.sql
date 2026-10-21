UPDATE cliente
SET cidade = "Senailandia"
WHERE estado IN ("DF","ES");

UPDATE cliente
SET data_cadastro = "2026-01-01"
WHERE cidade = "Manaus";