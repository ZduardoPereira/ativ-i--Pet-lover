"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Servico_1 = __importDefault(require("../model/Servico"));
class SelecionadorServicos {
    servicos;
    constructor(servicos) {
        this.servicos = servicos;
    }
    selecionar(nomeServico) {
        let servicoSelecionado = new Servico_1.default(nomeServico, 0, ``);
        this.servicos.forEach(servico => {
            if (nomeServico === servico._nome) {
                servicoSelecionado = servico;
            }
        });
        return servicoSelecionado;
    }
}
exports.default = SelecionadorServicos;
