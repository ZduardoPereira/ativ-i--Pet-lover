"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./listagem"));
class ListagemClientes extends listagem_1.default {
    clientes;
    constructor(clientes) {
        super();
        this.clientes = clientes;
    }
    listar() {
        console.log(`\nLista de todos os clientes: `);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente._nome);
            console.log(`Nome sociel: ` + cliente._nomeSocial);
            console.log(`CPF \n` + `Número: ` + cliente.getCpf.getValor + `    Data de emissão: ` + cliente.getCpf.getDataEmissao);
            this.listarRgs(cliente.getRg);
            this.listarTelefones(cliente.getTelefones);
            this.listarPets(cliente.getPets);
            console.log(`Data de cadastro: ` + cliente.getDataCadastro);
            console.log(`---------------------------------------------------`);
        });
        console.log(`\n`);
    }
    listarTelefones(telefones) {
        if (telefones) {
            console.log(`Telefones: `);
            telefones.forEach(telefone => {
                if (telefone) {
                    console.log(telefone.getDdd + `` + telefone.getNumero);
                }
            });
        }
    }
    listarPets(pets) {
        if (pets) {
            console.log(`Pets: `);
            pets.forEach(pet => {
                if (pet) {
                    console.log(`Nome: ` + pet.getNome + `Tipo: ` + pet.getTipo + `Gênero: ` + pet.getGenero + `Raça: ` + pet.getRaca);
                }
            });
        }
    }
    listarRgs(rgs) {
        if (rgs) {
            console.log(`RGs: `);
            rgs.forEach(rg => {
                if (rg) {
                    console.log(`Número: ` + rg.getValor + `Data de Emissão: ` + rg.dataEmissao);
                }
            });
        }
    }
    listarMaioresConsumidoresDeProdutosOuServicos() {
        console.log(`\nLista dos 10 clientes que mais consumiram produtos ou serviços: `);
        let maioresConsumidoresProdutosOuServicos = this.clientes.sort((a, b) => {
            return (a.getProdutosConsumidos.length > a.getServicosConsumidos.length ? a.getProdutosConsumidos.length : a.getServicosConsumidos.length
                -
                    b.getProdutosConsumidos.length > b.getServicosConsumidos.length ? b.getProdutosConsumidos.length : b.getServicosConsumidos.length) * -1;
        });
        for (let i = 0; i < 1; i++) {
            let consumidores = maioresConsumidoresProdutosOuServicos[i];
            if (consumidores !== undefined) {
                console.log(consumidores._nome);
            }
            else {
                break;
            }
        }
    }
    listarProdutosOuServicosMaisConsumidos() {
        console.log(`\nLista dos Produtos ou serviços mais consumidos`);
        let dicProdutosEServicos = new Map();
        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => {
                if (!(dicProdutosEServicos.has(produto._nome))) {
                    dicProdutosEServicos.set(produto._nome, 1);
                }
                else {
                    dicProdutosEServicos.set(produto._nome, (dicProdutosEServicos.get(produto._nome) + 1));
                }
            });
        });
        this.clientes.forEach(cliente => {
            cliente.getServicosConsumidos.forEach(servico => {
                if (!(dicProdutosEServicos.has(servico._nome))) {
                    dicProdutosEServicos.set(servico._nome, 1);
                }
                else {
                    dicProdutosEServicos.set(servico._nome, (dicProdutosEServicos.get(servico._nome) + 1));
                }
            });
        });
        const dicProdutosEServicosSort = new Map([...dicProdutosEServicos.entries()].sort((a, b) => b[1] - a[1]));
        dicProdutosEServicosSort.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });
        console.log(`----------------------------------`);
    }
    listarClientesQueMaisConsumiramEmValor() {
        console.log(`\nListagem dos 5 clientes que mais consumiram em valor: `);
        let dicClientes = new Map();
        this.clientes.forEach(cliente => {
            let valorTotalProdutos = 0;
            let valorTotalServicos = 0;
            cliente.getProdutosConsumidos.forEach(produto => {
                valorTotalProdutos += produto._valor;
            });
            cliente.getServicosConsumidos.forEach(servico => {
                valorTotalServicos += servico._valor;
            });
            let valorTotal = valorTotalProdutos + valorTotalServicos;
            dicClientes.set(cliente._nome, valorTotal);
        });
        const dicClientesSort = new Map([...dicClientes.entries()].sort((a, b) => b[1] - a[1]));
        let contador = 0;
        dicClientesSort.forEach((value, key) => {
            if (contador < 5) {
                console.log(`${key}: ${value}`);
                contador += 1;
            }
        });
        console.log("-----------------------");
    }
    listarProdutosMaisConsumidosPorTipoPets() {
        console.log(`\nListagem dos produtos mais consumidos por tipo de pet`);
        let listaDeProdutosConsumidos = [];
        this.clientes.forEach((cliente) => {
            cliente.getProdutosConsumidos.forEach(produto => {
                listaDeProdutosConsumidos.push(produto);
            });
        });
        // Removendo os produtos duplicados
        let listaSemRepeticaoDeProdutosConsumidos = new Set(listaDeProdutosConsumidos);
        listaDeProdutosConsumidos = Array.from(listaSemRepeticaoDeProdutosConsumidos);
        // Agrupando os produtos por tipo do Pet (Atributo da classe cliente)
        let listDeProdutosAgrupadosPorTipo = this.agruparProdutoPorAtributo(listaDeProdutosConsumidos, 'tipo');
        // Apresentando os produtos agrupados por tipo de Pet
        listDeProdutosAgrupadosPorTipo.forEach((produto) => {
            console.log(`${produto.at(0)?.tipo}: ${this.listarProdutos(produto)}`);
        });
        console.log(`\n`);
    }
    listarServicosMaisConsumidosPorTipoPets() {
        console.log(`\nListagem dos serviços mais consumidos por tipo de pet`);
        // Coletando todos os produtos consumidos pelos clientes
        let listaDeServicosConsumidos = [];
        this.clientes.forEach((cliente) => {
            cliente.getServicosConsumidos.forEach(servico => {
                listaDeServicosConsumidos.push(servico);
            });
        });
        // Removendo os produtos duplicados
        let listaSemRepeticaoDeServicosConsumidos = new Set(listaDeServicosConsumidos);
        listaDeServicosConsumidos = Array.from(listaSemRepeticaoDeServicosConsumidos);
        // Agrupando os produtos por tipo do Pet (Atributo da classe cliente)
        let listDeServicosAgrupadosPorTipo = this.agruparServicoPorAtributo(listaDeServicosConsumidos, 'tipo');
        // Apresentando os produtos agrupados por tipo de Pet
        listDeServicosAgrupadosPorTipo.forEach((servico) => {
            console.log(`${servico.at(0)?.tipo}: ${this.listarServicos(servico)}`);
        });
        console.log(`\n`);
    }
    listarProdutosMaisConsumidosPorRacaPets() {
        let listaDeProdutosConsumidos = [];
        this.clientes.forEach((cliente) => {
            cliente.getProdutosConsumidos.forEach(produto => {
                listaDeProdutosConsumidos.push(produto);
            });
        });
        // Removendo os produtos duplicados
        let listaSemRepeticaoDeProdutosConsumidos = new Set(listaDeProdutosConsumidos);
        listaDeProdutosConsumidos = Array.from(listaSemRepeticaoDeProdutosConsumidos);
        // Agrupando os produtos por tipo do Pet (Atributo da classe cliente)
        let listDeProdutosAgrupadosPorTipo = this.agruparProdutoPorAtributo(listaDeProdutosConsumidos, 'raca');
        // Apresentando os produtos agrupados por tipo de Pet
        listDeProdutosAgrupadosPorTipo.forEach((produto) => {
            console.log(`${produto.at(0)?.raca}: ${this.listarProdutos(produto)}`);
        });
        console.log(`\n`);
    }
    listarServicosMaisConsumidosPorRacaPets() {
        console.log(`\nListagem dos serviços mais consumidos por raça de pet`);
        // Coletando todos os produtos consumidos pelos clientes
        let listaDeServicosConsumidos = [];
        this.clientes.forEach((cliente) => {
            cliente.getServicosConsumidos.forEach(servico => {
                listaDeServicosConsumidos.push(servico);
            });
        });
        // Removendo os produtos duplicados
        let listaSemRepeticaoDeServicosConsumidos = new Set(listaDeServicosConsumidos);
        listaDeServicosConsumidos = Array.from(listaSemRepeticaoDeServicosConsumidos);
        // Agrupando os produtos por tipo do Pet (Atributo da classe cliente)
        let listDeServicosAgrupadosPorTipo = this.agruparServicoPorAtributo(listaDeServicosConsumidos, 'raca');
        // Apresentando os produtos agrupados por tipo de Pet
        listDeServicosAgrupadosPorTipo.forEach((servico) => {
            console.log(`${servico.at(0)?.tipo}: ${this.listarServicos(servico)}`);
        });
        console.log(`\n`);
    }
    listarProdutos(listaDeProdutosConsumidos) {
        let resultList = [];
        listaDeProdutosConsumidos.forEach((element) => {
            resultList.push(element.nome);
        });
        return resultList;
    }
    listarServicos(listaDeServicosConsumidos) {
        let resultList = [];
        listaDeServicosConsumidos.forEach((element) => {
            resultList.push(element.nome);
        });
        return resultList;
    }
    agruparProdutoPorAtributo(listaDeProdutos, atributo) {
        let val, index;
        let values = [];
        let result = [];
        for (let i = 0; i < listaDeProdutos.length; i++) {
            val = listaDeProdutos[i][atributo];
            index = values.indexOf(val);
            if (index > -1) {
                result[index].push(listaDeProdutos[i]);
            }
            else {
                values.push(val);
                result.push([listaDeProdutos[i]]);
            }
        }
        return result;
    }
    agruparServicoPorAtributo(listaDeServicos, atributo) {
        let val, index;
        let values = [];
        let result = [];
        for (let i = 0; i < listaDeServicos.length; i++) {
            val = listaDeServicos[i][atributo];
            index = values.indexOf(val);
            if (index > -1) {
                result[index].push(listaDeServicos[i]);
            }
            else {
                values.push(val);
                result.push([listaDeServicos[i]]);
            }
        }
        return result;
    }
}
exports.default = ListagemClientes;
