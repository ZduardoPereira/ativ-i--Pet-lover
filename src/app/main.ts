import listagemClientes from "../insert/insertCliente";
import Entrada from "../io/entrada";
import DeletarCliente from "../modelo/deletarCliente";
import DeletarPet from "../modelo/deletarPet";
import Empresa from "../modelo/empresa";
import Pet from "../modelo/pet";
import servico from "../modelo/servico";
import AtualizarCliente from "../negocio/cliente/atualizarCliente";
import AtualizarPet from "../negocio/pet/atualizarPet";
import CadastrarProdutoCli from "../negocio/produtos/cadProdCli";
import CadastroProduto from "../negocio/produtos/cadastrarProdutos";
import CadastroCliente from "../negocio/cliente/cadastroCliente";
import CadastroPet from "../negocio/pet/cadastroPet";
import ListagemClientes from "../negocio/cliente/listagemClientes";
import ListagemProduto from "../negocio/produtos/listagemProdutos";
import DeletarProduto from "../negocio/produtos/deletarProd";
import AtualizarProduto from "../negocio/produtos/atualizaProd";
import CadastroServico from "../negocio/servico/cadastrarServico";
import ListagemServico from "../negocio/servico/listagemServico";
import AtualizarServico from "../negocio/servico/atualizarServico";
import DeletarServico from "../negocio/servico/deletarServico";
import ProdutosMaisConsumidos from "../negocio/listagens/servProd";
import ListarMaisConsumidos from "../negocio/listagens/clienteMaisConsumiram";
import ClientesQueMaisConsumiramProdutosQuant from "../negocio/listagens/clienteMaisConsumiram";
import ClientesQueMaisConsumiramServicosValor from "../negocio/listagens/clienteMaisValor";


console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

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
    console.log(`\nListagens: `)
    console.log(`17 - Top 10 Clientes que mais consumiram em quantidade`);
    console.log(`18 - Listagem geral de produtos e serviços mais consumidos`);
    console.log(`19 - Listagem do top 5 clientes que mais consumiram em valor`);
    console.log(`\n0 - Sair`);
    console.log(``);
    console.log(``);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrarCliente()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let deletarL = new DeletarCliente(listagemClientes)
            deletarL.deletarCliente()
            let deletar = new DeletarCliente(empresa.getClientes)
            deletar.deletarCliente()
            break;
        case 4:
            let atualizarL = new AtualizarCliente(listagemClientes)
            atualizarL.atualizarCliente()
            let atualizar = new AtualizarCliente(empresa.getClientes)
            atualizar.atualizarCliente()
            break;
        case 5:
            let cadastroPet = new CadastroPet(empresa.getClientes);
            cadastroPet.cadastrarPet();
            break;
        case 6:
            let deletarPet = new DeletarPet(empresa.getClientes);
            deletarPet.deletarPet();
            break;
        case 7:
            let atualizarPet = new AtualizarPet(empresa.getClientes);
            atualizarPet.atualizarPet();
            break;
        case 8:
            let listagemP = new ListagemProduto(empresa.getProdutos);
            listagemP.listar();
            break;

        case 9:
            // Cadastro de produto
            let cadastroProd = new CadastroProduto(empresa);
            cadastroProd.cadastrarProduto();
            break;

        case 10:
            let cadastrarProdutoCli = new CadastrarProdutoCli(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            cadastrarProdutoCli.cadastrarProdutoServicoCli();
            break;
        case 11:
            // Deletar produto
            let deletarP = new DeletarProduto(empresa.getProdutos);
            deletarP.deletarProduto();

            let deletarPro = new DeletarProduto(empresa.getProdutos);
            deletarPro.deletarProduto();
            break;

        case 12:
            // Atualizar produto
            let atualizarP = new AtualizarProduto(empresa.getProdutos);
            atualizarP.atualizarProduto();    
            let atualizarPro = new AtualizarProduto(empresa.getProdutos);
            atualizarPro.atualizarProduto();
            break;
        
        case 13:
            let cadastroSer = new CadastroServico(empresa.getServicos)
            cadastroSer.cadastrarServico()
            break;
        case 14:
            // Supondo que empresa.getServicos é um método que retorna um array de serviços
            let listagemS = new ListagemServico(empresa.getServicos);
            listagemS.listar();
            break;
        case 15:
            let atualizarSer = new AtualizarServico(empresa.getServicos)
            atualizarSer.atualizarServico()
            break;
        case 16:
            let deletarSer = new DeletarServico(empresa.getServicos)
            deletarSer.deletarServico()
            break;
        case 17:
            const clientesMaisConsumiram = new ClientesQueMaisConsumiramProdutosQuant(empresa.getClientes);
            clientesMaisConsumiram.listar();
            break;
        case 18:
            const produtosMaisConsumidos = new ProdutosMaisConsumidos(empresa.getProdutos, empresa.getServicos, empresa.getClientes);
            produtosMaisConsumidos.listar();
            break;
        case 19:
            const clientesMaisConsumiramServicosValor = new ClientesQueMaisConsumiramServicosValor(empresa.getClientes);
            clientesMaisConsumiramServicosValor.listar();
            break;                
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}