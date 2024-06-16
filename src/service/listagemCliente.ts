import Cliente from "../model/Cliente"
import Pet from "../model/Pet"
import RG from "../model/RG"
import Telefone from "../model/Telefone"
import Listagem from "./listagem"

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente> 

    constructor(clientes : Array<Cliente>){
        super()
        this.clientes = clientes
    }

    public listar(): void {
        console.log(`\nLista de todos os clientes: `);
        this.clientes.forEach(cliente =>  {
            console.log(`Nome: ` + cliente._nome);
            console.log(`Nome sociel: ` + cliente._nomeSocial);
            console.log(`CPF \n` + `Número: ` + cliente.getCpf.getValor + `    Data de emissão: ` + cliente.getCpf.getDataEmissao);
            this.listarRgs(cliente.getRg);
            this.listarTelefones(cliente.getTelefones);
            this.listarPets(cliente.getPets);
            console.log(`Data de cadastro: ` + cliente.getDataCadastro);
            console.log(`---------------------------------------------------`)

        }) ;
        console.log(`\n`)
    }

    private listarTelefones(telefones: Array<Telefone>){
        if(telefones){
            console.log(`Telefones: `)
            telefones.forEach(telefone => {
                if (telefone){
                    console.log(telefone.getDdd + `` + telefone.getNumero)
                }
            });
        }
    }

    private listarPets(pets: Array<Pet>) {
        if(pets){
            console.log(`Pets: `)
            pets.forEach(pet => {
                if (pet){
                    console.log(`Nome: ` + pet.getNome + `Tipo: ` + pet.getTipo + `Gênero: ` + pet.getGenero + `Raça: ` + pet.getRaca)
                }
            });
        }
    }

    private listarRgs(rgs: Array<RG>) {
        if(rgs){
            console.log(`RGs: `)
            rgs.forEach(rg => {
                if (rg){
                    console.log(`Número: ` + rg.getValor + `Data de Emissão: ` + rg.dataEmissao)
                }
            });
        }
    }

    public listarMaioresConsumidoresDeProdutosOuServicos(): void {
        console.log(`\nLista dos 10 clientes que mais consumiram produtos ou serviços: `);

        let maioresConsumidoresProdutosOuServicos = this.clientes.sort((a, b) => {
            return (
                a.getProdutosConsumidos.length > a.getServicosConsumidos.length ?  a.getProdutosConsumidos.length : a.getServicosConsumidos.length
                -
                b.getProdutosConsumidos.length > b.getServicosConsumidos.length ?  b.getProdutosConsumidos.length : b.getServicosConsumidos.length 

            ) * -1
        });

        for (let i = 0; i < 1; i++) {
            let consumidores = maioresConsumidoresProdutosOuServicos [i]
            if (consumidores !== undefined){
                console.log(consumidores._nome)
            } else {
                break;
            }
        }
    }

    public listarProdutosOuServicosMaisConsumidos(): void {
        console.log(`\nLista dos Produtos ou serviços mais consumidos`);

        let dicProdutosEServicos = new Map()
        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => {
                if (!(dicProdutosEServicos.has(produto._nome))){
                    dicProdutosEServicos.set(produto._nome, 1)
                } else {
                    dicProdutosEServicos.set(produto._nome, (dicProdutosEServicos.get(produto._nome) +1 ))
                }
            })
        })

        this.clientes.forEach(cliente => {
            cliente.getServicosConsumidos.forEach(servico => {
                if (!(dicProdutosEServicos.has(servico._nome))){
                    dicProdutosEServicos.set(servico._nome, 1)
                } else {
                    dicProdutosEServicos.set(servico._nome, (dicProdutosEServicos.get(servico._nome) +1 ))
                }
            })
        })

        const dicProdutosEServicosSort = new Map([...dicProdutosEServicos.entries()].sort((a, b) => b [1] - a [1] ));

        dicProdutosEServicosSort.forEach((value, key) => {
            console.log(`${key}: ${value}`)
        })
        console.log(`----------------------------------`)
    }

    public listarClientesQueMaisConsumiramEmValor (): void{
        console.log(`\nListagem dos 5 clientes que mais consumiram em valor: `);

        let dicClientes = new Map()
        this.clientes.forEach(cliente =>{
            let valorTotalProdutos = 0
            let valorTotalServicos = 0
            cliente.getProdutosConsumidos.forEach(produto =>{
                valorTotalProdutos += produto._valor
            })
            cliente.getServicosConsumidos.forEach(servico =>{
                valorTotalServicos += servico._valor
            })
            let valorTotal = valorTotalProdutos + valorTotalServicos
            dicClientes.set(cliente._nome, valorTotal)
        })

        const dicClientesSort = new Map([...dicClientes.entries()].sort((a, b) => b[1] - a[1]));

        let contador = 0
        dicClientesSort.forEach((value, key) =>{
            if (contador < 5){
                console.log(`${key}: ${value}`)
                contador += 1
            }
        })
        console.log("-----------------------")
    }
    
    public listarProdutosMaisConsumidosPorTipoPets(): void{
        console.log(`\nListagem dos produtos mais consumidos por tipo de pet`);

        let listaDeProdutosConsumidos : any = [];
        this.clientes.forEach((cliente) =>{
            cliente.getProdutosConsumidos.forEach(produto => {
                listaDeProdutosConsumidos.push(produto);
            });
        });

        // Removendo os produtos duplicados
        let listaSemRepeticaoDeProdutosConsumidos  = new Set(listaDeProdutosConsumidos);
        listaDeProdutosConsumidos = Array.from(listaSemRepeticaoDeProdutosConsumidos);

        // Agrupando os produtos por tipo do Pet (Atributo da classe cliente)
        let listDeProdutosAgrupadosPorTipo = this.agruparProdutoPorAtributo(listaDeProdutosConsumidos, 'tipo')

        // Apresentando os produtos agrupados por tipo de Pet
        listDeProdutosAgrupadosPorTipo.forEach((produto) => {
            console.log(`${produto.at(0)?.tipo}: ${this.listarProdutos(produto)}`)
        })
        
        console.log(`\n`);
    }

    public listarServicosMaisConsumidosPorTipoPets(): void{
        console.log(`\nListagem dos serviços mais consumidos por tipo de pet`);


        // Coletando todos os produtos consumidos pelos clientes
        let listaDeServicosConsumidos : any = [];
        this.clientes.forEach((cliente) =>{
            cliente.getServicosConsumidos.forEach(servico => {
                listaDeServicosConsumidos.push(servico);
            });
        });

        // Removendo os produtos duplicados
        let listaSemRepeticaoDeServicosConsumidos  = new Set(listaDeServicosConsumidos);
        listaDeServicosConsumidos = Array.from(listaSemRepeticaoDeServicosConsumidos);
 
        // Agrupando os produtos por tipo do Pet (Atributo da classe cliente)
        let listDeServicosAgrupadosPorTipo = this.agruparServicoPorAtributo(listaDeServicosConsumidos, 'tipo')

        // Apresentando os produtos agrupados por tipo de Pet
        listDeServicosAgrupadosPorTipo.forEach((servico) => {
            console.log(`${servico.at(0)?.tipo}: ${this.listarServicos(servico)}`)
        })
        
        console.log(`\n`);
    }

    public listarProdutosMaisConsumidosPorRacaPets(): void{
        

        let listaDeProdutosConsumidos : any = [];
        this.clientes.forEach((cliente) =>{
            cliente.getProdutosConsumidos.forEach(produto => {
                listaDeProdutosConsumidos.push(produto);
            });
        });

        // Removendo os produtos duplicados
        let listaSemRepeticaoDeProdutosConsumidos  = new Set(listaDeProdutosConsumidos);
        listaDeProdutosConsumidos = Array.from(listaSemRepeticaoDeProdutosConsumidos);

        // Agrupando os produtos por tipo do Pet (Atributo da classe cliente)
        let listDeProdutosAgrupadosPorTipo = this.agruparProdutoPorAtributo(listaDeProdutosConsumidos, 'raca')

        // Apresentando os produtos agrupados por tipo de Pet
        listDeProdutosAgrupadosPorTipo.forEach((produto) => {
            console.log(`${produto.at(0)?.raca}: ${this.listarProdutos(produto)}`)
        })

        console.log(`\n`);
    }

    public listarServicosMaisConsumidosPorRacaPets(): void{
        console.log(`\nListagem dos serviços mais consumidos por raça de pet`);

        

        // Coletando todos os produtos consumidos pelos clientes
        let listaDeServicosConsumidos : any = [];
        this.clientes.forEach((cliente) =>{
            cliente.getServicosConsumidos.forEach(servico => {
                listaDeServicosConsumidos.push(servico);
            });
        });

        // Removendo os produtos duplicados
        let listaSemRepeticaoDeServicosConsumidos  = new Set(listaDeServicosConsumidos);
        listaDeServicosConsumidos = Array.from(listaSemRepeticaoDeServicosConsumidos);
 
        // Agrupando os produtos por tipo do Pet (Atributo da classe cliente)
        let listDeServicosAgrupadosPorTipo = this.agruparServicoPorAtributo(listaDeServicosConsumidos, 'raca')

        // Apresentando os produtos agrupados por tipo de Pet
        listDeServicosAgrupadosPorTipo.forEach((servico) => {
            console.log(`${servico.at(0)?.tipo}: ${this.listarServicos(servico)}`)
        })
        
        console.log(`\n`);
    }

    private listarProdutos(listaDeProdutosConsumidos : any) {
        let resultList: any[] = []
        listaDeProdutosConsumidos.forEach((element: { nome: any; }) => {
            resultList.push(element.nome)
        });
        return resultList
    }

    private listarServicos(listaDeServicosConsumidos : any) {
        let resultList: any[] = []
        listaDeServicosConsumidos.forEach((element: { nome: any; }) => {
            resultList.push(element.nome)
        });
        return resultList
    }

    private agruparProdutoPorAtributo(listaDeProdutos : any[], atributo : any) {
        let val, index
        let values = []
        let result = []
        for (let i = 0; i < listaDeProdutos.length; i++) {
            val = listaDeProdutos[i][atributo]
            index = values.indexOf(val)
            
            if(index > -1) {
                result[index].push(listaDeProdutos[i])
            } else {
                values.push(val)
                result.push([listaDeProdutos[i]])
            }
        }

        return result;
    }

    private agruparServicoPorAtributo(listaDeServicos : any[], atributo : any) {
        let val, index
        let values = []
        let result = []
        for (let i = 0; i < listaDeServicos.length; i++) {
            val = listaDeServicos[i][atributo]
            index = values.indexOf(val)
            
            if(index > -1) {
                result[index].push(listaDeServicos[i])
            } else {
                values.push(val)
                result.push([listaDeServicos[i]])
            }
        }

        return result;
    }
}