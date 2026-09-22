function calcularCompra() {

    // Pegando os valores digitados
    let preco = Number(document.getElementById("preco").value);

    let quantidade = Number(document.getElementById("quantidade").value);

    let pagamento = Number(document.getElementById("pagamento").value);

    let valorRecebido = Number(
        document.getElementById("valorRecebido").value
    );


    // Calculando o subtotal
    let subtotal = preco * quantidade;


    // Variável que armazenará o percentual de desconto
    let percentualDesconto = 0;


    // Verificando a forma de pagamento
    if (pagamento === 1) {

        // Dinheiro
        percentualDesconto = 10;

    } else if (pagamento === 2) {

        // Pix
        percentualDesconto = 5;

    } else {

        // Cartão
        percentualDesconto = 0;
    }


    // Calculando o valor do desconto
    let valorDesconto = subtotal * percentualDesconto / 100;


    // Calculando o valor final
    let total = subtotal - valorDesconto;


    // Variável para armazenar o nome do pagamento
    let nomePagamento;


    if (pagamento === 1) {

        nomePagamento = "Dinheiro";

    } else if (pagamento === 2) {

        nomePagamento = "Pix";

    } else {

        nomePagamento = "Cartão";
    }


    // Criando a mensagem inicial
    let mensagem =
        "Subtotal: R$ " + subtotal.toFixed(2) +
        "<br>Desconto: R$ " + valorDesconto.toFixed(2) +
        "<br>Total: R$ " + total.toFixed(2) +
        "<br>Pagamento: " + nomePagamento;


    // Se for dinheiro, calcula o troco
    if (pagamento === 1) {

        if (valorRecebido >= total) {

            let troco = valorRecebido - total;

            mensagem +=
                "<br>Valor recebido: R$ " +
                valorRecebido.toFixed(2);

            mensagem +=
                "<br>Troco: R$ " +
                troco.toFixed(2);

        } else {

            mensagem +=
                "<br>Valor recebido insuficiente.";
        }
    }


    // Mostra o resultado na página
    document.getElementById("resultado").innerHTML = mensagem;
}