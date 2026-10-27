const formProduto = document.getElementById("formProduto"); 
const precoCusto = document.getElementById("precoCusto");
const precoVenda = document.getElementById("precoVenda");
const margemLucro = document.getElementById("margemLucro");
const mensagemProduto = document.getElementById("mensagemProduto");

function calcularMargem(){
    const custo = Number(precoCusto.value);
    const venda = Number(precoVenda.value);

    if (precoCusto.value === "" ||
        precoVenda.value === "" ||
        custo <= 0 ||
        venda < 0 ){
            margemLucro.value = "-";
            return;
        
    }
    
    const margem = ((venda - custo) / custo) * 100;

    margemLucro.value = margem.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }) + "%";
}  

precoCusto.addEventListener("input", calcularMargem)
precoVenda.addEventListener("input", calcularMargem)

formProduto.addEventListener("reset", function () {
    setTimeout(() => {
        margemLucro.value = "0,00"
        mensagemProduto.textContent = "";
    })
})

formProduto.addEventListener("submit", function(event){
    event.preventDefault();

    const codigo = document.getElementById("codigoBarras").value.trim();
    const descricao = document.getElementById("descricaoProduto").value.trim();
    const custo = Number(precoCusto.value);
    const venda = Number(precoVenda.value);
    const unidade = document.querySelector('input[name=unidade]:checked');

    if(!/^\d+$/.test(codigo)){
        mensagemProduto.textContent = "Informe um código válido.";
        return;
    }

    if(!descricao || !Number.isFinite(custo) ||
        !Number.isFinite(venda) || custo <= 0 || venda <= 0){
            mensagemProduto.textContent = "Preencha a descrição e informe maiores que zero.";

            return;
    }

    if(!unidade) {
        mensagemProduto.textContent = "Selecione um uniadade."
        return;
    }

    let produtos;

    try{

        produtos = JSON.parse(localStorage.getItem("produtos") || "[]")

        if(!Array.isArray(produtos)){
            produtos = []
        }
    } catch {
        produtos = []
    }

    if(produtos.some( p =>
        String(p.codigoBarras) === codigo
    )) {
        mensagemProduto.textContent = "Já existe um produto com esse código de barras";
        return;
    }
});
