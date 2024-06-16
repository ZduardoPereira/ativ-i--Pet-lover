"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CPF_1 = __importDefault(require("../model/CPF"));
const Cliente_1 = __importDefault(require("../model/Cliente"));
class Selecionador {
    clientes;
    constructor(clientes) {
        this.clientes = clientes;
    }
    selecionar(numeroCpf) {
        let cpf = new CPF_1.default(``, new Date());
        let clienteSelecionado = new Cliente_1.default(``, ``, cpf, [], new Date(), [], []);
        this.clientes.forEach(cliente => {
            if (numeroCpf === cliente.getCpf.getValor) {
                clienteSelecionado = cliente;
            }
        });
        return clienteSelecionado;
    }
}
exports.default = Selecionador;
