export default class CPF {
    private valor: string
    private dataEmissao: Date
    constructor(valor: string, dataEmissao: Date) {
        this.valor = valor
        this.dataEmissao = dataEmissao
    }
    public get getValor(): string {
        return this.valor
    }
    public get getDataEmissao(): Date {
        return this.dataEmissao
    }
    public setValor(valor:string):void{
        this.valor = valor
    }
    static criarComValor(valor: string, dataEmissao: Date): CPF {
        return new CPF(valor, dataEmissao);
    }
}