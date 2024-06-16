export default class RG {

    private _valor: string;
    private _dataEmissao: Date;
 

    constructor(valor: string, dataEmissao:Date){
        this._valor = valor
        this._dataEmissao = dataEmissao
    }

    public get getValor(): string {
        return this._valor
    }

    public get dataEmissao(): Date {
        return this._dataEmissao;
    }
}