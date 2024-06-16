"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("../listagem"));
class ListagemServico extends listagem_1.default {
    servicos;
    constructor(servicos) {
        super();
        this.servicos = servicos;
    }
    listar() {
        console.log(`\nLista de todos os serviços:`);
        console.log(`--------------------------------------`);
        this.servicos.forEach(servico => {
            console.log(`ID: ` + servico.id);
            console.log(`Nome: ` + servico.nome);
            console.log(`Preço: ` + servico.valor);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}
exports.default = ListagemServico;
