"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Telefone {
    _ddd;
    _numero;
    constructor(ddd, numero) {
        this._ddd = ddd;
        this._numero = numero;
    }
    get getDdd() {
        return this._ddd;
    }
    set setDdd(ddd) {
        this._ddd = ddd;
    }
    get getNumero() {
        return this._numero;
    }
    set setNumero(numero) {
        this._numero = numero;
    }
}
exports.default = Telefone;
