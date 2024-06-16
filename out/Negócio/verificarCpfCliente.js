"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificarCpfCliente = void 0;
function verificarCpfCliente(empresa, numCpf) {
    for (const cliente of empresa.clientes) {
        if (cliente.cpf.valor == numCpf) {
            return true;
        }
    }
    return false;
}
exports.verificarCpfCliente = verificarCpfCliente;
