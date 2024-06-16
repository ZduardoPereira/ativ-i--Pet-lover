"use strict";
// servicoManager.ts
Object.defineProperty(exports, "__esModule", { value: true });
class ServicoManager {
    servicos = [];
    getServicos;
    adicionarServico(servico) {
        this.servicos.push(servico);
    }
    listarServicos() {
        return this.servicos;
    }
}
exports.default = ServicoManager;
