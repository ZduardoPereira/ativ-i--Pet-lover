import Entrada from "../io/entrada"
import CPF from "../model/CPF"
import Cliente from "../model/Cliente"
import Pet from "../model/Pet"
import RG from "../model/RG"
import Telefone from "../model/Telefone"
import Cadastro from "./cadastro"

export default class CadastroCliente extends Cadastro{
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nCadastro do cliente: `);
        let nome = this.entrada.receberTexto(`Digite o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Apelido do cliente: `)

        // Verificar e cadastrar CPF
        const verificadorCPF = (cpf: string) =>{
            const clienteEncontrado = this.clientes.find((cliente) => cliente.getCpf.getValor === cpf)
            return clienteEncontrado === undefined
        }

        let cadastrarCPF = true
        let cpf = new CPF("", new Date)
        while (cadastrarCPF){
            let valor = this.entrada.receberTexto(`Informe o número do CPF: `);
            let valorVerificado = ""
            let dataEmissao = new Date
            if (verificadorCPF(valor)){
                valorVerificado = valor
                let data = this.entrada.receberTexto(`Informe a data de emissão do cpf, dd/mm/aaaa: `)
                let partesData = data.split(`/`)
                let ano = new Number(partesData[2].valueOf()).valueOf()
                let mes = new Number(partesData[1].valueOf()).valueOf() -1
                let dia = new Number(partesData[0].valueOf()).valueOf()
                dataEmissao = new  Date(ano, mes, dia)
                cadastrarCPF = false
            }else {
                console.log (`CPF inválido \n`)
            }
            cpf = new CPF (valorVerificado, dataEmissao);
        }

        //Cadastro do RG
        let rgs: RG[] = [];
        let cadastrarRG: string|boolean = true
        while (cadastrarRG) {
            let valorRG = this.entrada.receberTexto(`Informe o número do RG: `)
            let dataRG = this.entrada.receberTexto(`Informe a data de emossão, dd/mm/aaaa:  `)
            let partesDataRg = dataRG.split(`/`)
                let anoRG = new Number(partesDataRg[2].valueOf()).valueOf()
                let mesRG = new Number(partesDataRg[1].valueOf()).valueOf() -1
                let diaRG = new Number(partesDataRg[0].valueOf()).valueOf()
                let dataEmissaoRG = new  Date(anoRG, mesRG, diaRG)
                rgs.push(new RG(valorRG, dataEmissaoRG))

            cadastrarRG = this.entrada.receberTexto(`Deseja cadastrar outro RG? (s/n)`)
            if (cadastrarRG === "S" || cadastrarRG ==="s"){
                cadastrarRG = true
            } else if (cadastrarRG === "N" || cadastrarRG ==="n") {
                cadastrarRG = false
            } else {
                console.log(`Opção inválida!`)
                cadastrarRG = this.entrada.receberTexto(`Deseja cadastrar um novo RG? (s/n)`)
            }
        }   

        //Cadastro de telefones
        let telefones: Telefone[] = []
        let cadastrarTelefones: string|boolean = true
        while (cadastrarTelefones){
            let valorTelefone = this.entrada.receberTexto(`Informe o número do Telefone (XX) xxxx-xxxx: `)
            let dddTelefone = valorTelefone.split(``)
            telefones.push(new Telefone(dddTelefone[0], dddTelefone[1]))

            cadastrarTelefones = this.entrada.receberTexto(`Deseja cadastrar um novo Telefone? (s/n) `)
            if (cadastrarTelefones === "s" || cadastrarTelefones === "S"){
                cadastrarTelefones = true
            } else if (cadastrarTelefones === "n" || cadastrarTelefones === "N"){
                cadastrarTelefones = false
            } else{
                console.log(`Opção inválida!`)
                cadastrarTelefones = this.entrada.receberTexto(`Deseja cadastrar outro Teefone? (s/n)`)
            }
        }

        //Cadastro de Pets
        let pets : Pet[] = []
        let cadastrarNovopet : string|boolean = true
        while (cadastrarNovopet) {
            let nomePet = this.entrada.receberTexto(`Informe o nome do Pet: `)
            let tipoPet = this.entrada.receberTexto(`Informe o tipo do pet: `)
            let generoPet = this.entrada.receberTexto(`Informe o Gênero do pet (f/m): `)
            let racaPet = this.entrada.receberTexto(`Informe  Raça do pet: `)
            pets.push(new Pet(nomePet, tipoPet, generoPet, racaPet))

            cadastrarNovopet = this.entrada.receberTexto(`Deseja cadastrar um novo Pet? (s/n)`)
            if (cadastrarNovopet === "s" || cadastrarNovopet === "S"){
                cadastrarNovopet = true
            } else if (cadastrarNovopet === "n" || cadastrarNovopet === "N"){
                cadastrarNovopet = false
            } else {
                console.log(`Opção inválida!`)
                cadastrarNovopet = this.entrada.receberTexto(`Deseja cadastrar um novo pet? (s/n)`)
            }
        }

        let dataCadastro = new Date()

        let cliente = new Cliente(nome, nomeSocial, cpf, rgs, dataCadastro, telefones, pets);
        this.clientes.push(cliente)

        console.log(`\nCadastro concluido!\n`)

    }



}

