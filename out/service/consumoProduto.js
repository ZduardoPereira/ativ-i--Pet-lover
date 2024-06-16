"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
class ConsumoProduto {
    entrada;
    constructor() {
        this.entrada = new entrada_1.default();
    }
    cadastrarConsumoProduto(cliente, produto) {
        console.log(`Cadastro de consumo de produto`);
        cliente.setProdutosConsumidos = produto;
        console.log(`Cadastro concluido! `);
    }
}
exports.default = ConsumoProduto;
