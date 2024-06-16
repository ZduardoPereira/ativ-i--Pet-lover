import Produto from "../model/Produto"

export default class SelecionadorProdutos {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>){
        this.produtos = produtos
    }

    public selecionar(nomeProduto: string) {
        let produtoSelecionado = new Produto(nomeProduto, 0, ``, ``)
        this.produtos.forEach(produto => {
            if (nomeProduto === produto._nome) {
                produtoSelecionado = produto
            }
        })
        return produtoSelecionado
    }
}