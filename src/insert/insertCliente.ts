import Cliente from "../modelo/cliente";
import cpf from "../modelo/cpf";
import CPF from "../modelo/cpf";
import Pet from "../modelo/pet";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import cadastro from "../negocio/cadastro";
import Listagem from "../negocio/listagem";


const listagemClientes: Array<Cliente> = [];

const rg1 = new RG("111111111", new Date(1997, 2, 11));
const cpf1 = new CPF("11111111111", new Date(1997, 2, 11));
const cliente1 = new Cliente("Jordana Gleise de Jesus Menezes", "Jojo Todinho", cpf1, [rg1], [
    new Telefone("11", "993456789"),
    new Telefone("11", "987654321"),
]);
const petCliente1_1 = new Pet("Mel", "Vira-lata", "Fêmea", "Cachorro");
const petCliente1_2 = new Pet("Tom", "Siamês", "Macho", "Gato");
cliente1.adicionarPet(petCliente1_1);
cliente1.adicionarPet(petCliente1_2);


const rg2 = new RG("222222222", new Date(1982, 9, 3));
const cpf2 = new CPF("22222222222", new Date(1982, 9, 3));
const cliente2 = new Cliente("Leonardo de Lima Borges Lins", "Leo Lins", cpf2, [rg2], [
    new Telefone("12", "9987654321")
]);
const petCliente2_1 = new Pet("Tobby", "Fox Paulistinha", "Macho", "Cachorro");
cliente2.adicionarPet(petCliente2_1);

const rg3 = new RG("333333333", new Date(1982, 9, 3));
const cpf3 = new CPF("33333333333", new Date(1982, 9, 3));
const cliente3 = new Cliente("Nivaldo Batista Lima", "Gustavo Lima", cpf3, [rg3], [
    new Telefone("13", "9987654320")
]);
const petCliente3_1 = new Pet("Lili", "Lulu da pomeranea", "Femea", "Cachorro");
cliente3.adicionarPet(petCliente3_1);

const rg4 = new RG("444444444", new Date(1973, 6, 12));
const cpf4 = new CPF("44444444444", new Date(1973, 6, 12));
const cliente4 = new Cliente("Ednaldo Pereira da Silva", "Ednaldo Pereira", cpf4, [rg4], [
    new Telefone("12", "9987654322")
]);
const petCliente4_1 = new Pet("Ednaldinho", "Viralata", "Macho", "Cachorro");
cliente4.adicionarPet(petCliente4_1);

const rg5 = new RG("555555555", new Date(1969, 12, 2));
const cpf5 = new CPF("55555555555", new Date(1969, 12, 2));
const cliente5 = new Cliente("Manoel Jardim Gomes", "Blue Pen", cpf5, [rg5], [
    new Telefone("12", "9987654323")
]);
const petCliente5_1 = new Pet("Rex", "PitBull", "Macho", "Cachorro");
cliente5.adicionarPet(petCliente5_1);

const rg6 = new RG("696969696", new Date(1994, 11, 11));
const cpf6 = new CPF("69696969691", new Date(1994, 11, 11));
const cliente6 = new Cliente("Alexandre Santada", "SUPER XANDAO", cpf6, [rg6], [
    new Telefone("12", "9987654324"),
    new Telefone("12", "997324226")
]);
const petCliente6_1 = new Pet("Heroi", "Viralata", "Macho", "Cachorro");
const petCliente6_2 = new Pet("Creatina", "Shitsu", "Femea", "Cachorro");
cliente6.adicionarPet(petCliente6_1);
cliente6.adicionarPet(petCliente6_2);

const rg7 = new RG("777777777", new Date(1988, 6, 10));
const cpf7 = new CPF("77777777777", new Date(1988, 6, 10));
const cliente7 = new Cliente("Rafael Fernando Moreira", "Raffa Moreira", cpf7, [rg7], [
    new Telefone("12", "9987654325")
]);
const petCliente7_1 = new Pet("Xerches", "Persa", "Macho", "Gato");
cliente7.adicionarPet(petCliente7_1);

const rg8 = new RG("888888888", new Date(1988, 7, 9));
const cpf8 = new CPF("88888888888", new Date(1988, 7, 9));
const cliente8 = new Cliente("Rodrigo Goés", "FAKE NATY", cpf8, [rg8], [
    new Telefone("12", "9987654326")
]);
const petCliente8_1 = new Pet("Bastet", "Sphynx", "Femea", "Gato");
cliente8.adicionarPet(petCliente8_1);

const rg9 = new RG("999999999", new Date(1985, 2, 5));
const cpf9 = new CPF("99999999999", new Date(1985, 2, 5));
const cliente9 = new Cliente("Cristiano Ronaldo dos Santos Aveiro", "CR7", cpf9, [rg9], [
    new Telefone("12", "9987654327")
]);
const petCliente9_1 = new Pet("Figo", "Mastim Tibetano", "Macho", "Cachorro");
cliente9.adicionarPet(petCliente9_1);
const petCliente9_2 = new Pet("Kika", "Mastim Tibetano", "Femea", "Cachorro");
cliente9.adicionarPet(petCliente9_2);
const petCliente9_3 = new Pet("Eusébio", "Mastim Tibetano", "Macho", "Cachorro");
cliente9.adicionarPet(petCliente9_3);

const rg10 = new RG("101010101", new Date(1992, 2, 5));
const cpf10 = new CPF("10101010101", new Date(1992, 2, 5));
const cliente10 = new Cliente("Lionel Andrés Messi Cuccittini", "Messi", cpf10, [rg10], [
    new Telefone("12", "9987654328")
]);
const petCliente10_1 = new Pet("Hulk", "Pitbull", "Macho", "Cachorro");
cliente10.adicionarPet(petCliente10_1);

const rg11 = new RG("110110110", new Date(1987, 6, 27));
const cpf11 = new CPF("11011011011", new Date(1987, 6, 27));
const cliente11 = new Cliente("Neymar da Silva Santos Júnior", "Neymar", cpf11, [rg11], [
    new Telefone("12", "9987654329")
]);
const petCliente11_1 = new Pet("K", "Border Collie", "Macho", "Cachorro");
cliente11.adicionarPet(petCliente11_1);
const petCliente11_2 = new Pet("J", "Boder Collie", "Macho", "Cachorro");
cliente11.adicionarPet(petCliente11_2);

const rg12 = new RG("120120120", new Date(1987, 6, 27));
const cpf12 = new CPF("12012012012", new Date(1987, 6, 27));
const cliente12 = new Cliente("Francisco Everardo Tiririca Oliveira Silva", "Tiririca", cpf12, [rg12], [
    new Telefone("12", "9987654330")
]);
const petCliente12_1 = new Pet("Caramelo", "Vira lata", "Macho", "Cachorro");
cliente12.adicionarPet(petCliente12_1);

const rg13 = new RG("524174346", new Date(2004, 8, 13));
const cpf13 = new CPF("52417434806", new Date(2004, 8, 13));
const cliente13 = new Cliente("Pedro Henrique de Souza", "Pedryn", cpf13, [rg13], [
    new Telefone("12", "988243129")
]);
const petCliente13_1 = new Pet("Juli", "Vira lata", "Femea", "Gato");
cliente13.adicionarPet(petCliente13_1);
const petCliente13_2 = new Pet("Mingau", "Vira lata", "Macho", "Gato");
cliente13.adicionarPet(petCliente13_2);

const rg14 = new RG("140140140", new Date(2006, 8, 26));
const cpf14 = new CPF("14014014014", new Date(2006, 8, 26));
const cliente14 = new Cliente("Ana Clara Goulart de Oliveira", "Goulart", cpf14, [rg14], [
    new Telefone("12", "996305436")
]);
const petCliente14_1 = new Pet("Tuide", "Dachshund", "Femea", "Cachorro");
cliente14.adicionarPet(petCliente14_1);

const rg15 = new RG("150150150", new Date(2004, 9, 19));
const cpf15 = new CPF("15015015015", new Date(2004, 9, 19));
const cliente15 = new Cliente("Leticia Helena de Oliveira Carvalho", "Cabeluda", cpf15, [rg15], [
    new Telefone("12", "988457952")
]);
const petCliente15_1 = new Pet("Nemo", "Peixe-Palhaço", "Macho", "Peixe");
cliente15.adicionarPet(petCliente15_1);

const rg16 = new RG("160160160", new Date(2005, 9, 27));
const cpf16 = new CPF("16016016016", new Date(2005, 9, 27));
const cliente16 = new Cliente("Felipe Gabriel Vieira", "Felipão", cpf16, [rg16],[
    new Telefone("12", "991059434")
]);
const petCliente16_1 = new Pet("Alvin", "Peruano", "Macho", "Porquinho-da-india");
const petCliente16_2 = new Pet("Bela", "Snow Shoe", "Femea", "Gato");
cliente16.adicionarPet(petCliente16_1);
cliente16.adicionarPet(petCliente16_2);

const rg17 = new RG("170170170", new Date(2005, 2, 12));
const cpf17 = new CPF("17017017017", new Date(2005, 2, 12));
const cliente17 = new Cliente("Livia Alves de Faria", "Faria ou Fez", cpf17, [rg17], [
    new Telefone("12", "982837386")
]);
const petCliente17_1 = new Pet("Gordo", "Vira lata", "Macho", "Gato");
cliente17.adicionarPet(petCliente17_1);

const rg18 = new RG("180180180", new Date(2003, 11, 20));
const cpf18 = new CPF("18018018018", new Date(2003, 11, 20));
const cliente18 = new Cliente("Laura Gabriel Gonçalves", "Laurinha", cpf18, [rg18], [
    new Telefone("12", "997584865"),
]);
const petCliente18_1 = new Pet("Gojo", "Dachshund", "Macho", "Cachorro");
cliente18.adicionarPet(petCliente18_1);

const rg19 = new RG("190190190", new Date(2003, 12, 12));
const cpf19 = new CPF("19019019019", new Date(2003, 12, 12));
const cliente19 = new Cliente("Caio Rodrigues de Almeida", "Cainho", cpf19, [rg19], [
    new Telefone("12", "991017404")
]);
const petCliente19_1 = new Pet("Baiano", "Siames", "Macho", "Gato");
cliente19.adicionarPet(petCliente19_1);

const rg20_1 = new RG("202020278", new Date(2004, 11, 13));
const rg20_2 = new RG("202020202", new Date(2004, 11, 13));
const cpf20 = new CPF("20020020020", new Date(2004, 11, 13));
const cliente20 = new Cliente("Luiz Felipe dos Santos", "Luizão", cpf20, [rg20_1, rg20_2], [
    new Telefone("12", "997351963")
]);
const petCliente20_1 = new Pet("Cleidi Lurdes", "Dachshund", "Femea", "Cachorro");
cliente20.adicionarPet(petCliente20_1);

listagemClientes.push(cliente1, cliente2, cliente3, cliente4, cliente5, cliente6, cliente7, cliente8, cliente9, cliente10,
    cliente11, cliente12,cliente13, cliente14, cliente15, cliente16, cliente17, cliente18, cliente19, cliente20);

export default listagemClientes;