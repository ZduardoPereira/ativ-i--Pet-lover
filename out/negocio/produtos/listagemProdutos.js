"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("../listagem"));
class ListagemProduto extends listagem_1.default {
    produtos;
    constructor(produtos) {
        super();
        this.produtos = produtos;
    }
    listar() {
        console.log(`\nLista de todos os produtos: `);
        console.log(`--------------------------------------`);
        if (Array.isArray(this.produtos)) {
            this.produtos.forEach(produto => {
                console.log(`ID: ${produto.getId()}`);
                console.log(`Nome: ${produto.getNomeProduto()}`);
                console.log(`Descrição: ${produto.getDescricao()}`);
                console.log(`Preço da Venda: ${produto.getPrecoProduto()}`);
                console.log(`Estoque Atual: ${produto.getEstoqueAtual()}`);
                console.log(`Quantidade Consumida: ${produto.getQuantidadeConsumida()}`);
                console.log(`--------------------------------------`);
            });
        }
        else {
            console.log('A lista de produtos não é uma array.');
        }
    }
}
exports.default = ListagemProduto;
