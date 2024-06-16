"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empresa {
    _clientes;
    _produtos;
    _servicos;
    constructor() {
        this._clientes = [];
        this._produtos = [];
        this._servicos = [];
    }
    get getClientes() {
        return this._clientes;
    }
    get getProdutos() {
        return this._produtos;
    }
    get getServicos() {
        return this._servicos;
    }
}
exports.default = Empresa;
