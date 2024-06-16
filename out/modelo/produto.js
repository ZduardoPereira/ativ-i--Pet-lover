"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    constructor(nome, descricao, precoProduto, estoqueAtual) {
        this.id = Produto.idCounter++;
        this.nome = nome;
        this.descricao = descricao;
        this.precoProduto = precoProduto;
        this.estoqueAtual = estoqueAtual;
        this.quantidadeConsumida = 0; // Inicializa a quantidade consumida como zero
    }
    getId() {
        return this.id;
    }
    getNomeProduto() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getDescricao() {
        return this.descricao;
    }
    setDescricao(descricao) {
        this.descricao = descricao;
    }
    getPrecoProduto() {
        return this.precoProduto;
    }
    setPrecoProduto(precoProduto) {
        this.precoProduto = precoProduto;
    }
    getEstoqueAtual() {
        return this.estoqueAtual;
    }
    setEstoqueAtual(estoqueAtual) {
        this.estoqueAtual = estoqueAtual;
    }
    getQuantidadeConsumida() {
        return this.quantidadeConsumida;
    }
    setQuantidadeConsumida(quantidadeConsumida) {
        this.quantidadeConsumida = quantidadeConsumida;
    }
}
Produto.idCounter = 1;
exports.default = Produto;
