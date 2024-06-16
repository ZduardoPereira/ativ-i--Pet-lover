"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    _nome; // a exclamação (!) indica que a propriedade sera definida em um lugar fora do constructor
    _valor;
    _tipo;
    _raca;
    constructor(_nome, valor, tipo, raca) {
        this._nome = _nome;
        this._valor = valor;
        this._tipo = tipo;
        this._raca = raca;
    }
}
exports.default = Produto;
