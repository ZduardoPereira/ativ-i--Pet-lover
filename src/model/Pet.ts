import Cliente from "./Cliente";

export default class Pet{
    
   private _nome: string;
   private _tipo: string;
   private _raca: string;
   private _genero: string;

   constructor(nome:string, tipo:string, raca:string, genero:string){
    this._nome = nome
    this._tipo = tipo
    this._raca = raca
    this._genero = genero
   }

   public get getNome(): string {
    return this._nome
   }

   public set setNome(nome:string){
    this._nome = nome
   }

   public get getTipo(): string {
    return this._tipo
   }

   public set setTipo(tipo:string){
    this._tipo = tipo
   }

   public get getRaca(): string{
    return this._raca
   }

   public set setRaca(raca:string){
    this._raca = raca
   }

   public get getGenero():string {
    return this._genero
   }

   public set setGenero(genero:string){
    this._genero = genero
   }
}
