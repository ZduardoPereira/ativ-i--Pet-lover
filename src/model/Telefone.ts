export default class Telefone{

    private _ddd: string;
    private _numero: string;

    constructor(ddd: string, numero:string){
        this._ddd = ddd
        this._numero= numero
    }

    public get getDdd(): string {
        return this._ddd
    }

    public set setDdd(ddd:string){
        this._ddd = ddd
    }

    public get getNumero(): string {
        return this._numero
    }

    public set setNumero(numero:string){
        this._numero = numero
    }
}
