import Servico from "../model/Servico"

export default class SelecionadorServicos {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>){
        this.servicos = servicos
    }

    public selecionar(nomeServico: string) {
        let servicoSelecionado = new Servico(nomeServico, 0, ``,)
        this.servicos.forEach(servico => {
            if (nomeServico === servico._nome) {
                servicoSelecionado = servico
            }
        })
        return servicoSelecionado
    }
}