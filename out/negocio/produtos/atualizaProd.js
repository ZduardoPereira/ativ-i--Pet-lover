"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
class AtualizarProduto {
    produtos;
    entrada;
    constructor(produtos) {
        this.produtos = produtos;
        this.entrada = new entrada_1.default();
    }
    atualizarProduto() {
        console.log(`Escolha a opção de busca:`);
        console.log(`1 - Procurar por ID`);
        console.log(`2 - Procurar por Nome`);
        let opcaoBusca = this.entrada.receberNumero('Insira a opção de busca desejada: ');
        if (opcaoBusca === 1) {
            for (let indexProduto = 0; indexProduto < this.produtos.length; indexProduto++) {
                console.log(`${indexProduto} - ${this.produtos[indexProduto].getNomeProduto()}`);
            }
            let id = this.entrada.receberNumero('Insira o ID do produto que deseja atualizar: ');
            if (id >= 0 && id < this.produtos.length) {
                this.processarResultado(id);
            }
            else {
                console.log(`ID inválido.`);
            }
        }
        else if (opcaoBusca === 2) {
            let nome = this.entrada.receberTexto('Insira o nome do produto que deseja atualizar: ');
            const index = this.produtos.findIndex(p => p.getNomeProduto().toLowerCase() === nome.toLowerCase());
            this.processarResultado(index);
        }
        else {
            console.log(`Opção inválida.`);
        }
        console.log(`--------------------------------------`);
    }
    processarResultado(index) {
        if (index !== -1) {
            const produto = this.produtos[index];
            console.log(`Produto encontrado: ID ${produto.getId()} | Nome: ${produto.getNomeProduto()} | Valor: R$ ${produto.getPrecoProduto()}`);
            const novoNomeProduto = this.entrada.receberTexto('Insira o novo nome do produto: ');
            const novaDescricaoProduto = this.entrada.receberTexto('Insira a nova descrição do produto: ');
            const novoValorProduto = this.entrada.receberNumero('Insira o novo valor do produto: R$ ');
            const novoEstoqueProduto = this.entrada.receberNumero('Insira o novo estoque do produto: ');
            produto.setNome(novoNomeProduto);
            produto.setDescricao(novaDescricaoProduto);
            produto.setPrecoProduto(novoValorProduto);
            produto.setEstoqueAtual(novoEstoqueProduto);
            console.log(`Produto atualizado com sucesso.`);
        }
        else {
            console.log(`Produto não encontrado.`);
        }
    }
}
exports.default = AtualizarProduto;
