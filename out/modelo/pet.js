"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pet {
    nome;
    tipo;
    raca;
    genero;
    constructor(nome, raca, genero, tipo) {
        this.nome = nome;
        this.raca = raca;
        this.genero = genero;
        this.tipo = tipo;
    }
    setTipo(novoTipo) {
        this.tipo = novoTipo;
    }
    setRaca(novaRaca) {
        this.raca = novaRaca;
    }
    setGenero(novoGenero) {
        this.genero = novoGenero;
    }
    setNome(novoNome) {
        this.nome = novoNome;
    }
    get getNome() {
        return this.nome;
    }
    get getRaca() {
        return this.raca;
    }
    get getGenero() {
        return this.genero;
    }
    get getTipo() {
        return this.tipo;
    }
}
exports.default = Pet;
