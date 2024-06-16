"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const cadastro_1 = __importDefault(require("../cadastro"));
const pet_1 = __importDefault(require("../../modelo/pet"));
class CadastroPet extends cadastro_1.default {
    clientes;
    entrada;
    constructor(clientes) {
        super();
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    cadastrar() {
        this.cadastrarPet();
    }
    cadastrarPet() {
        console.log(`Escolha a opção para deletar um pet:`);
        console.log(`1 - Procurar por CPF`);
        console.log(`2 - Procurar por Nome`);
        console.log(`3 - Procurar por ID`);
        let opcaoBusca = this.entrada.receberNumero('Insira a opção de busca desejada: ');
        let index = -1;
        if (opcaoBusca === 1) {
            let cpf = this.entrada.receberTexto('Insira o CPF do cliente que deseja atualizar: ');
            index = this.clientes.findIndex(c => c.getCpf.getValor === cpf);
            this.processarResultado(index);
        }
        else if (opcaoBusca === 2) {
            let nome = this.entrada.receberTexto('Insira o nome do cliente que deseja atualizar: ');
            index = this.clientes.findIndex(c => c.getNome === nome);
            this.processarResultado(index);
        }
        else if (opcaoBusca === 3) {
            let id = this.entrada.receberNumero('Insira o ID do cliente que deseja atualizar: ');
            index = this.clientes.findIndex(c => c.getId === id);
            this.processarResultado(index);
        }
        else {
            console.log(`Opção inválida.`);
        }
        if (index !== -1) {
            let adicionarMaisPets = true;
            while (adicionarMaisPets) {
                const nomePet = this.entrada.receberTexto(`Por favor informe o nome do pet: `);
                const tipoPet = this.entrada.receberTexto(`Por favor informe o tipo do pet: `);
                const racaPet = this.entrada.receberTexto(`Por favor informe a raça do pet: `);
                const generoPet = this.entrada.receberTexto(`Por favor informe o gênero do pet: `);
                const pet = new pet_1.default(nomePet, racaPet, generoPet, tipoPet);
                this.clientes[index].adicionarPet(pet); // Associar o pet ao cliente
                console.log(`Pet cadastrado para ${this.clientes[index].getNome}`);
                const resposta = this.entrada.receberTexto(`Deseja adicionar mais um pet? (s/n): `);
                adicionarMaisPets = resposta.toLowerCase() === 's';
            }
            console.log(`\nCadastro concluído :)\n`);
        }
        else {
            console.log(`Cliente não encontrado.`);
        }
    }
    processarResultado(index) {
        // Implemente a lógica de processamento do resultado se necessário
        if (index === -1) {
            console.log(`Cliente não encontrado.`);
        }
        else {
            console.log(`Cliente encontrado.`);
        }
    }
}
exports.default = CadastroPet;
