"use strict";
// servicoManager.ts
Object.defineProperty(exports, "__esModule", { value: true });
class ServicoManager {
    constructor() {
        this.servicos = [];
        // Outros métodos relacionados a operações com serviços
    }
    adicionarServico(servico) {
        this.servicos.push(servico);
    }
    listarServicos() {
        return this.servicos;
    }
}
exports.default = ServicoManager;
