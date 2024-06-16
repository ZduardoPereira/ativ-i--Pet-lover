import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import Produto from "../../modelo/produto"
import Servico from "../../modelo/servico"

export default class CadastrarProdutoCli {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        this.clientes = clientes
        this.produtos = produtos
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public cadastrarProdutoServicoCli(): void {
        let escolha = this.entrada.receberTexto(`Escolha se irá buscar o cliente por 1) id ou 2)cpf: `);

        if (escolha === '1' || escolha === '2') {
            let identificador = (escolha === '1') ? 'id' : 'CPF';
            let valor = this.entrada.receberTexto(`Insira o ${identificador}: `);

            let clienteEncontrado = this.clientes.find(cliente => {
                if (escolha === '1') {
                    return cliente.getId === parseInt(valor);
                } else {
                    return cliente.getCpf.getValor === valor;
                }
            });

            if (clienteEncontrado) {
                let operacao = true;

                while (operacao) {
                    console.log(`--------------------------------------`);
                    console.log(`Opções: `);
                    console.log(`1 - Cadastrar Produto`);
                    console.log(`2 - Cadastrar Serviço`);
                    console.log(`0 - Sair`);
                    let opcao = this.entrada.receberNumero('Escolha o que deseja fazer: ');
                    console.log(`--------------------------------------`);

                    switch (opcao) {
                        case 1:
                            for (let indexProduto = 0; indexProduto < this.produtos.length; indexProduto++) {
                                console.log(indexProduto + " - " + this.produtos[indexProduto].getNomeProduto());
                            }

                            let produto = this.entrada.receberNumero('Insira o número do produto desejado: ');

                            clienteEncontrado.adicionarProdutoConsumido(this.produtos[produto]);
                            console.log(`Produto inserido com sucesso!`);
                            console.log(`Produto ${this.produtos[produto].getNomeProduto()} cadastrado para ${clienteEncontrado.getNome} (ID: ${clienteEncontrado.getId})`);
                            break;

                        case 2:
                            for (let indexServico = 0; indexServico < this.servicos.length; indexServico++) {
                                console.log(indexServico + " - " + this.servicos[indexServico].getNome());
                            }

                            let servico = this.entrada.receberNumero('Insira o número do serviço desejado: ');

                            clienteEncontrado.adicionarServicosConsumidos(this.servicos[servico]);
                            console.log(`Serviço inserido com sucesso!`);
                            console.log(`Serviço ${this.servicos[servico].getNome()} cadastrado para ${clienteEncontrado.getNome} (ID: ${clienteEncontrado.getId})`);
                            break;

                        case 0:
                            operacao = false;
                            break;
                    }
                }
                ;
            } else {
                console.log(`Não foi encontrado um cliente com esse ${identificador}.`);
                return;
            }
        } else {
            console.log('Escolha inválida.');
            return;
        }
    }
}
