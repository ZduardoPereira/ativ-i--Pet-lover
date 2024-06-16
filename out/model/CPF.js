"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CPF {
    _valor;
    _dataEmissao;
    constructor(valor, dataEmissao) {
        this._valor = valor;
        this._dataEmissao = dataEmissao;
    }
    get getValor() {
        return this._valor;
    }
    set setValor(valor) {
        this._valor = valor;
    }
    get getDataEmissao() {
        return this._dataEmissao;
    }
}
exports.default = CPF;
