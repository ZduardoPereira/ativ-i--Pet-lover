export default class Pet {
    private nome: string
    private tipo: string
    private raca: string
    private genero: string

    constructor(nome: string, raca: string, genero: string, tipo: string) {
        this.nome = nome
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
    }

    public setTipo(novoTipo: string): void {
        this.tipo = novoTipo;
    }

    public setRaca(novaRaca: string): void {
        this.raca = novaRaca;
    }

    public setGenero(novoGenero: string): void {
        this.genero = novoGenero;
    }

    public setNome(novoNome: string): void {
        this.nome = novoNome;
    }

    public get getNome(): string {
        return this.nome;
    }

    public get getRaca(): string {
        return this.raca;
    }

    public get getGenero(): string {
        return this.genero;
    }

    public get getTipo(): string {
        return this.tipo;
    }
}
