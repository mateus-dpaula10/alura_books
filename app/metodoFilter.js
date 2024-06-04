// for (let btn of document.querySelectorAll('.btn')) {
//     btn.addEventListener('click', function(){
//         let livrosFiltrados = livros.filter
//         (livro => livro.categoria == this.value)
//         console.table(livrosFiltrados)
//     })
// }

const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', 
filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    // let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
    let livrosFiltrados = categoria == 'disponivel' ? 
    filtrarPorDisponibilidade() : filtrarPorCategoria(categoria) 
    exibirOsLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    exibirLivrosDisponiveisNaTelaValores.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `
}
