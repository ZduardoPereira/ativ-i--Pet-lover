// servicoManager.ts

import Servico from "./servico";

export default class ServicoManager {
    private servicos: Servico[] = [];
    getServicos: any;

    adicionarServico(servico: Servico) {
        this.servicos.push(servico);
    }

    listarServicos(): Servico[] {
        return this.servicos;
    }

    // Outros métodos relacionados a operações com serviços
}
