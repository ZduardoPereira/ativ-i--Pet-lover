import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Cadastro from "../cadastro";
import RG from "../../modelo/rg";
import Pet from "../../modelo/pet";
import Telefone from "../../modelo/telefone";

export default class CadastroCliente extends Cadastro {

    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public cadastrarCliente(): void {
        console.log(`\nInício do cadastro do cliente`);

        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);

        let partesDataCpf = data.split('/')
        let anoCpf = new Number(partesDataCpf[2].valueOf()).valueOf()
        let mesCpf = new Number(partesDataCpf[1].valueOf()).valueOf()
        let diaCpf = new Number(partesDataCpf[0].valueOf()).valueOf()
        let dataEmissao = new Date(anoCpf, mesCpf, diaCpf);

        let cpf = new CPF(valor, dataEmissao);
        
        // Adicionar mais de um RG
        let adicionarMaisRgs = true;
        let rgs: Array<RG> = [];

        while (adicionarMaisRgs) {
            let valorrg = this.entrada.receberTexto(`Por favor informar o valor do RG: `);
            let dataRg = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);

            let partesDataRg = dataRg.split('/')
            let anoRg = new Number(partesDataRg[2].valueOf()).valueOf()
            let mesRg = new Number(partesDataRg[1].valueOf()).valueOf()
            let diaRg = new Number(partesDataRg[0].valueOf()).valueOf()
            let dataEmissaoRg = new Date(anoRg, mesRg, diaRg);

            rgs.push(new RG(valorrg, dataEmissaoRg));
            
            const resposta = this.entrada.receberTexto(`Deseja adicionar mais um RG? (s/n): `);
            adicionarMaisRgs = resposta.toLowerCase() === 's';
        }

        let adicionarMaisTelefones = true;
        let telefones: Array<Telefone> = [];

        while (adicionarMaisTelefones) {
            let ddd = this.entrada.receberTexto(`Por favor informe o DDD do telefone: `);
            let numero = this.entrada.receberTexto(`Por favor informe o número do telefone: `);
            let telefone = new Telefone(ddd, numero);

            telefones.push(telefone);

            const resposta = this.entrada.receberTexto(`Deseja adicionar mais um telefone? (s/n): `);
            adicionarMaisTelefones = resposta.toLowerCase() === 's';
        }

        let cliente = new Cliente(nome, nomeSocial, cpf, rgs, telefones);
        this.clientes.push(cliente);
        console.log(`Cliente cadastrado!`);

        // Cadastro do pet para o cliente recém-criado
        let adicionarMaisPets = true;
        while (adicionarMaisPets) {
            const nomePet = this.entrada.receberTexto(`Por favor informe o nome do pet: `)
            const tipoPet = this.entrada.receberTexto(`Por favor informe o tipo do pet: `)
            const racaPet = this.entrada.receberTexto(`Por favor informe a raça do pet: `)
            const generoPet = this.entrada.receberTexto(`Por favor informe o gênero do pet: `)

            const pet = new Pet(nomePet, racaPet, generoPet, tipoPet)

            // Associar o pet ao cliente
            cliente.adicionarPet(pet)

            console.log(`Pet cadastrado para ${cliente.getNome}`);

            const resposta = this.entrada.receberTexto(`Deseja adicionar mais um pet? (s/n): `);
            adicionarMaisPets = resposta.toLowerCase() === 's';
        }

        console.log(`\nCadastro concluído :)\n`);
    }
}
