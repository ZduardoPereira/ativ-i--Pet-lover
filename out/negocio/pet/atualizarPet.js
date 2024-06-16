"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
class AtualizarPet {
    clientes;
    entrada;
    constructor(clientes) {
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    atualizarPet() {
        console.log(`Escolha a opção de busca:`);
        console.log(`1 - Procurar por CPF`);
        console.log(`2 - Procurar por Nome`);
        console.log(`3 - Procurar por ID`);
        let opcaoBusca = this.entrada.receberNumero('Insira a opção de busca desejada: ');
        if (opcaoBusca === 1) {
            let cpf = this.entrada.receberTexto('Insira o CPF do cliente que deseja atualizar: ');
            const index = this.clientes.findIndex(c => c.getCpf.getValor === cpf);
            this.processarResultado(index);
        }
        else if (opcaoBusca === 2) {
            let nome = this.entrada.receberTexto('Insira o nome do cliente que deseja atualizar: ');
            const index = this.clientes.findIndex(c => c.getNome === nome);
            this.processarResultado(index);
        }
        else if (opcaoBusca === 3) {
            let id = this.entrada.receberNumero('Insira o ID do cliente que deseja atualizar: ');
            const index = this.clientes.findIndex(c => c.getId === id);
            this.processarResultado(index);
        }
        else {
            console.log(`Opção inválida.`);
        }
        console.log(`--------------------------------------`);
    }
    processarResultado(index) {
        if (index !== -1) {
            const cliente = this.clientes[index];
            console.log(`Cliente encontrado: ${cliente.getNome} (ID: ${cliente.getId})`);
            const pets = cliente.getPets;
            if (pets.length === 0) {
                console.log(`Este cliente não possui pets.`);
            }
            else {
                console.log(`Pets do cliente:`);
                for (let i = 0; i < pets.length; i++) {
                    console.log(`${i + 1} - ${pets[i].getNome} (${pets[i].getTipo})`);
                }
                let petAtualizar = this.entrada.receberNumero('Selecione o número do pet para atualizar: ');
                if (petAtualizar > 0 && petAtualizar <= pets.length) {
                    const petIndexToUpdate = petAtualizar - 1;
                    const novoNomePet = this.entrada.receberTexto('Insira o novo nome do pet: ');
                    const novaRacaPet = this.entrada.receberTexto('Insira a nova raça do pet: ');
                    const novoGeneroPet = this.entrada.receberTexto('Insira o novo gênero do pet: ');
                    const novoTipoPet = this.entrada.receberTexto('Insira o novo tipo do pet: ');
                    cliente.atualizarPet(petIndexToUpdate, novoNomePet, novaRacaPet, novoGeneroPet, novoTipoPet);
                    console.log(`Pet atualizado com sucesso.`);
                }
                else {
                    console.log(`Número do pet inválido.`);
                }
            }
        }
        else {
            console.log(`Cliente não encontrado.`);
        }
    }
}
exports.default = AtualizarPet;
