/*unidad 2-modulo2*/
class Persona {
    nombre: string;
    edad: number;
    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(): void{
        console.log(` Hola Soy, ${this.nombre} y tengo ${this.edad} años`);
    }

    set_edad (age:number):void {
        this.edad = age;
        console.log(` Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }
}


const ana = new Persona("Ana",30); 
ana.saludar();

ana.set_edad(18);

