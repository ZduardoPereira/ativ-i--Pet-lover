import CPF from "./cpf";
import Pet from "./pet";
import Produto from "./produto";
import Servico from "./servico";
import Telefone from "./telefone";
import RG from "./rg";

export default class Cliente {
    [x: string]: any;
    
    private static idCounter: number = 1;
    private id: number;
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    private pets: Array<Pet>
    static getNome: any;

    constructor(nome: string, nomeSocial: string, cpf: CPF, rgs: RG[], telefones: Array<Telefone> = []) {
        this.id = Cliente.idCounter++;
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = rgs
        this.dataCadastro = new Date()
        this.telefones = telefones
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.pets = []
    }

    public adicionarTelefone(telefone: Telefone): void {
        this.telefones.push(telefone);
    }

    public get getTelefones(): Array<Telefone> {
        return this.telefones;
    }

    public adicionarServicosConsumidos(servicos: Servico): void {
        this.servicosConsumidos.push(servicos);
    } 

    public adicionarProdutoConsumido(produto: Produto): void {
        this.produtosConsumidos.push(produto);
    }

    public getValorServicosConsumidos():number{
        let valor = 0
        this.servicosConsumidos.forEach( servico => {
            valor += servico.valor
        })
        return valor
    }

    public getValorProdutosConsumidos():number{
        let valor = 0
        this.produtosConsumidos.forEach( produto => {
            valor += produto.precoProduto
        })
        return valor
    }

    public setTelefones(telefones: Telefone[]): void {
        this.telefones = telefones;
    }

    public setRGs(rgs: RG[]): void {
        this.rgs = rgs;
    }

    public setDataCadastro(data: Date): void {
        this.dataCadastro = data;
    }

    public setValor(novoCPF: CPF): void {
        this.cpf = novoCPF;
    }

    public getValor(novoCPF: CPF): void {
        this.cpf = novoCPF;
    }

    public get getCpf(): CPF {
        return this.cpf
    }

    public setCpf(cpf: CPF): void {
        this.cpf = cpf;
    }

    public get getRgs(): Array<RG> {
        return this.rgs
    }

    public get getDataCadastro(): Date {
        return this.dataCadastro
    }


    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }

    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }

    public get getPets(): Array<Pet> {
        return this.pets
    }

    public get getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public get getNome(): string {
        return this.nome
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public get getNomeSocial(): string {
        return this.nomeSocial;
    }

    public setNomeSocial(nomeSocial: string): void {
        this.nomeSocial = nomeSocial;
    }
    
    public removerPet(petIndex: number): void {
        if (petIndex >= 0 && petIndex < this.pets.length) {
            this.pets.splice(petIndex, 1);
        } else {
            throw new Error('Índice inválido para remover o pet.');
        }
    }

    public atualizarPet(petIndex: number, novoNome: string, novaRaca: string, novoGenero: string, novoTipo: string): void {
        if (petIndex >= 0 && petIndex < this.pets.length) {
            const pet = this.pets[petIndex];
            pet.setNome(novoNome);
            pet.setRaca(novaRaca);
            pet.setGenero(novoGenero);
            pet.setTipo(novoTipo);
        } else {
            throw new Error('Índice inválido para atualizar o pet.');
        }
    }

    // Método para adicionar um pet à lista de pets do cliente
    public adicionarPet(pet: Pet): void {
        this.pets.push(pet)
    }
}
