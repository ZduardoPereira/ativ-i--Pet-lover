import Entrada from "../io/entrada"
import Produto from "../model/Produto"

export default class EditorProduto {
    private entrada: Entrada
    constructor() {
        this.entrada = new Entrada()
    }

    public editar(produto: Produto): void{
        console.log(`Edição do Produto`)
        let editarProduto : string|boolean = true
        while (editarProduto) {
            console.log(`Opções de Edição: `)
            console.log(`1- Editar nome do produto`)
            console.log(`2- Editar o valor do produto`)
            console.log(`0- Retornar ao menu principal`)

            let opcao = this.entrada.receberNumero(`Escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let nome = this.entrada.receberTexto(`Informe o nome do Produto: `)
                    produto._nome = nome
                    editarProduto = this.entrada.receberTexto(`Deseja alterar mais alguma informação do cliente? (s/n) `)
                    if (editarProduto === "s" || editarProduto === "S"){
                        editarProduto = true
                    } else if (editarProduto === "n" || editarProduto === "N") {
                        editarProduto = false
                    } else {
                        console.log(`Opção inválida! `)
                        editarProduto = this.entrada.receberTexto(`Deseja alterar mais alguma informação do cliente? (s/n)`)
                    }
                    break;
                case 2:
                    let valor = this.entrada.receberNumero(`Informe o valor do Produto`)
                    produto._valor = valor
                    editarProduto = this.entrada.receberTexto(`Deseja alterar mais alguma informação do cliente? (s/n) `)
                    if (editarProduto === "s" || editarProduto === "S"){
                        editarProduto = true
                    } else if (editarProduto === "n" || editarProduto === "N") {
                        editarProduto = false
                    } else {
                        console.log(`Opção inválida! `)
                        editarProduto = this.entrada.receberTexto(`Deseja alterar mais alguma informação do cliente? (s/n)`)
                    }
                    break;
                case  0:
                    editarProduto = false
                    break;


            }

        }

        console.log(`\nEdição concluida! `)
    }
}