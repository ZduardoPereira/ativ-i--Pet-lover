"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const Servico_1 = __importDefault(require("../model/Servico"));
const cadastro_1 = __importDefault(require("./cadastro"));
class CadastroServico extends cadastro_1.default {
    servicos;
    entrada;
    constructor(servicos) {
        super();
        this.servicos = servicos;
        this.entrada = new entrada_1.default();
    }
    cadastrar() {
        console.log(`\n Cadastro de Serviços`);
        let nomeServico = this.entrada.receberTexto(` Informe o nome do serviço: `);
        let valorServico = this.entrada.receberNumero(` Informe o valor do serviço: `);
        let tipoServico = this.entrada.receberTexto(`Informe o tipo de animal destinado para o serviço: `);
        let servico = new Servico_1.default(nomeServico, valorServico, tipoServico);
        servico._nome = nomeServico;
        servico._valor = valorServico;
        servico._tipo = tipoServico;
        this.servicos.push(servico);
        console.log(`\n Cadastro de serviço concluido! `);
    }
}
exports.default = CadastroServico;
