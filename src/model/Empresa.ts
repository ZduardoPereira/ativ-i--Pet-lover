import Cliente from "./Cliente";
import Produto from "./Produto";
import Servico from "./Servico";

export default class Empresa{

    private _clientes: Array<Cliente>;
    private _produtos: Array<Produto>;
    private _servicos: Array<Servico>; 


    constructor(){
        this._clientes = []
        this._produtos = []
        this._servicos = []
    }

    public get getClientes(){
        return this._clientes
    }

    public get getProdutos(){
        return this._produtos
    }

    public get getServicos(){
        return this._servicos
    }
}