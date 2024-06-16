"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Servico {
    constructor(nome, valor) {
        Servico.ultimoId++;
        this.id = Servico.ultimoId;
        this.nome = nome;
        this.valor = valor;
        this.vendas = 0;
    }
    addVenda() {
        this.vendas++;
    }
    removerVenda() {
        this.vendas--;
    }
    getNome() {
        return this.nome;
    }
    getPreco() {
        return this.valor;
    }
}
Servico.ultimoId = 0;
exports.default = Servico;
