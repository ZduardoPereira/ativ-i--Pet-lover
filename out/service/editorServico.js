"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
class EditorServico {
    entrada;
    constructor() {
        this.entrada = new entrada_1.default();
    }
    editar(servico) {
        console.log(`Edição do Produto`);
        let editarServico = true;
        while (editarServico) {
            console.log(`Opções de Edição: `);
            console.log(`1- Editar nome do Serviço`);
            console.log(`2- Editar o valor do Serviço`);
            console.log(`0- Retornar ao menu principal`);
            let opcao = this.entrada.receberNumero(`Escolha uma opção: `);
            switch (opcao) {
                case 1:
                    let nome = this.entrada.receberTexto(`Informe o nome do Produto: `);
                    servico._nome = nome;
                    editarServico = this.entrada.receberTexto(`Deseja alterar mais alguma informação do cliente? (s/n) `);
                    if (editarServico === "s" || editarServico === "S") {
                        editarServico = true;
                    }
                    else if (editarServico === "n" || editarServico === "N") {
                        editarServico = false;
                    }
                    else {
                        console.log(`Opção inválida! `);
                        editarServico = this.entrada.receberTexto(`Deseja alterar mais alguma informação do cliente? (s/n)`);
                    }
                    break;
                case 2:
                    let valor = this.entrada.receberNumero(`Informe o valor do Produto`);
                    servico._valor = valor;
                    editarServico = this.entrada.receberTexto(`Deseja alterar mais alguma informação do cliente? (s/n) `);
                    if (editarServico === "s" || editarServico === "S") {
                        editarServico = true;
                    }
                    else if (editarServico === "n" || editarServico === "N") {
                        editarServico = false;
                    }
                    else {
                        console.log(`Opção inválida! `);
                        editarServico = this.entrada.receberTexto(`Deseja alterar mais alguma informação do cliente? (s/n)`);
                    }
                    break;
                case 0:
                    editarServico = false;
                    break;
            }
        }
        console.log(`\nEdição concluida! `);
    }
}
exports.default = EditorServico;
