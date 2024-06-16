import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Empresa from "../../modelo/empresa";
import Cadastro, { CadastroPro } from "../cadastro";

export default class CadastroProduto extends CadastroPro {
    
    private empresa: Empresa;
    private entrada: Entrada;

    constructor(empresa: Empresa) {
        super();
        this.empresa = empresa;
        this.entrada = new Entrada();
    }

    public cadastrarProduto(): void {
        console.log(`\nInício do cadastro de produto`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `);
        let descricao = this.entrada.receberTexto(`Por favor informe a descrição do produto: `);
        let valor = this.entrada.receberNumero(`Por favor informe o valor do produto (Usar . ao invés de ,) R$: `);
        let estoqueAtual = this.entrada.receberNumero(`Informe a quantidade em estoque: `);

        let novoProduto = new Produto(nome, descricao, valor, estoqueAtual);
        this.empresa.adicionarProduto(novoProduto);

        console.log(`\nCadastro concluído :)\n`);
    }
}
