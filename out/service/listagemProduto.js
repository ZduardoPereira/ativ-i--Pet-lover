"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./listagem"));
class ListagemProdutos extends listagem_1.default {
    produtos;
    constructor(produtos) {
        super();
        this.produtos = produtos;
    }
    listar() {
        console.log(`\n Lista de todos os produtos: `);
        this.produtos.forEach(produto => {
            console.log(`Nome do Produto: ${produto._nome}`);
            console.log(`Valor do Produto: ${produto._valor}`);
            console.log(`-----------------------------------`);
        });
        console.log(`\n`);
    }
}
exports.default = ListagemProdutos;
