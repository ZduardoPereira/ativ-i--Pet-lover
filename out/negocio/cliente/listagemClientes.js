"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("../listagem"));
class ListagemClientes extends listagem_1.default {
    calcularQuantidadeProdutosServicos() {
        throw new Error("Method not implemented.");
    }
    constructor(clientes) {
        super();
        this.clientes = clientes; // Atribui a lista importada à propriedade clientes
    }
    listar() {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Rg: ` + cliente.getRgs.map(rg => {
                return rg.getValor;
            }));
            console.log(`Telefone: ` + cliente.getTelefones.map(Telefone => {
                return Telefone.getDdd + Telefone.getNumero;
            }));
            const petsCliente = cliente.getPets;
            if (petsCliente.length > 0) {
                console.log(`Pets:`);
                petsCliente.forEach(pet => {
                    console.log(`   Nome: ${pet.getNome}, \n   Raça: ${pet.getRaca}, \n   Gênero: ${pet.getGenero}, \n   Tipo: ${pet.getTipo}`);
                    console.log(``);
                });
            }
            else {
                console.log(`Não há pets cadastrados para este cliente.`);
            }
            const servicosCliente = cliente.getServicosConsumidos;
            if (servicosCliente.length > 0) {
                console.log(`Serviços consumidos:`);
                servicosCliente.forEach(servico => {
                    console.log(`   Nome: ${servico.getNome()}\n   Preço: R$ ${servico.getPreco()}`);
                });
            }
            else {
                console.log(`Este cliente ainda não consumiu nenhum serviço`);
            }
            console.log('');
            const produtosCliente = cliente.getProdutosConsumidos;
            if (produtosCliente.length > 0) {
                console.log(`Produtos consumidos:`);
                produtosCliente.forEach(produto => {
                    console.log(`   Nome do Produto: ${produto.getNomeProduto()}\n   Descrição: ${produto.getDescricao()}\n   Preço: R$ ${produto.getPrecoProduto()}`);
                });
            }
            else {
                console.log(`Este cliente ainda não consumiu nenhum produto`);
            }
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}
exports.default = ListagemClientes;
