"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Produto_1 = __importDefault(require("../model/Produto"));
class SelecionadorProdutos {
    produtos;
    constructor(produtos) {
        this.produtos = produtos;
    }
    selecionar(nomeProduto) {
        let produtoSelecionado = new Produto_1.default(nomeProduto, 0, ``, ``);
        this.produtos.forEach(produto => {
            if (nomeProduto === produto._nome) {
                produtoSelecionado = produto;
            }
        });
        return produtoSelecionado;
    }
}
exports.default = SelecionadorProdutos;
