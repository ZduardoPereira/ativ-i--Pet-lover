"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Servico {
    static ultimoId = 0;
    id;
    nome;
    valor;
    vendas;
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
exports.default = Servico;
