let btnOrdenar = document.querySelector('#btnOrdenarPorPreco')
btnOrdenar.addEventListener('click', ordernarLivros)

function ordernarLivros() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOrdenados)
}
