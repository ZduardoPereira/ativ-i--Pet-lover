import Entrada from "../io/entrada";
import Empresa from "../model/Empresa";
import CadastroCliente from "../service/cadastroCliente";
import CadastroProduto from "../service/cadastroProduto";
import CadastroServico from "../service/cadastroServico";
import ConsumoProduto from "../service/consumoProduto";
import ConsumoServico from "../service/consumoServico";
import EditorCliente from "../service/editorCliente";
import EditorProduto from "../service/editorProduto";
import EditorServico from "../service/editorServico";
import ListagemClientes from "../service/listagemCliente";
import ListagemProdutos from "../service/listagemProduto";
import ListagemServicos from "../service/listagemServico";
import Selecionador from "../service/selecionador";
import SelecionadorServicos from "../service/selecionador.Servico";
import SelecionadorProdutos from "../service/selecionadorProduto";


console.log(`Bem vindo ao melhor serviço de gerenciamento de pet shops e clinicas veterinárias`)

let empresa = new Empresa()
let execucao = true

while(execucao){
    console.log(`Opções: `)
    console.log(`1- Cadastrar Cliente`);
    console.log(`2- Cadastrar Produto`);
    console.log(`3- Cadastrar Serviço`);
    console.log(`4- Editar Cliente`);
    console.log(`5- Editar Produto`);
    console.log(`6- Editar Serviço`);
    console.log(`7- Excluir Cliente`);
    console.log(`8- Excluir Produto`);
    console.log(`9- Excluir Serviço`);
    console.log(`10- Listar Clientes`);
    console.log(`11- Listar Produtos`);
    console.log(`12- Listar Serviço`);
    console.log(`13- Cadastrar consumo de Produtos`);
    console.log(`14- Cadastrar consumo de Serviços`);
    console.log(`15- Listar os 10 Clientes que mais consumiram produtos ou serviços em quantidade`);
    console.log(`16- Listar Produtos e Serviços mais consumidos`);
    console.log(`17- Listar 5 clientes que mais consumiram em valor `);
    console.log(`18- Listar produtos mais consumidos por tipo de pet`);
    console.log(`19- Listar produtos mais consumidos por raça de pet`);
    console.log(`20- Listar serviços mais consumidos por tipo de pet`);
    console.log(`21- Listar serviços mais consumidos por raça de pet`);
    console.log(`0- Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Digite a opção desejada: `)

    switch (opcao) {
        case 1: //Cadastrar Cliente
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let cadastroProdutos = new CadastroProduto(empresa.getProdutos)
            cadastroProdutos.cadastrar()
            break;
        case 3: 
            let cadastroServicos = new CadastroServico(empresa.getServicos)
            cadastroServicos.cadastrar()
            break;
        case 4:
            let cpfEditar = entrada.receberTexto(`Digite um cpf para edição: `)
            let selecionadorClienteEditar = new Selecionador(empresa.getClientes)
            let clienteEditar = selecionadorClienteEditar.selecionar(cpfEditar)

            let editor = new EditorCliente()
            editor.editar(clienteEditar)
            break;
        case 5:
            let nomeEditar = entrada.receberTexto(`Digite o nome do produto que deseja editar: `)
            let selecionarProdutoEditar = new SelecionadorProdutos(empresa.getProdutos)
            let produtoEditar = selecionarProdutoEditar.selecionar(nomeEditar)

            let editorProduto = new EditorProduto()
            editorProduto.editar(produtoEditar)
            break;
        case 6:
            let nomeServicoEditar = entrada.receberTexto(`Digite o nome do serviço que deseja editar: `)
            let selecionadorServicoEditar = new SelecionadorServicos (empresa.getServicos)
            let servicoEditar = selecionadorServicoEditar.selecionar(nomeServicoEditar)

            let editorServico = new EditorServico()
            editorServico.editar(servicoEditar)
            break;
        case 7: 
            let cpf = entrada.receberTexto(`Digite o CPF que deseja excluir: `)
            let selecionadorCliente = new Selecionador (empresa.getClientes)
            let cliente = selecionadorCliente.selecionar(cpf)
        case 8: 
            let nomeProduto = entrada.receberTexto(`Digite o nome do produto que deseja excluir: `)
            let selecionadorProduto = new SelecionadorProdutos(empresa.getProdutos)
            let produto = selecionadorProduto.selecionar(nomeProduto)

            let indiceProduto = empresa.getProdutos.indexOf(produto)
            delete empresa.getProdutos[indiceProduto]
            break;
        case 9: 
            let nomeServico = entrada.receberTexto(`Digite o nome do serviço que deseja excuir: `)
            let selecionadorServico = new SelecionadorServicos (empresa.getServicos)
            let servico = selecionadorServico.selecionar(nomeServico)

            let indiceServico = empresa.getServicos.indexOf(servico)
            delete empresa.getServicos[indiceServico]
            break;
        case 10:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 11:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
            listagemProdutos.listar()
            break;
        case 12:
            let listagemServicos = new ListagemServicos(empresa.getServicos)
            listagemServicos.listar()
            break;
        case 13:
            let cpfConsumoProduto = entrada.receberTexto(`Digite um CPF para cadastrar o consumo de produtos: `)
            let selecionadorClienteConsumoProduto = new Selecionador(empresa.getClientes)
            let clienteConsumidorProduto = selecionadorClienteConsumoProduto.selecionar(cpfConsumoProduto)

            let nomeProdutoConsumido = entrada.receberTexto(`Digite o nome do produto: `)
            let selecionadorProdutoConsumo = new SelecionadorProdutos (empresa.getProdutos)
            let produtoConsumido = selecionadorProdutoConsumo.selecionar(nomeProdutoConsumido)

            let cadastroConsumoProduto = new ConsumoProduto()
            cadastroConsumoProduto.cadastrarConsumoProduto(clienteConsumidorProduto, produtoConsumido)
            break;
        case 14:
            let cpfConsumoServico = entrada.receberTexto(`Digite um CPF para cadastrar o serviço: `)
            let selecionadorClienteConsumoServico = new Selecionador(empresa.getClientes)
            let clienteConsumidorServico = selecionadorClienteConsumoServico.selecionar(cpfConsumoServico)

            let nomeServicoConsumido = entrada.receberTexto(`Digite o nome do serviço: `)
            let selecionadorServicoConsumo = new SelecionadorServicos (empresa.getServicos)
            let servicoConsumido = selecionadorServicoConsumo.selecionar(nomeServicoConsumido)

            let cadastroConsumoServico = new ConsumoServico()
            cadastroConsumoServico.cadastrarConsumoServico(clienteConsumidorServico, servicoConsumido)
            break;
        case 15: 
            let listagemMaioresConsumidores = new ListagemClientes (empresa.getClientes)
            listagemMaioresConsumidores.listarMaioresConsumidoresDeProdutosOuServicos()
            break;
        case 16:
            let listagemProdutoOuServicosMaisConsumidos = new ListagemClientes(empresa.getClientes)
            listagemProdutoOuServicosMaisConsumidos.listarProdutosOuServicosMaisConsumidos()
            break;
        case 17:
            let listagemClientesQueConsumiramMaisEmValor = new ListagemClientes(empresa.getClientes)
            listagemClientesQueConsumiramMaisEmValor.listarClientesQueMaisConsumiramEmValor()
            break;
        case 18:
            let listagemProdutosMaisConsumidoPorTipoDePet = new ListagemClientes(empresa.getClientes)
            listagemProdutosMaisConsumidoPorTipoDePet.listarProdutosMaisConsumidosPorTipoPets()
            break;
        case 19:
            let listagemProdutosMaisConsumidoPorRacaDePet = new ListagemClientes(empresa.getClientes)
            listagemProdutosMaisConsumidoPorRacaDePet.listarProdutosMaisConsumidosPorRacaPets()
            break;
        case 20:
            let listagemServicosMaisConsumidoPorTipoDePet = new ListagemClientes(empresa.getClientes)
            listagemServicosMaisConsumidoPorTipoDePet.listarServicosMaisConsumidosPorTipoPets()
            break;
        case 21:
            let listagemServicosMaisConsumidoPorRacaDePet = new ListagemClientes(empresa.getClientes)
            listagemServicosMaisConsumidoPorRacaDePet.listarServicosMaisConsumidosPorRacaPets()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :( `)
    }

}