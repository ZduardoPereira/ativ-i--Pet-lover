"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    _nome;
    _nomeSocial;
    _cpf;
    _rgs;
    _dataCadastro;
    _telefones;
    _produtosConsumidos;
    _servicosConsumidos;
    _pets;
    constructor(nome, nomeSocial, cpf, rgs, dataCadastro, telefones, pets) {
        this._nome = nome;
        this._nomeSocial = nomeSocial;
        this._cpf = cpf;
        this._rgs = rgs;
        this._dataCadastro = new Date();
        this._telefones = [];
        this._produtosConsumidos = [];
        this._servicosConsumidos = [];
        this._pets = [];
    }
    get getNome() {
        return this._nome;
    }
    set setNome(nome) {
        this._nome = nome;
    }
    get getNomeSocial() {
        return this._nomeSocial;
    }
    set setNomeSocial(nomeSocial) {
        this._nomeSocial = nomeSocial;
    }
    get getCpf() {
        return this._cpf;
    }
    set setCpf(cpf) {
        this._cpf = cpf;
    }
    get getRg() {
        return this._rgs;
    }
    set setRg(rg) {
        this._rgs.push(rg);
    }
    get getDataCadastro() {
        return this._dataCadastro;
    }
    get getTelefones() {
        return this._telefones;
    }
    get getProdutosConsumidos() {
        return this._produtosConsumidos;
    }
    set setProdutosConsumidos(produto) {
        this._produtosConsumidos.push(produto);
    }
    get getServicosConsumidos() {
        return this._servicosConsumidos;
    }
    set setServicosConsumidos(servico) {
        this._servicosConsumidos.push(servico);
    }
    get getPets() {
        return this._pets;
    }
}
exports.default = Cliente;
