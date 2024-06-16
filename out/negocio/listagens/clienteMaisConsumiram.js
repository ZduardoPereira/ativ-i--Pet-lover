"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientesQueMaisConsumiramProdutosQuant {
    constructor(clientes) {
        this.clientes = clientes;
    }
    listar() {
        this.clientes.sort((a, b) => {
            const consumoA = a.getProdutosConsumidos.length + a.getServicosConsumidos.length;
            const consumoB = b.getProdutosConsumidos.length + b.getServicosConsumidos.length;
            return consumoB - consumoA;
        });
        if (this.clientes.length > 10) {
            let topClientes = this.clientes.slice(0, 10);
            topClientes.forEach(cliente => {
                console.log(`Nome: ${cliente.getNome} | Quantidade: ${cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length} Produtos e Serviços consumidos`);
            });
        }
        else {
            this.clientes.forEach(cliente => {
                console.log(`Nome: ${cliente.getNome} | Quantidade: ${cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length} Produtos e Serviços consumidos`);
            });
        }
    }
}
exports.default = ClientesQueMaisConsumiramProdutosQuant;
