"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const insertCliente_1 = __importDefault(require("../insert/insertCliente"));
const produto_1 = __importDefault(require("./produto"));
const servico_1 = __importDefault(require("./servico"));
class Empresa {
    constructor() {
        this.clientes = insertCliente_1.default;
        this.produtos = [];
        this.servicos = [];
        // Adiciona produtos à lista
        this.adicionarProduto(new produto_1.default('Grand Plus para gatos castrados', 'Ração para gatos castrados 10,1kg', 128.75, 15));
        this.adicionarProduto(new produto_1.default('Pedigree para cachorros medios/grandes', 'Ração para cachorros castrados 3kg', 25.19, 12));
        this.adicionarProduto(new produto_1.default('Caixa de transporte pequena', 'Ideal para gatos e cachorros pequenos', 68.90, 25));
        this.adicionarProduto(new produto_1.default('Antipulgas Simparic', 'Cães de 5 a 10kg 20mg 1 comprimido', 64.90, 18));
        // Exemplo: Adiciona alguns serviços à lista
        this.adicionarServico(new servico_1.default("Banho e tosa", 60));
        this.adicionarServico(new servico_1.default("Banho", 40));
        this.adicionarServico(new servico_1.default('Tosa', 30));
        this.adicionarServico(new servico_1.default('Consulta veterinaria', 90));
        // Adicione mais serviços conforme necessário
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
    }
    adicionarServico(servico) {
        this.servicos.push(servico);
    }
    get getClientes() {
        return this.clientes;
    }
    get getProdutos() {
        return this.produtos;
    }
    get getServicos() {
        return this.servicos;
    }
}
exports.default = Empresa;
