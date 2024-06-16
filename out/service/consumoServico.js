"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
class ConsumoServico {
    entrada;
    constructor() {
        this.entrada = new entrada_1.default();
    }
    cadastrarConsumoServico(cliente, servico) {
        console.log(`\nCadastro de consumo de Serviço`);
        cliente.setServicosConsumidos = servico;
        console.log(`\nCadastro concluido! `);
    }
}
exports.default = ConsumoServico;
