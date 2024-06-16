import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";


export default class AtualizarCliente {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public atualizarCliente(): void {
        console.log(`Escolha a opção de busca:`);
        console.log(`1 - Procurar por CPF`);
        console.log(`2 - Procurar por Nome`);
        console.log(`3 - Procurar por ID`);

        let opcaoBusca = this.entrada.receberNumero('Insira a opção de busca desejada: ');

        if (opcaoBusca === 1) {
            let cpf = this.entrada.receberTexto('Insira o CPF do cliente que deseja atualizar: ');
            const index = this.clientes.findIndex(c => c.getCpf.getValor === cpf);
            this.processarResultado(index);
        } else if (opcaoBusca === 2) {
            let nome = this.entrada.receberTexto('Insira o nome do cliente que deseja atualizar: ');
            const index = this.clientes.findIndex(c => c.getNome === nome);

            this.processarResultado(index);
        } else if (opcaoBusca === 3) {
            let id = this.entrada.receberNumero('Insira o ID do cliente que deseja atualizar: ');
            const index = this.clientes.findIndex(c => c.getId === id);

            this.processarResultado(index);
        } else {
            console.log(`Opção inválida.`);
        }

        console.log(`--------------------------------------`);
    }

    private processarResultado(index: number): void {
        if (index !== -1) {
            const cliente = this.clientes[index];

            console.log(`Cliente encontrado: ${cliente.getNome} (ID: ${cliente.getId})`);

            let novoNome = this.entrada.receberTexto('Insira o novo nome do cliente: ');
            let novoNomeSocial = this.entrada.receberTexto('Insira o novo nome social do cliente: ');

            cliente.setNome(novoNome);
            cliente.setNomeSocial(novoNomeSocial);

            let novoCPFnumero = this.entrada.receberTexto('Insira o novo CPF do cliente: ');
            let novoDataCadastro = this.entrada.receberTexto('Insira a nova data de cadastro do CPF do cliente (no formato YYYY-MM-DD): ');
            cliente.setDataCadastro(new Date(novoDataCadastro));
            const novoCPF = new CPF(novoCPFnumero, new Date(novoDataCadastro));
            cliente.setValor(novoCPF);

            // Atualizar RGs (assumindo que será apenas um RG)
            let novoRGNumero = this.entrada.receberTexto('Insira o novo número do RG do cliente: ');
            let novoRGDataEmissao = this.entrada.receberTexto('Insira a nova data de emissão do RG do cliente (no formato YYYY-MM-DD): ');

            const novoRG = new RG(novoRGNumero, new Date(novoRGDataEmissao));
            cliente.setRGs([novoRG]);

            // Atualizar telefones (assumindo que será apenas um telefone)
            let novoTelefoneNumero = this.entrada.receberTexto('Insira o novo número de telefone do cliente: ');
            let novoTelefoneDdd = this.entrada.receberTexto('Insira o novo DDD do telefone do cliente: ');

            const novoTelefone = new Telefone(novoTelefoneNumero, novoTelefoneDdd);
            cliente.setTelefones([novoTelefone]);

            console.log(`Cliente atualizado com sucesso.`);
        } else {
            console.log(`Cliente não encontrado.`);
        }
    }
}
