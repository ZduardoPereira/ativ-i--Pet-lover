"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./listagem"));
class ListagemServicos extends listagem_1.default {
    servicos;
    constructor(servicos) {
        super();
        this.servicos = servicos;
    }
    listar() {
        console.log(`\n Lista de todos os serviços: `);
        this.servicos.forEach(servico => {
            console.log(`Nome do Produto: ${servico._nome}`);
            console.log(`Valor do Produto: ${servico._valor}`);
            console.log(`-----------------------------------`);
        });
        console.log(`\n`);
    }
}
exports.default = ListagemServicos;
