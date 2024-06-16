import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import atualizarServico from "./atualizarServico";

export default class CadastroServico {
    private servicos: Array<Servico>;
    private entrada: Entrada;

    constructor(servicos: Array<Servico>) {
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public cadastrarServico(): void {
        console.log(`\nInício do cadastro do serviço:`);
        let nome = this.entrada.receberTexto(`Por favor, insira o nome do serviço prestado: `);
        let valor = this.entrada.receberNumero(`E agora, por favor, insira o preço desse serviço: R$`);
        let novoServico = new Servico(nome, valor);
        this.servicos.push(novoServico);
        console.log(`\nCadastro de serviço concluído :)\n`);
    }

   

    public getServicos(): Array<Servico> {
        return this.servicos;
    }
}
