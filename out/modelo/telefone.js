"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Telefone {
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
