"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const servico_1 = __importDefault(require("../../modelo/servico"));
class CadastroServico {
    servicos;
    entrada;
    constructor(servicos) {
        this.servicos = servicos;
        this.entrada = new entrada_1.default();
    }
    cadastrarServico() {
        console.log(`\nInício do cadastro do serviço:`);
        let nome = this.entrada.receberTexto(`Por favor, insira o nome do serviço prestado: `);
        let valor = this.entrada.receberNumero(`E agora, por favor, insira o preço desse serviço: R$`);
        let novoServico = new servico_1.default(nome, valor);
        this.servicos.push(novoServico);
        console.log(`\nCadastro de serviço concluído :)\n`);
    }
    getServicos() {
        return this.servicos;
    }
}
exports.default = CadastroServico;
