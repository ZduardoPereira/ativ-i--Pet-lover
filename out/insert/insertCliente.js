"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cliente_1 = __importDefault(require("../modelo/cliente"));
const cpf_1 = __importDefault(require("../modelo/cpf"));
const pet_1 = __importDefault(require("../modelo/pet"));
const rg_1 = __importDefault(require("../modelo/rg"));
const telefone_1 = __importDefault(require("../modelo/telefone"));
const listagemClientes = [];
const rg1 = new rg_1.default("111111111", new Date(1997, 2, 11));
const cpf1 = new cpf_1.default("11111111111", new Date(1997, 2, 11));
const cliente1 = new cliente_1.default("Jordana Gleise de Jesus Menezes", "Jojo Todinho", cpf1, [rg1], [
    new telefone_1.default("11", "993456789"),
    new telefone_1.default("11", "987654321"),
]);
const petCliente1_1 = new pet_1.default("Mel", "Vira-lata", "Fêmea", "Cachorro");
const petCliente1_2 = new pet_1.default("Tom", "Siamês", "Macho", "Gato");
cliente1.adicionarPet(petCliente1_1);
cliente1.adicionarPet(petCliente1_2);
const rg2 = new rg_1.default("222222222", new Date(1982, 9, 3));
const cpf2 = new cpf_1.default("22222222222", new Date(1982, 9, 3));
const cliente2 = new cliente_1.default("Leonardo de Lima Borges Lins", "Leo Lins", cpf2, [rg2], [
    new telefone_1.default("12", "9987654321")
]);
const petCliente2_1 = new pet_1.default("Tobby", "Fox Paulistinha", "Macho", "Cachorro");
cliente2.adicionarPet(petCliente2_1);
const rg3 = new rg_1.default("333333333", new Date(1982, 9, 3));
const cpf3 = new cpf_1.default("33333333333", new Date(1982, 9, 3));
const cliente3 = new cliente_1.default("Nivaldo Batista Lima", "Gustavo Lima", cpf3, [rg3], [
    new telefone_1.default("13", "9987654320")
]);
const petCliente3_1 = new pet_1.default("Lili", "Lulu da pomeranea", "Femea", "Cachorro");
cliente3.adicionarPet(petCliente3_1);
const rg4 = new rg_1.default("444444444", new Date(1973, 6, 12));
const cpf4 = new cpf_1.default("44444444444", new Date(1973, 6, 12));
const cliente4 = new cliente_1.default("Ednaldo Pereira da Silva", "Ednaldo Pereira", cpf4, [rg4], [
    new telefone_1.default("12", "9987654322")
]);
const petCliente4_1 = new pet_1.default("Ednaldinho", "Viralata", "Macho", "Cachorro");
cliente4.adicionarPet(petCliente4_1);
const rg5 = new rg_1.default("555555555", new Date(1969, 12, 2));
const cpf5 = new cpf_1.default("55555555555", new Date(1969, 12, 2));
const cliente5 = new cliente_1.default("Manoel Jardim Gomes", "Blue Pen", cpf5, [rg5], [
    new telefone_1.default("12", "9987654323")
]);
const petCliente5_1 = new pet_1.default("Rex", "PitBull", "Macho", "Cachorro");
cliente5.adicionarPet(petCliente5_1);
const rg6 = new rg_1.default("696969696", new Date(1994, 11, 11));
const cpf6 = new cpf_1.default("69696969691", new Date(1994, 11, 11));
const cliente6 = new cliente_1.default("Alexandre Santada", "SUPER XANDAO", cpf6, [rg6], [
    new telefone_1.default("12", "9987654324"),
    new telefone_1.default("12", "997324226")
]);
const petCliente6_1 = new pet_1.default("Heroi", "Viralata", "Macho", "Cachorro");
const petCliente6_2 = new pet_1.default("Creatina", "Shitsu", "Femea", "Cachorro");
cliente6.adicionarPet(petCliente6_1);
cliente6.adicionarPet(petCliente6_2);
const rg7 = new rg_1.default("777777777", new Date(1988, 6, 10));
const cpf7 = new cpf_1.default("77777777777", new Date(1988, 6, 10));
const cliente7 = new cliente_1.default("Rafael Fernando Moreira", "Raffa Moreira", cpf7, [rg7], [
    new telefone_1.default("12", "9987654325")
]);
const petCliente7_1 = new pet_1.default("Xerches", "Persa", "Macho", "Gato");
cliente7.adicionarPet(petCliente7_1);
const rg8 = new rg_1.default("888888888", new Date(1988, 7, 9));
const cpf8 = new cpf_1.default("88888888888", new Date(1988, 7, 9));
const cliente8 = new cliente_1.default("Rodrigo Goés", "FAKE NATY", cpf8, [rg8], [
    new telefone_1.default("12", "9987654326")
]);
const petCliente8_1 = new pet_1.default("Bastet", "Sphynx", "Femea", "Gato");
cliente8.adicionarPet(petCliente8_1);
const rg9 = new rg_1.default("999999999", new Date(1985, 2, 5));
const cpf9 = new cpf_1.default("99999999999", new Date(1985, 2, 5));
const cliente9 = new cliente_1.default("Cristiano Ronaldo dos Santos Aveiro", "CR7", cpf9, [rg9], [
    new telefone_1.default("12", "9987654327")
]);
const petCliente9_1 = new pet_1.default("Figo", "Mastim Tibetano", "Macho", "Cachorro");
cliente9.adicionarPet(petCliente9_1);
const petCliente9_2 = new pet_1.default("Kika", "Mastim Tibetano", "Femea", "Cachorro");
cliente9.adicionarPet(petCliente9_2);
const petCliente9_3 = new pet_1.default("Eusébio", "Mastim Tibetano", "Macho", "Cachorro");
cliente9.adicionarPet(petCliente9_3);
const rg10 = new rg_1.default("101010101", new Date(1992, 2, 5));
const cpf10 = new cpf_1.default("10101010101", new Date(1992, 2, 5));
const cliente10 = new cliente_1.default("Lionel Andrés Messi Cuccittini", "Messi", cpf10, [rg10], [
    new telefone_1.default("12", "9987654328")
]);
const petCliente10_1 = new pet_1.default("Hulk", "Pitbull", "Macho", "Cachorro");
cliente10.adicionarPet(petCliente10_1);
const rg11 = new rg_1.default("110110110", new Date(1987, 6, 27));
const cpf11 = new cpf_1.default("11011011011", new Date(1987, 6, 27));
const cliente11 = new cliente_1.default("Neymar da Silva Santos Júnior", "Neymar", cpf11, [rg11], [
    new telefone_1.default("12", "9987654329")
]);
const petCliente11_1 = new pet_1.default("K", "Border Collie", "Macho", "Cachorro");
cliente11.adicionarPet(petCliente11_1);
const petCliente11_2 = new pet_1.default("J", "Boder Collie", "Macho", "Cachorro");
cliente11.adicionarPet(petCliente11_2);
const rg12 = new rg_1.default("120120120", new Date(1987, 6, 27));
const cpf12 = new cpf_1.default("12012012012", new Date(1987, 6, 27));
const cliente12 = new cliente_1.default("Francisco Everardo Tiririca Oliveira Silva", "Tiririca", cpf12, [rg12], [
    new telefone_1.default("12", "9987654330")
]);
const petCliente12_1 = new pet_1.default("Caramelo", "Vira lata", "Macho", "Cachorro");
cliente12.adicionarPet(petCliente12_1);
const rg13 = new rg_1.default("524174346", new Date(2004, 8, 13));
const cpf13 = new cpf_1.default("52417434806", new Date(2004, 8, 13));
const cliente13 = new cliente_1.default("Pedro Henrique de Souza", "Pedryn", cpf13, [rg13], [
    new telefone_1.default("12", "988243129")
]);
const petCliente13_1 = new pet_1.default("Juli", "Vira lata", "Femea", "Gato");
cliente13.adicionarPet(petCliente13_1);
const petCliente13_2 = new pet_1.default("Mingau", "Vira lata", "Macho", "Gato");
cliente13.adicionarPet(petCliente13_2);
const rg14 = new rg_1.default("140140140", new Date(2006, 8, 26));
const cpf14 = new cpf_1.default("14014014014", new Date(2006, 8, 26));
const cliente14 = new cliente_1.default("Ana Clara Goulart de Oliveira", "Goulart", cpf14, [rg14], [
    new telefone_1.default("12", "996305436")
]);
const petCliente14_1 = new pet_1.default("Tuide", "Dachshund", "Femea", "Cachorro");
cliente14.adicionarPet(petCliente14_1);
const rg15 = new rg_1.default("150150150", new Date(2004, 9, 19));
const cpf15 = new cpf_1.default("15015015015", new Date(2004, 9, 19));
const cliente15 = new cliente_1.default("Leticia Helena de Oliveira Carvalho", "Cabeluda", cpf15, [rg15], [
    new telefone_1.default("12", "988457952")
]);
const petCliente15_1 = new pet_1.default("Nemo", "Peixe-Palhaço", "Macho", "Peixe");
cliente15.adicionarPet(petCliente15_1);
const rg16 = new rg_1.default("160160160", new Date(2005, 9, 27));
const cpf16 = new cpf_1.default("16016016016", new Date(2005, 9, 27));
const cliente16 = new cliente_1.default("Felipe Gabriel Vieira", "Felipão", cpf16, [rg16], [
    new telefone_1.default("12", "991059434")
]);
const petCliente16_1 = new pet_1.default("Alvin", "Peruano", "Macho", "Porquinho-da-india");
const petCliente16_2 = new pet_1.default("Bela", "Snow Shoe", "Femea", "Gato");
cliente16.adicionarPet(petCliente16_1);
cliente16.adicionarPet(petCliente16_2);
const rg17 = new rg_1.default("170170170", new Date(2005, 2, 12));
const cpf17 = new cpf_1.default("17017017017", new Date(2005, 2, 12));
const cliente17 = new cliente_1.default("Livia Alves de Faria", "Faria ou Fez", cpf17, [rg17], [
    new telefone_1.default("12", "982837386")
]);
const petCliente17_1 = new pet_1.default("Gordo", "Vira lata", "Macho", "Gato");
cliente17.adicionarPet(petCliente17_1);
const rg18 = new rg_1.default("180180180", new Date(2003, 11, 20));
const cpf18 = new cpf_1.default("18018018018", new Date(2003, 11, 20));
const cliente18 = new cliente_1.default("Laura Gabriel Gonçalves", "Laurinha", cpf18, [rg18], [
    new telefone_1.default("12", "997584865"),
]);
const petCliente18_1 = new pet_1.default("Gojo", "Dachshund", "Macho", "Cachorro");
cliente18.adicionarPet(petCliente18_1);
const rg19 = new rg_1.default("190190190", new Date(2003, 12, 12));
const cpf19 = new cpf_1.default("19019019019", new Date(2003, 12, 12));
const cliente19 = new cliente_1.default("Caio Rodrigues de Almeida", "Cainho", cpf19, [rg19], [
    new telefone_1.default("12", "991017404")
]);
const petCliente19_1 = new pet_1.default("Baiano", "Siames", "Macho", "Gato");
cliente19.adicionarPet(petCliente19_1);
const rg20_1 = new rg_1.default("202020278", new Date(2004, 11, 13));
const rg20_2 = new rg_1.default("202020202", new Date(2004, 11, 13));
const cpf20 = new cpf_1.default("20020020020", new Date(2004, 11, 13));
const cliente20 = new cliente_1.default("Luiz Felipe dos Santos", "Luizão", cpf20, [rg20_1, rg20_2], [
    new telefone_1.default("12", "997351963")
]);
const petCliente20_1 = new pet_1.default("Cleidi Lurdes", "Dachshund", "Femea", "Cachorro");
cliente20.adicionarPet(petCliente20_1);
listagemClientes.push(cliente1, cliente2, cliente3, cliente4, cliente5, cliente6, cliente7, cliente8, cliente9, cliente10, cliente11, cliente12, cliente13, cliente14, cliente15, cliente16, cliente17, cliente18, cliente19, cliente20);
exports.default = listagemClientes;
