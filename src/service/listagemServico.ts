import Servico from "../model/Servico";
import Listagem from "./listagem";

export default class ListagemServicos extends Listagem{
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
    }

    public listar(): void {
        console.log(`\n Lista de todos os serviços: `);

        this.servicos.forEach(servico => {
            console.log(`Nome do Produto: ${servico._nome}`)
            console.log(`Valor do Produto: ${servico._valor}`)
            console.log(`-----------------------------------`)

        })

        console.log(`\n`)
    }
} 