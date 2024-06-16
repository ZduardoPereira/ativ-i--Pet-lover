"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const CPF_1 = __importDefault(require("../model/CPF"));
const Cliente_1 = __importDefault(require("../model/Cliente"));
const Pet_1 = __importDefault(require("../model/Pet"));
const RG_1 = __importDefault(require("../model/RG"));
const Telefone_1 = __importDefault(require("../model/Telefone"));
const cadastro_1 = __importDefault(require("./cadastro"));
class CadastroCliente extends cadastro_1.default {
    clientes;
    entrada;
    constructor(clientes) {
        super();
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    cadastrar() {
        console.log(`\nCadastro do cliente: `);
        let nome = this.entrada.receberTexto(`Digite o nome do cliente: `);
        let nomeSocial = this.entrada.receberTexto(`Apelido do cliente: `);
        // Verificar e cadastrar CPF
        const verificadorCPF = (cpf) => {
            const clienteEncontrado = this.clientes.find((cliente) => cliente.getCpf.getValor === cpf);
            return clienteEncontrado === undefined;
        };
        let cadastrarCPF = true;
        let cpf = new CPF_1.default("", new Date);
        while (cadastrarCPF) {
            let valor = this.entrada.receberTexto(`Informe o número do CPF: `);
            let valorVerificado = "";
            let dataEmissao = new Date;
            if (verificadorCPF(valor)) {
                valorVerificado = valor;
                let data = this.entrada.receberTexto(`Informe a data de emissão do cpf, dd/mm/aaaa: `);
                let partesData = data.split(`/`);
                let ano = new Number(partesData[2].valueOf()).valueOf();
                let mes = new Number(partesData[1].valueOf()).valueOf() - 1;
                let dia = new Number(partesData[0].valueOf()).valueOf();
                dataEmissao = new Date(ano, mes, dia);
                cadastrarCPF = false;
            }
            else {
                console.log(`CPF inválido \n`);
            }
            cpf = new CPF_1.default(valorVerificado, dataEmissao);
        }
        //Cadastro do RG
        let rgs = [];
        let cadastrarRG = true;
        while (cadastrarRG) {
            let valorRG = this.entrada.receberTexto(`Informe o número do RG: `);
            let dataRG = this.entrada.receberTexto(`Informe a data de emossão, dd/mm/aaaa:  `);
            let partesDataRg = dataRG.split(`/`);
            let anoRG = new Number(partesDataRg[2].valueOf()).valueOf();
            let mesRG = new Number(partesDataRg[1].valueOf()).valueOf() - 1;
            let diaRG = new Number(partesDataRg[0].valueOf()).valueOf();
            let dataEmissaoRG = new Date(anoRG, mesRG, diaRG);
            rgs.push(new RG_1.default(valorRG, dataEmissaoRG));
            cadastrarRG = this.entrada.receberTexto(`Deseja cadastrar outro RG? (s/n)`);
            if (cadastrarRG === "S" || cadastrarRG === "s") {
                cadastrarRG = true;
            }
            else if (cadastrarRG === "N" || cadastrarRG === "n") {
                cadastrarRG = false;
            }
            else {
                console.log(`Opção inválida!`);
                cadastrarRG = this.entrada.receberTexto(`Deseja cadastrar um novo RG? (s/n)`);
            }
        }
        //Cadastro de telefones
        let telefones = [];
        let cadastrarTelefones = true;
        while (cadastrarTelefones) {
            let valorTelefone = this.entrada.receberTexto(`Informe o número do Telefone (XX) xxxx-xxxx: `);
            let dddTelefone = valorTelefone.split(``);
            telefones.push(new Telefone_1.default(dddTelefone[0], dddTelefone[1]));
            cadastrarTelefones = this.entrada.receberTexto(`Deseja cadastrar um novo Telefone? (s/n) `);
            if (cadastrarTelefones === "s" || cadastrarTelefones === "S") {
                cadastrarTelefones = true;
            }
            else if (cadastrarTelefones === "n" || cadastrarTelefones === "N") {
                cadastrarTelefones = false;
            }
            else {
                console.log(`Opção inválida!`);
                cadastrarTelefones = this.entrada.receberTexto(`Deseja cadastrar outro Teefone? (s/n)`);
            }
        }
        //Cadastro de Pets
        let pets = [];
        let cadastrarNovopet = true;
        while (cadastrarNovopet) {
            let nomePet = this.entrada.receberTexto(`Informe o nome do Pet: `);
            let tipoPet = this.entrada.receberTexto(`Informe o tipo do pet: `);
            let generoPet = this.entrada.receberTexto(`Informe o Gênero do pet (f/m): `);
            let racaPet = this.entrada.receberTexto(`Informe  Raça do pet: `);
            pets.push(new Pet_1.default(nomePet, tipoPet, generoPet, racaPet));
            cadastrarNovopet = this.entrada.receberTexto(`Deseja cadastrar um novo Pet? (s/n)`);
            if (cadastrarNovopet === "s" || cadastrarNovopet === "S") {
                cadastrarNovopet = true;
            }
            else if (cadastrarNovopet === "n" || cadastrarNovopet === "N") {
                cadastrarNovopet = false;
            }
            else {
                console.log(`Opção inválida!`);
                cadastrarNovopet = this.entrada.receberTexto(`Deseja cadastrar um novo pet? (s/n)`);
            }
        }
        let dataCadastro = new Date();
        let cliente = new Cliente_1.default(nome, nomeSocial, cpf, rgs, dataCadastro, telefones, pets);
        this.clientes.push(cliente);
        console.log(`\nCadastro concluido!\n`);
    }
}
exports.default = CadastroCliente;
