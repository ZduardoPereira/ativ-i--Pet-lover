"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Telefone {
    ddd;
    numero;
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
    get getDdd() {
        return this.ddd;
    }
    get getNumero() {
        return this.numero;
    }
}
exports.default = Telefone;
