export default class Servico {
    public _nome!: string
    public  _valor!: number
    public _tipo!: string  
    
    constructor(nome: string, valor: number, tipo: string){
        this._nome = nome
        this._valor = valor
        this._tipo = tipo
    }
}