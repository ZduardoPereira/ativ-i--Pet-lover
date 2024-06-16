"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
class DeletarServico {
    servicos;
    entrada;
    constructor(servicos) {
        this.servicos = servicos;
        this.entrada = new entrada_1.default();
    }
    deletarServico() {
        console.log(`Escolha a opção de busca:`);
        console.log(`1 - Procurar por Nome`);
        console.log(`2 - Procurar por ID`);
        let opcaoBusca = this.entrada.receberNumero('Insira a opção de busca desejada: ');
        if (opcaoBusca === 1) {
            let nome = this.entrada.receberTexto('Insira o nome do serviço que deseja deletar: ');
            const index = this.servicos.findIndex(s => s.nome.toLowerCase() === nome.toLowerCase());
            this.processarResultado(index);
        }
        else if (opcaoBusca === 2) {
            for (let indexServico = 0; indexServico < this.servicos.length; indexServico++) {
                console.log(`${indexServico} - ${this.servicos[indexServico].nome}`);
            }
            let id = this.entrada.receberNumero('Insira o ID do serviço que deseja deletar: ');
            if (id >= 0 && id < this.servicos.length) {
                this.processarResultado(id);
            }
            else {
                console.log(`ID inválido.`);
            }
        }
        else {
            console.log(`Opção inválida.`);
        }
        console.log(`--------------------------------------`);
    }
    processarResultado(index) {
        if (index !== -1) {
            const servico = this.servicos[index];
            console.log(`Serviço encontrado: ${servico.nome}`);
            const confirmacao = this.entrada.receberTexto('Tem certeza que deseja deletar este serviço? (s/n): ');
            if (confirmacao.toLowerCase() === 's') {
                this.servicos.splice(index, 1);
                console.log(`Serviço deletado com sucesso.`);
            }
            else {
                console.log(`Operação cancelada.`);
            }
        }
        else {
            console.log(`Índice inválido ou serviço não encontrado.`);
        }
    }
}
exports.default = DeletarServico;
