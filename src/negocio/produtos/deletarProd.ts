import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";

export default class DeletarProduto {
    private produtos: Array<Produto>;
    private entrada: Entrada;

    constructor(produtos: Array<Produto>) {
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public deletarProduto(): void {
        if (Array.isArray(this.produtos)) {
            console.log(`Escolha a opção de busca:`);
            console.log(`1 - Procurar por Nome`);
            console.log(`2 - Procurar por ID`);

            let opcaoBusca = this.entrada.receberNumero('Insira a opção de busca desejada: ');

            if (opcaoBusca === 1) {
                let nome = this.entrada.receberTexto('Insira o nome do produto que deseja deletar: ');

                const index = this.produtos.findIndex(p => p.getNomeProduto().toLowerCase() === nome.toLowerCase());

                this.processarResultado(index);
            } else if (opcaoBusca === 2) {
                for (let indexProduto = 0; indexProduto < this.produtos.length; indexProduto++) {
                    console.log(`${indexProduto} - ${this.produtos[indexProduto].getNomeProduto()}`);
                }
                let id = this.entrada.receberNumero('Insira o ID do produto que deseja deletar: ');

                if (id >= 0 && id < this.produtos.length) {
                    this.processarResultado(id);
                } else {
                    console.log(`ID inválido.`);
                }
            } else {
                console.log(`Opção inválida.`);
            }
        } else {
            console.log("Erro: 'produtos' não é um array.");
        }

        console.log(`--------------------------------------`);
    }

    private processarResultado(index: number): void {
        if (index !== -1) {
            const produto = this.produtos[index];

            console.log(`Produto encontrado: ${produto.getNomeProduto()}`);

            const confirmacao = this.entrada.receberTexto('Tem certeza que deseja deletar este produto? (s/n): ');

            if (confirmacao.toLowerCase() === 's') {
                this.produtos.splice(index, 1);
                console.log(`Produto deletado com sucesso.`);
            } else {
                console.log(`Operação cancelada.`);
            }
        } else {
            console.log(`Índice inválido ou produto não encontrado.`);
        }
    }
}
