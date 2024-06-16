import CPF from "./CPF";
import Pet from "./Pet";
import Produto from "./Produto";
import RG from "./RG";
import Servico from "./Servico";
import Telefone from "./Telefone";

export default class Cliente{
    
    public _nome: string;
    public _nomeSocial: string;
    private _cpf: CPF;
    private _rgs: Array<RG>;
    private _dataCadastro: Date;
    private _telefones: Array<Telefone>;
    private _produtosConsumidos: Array<Produto>;
    private _servicosConsumidos: Array<Servico>;
    private _pets: Array<Pet>;
    
    
    constructor(nome:string, nomeSocial:string,  cpf:CPF, rgs:Array<RG>, dataCadastro: Date, telefones:Array<Telefone>, pets:Array<Pet>) {
        this._nome = nome
        this._nomeSocial = nomeSocial 
        this._cpf = cpf
        this._rgs = rgs
        this._dataCadastro = new Date()
        this._telefones = []
        this._produtosConsumidos = []
        this._servicosConsumidos = []
        this._pets = []
        
    }


    public get getNome(): string{
        return this._nome
    }

    public set setNome(nome:string){
        this._nome = nome
    }

    public get getNomeSocial(): string{
        return this._nomeSocial
    }

    public set setNomeSocial(nomeSocial:string){
        this._nomeSocial = nomeSocial
    }

    public get getCpf(): CPF{
        return this._cpf
    }

    public set setCpf(cpf : CPF){
        this._cpf = cpf
    }

    public get getRg(): Array<RG> {
        return this._rgs
    } 

    public set setRg(rg :RG){
        this._rgs.push(rg)
    }

    public get getDataCadastro(): Date {
        return this._dataCadastro
    }

    public get getTelefones(): Array<Telefone> {
        return this._telefones
    }


    public get getProdutosConsumidos(): Array<Produto> {
        return this._produtosConsumidos
    }

    public set setProdutosConsumidos(produto: Produto) {
        this._produtosConsumidos.push(produto)
    }

    public get getServicosConsumidos(): Array<Servico> {
        return this._servicosConsumidos
    }

    public set setServicosConsumidos(servico: Servico) {
        this._servicosConsumidos.push(servico)
    }

    public get getPets(): Array<Pet> {
        return this._pets
    }
   


}

