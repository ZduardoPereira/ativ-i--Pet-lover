import Entrada from "../io/entrada";
import Cliente from "../model/Cliente";
import Produto from "../model/Produto";

export default class ConsumoProduto{
    private entrada: Entrada
    constructor(){
        this.entrada = new Entrada()
    }

    public cadastrarConsumoProduto(cliente: Cliente, produto: Produto): void {
        console.log(`Cadastro de consumo de produto`)
        cliente.setProdutosConsumidos = produto
        console.log(`Cadastro concluido! `)
        
    } 
}