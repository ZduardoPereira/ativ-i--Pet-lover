export default class Produto {
    
    public _nome!: string; // a exclamação (!) indica que a propriedade sera definida em um lugar fora do constructor
    public _valor!: number;
    public _tipo!: string;
    public _raca!: string;
  
    constructor(_nome: string, valor:number, tipo: string, raca:string){
        this._nome = _nome;
        this._valor = valor;
        this._tipo = tipo;
        this._raca = raca;

    }

    
}

