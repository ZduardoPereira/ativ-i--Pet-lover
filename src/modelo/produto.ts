export default class Produto {
    
    private static idCounter: number = 1;
    private id: number;
    public nome: string;
    public descricao: string;
    public precoProduto: number;
    public estoqueAtual: number; 
    public quantidadeConsumida: number;

    constructor(nome: string, descricao: string, precoProduto: number, estoqueAtual: number) {
        this.id = Produto.idCounter++;
        this.nome = nome;
        this.descricao = descricao;
        this.precoProduto = precoProduto;
        this.estoqueAtual = estoqueAtual;
        this.quantidadeConsumida = 0; // Inicializa a quantidade consumida como zero
    }

    public getId(): number {
        return this.id;
    }

    public getNomeProduto(): string {
        return this.nome;
    }
    
    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }

    public getPrecoProduto(): number {
        return this.precoProduto;
    }

    public setPrecoProduto(precoProduto: number): void {
        this.precoProduto = precoProduto;
    }

    public getEstoqueAtual(): number {
        return this.estoqueAtual;
    }

    public setEstoqueAtual(estoqueAtual: number): void {
        this.estoqueAtual = estoqueAtual;
    }

    public getQuantidadeConsumida(): number {
        return this.quantidadeConsumida;
    }

    public setQuantidadeConsumida(quantidadeConsumida: number): void {
        this.quantidadeConsumida = quantidadeConsumida;
    }
}
