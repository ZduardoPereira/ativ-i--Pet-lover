"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
class DeletarPet {
    clientes;
    entrada;
    constructor(clientes) {
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    deletarPet() {
        console.log(`Selecione o cliente para deletar o pet:`);
        console.log(`1 - Procurar por CPF`);
        console.log(`2 - Procurar por Nome`);
        console.log(`3 - Procurar por ID`);
        console.log(`0 - Fechar`);
        let opcaoBusca = this.entrada.receberNumero('Insira a opção de busca desejada: ');
        if (opcaoBusca === 1 || opcaoBusca === 2 || opcaoBusca === 3) {
            let index = -1;
            if (opcaoBusca === 1) {
                let cpf = this.entrada.receberTexto('Insira o CPF do cliente: ');
                const index = this.clientes.findIndex(c => c.getCpf.getValor === cpf);
            }
            else if (opcaoBusca === 2) {
                let nome = this.entrada.receberTexto('Insira o nome do cliente: ');
                index = this.clientes.findIndex(c => c.getNome === nome);
            }
            else if (opcaoBusca === 3) {
                let id = this.entrada.receberNumero('Insira o ID do cliente: ');
                index = this.clientes.findIndex(c => c.getId === id);
            }
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
                    let petDeletar = this.entrada.receberNumero('Selecione o número do pet para deletar: ');
                    if (petDeletar > 0 && petDeletar <= pets.length) {
                        const petIndex = petDeletar - 1;
                        const petDeletado = pets[petIndex];
                        cliente.removerPet(petIndex); // Método para remover o pet da lista do cliente
                        console.log(`Pet '${petDeletado.getNome}' deletado com sucesso.`);
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
        else if (opcaoBusca !== 0) {
            console.log(`Opção inválida.`);
        }
    }
}
exports.default = DeletarPet;
