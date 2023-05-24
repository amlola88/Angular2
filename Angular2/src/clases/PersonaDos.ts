export class PersonaDos{
    //creo elconstructor de una vez sin crear primero atributos y asi no tendria que llamar con this cada atributo.  Esta es otra sintásis que permite ahorrar código línea.
    public constructor(
        public nombre:string,
        public apellido:string,
        public edad?:number
    ){

    }

}