import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import Cliente from "../../modelo/cliente";

export default class ProdutosEServicosMaisConsumidos {
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;
    private clientes: Array<Cliente>;

    constructor(produtos: Array<Produto>, servicos: Array<Servico>, clientes: Array<Cliente>) {
        this.produtos = produtos;
        this.servicos = servicos;
        this.clientes = clientes;
    }

    public listar(): void {
        // Crie mapas para armazenar a contagem de cada produto e serviço
        const contagemProdutos = new Map<Produto, number>();
        const contagemServicos = new Map<Servico, number>();

        // Itera sobre cada cliente
        this.clientes.forEach(cliente => {
            // Itera sobre cada produto consumido pelo cliente
            cliente.getProdutosConsumidos.forEach(produto => {
                // Atualiza a contagem no mapa de produtos
                contagemProdutos.set(produto, (contagemProdutos.get(produto) || 0) + 1);
            });

            // Itera sobre cada serviço consumido pelo cliente
            cliente.getServicosConsumidos.forEach(servico => {
                // Atualiza a contagem no mapa de serviços
                contagemServicos.set(servico, (contagemServicos.get(servico) || 0) + 1);
            });
        });

        // Converte os mapas em arrays de pares [Produto/Serviço, contagem]
        const arrayContagemProdutos = Array.from(contagemProdutos.entries());
        const arrayContagemServicos = Array.from(contagemServicos.entries());

        // Ordena os arrays com base na contagem (quantidade consumida)
        arrayContagemProdutos.sort((a, b) => b[1] - a[1]);
        arrayContagemServicos.sort((a, b) => b[1] - a[1]);

        // Lista os produtos mais consumidos
        console.log(`\nProdutos mais consumidos:`);
        arrayContagemProdutos.forEach(([produto, contagem]) => {
            console.log(`Produto: ${produto.getNomeProduto()}, Quantidade Consumida: ${contagem}`);
        });

        console.log(`\nServiços mais consumidos:`);
        arrayContagemServicos.forEach(([servico, contagem]) => {
            console.log(`Serviço: ${servico.getNome()}, Quantidade Consumida: ${contagem}`);
        });

        console.log(`--------------------------------------`);
    }
}
