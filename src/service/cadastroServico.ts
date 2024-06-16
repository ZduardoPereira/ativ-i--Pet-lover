import Entrada from "../io/entrada"
import Servico from "../model/Servico"
import Cadastro from "./cadastro"

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    
    public cadastrar(): void {
        console.log(`\n Cadastro de Serviços`)
        let nomeServico = this.entrada.receberTexto(` Informe o nome do serviço: `)
        let valorServico = this.entrada.receberNumero(` Informe o valor do serviço: `)
        let tipoServico = this.entrada.receberTexto(`Informe o tipo de animal destinado para o serviço: `)
        let servico = new Servico(nomeServico, valorServico, tipoServico)
        servico._nome = nomeServico
        servico._valor = valorServico
        servico._tipo = tipoServico

        this.servicos.push(servico)
        console.log(`\n Cadastro de serviço concluido! `)

    }
}