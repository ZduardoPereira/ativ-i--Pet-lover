"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RG {
    _valor;
    _dataEmissao;
    constructor(valor, dataEmissao) {
        this._valor = valor;
        this._dataEmissao = dataEmissao;
    }
    get getValor() {
        return this._valor;
    }
    get dataEmissao() {
        return this._dataEmissao;
    }
}
exports.default = RG;
