export default class Servico {
    static ultimoId: number = 0;
    public id: number
    public nome: string
    public valor: number
    public vendas: number
    constructor(nome: string, valor: number, ) {
        Servico.ultimoId++;
        this.id = Servico.ultimoId;
        this.nome = nome
        this.valor = valor
        this.vendas = 0
} public addVenda(): void {
    this.vendas ++
} public removerVenda(): void {
    this.vendas --
}
public getNome(): string {
    return this.nome;
}
public getPreco(): number {
    return this.valor
}
}