import Produto from "../model/Produto";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem{
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
    }

    public listar(): void {
        console.log(`\n Lista de todos os produtos: `);

        this.produtos.forEach(produto => {
            console.log(`Nome do Produto: ${produto._nome}`)
            console.log(`Valor do Produto: ${produto._valor}`)
            console.log(`-----------------------------------`)

        })

        console.log(`\n`)
    }
} 