"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const produto_1 = __importDefault(require("../../modelo/produto"));
const cadastro_1 = require("../cadastro");
class CadastroProduto extends cadastro_1.CadastroPro {
    constructor(empresa) {
        super();
        this.empresa = empresa;
        this.entrada = new entrada_1.default();
    }
    cadastrarProduto() {
        console.log(`\nInício do cadastro de produto`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `);
        let descricao = this.entrada.receberTexto(`Por favor informe a descrição do produto: `);
        let valor = this.entrada.receberNumero(`Por favor informe o valor do produto (Usar . ao invés de ,) R$: `);
        let estoqueAtual = this.entrada.receberNumero(`Informe a quantidade em estoque: `);
        let novoProduto = new produto_1.default(nome, descricao, valor, estoqueAtual);
        this.empresa.adicionarProduto(novoProduto);
        console.log(`\nCadastro concluído :)\n`);
    }
}
exports.default = CadastroProduto;
