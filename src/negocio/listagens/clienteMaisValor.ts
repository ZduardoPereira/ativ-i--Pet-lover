// No arquivo clienteMaisConsumiramServicosValor.ts

import Cliente from "../../modelo/cliente";

export default class ClientesQueMaisConsumiramServicosValor {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }

    public listar(): void {
        this.clientes.sort((a, b) => {
            const consumoA = a.getProdutosConsumidos.length + a.getServicosConsumidos.length;
            const consumoB = b.getProdutosConsumidos.length + b.getServicosConsumidos.length;
            return consumoB - consumoA;
        });

        if (this.clientes.length > 5) {
            let topClientes = this.clientes.slice(0, 5);
            topClientes.forEach(cliente => {
                console.log(`Nome: ${cliente.getNome} | Valor consumido (serviços): R$ ${cliente.getValorServicosConsumidos() + cliente.getValorProdutosConsumidos()}`);
            });
        } else {
            this.clientes.forEach(cliente => {
                console.log(`Nome: ${cliente.getNome} | Valor consumido (serviços): R$ ${cliente.getValorServicosConsumidos() + cliente.getValorProdutosConsumidos()}`);
            });
        }
    }
}
