import Entrada from "../io/entrada"
import Cliente from "../model/Cliente"
import Servico from "../model/Servico"

export default class ConsumoServico{
    private entrada: Entrada
    constructor(){
        this.entrada = new Entrada()
    }

    public cadastrarConsumoServico(cliente: Cliente, servico: Servico): void {
        console.log(`\nCadastro de consumo de Serviço`)
        cliente.setServicosConsumidos = servico
        console.log(`\nCadastro concluido! `)
        
    } 
}