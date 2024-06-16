import CPF from "../model/CPF"
import Cliente from "../model/Cliente"

export default class Selecionador {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
    }

    public selecionar(numeroCpf: string){
        let cpf = new CPF(``, new Date())
        let clienteSelecionado = new Cliente(``,``,cpf, [], new Date(), [], [])
        this.clientes.forEach(cliente =>{
            if (numeroCpf === cliente.getCpf.getValor){
                clienteSelecionado = cliente
            }
        })
        return clienteSelecionado
    }
}