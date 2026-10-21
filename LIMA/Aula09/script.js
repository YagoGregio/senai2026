let totalCompra = 0;

function adicionarCarrinho(nomeProduto, precoProduto) {
    const lista = document.getElementById("listaCarrinho");

    const item = document.createElement("li");
    item.textContent = nomeProduto+ " - R$ " + precoProduto.toFixed(2)

    lista.appendChild(item);

    totalCompra = totalCompra + precoProduto;

    atualizarTotal();
}

function atualizarTotal(){
    const total = document.getElementById("total");

    total.textContent = "Total: R$" + totalCompra.toFixed(2)
}

function finalizarCompra(){
    if (totalCompra === 0){
        alert("Adicione um produto no carrinho");
    } else {
        alert("Finalizada com sucesso! R$" + totalCompra.toFixed(2))
        limparTotal();

        document.getElementById("listaCarrinho").innerHTML = ""

        totalCompra = 0;

        atualizarTotal();
    }
}

function limparTotal(){
    document.getElementById("listaCarrinho").innerHTML = "";
    totalCompra = 0;
    atualizarTotal();
}