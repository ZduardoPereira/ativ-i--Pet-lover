"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pet {
    _nome;
    _tipo;
    _raca;
    _genero;
    constructor(nome, tipo, raca, genero) {
        this._nome = nome;
        this._tipo = tipo;
        this._raca = raca;
        this._genero = genero;
    }
    get getNome() {
        return this._nome;
    }
    set setNome(nome) {
        this._nome = nome;
    }
    get getTipo() {
        return this._tipo;
    }
    set setTipo(tipo) {
        this._tipo = tipo;
    }
    get getRaca() {
        return this._raca;
    }
    set setRaca(raca) {
        this._raca = raca;
    }
    get getGenero() {
        return this._genero;
    }
    set setGenero(genero) {
        this._genero = genero;
    }
}
exports.default = Pet;
