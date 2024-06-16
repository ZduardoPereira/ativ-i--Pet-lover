import Entrada from "../io/entrada"
import Produto from "../model/Produto"
import Cadastro from "./cadastro"

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\n Cadastro de Produto`);
        let nomeProduto = this.entrada.receberTexto(`Informe o nome do Produto: `)
        let valorProduto = this.entrada.receberNumero(`Informe o valor do Produto: `)
        let tipoProduto = this.entrada.receberTexto(`Informe para qual tipo de animal é o Produto: `)
        let racaProduto = this.entrada.receberTexto(`Informe para qual raça de animal é o produto: `)
        let produto = new Produto (nomeProduto, valorProduto, tipoProduto, racaProduto)
        produto._nome = nomeProduto
        produto._valor = valorProduto
        produto._tipo = tipoProduto
        produto._raca = racaProduto

        this.produtos.push(produto)
        console.log(`\nCadastro de Produto concluido!\n `)
    }
}