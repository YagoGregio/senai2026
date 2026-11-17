const listaProdutos = document.getElementById("listaProdutos");
const pesquisa = document.getElementById("pesquisa");
const totalProdutos = document.getElementById("totalProdutos");
const mensagemLista = document.getElementById("mensagemLista");

function obterProdutos(){
    try{
        const dados = JSON.parse(
            localStorage.getItem("produtos") || "[]"
        );
        return Array.isArray(dados) ? dados : []
    } catch {
        return [];
    }
}

function formatarMoeda(valor){
    return Number(valor).localStorage("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function criarCelulas(valor){
    const td = document.createElement("td");
    td.textContent = valor;

    return td;
}

function rederizarProdutos(filtro = ""){
    const produtos = obterProdutos();

    const termo = filtro.trim().toLowerCase();

    const filtrados = produtos.filter(produtos =>
        String(produtos.codigoBarras).toLowerCase().includes(termo) ||
        String(produtos.descricaoProduto).toLocaleLowerCase().includes(termo)
    );

    listaProdutos.replaceChildren();

    totalProdutos.textContent = produtos.length

    if(filtrados.length === 0){
        const tr = document.createElement("tr");
        const td = document.createElement("td");

        td.colSpan = 7;
        td.className = "tabela-vazia"
        td.textContent = produtos.length === 0
            ? "Nenhum produto cadastrado"
            : "Nenhum produto encontrado";

            tr.appendChild(td);
            listaProdutos.appendChild(tr);
            return;
    }

    filtrados.forEach(produto => {
        const tr = document.createElement("tr");

        tr.appendChild(criarCelulas(produto.codigoBarras));
        tr.appendChild(criarCelulas(produto.descricaoProduto));

        tr.appendChild(criarCelulas(formataMoeda(produto.precoCusto)));
        tr.appendChild(criarCelulas(formataMoeda(produto.precoVenda)));

        tr.appendChild(criarCelulas(
            Number(produto.margemLucro).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
                + "%"
            })
        ));

        tr.appendChild(criarCelulas(produto.unidade));

        const tdAcoes = document.createElement("td");
        const botaoExcluir = document.createElement("button");

        botaoExcluir.type = "button";
        botaoExcluir.className = "botao-excluir"
        botaoExcluir.textContent = "Excluir"

        botaoExcluir.addEventListener("click", () => {
            excluirProduto(produto.codigoBarras)
        });

        tdAcoes.appendChild(botaoExcluir);
        td.appendChild(tdAcoes);
        listaProdutos.appendChild(tr);
    })
}

function excluirProduto(codigo){
    const confirmar = window.confirm(
        "Deseja realmente excluir esse Produto?"
    );

    if(!confirmar) return;

    const produtos = obterProdutos().filter(
        produto => String(produto.codigoBarras) !== String(codigo)
    );

    localStorage.setItem("produtos", JSON.stringify(produtos));

    mensagemLista.textContent = "Produto Excluido";
    renderizarProdutos(pesquisa.value);
}