export default class CPF {
    
    private _valor: string;
    private _dataEmissao: Date;

    constructor(valor: string, dataEmissao:Date){
        this._valor = valor
        this._dataEmissao = dataEmissao
    }

    public get getValor(): string {
        return this._valor
    }

    public set setValor (valor:string){
        this._valor = valor 
    }

    public get getDataEmissao(): Date{
        return this._dataEmissao
    }
}