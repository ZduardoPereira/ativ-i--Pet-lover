"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const Produto_1 = __importDefault(require("../model/Produto"));
const cadastro_1 = __importDefault(require("./cadastro"));
class CadastroProduto extends cadastro_1.default {
    produtos;
    entrada;
    constructor(produtos) {
        super();
        this.produtos = produtos;
        this.entrada = new entrada_1.default();
    }
    cadastrar() {
        console.log(`\n Cadastro de Produto`);
        let nomeProduto = this.entrada.receberTexto(`Informe o nome do Produto: `);
        let valorProduto = this.entrada.receberNumero(`Informe o valor do Produto: `);
        let tipoProduto = this.entrada.receberTexto(`Informe para qual tipo de animal é o Produto: `);
        let racaProduto = this.entrada.receberTexto(`Informe para qual raça de animal é o produto: `);
        let produto = new Produto_1.default(nomeProduto, valorProduto, tipoProduto, racaProduto);
        produto._nome = nomeProduto;
        produto._valor = valorProduto;
        produto._tipo = tipoProduto;
        produto._raca = racaProduto;
        this.produtos.push(produto);
        console.log(`\nCadastro de Produto concluido!\n `);
    }
}
exports.default = CadastroProduto;
