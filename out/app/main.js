"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const insertCliente_1 = __importDefault(require("../insert/insertCliente"));
const entrada_1 = __importDefault(require("../io/entrada"));
const deletarCliente_1 = __importDefault(require("../modelo/deletarCliente"));
const deletarPet_1 = __importDefault(require("../modelo/deletarPet"));
const empresa_1 = __importDefault(require("../modelo/empresa"));
const atualizarCliente_1 = __importDefault(require("../negocio/cliente/atualizarCliente"));
const atualizarPet_1 = __importDefault(require("../negocio/pet/atualizarPet"));
const cadProdCli_1 = __importDefault(require("../negocio/produtos/cadProdCli"));
const cadastrarProdutos_1 = __importDefault(require("../negocio/produtos/cadastrarProdutos"));
const cadastroCliente_1 = __importDefault(require("../negocio/cliente/cadastroCliente"));
const cadastroPet_1 = __importDefault(require("../negocio/pet/cadastroPet"));
const listagemClientes_1 = __importDefault(require("../negocio/cliente/listagemClientes"));
const listagemProdutos_1 = __importDefault(require("../negocio/produtos/listagemProdutos"));
const deletarProd_1 = __importDefault(require("../negocio/produtos/deletarProd"));
const atualizaProd_1 = __importDefault(require("../negocio/produtos/atualizaProd"));
const cadastrarServico_1 = __importDefault(require("../negocio/servico/cadastrarServico"));
const listagemServico_1 = __importDefault(require("../negocio/servico/listagemServico"));
const atualizarServico_1 = __importDefault(require("../negocio/servico/atualizarServico"));
const deletarServico_1 = __importDefault(require("../negocio/servico/deletarServico"));
const servProd_1 = __importDefault(require("../negocio/listagens/servProd"));
const clienteMaisConsumiram_1 = __importDefault(require("../negocio/listagens/clienteMaisConsumiram"));
const clienteMaisValor_1 = __importDefault(require("../negocio/listagens/clienteMaisValor"));
console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`);
let empresa = new empresa_1.default();
let execucao = true;
while (execucao) {
    console.log(`Opções:`);
    console.log(`\nCliente`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Deletar um cliente`);
    console.log(`4 - Atualizar cliente`);
    console.log(`\nPet:`);
    console.log(`5 - Cadastrar pet`);
    console.log(`6 - Deletar um pet`);
    console.log(`7 - Atualizar pet`);
    console.log(`\nProdutos:`);
    console.log(`8 - Listagem de produtos`);
    console.log(`9 - Cadastrar novos produtos`);
    console.log(`10 - Cadastrar produto consumido`);
    console.log(`11 - Deletar produto`);
    console.log(`12 - Atualizar produto`);
    console.log(`\nServiços: `);
    console.log(`13 - Cadastrar Serviço`);
    console.log(`14 - Listagem de Serviços`);
    console.log(`15 - Atualizar Serviço`);
    console.log(`16 - Deletar serviço`);
    console.log(`\nListagens: `);
    console.log(`17 - Top 10 Clientes que mais consumiram em quantidade`);
    console.log(`18 - Listagem geral de produtos e serviços mais consumidos`);
    console.log(`19 - Listagem do top 5 clientes que mais consumiram em valor`);
    console.log(`\n0 - Sair`);
    console.log(``);
    console.log(``);
    let entrada = new entrada_1.default();
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);
    switch (opcao) {
        case 1:
            let cadastro = new cadastroCliente_1.default(empresa.getClientes);
            cadastro.cadastrarCliente();
            break;
        case 2:
            let listagem = new listagemClientes_1.default(empresa.getClientes);
            listagem.listar();
            break;
        case 3:
            let deletarL = new deletarCliente_1.default(insertCliente_1.default);
            deletarL.deletarCliente();
            let deletar = new deletarCliente_1.default(empresa.getClientes);
            deletar.deletarCliente();
            break;
        case 4:
            let atualizarL = new atualizarCliente_1.default(insertCliente_1.default);
            atualizarL.atualizarCliente();
            let atualizar = new atualizarCliente_1.default(empresa.getClientes);
            atualizar.atualizarCliente();
            break;
        case 5:
            let cadastroPet = new cadastroPet_1.default(empresa.getClientes);
            cadastroPet.cadastrarPet();
            break;
        case 6:
            let deletarPet = new deletarPet_1.default(empresa.getClientes);
            deletarPet.deletarPet();
            break;
        case 7:
            let atualizarPet = new atualizarPet_1.default(empresa.getClientes);
            atualizarPet.atualizarPet();
            break;
        case 8:
            let listagemP = new listagemProdutos_1.default(empresa.getProdutos);
            listagemP.listar();
            break;
        case 9:
            // Cadastro de produto
            let cadastroProd = new cadastrarProdutos_1.default(empresa);
            cadastroProd.cadastrarProduto();
            break;
        case 10:
            let cadastrarProdutoCli = new cadProdCli_1.default(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            cadastrarProdutoCli.cadastrarProdutoServicoCli();
            break;
        case 11:
            // Deletar produto
            let deletarP = new deletarProd_1.default(empresa.getProdutos);
            deletarP.deletarProduto();
            let deletarPro = new deletarProd_1.default(empresa.getProdutos);
            deletarPro.deletarProduto();
            break;
        case 12:
            // Atualizar produto
            let atualizarP = new atualizaProd_1.default(empresa.getProdutos);
            atualizarP.atualizarProduto();
            let atualizarPro = new atualizaProd_1.default(empresa.getProdutos);
            atualizarPro.atualizarProduto();
            break;
        case 13:
            let cadastroSer = new cadastrarServico_1.default(empresa.getServicos);
            cadastroSer.cadastrarServico();
            break;
        case 14:
            // Supondo que empresa.getServicos é um método que retorna um array de serviços
            let listagemS = new listagemServico_1.default(empresa.getServicos);
            listagemS.listar();
            break;
        case 15:
            let atualizarSer = new atualizarServico_1.default(empresa.getServicos);
            atualizarSer.atualizarServico();
            break;
        case 16:
            let deletarSer = new deletarServico_1.default(empresa.getServicos);
            deletarSer.deletarServico();
            break;
        case 17:
            const clientesMaisConsumiram = new clienteMaisConsumiram_1.default(empresa.getClientes);
            clientesMaisConsumiram.listar();
            break;
        case 18:
            const produtosMaisConsumidos = new servProd_1.default(empresa.getProdutos, empresa.getServicos, empresa.getClientes);
            produtosMaisConsumidos.listar();
            break;
        case 19:
            const clientesMaisConsumiramServicosValor = new clienteMaisValor_1.default(empresa.getClientes);
            clientesMaisConsumiramServicosValor.listar();
            break;
        case 0:
            execucao = false;
            console.log(`Até mais`);
            break;
        default:
            console.log(`Operação não entendida :(`);
    }
}
