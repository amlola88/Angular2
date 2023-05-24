

// Creo la clase
export class Persona{
//creo los atributos
 public nombre:string
 public apellido:string
 public edad:number   

 //creo un constructor con una palabra reservada
 public constructor(nombre:string, apellido:string,edad:number ){
    this.nombre=nombre
    this.apellido=apellido
    this.edad=edad
 }
}

 //Si utilizo atributos opcionles no es necesario llamarlos en el constructor y se veria de la siguiente manera.
 /*export class Persona{
    //creo los atributos
     public nombre?:string
     public apellido?:string
     public edad:number   
    
     //creo un constructor con una palabra reservada
     public constructor(edad:number ){
        this.edad=edad*/